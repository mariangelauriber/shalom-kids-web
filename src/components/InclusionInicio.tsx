import { pasosInclusion } from '../data/contenido'
import { mensajesWhatsApp } from '../data/site'
import { EnlaceWhatsApp } from './EnlaceWhatsApp'
import { IconoWhatsApp } from './Iconos'
import { TituloSeccion } from './TituloSeccion'
import s from './InclusionInicio.module.css'

/**
 * Rediseño de conversión, sección 5 (23 nov 2026): la inclusión en el inicio, en 3 pasos.
 * Ajuste 3: sin psicología, sin PIAR, sin docente de apoyo ni terapeutas; ingreso por entrevista y cupo sujeto
 * a disponibilidad en el grupo, que se consulta en privado. El detalle sigue en /inclusion/.
 */
export function InclusionInicio() {
  return (
    <section id="inclusion" className={s.seccion} aria-labelledby="titulo-inclusion-inicio">
      <div className="contenedor">
        <TituloSeccion
          id="titulo-inclusion-inicio"
          antetitulo="Inclusión con respeto y hechos"
          titulo={
            <>
              Cada niño aprende a su ritmo. Y en Shalom Kids <em>tiene un lugar</em> en el aula
            </>
          }
          intro="Recibimos con preparación y cariño a niños con discapacidad, autismo, TDAH, dificultades de aprendizaje u otros ritmos de desarrollo. Sabemos que las evaluaciones médicas toman tiempo: para empezar no necesitas traer un diagnóstico."
          color="morado"
        />

        <ol className={s.pasos}>
          {pasosInclusion.map((p, i) => (
            <li key={p.titulo} className={s.paso}>
              <span className={s.numero} aria-hidden="true">
                {i + 1}
              </span>
              <h3>{p.titulo}</h3>
              <p>{p.texto}</p>
            </li>
          ))}
        </ol>

        <p className={s.nota}>
          Para garantizar una atención real en grupos pequeños, el ingreso está sujeto a la disponibilidad de cupo en el
          grupo, que te confirmamos en privado por WhatsApp.
        </p>

        <div className={s.acciones}>
          <EnlaceWhatsApp origen="inclusion-inicio" mensaje={mensajesWhatsApp.inclusion} className="btn btn-primario">
            <IconoWhatsApp />
            Conversemos en privado sobre tu hijo por WhatsApp
          </EnlaceWhatsApp>
          <a href="/inclusion/" className={s.enlace}>
            Leer la guía completa sobre nuestra inclusión escolar <span aria-hidden="true">→</span>
          </a>
        </div>
        <p className={s.cuidado}>
          Por tu privacidad y la de tu hijo, no envíes por WhatsApp diagnósticos ni informes médicos.
        </p>
      </div>
    </section>
  )
}
