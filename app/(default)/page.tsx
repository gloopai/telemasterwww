import type { Metadata } from "next";

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";

export const metadata: Metadata = {
  title: "AI 驱动的 Telegram 运营平台",
  description:
    "用 AI + 自动化把群组治理、自动回复、内容排期与数据复盘统一到一个控制台。",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Telemaster - AI 驱动的 Telegram 运营平台",
    description:
      "用 AI + 自动化把群组治理、自动回复、内容排期与数据复盘统一到一个控制台。",
    url: "/",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessCategories />
      <FeaturesPlanet />
      <LargeTestimonial />
      <Cta />
    </>
  );
}
