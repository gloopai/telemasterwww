import tailwindcss from "@tailwindcss/vite";
import { readdir } from "node:fs/promises";
import { join } from "node:path";

async function tutorialPaths(): Promise<string[]> {
  try {
    const dir = join(process.cwd(), "content", "tutorials");
    const files = await readdir(dir);
    return files
      .filter((f) => f.endsWith(".md"))
      .map((f) => `/tutorials/${f.replace(/\.md$/, "")}`);
  } catch {
    return [];
  }
}

const staticPrerenderRoutes = [
  "/",
  "/pricing",
  "/features",
  "/use-cases",
  "/integrations",
  "/alliance",
  "/ton",
  "/mini-apps",
  "/mini-games",
  "/changelog",
  "/about",
  "/contact",
  "/terms",
  "/privacy",
  "/faq",
  "/tutorials",
  "/signin",
  "/signup",
  "/reset-password",
  "/language",
];

export default defineNuxtConfig(async () => {
  const tutorialRoutes = await tutorialPaths();
  const allBaseRoutes = [...staticPrerenderRoutes, ...tutorialRoutes];
  const prefixedLocales = ["zh", "ja", "ko"] as const;
  const prefixedRoutes = prefixedLocales.flatMap((prefix) =>
    allBaseRoutes.map((r) => (r === "/" ? `/${prefix}` : `/${prefix}${r}`)),
  );
  return {
    compatibilityDate: "2025-07-15",
    devtools: { enabled: true },
    modules: ["@nuxtjs/i18n"],
    i18n: {
      restructureDir: false,
      vueI18n: "./i18n.config.ts",
      locales: [
        {
          code: "en",
          language: "en-US",
          name: "English",
          files: [
            "en/common.json",
            "en/home.json",
            "en/seo.json",
            "en/pages.json",
            "en/site.json",
            "en/site-content.json",
          ],
        },
        {
          code: "zh",
          language: "zh-CN",
          name: "中文",
          files: [
            "zh/common.json",
            "zh/home.json",
            "zh/seo.json",
            "zh/pages.json",
            "zh/site.json",
            "zh/site-content.json",
          ],
        },
        {
          code: "ja",
          language: "ja",
          name: "日本語",
          files: [
            "ja/common.json",
            "ja/home.json",
            "ja/seo.json",
            "ja/pages.json",
            "ja/site.json",
            "ja/site-content.json",
          ],
        },
        {
          code: "ko",
          language: "ko",
          name: "한국어",
          files: [
            "ko/common.json",
            "ko/home.json",
            "ko/seo.json",
            "ko/pages.json",
            "ko/site.json",
            "ko/site-content.json",
          ],
        },
      ],
      defaultLocale: "en",
      lazy: true,
      langDir: "locales",
      bundle: {
        optimizeTranslationDirective: false,
      },
      strategy: "prefix_except_default",
      detectBrowserLanguage: {
        useCookie: true,
        cookieKey: "i18n_redirected",
        redirectOn: "root",
        fallbackLocale: "en",
      },
      baseUrl:
        process.env.NUXT_PUBLIC_SITE_URL ||
        process.env.NEXT_PUBLIC_SITE_URL ||
        "https://telemaster.io",
    },
    css: ["~/assets/css/style.css"],
    vite: {
      plugins: [tailwindcss()],
      // Avoid rewriting `src="/images/..."` into `virtual:public?...` (can 400 on
      // __nuxt_vite_node__/resolve in dev). Public files are still served at /.
      vue: {
        template: {
          transformAssetUrls: {
            includeAbsolute: false,
          },
        },
      },
    },
    runtimeConfig: {
      public: {
        siteUrl:
          process.env.NUXT_PUBLIC_SITE_URL ||
          process.env.NEXT_PUBLIC_SITE_URL ||
          "https://telemaster.io",
      },
    },
    app: {
      head: {
        charset: "utf-8",
        meta: [
          /* 必须显式写出 meta：仅依赖 app.head.viewport 时，部分环境设备模式/内嵌 WebView 下可能不生效，导致布局宽度≈980px、md 断点误触发 */
          {
            name: "viewport",
            content:
              "width=device-width, initial-scale=1, viewport-fit=cover",
          },
          {
            name: "description",
            content:
              "Operations platform for Telegram groups, channels, and bots—moderation, auto-replies, scheduling, and analytics in one console.",
          },
          { name: "theme-color", content: "#0B1220" },
          { property: "og:type", content: "website" },
          { property: "og:locale", content: "en_US" },
          { name: "twitter:card", content: "summary_large_image" },
        ],
        link: [
          { rel: "preconnect", href: "https://fonts.googleapis.com" },
          {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
            crossorigin: "",
          },
          {
            rel: "icon",
            href: "/favicon.svg",
            type: "image/svg+xml",
          },
          {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
          },
        ],
      },
    },
    nitro: {
      preset: "vercel",
      prerender: {
        crawlLinks: true,
        routes: [...allBaseRoutes, ...prefixedRoutes],
      },
    },
  };
});
