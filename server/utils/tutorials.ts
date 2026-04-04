import fs from "node:fs/promises";
import path from "node:path";

import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

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
  const entries = await fs.readdir(tutorialsDir, { withFileTypes: true });
  return entries
    .filter((e) => e.isFile() && e.name.endsWith(".md"))
    .map((e) => e.name.replace(/\.md$/, ""));
}

export async function getAllTutorials(): Promise<Tutorial[]> {
  const slugs = await getTutorialSlugs();
  const tutorials = await Promise.all(
    slugs.map(async (slug) => {
      const filePath = path.join(tutorialsDir, `${slug}.md`);
      const raw = await fs.readFile(filePath, "utf8");
      const { data } = matter(raw);
      return { slug, ...normalizeFrontMatter(data as Record<string, unknown>, slug) };
    }),
  );

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
  const filePath = path.join(tutorialsDir, `${slug}.md`);
  const raw = await fs.readFile(filePath, "utf8");
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
