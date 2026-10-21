/* =========================================================
   Banco de preguntas · Zona de quiz (20 quizzes base + 5 del Parcial 2)
   Todo el contenido proviene de los documentos de la carpeta
   "parcial diana". No hay preguntas inventadas fuera de ellos.
   ========================================================= */

window.FUENTES = [
  { n: "Planificación Didáctica de Política Criminal (ICS-402B), 2026.", d: "Ejes 1, 2 y 3; contenidos, competencias y criterios de evaluación (30 % parciales, 35 % semestral, 35 % talleres)." },
  { n: "Modelos de Política Criminal en América Latina.", d: "Material de clase: modelos represivo, preventivo, integral y restaurativo, con ejemplos regionales." },
  { n: "Análisis comparativo de las reformas penales de Panamá.", d: "Material de clase: penalización, despenalización y medida predominante." },
  { n: "Salidas alternas de resolución de conflictos en el sistema penal acusatorio.", d: "Material de clase sobre conciliación, mediación, criterios de oportunidad y suspensión condicional del proceso." },
  { n: "Taller Formativo en clases.", d: "Casos: El Salvador (mano dura), Colombia (seguridad democrática) y México (reforma penal de 2008)." },
  { n: "Políticas de prevención del delito.", d: "Material de clase: fuentes de las políticas, criminología ambiental, ventana rota y programas comparados." },
  { n: "Prevención genérica.", d: "Material de clase: prevención, IV Congreso de la ONU (Tokio, 1970) y factores individuales, sociales y económicos." },
  { n: "López Sinisterra, O. (2020). Reincidencia y programas de resocialización en La Joya y La Joyita. Revista Lex.", d: "Diagnóstico de los programas, el hacinamiento, la corrupción y la reincidencia en Panamá." },
  { n: "Borja Jiménez, E. (2003). Sobre el concepto de política criminal.", d: "Von Liszt, Feuerbach, la conferencia de Roxin de 1970 y la relación con la dogmática penal." },
  { n: "García Aquino, J. Política criminal en un Estado de derecho.", d: "Concepto en sentido político y académico, misión inmediata y mediata, victimología y límites del poder penal." },
  { n: "Código Procesal Penal de Panamá (Ley 63 de 2008).", d: "Artículos 12, 26, 204, 206, 207-211, 212 y 217-219." },
  { n: "Ley 476 de 26 de junio de 2025.", d: "Modifica el Código Penal y el Código Procesal Penal en materia de hurto pecuario." },
  { n: "Arroyo Zapatero, L. (2021). Política criminal humanista para la sociedad contemporánea.", d: "Marco general de una política criminal respetuosa de los derechos humanos." },
  { n: "Política criminal de Reyes Echandía (material comprimido).", d: "Lectura de apoyo sobre la política criminal y sus fundamentos." }
];

