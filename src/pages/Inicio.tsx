import { site } from '../data/site'
import { AntesDeElegir } from '../components/AntesDeElegir'
import { Familias } from '../components/Familias'
import { Hero } from '../components/Hero'
import { InclusionInicio } from '../components/InclusionInicio'
import { LlamadoFinal } from '../components/LlamadoFinal'
import { Metodo } from '../components/Metodo'
import { Niveles } from '../components/Niveles'
import { PreguntasFrecuentes } from '../components/PreguntasFrecuentes'
import { ProcesoMatricula } from '../components/ProcesoMatricula'
import { Seo } from '../components/Seo'
import { Ubicacion } from '../components/Ubicacion'
import { VacacionalDestacado } from '../components/VacacionalDestacado'
import { VidaShalom } from '../components/VidaShalom'

export default function Inicio() {
  return (
    <>
      {/* Ficha SEO del rediseño de conversión (23 nov 2026), sin «gratis» (ajuste 7) */}
      <Seo
        ruta="/"
        titulo="Colegio Cristiano en Los Robles, Soledad | Preescolar y Primaria | Shalom Kids"
        descripcion="Matrículas 2027 abiertas en Los Robles, Soledad. Colegio cristiano con grupos pequeños de 2 años a 3.º de primaria, inglés, cámaras e inclusión. Agenda tu visita."
        datosColegio
      />
      {/* Rediseño de conversión (23 nov 2026): portada → alivio de miedos → método → niveles → inclusión → comunidad →
          matrícula 2027 → preguntas → ubicación → cierre */}
      <Hero />
      <AntesDeElegir />
      <Metodo />
      <Niveles />
      <InclusionInicio />
      <Familias />
      <VidaShalom
        titulo={<>Vive un día en Shalom <em>antes de visitarnos</em></>}
        intro={`Mira nuestras sonrisas, proyectos y celebraciones reales en Instagram ${site.instagramUsuario}.`}
        enlaceTexto={`Ver reels reales en Instagram ${site.instagramUsuario}`}
      />
      {site.mostrarVacacional && <VacacionalDestacado />}
      <ProcesoMatricula />
      <PreguntasFrecuentes />
      <Ubicacion />
      <LlamadoFinal />
    </>
  )
}
