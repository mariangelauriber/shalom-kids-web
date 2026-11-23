import type { CSSProperties, ReactNode } from 'react'
import { familias, testimonios } from '../data/contenido'
import { site } from '../data/site'
import { IconoCalendario, IconoCorazon, IconoGrupo } from './Iconos'
import { TituloSeccion } from './TituloSeccion'
import s from './Familias.module.css'

/** Sin «Seguimiento diario por WhatsApp» desde el 18 nov (decisión del colegio) */
const estilos: { icono: ReactNode; color: string }[] = [
  { icono: <IconoGrupo />, color: 'var(--naranja)' },
  { icono: <IconoCorazon />, color: 'var(--morado)' },
  { icono: <IconoCalendario />, color: 'var(--mostaza)' },
]

/**
 * Rediseño de conversión, sección 6 (23 nov 2026): comunidad. «El valor de este mes» pasó a la tarjeta espiritual del método.
 * Ajuste 2: sin testimonios; el bloque solo aparece si el arreglo `testimonios` de contenido.ts tiene datos reales.
 */
export function Familias() {
  const d = site.direccion
  return (
    <section id="familias" className={s.seccion} aria-labelledby="titulo-familias">
      <div className={`contenedor ${s.grid}`}>
        <div className={s.lado}>
          <TituloSeccion
            id="titulo-familias"
            antetitulo={`Familias Shalom en ${d.barrio}`}
            titulo={<>Aquí la familia no espera en la puerta: <em>caminamos en el mismo equipo</em></>}
            intro="Educar funciona cuando colegio y hogar hablan el mismo idioma. Te acompañamos con reuniones periódicas, el valor cristiano del mes para conversar en casa y celebraciones memorables como el Día de la Biblia y nuestras clausuras."
            color="turquesa"
          />
          <a href="/blog/" className={`btn btn-borde ${s.cta}`}>
            Lee las guías para familias
          </a>
        </div>

        <ul className={s.lista}>
          {familias.map((f, i) => (
            <li key={f.titulo} className={s.item} style={{ '--c': estilos[i].color } as CSSProperties}>
              <span className={s.icono}>{estilos[i].icono}</span>
              <div>
                <h3>{f.titulo}</h3>
                <p>{f.texto}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {testimonios.length > 0 && (
        <div className="contenedor">
          <ul className={s.testimonios} aria-label="Lo que dicen las familias">
            {testimonios.map((t) => (
              <li key={t.autor}>
                <blockquote>
                  <p>«{t.texto}»</p>
                </blockquote>
                <p className={s.autor}>{t.autor}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}
