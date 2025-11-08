// variant.ts (objeto embebido)
export default {
  name: 'variant',
  type: 'object',
  title: 'Variante',
  fields: [
    { name: 'title', type: 'string', title: 'Título corto' },   // p.e. “8 orif – izq”
    { name: 'code',  type: 'string', title: 'Código interno' },
    { name: 'photo', type: 'image',  title: 'Foto', options: { hotspot: true } },
    { name: 'attributes', type: 'array', of: [{ type: 'attribute' }] }
  ]
}
