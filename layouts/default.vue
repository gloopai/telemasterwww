<template>
  <div class="flex min-h-screen flex-col">
    <UiHeader />
    <main class="grow">
      <slot />
    </main>
    <UiFooter :border="true" />
  </div>
</template>

<script setup lang="ts">
import AOS from "aos";
import "aos/dist/aos.css";

onMounted(() => {
  AOS.init({
    once: true,
    disable: "phone",
    duration: 700,
    easing: "ease-out-cubic",
  });
});
</script>
