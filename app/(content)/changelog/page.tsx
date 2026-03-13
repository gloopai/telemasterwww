import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "更新日志",
  description:
    "Telemaster 更新日志：新功能、改进与修复记录，方便团队了解版本变化与上线节奏。",
  alternates: { canonical: "/changelog" },
};

type Entry = {
  version: string;
  date: string;
  changes: string[];
};

const changelog: Entry[] = [
  {
    version: "v0.2.0",
    date: "2026-03-13",
    changes: [
      "新增 Tutorials 教学文章模块（Markdown 维护，静态化与 SEO 元信息）",
      "新增 Pricing 定价页面（免费版/高级版/商业版）",
      "新增 Features、Use Cases、Integrations、Changelog 等营销页面",
      "新增 sitemap.xml 与 robots.txt",
    ],
  },
  {
    version: "v0.1.0",
    date: "2026-03-01",
    changes: ["项目初始化与基础页面上线"],
  },
];

export default function ChangelogPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-28 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          更新日志
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          记录 Telemaster 的功能迭代与修复，方便你掌握上线节奏。
        </p>
      </div>

      <div className="mt-12 space-y-6">
        {changelog.map((e) => (
          <div key={e.version} className="rounded-3xl bg-white p-6 ring-1 ring-gray-200">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
              <div className="text-xl font-semibold text-gray-900">{e.version}</div>
              <div className="text-sm text-gray-500">{e.date}</div>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-gray-700">
              {e.changes.map((c) => (
                <li key={c} className="flex gap-3">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 fill-blue-500"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path d="M6.4 11.2 3.2 8l1.13-1.13L6.4 8.94l5.27-5.27L12.8 4.8 6.4 11.2Z" />
                  </svg>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-3xl bg-gray-900 px-6 py-10 text-white sm:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h3 className="text-2xl font-semibold">想了解具体用法？</h3>
            <p className="mt-2 text-white/80">教程会持续更新，覆盖运营最佳实践。</p>
          </div>
          <Link
            href="/tutorials"
            className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100"
          >
            查看教程
          </Link>
        </div>
      </div>
    </div>
  );
}
