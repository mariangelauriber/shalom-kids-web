import { CompartirPagina } from '../components/CompartirPagina'
import { EnlaceWhatsApp } from '../components/EnlaceWhatsApp'
import { IconoWhatsApp } from '../components/Iconos'
import { PreguntasFrecuentes } from '../components/PreguntasFrecuentes'
import { Seo } from '../components/Seo'
import { TituloSeccion } from '../components/TituloSeccion'
import { alcanceInclusion, ingreso, preguntasInclusion } from '../data/contenido'
import { citaFe } from '../data/fe'
import { mensajesWhatsApp, rotuloVisita, site } from '../data/site'
import s from './Inclusion.module.css'

/*
 * Storytelling de inclusión aprobado el 22 nov 2026 (docs/PROPUESTA_STORYTELLING y docs/STORYTELLING_DECISIONES).
 * Respuestas del colegio: recibe niños con discapacidad, autismo, TDAH, dificultades de aprendizaje y otros ritmos;
 * el ingreso es por entrevista; no hace PIAR; no hay docente de apoyo ni coordinación con terapeutas.
 * Por eso no se menciona el PIAR ni se cita el Decreto 1421 en ninguna parte.
 */

const titulo = 'Inclusión en preescolar y primaria | Shalom Kids, Soledad'
const descripcion =
  'Shalom Kids, colegio cristiano en Soledad, recibe niños que necesitan apoyos en preescolar y primaria. Conoce cómo acordamos su plan con la familia.'

/** INC-3: el proceso en 4 pasos (decisiones del 22 nov 2026) */
const pasos = [
  {
    titulo: 'Nos visitas con tu hijo y conversamos',
    texto:
      'Agenda una visita por WhatsApp. Conoces el colegio y nos cuentas cómo es tu hijo: lo que le gusta, lo que le cuesta y lo que ya han probado en casa.',
  },
  {
    titulo: 'Entrevista con tu familia',
    texto: 'Conversamos contigo para saber qué necesita tu hijo y preparar su llegada.',
  },
  {
    titulo: 'Acordamos los apoyos que necesita',
    texto: 'Junto con su maestra, definimos contigo qué puede ajustarse para que participe y aprenda con su grupo.',
  },
  {
    titulo: 'Revisamos cómo avanza',
    texto: 'En las reuniones periódicas con tu familia revisamos cómo va y ajustamos lo que haga falta.',
  },
]

/** INC-4: ejemplos de lo que se puede acordar, sin garantizarlos (decisión del 22 nov 2026) */
const ajustes = [
  { titulo: 'Cómo se presenta la actividad', texto: 'Con imágenes, objetos, pasos más cortos o el ejemplo de la maestra.' },
  { titulo: 'El tiempo', texto: 'Más tiempo para terminar, pausas o anticiparle lo que viene.' },
  { titulo: 'El lugar', texto: 'Dónde se sienta y cerca de quién.' },
  { titulo: 'Cómo muestra lo que aprendió', texto: 'Hablando, señalando, dibujando o haciendo.' },
]

/** INC-6: la corresponsabilidad como alianza (sin terapias: decisión del 22 nov 2026) */
const papelFamilia = [
  'Nos cuentas lo que sabes de él y lo que va cambiando en casa.',
  'Acordamos compromisos y los cumplimos juntos.',
  'Vienes a las reuniones de seguimiento.',
]

/** INC-8: se conserva tal cual (contenido del usuario, 22 nov 2026) */
const temas = [
  {
    titulo: 'Aprendizaje y participación',
    texto:
      'Piensa en una actividad que a tu hijo le guste y otra en la que necesite ayuda. Eso puede servir para conversar sobre su participación.',
    pregunta: '¿Cómo son las actividades del aula y con quién podemos conversar si mi hijo necesita apoyo para participar?',
  },
  {
    titulo: 'Comunicación con la familia',
    texto:
      'Aclara con quién puedes hablar, cómo se mantiene el contacto y de qué manera puedes plantear tus preguntas durante el proceso.',
    pregunta: '¿Con quién puedo hablar y cómo podemos mantenernos en contacto?',
  },
  {
    titulo: 'Proceso de ingreso',
    texto:
      'Consulta los pasos para conocer el colegio y qué información hace falta confirmar antes de tomar una decisión.',
    pregunta: '¿Cuál sería el siguiente paso para conocer el proceso de ingreso?',
  },
]

function datosPagina() {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: preguntasInclusion.map((p) => ({
        '@type': 'Question',
        name: p.pregunta,
        acceptedAnswer: { '@type': 'Answer', text: p.respuesta },
      })),
    },
  ]
}

