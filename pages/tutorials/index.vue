<template>
  <div class="mx-auto max-w-4xl px-4 py-28 sm:px-6 sm:py-32">
    <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      教学文章
    </h1>
    <p class="mt-3 text-base text-gray-700">
      面向搜索引擎与用户的高质量教程内容，帮助你更高效地使用 Telemaster 管理 Telegram。
    </p>

    <div class="mt-10">
      <p v-if="!tutorials?.length" class="text-gray-600">暂无文章。</p>
      <ul v-else class="space-y-6">
        <li
          v-for="t in tutorials"
          :key="t.slug"
          class="rounded-2xl bg-white p-6 shadow-sm"
        >
          <div
            class="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between"
          >
            <h2 class="text-xl font-semibold text-gray-900">
              <NuxtLink class="hover:underline" :to="`/tutorials/${t.slug}`">
                {{ t.title }}
              </NuxtLink>
            </h2>
            <div class="text-sm text-gray-500">
              {{ formatTutorialDate(t.date) }}
            </div>
          </div>
          <p v-if="t.description" class="mt-3 text-gray-700">{{ t.description }}</p>
          <div
            v-if="t.tags?.length"
            class="mt-4 flex flex-wrap gap-2"
          >
            <span
              v-for="tag in t.tags"
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
useSeoMeta({
  title: "教程",
  description:
    "Telemaster 教学文章与最佳实践，覆盖 Telegram 群组、频道与机器人运营。",
  ogTitle: "Telemaster - 教程",
  ogDescription:
    "Telemaster 教学文章与最佳实践，覆盖 Telegram 群组、频道与机器人运营。",
  ogUrl: `${siteUrl}/tutorials`,
});
useHead({
  link: [{ rel: "canonical", href: `${siteUrl}/tutorials` }],
});

const { data: tutorials } = await useAsyncData("tutorials-list", () =>
  $fetch<Tutorial[]>("/api/tutorials"),
);
</script>
