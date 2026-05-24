// Tema 2 — Conceptos clave de la gestión del servicio
// Tema 3 — Vistazo al SVS (Sistema de Valor del Servicio)
window.QUESTIONS_T2_T3 = [
  // ===== TEMA 2 =====
  {
    topic: 2,
    q: "Según ITIL, ¿quién es un \"interesado\" (stakeholder)?",
    options: [
      "Solo el cliente que paga el servicio",
      "Cualquier persona o grupo impactado por el proyecto o servicio, a favor o en contra",
      "Únicamente los empleados de la organización proveedora",
      "Solo los usuarios finales del servicio"
    ],
    correct: 1,
    explanation: "Un interesado significa \"impactado\". Puede estar a favor o en contra del proyecto o servicio. Incluye empleados, clientes, partners, suministradores, organizaciones públicas, etc."
  },
  {
    topic: 2,
    q: "¿Cómo se define formalmente una organización en ITIL?",
    options: [
      "Una persona o grupo con funciones, responsabilidades y relaciones de autoridad para alcanzar sus objetivos",
      "Una empresa con más de 250 empleados",
      "Cualquier entidad legalmente constituida",
      "Un conjunto de departamentos coordinados"
    ],
    correct: 0,
    explanation: "Organización: una persona o grupo de personas que tiene sus propias funciones, con responsabilidades y relaciones de autoridad, para alcanzar sus objetivos. En ITIL, \"organización\" se refiere siempre al proveedor del servicio."
  },
  {
    topic: 2,
    q: "En ITIL, cuando hablamos de \"organización\", ¿a qué nos referimos siempre?",
    options: [
      "Al consumidor del servicio",
      "Al proveedor del servicio",
      "A los partners",
      "A los reguladores externos"
    ],
    correct: 1,
    explanation: "En ITIL, cuando decimos \"organización\", nos referimos siempre como la proveedora del servicio. El usuario del servicio puede ser interno o externo."
  },
  {
    topic: 2,
    q: "¿Qué tres roles distinguimos dentro del consumidor del servicio?",
    options: [
      "Cliente, usuario y sponsor",
      "Cliente, partner y suministrador",
      "Usuario, técnico y gestor",
      "Cliente, gobierno y empleado"
    ],
    correct: 0,
    explanation: "El consumidor del servicio se descompone en: Cliente (define requerimientos y consume resultados), Usuario (utiliza el servicio) y Sponsor (autoriza el presupuesto)."
  },
  {
    topic: 2,
    q: "¿Qué rol define los requerimientos del servicio y consume los resultados que se entregan?",
    options: [
      "Sponsor",
      "Usuario",
      "Cliente",
      "Proveedor"
    ],
    correct: 2,
    explanation: "Cliente: persona que define los requerimientos del servicio, y consume los resultados que el servicio entrega."
  },
  {
    topic: 2,
    q: "¿Qué rol autoriza el presupuesto para la contratación de un servicio?",
    options: [
      "Cliente",
      "Usuario",
      "Sponsor",
      "Partner"
    ],
    correct: 2,
    explanation: "Sponsor: persona que autoriza el presupuesto para el servicio. Por ejemplo, el CFO."
  },
  {
    topic: 2,
    q: "Una compañía compra teléfonos móviles para todos sus empleados. El CIO define características y valida la entrega. ¿Qué rol desempeña el CIO?",
    options: [
      "Usuario",
      "Cliente",
      "Sponsor",
      "Partner"
    ],
    correct: 1,
    explanation: "El CIO define las características del servicio y valida la entrega según contrato; ese es el rol de Cliente."
  },
  {
    topic: 2,
    q: "Según ITIL, ¿qué es un producto?",
    options: [
      "Un bien físico que se vende a un cliente",
      "Una configuración de los recursos de una organización, diseñada para entregar valor a un cliente",
      "Una promesa de soporte continuo",
      "Una transacción comercial entre proveedor y cliente"
    ],
    correct: 1,
    explanation: "Producto: una configuración de los recursos de una organización, diseñada para entregar valor a un cliente."
  },
  {
    topic: 2,
    q: "¿Cuál es la definición formal de servicio según ITIL?",
    options: [
      "La venta de productos físicos a un cliente",
      "Un medio que hace posible la co-creación de valor, facilitando resultados que los clientes desean, sin que tengan que preocuparse de riesgos o costes específicos",
      "El conjunto de tareas que un proveedor ejecuta por contrato",
      "La entrega de un producto tangible al usuario"
    ],
    correct: 1,
    explanation: "Servicio: un medio que hace posible la co-creación de valor, facilitando resultados que los clientes desean, sin que tengan que preocuparse de riesgos o costes específicos."
  },
  {
    topic: 2,
    q: "Los servicios se proporcionan mediante…",
    options: [
      "Contratos",
      "Productos",
      "Acuerdos de nivel de servicio",
      "Sponsors"
    ],
    correct: 1,
    explanation: "Un producto es una configuración de los recursos (personas, información y tecnología, cadenas de valor y procesos, proveedores y partners). Por tanto, los servicios se proporcionan mediante productos."
  },
  {
    topic: 2,
    q: "¿Qué es una \"oferta de servicio\"?",
    options: [
      "Una rebaja temporal en el precio",
      "Una descripción de un servicio diseñado para satisfacer las necesidades de un grupo de consumidores",
      "Un contrato firmado con un cliente concreto",
      "Una propuesta interna de cambio"
    ],
    correct: 1,
    explanation: "Oferta de servicio: descripción de un servicio diseñado para satisfacer las necesidades de un grupo de consumidores. Puede incluir bienes, acceso a recursos y acciones del servicio."
  },
  {
    topic: 2,
    q: "Una oferta de servicio puede incluir, según ITIL…",
    options: [
      "Solo bienes físicos",
      "Bienes, acceso a recursos y acciones del servicio",
      "Únicamente acciones de atención al cliente",
      "Solo software"
    ],
    correct: 1,
    explanation: "La oferta de servicio puede incluir bienes (p.ej. teléfono móvil), acceso a recursos (red, almacenamiento) y acciones del servicio (atención al cliente)."
  },
  {
    topic: 2,
    q: "¿Qué es una \"relación de servicio\" (service relationship)?",
    options: [
      "El contrato firmado con un proveedor",
      "La cooperación entre un proveedor y un consumidor de servicio",
      "El acuerdo entre dos partners estratégicos",
      "Una métrica de satisfacción del usuario"
    ],
    correct: 1,
    explanation: "Relación de servicio: cooperación entre un proveedor y un consumidor de servicio."
  },
  {
    topic: 2,
    q: "¿Cómo se denomina la actividad para usar un servicio, que puede incluir el uso de bienes?",
    options: [
      "Provisión del servicio",
      "Consumo del servicio",
      "Gestión de la relación de servicio",
      "Oferta del servicio"
    ],
    correct: 1,
    explanation: "Consumo del servicio: actividades para usar un servicio, que pueden incluir el uso de bienes."
  },
  {
    topic: 2,
    q: "¿Qué diferencia hay entre una \"salida\" (output) y un \"resultado\" (outcome)?",
    options: [
      "Son sinónimos",
      "La salida es un entregable producido por una actividad; el resultado es lo que obtiene un interesado gracias a una o más salidas",
      "La salida es intangible y el resultado siempre es tangible",
      "El resultado lo produce el proveedor y la salida la produce el cliente"
    ],
    correct: 1,
    explanation: "Salida (output): entregable tangible o intangible producido por una actividad. Resultado (outcome): producto tangible o intangible que obtiene un interesado, posible gracias a una o más salidas."
  },
  {
    topic: 2,
    q: "Un móvil entregado y conectado a la red de datos es una salida. ¿Qué sería un resultado en este ejemplo?",
    options: [
      "El terminal físico",
      "La capacidad del usuario de enviar emails o usar WhatsApp",
      "La factura del operador",
      "La SIM instalada"
    ],
    correct: 1,
    explanation: "Salida: el teléfono conectado a la red. Resultado: la capacidad del usuario para enviar emails o usar WhatsApp."
  },
  {
    topic: 2,
    q: "¿Cómo se define formalmente coste según ITIL?",
    options: [
      "El precio que paga el cliente",
      "La cantidad de dinero gastado en una actividad o recurso específico",
      "El importe facturado por el proveedor",
      "El impacto financiero de un riesgo"
    ],
    correct: 1,
    explanation: "Coste: cantidad de dinero gastado en una actividad o recurso específico."
  },
  {
    topic: 2,
    q: "Para proveer un servicio, ¿qué dos tipos de coste existen?",
    options: [
      "Coste fijo y coste variable",
      "Coste de inversión para construir/disponer el servicio y coste por el consumo del servicio",
      "Coste directo y coste indirecto",
      "CAPEX y OPEX"
    ],
    correct: 1,
    explanation: "Hay 2 tipos de coste: inversión para construir y disponer el servicio, y coste por el consumo del servicio."
  },
  {
    topic: 2,
    q: "¿Cómo define ITIL el riesgo?",
    options: [
      "Un evento positivo o negativo no planificado",
      "Un evento posible que puede causar pérdidas o daño, o puede hacer más difícil alcanzar los objetivos",
      "Cualquier desviación del plan original",
      "Una incidencia mayor"
    ],
    correct: 1,
    explanation: "Riesgo: un evento posible que puede causar pérdidas o daño, o puede hacer más difícil alcanzar los objetivos. En el contexto de ITIL la idea de riesgo es siempre negativa."
  },
  {
    topic: 2,
    q: "En el contexto de ITIL, la idea de riesgo es siempre…",
    options: [
      "Positiva",
      "Negativa",
      "Neutra",
      "Estratégica"
    ],
    correct: 1,
    explanation: "En el contexto de ITIL, la idea de Riesgo es siempre negativa: hay que anticiparlo, evitarlo o minimizarlo."
  },
  {
    topic: 2,
    q: "¿Cuáles son los dos tipos de riesgo asociados a un servicio?",
    options: [
      "Riesgo financiero y riesgo operacional",
      "Riesgo al construir/disponer el servicio y riesgo de consumo del servicio",
      "Riesgo interno y externo",
      "Riesgo conocido y desconocido"
    ],
    correct: 1,
    explanation: "Como con el coste, hay 2 tipos de riesgos: riesgo al construir o disponer un servicio (posibilidad de fallo al arrancar), y riesgo de consumo del servicio (p.ej. que el proveedor cese su actividad, riesgos de seguridad…)."
  },
  {
    topic: 2,
    q: "¿Qué es la \"utilidad\" de un servicio?",
    options: [
      "Cómo el servicio se puede usar",
      "Lo que un servicio hace: si aporta funcionalidad o elimina restricciones (fit for purpose)",
      "El precio que se cobra por él",
      "El nivel de disponibilidad acordado"
    ],
    correct: 1,
    explanation: "Utilidad: lo que un servicio hace. ¿Aporta nueva funcionalidad? ¿Elimina alguna restricción? ¿Resulta \"fit for purpose\"?"
  },
  {
    topic: 2,
    q: "¿Qué es la \"garantía\" (warranty) de un servicio?",
    options: [
      "El periodo de tiempo durante el cual se ofrece soporte",
      "Cómo un servicio se puede usar; se mide por niveles de servicio (fit for use)",
      "La cobertura ante defectos del producto",
      "El número de incidencias permitidas"
    ],
    correct: 1,
    explanation: "Garantía: cómo un servicio se puede usar. Se mide por niveles de servicio. ¿Resulta \"fit for use\"?"
  },
  {
    topic: 2,
    q: "¿Cuáles son los 4 niveles de garantía en ITIL?",
    options: [
      "Disponibilidad, capacidad, continuidad y seguridad",
      "Funcionalidad, fiabilidad, usabilidad y mantenibilidad",
      "Coste, tiempo, calidad y alcance",
      "Confidencialidad, integridad, disponibilidad y autenticidad"
    ],
    correct: 0,
    explanation: "Los 4 niveles de garantía son: Disponibilidad, Capacidad, Continuidad y Seguridad."
  },
  {
    topic: 2,
    q: "¿Cómo se compone el valor según ITIL?",
    options: [
      "Valor = Utilidad O Garantía (cualquiera de las dos)",
      "Valor = Utilidad + Garantía (ambas son necesarias)",
      "Valor = Utilidad - Costes",
      "Valor = Garantía - Riesgos"
    ],
    correct: 1,
    explanation: "Valor = Utilidad + Garantía (Utilidad \"Y\" Garantía; no es un \"O\"). Un servicio aporta valor cuando es útil y además tiene garantía."
  },
  {
    topic: 2,
    q: "¿Cuál de los siguientes NO es un ejemplo válido de \"otros interesados\"?",
    options: [
      "Suministradores",
      "Partners",
      "Organizaciones públicas",
      "El propio Service Value System"
    ],
    correct: 3,
    explanation: "Otros interesados son empleados, partners, suministradores, organizaciones públicas o grupos de posibles clientes. El SVS no es un interesado, es el sistema en sí."
  },
  {
    topic: 2,
    q: "Una taza de café se sirve a un cliente. ¿Cuál sería la salida y cuál el resultado?",
    options: [
      "Salida: la taza de café servida; Resultado: el placer/energía obtenidos al beberlo",
      "Salida: el placer al beberlo; Resultado: la taza de café",
      "Ambos son la taza de café",
      "Ambos son el placer obtenido"
    ],
    correct: 0,
    explanation: "La salida es el entregable tangible producido por la actividad. El resultado es lo que un interesado obtiene gracias a esa salida."
  },
  {
    topic: 2,
    q: "¿Cómo podemos minimizar el riesgo según ITIL?",
    options: [
      "Evitando definir requisitos detallados",
      "Definiendo requisitos con usuarios y clientes, dejando claros los CSFs, y gestionando recursos suficientes",
      "Transfiriendo todos los riesgos al cliente",
      "Externalizando el servicio"
    ],
    correct: 1,
    explanation: "Para minimizar el riesgo: definir requisitos CON usuarios y clientes, dejar claros los CSFs (Factores Críticos de Éxito), y gestionar el servicio para disponer de recursos suficientes."
  },

  // ===== TEMA 3 — SVS =====
  {
    topic: 3,
    q: "¿Qué son las dos entradas clave del Sistema de Valor del Servicio (SVS)?",
    options: [
      "Demanda y oportunidades",
      "Demanda y recursos",
      "Personas y tecnología",
      "Procesos y partners"
    ],
    correct: 0,
    explanation: "El SVS es un ecosistema con 2 entradas clave: Demanda y Oportunidades. La salida clave es Valor."
  },
  {
    topic: 3,
    q: "¿Cuál es la salida clave del SVS?",
    options: [
      "Beneficio",
      "Valor",
      "Servicios entregados",
      "Información"
    ],
    correct: 1,
    explanation: "El SVS tiene como salida clave el Valor."
  },
  {
    topic: 3,
    q: "¿Cuáles son los componentes del SVS?",
    options: [
      "Demanda, oportunidad, valor, gobierno y mejora",
      "Cadena de valor del servicio, principios rectores, gobierno, prácticas y mejora continua",
      "Las 4 dimensiones, las 7 prácticas y los 6 principios",
      "Acoplar, planificar, mejorar, diseñar, construir y entregar"
    ],
    correct: 1,
    explanation: "Los componentes del SVS son: cadena de valor del servicio, principios rectores, gobierno, prácticas y mejora continua."
  },
  {
    topic: 3,
    q: "¿Qué significa que la organización sea \"un sistema\" en el SVS?",
    options: [
      "Que está informatizada al máximo",
      "Que trabaja sin \"silos\" en cuanto a datos, personas, tecnología y prácticas",
      "Que está completamente automatizada",
      "Que tiene una estructura jerárquica única"
    ],
    correct: 1,
    explanation: "La organización es un \"sistema\", es decir, sin \"silos\" en cuanto a datos e información, personas y comunicación, tecnológicos y prácticas."
  },
  {
    topic: 3,
    q: "¿Qué afirmación es correcta sobre los disparadores del SVS?",
    options: [
      "Solo la demanda dispara el SVS",
      "Oportunidad y demanda son los triggers del SVS",
      "Solo el gobierno corporativo dispara el SVS",
      "Las oportunidades nunca pueden ser futuras"
    ],
    correct: 1,
    explanation: "Oportunidad y demanda son los triggers del SVS. Pueden existir oportunidades para demandas futuras. La demanda puede venir de clientes internos y externos."
  },
  {
    topic: 3,
    q: "¿Cuáles son las 3 actividades clave de Gobierno en ITIL?",
    options: [
      "Planificar, Hacer, Verificar",
      "Evaluar, Dirigir, Monitorizar",
      "Identificar, Analizar, Responder",
      "Definir, Medir, Mejorar"
    ],
    correct: 1,
    explanation: "El equipo de gobierno es responsable del cumplimiento de regulaciones y compromisos con terceros. Sus 3 actividades son: Evaluar → Dirigir → Monitorizar."
  },
  {
    topic: 3,
    q: "¿Cuántas actividades tiene la cadena de valor del servicio?",
    options: [
      "4",
      "5",
      "6",
      "7"
    ],
    correct: 2,
    explanation: "Son 6 actividades: Planificar, Mejorar, Acoplar (engage), Diseño y transición, Obtener/construir, y Entregar y dar soporte."
  },
  {
    topic: 3,
    q: "¿Cuál NO es una actividad de la cadena de valor del servicio?",
    options: [
      "Planificar",
      "Acoplar (engage)",
      "Gobernar",
      "Entregar y dar soporte"
    ],
    correct: 2,
    explanation: "Las 6 actividades son Planificar, Mejorar, Acoplar, Diseño y transición, Obtener/construir y Entregar y dar soporte. El gobierno es un componente del SVS pero no una actividad de la cadena de valor."
  },
  {
    topic: 3,
    q: "Sobre la relación entre ITIL, Agile y DevOps, la postura oficial de ITIL 4 es…",
    options: [
      "Elegir uno u otro según el caso",
      "ITIL sustituye a Agile y DevOps",
      "Combinar lo mejor de todos; se potencian mutuamente",
      "Agile y DevOps solo se aplican fuera de IT"
    ],
    correct: 2,
    explanation: "No \"elegir uno u otro\", sino combinar lo mejor de todos. ITIL + Agile + DevOps se potencian mutuamente."
  },
  {
    topic: 3,
    q: "Según ITIL, la ecuación cultural de DevOps es:",
    options: [
      "DevOps = Cascada + ITIL",
      "DevOps = Desarrollo Agile + co-creación de valor (ITIL) + enfoque Lean",
      "DevOps = Agile + Waterfall",
      "DevOps = ITIL + automatización"
    ],
    correct: 1,
    explanation: "DevOps = desarrollo Agile + co-creación de valor (ITIL) + enfoque Lean. La cultura DevOps agiliza la cadena de producción de valor."
  },
  {
    topic: 3,
    q: "¿Quién es responsable (accountable) del cumplimiento de regulaciones y compromisos con terceros?",
    options: [
      "El service desk",
      "El equipo de gobierno de la empresa",
      "El sponsor del servicio",
      "Cada usuario individualmente"
    ],
    correct: 1,
    explanation: "El equipo de gobierno de la empresa es el responsable (accountable) del cumplimiento de regulaciones, y compromisos con terceros."
  },
  {
    topic: 3,
    q: "¿De dónde puede venir la demanda en el SVS?",
    options: [
      "Solo de clientes externos",
      "Solo de clientes internos",
      "De clientes internos y externos (lo más habitual)",
      "Solo del gobierno corporativo"
    ],
    correct: 2,
    explanation: "La demanda puede venir de clientes internos y externos (lo más habitual)."
  },
  {
    topic: 3,
    q: "¿Cuál de las siguientes ideas resume mejor el enfoque holístico del SVS?",
    options: [
      "Cada departamento debe optimizarse por separado",
      "Adaptación al cambio, comunicación y colaboración, sin silos",
      "Automatización total de los procesos",
      "Foco exclusivo en la entrega rápida"
    ],
    correct: 1,
    explanation: "Las ideas generales del SVS son: adaptación al cambio, comunicación y colaboración, madurez, Agile/DevOps/Lean, empresa inteligente, sin silos."
  },
  {
    topic: 3,
    q: "En el SVS, el gobierno…",
    options: [
      "Solo aplica a la mejora continua",
      "Aplica al resto de elementos del SVS",
      "Es independiente del resto del SVS",
      "Solo aplica a las prácticas de gestión técnica"
    ],
    correct: 1,
    explanation: "El gobierno aplica al resto de elementos del SVS."
  },
  {
    topic: 3,
    q: "En una empresa de desarrollo de software, ¿qué actividad de la cadena de valor cubre pre-venta, venta, contratación y comprensión de necesidades?",
    options: [
      "Planificar",
      "Acoplar (engage)",
      "Diseño y transición",
      "Obtener/construir"
    ],
    correct: 1,
    explanation: "Acoplar (engage) cubre la pre-venta, venta, contratación y comprensión de necesidades de los interesados."
  },
  {
    topic: 3,
    q: "Las actividades de la cadena de valor del servicio son también…",
    options: [
      "Departamentos fijos de la empresa",
      "Grupos de trabajo que se encargan de los aspectos correspondientes",
      "Procesos rígidos que no pueden combinarse",
      "Roles individuales obligatorios"
    ],
    correct: 1,
    explanation: "No sólo son actividades, sino \"grupos de trabajo\" que se encargan de planificar, acoplar, hacer/comprar recursos, lanzar mejoras, etc."
  },
  {
    topic: 3,
    q: "¿Cuál de los siguientes elementos NO es un componente del SVS?",
    options: [
      "Principios rectores",
      "Gobierno",
      "Las 4 dimensiones",
      "Mejora continua"
    ],
    correct: 2,
    explanation: "Los componentes del SVS son: cadena de valor, principios rectores, gobierno, prácticas y mejora continua. Las 4 dimensiones influyen sobre el SVS pero no son un componente del mismo."
  },
  {
    topic: 3,
    q: "Pueden existir oportunidades en el SVS…",
    options: [
      "Solo si ya hay demanda actual",
      "Para demandas futuras, anticipando lo que se necesitará",
      "Sólo si hay financiación previa",
      "Únicamente si las marca la dirección"
    ],
    correct: 1,
    explanation: "Pueden existir oportunidades para demandas futuras. El SVS contempla anticiparse a demandas que aún no se han materializado."
  }
];
