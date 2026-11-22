import { site } from '../data/site'

/* Medición (Meta Pixel + GA4). Solo se carga si hay identificadores
   configurados y la persona acepta en el aviso de cookies. */

type Fn = (...args: unknown[]) => void

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: Fn
    fbq?: Fn & { callMethod?: Fn; queue?: unknown[]; push?: unknown; loaded?: boolean; version?: string; disablePushState?: boolean }
    _fbq?: unknown
  }
}

export type Consentimiento = 'si' | 'no'
const CLAVE = 'sk-consentimiento-medicion'

export const medicionConfigurada = Boolean(site.metaPixelId || site.ga4Id)

export function leerConsentimiento(): Consentimiento | null {
  try {
    const v = localStorage.getItem(CLAVE)
    return v === 'si' || v === 'no' ? v : null
  } catch {
    return null
  }
}

export function guardarConsentimiento(v: Consentimiento) {
  try {
    localStorage.setItem(CLAVE, v)
  } catch {
    /* almacenamiento no disponible */
  }
  if (v === 'si') cargarMedicion()
}

export function borrarConsentimiento() {
  try {
    localStorage.removeItem(CLAVE)
  } catch {
    /* almacenamiento no disponible */
  }
}

let cargada = false

function esRutaSensible() {
  return window.location.pathname.startsWith('/inclusion')
}

function cargarScript(src: string) {
  const s = document.createElement('script')
  s.async = true
  s.src = src
  document.head.appendChild(s)
}

export function cargarMedicion() {
  if (cargada || typeof window === 'undefined') return
  cargada = true

  if (site.ga4Id) {
    cargarScript(`https://www.googletagmanager.com/gtag/js?id=${site.ga4Id}`)
    window.dataLayer = window.dataLayer || []
    window.gtag = function gtag() {
      // GA4 necesita el objeto `arguments`, no un arreglo
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments)
    }
    window.gtag('js', new Date())
    /* SEC-11: sin Google Signals ni personalización de anuncios (la visita a /inclusion/ no se asocia a la cuenta) */
    window.gtag('config', site.ga4Id, { allow_google_signals: false, allow_ad_personalization_signals: false })
  }

  /* SEC-01b: el Pixel ni se carga en /inclusion/ (ni fbevents.js ni cookie _fbp) */
  if (site.metaPixelId && !window.fbq && !esRutaSensible()) {
    const n = function fbq(...args: unknown[]) {
      if (n.callMethod) n.callMethod(...args)
      else n.queue!.push(args)
    } as NonNullable<Window['fbq']>
    n.push = n
    n.loaded = true
    n.version = '2.0'
    n.queue = []
    /* SEC-01b: sin PageView automáticos por cambios del historial (pushState/popstate, enlaces con #) */
    n.disablePushState = true
    window.fbq = n
    window._fbq = n
    cargarScript('https://connect.facebook.net/en_US/fbevents.js')
    /* SEC-01: sin detección automática de clics; en /inclusion/ el Pixel no se carga
       (visitar esa página deja deducir un dato sensible de un menor, Ley 1581) */
    window.fbq('set', 'autoConfig', false, site.metaPixelId)
    window.fbq('init', site.metaPixelId)
    window.fbq('track', 'PageView')
  }
}

export function iniciarMedicion() {
  if (medicionConfigurada && leerConsentimiento() === 'si') cargarMedicion()
}

type Evento = 'whatsapp_click' | 'formulario_enviado' | 'instagram_click'

/** Registra un evento de conversión (no hace nada si no hay consentimiento). */
export function registrar(evento: Evento, datos: Record<string, string> = {}) {
  if (typeof window === 'undefined') return
  window.gtag?.('event', evento, datos)
  /* SEC-01: nada de inclusión llega a Meta; GA4 lo cuenta de forma agregada */
  const sensible = esRutaSensible() || (datos.origen ?? '').includes('inclusion')
  if (window.fbq && !sensible) {
    if (evento === 'whatsapp_click') window.fbq('track', 'Contact', datos)
    if (evento === 'formulario_enviado') window.fbq('track', 'Lead', datos)
  }
}
