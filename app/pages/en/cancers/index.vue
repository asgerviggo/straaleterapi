<template>
  <div>
    <!-- <BlogPage v-if="elements" :elements="elements" /> -->
    <h1>Hi from Cancer</h1>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: "Cancers",
  lang: "en",
  navInclude: true,
  navOrder: -1,
})
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  const match_urls_in_content = /\/[-A-Za-z0-9]*\//
  const [lang, rest] = route.path.split(match_urls_in_content);
  console.log(lang);
  console.log(rest);
  return queryCollection('cancers').path(`/${lang}`).first()}
)
console.log(page.value);
//if (!page.value) {
//  throw createError({ statusCode: 404, statusMessage: 'Content not found', fatal: true })
//}
</script>
