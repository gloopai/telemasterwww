<template>
  <div class="relative">
    <div
      class="pointer-events-none absolute left-1/2 top-0 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-linear-to-tr from-blue-500/20 via-blue-500/10 to-transparent blur-[120px]"
      aria-hidden="true"
    />

    <div class="mx-auto max-w-6xl px-4 py-28 sm:px-6 sm:py-32">
      <div class="text-sm text-gray-500">
        <NuxtLink class="hover:underline" to="/"> 首页 </NuxtLink>
        <span class="mx-2">/</span>
        <span class="text-gray-700">联盟</span>
      </div>

      <div class="mx-auto mt-5 max-w-3xl text-center">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Telegram 生态流量运营变现联盟
        </h1>
        <p class="mt-4 text-lg text-gray-700">
          连接流量与变现产品，把撮合、分发、归因与协作做成流程，让合作更稳定、更可复制。
        </p>
        <div class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center justify-center rounded-lg bg-linear-to-t from-blue-600 to-blue-500 px-5 py-3 text-sm font-medium text-white shadow-sm hover:from-blue-600 hover:to-blue-600"
          >
            申请加入
          </NuxtLink>
          <NuxtLink
            to="/integrations"
            class="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-medium text-gray-900 ring-1 ring-gray-200 hover:bg-gray-50"
          >
            查看集成能力
          </NuxtLink>
        </div>
      </div>

      <div class="mt-14 grid gap-6 lg:grid-cols-3">
        <div
          v-for="r in roles"
          :key="r.title"
          class="rounded-3xl bg-white p-6 ring-1 ring-gray-200"
        >
          <div class="text-sm font-semibold text-gray-900">{{ r.title }}</div>
          <div class="mt-2 text-sm text-gray-700">{{ r.desc }}</div>
          <ul class="mt-5 space-y-3 text-sm text-gray-700">
            <li v-for="b in r.bullets" :key="b" class="flex gap-3">
              <svg
                class="mt-0.5 h-4 w-4 shrink-0 fill-blue-500"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M6.4 11.2 3.2 8l1.13-1.13L6.4 8.94l5.27-5.27L12.8 4.8 6.4 11.2Z" />
              </svg>
              <span>{{ b }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-16 rounded-3xl bg-white p-8 ring-1 ring-gray-200">
        <div class="mx-auto max-w-3xl text-center">
          <div class="text-sm font-semibold text-gray-900">运作模式</div>
          <h2 class="mt-2 text-3xl font-bold tracking-tight text-gray-900">
            从供需撮合到结算复盘的闭环
          </h2>
          <p class="mt-3 text-base text-gray-700">
            联盟不是简单“挂链接”。我们把“怎么做有效、怎么做不伤体验、怎么做可持续”沉淀成标准流程。
          </p>
        </div>

        <div class="mt-10 grid gap-6 lg:grid-cols-2">
          <div
            v-for="s in steps"
            :key="s.title"
            class="rounded-2xl bg-gray-50 p-6 ring-1 ring-gray-200"
          >
            <div class="text-sm font-semibold text-gray-900">{{ s.title }}</div>
            <div class="mt-2 text-sm text-gray-700">{{ s.desc }}</div>
            <ul class="mt-4 space-y-2 text-sm text-gray-700">
              <li v-for="b in s.bullets" :key="b" class="flex gap-2">
                <span
                  class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600/70"
                  aria-hidden="true"
                />
                <span>{{ b }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mt-16 grid gap-6 lg:grid-cols-3">
        <div
          v-for="b in whatYouGet"
          :key="b.title"
          class="rounded-3xl bg-white p-6 ring-1 ring-gray-200"
        >
          <div class="text-sm font-semibold text-gray-900">{{ b.title }}</div>
          <div class="mt-2 text-sm text-gray-700">{{ b.desc }}</div>
          <ul class="mt-5 space-y-3 text-sm text-gray-700">
            <li v-for="i in b.bullets" :key="i" class="flex gap-3">
              <svg
                class="mt-0.5 h-4 w-4 shrink-0 fill-blue-500"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M6.4 11.2 3.2 8l1.13-1.13L6.4 8.94l5.27-5.27L12.8 4.8 6.4 11.2Z" />
              </svg>
              <span>{{ i }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-16 rounded-3xl bg-gray-900 p-8 text-white ring-1 ring-gray-900/10">
        <div class="mx-auto max-w-3xl text-center">
          <div class="text-sm font-semibold text-white/90">合作原则</div>
          <h2 class="mt-2 text-3xl font-bold tracking-tight">可持续、可审计、体验优先</h2>
        </div>

        <div class="mt-10 grid gap-6 lg:grid-cols-2">
          <div
            v-for="p in principles"
            :key="p.q"
            class="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10"
          >
            <div class="text-sm font-semibold text-white">{{ p.q }}</div>
            <div class="mt-2 text-sm text-white/80">{{ p.a }}</div>
          </div>
        </div>
      </div>

      <div class="mt-16 rounded-3xl bg-white p-8 ring-1 ring-gray-200">
        <div class="mx-auto max-w-3xl text-center">
          <div class="text-sm font-semibold text-gray-900">常见问题</div>
          <h2 class="mt-2 text-3xl font-bold tracking-tight text-gray-900">
            你可能关心的几个点
          </h2>
        </div>

        <div class="mt-10 grid gap-6 lg:grid-cols-2">
          <div
            v-for="f in faq"
            :key="f.q"
            class="rounded-2xl bg-gray-50 p-6 ring-1 ring-gray-200"
          >
            <div class="text-sm font-semibold text-gray-900">{{ f.q }}</div>
            <div class="mt-2 text-sm text-gray-700">{{ f.a }}</div>
          </div>
        </div>
      </div>

      <div class="mt-16 rounded-3xl bg-white p-8 ring-1 ring-gray-200">
        <div class="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div class="text-sm font-semibold text-gray-900">下一步</div>
            <div class="mt-2 text-sm text-gray-700">
              提交你的流量/产品/服务信息，我们会给出匹配建议与合作路径。
            </div>
          </div>
          <div class="flex flex-wrap gap-3">
            <NuxtLink
              to="/contact"
              class="inline-flex items-center justify-center rounded-lg bg-linear-to-t from-blue-600 to-blue-500 px-5 py-3 text-sm font-medium text-white shadow-sm hover:from-blue-600 hover:to-blue-600"
            >
              申请加入
            </NuxtLink>
            <NuxtLink
              to="/pricing"
              class="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-medium text-gray-900 ring-1 ring-gray-200 hover:bg-gray-50"
            >
              查看定价
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type Step = { title: string; desc: string; bullets: string[] };
type Block = { title: string; desc: string; bullets: string[] };

const roles = [
  {
    title: "流量方",
    desc: "群组、频道、媒体矩阵与社区负责人。",
    bullets: [
      "提高每一次触达的转化效率",
      "控制频率与体验，避免伤害社群",
      '让合作从“临时对接”变成“长期收益”',
    ],
  },
  {
    title: "产品方",
    desc: "课程、工具、订阅、服务交付与各类可变现产品。",
    bullets: [
      "找到更匹配的人群与场景",
      "用标准化素材与入口规模化分发",
      "数据复盘持续迭代产品与话术",
    ],
  },
  {
    title: "服务方",
    desc: "运营、增长、内容、客服与交付团队。",
    bullets: ["把交付做成流程与模板", "用自动化降低成本并提升体验", "协同多方，减少重复沟通"],
  },
];

const steps: Step[] = [
  {
    title: "入驻与画像",
    desc: "把流量与产品信息结构化，建立可匹配的基础数据。",
    bullets: [
      "流量方：人群标签、规则与内容形态",
      "产品方：权益结构、定价与转化路径",
      "服务方：交付能力与响应标准（按可用性）",
    ],
  },
  {
    title: "供需撮合",
    desc: "按人群与场景匹配产品，并给出可执行的投放/合作方案。",
    bullets: [
      "场景化推荐：新人引导、活动、资料领取等",
      "素材包与话术模板统一口径",
      "触达策略：频率、范围与节奏可控",
    ],
  },
  {
    title: "标准分发",
    desc: "用统一入口承接流量，减少漏单与重复沟通。",
    bullets: [
      "欢迎语/关键词入口（按可用性）",
      "落地页/表单/私聊分流（按可用性）",
      "自动回复与引导降低咨询成本",
    ],
  },
  {
    title: "追踪归因",
    desc: "把“来源-行为-转化”串起来，让合作效果可衡量。",
    bullets: [
      "渠道与素材维度追踪（按可用性）",
      "关键指标看板：触达、线索、转化（按可用性）",
      "AI 总结热点与问题辅助复盘（按可用性）",
    ],
  },
  {
    title: "结算与复盘",
    desc: "对账透明、协作可审计，把单次合作变成长期增长。",
    bullets: [
      "返佣与结算对账（按可用性）",
      "角色权限与操作记录保障协作安全",
      "复盘沉淀为模板与 SOP，提高复用率",
    ],
  },
];

const whatYouGet: Block[] = [
  {
    title: "对流量方",
    desc: "更稳的变现方式，不以牺牲体验为代价。",
    bullets: ["更匹配的产品与合作方", "更低的转化承接成本", "更清晰的效果与收益预期（按可用性）"],
  },
  {
    title: "对产品方",
    desc: "更可控的分发与更可复盘的增长。",
    bullets: [
      "更高质量的流量来源",
      "标准化素材 + 入口规模化投放",
      "数据反馈驱动产品与话术迭代（按可用性）",
    ],
  },
  {
    title: "对服务方",
    desc: "更高效率的协同与交付，把经验变成能力资产。",
    bullets: ["交付流程化与权限协作", "自动化覆盖高频咨询与支持", "更少的人力支持更多项目"],
  },
];

const principles = [
  {
    q: "体验优先",
    a: "联盟的默认策略是尊重社群体验：频率可控、内容可审核、渠道可退出。",
  },
  {
    q: "合规与安全",
    a: "遵守平台规则与当地法规；通过权限、记录与风险策略降低误操作与滥用风险。",
  },
  {
    q: "透明协作",
    a: "合作过程可追踪、可复盘；对账与结算尽量标准化与可审计（按可用性）。",
  },
  {
    q: "可复制增长",
    a: "把有效的方法沉淀为模板与 SOP，让一次成功可以复用到更多场景。",
  },
];

const faq = [
  {
    q: "联盟适合什么阶段的团队？",
    a: "既适合已有稳定流量的社群/频道，也适合正在找渠道的产品方；关键是愿意把合作流程化并持续复盘。",
  },
  {
    q: "Telemaster 会代收款或代结算吗？",
    a: "默认不做强绑定收款。联盟更关注“撮合 + 分发 + 追踪 + 协作”。涉及结算对账的能力以可用性与具体合作为准。",
  },
  {
    q: "如何避免影响社群体验？",
    a: "通过频率控制、入口承接、素材规范与反垃圾策略减少干扰；更推荐用新人引导/资料领取/活动报名等场景化方式承接转化。",
  },
  {
    q: "如何加入联盟？",
    a: "通过“联系我们”提交你的流量/产品/服务信息，我们会给出匹配建议与合作路径。",
  },
];

const siteUrl = useSiteUrl();
useSeoMeta({
  title: "联盟",
  description:
    "Telemaster Telegram 生态流量运营变现联盟：连接流量方与变现产品，把供需撮合、标准分发、归因追踪与结算协作流程化。",
  ogTitle: "Telemaster - 联盟",
  ogDescription:
    "Telemaster Telegram 生态流量运营变现联盟：连接流量方与变现产品，把供需撮合、标准分发、归因追踪与结算协作流程化。",
  ogUrl: `${siteUrl}/alliance`,
});
useHead({
  link: [{ rel: "canonical", href: `${siteUrl}/alliance` }],
});
</script>
