<template>
  <div
    class="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    aria-hidden="true"
  >
    <!-- 整体自上而下：淡蓝 → 灰底，柔和不抢眼 -->
    <div
      class="absolute inset-x-0 top-0 h-[min(520px,60vh)] bg-gradient-to-b from-blue-50/90 via-gray-50/40 to-transparent"
    />
    <!-- 顶部中心柔光 -->
    <div
      class="absolute left-1/2 top-0 h-[min(380px,45vh)] w-[min(100%,56rem)] -translate-x-1/2 bg-gradient-to-b from-blue-100/50 to-transparent blur-2xl"
    />
    <!-- 两侧氛围光（低对比） -->
    <div
      class="absolute -left-32 top-8 h-80 w-80 rounded-full bg-blue-400/15 blur-[110px]"
    />
    <div
      class="absolute -right-28 top-24 h-72 w-72 rounded-full bg-sky-200/35 blur-[100px]"
    />
  </div>
</template>
