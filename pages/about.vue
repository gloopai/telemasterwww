<template>
  <div class="mx-auto max-w-4xl px-4 py-28 sm:px-6 sm:py-32">
    <div class="mx-auto max-w-3xl text-center">
      <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        {{ t("site.about.title") }}
      </h1>
      <p class="mt-4 text-lg text-gray-700">
        {{ t("site.about.lead") }}
      </p>
    </div>

    <div class="mt-12 grid gap-6 lg:grid-cols-3">
      <div class="rounded-3xl bg-white p-6 ring-1 ring-gray-200">
        <div class="text-sm font-semibold text-gray-900">
          {{ t("site.about.missionTitle") }}
        </div>
        <div class="mt-2 text-sm text-gray-700">
          {{ t("site.about.missionDesc") }}
        </div>
      </div>
      <div class="rounded-3xl bg-white p-6 ring-1 ring-gray-200">
        <div class="text-sm font-semibold text-gray-900">
          {{ t("site.about.valuesTitle") }}
        </div>
        <div class="mt-2 text-sm text-gray-700">
          {{ t("site.about.valuesDesc") }}
        </div>
      </div>
      <div class="rounded-3xl bg-white p-6 ring-1 ring-gray-200">
        <div class="text-sm font-semibold text-gray-900">
          {{ t("site.about.audienceTitle") }}
        </div>
        <div class="mt-2 text-sm text-gray-700">
          {{ t("site.about.audienceDesc") }}
        </div>
      </div>
    </div>

    <div class="mt-16 rounded-3xl bg-white p-8 ring-1 ring-gray-200">
      <div class="text-xl font-semibold text-gray-900">
        {{ t("site.about.problemsTitle") }}
      </div>
      <div class="mt-4 grid gap-6 md:grid-cols-2">
        <div
          v-for="k in ['p1', 'p2', 'p3', 'p4']"
          :key="k"
          class="rounded-2xl bg-gray-50 p-6"
        >
          <div class="text-sm font-semibold text-gray-900">
            {{ t(`site.about.${k}Title`) }}
          </div>
          <div class="mt-2 text-sm text-gray-700">
            {{ t(`site.about.${k}Desc`) }}
          </div>
        </div>
      </div>
    </div>

    <div class="mt-16 flex flex-col items-center justify-center gap-3 sm:flex-row">
      <NuxtLink
        :to="localePath('/pricing')"
        class="inline-flex items-center justify-center rounded-lg bg-gray-900 px-5 py-3 text-sm font-medium text-white hover:bg-gray-800"
      >
        {{ t("site.about.ctaPricing") }}
      </NuxtLink>
      <NuxtLink
        :to="localePath('/contact')"
        class="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-medium text-gray-900 ring-1 ring-gray-200 hover:bg-gray-50"
      >
        {{ t("site.about.ctaContact") }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();
const siteUrl = useSiteUrl();

useSeoMeta({
  title: computed(() => t("site.about.seoTitle")),
  description: computed(() => t("site.about.seoDescription")),
  ogTitle: computed(() => `Telemaster — ${t("site.about.seoTitle")}`),
  ogDescription: computed(() => t("site.about.seoDescription")),
  ogUrl: computed(() => `${siteUrl}${localePath("/about")}`),
});
useHead(() => ({
  link: [{ rel: "canonical", href: `${siteUrl}${localePath("/about")}` }],
}));
</script>
