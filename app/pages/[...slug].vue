<style scoped lang="scss">
.main-container {
  display: flex;
  flex-direction: row;
}
</style>

<template>
  <section class="main-container">
    <ContentRenderer v-if="page" :value="page" />
  </section>
</template>

<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => queryCollection('main').path(route.path).first());
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Content not found', fatal: true })
}
</script>
