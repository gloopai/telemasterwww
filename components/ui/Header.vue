<template>
  <header class="fixed top-2 z-50 w-full md:top-6">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <div
        class="flex h-14 items-center justify-between gap-3 rounded-2xl border border-gray-200/90 bg-white/85 px-3 text-gray-900 shadow-sm shadow-gray-900/5 backdrop-blur-md backdrop-saturate-150"
      >
        <div class="flex min-w-0 flex-1 items-center">
          <UiLogo />
        </div>
        <ul class="hidden grow flex-wrap items-center justify-center text-sm md:flex">
          <li>
            <NuxtLink
              to="/"
              class="flex items-center px-3 py-2 text-gray-800 transition duration-150 ease-in-out hover:text-gray-950 lg:px-5"
            >
              首页
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/features"
              class="flex items-center px-3 py-2 text-gray-800 transition duration-150 ease-in-out hover:text-gray-950 lg:px-5"
            >
              功能
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/pricing"
              class="flex items-center px-3 py-2 text-gray-800 transition duration-150 ease-in-out hover:text-gray-950 lg:px-5"
            >
              定价
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/use-cases"
              class="flex items-center px-3 py-2 text-gray-800 transition duration-150 ease-in-out hover:text-gray-950 lg:px-5"
            >
              使用场景
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/mini-apps"
              class="flex items-center px-3 py-2 text-gray-800 transition duration-150 ease-in-out hover:text-gray-950 lg:px-5"
            >
              小程序
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/mini-games"
              class="flex items-center px-3 py-2 text-gray-800 transition duration-150 ease-in-out hover:text-gray-950 lg:px-5"
            >
              小游戏
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/ton"
              class="flex items-center px-3 py-2 text-gray-800 transition duration-150 ease-in-out hover:text-gray-950 lg:px-5"
            >
              TON
            </NuxtLink>
          </li>
        </ul>
        <ul class="hidden flex-1 items-center justify-end gap-3 md:flex">
          <li>
            <NuxtLink
              to="/signin"
              class="btn-sm bg-white text-gray-800 shadow-sm hover:bg-gray-50"
            >
              登录
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/signup"
              class="btn-sm bg-gray-800 text-gray-200 shadow-sm hover:bg-gray-900"
            >
              注册
            </NuxtLink>
          </li>
        </ul>
        <ul class="block md:hidden">
          <li>
            <button
              type="button"
              class="inline-flex items-center justify-center p-2 text-gray-800"
              aria-label="打开主菜单"
              @click="mobileMenuOpen = !mobileMenuOpen"
            >
              <svg
                class="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </li>
        </ul>
      </div>
      <div
        v-if="mobileMenuOpen"
        ref="menuRef"
        class="fixed inset-x-4 top-[4.5rem] z-40 flex flex-col gap-1 rounded-2xl border border-gray-200/90 bg-white/95 p-3 shadow-lg shadow-gray-900/10 backdrop-blur-md md:hidden"
      >
        <NuxtLink
          to="/"
          class="rounded-lg px-3 py-2 text-gray-800 hover:bg-gray-100"
          @click="mobileMenuOpen = false"
        >
          首页
        </NuxtLink>
        <NuxtLink
          to="/features"
          class="rounded-lg px-3 py-2 text-gray-800 hover:bg-gray-100"
          @click="mobileMenuOpen = false"
        >
          功能
        </NuxtLink>
        <NuxtLink
          to="/use-cases"
          class="rounded-lg px-3 py-2 text-gray-800 hover:bg-gray-100"
          @click="mobileMenuOpen = false"
        >
          使用场景
        </NuxtLink>
        <NuxtLink
          to="/mini-apps"
          class="rounded-lg px-3 py-2 text-gray-800 hover:bg-gray-100"
          @click="mobileMenuOpen = false"
        >
          小程序
        </NuxtLink>
        <NuxtLink
          to="/mini-games"
          class="rounded-lg px-3 py-2 text-gray-800 hover:bg-gray-100"
          @click="mobileMenuOpen = false"
        >
          小游戏
        </NuxtLink>
        <NuxtLink
          to="/ton"
          class="rounded-lg px-3 py-2 text-gray-800 hover:bg-gray-100"
          @click="mobileMenuOpen = false"
        >
          TON
        </NuxtLink>
        <NuxtLink
          to="/pricing"
          class="rounded-lg px-3 py-2 text-gray-800 hover:bg-gray-100"
          @click="mobileMenuOpen = false"
        >
          定价
        </NuxtLink>
        <div class="mt-2 grid grid-cols-2 gap-2">
          <NuxtLink
            to="/signin"
            class="btn-sm w-full justify-center bg-white text-gray-800 shadow-sm hover:bg-gray-50"
            @click="mobileMenuOpen = false"
          >
            登录
          </NuxtLink>
          <NuxtLink
            to="/signup"
            class="btn-sm w-full justify-center bg-gray-800 text-gray-200 shadow-sm hover:bg-gray-900"
            @click="mobileMenuOpen = false"
          >
            注册
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const mobileMenuOpen = ref(false);
const menuRef = ref<HTMLElement | null>(null);

function onPointerDown(event: MouseEvent | TouchEvent) {
  const target = event.target;
  if (!(target instanceof Node)) return;
  if (!menuRef.value) return;
  if (menuRef.value.contains(target)) return;
  mobileMenuOpen.value = false;
}

function onKeyDown(event: KeyboardEvent) {
  if (event.key === "Escape") mobileMenuOpen.value = false;
}

watch(mobileMenuOpen, (open) => {
  if (!import.meta.client) return;
  if (open) {
    window.addEventListener("mousedown", onPointerDown);
    window.addEventListener("touchstart", onPointerDown);
    window.addEventListener("keydown", onKeyDown);
  } else {
    window.removeEventListener("mousedown", onPointerDown);
    window.removeEventListener("touchstart", onPointerDown);
    window.removeEventListener("keydown", onKeyDown);
  }
});
</script>
