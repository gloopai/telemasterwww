<template>
  <div>
    <div class="mb-10">
      <h1 class="text-4xl font-bold">创建账号</h1>
    </div>

    <form>
      <div class="space-y-4">
        <div>
          <label
            class="mb-1 block text-sm font-medium text-gray-700"
            for="name"
          >
            姓名
          </label>
          <input
            id="name"
            class="form-input w-full py-2"
            type="text"
            placeholder="你的名字"
            required
          />
        </div>
        <div>
          <label
            class="mb-1 block text-sm font-medium text-gray-700"
            for="email"
          >
            邮箱
          </label>
          <input
            id="email"
            class="form-input w-full py-2"
            type="email"
            placeholder="name@example.com"
            required
          />
        </div>
        <div>
          <label
            class="mb-1 block text-sm font-medium text-gray-700"
            for="phone"
          >
            手机号
          </label>
          <input
            id="phone"
            class="form-input w-full py-2"
            type="text"
            placeholder="选填"
          />
        </div>
        <div>
          <label
            class="mb-1 block text-sm font-medium text-gray-700"
            for="password"
          >
            密码
          </label>
          <input
            id="password"
            class="form-input w-full py-2"
            type="password"
            autocomplete="on"
            placeholder="••••••••"
            required
          />
        </div>
      </div>
      <div class="mt-6 space-y-3">
        <button
          type="button"
          class="btn w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%]"
        >
          注册
        </button>
        <div class="text-center text-sm italic text-gray-400">或</div>
        <button
          type="button"
          class="btn w-full bg-linear-to-t from-gray-900 to-gray-700 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%]"
        >
          使用 GitHub 继续
        </button>
      </div>
    </form>

    <div class="mt-6 text-center">
      <p class="text-sm text-gray-500">
        注册即表示你同意
        <NuxtLink
          class="whitespace-nowrap font-medium text-gray-700 underline hover:no-underline"
          to="/terms"
        >
          服务条款
        </NuxtLink>
        和
        <NuxtLink
          class="whitespace-nowrap font-medium text-gray-700 underline hover:no-underline"
          to="/privacy"
        >
          隐私政策
        </NuxtLink>
        。
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: "auth" });

const siteUrl = useSiteUrl();
useSeoMeta({
  title: "注册",
  description: "创建 Telemaster 账号。",
  ogTitle: "Telemaster - 注册",
  ogDescription: "创建 Telemaster 账号。",
  ogUrl: `${siteUrl}/signup`,
  robots: "noindex, nofollow",
});
useHead({
  link: [{ rel: "canonical", href: `${siteUrl}/signup` }],
});
</script>
