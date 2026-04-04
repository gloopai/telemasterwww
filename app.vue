<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const siteUrl = useSiteUrl();
const defaultOgUrl = useDefaultOgImageUrl();
const logoUrl = `${siteUrl}/images/telemaster-mark.svg`;

const { t, locale } = useI18n();
const localeHead = useLocaleHead({ addSeoAttributes: true });

const jsonLdInLanguage: Record<string, string> = {
  en: "en",
  zh: "zh-CN",
  ja: "ja",
  ko: "ko",
  ru: "ru",
  es: "es",
  hi: "hi",
};

const jsonLd = computed(() => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Telemaster",
  url: siteUrl,
  inLanguage: jsonLdInLanguage[locale.value] ?? "en",
  publisher: {
    "@type": "Organization",
    name: "Telemaster",
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: logoUrl,
    },
  },
}));

useSeoMeta({
  ogSiteName: "Telemaster",
  ogImage: defaultOgUrl,
  ogImageAlt: computed(() => t("seo.defaultOgImageAlt")),
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageType: "image/png",
  twitterImage: defaultOgUrl,
  twitterImageAlt: computed(() => t("seo.defaultOgImageAlt")),
});

useHead(() => ({
  titleTemplate: (titleChunk?: string | null) => {
    const s = typeof titleChunk === "string" ? titleChunk.trim() : "";
    if (s) return t("seo.titleTemplate", { title: s });
    return t("seo.defaultTitle");
  },
  bodyAttrs: {
    class:
      "bg-gray-50 font-inter tracking-tight text-gray-900 antialiased",
  },
  htmlAttrs: localeHead.value.htmlAttrs,
  link: localeHead.value.link,
  meta: localeHead.value.meta,
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify(jsonLd.value),
    },
  ],
}));
</script>
