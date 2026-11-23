import { useLocation } from 'react-router-dom'
import { mensajesWhatsApp, rotuloVisita, site } from '../data/site'
import { vacacional } from '../data/vacacional'
import { EnlaceWhatsApp } from './EnlaceWhatsApp'
import { IconoWhatsApp } from './Iconos'
import s from './BotonWhatsApp.module.css'

/**
 * Llamado fijo de WhatsApp. En computador y tableta es el botón redondo (solo el ícono). En el celular
 * (ajuste 11 del rediseño de conversión, 23 nov 2026) lo reemplaza la barra inferior «Matrículas 2027 · Cupos limitados»
 * con el botón «Costos y visita», para que no se solapen. En el vacacional y en inclusión cambia el mensaje.
 */
export function BotonWhatsApp() {
  const { pathname } = useLocation()
  const enVacacional = pathname.startsWith('/vacacionales')
  const enInclusion = pathname.startsWith('/inclusion')
  const mensaje = enVacacional ? vacacional.mensajeWhatsApp : enInclusion ? mensajesWhatsApp.inclusion : undefined

  return (
    <>
      <EnlaceWhatsApp
        origen={enVacacional ? 'boton-fijo-vacacional' : enInclusion ? 'boton-fijo-inclusion' : 'boton-fijo'}
        mensaje={mensaje}
        className={`${s.boton} ${enVacacional ? s.siempre : ''}`}
        aria-label={enVacacional ? 'Consultar el vacacional por WhatsApp' : rotuloVisita}
      >
        <IconoWhatsApp />
      </EnlaceWhatsApp>

      {!enVacacional && (
        <div className={s.barra}>
          <p>
            <strong>Matrículas {site.matriculas.anio}</strong> · Cupos limitados
          </p>
          <EnlaceWhatsApp
            origen={enInclusion ? 'barra-movil-inclusion' : 'barra-movil'}
            mensaje={mensaje}
            className={`btn btn-primario btn-sm ${s.barraBoton}`}
            aria-label="Costos y visita por WhatsApp"
          >
            <IconoWhatsApp />
            Costos y visita
          </EnlaceWhatsApp>
        </div>
      )}
    </>
  )
}
