// product.ts
import { defineType } from 'sanity'

export default defineType({
  name: 'product',
  type: 'document',
  title: 'Producto',
  fields: [
    { name: 'title', type: 'string', title: 'Nombre' },          // “Placa Recta 2,7 bloqueada”
    { name: 'slug',  type: 'slug',  options: { source: 'title' } },
    { name: 'category', type: 'reference', to: [{ type: 'category' }], title: 'Categoría' },
    {
      name: 'materials',
      type: 'array',
      title: 'Material(es)',
      of: [{ type: 'string' }],
      options: { list: ['Titanio Puro', 'Titanio', 'Acero', 'Acero inoxidable', 'Aluminio Anodizado'] }
    },
    { name: 'description', type: 'text', title: 'Descripción' },
    { name: 'photo', type: 'image', title: 'Foto representativa', options: { hotspot: true } },
    { name: 'variants', type: 'array', of: [{ type: 'variant' }], title: 'Variantes' }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category.title',
      media: 'photo'
    }
  }
})
