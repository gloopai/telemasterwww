<template>
  <footer>
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <div
        :class="[
          'grid gap-10 py-8 sm:grid-cols-12 md:py-12',
          border
            ? 'border-t [border-image:linear-gradient(to_right,transparent,var(--color-slate-200),transparent)1]'
            : '',
        ]"
      >
        <div class="space-y-2 sm:col-span-12 lg:col-span-4">
          <div>
            <UiLogo />
          </div>
          <div class="text-sm text-gray-700">
            &copy; telemaster.io - All rights reserved.
          </div>
        </div>

        <div class="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
          <h3 class="text-sm font-medium text-gray-900">产品</h3>
          <ul class="space-y-2 text-sm">
            <li>
              <NuxtLink
                class="text-gray-700 transition hover:text-gray-950"
                to="/features"
              >
                功能
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                class="text-gray-700 transition hover:text-gray-950"
                to="/integrations"
              >
                集成
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                class="text-gray-700 transition hover:text-gray-950"
                to="/pricing"
              >
                定价
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                class="text-gray-700 transition hover:text-gray-950"
                to="/changelog"
              >
                更新日志
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                class="text-gray-700 transition hover:text-gray-950"
                to="/use-cases"
              >
                使用场景
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div class="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
          <h3 class="text-sm font-medium text-gray-900">公司</h3>
          <ul class="space-y-2 text-sm">
            <li>
              <NuxtLink
                class="text-gray-700 transition hover:text-gray-950"
                to="/about"
              >
                关于我们
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                class="text-gray-700 transition hover:text-gray-950"
                to="/contact"
              >
                联系我们
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                class="text-gray-700 transition hover:text-gray-950"
                to="/tutorials"
              >
                教程
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                class="text-gray-700 transition hover:text-gray-950"
                to="/faq"
              >
                常见问题
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                class="text-gray-700 transition hover:text-gray-950"
                to="/pricing"
              >
                价格方案
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div class="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
          <h3 class="text-sm font-medium text-gray-900">资源</h3>
          <ul class="space-y-2 text-sm">
            <li>
              <NuxtLink
                class="text-gray-700 transition hover:text-gray-950"
                to="/use-cases"
              >
                使用场景
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                class="text-gray-700 transition hover:text-gray-950"
                to="/terms"
              >
                服务条款
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                class="text-gray-700 transition hover:text-gray-950"
                to="/privacy"
              >
                隐私政策
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="relative -mt-16 h-60 w-full" aria-hidden="true">
      <div
        class="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 text-center text-[348px] font-bold leading-none before:bg-linear-to-b before:from-gray-200 before:to-gray-100/30 before:to-80% before:bg-clip-text before:text-transparent before:content-['Telemaster'] after:absolute after:inset-0 after:bg-gray-300/70 after:bg-clip-text after:text-transparent after:mix-blend-darken after:content-['Telemaster'] after:[text-shadow:0_1px_0_white]"
      />
      <div
        class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3"
        aria-hidden="true"
      >
        <div class="h-56 w-56 rounded-full border-[20px] border-blue-700 blur-[80px]" />
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    border?: boolean;
  }>(),
  { border: false },
);
</script>
