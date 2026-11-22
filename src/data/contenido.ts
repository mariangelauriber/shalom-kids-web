/**
 * Datos y textos de base aprobados el 10 y el 18 nov 2026. Lo que falta va en `pendiente`
 * y se muestra como [PENDIENTE: …] en la web.
 *
 * Manual v3 + decisiones del 18 nov: los horarios exactos y la lista de documentos
 * se comparten en privado por WhatsApp.
 */

export interface Grado {
  nombre: string
  corto: string
  /** Logros del grado (DBA y Bases curriculares del MEN); null = pendiente */
  logros: string | null
  /** Edad de referencia para entrar al grado (la misma de la Secretaría de Educación; respuesta del colegio, 22 nov 2026) */
  edad: string
}

/** Ingreso y oferta 2027 (dato del colegio, 10 y 18 nov 2026): desde los 2 años (párvulos) hasta 3.º; no hay 4.º en 2027 */
export const ingreso = {
  edadMinima: '2 años',
  gradoMaximo: '3.º de primaria',
}

/** Datos confirmados por el colegio el 18 nov 2026. Sin nombres de personas en la web (seguridad, pedido del colegio). */
export const colegio = {
  /** Año de inicio del estudio con los niños de los vacacionales (PEI 2015) */
  origen: 2012,
  /** «Hace 7 años» (respuesta del 18 nov 2026) */
  enLosRoblesDesde: 2019,
}

/** Servicios vigentes (confirmado el 18 nov 2026) */
export const servicios = [
  'Énfasis en inglés',
  'Música, deporte y arte',
  'Psicología',
  'Servicio de alimentación',
  'Cámaras en las aulas',
]

export const preescolar: Grado[] = [
  {
    nombre: 'Párvulos',
    edad: '2 años',
    corto: 'P',
    logros: 'Se adapta con confianza a su salón, aprende rutinas sencillas y se comunica con palabras, gestos y juego.',
  },
  {
    nombre: 'Prejardín',
    edad: '3 años',
    corto: 'PJ',
    logros: 'Explora con los sentidos, amplía su lenguaje y aprende a convivir y a expresar lo que siente.',
  },
  {
    nombre: 'Jardín',
    edad: '4 años',
    corto: 'J',
    logros: 'Se expresa con más claridad, reconoce colores, formas y números, y gana autonomía en sus rutinas.',
  },
  {
    nombre: 'Transición',
    edad: '5 años',
    corto: 'T',
    logros: 'Se prepara para leer y escribir, cuenta y compara cantidades y fortalece su motricidad fina.',
  },
]

export const primaria: Grado[] = [
  { nombre: 'Primero', corto: '1.º', edad: '6 años', logros: 'Lee y escribe sus primeros textos y aprende a sumar y restar.' },
  {
    nombre: 'Segundo',
    corto: '2.º',
    edad: '7 años',
    logros: 'Lee con más fluidez, escribe oraciones completas y resuelve problemas de suma y resta.',
  },
  {
    nombre: 'Tercero',
    corto: '3.º',
    edad: '8 años',
    logros: 'Comprende lo que lee, escribe textos cortos y empieza a multiplicar y dividir.',
  },
]

export interface Tarjeta {
  titulo: string
  texto: string
}

/** Método «Juega, construye y aprende» (lema del PEI 2015, aprobado para 2027 el 18 nov 2026) */
export const metodo: Tarjeta[] = [
  {
    titulo: 'Juega para explorar',
    texto:
      'El juego es su idioma. Lo usamos con intención: para hablar, contar, compartir y moverse.',
  },
  {
    titulo: 'Construye a partir de sus preguntas',
    texto:
      'Cada bimestre, un proyecto nace de sus preguntas: ¿cómo vivían los dinosaurios?, ¿qué hace un médico o un bombero? Investigan, crean y lo cuentan.',
  },
  {
    titulo: 'Aprende a leer, escribir y contar',
    texto:
      'Leen, escriben y cuentan con los aprendizajes que pide el Ministerio de Educación, con énfasis en inglés.',
  },
  {
    titulo: 'Con el lenguaje del amor',
    texto:
      'Oración cada mañana, un valor cada mes y maestras que conocen a cada niño por su nombre. Así se aprende con confianza.',
  },
]

/** Qué significa Shalom (aprobado el 18 nov 2026) */
export const significadoShalom =
  'Shalom es una palabra hebrea que significa paz: una paz completa, de bienestar. Por eso nos llamamos Shalom Kids: queremos niños en paz y felices.'

/**
 * I-2 «Antes de elegir colegio» (storytelling aprobado el 22 nov 2026): las dudas de la familia
 * y lo que hace Shalom con cada una, solo con hechos confirmados.
 */
