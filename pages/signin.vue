<template>
  <div>
    <div class="mb-10">
      <h1 class="text-4xl font-bold">登录账号</h1>
    </div>
    <form>
      <div class="space-y-4">
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
      <div class="mt-6">
        <button
          type="button"
          class="btn w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%]"
        >
          登录
        </button>
      </div>
    </form>
    <div class="mt-6 text-center">
      <NuxtLink
        class="text-sm text-gray-700 underline hover:no-underline"
        to="/reset-password"
      >
        忘记密码
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: "auth" });

const siteUrl = useSiteUrl();
useSeoMeta({
  title: "登录",
  description: "登录 Telemaster。",
  ogTitle: "Telemaster - 登录",
  ogDescription: "登录 Telemaster。",
  ogUrl: `${siteUrl}/signin`,
  robots: "noindex, nofollow",
});
useHead({
  link: [{ rel: "canonical", href: `${siteUrl}/signin` }],
});
</script>
