<template>
  <div>
    <!-- <BlogPage v-if="elements" :elements="elements" /> -->
    <h1>Hi from News</h1>
    <ContentRenderer v-if="page" :value="page" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  const match_urls_in_content = /\/[-A-Za-z0-9]*\//
  const [lang, rest] = route.path.split(match_urls_in_content);
  console.log(lang);
  console.log(rest);
  return queryCollection('news').path(`/${lang}`).first()}
)
console.log(page.value);
//if (!page.value) {
//  throw createError({ statusCode: 404, statusMessage: 'Content not found', fatal: true })
//}
</script>
