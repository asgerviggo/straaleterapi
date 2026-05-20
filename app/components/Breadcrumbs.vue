<style scoped lang="scss">
</style>

<template>
  <div class="row">
    <template v-for="nav in crumbs">
      <NuxtLink :to="nav.path">{{ nav.title }}</NuxtLink>
      <span>></span>
    </template>
  </div>
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
