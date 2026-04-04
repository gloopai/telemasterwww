<template>
  <div class="min-h-[calc(100vh-8rem)] bg-[#f5f5f7] pb-24 pt-8 sm:pt-12">
    <div class="mx-auto max-w-xl px-4 sm:px-6">
      <div class="mb-8">
        <NuxtLink
          :to="localePath('/')"
          class="inline-flex items-center gap-1 text-[15px] text-blue-600 hover:underline"
        >
          <span aria-hidden="true">‹</span>
          {{ t("site.language.backHome") }}
        </NuxtLink>
      </div>

      <header class="mb-10 text-center">
        <h1
          class="text-[28px] font-semibold leading-tight tracking-tight text-gray-900 sm:text-[32px]"
        >
          {{ t("site.language.title") }}
        </h1>
        <p class="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-gray-500">
          {{ t("site.language.subtitle") }}
        </p>
      </header>

      <div
        class="overflow-hidden rounded-xl bg-white shadow-[0_2px_16px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.04]"
        role="listbox"
        :aria-label="t('site.language.title')"
      >
        <button
          v-for="opt in localeOptions"
          :key="opt.code"
          type="button"
          role="option"
          :aria-selected="locale === opt.code"
          class="flex w-full items-center justify-between gap-4 border-b border-gray-100 px-5 py-4 text-left transition last:border-b-0 hover:bg-gray-50 active:bg-gray-100/80"
          @click="selectLocale(opt.code)"
        >
          <span class="text-[17px] text-gray-900">{{ opt.nativeLabel }}</span>
          <span
            v-if="locale === opt.code"
            class="flex h-6 w-6 shrink-0 items-center justify-center text-blue-600"
            aria-hidden="true"
          >
            <svg
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </span>
        </button>
      </div>

      <p class="mt-8 text-center text-[12px] leading-relaxed text-gray-400">
        {{ t("site.language.hint") }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t, locale } = useI18n();
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();

const localeOptions = [
  { code: "en", nativeLabel: "English" },
  { code: "zh", nativeLabel: "中文" },
  { code: "ja", nativeLabel: "日本語" },
  { code: "ko", nativeLabel: "한국어" },
] as const;

function selectLocale(code: string) {
  const path = switchLocalePath(code);
  if (path) void navigateTo(path);
}

const siteUrl = useSiteUrl();
useSeoMeta({
  title: computed(() => t("seo.language.title")),
  description: computed(() => t("seo.language.description")),
  ogTitle: computed(() => t("seo.language.ogTitle")),
  ogDescription: computed(() => t("seo.language.ogDescription")),
  ogUrl: computed(() => `${siteUrl}${localePath("/language")}`),
  robots: "noindex, follow",
});
useHead(() => ({
  link: [{ rel: "canonical", href: `${siteUrl}${localePath("/language")}` }],
}));
</script>
