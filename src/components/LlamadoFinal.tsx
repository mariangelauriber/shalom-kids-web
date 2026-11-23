import { rotuloVisita, site } from '../data/site'
import { EnlaceWhatsApp } from './EnlaceWhatsApp'
import { IconoWhatsApp } from './Iconos'
import s from './LlamadoFinal.module.css'

/** Rediseño de conversión, sección 9 (23 nov 2026): cierre. Cierra el hilo «por su nombre» que abre la portada del inicio. */
export function LlamadoFinal() {
  return (
    <section className={`${s.banda}`} aria-labelledby="titulo-final">
      <div className={`contenedor ${s.fila}`}>
        <div>
          <h2 id="titulo-final">
            Ven a sentir el lugar donde tu hijo crecerá feliz, seguro y <em>conocido por su nombre</em>
          </h2>
          <p>
            Ninguna pantalla reemplaza ver la sonrisa de los niños ni conversar cara a cara con quienes cuidarán a tu hijo
            cada mañana. Agenda tu visita y conoce Shalom Kids por dentro.
          </p>
        </div>
        <div className={s.accion}>
          <EnlaceWhatsApp origen="llamado-final" className="btn btn-oscuro">
            <IconoWhatsApp />
            {rotuloVisita}
          </EnlaceWhatsApp>
          <p className={s.micro}>
            Matrículas {site.matriculas.anio} abiertas · Grupos pequeños
            {site.tiempoRespuesta && <> · Respuesta {site.tiempoRespuesta}</>}
          </p>
        </div>
      </div>
    </section>
  )
}
