<template>
  <div class="header-wrapper">
    <a id="logo" href="/"></a>
    <div class="nav-wrapper">
      <nav>
        <template v-for="nav in navs">
          <NuxtLink :to="`${nav.path}`">{{ nav.title }}</NuxtLink>
          <template v-for="child in nav.children">
            <AsideNav :navs="child" />
          </template>
        </template>
      </nav>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const { data: navs } = await useAsyncData(route.path, () =>
  queryCollectionNavigation('about')
);
console.log(navs.value);
</script>

<style scoped>

</style>
