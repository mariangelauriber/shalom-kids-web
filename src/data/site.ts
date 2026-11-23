/**
 * Configuración central del sitio.
 * Todo lo que vale `null` está PENDIENTE: la web lo muestra como [PENDIENTE]
 * y lo omite de los datos para Google e IA hasta que se complete.
 * `npm run pendientes` lista lo que falta.
 *
 * Este archivo lo leen también los scripts de Node (robots, sitemap, llms.txt):
 * no importar otros archivos aquí.
 */

export interface PublicacionInstagram {
  /** Enlace a la publicación, p. ej. https://www.instagram.com/p/XXXX/ */
  url: string
  /** Nombre del día especial o evento, p. ej. «Día de la familia» */
  titulo: string
  /** Portada guardada en public/img/ig/ (vertical 9:16) */
  portada?: string
  /** Miniatura pequeña de la portada (192 px de ancho) para el método */
  miniatura?: string
  /** Una línea de lo que vivieron los niños, derivada del título (decisión del 22 nov 2026: sin datos nuevos) */
  pie?: string
  /** Dónde se muestra: inicio (Vida en Shalom, por defecto), método («Mira un proyecto real») o vacacionales */
  pagina?: 'inicio' | 'metodo' | 'vacacionales'
}

/** Bloque «El valor de este mes» (lo envía la profesora cada mes). Mientras sea null, el bloque no se muestra. */
export interface ValorDelMes {
  /** Mes al que corresponde, p. ej. «marzo de 2027» */
  mes: string
  /** Nombre del valor, p. ej. «Respeto» */
  valor: string
  /** A cuál de los tres valores del sello pertenece */
  pilar: 'Sabiduría' | 'Amor' | 'Paz'
  /** Versículo corto elegido por el colegio */
  versiculo: string
  /** Cita bíblica del versículo, p. ej. «Proverbios 3:5» */
  cita: string
  /** Una idea sencilla para conversarlo en familia */
  enCasa: string
  /**
   * Último día en que se muestra (AAAA-MM-DD, hora de Colombia), p. ej. '2027-03-31'.
   * Pasada esa fecha el bloque no se compila ni se muestra, aunque nadie lo vuelva a poner en null.
   */
  hasta: string
}

const anioMatricula = 2027

