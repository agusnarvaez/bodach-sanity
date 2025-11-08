// schemas/index.ts
import category from './documents/category'
import product from './documents/product'

// objetos embebidos
import attribute from './objects/attribute'
import variant from './objects/variant'

// lista que Sanity tomará al levantar el Studio
export const schemaTypes = [
  category,
  product,
  attribute,
  variant
]
