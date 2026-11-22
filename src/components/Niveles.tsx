import type { CSSProperties } from 'react'
import { ingreso, preescolar, primaria, servicios, type Grado } from '../data/contenido'
import { rotuloVisita } from '../data/site'
import { EnlaceWhatsApp } from './EnlaceWhatsApp'
import { IconoCalendario, IconoCasa, IconoCheck, IconoSol, IconoWhatsApp } from './Iconos'
import { Pendiente } from './Pendiente'
import { TituloSeccion } from './TituloSeccion'
import s from './Niveles.module.css'

const colores = ['var(--mostaza)', 'var(--naranja)', 'var(--morado)', 'var(--turquesa)', 'var(--mostaza)', 'var(--naranja)', 'var(--morado)']

function TarjetaGrado({ g, i }: { g: Grado; i: number }) {
  return (
    <li className={s.grado} style={{ '--i': i, '--c': colores[i] } as CSSProperties}>
      <span className={s.insignia} aria-hidden="true">
        {g.corto}
      </span>
      <h4 className={s.nombre}>{g.nombre}</h4>
      <p className={s.dato}>
        <span>Lo que aprende:</span> {g.logros ?? <Pendiente>logros</Pendiente>}
      </p>
    </li>
  )
}

export function Niveles() {
  return (
    <section id="niveles" className={s.seccion} aria-labelledby="titulo-niveles">
      <div className="contenedor">
        <TituloSeccion
          id="titulo-niveles"
          antetitulo="Niveles"
          titulo={<>De párvulos a <em>3.º de primaria</em></>}
          intro={`Tu hijo puede empezar en párvulos desde los ${ingreso.edadMinima} y seguir hasta ${ingreso.gradoMaximo} en el mismo colegio. Conoce lo que se trabaja en cada grado.`}
          color="turquesa"
        />

        <div className={s.escalera}>
          <div className={s.grupo}>
            <h3 className={s.grupoTitulo}>Preescolar</h3>
            <ol className={s.grados}>
              {preescolar.map((g, i) => (
                <TarjetaGrado key={g.nombre} g={g} i={i} />
              ))}
            </ol>
          </div>
          <div className={s.grupo}>
            <h3 className={s.grupoTitulo}>Primaria</h3>
            <ol className={s.grados}>
              {primaria.map((g, i) => (
                <TarjetaGrado key={g.nombre} g={g} i={i + preescolar.length} />
              ))}
            </ol>
          </div>
        </div>
        <p className={s.fuente}>
          Logros basados en las Bases Curriculares para la Educación Inicial y Preescolar y los Derechos Básicos de Aprendizaje (DBA) del
          Ministerio de Educación Nacional.
        </p>

        {/* I-4 (22 nov 2026): edades de referencia de la Secretaría de Educación, sin fecha de corte */}
        <div className={s.edades}>
          <h3 id="titulo-edades">¿En qué grado entra mi hijo?</h3>
          <table aria-labelledby="titulo-edades">
            <thead>
              <tr>
                <th scope="col">Grado</th>
                <th scope="col">Edad de ingreso</th>
              </tr>
            </thead>
            <tbody>
              {[...preescolar, ...primaria].map((g) => (
                <tr key={g.nombre}>
                  <th scope="row">{g.nombre}</th>
                  <td>{g.edad}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className={s.edadesNota}>
            Edades de referencia según la Secretaría de Educación. Escríbenos con la fecha de nacimiento de tu hijo y te
            confirmamos el grado.
          </p>
        </div>

        <ul className={s.jornadas}>
          <li className={s.jornada}>
            <span className={s.jIcono}>
              <IconoSol />
            </span>
            <div>
              <h3>Jornada diurna</h3>
              <p>De lunes a viernes. Te enviamos los horarios por WhatsApp.</p>
            </div>
          </li>
          <li className={s.jornada}>
            <span className={s.jIcono}>
              <IconoCasa />
            </span>
            <div>
              <h3>Un solo colegio hasta 3.º</h3>
              <p>Tu hijo crece en un lugar que ya conoce y donde todos lo conocen.</p>
            </div>
          </li>
          <li className={s.jornada}>
            <span className={s.jIcono}>
              <IconoCalendario />
            </span>
            <div>
              <h3>Calendario A</h3>
              <p>El año escolar empieza a finales de enero.</p>
            </div>
          </li>
        </ul>

        <div className={s.servicios}>
          <h3>Actividades y servicios</h3>
          <ul>
            {servicios.map((sv) => (
              <li key={sv}>
                <IconoCheck />
                {sv}
              </li>
            ))}
          </ul>
        </div>
        <div className={s.acciones}>
          <EnlaceWhatsApp origen="niveles" className="btn btn-borde">
            <IconoWhatsApp />
            {rotuloVisita}
          </EnlaceWhatsApp>
        </div>
      </div>
    </section>
  )
}
