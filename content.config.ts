import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const createPageCollection = (source: {
  include: string,
  prefix?: string,
  exclude?: string[]
}) => defineCollection({
      type: 'page',
      source: {
        // repository: {
        //   url: 'https://github.com/asgerviggo/DCCC-content.git',
        //   branch: 'main',
        // },
        ...source,
      },
    })

export default defineContentConfig({
  collections: {
    main: {
      schema: z.object({
        title: z.string(),
      }),
      ...createPageCollection({
        include: '**/*.md',
        exclude: ['db']
      }), 
    },
    cancers: {
      schema: z.object({
        title: z.string(),
      }),
      ...createPageCollection({
        include: 'db/cancers/*.md',
        prefix: "/",
      })
    },
    news: {
      schema: z.object({
        title: z.string(),
        date: z.date(),
      }),
      ...createPageCollection({
        include: 'db/news/*.md',
        prefix: "/",
      })
    },
    // publications: {
    //   schema: z.object({
    //     authors: z.array(z.string()),
    //     url: z.string()
    //   }),
    //   ...createPageCollection({
    //     include: 'db/publications/*.md',
    //     prefix: "/",
    //   })
    // },
  }
})
