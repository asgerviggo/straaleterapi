<template>
  <div :id="element.id">
    <ContentRenderer :value="element.markdown" />
  </div>
  <template v-for="child in element.elements">
    <Element :element="child" />
  </template>
</template>

<script setup lang="ts">
defineProps<{
  element: Element,
}>()

</script>

<style scoped>

</style>
