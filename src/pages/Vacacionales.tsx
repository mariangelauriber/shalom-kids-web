import type { ReactNode } from 'react'
import { EnlaceWhatsApp } from '../components/EnlaceWhatsApp'
import { FormularioCupo } from '../components/FormularioCupo'
import { IconoCalendario, IconoPin, IconoReloj, IconoWhatsApp } from '../components/Iconos'
import { IlustracionAprender } from '../components/IlustracionAprender'
import { Pendiente } from '../components/Pendiente'
import { PreguntasFrecuentes } from '../components/PreguntasFrecuentes'
import { Seo } from '../components/Seo'
import { TituloSeccion } from '../components/TituloSeccion'
import { Ubicacion } from '../components/Ubicacion'
import { VidaShalom } from '../components/VidaShalom'
import { site } from '../data/site'
import { gruposVacacional, metodoVacacional, preguntasVacacional, vacacional } from '../data/vacacional'
import pm from '../components/ProcesoMatricula.module.css'
import s from './Vacacionales.module.css'

const titulo = 'Vacacional de nivelación y preparación en Soledad · Shalom Kids'
const descripcion =
  'Vacacional de nivelación y preparación escolar en Los Robles, Soledad: preparación para párvulos, prejardín y jardín, lectura y escritura para transición y 1.º, y nivelación para 2.º y 3.º. Grupos pequeños y valores cristianos.'

function datosServicio() {
  const d = site.direccion
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `${vacacional.nombre} · ${site.nombre}`,
      serviceType: 'Vacacional de nivelación y preparación escolar',
      description: descripcion,
      provider: { '@type': ['School', 'LocalBusiness'], name: site.nombre },
      audience: { '@type': 'EducationalAudience', educationalRole: 'student', audienceType: 'Niños desde los 2 años hasta 3.º de primaria' },
      areaServed: { '@type': 'City', name: `${d.municipio}, ${d.departamento}` },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: preguntasVacacional
        .filter((p) => p.respuesta.trim().length > 0)
        .map((p) => ({ '@type': 'Question', name: p.pregunta, acceptedAnswer: { '@type': 'Answer', text: p.respuesta } })),
    },
  ]
}

function Dato({ icono, titulo, children }: { icono: ReactNode; titulo: string; children: ReactNode }) {
  return (
    <li className={s.dato}>
      <span className={s.datoIcono}>{icono}</span>
      <div>
        <h3>{titulo}</h3>
        <p>{children}</p>
      </div>
    </li>
  )
}

