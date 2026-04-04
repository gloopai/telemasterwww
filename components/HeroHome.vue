<template>
  <section class="relative">
    <PageIllustration />
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <div class="pb-12 pt-32 md:pb-20 md:pt-40">
        <div class="pb-12 text-center md:pb-16">
          <div
            class="mb-6 border-y [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]"
            data-aos="zoom-y-out"
          >
            <div class="-mx-0.5 flex justify-center -space-x-3">
              <img
                class="box-content rounded-full border-2 border-gray-50"
                src="/images/avatar-01.jpg"
                width="32"
                height="32"
                alt=""
              />
              <img
                class="box-content rounded-full border-2 border-gray-50"
                src="/images/avatar-02.jpg"
                width="32"
                height="32"
                alt=""
              />
              <img
                class="box-content rounded-full border-2 border-gray-50"
                src="/images/avatar-03.jpg"
                width="32"
                height="32"
                alt=""
              />
              <img
                class="box-content rounded-full border-2 border-gray-50"
                src="/images/avatar-04.jpg"
                width="32"
                height="32"
                alt=""
              />
              <img
                class="box-content rounded-full border-2 border-gray-50"
                src="/images/avatar-05.jpg"
                width="32"
                height="32"
                alt=""
              />
              <img
                class="box-content rounded-full border-2 border-gray-50"
                src="/images/avatar-06.jpg"
                width="32"
                height="32"
                alt=""
              />
            </div>
          </div>
          <h1
            class="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl"
            data-aos="zoom-y-out"
            data-aos-delay="150"
          >
            AI 驱动的 Telegram 运营中枢
          </h1>
          <div class="mx-auto max-w-3xl">
            <p
              class="mb-8 text-lg text-gray-700"
              data-aos="zoom-y-out"
              data-aos-delay="300"
            >
              把群组治理、自动回复、内容排期与数据复盘统一到一个控制台。内置 AI
              助理，支持总结对话、识别意图、生成回复与风险提示（按可用性）。
            </p>
            <div
              class="mb-8 flex flex-wrap justify-center gap-2"
              data-aos="zoom-y-out"
              data-aos-delay="350"
            >
              <span
                v-for="label in tags"
                :key="label"
                class="rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-700 shadow-sm ring-1 ring-gray-200"
              >
                {{ label }}
              </span>
            </div>
            <div
              class="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]"
            >
              <div
                class="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="450"
              >
                <NuxtLink
                  class="btn group mb-4 w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                  to="/pricing"
                >
                  <span class="relative inline-flex items-center">
                    查看定价
                    <span
                      class="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5"
                    >
                      -&gt;
                    </span>
                  </span>
                </NuxtLink>
                <NuxtLink
                  class="btn w-full bg-white text-gray-800 shadow-sm hover:bg-gray-50 sm:ml-4 sm:w-auto"
                  to="/use-cases"
                >
                  查看使用场景
                </NuxtLink>
              </div>
            </div>
          </div>
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
