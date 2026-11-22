import { useLocation } from 'react-router-dom'
import { mensajesWhatsApp, site, telefonoLegible } from '../data/site'
import { enlaces } from './Cabecera'
import { EnlaceWhatsApp } from './EnlaceWhatsApp'
import { IconoFacebook, IconoInstagram, IconoWhatsApp } from './Iconos'
import s from './Pie.module.css'

/** Pie de página (18 nov 2026): marca y redes, las secciones del sitio y el contacto. */
export function Pie() {
  const d = site.direccion
  const telefono = telefonoLegible()
  /* En /inclusion/ el pie también envía el mensaje de inclusión (misma regla que la cabecera y el botón fijo) */
  const enInclusion = useLocation().pathname.startsWith('/inclusion')
  const mensaje = enInclusion ? mensajesWhatsApp.inclusion : undefined
  return (
    <footer className={s.pie}>
      <div className={`contenedor ${s.grid}`}>
        <div className={s.marca}>
          <img src="/img/sello-240.webp" width={240} height={240} alt="" loading="lazy" decoding="async" />
          <div>
            {/* Espacios duros: «· Soledad» no queda sola en una línea */}
            <p className={s.nombre}>{site.nombreCompleto.replace(' · ', ' · ')}</p>
            <p>
              Colegio cristiano privado en {d.barrio}, {d.municipio} ({d.departamento}). Preescolar y primaria, desde
              los 2 años hasta 3.º de primaria.
            </p>
            <p className={s.lema}>«{site.lema}»</p>
            <ul className={s.redes} aria-label="Redes sociales">
              <li>
                <EnlaceWhatsApp
                  origen={enInclusion ? 'pie-redes-inclusion' : 'pie-redes'}
                  mensaje={mensaje}
                  className={`${s.red} ${s.wa}`}
                  aria-label="WhatsApp"
                >
                  <IconoWhatsApp />
                </EnlaceWhatsApp>
              </li>
              <li>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener"
                  className={`${s.red} ${s.ig}`}
                  aria-label={`Instagram ${site.instagramUsuario}`}
                >
                  <IconoInstagram />
                </a>
              </li>
              <li>
                <a href={site.facebook} target="_blank" rel="noopener" className={`${s.red} ${s.fb}`} aria-label="Facebook">
                  <IconoFacebook />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <nav aria-labelledby="pie-secciones" className={s.columna}>
          <h2 id="pie-secciones" className={s.tituloCol}>
            Secciones
          </h2>
          <ul>
            {enlaces.map((e) => (
              <li key={e.href}>
                <a href={e.href}>{e.texto}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={s.columna}>
          <h2 className={s.tituloCol}>Contacto</h2>
          <ul>
            <li>
              <EnlaceWhatsApp origen={enInclusion ? 'pie-inclusion' : 'pie'} mensaje={mensaje}>
                WhatsApp {telefono}
              </EnlaceWhatsApp>
            </li>
            <li>
              <a href={`mailto:${site.correo}`}>{site.correo}</a>
            </li>
            <li className={s.direccion}>
              {d.calle}, {d.barrio}, {d.municipio}
            </li>
            {site.mapaFicha && (
              <li>
                <a href={site.mapaFicha} target="_blank" rel="noopener">
                  Ver en Google Maps
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className={`contenedor ${s.base}`}>
        <p>© {site.nombre}</p>
        <a href="/privacidad/">Aviso de privacidad</a>
      </div>
    </footer>
  )
}
