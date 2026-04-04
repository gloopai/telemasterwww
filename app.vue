<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { DEFAULT_OG_IMAGE_ALT } from "~/composables/useDefaultOgImage";

const siteUrl = useSiteUrl();
const defaultOgUrl = useDefaultOgImageUrl();
const logoUrl = `${siteUrl}/images/telemaster-mark.svg`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Telemaster",
  url: siteUrl,
  inLanguage: "zh-CN",
  publisher: {
    "@type": "Organization",
    name: "Telemaster",
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: logoUrl,
    },
  },
};

useSeoMeta({
  ogSiteName: "Telemaster",
  ogImage: defaultOgUrl,
  ogImageAlt: DEFAULT_OG_IMAGE_ALT,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageType: "image/png",
  twitterImage: defaultOgUrl,
  twitterImageAlt: DEFAULT_OG_IMAGE_ALT,
});

useHead({
  titleTemplate: (titleChunk?: string | null) => {
    const s = typeof titleChunk === "string" ? titleChunk.trim() : "";
    if (s) return `${s} · Telemaster`;
    return "Telemaster · AI 驱动的 Telegram 运营平台";
  },
  bodyAttrs: {
    class:
      "bg-gray-50 font-inter tracking-tight text-gray-900 antialiased",
  },
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify(jsonLd),
    },
  ],
});
</script>
