<template>
<div class="mx-auto max-w-4xl px-4 py-28 sm:px-6 sm:py-32">
      <div class="mx-auto max-w-3xl text-center">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          关于 Telemaster
        </h1>
        <p class="mt-4 text-lg text-gray-700">
          我们希望让 Telegram 运营从“靠经验硬扛”，变成“可复制的流程与系统”。
        </p>
      </div>

      <div class="mt-12 grid gap-6 lg:grid-cols-3">
        <div class="rounded-3xl bg-white p-6 ring-1 ring-gray-200">
          <div class="text-sm font-semibold text-gray-900">使命</div>
          <div class="mt-2 text-sm text-gray-700">
            用自动化与可视化，降低社群与频道运营的复杂度。
          </div>
        </div>
        <div class="rounded-3xl bg-white p-6 ring-1 ring-gray-200">
          <div class="text-sm font-semibold text-gray-900">价值观</div>
          <div class="mt-2 text-sm text-gray-700">
            安全优先、以用户为中心、用数据驱动迭代。
          </div>
        </div>
        <div class="rounded-3xl bg-white p-6 ring-1 ring-gray-200">
          <div class="text-sm font-semibold text-gray-900">适用人群</div>
          <div class="mt-2 text-sm text-gray-700">
            社群管理员、内容团队、客服支持、增长与运营团队。
          </div>
        </div>
      </div>

      <div class="mt-16 rounded-3xl bg-white p-8 ring-1 ring-gray-200">
        <div class="text-xl font-semibold text-gray-900">我们解决什么问题？</div>
        <div class="mt-4 grid gap-6 md:grid-cols-2">
          <div class="rounded-2xl bg-gray-50 p-6">
            <div class="text-sm font-semibold text-gray-900">治理成本高</div>
            <div class="mt-2 text-sm text-gray-700">
              广告与刷屏影响体验，管理员重复处理耗时耗力。
            </div>
          </div>
          <div class="rounded-2xl bg-gray-50 p-6">
            <div class="text-sm font-semibold text-gray-900">内容节奏不稳</div>
            <div class="mt-2 text-sm text-gray-700">
              没有排期与复盘，难以持续输出高质量内容。
            </div>
          </div>
          <div class="rounded-2xl bg-gray-50 p-6">
            <div class="text-sm font-semibold text-gray-900">团队协作风险</div>
            <div class="mt-2 text-sm text-gray-700">
              权限不清晰、操作不可追溯，容易误操作与越权。
            </div>
          </div>
          <div class="rounded-2xl bg-gray-50 p-6">
            <div class="text-sm font-semibold text-gray-900">缺少数据闭环</div>
            <div class="mt-2 text-sm text-gray-700">
              只有感觉没有指标，优化方向不清晰、难以复用经验。
            </div>
          </div>
        </div>
      </div>

      <div class="mt-16 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <NuxtLink to="/pricing"
          class="inline-flex items-center justify-center rounded-lg bg-gray-900 px-5 py-3 text-sm font-medium text-white hover:bg-gray-800"
        >
          查看定价
        </NuxtLink>
        <NuxtLink to="/contact"
          class="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-medium text-gray-900 ring-1 ring-gray-200 hover:bg-gray-50"
        >
          联系我们
        </NuxtLink>
      </div>
    </div>
</template>

<script setup lang="ts">
const siteUrl = useSiteUrl();
useSeoMeta({
  title: "关于我们",
  description: "关于 Telemaster：专注 Telegram 群组、频道与机器人管理的运营工具，帮助团队用更少的人力获得更稳定的结果。",
  ogTitle: "Telemaster - 关于我们",
  ogDescription: "关于 Telemaster：专注 Telegram 群组、频道与机器人管理的运营工具，帮助团队用更少的人力获得更稳定的结果。",
  ogUrl: `${siteUrl}/about`,
});
useHead({
  link: [{ rel: 'canonical', href: `${siteUrl}/about` }],
});
</script>
