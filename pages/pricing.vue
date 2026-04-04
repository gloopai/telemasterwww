<template>
  <div class="relative">
    <div
      class="pointer-events-none absolute left-1/2 top-0 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-linear-to-tr from-blue-500/20 via-blue-500/10 to-transparent blur-[120px]"
      aria-hidden="true"
    />

    <div class="mx-auto max-w-6xl px-4 py-28 sm:px-6 sm:py-32">
      <div class="mx-auto max-w-3xl text-center">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          定价方案
        </h1>
        <p class="mt-4 text-lg text-gray-700">
          面向 Telegram 群组、频道与机器人运营的管理平台。选择适合你团队规模与
          自动化需求的方案。
        </p>
      </div>

      <div class="mt-12 grid gap-6 lg:grid-cols-3">
        <div
          v-for="plan in plans"
          :key="plan.name"
          :class="[
            'relative rounded-3xl bg-white p-6 shadow-sm',
            plan.highlighted
              ? 'ring-2 ring-blue-500 shadow-blue-500/10'
              : 'ring-1 ring-gray-200',
          ]"
        >
          <div
            v-if="plan.badge"
            class="absolute right-6 top-6 rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-700"
          >
            {{ plan.badge }}
          </div>

          <div class="flex items-center justify-between">
            <h2 class="text-xl font-semibold text-gray-900">
              {{ plan.name }}
            </h2>
          </div>

          <p class="mt-3 text-sm text-gray-600">{{ plan.description }}</p>

          <div class="mt-6 flex items-baseline gap-2">
            <div class="text-4xl font-bold text-gray-900">
              {{ plan.price }}
            </div>
            <div class="text-sm text-gray-500">{{ plan.period }}</div>
          </div>

          <NuxtLink
            :to="plan.cta.href"
            :class="[
              'mt-6 inline-flex w-full items-center justify-center rounded-lg px-4 py-3 text-sm font-medium transition',
              plan.highlighted
                ? 'bg-linear-to-t from-blue-600 to-blue-500 text-white shadow-sm hover:from-blue-600 hover:to-blue-600'
                : 'bg-gray-900 text-white hover:bg-gray-800',
            ]"
          >
            {{ plan.cta.label }}
          </NuxtLink>

          <div class="mt-6 border-t border-gray-200 pt-6">
            <div class="text-sm font-medium text-gray-900">包含内容</div>
            <ul class="mt-4 space-y-3 text-sm text-gray-700">
              <li v-for="f in plan.features" :key="f" class="flex gap-3">
                <svg
                  class="mt-0.5 h-4 w-4 shrink-0 fill-blue-500"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M6.4 11.2 3.2 8l1.13-1.13L6.4 8.94l5.27-5.27L12.8 4.8 6.4 11.2Z" />
                </svg>
                <span>{{ f }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mt-16 rounded-3xl bg-gray-900 px-6 py-10 text-white sm:px-10">
        <div class="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h3 class="text-2xl font-semibold">需要企业级方案？</h3>
            <p class="mt-2 text-white/80">
              支持更高并发、更严格的权限与更丰富的集成能力。
            </p>
          </div>
          <NuxtLink
            to="/signup"
            class="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100"
          >
            预约演示
          </NuxtLink>
        </div>
      </div>

      <div class="mt-16 grid gap-6 lg:grid-cols-3">
        <div class="rounded-3xl bg-white p-6 ring-1 ring-gray-200">
          <div class="text-sm font-semibold text-gray-900">是否支持按年付费？</div>
          <div class="mt-2 text-sm text-gray-700">
            支持，按年付费通常会有更优惠的价格与更稳定的预算规划。
          </div>
        </div>
        <div class="rounded-3xl bg-white p-6 ring-1 ring-gray-200">
          <div class="text-sm font-semibold text-gray-900">可以随时升级或降级吗？</div>
          <div class="mt-2 text-sm text-gray-700">
            可以。升级立即生效，降级在下个计费周期生效，保障运营连续性。
          </div>
        </div>
        <div class="rounded-3xl bg-white p-6 ring-1 ring-gray-200">
          <div class="text-sm font-semibold text-gray-900">数据安全与权限如何保障？</div>
          <div class="mt-2 text-sm text-gray-700">
            商业版提供更细粒度的角色权限、操作记录与风险策略，满足团队协作需要。
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type Plan = {
  name: string;
  price: string;
  period: string;
  description: string;
  badge?: string;
  features: string[];
  cta: { label: string; href: string };
  highlighted?: boolean;
};

const plans: Plan[] = [
  {
    name: "免费版",
    price: "¥0",
    period: "/月",
    description: "适合个人尝试与小规模群组，快速上手核心功能。",
    features: [
      "基础机器人与群组管理",
      "关键词自动回复（基础）",
      "基础数据概览（近 7 天）",
      "1 个工作区 / 1 个管理员",
      "社区支持",
    ],
    cta: { label: "免费开始", href: "/signup" },
  },
  {
    name: "高级版",
    price: "¥49",
    period: "/月",
    description: "适合成长型社群与内容团队，效率与自动化全面升级。",
    badge: "最受欢迎",
    highlighted: true,
    features: [
      "高级自动回复与规则联动",
      "定时发布与内容排期",
      "多群/多频道统一看板",
      "更细粒度权限与审计",
      "更长数据留存（90 天）",
      "邮件优先支持",
    ],
    cta: { label: "升级高级版", href: "/signup" },
  },
  {
    name: "商业版",
    price: "¥199",
    period: "/月",
    description: "适合组织级运营与多团队协作，强调安全、权限与规模化。",
    features: [
      "无限工作区成员（按策略管理）",
      "团队协作：角色、审批与操作记录",
      "高级反垃圾与风险策略",
      "全量数据导出与 API（如适用）",
      "自定义域名回调与集成（如适用）",
      "专属支持通道",
    ],
    cta: { label: "联系销售", href: "/signup" },
  },
];

const siteUrl = useSiteUrl();
useSeoMeta({
  title: "定价",
  description:
    "Telemaster 定价方案：免费版、高级版、商业版。适用于 Telegram 群组、频道与机器人管理。",
  ogTitle: "Telemaster - 定价",
  ogDescription:
    "Telemaster 定价方案：免费版、高级版、商业版。适用于 Telegram 群组、频道与机器人管理。",
  ogUrl: `${siteUrl}/pricing`,
});
useHead({
  link: [{ rel: "canonical", href: `${siteUrl}/pricing` }],
});
</script>
