<template>
  <div>
    <HeroHome />
    <BusinessCategories />
    <FeaturesPlanet />
    <LargeTestimonial />
    <Cta />
  </div>
</template>

<script setup lang="ts">
const siteUrl = useSiteUrl();

useSeoMeta({
  title: "AI 驱动的 Telegram 运营平台",
  description:
    "用 AI + 自动化把群组治理、自动回复、内容排期与数据复盘统一到一个控制台。",
  ogTitle: "Telemaster - AI 驱动的 Telegram 运营平台",
  ogDescription:
    "用 AI + 自动化把群组治理、自动回复、内容排期与数据复盘统一到一个控制台。",
  ogUrl: `${siteUrl}/`,
});

useHead({
  link: [{ rel: "canonical", href: `${siteUrl}/` }],
});
</script>
