import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    pt: z.string(),
    en: z.string(),
    sub_pt: z.string(),
    sub_en: z.string(),
    img: z.string(),
    category: z.string(),
    order: z.number(),
  }),
});

const i18nCollection = defineCollection({
  type: 'data',
  schema: z.any(),
});

export const collections = {
  'projects': projectsCollection,
  'i18n': i18nCollection,
};
