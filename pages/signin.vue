<template>
  <div>
    <div class="mb-10">
      <h1 class="text-4xl font-bold">{{ t("pages.auth.signin.heading") }}</h1>
    </div>
    <form>
      <div class="space-y-4">
        <div>
          <label
            class="mb-1 block text-sm font-medium text-gray-700"
            for="email"
          >
            {{ t("pages.auth.signin.email") }}
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
            for="password"
          >
            {{ t("pages.auth.signin.password") }}
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
      <div class="mt-6">
        <button
          type="button"
          class="btn w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%]"
        >
          {{ t("pages.auth.signin.submit") }}
        </button>
      </div>
    </form>
    <div class="mt-6 text-center">
      <NuxtLink
        class="text-sm text-gray-700 underline hover:no-underline"
        :to="localePath('/reset-password')"
      >
        {{ t("pages.auth.signin.forgotPassword") }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: "auth" });

const { t } = useI18n();
const localePath = useLocalePath();
const siteUrl = useSiteUrl();
useSeoMeta({
  title: computed(() => t("seo.signin.title")),
  description: computed(() => t("seo.signin.description")),
  ogTitle: computed(() => t("seo.signin.ogTitle")),
  ogDescription: computed(() => t("seo.signin.ogDescription")),
  ogUrl: computed(() => `${siteUrl}${localePath("/signin")}`),
  robots: "noindex, nofollow",
});
useHead(() => ({
  link: [{ rel: "canonical", href: `${siteUrl}${localePath("/signin")}` }],
}));
</script>