export const dudasFamilia: Tarjeta[] = [
  {
    titulo: '¿Lo van a conocer de verdad?',
    texto:
      'Trabajamos con grupos pequeños para que la maestra conozca a cada niño por su nombre y lo acompañe de cerca. Además, nos reunimos contigo periódicamente para revisar cómo avanza.',
  },
  {
    titulo: '¿Va a estar seguro y bien cuidado?',
    texto:
      'Tenemos cámaras en las aulas, psicología y servicio de alimentación. Los primeros días lo recibimos con calma y paciencia, aunque llore.',
  },
  {
    titulo: '¿Va a aprender lo que necesita?',
    texto:
      'Aprende jugando, con un proyecto cada bimestre, y avanza en lectura, escritura y matemáticas según lo que pide el Ministerio de Educación, con énfasis en inglés.',
  },
  {
    titulo: '¿Y si su ritmo es distinto?',
    texto:
      'Cada niño aprende a su manera. Si el tuyo necesita apoyos, conversamos contigo en una entrevista y acordamos juntos lo que necesita para participar y aprender con su grupo.',
  },
]

/** Alcance de la inclusión (respuesta del colegio, 22 nov 2026). El cupo por grupo se consulta en privado por WhatsApp. */
export const alcanceInclusion = 'niños con discapacidad, autismo, TDAH, dificultades de aprendizaje y otros ritmos'

/** Lo que viven las familias (solo hechos confirmados; la escuela de padres no se menciona) */
export const familias: Tarjeta[] = [
  { titulo: 'Reuniones periódicas', texto: 'Nos sentamos contigo a revisar cómo avanza y qué sigue.' },
  { titulo: 'Un valor cada mes', texto: 'Lo trabajamos en el aula para que también se viva en casa.' },
  { titulo: 'Fechas para celebrar', texto: 'Clausuras, el Día de la Biblia y otros días especiales que vivimos con las familias.' },
]

export interface Momento {
  titulo: string
  texto: string
}

/** Escenas basadas en el método y los servicios confirmados, sin fijar una rutina. */
export const momentos: Momento[] = [
  {
    titulo: 'Una oración al empezar la mañana',
    texto: 'Comenzamos dando gracias a Dios. Cada mes trabajamos un valor que las familias pueden conversar también en casa.',
  },
  {
    titulo: 'Una pregunta que se vuelve proyecto',
    texto: 'Un tema como los dinosaurios o las profesiones da pie a investigar, crear y contar al grupo lo que descubrieron.',
  },
  {
    titulo: 'Espacios para crear y moverse',
    texto: 'Música, arte y deporte hacen parte de la propuesta escolar, junto con los aprendizajes del aula.',
  },
]

export interface Paso {
  titulo: string
  texto: string | null
  pendiente?: string
}

/** I-6 (22 nov 2026): tres pasos, y el primero es conocernos */
export const pasosMatricula: Paso[] = [
  {
    titulo: 'Escríbenos y agenda tu visita',
    texto: 'Cuéntanos la edad de tu hijo o el grado que buscas. Te orientamos sobre el proceso y te compartimos los costos en privado.',
  },
  {
    titulo: 'Conoce el colegio',
    texto: 'Ven con tu hijo a conocer los salones y a las maestras, y trae todas tus preguntas.',
  },
  {
    titulo: 'Pide el formulario de matrícula',
    texto: 'Te lo enviamos por WhatsApp junto con la lista de documentos del grado.',
  },
]

export interface Pregunta {
  pregunta: string
  /** Respuesta confirmada (puede estar vacía si todo está pendiente) */
  respuesta: string
  pendiente?: string
  /** H12: frase que solo se muestra mientras la renovación siga abierta (después del 30 nov 2026 no se dice nada) */
  soloDuranteRenovacion?: string
  /** Enlace que se muestra después de la respuesta (no va en los datos para Google) */
  enlace?: { href: string; texto: string }
}

/** Respuesta completa, con la frase de renovación solo si sigue vigente */
export function textoRespuesta(p: Pregunta, renovacionVigente: boolean): string {
  return renovacionVigente && p.soloDuranteRenovacion ? `${p.respuesta} ${p.soloDuranteRenovacion}` : p.respuesta
}

/**
 * Preguntas frecuentes (copy elevado aprobado el 18 nov 2026; ajustado el mismo día): 15, en el orden en que piensa una familia.
 * Cada respuesta se entiende sola, para que Google y las IA puedan citarla. Sin «¿Es bilingüe?» (decisión del usuario).
 */
