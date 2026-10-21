/* =========================================================
   Práctica específica del Parcial 2
   Cinco quizzes, cinco mazos de flashcards y un simulacro
   oficial. Todo sale de los PDF indicados por la profesora.
   ========================================================= */

window.FUENTES.push(
  {
    n: "Borja Jiménez, E. (2003). Sobre el concepto de política criminal. Una aproximación a su significado desde la obra de Claus Roxin.",
    d: "Artículo del Parcial 2: definición de Roxin, conferencia de Berlín de 1970, von Liszt, Feuerbach y crítica de Borja."
  },
  {
    n: "Blanco Lozano, C. (2008). Tratado de Política Criminal, Tomo II. Capítulo I: Orígenes científicos de la política criminal.",
    d: "Historia de la disciplina: etapa estática, época dinámica, fase humanitaria, dirección biológica y corriente racionalista."
  },
  {
    n: "Estrategias de reacción social. Despenalización, Desprisionalización, Desjudicialización y Descriminalización.",
    d: "Diapositivas de la clase de Política Criminal (Diana L. Núñez, UNACHI): definiciones, diferencias y ejemplos de las cuatro D."
  },
  {
    n: "Reyes Echandía, A. Política criminal. Capítulo IV: Otras formas de reacción social.",
    d: "Desarrollo de las cuatro D: desprisionalización, despenalización, desjudicialización y descriminalización."
  },
  {
    n: "Políticas de prevención del delito (diapositivas).",
    d: "Fuentes de la política preventiva, evidencia, espacios públicos, criminología ambiental y programas comparados."
  }
);

