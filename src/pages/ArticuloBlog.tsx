import { CompartirPagina } from '../components/CompartirPagina'
import { EnlaceWhatsApp } from '../components/EnlaceWhatsApp'
import { IconoWhatsApp } from '../components/Iconos'
import { Seo } from '../components/Seo'
import { blogPosts } from '../data/blog'
import { rotuloVisita, site } from '../data/site'
import { TarjetaBlog } from './Blog'
import s from './Blog.module.css'

export default function ArticuloBlog({ slug }: { slug: string }) {
  const post = blogPosts.find((articulo) => articulo.slug === slug)
  if (!post) {
    return (
      <section className={`contenedor ${s.seccion}`}>
        <Seo ruta="/blog/" titulo="Guía no encontrada | Shalom Kids" descripcion="Explora las guías para familias de Shalom Kids." noIndexar />
        <h1>No encontramos esa guía</h1>
        <p><a href="/blog/">Ver las guías para familias</a></p>
      </section>
    )
  }

  const ruta = `/blog/${post.slug}/`
  /* H32: los títulos largos no llevan la marca al final, para no pasar de unos 65 caracteres */
  const tituloPagina = post.titulo.length + ' | Shalom Kids'.length <= 65 ? `${post.titulo} | Shalom Kids` : post.titulo
  const relacionados = blogPosts.filter((articulo) => articulo.slug !== slug)
  const jsonLd: Record<string, unknown>[] = [{
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.titulo,
    description: post.descripcion,
    articleSection: post.categoria,
    inLanguage: 'es-CO',
    author: { '@type': 'Organization', name: site.nombre },
    publisher: {
      '@type': 'Organization',
      name: site.nombre,
      ...(site.url ? { url: site.url, logo: { '@type': 'ImageObject', url: `${site.url}/img/sello.webp` } } : {}),
    },
    ...(site.url ? { url: `${site.url}${ruta}`, mainEntityOfPage: `${site.url}${ruta}` } : {}),
  }]
  if (site.url) {
    jsonLd.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${site.url}/` },
        { '@type': 'ListItem', position: 2, name: 'Blog para familias', item: `${site.url}/blog/` },
        { '@type': 'ListItem', position: 3, name: post.titulo, item: `${site.url}${ruta}` },
      ],
    })
  }

  return (
    <>
      <Seo ruta={ruta} titulo={tituloPagina} descripcion={post.descripcion} tipo="article" jsonLd={jsonLd} />
      <article>
        <header className={`${s.articuloPortada} ${s[post.color]}`}>
          <div className={`contenedor ${s.articuloCabecera}`}>
            <nav className={s.migas} aria-label="Ruta de navegación">
              <a href="/">Inicio</a><span aria-hidden="true">/</span><a href="/blog/">Blog para familias</a>
            </nav>
            <p className={s.categoria}>{post.categoria}</p>
            <h1>{post.titulo}</h1>
            <p className={s.articuloDescripcion}>{post.descripcion}</p>
            <CompartirPagina titulo={post.titulo} ruta={ruta} etiqueta="Compartir esta guía" />
          </div>
        </header>
        <div className={`contenedor ${s.lectura}`}>
          <aside className={s.indice}>
            <nav aria-labelledby="titulo-indice">
              <h2 id="titulo-indice">En esta guía</h2>
              <ul>{post.secciones.map((seccion) => <li key={seccion.id}><a href={`#${seccion.id}`}>{seccion.titulo}</a></li>)}</ul>
            </nav>
          </aside>
          <div className={s.texto}>
            <div className={s.introduccion}>{post.intro.map((parrafo) => <p key={parrafo}>{parrafo}</p>)}</div>
            <div className={`${s.idea} ${s[post.color]}`}>
              <h2>{post.idea.titulo}</h2>
              <p>{post.idea.texto}</p>
            </div>
            {post.secciones.map((seccion) => (
              <section key={seccion.id} id={seccion.id} className={s.bloque} aria-labelledby={`titulo-${seccion.id}`}>
                <h2 id={`titulo-${seccion.id}`}>{seccion.titulo}</h2>
                {seccion.parrafos?.map((parrafo) => <p key={parrafo}>{parrafo}</p>)}
                {seccion.lista && <ul>{seccion.lista.map((item) => <li key={item}>{item}</li>)}</ul>}
                {seccion.subsecciones?.map((subseccion) => <div key={subseccion.titulo} className={s.subseccion}><h3>{subseccion.titulo}</h3><p>{subseccion.texto}</p></div>)}
                {seccion.enlaces && <ul className={s.enlaces}>{seccion.enlaces.map((enlace) => <li key={enlace.href}><a href={enlace.href}>{enlace.texto}</a></li>)}</ul>}
              </section>
            ))}
            <div className={s.compartirFinal}>
              <p>¿Esta guía puede servirle a otra familia?</p>
              <CompartirPagina titulo={post.titulo} ruta={ruta} etiqueta="Compartir esta guía" />
            </div>
          </div>
        </div>
      </article>
      <section className={s.contacto} aria-labelledby="titulo-contacto-blog">
        <div className={`contenedor ${s.contactoInterior}`}>
          <div><h2 id="titulo-contacto-blog">{post.cta.titulo}</h2><p>{post.cta.texto}</p></div>
          <EnlaceWhatsApp origen={`blog-${post.slug}`} className="btn btn-primario"><IconoWhatsApp />{rotuloVisita}</EnlaceWhatsApp>
        </div>
      </section>
      <section className={s.seccion} aria-labelledby="titulo-relacionados">
        <div className="contenedor">
          <div className={s.cabeceraSeccion}><h2 id="titulo-relacionados">Para seguir <em>leyendo</em></h2><a href="/blog/">Todas las guías</a></div>
          <div className={`${s.grid} ${s.relacionados}`}>{relacionados.map((articulo) => <TarjetaBlog key={articulo.slug} post={articulo} />)}</div>
        </div>
      </section>
    </>
  )
}
