<template>
  <div class="toc-wrapper">
    <ul>
      <li
        v-for="el in toc"
      >
        <a
          :href="`#${el.id}`"
        >
          <span>{{ el.toc }}</span>
        </a>
        <TocHeadings :toc="el.elements" :size="size - 1"/>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
type Element = {
  id: String,
  toc: String,
  markdown: String,
  elements: Element[],
}
defineProps<{
  size?: number,
  toc?: Element[],
}>()
</script>

<style scoped>

</style>
