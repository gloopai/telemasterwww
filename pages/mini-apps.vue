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
        <span class="text-gray-700">Telegram 小程序</span>
      </div>

      <div class="mt-5 mx-auto max-w-3xl text-center">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Telegram 小程序生态与运营
        </h1>
        <p class="mt-4 text-lg text-gray-700">
          用小程序承接转化，用 Telemaster 编排入口、自动化流程与数据复盘，让增长更稳定、更可复制。
        </p>
        <div class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center justify-center rounded-lg bg-linear-to-t from-blue-600 to-blue-500 px-5 py-3 text-sm font-medium text-white shadow-sm hover:from-blue-600 hover:to-blue-600"
          >
            咨询小程序方案
          </NuxtLink>
          <NuxtLink
            to="/features"
            class="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-medium text-gray-900 ring-1 ring-gray-200 hover:bg-gray-50"
          >
            查看功能总览
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
          <div class="text-sm font-semibold text-gray-900">Telemaster 在小程序生态的能力</div>
          <h2 class="mt-2 text-3xl font-bold tracking-tight text-gray-900">把“入口与流程”做成系统</h2>
          <p class="mt-3 text-base text-gray-700">
            从触达到承接、从客服到风控、从归因到复盘，把运营变成可复用能力（按可用性）。
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
          <div class="text-sm font-semibold text-gray-900">典型场景</div>
          <h2 class="mt-2 text-3xl font-bold tracking-tight text-gray-900">从承接到复盘的可复制玩法</h2>
          <p class="mt-3 text-base text-gray-700">
            把一次成功的活动/交付流程沉淀为模板与 SOP，复制到更多群组与频道。
          </p>
        </div>

        <div class="mt-10 grid gap-6 lg:grid-cols-2">
          <div
            v-for="s in scenarios"
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
          <h2 class="mt-2 text-3xl font-bold tracking-tight">小程序落地与增长</h2>
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
            to="/alliance"
            class="inline-flex items-center justify-center rounded-lg bg-white/10 px-5 py-3 text-sm font-medium text-white ring-1 ring-white/10 hover:bg-white/15"
          >
            了解联盟
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

const ecosystem = [
  {
    title: "更短的转化路径",
    description: "用户在 Telegram 内完成浏览、互动与跳转，减少外部跳出带来的流失。",
    bullets: ["从消息到操作一步到位", "更适合活动承接与服务交付", "天然适配社群场景"],
  },
  {
    title: "可运营的入口体系",
    description: "小程序可以作为“统一承接页”，把各类业务动作做成标准入口与流程。",
    bullets: ["新人引导与权益领取", "报名/预约/咨询承接", "会员中心与内容目录"],
  },
  {
    title: "内容与互动一体化",
    description: "频道/群组的内容分发可以直接驱动小程序内的动作与复购。",
    bullets: ["活动节奏与内容排期", "任务化互动提升留存", "数据复盘辅助迭代（按可用性）"],
  },
];

const telemasterCapabilities: Card[] = [
  {
    title: "入口编排与转化漏斗（按可用性）",
    description: "把小程序当作“承接层”，让每一次触达都通向明确的下一步。",
    bullets: [
      "欢迎语/关键词/菜单等入口统一编排（按可用性）",
      "按人群与场景分流到不同小程序页面（按可用性）",
      "模板化活动页与落地页，提高复用率",
    ],
  },
  {
    title: "自动化客服与运营助手",
    description: "把高频问题与标准流程自动化，减少人工成本并提高一致性。",
    bullets: [
      "关键词 + 模板 + AI 回复三段式组合（按可用性）",
      "意图识别分流到表单/工单/人工（按可用性）",
      "对话总结与待跟进清单，减少漏单与漏回",
    ],
  },
  {
    title: "身份与权限协作",
    description: "用角色与权限体系保障多人协作安全，减少误操作风险。",
    bullets: ["工作区与资源隔离，支持多团队协作", "角色权限与最小授权", "关键操作记录与审计"],
  },
  {
    title: "风控与反滥用",
    description: "在增长的同时保障体验，避免广告、钓鱼与刷屏破坏转化。",
    bullets: ["反垃圾策略：验证/限速/关键词与链接规则", "风险提示与黑名单联动（按可用性）", "高风险入口的频率与范围控制"],
  },
  {
    title: "归因追踪与数据复盘（按可用性）",
    description: "把“来源-行为-转化”串起来，形成可衡量、可优化的运营闭环。",
    bullets: [
      "渠道与入口维度追踪（按可用性）",
      "关键指标看板：触达、线索、转化（按可用性）",
      "AI 总结热点与问题，指导下一轮迭代（按可用性）",
    ],
  },
  {
    title: "与联盟/支付的组合玩法（按可用性）",
    description: "小程序作为承接层，联盟做供需撮合与分发，支付做权益与交付。",
    bullets: [
      "联盟合作：渠道分发与返佣协作（按可用性）",
      "支付/会员：把权益交付标准化（按可用性）",
      "交付流程化：把一次成功沉淀为 SOP",
    ],
  },
];

const scenarios = [
  {
    title: "活动报名与线索收集",
    bullets: ["频道触达 → 小程序报名页", "自动分流到群/私聊/表单（按可用性）", "复盘报名与转化数据（按可用性）"],
  },
  {
    title: "会员中心与权益领取",
    bullets: ["小程序统一权益入口", "按规则引导到内容/服务交付", "减少客服重复答疑"],
  },
  {
    title: "付费社群与服务交付",
    bullets: ["小程序承接购买与交付入口（按可用性）", "运营流程化降低交付成本", "风控策略保障社群体验"],
  },
  {
    title: "多渠道分发与联盟合作",
    bullets: ["渠道素材标准化，降低沟通成本", "归因追踪与结算对账（按可用性）", "沉淀模板与 SOP 可复制扩张"],
  },
];

const faqs = [
  {
    q: "Telegram 小程序是什么？",
    a: "这里的“小程序”指 Telegram Mini Apps/Web Apps：在 Telegram 内打开的 Web 应用形态，可作为活动承接、会员中心与服务交付入口。",
  },
  {
    q: "Telemaster 是否提供小程序开发能力？",
    a: "Telemaster 更偏向“运营系统与流程编排”：入口、分流、客服、风控、协作与数据复盘等能力；具体与小程序的集成方式以可用性与方案为准。",
  },
  {
    q: "怎么在不打扰用户的前提下做转化？",
    a: "优先用“新人引导、资料领取、活动报名、会员中心”等场景化入口承接；通过频率控制与群规治理保障体验，再用数据复盘持续优化。",
  },
];

const siteUrl = useSiteUrl();
const pageTitle = "Telegram 小程序";
const pageDescription =
  "了解 Telegram 小程序（Mini Apps/Web Apps）生态。Telemaster 在小程序生态的增长、转化、客服、风控与归因能力（按可用性），让小程序运营更可复制。";
const canonicalPath = "/mini-apps";

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
