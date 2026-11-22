# Web · Centro Educativo Shalom Kids · Soledad

Web de Shalom Kids con información sobre el colegio, admisiones 2027 por WhatsApp, inclusión escolar y guías para familias.
Hecha con React, Vite y TypeScript. Cada página se prerenderiza como HTML estático con vite-react-ssg.

## Comandos

```bash
npm install          # instalar dependencias
npm run dev          # desarrollo en http://localhost:5173
npm run build        # compila a dist/ (HTML estático + robots.txt + llms.txt + sitemap.xml)
npm run preview      # ver dist/ en local
npm run pendientes   # lista todo lo marcado [PENDIENTE]
```

Lo que hay que subir al hosting es la carpeta `dist/` completa.

## Dónde se cambian los datos

- `src/data/site.ts`: dominio, WhatsApp, dirección y coordenadas, clave de Web3Forms, Meta Pixel, GA4, datos legales y publicaciones de Instagram.
- `src/data/contenido.ts`: grados, jornadas, un día en Shalom, pasos de matrícula y preguntas frecuentes.
- `src/data/blog.ts`: guías para familias; cada entrada genera su página y se incorpora al sitemap cuando se configura el dominio.

Todo lo que vale `null` se muestra en la web como **[PENDIENTE]** y no se envía a Google ni a la IA.
