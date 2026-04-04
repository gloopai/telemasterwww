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
        <span class="text-gray-700">Telegram 小游戏</span>
      </div>

      <div class="mt-5 mx-auto max-w-3xl text-center">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Telegram 小游戏生态专题
        </h1>
        <p class="mt-4 text-lg text-gray-700">
          把“分发-活动-客服-风控-复盘”做成系统，让小游戏增长更稳定、更可复制。
        </p>
        <div class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center justify-center rounded-lg bg-linear-to-t from-blue-600 to-blue-500 px-5 py-3 text-sm font-medium text-white shadow-sm hover:from-blue-600 hover:to-blue-600"
          >
            咨询小游戏方案
          </NuxtLink>
          <NuxtLink
            to="/alliance"
            class="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-medium text-gray-900 ring-1 ring-gray-200 hover:bg-gray-50"
          >
            查看联盟
          </NuxtLink>
        </div>
      </div>

      <div class="mt-14 grid gap-6 lg:grid-cols-3">
        <div
          v-for="c in ecosystem"
          :key="c.title"
          class="rounded-3xl bg-white p-6 ring-1 ring-gray-200"
        >
          <div class="text-sm font-semibold text-gray-900">{{ c.title }}</div>
          <div class="mt-2 text-sm text-gray-700">{{ c.description }}</div>
          <ul class="mt-5 space-y-3 text-sm text-gray-700">
            <li v-for="b in c.bullets" :key="b" class="flex gap-3">
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
          <div class="text-sm font-semibold text-gray-900">Telemaster 在小游戏生态的能力</div>
          <h2 class="mt-2 text-3xl font-bold tracking-tight text-gray-900">运营系统化，而不是靠人硬扛</h2>
          <p class="mt-3 text-base text-gray-700">
            从活动编排到客服自动化，从治理风控到归因复盘，让增长更可控（按可用性）。
          </p>
        </div>

        <div class="mt-10 grid gap-6 lg:grid-cols-2">
          <div
            v-for="c in telemasterCapabilities"
            :key="c.title"
            class="rounded-2xl bg-gray-50 p-6 ring-1 ring-gray-200"
          >
            <div class="text-sm font-semibold text-gray-900">{{ c.title }}</div>
            <div class="mt-2 text-sm text-gray-700">{{ c.description }}</div>
            <ul class="mt-4 space-y-2 text-sm text-gray-700">
              <li v-for="b in c.bullets" :key="b" class="flex gap-2">
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

      <div class="mt-16 rounded-3xl bg-white p-8 ring-1 ring-gray-200">
        <div class="mx-auto max-w-3xl text-center">
          <div class="text-sm font-semibold text-gray-900">运营 Playbook</div>
          <h2 class="mt-2 text-3xl font-bold tracking-tight text-gray-900">把增长拆成可执行的四段式</h2>
          <p class="mt-3 text-base text-gray-700">先把关键链路跑通，再用模板与 SOP 放大规模。</p>
        </div>

        <div class="mt-10 grid gap-6 lg:grid-cols-2">
          <div
            v-for="s in playbook"
            :key="s.title"
            class="rounded-2xl bg-gray-50 p-6 ring-1 ring-gray-200"
          >
            <div class="text-sm font-semibold text-gray-900">{{ s.title }}</div>
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

      <div class="mt-16 rounded-3xl bg-gray-900 p-8 text-white ring-1 ring-gray-900/10">
        <div class="mx-auto max-w-3xl text-center">
          <div class="text-sm font-semibold text-white/90">常见问题</div>
          <h2 class="mt-2 text-3xl font-bold tracking-tight">小游戏落地与增长</h2>
        </div>

        <div class="mt-10 grid gap-6 lg:grid-cols-2">
          <div
            v-for="f in faqs"
            :key="f.q"
            class="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10"
          >
            <div class="text-sm font-semibold text-white">{{ f.q }}</div>
            <div class="mt-2 text-sm text-white/80">{{ f.a }}</div>
          </div>
        </div>

        <div class="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center justify-center rounded-lg bg-linear-to-t from-blue-600 to-blue-500 px-5 py-3 text-sm font-medium text-white shadow-sm hover:from-blue-600 hover:to-blue-600"
          >
            预约沟通
          </NuxtLink>
          <NuxtLink
            to="/mini-apps"
            class="inline-flex items-center justify-center rounded-lg bg-white/10 px-5 py-3 text-sm font-medium text-white ring-1 ring-white/10 hover:bg-white/15"
          >
            了解小程序
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type Card = {
  title: string;
  description: string;
  bullets: string[];
};

