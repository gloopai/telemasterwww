<template>
  <div class="relative">
    <div
      class="pointer-events-none absolute left-1/2 top-0 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-linear-to-tr from-blue-500/20 via-blue-500/10 to-transparent blur-[120px]"
      aria-hidden="true"
    />

    <div class="mx-auto max-w-6xl px-4 py-28 sm:px-6 sm:py-32">
      <div class="mx-auto max-w-3xl text-center">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {{ t("site.pricing.title") }}
        </h1>
        <p class="mt-4 text-lg text-gray-700">
          {{ t("site.pricing.lead") }}
        </p>
      </div>

      <div class="mt-12 grid gap-6 lg:grid-cols-3">
        <div
          v-for="(plan, pi) in plans"
          :key="plan.name"
          :class="[
            'relative rounded-3xl bg-white p-6 shadow-sm',
            plan.highlighted
              ? 'ring-2 ring-blue-500 shadow-blue-500/10'
              : 'ring-1 ring-gray-200',
          ]"
        >
          <div
            v-if="plan.badge"
            class="absolute right-6 top-6 rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-700"
          >
            {{ plan.badge }}
          </div>

          <div class="flex items-center justify-between">
            <h2 class="text-xl font-semibold text-gray-900">
              {{ plan.name }}
            </h2>
          </div>

          <p class="mt-3 text-sm text-gray-600">{{ plan.description }}</p>

          <div class="mt-6 flex items-baseline gap-2">
            <div class="text-4xl font-bold text-gray-900">
              {{ plan.price }}
            </div>
            <div class="text-sm text-gray-500">{{ plan.period }}</div>
          </div>

          <NuxtLink
            :to="localePath('/signup')"
            :class="[
              'mt-6 inline-flex w-full items-center justify-center rounded-lg px-4 py-3 text-sm font-medium transition',
              plan.highlighted
                ? 'bg-linear-to-t from-blue-600 to-blue-500 text-white shadow-sm hover:from-blue-600 hover:to-blue-600'
                : 'bg-gray-900 text-white hover:bg-gray-800',
            ]"
          >
            {{ plan.ctaLabel }}
          </NuxtLink>

          <div class="mt-6 border-t border-gray-200 pt-6">
            <div class="text-sm font-medium text-gray-900">
              {{ t("site.pricing.includedLabel") }}
            </div>
            <ul class="mt-4 space-y-3 text-sm text-gray-700">
              <li v-for="f in plan.features" :key="f" class="flex gap-3">
                <svg
                  class="mt-0.5 h-4 w-4 shrink-0 fill-blue-500"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M6.4 11.2 3.2 8l1.13-1.13L6.4 8.94l5.27-5.27L12.8 4.8 6.4 11.2Z"
                  />
                </svg>
                <span>{{ f }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mt-16 rounded-3xl bg-gray-900 px-6 py-10 text-white sm:px-10">
        <div
          class="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center"
        >
          <div>
            <h3 class="text-2xl font-semibold">
              {{ t("site.pricing.enterpriseTitle") }}
            </h3>
            <p class="mt-2 text-white/80">
              {{ t("site.pricing.enterpriseLead") }}
            </p>
          </div>
          <NuxtLink
            :to="localePath('/signup')"
            class="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100"
          >
            {{ t("site.pricing.enterpriseCta") }}
          </NuxtLink>
        </div>
      </div>

      <div class="mt-16 grid gap-6 lg:grid-cols-3">
        <div
          v-for="fi in [0, 1, 2]"
          :key="fi"
          class="rounded-3xl bg-white p-6 ring-1 ring-gray-200"
        >
          <div class="text-sm font-semibold text-gray-900">
            {{ t(`site.pricing.faq.${fi}.q`) }}
          </div>
          <div class="mt-2 text-sm text-gray-700">
            {{ t(`site.pricing.faq.${fi}.a`) }}
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

const PLAN_FEATURE_COUNTS = [5, 6, 6] as const;

const plans = computed(() => {
  return [0, 1, 2].map((i) => {
    const badgeRaw = t(`site.pricing.plans.${i}.badge`);
    const features = Array.from({ length: PLAN_FEATURE_COUNTS[i] }, (_, j) =>
      t(`site.pricing.plans.${i}.features.${j}`),
    );
    return {
      name: t(`site.pricing.plans.${i}.name`),
      price: t(`site.pricing.plans.${i}.price`),
      period: t(`site.pricing.plans.${i}.period`),
      description: t(`site.pricing.plans.${i}.description`),
      badge: badgeRaw.trim() ? badgeRaw : "",
      ctaLabel: t(`site.pricing.plans.${i}.cta`),
      features,
      highlighted: i === 1,
    };
  });
});

useSeoMeta({
  title: computed(() => t("site.pricing.seoTitle")),
  description: computed(() => t("site.pricing.seoDescription")),
  ogTitle: computed(() => `Telemaster — ${t("site.pricing.seoTitle")}`),
  ogDescription: computed(() => t("site.pricing.seoDescription")),
  ogUrl: computed(() => `${siteUrl}${localePath("/pricing")}`),
});
useHead(() => ({
  link: [{ rel: "canonical", href: `${siteUrl}${localePath("/pricing")}` }],
}));
</script>
