import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'screw',
  title: 'Tornillo',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
    }),
    defineField({
      name: 'code',
      title: 'Código',
      type: 'string',
    }),
    defineField({
      name: 'quantity',
      title: 'Cantidad',
      type: 'number',
    }),
    defineField({
      name: 'length',
      title: 'Largo (mm)',
      type: 'number',
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
    })
  ],
})
