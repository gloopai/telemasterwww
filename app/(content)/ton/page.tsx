import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TON",
  description:
    "了解 TON 区块链与 Telegram 生态。Telemaster 基于 TON 的支付、会员、激励与归因等能力（按可用性），用于把流量运营与变现流程化。",
  alternates: { canonical: "/ton" },
};

type Card = {
  title: string;
  description: string;
  bullets: string[];
};

const tonHighlights = [
  {
    title: "面向 Telegram 生态",
    description: "适配社群与内容分发场景，让链上能力更容易触达用户。",
    bullets: ["钱包与支付入口更自然", "适合微支付与订阅", "支持可编程资产与权益"],
  },
  {
    title: "低门槛的链上交互",
    description: "把“支付、凭证、奖励”变成可验证的动作，减少信任摩擦。",
    bullets: ["交易与凭证可验证", "支持自动化结算逻辑", "更适合联盟协作与返佣"],
  },
  {
    title: "增长与激励友好",
    description: "用代币/NFT/积分等机制，构建可持续的增长循环。",
    bullets: ["任务激励与活动运营", "会员权益与分层", "社群贡献可量化（按可用性）"],
  },
];

const telemasterOnTon: Card[] = [
  {
    title: "TON 支付与收款入口（按可用性）",
    description: "把付费动作嵌入到 Telegram 的运营流程里，让转化更顺滑。",
    bullets: ["付费链接/订单入口的标准承接", "支付后自动发放权益与引导", "对账与结算流程化（按可用性）"],
  },
  {
    title: "Token/NFT 门槛与会员体系（按可用性）",
    description: "用链上资产做“可验证的会员资格”，支持分层权益。",
    bullets: ["Token-gated / NFT pass 的权限门槛", "不同等级对应不同内容与服务", "可与群规/欢迎语/入口联动（按可用性）"],
  },
  {
    title: "任务激励与增长活动（按可用性）",
    description: "把拉新、活跃与贡献做成任务，形成可持续的增长机制。",
    bullets: ["活动节奏与内容排期", "任务完成后发放奖励与凭证", "AI 总结与复盘辅助优化（按可用性）"],
  },
  {
    title: "联盟归因与返佣协作（按可用性）",
    description: "连接流量与变现产品，让合作可追踪、可结算、可复盘。",
    bullets: ["渠道/素材/入口维度追踪（按可用性）", "返佣与分润对账（按可用性）", "权限与记录保障协作安全"],
  },
  {
    title: "链上凭证与权益交付（按可用性）",
    description: "把“购买/参与”的结果固化为凭证，便于交付与二次转化。",
    bullets: ["权益发放与兑换入口", "黑名单与风险策略联动（按可用性）", "交付标准化降低人工成本"],
  },
  {
    title: "风控与体验控制",
    description: "把可持续增长建立在秩序与体验之上。",
    bullets: ["反垃圾与规则体系降低干扰", "频率与范围可控，避免“伤害社群”", "关键操作可追溯，便于审计"],
  },
];

const scenarios = [
  {
    title: "付费社群 / 会员订阅",
    bullets: [
      "用 TON 支付作为统一入口（按可用性）",
      "支付后自动引导与发放权益（按可用性）",
      "用群规与反垃圾保障体验与留存",
    ],
  },
  {
    title: "课程/训练营/资料包",
    bullets: [
      "频道排期与节奏化交付",
      "智能回复覆盖高频问答",
      "用链上凭证管理权益（按可用性）",
    ],
  },
  {
    title: "增长活动与任务激励",
    bullets: [
      "活动入口标准化，减少漏斗损耗",
      "任务完成后奖励发放（按可用性）",
      "看板复盘提升 ROI（按可用性）",
    ],
  },
  {
    title: "生态联营与返佣分销",
    bullets: [
      "联盟撮合：把产品匹配到合适人群",
      "渠道归因与结算对账（按可用性）",
      "把成功方法沉淀为 SOP",
    ],
  },
];

