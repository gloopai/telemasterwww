<template>
  <div class="flex min-h-screen flex-col">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const siteUrl = useSiteUrl();
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
  },
};

useHead({
  bodyAttrs: {
    class:
      "bg-gray-50 font-inter tracking-tight text-gray-900 antialiased scroll-smooth",
  },
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify(jsonLd),
    },
  ],
});
</script>
