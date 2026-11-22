import { useEffect, useState } from 'react'
import { guardarConsentimiento, iniciarMedicion, leerConsentimiento, medicionConfigurada } from '../lib/analytics'
import s from './AvisoCookies.module.css'

/**
 * Aviso de medición. Solo aparece si hay Meta Pixel o GA4 configurados.
 * Nada se carga hasta que la persona acepta.
 */
export function AvisoCookies() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!medicionConfigurada) return
    if (leerConsentimiento() === null) setVisible(true)
    else iniciarMedicion()
  }, [])

  if (!visible) return null

  const decidir = (v: 'si' | 'no') => {
    guardarConsentimiento(v)
    setVisible(false)
  }

  return (
    <div className={s.aviso} role="region" aria-label="Aviso de cookies">
      <p>
        Usamos cookies de medición (Google y Meta) para saber qué partes de la web ayudan a las familias. Puedes
        aceptarlas o no; la web funciona igual. <a href="/privacidad/">Más información</a>.
      </p>
      <div className={s.botones}>
        <button type="button" className="btn btn-sm btn-borde" onClick={() => decidir('no')}>
          No, gracias
        </button>
        {/* Los dos botones con el mismo peso: aceptar no se destaca sobre rechazar */}
        <button type="button" className="btn btn-sm btn-borde" onClick={() => decidir('si')}>
          Aceptar
        </button>
      </div>
    </div>
  )
}
