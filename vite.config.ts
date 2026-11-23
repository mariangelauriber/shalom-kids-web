import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/** Fecha de compilación: decide si se compilan textos con fecha de vencimiento (p. ej. la renovación, H12) */
const fechaCompilacion = new Date().toISOString()

/** H10: solo se precargan las fuentes latinas; las demás (hebreo de /nosotros/) se bajan solo si se usan */
const fuentesPrecargadas = ['nunito-latin-wght-normal', 'fredoka-latin-wght-normal']

// Ruta base: "/" en el hosting definitivo; "/shalom-kids-web/" para la vista de revisión en GitHub Pages.
// Desde Git Bash, MSYS la convierte en «C:/Program Files/Git/...»: se detiene la compilación (usar MSYS_NO_PATHCONV=1)
const basePath = (globalThis as { process?: { env: Record<string, string | undefined> } }).process?.env.BASE_PATH ?? '/'
if (!basePath.startsWith('/') || basePath.includes(':'))
  throw new Error(`BASE_PATH no válido: «${basePath}». Debe empezar por «/» (p. ej. /shalom-kids-web/).`)

export default defineConfig({
  base: basePath,
  plugins: [react()],
  define: {
    __FECHA_COMPILACION__: JSON.stringify(fechaCompilacion),
  },
  ssgOptions: {
    entry: 'src/main.tsx',
    script: 'defer',
    dirStyle: 'nested',
    formatting: 'none',
    onPageRendered(_ruta, html) {
      return html.replace(/<link rel="preload" as="font"[^>]*>/g, (link) =>
        fuentesPrecargadas.some((f) => link.includes(`/${f}-`)) ? link : '',
      )
    },
  },
})
