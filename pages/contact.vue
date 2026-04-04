<template>
<div class="relative">
      <div
        class="pointer-events-none absolute left-1/2 top-0 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-linear-to-tr from-blue-500/20 via-blue-500/10 to-transparent blur-[120px]"
        aria-hidden="true"
      />

      <div class="mx-auto max-w-5xl px-4 py-28 sm:px-6 sm:py-32">
        <div class="mx-auto max-w-3xl text-center">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            联系我们
          </h1>
          <p class="mt-4 text-lg text-gray-700">
            产品咨询、定制需求、集成方案与技术支持，都可以在这里联系我们。
          </p>
        </div>

        <div class="mt-12 grid gap-6 lg:grid-cols-3">
          <div class="rounded-3xl bg-white p-6 ring-1 ring-gray-200">
            <div class="text-sm font-semibold text-gray-900">产品咨询</div>
            <div class="mt-2 text-sm text-gray-700">
              适合询问功能、使用场景与上手建议。
            </div>
            <a
              class="mt-5 inline-flex items-center justify-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
              href="mailto:hello@telemaster.example?subject=Telemaster%20%E4%BA%A7%E5%93%81%E5%92%A8%E8%AF%A2"
            >
              发送邮件
            </a>
          </div>
          <div class="rounded-3xl bg-white p-6 ring-1 ring-gray-200">
            <div class="text-sm font-semibold text-gray-900">商务合作</div>
            <div class="mt-2 text-sm text-gray-700">
              适合渠道合作、媒体合作与联合活动。
            </div>
            <a
              class="mt-5 inline-flex items-center justify-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
              href="mailto:biz@telemaster.example?subject=Telemaster%20%E5%95%86%E5%8A%A1%E5%90%88%E4%BD%9C"
            >
              联系商务
            </a>
          </div>
          <div class="rounded-3xl bg-white p-6 ring-1 ring-gray-200">
            <div class="text-sm font-semibold text-gray-900">技术支持</div>
            <div class="mt-2 text-sm text-gray-700">
              建议先查看教程与 FAQ，再联系我们以获得更快响应。
            </div>
            <div class="mt-5 flex flex-wrap gap-3">
              <NuxtLink to="/tutorials" class="inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-900 ring-1 ring-gray-200 hover:bg-gray-50"
                 
              >
                查看教程
              </NuxtLink>
              <NuxtLink to="/faq" class="inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-900 ring-1 ring-gray-200 hover:bg-gray-50"
                 
              >
                查看 FAQ
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="mt-16 rounded-3xl bg-gray-900 px-6 py-10 text-white sm:px-10">
          <div class="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 class="text-2xl font-semibold">需要演示或方案评估？</h3>
              <p class="mt-2 text-white/80">
                告诉我们你的群组/频道规模与目标，我们会给出建议。
              </p>
            </div>
            <NuxtLink to="/pricing"
              class="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100"
            >
              查看定价
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
const siteUrl = useSiteUrl();
useSeoMeta({
  title: "联系我们",
  description: "联系 Telemaster：产品咨询、商务合作、集成需求与技术支持。我们会尽快回复。",
  ogTitle: "Telemaster - 联系我们",
  ogDescription: "联系 Telemaster：产品咨询、商务合作、集成需求与技术支持。我们会尽快回复。",
  ogUrl: `${siteUrl}/contact`,
});
useHead({
  link: [{ rel: 'canonical', href: `${siteUrl}/contact` }],
});
</script>
