import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const contentSchema = z.object({
  title: z.string(),
})
const newsSchema = z.object({
  title: z.string(),
  date: z.date(),
})
const publicationSchema = z.object({
  authors: z.array(z.string()),
  url: z.string(),
  date: z.date(),
})

const contentIndex = [
  //{columns: ['navOrder'], unique: true}
]
const newsIndex = [
  {columns: ['date']}
]
const publicationIndex = [
  {columns: ['date']}
]

const createPageCollection = (source: {
  include: string,
  prefix?: string,
  exclude?: string[]
}) => defineCollection({
    type: 'page',
    source,
    /*
    source: {
      repository: {
        url: 'https://github.com/asgerviggo/DCCC-content.git',
        branch: 'main',
      },
      ...source,
    },
    */
  })

export default defineContentConfig({
  collections: {
    dccc: {
      schema: contentSchema,
      indexes: contentIndex,
      ...createPageCollection({
        include: 'dccc/**/*.md',
        prefix: '/',
      }), 
    },
    dccc_en: {
      schema: contentSchema,
      indexes: contentIndex,
      ...createPageCollection({
        include: 'dccc-en/**/*.md',
        prefix: '/en',
      }), 
    },
    aim: {
      schema: contentSchema,
      indexes: contentIndex,
      ...createPageCollection({
        include: 'aim/**/*.md',
        prefix: '/aim',
      }), 
    },
    aim_en: {
      schema: contentSchema,
      indexes: contentIndex,
      ...createPageCollection({
        include: 'aim-en/**/*.md',
        prefix: '/aim/en',
      }), 
    },
    news: {
      schema: newsSchema,
      indexes: newsIndex,
      ...createPageCollection({
        include: 'db/news/*.md',
        prefix: "/",
      })
    },
    publications: {
      schema: publicationSchema,
      indexes: publicationIndex,
      ...createPageCollection({
        include: 'db/publications/*.md',
        prefix: "/",
      })
    },
  }
})
