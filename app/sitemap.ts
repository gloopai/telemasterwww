import type { MetadataRoute } from "next";

import { getAllTutorials } from "@/lib/tutorials";

function getSiteUrl(): string {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    process.env.VERCEL_URL;
  if (!raw) return "http://localhost:3000";
  if (raw.startsWith("http://") || raw.startsWith("https://")) return raw;
  return `https://${raw}`;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = getSiteUrl();
  const tutorials = await getAllTutorials();

  const routes: MetadataRoute.Sitemap = [
    {
      url: new URL("/", siteUrl).toString(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: new URL("/faq", siteUrl).toString(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: new URL("/tutorials", siteUrl).toString(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...tutorials.map((t) => ({
      url: new URL(`/tutorials/${t.slug}`, siteUrl).toString(),
      lastModified: t.date,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  return routes;
}
