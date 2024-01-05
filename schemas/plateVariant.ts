import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'plateVariant',
  title: 'Variante de placa',
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
    // CANTIDAD
    defineField({
      name: 'quantity',
      title: 'Cantidad',
      type: 'number',
    }),
    // ORIFICIOS
    defineField({
      name: 'holes',
      title: 'Cantidad de orificios',
      type: 'number',
    }),
    // LARGO
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
