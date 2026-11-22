import { useEffect, useRef, useState, type ReactNode } from 'react'
import { site, type PublicacionInstagram } from '../data/site'
import { registrar } from '../lib/analytics'
import { IconoInstagram } from './Iconos'
import { Pendiente } from './Pendiente'
import { TituloSeccion } from './TituloSeccion'
import s from './VidaShalom.module.css'

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } }
  }
}

let scriptPedido = false
function cargarEmbedInstagram() {
  if (window.instgrm) {
    window.instgrm.Embeds.process()
    return
  }
  if (scriptPedido) return
  scriptPedido = true
  const sc = document.createElement('script')
  sc.async = true
  sc.src = 'https://www.instagram.com/embed.js'
  document.body.appendChild(sc)
}

/**
 * Publicación de Instagram con «fachada»: no carga nada de Instagram
 * hasta que la persona la toca. Así la página sigue rápida en celular.
 */
function Publicacion({ p, i }: { p: PublicacionInstagram; i: number }) {
  const [abierta, setAbierta] = useState(false)

  /* I-8 (22 nov 2026): debajo de cada reel, el título y una línea de lo que vivieron los niños */
  return (
    <figure className={`${s.item} ${abierta ? s.itemAbierto : ''}`}>
      <Contenido p={p} i={i} abierta={abierta} abrir={() => setAbierta(true)} />
      {p.pie && !abierta && <figcaption className={s.pie}>{p.pie}</figcaption>}
    </figure>
  )
}

function Contenido({ p, i, abierta, abrir }: { p: PublicacionInstagram; i: number; abierta: boolean; abrir: () => void }) {
  const embed = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!abierta) return
    cargarEmbedInstagram()
    /* H24: el botón desaparece al abrir; el foco pasa al reel para no perder la posición */
    embed.current?.focus()
  }, [abierta])

  if (abierta) {
    return (
      <div className={s.embed} ref={embed} tabIndex={-1} role="region" aria-label={`Reel: ${p.titulo}`}>
        <blockquote className="instagram-media" data-instgrm-permalink={p.url} data-instgrm-version="14">
          <a href={p.url} target="_blank" rel="noopener">
            Ver en Instagram: {p.titulo}
          </a>
        </blockquote>
      </div>
    )
  }

  if (p.portada) {
    return (
      <button type="button" className={s.portada} onClick={abrir} aria-label={`Ver el reel: ${p.titulo}`}>
        <img src={p.portada} alt="" width={480} height={853} loading="lazy" decoding="async" />
        <span className={s.play} aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M8 5.5v13l11-6.5z" fill="currentColor" />
          </svg>
        </span>
        <span className={s.pTexto}>
          <span className={s.pTitulo}>{p.titulo}</span>
          <span className={s.pAccion}>
            <IconoInstagram /> Ver reel
          </span>
        </span>
      </button>
    )
  }

  return (
    <button type="button" className={`${s.fachada} ${s[`c${i % 4}`]}`} onClick={abrir}>
      <IconoInstagram />
      <span className={s.fTitulo}>{p.titulo}</span>
      <span className={s.fAccion}>Ver publicación</span>
    </button>
  )
}

interface Props {
  pagina?: 'inicio' | 'vacacionales'
  titulo?: ReactNode
  intro?: ReactNode
}

export function VidaShalom({
  pagina = 'inicio',
  titulo = <>Momentos que compartimos con las <em>familias</em></>,
  intro = `Así vivimos la clausura, el Día de la Biblia y otras celebraciones. Puedes ver más en Instagram ${site.instagramUsuario}.`,
}: Props) {
  const posts = site.publicacionesInstagram.filter((p) => (p.pagina ?? 'inicio') === pagina)

  return (
    <section id="vida-shalom" className={s.seccion} aria-labelledby="titulo-vida">
      <div className="contenedor">
        <TituloSeccion
          id="titulo-vida"
          antetitulo="Vida en Shalom"
          titulo={titulo}
          intro={intro}
          color="morado"
        />

        {posts.length > 0 ? (
          <>
            <div className={s.grid}>
              {posts.map((p, i) => (
                <Publicacion key={p.url} p={p} i={i} />
              ))}
            </div>
            <p className={s.nota}>Publicamos fotos y videos de los niños con la autorización de sus familias.</p>
          </>
        ) : (
          <p className={s.vacio}>
            <Pendiente>enlaces de publicaciones de Instagram</Pendiente>
          </p>
        )}

        {/* H27: salida a Instagram como enlace de texto, no como botón */}
        <a
          href={site.instagram}
          target="_blank"
          rel="noopener"
          className={s.seguir}
          onClick={() => registrar('instagram_click', { origen: `vida-shalom-${pagina}` })}
        >
          <IconoInstagram />
          Ver más en Instagram
        </a>
      </div>
    </section>
  )
}
