<template>
  <div class="mx-auto max-w-3xl px-4 py-28 sm:px-6 sm:py-32">
    <h1 class="mb-8 text-3xl font-bold">常见问题</h1>
    <div class="space-y-6">
      <div v-for="(item, i) in faqs" :key="i">
        <h2 class="text-xl font-semibold">Q: {{ item.q }}</h2>
        <p class="mt-2 text-gray-700">A: {{ item.a }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const siteUrl = useSiteUrl();

const faqs = [
  {
    q: "Telemaster是什么？",
    a: "Telemaster 是一款面向 Telegram 群组、频道与机器人的运营平台，帮助你用更少的人力实现自动化与可复盘的运营。",
  },
  {
    q: "如何开始使用？",
    a: "注册账号后，根据页面指引完成授权与配置，即可开始管理群组/频道并启用自动化能力。",
  },
  {
    q: "是否支持多账号管理？",
    a: "支持。你可以按工作区管理多个群组/频道与相关配置（按方案与可用性）。",
  },
  {
    q: "如何联系客服？",
    a: "你可以通过“联系我们”页面发送邮件或提交需求，我们会尽快回复。",
  },
] as const;

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

useSeoMeta({
  title: "常见问题",
  description:
    "Telemaster 常见问题解答：产品定位、上手方式、管理范围与联系方式。",
  ogTitle: "Telemaster - 常见问题",
  ogDescription:
    "Telemaster 常见问题解答：产品定位、上手方式、管理范围与联系方式。",
  ogUrl: `${siteUrl}/faq`,
});

useHead({
  link: [{ rel: "canonical", href: `${siteUrl}/faq` }],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify(faqJsonLd),
    },
  ],
});
</script>