window.QUIZZES = [
  {
    id: "q01",
    slug: "que-es-la-politica-criminal",
    titulo: "¿Qué es la política criminal?",
    tema: "Concepto y alcances",
    desc: "Dos sentidos del término y el ejemplo que usa García Aquino.",
    preguntas: [
      {
        p: "Según García Aquino, en su sentido político, la política criminal es el conjunto de medidas y criterios que los poderes públicos establecen para…",
        o: [
          "Sancionar únicamente los delitos que ya se cometieron.",
          "Prevenir y reaccionar frente al fenómeno criminal, manteniendo la criminalidad bajo límites tolerables.",
          "Administrar las cárceles y nada más.",
          "Interpretar las normas penales en abstracto."
        ],
        c: 1,
        e: "El autor la define como medidas y criterios jurídicos, sociales, educativos y económicos para prevenir y reaccionar frente al fenómeno criminal.",
        f: "García Aquino, Política criminal en un Estado de derecho."
      },
      {
        p: "Una alcaldía organiza un campeonato deportivo permanente para jóvenes con el fin de evitar el pandillaje. Según García Aquino, esa decisión es un ejemplo de…",
        o: [
          "Política criminal en sentido político, porque es una medida preventiva frente a un hecho antisocial.",
          "Dogmática penal, porque interpreta un tipo penal.",
          "Criminología clínica, porque estudia al delincuente.",
          "Derecho procesal, porque regula el juicio."
        ],
        c: 0,
        e: "El propio autor pone ese ejemplo para explicar la política criminal como respuesta preventiva (norma, medida o programa) frente a un hecho antisocial.",
        f: "García Aquino, Política criminal en un Estado de derecho."
      },
      {
        p: "Para Borja Jiménez, antes de la conferencia de Roxin de 1970, la dogmática penal y la política criminal se concebían como…",
        o: [
          "Dos sectores unidos por los fines de la pena.",
          "Dos sectores separados, con ámbitos de actuación y fines autónomos.",
          "Una sola disciplina con dos nombres.",
          "Dos ramas de la criminología."
        ],
        c: 1,
        e: "Se las consideraba sectores separados y limitados entre sí: el Derecho penal limitaba el poder punitivo y la política criminal era el conjunto de estrategias frente a la criminalidad.",
        f: "Borja Jiménez (2003), Sobre el concepto de política criminal."
      },
      {
        p: "La expresión “el Derecho penal es la Carta Magna del delincuente” se atribuye a…",
        o: ["Claus Roxin", "Franz von Liszt", "Feuerbach", "Emiliano Borja"],
        c: 1,
        e: "Von Liszt sostenía que el Derecho penal era la barrera infranqueable de la política criminal y la Carta Magna del delincuente.",
        f: "Borja Jiménez (2003)."
      },
      {
        p: "La política criminal en sentido académico se ocupa de…",
        o: [
          "Estudiar el conjunto de medidas, criterios y argumentos que emplean los poderes públicos frente al fenómeno criminal.",
          "Redactar las sentencias de los tribunales.",
          "Ejecutar directamente las penas.",
          "Representar al Estado en juicio."
        ],
        c: 0,
        e: "En sentido académico es un sector del conocimiento que estudia esas medidas, criterios y argumentos.",
        f: "García Aquino, Política criminal en un Estado de derecho."
      }
    ]
  },
  {
    id: "q02",
    slug: "von-liszt-feuerbach-roxin",
    titulo: "Von Liszt, Feuerbach y Roxin",
    tema: "Evolución histórica",
    desc: "Los autores que construyeron el concepto moderno.",
    preguntas: [
      {
        p: "¿A quién se considera el fundador de la política criminal como disciplina científica?",
        o: ["Claus Roxin", "Franz von Liszt", "Enrico Ferri", "Rafael Garófalo"],
        c: 1,
        e: "Fue von Liszt quien la creó como disciplina científica, con su programa de Marburgo.",
        f: "García Aquino, nota 3."
      },
      {
        p: "Feuerbach definía la política criminal como…",
        o: [
          "El conjunto de métodos represivos con los que el Estado reacciona contra el crimen.",
          "La ciencia que estudia las causas del delito.",
          "El conjunto de garantías del procesado.",
          "La política social del Estado."
        ],
        c: 0,
        e: "Su definición ponía el acento en lo reactivo: métodos represivos frente al crimen.",
        f: "Borja Jiménez (2003)."
      },
      {
        p: "La conferencia de Roxin que propuso acercar dogmática penal y política criminal se pronunció en…",
        o: ["Berlín, 1970", "Marburgo, 1882", "Roma, 1930", "Valencia, 2003"],
        c: 0,
        e: "Fue su conocida conferencia de Berlín de 1970, recogida luego en “Política criminal y sistema de Derecho penal”.",
        f: "Borja Jiménez (2003)."
      },
      {
        p: "Según Borja Jiménez, Roxin defiende un sistema de Derecho penal…",
        o: [
          "Cerrado y aislado de la realidad social.",
          "Abierto a las valoraciones político-criminales.",
          "Basado solo en el casuismo.",
          "Exclusivamente retributivo."
        ],
        c: 1,
        e: "Roxin postula un sistema abierto, capaz de recibir las valoraciones político-criminales en la interpretación y sistematización.",
        f: "Borja Jiménez (2003)."
      },
      {
        p: "Un autor sostiene que la dogmática debe construirse sin mirar las consecuencias sociales de sus conceptos. Frente a eso, Roxin plantea…",
        o: [
          "Mantener esa separación.",
          "Un Derecho penal orientado a las consecuencias, que integre la política criminal.",
          "Eliminar el Derecho penal.",
          "Sustituirlo por la criminología."
        ],
        c: 1,
        e: "El “Derecho penal orientado a las consecuencias” atiende a los fines de la pena como criterio rector de interpretación y sistematización.",
        f: "Borja Jiménez (2003)."
      }
    ]
  },
  {
    id: "q03",
    slug: "los-cuatro-modelos",
    titulo: "Los cuatro modelos",
    tema: "Modelos de política criminal",
    desc: "Represivo, preventivo, integral y restaurativo.",
    preguntas: [
      {
        p: "¿Cuáles son los modelos de política criminal desarrollados en el material de clase?",
        o: [
          "Represivo, preventivo, integral y restaurativo.",
          "Inquisitivo, acusatorio, mixto y oral.",
          "Liberal, social, autoritario y democrático.",
          "Primario, secundario, terciario y cuaternario."
        ],
        c: 0,
        e: "El material los agrupa en cuatro: represivo o punitivo, preventivo, integral y restaurativo.",
        f: "Modelos de Política Criminal en América Latina."
      },
      {
        p: "El modelo que combina medidas represivas con estrategias preventivas y un enfoque multidisciplinario es el…",
        o: ["Represivo", "Preventivo", "Integral", "Restaurativo"],
        c: 2,
        e: "El modelo integral suma seguridad, salud, educación y trabajo, e incluye resocialización y reinserción.",
        f: "Modelos de Política Criminal en América Latina."
      },
      {
        p: "El modelo centrado en reparar el daño y en la mediación entre víctima, victimario y comunidad es el…",
        o: ["Restaurativo", "Punitivo", "Integral", "Disuasivo"],
        c: 0,
        e: "El restaurativo promueve mediación, conciliación y justicia comunitaria, con foco en la víctima y la comunidad.",
        f: "Modelos de Política Criminal en América Latina."
      },
      {
        p: "La centralidad de la pena privativa de libertad y las políticas de “mano dura” caracterizan al modelo…",
        o: ["Preventivo", "Represivo", "Restaurativo", "Integral"],
        c: 1,
        e: "El represivo o punitivo se apoya en la pena de prisión, la tolerancia cero y el endurecimiento penal.",
        f: "Modelos de Política Criminal en América Latina."
      },
      {
        p: "Costa Rica implementa programas de mediación penal juvenil. Ese ejemplo corresponde al modelo…",
        o: ["Represivo", "Preventivo", "Restaurativo", "Integral"],
        c: 2,
        e: "El material cita a Costa Rica como ejemplo de mediación penal juvenil dentro del modelo restaurativo.",
        f: "Modelos de Política Criminal en América Latina."
      }
    ]
  },
  {
    id: "q04",
    slug: "mano-dura-el-salvador",
    titulo: "Mano dura: El Salvador",
    tema: "Modelo represivo · Caso",
    desc: "Del Plan Mano Dura al régimen de excepción de 2022.",
    preguntas: [
      {
        p: "Los planes Mano Dura (2003) y Súper Mano Dura (2004) se implementaron en…",
        o: ["Colombia", "El Salvador", "México", "Honduras"],
        c: 1,
        e: "El taller los ubica en El Salvador, en el contexto de las pandillas MS-13 y Barrio 18.",
        f: "Taller Formativo en clases."
      },
      {
        p: "En 2022, bajo el gobierno de Nayib Bukele, se instauró en El Salvador…",
        o: [
          "Un régimen de excepción con detenciones sin orden judicial.",
          "Un sistema de justicia restaurativa.",
          "La abolición de la prisión preventiva.",
          "Un programa de mediación comunitaria."
        ],
        c: 0,
        e: "El régimen de excepción restringe derechos constitucionales, permite detenciones sin orden judicial y habilita juicios colectivos.",
        f: "Taller Formativo en clases."
      },
      {
        p: "Según el taller, la tasa de homicidios de El Salvador pasó de 103 por cada 100,000 habitantes en 2015 a…",
        o: ["Menos de 8 en 2023", "50 en 2020", "80 en 2019", "25 en 2018"],
        c: 0,
        e: "El material registra esa caída drástica, junto con un apoyo ciudadano superior al 70 %.",
        f: "Taller Formativo en clases."
      },
      {
        p: "Una crítica central al modelo represivo salvadoreño es…",
        o: [
          "Su excesiva lentitud procesal.",
          "El hacinamiento, las detenciones arbitrarias y las violaciones a derechos humanos.",
          "No haber reducido los homicidios.",
          "No haber usado al ejército."
        ],
        c: 1,
        e: "El propio material señala el aumento de denuncias por detenciones arbitrarias, hacinamiento y torturas.",
        f: "Taller Formativo en clases."
      },
      {
        p: "Un país permite detener sin orden judicial, juzgar en bloque a supuestos pandilleros y restringir garantías constitucionales “por la seguridad”. Ese escenario reproduce…",
        o: [
          "El régimen de excepción salvadoreño de 2022.",
          "La reforma penal mexicana de 2008.",
          "La justicia comunitaria de paz panameña.",
          "El modelo restaurativo costarricense."
        ],
        c: 0,
        e: "Son las medidas que el taller atribuye al régimen de excepción instaurado en El Salvador en 2022.",
        f: "Taller Formativo en clases."
      }
    ]
  },
  {
    id: "q05",
    slug: "prevenir-antes-que-castigar",
    titulo: "Prevenir antes que castigar",
    tema: "Modelo preventivo",
    desc: "Causas sociales, comunidad y límites del enfoque.",
    preguntas: [
      {
        p: "El modelo preventivo concentra su atención en…",
        o: [
          "Las causas sociales del delito: pobreza, exclusión y desempleo.",
          "El endurecimiento de las penas.",
          "La construcción de megacárceles.",
          "La militarización de las calles."
        ],
        c: 0,
        e: "Se enfoca en las causas sociales y en programas comunitarios, educativos y de inclusión.",
        f: "Modelos de Política Criminal en América Latina."
      },
      {
        p: "¿Qué países se citan como ejemplos de prevención situacional y comunitaria?",
        o: ["Chile y Colombia", "El Salvador y Honduras", "México y Guatemala", "Uruguay y Paraguay"],
        c: 0,
        e: "El material menciona Chile (prevención situacional y comunitaria) y Colombia (convivencia en barrios vulnerables).",
        f: "Modelos de Política Criminal en América Latina."
      },
      {
        p: "Una limitación del modelo preventivo es…",
        o: [
          "Que no puede aplicarse en zonas urbanas.",
          "Que depende de financiamiento sostenido y de la articulación entre instituciones.",
          "Que aumenta siempre la reincidencia.",
          "Que prohíbe la participación ciudadana."
        ],
        c: 1,
        e: "El material señala la dependencia de fondos estables y las dificultades de articulación interinstitucional.",
        f: "Modelos de Política Criminal en América Latina."
      },
      {
        p: "Un municipio recupera parques, instala alumbrado, abre una escuela de oficios y crea una mesa de convivencia vecinal. La medida corresponde a…",
        o: ["Prevención (modelo preventivo)", "Punitivismo", "Justicia retributiva", "Régimen de excepción"],
        c: 0,
        e: "Son intervenciones sobre factores de riesgo y espacios, propias del enfoque preventivo.",
        f: "Modelos de Política Criminal en América Latina."
      },
      {
        p: "Según el material, el modelo preventivo suele lograr…",
        o: [
          "Reducción de la violencia en espacios específicos y mayor participación de la sociedad civil.",
          "La desaparición total del delito.",
          "Mayor hacinamiento carcelario.",
          "Menos coordinación institucional."
        ],
        c: 0,
        e: "Entre sus resultados se destacan la reducción de violencia en lugares concretos y más participación ciudadana.",
        f: "Modelos de Política Criminal en América Latina."
      }
    ]
  },
  {
    id: "q06",
    slug: "integral-y-restaurativo",
    titulo: "Integral y restaurativo",
    tema: "Modelos integral y restaurativo",
    desc: "Panamá, Uruguay, México y Costa Rica como ejemplos.",
    preguntas: [
      {
        p: "Panamá se presenta en el material como ejemplo de modelo…",
        o: ["Represivo", "Integral", "Restaurativo puro", "Liberal"],
        c: 1,
        e: "El material cita a Panamá por políticas con eje en prevención, educación y programas de reinserción social.",
        f: "Modelos de Política Criminal en América Latina."
      },
      {
        p: "Uruguay se menciona por…",
        o: [
          "Políticas integrales para jóvenes en conflicto con la ley.",
          "Su régimen de excepción.",
          "La privatización de sus cárceles.",
          "El Plan Cuadrante."
        ],
        c: 0,
        e: "El ejemplo uruguayo son las políticas integrales dirigidas a jóvenes en conflicto con la ley.",
        f: "Modelos de Política Criminal en América Latina."
      },
      {
        p: "México y Costa Rica aparecen como ejemplos de…",
        o: [
          "Justicia restaurativa y mediación penal juvenil.",
          "Modelo represivo.",
          "Prevención situacional.",
          "Política criminal militarizada."
        ],
        c: 0,
        e: "México por la justicia restaurativa en el sistema acusatorio y Costa Rica por la mediación penal juvenil.",
        f: "Modelos de Política Criminal en América Latina."
      },
      {
        p: "La principal limitación del modelo restaurativo es que…",
        o: [
          "Es poco aplicable a delitos graves y al crimen organizado.",
          "No permite la participación de la víctima.",
          "Exige menos voluntad política.",
          "Solo funciona en países ricos."
        ],
        c: 0,
        e: "El material advierte que es poco aplicable a delitos graves y al crimen organizado, y que exige cambio cultural.",
        f: "Modelos de Política Criminal en América Latina."
      },
      {
        p: "Un sistema impone pena por el delito, pero además ofrece tratamiento de adicciones, educación y trabajo, y coordina salud, seguridad y desarrollo social. Eso es…",
        o: ["Modelo integral", "Modelo represivo", "Modelo restaurativo exclusivamente", "Modelo inquisitivo"],
        c: 0,
        e: "La combinación de represión, prevención y resocialización con enfoque multidisciplinario define al modelo integral.",
        f: "Modelos de Política Criminal en América Latina."
      }
    ]
  },
  {
    id: "q07",
    slug: "el-estado-y-sus-limites",
    titulo: "El Estado y sus límites",
    tema: "Estado democrático de derecho",
    desc: "Qué puede y qué no puede hacer el poder penal.",
    preguntas: [
      {
        p: "En un Estado democrático de derecho, la política criminal debe desarrollarse…",
        o: [
          "Con estricto respeto a las garantías y a la dignidad de la persona.",
          "Sin límites, si baja la criminalidad.",
          "Solo con base en la opinión pública.",
          "Al margen de la Constitución."
        ],
        c: 0,
        e: "García Aquino insiste en que su desarrollo debe respetar las garantías de la persona.",
        f: "García Aquino, Política criminal en un Estado de derecho."
      },
      {
        p: "Según García Aquino, el Estado no puede adelantar su línea de defensa penal hasta incriminar conductas…",
        o: [
          "Lejanas a la puesta en riesgo de bienes jurídicos.",
          "Que ya causaron un daño grave.",
          "Tipificadas en el Código Penal.",
          "Que afectan la propiedad."
        ],
        c: 0,
        e: "Adelantar la línea de defensa para alimentar una seguridad total golpea la dignidad y la inviolabilidad del individuo.",
        f: "García Aquino, Política criminal en un Estado de derecho."
      },
      {
        p: "La misión inmediata de la política criminal es…",
        o: [
          "Construir una mejor respuesta preventiva para mantener la criminalidad bajo límites tolerables.",
          "Aumentar el número de condenas.",
          "Sustituir al Poder Judicial.",
          "Administrar el presupuesto penitenciario."
        ],
        c: 0,
        e: "La misión inmediata es elaborar una mejor respuesta preventiva frente a hechos antisociales no tolerados.",
        f: "García Aquino."
      },
      {
        p: "La misión mediata apunta a…",
        o: [
          "Proteger y promover la dignidad humana, la igualdad, la justicia social y la paz social.",
          "Lograr la mayor cantidad de encarcelamientos.",
          "Garantizar la impunidad.",
          "Fortalecer solo a la policía."
        ],
        c: 0,
        e: "Mediatamente busca proteger principios como la dignidad y valores como la igualdad y la justicia social, para mantener la paz social.",
        f: "García Aquino."
      },
      {
        p: "Se propone castigar con cárcel a quien “parezca sospechoso” aunque no haya daño ni riesgo concreto. Desde el Estado de derecho, esa propuesta es…",
        o: [
          "Inadmisible, porque incrimina conductas lejanas al riesgo de bienes jurídicos.",
          "Correcta, porque previene delitos futuros.",
          "Propia del modelo restaurativo.",
          "Un criterio de oportunidad."
        ],
        c: 0,
        e: "Incriminar sospechas sin riesgo concreto contradice los límites de la política criminal en un Estado democrático de derecho.",
        f: "García Aquino."
      }
    ]
  },
  {
    id: "q08",
    slug: "criminalizar-y-descriminalizar",
    titulo: "Criminalizar y descriminalizar",
    tema: "Penalización y despenalización",
    desc: "Las dos caras de las reformas penales panameñas.",
    preguntas: [
      {
        p: "La penalización consiste en…",
        o: [
          "Incluir nuevas conductas como delitos.",
          "Sacar conductas del Código Penal.",
          "Reducir las penas.",
          "Sustituir la cárcel por multa."
        ],
        c: 0,
        e: "Penalizar es incorporar nuevas conductas al catálogo de delitos.",
        f: "Análisis comparativo de las reformas penales de Panamá."
      },
      {
        p: "La despenalización implica…",
        o: [
          "Excluir conductas que dejan de ser consideradas ilícitas.",
          "Crear nuevos tipos penales.",
          "Aumentar las penas.",
          "Prohibir las salidas alternas."
        ],
        c: 0,
        e: "Despenalizar es retirar conductas del ámbito penal o reducir el uso del Derecho penal.",
        f: "Análisis comparativo de las reformas penales de Panamá."
      },
      {
        p: "¿Qué ley panameña tipificó el femicidio como delito autónomo?",
        o: ["Ley 82 de 2013", "Ley 16 de 2016", "Ley 81 de 2019", "Ley 476 de 2025"],
        c: 0,
        e: "La Ley 82 de 2013 tipificó el femicidio y fortaleció medidas de protección a víctimas de violencia doméstica.",
        f: "Análisis comparativo de las reformas penales de Panamá."
      },
      {
        p: "La Ley 16 de 2016 instituyó en Panamá…",
        o: [
          "La Justicia Comunitaria de Paz.",
          "Los delitos informáticos.",
          "El hurto pecuario.",
          "El sistema acusatorio."
        ],
        c: 0,
        e: "Trasladó a los jueces de paz la resolución de conflictos leves, sacándolos del sistema penal ordinario.",
        f: "Análisis comparativo de las reformas penales de Panamá."
      },
      {
        p: "Pese a las reformas, la medida más utilizada en Panamá sigue siendo…",
        o: ["La privación de libertad.", "La mediación.", "El trabajo comunitario.", "La conciliación."],
        c: 0,
        e: "La prisión preventiva y la pena de cárcel siguen siendo las medidas más aplicadas, incluso donde existen alternativas.",
        f: "Análisis comparativo de las reformas penales de Panamá."
      }
    ]
  },
  {
    id: "q09",
    slug: "panama-reformas-recientes",
    titulo: "Panamá: reformas recientes",
    tema: "Legislación panameña",
    desc: "Leyes 81/2019, 82/2013, 16/2016 y 476/2025.",
    preguntas: [
      {
        p: "La Ley 81 de 2019 se relaciona con…",
        o: [
          "Protección de datos personales y delitos informáticos.",
          "Violencia de género.",
          "Justicia de paz.",
          "Hurto pecuario."
        ],
        c: 0,
        e: "El material la vincula con el acceso indebido a sistemas, el fraude electrónico y la protección de datos personales.",
        f: "Análisis comparativo de las reformas penales de Panamá."
      },
      {
        p: "La Ley 476 de 26 de junio de 2025 modifica el Código Penal y el Código Procesal Penal en materia de…",
        o: ["Hurto pecuario", "Femicidio", "Narcotráfico", "Delitos ambientales"],
        c: 0,
        e: "Su título oficial lo indica: modificaciones relacionadas con el delito de hurto pecuario.",
        f: "Ley 476 de 26 de junio de 2025."
      },
      {
        p: "Las reformas penales panameñas suelen tener un carácter…",
        o: [
          "Reactivo, frente a crisis sociales, presión mediática o compromisos internacionales.",
          "Puramente preventivo y planificado.",
          "Restaurativo y despenalizador.",
          "Técnico y sin relación con la opinión pública."
        ],
        c: 0,
        e: "El material describe una tendencia reactiva a crisis, presión mediática y compromisos internacionales.",
        f: "Análisis comparativo de las reformas penales de Panamá."
      },
      {
        p: "Se sanciona el acceso indebido a sistemas, el fraude electrónico y los ataques a datos personales. Ese paquete corresponde a…",
        o: [
          "La Ley 81 de 2019 y reformas previas sobre delitos informáticos.",
          "La Ley 16 de 2016.",
          "La Ley 82 de 2013.",
          "El Código Procesal Penal de 2008."
        ],
        c: 0,
        e: "La Ley 81 de 2019 y reformas anteriores incorporaron esas conductas al catálogo penal.",
        f: "Análisis comparativo de las reformas penales de Panamá."
      },
      {
        p: "Entre las medidas alternativas a la privación de libertad que se fomentan están…",
        o: [
          "Trabajo comunitario, reparación del daño y libertad vigilada.",
          "Cadena perpetua y aislamiento.",
          "Prisión preventiva obligatoria.",
          "Juicios colectivos."
        ],
        c: 0,
        e: "El material menciona el trabajo comunitario, la reparación del daño y la libertad vigilada para delitos no graves.",
        f: "Análisis comparativo de las reformas penales de Panamá."
      }
    ]
  },
  {
    id: "q10",
    slug: "prevencion-conceptos-base",
    titulo: "Prevención: conceptos base",
    tema: "Prevención del delito",
    desc: "Fuentes de las políticas y criminología ambiental.",
    preguntas: [
      {
        p: "Prevenir el delito significa…",
        o: [
          "Actuar sobre sus causas y factores de riesgo antes de que ocurra.",
          "Aumentar las penas después del delito.",
          "Juzgar más rápido.",
          "Construir más cárceles."
        ],
        c: 0,
        e: "La prevención actúa antes del delito, sobre sus causas y factores de riesgo.",
        f: "Políticas de prevención del delito."
      },
      {
        p: "¿Cuáles son fuentes de las políticas públicas de prevención según el material?",
        o: [
          "Demandas sociales, investigación y evidencia, experiencias previas, organismos internacionales y el público.",
          "Solo la opinión de la policía.",
          "Únicamente las encuestas de percepción.",
          "Solo los tratados internacionales."
        ],
        c: 0,
        e: "El material enumera esas cinco fuentes y advierte sobre combinarlas con evidencia.",
        f: "Políticas de prevención del delito."
      },
      {
        p: "El riesgo de basarse solo en las demandas sociales es…",
        o: [
          "Diseñar políticas reactivas guiadas por la percepción del riesgo y no por la realidad del crimen.",
          "Destinar demasiado dinero a la investigación.",
          "Ignorar a la ciudadanía.",
          "Reducir la participación del público."
        ],
        c: 0,
        e: "Las demandas sociales pueden llevar a un enfoque reactivo y a políticas más centradas en la percepción que en la realidad del crimen.",
        f: "Políticas de prevención del delito."
      },
      {
        p: "Para Brantingham y Brantingham (1991), la criminología ambiental entiende el delito como…",
        o: [
          "La confluencia de infractores, víctimas u objetivos y una ley infringida en un tiempo y lugar concreto.",
          "Un rasgo hereditario.",
          "Un problema exclusivamente psicológico.",
          "Una consecuencia inevitable de la pobreza."
        ],
        c: 0,
        e: "Es la definición que el material cita de Environmental Criminology (1991).",
        f: "Políticas de prevención del delito."
      },
      {
        p: "La teoría de la ventana rota se relaciona con…",
        o: [
          "El cuidado de los espacios públicos y la cultura ciudadana.",
          "La reincidencia carcelaria.",
          "La mediación penal.",
          "El principio de oportunidad."
        ],
        c: 0,
        e: "El material la vincula con los espacios públicos, la cultura ciudadana y el cuidado del entorno.",
        f: "Políticas de prevención del delito."
      }
    ]
  },
  {
    id: "q11",
    slug: "programas-de-prevencion",
    titulo: "Programas que funcionaron (y sus límites)",
    tema: "Prevención comparada",
    desc: "Brasil, Costa Rica, Ecuador, Chile y México.",
    preguntas: [
      {
        p: "El programa Barrio Seguro (Brasil) registró en algunos barrios una reducción del…",
        o: ["40 % en la tasa de homicidios", "5 % en robos", "90 % en homicidios", "15 % en hurtos"],
        c: 0,
        e: "El material reporta una reducción del 40 % en la tasa de homicidios en algunos de los barrios intervenidos.",
        f: "Políticas de prevención del delito."
      },
      {
        p: "El Plan Integral de Seguridad Ciudadana de Costa Rica redujo la tasa de homicidios de 11.5 (2011) a…",
        o: ["5.2 en 2019", "8.0 en 2015", "3.1 en 2020", "10.0 en 2018"],
        c: 0,
        e: "Pasó de 11.5 a 5.2 homicidios por cada 100,000 habitantes entre 2011 y 2019.",
        f: "Políticas de prevención del delito."
      },
      {
        p: "El programa Vive Seguro (Ecuador) logró en su primer año…",
        o: ["−14 % en homicidios y −9 % en robos y asaltos", "−40 % en homicidios", "+14 % en denuncias", "−2 % en robos"],
        c: 0,
        e: "El Gobierno de Ecuador informó una disminución del 14 % en homicidios y del 9 % en robos y asaltos.",
        f: "Políticas de prevención del delito."
      },
      {
        p: "El Plan Cuadrante (Chile) ha sido criticado por…",
        o: [
          "Su enfoque punitivo y por no abordar las causas profundas de la delincuencia.",
          "No tener presencia policial.",
          "Ser un programa exclusivamente rural.",
          "Prohibir la participación vecinal."
        ],
        c: 0,
        e: "El material destaca su presencia policial, pero también la crítica a su enfoque punitivo.",
        f: "Políticas de prevención del delito."
      },
      {
        p: "El programa Vecino Vigilante (México) se basa en…",
        o: [
          "La colaboración y comunicación entre vecinos para prevenir el delito.",
          "El uso del ejército.",
          "La privatización de la seguridad.",
          "Los juicios colectivos."
        ],
        c: 0,
        e: "Se sustenta en que la colaboración y comunicación vecinal pueden prevenir el delito.",
        f: "Políticas de prevención del delito."
      }
    ]
  },
  {
    id: "q12",
    slug: "prevencion-generica",
    titulo: "Prevención genérica",
    tema: "Prevención y factores",
    desc: "Tokio 1970, factores individuales, sociales y ecológicos.",
    preguntas: [
      {
        p: "El aforismo “es mejor prevenir que curar” proviene de…",
        o: ["Los higienistas y la medicina.", "La Escuela de Chicago.", "El derecho romano.", "La criminología positivista."],
        c: 0,
        e: "El material lo atribuye a los higienistas, como principio indiscutible en medicina.",
        f: "Prevención genérica."
      },
      {
        p: "El IV Congreso de la ONU sobre prevención del delito y tratamiento del delincuente se reunió en…",
        o: ["Tokio, agosto de 1970", "Ginebra, 1955", "Viena, 2000", "Nueva York, 1990"],
        c: 0,
        e: "Fue el IV Congreso de las Naciones Unidas, reunido en Tokio en agosto de 1970.",
        f: "Prevención genérica."
      },
      {
        p: "Según el material, ninguna campaña preventiva es eficaz sin…",
        o: [
          "La cooperación y participación de la sociedad en general.",
          "El aumento de penas.",
          "La militarización.",
          "El secreto de las actuaciones."
        ],
        c: 0,
        e: "Se insiste en la participación del público y la cooperación de la sociedad.",
        f: "Prevención genérica."
      },
      {
        p: "La castración y esterilización de personas con trastornos, presentadas como prevención, son rechazadas porque…",
        o: [
          "Afectan los derechos humanos de reproducción.",
          "Son demasiado costosas.",
          "No reducen la criminalidad.",
          "Requieren autorización judicial."
        ],
        c: 0,
        e: "El material las critica expresamente por afectar los derechos humanos de reproducción.",
        f: "Prevención genérica."
      },
      {
        p: "La emigración campesina, las ciudades muy pobladas y la vigilancia nocturna son factores…",
        o: ["Ecológicos", "Hereditarios", "Endocrinos", "Procesales"],
        c: 0,
        e: "El material los ubica entre los factores ecológicos de la criminalidad.",
        f: "Prevención genérica."
      }
    ]
  },
  {
    id: "q13",
    slug: "politica-penitenciaria",
    titulo: "Política penitenciaria",
    tema: "Resocialización · Política penitenciaria",
    desc: "Quién ejecuta los programas y qué es el tratamiento integral.",
    preguntas: [
      {
        p: "En la planificación, la política penitenciaria se estudia dentro del tema de…",
        o: ["La resocialización.", "La dogmática penal.", "El principio de oportunidad.", "La victimología."],
        c: 0,
        e: "El contenido 1.5 (Resocialización) incluye la política penitenciaria y sus coadyuvantes.",
        f: "Planificación ICS-402B, Eje 1."
      },
      {
        p: "Según López Sinisterra, ¿qué instituciones del Estado apoyan los programas en las cárceles panameñas?",
        o: [
          "MEDUCA (educativos) e INADEH (vocacionales).",
          "La Asamblea y la Contraloría.",
          "El Tribunal Electoral y la AIG.",
          "El IFARHU y la UTP."
        ],
        c: 0,
        e: "El artículo señala que el MEDUCA implementa los programas educativos y el INADEH los vocacionales.",
        f: "López Sinisterra (2020)."
      },
      {
        p: "Un interno recibe educación, capacitación laboral, atención médica y apoyo psicológico. Eso corresponde a…",
        o: [
          "Un tratamiento integral penitenciario.",
          "Una medida cautelar.",
          "Un criterio de oportunidad.",
          "Una salida alterna."
        ],
        c: 0,
        e: "El tratamiento integral combina educación, trabajo, salud y apoyo psicológico para la resocialización.",
        f: "Planificación ICS-402B / López Sinisterra (2020)."
      },
      {
        p: "Los programas vocacionales en las cárceles panameñas son desarrollados principalmente por…",
        o: ["El INADEH", "El Ministerio Público", "La Corte Suprema", "El Tribunal Electoral"],
        c: 0,
        e: "El Instituto Nacional para el Desarrollo Humano (INADEH) desarrolla los programas vocacionales.",
        f: "López Sinisterra (2020)."
      },
      {
        p: "Los programas educativos en los centros penitenciarios son implementados por…",
        o: ["El MEDUCA", "El INADEH", "La Policía Nacional", "El Órgano Judicial"],
        c: 0,
        e: "El Ministerio de Educación (MEDUCA) implementa los programas educativos en los centros penitenciarios.",
        f: "López Sinisterra (2020)."
      }
    ]
  },
  {
    id: "q14",
    slug: "resocializacion-y-reincidencia",
    titulo: "Resocialización y reincidencia",
    tema: "Resocialización · Reincidencia",
    desc: "Qué dicen los datos de La Joya y La Joyita.",
    preguntas: [
      {
        p: "La reincidencia delictiva se define como…",
        o: [
          "La reiteración de un delito, que puede ser o no de la misma naturaleza que el primero.",
          "La primera condena de una persona.",
          "La absolución por falta de pruebas.",
          "El cumplimiento de una medida cautelar."
        ],
        c: 0,
        e: "Es la definición que usa López Sinisterra al comenzar el análisis.",
        f: "López Sinisterra (2020)."
      },
      {
        p: "Según López Sinisterra, los programas de resocialización de La Joya y La Joyita son en realidad…",
        o: [
          "Pseudoprogramas, porque no fueron concebidos con los elementos de un programa de resocialización.",
          "Modelos internacionales exitosos.",
          "Programas avalados por la ONU.",
          "Programas exclusivamente universitarios."
        ],
        c: 0,
        e: "Concluye que son pseudoprogramas y que, por eso, se desconoce si producen rehabilitación.",
        f: "López Sinisterra (2020)."
      },
      {
        p: "En La Joya, el 57 % de los internos reincidentes cometió…",
        o: ["Delitos diferentes", "Delitos iguales", "Delitos menores", "Delitos culposos"],
        c: 0,
        e: "El 57 % cometió delitos diferentes, el 24 % delitos iguales y el 19 % otros.",
        f: "López Sinisterra (2020)."
      },
      {
        p: "El objetivo declarado de los programas de resocialización es…",
        o: [
          "La reinserción efectiva de los internos al terminar su condena.",
          "Aumentar la población carcelaria.",
          "Sustituir a los jueces.",
          "Reducir el presupuesto penitenciario."
        ],
        c: 0,
        e: "Buscan la reinserción efectiva de quienes culminan sus condenas y su retorno al entorno social.",
        f: "López Sinisterra (2020)."
      },
      {
        p: "Muchos internos participan en los programas porque la ley les permite…",
        o: [
          "Conmutar o disminuir la pena en un tercio de la condena.",
          "Salir libre de inmediato.",
          "Eliminar sus antecedentes.",
          "Elegir a las autoridades del penal."
        ],
        c: 0,
        e: "El artículo señala que la ley concede la posibilidad de conmutar o disminuir las penas en un tercio de la condena.",
        f: "López Sinisterra (2020)."
      }
    ]
  },
  {
    id: "q15",
    slug: "la-joya-y-la-joyita",
    titulo: "La Joya y La Joyita",
    tema: "Cárceles panameñas",
    desc: "Hacinamiento, programas y crisis penitenciaria.",
    preguntas: [
      {
        p: "La Joya y La Joyita son…",
        o: [
          "Los centros penitenciarios con mayor número de internos de Panamá.",
          "Dos cárceles de máxima seguridad en Colombia.",
          "Programas de prevención comunitaria.",
          "Juzgados de paz."
        ],
        c: 0,
        e: "El artículo los identifica como las instituciones penitenciarias con mayor número de internos del país.",
        f: "López Sinisterra (2020)."
      },
      {
        p: "Algunas galeras de esos centros albergan entre 300 y 500 internos, lo que…",
        o: [
          "Viola las reglas mínimas para el tratamiento de los reclusos de la ONU.",
          "Cumple con los estándares internacionales.",
          "Es una medida de resocialización.",
          "Fue ordenado por un juez de paz."
        ],
        c: 0,
        e: "El autor califica esas condiciones como una clara violación a los derechos humanos y a las reglas mínimas de la ONU.",
        f: "López Sinisterra (2020)."
      },
      {
        p: "En La Joyita, los programas Sembrando Paz y Eco Sólidos son administrados por…",
        o: ["Los propios internos", "El MEDUCA", "Jueces de ejecución", "La Universidad de Panamá"],
        c: 0,
        e: "En La Joyita los programas se desarrollan en espacios abiertos o semiabiertos y algunos son administrados por internos.",
        f: "López Sinisterra (2020)."
      },
      {
        p: "En La Joya los programas se realizan en espacios cerrados y son administrados por…",
        o: ["Personal custodio", "Organizaciones no gubernamentales", "Internos extranjeros", "El Ministerio Público"],
        c: 0,
        e: "En La Joya los programas cuentan con mejores condiciones estructurales y son conducidos por funcionarios o custodios.",
        f: "López Sinisterra (2020)."
      },
      {
        p: "La reyerta de diciembre de 2019 en La Joyita dejó…",
        o: ["12 muertos y 13 heridos", "2 muertos y 3 heridos", "40 muertos", "Solo daños materiales"],
        c: 0,
        e: "El artículo reporta 12 muertos y 13 heridos en la disputa interna con armas cortas y largas.",
        f: "López Sinisterra (2020)."
      }
    ]
  },
  {
    id: "q16",
    slug: "el-regreso-a-la-calle",
    titulo: "El regreso a la calle",
    tema: "Reinserción social",
    desc: "Obstáculos, seguimiento al egresado y comunidad.",
    preguntas: [
      {
        p: "Entre los obstáculos a la reinserción están…",
        o: [
          "El hacinamiento, la falta de seguimiento, el estigma y la falta de empleo.",
          "La excesiva libertad de los egresados.",
          "La falta de cárceles.",
          "El exceso de programas universitarios."
        ],
        c: 0,
        e: "El artículo menciona el hacinamiento, la ausencia de control y seguimiento, el estigma y la falta de posibilidades de empleo.",
        f: "López Sinisterra (2020)."
      },
      {
        p: "López Sinisterra propone crear…",
        o: [
          "Un departamento de seguimiento al egresado del penal.",
          "Más megacárceles.",
          "Juicios colectivos.",
          "Un régimen de excepción."
        ],
        c: 0,
        e: "Propone un departamento de seguimiento con tutores y la reubicación en zonas libres de influencia de pandillas.",
        f: "López Sinisterra (2020)."
      },
      {
        p: "La distribución científica de los internos debe considerar…",
        o: [
          "Edad, reincidencia, delitos, enfermedades y peligrosidad, entre otras variables.",
          "Solo el delito cometido.",
          "Únicamente el país de origen.",
          "El nivel económico."
        ],
        c: 0,
        e: "El autor enumera edad, reincidencia, delitos primarios, enfermedades, peligrosidad, antecedentes y procedencia.",
        f: "López Sinisterra (2020)."
      },
      {
        p: "La experiencia universitaria en el Centro Penitenciario Femenino se desarrolló con…",
        o: [
          "La Universidad de Panamá, en el CRUSAN de San Miguelito.",
          "La Universidad de Harvard.",
          "El INADEH.",
          "La Universidad de Costa Rica."
        ],
        c: 0,
        e: "El artículo menciona experiencias con la Universidad de Panamá en el Centro Regional de San Miguelito (CRUSAN).",
        f: "López Sinisterra (2020)."
      },
      {
        p: "Un egresado vuelve a un barrio controlado por pandillas, no encuentra trabajo y reincide. Esto ilustra…",
        o: [
          "La falta de seguimiento y de entornos libres de influencia criminal.",
          "El éxito del modelo restaurativo.",
          "La eficacia de la prisión preventiva.",
          "Un criterio de oportunidad."
        ],
        c: 0,
        e: "El autor advierte que sin seguimiento ni reubicación, el egresado es captado de nuevo por las bandas y reincide.",
        f: "López Sinisterra (2020)."
      }
    ]
  },
  {
    id: "q17",
    slug: "constitucion-cpp-y-sistema-acusatorio",
    titulo: "Constitución, CPP y sistema acusatorio",
    tema: "Bases legales",
    desc: "Artículos 12 y 26, oralidad y garantías.",
    preguntas: [
      {
        p: "El artículo 26 del CPP panameño dispone que los tribunales deben resolver los conflictos penales…",
        o: [
          "Restaurando la armonía y la paz social, con la prisión como último recurso.",
          "Aplicando siempre la pena máxima.",
          "Priorizando la velocidad sobre las garantías.",
          "Conforme a la costumbre."
        ],
        c: 0,
        e: "El artículo 26 enfatiza la restauración de la armonía y la paz social y considera la prisión como último recurso.",
        f: "CPP de Panamá, art. 26."
      },
      {
        p: "El artículo 12 del CPP establece…",
        o: [
          "La excepcionalidad de las medidas cautelares privativas de libertad.",
          "La obligatoriedad de la prisión preventiva.",
          "La creación del Ministerio Público.",
          "El proceso monitorio."
        ],
        c: 0,
        e: "El artículo 12 consagra el principio de excepcionalidad de las medidas cautelares privativas de libertad.",
        f: "CPP de Panamá, art. 12."
      },
      {
        p: "El Sistema Penal Acusatorio se basa en…",
        o: [
          "La oralidad, la transparencia y la eficiencia judicial.",
          "La escritura y el secreto.",
          "La inquisición.",
          "Los juicios colectivos."
        ],
        c: 0,
        e: "El material describe el SPA como un sistema basado en oralidad, transparencia y eficiencia judicial.",
        f: "Salidas alternas de resolución de conflictos."
      },
      {
        p: "Un juez ordena prisión preventiva de forma automática, sin analizar alternativas. Conforme al CPP, esa decisión…",
        o: [
          "Contradice el principio de excepcionalidad del artículo 12.",
          "Es correcta porque la prisión siempre es la regla.",
          "Aplica un criterio de oportunidad.",
          "Es una salida alterna."
        ],
        c: 0,
        e: "La prisión preventiva es excepcional; su aplicación automática contradice el artículo 12.",
        f: "CPP de Panamá, art. 12."
      },
      {
        p: "El Código Procesal Penal de Panamá corresponde a…",
        o: [
          "La Ley 63 de 28 de agosto de 2008.",
          "La Ley 14 de 2007.",
          "La Ley 82 de 2013.",
          "La Ley 476 de 2025."
        ],
        c: 0,
        e: "El CPP panameño fue aprobado mediante la Ley 63 de 28 de agosto de 2008.",
        f: "CPP de Panamá."
      }
    ]
  },
  {
    id: "q18",
    slug: "conciliacion-y-mediacion",
    titulo: "Conciliación y mediación",
    tema: "Salidas alternas",
    desc: "Artículos 206 y 207-211 del CPP.",
    preguntas: [
      {
        p: "La conciliación está regulada en el…",
        o: ["Artículo 206 del CPP", "Artículo 12 del CPP", "Artículo 212 del CPP", "Artículo 26 del CPP"],
        c: 0,
        e: "La conciliación se regula en el artículo 206, con reglas generales en el artículo 204.",
        f: "CPP de Panamá, arts. 204 y 206."
      },
      {
        p: "En la mediación, el diálogo entre las partes lo facilita…",
        o: [
          "Un tercero neutral del Centro de Métodos Alternos.",
          "El fiscal del caso.",
          "El juez de garantías.",
          "La policía."
        ],
        c: 0,
        e: "La mediación cuenta con un tercero neutral del Centro de Métodos Alternos que facilita el acuerdo reparador.",
        f: "CPP de Panamá, arts. 207-211."
      },
      {
        p: "El acuerdo conciliatorio…",
        o: [
          "Suspende la acción penal y la extingue solo cuando se cumple totalmente lo pactado.",
          "Extingue la acción penal al firmarse.",
          "Es obligatorio para todas las partes.",
          "Solo procede en delitos graves."
        ],
        c: 0,
        e: "El acuerdo suspende la acción penal; si se incumple, el proceso se reactiva de inmediato.",
        f: "CPP de Panamá, art. 206."
      },
      {
        p: "En la mediación, el juez puede suspender el proceso hasta por…",
        o: [
          "Un mes, prorrogable por otro mes en casos de cuantificación del daño.",
          "Tres años improrrogables.",
          "Seis meses.",
          "Diez días."
        ],
        c: 0,
        e: "El juez puede suspender hasta por un mes, prorrogable por otro mes cuando se trata de cuantificar el daño.",
        f: "CPP de Panamá, arts. 207-211."
      },
      {
        p: "Las partes concilian, pero el imputado no cumple lo pactado. ¿Qué ocurre?",
        o: [
          "Se reactiva inmediatamente el proceso penal.",
          "Se archiva el expediente.",
          "Se extingue la acción penal.",
          "Se convierte en mediación."
        ],
        c: 0,
        e: "El cumplimiento extingue la acción; el incumplimiento reactiva el proceso penal.",
        f: "CPP de Panamá, art. 206."
      }
    ]
  },
  {
    id: "q19",
    slug: "oportunidad-y-suspension",
    titulo: "Oportunidad y suspensión del proceso",
    tema: "Salidas alternas",
    desc: "Artículos 212 y 217-219 del CPP.",
    preguntas: [
      {
        p: "Los criterios de oportunidad permiten al Ministerio Público…",
        o: [
          "Prescindir total o parcialmente de la acción penal, o limitarla a algunos partícipes.",
          "Dictar sentencia condenatoria.",
          "Sustituir al juez de garantías.",
          "Aplicar penas sin juicio."
        ],
        c: 0,
        e: "El artículo 212 faculta al Ministerio Público a prescindir total o parcialmente de la acción penal en los supuestos previstos.",
        f: "CPP de Panamá, art. 212."
      },
      {
        p: "El único autorizado para aplicar criterios de oportunidad es…",
        o: [
          "El Ministerio Público, por ser titular de la acción penal.",
          "El juez de garantías.",
          "El defensor público.",
          "La víctima."
        ],
        c: 0,
        e: "Al ser titular de la acción penal, solo el Ministerio Público puede aplicarlos.",
        f: "CPP de Panamá, art. 212."
      },
      {
        p: "La suspensión condicional del proceso se concede por un plazo de…",
        o: ["1 a 3 años", "3 a 5 años", "6 meses", "10 años"],
        c: 0,
        e: "El juez fija condiciones y un plazo entre uno y tres años.",
        f: "CPP de Panamá, arts. 217-219."
      },
      {
        p: "Entre las condiciones de la SCP pueden imponerse…",
        o: [
          "Aprender un oficio, trabajo voluntario o tratamiento médico o psicológico.",
          "Pagar una fianza millonaria.",
          "Guardar prisión domiciliaria perpetua.",
          "Renunciar a la defensa."
        ],
        c: 0,
        e: "El material menciona aprender un oficio, trabajo voluntario y tratamiento médico o psicológico, entre otras.",
        f: "CPP de Panamá, arts. 217-219."
      },
      {
        p: "El imputado cumple íntegramente las condiciones de la SCP. El resultado es…",
        o: [
          "La extinción de la acción penal y el archivo definitivo.",
          "La reapertura del proceso.",
          "La conversión en prisión preventiva.",
          "Un nuevo juicio oral."
        ],
        c: 0,
        e: "Cumplidas las condiciones, la acción penal se extingue y el expediente se archiva definitivamente.",
        f: "CPP de Panamá, arts. 217-219."
      }
    ]
  },
  {
    id: "q20",
    slug: "casos-del-taller",
    titulo: "Casos del taller",
    tema: "Casos comparados",
    desc: "Colombia, México y las preguntas de análisis.",
    preguntas: [
      {
        p: "La Política de Seguridad Democrática (2002-2010) se implementó en…",
        o: ["Colombia, con Álvaro Uribe.", "El Salvador, con Bukele.", "México, con Calderón.", "Panamá, con Martinelli."],
        c: 0,
        e: "El taller la ubica en Colombia, bajo el presidente Álvaro Uribe.",
        f: "Taller Formativo en clases."
      },
      {
        p: "Los “falsos positivos”, ejecuciones extrajudiciales presentadas como bajas en combate, ocurrieron en…",
        o: ["Colombia", "México", "El Salvador", "Costa Rica"],
        c: 0,
        e: "El taller los señala como una denuncia grave contra la política de seguridad colombiana.",
        f: "Taller Formativo en clases."
      },
      {
        p: "La reforma constitucional de 2008 en México estableció…",
        o: [
          "La transición al sistema penal acusatorio y oral, con un plazo de ocho años.",
          "La pena de muerte.",
          "El juicio por jurados obligatorio.",
          "La abolición de la prisión preventiva."
        ],
        c: 0,
        e: "La reforma de 2008 fijó la transición al sistema acusatorio oral con un plazo de ocho años para su implementación nacional.",
        f: "Taller Formativo en clases."
      },
      {
        p: "El Código Nacional de Procedimientos Penales de México se creó en…",
        o: ["2014", "2008", "2000", "2022"],
        c: 0,
        e: "El Código Nacional de Procedimientos Penales es de 2014.",
        f: "Taller Formativo en clases."
      },
      {
        p: "En México, más del 90 % de los delitos no llegan a sentencia. Eso evidencia…",
        o: [
          "Un problema estructural de impunidad.",
          "El éxito del sistema acusatorio.",
          "La reducción del crimen organizado.",
          "La eficacia de la prisión preventiva."
        ],
        c: 0,
        e: "El taller lo presenta como una limitación estructural: la reforma modernizó el proceso, pero la impunidad persiste.",
        f: "Taller Formativo en clases."
      }
    ]
  }
];