export const site = {
  nombre: 'Centro Educativo Shalom Kids',
  nombreCorto: 'Shalom Kids',
  nombreCompleto: 'Centro Educativo Shalom Kids · Soledad',
  lema: 'Educamos con el lenguaje del amor y la sabiduría de Dios',
  valores: ['Sabiduría', 'Amor', 'Paz'],

  /** Dominio con https y sin barra final, p. ej. https://shalomkids.edu.co — PENDIENTE */
  url: null as string | null,

  /** Número de WhatsApp con indicativo, solo dígitos */
  whatsappNumero: '573013883046' as string | null,
  /** Enlace actual de la bio de Instagram; se usa mientras no haya número */
  whatsappRespaldo: 'https://wa.link/av0fwe',
  /**
   * Mensaje prellenado de admisiones (rediseño de conversión del 23 nov 2026, anexo «Header / Hero / Cierre»): lo usan la cabecera,
   * la portada, el cierre, la barra móvil y los demás botones de admisión. Conserva la palabra «cupo» (ajuste 14),
   * la misma que piden los reels, los stickers y la pauta. Sin «sin costo» (ajuste 7).
   */
  whatsappMensaje: `Hola Shalom Kids, quiero agendar una visita y conocer los costos y cupos ${anioMatricula}. Mi hijo tiene ___ años.`,

  instagram: 'https://www.instagram.com/shalomkids/',
  instagramUsuario: '@shalomkids',
  /** Página oficial de Facebook (confirmada por el colegio, 18 nov 2026). Si el colegio cambia el nombre de usuario, se cambia solo aquí. */
  facebook: 'https://www.facebook.com/ShalomEstimulacionAprendizajeyDesarrolloArtistico',
  correo: 'shalom_kids@hotmail.com',

  direccion: {
    /** Dirección exacta */
    calle: 'Cl. 77 #15B-06' as string | null,
    barrio: 'Los Robles',
    municipio: 'Soledad',
    departamento: 'Atlántico',
    pais: 'CO',
  },
  /** Coordenadas del colegio (de su ficha de Google Maps) */
  geo: { lat: 10.9137349, lng: -74.8122535 } as { lat: number; lng: number } | null,
  /** Ficha del colegio en Google Maps */
  mapaFicha: 'https://maps.app.goo.gl/fCgSAkWE611gXA1L9' as string | null,

  /**
   * ¿Se muestra el vacacional? Escondido el 18 nov 2026 por decisión del colegio, hasta tener fechas y horario.
   * En true vuelve la página /vacacionales/ y sus enlaces en la cabecera, el pie, el inicio, el sitemap y llms.txt.
   */
  mostrarVacacional: false,

  /** Modo revisión: noindex en todas las páginas y robots.txt cerrado. Poner en false al lanzar la web. */
  modoRevision: true,

  matriculas: {
    anio: anioMatricula,
    cierre: 'hasta el inicio de clases, a finales de enero de 2027',
    renovacion: 'hasta el 30 de noviembre de 2026',
    /**
     * Fin de la renovación (hora de Colombia). Después de esta fecha el recuadro de renovación
     * no se compila ni se muestra, y la web no dice nada sobre la renovación (decisión del 22 nov 2026).
     */
    renovacionHasta: '2026-11-30T23:59:59-05:00',
    /**
     * Descuento de matrícula (dato de la FICHA, ajuste 9 del 23 nov 2026): el monto se informa por WhatsApp.
     * Desde el 4 dic 2026 no se compila ni se muestra (misma técnica que la renovación), tampoco en el JSON-LD ni en llms.txt.
     */
    descuento: 'Pregunta por el descuento de matrícula, vigente hasta el 3 de diciembre de 2026.',
    descuentoHasta: '2026-12-03T23:59:59-05:00',
  },

  /**
   * ¿Se publica el horario de atención? El manual v3 no publica horarios exactos;
   * solo se activa si el colegio lo autoriza (decisión del 18 nov 2026).
   */
  publicarHorario: false,
  /** Horario de atención (ficha de Google Maps). No se muestra mientras publicarHorario sea false. */
  horarioAtencion: [
    { dias: 'Lunes a viernes', horas: '8:00 a.m. – 2:00 p.m.', codigos: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], abre: '08:00', cierra: '14:00' },
    { dias: 'Sábados', horas: '9:00 a.m. – 12:00 m.', codigos: ['Saturday'], abre: '09:00', cierra: '12:00' },
  ],

  /** Tiempo de respuesta por WhatsApp */
  tiempoRespuesta: 'el mismo día, de lunes a viernes' as string | null,

  /**
   * «El valor de este mes» (decisión del 22 nov 2026): lo envía la profesora. Mientras sea null,
   * el bloque no se muestra en el inicio. Un mes sin dato vuelve a null: un bloque desactualizado daña más que no tenerlo.
   */
  valorDelMes: null as ValorDelMes | null,

  /** Clave de Web3Forms creada con shalom_kids@hotmail.com — PENDIENTE */
  web3formsClave: null as string | null,
  /** Identificador de Meta Pixel — PENDIENTE */
  metaPixelId: null as string | null,
  /** Identificador de Google Analytics 4 (G-XXXXXXX) — PENDIENTE */
  ga4Id: null as string | null,

  legal: {
    /** Razón social del responsable de los datos (dato del colegio, 22 nov 2026) */
    razonSocial: 'Centro Educativo Shalom Kids' as string | null,
    /** NIT (dato del colegio, 22 nov 2026) */
    nit: '900184090-1' as string | null,
    /** Fecha desde la que rige el aviso (decisión del colegio, 22 nov 2026: texto estándar) */
    vigenteDesde: '22 de noviembre de 2026' as string | null,
    /** Quién atiende consultas y reclamos de datos (decisión del colegio, 22 nov 2026: texto estándar) */
    atiende: 'el área administrativa del colegio',
  },

  /** Publicaciones de Instagram (lo publicado cuenta con consentimiento de los padres, 10 nov 2026) */
  // Portadas descargadas de Instagram (10 nov 2026) y guardadas en public/img/ig/
  publicacionesInstagram: [
    {
      url: 'https://www.instagram.com/reel/DRDVewdkmPg/',
      titulo: 'Comunidad que inspira',
      pie: 'Momentos de nuestra comunidad Shalom.',
      portada: '/img/ig/DRDVewdkmPg.webp',
    },
    {
      url: 'https://www.instagram.com/reel/DSfmbHvjigN/',
      titulo: 'Clausura',
      pie: 'El cierre del año escolar con las familias.',
      portada: '/img/ig/DSfmbHvjigN.webp',
    },
    {
      url: 'https://www.instagram.com/reel/DTldVQyEgom/',
      titulo: 'Sonrisas',
      pie: 'Las sonrisas de nuestros niños.',
      portada: '/img/ig/DTldVQyEgom.webp',
    },
    {
      url: 'https://www.instagram.com/reel/DR74BwFkkSb/',
      titulo: 'Nuestra gran familia',
      pie: 'La familia Shalom, reunida.',
      portada: '/img/ig/DR74BwFkkSb.webp',
    },
    {
      url: 'https://www.instagram.com/reel/DQe8zL9js4D/',
      titulo: 'Día de la Biblia',
      pie: 'Celebramos la Palabra con los niños.',
      portada: '/img/ig/DQe8zL9js4D.webp',
    },
    /* H29 (respuesta del colegio, 22 nov 2026): los dos proyectos son del aula; se muestran en «Mira un proyecto real» */
    {
      url: 'https://www.instagram.com/reel/DP9Wrb-DmNp/',
      titulo: 'Proyecto dinosaurios',
      portada: '/img/ig/DP9Wrb-DmNp.webp',
      miniatura: '/img/ig/DP9Wrb-DmNp-192.webp',
      pagina: 'metodo',
    },
    {
      url: 'https://www.instagram.com/reel/Dfcf59Yv149/',
      titulo: 'Proyecto de las profesiones',
      portada: '/img/ig/Dfcf59Yv149.webp',
      miniatura: '/img/ig/Dfcf59Yv149-192.webp',
      pagina: 'metodo',
    },
  ] as PublicacionInstagram[],
}

