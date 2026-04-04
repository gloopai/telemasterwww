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
const { t } = useI18n();
const localePath = useLocalePath();

useSeoMeta({
  title: computed(() => t("seo.home.title")),
  description: computed(() => t("seo.home.description")),
  ogTitle: computed(() => t("seo.home.ogTitle")),
  ogDescription: computed(() => t("seo.home.ogDescription")),
  ogUrl: computed(() => `${siteUrl}${localePath("/")}`),
});

useHead(() => ({
  link: [
    {
      rel: "canonical",
      href: `${siteUrl}${localePath("/")}`,
    },
  ],
}));
</script>
