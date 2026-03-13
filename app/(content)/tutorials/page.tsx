import type { Metadata } from "next";
import Link from "next/link";

import { formatTutorialDate, getAllTutorials } from "@/lib/tutorials";

export const metadata: Metadata = {
  title: "教程",
  description:
    "Telemaster 教学文章与最佳实践，覆盖 Telegram 群组、频道与机器人运营。",
  alternates: { canonical: "/tutorials" },
};

export default async function TutorialsIndexPage() {
  const tutorials = await getAllTutorials();

  return (
    <div className="mx-auto max-w-4xl px-4 py-28 sm:px-6 sm:py-32">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        教学文章
      </h1>
      <p className="mt-3 text-base text-gray-700">
        面向搜索引擎与用户的高质量教程内容，帮助你更高效地使用 Telemaster 管理
        Telegram。
      </p>

      <div className="mt-10">
        {tutorials.length === 0 ? (
          <p className="text-gray-600">暂无文章。</p>
        ) : (
          <ul className="space-y-6">
            {tutorials.map((t) => (
              <li key={t.slug} className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">
                    <Link
                      className="hover:underline"
                      href={`/tutorials/${t.slug}`}
                    >
                      {t.title}
                    </Link>
                  </h2>
                  <div className="text-sm text-gray-500">
                    {formatTutorialDate(t.date)}
                  </div>
                </div>
                {t.description ? (
                  <p className="mt-3 text-gray-700">{t.description}</p>
                ) : null}
                {t.tags && t.tags.length ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {t.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