window.QUIZZES.push(
  {
    id: "q21",
    slug: "concepto-roxin",
    titulo: "Concepto: Roxin y la dogmática",
    tema: "Parcial 2 · concepto",
    p2: true,
    desc: "Roxin, von Liszt, Feuerbach y la relación entre dogmática y política criminal.",
    preguntas: [
      {
        p: "Para Roxin, ¿cuál es el objeto principal de la política criminal?",
        o: [
          "Decidir cómo debe tratarse a las personas que atentan contra las reglas básicas de la convivencia y lesionan o ponen en peligro al individuo o a la comunidad.",
          "Administrar las cárceles y los presupuestos del Poder Judicial.",
          "Redactar exclusivamente los tipos penales de la parte especial.",
          "Sustituir la dogmática penal por la sociología criminal."
        ],
        c: 0,
        e: "Roxin define la política criminal por su objeto: el tratamiento de quienes atentan contra las reglas básicas de la convivencia y lesionan o ponen en peligro al individuo o a la comunidad.",
        f: "Borja Jiménez (2003)."
      },
      {
        p: "¿Qué posición ocupa la política criminal para Roxin?",
        o: [
          "Una posición intermedia entre ciencia y configuración social, entre teoría y práctica.",
          "Un apéndice de la criminología, sin relación con el Derecho penal.",
          "Una técnica policial de investigación del delito.",
          "Una rama de la política económica, separada de las garantías."
        ],
        c: 0,
        e: "Roxin la sitúa entre ciencia y configuración social, entre teoría y práctica: como ciencia se apoya en el conocimiento del delito; como política persigue ideas o intereses concretos.",
        f: "Borja Jiménez (2003)."
      },
      {
        p: "¿Qué propuso Roxin en su conferencia de Berlín de 1970?",
        o: [
          "Superar la separación entre dogmática penal y política criminal y abrir el sistema penal a las valoraciones político-criminales.",
          "Expulsar la política criminal de la universidad y dejarla solo al legislador.",
          "Volver al Derecho penal de autor y eliminar el principio de culpabilidad.",
          "Sustituir todas las penas por medidas de seguridad."
        ],
        c: 0,
        e: "Roxin propuso un sistema de Derecho penal abierto a las valoraciones político-criminales y orientado a las consecuencias, no dos compartimentos separados.",
        f: "Borja Jiménez (2003)."
      },
      {
        p: "¿Quién definió la política criminal como el conjunto de métodos represivos con los que el Estado reacciona contra el crimen?",
        o: ["Feuerbach", "Von Liszt", "Roxin", "Beccaria"],
        c: 0,
        e: "Feuerbach ponía el acento en la reacción represiva frente al delito.",
        f: "Borja Jiménez (2003)."
      },
      {
        p: "¿Qué significa, para Roxin, que las garantías también sean política criminal?",
        o: [
          "Que el nullum crimen y la culpabilidad forman parte de la política criminal propia de un Estado de derecho, no son un límite externo.",
          "Que las garantías pueden suspenderse cuando la seguridad lo exija.",
          "Que la política criminal solo puede ejercerla un juez.",
          "Que la dogmática debe desaparecer para dejar paso a la política."
        ],
        c: 0,
        e: "Roxin considera que los componentes limitadores de la reacción —legalidad, culpabilidad— pertenecen a la política criminal del Estado de derecho y son tan provechosos como sus orientaciones preventivas.",
        f: "Borja Jiménez (2003)."
      }
    ]
  },
  {
    id: "q22",
    slug: "capitulo-1-origenes",
    titulo: "Capítulo I: orígenes científicos",
    tema: "Parcial 2 · historia",
    p2: true,
    desc: "Etapas, autores y obras del Capítulo I del Tratado.",
    preguntas: [
      {
        p: "¿Cuál es el título del Capítulo I del Tratado de Política Criminal?",
        o: [
          "Orígenes científicos de la política criminal.",
          "La política criminal en Panamá.",
          "Teoría de la pena y del delito.",
          "Las salidas alternas en el sistema acusatorio."
        ],
        c: 0,
        e: "El capítulo se titula “Orígenes científicos de la política criminal” y reconstruye las etapas y autores que formaron la disciplina.",
        f: "Blanco Lozano (2008), Capítulo I."
      },
      {
        p: "¿Qué caracteriza a la etapa estática?",
        o: [
          "Los glosadores comentan el Derecho penal sin proponer reformas de las instituciones punitivas.",
          "Se crean los primeros centros de mediación penal.",
          "Beccaria critica la pena de muerte.",
          "Lombroso formula su teoría del delincuente nato."
        ],
        c: 0,
        e: "En la etapa estática los glosadores italianos se limitaron a enunciar fórmulas legales y citas doctrinales; no hicieron crítica ni propuesta de reforma.",
        f: "Blanco Lozano (2008), Capítulo I."
      },
      {
        p: "¿Quién escribió De los delitos y de las penas (1764)?",
        o: ["Cesare Beccaria", "Franz von Liszt", "Claus Roxin", "Enrico Ferri"],
        c: 0,
        e: "Beccaria publicó esta obra en 1764 y criticó las acusaciones secretas, los tormentos, las penas perpetuas, los trabajos forzados y la pena de muerte.",
        f: "Blanco Lozano (2008), Capítulo I."
      },
      {
        p: "¿Qué autor define la política criminal como el conocimiento de los medios que el legislador puede y debe hallar para impedir los delitos y proteger el Derecho natural?",
        o: ["Kleinschrod", "Feuerbach", "Roxin", "Garofalo"],
        c: 0,
        e: "Kleinschrod la define así, atendiendo a la especial disposición de cada Estado.",
        f: "Blanco Lozano (2008), Capítulo I."
      },
      {
        p: "¿Qué exige Henke como presupuesto metodológico de la política criminal?",
        o: [
          "Conocer la naturaleza humana, estudiar la antropología, la historia y las condiciones sociales, y conocer el mal penal según la cultura y las costumbres.",
          "Aplicar solo la ley positiva y prescindir de la realidad social.",
          "Calcular la pena únicamente por la gravedad del resultado.",
          "Delegar la política criminal en la policía y en los jueces."
        ],
        c: 0,
        e: "Henke exige tres presupuestos: la naturaleza humana; la antropología, la historia, el origen del delito y las condiciones sociales; y el conocimiento del mal penal según la cultura y las costumbres.",
        f: "Blanco Lozano (2008), Capítulo I."
      }
    ]
  },
  {
    id: "q23",
    slug: "estado-de-derecho",
    titulo: "Estado de derecho: límites y misión",
    tema: "Parcial 2 · Estado de derecho",
    p2: true,
    desc: "Definición, principios, misiones, víctima y seguridad.",
    preguntas: [
      {
        p: "¿Qué es la política criminal en sentido político, según García Aquino?",
        o: [
          "El conjunto de medidas y criterios jurídicos, sociales, educativos y económicos que los poderes públicos establecen para prevenir y reaccionar frente al fenómeno criminal.",
          "El conjunto de sentencias dictadas por los tribunales penales.",
          "La opinión pública sobre los delitos más graves.",
          "La organización interna de la policía."
        ],
        c: 0,
        e: "Incluye medidas y criterios de carácter jurídico, social, educativo, económico y similar, orientados a prevenir y reaccionar frente al crimen para mantener la criminalidad bajo límites tolerables.",
        f: "García Aquino."
      },
      {
        p: "¿Cuál es la misión inmediata de la política criminal?",
        o: [
          "Construir una mejor respuesta preventiva frente a hechos antisociales no tolerados, para mantener la criminalidad bajo límites.",
          "Aumentar el número de condenas por año.",
          "Sustituir la Constitución por el Código Penal.",
          "Garantizar la impunidad de los delitos menores."
        ],
        c: 0,
        e: "La misión inmediata es elaborar una mejor respuesta preventiva para contener la criminalidad y permitir el libre desarrollo de la personalidad.",
        f: "García Aquino."
      },
      {
        p: "¿Cuál es la misión mediata de la política criminal?",
        o: [
          "Proteger y promover la dignidad humana, la igualdad, la justicia social y la paz social.",
          "Solo reducir las tasas de homicidios.",
          "Administrar las cárceles con eficiencia.",
          "Capacitar a los fiscales en técnicas de interrogatorio."
        ],
        c: 0,
        e: "La misión mediata busca proteger la dignidad y los principios que se derivan de ella, así como la igualdad y la justicia social, para mantener la paz social.",
        f: "García Aquino."
      },
      {
        p: "Un Estado quiere castigar conductas que todavía no ponen en riesgo ningún bien jurídico, con el argumento de “seguridad total”. ¿Qué límite rompe?",
        o: [
          "La mínima intervención y la lesividad: no se puede incriminar lo lejano a la puesta en peligro de bienes jurídicos.",
          "El principio de publicidad del juicio.",
          "La regla de la cosa juzgada.",
          "El derecho a la doble instancia."
        ],
        c: 0,
        e: "García Aquino señala que la política criminal no puede adelantar la línea de defensa hasta incriminar conductas lejanas a la puesta en riesgo de bienes jurídicos; eso afecta la mínima intervención y la dignidad.",
        f: "García Aquino."
      },
      {
        p: "¿Qué papel tiene la víctima en la política criminal según García Aquino?",
        o: [
          "Un papel activo: la política criminal corrige los defectos y excesos en el tratamiento de la víctima dentro del sistema penal, con apoyo de la victimología y la victimo-dogmática.",
          "Un papel pasivo: solo recibe una indemnización económica.",
          "Ninguno: la política criminal solo se ocupa del delincuente.",
          "Solo puede intervenir si el fiscal se lo autoriza."
        ],
        c: 0,
        e: "El artículo reivindica a la víctima desde la victimología, el Derecho penal y la victimo-dogmática; la política criminal corrige defectos y excesos y no se limita a indemnizarla.",
        f: "García Aquino."
      }
    ]
  },
  {
    id: "q24",
    slug: "cuatro-d",
    titulo: "Las cuatro D en casos",
    tema: "Parcial 2 · reacción social",
    p2: true,
    desc: "Casos para distinguir despenalización, desprisionalización, desjudicialización y descriminalización.",
    preguntas: [
      {
        p: "Una ley convierte una falta que antes se castigaba con días de cárcel en una infracción administrativa con multa. ¿Qué estrategia es?",
        o: ["Despenalización", "Descriminalización", "Desprisionalización", "Desjudicialización"],
        c: 0,
        e: "La conducta sigue regulada, pero sale de la esfera penal y pasa a una jurisdicción administrativa. Eso es despenalización, no descriminalización.",
        f: "Estrategias de reacción social; Reyes Echandía, Capítulo IV."
      },
      {
        p: "Un condenado por un delito menor cumple trabajo comunitario y libertad vigilada en lugar de entrar a prisión. ¿Qué estrategia es?",
        o: ["Desprisionalización", "Despenalización", "Descriminalización", "Desjudicialización"],
        c: 0,
        e: "Sigue siendo penalmente responsable, pero la sanción se ejecuta fuera de la cárcel. Eso es desprisionalización.",
        f: "Estrategias de reacción social; Reyes Echandía, Capítulo IV."
      },
      {
        p: "Dos partes resuelven un conflicto penal mediante mediación y llegan a un acuerdo sin juicio. ¿Qué estrategia es?",
        o: ["Desjudicialización", "Desprisionalización", "Despenalización", "Descriminalización"],
        c: 0,
        e: "Se evita el proceso judicial formal y se usa una vía alternativa. Eso es desjudicialización.",
        f: "Estrategias de reacción social; Reyes Echandía, Capítulo IV."
      },
      {
        p: "El legislador deroga un tipo penal: la conducta deja de ser delito y pasa a ser lícita o indiferente. ¿Qué estrategia es?",
        o: ["Descriminalización", "Despenalización", "Desprisionalización", "Desjudicialización"],
        c: 0,
        e: "La conducta desaparece del catálogo penal. No es solo un cambio de sanción: es descriminalización.",
        f: "Estrategias de reacción social; Reyes Echandía, Capítulo IV."
      },
      {
        p: "¿Cuál es la diferencia central entre despenalización y descriminalización?",
        o: [
          "La despenalización cambia la sanción o la jurisdicción; la descriminalización elimina el carácter delictivo de la conducta.",
          "La despenalización elimina el delito; la descriminalización solo cambia la cárcel por multa.",
          "Son sinónimos exactos.",
          "La descriminalización solo la aplica el juez; la despenalización, el fiscal."
        ],
        c: 0,
        e: "La despenalización saca la conducta de la esfera penal hacia otra jurisdicción, pero la conducta sigue regulada. La descriminalización hace desaparecer el delito del catálogo penal.",
        f: "Estrategias de reacción social; Reyes Echandía, Capítulo IV."
      }
    ]
  },
  {
    id: "q25",
    slug: "prevencion-diapositivas",
    titulo: "Prevención: diapositivas",
    tema: "Parcial 2 · prevención",
    p2: true,
    desc: "Fuentes, evidencia, espacios públicos y programas con cifras.",
    preguntas: [
      {
        p: "¿Cuáles son las cinco fuentes de las políticas de prevención del delito que mencionan las diapositivas?",
        o: [
          "Demandas de la sociedad, investigación y evidencia, experiencias previas, organismos internacionales y el público.",
          "Policía, ejército, jueces, fiscales y cárceles.",
          "Impuestos, presupuesto, deuda, inflación y empleo.",
          "Redes sociales, televisión, radio, prensa y publicidad."
        ],
        c: 0,
        e: "Las diapositivas identifican esas cinco fuentes: demandas sociales, investigación y evidencia, experiencias previas, organismos internacionales y el público.",
        f: "Políticas de prevención del delito."
      },
      {
        p: "¿Qué riesgo tiene diseñar la prevención solo a partir de las demandas de la sociedad?",
        o: [
          "Producir políticas reactivas guiadas por la percepción del riesgo y no por la realidad del crimen.",
          "Aumentar automáticamente la participación ciudadana.",
          "Reducir la influencia de los organismos internacionales.",
          "Eliminar la necesidad de evaluar los programas."
        ],
        c: 0,
        e: "El material advierte que las demandas sociales pueden llevar a un enfoque reactivo y a políticas más centradas en la percepción del riesgo que en la realidad del crimen.",
        f: "Políticas de prevención del delito."
      },
      {
        p: "Según las diapositivas, ¿qué pasó con diez programas experimentales de prevención anteriores a 1970?",
        o: [
          "Nueve no lograron reducir la delincuencia oficial frente a los grupos de control.",
          "Todos redujeron la delincuencia en más del 50 %.",
          "Ninguno fue evaluado.",
          "Todos se centraron en la prevención primaria."
        ],
        c: 0,
        e: "El material cita a Berleman (1980): de diez programas con diseños experimentales anteriores a 1970, nueve no pudieron reducir la delincuencia oficial en comparación con los controles.",
        f: "Políticas de prevención del delito."
      },
      {
        p: "¿Cómo define la criminología ambiental el delito?",
        o: [
          "Como la confluencia de infractores, víctimas u objetivos y una ley infringida en un tiempo y lugar concretos.",
          "Como el resultado exclusivo de la pobreza.",
          "Como una enfermedad hereditaria.",
          "Como una decisión únicamente individual, sin entorno."
        ],
        c: 0,
        e: "Es la definición de Brantingham y Brantingham (1991) que citan las diapositivas.",
        f: "Políticas de prevención del delito."
      },
      {
        p: "¿Qué resultado se atribuye al Plan Integral de Seguridad Ciudadana de Costa Rica?",
        o: [
          "Bajó la tasa de homicidios de 11.5 en 2011 a 5.2 en 2019.",
          "Subió la tasa de homicidios de 5.2 a 11.5.",
          "Eliminó por completo los robos en 2019.",
          "Solo aumentó la presencia policial, sin cambios en homicidios."
        ],
        c: 0,
        e: "El material reporta esa reducción y la presenta como un plan integral de cuatro ejes: prevención social, presencia territorial y convivencia, participación ciudadana y rehabilitación, y reinserción social.",
        f: "Políticas de prevención del delito."
      }
    ]
  }
);

