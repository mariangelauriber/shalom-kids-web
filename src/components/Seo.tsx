import { Head } from 'vite-react-ssg'
import { preguntas, textoRespuesta } from '../data/contenido'
import { useRenovacionVigente } from '../lib/renovacion'
import { site, urlMapa, urlWhatsApp } from '../data/site'

interface Props {
  titulo: string
  descripcion: string
  ruta: string
  tipo?: 'website' | 'article'
  /** Incluir datos estructurados del colegio y preguntas frecuentes */
  datosColegio?: boolean
  noIndexar?: boolean
  /** Datos estructurados adicionales de la página */
  jsonLd?: Record<string, unknown>[]
}

function absoluta(ruta: string): string | null {
  return site.url ? `${site.url}${ruta}` : null
}

/** Datos estructurados (schema.org) para Google y asistentes de IA. Solo datos confirmados. */
function datosEstructurados(renovacion: boolean) {
  const d = site.direccion
  const colegio: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': ['School', 'Preschool', 'ElementarySchool', 'LocalBusiness'],
    '@id': site.url ? `${site.url}/#colegio` : undefined,
    name: site.nombre,
    alternateName: [site.nombreCompleto, 'Shalom Kids Soledad', 'Colegio Shalom Kids Soledad'],
    slogan: site.lema,
    description:
      'Colegio cristiano privado en Los Robles, Soledad (Atlántico, Colombia). Preescolar (párvulos, prejardín, jardín y transición) y primaria de 1.º a 3.º. Ingreso desde los 2 años. Énfasis en inglés, calendario A, jornada diurna, grupos pequeños. Método «Juega, construye y aprende».',
    url: site.url ?? undefined,
    logo: absoluta('/img/sello.webp') ?? undefined,
    image: absoluta('/img/og-shalom-kids.jpg') ?? undefined,
    email: site.correo,
    telephone: site.whatsappNumero ? `+${site.whatsappNumero}` : undefined,
    address: {
      '@type': 'PostalAddress',
      streetAddress: d.calle ?? undefined,
      addressLocality: d.municipio,
      addressRegion: d.departamento,
      addressCountry: d.pais,
    },
    geo: site.geo ? { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng } : undefined,
    hasMap: urlMapa() ?? undefined,
    areaServed: [
      { '@type': 'Place', name: `${d.barrio}, ${d.municipio}, ${d.departamento}` },
      { '@type': 'City', name: `${d.municipio}, ${d.departamento}` },
      { '@type': 'Place', name: 'Área metropolitana de Barranquilla' },
    ],
    openingHoursSpecification: site.publicarHorario
      ? site.horarioAtencion.map((h) => ({
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: h.codigos,
          opens: h.abre,
          closes: h.cierra,
        }))
      : undefined,
    sameAs: [site.instagram, site.facebook],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'admissions',
      availableLanguage: 'es',
      url: urlWhatsApp(),
    },
    knowsLanguage: 'es',
  }

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: preguntas
      .filter((p) => p.respuesta.trim().length > 0)
      .map((p) => ({
        '@type': 'Question',
        name: p.pregunta,
        acceptedAnswer: { '@type': 'Answer', text: textoRespuesta(p, renovacion) },
      })),
  }

  return [colegio, faq]
}

export function Seo({ titulo, descripcion, ruta, tipo = 'website', datosColegio, noIndexar, jsonLd = [] }: Props) {
  const canonica = absoluta(ruta)
  const imagen = absoluta('/img/og-shalom-kids.jpg') ?? '/img/og-shalom-kids.jpg'
  /* H12: la frase de renovación de las preguntas frecuentes desaparece también del JSON-LD */
  const renovacion = useRenovacionVigente()

  return (
    <Head>
      <html lang="es-CO" />
      <title>{titulo}</title>
      <meta name="description" content={descripcion} />
      {(noIndexar || site.modoRevision) && <meta name="robots" content="noindex, nofollow" />}
      {canonica && <link rel="canonical" href={canonica} />}

      <meta property="og:type" content={tipo} />
      <meta property="og:locale" content="es_CO" />
      <meta property="og:site_name" content={site.nombreCompleto} />
      <meta property="og:title" content={titulo} />
      <meta property="og:description" content={descripcion} />
      {canonica && <meta property="og:url" content={canonica} />}
      <meta property="og:image" content={imagen} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`Logo del ${site.nombre}`} />
      <meta name="twitter:card" content="summary_large_image" />

      <meta name="geo.region" content="CO-ATL" />
      <meta name="geo.placename" content={`${site.direccion.municipio}, ${site.direccion.departamento}`} />
      {site.geo && <meta name="geo.position" content={`${site.geo.lat};${site.geo.lng}`} />}
      {site.geo && <meta name="ICBM" content={`${site.geo.lat}, ${site.geo.lng}`} />}

      {[...(datosColegio ? datosEstructurados(renovacion) : []), ...jsonLd].map((json, i) => (
          <script key={i} type="application/ld+json">
            {JSON.stringify(json).replace(/</g, '\\u003c')}
          </script>
        ))}
    </Head>
  )
}
