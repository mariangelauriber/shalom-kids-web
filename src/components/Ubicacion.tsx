import { useEffect, useRef, useState } from 'react'
import { rotuloVisita, site, urlComoLlegar } from '../data/site'
import { EnlaceWhatsApp } from './EnlaceWhatsApp'
import { IconoMapa, IconoPin, IconoWhatsApp } from './Iconos'
import { Pendiente } from './Pendiente'
import { TituloSeccion } from './TituloSeccion'
import s from './Ubicacion.module.css'

/** Mapa de Google que solo se carga al tocarlo (más rápido y sin rastreo previo). */
function Mapa() {
  const [abierto, setAbierto] = useState(false)
  const mapa = useRef<HTMLIFrameElement>(null)
  const geo = site.geo

  /* H24: el botón desaparece al abrir; el foco pasa al mapa para no perder la posición */
  useEffect(() => {
    if (abierto) mapa.current?.focus()
  }, [abierto])

  if (geo && abierto) {
    return (
      <iframe
        ref={mapa}
        className={s.iframe}
        title={`Mapa: ${site.nombre}`}
        src={`https://www.google.com/maps?q=${geo.lat},${geo.lng}&z=16&output=embed`}
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
      />
    )
  }

  return (
    <div className={s.fachada}>
      <span className={s.pin} aria-hidden="true">
        <IconoPin />
      </span>
      {geo ? (
        <button type="button" className="btn btn-claro btn-sm" onClick={() => setAbierto(true)}>
          <IconoMapa />
          Ver mapa
        </button>
      ) : (
        <p className={s.sinMapa}>
          <Pendiente>ubicación en Google Maps</Pendiente>
        </p>
      )}
    </div>
  )
}

export function Ubicacion() {
  const comoLlegar = urlComoLlegar()
  const d = site.direccion

  return (
    <section id="ubicacion" className={s.seccion} aria-labelledby="titulo-ubicacion">
      <div className={`contenedor ${s.grid}`}>
        <div className={s.texto}>
          <TituloSeccion
            id="titulo-ubicacion"
            antetitulo={`Cerca de ti en ${d.municipio}`}
            titulo={<>Visítanos en el barrio <em>{d.barrio}</em>, {d.municipio} ({d.departamento})</>}
            color="naranja"
          />
          <address className={s.direccion}>
            <IconoPin />
            <span>
              {d.calle ?? <Pendiente>dirección exacta</Pendiente>}
              <br />
              Barrio {d.barrio}, {d.municipio} ({d.departamento})
              <br />
              Área metropolitana de Barranquilla
            </span>
          </address>
          {site.publicarHorario && (
            <p className={s.horario}>
              <strong>Horario de atención</strong>
              {site.horarioAtencion.map((h) => (
                <span key={h.dias}>
                  {h.dias}: {h.horas}
                </span>
              ))}
              <span>Domingos: cerrado</span>
            </p>
          )}
          <div className={s.acciones}>
            {/* H27: el llamado de visita va una sola vez, en la banda final que sigue a esta sección */}
            {comoLlegar ? (
              <a href={comoLlegar} target="_blank" rel="noopener" className="btn btn-oscuro">
                <IconoMapa />
                Abrir ruta en Google Maps
              </a>
            ) : (
              <EnlaceWhatsApp origen="ubicacion" className="btn btn-primario">
                <IconoWhatsApp />
                {rotuloVisita}
              </EnlaceWhatsApp>
            )}
          </div>
        </div>
        <Mapa />
      </div>
    </section>
  )
}
