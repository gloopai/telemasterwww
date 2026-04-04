<template>
  <section class="border-t border-gray-200/80 bg-gray-50 pb-12 pt-0 sm:pb-16 md:pb-24">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <div
        class="overflow-hidden rounded-2xl bg-gray-900 px-5 py-10 text-center shadow-lg sm:rounded-3xl sm:px-8 sm:py-12 md:px-12 md:py-16"
      >
        <p class="text-sm font-semibold text-blue-300/90">{{ t("home.cta.label") }}</p>
        <h2
          class="mt-2 text-xl font-bold leading-snug tracking-tight text-white sm:text-2xl md:text-3xl"
        >
          {{ t("home.cta.title") }}
        </h2>
        <p class="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-gray-400">
          {{ t("home.cta.subtitle") }}
        </p>
        <div
          class="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:justify-center"
        >
          <NuxtLink
            class="btn group inline-flex min-h-12 justify-center touch-manipulation bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-md hover:bg-[length:100%_150%] sm:min-h-0 sm:min-w-[9rem]"
            :to="localePath('/pricing')"
          >
            <span class="inline-flex items-center">
              {{ t("home.cta.pricing") }}
              <span class="ml-1 text-blue-200 transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </span>
          </NuxtLink>
          <NuxtLink
            class="btn inline-flex min-h-12 justify-center touch-manipulation bg-white text-gray-900 shadow-sm hover:bg-gray-100 sm:min-h-0 sm:min-w-[9rem]"
            :to="localePath('/contact')"
          >
            {{ t("home.cta.contact") }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();
</script>
