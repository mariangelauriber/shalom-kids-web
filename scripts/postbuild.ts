/**
 * Después de compilar: genera robots.txt, sitemap.xml, llms.txt y _headers en dist/
 * a partir de src/data/site.ts, y avisa de los datos pendientes.
 */
import { createHash } from 'node:crypto'
import { existsSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { blogPosts } from '../src/data/blog.ts'
import { descuentoVigente, renovacionVigente, site, urlWhatsApp } from '../src/data/site.ts'

const dist = join(import.meta.dirname, '..', 'dist')
const rutas = [
  '/', '/nosotros/', '/inclusion/', '/blog/',
  ...blogPosts.map((post) => `/blog/${post.slug}/`),
  ...(site.mostrarVacacional ? ['/vacacionales/'] : []),
  '/privacidad/',
]

// Manifiestos internos de Vite: no hacen falta en el servidor
rmSync(join(dist, '.vite'), { recursive: true, force: true })

// robots.txt: abierto a buscadores y a asistentes de IA (para que puedan citar el colegio)
const botsIA = [
  'Googlebot',
  'Bingbot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'GPTBot',
  'PerplexityBot',
  'Perplexity-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'Google-Extended',
  'Applebot',
  'Applebot-Extended',
]
const robots = [
  'User-agent: *',
  'Allow: /',
  '',
  ...botsIA.flatMap((b) => [`User-agent: ${b}`, 'Allow: /', '']),
  site.url ? `Sitemap: ${site.url}/sitemap.xml` : '',
  '',
].join('\n')
writeFileSync(join(dist, 'robots.txt'), site.modoRevision ? 'User-agent: *\nDisallow: /\n' : robots)
// GitHub Pages: sin Jekyll, para que sirva todos los archivos tal cual
writeFileSync(join(dist, '.nojekyll'), '')

if (site.url) {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${rutas.map((r) => `  <url><loc>${site.url}${r}</loc></url>`).join('\n')}
</urlset>
`
  writeFileSync(join(dist, 'sitemap.xml'), sitemap)
}

// llms.txt: resumen en texto plano para asistentes de IA. Solo datos confirmados.
const d = site.direccion
const base = site.url ?? ''
const llms = `# ${site.nombreCompleto}

> Colegio cristiano privado en ${d.barrio}, ${d.municipio} (${d.departamento}, Colombia). Preescolar (párvulos, prejardín, jardín y transición) y primaria de 1.º a 3.º. Ingreso desde los 2 años. Énfasis en inglés, calendario A, jornada diurna, grupos pequeños. Lema: «${site.lema}».

## Datos clave

- Nombre: ${site.nombre} (no confundir con otras marcas «Shalom Kids» de Colombia).
- Ubicación: barrio ${d.barrio}, ${d.municipio}, ${d.departamento}, Colombia.${d.calle ? ` Dirección: ${d.calle}.` : ''}${site.geo ? ` Coordenadas: ${site.geo.lat}, ${site.geo.lng}.` : ''}
- Significado del nombre: «shalom» es una palabra hebrea que significa paz.
- Enfoque: formación en valores cristianos (sabiduría, amor y paz).
- Método: «Juega, construye y aprende»: aprendizaje por el juego y un proyecto de aula cada bimestre.
- Servicios: énfasis en inglés; música, deporte y arte; psicología; servicio de alimentación; cámaras en las aulas.
- Grados ${site.matriculas.anio}: párvulos, prejardín, jardín, transición, 1.º, 2.º y 3.º de primaria.
- Ingreso: desde los 2 años, en párvulos (jardín infantil). Un solo colegio de párvulos a 3.º de primaria.
- Día a día: oración cada mañana, un valor distinto cada mes y maestras que conocen a cada niño por su nombre.
- Familias: reuniones periódicas para revisar cómo avanza cada niño.
- Edad de ingreso de referencia (Secretaría de Educación): párvulos 2 años, prejardín 3, jardín 4, transición 5, 1.º 6, 2.º 7 y 3.º 8. El colegio confirma el grado con la fecha de nacimiento.
- Inclusión: recibe niños con discapacidad, autismo, TDAH, dificultades de aprendizaje y otros ritmos. No se necesita un diagnóstico para empezar; el ingreso es por una entrevista con la familia y los apoyos se acuerdan con ella. El cupo por grupo y los costos se consultan en privado por WhatsApp.
${site.publicarHorario ? `- Horario de atención: ${site.horarioAtencion.map((h) => `${h.dias} ${h.horas}`).join('; ')}; domingos cerrado.\n` : ''}- Jornada: diurna, de lunes a viernes. Los horarios se informan por WhatsApp.
- Área: Soledad, área metropolitana de Barranquilla.
- Calendario: A (el año escolar empieza a finales de enero).
- Matrículas ${site.matriculas.anio}: abiertas ${site.matriculas.cierre}.
${renovacionVigente() ? `- Renovación para familias del colegio: ${site.matriculas.renovacion}.
` : ''}${descuentoVigente() ? `- Descuento de matrícula: vigente hasta el 3 de diciembre de 2026; el monto se informa por WhatsApp.
` : ''}- Costos y documentos de matrícula: se envían por WhatsApp; no se publican.
- Matrícula en 3 pasos: 1) escribir por WhatsApp para recibir los costos ${site.matriculas.anio} y los horarios y confirmar el cupo para la edad del niño; 2) visitar el colegio con el niño y conocer los salones y a las maestras; 3) reservar por WhatsApp, donde se envían el formulario y la lista de documentos. Primero se visita el colegio y después se decide.
- Contacto: WhatsApp ${urlWhatsApp()} · Instagram ${site.instagram} · Facebook ${site.facebook} · Correo ${site.correo}

