<style scoped lang="scss">
.nav-wrapper {
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
}
.nav-item {

}
</style>

<template>
  <div class="header-wrapper">
    <a id="logo" href="/"></a>
    <nav class="nav-wrapper">
      <template v-for="nav in navs">
        <div class="nav-item">
          <NuxtLink :to="nav.path">{{ nav.title }}</NuxtLink>
          <template v-if="nav.children">
            <AsideNav :navs="nav.children" />
          </template>
        </div>
      </template>
    </nav>
  </div>
</template>

<script setup lang="ts">
type NavigationItem = {
  title: string,
  path: string,
  children?: NavigationItem,
}
defineProps<{
  navs: NavigationItem[] 
}>()
</script>

