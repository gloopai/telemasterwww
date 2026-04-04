<template>
  <div class="mx-auto max-w-3xl px-4 py-28 sm:px-6 sm:py-32">
    <div class="text-sm text-gray-500">
      <NuxtLink :to="localePath('/')" class="hover:underline">
        {{ t("site.terms.breadcrumbHome") }}
      </NuxtLink>
      <span class="mx-2">/</span>
      <span class="text-gray-700">{{ t("site.terms.breadcrumb") }}</span>
    </div>

    <h1 class="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      {{ t("site.terms.title") }}
    </h1>
    <p class="mt-4 text-gray-700">
      {{ t("site.terms.disclaimer") }}
    </p>

    <div class="markdown mt-10">
      <h2>{{ t("site.terms.s1h") }}</h2>
      <p>{{ t("site.terms.s1p") }}</p>

      <h2>{{ t("site.terms.s2h") }}</h2>
      <ul>
        <li>{{ t("site.terms.s2l1") }}</li>
        <li>{{ t("site.terms.s2l2") }}</li>
        <li>{{ t("site.terms.s2l3") }}</li>
      </ul>

      <h2>{{ t("site.terms.s3h") }}</h2>
      <p>{{ t("site.terms.s3p") }}</p>

      <h2>{{ t("site.terms.s4h") }}</h2>
      <p>{{ t("site.terms.s4p") }}</p>

      <h2>{{ t("site.terms.s5h") }}</h2>
      <p>{{ t("site.terms.s5p") }}</p>

      <h2>{{ t("site.terms.s6h") }}</h2>
      <p>
        {{ t("site.terms.s6p") }}
        <NuxtLink :to="localePath('/contact')" class="underline hover:text-gray-900">
          {{ t("site.terms.s6link") }}
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
  title: computed(() => t("site.terms.seoTitle")),
  description: computed(() => t("site.terms.seoDescription")),
  ogTitle: computed(() => `Telemaster — ${t("site.terms.seoTitle")}`),
  ogDescription: computed(() => t("site.terms.seoDescription")),
  ogUrl: computed(() => `${siteUrl}${localePath("/terms")}`),
});
useHead(() => ({
  link: [{ rel: "canonical", href: `${siteUrl}${localePath("/terms")}` }],
}));
</script>
