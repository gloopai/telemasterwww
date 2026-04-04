<template>
  <div class="mx-auto max-w-3xl px-4 py-28 sm:px-6 sm:py-32">
    <div class="text-sm text-gray-500">
      <NuxtLink :to="localePath('/')" class="hover:underline">
        {{ t("site.privacy.breadcrumbHome") }}
      </NuxtLink>
      <span class="mx-2">/</span>
      <span class="text-gray-700">{{ t("site.privacy.breadcrumb") }}</span>
    </div>

    <h1 class="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      {{ t("site.privacy.title") }}
    </h1>
    <p class="mt-4 text-gray-700">
      {{ t("site.privacy.disclaimer") }}
    </p>

    <div class="markdown mt-10">
      <h2>{{ t("site.privacy.h1") }}</h2>
      <ul>
        <li>{{ t("site.privacy.l1") }}</li>
        <li>{{ t("site.privacy.l2") }}</li>
        <li>{{ t("site.privacy.l3") }}</li>
      </ul>

      <h2>{{ t("site.privacy.h2") }}</h2>
      <ul>
        <li>{{ t("site.privacy.u1") }}</li>
        <li>{{ t("site.privacy.u2") }}</li>
        <li>{{ t("site.privacy.u3") }}</li>
      </ul>

      <h2>{{ t("site.privacy.h3") }}</h2>
      <p>{{ t("site.privacy.p3") }}</p>

      <h2>{{ t("site.privacy.h4") }}</h2>
      <p>{{ t("site.privacy.p4") }}</p>

      <h2>{{ t("site.privacy.h5") }}</h2>
      <p>
        {{ t("site.privacy.p5") }}
        <NuxtLink :to="localePath('/contact')" class="underline hover:text-gray-900">
          {{ t("site.privacy.plink") }}
        </NuxtLink>
        .
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();
const siteUrl = useSiteUrl();

useSeoMeta({
  title: computed(() => t("site.privacy.seoTitle")),
  description: computed(() => t("site.privacy.seoDescription")),
  ogTitle: computed(() => `Telemaster — ${t("site.privacy.seoTitle")}`),
  ogDescription: computed(() => t("site.privacy.seoDescription")),
  ogUrl: computed(() => `${siteUrl}${localePath("/privacy")}`),
});
useHead(() => ({
  link: [{ rel: "canonical", href: `${siteUrl}${localePath("/privacy")}` }],
}));
</script>
