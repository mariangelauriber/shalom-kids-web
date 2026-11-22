import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/** Fecha de compilación: decide si se compilan textos con fecha de vencimiento (p. ej. la renovación, H12) */
const fechaCompilacion = new Date().toISOString()

/** H10: solo se precargan las fuentes latinas; las demás (hebreo de /nosotros/) se bajan solo si se usan */
const fuentesPrecargadas = ['nunito-latin-wght-normal', 'fredoka-latin-wght-normal']

export default defineConfig({
  // Ruta base: "/" en el hosting definitivo; "/shalom-kids-web/" para la vista de revisión en GitHub Pages
  base: (globalThis as { process?: { env: Record<string, string | undefined> } }).process?.env.BASE_PATH ?? '/',
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
