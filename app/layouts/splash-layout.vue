<style scoped lang="scss">
</style>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <slot />
    <Footer :lang="lang" />
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    lang: string
  }>()
</script>
