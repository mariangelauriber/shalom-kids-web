import { rotuloVisita, site } from '../data/site'
import { EnlaceWhatsApp } from './EnlaceWhatsApp'
import { IconoCheck, IconoWhatsApp } from './Iconos'
import s from './Hero.module.css'

/**
 * Rediseño de conversión, sección 1 (23 nov 2026). Ajuste 7: sin «gratis», «sin costo» ni «sin pagar inscripción»;
 * ajuste 8: H1 principal del rediseño de conversión, sin prueba A/B ni fotos nuevas.
 */
const valor = [
  'Primero nos visitas con tu hijo; después decides',
  'Grupos pequeños de los 2 años a 3.º de primaria',
  'Énfasis en inglés, cámaras, psicología y alimentación',
  'Inclusión real, sin exigir diagnóstico previo',
]

export function Hero() {
  const d = site.direccion
  const confianza = [
    'Calendario A (inicio a finales de enero)',
    'Alineado al MEN (DBA)',
    'Psicología y alimentación',
    d.calle ? `${d.calle}, ${d.barrio}` : `Barrio ${d.barrio}`,
  ]

  return (
    <section className={`${s.hero} fondo-portada`} aria-labelledby="titulo-inicio" id="inicio">
      <div className={`contenedor ${s.grid}`}>
        <div className={s.texto}>
          <p className={s.ante}>
            Matrículas {site.matriculas.anio} abiertas · Calendario A · {d.barrio}, {d.municipio}
          </p>

          {/* Abre el hilo «por su nombre» que cierra el llamado final (storytelling del 22 nov 2026) */}
          <h1 id="titulo-inicio" className={s.titulo}>
            Formamos niños felices, con carácter cristiano y bases académicas sólidas, <em>conocidos por su nombre</em>
          </h1>

          <p className={s.bajada}>
            En Shalom Kids acompañamos a tu hijo desde párvulos (2 años) hasta 3.º de primaria en un mismo hogar
            escolar. Unimos formación centrada en Cristo, aprendizajes alineados al Ministerio de Educación con énfasis
            en inglés, grupos pequeños e inclusión escolar real.
          </p>

          <ul className={s.valor} aria-label="Lo que encuentras en Shalom Kids">
            {valor.map((v) => (
              <li key={v}>
                <IconoCheck />
                {v}
              </li>
            ))}
          </ul>

          <div className={s.acciones}>
            <EnlaceWhatsApp origen="hero" className="btn btn-primario">
              <IconoWhatsApp />
              {rotuloVisita}
            </EnlaceWhatsApp>
            <a href="#niveles" className="btn btn-borde">
              Ver grados y edades {site.matriculas.anio}
            </a>
          </div>
          {site.tiempoRespuesta && <p className={s.apoyo}>Te enviamos los costos {site.matriculas.anio} y te respondemos {site.tiempoRespuesta}.</p>}
        </div>

        <div className={s.sello} aria-hidden="true">
          <img src="/img/sello.webp" width={480} height={480} alt="" decoding="async" />
          <span className={`${s.burbuja} ${s.b1}`}>Sabiduría</span>
          <span className={`${s.burbuja} ${s.b2}`}>Amor</span>
          <span className={`${s.burbuja} ${s.b3}`}>Paz</span>
        </div>
      </div>

      {/* Barra de confianza (rediseño de conversión, sección 1): solo datos confirmados */}
      <div className="contenedor">
        <ul className={s.confianza} aria-label="Datos del colegio">
          {confianza.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
