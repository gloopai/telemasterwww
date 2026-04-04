<template>
  <section class="border-t border-gray-200/80 bg-white">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <div class="py-16 md:py-24">
        <figure
          class="mx-auto max-w-3xl rounded-3xl border border-gray-200 bg-gray-50/80 p-8 md:p-12"
        >
          <div class="flex flex-col gap-8 md:flex-row md:items-start md:gap-10">
            <img
              class="h-14 w-14 shrink-0 rounded-2xl object-cover ring-1 ring-gray-200"
              src="/images/large-testimonial.jpg"
              width="56"
              height="56"
              alt=""
            />
            <div class="min-w-0 flex-1">
              <blockquote
                class="text-xl font-semibold leading-relaxed text-gray-900 md:text-2xl md:leading-snug"
              >
                <span class="text-blue-600/90">“</span>
                以前我们每天花大量时间在清理广告、回答重复问题、同步信息。现在用
                Telemaster 的自动化 + AI 助理，先总结、再分流、最后一键执行，运营节奏更稳。
                <span class="text-blue-600/90">”</span>
              </blockquote>
              <figcaption class="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-gray-500">
                <span class="font-medium text-gray-800">社群运营负责人</span>
                <span class="text-gray-300">·</span>
                <NuxtLink class="font-medium text-blue-600 hover:text-blue-700" to="/use-cases">
                  查看使用场景
                </NuxtLink>
              </figcaption>
            </div>
          </div>
        </figure>
      </div>
    </div>
  </section>
</template>
