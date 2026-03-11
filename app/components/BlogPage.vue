<template>
  <TocHeadings :toc="elements" :size="3"/>

  <template v-for="element in elements" :key="element.id">
    <Element :element="element" />
  </template>


</template>

<script setup lang="ts">
defineProps<{
  elements: Element[],
}>()

</script>

<style scoped>

</style>
