<template>
  <section class="border-t border-gray-200/80 bg-white">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <div class="py-12 sm:py-16 md:py-24">
        <div class="mx-auto max-w-2xl px-0 text-center">
          <p class="text-sm font-semibold text-blue-600">产品能力</p>
          <h2
            class="mt-2 text-2xl font-bold leading-snug tracking-tight text-gray-900 sm:text-3xl md:text-4xl"
          >
            AI + 运营系统：核心能力
          </h2>
          <p class="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
            把重复劳动变成可控流程，把个人经验变成团队可复用的能力。
          </p>
        </div>

        <div class="mt-10 grid min-w-0 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5">
          <article
            v-for="item in features"
            :key="item.title"
            class="rounded-2xl border border-gray-200 bg-gray-50/50 p-5 transition-colors hover:border-blue-200/80 hover:bg-white sm:p-6 md:p-7"
          >
            <div
              class="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path :d="item.iconPath" />
              </svg>
            </div>
            <h3 class="text-base font-semibold text-gray-900">
              {{ item.title }}
            </h3>
            <p class="mt-2 text-sm leading-relaxed text-gray-600">
              {{ item.desc }}
            </p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const features: { title: string; desc: string; iconPath: string }[] = [
  {
    title: "机器人与工作区管理",
    desc: "统一管理 Bot、权限与环境配置，多团队协作更安全、更清晰。",
    iconPath:
      "M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm2-4a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4Zm1 10a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H5Z",
  },
  {
    title: "AI 智能回复",
    desc: "关键词 + 模板 + AI 生成组合，覆盖高频问题并保持口径一致。",
    iconPath:
      "M14.29 2.614a1 1 0 0 0-1.58-1.228L6.407 9.492l-3.199-3.2a1 1 0 1 0-1.414 1.415l4 4a1 1 0 0 0 1.496-.093l7-9ZM1 14a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H1Z",
  },
  {
    title: "群组治理与反垃圾",
    desc: "验证、限速、规则与审核组合，降低广告与刷屏，保障秩序。",
    iconPath:
      "M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1.715-6.752a1 1 0 0 1 .57-1.916 8.014 8.014 0 0 1 5.383 5.383 1 1 0 1 1-1.916.57 6.014 6.014 0 0 0-4.037-4.037Zm4.037 7.467a1 1 0 1 1 1.916.57 8.014 8.014 0 0 1-5.383 5.383 1 1 0 1 1-.57-1.916 6.014 6.014 0 0 0 4.037-4.037Zm-7.467 4.037a1 1 0 1 1-.57 1.916 8.014 8.014 0 0 1-5.383-5.383 1 1 0 1 1 1.916-.57 6.014 6.014 0 0 0 4.037 4.037Z",
  },
  {
    title: "频道内容排期",
    desc: "定时发布与素材管理，节奏化输出内容，并支持效果追踪（按可用性）。",
    iconPath:
      "M8 0a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1Zm6 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1a1 1 0 1 1 0 2h-1a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h1a1 1 0 1 1 0 2h-1ZM1 1a1 1 0 0 0 0 2h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 1 0 0 2h1a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H1Z",
  },
  {
    title: "批量触达与分发",
    desc: "模板化触达群组/频道，控制频率与范围，避免打扰。",
    iconPath:
      "M10.284.33a1 1 0 1 0-.574 1.917 6.049 6.049 0 0 1 2.417 1.395A1 1 0 0 0 13.5 2.188 8.034 8.034 0 0 0 10.284.33ZM6.288 2.248A1 1 0 0 0 5.718.33 8.036 8.036 0 0 0 2.5 2.187a1 1 0 0 0 1.372 1.455 6.036 6.036 0 0 1 2.415-1.395ZM1.42 5.401a1 1 0 0 1 .742 1.204 6.025 6.025 0 0 0 0 2.79 1 1 0 0 1-1.946.462 8.026 8.026 0 0 1 0-3.714A1 1 0 0 1 1.421 5.4Zm2.452 6.957A1 1 0 0 0 2.5 13.812a8.036 8.036 0 0 0 3.216 1.857 1 1 0 0 0 .574-1.916 6.044 6.044 0 0 1-2.417-1.395Zm9.668.04a1 1 0 0 1-.041 1.414 8.033 8.033 0 0 1-3.217 1.857 1 1 0 1 1-.571-1.917 6.035 6.035 0 0 0 2.415-1.395 1 1 0 0 1 1.414.042Zm2.242-6.255a1 1 0 1 0-1.946.462 6.03 6.03 0 0 1 0 2.79 1 1 0 1 0 1.946.462 8.022 8.022 0 0 0 0-3.714Z",
  },
  {
    title: "数据复盘与洞察",
    desc: "汇总关键指标、对话热点与风险事件，快速定位问题与机会。",
    iconPath:
      "M9 1a1 1 0 1 0-2 0v6a1 1 0 0 0 2 0V1ZM4.572 3.08a1 1 0 0 0-1.144-1.64A7.987 7.987 0 0 0 0 8a8 8 0 0 0 16 0c0-2.72-1.36-5.117-3.428-6.56a1 1 0 1 0-1.144 1.64A5.987 5.987 0 0 1 14 8 6 6 0 1 1 2 8a5.987 5.987 0 0 1 2.572-4.92Z",
  },
];
</script>
