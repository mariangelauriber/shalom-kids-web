import { mensajesWhatsApp, site } from '../data/site'
import { useRenovacionVigente } from '../lib/renovacion'
import { EnlaceWhatsApp } from './EnlaceWhatsApp'
import s from './BarraAnuncio.module.css'

/**
 * Rediseño de conversión, sección 0 (23 nov 2026): barra de anuncio sobre la cabecera, en todas las páginas.
 * Ajuste 10: la parte de renovación solo existe hasta el 30 nov 2026 (no se compila después y se oculta en el
 * navegador); después la barra solo anuncia las matrículas.
 */
export function BarraAnuncio() {
  const renovacion = useRenovacionVigente()
  const d = site.direccion

  return (
    <div className={s.barra}>
      <div className={`contenedor ${s.fila}`}>
        <p>
          <strong>Matrículas {site.matriculas.anio} abiertas</strong> (Calendario A)
          <span className={s.extra}>
            {' '}
            · Grupos pequeños con cupos limitados en {d.barrio}, {d.municipio}.
          </span>
        </p>
        {renovacion && (
          <p className={s.renovacion}>
            ¿Ya eres familia Shalom? Renueva hasta el 30 de nov. de 2026{' '}
            <EnlaceWhatsApp origen="barra-renovacion" mensaje={mensajesWhatsApp.renovacion} className={s.enlace}>
              Renovar cupo <span aria-hidden="true">→</span>
            </EnlaceWhatsApp>
          </p>
        )}
      </div>
    </div>
  )
}
