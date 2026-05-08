// https://nuxt.com/docs/api/configuration/nuxt-config
const cssPaths = (paths: string[]) => paths.map(p => `~/assets/css/${p}.scss`);
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content'],
  css: cssPaths(['colors', 'base', 'fonts', 'util']),
})
