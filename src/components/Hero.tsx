import { rotuloVisita, site } from '../data/site'
import { EnlaceWhatsApp } from './EnlaceWhatsApp'
import { IconoWhatsApp } from './Iconos'
import s from './Hero.module.css'

/* H26: las edades vuelven a verse de un vistazo */
const etiquetas = ['Desde los 2 años hasta 3.º de primaria', 'Grupos pequeños', 'Énfasis en inglés']

export function Hero() {
  return (
    <section className={`${s.hero} fondo-portada`} aria-labelledby="titulo-inicio" id="inicio">
      <div className={`contenedor ${s.grid}`}>
        <div className={s.texto}>
          <p className={s.ante}>Matrículas {site.matriculas.anio} abiertas</p>

          {/* Storytelling (22 nov 2026): abre el hilo «por su nombre» que cierra el llamado final; sin «Soledad»
              en el H1 porque también hay alumnos de Barranquilla (el <title> la conserva por SEO local) */}
          <h1 id="titulo-inicio" className={s.titulo}>
            Colegio cristiano donde a tu hijo lo conocen <em>por su nombre</em>
          </h1>

          <p className={s.bajada}>
            Estamos en {site.direccion.barrio}. Tu hijo puede empezar a los 2 años y seguir con nosotros
            hasta 3.º de primaria, en grupos pequeños y con el lenguaje del amor y la sabiduría de Dios.
          </p>

          <ul className={s.etiquetas} aria-label="En resumen">
            {etiquetas.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>

          <div className={s.acciones}>
            <EnlaceWhatsApp origen="hero" className="btn btn-primario">
              <IconoWhatsApp />
              {rotuloVisita}
            </EnlaceWhatsApp>
            <a href="#metodo" className="btn btn-borde">
              Conoce el método
            </a>
          </div>
          <p className={s.apoyo}>Primero conoces el colegio; después decides.</p>

        </div>

        <div className={s.sello} aria-hidden="true">
          <img src="/img/sello.webp" width={480} height={480} alt="" decoding="async" />
          <span className={`${s.burbuja} ${s.b1}`}>Sabiduría</span>
          <span className={`${s.burbuja} ${s.b2}`}>Amor</span>
          <span className={`${s.burbuja} ${s.b3}`}>Paz</span>
        </div>
      </div>
    </section>
  )
}
