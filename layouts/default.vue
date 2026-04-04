<template>
  <div class="flex min-h-screen min-h-dvh min-w-0 flex-col">
    <UiHeader />
    <main
      class="min-w-0 grow overflow-x-clip pb-[env(safe-area-inset-bottom)]"
    >
      <slot />
    </main>
    <UiFooter :border="true" />
  </div>
</template>
