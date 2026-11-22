import { rotuloVisita } from '../data/site'
import { EnlaceWhatsApp } from './EnlaceWhatsApp'
import { IconoWhatsApp } from './Iconos'
import s from './LlamadoFinal.module.css'

export function LlamadoFinal() {
  return (
    <section className={`${s.banda}`} aria-labelledby="titulo-final">
      <div className={`contenedor ${s.fila}`}>
        <div>
          {/* Cierra el hilo «por su nombre» que abre la portada del inicio (storytelling, 22 nov 2026) */}
          <h2 id="titulo-final">Queremos conocer a tu hijo <em>por su nombre</em></h2>
          <p>
            Agenda una visita, conoce los salones y a las maestras y trae todas tus preguntas. Primero conoces el
            colegio; después decides.
          </p>
        </div>
        <EnlaceWhatsApp origen="llamado-final" className="btn btn-oscuro">
          <IconoWhatsApp />
          {rotuloVisita}
        </EnlaceWhatsApp>
      </div>
    </section>
  )
}
