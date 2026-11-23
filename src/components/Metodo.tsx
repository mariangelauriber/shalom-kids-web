import type { CSSProperties, ReactNode } from 'react'
import { metodo } from '../data/contenido'
import { citaMetodo } from '../data/fe'
import { site } from '../data/site'
import { registrar } from '../lib/analytics'
import { useValorDelMesVigente } from '../lib/renovacion'
import { IconoCorazon, IconoInstagram } from './Iconos'
import { TituloSeccion } from './TituloSeccion'
import s from './Metodo.module.css'

const IconoPelota = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M3.5 9.5c4 1.5 13 1.5 17 0M3.5 14.5c4-1.5 13-1.5 17 0M12 3c-2.5 3-2.5 15 0 18" />
  </svg>
)

const IconoBloques = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="13" width="8" height="8" rx="1.5" />
    <rect x="13" y="13" width="8" height="8" rx="1.5" />
    <rect x="8" y="3" width="8" height="8" rx="1.5" />
  </svg>
)

const IconoLibro = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 6.5C10 5 7 4.5 3 5v13c4-.5 7 0 9 1.5 2-1.5 5-2 9-1.5V5c-4-.5-7 0-9 1.5z" />
    <path d="M12 6.5v13" />
  </svg>
)

const pasos: { icono: ReactNode; color: string; giro: string }[] = [
  { icono: <IconoPelota />, color: 'var(--naranja)', giro: '-5deg' },
  { icono: <IconoBloques />, color: 'var(--mostaza)', giro: '4deg' },
  { icono: <IconoLibro />, color: 'var(--turquesa)', giro: '-3deg' },
]

/**
 * Tarjeta «Dimensión espiritual en acción» (rediseño de conversión, sección 3). Cuando la profesora envía el valor del mes
 * (site.valorDelMes, I-9 del 22 nov 2026), la tarjeta lo muestra con su versículo y la idea para la casa; mientras sea
 * null o pase su fecha «hasta», muestra Proverbios 22:6 y la oración de cada mañana. Ajuste 5: sin «guía mensual».
 */
function DimensionEspiritual() {
  const vigente = useValorDelMesVigente()
  const v = vigente ? site.valorDelMes : null
  const compartir = v
    ? `Este mes en Shalom Kids trabajamos el valor de ${v.valor.toLowerCase()}: «${v.versiculo}» (${v.cita}). En casa: ${v.enCasa}`
    : null

  return (
    <div className={s.base}>
      <span className={s.corazon}>
        <IconoCorazon />
      </span>
      <div className={s.baseTexto}>
        <p className={s.insignia}>Dimensión espiritual en acción{v ? ` · ${v.mes}` : ''}</p>
        <h3>{v ? <>Valor del mes en Shalom Kids: {v.valor}</> : 'Oración cada mañana y un valor cristiano cada mes'}</h3>
        <blockquote className={s.cita}>
          <p>«{v ? v.versiculo : citaMetodo.texto}»</p>
          <cite>{v ? v.cita : `${citaMetodo.referencia} (${citaMetodo.version})`}</cite>
        </blockquote>
        <p>
          Cada mañana iniciamos con oración y cada mes colegio y hogar caminamos unidos en un mismo principio cristiano.
        </p>
        {v && compartir && (
          <>
            <p>
              <strong>En casa:</strong> {v.enCasa}
            </p>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(compartir)}`}
              target="_blank"
              rel="noopener"
              className={s.compartir}
            >
              Compártelo con otra familia
            </a>
          </>
        )}
      </div>
    </div>
  )
}

export function Metodo() {
  /* H29: solo los reels de proyectos de aula (asignados a «metodo» en site.ts) */
  const proyectos = site.publicacionesInstagram.filter((p) => p.pagina === 'metodo' && p.portada)

  return (
    <section id="metodo" className={s.seccion} aria-labelledby="titulo-metodo">
      <div className="contenedor">
        <TituloSeccion
          id="titulo-metodo"
          antetitulo="Pedagogía con propósito y valores"
          titulo={
            <>
              No solo enseñamos a leer y contar: despertamos el amor por aprender y <em>formamos el corazón</em>
            </>
          }
          intro="Un niño que memoriza por presión olvida rápido; un niño que descubre con curiosidad y paz (Shalom) aprende para toda la vida. Combinamos principios bíblicos vivos con proyectos que nacen de sus preguntas diarias."
          color="naranja"
        />

        <ol className={s.pasos}>
          {metodo.map((m, i) => (
            <li
              key={m.titulo}
              className={s.paso}
              style={{ '--c': pasos[i].color, '--giro': pasos[i].giro } as CSSProperties}
            >
              <span className={s.bloque}>{pasos[i].icono}</span>
              <p className={s.numero} aria-hidden="true">
                {String(i + 1).padStart(2, '0')}.
              </p>
              <h3>{m.titulo}</h3>
              <p>{m.texto}</p>
            </li>
          ))}
        </ol>

        <DimensionEspiritual />

        <div className={s.cierre}>
          {proyectos.length > 0 && (
            <div className={s.prueba}>
              <p>Mira cómo se vive nuestro método en el salón:</p>
              <ul>
                {proyectos.map((p) => (
                  <li key={p.url}>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener"
                      onClick={() => registrar('instagram_click', { origen: 'metodo' })}
                    >
                      <img src={p.miniatura ?? p.portada} alt="" width={96} height={170} loading="lazy" decoding="async" />
                      <span>
                        <IconoInstagram /> Ver {p.titulo.charAt(0).toLocaleLowerCase('es') + p.titulo.slice(1)}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <a href="#niveles" className="btn btn-borde">
            Explora los grados
          </a>
        </div>
      </div>
    </section>
  )
}
