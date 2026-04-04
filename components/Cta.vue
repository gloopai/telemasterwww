<template>
  <section>
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <div
        class="relative overflow-hidden rounded-2xl text-center shadow-xl before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-gray-900"
        data-aos="zoom-y-out"
      >
        <div
          class="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 translate-y-1/2"
          aria-hidden="true"
        >
          <div
            class="h-56 w-[480px] rounded-full border-[20px] border-blue-500 blur-3xl"
          />
        </div>
        <div
          class="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 transform"
          aria-hidden="true"
        >
          <img
            class="max-w-none"
            src="/images/stripes-dark.svg"
            width="768"
            height="432"
            alt=""
          />
        </div>
        <div class="px-4 py-12 md:px-12 md:py-20">
          <h2
            class="mb-6 border-y text-3xl font-bold text-gray-200 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-700/.7),transparent)1] md:mb-12 md:text-4xl"
          >
            用 AI 把 Telegram 运营做成系统
          </h2>
          <div class="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
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
              class="btn w-full bg-white text-gray-900 shadow-sm hover:bg-gray-100 sm:ml-4 sm:w-auto"
              to="/contact"
            >
              联系我们
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
