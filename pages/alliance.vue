<template>
  <div class="relative">
    <div
      class="pointer-events-none absolute left-1/2 top-0 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-linear-to-tr from-blue-500/20 via-blue-500/10 to-transparent blur-[120px]"
      aria-hidden="true"
    />

    <div class="mx-auto max-w-6xl px-4 py-28 sm:px-6 sm:py-32">
      <div class="text-sm text-gray-500">
        <NuxtLink class="hover:underline" :to="localePath('/')">
          {{ t("site.alliance.breadcrumbHome") }}
        </NuxtLink>
        <span class="mx-2">/</span>
        <span class="text-gray-700">{{ t("site.alliance.breadcrumb") }}</span>
      </div>

      <div class="mx-auto mt-5 max-w-3xl text-center">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {{ t("site.alliance.title") }}
        </h1>
        <p class="mt-4 text-lg text-gray-700">
          {{ t("site.alliance.lead") }}
        </p>
        <div class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <NuxtLink
            :to="localePath('/contact')"
            class="inline-flex items-center justify-center rounded-lg bg-linear-to-t from-blue-600 to-blue-500 px-5 py-3 text-sm font-medium text-white shadow-sm hover:from-blue-600 hover:to-blue-600"
          >
            {{ t("site.alliance.ctaApply") }}
          </NuxtLink>
          <NuxtLink
            :to="localePath('/integrations')"
            class="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-medium text-gray-900 ring-1 ring-gray-200 hover:bg-gray-50"
          >
            {{ t("site.alliance.ctaIntegrations") }}
          </NuxtLink>
        </div>
      </div>

      <div class="mt-14 grid gap-6 lg:grid-cols-3">
        <div
          v-for="ri in [0, 1, 2]"
          :key="ri"
          class="rounded-3xl bg-white p-6 ring-1 ring-gray-200"
        >
          <div class="text-sm font-semibold text-gray-900">
            {{ t(`site.alliance.roles.${ri}.title`) }}
          </div>
          <div class="mt-2 text-sm text-gray-700">
            {{ t(`site.alliance.roles.${ri}.desc`) }}
          </div>
          <ul class="mt-5 space-y-3 text-sm text-gray-700">
            <li v-for="bi in [0, 1, 2]" :key="bi" class="flex gap-3">
              <svg
                class="mt-0.5 h-4 w-4 shrink-0 fill-blue-500"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M6.4 11.2 3.2 8l1.13-1.13L6.4 8.94l5.27-5.27L12.8 4.8 6.4 11.2Z" />
              </svg>
              <span>{{ t(`site.alliance.roles.${ri}.bullets.${bi}`) }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-16 rounded-3xl bg-white p-8 ring-1 ring-gray-200">
        <div class="mx-auto max-w-3xl text-center">
          <div class="text-sm font-semibold text-gray-900">
            {{ t("site.alliance.opsLabel") }}
          </div>
          <h2 class="mt-2 text-3xl font-bold tracking-tight text-gray-900">
            {{ t("site.alliance.opsTitle") }}
          </h2>
          <p class="mt-3 text-base text-gray-700">
            {{ t("site.alliance.opsLead") }}
          </p>
        </div>

        <div class="mt-10 grid gap-6 lg:grid-cols-2">
          <div
            v-for="si in [0, 1, 2, 3, 4]"
            :key="si"
            class="rounded-2xl bg-gray-50 p-6 ring-1 ring-gray-200"
          >
            <div class="text-sm font-semibold text-gray-900">
              {{ t(`site.alliance.steps.${si}.title`) }}
            </div>
            <div class="mt-2 text-sm text-gray-700">
              {{ t(`site.alliance.steps.${si}.desc`) }}
            </div>
            <ul class="mt-4 space-y-2 text-sm text-gray-700">
              <li v-for="bi in [0, 1, 2]" :key="bi" class="flex gap-2">
                <span
                  class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600/70"
                  aria-hidden="true"
                />
                <span>{{ t(`site.alliance.steps.${si}.bullets.${bi}`) }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mt-16 grid gap-6 lg:grid-cols-3">
        <div
          v-for="gi in [0, 1, 2]"
          :key="gi"
          class="rounded-3xl bg-white p-6 ring-1 ring-gray-200"
        >
          <div class="text-sm font-semibold text-gray-900">
            {{ t(`site.alliance.benefits.${gi}.title`) }}
          </div>
          <div class="mt-2 text-sm text-gray-700">
            {{ t(`site.alliance.benefits.${gi}.desc`) }}
          </div>
          <ul class="mt-5 space-y-3 text-sm text-gray-700">
            <li v-for="bi in [0, 1, 2]" :key="bi" class="flex gap-3">
              <svg
                class="mt-0.5 h-4 w-4 shrink-0 fill-blue-500"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M6.4 11.2 3.2 8l1.13-1.13L6.4 8.94l5.27-5.27L12.8 4.8 6.4 11.2Z" />
              </svg>
              <span>{{ t(`site.alliance.benefits.${gi}.bullets.${bi}`) }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-16 rounded-3xl bg-gray-900 p-8 text-white ring-1 ring-gray-900/10">
        <div class="mx-auto max-w-3xl text-center">
          <div class="text-sm font-semibold text-white/90">
            {{ t("site.alliance.principlesLabel") }}
          </div>
          <h2 class="mt-2 text-3xl font-bold tracking-tight">
            {{ t("site.alliance.principlesTitle") }}
          </h2>
        </div>

        <div class="mt-10 grid gap-6 lg:grid-cols-2">
          <div
            v-for="pi in [0, 1, 2, 3]"
            :key="pi"
            class="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10"
          >
            <div class="text-sm font-semibold text-white">
              {{ t(`site.alliance.principles.${pi}.q`) }}
            </div>
            <div class="mt-2 text-sm text-white/80">
              {{ t(`site.alliance.principles.${pi}.a`) }}
            </div>
          </div>
        </div>
      </div>

      <div class="mt-16 rounded-3xl bg-white p-8 ring-1 ring-gray-200">
        <div class="mx-auto max-w-3xl text-center">
          <div class="text-sm font-semibold text-gray-900">
            {{ t("site.alliance.faqLabel") }}
          </div>
          <h2 class="mt-2 text-3xl font-bold tracking-tight text-gray-900">
            {{ t("site.alliance.faqTitle") }}
          </h2>
        </div>

        <div class="mt-10 grid gap-6 lg:grid-cols-2">
          <div
            v-for="fi in [0, 1, 2, 3]"
            :key="fi"
            class="rounded-2xl bg-gray-50 p-6 ring-1 ring-gray-200"
          >
            <div class="text-sm font-semibold text-gray-900">
              {{ t(`site.alliance.faq.${fi}.q`) }}
            </div>
            <div class="mt-2 text-sm text-gray-700">
              {{ t(`site.alliance.faq.${fi}.a`) }}
            </div>
          </div>
        </div>
      </div>

      <div class="mt-16 rounded-3xl bg-white p-8 ring-1 ring-gray-200">
        <div class="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div class="text-sm font-semibold text-gray-900">
              {{ t("site.alliance.nextTitle") }}
            </div>
            <div class="mt-2 text-sm text-gray-700">
              {{ t("site.alliance.nextLead") }}
            </div>
          </div>
          <div class="flex flex-wrap gap-3">
            <NuxtLink
              :to="localePath('/contact')"
              class="inline-flex items-center justify-center rounded-lg bg-linear-to-t from-blue-600 to-blue-500 px-5 py-3 text-sm font-medium text-white shadow-sm hover:from-blue-600 hover:to-blue-600"
            >
              {{ t("site.alliance.nextCtaApply") }}
            </NuxtLink>
            <NuxtLink
              :to="localePath('/pricing')"
              class="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-medium text-gray-900 ring-1 ring-gray-200 hover:bg-gray-50"
            >
              {{ t("site.alliance.nextCtaPricing") }}
            </NuxtLink>
          </div>
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
  title: computed(() => t("site.alliance.seoTitle")),
  description: computed(() => t("site.alliance.seoDescription")),
  ogTitle: computed(() => `Telemaster — ${t("site.alliance.seoTitle")}`),
  ogDescription: computed(() => t("site.alliance.seoDescription")),
  ogUrl: computed(() => `${siteUrl}${localePath("/alliance")}`),
});
useHead(() => ({
  link: [{ rel: "canonical", href: `${siteUrl}${localePath("/alliance")}` }],
}));
</script>
