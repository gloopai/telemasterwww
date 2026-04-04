<template>
  <section class="border-t border-gray-200/80 bg-gray-50">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <div class="py-12 sm:py-16 md:py-24">
        <div class="mx-auto max-w-2xl px-0 pb-10 text-center sm:pb-12 md:pb-16">
          <p class="text-sm font-semibold text-blue-600">
            {{ t("home.business.aiLabel") }}
          </p>
          <h2
            class="mt-2 text-2xl font-bold leading-snug tracking-tight text-gray-900 sm:text-3xl md:text-4xl"
          >
            {{ t("home.business.aiTitle") }}
          </h2>
          <p class="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
            {{ t("home.business.aiSubtitle") }}
          </p>
        </div>

        <div class="grid gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-12">
          <div
            class="flex min-h-[220px] flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm sm:min-h-[260px] sm:rounded-3xl sm:p-8 md:p-10"
          >
            <div
              class="flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-600/10 ring-1 ring-blue-600/10"
            >
              <img
                src="/images/telemaster-mark.svg"
                width="40"
                height="40"
                alt=""
              />
            </div>
            <p class="mt-6 text-base font-semibold text-gray-900">
              {{ t("home.business.orchestrationTitle") }}
            </p>
            <p class="mt-2 max-w-sm text-sm leading-relaxed text-gray-600">
              {{ t("home.business.orchestrationDesc") }}
            </p>
          </div>

          <div class="grid min-w-0 gap-3 sm:grid-cols-2 sm:gap-4">
            <div
              v-for="m in aiModules"
              :key="m.title"
              class="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-200 sm:p-6"
            >
              <div class="flex items-center gap-3">
                <span
                  class="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-blue-700"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M8 1.5c-2.9 0-5.25 2.35-5.25 5.25S5.1 12 8 12s5.25-2.35 5.25-5.25S10.9 1.5 8 1.5Z"
                      fill="currentColor"
                      opacity="0.25"
                    />
                    <path
                      d="M8 4a1 1 0 0 1 1 1v.2a2 2 0 1 1-2 0V5a1 1 0 0 1 1-1Zm0 9.5c-1.37 0-2.6-.56-3.5-1.46a1 1 0 0 1 1.41-1.41c.54.54 1.29.88 2.09.88.8 0 1.55-.34 2.09-.88a1 1 0 0 1 1.41 1.41A4.97 4.97 0 0 1 8 13.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <div class="text-sm font-semibold text-gray-900">
                  {{ m.title }}
                </div>
              </div>
              <div class="mt-3 text-sm text-gray-700">{{ m.desc }}</div>
            </div>
          </div>
        </div>

        <div
          class="mt-12 rounded-2xl border border-gray-200/80 bg-white p-5 shadow-sm sm:mt-16 sm:rounded-3xl sm:p-8 md:p-10"
        >
          <div class="mx-auto max-w-3xl text-center">
            <p class="text-sm font-semibold text-blue-600">
              {{ t("home.business.commerceLabel") }}
            </p>
            <h3
              class="mt-2 text-xl font-bold leading-snug tracking-tight text-gray-900 sm:text-2xl md:text-3xl"
            >
              {{ t("home.business.commerceTitle") }}
            </h3>
            <p class="mt-3 text-left text-sm text-gray-700 sm:text-center sm:text-base">
              {{ t("home.business.commerceSubtitle") }}
            </p>
          </div>

          <div class="mt-6 flex flex-wrap justify-center gap-1.5 sm:mt-8 sm:gap-2">
            <span
              v-for="label in monetizationOptions"
              :key="label"
              class="rounded-full bg-gray-50 px-2.5 py-1 text-[11px] font-medium leading-tight text-gray-700 ring-1 ring-gray-200 sm:px-3 sm:text-xs"
            >
              {{ label }}
            </span>
          </div>

          <div class="mt-8 grid gap-4 sm:mt-10 sm:gap-6 lg:grid-cols-2">
            <div
              v-for="s in monetizationModel"
              :key="s.title"
              class="rounded-2xl bg-gray-50 p-4 ring-1 ring-gray-200 sm:p-6"
            >
              <div class="text-sm font-semibold text-gray-900">
                {{ s.title }}
              </div>
              <div class="mt-2 text-sm text-gray-700">{{ s.desc }}</div>
              <ul class="mt-4 space-y-2 text-sm text-gray-700">
                <li v-for="b in s.bullets" :key="b" class="flex gap-2">
                  <span
                    class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600/70"
                    aria-hidden="true"
                  />
                  <span>{{ b }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          class="mt-12 overflow-hidden rounded-2xl bg-gray-900 p-5 text-white shadow-lg ring-1 ring-white/10 sm:mt-16 sm:rounded-3xl sm:p-8 md:p-10"
        >
          <div class="mx-auto max-w-3xl text-center">
            <p class="text-sm font-semibold text-blue-300/90">
              {{ t("home.business.allianceLabel") }}
            </p>
            <h3 class="mt-2 text-xl font-bold leading-snug tracking-tight sm:text-2xl md:text-3xl">
              {{ t("home.business.allianceTitle") }}
            </h3>
            <p class="mt-3 text-left text-sm leading-relaxed text-white/80 sm:text-center sm:text-base">
              {{ t("home.business.allianceSubtitle") }}
            </p>
          </div>

          <div class="mt-6 flex flex-wrap justify-center gap-1.5 sm:mt-8 sm:gap-2">
            <span
              v-for="label in allianceRoles"
              :key="label"
              class="rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium leading-tight text-white/90 ring-1 ring-white/10 sm:px-3 sm:text-xs"
            >
              {{ label }}
            </span>
          </div>

          <div class="mt-8 grid gap-4 sm:mt-10 sm:gap-6 lg:grid-cols-2">
            <div
              v-for="p in alliancePillars"
              :key="p.title"
              class="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 sm:p-6"
            >
              <div class="text-sm font-semibold text-white">
                {{ p.title }}
              </div>
              <div class="mt-2 text-sm text-white/80">{{ p.desc }}</div>
              <ul class="mt-4 space-y-2 text-sm text-white/80">
                <li v-for="b in p.bullets" :key="b" class="flex gap-2">
                  <span
                    class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400/80"
                    aria-hidden="true"
                  />
                  <span>{{ b }}</span>
                </li>
              </ul>
            </div>
          </div>

          <div
            class="mt-8 flex w-full flex-col items-stretch justify-center gap-2 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3"
          >
            <NuxtLink
              :to="localePath('/contact')"
              class="inline-flex w-full items-center justify-center rounded-lg bg-linear-to-t from-blue-600 to-blue-500 px-5 py-3.5 text-sm font-medium text-white shadow-sm touch-manipulation hover:from-blue-600 hover:to-blue-600 sm:w-auto sm:py-3"
            >
              {{ t("home.business.ctaJoin") }}
            </NuxtLink>
            <NuxtLink
              :to="localePath('/alliance')"
              class="inline-flex w-full items-center justify-center rounded-lg bg-white/10 px-5 py-3.5 text-sm font-medium text-white ring-1 ring-white/10 touch-manipulation hover:bg-white/15 sm:w-auto sm:py-3"
            >
              {{ t("home.business.ctaLearnAlliance") }}
            </NuxtLink>
            <NuxtLink
              :to="localePath('/integrations')"
              class="inline-flex w-full items-center justify-center rounded-lg bg-white/10 px-5 py-3.5 text-sm font-medium text-white ring-1 ring-white/10 touch-manipulation hover:bg-white/15 sm:w-auto sm:py-3"
            >
              {{ t("home.business.ctaIntegrations") }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const AI_MODULE_COUNT = 4;
const aiModules = computed(() =>
  Array.from({ length: AI_MODULE_COUNT }, (_, i) => ({
    title: t(`home.business.aiModules.${i}.title`),
    desc: t(`home.business.aiModules.${i}.desc`),
  })),
);

const MONETIZATION_MODEL_COUNT = 4;
const MONETIZATION_BULLETS_PER_MODEL = 3;
const monetizationModel = computed(() =>
  Array.from({ length: MONETIZATION_MODEL_COUNT }, (_, i) => ({
    title: t(`home.business.monetizationModel.${i}.title`),
    desc: t(`home.business.monetizationModel.${i}.desc`),
    bullets: Array.from({ length: MONETIZATION_BULLETS_PER_MODEL }, (_, j) =>
      t(`home.business.monetizationModel.${i}.bullets.${j}`),
    ),
  })),
);

const MONETIZATION_OPTION_COUNT = 6;
const monetizationOptions = computed(() =>
  Array.from({ length: MONETIZATION_OPTION_COUNT }, (_, i) =>
    t(`home.business.monetizationOptions.${i}`),
  ),
);

const ALLIANCE_ROLE_COUNT = 3;
const allianceRoles = computed(() =>
  Array.from({ length: ALLIANCE_ROLE_COUNT }, (_, i) =>
    t(`home.business.allianceRoles.${i}`),
  ),
);

const PILLAR_COUNT = 4;
const PILLAR_BULLET_COUNTS = [3, 3, 3, 3] as const;
const alliancePillars = computed(() =>
  Array.from({ length: PILLAR_COUNT }, (_, i) => ({
    title: t(`home.business.alliancePillars.${i}.title`),
    desc: t(`home.business.alliancePillars.${i}.desc`),
    bullets: Array.from({ length: PILLAR_BULLET_COUNTS[i] }, (_, j) =>
      t(`home.business.alliancePillars.${i}.bullets.${j}`),
    ),
  })),
);
</script>