export default function Vacacionales() {
  const d = site.direccion
  const abierto = vacacional.abiertoOtrosColegios

  return (
    <>
      <Seo ruta="/vacacionales/" titulo={titulo} descripcion={descripcion} jsonLd={datosServicio()} />

      {/* Portada */}
      <section className={`${s.portada} fondo-portada`} aria-labelledby="titulo-vacacional">
        <div className={`contenedor ${s.portadaGrid}`}>
          <div className={s.portadaTexto}>
            <p className={s.ante}>Vacacional · {d.barrio}, {d.municipio}</p>
            <h1 id="titulo-vacacional" className={s.titulo}>
              Que tu hijo empiece {site.matriculas.anio} con <em className={s.resalte}>confianza</em>
            </h1>
            <p className={s.bajada}>
              Un vacacional de nivelación y preparación: reforzamos lectura, escritura y matemáticas, y preparamos el
              paso al siguiente grado. En grupos pequeños y con valores cristianos.
            </p>
            <ul className={s.etiquetas} aria-label="En resumen">
              <li>Desde los 2 años hasta 3.º de primaria</li>
              <li>Grupos pequeños</li>
              <li>Aprender jugando</li>
            </ul>
            <div className={s.acciones}>
              <EnlaceWhatsApp origen="vacacional-portada" mensaje={vacacional.mensajeWhatsApp} className="btn btn-primario">
                <IconoWhatsApp />
                Quiero inscribir a mi hijo
              </EnlaceWhatsApp>
              <a href="#grupos" className="btn btn-borde">
                Ver grupos
              </a>
            </div>
            <p className={s.fechas}>
              <IconoCalendario />
              <span>
                <strong>Fechas:</strong> {vacacional.fechas ?? <Pendiente>fechas del vacacional</Pendiente>}
              </span>
            </p>
          </div>
          <div className={s.ilustracion}>
            <IlustracionAprender />
          </div>
        </div>
      </section>

      {/* Grupos */}
      <section id="grupos" className={s.seccion} aria-labelledby="titulo-grupos">
        <div className="contenedor">
          <TituloSeccion
            id="titulo-grupos"
            antetitulo="Grupos"
            titulo={<>Un plan para cada <em>etapa</em></>}
            intro="Elige el grupo según el grado que tu hijo cursará el próximo año."
            color="naranja"
          />
          <ol className={s.grupos}>
            {gruposVacacional.map((g) => (
              <li key={g.nombre} className={`${s.grupo} ${s[g.color]}`}>
                <h3>{g.nombre}</h3>
                <p className={s.para}>{g.para}</p>
                <p>{g.texto}</p>
                <ul className={s.temas}>
                  {g.temas.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Cómo trabajamos */}
      <section className={`${s.seccion} ${s.metodoFondo}`} aria-labelledby="titulo-metodo">
        <div className="contenedor">
          <TituloSeccion
            id="titulo-metodo"
            antetitulo="Cómo trabajamos"
            titulo={<>Cómo se trabaja en el <em>vacacional</em></>}
            intro="La idea de Shalom Kids nació en los vacacionales. Hoy los seguimos haciendo."
            color="morado"
          />
          <ol className={s.metodo}>
            {metodoVacacional.map((m, i) => (
              <li key={m.titulo}>
                <span className={s.numero} aria-hidden="true">
                  {i + 1}
                </span>
                <h3>{m.titulo}</h3>
                <p>{m.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Datos clave */}
      <section className={s.seccion} aria-labelledby="titulo-datos">
        <div className="contenedor">
          <TituloSeccion id="titulo-datos" antetitulo="Datos clave" titulo={<>Lo que <em>necesitas</em> saber</>} color="turquesa" />
          <ul className={s.datos}>
            <Dato icono={<IconoCalendario />} titulo="Fechas">
              {vacacional.fechas ?? <Pendiente>fechas</Pendiente>}
            </Dato>
            <Dato icono={<IconoReloj />} titulo="Horario">
              {vacacional.horario ?? <Pendiente>horario</Pendiente>}
            </Dato>
            <Dato icono={<IconoPin />} titulo="Lugar">
              Sede {site.nombreCorto}: {d.calle}, barrio {d.barrio}, {d.municipio}.
            </Dato>
            <Dato icono={<IconoWhatsApp />} titulo="¿Quiénes pueden ir?">
              {abierto === null ? (
                <Pendiente>¿reciben niños de otros colegios?</Pendiente>
              ) : abierto ? (
                'Estudiantes de Shalom Kids y niños de otros colegios.'
              ) : (
                'Estudiantes de Shalom Kids.'
              )}
            </Dato>
          </ul>
        </div>
      </section>

      <VidaShalom
        pagina="vacacionales"
        titulo={<>Así <em>aprendemos</em> en Shalom</>}
        intro={`Lo que compartimos en Instagram ${site.instagramUsuario}.`}
      />

      {/* Inscripción */}
      <section id="inscripcion" className={`${pm.seccion}`} aria-labelledby="titulo-inscripcion">
        <div className="contenedor">
          <TituloSeccion
            id="titulo-inscripcion"
            antetitulo="Inscripción"
            titulo={<>Cómo consultar la <em>inscripción</em></>}
            intro="Escríbenos por WhatsApp para saber qué grupo corresponde al grado de tu hijo."
            color="naranja"
            claro
          />
          <div className={pm.contacto}>
            <div className={pm.wa}>
              <h3>Consulta el grupo y las fechas</h3>
              <p>Cuéntanos qué grado cursará tu hijo y te enviamos toda la información.</p>
              <EnlaceWhatsApp origen="vacacional-inscripcion" mensaje={vacacional.mensajeWhatsApp} className="btn btn-oscuro">
                <IconoWhatsApp />
                Consulta el vacacional
              </EnlaceWhatsApp>
              <p className={pm.legal}>
                Al escribirnos, tus datos se tratan según nuestro <a href="/privacidad/">aviso de privacidad</a>.
              </p>
            </div>
            <div className={pm.form}>
              <h3>Formulario del vacacional</h3>
              {site.web3formsClave && <p>Déjanos tus datos y te escribimos para orientarte sobre la inscripción.</p>}
              <FormularioCupo
                servicio={vacacional.nombre}
                etiquetaGrado="Grado que cursará el próximo año"
                mensajeWhatsApp={vacacional.mensajeWhatsApp}
              />
            </div>
          </div>
        </div>
      </section>

      <PreguntasFrecuentes
        preguntas={preguntasVacacional}
        titulo={<>Preguntas sobre el <em>vacacional</em></>}
        mensaje={vacacional.mensajeWhatsApp}
        origen="vacacional-preguntas"
      />
      <Ubicacion />
    </>
  )
}
