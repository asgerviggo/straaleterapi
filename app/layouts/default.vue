<style scoped lang="scss">
</style>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NavBar :lang="lang"/>
    <slot />
    <Footer :lang="lang" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { lang: lang_val } = getCollection(route.path);
const lang = ref(lang_val);
watch(route, val => {
  const { lang: lang_val } = getCollection(route.path);
  lang.value = lang_val;
}, {deep: true, immediate: true});
</script>
