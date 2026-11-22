/**
 * Vacacional de nivelación y preparación (modelo aprobado el 10 nov 2026).
 * Lo que vale `null` o lleva `pendiente` se muestra como [PENDIENTE].
 */
import type { Pregunta } from './contenido'

export const vacacional = {
  nombre: 'Vacacional de nivelación y preparación',
  mensajeWhatsApp: 'Hola, quiero información del VACACIONAL de nivelación y preparación.',
  /** Fechas, p. ej. «del 1 al 19 de diciembre de 2026» — PENDIENTE */
  fechas: null as string | null,
  /** Horario, p. ej. «lunes a viernes, de 8:00 a.m. a 12:00 m.» — PENDIENTE */
  horario: null as string | null,
  /** ¿Reciben niños de otros colegios? — PENDIENTE */
  abiertoOtrosColegios: null as boolean | null,
}

export interface GrupoVacacional {
  nombre: string
  para: string
  texto: string
  temas: string[]
  color: 'naranja' | 'turquesa' | 'morado'
}

export const gruposVacacional: GrupoVacacional[] = [
  {
    nombre: 'Primeros pasos',
    para: 'Para quienes empiezan párvulos, prejardín o jardín (desde los 2 años)',
    texto:
      'Conocen la rutina del colegio, amplían su lenguaje, trabajan la motricidad y aprenden a compartir. Así llegan tranquilos a su primer día.',
    temas: ['Rutinas y autonomía', 'Lenguaje y cuentos', 'Motricidad fina y gruesa'],
    color: 'naranja',
  },
  {
    nombre: 'Listos para leer',
    para: 'Para quienes pasan a transición o a 1.º',
    texto:
      'Preparan la lectura y la escritura con trazos, sonidos y juegos, y practican el conteo y los números.',
    temas: ['Trazos y sonidos', 'Conteo y números', 'Atención y escucha'],
    color: 'turquesa',
  },
  {
    nombre: 'Nivelación primaria',
    para: 'Para quienes pasan a 2.º o a 3.º',
    texto:
      'Refuerzan lo que les costó y adelantan lo que verán en el próximo grado: lectura comprensiva, escritura y operaciones.',
    temas: ['Lectura comprensiva', 'Escritura', 'Suma, resta y multiplicación'],
    color: 'morado',
  },
]

export const metodoVacacional = [
  { titulo: 'Diagnóstico inicial', texto: 'Vemos en qué va tu hijo para saber qué reforzar.' },
  { titulo: 'Grupos pequeños', texto: 'Cada niño recibe atención personal.' },
  { titulo: 'Aprender jugando', texto: 'Juegos, canciones y material concreto para que aprender sea divertido.' },
  { titulo: 'Informe a la familia', texto: 'Al terminar te contamos sus avances y qué seguir practicando en casa.' },
]

export const preguntasVacacional: Pregunta[] = [
  {
    pregunta: '¿Para qué edades es?',
    respuesta: 'Desde los 2 años, para los que empiezan prejardín, hasta los niños que pasan a 3.º de primaria.',
  },
  {
    pregunta: '¿Cuándo es y en qué horario?',
    respuesta: '',
    pendiente: 'fechas y horario del vacacional',
  },
  {
    pregunta: '¿Pueden ir niños que no estudian en Shalom?',
    respuesta: '',
    pendiente: 'confirmar si reciben niños de otros colegios',
  },
  {
    pregunta: '¿Sirve si a mi hijo le va bien en el colegio?',
    respuesta:
      'Sí. Además de reforzar, adelantamos lo que verá en el siguiente grado para que empiece el año con seguridad.',
  },
  {
    pregunta: '¿Cuánto cuesta?',
    respuesta: 'Te compartimos el valor en privado por WhatsApp.',
  },
  {
    pregunta: '¿Cómo lo inscribo?',
    respuesta: 'Escríbenos por WhatsApp o llena el formulario de esta página y te confirmamos la inscripción.',
  },
]
