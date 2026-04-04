<template>
  <div class="relative">
    <div
      class="pointer-events-none absolute left-1/2 top-0 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-linear-to-tr from-blue-500/20 via-blue-500/10 to-transparent blur-[120px]"
      aria-hidden="true"
    />

    <div class="mx-auto max-w-6xl px-4 py-28 sm:px-6 sm:py-32">
      <div class="mx-auto max-w-3xl text-center">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          集成与扩展
        </h1>
        <p class="mt-4 text-lg text-gray-700">
          把 Telemaster 接入你的工具链，让运营动作与数据在系统间流动。
        </p>
      </div>

      <div class="mt-12 grid gap-6 lg:grid-cols-3">
        <div
          v-for="i in integrations"
          :key="i.title"
          class="rounded-3xl bg-white p-6 ring-1 ring-gray-200"
        >
          <h2 class="text-xl font-semibold text-gray-900">{{ i.title }}</h2>
          <p class="mt-2 text-sm text-gray-600">{{ i.description }}</p>
          <ul class="mt-6 space-y-3 text-sm text-gray-700">
            <li v-for="b in i.bullets" :key="b" class="flex gap-3">
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

      <div class="mt-16 rounded-3xl bg-gray-900 px-6 py-10 text-white sm:px-10">
        <div class="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h3 class="text-2xl font-semibold">需要更深度的集成？</h3>
            <p class="mt-2 text-white/80">
              告诉我们你的使用场景，我们可以一起设计更适合的工作流。
            </p>
          </div>
          <NuxtLink
            to="/contact"
            class="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100"
          >
            联系我们
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const integrations = [
  {
    title: "Webhook（按可用性）",
    description: "将关键事件推送到你的服务：告警、自动化流程与数据同步。",
    bullets: [
      "事件触发与签名校验（如适用）",
      "可配置回调地址与重试策略（如适用）",
      "用于工单/告警/数据流转",
    ],
  },
  {
    title: "团队协作",
    description: "用角色与权限管理，让多人协作更安全。",
    bullets: ["角色权限与最小授权", "关键操作记录与审计", "工作区隔离与资源边界"],
  },
  {
    title: "内容与数据（按可用性）",
    description: "将运营数据用于复盘与增长优化。",
    bullets: ["数据导出（如适用）", "指标看板与留存（按方案）", "与 BI/报表工具对接（如适用）"],
  },
];

const siteUrl = useSiteUrl();
useSeoMeta({
  title: "集成",
  description:
    "Telemaster 集成能力：Webhook、权限体系与工作区协作，让 Telegram 运营系统能与现有工具链协同工作。",
  ogTitle: "Telemaster - 集成",
  ogDescription:
    "Telemaster 集成能力：Webhook、权限体系与工作区协作，让 Telegram 运营系统能与现有工具链协同工作。",
  ogUrl: `${siteUrl}/integrations`,
});
useHead({
  link: [{ rel: "canonical", href: `${siteUrl}/integrations` }],
});
</script>
