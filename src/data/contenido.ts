/**
 * Datos y textos de base aprobados el 10 y el 18 nov 2026, con el storytelling del 22 nov y el rediseño de conversión del 23 nov 2026
 * (sus «Ajustes aprobados» mandan sobre el texto original). Lo que falta va en `pendiente`
 * y se muestra como [PENDIENTE: …] en la web.
 *
 * Manual v3 + decisiones del 18 nov: los horarios exactos, los costos y la lista de documentos
 * se comparten en privado por WhatsApp.
 */

export interface Grado {
  nombre: string
  corto: string
  /** Logros del grado (DBA y Bases curriculares del MEN; textos del rediseño de conversión, ajuste 16); null = pendiente */
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

/** Rediseño de conversión, sección 4: complementos de la jornada diurna (los mismos servicios, con el texto aprobado) */
export const complementos = [
  'Énfasis en inglés integrado a cada grado',
  'Música, arte y deporte cada semana',
  'Psicología escolar para el bienestar de los niños',
  'Servicio de alimentación',
  'Cámaras en las aulas',
]

export const preescolar: Grado[] = [
  {
    nombre: 'Párvulos',
    edad: '2 años',
    corto: 'P',
    logros: 'Gana confianza en su salón, adopta rutinas tranquilas y se comunica con palabras, gestos y juego.',
  },
  {
    nombre: 'Prejardín',
    edad: '3 años',
    corto: 'PJ',
    logros: 'Explora con sus sentidos, amplía su vocabulario y aprende a nombrar lo que siente al compartir con amigos.',
  },
  {
    nombre: 'Jardín',
    edad: '4 años',
    corto: 'J',
    logros: 'Se expresa con mayor claridad, domina colores, formas y números, y gana autonomía en sus hábitos diarios.',
  },
  {
    nombre: 'Transición',
    edad: '5 años',
    corto: 'T',
    logros: 'Se alista para leer y escribir, compara cantidades y fortalece su motricidad fina para llegar seguro a primaria.',
  },
]

export const primaria: Grado[] = [
  {
    nombre: 'Primero',
    corto: '1.º',
    edad: '6 años',
    logros: 'Da el gran salto: lee y escribe sus primeros textos propios y domina sumas y restas.',
  },
  {
    nombre: 'Segundo',
    corto: '2.º',
    edad: '7 años',
    logros: 'Lee con fluidez, redacta oraciones completas y resuelve problemas cotidianos de suma y resta.',
  },
  {
    nombre: 'Tercero',
    corto: '3.º',
    edad: '8 años',
    logros: 'Comprende a profundidad lo que lee, redacta textos cortos con estructura y domina las bases de la multiplicación y la división.',
  },
]

/** Rediseño de conversión, sección 4: pestañas de niveles con su promesa */
export const etapas = [
  { id: 'preescolar', nombre: 'Preescolar', edades: '2 a 5 años', promesa: 'Seguridad, lenguaje y amor por el aula', grados: preescolar },
  { id: 'primaria', nombre: 'Primaria', edades: '6 a 8 años', promesa: 'Lectura fluida, pensamiento lógico y autonomía', grados: primaria },
]

export interface Tarjeta {
  titulo: string
  texto: string
}

/**
 * Método «Juega, construye y aprende» (lema del PEI 2015, aprobado para 2027 el 18 nov 2026),
 * con los tres pilares del rediseño de conversión (sección 3).
 */
export const metodo: Tarjeta[] = [
  {
    titulo: 'Juega con intención pedagógica',
    texto:
      'El juego es su primer idioma. Cada dinámica en el aula fortalece vocabulario, motricidad, conteo, escucha y convivencia sana.',
  },
  {
    titulo: 'Construye proyectos que nacen de su curiosidad',
    texto:
      'Cada bimestre el salón se vuelve un laboratorio vivo: ¿cómo vivían los dinosaurios?, ¿qué hace un médico o un bombero? Investigan, crean con sus manos y exponen con orgullo lo que aprendieron.',
  },
  {
    titulo: 'Consolida lectura, escritura, matemáticas e inglés',
    texto:
      'Seguimos paso a paso las Bases Curriculares y los DBA del Ministerio de Educación, e integramos el inglés de forma natural en cada grado.',
  },
]

/** Qué significa Shalom (aprobado el 18 nov 2026) */
export const significadoShalom =
  'Shalom es una palabra hebrea que significa paz: una paz completa, de bienestar. Por eso nos llamamos Shalom Kids: queremos niños en paz y felices.'

/**
 * Rediseño de conversión, sección 2 (ajuste 6): «Así es el ingreso en Shalom», solo en positivo y sin comparar con otros colegios.
 * Ajuste 7: sin «sin costo» ni «gratis».
 */
export const ingresoShalom: Tarjeta[] = [
  {
    titulo: 'Primero nos visitas; después decides',
    texto: 'Vienes con tu hijo, conoces los salones y a las maestras, y luego decides si inicias la matrícula.',
  },
  {
    titulo: 'Grupos pequeños',
    texto: 'Su maestra conoce su nombre, su carácter y su ritmo, y acompaña de cerca su progreso.',
  },
  {
    titulo: 'Entrevista cercana',
    texto: 'Conversamos contigo y acordamos juntos los apoyos que necesita, sin exigir un diagnóstico previo.',
  },
  {
    titulo: 'Un solo colegio continuo',
    texto: 'Desde párvulos (2 años) hasta 3.º de primaria, en el mismo lugar y con rostros conocidos.',
  },
]

/**
 * Rediseño de conversión, sección 2: las 4 tranquilidades (antes «Antes de elegir colegio», I-2 del 22 nov 2026).
 * Ajuste 4: el llanto de los primeros días sin seguimiento durante la jornada ni entrada gradual.
 */
export const tranquilidades: Tarjeta[] = [
  {
    titulo: 'Atención real, nunca un número más',
    texto:
      'Grupos pequeños y reuniones periódicas con los padres para ver avances concretos, sin esperar al final del año.',
  },
  {
    titulo: 'Protección y adaptación con cariño',
    texto:
      'Cámaras en las aulas, psicología y servicio de alimentación. Si tu hijo llora al inicio, lo acompañamos con paciencia y cariño hasta que entre tranquilo.',
  },
  {
    titulo: 'Bases sólidas que se notan',
    texto:
      'Lectura, escritura y matemáticas según el Ministerio de Educación (DBA), con énfasis en inglés y proyectos reales.',
  },
  {
    titulo: 'Puertas abiertas a cada ritmo',
    texto:
      'Si tu hijo tiene autismo, TDAH, discapacidad o dificultades de aprendizaje, acordamos contigo los apoyos para que aprenda y participe con su grupo.',
  },
]

/** Alcance de la inclusión (respuesta del colegio, 22 nov 2026). El cupo por grupo se consulta en privado por WhatsApp. */
export const alcanceInclusion = 'niños con discapacidad, autismo, TDAH, dificultades de aprendizaje y otros ritmos'

/**
 * Rediseño de conversión, sección 5: la inclusión del inicio en 3 pasos. Ajuste 3: sin psicología, sin PIAR, sin docente de apoyo
 * ni terapeutas; el ingreso es por entrevista.
 */
export const pasosInclusion: Tarjeta[] = [
  {
    titulo: 'Entrevista privada, sin juicios',
    texto: 'Conversamos contigo para conocer a tu hijo más allá de las etiquetas.',
  },
  {
    titulo: 'Acuerdo de apoyos concretos',
    texto: 'Definimos juntos los ajustes que necesita para participar, compartir y avanzar con su grupo.',
  },
  {
    titulo: 'Seguimiento cercano todo el año',
    texto: 'En las reuniones periódicas revisamos sus progresos de la mano contigo.',
  },
]

/** Lo que viven las familias (solo hechos confirmados; la escuela de padres no se menciona) */
export const familias: Tarjeta[] = [
  { titulo: 'Reuniones periódicas', texto: 'Nos sentamos contigo a revisar cómo avanza y qué sigue.' },
  { titulo: 'Un valor cristiano cada mes', texto: 'Lo trabajamos en el aula para que también se converse en casa.' },
  { titulo: 'Fechas para celebrar', texto: 'El Día de la Biblia, nuestras clausuras y otros días especiales que vivimos con las familias.' },
]

export interface Testimonio {
  texto: string
  /** Cómo firma la familia (sin datos de los niños) */
  autor: string
}

/**
 * Ajuste 2 (23 nov 2026): no hay testimonios confirmados. Mientras este arreglo esté vacío, el bloque no se muestra.
 * Solo se añaden testimonios reales, con autorización escrita de la familia.
 */
export const testimonios: Testimonio[] = []

export interface Paso {
  titulo: string
  texto: string | null
  pendiente?: string
}

/** Rediseño de conversión, sección 7: tres pasos para empezar (ajustes 1, 5 y 7) */
export const pasosMatricula: Paso[] = [
  {
    titulo: 'Escríbenos por WhatsApp',
    texto: 'Te enviamos los costos 2027 y los horarios, y te confirmamos el cupo para la edad de tu hijo.',
  },
  {
    titulo: 'Visítanos con tu hijo',
    texto: 'Conoce los salones y a las maestras, y resuelve cada duda en persona, sin compromiso.',
  },
  {
    titulo: 'Reserva sin filas: todo por WhatsApp',
    texto: 'Cuando estés seguro, te enviamos por WhatsApp el formulario y la lista de documentos.',
  },
]

/** Rediseño de conversión, sección 7: qué incluye la formación (solo servicios confirmados) */
export const incluyeFormacion = [
  'Atención cercana en grupos pequeños, de lunes a viernes en jornada diurna',
  'Plan académico alineado al Ministerio de Educación (DBA), con énfasis en inglés y proyectos cada bimestre',
  'Música, arte y deporte cada semana',
  'Bienestar: cámaras en las aulas, psicología y opción de servicio de alimentación',
  'Alianza con la familia: reuniones periódicas y un valor cristiano cada mes',
]

export interface Pregunta {
  pregunta: string
  /** Respuesta confirmada (puede estar vacía si todo está pendiente) */
  respuesta: string
  pendiente?: string
  /** H12: frase que solo se muestra mientras la renovación siga abierta (después del 30 nov 2026 no se dice nada) */
  soloDuranteRenovacion?: string
  /** Ajuste 9: frase que solo se muestra mientras el descuento de matrícula siga vigente (hasta el 3 dic 2026) */
  soloDuranteDescuento?: string
  /** Enlace que se muestra después de la respuesta (no va en los datos para Google) */
  enlace?: { href: string; texto: string }
}

export interface Vigencias {
  renovacion: boolean
  descuento: boolean
}

/** Respuesta completa, con las frases de renovación y descuento solo si siguen vigentes */
export function textoRespuesta(p: Pregunta, vigentes: Vigencias): string {
  return [
    p.respuesta,
    vigentes.descuento ? p.soloDuranteDescuento : undefined,
    vigentes.renovacion ? p.soloDuranteRenovacion : undefined,
  ]
    .filter(Boolean)
    .join(' ')
}

/**
 * Preguntas frecuentes: primero las 8 del rediseño de conversión (sección 8, con los ajustes 1, 4 y 7), después las que ya había
 * y no se repiten. Cada respuesta se entiende sola, para que Google y las IA puedan citarla. Sin «¿Es bilingüe?».
 */
export const preguntas: Pregunta[] = [
  {
    pregunta: '¿Cuál es el valor de la matrícula y la pensión 2027?',
    respuesta:
      'El valor varía entre preescolar y primaria. Escríbenos por WhatsApp con la edad de tu hijo y te enviamos los costos y horarios el mismo día, de lunes a viernes.',
    soloDuranteDescuento: 'Pregunta también por el descuento de matrícula, vigente hasta el 3 de diciembre de 2026.',
  },
  {
    pregunta: '¿Debo pagar inscripción antes de conocer el colegio?',
    respuesta:
      'Primero nos visitas con tu hijo, conoces los salones y a las maestras, y después decides si inicias el proceso de matrícula.',
  },
  {
    pregunta: '¿Cuántos niños hay por salón y por qué importa?',
    respuesta:
      'Trabajamos con grupos pequeños para que la maestra conozca el ritmo de cada niño y lo acompañe de cerca.',
  },
  {
    pregunta: '¿Qué pasa si mi hijo de 2 o 3 años llora los primeros días?',
    respuesta:
      'Es normal. Los primeros días la maestra lo recibe con calma y le presenta su salón y a sus compañeros. Lo acompañamos con paciencia y cariño hasta que entre tranquilo.',
  },
  {
    pregunta: '¿Reciben niños con autismo, TDAH, discapacidad o dificultades de aprendizaje?',
    respuesta: `Sí. Recibimos ${alcanceInclusion}. No necesitas un diagnóstico médico para empezar: nos reunimos en una entrevista para conocer a tu hijo y acordar juntos los apoyos que requiere. El ingreso depende de que haya cupo en el grupo; consúltalo en privado por WhatsApp.`,
    enlace: { href: '/inclusion/', texto: 'Lee más en nuestra página de inclusión' },
  },
  {
    pregunta: '¿Cuál es el calendario, el horario y cómo manejan el inglés?',
    respuesta:
      'Calendario A: el año escolar empieza a finales de enero. Tenemos jornada diurna de lunes a viernes, énfasis en inglés integrado a cada grado y espacios de música, arte y deporte. Escríbenos por WhatsApp y te compartimos el horario de tu grado.',
  },
  {
    pregunta: '¿Cuentan con cámaras, psicología y servicio de alimentación?',
    respuesta: 'Sí. Tenemos cámaras en las aulas, psicología y servicio de alimentación.',
  },
  {
    pregunta: '¿Qué significa «Shalom» y cómo viven el enfoque cristiano?',
    respuesta:
      'Shalom es una palabra hebrea que significa paz completa y bienestar. Somos un colegio cristiano: empezamos cada mañana con oración, vivimos un valor cristiano cada mes y educamos con el lenguaje del amor y la sabiduría de Dios.',
  },
  {
    pregunta: '¿Tienen jardín infantil y primaria?',
    respuesta:
      'Sí. En preescolar (jardín infantil): párvulos desde los 2 años, prejardín, jardín y transición. En primaria: de 1.º a 3.º.',
  },
  {
    pregunta: '¿Reciben niños de 2 años?',
    respuesta: `Sí, desde los ${ingreso.edadMinima}, en párvulos. Tu hijo puede seguir con nosotros hasta ${ingreso.gradoMaximo}, sin cambiar de colegio.`,
  },
  {
    pregunta: '¿En qué grado entra mi hijo?',
    respuesta: `Depende de su edad. Como referencia, según la Secretaría de Educación: ${[...preescolar, ...primaria]
      .map((g) => `${g.nombre.toLowerCase()}, ${g.edad}`)
      .join('; ')}. Escríbenos con la fecha de nacimiento de tu hijo y te confirmamos el grado.`,
  },
  {
    pregunta: '¿Es un colegio privado?',
    respuesta: 'Sí, es un colegio privado. Los costos de matrícula y pensión te los enviamos por WhatsApp.',
  },
  {
    pregunta: '¿Cómo aprenden los niños?',
    respuesta:
      'Con nuestro método «Juega, construye y aprende»: el juego es la base y cada bimestre investigan un proyecto que nace de sus preguntas. Así avanzan en lectura, escritura y matemáticas, con oración y valores cada día.',
  },
  {
    pregunta: '¿Hasta cuándo hay matrículas?',
    respuesta: 'Las matrículas 2027 están abiertas hasta el inicio de clases, a finales de enero de 2027.',
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
