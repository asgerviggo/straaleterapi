<template>
  <div>
    <!-- <BlogPage v-if="elements" :elements="elements" /> -->
    <h1>Hi</h1>
    <ContentRenderer v-if="page" :value="page" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () =>
  queryCollection('research').path(route.path).first()
)
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
</script>
