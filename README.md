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

## Pendientes antes de publicar

1. Confirmación del colegio: texto de adaptación, documentos de matrícula y tiempo de respuesta (escritos como modelo).
4. Clave de Web3Forms. Se pide en web3forms.com con shalom_kids@hotmail.com y se pega en `web3formsClave`.
5. Identificadores de Meta Pixel y GA4. El aviso de cookies solo aparece cuando hay alguno.
6. Enlaces de Instagram aprobados por el colegio: sin rostros o con consentimiento.
7. Aviso de privacidad: razón social, NIT, fecha y plazo de conservación, más la aprobación del colegio.
8. Dominio y hosting, con autorización previa.

## Fuera de la web (recomendado, con autorización)

- Crear la ficha de Google Business Profile y la de Bing Places. ChatGPT busca con Bing.
- Usar el mismo nombre, dirección y WhatsApp en todas partes: web, Google, Bing e Instagram.
- Dar de alta el sitemap en Google Search Console y en Bing Webmaster Tools.
