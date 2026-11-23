import { useState } from 'react'
import { mensajePrecalificador, site } from '../data/site'
import { EnlaceWhatsApp } from './EnlaceWhatsApp'
import { IconoWhatsApp } from './Iconos'
import s from './Precalificador.module.css'

/** Grados del rediseño de conversión (sección 7) y cómo se nombran dentro del mensaje */
const grados = [
  { id: 'parvulos', texto: 'Párvulos (2)', mensaje: 'párvulos (2 años)' },
  { id: 'prejardin', texto: 'Prejardín (3)', mensaje: 'prejardín (3 años)' },
  { id: 'jardin', texto: 'Jardín (4)', mensaje: 'jardín (4 años)' },
  { id: 'transicion', texto: 'Transición (5)', mensaje: 'transición (5 años)' },
  { id: 'primaria', texto: 'Primaria 1.º a 3.º (6 a 8)', mensaje: 'primaria, de 1.º a 3.º (6 a 8 años)' },
]

const opciones = [
  { id: 'esta-semana', texto: 'Agendar visita esta semana', mensaje: 'agendar una visita esta semana' },
  { id: 'proxima-semana', texto: 'Agendar la próxima semana', mensaje: 'agendar una visita la próxima semana' },
  { id: 'costos', texto: `Solo recibir costos ${site.matriculas.anio}`, mensaje: 'recibir primero la información, sin agendar visita todavía' },
]

/**
 * Pre-calificador de 2 clics (ajuste 13 del rediseño de conversión, 23 nov 2026): 1) el grado (botones con aria-pressed),
 * 2) cómo empezar (cada opción abre WhatsApp con el mensaje armado). No guarda nada ni envía datos a ningún
 * servidor: el mensaje solo existe en el enlace de wa.me, y a la medición (si algún día se activa) solo llega
 * el origen, nunca el grado (H13).
 */
export function Precalificador() {
  const [grado, setGrado] = useState<string | null>(null)
  const elegido = grados.find((g) => g.id === grado) ?? null

  return (
    <div className={s.caja}>
      <h3 id="titulo-precalificador">Recibe costos y disponibilidad por WhatsApp</h3>

      <div className={s.paso}>
        <p id="pregunta-grado" className={s.pregunta}>
          1. ¿Qué grado buscas?
        </p>
        <div role="group" aria-labelledby="pregunta-grado" className={s.opciones}>
          {grados.map((g) => (
            <button
              key={g.id}
              type="button"
              aria-pressed={grado === g.id}
              className={s.opcion}
              onClick={() => setGrado(grado === g.id ? null : g.id)}
            >
              {g.texto}
            </button>
          ))}
        </div>
      </div>

      <div className={s.paso}>
        <p id="pregunta-empezar" className={s.pregunta}>
          2. ¿Cómo prefieres empezar?
        </p>
        <p className={s.ayuda} id="ayuda-empezar">
          Al tocar una opción se abre WhatsApp con tu mensaje listo para enviar.
        </p>
        <ul aria-labelledby="pregunta-empezar" aria-describedby="ayuda-empezar" className={s.acciones}>
          {opciones.map((o) => (
            <li key={o.id}>
              <EnlaceWhatsApp
                origen="precalificador"
                mensaje={mensajePrecalificador(elegido?.mensaje ?? null, o.mensaje)}
                className={`btn btn-oscuro ${s.accion}`}
              >
                <IconoWhatsApp />
                {o.texto}
                <span className="sr-only">{elegido ? `, para ${elegido.mensaje}` : ''}, por WhatsApp</span>
              </EnlaceWhatsApp>
            </li>
          ))}
        </ul>
      </div>

      <p className={s.legal}>
        {site.tiempoRespuesta && <>Respuesta {site.tiempoRespuesta}. </>}
        Esta página no guarda tus respuestas: solo arma el mensaje. Al escribirnos, tus datos se tratan según nuestro{' '}
        <a href="/privacidad/">aviso de privacidad</a>.
      </p>
    </div>
  )
}
