import type { CSSProperties } from 'react'
import { EnlaceWhatsApp } from '../components/EnlaceWhatsApp'
import { IconoWhatsApp } from '../components/Iconos'
import { LlamadoFinal } from '../components/LlamadoFinal'
import { Seo } from '../components/Seo'
import { TituloSeccion } from '../components/TituloSeccion'
import { alcanceInclusion, colegio, ingreso, servicios } from '../data/contenido'
import { citaFe } from '../data/fe'
import { rotuloVisita, site, telefonoLegible } from '../data/site'
import v from './Vacacionales.module.css'
import s from './Nosotros.module.css'

const titulo = 'Quiénes somos | Shalom Kids, colegio cristiano en Soledad'
const descripcion =
  'Shalom Kids, colegio cristiano en Los Robles, Soledad (Atlántico). Conoce su historia, misión, visión 2030 y los valores que se viven cada día en el aula.'

/** Copy elevado aprobado el 18 nov 2026 */
const bajada =
  'Shalom es una palabra hebrea que significa paz completa, de bienestar. Por eso nos llamamos Shalom Kids: queremos niños en paz, felices y seguros de que son amados.'

/** Textos aprobados el 18 nov 2026 (doc «Del PEI 2015 a Shalom Kids 2027») */
const mision = `Acompañamos a los niños de Soledad desde los ${ingreso.edadMinima} hasta ${ingreso.gradoMaximo} para que aprendan jugando, construyendo y descubriendo. Lo hacemos con el lenguaje del amor y la sabiduría de Dios, en grupos pequeños y de la mano de sus familias.`
const vision =
  'En 2030, Shalom Kids será el colegio cristiano que las familias de Soledad recomiendan para empezar la vida escolar: por cómo acompañamos a cada niño, por nuestros proyectos y por los valores que se viven en el aula.'

/** Valores del sello con su promesa a la familia (copy elevado, 18 nov 2026; sin garantías ni promesas de resultado) */
const valores = [
  {
    nombre: 'Sabiduría',
    lema: 'Niños que preguntan, crean y se hacen cargo',
    texto:
      'Guiados por la sabiduría de Dios, enseñamos a tu hijo a ser responsable y autónomo desde pequeño, a usar su creatividad para resolver problemas y a cuidar la naturaleza como parte de la creación.',
    color: 'var(--mostaza)',
    incluye: ['Responsabilidad', 'Creatividad', 'Autonomía', 'Cuidado de la naturaleza'],
  },
  {
    nombre: 'Amor',
    lema: 'Un segundo hogar donde a tu hijo lo conocen por su nombre',
    texto:
      'Cultivamos la alegría, la amistad, el compartir y la solidaridad, empezando por el amor a la familia. Los padres no son espectadores: son nuestros aliados. Por eso nos reunimos contigo periódicamente para revisar cómo avanza.',
    color: 'var(--naranja)',
    incluye: ['Amor a la familia', 'Alegría', 'Amistad', 'Compartir', 'Solidaridad'],
  },
  {
    nombre: 'Paz',
    lema: 'Tranquilidad para ti, respeto para ellos',
    texto:
      'Shalom significa paz, y le hacemos honor: en el salón se aprende a respetar, a ser tolerante, honesto y justo, y a resolver los conflictos hablando. Contamos con grupos pequeños, psicología y cámaras en las aulas.',
    color: 'var(--morado)',
    incluye: ['Respeto', 'Tolerancia', 'Honestidad', 'Justicia'],
  },
]

const hitos = [
  { anio: String(colegio.origen), texto: 'La idea nace en los vacacionales.' },
  { anio: String(colegio.enLosRoblesDesde), texto: `Llegamos a ${site.direccion.barrio}, ${site.direccion.municipio}.` },
  { anio: String(site.matriculas.anio), texto: 'De párvulos a 3.º de primaria, con énfasis en inglés y grupos pequeños.' },
]

/** Número de WhatsApp legible (573013883046 → 301 388 3046) */
const telefono = telefonoLegible()

/**
 * Datos del colegio en un bloque fácil de leer para familias, Google y las IA.
 * N-6 (22 nov 2026): sin NIT ni licencia (respuesta del colegio).
 */
