<template>
  <header class="tm-root">
    <div class="tm-mobile" :aria-label="t('navAria.mobile')">
      <div class="tm-mobile-inner">
        <div class="tm-mobile-logo">
          <UiLogo />
        </div>
        <button
          type="button"
          class="tm-mobile-open"
          :aria-label="t('navAria.openMenu')"
          :aria-expanded="mobileMenuOpen"
          aria-controls="mobile-nav-panel"
          @click="mobileMenuOpen = true"
        >
          <span class="tm-mobile-open-lines" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span class="tm-mobile-open-text">{{ t("navAria.menu") }}</span>
        </button>
      </div>
    </div>

    <div class="tm-desktop" :aria-label="t('navAria.desktop')">
      <div class="mx-auto max-w-6xl px-6">
        <div
          class="flex min-h-14 min-w-0 items-center justify-between gap-2 rounded-2xl border border-gray-200/90 bg-white/85 px-3 text-gray-900 shadow-sm shadow-gray-900/5 backdrop-blur-md backdrop-saturate-150 xl:px-4"
        >
          <div class="flex min-w-0 shrink-0 items-center">
            <UiLogo />
          </div>
          <ul
            class="flex flex-wrap items-center justify-center gap-0 text-sm xl:grow"
          >
            <li v-for="link in mainNavLinks" :key="link.to">
              <NuxtLink
                :to="link.to"
                class="flex items-center px-2 py-2 text-gray-800 transition duration-150 ease-in-out hover:text-gray-950 xl:px-4"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
          <ul class="flex shrink-0 items-center justify-end gap-2 xl:gap-3">
            <li>
              <NuxtLink
                :to="localePath('/signin')"
                class="btn-sm bg-white text-gray-800 shadow-sm hover:bg-gray-50"
              >
                {{ t("nav.signin") }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                :to="localePath('/signup')"
                class="btn-sm bg-gray-800 text-gray-200 shadow-sm hover:bg-gray-900"
              >
                {{ t("nav.signup") }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <Teleport to="body">
      <div
        v-if="mobileMenuOpen"
        id="mobile-nav-panel"
        class="tm-drawer-root"
        role="dialog"
        aria-modal="true"
        :aria-label="t('navAria.drawerTitle')"
      >
        <button
          type="button"
          tabindex="-1"
          class="tm-drawer-scrim"
          :aria-label="t('navAria.closeMenu')"
          @click="mobileMenuOpen = false"
        />
        <nav
          class="tm-drawer-panel"
          :style="{
            paddingTop: 'max(0.75rem, env(safe-area-inset-top))',
          }"
        >
          <div class="tm-drawer-head">
            <span class="text-sm font-semibold text-gray-900">{{
              t("navAria.drawerTitle")
            }}</span>
            <button
              type="button"
              class="tm-drawer-close"
              :aria-label="t('navAria.close')"
              @click="mobileMenuOpen = false"
            >
              {{ t("navAria.close") }}
            </button>
          </div>
          <div
            class="flex min-h-0 flex-1 flex-col gap-0.5 overflow-y-auto overscroll-contain px-3 py-3"
            :style="{
              paddingBottom: 'max(1rem, env(safe-area-inset-bottom))',
            }"
          >
            <NuxtLink
              v-for="item in mobileLinks"
              :key="item.to"
              :to="item.to"
              class="rounded-lg px-3 py-3.5 text-base text-gray-800 active:bg-gray-100"
              @click="mobileMenuOpen = false"
            >
              {{ item.label }}
            </NuxtLink>
            <div
              class="mt-4 grid grid-cols-2 gap-2 border-t border-gray-100 pt-4"
            >
              <NuxtLink
                :to="localePath('/signin')"
                class="btn-sm flex w-full justify-center bg-white text-gray-800 shadow-sm"
                @click="mobileMenuOpen = false"
              >
                {{ t("nav.signin") }}
              </NuxtLink>
              <NuxtLink
                :to="localePath('/signup')"
                class="btn-sm flex w-full justify-center bg-gray-800 text-gray-200 shadow-sm"
                @click="mobileMenuOpen = false"
              >
                {{ t("nav.signup") }}
              </NuxtLink>
            </div>
          </div>
        </nav>
      </div>
    </Teleport>
  </header>
</template>

<script setup lang="ts">
const mobileMenuOpen = ref(false);
const { t } = useI18n();
const localePath = useLocalePath();

