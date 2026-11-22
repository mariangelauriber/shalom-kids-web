import { pasosMatricula } from '../data/contenido'
import { rotuloVisita, site } from '../data/site'
import { useRenovacionVigente } from '../lib/renovacion'
import { EnlaceWhatsApp } from './EnlaceWhatsApp'
import { FormularioCupo } from './FormularioCupo'
import { IconoWhatsApp } from './Iconos'
import { Pendiente } from './Pendiente'
import { TituloSeccion } from './TituloSeccion'
import s from './ProcesoMatricula.module.css'

/**
 * H12: recuadro de renovación. El HTML compilado lo trae solo si se compiló antes del fin de la renovación;
 * en el navegador se oculta después de hidratar si la fecha ya pasó.
 */
function Renovacion() {
  const vigente = useRenovacionVigente()

  if (!vigente) return null
  return (
    <p className={s.renovacion}>
      <strong>¿Ya eres familia Shalom?</strong> Renueva la matrícula de tu hijo {site.matriculas.renovacion}.
    </p>
  )
}

export function ProcesoMatricula() {
  /* H04: mientras no haya clave de Web3Forms, una sola tarjeta con un solo botón de WhatsApp */
  const conFormulario = Boolean(site.web3formsClave)

  return (
    <section id="matricula" className={`${s.seccion}`} aria-labelledby="titulo-matricula">
      <div className="contenedor">
        <TituloSeccion
          id="titulo-matricula"
          antetitulo={`Matrícula ${site.matriculas.anio}`}
          titulo={<>De la primera visita a la <em>matrícula</em></>}
          intro={`Las matrículas ${site.matriculas.anio} están abiertas ${site.matriculas.cierre}. Son tres pasos, y el primero es conocernos.`}
          color="naranja"
          claro
        />

        <ol className={s.pasos}>
          {pasosMatricula.map((p, i) => (
            <li key={p.titulo} className={s.paso}>
              <span className={s.numero} aria-hidden="true">
                {i + 1}
              </span>
              <h3>{p.titulo}</h3>
              <p>
                {p.texto}
                {p.pendiente && <Pendiente>{p.pendiente}</Pendiente>}
              </p>
            </li>
          ))}
        </ol>

        <Renovacion />

        <div className={`${s.contacto} ${conFormulario ? '' : s.contactoUnico}`}>
          <div className={s.wa}>
            <h3>Escríbenos por WhatsApp</h3>
            <p>
              Pregunta por el grado que buscas, el proceso o las fechas para conocer el colegio.{' '}
              {!conFormulario && <>Por WhatsApp también te enviamos el formulario de matrícula. </>}
              {site.tiempoRespuesta ? (
                <>Te respondemos {site.tiempoRespuesta}.</>
              ) : (
                <Pendiente>tiempo de respuesta</Pendiente>
              )}
            </p>
            <EnlaceWhatsApp origen="matricula" className="btn btn-oscuro">
              <IconoWhatsApp />
              {rotuloVisita}
            </EnlaceWhatsApp>
            <p className={s.legal}>
              Al escribirnos, tus datos se tratan según nuestro <a href="/privacidad/">aviso de privacidad</a>.
            </p>
          </div>

          {conFormulario && (
            <div className={s.form} id="formulario">
              <h3>Formulario de matrícula</h3>
              <p>Déjanos tus datos para que podamos enviártelo por WhatsApp.</p>
              <FormularioCupo />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
