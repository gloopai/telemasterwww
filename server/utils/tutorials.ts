import fs from "node:fs/promises";
import path from "node:path";

import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
import { useStorage } from "nitropack/runtime";

export type TutorialFrontMatter = {
  title: string;
  description: string;
  date: string;
  tags?: string[];
  keywords?: string[];
  ogImage?: string;
};

export type Tutorial = TutorialFrontMatter & {
  slug: string;
};

export type TutorialWithContent = Tutorial & {
  content: string;
  html: string;
};

const tutorialsDir = path.join(process.cwd(), "content", "tutorials");

let cachedRawBySlug: Record<string, string> | null = null;

/** Vercel serverless has no repo `content/` on disk — use Nitro serverAssets + useStorage. */
async function loadRawBySlugFromStorage(): Promise<Record<string, string>> {
  const storage = useStorage("assets:tutorials-md");
  const keys = await storage.getKeys();
  const out: Record<string, string> = {};
  for (const key of keys) {
    if (!key.endsWith(".md")) continue;
    const raw = await storage.getItem(key);
    if (typeof raw !== "string") continue;
    const slug = key.replace(/\.md$/i, "");
    out[slug] = raw;
  }
  return out;
}

async function loadRawBySlug(): Promise<Record<string, string>> {
  if (cachedRawBySlug) return cachedRawBySlug;

  try {
    const entries = await fs.readdir(tutorialsDir, { withFileTypes: true });
    const out: Record<string, string> = {};
    for (const e of entries) {
      if (!e.isFile() || !e.name.endsWith(".md")) continue;
      const slug = e.name.replace(/\.md$/i, "");
      out[slug] = await fs.readFile(
        path.join(tutorialsDir, e.name),
        "utf8",
      );
    }
    if (Object.keys(out).length > 0) {
      cachedRawBySlug = out;
      return out;
    }
  } catch {
    /* fall through to serverAssets */
  }

  const fromStorage = await loadRawBySlugFromStorage();
  cachedRawBySlug = fromStorage;
  return fromStorage;
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function normalizeFrontMatter(
  data: Record<string, unknown>,
  slug: string,
): TutorialFrontMatter {
  const title = isNonEmptyString(data.title) ? data.title : slug;
  const description = isNonEmptyString(data.description) ? data.description : "";
  const date = isNonEmptyString(data.date)
    ? data.date
    : new Date().toISOString().slice(0, 10);
  const tags = Array.isArray(data.tags)
    ? data.tags.filter(isNonEmptyString)
    : undefined;
  const keywords = Array.isArray(data.keywords)
    ? data.keywords.filter(isNonEmptyString)
    : undefined;
  const ogImage = isNonEmptyString(data.ogImage) ? data.ogImage : undefined;

  return { title, description, date, tags, keywords, ogImage };
}

export async function getTutorialSlugs(): Promise<string[]> {
  const rawBySlug = await loadRawBySlug();
  return Object.keys(rawBySlug).sort();
}

export async function getAllTutorials(): Promise<Tutorial[]> {
  const rawBySlug = await loadRawBySlug();
  const tutorials = Object.keys(rawBySlug).map((slug) => {
    const raw = rawBySlug[slug]!;
    const { data } = matter(raw);
    return { slug, ...normalizeFrontMatter(data as Record<string, unknown>, slug) };
  });

  return tutorials.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(remarkHtml).process(markdown);
  return String(result);
}

export async function getTutorialBySlug(
  slug: string,
): Promise<TutorialWithContent> {
  const rawBySlug = await loadRawBySlug();
  const raw = rawBySlug[slug];
  if (raw == null) {
    throw createError({ statusCode: 404, statusMessage: "Not found" });
  }
  const { content, data } = matter(raw);
  const frontMatter = normalizeFrontMatter(data as Record<string, unknown>, slug);
  const html = await markdownToHtml(content);
  return { slug, ...frontMatter, content, html };
}

export function formatTutorialDate(isoDate: string): string {
  const d = new Date(isoDate);
  if (Number.isNaN(d.getTime())) return isoDate;
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(d);
}
