// category.ts
import { defineType } from 'sanity'

export default defineType({
  name: 'category',
  type: 'document',
  title: 'Categoría',
  fields: [
    { name: 'title', type: 'string', title: 'Nombre' },
    { name: 'slug',  type: 'slug',   options: { source: 'title' } },
    { name: 'photo', type: 'image', title: 'Foto representativa', options: { hotspot: true } }
  ]
})