const pathKeys = [
  "/",
  "/features",
  "/pricing",
  "/use-cases",
  "/mini-apps",
  "/mini-games",
  "/ton",
] as const;

const labelKeys = [
  "nav.home",
  "nav.features",
  "nav.pricing",
  "nav.useCases",
  "nav.miniApps",
  "nav.miniGames",
  "nav.ton",
] as const;

const mobileLinks = computed(() =>
  pathKeys.map((p, i) => ({
    to: localePath(p),
    label: t(labelKeys[i]),
  })),
);

const mainNavLinks = computed(() => mobileLinks.value);

function onKeyDown(event: KeyboardEvent) {
  if (event.key === "Escape") mobileMenuOpen.value = false;
}

function closeMenuIfDesktop() {
  if (!import.meta.client) return;
  if (window.matchMedia("(min-width: 1024px)").matches) {
    mobileMenuOpen.value = false;
  }
}

watch(mobileMenuOpen, (open) => {
  if (!import.meta.client) return;
  if (open) {
    const scrollY = window.scrollY;
    document.body.dataset.scrollLockY = String(scrollY);
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
  } else {
    const y = document.body.dataset.scrollLockY;
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.width = "";
    document.body.style.overflow = "";
    delete document.body.dataset.scrollLockY;
    if (y !== undefined) {
      window.scrollTo(0, Number(y) || 0);
    }
    window.removeEventListener("keydown", onKeyDown);
  }
});

onMounted(() => {
  closeMenuIfDesktop();
  window.addEventListener("resize", closeMenuIfDesktop);
});

onUnmounted(() => {
  if (import.meta.client) {
    window.removeEventListener("resize", closeMenuIfDesktop);
  }
});
</script>

<style scoped>
.tm-root {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  width: 100%;
  box-sizing: border-box;
}

.tm-mobile {
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding-top: max(0.5rem, env(safe-area-inset-top));
  padding-left: max(0.75rem, env(safe-area-inset-left));
  padding-right: max(0.75rem, env(safe-area-inset-right));
  padding-bottom: 0.5rem;
  background: #ffffff;
  border-bottom: 1px solid rgb(229 231 235);
  box-shadow: 0 1px 2px rgb(15 23 42 / 0.06);
}

.tm-desktop {
  display: none;
  padding-top: 1.5rem;
  padding-left: max(0.75rem, env(safe-area-inset-left));
  padding-right: max(0.75rem, env(safe-area-inset-right));
}

.tm-mobile-inner {
  display: flex;
  max-width: 72rem;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  min-height: 3rem;
}

.tm-mobile-logo {
  flex: 1 1 auto;
  min-width: 0;
  max-width: 100%;
  overflow: hidden;
}

.tm-mobile-open {
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  gap: 0.5rem;
  min-height: 2.75rem;
  padding: 0.375rem 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid rgb(209 213 219);
  background: rgb(249 250 251);
  color: rgb(17 24 39);
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.25;
  -webkit-tap-highlight-color: transparent;
}

.tm-mobile-open:active {
  background: rgb(243 244 246);
}

.tm-mobile-open-lines {
  display: flex;
  width: 1.25rem;
  flex-direction: column;
  justify-content: center;
  gap: 0.25rem;
}

.tm-mobile-open-lines span {
  display: block;
  height: 2px;
  border-radius: 1px;
  background: rgb(31 41 55);
}

.tm-mobile-open-text {
  white-space: nowrap;
}

@media (min-width: 1024px) {
  .tm-mobile {
    display: none !important;
  }

  .tm-desktop {
    display: block !important;
  }
}

.tm-drawer-root {
  position: fixed;
  inset: 0;
  z-index: 300;
}

.tm-drawer-scrim {
  position: absolute;
  inset: 0;
  margin: 0;
  padding: 0;
  border: 0;
  background: rgb(17 24 39 / 0.45);
  cursor: default;
}

.tm-drawer-panel {
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  height: 100%;
  width: min(100%, 20rem);
  flex-direction: column;
  border-left: 1px solid rgb(229 231 235);
  background: #fff;
  box-shadow: -8px 0 24px rgb(15 23 42 / 0.12);
}

.tm-drawer-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgb(243 244 246);
  padding: 0.75rem 1rem;
}

.tm-drawer-close {
  min-height: 2.75rem;
  padding: 0 0.75rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: rgb(37 99 235);
  background: transparent;
  border: none;
  -webkit-tap-highlight-color: transparent;
}

.tm-drawer-close:active {
  background: rgb(243 244 246);
}
</style>
