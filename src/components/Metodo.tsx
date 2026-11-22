import type { CSSProperties, ReactNode } from 'react'
import { metodo } from '../data/contenido'
import { site } from '../data/site'
import { registrar } from '../lib/analytics'
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

export function Metodo() {
  const [juega, construye, aprende, amor] = metodo
  /* H29: solo los reels de proyectos de aula (asignados a «metodo» en site.ts) */
  const proyectos = site.publicacionesInstagram.filter((p) => p.pagina === 'metodo' && p.portada)

  return (
    <section id="metodo" className={s.seccion} aria-labelledby="titulo-metodo">
      <div className="contenedor">
        <TituloSeccion
          id="titulo-metodo"
          antetitulo="Nuestro método"
          titulo={<>Juega, <em>construye</em> y aprende</>}
          intro="Los niños aprenden mejor cuando lo que hacen tiene sentido para ellos. Por eso partimos del juego, investigamos sus preguntas y avanzamos paso a paso en lectura, escritura y matemáticas."
          color="naranja"
        />

        <ol className={s.pasos}>
          {[juega, construye, aprende].map((m, i) => (
            <li
              key={m.titulo}
              className={s.paso}
              style={{ '--c': pasos[i].color, '--giro': pasos[i].giro } as CSSProperties}
            >
              <span className={s.bloque}>{pasos[i].icono}</span>
              <h3>{m.titulo}</h3>
              <p>{m.texto}</p>
            </li>
          ))}
        </ol>

        <div className={s.base}>
          <span className={s.corazon}>
            <IconoCorazon />
          </span>
          <div>
            <h3>{amor.titulo}</h3>
            <p>{amor.texto}</p>
          </div>
        </div>

        <div className={s.cierre}>
          {proyectos.length > 0 && (
            <div className={s.prueba}>
              <p>Mira un proyecto real:</p>
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
                        <IconoInstagram /> {p.titulo}
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
