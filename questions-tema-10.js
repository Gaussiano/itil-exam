// Tema 10 — Prácticas Generales de Gestión (14 prácticas)
window.QUESTIONS_T10 = [
  {
    topic: 10,
    q: "¿Cuántas prácticas generales de gestión enumera ITIL?",
    options: [
      "7",
      "12",
      "14",
      "17"
    ],
    correct: 2,
    explanation: "ITIL define 14 prácticas generales de gestión: arquitectura, mejora continua, seguridad de la información, conocimiento, medición y reporte, cambio organizacional, portfolio, proyectos, relaciones, riesgos, financiera, estratégica, proveedores y talento."
  },
  {
    topic: 10,
    q: "¿En cuántos grupos se clasifican las prácticas ITIL?",
    options: [
      "2",
      "3 (generales de gestión, de gestión de servicios, de gestión técnica)",
      "4",
      "5"
    ],
    correct: 1,
    explanation: "3 grupos: prácticas generales de gestión (14), prácticas de gestión de servicios (17) y prácticas de gestión técnica (3). En nivel Fundamentos se exige conocimiento más profundo de 22 de ellas."
  },

  // GESTIÓN DE ARQUITECTURA
  {
    topic: 10,
    q: "¿De qué se ocupa la gestión de arquitectura?",
    options: [
      "De los edificios físicos de la empresa",
      "De entender los elementos que componen la organización y la relación entre ellos",
      "Sólo de la arquitectura de software",
      "Del diseño visual corporativo"
    ],
    correct: 1,
    explanation: "Gestión de arquitectura: se ocupa de entender los elementos que componen la organización y la relación entre ellos."
  },
  {
    topic: 10,
    q: "¿Cuál NO es un tipo de arquitectura citado en ITIL?",
    options: [
      "Arquitectura de negocio",
      "Arquitectura de servicio",
      "Arquitectura de tecnología",
      "Arquitectura de logística"
    ],
    correct: 3,
    explanation: "Tipos de arquitectura: de negocio, de servicio, de tecnología, de contexto, de datos/información/aplicaciones. \"De logística\" no es un tipo enumerado."
  },

  // MEJORA CONTINUA
  {
    topic: 10,
    q: "¿De qué se ocupa la mejora continua como práctica general?",
    options: [
      "De auditar el cumplimiento legal",
      "De mantener el alineamiento de las prácticas y servicios con los objetivos de la empresa",
      "De resolver incidencias",
      "De cobrar a los clientes"
    ],
    correct: 1,
    explanation: "Mejora continua: se ocupa de mantener el \"alineamiento\" de las prácticas y servicios con los objetivos de la empresa. Se puede mejorar la estrategia, el portfolio, un servicio, una práctica o un pequeño CI."
  },
  {
    topic: 10,
    q: "La técnica SWOT (DAFO) se usa típicamente en:",
    options: [
      "Mejora continua",
      "Gestión de incidencias",
      "Gestión de despliegues",
      "Service Desk"
    ],
    correct: 0,
    explanation: "Se citan múltiples técnicas para la mejora continua, por ejemplo SWOT (DAFO): Strengths, Weaknesses, Opportunities, Threats."
  },
  {
    topic: 10,
    q: "La mejora continua afecta…",
    options: [
      "Sólo al equipo de mejora",
      "A todos los empleados",
      "Sólo a los managers",
      "Sólo a los proyectos críticos"
    ],
    correct: 1,
    explanation: "Aplicar la mejora continua afecta a TODOS los empleados. Agile usa Retrospectivas; Lean usa análisis de desperdicios; DevOps se centra en la entrega."
  },

  // SEGURIDAD DE LA INFORMACIÓN
  {
    topic: 10,
    q: "¿Cuáles son las 3 propiedades C.I.A. de la seguridad de la información?",
    options: [
      "Control, Inspección, Auditoría",
      "Confidencialidad, Integridad y Disponibilidad",
      "Continuidad, Identidad, Acceso",
      "Compliance, Información, Alta disponibilidad"
    ],
    correct: 1,
    explanation: "C.I.A.: Confidencialidad (Confidenciality), Integridad (Integrity) y Disponibilidad (Availability) de la información."
  },
  {
    topic: 10,
    q: "Las 3 ideas clave de la seguridad son:",
    options: [
      "Prevención, Detección y Corrección",
      "Cifrar, ocultar, borrar",
      "Control, autoridad, mando",
      "Identificar, autorizar, validar"
    ],
    correct: 0,
    explanation: "Ideas clave de la seguridad: Prevención (evitar incidentes), Detección (detectar incidentes con prontitud), Corrección (recuperarse después de detectarlos)."
  },
  {
    topic: 10,
    q: "El \"principio de equilibrio\" en seguridad significa:",
    options: [
      "Ni tan inseguro que estemos en peligro, ni \"tan tan seguro\" que no se pueda trabajar eficientemente ni probar innovaciones",
      "Repartir la seguridad por igual entre departamentos",
      "Que cada cliente paga lo mismo",
      "Equilibrar el presupuesto"
    ],
    correct: 0,
    explanation: "Principio de equilibrio: ni tan inseguro que estemos en peligro, ni \"tan, tan seguro\" que no se pueda trabajar de forma eficiente o no se pueda probar ninguna innovación."
  },
  {
    topic: 10,
    q: "La propiedad de los datos personales es de:",
    options: [
      "La empresa que los almacena",
      "Su titular",
      "El gobierno",
      "El proveedor de cloud"
    ],
    correct: 1,
    explanation: "La propiedad de los datos personales es de su titular. La empresa sólo los almacena y gestiona. Deben establecerse políticas de seguridad y confidencialidad de datos."
  },

  // GESTIÓN DEL CONOCIMIENTO
  {
    topic: 10,
    q: "¿Qué es \"conocimiento\" según ITIL?",
    options: [
      "Cualquier dato almacenado",
      "Información útil: en el formato correcto, en el momento correcto, procesada y presentada para quien debe utilizarla",
      "El currículum de los empleados",
      "Lo que se aprende en cursos"
    ],
    correct: 1,
    explanation: "Conocimiento es más que información; es información útil: en el formato correcto, en el momento correcto, procesada y presentada para quien debe utilizarla."
  },

  // MEDICIÓN Y REPORTE
  {
    topic: 10,
    q: "¿Cuál es el propósito de Medición y Reporte?",
    options: [
      "Hacer posible la toma de decisiones basadas en dato",
      "Calcular impuestos",
      "Definir cargos profesionales",
      "Aprobar cambios"
    ],
    correct: 0,
    explanation: "Medición y reporte: hace posible la toma de decisiones basadas en dato. Se utilizan CSFs (factores críticos de éxito) y KPIs (indicadores clave de rendimiento)."
  },
  {
    topic: 10,
    q: "Los tipos de analítica son:",
    options: [
      "Descriptiva, diagnóstica, predictiva y prescriptiva",
      "Histórica, presente, futura",
      "Pública, privada e híbrida",
      "Empresarial, técnica y financiera"
    ],
    correct: 0,
    explanation: "Tipos de analítica: Descriptiva (qué ha pasado), Diagnóstica (por qué), Predictiva (qué pasará), Prescriptiva (qué deberíamos hacer)."
  },
  {
    topic: 10,
    q: "¿Qué significa CSF?",
    options: [
      "Customer Service Feedback",
      "Critical Success Factors / Factores críticos de éxito",
      "Continuous Service Flow",
      "Component System Framework"
    ],
    correct: 1,
    explanation: "CSFs: Factores Críticos de Éxito. Junto con los KPIs (Indicadores Clave de Rendimiento) son la base de Medición y Reporte."
  },

  // GESTIÓN DEL CAMBIO ORGANIZACIONAL
  {
    topic: 10,
    q: "¿Cuáles son los puntos clave del proceso de cambio organizacional?",
    options: [
      "Establecer objetivos claros y relevantes, liderazgo fuerte, conseguir participantes a favor, sostener el esfuerzo a lo largo del tiempo",
      "Imponer el cambio rápidamente",
      "Mantener todo igual",
      "Externalizar todos los procesos"
    ],
    correct: 0,
    explanation: "Puntos clave del cambio organizacional: objetivos claros y relevantes, liderazgo fuerte y comprometido, participantes a favor del cambio y preparados, sostener el esfuerzo a lo largo del tiempo."
  },

  // GESTIÓN DEL PORTFOLIO
  {
    topic: 10,
    q: "¿De qué se ocupa la Gestión del Portfolio?",
    options: [
      "De que los servicios y proyectos ejecuten la estrategia, dentro de las restricciones de recursos",
      "De la cartera de inversiones financieras",
      "De gestionar las acciones de la empresa",
      "Sólo de los clientes"
    ],
    correct: 0,
    explanation: "Gestión del portfolio: se ocupa de que los servicios y proyectos de la organización ejecuten la estrategia, dentro de las restricciones de recursos."
  },
  {
    topic: 10,
    q: "¿Cuáles son los 3 niveles de portfolio en ITIL?",
    options: [
      "Portfolio de productos y servicios, portfolio de proyectos, portfolio de clientes",
      "Estratégico, táctico y operativo",
      "Interno, externo, mixto",
      "Personal, departamental, corporativo"
    ],
    correct: 0,
    explanation: "3 niveles del portfolio: portfolio de productos y servicios, portfolio de proyectos (incluye programas) y portfolio de clientes."
  },

  // GESTIÓN DE PROYECTOS
  {
    topic: 10,
    q: "¿Qué enfoques de gestión de proyectos cita ITIL?",
    options: [
      "Sólo cascada",
      "Sólo ágil",
      "En cascada y metodología ágil",
      "Sólo Scrum"
    ],
    correct: 2,
    explanation: "Enfoques de gestión de proyectos: en cascada y metodología ágil. Las diferencias se ven en la definición del alcance, gestión de cambios, estimación, planificación, etc."
  },
  {
    topic: 10,
    q: "¿Cuál NO es una metodología ágil para gestión de proyectos citada por ITIL?",
    options: [
      "Scrum",
      "Kanban",
      "XP",
      "Six Sigma"
    ],
    correct: 3,
    explanation: "Metodologías ágiles citadas: Scrum, Kanban, XP, FDD, DSDM, Crystal, metodologías propias, Lean. Six Sigma no figura en la lista."
  },

  // GESTIÓN DE RELACIONES
  {
    topic: 10,
    q: "¿De qué se ocupa la Gestión de Relaciones?",
    options: [
      "De las relaciones personales entre empleados",
      "De establecer y mantener los enlaces entre los interesados, a nivel estratégico y táctico",
      "De aprobar contratos",
      "De vender más"
    ],
    correct: 1,
    explanation: "Gestión de relaciones: establece y mantiene los enlaces entre los interesados, a niveles estratégico (portfolio, alianzas estratégicas) y táctico (relación entre departamentos)."
  },

  // GESTIÓN DE RIESGOS
  {
    topic: 10,
    q: "En la práctica de Gestión de Riesgos, ¿los riesgos pueden ser…?",
    options: [
      "Sólo negativos",
      "Sólo positivos",
      "Positivos o negativos",
      "Sólo estratégicos"
    ],
    correct: 2,
    explanation: "En la práctica de Gestión de Riesgos, los riesgos pueden ser positivos o negativos. (NOTA: en el contexto general de ITIL conceptos clave, la idea de \"Riesgo\" se trata como negativa)."
  },
  {
    topic: 10,
    q: "¿Cuáles son las actividades de la gestión de riesgos?",
    options: [
      "Identificación, Análisis (assessment) cualitativo y cuantitativo, Preparación de respuestas",
      "Sólo identificación y resolución",
      "Sólo evitar y mitigar",
      "Documentación y archivado"
    ],
    correct: 0,
    explanation: "Actividades: 1) Identificación; 2) Análisis cualitativo y cuantitativo; 3) Preparación de respuestas: planes de contingencia."
  },
  {
    topic: 10,
    q: "¿Cómo se calcula la prioridad de un riesgo en el análisis cualitativo?",
    options: [
      "Coste × Tiempo",
      "Probabilidad × Impacto",
      "Disponibilidad × Capacidad",
      "Personas × Tecnología"
    ],
    correct: 1,
    explanation: "Análisis cualitativo de riesgos: Prioridad = Probabilidad × Impacto."
  },

  // GESTIÓN FINANCIERA
  {
    topic: 10,
    q: "¿Cuáles son las 3 actividades de la Gestión Financiera?",
    options: [
      "Presupuestación, Contabilidad/imputación, Facturación",
      "Compra, venta y depósito",
      "Inversión, retorno, dividendos",
      "Coste, beneficio, margen"
    ],
    correct: 0,
    explanation: "Gestión financiera: 1) Presupuestación de proyectos y servicios; 2) Contabilidad / imputación (¿cuánto cuesta cada actividad, proyecto, servicio, centro de coste?); 3) Facturación (cobrar a clientes)."
  },
  {
    topic: 10,
    q: "¿Qué diferencia hay entre CAPEX y OPEX?",
    options: [
      "Son sinónimos",
      "CAPEX: inversión inicial grande (modelo tradicional). OPEX: contratos \"as a service\", pago por uso, sin inversión inicial (modelo actual)",
      "OPEX es siempre más caro",
      "CAPEX es sólo para hardware y OPEX para personal"
    ],
    correct: 1,
    explanation: "CAPEX (CAPital EXpenditure): inversión inicial grande (modelo tradicional). OPEX (OPerational EXpenditure): contratos \"as a service\", cuanto más se usa más se paga; sin inversión inicial."
  },
  {
    topic: 10,
    q: "La \"monetización de los datos\":",
    options: [
      "Es una práctica prohibida en ITIL",
      "Es una nueva fuente de ingresos no prevista inicialmente para muchas organizaciones",
      "Solo aplica a bancos",
      "Es lo mismo que la facturación"
    ],
    correct: 1,
    explanation: "Monetización de los datos: muchas organizaciones están obteniendo ingresos por este motivo. No era una fuente de ingresos inicialmente prevista."
  },

  // GESTIÓN ESTRATÉGICA
  {
    topic: 10,
    q: "¿Cuál es el propósito de la Gestión de la Estrategia?",
    options: [
      "Resolver incidencias críticas",
      "Definir los objetivos de la compañía y prever la asignación de recursos",
      "Negociar con sindicatos",
      "Vender productos"
    ],
    correct: 1,
    explanation: "Gestión de la estrategia: definir los objetivos de la compañía, y prever la asignación de recursos para ello. Incluye gobierno (políticas y cumplimiento) y nuevo estilo de liderazgo facilitador."
  },

  // GESTIÓN DE PROVEEDORES
  {
    topic: 10,
    q: "¿Cuál NO es una actividad de la gestión de proveedores?",
    options: [
      "Crear un único punto de visibilidad y control de las contrataciones",
      "Mantener una estrategia y política para la gestión de contratos",
      "Negociar, acordar y firmar contratos",
      "Sustituir todos los proveedores cada año"
    ],
    correct: 3,
    explanation: "Las 5 actividades son: 1) Punto único de visibilidad y control; 2) Estrategia y política; 3) Negociar/acordar/firmar; 4) Gestionar contratos y relación; 5) Gestionar el rendimiento."
  },
  {
    topic: 10,
    q: "¿Cuál es una modalidad de relación con proveedores?",
    options: [
      "Insourcing (recursos propios)",
      "Outsourcing (recursos externos)",
      "Multi-sourcing (varios proveedores)",
      "Todas las anteriores"
    ],
    correct: 3,
    explanation: "Modalidades: Insourcing (recursos propios), Outsourcing (externos), Punto único de partnership (un partner integrador), Multi-sourcing (varios proveedores directamente)."
  },
  {
    topic: 10,
    q: "El rol de la organización respecto a sus proveedores se describe como:",
    options: [
      "Cliente puro",
      "Integrador, con actividad de orquestación",
      "Competidor",
      "Auditor"
    ],
    correct: 1,
    explanation: "Nuestro papel es el de integrador, y nuestra actividad es la orquestación: ¿el conjunto del trabajo recibido tiene sentido? ¿Qué valor adicional aportamos a esa suma?"
  },

  // GESTIÓN DEL TALENTO
  {
    topic: 10,
    q: "¿De qué se ocupa la Gestión del Talento y Fuerza Laboral?",
    options: [
      "De prever y planificar la fuerza de trabajo necesaria: conocimientos, número de personas y personas correctas",
      "De aprobar nóminas",
      "De despedir empleados",
      "De negociar convenios"
    ],
    correct: 0,
    explanation: "Gestión del talento y fuerza laboral: prever y planificar la fuerza de trabajo necesaria. ¿Disponemos de los conocimientos necesarios? ¿De las personas suficientes? ¿De las personas correctas?"
  },
  {
    topic: 10,
    q: "¿Qué es la \"velocidad organizacional\" (velocity)?",
    options: [
      "La velocidad de las redes corporativas",
      "Velocidad a la que podemos entregar productos y servicios",
      "La rapidez al resolver incidencias",
      "El tiempo medio de respuesta"
    ],
    correct: 1,
    explanation: "Velocidad organizacional (velocity): velocidad a la que podemos entregar productos y servicios."
  },
  {
    topic: 10,
    q: "¿Qué es la \"velocidad sostenible\"?",
    options: [
      "La velocidad máxima permitida por el ANS",
      "Ritmo que podemos mantener por tiempo indefinido",
      "La velocidad de un sprint",
      "Una métrica de rendimiento del servidor"
    ],
    correct: 1,
    explanation: "Velocidad sostenible: ritmo que podemos mantener por tiempo indefinido."
  },
  {
    topic: 10,
    q: "¿Qué son las \"competencias\" según ITIL?",
    options: [
      "Conocimiento, habilidad y actitudes para resolver situaciones o problemas",
      "Sólo los títulos académicos",
      "El salario asignado",
      "La carga de trabajo"
    ],
    correct: 0,
    explanation: "Competencias: conocimiento, habilidad, y actitudes para resolver situaciones o problemas."
  },

  // GENERAL
  {
    topic: 10,
    q: "Para seleccionar proveedores, los factores a considerar incluyen:",
    options: [
      "Importancia/impacto (commodity, operativo, táctico, estratégico), riesgo y coste",
      "Sólo el coste",
      "Sólo la antigüedad del proveedor",
      "El idioma del proveedor"
    ],
    correct: 0,
    explanation: "Factores para selección: importancia e impacto (commodity, operativo, táctico, estratégico), riesgo y coste."
  },
  {
    topic: 10,
    q: "Las prácticas generales de gestión se entienden en un contexto de…",
    options: [
      "Cascada y predictivo",
      "Respuesta a cambios en la tecnología y el mercado, transformación digital, soportado por la tecnología",
      "Stand-alone, sin tecnología",
      "Sólo proyectos físicos"
    ],
    correct: 1,
    explanation: "Enfoque actual: entrega ágil. Todas las prácticas se entienden en un contexto de respuesta a cambios en la tecnología, el mercado… Dando respuesta a los procesos de Transformación Digital."
  }
];
