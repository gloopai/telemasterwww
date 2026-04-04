<template>
  <section class="border-t border-gray-200/80 bg-gray-50 pb-16 pt-0 md:pb-24">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <div
        class="overflow-hidden rounded-3xl bg-gray-900 px-6 py-12 text-center shadow-lg md:px-12 md:py-16"
      >
        <p class="text-sm font-semibold text-blue-300/90">下一步</p>
        <h2 class="mt-2 text-2xl font-bold tracking-tight text-white md:text-3xl">
          用 AI 把 Telegram 运营做成系统
        </h2>
        <p class="mx-auto mt-3 max-w-lg text-sm text-gray-400">
          从定价方案到商务对接，我们帮你把流程跑通。
        </p>
        <div
          class="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
        >
          <NuxtLink
            class="btn group inline-flex justify-center bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-md hover:bg-[length:100%_150%] sm:min-w-[9rem]"
            to="/pricing"
          >
            <span class="inline-flex items-center">
              查看定价
              <span class="ml-1 text-blue-200 transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </span>
          </NuxtLink>
          <NuxtLink
            class="btn inline-flex justify-center bg-white text-gray-900 shadow-sm hover:bg-gray-100 sm:min-w-[9rem]"
            to="/contact"
          >
            联系我们
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
