import type { CSSProperties } from 'react'
import { momentos } from '../data/contenido'
import { TituloSeccion } from './TituloSeccion'
import s from './UnDia.module.css'

const colores = ['var(--naranja)', 'var(--morado)', 'var(--turquesa)', 'var(--mostaza)', 'var(--turquesa)']

export function UnDia() {
  return (
    <section id="un-dia" className={s.seccion} aria-labelledby="titulo-un-dia">
      <div className={`contenedor ${s.grid}`}>
        <div className={s.lado}>
          <TituloSeccion
            id="titulo-un-dia"
            antetitulo="En el aula"
            titulo={<>Lo que vive tu hijo en <em>Shalom</em></>}
            intro="Oramos al empezar la mañana, convertimos sus preguntas en proyectos y le damos espacio para crear y moverse."
            color="morado"
          />
        </div>

        <ol className={s.linea}>
          {momentos.map((m, i) => (
            <li key={m.titulo} className={s.momento} style={{ '--c': colores[i % colores.length] } as CSSProperties}>
              <span className={s.punto} aria-hidden="true" />
              <h3 className={s.titulo}>{m.titulo}</h3>
              <p className={s.texto}>{m.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
