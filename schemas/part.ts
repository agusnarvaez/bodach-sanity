import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'part',
  title: 'Parte del cuerpo',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
    }),
    defineField({
      name: 'cover',
      title: 'Imagen Principal',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'boxPhoto',
      title: 'Foto de caja',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'plates',
      title: 'Placas',
      type: 'array',
      of: [{type: 'reference', to: {type: 'plate'}}],
    })
  ],
})