const faqs = [
  {
    q: "TON 能解决什么问题？",
    a: "在 Telegram 场景里，TON 更像是“可信的支付与权益层”：把交易、凭证、奖励变成可验证的动作，降低信任摩擦并支持规模化协作。",
  },
  {
    q: "Telemaster 是否已经提供所有 TON 能力？",
    a: "页面描述的是 Telemaster 规划与可扩展方向，具体能力以产品实际可用性为准；你可以联系我们说明你的场景，我们会给出更匹配的方案建议。",
  },
  {
    q: "如何避免链上玩法影响社群体验？",
    a: "更推荐把链上动作放在“入口承接与权益发放”层面，并用频率控制、规则治理与反垃圾策略保障社群体验。",
  },
];

export default function TonPage() {
  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-linear-to-tr from-blue-500/20 via-blue-500/10 to-transparent blur-[120px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-4 py-28 sm:px-6 sm:py-32">
        <div className="text-sm text-gray-500">
          <Link className="hover:underline" href="/">
            首页
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">TON</span>
        </div>

        <div className="mt-5 mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            TON 区块链与 Telegram 生态
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            把支付、会员与激励做成“可验证的运营动作”，让 Telegram 的流量运营与变现更可复制。
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-linear-to-t from-blue-600 to-blue-500 px-5 py-3 text-sm font-medium text-white shadow-sm hover:from-blue-600 hover:to-blue-600"
            >
              咨询 TON 方案
            </Link>
            <Link
              href="/alliance"
              className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-medium text-gray-900 ring-1 ring-gray-200 hover:bg-gray-50"
            >
              查看联盟
            </Link>
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {tonHighlights.map((h) => (
            <div key={h.title} className="rounded-3xl bg-white p-6 ring-1 ring-gray-200">
              <div className="text-sm font-semibold text-gray-900">{h.title}</div>
              <div className="mt-2 text-sm text-gray-700">{h.description}</div>
              <ul className="mt-5 space-y-3 text-sm text-gray-700">
                {h.bullets.map((b) => (
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
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-white p-8 ring-1 ring-gray-200">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-sm font-semibold text-gray-900">
              Telemaster 基于 TON 的能力
            </div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
              把链上能力接入运营系统
            </h2>
            <p className="mt-3 text-base text-gray-700">
              从入口承接到归因复盘，把“流量-转化-交付-结算”做成闭环（按可用性）。
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {telemasterOnTon.map((c) => (
              <div key={c.title} className="rounded-2xl bg-gray-50 p-6 ring-1 ring-gray-200">
                <div className="text-sm font-semibold text-gray-900">{c.title}</div>
                <div className="mt-2 text-sm text-gray-700">{c.description}</div>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  {c.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600/70"
                        aria-hidden="true"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-3xl bg-white p-8 ring-1 ring-gray-200">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-sm font-semibold text-gray-900">典型玩法</div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
              用 TON 把“变现动作”产品化
            </h2>
            <p className="mt-3 text-base text-gray-700">
              不追求复杂链上叙事，先把最关键的入口与权益做顺，再用数据持续优化。
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {scenarios.map((s) => (
              <div key={s.title} className="rounded-2xl bg-gray-50 p-6 ring-1 ring-gray-200">
                <div className="text-sm font-semibold text-gray-900">{s.title}</div>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600/70"
                        aria-hidden="true"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-3xl bg-gray-900 p-8 text-white ring-1 ring-gray-900/10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-sm font-semibold text-white/90">常见问题</div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              TON 与运营落地
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                <div className="text-sm font-semibold text-white">{f.q}</div>
                <div className="mt-2 text-sm text-white/80">{f.a}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-linear-to-t from-blue-600 to-blue-500 px-5 py-3 text-sm font-medium text-white shadow-sm hover:from-blue-600 hover:to-blue-600"
            >
              预约沟通
            </Link>
            <Link
              href="/features"
              className="inline-flex items-center justify-center rounded-lg bg-white/10 px-5 py-3 text-sm font-medium text-white ring-1 ring-white/10 hover:bg-white/15"
            >
              查看功能总览
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

