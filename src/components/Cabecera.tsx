import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { mensajesWhatsApp, site } from '../data/site'
import { EnlaceWhatsApp } from './EnlaceWhatsApp'
import { IconoWhatsApp } from './Iconos'
import s from './Cabecera.module.css'

/**
 * Menú principal (ajuste 12 del rediseño de conversión, 23 nov 2026): máximo 5 ítems + el botón «Agendar visita».
 * Nosotros, Blog y Privacidad siguen enlazados en el pie y, en el menú móvil, debajo y separados.
 */
export const enlaces = [
  { href: '/#metodo', texto: 'Método' },
  { href: '/#niveles', texto: 'Niveles' },
  { href: '/inclusion/', texto: 'Inclusión' },
  { href: '/#matricula', texto: 'Matrícula 2027' },
  { href: '/#preguntas', texto: 'Preguntas' },
]

/** Páginas que no van en el menú principal (pie y parte baja del menú móvil) */
export const enlacesSecundarios = [
  { href: '/nosotros/', texto: 'Nosotros' },
  { href: '/blog/', texto: 'Blog' },
  { href: '/vacacionales/', texto: 'Vacacional' },
].filter((e) => site.mostrarVacacional || e.href !== '/vacacionales/')

export function Cabecera() {
  const menu = useRef<HTMLDetailsElement>(null)
  const resumen = useRef<HTMLElement>(null)
  const [abierto, setAbierto] = useState(false)
  const yAlAbrir = useRef(0)
  const enInclusion = useLocation().pathname.startsWith('/inclusion')

  function cerrarMenu() {
    if (menu.current?.open) menu.current.open = false
  }

  /* H22: con el menú abierto, se cierra al tocar fuera del panel o al hacer scroll */
  useEffect(() => {
    const alTocar = (event: PointerEvent) => {
      const m = menu.current
      if (m?.open && !m.contains(event.target as Node)) cerrarMenu()
    }
    const alDesplazar = () => {
      if (menu.current?.open && Math.abs(window.scrollY - yAlAbrir.current) > 8) cerrarMenu()
    }
    document.addEventListener('pointerdown', alTocar)
    window.addEventListener('scroll', alDesplazar, { passive: true })
    return () => {
      document.removeEventListener('pointerdown', alTocar)
      window.removeEventListener('scroll', alDesplazar)
    }
  }, [])

  const lista = (items: { href: string; texto: string }[], cerrar?: () => void, clase?: string) => (
    <ul className={clase}>
      {items.map((e) => (
        <li key={e.href}>
          <a href={e.href} onClick={cerrar}>{e.texto}</a>
        </li>
      ))}
    </ul>
  )

  return (
    <header className={s.cabecera}>
      <div className={`contenedor ${s.fila}`}>
        <a href="/" className={s.logo}>
          <img
            src="/img/logotipo-360.webp"
            srcSet="/img/logotipo-180.webp 180w, /img/logotipo-360.webp 360w"
            sizes="89px"
            width={360}
            height={203}
            alt="Centro Educativo Shalom Kids"
          />
        </a>
        <nav aria-label="Navegación principal" className={s.nav}>{lista(enlaces)}</nav>
        <details
          ref={menu}
          className={s.menu}
          onToggle={(event) => {
            const open = event.currentTarget.open
            if (open) yAlAbrir.current = window.scrollY
            setAbierto(open)
          }}
          onKeyDown={(event) => {
            if (event.key === 'Escape' && menu.current?.open) {
              cerrarMenu()
              resumen.current?.focus()
            }
          }}
          onBlur={(event) => {
            /* Al salir con Tab del menú (el foco pasa fuera del <details>) */
            const siguiente = event.relatedTarget as Node | null
            if (siguiente && !event.currentTarget.contains(siguiente)) cerrarMenu()
          }}
        >
          <summary ref={resumen} className={`btn btn-borde btn-sm ${s.resumen}`}>
            {abierto ? 'Cerrar' : 'Menú'}
          </summary>
          <nav aria-label="Navegación móvil" className={s.panel}>
            {lista(enlaces, cerrarMenu)}
            {lista([...enlacesSecundarios, { href: '/privacidad/', texto: 'Aviso de privacidad' }], cerrarMenu, s.secundarios)}
          </nav>
        </details>
        {/* Ajuste 7 (23 nov 2026): «Agendar visita» en la cabecera; el ícono dice el canal y el nombre accesible lo completa */}
        <EnlaceWhatsApp
          origen={enInclusion ? 'cabecera-inclusion' : 'cabecera'}
          mensaje={enInclusion ? mensajesWhatsApp.inclusion : undefined}
          className={`btn btn-primario btn-sm ${s.visita}`}
          aria-label="Agendar visita por WhatsApp"
        >
          <IconoWhatsApp />
          Agendar visita
        </EnlaceWhatsApp>
      </div>
    </header>
  )
}
