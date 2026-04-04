<template>
  <div class="mx-auto max-w-4xl px-4 py-28 sm:px-6 sm:py-32">
    <div class="mx-auto max-w-3xl text-center">
      <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        {{ t("site.changelog.title") }}
      </h1>
      <p class="mt-4 text-lg text-gray-700">
        {{ t("site.changelog.lead") }}
      </p>
    </div>

    <div class="mt-12 space-y-6">
      <div
        v-for="ei in [0, 1]"
        :key="ei"
        class="rounded-3xl bg-white p-6 ring-1 ring-gray-200"
      >
        <div class="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
          <div class="text-xl font-semibold text-gray-900">
            {{ t(`site.changelog.entries.${ei}.version`) }}
          </div>
          <div class="text-sm text-gray-500">
            {{ t(`site.changelog.entries.${ei}.date`) }}
          </div>
        </div>
        <ul class="mt-6 space-y-3 text-sm text-gray-700">
          <li
            v-for="ci in ei === 0 ? [0, 1, 2, 3] : [0]"
            :key="ci"
            class="flex gap-3"
          >
            <svg
              class="mt-0.5 h-4 w-4 shrink-0 fill-blue-500"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M6.4 11.2 3.2 8l1.13-1.13L6.4 8.94l5.27-5.27L12.8 4.8 6.4 11.2Z" />
            </svg>
            <span>{{ t(`site.changelog.entries.${ei}.changes.${ci}`) }}</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="mt-16 rounded-3xl bg-gray-900 px-6 py-10 text-white sm:px-10">
      <div class="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <h3 class="text-2xl font-semibold">{{ t("site.changelog.bottomTitle") }}</h3>
          <p class="mt-2 text-white/80">{{ t("site.changelog.bottomLead") }}</p>
        </div>
        <NuxtLink
          :to="localePath('/tutorials')"
          class="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100"
        >
          {{ t("site.changelog.bottomCta") }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();
const siteUrl = useSiteUrl();

useSeoMeta({
  title: computed(() => t("site.changelog.seoTitle")),
  description: computed(() => t("site.changelog.seoDescription")),
  ogTitle: computed(() => `Telemaster — ${t("site.changelog.seoTitle")}`),
  ogDescription: computed(() => t("site.changelog.seoDescription")),
  ogUrl: computed(() => `${siteUrl}${localePath("/changelog")}`),
});
useHead(() => ({
  link: [{ rel: "canonical", href: `${siteUrl}${localePath("/changelog")}` }],
}));
</script>
