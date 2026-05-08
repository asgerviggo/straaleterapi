<style scoped lang="scss">
</style>

<template>
  <section class="row">
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
