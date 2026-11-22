import { useLocation } from 'react-router-dom'
import { mensajesWhatsApp, rotuloVisita } from '../data/site'
import { vacacional } from '../data/vacacional'
import { EnlaceWhatsApp } from './EnlaceWhatsApp'
import { IconoWhatsApp } from './Iconos'
import s from './BotonWhatsApp.module.css'

/** Botón fijo de WhatsApp (solo el ícono), visible en toda la página. En el vacacional y en inclusión cambia el mensaje. */
export function BotonWhatsApp() {
  const { pathname } = useLocation()
  const enVacacional = pathname.startsWith('/vacacionales')
  const enInclusion = pathname.startsWith('/inclusion')

  return (
    <EnlaceWhatsApp
      origen={enVacacional ? 'boton-fijo-vacacional' : enInclusion ? 'boton-fijo-inclusion' : 'boton-fijo'}
      mensaje={enVacacional ? vacacional.mensajeWhatsApp : enInclusion ? mensajesWhatsApp.inclusion : undefined}
      className={s.boton}
      aria-label={enVacacional ? 'Consultar el vacacional por WhatsApp' : rotuloVisita}
    >
      <IconoWhatsApp />
    </EnlaceWhatsApp>
  )
}
