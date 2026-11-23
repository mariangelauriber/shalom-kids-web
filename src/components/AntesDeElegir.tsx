import type { CSSProperties } from 'react'
import { ingresoShalom, tranquilidades } from '../data/contenido'
import { IconoCheck } from './Iconos'
import { TituloSeccion } from './TituloSeccion'
import s from './AntesDeElegir.module.css'

const colores = ['var(--naranja)', 'var(--turquesa)', 'var(--mostaza)', 'var(--morado)']

/**
 * Rediseño de conversión, sección 2 (23 nov 2026): alivio de miedos. Ajuste 6: «Así es el ingreso en Shalom», solo en positivo y
 * sin comparar con otros colegios; después las 4 tranquilidades (grid 2x2). Sin botón de WhatsApp, para no repetir el llamado.
 */
export function AntesDeElegir() {
  const ultima = tranquilidades.length - 1

  return (
    <section id="antes-de-elegir" className={s.seccion} aria-labelledby="titulo-antes">
      <div className="contenedor">
        <TituloSeccion
          id="titulo-antes"
          antetitulo="Una experiencia escolar diferente"
          titulo={
            <>
              Elegir colegio llena de preguntas. Esto es lo que cambia cuando nos eliges para <em>acompañar</em>, no para
              presionar
            </>
          }
          intro="Sabemos lo que se siente confiar a quien más amas a otras personas. Por eso cuidamos cada paso del ingreso y cada detalle del día para tu tranquilidad."
          color="naranja"
        />

        <div className={s.ingreso}>
          <h3 id="titulo-ingreso">Así es el ingreso en Shalom</h3>
          <ul aria-labelledby="titulo-ingreso">
            {ingresoShalom.map((p) => (
              <li key={p.titulo}>
                <IconoCheck />
                <span>
                  <strong>{p.titulo}.</strong> {p.texto}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <ul className={s.dudas}>
          {tranquilidades.map((d, i) => (
            <li key={d.titulo} className={s.duda} style={{ '--c': colores[i % colores.length] } as CSSProperties}>
              <h3>{d.titulo}</h3>
              <p>{d.texto}</p>
              {i === ultima && (
                <a href="/inclusion/#proceso" className={s.enlace}>
                  Así acompañamos a cada niño
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