window.FLASHCARDS.push(
  {
    id: "p2-concepto",
    titulo: "Parcial 2 · Concepto",
    desc: "Roxin, von Liszt, Feuerbach y la relación con la dogmática.",
    cards: [
      { f: "¿Cuál es el objeto principal de la política criminal para Roxin?", r: "Decidir cómo debe tratarse a las personas que atentan contra las reglas básicas de la convivencia y lesionan o ponen en peligro al individuo o a la comunidad.", fte: "Borja Jiménez (2003)." },
      { f: "¿Entre qué dos polos sitúa Roxin la política criminal?", r: "Entre ciencia y configuración social, entre teoría y práctica.", fte: "Borja Jiménez (2003)." },
      { f: "¿Qué propuso Roxin en Berlín, 1970?", r: "Superar la separación entre dogmática penal y política criminal y abrir el sistema penal a las valoraciones político-criminales.", fte: "Borja Jiménez (2003)." },
      { f: "¿Cómo definía Feuerbach la política criminal?", r: "Como el conjunto de métodos represivos con los que el Estado reacciona contra el crimen.", fte: "Borja Jiménez (2003)." },
      { f: "¿A quién se atribuye “el Derecho penal es la Carta Magna del delincuente”?", r: "A Franz von Liszt.", fte: "Borja Jiménez (2003)." },
      { f: "¿Qué significa “barrera infranqueable de la política criminal”?", r: "Que la política criminal no puede saltarse el Derecho penal; Roxin advierte que esa frase fue interpretada de forma demasiado amplia y perjudicó a la dogmática.", fte: "Borja Jiménez (2003)." },
      { f: "¿Las garantías son un límite externo a la política criminal para Roxin?", r: "No. El nullum crimen y la culpabilidad también son parte de la política criminal del Estado de derecho.", fte: "Borja Jiménez (2003)." },
      { f: "¿Qué distinción hace Borja dentro de la política criminal de Roxin?", r: "Política criminal legislativa (criterios del legislador) y política criminal dogmática (elaborada al interpretar y sistematizar la ley).", fte: "Borja Jiménez (2003)." }
    ]
  },
  {
    id: "p2-capitulo1",
    titulo: "Parcial 2 · Capítulo I",
    desc: "Etapas, autores y obras de los orígenes científicos.",
    cards: [
      { f: "¿Cuál es el título del Capítulo I del Tratado?", r: "Orígenes científicos de la política criminal.", fte: "Blanco Lozano (2008)." },
      { f: "¿Qué caracteriza la etapa estática?", r: "Los glosadores comentan el Derecho penal sin proponer reformas; se limitan a fórmulas legales y citas doctrinales.", fte: "Blanco Lozano (2008)." },
      { f: "¿Quiénes son algunos jurisconsultos prácticos italianos que menciona el capítulo?", r: "Egidio Bossio, Julio Claro, Tiberio Deciano, Hipólito Marsilio Bononiense, Pedro Follerio, Aretinus y Farinacio.", fte: "Blanco Lozano (2008)." },
      { f: "¿Qué autor y qué obra simbolizan la fase humanitaria?", r: "Cesare Beccaria, con De los delitos y de las penas (1764).", fte: "Blanco Lozano (2008)." },
      { f: "¿Qué criticaba Beccaria?", r: "Las acusaciones secretas, los tormentos, las penas perpetuas, los trabajos forzados y la pena de muerte.", fte: "Blanco Lozano (2008)." },
      { f: "¿Qué corriente se asocia a Lombroso, Ferri y Garofalo?", r: "La dirección biológica o realista, que busca explicar y prevenir el delito por factores biológicos y sociales.", fte: "Blanco Lozano (2008)." },
      { f: "¿Cómo define Kleinschrod la política criminal?", r: "Como el conocimiento de los medios que el legislador puede y debe hallar, según la especial disposición de cada Estado, para impedir los delitos y proteger el Derecho natural.", fte: "Blanco Lozano (2008)." },
      { f: "¿Qué tres presupuestos metodológicos exige Henke?", r: "Conocer la naturaleza humana; estudiar la antropología, la historia, el origen del delito y las condiciones sociales; y conocer el mal penal según la cultura y las costumbres.", fte: "Blanco Lozano (2008)." },
      { f: "¿Qué papel le da Holtzendorff a la política criminal?", r: "La considera parte integrante de la ciencia del Derecho penal y distingue la perspectiva del legislador de la del juez.", fte: "Blanco Lozano (2008)." },
      { f: "¿En qué política deriva la corriente racionalista?", r: "En la política penitenciaria, con Arnim, Krohne y Yagemann, y luego con Berner, Geyer, Richard, Pessina y Manzini.", fte: "Blanco Lozano (2008)." }
    ]
  },
  {
    id: "p2-estado",
    titulo: "Parcial 2 · Estado de derecho",
    desc: "Definición, principios, misiones, víctima y seguridad.",
    cards: [
      { f: "¿Qué es la política criminal en sentido político?", r: "El conjunto de medidas y criterios jurídicos, sociales, educativos y económicos que los poderes públicos establecen para prevenir y reaccionar frente al fenómeno criminal, manteniendo la criminalidad bajo límites tolerables.", fte: "García Aquino." },
      { f: "¿Qué es la política criminal en sentido académico?", r: "El sector del conocimiento que estudia esas medidas, criterios y argumentos.", fte: "García Aquino." },
      { f: "¿Cuál es la misión inmediata?", r: "Construir una mejor respuesta preventiva frente a hechos antisociales no tolerados, para mantener la criminalidad bajo límites.", fte: "García Aquino." },
      { f: "¿Cuál es la misión mediata?", r: "Proteger y promover la dignidad humana, la igualdad, la justicia social y la paz social.", fte: "García Aquino." },
      { f: "¿Qué límite tiene la política criminal en un Estado de derecho?", r: "No puede incriminar conductas lejanas a la puesta en riesgo de bienes jurídicos ni sacrificar la dignidad por “seguridad total”.", fte: "García Aquino." },
      { f: "¿Qué cuatro principios debe respetar?", r: "Legalidad, mínima intervención, proporcionalidad y culpabilidad.", fte: "García Aquino." },
      { f: "¿Qué papel tiene la víctima?", r: "Un papel activo; la política criminal corrige defectos y excesos en su tratamiento dentro del sistema penal, con apoyo de la victimología y la victimo-dogmática. No basta indemnizarla.", fte: "García Aquino." },
      { f: "¿A qué se opone el Derecho penal funcionalista de Roxin, según García Aquino?", r: "Al retribucionismo preventivo de Welzel y a la prevención general radical de Jakobs.", fte: "García Aquino." }
    ]
  },
  {
    id: "p2-cuatro-d",
    titulo: "Parcial 2 · Las cuatro D",
    desc: "Definiciones, diferencias y casos de reacción social.",
    cards: [
      { f: "¿Qué es despenalización?", r: "Eliminar o reducir la sanción penal de una conducta y desplazarla a otra regulación (civil, comercial o administrativa). La conducta sigue regulada.", fte: "Estrategias de reacción social." },
      { f: "¿Qué es desprisionalización?", r: "Reducir el uso de la prisión y sustituirla por medidas rehabilitadoras; la persona sigue siendo penalmente responsable, pero cumple fuera de la cárcel.", fte: "Estrategias de reacción social." },
      { f: "¿Qué es desjudicialización?", r: "Resolver determinados conflictos por vías alternativas, evitando el proceso judicial completo y formalista.", fte: "Estrategias de reacción social." },
      { f: "¿Qué es descriminalización?", r: "Eliminar por completo el carácter delictivo de una conducta; deja de ser delito y pasa a ser lícita o indiferente.", fte: "Estrategias de reacción social." },
      { f: "¿Despenalizar es legalizar?", r: "No. La conducta sigue regulada y sancionada, pero en otra jurisdicción; no se transforma necesariamente en lícita.", fte: "Reyes Echandía, Capítulo IV." },
      { f: "¿Qué ejemplos de desprisionalización menciona Reyes Echandía?", r: "Libertad vigilada, libertad bajo palabra, condena de ejecución condicional, multa, trabajo comunitario y suspensión de licencia profesional.", fte: "Reyes Echandía, Capítulo IV." },
      { f: "¿Qué es la desjudicialización de facto?", r: "La que ocurre porque las personas no denuncian por desconfianza, miedo o costo, aunque la vía judicial exista.", fte: "Reyes Echandía, Capítulo IV." },
      { f: "¿Qué ejemplos de descriminalización cita el capítulo?", r: "El incesto, la bigamia y la homosexualidad.", fte: "Reyes Echandía, Capítulo IV." },
      { f: "Si una conducta deja de ser delito, ¿qué D es?", r: "Descriminalización.", fte: "Estrategias de reacción social." },
      { f: "Si se evita la cárcel pero la persona sigue condenada, ¿qué D es?", r: "Desprisionalización.", fte: "Estrategias de reacción social." }
    ]
  },
  {
    id: "p2-prevencion",
    titulo: "Parcial 2 · Prevención",
    desc: "Fuentes, evidencia, espacios y programas con cifras.",
    cards: [
      { f: "¿Cuáles son las cinco fuentes de la política preventiva?", r: "Demandas de la sociedad, investigación y evidencia, experiencias previas, organismos internacionales y el público.", fte: "Políticas de prevención del delito." },
      { f: "¿Qué riesgo tienen las demandas sociales?", r: "Producir políticas reactivas guiadas por la percepción del riesgo y no por la realidad del crimen.", fte: "Políticas de prevención del delito." },
      { f: "¿Qué pasó con nueve de cada diez programas previos a 1970?", r: "No lograron reducir la delincuencia oficial frente a los grupos de control (Berleman, 1980).", fte: "Políticas de prevención del delito." },
      { f: "¿Qué es la criminología ambiental?", r: "La lectura del delito como confluencia de infractores, víctimas u objetivos y una ley infringida en un tiempo y lugar concretos (Brantingham y Brantingham, 1991).", fte: "Políticas de prevención del delito." },
      { f: "¿Qué resultado tuvo Barrio Seguro (Brasil)?", r: "Una reducción del 40 % de los homicidios en algunos barrios.", fte: "Políticas de prevención del delito." },
      { f: "¿Qué resultado tuvo Costa Rica?", r: "Bajó la tasa de homicidios de 11.5 en 2011 a 5.2 en 2019 con un plan integral de cuatro ejes.", fte: "Políticas de prevención del delito." },
      { f: "¿Qué resultado tuvo Vive Seguro (Ecuador) en su primer año?", r: "−14 % en homicidios y −9 % en robos y asaltos.", fte: "Políticas de prevención del delito." },
      { f: "¿Dónde y cuándo fue el IV Congreso de la ONU sobre prevención del delito?", r: "En Tokio, en agosto de 1970.", fte: "Prevención genérica." }
    ]
  }
);

