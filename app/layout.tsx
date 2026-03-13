import "./css/style.css";

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

function getSiteUrl(): string {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    process.env.VERCEL_URL;
  if (!raw) return "http://localhost:3000";
  if (raw.startsWith("http://") || raw.startsWith("https://")) return raw;
  return `https://${raw}`;
}

const metadataBase = new URL(getSiteUrl());
const siteName = "Telemaster";
const defaultTitle = "Telemaster - AI 驱动的 Telegram 运营平台";
const defaultDescription =
  "面向 Telegram 群组、频道与机器人的运营平台：群组治理、自动回复、内容排期与数据复盘。";

export const viewport: Viewport = {
  themeColor: "#0B1220",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: defaultTitle,
    template: "%s - Telemaster",
  },
  description: defaultDescription,
  applicationName: siteName,
  keywords: [
    "Telegram 运营",
    "Telegram 群组管理",
    "Telegram 频道运营",
    "Telegram 机器人管理",
    "自动回复",
    "反垃圾",
    "内容排期",
    "数据复盘",
    "AI 助理",
    "Telegram bot management",
    "Telegram group management",
    "Telegram channel management",
    "Telegram automation",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "/",
    siteName,
    title: defaultTitle,
    description: defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: metadataBase.toString(),
    inLanguage: "zh-CN",
    publisher: {
      "@type": "Organization",
      name: siteName,
      url: metadataBase.toString(),
    },
  };

  return (
    <html lang="zh-CN" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} bg-gray-50 font-inter tracking-tight text-gray-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
