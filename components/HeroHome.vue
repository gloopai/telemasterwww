<template>
  <section class="relative border-b border-gray-200/70 bg-gray-50">
    <PageIllustration />
    <div class="relative mx-auto max-w-6xl px-4 sm:px-6">
      <div
        class="grid grid-cols-1 gap-8 pb-12 pt-24 sm:gap-10 sm:pb-16 sm:pt-28 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-center md:gap-16 md:pb-24 md:pt-32"
      >
        <div class="min-w-0">
          <p
            class="mb-3 inline-flex max-w-full items-center rounded-full bg-blue-600/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-blue-700 sm:mb-4 sm:px-3 sm:text-xs"
          >
            <span class="truncate">Telegram 运营 · AI 助理</span>
          </p>
          <h1
            class="text-balance text-[1.65rem] font-bold leading-snug tracking-tight text-gray-900 sm:text-4xl md:text-5xl md:leading-[1.12]"
          >
            把群组、频道与机器人，放进同一个可编排的控制台
          </h1>
          <p
            class="mt-5 max-w-xl text-pretty text-base leading-relaxed text-gray-600 sm:mt-6 sm:text-lg"
          >
            群组治理、自动回复、内容排期与数据复盘集中管理；内置 AI
            助理，支持对话总结、意图识别、智能回复与风险提示（按可用性）。
          </p>
          <div class="mt-6 flex flex-wrap gap-1.5 sm:mt-8 sm:gap-2">
            <span
              v-for="label in tags"
              :key="label"
              class="rounded-lg bg-white px-2.5 py-1.5 text-[11px] font-medium text-gray-700 ring-1 ring-gray-200/90 sm:px-3 sm:text-xs"
            >
              {{ label }}
            </span>
          </div>
          <div class="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center">
            <NuxtLink
              class="btn group inline-flex min-h-12 w-full touch-manipulation justify-center bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] sm:min-h-0 sm:w-auto"
              to="/pricing"
            >
              <span class="inline-flex items-center">
                查看定价
                <span
                  class="ml-1 text-blue-200 transition-transform group-hover:translate-x-0.5"
                >
                  →
                </span>
              </span>
            </NuxtLink>
            <NuxtLink
              class="btn inline-flex min-h-12 w-full touch-manipulation justify-center bg-white text-gray-800 ring-1 ring-gray-200 hover:bg-gray-50 sm:min-h-0 sm:w-auto"
              to="/use-cases"
            >
              使用场景
            </NuxtLink>
          </div>
          <div
            class="mt-8 flex flex-col gap-3 border-t border-gray-200/80 pt-6 sm:mt-10 sm:flex-row sm:items-center sm:gap-4 sm:pt-8"
          >
            <div class="-space-x-2 flex shrink-0">
              <img
                v-for="i in 6"
                :key="i"
                class="box-content h-8 w-8 rounded-full border-2 border-white object-cover sm:h-9 sm:w-9"
                :src="`/images/avatar-0${i}.jpg`"
                width="36"
                height="36"
                alt=""
              />
            </div>
            <p class="min-w-0 text-sm leading-snug text-gray-500">
              面向社群与增长团队的运营基础设施
            </p>
          </div>
        </div>

        <div
          class="min-w-0 rounded-2xl border border-gray-200/90 bg-white p-6 shadow-sm ring-1 ring-gray-100 sm:rounded-3xl sm:p-8 md:p-10"
        >
          <div class="flex items-start gap-4">
            <div
              class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-600/10"
            >
              <img
                src="/images/telemaster-mark.svg"
                width="28"
                height="28"
                alt=""
              />
            </div>
            <div>
              <h2 class="text-base font-semibold text-gray-900">一条链路，跑通运营</h2>
              <p class="mt-1 text-sm text-gray-600">
                从触达、转化到复盘，流程可配置、动作可审计。
              </p>
            </div>
          </div>
          <ul class="mt-8 space-y-4 border-t border-gray-100 pt-8 text-sm text-gray-700">
            <li class="flex gap-3">
              <svg
                class="mt-0.5 h-5 w-5 shrink-0 text-emerald-600"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clip-rule="evenodd"
                />
              </svg>
              <span><strong class="text-gray-900">治理</strong>：反垃圾、权限与群规，减少噪音与风险。</span>
            </li>
            <li class="flex gap-3">
              <svg
                class="mt-0.5 h-5 w-5 shrink-0 text-emerald-600"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clip-rule="evenodd"
                />
              </svg>
              <span><strong class="text-gray-900">自动化</strong>：关键词、模板与排期，把重复劳动交给系统。</span>
            </li>
            <li class="flex gap-3">
              <svg
                class="mt-0.5 h-5 w-5 shrink-0 text-emerald-600"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clip-rule="evenodd"
                />
              </svg>
              <span><strong class="text-gray-900">AI</strong>：总结与分流建议，团队聚焦在关键决策上。</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const tags = [
  "对话总结",
  "意图识别",
  "智能回复",
  "风险提示",
  "知识库（按可用性）",
];
</script>
