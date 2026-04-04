<template>
  <div>
    <div class="mb-10">
      <h1 class="text-4xl font-bold">重置密码</h1>
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
      </div>
      <div class="mt-6">
        <button
          type="button"
          class="btn w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%]"
        >
          发送重置邮件
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: "auth" });

const siteUrl = useSiteUrl();
useSeoMeta({
  title: "重置密码",
  description: "重置 Telemaster 账号密码。",
  ogTitle: "Telemaster - 重置密码",
  ogDescription: "重置 Telemaster 账号密码。",
  ogUrl: `${siteUrl}/reset-password`,
  robots: "noindex, nofollow",
});
useHead({
  link: [{ rel: "canonical", href: `${siteUrl}/reset-password` }],
});
</script>
