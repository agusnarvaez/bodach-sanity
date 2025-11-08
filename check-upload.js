/* eslint-disable no-undef */
const fs = require('fs')
const file = 'catalogo_implantes.ndjson'
const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/)
lines.forEach((l, i) => {
  if (!l.trim()) return// salta líneas vacías
  try { JSON.parse(l) }
  catch (e) {
    console.error(`❌  Línea ${i + 1}: ${e.message}`)
    process.exit(1)
  }
})
console.log(`✅  ${lines.length} líneas válidas`)