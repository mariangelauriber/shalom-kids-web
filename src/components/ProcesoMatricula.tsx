import { incluyeFormacion, pasosMatricula } from '../data/contenido'
import { mensajesWhatsApp, site } from '../data/site'
import { useDescuentoVigente, useRenovacionVigente } from '../lib/renovacion'
import { EnlaceWhatsApp } from './EnlaceWhatsApp'
import { FormularioCupo } from './FormularioCupo'
import { IconoCheck, IconoWhatsApp } from './Iconos'
import { Pendiente } from './Pendiente'
import { Precalificador } from './Precalificador'
import { TituloSeccion } from './TituloSeccion'
import s from './ProcesoMatricula.module.css'

/**
 * H12 y ajuste 10: banner de renovación. El HTML compilado lo trae solo si se compiló antes del 30 nov 2026;
 * en el navegador se oculta después de hidratar si la fecha ya pasó. Después no se dice nada.
 */
function Renovacion() {
  const vigente = useRenovacionVigente()

  if (!vigente) return null
  return (
    <div className={s.renovacion}>
      <p>
        <strong>¿Tu hijo ya estudia en Shalom Kids?</strong> Asegura su cupo para {site.matriculas.anio}: el plazo de
        renovación para familias actuales cierra el 30 de noviembre de 2026.
      </p>
      <EnlaceWhatsApp origen="matricula-renovacion" mensaje={mensajesWhatsApp.renovacion} className="btn btn-claro btn-sm">
        <IconoWhatsApp />
        Renovar matrícula por WhatsApp
      </EnlaceWhatsApp>
    </div>
  )
}

/** Ajuste 9: descuento de matrícula de la FICHA (el monto va por WhatsApp). Desde el 4 dic 2026 desaparece solo. */
function Descuento() {
  const vigente = useDescuentoVigente()

  if (!vigente) return null
  return (
    <p className={s.descuento}>
      {site.matriculas.descuento} El monto te lo informamos por WhatsApp.
    </p>
  )
}

/**
 * Rediseño de conversión, sección 7 (23 nov 2026). Ajuste 1: sin cifras ni afirmaciones sobre las tarifas; los costos 2027 se
 * envían por WhatsApp. H04: el formulario solo aparece cuando haya clave de Web3Forms.
 */
export function ProcesoMatricula() {
  const conFormulario = Boolean(site.web3formsClave)
  const anio = site.matriculas.anio

  return (
    <section id="matricula" className={`${s.seccion}`} aria-labelledby="titulo-matricula">
      <div className="contenedor">
        <TituloSeccion
          id="titulo-matricula"
          antetitulo={`Admisiones y matrículas ${anio} (Calendario A)`}
          titulo={
            <>
              Costos claros por WhatsApp y <em>3 pasos</em> para empezar
            </>
          }
          intro={`Te enviamos los costos ${anio} por WhatsApp. Las matrículas ${anio} están abiertas ${site.matriculas.cierre}.`}
          color="naranja"
          claro
        />

        <Descuento />

        <div className={s.oferta}>
          <div className={s.incluye}>
            <h3>Qué incluye la formación</h3>
            <ul>
              {incluyeFormacion.map((i) => (
                <li key={i}>
                  <IconoCheck />
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <Precalificador />
        </div>

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

        {conFormulario && (
          <div className={s.form} id="formulario">
            <h3>Formulario de matrícula</h3>
            <p>Déjanos tus datos para que podamos enviártelo por WhatsApp.</p>
            <FormularioCupo />
          </div>
        )}
      </div>
    </section>
  )
}
