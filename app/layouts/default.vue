<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: row;
}
.main {
  display: flex;
  flex-direction: column;
}
</style>

<template>
  <div class="container">
    <NavBar v-if="navs && lang" :navs="navs", :lang="lang" />
    <div class="content">
      <AsideNav v-if="asideNavs" :navs="asideNavs" />
      <div class="main"> 
        <Breadcrumbs v-if="breadcrumbs" :crumbs="breadcrumbs" />
        <slot />
      </div>
    </div>
    <Footer :lang="lang" />
  </div>
</template>

<script setup lang="ts">
const route = await useRoute();

const { data: navigation } = await useAsyncData(
  'navigation',
  () => queryCollectionNavigation('main')
);

const extractor = <T>(matcher: (first: string, rest: string) => {yes:T, no:T}) => async (path: string) => {
  const [, first, ...rest] = path.split('/');
  const {yes, no} = matcher(first, rest);
  return first == 'en' ? yes : no;
} 

const extractLang = extractor((first, rest) => ({yes: 'en', no: 'dk'}));
const extractPath = extractor((first, rest) => ({yes: rest, no: [first, ...rest]})); 

const recursiveBreadcrumbs = async (navs: NavigationItem[], paths: string[]) => {
  const [first, ...rest] = paths;
  const item = navs.find(n => n.path = `/${first}`);
  if (rest.length && item.children?.length) {
    return [item, ...recursiveBreadcrumbs(item.children, rest)];
  } else {
    return [item];
  }
}

const makeNavLogic = (navi: NavigationItem[]) => {
  return navi.map(nav => {
    if (nav.children) {
      const children = makeNavLogic(nav.children.slice(1))
      return {...nav.children.at(0), children};
    } else {
      return nav;
    }
  })
}

const current_path = await extractPath(route.path);
const lang = await extractLang(route.path);

const navs = makeNavLogic(lang == 'dk' ?
    navigation.value.filter(e => e.path !== "/en") :
    navigation.value.find(e => e.path == "/en").children);
console.log(navs)

const breadcrumbs = await recursiveBreadcrumbs(navs, current_path);

const asideNavs = navs.find(({path}) => path.slice(1) == current_path[0])?.children
</script>