const datos = [
  { termino: 'Nombre', valor: site.nombre },
  { termino: 'Tipo', valor: 'Colegio cristiano privado' },
  { termino: 'Grados', valor: `Párvulos (desde los ${ingreso.edadMinima}) hasta ${ingreso.gradoMaximo}` },
  { termino: 'Calendario y jornada', valor: 'Calendario A, jornada diurna' },
  { termino: `En ${site.direccion.barrio} desde`, valor: String(colegio.enLosRoblesDesde) },
  {
    termino: 'Servicios',
    valor: servicios.map((sv, i) => (i === 0 ? sv : sv.charAt(0).toLowerCase() + sv.slice(1))).join('; '),
  },
]

function datosPagina() {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: titulo,
      description: descripcion,
      about: {
        '@type': ['School', 'LocalBusiness'],
        name: site.nombre,
        slogan: site.lema,
      },
    },
  ]
}

export default function Nosotros() {
  return (
    <>
      <Seo ruta="/nosotros/" titulo={titulo} descripcion={descripcion} jsonLd={datosPagina()} />

      {/* Portada */}
      <section className={`${v.portada} fondo-portada`} aria-labelledby="titulo-nosotros">
        <div className={`contenedor ${v.portadaGrid} ${s.portadaGrid}`}>
          <div className={v.portadaTexto}>
            <p className={v.ante}>Nosotros · {site.direccion.barrio}, {site.direccion.municipio}</p>
            <h1 id="titulo-nosotros" className={v.titulo}>
              Shalom quiere decir <em>paz</em>: la que queremos para cada niño
            </h1>
            <p className={v.bajada}>{bajada}</p>
            <div className={v.acciones}>
              <EnlaceWhatsApp origen="nosotros-portada" className="btn btn-primario">
                <IconoWhatsApp />
                {rotuloVisita}
              </EnlaceWhatsApp>
              <a href="#historia" className="btn btn-borde">
                Nuestra historia
              </a>
            </div>
          </div>

          <div className={s.ficha} aria-hidden="true">
            <p className={s.hebreo} lang="he" dir="rtl">
              שָׁלוֹם
            </p>
            <p className={s.termino}>
              shalom <span>· palabra hebrea</span>
            </p>
            <ol className={s.acepciones}>
              <li>paz</li>
              <li>bienestar completo</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Historia */}
      <section id="historia" className={s.seccion} aria-labelledby="titulo-historia">
        <div className={`contenedor ${s.historia}`}>
          <div>
            <TituloSeccion
              id="titulo-historia"
              antetitulo="Nuestra historia"
              titulo={<>Todo empezó en un <em>vacacional</em></>}
              color="naranja"
            />
            <div className={s.texto}>
              <p>
                En {colegio.origen}, en los vacacionales que dirigía nuestra fundadora, nació una idea sencilla: un
                lugar donde los niños aprendieran jugando, se sintieran queridos y su familia hiciera parte del camino.
              </p>
              <p className={s.lema}>
                Desde {colegio.enLosRoblesDesde} esa idea vive en {site.direccion.barrio}, {site.direccion.municipio},
                y su lema de origen, «Juega, construye y aprende con el lenguaje del amor», sigue guiando{' '}
                <a href="/#metodo">nuestro método</a>.
              </p>
              <p>
                Hoy hacemos lo mismo que al principio: conocer a cada niño, enseñarle jugando y caminar con su familia,
                desde los {ingreso.edadMinima} hasta {ingreso.gradoMaximo}.
              </p>
            </div>
          </div>

          <ol className={s.hitos}>
            {hitos.map((h, i) => (
              <li key={h.anio} style={{ '--c': ['var(--naranja)', 'var(--turquesa)', 'var(--morado)'][i] } as CSSProperties}>
                <span className={s.anio}>{h.anio}</span>
                <p>{h.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Misión y visión */}
      <section className={`${s.seccion} ${s.fondoMenta}`} aria-labelledby="titulo-rumbo">
        <div className="contenedor">
          <TituloSeccion
            id="titulo-rumbo"
            antetitulo="Misión y visión"
            titulo={<>Para qué <em>existimos</em></>}
            color="turquesa"
          />
          <div className={s.rumbo}>
            <article className={s.tarjeta}>
              <h3>Misión</h3>
              <p>{mision}</p>
            </article>
            <article className={`${s.tarjeta} ${s.vision}`}>
              <h3>Visión 2030</h3>
              <p>{vision}</p>
            </article>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className={`${s.seccion} ${s.fondoDurazno}`} aria-labelledby="titulo-valores">
        <div className="contenedor">
          <TituloSeccion
            id="titulo-valores"
            antetitulo="Valores"
            titulo={<>Sabiduría, amor y paz en el <em>aula</em></>}
            intro="Aquí tu hijo aprende a leer, escribir y sumar, y también a ser responsable, a compartir y a respetar. Son los valores cristianos de nuestro sello: cada mes trabajamos uno en el aula, para que también se viva en casa."
            color="morado"
          />
          <ul className={s.valores}>
            {valores.map((val) => (
              <li key={val.nombre} style={{ '--c': val.color } as CSSProperties}>
                <h3>{val.nombre}</h3>
                <p className={s.valorLema}>{val.lema}</p>
                <p className={s.valorTexto}>{val.texto}</p>
                <ul aria-label={`Valores de ${val.nombre.toLowerCase()}`}>
                  {val.incluye.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <div className={s.valoresCierre}>
            <p>¿Quieres que tu hijo crezca con estos valores?</p>
            <EnlaceWhatsApp origen="nosotros-valores" className="btn btn-primario">
              <IconoWhatsApp />
              {rotuloVisita}
            </EnlaceWhatsApp>
          </div>
        </div>
      </section>

      {/* N-5 (22 nov 2026): puente de fe hacia la inclusión */}
      <section className={`${s.seccion} ${s.fondoLila}`} aria-labelledby="titulo-unico">
        <div className={`contenedor ${s.unico}`}>
          <div>
            <TituloSeccion
              id="titulo-unico"
              antetitulo="Nuestra forma de mirar"
              titulo={<>Para nosotros, cada niño es <em>único</em></>}
              color="morado"
            />
            <p className={s.unicoTexto}>
              Creemos que cada niño es valioso tal como Dios lo hizo. Por eso lo conocemos por su nombre, respetamos su
              ritmo y, si necesita apoyos, los acordamos con su familia.
            </p>
            <a href="/inclusion/#proceso" className={s.enlaceFuerte}>
              Así acompañamos a cada niño
            </a>
          </div>
          <blockquote className={s.cita}>
            <p>«{citaFe.texto}»</p>
            <cite>
              {citaFe.referencia} ({citaFe.version})
            </cite>
          </blockquote>
        </div>
      </section>

      {/* Datos del colegio */}
      <section className={s.seccion} aria-labelledby="titulo-datos">
        <div className="contenedor">
          <TituloSeccion id="titulo-datos" titulo={<>Shalom Kids en <em>Los Robles, Soledad</em></>} color="turquesa" />
          <dl className={s.datos}>
            {datos.map((x) => (
              <div key={x.termino}>
                <dt>{x.termino}</dt>
                <dd>{x.valor}</dd>
              </div>
            ))}
            <div>
              <dt>Dirección</dt>
              <dd>
                {site.direccion.calle ? `${site.direccion.calle}, ` : ''}
                {site.direccion.barrio}, {site.direccion.municipio} ({site.direccion.departamento})
                {site.mapaFicha && (
                  <>
                    {' '}
                    ·{' '}
                    <a href={site.mapaFicha} target="_blank" rel="noopener">
                      Ver en Google Maps
                    </a>
                  </>
                )}
              </dd>
            </div>
            <div>
              <dt>Inclusión</dt>
              <dd>
                {/* Sin enlace: «Así acompañamos a cada niño» ya va al final de N-5, justo antes */}
                Sí. Recibimos {alcanceInclusion}, con apoyos acordados con la familia.
              </dd>
            </div>
            <div>
              <dt>Contacto</dt>
              {/* Cada enlace en su propia caja de 44 px, sin solaparse cuando caen en líneas distintas */}
              <dd className={s.contacto}>
                <EnlaceWhatsApp origen="nosotros-datos">WhatsApp {telefono}</EnlaceWhatsApp>
                <a href={site.instagram} target="_blank" rel="noopener">
                  Instagram {site.instagramUsuario}
                </a>
                <a href={site.facebook} target="_blank" rel="noopener">
                  Facebook
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <LlamadoFinal />
    </>
  )
}
