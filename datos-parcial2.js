/* =========================================================
   Parcial 2 · enfoque oficial
   Cinco temas indicados por la profesora. Todo el contenido
   sale de los PDF de la carpeta "parcial diana".
   ========================================================= */

window.PARCIAL2 = {
  intro:
    "La profesora fijó cinco temas para el Parcial 2. Esta sección los ordena, los conecta con su PDF y te dice qué distinguir en cada uno. No es un resumen de todo el curso: es el filtro para estudiar solo lo que pidió.",
  aviso:
    "Ojo con el orden: el Capítulo I del Tratado no se centra en definir la política criminal, reconstruye cómo nació la disciplina. Para la definición van el artículo de Borja Jiménez y García Aquino. Las cuatro D no son sinónimos: cada una toca una parte distinta de la reacción penal.",

  mapa: [
    {
      n: "01",
      tema: "El concepto de política criminal",
      pdf: "ARTICULO CONCEPTO DE POLÍTICA CRIMINAL.pdf",
      autor: "Emiliano Borja Jiménez",
      que: "La definición de Roxin, su conferencia de Berlín de 1970 y el debate con von Liszt y Feuerbach.",
      lectura: "roxin",
      quiz: "concepto-roxin",
      flash: "p2-concepto"
    },
    {
      n: "02",
      tema: "Capítulo I del Tratado de Política Criminal",
      pdf: "Capítulo 1 Libro Tratado de Política Criminal.pdf",
      autor: "Carlos Blanco Lozano",
      que: "Los orígenes científicos: etapa estática, época dinámica, fase humanitaria, dirección biológica y corriente racionalista.",
      lectura: "origenes",
      quiz: "capitulo-1-origenes",
      flash: "p2-capitulo1"
    },
    {
      n: "03",
      tema: "Política criminal en un Estado de derecho",
      pdf: "articulo politica criminal en un estado de derecho.pdf",
      autor: "J. García Aquino",
      que: "Los dos sentidos, las misiones inmediata y mediata, los principios, la víctima y la seguridad.",
      lectura: "estado-derecho",
      quiz: "estado-de-derecho",
      flash: "p2-estado"
    },
    {
      n: "04",
      tema: "Estrategias de reacción social: las cuatro D",
      pdf: "Estrategias de reacción social.pdf · POLÍTICA CRIMINAL DE REYES ECHENDÍA_compressed (1).pdf",
      autor: "Diana L. Núñez / Alfonso Reyes Echandía",
      que: "Despenalización, desprisionalización, desjudicialización y descriminalización: qué hace cada una y cómo se diferencian.",
      lectura: "cuatro-d",
      quiz: "cuatro-d",
      flash: "p2-cuatro-d"
    },
    {
      n: "05",
      tema: "Políticas de prevención del delito",
      pdf: "POLÍTICAS DE PREVENSIÓN.pdf · prevención genérica.pdf",
      autor: "Material de clase",
      que: "Las cinco fuentes de la política preventiva, la evidencia, los espacios públicos y los programas con cifras.",
      lectura: "prevencion",
      quiz: "prevencion-diapositivas",
      flash: "p2-prevencion"
    }
  ],

  temas: [
    {
      id: "concepto",
      n: "01",
      titulo: "El concepto de política criminal",
      etiqueta: "Borja Jiménez · Roxin",
      pdf: "ARTICULO CONCEPTO DE POLÍTICA CRIMINAL.pdf",
      idea:
        "El artículo no se queda en una definición: reconstruye cómo se separaron la dogmática penal y la política criminal, y por qué Roxin las vuelve a unir en 1970.",
      puntos: [
        "**Roxin (Berlín, 1970):** la política criminal tiene por objeto principal decidir cómo debe tratarse a las personas que atentan contra las reglas básicas de la convivencia y lesionan o ponen en peligro al individuo o a la comunidad.",
        "**Doble posición:** está entre ciencia y configuración social, entre teoría y práctica. Como ciencia se apoya en el conocimiento objetivo del delito (formas jurídicas y empíricas); como política persigue ideas o intereses concretos.",
        "**Von Liszt:** la entendía como el conjunto de estrategias de las que disponía el Estado para reaccionar frente al fenómeno criminal. Sus frases “el Derecho penal es la Carta Magna del delincuente” y “barrera infranqueable de la política criminal” expresan la tensión entre política criminal y garantías.",
        "**Feuerbach:** la reducía al conjunto de métodos represivos con los que el Estado reacciona contra el crimen.",
        "**El giro de Roxin:** dogmática y política criminal no son compartimentos separados. El sistema penal debe abrirse a valoraciones político-criminales y orientarse a las consecuencias. Las garantías (nullum crimen, culpabilidad) también son política criminal del Estado de derecho.",
        "**Precisión de Borja:** Roxin hace “política criminal dogmática”, no una teoría general de la política criminal estatal. Distingue la política criminal legislativa (decisiones del legislador) de la que se discute dentro del sistema penal.",
        "**Sentido amplio:** la política criminal puede incluir políticas sociales. Roxin advierte que el Derecho penal no debe ser la “huida” para resolver problemas sociales."
      ],
      cita: {
        texto:
          "La cuestión de cómo debe tratarse a las personas que atentan contra las reglas básicas de la convivencia social y con ello lesionan o ponen en peligro al individuo o a la comunidad constituye el objeto principal de la Política Criminal.",
        autor: "Roxin, citado por Borja Jiménez"
      },
      trampa:
        "No confundas “Carta Magna del delincuente” con una definición de política criminal: es una frase de von Liszt sobre la función garantista del Derecho penal. Y no atribuyas a Roxin la separación entre dogmática y política criminal: él la critica y propone integrarlas.",
      links: [
        { label: "Leer el capítulo", href: "#/lectura/roxin" },
        { label: "Quiz de 5", href: "#/quiz/concepto-roxin" },
        { label: "Flashcards", href: "#/flashcards/p2-concepto" }
      ]
    },
    {
      id: "capitulo1",
      n: "02",
      titulo: "Capítulo I: orígenes científicos",
      etiqueta: "Blanco Lozano · historia",
      pdf: "Capítulo 1 Libro Tratado de Política Criminal.pdf",
      idea:
        "Este capítulo no se centra en responder “qué es la política criminal”. Su hilo es “de dónde viene”. Si la pregunta es de definición, ve a Borja o García Aquino; si es de evolución, va por aquí.",
      puntos: [
        "**Etapa estática:** los glosadores italianos medievales comentaron el Derecho penal sin proponer reformas; se limitaron a fórmulas legales y citas doctrinales. Después, los jurisconsultos prácticos (Egidio Bossio, Julio Claro, Tiberio Deciano, Hipólito Marsilio Bononiense, Pedro Follerio, Aretinus y Farinacio) iniciaron la obra monográfica, pero tampoco hicieron crítica sistemática.",
        "**Época dinámica (siglos XVII-XVIII):** se sistematiza la materia. El capítulo menciona a Cremari, Nani y Renazzi.",
        "**Fase humanitaria:** Beccaria publica *De los delitos y de las penas* (1764). Critica las acusaciones secretas, los tormentos, las penas perpetuas, los trabajos forzados y la pena de muerte. Saldaña reconoce su valor, pero dice que no formuló un sistema completo ni un programa positivo de reforma.",
        "**Dirección biológica o realista:** Tomaso Natale; Carrara habla de “política o buen gobierno”; Carmignani de “teoría de las leyes de la seguridad social”; Dorado Montero de “Derecho penal preventivo”; Saldaña de “arte de prevenir los delitos”. A esta línea se suman Lombroso, Ferri y Garofalo.",
        "**Corriente racionalista:** antes de Beccaria, Wolff y Engelhardt; después, Arnim, Globin, Gmelin y otros. Sus maestros son Feuerbach, Henke, Holtzendorff, Kleinschrod, Mittermaier y Richter.",
        "**Kleinschrod:** define la política criminal como el conocimiento de los medios que el legislador puede y debe hallar, según la especial disposición de cada Estado, para impedir los delitos y proteger el Derecho natural de sus súbditos.",
        "**Henke:** exige tres presupuestos metodológicos: conocer la naturaleza humana; estudiar la antropología, la historia, el origen del delito y las condiciones sociales; y conocer el mal penal según la cultura y las costumbres.",
        "**Holtzendorff:** considera la política criminal como parte integrante de la ciencia del Derecho penal y distingue la perspectiva del legislador de la del juez.",
        "**Derivación penitenciaria:** la corriente racionalista influye en la política penitenciaria (Arnim, Krohne, Yagemann) y luego en Berner, Geyer, Richard, Pessina y Manzini."
      ],
      cita: {
        texto:
          "La política criminal es el conocimiento de aquellos medios que el legislador puede y debe hallar, según la especial disposición de cada Estado, para impedir los delitos y proteger el Derecho natural de sus súbditos.",
        autor: "Kleinschrod, citado en el Capítulo I"
      },
      trampa:
        "No pongas a Beccaria como “padre de la política criminal” sin matiz: el capítulo lo ubica en la fase humanitaria y Saldaña le critica la falta de un sistema completo. Tampoco confundas la etapa estática con la época dinámica.",
      links: [
        { label: "Leer el capítulo", href: "#/lectura/origenes" },
        { label: "Quiz de 5", href: "#/quiz/capitulo-1-origenes" },
        { label: "Flashcards", href: "#/flashcards/p2-capitulo1" }
      ]
    },
    {
      id: "estado",
      n: "03",
      titulo: "Política criminal en un Estado de derecho",
      etiqueta: "García Aquino · límites y misión",
      pdf: "articulo politica criminal en un estado de derecho.pdf",
      idea:
        "García Aquino define la política criminal en dos sentidos y la somete a los límites del Estado democrático de derecho: garantías, dignidad, mínima intervención, proporcionalidad y culpabilidad.",
      puntos: [
        "**Sentido político:** conjunto de medidas y criterios de carácter jurídico, social, educativo, económico y similar, establecidos por los poderes públicos para prevenir y reaccionar frente al fenómeno criminal, con el fin de mantener la criminalidad bajo límites tolerables.",
        "**Sentido académico:** sector del conocimiento que estudia esas medidas, criterios y argumentos.",
        "**Estado democrático de derecho:** la política criminal debe respetar estrictamente las garantías de la persona. No puede incriminar conductas lejanas a la puesta en riesgo de bienes jurídicos ni avanzar hacia una “seguridad total” sacrificando la dignidad.",
        "**Principios:** legalidad (ley previa), mínima intervención (solo cuando el conflicto no puede resolverse por otras vías), proporcionalidad (respuesta adecuada a la gravedad) y culpabilidad (dolo o culpa, conciencia de ilicitud, imputabilidad y exigibilidad).",
        "**Misión inmediata:** construir una mejor respuesta preventiva frente a hechos antisociales no tolerados, para mantener la criminalidad bajo límites y permitir el libre desarrollo de la personalidad.",
        "**Misión mediata:** proteger y promover la dignidad humana, la igualdad, la justicia social y la paz social, fortaleciendo el sistema democrático.",
        "**Función:** transformar la información que aporta la criminología sobre delito, delincuente, víctima y control social en opciones, alternativas y programas, desde una perspectiva valorativa y garantista.",
        "**Víctima:** la política criminal debe ocuparse de ella y corregir los defectos y excesos en su tratamiento dentro del sistema penal. La victimología y la victimo-dogmática la reivindican; no basta la indemnización.",
        "**Derecho penal funcionalista:** Roxin lo orienta teleológicamente a la política criminal; protege bienes jurídicos y previene delitos futuros. García Aquino lo opone al retribucionismo preventivo de Welzel y a la prevención general radical de Jakobs.",
        "**Seguridad:** es un bien jurídico y una tarea del Estado y la sociedad. La política criminal adopta medidas concretas ante conflictos e inseguridad, pero no puede ofrecer “seguridad para todos” a costa de los derechos de los más vulnerables."
      ],
      cita: {
        texto:
          "La política criminal tiene como misión inmediata la elaboración o “construcción” de una mejor respuesta preventiva frente a determinados hechos antisociales que no son tolerados socialmente y no permiten el libre desarrollo de la personalidad.",
        autor: "García Aquino"
      },
      trampa:
        "No reduzcas la política criminal a perseguir delitos: también previene, protege bienes jurídicos y tutela a la víctima. Y no confundas misión inmediata (respuesta preventiva) con mediata (dignidad, igualdad, justicia social y paz).",
      links: [
        { label: "Leer el capítulo", href: "#/lectura/estado-derecho" },
        { label: "Quiz de 5", href: "#/quiz/estado-de-derecho" },
        { label: "Flashcards", href: "#/flashcards/p2-estado" }
      ]
    },
    {
      id: "cuatro-d",
      n: "04",
      titulo: "Las cuatro D de la reacción social",
      etiqueta: "Núñez · Reyes Echandía",
      pdf: "Estrategias de reacción social.pdf · POLÍTICA CRIMINAL DE REYES ECHENDÍA_compressed (1).pdf",
      idea:
        "Las cuatro D son filtros de la reacción penal. La clave no es memorizar la lista, sino distinguir qué toca cada una: la sanción, la prisión, el proceso o la propia definición del delito.",
      puntos: [
        "**Despenalización:** elimina o reduce las sanciones penales de determinadas conductas y las desplaza hacia otras formas de regulación. La conducta sigue regulada y sancionada, pero ya no con el castigo penal tradicional. No es lo mismo que legalizar.",
        "**Desprisionalización:** reduce el uso de la prisión como castigo y la sustituye por medidas que permitan la rehabilitación. La persona sigue siendo penalmente responsable, pero cumple la sanción fuera de la cárcel. La cárcel debe ser *ultima ratio*.",
        "**Desjudicialización:** procura que determinados conflictos se resuelvan por vías alternativas, evitando el desgaste de un proceso judicial completo y formalista. Puede ser *de facto* (la gente no denuncia por desconfianza, miedo o costo) o *de jure* (el legislador elimina la instancia judicial).",
        "**Descriminalización:** elimina por completo el carácter delictivo de una conducta que antes estaba en el catálogo de delitos. La conducta deja de ser delito y pasa a ser lícita o indiferente. Ocurre cuando cambia la reacción social mayoritaria o cuando el poder dominante decide que la protección penal ya no es necesaria.",
        "**Desprisionalización, ejemplos del capítulo:** libertad vigilada, libertad bajo palabra, condena de ejecución condicional, multa, trabajo obligatorio en empresas públicas o comunitarias y suspensión de licencia profesional.",
        "**Ventajas de desprisionalización (Reyes Echandía):** menor costo, evita el desarraigo y el trauma del encierro, reduce la reacción negativa del interno y permite un beneficio social.",
        "**Descriminalización, ejemplos del capítulo:** incesto, bigamia y homosexualidad. El capítulo la presenta como una decisión política, no como un simple cambio técnico.",
        "**Desjudicialización, ejemplo del capítulo:** la solución de conflictos por disciplinas extrajurídicas (laboral, psicológica, sociológica, médica, educativa, económica) o por la policía como “amigable componedora” en faltas menores."
      ],
      tabla: {
        head: ["Estrategia", "Qué hace", "Qué pasa con la conducta", "Ejemplo"],
        rows: [
          ["Despenalización", "Elimina o reduce la sanción penal y la desplaza a otra regulación.", "Sigue regulada, pero ya no con castigo penal tradicional.", "Una falta antes castigada con días de cárcel pasa a multa administrativa."],
          ["Desprisionalización", "Reduce el uso de la prisión y la sustituye por medidas rehabilitadoras.", "Sigue siendo delito y hay responsabilidad penal, pero se cumple fuera de la cárcel.", "Trabajo comunitario o libertad vigilada en lugar de prisión."],
          ["Desjudicialización", "Lleva el conflicto a vías alternativas y evita el proceso judicial completo.", "El conflicto se resuelve sin juicio formal.", "Mediación o conciliación."],
          ["Descriminalización", "Elimina por completo el carácter delictivo de la conducta.", "Deja de ser delito; pasa a ser lícita o indiferente.", "Derogación de un tipo penal."]
        ]
      },
      cita: {
        texto:
          "Despenalización es el proceso por medio del cual una conducta descrita en la ley penal como delito sale de esta esfera jurídica para ser sancionada en el ámbito de una jurisdicción diversa, de naturaleza civil, comercial o administrativa.",
        autor: "Reyes Echandía, Capítulo IV"
      },
      trampa:
        "Si la conducta deja de ser delito, es descriminalización. Si sigue siendo delito pero cambia la sanción o la jurisdicción, es despenalización. Si se evita la cárcel, es desprisionalización. Si se evita el juicio, es desjudicialización.",
      links: [
        { label: "Leer el capítulo", href: "#/lectura/cuatro-d" },
        { label: "Quiz de 5", href: "#/quiz/cuatro-d" },
        { label: "Flashcards", href: "#/flashcards/p2-cuatro-d" }
      ]
    },
    {
      id: "prevencion",
      n: "05",
      titulo: "Políticas de prevención del delito",
      etiqueta: "Diapositivas · programas y evidencia",
      pdf: "POLÍTICAS DE PREVENSIÓN.pdf · prevención genérica.pdf",
      idea:
        "Las diapositivas no preguntan solo “qué es prevenir”: muestran de dónde salen las políticas, por qué fallan y qué programas se citan con cifras.",
      puntos: [
        "**Cinco fuentes:** demandas de la sociedad, investigación y evidencia, experiencias previas, organismos internacionales y el público.",
        "**Demandas sociales:** son una fuente principal, pero pueden producir políticas reactivas y guiadas por la percepción del riesgo más que por la realidad del crimen. Deben complementarse con evidencia.",
        "**Investigación y evidencia:** sirve para identificar factores de riesgo y causas, y para evaluar la efectividad de los programas. Exige colaboración entre actores.",
        "**Experiencias previas:** el material cita *Criminal Justice Innovation* (National Criminal Justice Center, George Mason University). De diez programas experimentales anteriores a 1970, nueve no lograron reducir la delincuencia oficial frente a los controles (Berleman, 1980). Además, muchos se dirigieron a jóvenes de alto riesgo y descuidaron la prevención primaria.",
        "**Público:** la política preventiva no es solo del Estado. Requiere cultura de prevención, participación ciudadana y policía comunitaria.",
        "**Espacios públicos:** la estructura física y los servicios influyen. La criminología ambiental define el delito como la confluencia de infractores, víctimas u objetivos y una ley infringida en un tiempo y lugar concretos (Brantingham y Brantingham, 1991). También aparecen la teoría de la ventana rota y la idea de “ser el individuo para la ciudad y ser la ciudad para el individuo”.",
        "**Programas con cifras:** Barrio Seguro (Brasil) redujo 40 % los homicidios en algunos barrios. Costa Rica pasó de 11.5 (2011) a 5.2 (2019) con un plan integral de cuatro ejes. Vive Seguro (Ecuador) redujo 14 % los homicidios y 9 % los robos y asaltos en su primer año.",
        "**Otros programas:** Vecino Vigilante (México) se basa en la colaboración vecinal. El Plan Cuadrante (Chile) aumentó la presencia policial, pero se critica por punitivo y por no atacar las causas. República Dominicana, Honduras, Colombia y el Plan Nacional de Brasil 2022-2025 aparecen con avances y límites.",
        "**Prevención genérica (material complementario):** el aforismo “mejor prevenir que curar”; el Estado debe velar por la armonía, el bienestar y los derechos humanos; el IV Congreso de la ONU (Tokio, agosto de 1970) aprobó una declaración sobre prevención y tratamiento del delincuente."
      ],
      cita: {
        texto: "Es mejor prevenir que curar.",
        autor: "Aforismo citado en Prevención genérica"
      },
      trampa:
        "No digas que la prevención es solo “más policía”: el material insiste en causas, evidencia, espacios públicos, participación y evaluación. Tampoco confundas “experiencias previas” con “organismos internacionales”.",
      links: [
        { label: "Leer el capítulo", href: "#/lectura/prevencion" },
        { label: "Quiz de 5", href: "#/quiz/prevencion-diapositivas" },
        { label: "Flashcards", href: "#/flashcards/p2-prevencion" }
      ]
    }
  ],

  datos: [
    "Roxin · Berlín 1970",
    "Beccaria · 1764",
    "4 D · 4 filtros",
    "9 de 10 · programas previos a 1970",
    "11.5 → 5.2 · Costa Rica",
    "40 % · Barrio Seguro",
    "−14 % / −9 % · Ecuador",
    "Tokio 1970 · IV Congreso ONU"
  ],

  casos: [
    {
      caso:
        "Una ley convierte una falta que antes se castigaba con días de cárcel en una infracción administrativa con multa. La conducta sigue regulada, pero ya no con pena penal. ¿Qué D es?",
      respuesta:
        "Despenalización. Cambia la naturaleza de la sanción y la desplaza a otra jurisdicción; la conducta no desaparece de la regulación."
    },
    {
      caso:
        "Un condenado por un delito menor cumple trabajo comunitario y libertad vigilada en lugar de entrar a prisión. ¿Qué D es?",
      respuesta:
        "Desprisionalización. Sigue siendo responsable penal, pero la sanción se ejecuta fuera de la cárcel."
    },
    {
      caso:
        "Dos partes resuelven un conflicto penal mediante mediación y llegan a un acuerdo sin juicio. ¿Qué D es?",
      respuesta:
        "Desjudicialización. Se evita el proceso judicial formal y se usa una vía alternativa."
    },
    {
      caso:
        "El legislador deroga un tipo penal: la conducta deja de ser delito y pasa a ser lícita o indiferente. ¿Qué D es?",
      respuesta:
        "Descriminalización. Desaparece del catálogo penal; no es solo un cambio de sanción."
    },
    {
      caso:
        "Un Estado solo reacciona a las denuncias, no investiga las causas y no evalúa sus programas. ¿Qué fuente de prevención está descuidando y qué riesgo corre?",
      respuesta:
        "Está descuidando la investigación y la evidencia. Corre el riesgo de una política reactiva, guiada por la percepción del riesgo y no por la realidad del crimen."
    },
    {
      caso:
        "Una Constitución permite incriminar conductas que todavía no ponen en riesgo un bien jurídico, con el argumento de la “seguridad total”. ¿Qué límite del Estado de derecho se rompe?",
      respuesta:
        "El de mínima intervención y el de lesividad: no se puede incriminar lo lejano a la puesta en peligro de bienes jurídicos; además se afectan la dignidad y las garantías."
    }
  ]
};
