<template>
  <div class="relative">
    <div
      class="pointer-events-none absolute left-1/2 top-0 -z-10 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-linear-to-tr from-blue-500/20 via-blue-500/10 to-transparent blur-[120px]"
      aria-hidden="true"
    />

    <div class="mx-auto max-w-6xl px-4 py-28 sm:px-6 sm:py-32">
      <div class="mx-auto max-w-3xl text-center">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {{ t("site.features.title") }}
        </h1>
        <p class="mt-4 text-lg text-gray-700">
          {{ t("site.features.lead") }}
        </p>
        <div class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <NuxtLink
            :to="localePath('/pricing')"
            class="inline-flex items-center justify-center rounded-lg bg-gray-900 px-5 py-3 text-sm font-medium text-white hover:bg-gray-800"
          >
            {{ t("site.features.ctaPricing") }}
          </NuxtLink>
          <NuxtLink
            :to="localePath('/tutorials')"
            class="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-medium text-gray-900 ring-1 ring-gray-200 hover:bg-gray-50"
          >
            {{ t("site.features.ctaTutorials") }}
          </NuxtLink>
        </div>
      </div>

      <div class="mt-14 grid gap-6 lg:grid-cols-3">
        <div
          v-for="gi in [0, 1, 2]"
          :key="gi"
          class="rounded-3xl bg-white p-6 ring-1 ring-gray-200"
        >
          <h2 class="text-xl font-semibold text-gray-900">
            {{ t(`site.features.groups.${gi}.title`) }}
          </h2>
          <p class="mt-2 text-sm text-gray-600">
            {{ t(`site.features.groups.${gi}.description`) }}
          </p>
          <div class="mt-6 space-y-4">
            <div
              v-for="ii in [0, 1, 2]"
              :key="ii"
              class="rounded-2xl bg-gray-50 p-4"
            >
              <div class="text-sm font-semibold text-gray-900">
                {{ t(`site.features.groups.${gi}.items.${ii}.title`) }}
              </div>
              <div class="mt-1 text-sm text-gray-700">
                {{ t(`site.features.groups.${gi}.items.${ii}.desc`) }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-16 rounded-3xl bg-gray-900 px-6 py-10 text-white sm:px-10">
        <div
          class="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center"
        >
          <div>
            <h3 class="text-2xl font-semibold">{{ t("site.features.bottomTitle") }}</h3>
            <p class="mt-2 text-white/80">{{ t("site.features.bottomLead") }}</p>
          </div>
          <NuxtLink
            :to="localePath('/use-cases')"
            class="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100"
          >
            {{ t("site.features.bottomCta") }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();
const siteUrl = useSiteUrl();

useSeoMeta({
  title: computed(() => t("site.features.seoTitle")),
  description: computed(() => t("site.features.seoDescription")),
  ogTitle: computed(() => `Telemaster — ${t("site.features.seoTitle")}`),
  ogDescription: computed(() => t("site.features.seoDescription")),
  ogUrl: computed(() => `${siteUrl}${localePath("/features")}`),
});
useHead(() => ({
  link: [{ rel: "canonical", href: `${siteUrl}${localePath("/features")}` }],
}));
</script>
