import { getAllTutorials } from "../utils/tutorials";
import { getSiteUrl } from "../utils/siteUrl";

type Entry = {
  loc: string;
  changefreq: string;
  priority: string;
  lastmod?: string;
};

function xmlEscape(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export default defineEventHandler(async (event) => {
  const siteUrl = getSiteUrl();
  const tutorials = await getAllTutorials();

  const staticEntries: Entry[] = [
    { loc: "/", changefreq: "weekly", priority: "1" },
    { loc: "/pricing", changefreq: "weekly", priority: "0.9" },
    { loc: "/features", changefreq: "monthly", priority: "0.8" },
    { loc: "/use-cases", changefreq: "monthly", priority: "0.8" },
    { loc: "/integrations", changefreq: "monthly", priority: "0.7" },
    { loc: "/alliance", changefreq: "monthly", priority: "0.75" },
    { loc: "/ton", changefreq: "monthly", priority: "0.75" },
    { loc: "/mini-apps", changefreq: "monthly", priority: "0.75" },
    { loc: "/mini-games", changefreq: "monthly", priority: "0.75" },
    { loc: "/changelog", changefreq: "monthly", priority: "0.6" },
    { loc: "/about", changefreq: "monthly", priority: "0.6" },
    { loc: "/contact", changefreq: "monthly", priority: "0.5" },
    { loc: "/terms", changefreq: "yearly", priority: "0.3" },
    { loc: "/privacy", changefreq: "yearly", priority: "0.3" },
    { loc: "/faq", changefreq: "monthly", priority: "0.6" },
    { loc: "/tutorials", changefreq: "weekly", priority: "0.8" },
  ];

  const tutorialEntries: Entry[] = tutorials.map((t) => ({
    loc: `/tutorials/${t.slug}`,
    changefreq: "monthly",
    priority: "0.7",
    lastmod: t.date,
  }));

  const base = [...staticEntries, ...tutorialEntries];
  const prefixes = ["zh", "ja", "ko"] as const;
  const prefixed = prefixes.flatMap((prefix) => [
    ...staticEntries.map((e) => ({
      ...e,
      loc: e.loc === "/" ? `/${prefix}` : `/${prefix}${e.loc}`,
    })),
    ...tutorialEntries.map((e) => ({
      ...e,
      loc: `/${prefix}${e.loc}`,
    })),
  ]);
  const all = [...base, ...prefixed];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${all
  .map((e) => {
    const abs = new URL(e.loc, siteUrl).toString();
    const lastmod =
      e.lastmod != null
        ? `\n<lastmod>${xmlEscape(e.lastmod)}</lastmod>`
        : "";
    return `<url>
<loc>${xmlEscape(abs)}</loc>${lastmod}
<changefreq>${e.changefreq}</changefreq>
<priority>${e.priority}</priority>
</url>`;
  })
  .join("\n")}
</urlset>`;

  setHeader(event, "content-type", "application/xml; charset=utf-8");
  return body;
});
