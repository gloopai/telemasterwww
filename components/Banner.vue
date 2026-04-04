<template>
  <div v-if="bannerOpen" class="fixed bottom-0 right-0 z-50 w-full md:bottom-8 md:right-12 md:w-auto">
    <div class="flex justify-between bg-slate-800 p-3 text-sm text-slate-50 shadow-lg md:rounded-sm">
      <div class="inline-flex text-slate-500">
        <a
          class="font-medium text-slate-50 hover:underline"
          href="https://github.com/cruip/tailwind-landing-page-template"
          target="_blank"
          rel="noreferrer"
        >
          Download<span class="hidden sm:inline"> on GitHub</span>
        </a>
        <span class="px-1.5 italic">or</span>
        <a
          class="font-medium text-emerald-400 hover:underline"
          href="https://cruip.com/simple/"
          target="_blank"
          rel="noreferrer"
        >
          Check Premium Version
        </a>
      </div>
      <button
        class="ml-3 border-l border-gray-700 pl-2 text-slate-500 hover:text-slate-400"
        type="button"
        @click="bannerOpen = false"
      >
        <span class="sr-only">Close</span>
        <svg class="h-4 w-4 shrink-0 fill-current" viewBox="0 0 16 16">
          <path
            d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const bannerOpen = ref(true);
</script>
