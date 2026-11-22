import { CompartirPagina } from '../components/CompartirPagina'
import { IconoCasa, IconoCorazon, IconoGrupo } from '../components/Iconos'
import { Seo } from '../components/Seo'
import { blogPosts, type BlogPost } from '../data/blog'
import { site } from '../data/site'
import s from './Blog.module.css'

const iconos = { corazon: IconoCorazon, grupo: IconoGrupo, casa: IconoCasa }

export function TarjetaBlog({ post }: { post: BlogPost }) {
  const Icono = iconos[post.icono]
  return (
    <article className={`${s.tarjeta} ${s[post.color]}`}>
      <div className={s.tarjetaCabecera}>
        <span className={s.icono} aria-hidden="true"><Icono /></span>
        <p className={s.categoria}>{post.categoria}</p>
      </div>
      <div className={s.tarjetaCuerpo}>
        <h3>{post.titulo}</h3>
        <p>{post.descripcion}</p>
        <a className={s.leer} href={`/blog/${post.slug}/`} aria-label={`Leer: ${post.titulo}`}>Leer la guía</a>
      </div>
    </article>
  )
}

export default function Blog() {
  const titulo = 'Blog para familias | Shalom Kids'
  const descripcion = 'Guías prácticas para acompañar los primeros días de colegio, elegir preescolar o primaria y compartir el juego en casa.'
  return (
    <>
      <Seo
        ruta="/blog/"
        titulo={titulo}
        descripcion={descripcion}
        jsonLd={[{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: titulo,
          description: descripcion,
          inLanguage: 'es-CO',
          ...(site.url ? { url: `${site.url}/blog/` } : {}),
        }]}
      />
      <header className={`${s.portada} fondo-portada`}>
        <div className={`contenedor ${s.portadaInterior}`}>
          <p className={s.antetitulo}>El blog de Shalom Kids</p>
          <h1>Guías para acompañar la <em>vida escolar</em></h1>
          <p className={s.bajada}>Preguntas para elegir colegio, primeros días y juegos en casa. Un espacio para leer a tu ritmo y encontrar ideas que puedas llevar a la vida familiar.</p>
          <a href="#guias" className="btn btn-claro">Explorar las guías</a>
        </div>
      </header>
      <section id="guias" className={s.seccion} aria-labelledby="titulo-guias">
        <div className="contenedor">
          <div className={s.cabeceraSeccion}>
            <div>
              <p className={s.antetituloOscuro}>Para conversar en familia</p>
              <h2 id="titulo-guias">Una guía para cada <em>pregunta</em></h2>
            </div>
            <CompartirPagina titulo={titulo} ruta="/blog/" etiqueta="Compartir el blog" />
          </div>
          <div className={s.grid}>{blogPosts.map((post) => <TarjetaBlog key={post.slug} post={post} />)}</div>
        </div>
      </section>
      <section className={s.conocer} aria-labelledby="titulo-conocer">
        <div className={`contenedor ${s.conocerInterior}`}>
          <div>
            <p className={s.antetituloOscuro}>Conoce el colegio</p>
            <h2 id="titulo-conocer">La historia detrás de <em>Shalom</em></h2>
            <p>Descubre quiénes somos, qué significa nuestro nombre y los valores que compartimos con las familias.</p>
          </div>
          <a href="/nosotros/" className="btn btn-oscuro">Conocer Shalom Kids</a>
        </div>
      </section>
    </>
  )
}
