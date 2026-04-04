<template>
  <div class="relative">
    <div
      class="pointer-events-none absolute left-1/2 top-0 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-linear-to-tr from-blue-500/20 via-blue-500/10 to-transparent blur-[120px]"
      aria-hidden="true"
    />

    <div class="mx-auto max-w-6xl px-4 py-28 sm:px-6 sm:py-32">
      <div class="mx-auto max-w-3xl text-center">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {{ t("site.useCases.title") }}
        </h1>
        <p class="mt-4 text-lg text-gray-700">
          {{ t("site.useCases.lead") }}
        </p>
      </div>

      <div class="mt-12 grid gap-6 md:grid-cols-2">
        <div
          v-for="ci in [0, 1, 2, 3]"
          :key="ci"
          class="rounded-3xl bg-white p-6 ring-1 ring-gray-200"
        >
          <h2 class="text-xl font-semibold text-gray-900">
            {{ t(`site.useCases.cases.${ci}.title`) }}
          </h2>
          <p class="mt-2 text-sm text-gray-600">
            {{ t(`site.useCases.cases.${ci}.description`) }}
          </p>
          <ul class="mt-6 space-y-3 text-sm text-gray-700">
            <li v-for="bi in [0, 1, 2]" :key="bi" class="flex gap-3">
              <svg
                class="mt-0.5 h-4 w-4 shrink-0 fill-blue-500"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M6.4 11.2 3.2 8l1.13-1.13L6.4 8.94l5.27-5.27L12.8 4.8 6.4 11.2Z" />
              </svg>
              <span>{{ t(`site.useCases.cases.${ci}.bullets.${bi}`) }}</span>
            </li>
          </ul>
          <div class="mt-8 flex flex-wrap gap-3">
            <NuxtLink
              v-for="li in [0, 1]"
              :key="li"
              :to="localePath(t(`site.useCases.cases.${ci}.links.${li}.href`))"
              class="inline-flex items-center justify-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
            >
              {{ t(`site.useCases.cases.${ci}.links.${li}.label`) }}
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="mt-16 rounded-3xl bg-white p-8 ring-1 ring-gray-200">
        <div class="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div class="text-sm font-semibold text-gray-900">
              {{ t("site.useCases.quickStartTitle") }}
            </div>
            <div class="mt-2 text-sm text-gray-700">
              {{ t("site.useCases.quickStartLead") }}
            </div>
          </div>
          <NuxtLink
            :to="localePath('/pricing')"
            class="inline-flex items-center justify-center rounded-lg bg-linear-to-t from-blue-600 to-blue-500 px-5 py-3 text-sm font-medium text-white shadow-sm hover:from-blue-600 hover:to-blue-600"
          >
            {{ t("site.useCases.quickStartCta") }}
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
  title: computed(() => t("site.useCases.seoTitle")),
  description: computed(() => t("site.useCases.seoDescription")),
  ogTitle: computed(() => `Telemaster — ${t("site.useCases.seoTitle")}`),
  ogDescription: computed(() => t("site.useCases.seoDescription")),
  ogUrl: computed(() => `${siteUrl}${localePath("/use-cases")}`),
});
useHead(() => ({
  link: [{ rel: "canonical", href: `${siteUrl}${localePath("/use-cases")}` }],
}));
</script>
