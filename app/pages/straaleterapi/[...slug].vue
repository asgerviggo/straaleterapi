<template>
  <div>
    <!-- <BlogPage v-if="elements" :elements="elements" /> -->
    <ContentRenderer v-if="page" :value="page" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () =>
  queryCollection('radiotherapy').path(route.path).first()
)
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
</script>
