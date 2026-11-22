/** Guías originales para familias. Sin fechas, autores ni datos institucionales inventados. */
export interface BlogSection {
  id: string
  titulo: string
  parrafos?: string[]
  lista?: string[]
  subsecciones?: { titulo: string; texto: string }[]
  enlaces?: { texto: string; href: string }[]
}

export interface BlogPost {
  slug: string
  titulo: string
  descripcion: string
  categoria: string
  color: 'turquesa' | 'naranja' | 'morado'
  icono: 'corazon' | 'grupo' | 'casa'
  intro: string[]
  idea: { titulo: string; texto: string }
  secciones: BlogSection[]
  /** Llamado final: el botón es el de admisiones («Agenda una visita por WhatsApp», mensaje único; P20) */
  cta: { titulo: string; texto: string }
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'primeros-dias-en-preescolar',
    titulo: 'Los primeros días en preescolar: qué preparar y qué conversar',
    descripcion: 'Ideas para preparar la llegada al preescolar: conversar sobre la rutina, acordar la despedida y compartir con la maestra lo que necesita tu hijo.',
    categoria: 'Primeros días',
    color: 'turquesa',
    icono: 'corazon',
    intro: [
      'La primera entrada al preescolar trae preguntas para todos: quién lo recibirá, cómo será la despedida y qué contará al volver. No hace falta tener todas las respuestas desde el primer día. Puedes empezar por conocer la rutina y hablar con las personas que lo acompañarán.',
      'Estas ideas son un punto de partida para conversar en familia y con el colegio. Ajústalas a lo que conoces de tu hijo y a los acuerdos que hagan con su maestra.',
    ],
    idea: {
      titulo: 'Una conversación para empezar',
      texto: 'Pregunta al colegio: «¿Cómo podemos preparar juntos la llegada de mi hijo y cómo nos contaremos lo que observemos durante los primeros días?»',
    },
    secciones: [
      {
        id: 'antes-de-empezar',
        titulo: 'Antes de empezar, hagan conocido lo cotidiano',
        parrafos: [
          'Si pueden visitar el colegio, aprovechen para conocer la entrada y preguntar dónde se despiden las familias. En casa, cuenta lo que sabes con palabras concretas: «Vamos al colegio, te recibe tu maestra y después voy a recogerte». Evita prometer actividades que todavía no has confirmado.',
          'Pueden preparar juntos la mochila y practicar cómo abrir la lonchera o guardar sus cosas. Elige una tarea pequeña en la que pueda participar, sin convertir la preparación en una lista de pruebas que deba superar.',
        ],
        lista: [
          'Confirma qué debe llevar y marca sus pertenencias como indique el colegio.',
          'Acuerda quién lo lleva, quién lo recoge y cómo se informan los cambios.',
          'Pregunta qué objetos personales están permitidos antes de ofrecer que lleve su juguete favorito.',
        ],
      },
      {
        id: 'compartir-con-la-maestra',
        titulo: 'Comparte lo que ayuda a conocerlo',
        parrafos: [
          'No hace falta describir a tu hijo con una etiqueta. Son más útiles los ejemplos: cómo pide ayuda, qué suele hacer cuando está cansado o qué palabras usa para ir al baño. Cuenta también si hay algún cambio reciente en casa que sea importante para acompañarlo.',
          'Consulta cuál es el canal adecuado para compartir información personal y quién la recibe. Los detalles privados no necesitan circular en un grupo de familias.',
        ],
      },
      {
        id: 'despedida',
        titulo: 'Acuerden una despedida que puedan cumplir',
        parrafos: [
          'Habla con la maestra sobre cómo será la entrega. Puedes elegir una frase y un gesto que se repitan: un abrazo, «te quiero» y una referencia concreta a la recogida, según la rutina real del colegio.',
          'Si la despedida se hace difícil, busca apoyo en el equipo. No tienes que improvisar una solución a solas ni comparar su reacción con la de otros niños. Pregunta qué observan después y qué acuerdo pueden ajustar al día siguiente.',
        ],
      },
      {
        id: 'al-volver',
        titulo: 'Al volver, deja espacio para contar y descansar',
        parrafos: [
          'En lugar de muchas preguntas seguidas, prueba una invitación: «Cuéntame algo que hiciste» o «¿Hubo algo para lo que necesitaste ayuda?». También puede preferir jugar o estar contigo antes de hablar. Puedes retomar la conversación más tarde.',
          'Comparte con la maestra lo que notes en casa y escucha lo que ocurre en el aula. Si algo te preocupa o se repite, pide un momento para hablarlo. El objetivo es construir acuerdos a partir de lo que observan, sin fijar un plazo idéntico para todas las familias.',
        ],
        enlaces: [
          { texto: 'Conoce el día a día que presentamos en Shalom Kids', href: '/#un-dia' },
          { texto: 'Ideas de juego para compartir en casa', href: '/blog/juegos-cotidianos-en-casa/' },
        ],
      },
    ],
    cta: {
      titulo: 'Conversemos sobre su llegada al colegio',
      texto: 'Si estás pensando en Shalom Kids, puedes preguntarnos cómo organizar una visita y qué conversar antes de empezar.',
    },
  },
  {
    slug: 'preguntas-para-elegir-colegio',
    titulo: 'Qué preguntar al elegir colegio para preescolar o primaria',
    descripcion: 'Una guía para visitar colegios y hacer preguntas concretas sobre el aula, la comunicación, los apoyos y la organización familiar.',
    categoria: 'Elegir colegio',
    color: 'naranja',
    icono: 'grupo',
    intro: [
      'Elegir colegio reúne muchas decisiones: cómo se vive el aula, qué necesita tu hijo y cómo encaja la jornada en la vida familiar. Una visita permite ir más allá de las frases generales y pedir ejemplos de lo que ocurre cada día.',
      'Puedes llevar esta guía en el celular, elegir las preguntas que más te importan y anotar las respuestas después de cada visita. Si algo queda poco claro, pide que te lo expliquen de nuevo.',
    ],
    idea: {
      titulo: 'Pide un ejemplo',
      texto: 'Después de escuchar «acompañamos a cada niño», pregunta: «¿Podrían contarme cómo lo hacen cuando un estudiante necesita ayuda con una actividad?»',
    },
    secciones: [
      {
        id: 'aula',
        titulo: 'Empieza por la experiencia en el aula',
        subsecciones: [
          {
            titulo: 'Cómo aprenden',
            texto: 'Pregunta cómo combinan juego, conversación, lectura, movimiento y trabajo con materiales. Pide un ejemplo de una actividad del grado que te interesa y cómo observan lo que cada niño va aprendiendo.',
          },
          {
            titulo: 'Cómo se acompaña al grupo',
            texto: 'Consulta cuántos estudiantes y adultos hay en ese grado, cómo se organizan las actividades y qué hacen cuando un niño necesita más explicación o termina antes. Así podrás entender mejor qué significa la atención que te ofrecen.',
          },
        ],
      },
      {
        id: 'comunicacion',
        titulo: 'Aclara cómo se comunican con las familias',
        parrafos: [
          'Una buena pregunta no es solo «¿me van a informar?», sino quién lo hará, por qué medio y en qué momentos. Pregunta cómo puedes solicitar una conversación y cuál es el procedimiento si ocurre algo que requiere atención durante la jornada.',
        ],
        lista: [
          '¿Cómo comparten avances y dificultades, además de las calificaciones?',
          '¿A quién escribo si necesito hablar sobre mi hijo?',
          '¿Cómo se acuerdan y revisan las acciones entre familia y colegio?',
        ],
      },
      {
        id: 'apoyos',
        titulo: 'Habla de los apoyos que necesita tu hijo',
        parrafos: [
          'Cuenta lo que conoces de su manera de participar: qué le interesa, qué situaciones le cuestan y qué apoyos han resultado útiles. Pregunta cómo se escucha a la familia y cómo se decide qué puede ofrecer el colegio.',
          'Busca respuestas concretas sobre los recursos disponibles y sus límites. Evita dar por hecho que un servicio o un acompañamiento está incluido solo porque aparece una palabra general en la presentación.',
        ],
        enlaces: [{ texto: 'Prepara una conversación sobre inclusión escolar', href: '/inclusion/' }],
      },
      {
        id: 'organizacion',
        titulo: 'Revisa la organización de un día completo',
        lista: [
          'Confirma horarios de entrada y salida y cómo se autoriza a las personas que recogen al niño.',
          'Pregunta por alimentación, descansos, uso del baño y manejo de pertenencias según el grado.',
          'Consulta qué materiales se solicitan y qué tareas se proponen para casa.',
          'Pide por el canal del colegio los documentos y las condiciones del proceso de matrícula.',
        ],
        parrafos: [
          'Piensa también en el recorrido desde casa y en quién podría ayudarte si un día cambia la organización familiar. Son detalles cotidianos que merecen entrar en la decisión.',
        ],
      },
      {
        id: 'despues-de-la-visita',
        titulo: 'Después de la visita, separa respuestas y dudas',
        parrafos: [
          'Haz dos listas cortas: lo que quedó claro y lo que todavía necesitas confirmar. Comparte con quienes cuidan a tu hijo los aspectos que más pesan para ustedes, sin intentar que todas las familias tengan las mismas prioridades.',
          'Si tu hijo participó en la visita, escucha lo que quiera contar. Su experiencia puede abrir preguntas que no habías pensado. Antes de decidir, vuelve al colegio con las dudas que sigan pendientes.',
        ],
        enlaces: [
          { texto: 'Conoce quiénes somos en Shalom Kids', href: '/nosotros/' },
          { texto: 'Revisa nuestros niveles de preescolar y primaria', href: '/#niveles' },
          { texto: 'Qué conversar antes de los primeros días en preescolar', href: '/blog/primeros-dias-en-preescolar/' },
        ],
      },
    ],
    cta: {
      titulo: 'Ven con tus preguntas',
      texto: 'Escríbenos si quieres conocer Shalom Kids y consultar por el grado que estás buscando.',
    },
  },
  {
    slug: 'juegos-cotidianos-en-casa',
    titulo: 'Cinco ideas de juego para compartir en casa, sin comprar materiales',
    descripcion: 'Propuestas sencillas para jugar en familia con cuentos, objetos grandes, dibujos y situaciones cotidianas, adaptadas a los intereses de tu hijo.',
    categoria: 'Aprender jugando',
    color: 'morado',
    icono: 'casa',
    intro: [
      'No necesitas llenar una tarde de actividades para compartir un rato de juego. Puedes empezar con una historia, una hoja o algo que ya hacen juntos, como guardar la ropa. La invitación es explorar y conversar, sin convertir cada momento en una tarea escolar.',
      'Elige una propuesta según el espacio, los materiales y las ganas que tengan. Usa objetos apropiados para la edad, evita piezas pequeñas con niños que se llevan cosas a la boca y acompaña el juego.',
    ],
    idea: {
      titulo: 'Empieza con una sola invitación',
      texto: '«¿Jugamos a inventar una tienda?» puede ser suficiente. Deja que tu hijo proponga qué vender, cómo ordenar y cuándo terminar.',
    },
    secciones: [
      {
        id: 'tienda',
        titulo: 'Una tienda con objetos que ya tienen',
        parrafos: [
          'Reúnan algunos juguetes grandes o dibujos de alimentos. Decidan qué habrá en la tienda y alternen los papeles de quien compra y quien atiende. Pueden pedir «dos manzanas» o explicar para qué necesitan un objeto.',
          'Si ya escribe, puede preparar letreros o una lista; si todavía no, puede dibujar o contártelo. No hace falta que todos participen de la misma manera ni corregir cada palabra para continuar jugando.',
        ],
      },
      {
        id: 'historias',
        titulo: 'Una historia que cambia de manos',
        parrafos: [
          'Empieza con una frase: «Una caja apareció junto a la puerta…». Cada persona añade algo. Pueden dibujar el lugar, elegir un personaje o representar con gestos lo que sucede.',
          'Si se quedan sin ideas, haz una pregunta abierta: «¿Quién la encontró?» o «¿Qué pasó después?». También pueden tomar un cuento que ya conocen e imaginar otro final.',
        ],
      },
      {
        id: 'clasificar',
        titulo: 'Ordenar de una manera y luego de otra',
        parrafos: [
          'Al guardar la ropa, invítalo a reunir prendas por color o a buscar parejas de medias. Después pregúntale si se le ocurre otra manera de organizarlas: por persona, por uso o por tamaño.',
          'Lo interesante es escuchar su criterio. Puedes decir «veo que pusiste estas juntas, cuéntame por qué» y mostrar también tu propia idea. No es necesario convertirlo en una competencia.',
        ],
      },
      {
        id: 'mapa',
        titulo: 'Un mapa para encontrar un dibujo',
        parrafos: [
          'Guarda un dibujo en un lugar accesible y despejado. Haz un mapa sencillo de la habitación o da pistas: junto al sofá, debajo de una mesa baja o cerca de la puerta. Evita escondites que inviten a trepar o a abrir muebles con objetos peligrosos.',
          'Después intercambien los papeles. El mapa puede tener dibujos, palabras o marcas propias: lo importante es que puedan explicar el recorrido y entenderse.',
        ],
      },
      {
        id: 'dibujar',
        titulo: 'Dibujar algo que pasó hoy',
        parrafos: [
          'Propón dibujar una escena del día y haz tú otra. Al terminar, cada quien puede contar qué ocurrió antes y qué pasó después. Si no quiere hablar de su día, pueden dibujar un lugar imaginario.',
          'Escucha su explicación antes de adivinar qué representa el dibujo. La conversación puede continuar con una pregunta sobre lo que decidió incluir, sin evaluar si quedó «bien» o «mal».',
        ],
      },
      {
        id: 'sin-prisa',
        titulo: 'Deja que el juego tenga su propio ritmo',
        parrafos: [
          'Puedes cambiar una regla, simplificar una propuesta o guardarla para otro día. Si tu hijo transforma la tienda en una casa o el mapa en una historia, sigan esa idea si ambos quieren.',
          'Estas propuestas no son una lista de logros ni una forma de comparar niños. Son oportunidades para compartir un rato. Si buscas actividades relacionadas con lo que vive en el aula, pregunta a su maestra qué podrían retomar en casa.',
        ],
        enlaces: [
          { texto: 'Conoce nuestro método: juega, construye y aprende', href: '/#metodo' },
          { texto: 'Preguntas para conocer cómo se aprende en un colegio', href: '/blog/preguntas-para-elegir-colegio/' },
        ],
      },
    ],
    cta: {
      titulo: 'Conoce cómo aprendemos en Shalom',
      texto: 'Puedes conversar con nosotros sobre nuestra propuesta educativa y el grado que te interesa.',
    },
  },
]