export const preguntas: Pregunta[] = [
  {
    pregunta: '¿Shalom Kids es un colegio cristiano?',
    respuesta:
      'Sí. Somos un colegio cristiano en Los Robles, Soledad: oramos cada mañana, trabajamos un valor cada mes y educamos con el lenguaje del amor y la sabiduría de Dios.',
  },
  {
    pregunta: '¿Qué significa Shalom?',
    respuesta:
      significadoShalom,
  },
  {
    pregunta: '¿Tienen jardín infantil y primaria?',
    respuesta:
      'Sí. En preescolar (jardín infantil): párvulos desde los 2 años, prejardín, jardín y transición. En primaria: de 1.º a 3.º.',
  },
  {
    pregunta: '¿Reciben niños de 2 años?',
    respuesta:
      `Sí, desde los ${ingreso.edadMinima}, en párvulos. Tu hijo puede seguir con nosotros hasta ${ingreso.gradoMaximo}, sin cambiar de colegio.`,
  },
  {
    pregunta: '¿En qué grado entra mi hijo?',
    respuesta: `Depende de su edad. Como referencia, según la Secretaría de Educación: ${[...preescolar, ...primaria]
      .map((g) => `${g.nombre.toLowerCase()}, ${g.edad}`)
      .join('; ')}. Escríbenos con la fecha de nacimiento de tu hijo y te confirmamos el grado.`,
  },
  {
    pregunta: '¿Es un colegio privado?',
    respuesta:
      'Sí, es un colegio privado. Los costos de matrícula y pensión te los compartimos por WhatsApp.',
  },
  {
    pregunta: '¿Cuánto cuesta?',
    respuesta:
      'Consulta por WhatsApp los costos de matrícula y pensión del grado que te interesa.',
  },
  {
    pregunta: '¿Cuántos niños hay por salón?',
    respuesta:
      'Trabajamos con grupos pequeños, para que la maestra conozca a cada niño y le dé atención personal.',
  },
  {
    pregunta: '¿Reciben niños que necesitan apoyos o tienen una discapacidad?',
    respuesta: `Sí. Recibimos ${alcanceInclusion}. Conversamos contigo en una entrevista y acordamos los apoyos que necesita para participar y aprender con su grupo. Para empezar no necesitas un diagnóstico. La matrícula depende de que haya cupo en el grupo; consúltalo en privado por WhatsApp.`,
    enlace: { href: '/inclusion/', texto: 'Lee más en nuestra página de inclusión' },
  },
  {
    pregunta: '¿Cómo aprenden los niños?',
    respuesta:
      'Con nuestro método «Juega, construye y aprende»: el juego es la base y cada bimestre investigan un proyecto que nace de sus preguntas. Así avanzan en lectura, escritura y matemáticas, con oración y valores cada día.',
  },
  {
    pregunta: '¿Enseñan inglés?',
    respuesta:
      'Sí, tenemos énfasis en inglés. Escríbenos por WhatsApp y te contamos cómo lo trabajamos en el grado de tu hijo.',
  },
  {
    pregunta: '¿Tienen servicio de alimentación?',
    respuesta:
      'Sí, tenemos servicio de alimentación. También contamos con psicología, cámaras en las aulas y clases de música, deporte y arte.',
  },
  {
    pregunta: '¿Cuál es el horario?',
    respuesta:
      'Tenemos jornada diurna, de lunes a viernes. Consulta por WhatsApp el horario del grado que te interesa.',
  },
  {
    pregunta: '¿Qué calendario manejan?',
    respuesta:
      'Calendario A: el año escolar empieza a finales de enero.',
  },
  {
    pregunta: '¿Y si mi hijo llora los primeros días?',
    respuesta:
      'Es normal y lo acompañamos con paciencia. Los primeros días la maestra recibe a tu hijo con calma, le presenta su salón y a sus compañeros, y te cuenta cómo va. Si hace falta, acordamos contigo cómo hacer más tranquila la llegada.',
  },
  {
    pregunta: '¿Puedo conocer el colegio antes de matricular?',
    respuesta:
      'Sí, y te lo recomendamos. Escríbenos por WhatsApp, agendamos tu visita y conoces los salones y a las maestras.',
  },
  {
    pregunta: '¿Hasta cuándo hay matrículas?',
    respuesta:
      'Las matrículas 2027 están abiertas hasta el inicio de clases, a finales de enero de 2027.',
    soloDuranteRenovacion: 'Si ya eres familia Shalom, renueva hasta el 30 de noviembre de 2026.',
  },
]

/** INC-10: preguntas sobre inclusión (decisiones del 22 nov 2026: sin PIAR, sin terapias, sin citar el Decreto 1421) */
export const preguntasInclusion: Pregunta[] = [
  {
    pregunta: '¿Le pueden negar el cupo a mi hijo por tener una discapacidad?',
    respuesta: `No. Recibimos ${alcanceInclusion}. La matrícula depende de que haya cupo en el grupo; consúltalo en privado por WhatsApp.`,
  },
  {
    pregunta: '¿Necesito un diagnóstico para empezar?',
    respuesta:
      'No. Los apoyos dependen de lo que a tu hijo le cuesta para participar y aprender, no de un diagnóstico médico. Si ya tienes uno, nos ayuda a conocerlo mejor.',
  },
  {
    pregunta: '¿Cómo cuidan la información de salud de mi hijo?',
    respuesta:
      'Es información sensible y compartirla es voluntario. Solo la usamos para acompañarlo, con tu autorización, según la Ley 1581 de 2012 y nuestro aviso de privacidad. Por eso te pedimos no enviarla por WhatsApp: si decides compartirla, la revisamos contigo en persona.',
    enlace: { href: '/privacidad/', texto: 'Lee el aviso de privacidad' },
  },
  {
    pregunta: '¿La inclusión tiene un costo adicional?',
    respuesta: 'Los costos te los compartimos en privado por WhatsApp.',
  },
]
