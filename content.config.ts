import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const generatePagesCollection = (path: String) => defineCollection({
      type: 'page',
      source: [{
        include: `${path}/**/*.md`,
      }],
      schema: z.object({
        title: z.string(),
      })
    }) 

export default defineContentConfig({
  collections: {
    about: generatePagesCollection('om-os'),
    research: generatePagesCollection('forskning'),
    radiotherapy: generatePagesCollection('straaleterapi'),
    cancers: defineCollection({
      type: 'page',
      source: [{
        include: 'cancers/*.md',
      }],
    }),
    news: defineCollection({
      type: 'page',
      source: [{
        include: 'news/*.md',
      }],
    }),
    publications: defineCollection({
      type: 'data',
      source: [{
        include: 'publications/*.md',
      }],
      schema: z.object({
        id: z.string(),
        toc: z.string()
      })
    }),
  }
})
