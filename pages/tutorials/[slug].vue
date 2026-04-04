<template>
  <div v-if="tutorial" class="mx-auto max-w-3xl px-4 py-28 sm:px-6 sm:py-32">
    <div class="text-sm text-gray-500">
      <NuxtLink class="hover:underline" :to="localePath('/tutorials')">{{
        t("seo.tutorials.breadcrumb")
      }}</NuxtLink>
      <span class="mx-2">/</span>
      <span class="text-gray-700">{{ tutorial.title }}</span>
    </div>

    <h1 class="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      {{ tutorial.title }}
    </h1>

    <div class="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-600">
      <span>{{ formatTutorialDate(tutorial.date) }}</span>
      <span v-if="tutorial.tags?.length" class="flex flex-wrap gap-2">
        <span
          v-for="tag in tutorial.tags"
          :key="tag"
          class="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700"
        >
          {{ tag }}
        </span>
      </span>
    </div>

    <p v-if="tutorial.description" class="mt-6 text-base text-gray-700">
      {{ tutorial.description }}
    </p>

    <div class="markdown mt-10" v-html="tutorial.html" />
  </div>
</template>

<script setup lang="ts">
import { formatTutorialDate } from "~/utils/formatTutorialDate";

type TutorialPage = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags?: string[];
  keywords?: string[];
  ogImage?: string;
  html: string;
};

const route = useRoute();
const siteUrl = useSiteUrl();
const { t } = useI18n();
const localePath = useLocalePath();

const asyncKey = computed(() => `tutorial-${String(route.params.slug)}`);

const { data: tutorialData, error } = await useAsyncData(
  asyncKey,
  () =>
    $fetch<TutorialPage>(`/api/tutorials/${String(route.params.slug)}`),
  { watch: [asyncKey] },
);

watch(error, (e) => {
  if (e) showError({ statusCode: 404, statusMessage: "Not found" });
});

if (error.value) {
  throw createError({ statusCode: 404, statusMessage: "Not found" });
}

const tutorial = computed(() => tutorialData.value ?? null);

const pageUrl = computed(() =>
  tutorial.value
    ? `${siteUrl}${localePath(`/tutorials/${tutorial.value.slug}`)}`
    : siteUrl,
);

const defaultOgUrl = useDefaultOgImageUrl();

const ogImageAbsolute = computed(() => {
  const img = tutorial.value?.ogImage;
  if (!img) return defaultOgUrl;
  if (img.startsWith("http://") || img.startsWith("https://")) return img;
  if (img.startsWith("/")) return `${siteUrl}${img}`;
  return `${siteUrl}/${img}`;
});

const ogImageAltText = computed(() =>
  tutorial.value?.ogImage
    ? tutorial.value.title
    : t("seo.defaultOgImageAlt"),
);

useSeoMeta({
  title: computed(() =>
    tutorial.value
      ? `${tutorial.value.title} ${t("seo.tutorials.titleSuffix")}`
      : t("seo.tutorials.titleFallback"),
  ),
  description: computed(() => tutorial.value?.description ?? ""),
  ogTitle: computed(() => tutorial.value?.title ?? ""),
  ogDescription: computed(() => tutorial.value?.description ?? ""),
  ogUrl: pageUrl,
  ogType: "article",
  ogImage: ogImageAbsolute,
  ogImageAlt: ogImageAltText,
  twitterImage: ogImageAbsolute,
  twitterImageAlt: ogImageAltText,
  keywords: computed(() => tutorial.value?.keywords?.join(", ") ?? undefined),
});

useHead(() => ({
  link: [{ rel: "canonical", href: pageUrl.value }],
  script: tutorial.value
    ? [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: tutorial.value.title,
            description: tutorial.value.description,
            datePublished: tutorial.value.date,
            image: ogImageAbsolute.value,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": pageUrl.value,
            },
            author: {
              "@type": "Organization",
              name: "Telemaster",
            },
            publisher: {
              "@type": "Organization",
              name: "Telemaster",
              url: siteUrl,
              logo: {
                "@type": "ImageObject",
                url: `${siteUrl}/images/telemaster-mark.svg`,
              },
            },
          }),
        },
      ]
    : [],
}));
</script>
