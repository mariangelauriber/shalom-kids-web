import { IlustracionAprender } from './IlustracionAprender'
import s from './VacacionalDestacado.module.css'

/** Anuncio del vacacional en el inicio; lleva a su página. */
export function VacacionalDestacado() {
  return (
    <section className={s.seccion} aria-labelledby="titulo-vacacional-destacado">
      <div className="contenedor">
        <div className={s.tarjeta}>
          <div className={s.texto}>
            <p className={s.ante}>Vacacional</p>
            <h2 id="titulo-vacacional-destacado">Nivelación y preparación para el <em>próximo grado</em></h2>
            <p>
              Para niños desde los 2 años hasta 3.º de primaria: preparamos su primer día de colegio, la lectura y la escritura, y
              reforzamos matemáticas. En grupos pequeños.
            </p>
            <a href="/vacacionales/" className="btn btn-oscuro">
              Conocer el vacacional
            </a>
          </div>
          <IlustracionAprender className={s.ilustracion} />
        </div>
      </div>
    </section>
  )
}
