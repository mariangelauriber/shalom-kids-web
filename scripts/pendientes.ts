/** Lista todo lo marcado como PENDIENTE en el código y los textos. */
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'

const raiz = join(import.meta.dirname, '..')
const archivos: string[] = []

function recorrer(dir: string) {
  for (const n of readdirSync(dir)) {
    const p = join(dir, n)
    if (statSync(p).isDirectory()) recorrer(p)
    else if (/\.(tsx?|css)$/.test(n)) archivos.push(p)
  }
}
recorrer(join(raiz, 'src'))

const patrones = [/<Pendiente>([^<]*)<\/Pendiente>/g, /<Pendiente \/>/g, /PENDIENTE/g, /pendiente: '([^']+)'/g, /: null,/g]
let total = 0

for (const f of archivos) {
  const lineas = readFileSync(f, 'utf8').split('\n')
  lineas.forEach((l, i) => {
    if (patrones.some((re) => new RegExp(re.source).test(l)) && !l.includes('Pendiente }') && !l.includes('import ')) {
      total++
      console.log(`${relative(raiz, f)}:${i + 1}  ${l.trim()}`)
    }
  })
}
console.log(`\n${total} líneas con datos pendientes.`)
