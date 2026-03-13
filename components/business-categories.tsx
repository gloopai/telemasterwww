import Image from "next/image";
import Link from "next/link";
import Logo01 from "@/public/images/logo-01.svg";
import Logo02 from "@/public/images/logo-02.svg";
import Logo03 from "@/public/images/logo-03.svg";
import Logo04 from "@/public/images/logo-04.svg";
import Logo05 from "@/public/images/logo-05.svg";
import Logo06 from "@/public/images/logo-06.svg";
import Logo07 from "@/public/images/logo-07.svg";
import Logo08 from "@/public/images/logo-08.svg";
import Logo09 from "@/public/images/logo-09.svg";

export default function BusinessCategories() {
  const aiModules = [
    {
      title: "AI 对话总结",
      desc: "自动提炼热点、未解决问题与待跟进事项，减少人工翻群记录。",
    },
    {
      title: "意图识别与分流",
      desc: "识别咨询、投诉、合作等意图，自动引导到表单/工单/人工支持。",
    },
    {
      title: "智能回复与话术",
      desc: "基于模板与知识库生成回复，保持口径一致并支持多语言（按可用性）。",
    },
    {
      title: "风险提示",
      desc: "对广告、钓鱼链接与敏感内容进行提示与拦截建议（按可用性）。",
    },
  ];

  const monetizationModel = [
    {
      title: "承接：把流量变成可运营的人",
      desc: "用清晰的入口与规则，把新成员稳定导入你的“转化路径”。",
      bullets: [
        "欢迎语与固定入口：权益说明、常见问题、下一步指引",
        "关键词触发：资料领取、课程报名、合作咨询等场景化引导",
        "意图识别分流：转到私聊、表单或人工支持（按可用性）",
      ],
    },
    {
      title: "转化：把兴趣变成订单",
      desc: "把“问来问去”变成“可复用的话术与流程”，减少漏单与跟进成本。",
      bullets: [
        "标准话术与套餐说明：保持口径一致，支持多语言（按可用性）",
        "分层权限与群规：维护高质量讨论环境，提升付费意愿",
        "引导到支付/下单页面：外部收款与跳转链接（按可用性）",
      ],
    },
    {
      title: "交付：把服务做成可复制",
      desc: "用自动化与内容排期支撑交付，让同样的人力服务更多成员。",
      bullets: [
        "频道排期与素材管理：课程/更新/活动节奏化输出",
        "智能回复覆盖高频问答：减少重复咨询，提高满意度",
        "反垃圾与风险策略：避免广告与钓鱼干扰交付体验",
      ],
    },
    {
      title: "复盘：把一次成交做成长期收入",
      desc: "用数据与总结抓住“下一次增长点”，持续提高转化率与留存。",
      bullets: [
        "统一看板与关键指标：增长、互动、触达与线索（按可用性）",
        "AI 总结热点与问题：定位需求变化与产品机会",
        "跟进清单与流程化执行：把经验变成团队标准作业",
      ],
    },
  ];

  const monetizationOptions = [
    "会员订阅/付费社群",
    "课程/训练营/资料包",
    "咨询/陪跑/服务交付",
    "赞助与品牌合作",
    "联盟/返佣分销",
    "线索获客与导流",
  ];

  const allianceRoles = [
    "流量方：群组/频道/媒体矩阵",
    "产品方：课程/工具/服务交付",
    "服务方：运营/增长/内容与客服",
  ];

  const alliancePillars = [
    {
      title: "供需撮合",
      desc: "把合适的变现产品匹配到合适的流量场景，让合作更可复制。",
      bullets: ["人群与场景标签化", "产品权益与素材包", "可控频率与触达策略"],
    },
    {
      title: "标准分发",
      desc: "用统一的话术、入口与流程承接流量，减少反复沟通与漏单。",
      bullets: ["关键词/欢迎语入口（按可用性）", "模板化活动与落地页", "分流到私聊/表单/工单"],
    },
    {
      title: "追踪归因",
      desc: "把转化路径数据化，明确来源与效果，帮助双方持续优化。",
      bullets: ["渠道与素材维度追踪（按可用性）", "关键指标看板（按可用性）", "复盘热点与问题（按可用性）"],
    },
    {
      title: "结算协作",
      desc: "用权限与记录保障合作过程透明可审计，支持规模化协作。",
      bullets: ["角色权限与最小授权", "操作记录与审计", "返佣/结算对账（按可用性）"],
    },
  ];

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              加入 AI 助理，让运营可编排
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              AI 负责理解与建议，系统负责执行与审计，让团队在规模化下依然稳定。
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative flex h-[324px] items-center justify-center">
            {/* Small blue dots */}
            <div className="absolute -z-10">
              <svg
                className="fill-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width={164}
                height={41}
                viewBox="0 0 164 41"
                fill="none"
              >
                <circle cx={1} cy={8} r={1} fillOpacity="0.24" />
                <circle cx={1} cy={1} r={1} fillOpacity="0.16" />
                <circle cx={1} cy={15} r={1} />
                <circle cx={1} cy={26} r={1} fillOpacity="0.64" />
                <circle cx={1} cy={33} r={1} fillOpacity="0.24" />
                <circle cx={8} cy={8} r={1} />
                <circle cx={8} cy={15} r={1} />
                <circle cx={8} cy={26} r={1} fillOpacity="0.24" />
                <circle cx={15} cy={15} r={1} fillOpacity="0.64" />
                <circle cx={15} cy={26} r={1} fillOpacity="0.16" />
                <circle cx={8} cy={33} r={1} />
                <circle cx={1} cy={40} r={1} />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 164 7)"
                  fillOpacity="0.24"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 164 0)"
                  fillOpacity="0.16"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 164 14)"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 164 25)"
                  fillOpacity="0.64"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 164 32)"
                  fillOpacity="0.24"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 157 7)"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 157 14)"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 157 25)"
                  fillOpacity="0.24"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 150 14)"
                  fillOpacity="0.64"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 150 25)"
                  fillOpacity="0.16"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 157 32)"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 164 39)"
                />
              </svg>
            </div>
            {/* Blue glow */}
            <div className="absolute -z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={432}
                height={160}
                viewBox="0 0 432 160"
                fill="none"
              >
                <g opacity="0.6" filter="url(#filter0_f_2044_9)">
                  <path
                    className="fill-blue-500"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M80 112C62.3269 112 48 97.6731 48 80C48 62.3269 62.3269 48 80 48C97.6731 48 171 62.3269 171 80C171 97.6731 97.6731 112 80 112ZM352 112C369.673 112 384 97.6731 384 80C384 62.3269 369.673 48 352 48C334.327 48 261 62.3269 261 80C261 97.6731 334.327 112 352 112Z"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_2044_9"
                    x={0}
                    y={0}
                    width={432}
                    height={160}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation={32}
                      result="effect1_foregroundBlur_2044_9"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            {/* Horizontal lines */}
            <div className="absolute inset-x-0 top-0 -z-10 h-px bg-linear-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply"></div>
            <div className="absolute inset-x-0 bottom-0 -z-10 h-px bg-linear-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply"></div>
            <div className="absolute inset-x-[200px] top-1/2 -z-10 h-px bg-linear-to-r from-transparent via-blue-500/60 to-transparent mix-blend-multiply"></div>
            <div className="absolute inset-x-0 top-1/2 -z-10 h-px -translate-y-[82px] bg-linear-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply before:absolute before:inset-y-0 before:w-24 before:animate-[line_10s_ease-in-out_infinite_both] before:bg-linear-to-r before:via-blue-500"></div>
            <div className="absolute inset-x-0 top-1/2 -z-10 h-px translate-y-[82px] bg-linear-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply before:absolute before:inset-y-0 before:w-24 before:animate-[line_10s_ease-in-out_infinite_5s_both] before:bg-linear-to-r before:via-blue-500"></div>
            {/* Diagonal lines */}
            <div className="absolute inset-x-[300px] top-1/2 -z-10 h-px rotate-[20deg] bg-linear-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply"></div>
            <div className="absolute inset-x-[300px] top-1/2 -z-10 h-px -rotate-[20deg] bg-linear-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply"></div>
            {/* Vertical lines */}
            <div className="absolute inset-y-0 left-1/2 -z-10 w-px -translate-x-[216px] bg-linear-to-b from-gray-200 to-transparent mix-blend-multiply"></div>
            <div className="absolute inset-y-0 left-1/2 -z-10 w-px translate-x-[216px] bg-linear-to-t from-gray-200 to-transparent mix-blend-multiply"></div>
            {/* Logos */}
            <div className="absolute before:absolute before:-inset-3 before:animate-[spin_3s_linear_infinite] before:rounded-full before:border before:border-transparent before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[background:conic-gradient(from_180deg,transparent,var(--color-blue-500))_border-box]">
              <div className="animate-[breath_8s_ease-in-out_infinite_both]">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                  <Image
                    className="relative"
                    src={Logo01}
                    width={32}
                    height={32}
                    alt="Logo 01"
                  />
                </div>
              </div>
            </div>

            <div className="relative flex flex-col">
              <article className="flex h-full w-full items-center justify-center focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-indigo-300">
                <div className="absolute -translate-x-[136px]">
                  <div className="animate-[breath_7s_ease-in-out_3s_infinite_both]">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <Image
                        className="relative"
                        src={Logo02}
                        width={23}
                        height={22}
                        alt="Logo 02"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute translate-x-[136px]">
                  <div className="animate-[breath_7s_ease-in-out_3.5s_infinite_both]">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <Image
                        className="relative"
                        src={Logo03}
                        width={22}
                        height={22}
                        alt="Logo 03"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute -translate-x-[216px] -translate-y-[82px]">
                  <div className="animate-[breath_6s_ease-in-out_3.5s_infinite_both]">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <Image
                        className="relative"
                        src={Logo04}
                        width={24}
                        height={22}
                        alt="Logo 04"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute -translate-y-[82px] translate-x-[216px]">
                  <div className="animate-[breath_6s_ease-in-out_1.5s_infinite_both]">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <Image
                        className="relative"
                        src={Logo05}
                        width={25}
                        height={25}
                        alt="Logo 05"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute translate-x-[216px] translate-y-[82px]">
                  <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <Image
                        className="relative"
                        src={Logo06}
                        width={20}
                        height={18}
                        alt="Logo 06"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute -translate-x-[216px] translate-y-[82px]">
                  <div className="animate-[breath_6s_ease-in-out_2.5s_infinite_both]">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <Image
                        className="relative"
                        src={Logo07}
                        width={25}
                        height={25}
                        alt="Logo 07"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute -translate-x-[292px] opacity-40">
                  <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200/60 bg-white shadow-lg">
                      <Image
                        className="relative"
                        src={Logo08}
                        width={20}
                        height={20}
                        alt="Logo 08"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute translate-x-[292px] opacity-40">
                  <div className="animate-[breath_6s_ease-in-out_4s_infinite_both]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200/60 bg-white shadow-lg">
                      <Image
                        className="relative"
                        src={Logo09}
                        width={21}
                        height={13}
                        alt="Logo 09"
                      />
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {aiModules.map((m) => (
                <div
                  key={m.title}
                  className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-blue-700">
                      <svg
                        width={18}
                        height={18}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          d="M8 1.5c-2.9 0-5.25 2.35-5.25 5.25S5.1 12 8 12s5.25-2.35 5.25-5.25S10.9 1.5 8 1.5Z"
                          fill="currentColor"
                          opacity="0.25"
                        />
                        <path
                          d="M8 4a1 1 0 0 1 1 1v.2a2 2 0 1 1-2 0V5a1 1 0 0 1 1-1Zm0 9.5c-1.37 0-2.6-.56-3.5-1.46a1 1 0 0 1 1.41-1.41c.54.54 1.29.88 2.09.88.8 0 1.55-.34 2.09-.88a1 1 0 0 1 1.41 1.41A4.97 4.97 0 0 1 8 13.5Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <div className="text-sm font-semibold text-gray-900">
                      {m.title}
                    </div>
                  </div>
                  <div className="mt-3 text-sm text-gray-700">{m.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 rounded-3xl bg-white p-8 ring-1 ring-gray-200">
            <div className="mx-auto max-w-3xl text-center">
              <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">
                社群变现：从运营到收入的闭环
              </h3>
              <p className="mt-3 text-base text-gray-700">
                Telemaster 把“承接-转化-交付-复盘”做成可执行的流程，帮助 Telegram
                社群运营者更稳定地获得收入与增长。
              </p>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {monetizationOptions.map((label) => (
                <span
                  key={label}
                  className="rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-gray-200"
                >
                  {label}
                </span>
              ))}
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {monetizationModel.map((s) => (
                <div
                  key={s.title}
                  className="rounded-2xl bg-gray-50 p-6 ring-1 ring-gray-200"
                >
                  <div className="text-sm font-semibold text-gray-900">
                    {s.title}
                  </div>
                  <div className="mt-2 text-sm text-gray-700">{s.desc}</div>
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

          <div className="mt-16 overflow-hidden rounded-3xl bg-gray-900 p-8 text-white ring-1 ring-gray-900/10">
            <div className="mx-auto max-w-3xl text-center">
              <h3 className="text-2xl font-bold md:text-3xl">
                Telegram 生态流量运营变现联盟
              </h3>
              <p className="mt-3 text-base text-white/80">
                Telemaster 在做一件更长期的事：连接流量与变现产品，让合作从“单次对接”
                变成“可复制的联盟协作”。
              </p>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {allianceRoles.map((label) => (
                <span
                  key={label}
                  className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90 ring-1 ring-white/10"
                >
                  {label}
                </span>
              ))}
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {alliancePillars.map((p) => (
                <div
                  key={p.title}
                  className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10"
                >
                  <div className="text-sm font-semibold text-white">
                    {p.title}
                  </div>
                  <div className="mt-2 text-sm text-white/80">{p.desc}</div>
                  <ul className="mt-4 space-y-2 text-sm text-white/80">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400/80"
                          aria-hidden="true"
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-linear-to-t from-blue-600 to-blue-500 px-5 py-3 text-sm font-medium text-white shadow-sm hover:from-blue-600 hover:to-blue-600"
              >
                加入联盟
              </Link>
              <Link
                href="/alliance"
                className="inline-flex items-center justify-center rounded-lg bg-white/10 px-5 py-3 text-sm font-medium text-white ring-1 ring-white/10 hover:bg-white/15"
              >
                了解联盟
              </Link>
              <Link
                href="/integrations"
                className="inline-flex items-center justify-center rounded-lg bg-white/10 px-5 py-3 text-sm font-medium text-white ring-1 ring-white/10 hover:bg-white/15"
              >
                查看集成能力
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
