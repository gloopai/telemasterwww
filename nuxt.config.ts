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
];

export default defineNuxtConfig(async () => {
  const tutorialRoutes = await tutorialPaths();
  return {
    compatibilityDate: "2025-07-15",
    devtools: { enabled: true },
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
        htmlAttrs: { lang: "zh-CN" },
        charset: "utf-8",
        title: "Telemaster - AI 驱动的 Telegram 运营平台",
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
              "面向 Telegram 群组、频道与机器人的运营平台：群组治理、自动回复、内容排期与数据复盘。",
          },
          { name: "theme-color", content: "#0B1220" },
          { property: "og:type", content: "website" },
          { property: "og:locale", content: "zh_CN" },
          { name: "twitter:card", content: "summary_large_image" },
        ],
        link: [
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
        routes: [...staticPrerenderRoutes, ...tutorialRoutes],
      },
    },
  };
});
