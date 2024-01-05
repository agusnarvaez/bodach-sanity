import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'plate',
  title: 'Placa',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'blockContent',
    }),
    defineField({
      name: 'images',
      title: 'Imágenes',
      type: 'array',
      of: [{
        type: 'image',
        options: {
          hotspot: true,
        }
      }],
    }),
    defineField({
      name: 'variants',
      title: 'Variantes',
      type: 'array',
      of: [{type: 'reference', to: {type: 'plateVariant'}}],
    }),
    defineField({
      name: 'screws',
      title: 'Tornillos',
      type: 'array',
      of: [{type: 'reference', to: {type: 'screw'}}],
    })
  ],
})
