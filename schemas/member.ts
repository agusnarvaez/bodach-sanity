import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'member',
  title: 'Miembro',
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
      name: 'parts',
      title: 'Partes del cuerpo',
      type: 'array',
      of: [{type: 'reference', to: {type: 'part'}}],
    })
  ],
})