/**
 * Mensajes de WhatsApp por origen (rediseño de conversión del 23 nov 2026, anexo con los ajustes 7 y 14): sin «sin costo» y con la
 * palabra «cupo» en los de admisión, para contar los mensajes sin cookies. Los botones de admisión sin mensaje propio
 * usan site.whatsappMensaje.
 */
export const mensajesWhatsApp = {
  /** Sección de niveles: confirmar el grado con la fecha de nacimiento */
  grados: `Hola, quiero confirmar qué grado le corresponde a mi hijo en ${anioMatricula}, ver horarios y consultar el cupo. Nació el ___.`,
  /** Sección de inclusión del inicio y página /inclusion/ (la palabra «inclusión» permite separarlos) */
  inclusion: `Hola Shalom Kids, vi su enfoque de inclusión sin diagnóstico previo. Quisiera agendar una visita para conversar sobre mi hijo de ___ años y su cupo ${anioMatricula}.`,
  /** Solo se usa mientras la renovación esté vigente (hasta el 30 nov 2026) */
  renovacion: `Hola, somos familia Shalom y queremos renovar la matrícula ${anioMatricula} de nuestro hijo ___ antes del 30 de noviembre.`,
}

/** Pre-calificador (ajuste 13): arma el mensaje con el grado y la forma de empezar. No guarda ni envía nada a un servidor. */
export function mensajePrecalificador(grado: string | null, opcion: string): string {
  const para = grado ? `para ${grado}` : 'para mi hijo de ___ años'
  return `Hola Shalom Kids, busco cupo ${anioMatricula} ${para}. Me gustaría ${opcion}. ¿Me comparten costos y horarios?`
}

/** Rótulo principal de los botones de admisión (P20 y ajuste 7 del 23 nov 2026) */
export const rotuloVisita = 'Agenda una visita por WhatsApp'

/** ¿Sigue vigente «El valor de este mes» en esa fecha? (hasta el final del día indicado, hora de Colombia) */
export function valorDelMesVigente(fecha: number = Date.now()): boolean {
  const v = site.valorDelMes
  if (!v) return false
  const fin = Date.parse(`${v.hasta}T23:59:59-05:00`)
  return Number.isFinite(fin) && fecha <= fin
}

/** ¿Sigue abierta la renovación de matrícula en esa fecha? */
export function renovacionVigente(fecha: number = Date.now()): boolean {
  return fecha <= Date.parse(site.matriculas.renovacionHasta)
}

/** ¿Sigue vigente el descuento de matrícula en esa fecha? (ajuste 9) */
export function descuentoVigente(fecha: number = Date.now()): boolean {
  return fecha <= Date.parse(site.matriculas.descuentoHasta)
}

export function urlWhatsApp(mensaje: string = site.whatsappMensaje): string {
  if (site.whatsappNumero) {
    return `https://wa.me/${site.whatsappNumero}?text=${encodeURIComponent(mensaje)}`
  }
  return site.whatsappRespaldo
}

/** Número de WhatsApp legible: 573013883046 → 301 388 3046 */
export function telefonoLegible(): string | null {
  if (!site.whatsappNumero) return null
  return site.whatsappNumero.replace(/^57/, '').replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3')
}

export function urlMapa(): string | null {
  if (site.mapaFicha) return site.mapaFicha
  if (!site.geo) return null
  return `https://www.google.com/maps/search/?api=1&query=${site.geo.lat},${site.geo.lng}`
}

export function urlComoLlegar(): string | null {
  if (!site.geo) return null
  return `https://www.google.com/maps/dir/?api=1&destination=${site.geo.lat},${site.geo.lng}`
}
