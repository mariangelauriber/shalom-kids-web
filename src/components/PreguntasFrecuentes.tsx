import type { ReactNode } from 'react'
import { preguntas as preguntasColegio, textoRespuesta, type Pregunta } from '../data/contenido'
import { useRenovacionVigente } from '../lib/renovacion'
import { EnlaceWhatsApp } from './EnlaceWhatsApp'
import { IconoMas, IconoWhatsApp } from './Iconos'
import { Pendiente } from './Pendiente'
import { TituloSeccion } from './TituloSeccion'
import s from './PreguntasFrecuentes.module.css'

interface Props {
  preguntas?: Pregunta[]
  titulo?: ReactNode
  /** Mensaje de WhatsApp y origen para la medición */
  mensaje?: string
  origen?: string
  /** Clase extra de la sección (p. ej. un fondo para no repetir el de la sección anterior) */
  className?: string
  /** Sin el botón «Pregúntanos por WhatsApp» (cuando la sección siguiente ya cierra con el llamado) */
  sinBoton?: boolean
}

/* Se usan <details> nativos: funcionan sin JavaScript y Google lee todas las respuestas. */
export function PreguntasFrecuentes({
  preguntas = preguntasColegio,
  titulo = (
    <>
      Preguntas sobre el ingreso y la <em>vida escolar</em>
    </>
  ),
  mensaje,
  origen = 'preguntas',
  className = '',
  sinBoton = false,
}: Props) {
  const renovacion = useRenovacionVigente()

  return (
    <section id="preguntas" className={`${s.seccion} ${className}`} aria-labelledby="titulo-preguntas">
      <div className={`contenedor ${s.grid}`}>
        <div>
          <TituloSeccion id="titulo-preguntas" antetitulo="Preguntas frecuentes" titulo={titulo} color="turquesa" />
          {!sinBoton && (
            <div className={s.otra}>
              <p>¿Tienes otra pregunta?</p>
              <EnlaceWhatsApp origen={origen} mensaje={mensaje} className="btn btn-primario btn-sm">
                <IconoWhatsApp />
                Pregúntanos por WhatsApp
              </EnlaceWhatsApp>
            </div>
          )}
        </div>

        <div className={s.lista}>
          {preguntas.map((p) => (
            <details key={p.pregunta} className={s.item}>
              <summary>
                <span>{p.pregunta}</span>
                <IconoMas className={s.mas} />
              </summary>
              <p className={s.respuesta}>
                {textoRespuesta(p, renovacion)}
                {p.respuesta && p.pendiente ? ' ' : null}
                {p.pendiente && <Pendiente>{p.pendiente}</Pendiente>}
                {p.enlace && (
                  <>
                    {' '}
                    <a href={p.enlace.href} className={s.enlace}>
                      {p.enlace.texto}
                    </a>
                    .
                  </>
                )}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
