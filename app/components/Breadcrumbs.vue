<style scoped lang="scss">
</style>

<template>
  <template v-for="nav in crumbs">
    <NuxtLink :to="nav.path">{{ nav.title }}</NuxtLink>
  </template>
</template>

<script setup lang="ts">
type NavigationItem = {
  title: string,
  path: string,
  children?: NavigationItem,
}
defineProps<{
  crumbs: NavigationItem[],
}>()
</script>