export default function Inclusion() {
  return (
    <>
      <Seo ruta="/inclusion/" titulo={titulo} descripcion={descripcion} jsonLd={datosPagina()} />

      {/* INC-1 · Portada */}
      <section className={`${s.portada} fondo-portada`} aria-labelledby="titulo-inclusion">
        <div className={`contenedor ${s.portadaGrid}`}>
          <div className={s.portadaTexto}>
            <p className={s.ante}>Inclusión escolar · {site.direccion.municipio}</p>
            <h1 id="titulo-inclusion" className={s.titulo}>
              Inclusión en preescolar y primaria: un plan para tu hijo, <em>acordado contigo</em>
            </h1>
            <p className={s.bajada}>
              En Shalom Kids recibimos {alcanceInclusion}. Primero lo conocemos y conversamos contigo en una entrevista;
              después acordamos con tu familia los apoyos que necesita para participar y aprender con sus compañeros,
              desde los {ingreso.edadMinima} hasta {ingreso.gradoMaximo}.
            </p>
            <div className={s.acciones}>
              <EnlaceWhatsApp origen="inclusion-portada" mensaje={mensajesWhatsApp.inclusion} className="btn btn-primario">
                <IconoWhatsApp />
                {rotuloVisita}
              </EnlaceWhatsApp>
              <a href="#proceso" className="btn btn-borde">
                Cómo es el proceso
              </a>
            </div>
          </div>
          <aside className={s.nota} aria-labelledby="titulo-primer-contacto">
            <h2 id="titulo-primer-contacto">Un primer mensaje es suficiente</h2>
            <p>Basta con contarnos la edad de tu hijo y que quieres conversar sobre inclusión.</p>
            <p className={s.cuidado}>
              Por tu privacidad y la de tu hijo, no envíes por WhatsApp diagnósticos ni informes médicos o de terapia.
              Si decides compartirlos, los revisamos contigo en persona.
            </p>
          </aside>
        </div>
      </section>

      {/* INC-2 · No necesitas un diagnóstico */}
      <section className={s.seccion} aria-labelledby="titulo-diagnostico">
        <div className={`contenedor ${s.diagnostico}`}>
          <TituloSeccion
            id="titulo-diagnostico"
            antetitulo="Lo primero que queremos que sepas"
            titulo={<>No necesitas un <em>diagnóstico</em> para empezar</>}
            color="naranja"
          />
          <div className={s.texto}>
            <p>
              Puede que ya tengas un diagnóstico, que estés en proceso o que solo tengas una intuición. Cualquiera de
              los tres es un buen punto de partida. Los apoyos en el aula no dependen de un papel médico. Dependen de lo
              que hoy le cuesta a tu hijo para participar y aprender, y eso lo descubrimos juntos: escuchándote a ti y
              acompañándolo en el aula.
            </p>
            <p>
              Conocerlo no es un examen para dejarlo por fuera: la entrevista sirve para saber qué necesita y preparar
              su llegada.
            </p>
          </div>
        </div>
      </section>

      {/* INC-3 · El proceso */}
      <section id="proceso" className={`${s.seccion} ${s.fondoMenta}`} aria-labelledby="titulo-proceso">
        <div className="contenedor">
          <TituloSeccion
            id="titulo-proceso"
            antetitulo="El proceso"
            titulo={<>Así acompañamos a <em>cada niño</em></>}
            intro="Cuatro pasos, siempre con tu familia."
            color="turquesa"
          />
          <ol className={s.pasos}>
            {pasos.map((p, i) => (
              <li key={p.titulo} className={s.paso}>
                <span className={s.numero} aria-hidden="true">
                  {i + 1}
                </span>
                <h3>{p.titulo}</h3>
                <p>{p.texto}</p>
              </li>
            ))}
          </ol>
          <a href="/#matricula" className={s.enlaceTexto}>
            Conoce el proceso de matrícula
          </a>
        </div>
      </section>

      {/* INC-4 · Qué puede cambiar en el aula */}
      <section className={s.seccion} aria-labelledby="titulo-ajustes">
        <div className="contenedor">
          <TituloSeccion
            id="titulo-ajustes"
            antetitulo="Apoyos en el aula"
            titulo={<>Qué puede cambiar en el <em>aula</em></>}
            intro="Los apoyos se eligen para cada niño. Estos son ejemplos de lo que podemos acordar con tu familia según lo que necesite:"
            color="morado"
          />
          <ul className={s.ajustes}>
            {ajustes.map((a) => (
              <li key={a.titulo} className={s.ajuste}>
                <h3>{a.titulo}</h3>
                <p>{a.texto}</p>
              </li>
            ))}
          </ul>
          <p className={s.cierre}>
            Los grupos pequeños y nuestro método «Juega, construye y aprende» ayudan a que cada niño participe a su
            manera, porque el juego y los proyectos dejan más de un camino para aprender.
          </p>
          <a href="/#metodo" className={s.enlaceTexto}>
            Cómo se aprende en Shalom
          </a>
        </div>
      </section>

      {/* INC-5 · Quién acompaña a tu hijo e INC-6 · Tu papel como familia */}
      <section className={`${s.seccion} ${s.fondoDurazno}`} aria-labelledby="titulo-quien">
        <div className={`contenedor ${s.equipo}`}>
          <div>
            <TituloSeccion id="titulo-quien" titulo={<>Quién acompaña a <em>tu hijo</em></>} color="naranja" />
            <ul className={s.roles}>
              <li className={s.rol}>
                <h3>Su maestra</h3>
                <p>Es quien lo acompaña en el aula día a día, con los apoyos que acordamos contigo.</p>
              </li>
              <li className={s.rol}>
                <h3>Tú</h3>
                <p>
                  Lo conoces mejor que nadie. <a href="#familia">Tu papel como familia</a>
                </p>
              </li>
            </ul>
          </div>
          <div id="familia" className={s.familia}>
            <h2 id="titulo-familia" className={s.subtitulo}>
              Tu papel como <em>familia</em>
            </h2>
            <p>Nadie conoce a tu hijo como tú. Por eso su plan se hace contigo:</p>
            <ul className={s.lista} aria-labelledby="titulo-familia">
              {papelFamilia.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* INC-7 · Ancla de fe */}
      <section className={`${s.seccion} ${s.fondoMenta}`} aria-labelledby="titulo-fe">
        <div className={`contenedor ${s.fe}`}>
          <div>
            <TituloSeccion id="titulo-fe" titulo={<>Cada niño, valioso y <em>único</em></>} color="morado" />
            <p className={s.texto}>
              Educamos con el lenguaje del amor y la sabiduría de Dios. Para nosotros, eso significa mirar a cada niño
              por lo que es y no por lo que le cuesta.
            </p>
          </div>
          <blockquote className={s.cita}>
            <p>«{citaFe.texto}»</p>
            <cite>
              {citaFe.referencia} ({citaFe.version})
            </cite>
          </blockquote>
        </div>
      </section>

      {/* INC-8 · Qué preguntar antes de la matrícula (se conserva tal cual) */}
      <section id="preguntas-inclusion" className={s.seccion} aria-labelledby="titulo-preguntas-inclusion">
        <div className="contenedor">
          <TituloSeccion
            id="titulo-preguntas-inclusion"
            antetitulo="Para preparar la conversación"
            titulo={<>Qué preguntar antes de la <em>matrícula</em></>}
            intro="Estas ideas pueden ayudarte a ordenar lo que quieres consultar al colegio. Elige las que sean útiles para tu familia."
            color="morado"
          />
          <div className={s.temas}>
            {temas.map((tema) => (
              <article className={s.tema} key={tema.titulo}>
                <h3>{tema.titulo}</h3>
                <p>{tema.texto}</p>
                <p className={s.pregunta}>{tema.pregunta}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INC-10 · Preguntas sobre inclusión (sin botón propio: el cierre INC-11 es el único llamado) */}
      <PreguntasFrecuentes
        preguntas={preguntasInclusion}
        titulo={<>Preguntas sobre <em>inclusión</em></>}
        className={s.fondoLila}
        sinBoton
      />

      {/* INC-11 · Cierre */}
      <section className={s.seccion} aria-labelledby="titulo-contacto-inclusion">
        <div className={`contenedor ${s.contacto}`}>
          <div className={s.contactoTexto}>
            <h2 id="titulo-contacto-inclusion">
              Empecemos por conocer a <em>tu hijo</em>
            </h2>
            <p>Agenda una visita, cuéntanos cómo es y conversemos sobre lo que necesita para empezar el colegio.</p>
            <div className={s.acciones}>
              <EnlaceWhatsApp origen="inclusion-contacto" mensaje={mensajesWhatsApp.inclusion} className="btn btn-primario">
                <IconoWhatsApp />
                {rotuloVisita}
              </EnlaceWhatsApp>
              <CompartirPagina titulo={titulo} ruta="/inclusion/" etiqueta="Compártela con otra familia" />
            </div>
            <p className={s.legal}>
              Al escribirnos, tus datos se tratan según nuestro <a href="/privacidad/">aviso de privacidad</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