const ecosystem: Card[] = [
  {
    title: "社交分发与裂变",
    description: "游戏天然适配社群传播：分享、挑战、排行与战队把增长做成玩法。",
    bullets: ["群组/频道内传播链路更短", "任务与排行榜提升回访", "活动节奏决定留存与转化"],
  },
  {
    title: "运营驱动的留存",
    description: "小游戏的核心不是一次性爆量，而是可持续的日常运营与迭代。",
    bullets: ["内容排期：版本/活动/公告", "客服与社群治理影响口碑", "用数据复盘优化漏斗（按可用性）"],
  },
  {
    title: "变现路径可产品化",
    description: "订阅、礼包、通行证、广告、联名活动等，都需要稳定的承接与交付流程。",
    bullets: ["权益说明与入口标准化", "支付与交付流程可复制（按可用性）", "风控策略保障体验与合规"],
  },
];

const telemasterCapabilities: Card[] = [
  {
    title: "活动编排与内容排期",
    description: "把运营日历做成系统：上新、活动、公告与版本节奏统一管理。",
    bullets: ["频道定时发布与素材管理", "活动入口与规则模板化", "多群/多频道统一看板（按可用性）"],
  },
  {
    title: "增长漏斗与入口承接（按可用性）",
    description: "把每次触达引导到明确下一步：拉新、回流、付费与复购。",
    bullets: ["欢迎语/关键词入口承接（按可用性）", "分流到私聊/表单/客服（按可用性）", "渠道与素材维度追踪（按可用性）"],
  },
  {
    title: "自动化客服与玩家支持",
    description: "减少重复答疑，把复杂问题留给人工，提高响应速度与一致性。",
    bullets: ["FAQ 关键词自动回复", "意图识别与分流（按可用性）", "AI 总结与待跟进清单（按可用性）"],
  },
  {
    title: "社群治理与反滥用",
    description: "保护游戏社区的信噪比，降低广告、钓鱼与刷屏带来的流失。",
    bullets: ["验证/限速/关键词与链接规则组合", "风险提示与黑名单联动（按可用性）", "关键操作记录与审计"],
  },
  {
    title: "联盟分发与联名合作（按可用性）",
    description: "连接流量与游戏产品，把合作变成可复用的分发机制。",
    bullets: ["联盟撮合：匹配流量与产品", "归因追踪与结算对账（按可用性）", "沉淀模板与 SOP 规模化复制"],
  },
  {
    title: "数据复盘与运营迭代（按可用性）",
    description: "用指标驱动运营：把活动效果与问题热点快速反馈到下一轮。",
    bullets: [
      "关键指标看板：触达、互动、线索（按可用性）",
      "热点与问题总结，定位体验痛点",
      "协作流程化，降低运营成本",
    ],
  },
];

const playbook = [
  {
    title: "拉新：活动 + 分享链路",
    bullets: ["频道公告引流 → 群组承接", "分享任务与奖励机制（按可用性）", "用模板快速复制到更多群/频道"],
  },
  {
    title: "回流：版本节奏 + 日常任务",
    bullets: ["定时发布版本/活动提醒", "高频问题自动回复降低流失", "复盘回流数据持续优化（按可用性）"],
  },
  {
    title: "付费：权益说明 + 承接入口",
    bullets: ["礼包/订阅/通行证入口标准化", "客服分流与话术统一口径", "支付/交付与对账流程化（按可用性）"],
  },
  {
    title: "口碑：治理 + 风控 + 体验",
    bullets: ["反垃圾与风险策略保障社区体验", "关键动作可追溯便于协作", "问题热点总结推动体验改进（按可用性）"],
  },
];

const faqs = [
  {
    q: "Telegram 小游戏与 Telegram 小程序有什么区别？",
    a: "这里的“小程序”更偏承接与服务入口；“小游戏”更偏玩法与增长。两者都需要入口、运营、客服、风控与复盘体系支撑。",
  },
  {
    q: "Telemaster 是否提供游戏开发或 SDK？",
    a: "Telemaster 更偏向运营系统：内容排期、入口承接、客服自动化、社群治理与数据复盘等。与游戏侧的对接方式以可用性与方案为准。",
  },
  {
    q: "如何避免活动刷屏影响社群体验？",
    a: "用频率控制、规则治理与入口分流减少干扰；优先在频道做公告与节奏，在群组做承接与答疑，并用数据复盘优化触达策略。",
  },
];

const siteUrl = useSiteUrl();
const pageTitle = "Telegram 小游戏";
const pageDescription =
  "Telegram 小游戏生态专题：分发、增长、活动与变现路径。Telemaster 在小游戏生态的运营编排、客服自动化、风控与数据复盘能力（按可用性）。";
const canonicalPath = "/mini-games";

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  ogTitle: pageTitle,
  ogDescription: pageDescription,
  ogUrl: `${siteUrl}${canonicalPath}`,
});
useHead({
  link: [{ rel: "canonical", href: `${siteUrl}${canonicalPath}` }],
});
</script>
