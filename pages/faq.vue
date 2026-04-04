<template>
  <div class="mx-auto max-w-3xl px-4 py-28 sm:px-6 sm:py-32">
    <h1 class="mb-8 text-3xl font-bold">{{ t("pages.faq.title") }}</h1>
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
const { t } = useI18n();
const localePath = useLocalePath();

const FAQ_ITEM_COUNT = 4;
const faqs = computed(() =>
  Array.from({ length: FAQ_ITEM_COUNT }, (_, i) => ({
    q: t(`pages.faq.items.${i}.q`),
    a: t(`pages.faq.items.${i}.a`),
  })),
);

const faqJsonLd = computed(() => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.value.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
}));

useSeoMeta({
  title: computed(() => t("seo.faq.title")),
  description: computed(() => t("seo.faq.description")),
  ogTitle: computed(() => t("seo.faq.ogTitle")),
  ogDescription: computed(() => t("seo.faq.ogDescription")),
  ogUrl: computed(() => `${siteUrl}${localePath("/faq")}`),
});

useHead(() => ({
  link: [{ rel: "canonical", href: `${siteUrl}${localePath("/faq")}` }],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify(faqJsonLd.value),
    },
  ],
}));
</script>
