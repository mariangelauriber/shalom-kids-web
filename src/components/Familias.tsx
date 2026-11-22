import type { CSSProperties, ReactNode } from 'react'
import { familias } from '../data/contenido'
import { site, type ValorDelMes } from '../data/site'
import { useValorDelMesVigente } from '../lib/renovacion'
import { IconoCalendario, IconoCorazon, IconoGrupo } from './Iconos'
import { TituloSeccion } from './TituloSeccion'
import s from './Familias.module.css'

/** Sin «Seguimiento diario por WhatsApp» desde el 18 nov (pedido del usuario) */
const estilos: { icono: ReactNode; color: string }[] = [
  { icono: <IconoGrupo />, color: 'var(--naranja)' },
  { icono: <IconoCorazon />, color: 'var(--morado)' },
  { icono: <IconoCalendario />, color: 'var(--mostaza)' },
]

/**
 * «El valor de este mes» (I-9, 22 nov 2026): lo envía la profesora cada mes en site.valorDelMes.
 * Mientras sea null, o pasada su fecha «hasta», no se muestra nada. Se comparte por WhatsApp sin número
 * (la familia elige el contacto) con un enlace de texto, para no sumar otro botón de WhatsApp antes de las preguntas.
 */
function ValorMes({ v }: { v: ValorDelMes }) {
  const texto = `Este mes en Shalom Kids trabajamos el valor de ${v.valor.toLowerCase()}: «${v.versiculo}» (${v.cita}). En casa: ${v.enCasa}`
  return (
    <aside className={s.valorMes} aria-labelledby="titulo-valor-mes">
      <p className={s.valorAnte}>Este mes en Shalom · {v.mes}</p>
      <h3 id="titulo-valor-mes">
        {v.valor}, un valor de <em>{v.pilar.toLowerCase()}</em>
      </h3>
      <blockquote className={s.valorCita}>
        <p>«{v.versiculo}»</p>
        <cite>{v.cita}</cite>
      </blockquote>
      <p>
        <strong>En casa:</strong> {v.enCasa}
      </p>
      <a
        href={`https://wa.me/?text=${encodeURIComponent(texto)}`}
        target="_blank"
        rel="noopener"
        className={s.valorCompartir}
      >
        Compártelo con otra familia
      </a>
    </aside>
  )
}

export function Familias() {
  const valorVigente = useValorDelMesVigente()
  return (
    <section id="familias" className={s.seccion} aria-labelledby="titulo-familias">
      <div className={`contenedor ${s.grid}`}>
        <div className={s.lado}>
          <TituloSeccion
            id="titulo-familias"
            antetitulo="Familias Shalom"
            titulo={<>Aquí la familia no espera afuera: <em>camina con nosotros</em></>}
            intro="Sabes cómo avanza tu hijo. Colegio y casa, en el mismo equipo."
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
      {site.valorDelMes && valorVigente && (
        <div className="contenedor">
          <ValorMes v={site.valorDelMes} />
        </div>
      )}
    </section>
  )
}
