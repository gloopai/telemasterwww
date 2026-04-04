<template>
<div class="relative">
      <div
        class="pointer-events-none absolute left-1/2 top-0 -z-10 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-linear-to-tr from-blue-500/20 via-blue-500/10 to-transparent blur-[120px]"
        aria-hidden="true"
      />

      <div class="mx-auto max-w-6xl px-4 py-28 sm:px-6 sm:py-32">
        <div class="mx-auto max-w-3xl text-center">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            功能总览
          </h1>
          <p class="mt-4 text-lg text-gray-700">
            Telemaster 让 Telegram 运营更自动化、更可控、更可复盘。
          </p>
          <div class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <NuxtLink to="/pricing"
              class="inline-flex items-center justify-center rounded-lg bg-gray-900 px-5 py-3 text-sm font-medium text-white hover:bg-gray-800"
            >
              查看定价
            </NuxtLink>
            <NuxtLink to="/tutorials"
              class="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-medium text-gray-900 ring-1 ring-gray-200 hover:bg-gray-50"
            >
              阅读教程
            </NuxtLink>
          </div>
        </div>

        <div class="mt-14 grid gap-6 lg:grid-cols-3">
          <div
            v-for="g in featureGroups"
            :key="g.title"
            class="rounded-3xl bg-white p-6 ring-1 ring-gray-200"
          >
            <h2 class="text-xl font-semibold text-gray-900">{{ g.title }}</h2>
            <p class="mt-2 text-sm text-gray-600">{{ g.description }}</p>
            <div class="mt-6 space-y-4">
              <div
                v-for="item in g.items"
                :key="item.title"
                class="rounded-2xl bg-gray-50 p-4"
              >
                <div class="text-sm font-semibold text-gray-900">
                  {{ item.title }}
                </div>
                <div class="mt-1 text-sm text-gray-700">{{ item.desc }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-16 rounded-3xl bg-gray-900 px-6 py-10 text-white sm:px-10">
          <div class="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 class="text-2xl font-semibold">想要更适合你场景的方案？</h3>
              <p class="mt-2 text-white/80">
                先看看使用场景与最佳实践，选对工具才能事半功倍。
              </p>
            </div>
            <NuxtLink to="/use-cases"
              class="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100"
            >
              查看使用场景
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
const featureGroups = [
  {
    title: "自动化运营",
    description: "把重复动作交给系统，把时间留给增长与内容。",
    items: [
      { title: "关键词自动回复", desc: "覆盖高频问题、规则提醒与资源分发。" },
      { title: "定时发布", desc: "支持频道排期与节奏化内容输出。" },
      { title: "批量消息", desc: "对目标群组/频道进行有节制的触达。" },
    ],
  },
  {
    title: "群组与频道治理",
    description: "从秩序与安全出发，建立可复制的治理体系。",
    items: [
      { title: "权限分层", desc: "按角色分配权限，避免误操作与越权。" },
      { title: "反垃圾策略", desc: "验证、限速、关键词与链接规则组合防护。" },
      { title: "欢迎与引导", desc: "新人流程化引导，提升留存与理解成本。" },
    ],
  },
  {
    title: "数据与洞察",
    description: "用数据复盘运营效果，让优化方向更清晰。",
    items: [
      { title: "统一看板", desc: "跨群组/频道的关键指标集中查看。" },
      { title: "内容效果", desc: "追踪阅读、互动与转化线索（按可用性）。" },
      { title: "操作记录", desc: "关键动作可追溯，便于团队协作与审计。" },
    ],
  },
];

const siteUrl = useSiteUrl();
useSeoMeta({
  title: "功能",
  description: "Telemaster 功能总览：机器人管理、群组治理、频道定时发布、自动回复与数据看板，帮助你更高效运营 Telegram。",
  ogTitle: "Telemaster - 功能",
  ogDescription: "Telemaster 功能总览：机器人管理、群组治理、频道定时发布、自动回复与数据看板，帮助你更高效运营 Telegram。",
  ogUrl: `${siteUrl}/features`,
});
useHead({
  link: [{ rel: 'canonical', href: `${siteUrl}/features` }],
});
</script>
