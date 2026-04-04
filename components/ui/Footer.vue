<template>
  <footer
    class="min-w-0 overflow-x-clip pb-[max(1rem,env(safe-area-inset-bottom))]"
  >
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <div
        :class="[
          'grid gap-10 py-8 sm:grid-cols-12 md:py-12',
          border
            ? 'border-t [border-image:linear-gradient(to_right,transparent,var(--color-slate-200),transparent)1]'
            : '',
        ]"
      >
        <div class="space-y-2 sm:col-span-12 lg:col-span-4">
          <div>
            <UiLogo />
          </div>
          <div class="text-sm text-gray-700">
            {{ t("footer.rights") }}
          </div>
        </div>

        <div class="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
          <h3 class="text-sm font-medium text-gray-900">{{ t("footer.product") }}</h3>
          <ul class="space-y-2 text-sm">
            <li>
              <NuxtLink
                class="text-gray-700 transition hover:text-gray-950"
                :to="localePath('/features')"
              >
                {{ t("nav.features") }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                class="text-gray-700 transition hover:text-gray-950"
                :to="localePath('/integrations')"
              >
                {{ t("nav.integrations") }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                class="text-gray-700 transition hover:text-gray-950"
                :to="localePath('/pricing')"
              >
                {{ t("nav.pricing") }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                class="text-gray-700 transition hover:text-gray-950"
                :to="localePath('/changelog')"
              >
                {{ t("nav.changelog") }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                class="text-gray-700 transition hover:text-gray-950"
                :to="localePath('/use-cases')"
              >
                {{ t("nav.useCases") }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div class="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
          <h3 class="text-sm font-medium text-gray-900">{{ t("footer.company") }}</h3>
          <ul class="space-y-2 text-sm">
            <li>
              <NuxtLink
                class="text-gray-700 transition hover:text-gray-950"
                :to="localePath('/about')"
              >
                {{ t("nav.about") }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                class="text-gray-700 transition hover:text-gray-950"
                :to="localePath('/contact')"
              >
                {{ t("nav.contact") }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                class="text-gray-700 transition hover:text-gray-950"
                :to="localePath('/tutorials')"
              >
                {{ t("nav.tutorials") }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                class="text-gray-700 transition hover:text-gray-950"
                :to="localePath('/faq')"
              >
                {{ t("nav.faq") }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                class="text-gray-700 transition hover:text-gray-950"
                :to="localePath('/pricing')"
              >
                {{ t("footer.pricingPlans") }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div class="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
          <h3 class="text-sm font-medium text-gray-900">{{ t("footer.resources") }}</h3>
          <ul class="space-y-2 text-sm">
            <li>
              <NuxtLink
                class="text-gray-700 transition hover:text-gray-950"
                :to="localePath('/use-cases')"
              >
                {{ t("nav.useCases") }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                class="text-gray-700 transition hover:text-gray-950"
                :to="localePath('/terms')"
              >
                {{ t("nav.terms") }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                class="text-gray-700 transition hover:text-gray-950"
                :to="localePath('/privacy')"
              >
                {{ t("nav.privacy") }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="mt-10 flex flex-col gap-3 border-t border-gray-200 pt-8 sm:flex-row sm:items-center sm:justify-between"
      >
        <p class="text-xs text-gray-500">
          {{ t("footer.languageHint") }}
        </p>
        <NuxtLink
          :to="localePath('/language')"
          class="text-sm font-medium text-blue-600 transition hover:text-blue-700 hover:underline"
        >
          {{ t("footer.languageLink") }}
        </NuxtLink>
      </div>
    </div>

    <div
      class="pointer-events-none relative -mt-16 h-60 w-full"
      aria-hidden="true"
    >
      <div
        class="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 text-center text-[348px] font-bold leading-none before:bg-linear-to-b before:from-gray-200 before:to-gray-100/30 before:to-80% before:bg-clip-text before:text-transparent before:content-['Telemaster'] after:absolute after:inset-0 after:bg-gray-300/70 after:bg-clip-text after:text-transparent after:mix-blend-darken after:content-['Telemaster'] after:[text-shadow:0_1px_0_white]"
      />
      <div
        class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3"
        aria-hidden="true"
      >
        <div class="h-56 w-56 rounded-full border-[20px] border-blue-700 blur-[80px]" />
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
const { t } = useI18n();

withDefaults(
  defineProps<{
    border?: boolean;
  }>(),
  { border: false },
);
</script>
