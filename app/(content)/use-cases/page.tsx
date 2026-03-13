import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "使用场景",
  description:
    "Telemaster 使用场景：群组治理、频道运营、客服支持、社区增长与内容分发。为你的 Telegram 运营选择更匹配的工作流。",
  alternates: { canonical: "/use-cases" },
};

type UseCase = {
  title: string;
  description: string;
  bullets: string[];
  links: { label: string; href: string }[];
};

const cases: UseCase[] = [
  {
    title: "社群治理（群组）",
    description: "建立秩序、提升信噪比，降低管理员的人力成本。",
    bullets: [
      "入群验证 + 限速，减少机器人与刷屏",
      "关键词自动回复，统一规则提醒与 FAQ",
      "权限分层与操作记录，保障协作安全",
    ],
    links: [
      { label: "群组管理入门教程", href: "/tutorials/telegram-group-management-basics" },
      { label: "查看定价", href: "/pricing" },
    ],
  },
  {
    title: "内容运营（频道）",
    description: "用排期与定时发布保持节奏，把频道做成可持续的内容系统。",
    bullets: [
      "定时发布与排期，避免临时抱佛脚",
      "复盘指标与内容结构，持续优化增长",
      "公告与更新同步，减少重复沟通",
    ],
    links: [
      { label: "频道定时发布教程", href: "/tutorials/telegram-channel-scheduling" },
      { label: "功能总览", href: "/features" },
    ],
  },
  {
    title: "客服与支持（高频问题）",
    description: "把高频、标准化问题自动化，把复杂问题留给人工。",
    bullets: [
      "关键词自动回复覆盖常见问题与入口指引",
      "分流到工单/表单/专属群（按可用性）",
      "统一模板，减少来回追问",
    ],
    links: [
      { label: "关键词自动回复教程", href: "/tutorials/telegram-auto-reply-keywords" },
      { label: "联系我们", href: "/contact" },
    ],
  },
];

export default function UseCasesPage() {
  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-linear-to-tr from-blue-500/20 via-blue-500/10 to-transparent blur-[120px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-4 py-28 sm:px-6 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            使用场景
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            不同团队的运营目标不同。选择更匹配的工作流，能更快获得效果。
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {cases.map((c) => (
            <div key={c.title} className="rounded-3xl bg-white p-6 ring-1 ring-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">{c.title}</h2>
              <p className="mt-2 text-sm text-gray-600">{c.description}</p>
              <ul className="mt-6 space-y-3 text-sm text-gray-700">
                {c.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 fill-blue-500"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path d="M6.4 11.2 3.2 8l1.13-1.13L6.4 8.94l5.27-5.27L12.8 4.8 6.4 11.2Z" />
                    </svg>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                {c.links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-white p-8 ring-1 ring-gray-200">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <div className="text-sm font-semibold text-gray-900">快速开始</div>
              <div className="mt-2 text-sm text-gray-700">
                先从免费版体验核心功能，再根据团队规模升级高级版或商业版。
              </div>
            </div>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-lg bg-linear-to-t from-blue-600 to-blue-500 px-5 py-3 text-sm font-medium text-white shadow-sm hover:from-blue-600 hover:to-blue-600"
            >
              查看定价
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
