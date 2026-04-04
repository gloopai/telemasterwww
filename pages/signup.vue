<template>
  <div>
    <div class="mb-10">
      <h1 class="text-4xl font-bold">{{ t("pages.auth.signup.heading") }}</h1>
    </div>

    <form>
      <div class="space-y-4">
        <div>
          <label
            class="mb-1 block text-sm font-medium text-gray-700"
            for="name"
          >
            {{ t("pages.auth.signup.name") }}
          </label>
          <input
            id="name"
            class="form-input w-full py-2"
            type="text"
            :placeholder="t('pages.auth.signup.namePlaceholder')"
            required
          />
        </div>
        <div>
          <label
            class="mb-1 block text-sm font-medium text-gray-700"
            for="email"
          >
            {{ t("pages.auth.signup.email") }}
          </label>
          <input
            id="email"
            class="form-input w-full py-2"
            type="email"
            placeholder="name@example.com"
            required
          />
        </div>
        <div>
          <label
            class="mb-1 block text-sm font-medium text-gray-700"
            for="phone"
          >
            {{ t("pages.auth.signup.phone") }}
          </label>
          <input
            id="phone"
            class="form-input w-full py-2"
            type="text"
            :placeholder="t('pages.auth.signup.phoneOptional')"
          />
        </div>
        <div>
          <label
            class="mb-1 block text-sm font-medium text-gray-700"
            for="password"
          >
            {{ t("pages.auth.signup.password") }}
          </label>
          <input
            id="password"
            class="form-input w-full py-2"
            type="password"
            autocomplete="on"
            placeholder="••••••••"
            required
          />
        </div>
      </div>
      <div class="mt-6 space-y-3">
        <button
          type="button"
          class="btn w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%]"
        >
          {{ t("pages.auth.signup.submit") }}
        </button>
        <div class="text-center text-sm italic text-gray-400">
          {{ t("pages.auth.signup.or") }}
        </div>
        <button
          type="button"
          class="btn w-full bg-linear-to-t from-gray-900 to-gray-700 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%]"
        >
          {{ t("pages.auth.signup.continueWithGithub") }}
        </button>
      </div>
    </form>

    <div class="mt-6 text-center">
      <p class="text-sm text-gray-500">
        {{ t("pages.auth.signup.agreePrefix") }}
        <NuxtLink
          class="whitespace-nowrap font-medium text-gray-700 underline hover:no-underline"
          :to="localePath('/terms')"
        >
          {{ t("pages.auth.signup.terms") }}
        </NuxtLink>
        {{ t("pages.auth.signup.and") }}
        <NuxtLink
          class="whitespace-nowrap font-medium text-gray-700 underline hover:no-underline"
          :to="localePath('/privacy')"
        >
          {{ t("pages.auth.signup.privacy") }}
        </NuxtLink>
        {{ t("pages.auth.signup.agreeSuffix") }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: "auth" });

const { t } = useI18n();
const localePath = useLocalePath();
const siteUrl = useSiteUrl();
useSeoMeta({
  title: computed(() => t("seo.signup.title")),
  description: computed(() => t("seo.signup.description")),
  ogTitle: computed(() => t("seo.signup.ogTitle")),
  ogDescription: computed(() => t("seo.signup.ogDescription")),
  ogUrl: computed(() => `${siteUrl}${localePath("/signup")}`),
  robots: "noindex, nofollow",
});
useHead(() => ({
  link: [{ rel: "canonical", href: `${siteUrl}${localePath("/signup")}` }],
}));
</script>
