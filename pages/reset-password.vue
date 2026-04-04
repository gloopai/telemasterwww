<template>
  <div>
    <div class="mb-10">
      <h1 class="text-4xl font-bold">{{ t("pages.auth.resetPassword.heading") }}</h1>
    </div>

    <form>
      <div class="space-y-4">
        <div>
          <label
            class="mb-1 block text-sm font-medium text-gray-700"
            for="email"
          >
            {{ t("pages.auth.resetPassword.email") }}
          </label>
          <input
            id="email"
            class="form-input w-full py-2"
            type="email"
            placeholder="name@example.com"
            required
          />
        </div>
      </div>
      <div class="mt-6">
        <button
          type="button"
          class="btn w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%]"
        >
          {{ t("pages.auth.resetPassword.submit") }}
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: "auth" });

const { t } = useI18n();
const localePath = useLocalePath();
const siteUrl = useSiteUrl();
useSeoMeta({
  title: computed(() => t("seo.resetPassword.title")),
  description: computed(() => t("seo.resetPassword.description")),
  ogTitle: computed(() => t("seo.resetPassword.ogTitle")),
  ogDescription: computed(() => t("seo.resetPassword.ogDescription")),
  ogUrl: computed(() => `${siteUrl}${localePath("/reset-password")}`),
  robots: "noindex, nofollow",
});
useHead(() => ({
  link: [{ rel: "canonical", href: `${siteUrl}${localePath("/reset-password")}` }],
}));
</script>