## Páginas

- [Inicio](${base}/): así es el ingreso en Shalom, método y formación espiritual, niveles con los logros de cada grado y la edad de ingreso, inclusión en 3 pasos, familias, matrícula ${site.matriculas.anio} con un pre-calificador por WhatsApp, preguntas frecuentes y ubicación.
- [Nosotros](${base}/nosotros/): historia, significado de Shalom, misión, visión 2030 y valores.
- [Inclusión](${base}/inclusion/): cómo acompaña el colegio a los niños que necesitan apoyos (visita, entrevista, apoyos acordados con la familia y seguimiento en reuniones periódicas) y preguntas frecuentes.
- [Blog para familias](${base}/blog/): guías prácticas sobre el inicio escolar, la elección del colegio y el juego en casa.
${blogPosts.map((post) => `  - [${post.titulo}](${base}/blog/${post.slug}/): ${post.descripcion}`).join('\n')}
${site.mostrarVacacional ? `- [Vacacional de nivelación y preparación](${base}/vacacionales/): preparación para párvulos, prejardín y jardín, preparación para leer y escribir (transición y 1.º) y nivelación para 2.º y 3.º. Grupos pequeños; valor en privado por WhatsApp.
` : ''}- [Aviso de privacidad](${base}/privacidad/): tratamiento de datos según la Ley 1581 de 2012.
`
writeFileSync(join(dist, 'llms.txt'), llms)

// _headers (Cloudflare Pages; SEC-02): cabeceras de seguridad. Los scripts en línea de vite-react-ssg
// (datos de hidratación y huella SSG) cambian en cada compilación, por eso sus sha256 se calculan aquí.
function archivosHtml(dir: string): string[] {
  return readdirSync(dir).flatMap((n) => {
    const p = join(dir, n)
    return statSync(p).isDirectory() ? archivosHtml(p) : p.endsWith('.html') ? [p] : []
  })
}
const huellas = new Set<string>()
for (const f of archivosHtml(dist)) {
  const t = readFileSync(f, 'utf8')
  for (const m of t.matchAll(/<script(?![^>]*\bsrc=)(?![^>]*ld\+json)[^>]*>([\s\S]*?)<\/script>/g)) {
    huellas.add(`'sha256-${createHash('sha256').update(m[1], 'utf8').digest('base64')}'`)
  }
}
const cspScript = ["'self'", ...huellas, 'https://www.instagram.com']
/* SEC-09: el reel se pinta en su propio iframe; el documento no necesita imágenes ni conexiones de Instagram */
const cspImg = ["'self'", 'data:']
const cspConnect = ["'self'", 'https://api.web3forms.com']
if (site.ga4Id) {
  cspScript.push('https://www.googletagmanager.com')
  cspImg.push('https://*.google-analytics.com', 'https://www.googletagmanager.com')
  cspConnect.push('https://*.google-analytics.com', 'https://*.analytics.google.com', 'https://www.googletagmanager.com')
}
if (site.metaPixelId) {
  cspScript.push('https://connect.facebook.net')
  cspImg.push('https://www.facebook.com')
  cspConnect.push('https://www.facebook.com', 'https://connect.facebook.net')
}
const csp = [
  "default-src 'self'",
  `script-src ${cspScript.join(' ')}`,
  "style-src 'self' 'unsafe-inline'",
  `img-src ${cspImg.join(' ')}`,
  "font-src 'self'",
  `connect-src ${cspConnect.join(' ')}`,
  'frame-src https://www.google.com https://www.instagram.com',
  "manifest-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  'upgrade-insecure-requests',
].join('; ')
/* SEC-09: HSTS sin includeSubDomains hasta conocer el dominio y confirmar que todos sus subdominios sirven HTTPS */
const cabeceras = `/*
  Content-Security-Policy: ${csp}
  Strict-Transport-Security: max-age=31536000
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=(), usb=(), serial=(), bluetooth=(), magnetometer=(), gyroscope=(), accelerometer=(), browsing-topics=(), fullscreen=(self "https://www.google.com" "https://www.instagram.com")
  Cross-Origin-Opener-Policy: same-origin-allow-popups

/assets/*
  Cache-Control: public, max-age=31536000, immutable
`
writeFileSync(join(dist, '_headers'), cabeceras)

const faltan = Object.entries({
  dominio: site.url,
  'dirección exacta': d.calle,
  coordenadas: site.geo,
  'clave Web3Forms': site.web3formsClave,
  'Meta Pixel': site.metaPixelId,
  GA4: site.ga4Id,
  'razón social': site.legal.razonSocial,
  NIT: site.legal.nit,
})
  .filter(([, v]) => v == null)
  .map(([k]) => k)

console.log('\n✓ robots.txt, llms.txt' + (site.url ? ', sitemap.xml' : '') + ` y _headers (${huellas.size} huellas) generados en dist/`)
if (faltan.length) console.log(`⚠ Datos pendientes en src/data/site.ts: ${faltan.join(', ')}`)
// llms.txt y el HTML prerenderizado son estáticos: la renovación (hasta el 30 nov) y el descuento (hasta el 3 dic)
// solo desaparecen de ellos al recompilar y volver a publicar el 1 dic y el 4 dic de 2026
if (renovacionVigente() || descuentoVigente())
  console.log(
    '⚠ Esta compilación incluye ' +
      [renovacionVigente() && 'la renovación (hasta el 30 nov)', descuentoVigente() && 'el descuento (hasta el 3 dic)']
        .filter(Boolean)
        .join(' y ') +
      ' en llms.txt y el HTML estático: recompilar y volver a publicar el 1 dic y el 4 dic de 2026.',
  )
console.log('  Lista completa: npm run pendientes\n')

// Vista de revisión en una subcarpeta (p. ej. GitHub Pages, BASE_PATH=/shalom-kids-web/):
// los enlaces internos y las imágenes de public/ están escritos desde la raíz, así que se les añade el prefijo.
// Desde Git Bash, MSYS convierte «/shalom-kids-web/» en «C:/Program Files/Git/shalom-kids-web/»: se detiene la
// compilación en vez de dejar una web rota (compilar desde PowerShell o con MSYS_NO_PATHCONV=1)
const basePath = process.env.BASE_PATH
if (basePath && (!basePath.startsWith('/') || basePath.includes(':'))) {
  console.error(
    `✗ BASE_PATH no válido: «${basePath}». Debe empezar por «/» (p. ej. /shalom-kids-web/). ` +
      'En Git Bash: MSYS_NO_PATHCONV=1 BASE_PATH=/shalom-kids-web/ npm run build',
  )
  process.exit(1)
}
if (basePath && basePath !== '/') {
  const pre = basePath.replace(/\/$/, '')
  const rutas = '(?:img/|blog/|nosotros/|inclusion/|privacidad/|vacacionales/|#|favicon|apple-touch|icon-|site\\.webmanifest)'
  const reRuta = new RegExp(`(["'\`(])/(?=${rutas})`, 'g')
  const reInicio = /(href=|href:)(["'])\/\2/g
  const recorrer = (dir: string): string[] =>
    readdirSync(dir, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? recorrer(join(dir, e.name)) : [join(dir, e.name)]))
  let tocados = 0
  for (const f of recorrer(dist).filter((f) => /\.(html|js|css|json|webmanifest|txt)$/.test(f))) {
    const t = readFileSync(f, 'utf8')
    const n = t.replace(reRuta, `$1${pre}/`).replace(reInicio, `$1$2${pre}/$2`)
    if (n !== t) {
      writeFileSync(f, n)
      tocados++
    }
  }
  console.log(`✓ Rutas con prefijo ${pre}/ en ${tocados} archivos (vista de revisión)`)
}

// Esta carpeta es solo la web: el contenido de redes se genera fuera de ella
const raiz = join(import.meta.dirname, '..')
const mezclado = ['output', 'marca'].filter((c) => existsSync(join(raiz, c)))
if (mezclado.length)
  console.log(
    `⚠ Material de marketing dentro de la web: ${mezclado.join(', ')}/. Va en ` +
      'la carpeta de generación de contenido, fuera de la web.\n',
  )
