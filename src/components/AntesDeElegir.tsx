import type { CSSProperties } from 'react'
import { dudasFamilia } from '../data/contenido'
import { TituloSeccion } from './TituloSeccion'
import s from './AntesDeElegir.module.css'

const colores = ['var(--naranja)', 'var(--turquesa)', 'var(--mostaza)', 'var(--morado)']

/**
 * I-2 (storytelling, 22 nov 2026): nombra las dudas de la familia y responde cada una con un hecho confirmado.
 * Sin botón de WhatsApp, para no repetir el llamado.
 */
export function AntesDeElegir() {
  const ultima = dudasFamilia.length - 1

  return (
    <section id="antes-de-elegir" className={s.seccion} aria-labelledby="titulo-antes">
      <div className="contenedor">
        <TituloSeccion
          id="titulo-antes"
          antetitulo="Elegir colegio"
          titulo={<>Antes de elegir colegio, es normal tener <em>preguntas</em></>}
          intro="Dejar a tu hijo por primera vez en un salón, o buscarle un colegio nuevo, trae dudas. Estas son algunas, y lo que hacemos en Shalom con cada una."
          color="naranja"
        />

        <ul className={s.dudas}>
          {dudasFamilia.map((d, i) => (
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
