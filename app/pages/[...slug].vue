<style scoped lang="scss">
</style>

<template>
  <section class="row">
    <AsideNav :navs="aside" />
    <main class="col">
      <Breadcrumbs v-if="breadcrumbs" :crumbs="breadcrumbs" />
      <ContentRenderer v-if="page" :value="page" />
    </main>
  </section>
</template>

<script setup lang="ts">
import { findPageBreadcrumb, findPageChildren } from '@nuxt/content/utils';

const route = useRoute();
const {name: collection, prefix, lang, first} = getCollection(route.path)

const { data: page } = await useAsyncData(
  route.path,
  () => queryCollection(collection).path(route.path).first()
);

const { data: navigation } = await useAsyncData(
  `navigation-${route.path}`,
  () => queryCollectionNavigation(collection)
);


const getNavs = (path: string) => {
  const aside_val = makeNavLogic(findPageChildren(navigation.value, first));
  const breadcrumbs_val = findPageBreadcrumb(makeNavLogic(navigation.value), `${route.path}/`);
  return {aside_val, breadcrumbs_val}
}
const { aside_val, breadcrumbs_val } = getNavs(route.path);

const aside = ref(aside_val)
const breadcrumbs = ref(breadcrumbs_val)

watch(route, val => {
  const {collection, prefix, lang, first} = getCollection(route.path);
  const { aside_val, breadcrumbs_val } = getNavs(route.path);
  aside.value = aside_val;
  breadcrumbs.value = breadcrumbs_val;
}, {deep: true, immediate: true})

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Content not found',
    fatal: true,
  })
}

</script>
