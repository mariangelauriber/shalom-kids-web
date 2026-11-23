import { useRef, useState, type CSSProperties, type KeyboardEvent } from 'react'
import { complementos, etapas, preescolar, primaria, type Grado } from '../data/contenido'
import { mensajesWhatsApp, site } from '../data/site'
import { EnlaceWhatsApp } from './EnlaceWhatsApp'
import { IconoCheck, IconoWhatsApp } from './Iconos'
import { Pendiente } from './Pendiente'
import { TituloSeccion } from './TituloSeccion'
import s from './Niveles.module.css'

const colores = ['var(--mostaza)', 'var(--naranja)', 'var(--morado)', 'var(--turquesa)', 'var(--mostaza)', 'var(--naranja)', 'var(--morado)']

function TarjetaGrado({ g, i }: { g: Grado; i: number }) {
  return (
    <li className={s.grado} style={{ '--c': colores[i] } as CSSProperties}>
      <span className={s.insignia} aria-hidden="true">
        {g.corto}
      </span>
      <h4 className={s.nombre}>
        {g.nombre} <span className={s.edad}>({g.edad})</span>
      </h4>
      <p className={s.dato}>{g.logros ?? <Pendiente>logros</Pendiente>}</p>
    </li>
  )
}

/**
 * Pestañas Preescolar / Primaria (rediseño de conversión, sección 4) con el patrón ARIA de pestañas: flechas, Inicio y Fin.
 * Los dos paneles van en el HTML compilado (el inactivo con `hidden`), así Google y las IA leen todos los logros.
 */
function PestanasGrados() {
  const [activa, setActiva] = useState(0)
  const botones = useRef<(HTMLButtonElement | null)[]>([])

  function alTeclear(event: KeyboardEvent<HTMLButtonElement>) {
    const ultimo = etapas.length - 1
    let destino: number | null = null
    if (event.key === 'ArrowRight') destino = activa === ultimo ? 0 : activa + 1
    else if (event.key === 'ArrowLeft') destino = activa === 0 ? ultimo : activa - 1
    else if (event.key === 'Home') destino = 0
    else if (event.key === 'End') destino = ultimo
    if (destino === null) return
    event.preventDefault()
    setActiva(destino)
    botones.current[destino]?.focus()
  }

  return (
    <div className={s.pestanas}>
      <div role="tablist" aria-label="Etapas escolares" className={s.lista}>
        {etapas.map((e, i) => (
          <button
            key={e.id}
            ref={(b) => {
              botones.current[i] = b
            }}
            type="button"
            role="tab"
            id={`pestana-${e.id}`}
            aria-selected={i === activa}
            aria-controls={`panel-${e.id}`}
            tabIndex={i === activa ? 0 : -1}
            className={s.pestana}
            onClick={() => setActiva(i)}
            onKeyDown={alTeclear}
          >
            {e.nombre} <span>({e.edades})</span>
          </button>
        ))}
      </div>
      {etapas.map((e, i) => (
        <div
          key={e.id}
          role="tabpanel"
          id={`panel-${e.id}`}
          aria-labelledby={`pestana-${e.id}`}
          hidden={i !== activa}
          tabIndex={0}
          className={s.panel}
        >
          <h3 className={s.promesa}>{e.promesa}</h3>
          <ol className={s.grados}>
            {e.grados.map((g, j) => (
              <TarjetaGrado key={g.nombre} g={g} i={j + (i === 0 ? 0 : preescolar.length)} />
            ))}
          </ol>
        </div>
      ))}
    </div>
  )
}

export function Niveles() {
  return (
    <section id="niveles" className={s.seccion} aria-labelledby="titulo-niveles">
      <div className="contenedor">
        <TituloSeccion
          id="titulo-niveles"
          antetitulo="Continuidad sin cambios bruscos"
          titulo={
            <>
              Un solo colegio desde los 2 años hasta 3.º de primaria: <em>míralo crecer</em> donde ya lo aman
            </>
          }
          intro="En Shalom Kids tu hijo vive su primera infancia y sus primeros años de primaria rodeado de rostros conocidos, valores constantes y maestras que conocen su historia."
          color="turquesa"
        />

        <PestanasGrados />
        {/* Ajuste 16: se conserva la frase de autoridad sobre Bases Curriculares y DBA */}
        <p className={s.fuente}>
          Logros alineados a las Bases Curriculares para la Educación Inicial y Preescolar y los Derechos Básicos de
          Aprendizaje (DBA) del Ministerio de Educación Nacional.
        </p>

        {/* I-4 (22 nov 2026): edades de referencia de la Secretaría de Educación, sin fecha de corte exacta */}
        <div className={s.edades}>
          <h3 id="titulo-edades">¿En qué grado entra mi hijo?</h3>
          <table aria-labelledby="titulo-edades">
            <thead>
              <tr>
                <th scope="col">Grado</th>
                <th scope="col">Edad de ingreso</th>
              </tr>
            </thead>
            <tbody>
              {[...preescolar, ...primaria].map((g) => (
                <tr key={g.nombre}>
                  <th scope="row">{g.nombre}</th>
                  <td>{g.edad}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className={s.edadesNota}>
            Edades de referencia según la Secretaría de Educación. ¿Cumple años cerca de la fecha de corte? Escríbenos su
            fecha de nacimiento y te confirmamos su grado exacto.
          </p>
        </div>

        <div className={s.servicios}>
          <h3>Complementos de la jornada diurna (lunes a viernes)</h3>
          <ul>
            {complementos.map((c) => (
              <li key={c}>
                <IconoCheck />
                {c}
              </li>
            ))}
          </ul>
        </div>
        <div className={s.acciones}>
          <EnlaceWhatsApp origen="niveles" mensaje={mensajesWhatsApp.grados} className="btn btn-primario">
            <IconoWhatsApp />
            Confirmar grado, horarios y cupo {site.matriculas.anio} por WhatsApp
          </EnlaceWhatsApp>
        </div>
      </div>
    </section>
  )
}
