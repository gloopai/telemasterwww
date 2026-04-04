<template>
  <div class="mx-auto max-w-4xl px-4 py-28 sm:px-6 sm:py-32">
    <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      {{ t("pages.tutorialsIndex.heading") }}
    </h1>
    <p class="mt-3 text-base text-gray-700">
      {{ t("pages.tutorialsIndex.lead") }}
    </p>

    <div class="mt-10">
      <p v-if="!tutorials?.length" class="text-gray-600">
        {{ t("pages.tutorialsIndex.empty") }}
      </p>
      <ul v-else class="space-y-6">
        <li
          v-for="article in tutorials"
          :key="article.slug"
          class="rounded-2xl bg-white p-6 shadow-sm"
        >
          <div
            class="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between"
          >
            <h2 class="text-xl font-semibold text-gray-900">
              <NuxtLink
                class="hover:underline"
                :to="localePath(`/tutorials/${article.slug}`)"
              >
                {{ article.title }}
              </NuxtLink>
            </h2>
            <div class="text-sm text-gray-500">
              {{ formatTutorialDate(article.date) }}
            </div>
          </div>
          <p v-if="article.description" class="mt-3 text-gray-700">
            {{ article.description }}
          </p>
          <div
            v-if="article.tags?.length"
            class="mt-4 flex flex-wrap gap-2"
          >
            <span
              v-for="tag in article.tags"
              :key="tag"
              class="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700"
            >
              {{ tag }}
            </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatTutorialDate } from "~/utils/formatTutorialDate";

type Tutorial = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags?: string[];
};

const siteUrl = useSiteUrl();
const { t } = useI18n();
const localePath = useLocalePath();

useSeoMeta({
  title: computed(() => t("seo.tutorialsIndex.title")),
  description: computed(() => t("seo.tutorialsIndex.description")),
  ogTitle: computed(() => t("seo.tutorialsIndex.ogTitle")),
  ogDescription: computed(() => t("seo.tutorialsIndex.ogDescription")),
  ogUrl: computed(() => `${siteUrl}${localePath("/tutorials")}`),
});
useHead(() => ({
  link: [{ rel: "canonical", href: `${siteUrl}${localePath("/tutorials")}` }],
}));

const { data: tutorials } = await useAsyncData("tutorials-list", () =>
  $fetch<Tutorial[]>("/api/tutorials"),
);
</script>
