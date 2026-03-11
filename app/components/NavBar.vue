<template>
  <div class="header-wrapper">
    <a id="logo" href="/"></a>
    <div class="nav-wrapper">
      <nav>
        <template v-for="nav in navs">
          <NuxtLink :to="`${nav.path}`">{{ nav.title }}</NuxtLink>
        </template>
      </nav>
      <!-- last nav item should be search icon -->
    </div>
    <div>
      <PageOptions />
    </div>
  </div>
</template>

<script setup>
const navs = [
  {
    path: 'om-os',
    title: 'Om os',
  },
  {
    path: 'straaleterapi',
    title: 'Stråleterapi',
  },
  {
    path: 'forskning',
    title: 'Forskning',
  },
];
</script>

<style scoped>

</style>
