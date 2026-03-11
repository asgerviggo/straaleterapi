<template>
  <div class="container">
    <NavBar />
    <div>
      <AsideNav />
      <slot />
      <TocHeadings />
      <Footer />
    </div>
  </div>
</template>

<style lang="scss">
.container {
}
</style>