window.PARCIALES.push({
  id: "p11",
  slug: "parcial-2-oficial",
  titulo: "Parcial 2 · enfoque oficial",
  tema: "Los cinco temas",
  p2: true,
  desc: "Simulacro de 20 preguntas sobre los cinco temas que indicó la profesora.",
  minutos: 25,
  preguntas: [
    {
      t: "mc",
      p: "Para Roxin, el objeto principal de la política criminal es…",
      o: [
        "Decidir cómo debe tratarse a quienes atentan contra las reglas básicas de la convivencia y lesionan o ponen en peligro al individuo o a la comunidad.",
        "Administrar las cárceles.",
        "Redactar únicamente tipos penales.",
        "Sustituir la dogmática por la criminología."
      ],
      c: 0,
      e: "Es la definición que Borja Jiménez extrae de la obra de Roxin."
    },
    {
      t: "vf",
      p: "Roxin propuso mantener separadas la dogmática penal y la política criminal.",
      c: false,
      e: "Falso. Propuso superar esa separación y abrir el sistema penal a las valoraciones político-criminales."
    },
    {
      t: "mc",
      p: "La frase “el Derecho penal es la Carta Magna del delincuente” se atribuye a…",
      o: ["Von Liszt", "Roxin", "Feuerbach", "Beccaria"],
      c: 0,
      e: "Von Liszt la usó para expresar la función garantista del Derecho penal frente al poder punitivo."
    },
    {
      t: "mc",
      p: "El planteamiento que reduce la política criminal al conjunto de métodos represivos con los que el Estado reacciona contra el crimen se atribuye a…",
      o: ["Feuerbach", "Roxin", "Kleinschrod", "Henke"],
      c: 0,
      e: "Feuerbach ponía el acento en la reacción represiva."
    },
    {
      t: "mc",
      p: "¿Qué caracteriza la etapa estática del Capítulo I?",
      o: [
        "Los glosadores comentan el Derecho penal sin proponer reformas.",
        "Beccaria critica la pena de muerte.",
        "Lombroso formula la teoría del delincuente nato.",
        "Se crean los centros de mediación."
      ],
      c: 0,
      e: "La etapa estática se limita al comentario legal y las citas doctrinales, sin crítica sistemática."
    },
    {
      t: "mc",
      p: "¿Qué obra y qué año se asocian a la fase humanitaria?",
      o: [
        "De los delitos y de las penas, de Beccaria, 1764.",
        "El espíritu de las leyes, de Montesquieu, 1748.",
        "La teoría de la ley penal, de Carrara, 1859.",
        "El hombre delincuente, de Lombroso, 1876."
      ],
      c: 0,
      e: "Beccaria publicó De los delitos y de las penas en 1764."
    },
    {
      t: "mc",
      p: "¿Quién define la política criminal como el conocimiento de los medios que el legislador puede y debe hallar para impedir delitos y proteger el Derecho natural?",
      o: ["Kleinschrod", "Roxin", "Feuerbach", "Ferri"],
      c: 0,
      e: "Es la definición de Kleinschrod, citada en el Capítulo I."
    },
    {
      t: "vf",
      p: "Henke exige conocer la naturaleza humana, estudiar la antropología y la historia, y conocer el mal penal según la cultura y las costumbres.",
      c: true,
      e: "Verdadero. Son sus tres presupuestos metodológicos."
    },
    {
      t: "mc",
      p: "Según García Aquino, la política criminal en sentido político se define como…",
      o: [
        "El conjunto de medidas y criterios jurídicos, sociales, educativos y económicos para prevenir y reaccionar frente al crimen.",
        "El conjunto de sentencias penales.",
        "La opinión pública sobre la inseguridad.",
        "La organización de la policía."
      ],
      c: 0,
      e: "Incluye medidas y criterios de diversa naturaleza, orientados a mantener la criminalidad bajo límites tolerables."
    },
    {
      t: "mc",
      p: "La tarea de construir una mejor respuesta preventiva frente a hechos antisociales no tolerados corresponde a la…",
      o: [
        "Misión inmediata de la política criminal.",
        "Misión mediata de la política criminal.",
        "Función jurisdiccional del juez.",
        "Exigencia del principio de legalidad."
      ],
      c: 0,
      e: "La misión inmediata es preventiva; la mediata se refiere a la dignidad, la igualdad y la paz social."
    },
    {
      t: "vf",
      p: "Para García Aquino, la víctima solo importa como receptor de una indemnización.",
      c: false,
      e: "Falso. La víctima tiene un papel activo: la política criminal corrige los defectos y excesos en su tratamiento, con apoyo de la victimología y la victimo-dogmática."
    },
    {
      t: "mc",
      p: "Un Estado castiga conductas que todavía no ponen en riesgo ningún bien jurídico, invocando “seguridad total”. ¿Qué límite rompe?",
      o: [
        "La mínima intervención y la lesividad.",
        "La publicidad del juicio.",
        "La cosa juzgada.",
        "La doble instancia."
      ],
      c: 0,
      e: "No se puede incriminar lo lejano a la puesta en peligro de bienes jurídicos; eso afecta la mínima intervención y la dignidad."
    },
    {
      t: "mc",
      p: "Una falta que antes se castigaba con cárcel pasa a ser una infracción administrativa con multa. ¿Qué D es?",
      o: ["Despenalización", "Descriminalización", "Desprisionalización", "Desjudicialización"],
      c: 0,
      e: "La conducta sigue regulada, pero sale de la esfera penal hacia una jurisdicción administrativa."
    },
    {
      t: "mc",
      p: "Un condenado cumple trabajo comunitario en lugar de prisión. ¿Qué D es?",
      o: ["Desprisionalización", "Despenalización", "Descriminalización", "Desjudicialización"],
      c: 0,
      e: "Sigue siendo penalmente responsable, pero la sanción se ejecuta fuera de la cárcel."
    },
    {
      t: "mc",
      p: "Dos partes resuelven su conflicto por mediación, sin juicio. ¿Qué D es?",
      o: ["Desjudicialización", "Desprisionalización", "Despenalización", "Descriminalización"],
      c: 0,
      e: "Se evita el proceso judicial formal y se usa una vía alternativa."
    },
    {
      t: "mc",
      p: "El legislador deroga un tipo penal y la conducta deja de ser delito. ¿Qué D es?",
      o: ["Descriminalización", "Despenalización", "Desprisionalización", "Desjudicialización"],
      c: 0,
      e: "La conducta desaparece del catálogo penal y pasa a ser lícita o indiferente."
    },
    {
      t: "vf",
      p: "Despenalizar significa necesariamente legalizar la conducta.",
      c: false,
      e: "Falso. La despenalización cambia la sanción o la jurisdicción; la conducta puede seguir regulada. La legalización se acerca más a la descriminalización."
    },
    {
      t: "mc",
      p: "¿Cuáles son las cinco fuentes de la política preventiva?",
      o: [
        "Demandas sociales, investigación y evidencia, experiencias previas, organismos internacionales y público.",
        "Policía, ejército, jueces, fiscales y cárceles.",
        "Impuestos, deuda, inflación, empleo y presupuesto.",
        "Televisión, radio, prensa, redes y publicidad."
      ],
      c: 0,
      e: "Son las cinco fuentes que identifican las diapositivas."
    },
    {
      t: "vf",
      p: "Nueve de cada diez programas experimentales anteriores a 1970 no lograron reducir la delincuencia oficial frente a los controles.",
      c: true,
      e: "Verdadero. Es el dato de Berleman (1980) que cita el material."
    },
    {
      t: "mc",
      p: "El Plan Integral de Seguridad Ciudadana de Costa Rica bajó la tasa de homicidios de 11.5 a…",
      o: ["5.2 en 2019", "9.0 en 2015", "2.0 en 2020", "11.0 en 2018"],
      c: 0,
      e: "El material reporta 11.5 en 2011 y 5.2 en 2019."
    }
  ]
});
