<template>
  <div class="relative">
    <div
      class="pointer-events-none absolute left-1/2 top-0 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-linear-to-tr from-blue-500/20 via-blue-500/10 to-transparent blur-[120px]"
      aria-hidden="true"
    />

    <div class="mx-auto max-w-5xl px-4 py-28 sm:px-6 sm:py-32">
      <div class="mx-auto max-w-3xl text-center">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {{ t("site.contact.title") }}
        </h1>
        <p class="mt-4 text-lg text-gray-700">
          {{ t("site.contact.lead") }}
        </p>
      </div>

      <div class="mt-12 grid gap-6 lg:grid-cols-3">
        <div class="rounded-3xl bg-white p-6 ring-1 ring-gray-200">
          <div class="text-sm font-semibold text-gray-900">
            {{ t("site.contact.productTitle") }}
          </div>
          <div class="mt-2 text-sm text-gray-700">
            {{ t("site.contact.productDesc") }}
          </div>
          <a
            class="mt-5 inline-flex items-center justify-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
            href="mailto:hello@telemaster.example?subject=Telemaster%20inquiry"
          >
            {{ t("site.contact.productCta") }}
          </a>
        </div>
        <div class="rounded-3xl bg-white p-6 ring-1 ring-gray-200">
          <div class="text-sm font-semibold text-gray-900">
            {{ t("site.contact.bizTitle") }}
          </div>
          <div class="mt-2 text-sm text-gray-700">
            {{ t("site.contact.bizDesc") }}
          </div>
          <a
            class="mt-5 inline-flex items-center justify-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
            href="mailto:biz@telemaster.example?subject=Telemaster%20business"
          >
            {{ t("site.contact.bizCta") }}
          </a>
        </div>
        <div class="rounded-3xl bg-white p-6 ring-1 ring-gray-200">
          <div class="text-sm font-semibold text-gray-900">
            {{ t("site.contact.supportTitle") }}
          </div>
          <div class="mt-2 text-sm text-gray-700">
            {{ t("site.contact.supportDesc") }}
          </div>
          <div class="mt-5 flex flex-wrap gap-3">
            <NuxtLink
              :to="localePath('/tutorials')"
              class="inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-900 ring-1 ring-gray-200 hover:bg-gray-50"
            >
              {{ t("site.contact.tutorialsCta") }}
            </NuxtLink>
            <NuxtLink
              :to="localePath('/faq')"
              class="inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-900 ring-1 ring-gray-200 hover:bg-gray-50"
            >
              {{ t("site.contact.faqCta") }}
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="mt-16 rounded-3xl bg-gray-900 px-6 py-10 text-white sm:px-10">
        <div
          class="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center"
        >
          <div>
            <h3 class="text-2xl font-semibold">{{ t("site.contact.bannerTitle") }}</h3>
            <p class="mt-2 text-white/80">
              {{ t("site.contact.bannerLead") }}
            </p>
          </div>
          <NuxtLink
            :to="localePath('/pricing')"
            class="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100"
          >
            {{ t("site.contact.bannerPricing") }}
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
  title: computed(() => t("site.contact.seoTitle")),
  description: computed(() => t("site.contact.seoDescription")),
  ogTitle: computed(() => `Telemaster — ${t("site.contact.seoTitle")}`),
  ogDescription: computed(() => t("site.contact.seoDescription")),
  ogUrl: computed(() => `${siteUrl}${localePath("/contact")}`),
});
useHead(() => ({
  link: [{ rel: "canonical", href: `${siteUrl}${localePath("/contact")}` }],
}));
</script>
