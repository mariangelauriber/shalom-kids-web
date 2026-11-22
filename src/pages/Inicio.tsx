import { alcanceInclusion } from '../data/contenido'
import { site } from '../data/site'
import { AntesDeElegir } from '../components/AntesDeElegir'
import { Hero } from '../components/Hero'
import { Familias } from '../components/Familias'
import { LlamadoFinal } from '../components/LlamadoFinal'
import { Metodo } from '../components/Metodo'
import { Niveles } from '../components/Niveles'
import { PreguntasFrecuentes } from '../components/PreguntasFrecuentes'
import { ProcesoMatricula } from '../components/ProcesoMatricula'
import { Seo } from '../components/Seo'
import { TituloSeccion } from '../components/TituloSeccion'
import { Ubicacion } from '../components/Ubicacion'
import { UnDia } from '../components/UnDia'
import { VacacionalDestacado } from '../components/VacacionalDestacado'
import { VidaShalom } from '../components/VidaShalom'
import s from './Inicio.module.css'

export default function Inicio() {
  return (
    <>
      <Seo
        ruta="/"
        titulo="Colegio cristiano, preescolar y primaria en Soledad | Shalom Kids"
        descripcion="Colegio cristiano en Los Robles, Soledad: preescolar desde los 2 años y primaria hasta 3.º, en grupos pequeños. Agenda una visita."
        datosColegio
      />
      {/* Storytelling (22 nov 2026): duda → guía (sabiduría, amor) → plan → prueba → familia (paz) → visita */}
      <Hero />
      <AntesDeElegir />
      <Metodo />
      <Niveles />
      <UnDia />
      {site.mostrarVacacional && <VacacionalDestacado />}
      <ProcesoMatricula />
      <section className={s.inclusion} aria-labelledby="titulo-inclusion-inicio">
        <div className={`contenedor ${s.inclusionContenido}`}>
          <TituloSeccion
            id="titulo-inclusion-inicio"
            antetitulo="Inclusión escolar"
            titulo={<>Cada niño aprende a su <em>ritmo</em></>}
            intro={`Recibimos ${alcanceInclusion}. Para empezar no necesitas un diagnóstico: conversamos contigo en una entrevista y acordamos los apoyos que necesita.`}
            color="morado"
          />
          <a className="btn btn-borde" href="/inclusion/#proceso">Así acompañamos a cada niño</a>
        </div>
      </section>
      <VidaShalom />
      <Familias />
      <PreguntasFrecuentes />
      <Ubicacion />
      <LlamadoFinal />
    </>
  )
}
