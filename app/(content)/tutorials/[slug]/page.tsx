import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  formatTutorialDate,
  getTutorialBySlug,
  getTutorialSlugs,
} from "@/lib/tutorials";

export const dynamicParams = false;

function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL;
  const vercelUrl = process.env.VERCEL_URL;

  const raw =
    explicit ||
    (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production"
      ? vercelUrl
      : undefined) ||
    (process.env.NODE_ENV === "production" ? "https://telemaster.io" : undefined) ||
    vercelUrl ||
    "http://localhost:3000";

  if (raw.startsWith("http://") || raw.startsWith("https://")) return raw;
  return `https://${raw}`;
}

export async function generateStaticParams() {
  const slugs = await getTutorialSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  try {
    const tutorial = await getTutorialBySlug(slug);
    const siteUrl = getSiteUrl();
    const url = new URL(`/tutorials/${tutorial.slug}`, siteUrl).toString();

    return {
      title: `${tutorial.title} - Telemaster 教程`,
      description: tutorial.description,
      keywords: tutorial.keywords,
      alternates: { canonical: url },
      openGraph: {
        type: "article",
        title: tutorial.title,
        description: tutorial.description,
        url,
        images: tutorial.ogImage ? [{ url: tutorial.ogImage }] : undefined,
      },
    };
  } catch {
    return {
      title: "教程 - Telemaster",
      description: "Telemaster 教学文章。",
    };
  }
}

export default async function TutorialPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let tutorial: Awaited<ReturnType<typeof getTutorialBySlug>>;
  try {
    tutorial = await getTutorialBySlug(slug);
  } catch {
    notFound();
  }

  const siteUrl = getSiteUrl();
  const url = new URL(`/tutorials/${tutorial.slug}`, siteUrl).toString();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: tutorial.title,
    description: tutorial.description,
    datePublished: tutorial.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    author: {
      "@type": "Organization",
      name: "Telemaster",
    },
    publisher: {
      "@type": "Organization",
      name: "Telemaster",
    },
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-28 sm:px-6 sm:py-32">
      <div className="text-sm text-gray-500">
        <Link className="hover:underline" href="/tutorials">
          教学文章
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">{tutorial.title}</span>
      </div>

      <h1 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {tutorial.title}
      </h1>

      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-600">
        <span>{formatTutorialDate(tutorial.date)}</span>
        {tutorial.tags && tutorial.tags.length ? (
          <span className="flex flex-wrap gap-2">
            {tutorial.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700"
              >
                {tag}
              </span>
            ))}
          </span>
        ) : null}
      </div>

      {tutorial.description ? (
        <p className="mt-6 text-base text-gray-700">{tutorial.description}</p>
      ) : null}

      <div
        className="markdown mt-10"
        dangerouslySetInnerHTML={{ __html: tutorial.html }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
