// Tema 9 — Prácticas de Gestión de Servicios (17 prácticas)
window.QUESTIONS_T9 = [
  // GESTIÓN DE DISPONIBILIDAD
  {
    topic: 9,
    q: "¿Qué es la disponibilidad según ITIL?",
    options: [
      "El tiempo máximo de respuesta de un servicio",
      "La habilidad de que un servicio IT entregue su funcionalidad cuando es requerido",
      "El porcentaje de incidencias resueltas",
      "El número de usuarios concurrentes"
    ],
    correct: 1,
    explanation: "Disponibilidad: la habilidad de que un servicio IT entregue su funcionalidad cuando es requerido. También aplica a cualquier componente técnico. Es un proceso de gestión proactivo.",
    ref: "Tema 9, slide 1"
  },
  {
    topic: 9,
    q: "Si el ANS dice 100% (24x7) pero se acepta que 2 veces al año habrá una parada de un día para mantenimiento, ¿se incumple la disponibilidad esos días?",
    options: [
      "Sí, siempre se incumple cualquier parada",
      "No, puesto que se ha aceptado el mantenimiento programado",
      "Sí, salvo si lo decide el técnico",
      "Depende del cliente"
    ],
    correct: 1,
    explanation: "NO se incumple la disponibilidad cuando las paradas están acordadas y aceptadas previamente en el ANS.",
    ref: "Tema 9, slide 3"
  },
  {
    topic: 9,
    q: "La gestión de disponibilidad es una práctica…",
    options: [
      "Reactiva",
      "Proactiva (previene que se produzcan paradas)",
      "Aleatoria",
      "Sólo aplicable a hardware"
    ],
    correct: 1,
    explanation: "Es un proceso de gestión proactivo: previene que se produzcan paradas.",
    ref: "Tema 9, slide 1"
  },

  // ANÁLISIS DE NEGOCIO
  {
    topic: 9,
    q: "¿Cuál es el propósito del Análisis de Negocio?",
    options: [
      "Comprender las necesidades de negocio y aterrizarlo en requerimientos que dirijan los proyectos",
      "Calcular la rentabilidad de la empresa",
      "Auditar la contabilidad",
      "Definir la estrategia financiera"
    ],
    correct: 0,
    explanation: "Análisis de negocio: trata de comprender las necesidades de negocio que se deben satisfacer, y aterrizarlo en requerimientos que dirijan la implementación de proyectos.",
    ref: "Tema 9, slide 4"
  },
  {
    topic: 9,
    q: "¿Qué dos tipos de requerimientos existen en Análisis de Negocio?",
    options: [
      "Funcionales y no funcionales",
      "De utilidad (qué funcionalidad/qué problema soluciona) y de garantía (cómo debe entregarla)",
      "Técnicos y de negocio",
      "Permanentes y temporales"
    ],
    correct: 1,
    explanation: "Tipos de requerimientos: de utilidad (¿qué funcionalidad aporta, o qué problema soluciona?) y de garantía (¿cómo debe entregar la utilidad? - disponibilidad, continuidad, capacidad, seguridad).",
    ref: "Tema 9, slide 5"
  },

  // GESTIÓN DE CAPACIDAD
  {
    topic: 9,
    q: "¿Cómo define ITIL la capacidad?",
    options: [
      "La cantidad máxima de memoria de un sistema",
      "La medida de qué es conseguido o entregado por un sistema, persona, equipo, servicio o componente TI",
      "El tamaño del equipo asignado a un servicio",
      "El número de licencias contratadas"
    ],
    correct: 1,
    explanation: "Capacidad: la medida de qué es conseguido o entregado por un sistema, persona, equipo, servicio o componente TI.",
    ref: "Tema 9, slide 8"
  },
  {
    topic: 9,
    q: "La gestión de capacidad y rendimiento es una práctica…",
    options: [
      "Reactiva",
      "Proactiva",
      "Sólo aplicable a redes",
      "Aleatoria"
    ],
    correct: 1,
    explanation: "Es una práctica de carácter proactivo: aplica recursos para entregar los servicios anticipándose a las necesidades.",
    ref: "Tema 9, slide 8"
  },
  {
    topic: 9,
    q: "¿Quién define la capacidad máxima de un servicio?",
    options: [
      "El proveedor con la mayor capacidad",
      "El eslabón más débil (recurso con menor capacidad) del servicio",
      "El cliente que más paga",
      "El sponsor"
    ],
    correct: 1,
    explanation: "La capacidad de un servicio depende de los componentes TI que lo constituyen. Las personas también tienen capacidad. El eslabón más débil define la capacidad máxima.",
    ref: "Tema 9, slide 10"
  },

  // GESTIÓN DE CAMBIOS
  {
    topic: 9,
    q: "¿Cómo se define un cambio en ITIL?",
    options: [
      "Un fallo en un servicio",
      "La adición, modificación o eliminación de algo que puede afectar a un servicio",
      "Un nuevo cliente",
      "Una incidencia mayor"
    ],
    correct: 1,
    explanation: "Cambio: la adición, modificación o eliminación de algo que puede afectar a un servicio.",
    ref: "Tema 9, slide 11"
  },
  {
    topic: 9,
    q: "¿Cuáles son los 3 tipos de cambio según ITIL?",
    options: [
      "Cambios mayores, menores y críticos",
      "Cambios estándar, cambios normales y cambios de emergencia",
      "Cambios técnicos, organizativos y estratégicos",
      "Cambios planificados, urgentes y rutinarios"
    ],
    correct: 1,
    explanation: "Los 3 tipos de cambio son: estándar (preautorizados, bajo riesgo), normales (siguen un procedimiento con comité asesor de cambios), y de emergencia (procedimiento más rápido).",
    ref: "Tema 9, slide 12"
  },
  {
    topic: 9,
    q: "Un cambio estándar es:",
    options: [
      "Un cambio crítico que requiere autorización inmediata",
      "Preautorizado, de riesgo bajo, sin assessment para ser ejecutado",
      "Un cambio que se aplica a todos los clientes",
      "Un cambio aprobado por el cliente"
    ],
    correct: 1,
    explanation: "Cambios estándar: preautorizados, de riesgo bajo, sin \"assessment\" para ser ejecutados.",
    ref: "Tema 9, slide 12"
  },
  {
    topic: 9,
    q: "Un cambio normal:",
    options: [
      "Se ejecuta sin autorización",
      "Se origina por una petición de cambio y sigue un procedimiento que un comité asesor debe autorizar (o rechazar)",
      "Se aplica automáticamente",
      "Se prohíbe en ITIL"
    ],
    correct: 1,
    explanation: "Cambios normales: se originan por una petición de cambio. Siguen un procedimiento; un comité asesor de cambios debe autorizarlo (o rechazarlo).",
    ref: "Tema 9, slide 12"
  },
  {
    topic: 9,
    q: "Un cambio de emergencia:",
    options: [
      "Sigue procedimiento más rápido (p.ej. para solucionar una incidencia)",
      "Nunca está permitido",
      "Sólo lo autoriza el CEO",
      "Es siempre de alto riesgo y baja prioridad"
    ],
    correct: 0,
    explanation: "Cambios de emergencia: procedimiento más rápido (p.ej. para solucionar una incidencia).",
    ref: "Tema 9, slide 12"
  },

  // GESTIÓN DE INCIDENCIAS
  {
    topic: 9,
    q: "¿Cómo se define una incidencia en ITIL?",
    options: [
      "Un cambio aprobado en el servicio",
      "Interrupción no planificada o pérdida de calidad en un servicio",
      "Un riesgo identificado",
      "Una petición de servicio"
    ],
    correct: 1,
    explanation: "Incidencia: interrupción no planificada o pérdida de calidad en un servicio.",
    ref: "Tema 9, slide 15"
  },
  {
    topic: 9,
    q: "El ANS dice máx. 4 segundos de carga; el servicio empezó con 2 s y ahora carga en 3 s. ¿Es una incidencia?",
    options: [
      "No, porque se cumple el ANS",
      "Sí, porque es una pérdida de calidad anormal aunque se cumpla el ANS",
      "Sólo si el cliente se queja",
      "Sólo si supera los 4 segundos"
    ],
    correct: 1,
    explanation: "SÍ es incidencia: aunque se cumpla el ANS, hay una pérdida de calidad anormal respecto al rendimiento habitual.",
    ref: "Tema 9, slide 16"
  },
  {
    topic: 9,
    q: "La gestión de incidencias es una práctica…",
    options: [
      "Proactiva",
      "Reactiva (se ejecuta cuando se produce una incidencia)",
      "Predictiva",
      "Estratégica"
    ],
    correct: 1,
    explanation: "Es una práctica de enfoque reactivo: se ejecuta cuando se produce una incidencia.",
    ref: "Tema 9, slide 17"
  },
  {
    topic: 9,
    q: "¿Cuál es el propósito de la gestión de incidencias?",
    options: [
      "Eliminar todas las incidencias por completo",
      "Minimizar el impacto negativo de las incidencias mediante la restauración del servicio a su funcionamiento normal, tan rápido como sea posible",
      "Identificar las causas raíz",
      "Auditar los servicios"
    ],
    correct: 1,
    explanation: "Propósito: minimizar el impacto negativo de las incidencias mediante la restauración del servicio a su funcionamiento normal, tan rápido como sea posible.",
    ref: "Tema 9, slide 15"
  },
  {
    topic: 9,
    q: "¿Qué tipos de escalado se aplican a una incidencia?",
    options: [
      "Escalado funcional (niveles 1, 2, 3) y escalado jerárquico",
      "Sólo escalado funcional",
      "Sólo escalado jerárquico",
      "Escalado por urgencia y por impacto"
    ],
    correct: 0,
    explanation: "Escalado de una incidencia: escalado funcional (nivel 1, 2, 3) y escalado jerárquico.",
    ref: "Tema 9, slide 18"
  },
  {
    topic: 9,
    q: "Una \"incidencia mayor\" es:",
    options: [
      "Una incidencia de baja prioridad",
      "Una tipología de incidencia que requiere un proceso de resolución particular",
      "Una incidencia que afecta sólo a un usuario",
      "Una petición de servicio"
    ],
    correct: 1,
    explanation: "Incidencia mayor: una tipología de incidencia que requiere un proceso de resolución particular.",
    ref: "Tema 9, slide 17"
  },

  // GESTIÓN DE ACTIVOS TI
  {
    topic: 9,
    q: "¿Qué es un activo TI según ITIL?",
    options: [
      "Cualquier componente del proveedor",
      "Cualquier componente financieramente significativo que contribuye a la entrega de un producto o servicio TI",
      "Sólo el hardware físico",
      "Únicamente los servidores"
    ],
    correct: 1,
    explanation: "Activo TI: cualquier componente financieramente significativo que contribuye a la entrega de un producto o servicio TI.",
    ref: "Tema 9, slide 20"
  },
  {
    topic: 9,
    q: "¿Cuál NO es un ejemplo de activo TI?",
    options: [
      "Impresora",
      "Portátil",
      "Aplicación de software",
      "Una factura"
    ],
    correct: 3,
    explanation: "Ejemplos de activos TI: impresoras, portátiles, aplicaciones de software, dispositivos de cliente, almacén en la nube, dispositivos IoT, edificios si son necesarios para proveer servicios TI.",
    ref: "Tema 9, slide 21"
  },
  {
    topic: 9,
    q: "¿Qué es SAM?",
    options: [
      "Service Asset Management",
      "Software Asset Management - gestión de todos los activos de software",
      "Server Architecture Management",
      "Security Asset Module"
    ],
    correct: 1,
    explanation: "SAM: Software Asset Management, gestión de todos los activos de software (aplicaciones, webs, apps, repositorios de código, algoritmos, datos).",
    ref: "Tema 9, slide 22"
  },
  {
    topic: 9,
    q: "¿Qué es ITAM?",
    options: [
      "IT Account Management",
      "IT Asset Management - equipamientos e infraestructuras",
      "Information Technology Audit",
      "International Technical Asset Module"
    ],
    correct: 1,
    explanation: "ITAM: IT Asset Management, equipamientos e infraestructuras.",
    ref: "Tema 9, slide 22"
  },
  {
    topic: 9,
    q: "¿Qué es la CMDB?",
    options: [
      "Una base de datos de clientes",
      "Base de datos de gestión de la configuración, que mapea los activos y sus relaciones",
      "Un sistema de control de cambios",
      "Un repositorio de incidencias"
    ],
    correct: 1,
    explanation: "CMDB: base de datos de gestión de la configuración. El registro de activos mapea con la CMDB para conocer localización, estado y relaciones de cada activo.",
    ref: "Tema 9, slide 23"
  },

  // GESTIÓN DE EVENTOS
  {
    topic: 9,
    q: "¿Qué es un evento según ITIL?",
    options: [
      "Cualquier cambio en el sistema",
      "Cambio de estado significativo para la gestión del servicio de cualquier tipo de CI",
      "Una incidencia resuelta",
      "Una reunión del equipo"
    ],
    correct: 1,
    explanation: "Evento: cambio de estado significativo para la gestión del servicio de cualquier tipo de CI. No todos los cambios de estado son eventos.",
    ref: "Tema 9, slide 25"
  },
  {
    topic: 9,
    q: "¿Cuáles son los 3 tipos de eventos según ITIL?",
    options: [
      "Bajos, medios y altos",
      "Informativos, avisos y alarmas",
      "Conocidos, desconocidos y críticos",
      "Internos, externos e híbridos"
    ],
    correct: 1,
    explanation: "Tipos de eventos: Informativos (no requieren acción inmediata), Avisos (requieren análisis), Alarmas (requieren acción inmediata).",
    ref: "Tema 9, slide 26"
  },
  {
    topic: 9,
    q: "Una BBDD llega al 85% de su capacidad. ¿Qué tipo de evento es?",
    options: [
      "Informativo",
      "Aviso",
      "Alarma",
      "No es un evento"
    ],
    correct: 1,
    explanation: "Una BBDD al 85% de capacidad es un aviso: requiere análisis para determinar si se producirán incidencias o problemas.",
    ref: "Tema 9, slide 26"
  },
  {
    topic: 9,
    q: "Falla la inserción de un registro en una BBDD. ¿Qué tipo de evento es?",
    options: [
      "Informativo",
      "Aviso",
      "Alarma",
      "No es un evento"
    ],
    correct: 2,
    explanation: "Una alarma: requiere acción inmediata. El fallo de inserción es un cambio de estado crítico.",
    ref: "Tema 9, slide 27"
  },

  // GESTIÓN DE PROBLEMAS
  {
    topic: 9,
    q: "¿Qué es un problema según ITIL?",
    options: [
      "Una incidencia que no se ha resuelto",
      "Causa real, o potencial, de una o más incidencias",
      "Una queja del cliente",
      "Un riesgo identificado"
    ],
    correct: 1,
    explanation: "Problema: causa real, o potencial, de una o más incidencias.",
    ref: "Tema 9, slide 30"
  },
  {
    topic: 9,
    q: "¿Qué es un error conocido?",
    options: [
      "Una incidencia documentada en la KB",
      "Problema que ha sido analizado pero aún no ha sido resuelto",
      "Un bug de un proveedor externo",
      "Una incidencia repetitiva"
    ],
    correct: 1,
    explanation: "Error conocido: problema que ha sido analizado pero aún no ha sido resuelto.",
    ref: "Tema 9, slide 30"
  },
  {
    topic: 9,
    q: "La gestión de problemas vs. gestión de incidencias:",
    options: [
      "Gestión de problemas es proactiva, gestión de incidencias es reactiva",
      "Ambas son reactivas",
      "Ambas son proactivas",
      "Gestión de incidencias es proactiva, gestión de problemas es reactiva"
    ],
    correct: 0,
    explanation: "Gestión de problemas: práctica proactiva (busca causas). Gestión de incidencias: práctica reactiva (resuelve la interrupción).",
    ref: "Tema 9, slide 31"
  },
  {
    topic: 9,
    q: "¿Cuáles son las fases de la gestión de problemas?",
    options: [
      "Identificación, control del problema, control de errores",
      "Detección, análisis, cierre",
      "Aviso, alarma, resolución",
      "Petición, gestión, validación"
    ],
    correct: 0,
    explanation: "Fases de gestión de problemas: Identificación (por incidencias, tendencias, riesgos), Control del problema (solución temporal, análisis profundo), y Control de errores (verificar soluciones).",
    ref: "Tema 9, slide 32"
  },
  {
    topic: 9,
    q: "¿Qué es un workaround o solución temporal?",
    options: [
      "Una solución que ignora la incidencia",
      "Solución que reduce o elimina el impacto de una incidencia o problema, para la cual aún no está disponible una solución definitiva. Es una buena práctica",
      "Una práctica desaconsejada en ITIL",
      "Una solución solo aplicable al desarrollo"
    ],
    correct: 1,
    explanation: "Solución temporal (workaround): solución que reduce o elimina el impacto de una incidencia o problema, para la cual aún no está disponible una solución definitiva. Es una buena práctica.",
    ref: "Tema 9, slide 33"
  },

  // GESTIÓN DE ENTREGAS / RELEASE
  {
    topic: 9,
    q: "¿Qué es una \"release\" o entrega?",
    options: [
      "Una incidencia mayor",
      "Una versión de un servicio, un CI, o un grupo de CIs, que se disponen para su uso",
      "Una nueva contratación",
      "Una petición de servicio"
    ],
    correct: 1,
    explanation: "Release (entrega): una versión de un servicio, un CI, o un grupo de CIs, que se disponen para su uso. Puede incluir componentes técnicos, formación y documentación.",
    ref: "Tema 9, slide 34"
  },
  {
    topic: 9,
    q: "¿Cuál es el propósito de la Gestión de Entregas (Release Mngt.)?",
    options: [
      "Atender llamadas de soporte",
      "Hacer que los nuevos servicios y modificaciones a servicios existentes estén disponibles para su uso",
      "Calcular costes operativos",
      "Negociar contratos con proveedores"
    ],
    correct: 1,
    explanation: "Gestión de Entregas: hace que los nuevos servicios, y las modificaciones a servicios existentes, estén disponibles para su uso.",
    ref: "Tema 9, slide 34"
  },

  // CATÁLOGO DE SERVICIOS
  {
    topic: 9,
    q: "¿Cuál es el propósito de la gestión del catálogo de servicios?",
    options: [
      "Proveer un único punto de información consistente de todos los servicios que se ofrecen",
      "Auditar el coste de los servicios",
      "Negociar los ANS",
      "Resolver incidencias"
    ],
    correct: 0,
    explanation: "Gestión del catálogo de servicios: provee un único punto de información consistente de todos los servicios que se ofrecen. Proporciona una vista adecuada a cada tipo de audiencia.",
    ref: "Tema 9, slide 38"
  },
  {
    topic: 9,
    q: "El catálogo de servicios contiene:",
    options: [
      "Todos los servicios pasados, presentes y futuros",
      "Los servicios que están disponibles actualmente",
      "Sólo los servicios retirados",
      "Los servicios en diseño"
    ],
    correct: 1,
    explanation: "El catálogo de servicios son los servicios que están disponibles actualmente. Forma parte del Portfolio de Servicios (junto a Servicios Retirados y Servicios en Diseño/Transición).",
    ref: "Tema 9, slide 39"
  },
  {
    topic: 9,
    q: "¿Cuál NO es una vista personalizada típica del catálogo?",
    options: [
      "Vista de usuario (condiciones de uso, funcionalidades)",
      "Vista de cliente (ANS, rendimiento, información financiera)",
      "Vista para IT (detalles técnicos)",
      "Vista de la competencia"
    ],
    correct: 3,
    explanation: "Vistas personalizadas: Vistas de usuario, Vistas de cliente y Vistas para IT (o clientes IT). No existe una vista \"de la competencia\".",
    ref: "Tema 9, slide 40"
  },

  // GESTIÓN DE CONFIGURACIÓN
  {
    topic: 9,
    q: "¿Cuál es el propósito de la Gestión de Configuración?",
    options: [
      "Configurar las contraseñas de los usuarios",
      "Asegurar que la información sobre configuración es exacta y fiable, y disponible cuando hace falta",
      "Aprobar cambios",
      "Crear catálogos de servicios"
    ],
    correct: 1,
    explanation: "Gestión de Configuración: asegurar que la información sobre configuración es exacta y fiable, y que está disponible cuando hace falta. Incluye información sobre CIs y la relación entre ellos.",
    ref: "Tema 9, slide 43"
  },
  {
    topic: 9,
    q: "¿Qué tipos de elementos pueden ser CIs?",
    options: [
      "Sólo hardware",
      "Las personas, los documentos, los diagramas de arquitectura, etc. también son CIs",
      "Sólo software",
      "Sólo servidores"
    ],
    correct: 1,
    explanation: "Las personas, los documentos, los diagramas de arquitectura… también son CIs. Un CI es todo aquel ítem cuya información está controlada por esta práctica.",
    ref: "Tema 9, slide 43"
  },

  // CONTINUIDAD DEL SERVICIO
  {
    topic: 9,
    q: "¿Cuál es el propósito de la Gestión de la Continuidad del Servicio?",
    options: [
      "Asegurar la disponibilidad y rendimiento de un servicio a niveles suficientes en caso de desastre",
      "Resolver incidencias en tiempo real",
      "Calcular el coste por uso",
      "Definir la estrategia comercial"
    ],
    correct: 0,
    explanation: "Gestión de la Continuidad del Servicio: asegura la disponibilidad y rendimiento de un servicio a niveles suficientes en caso de desastre. Provee resiliencia organizacional.",
    ref: "Tema 9, slide 48"
  },
  {
    topic: 9,
    q: "¿Qué es el RTO?",
    options: [
      "Run-Time Operations",
      "Tiempo de recuperación objetivo: máximo tiempo en que un servicio o producto pueda estar sin operar",
      "Real Time Operations",
      "Recovery Test Output"
    ],
    correct: 1,
    explanation: "RTO (Recovery Time Objective): máximo tiempo en el que la interrupción del negocio impacta la organización; tiempo máximo en que un servicio o producto puede estar sin operar.",
    ref: "Tema 9, slide 50"
  },
  {
    topic: 9,
    q: "¿Qué es el RPO?",
    options: [
      "Reliable Production Output",
      "Punto objetivo de recuperación: estado de información que se debe recuperar para volver a operar",
      "Random Process Object",
      "Recovery Plan Owner"
    ],
    correct: 1,
    explanation: "RPO (Recovery Point Objective): estado de información que se debe recuperar, para que se pueda volver a operar sobre ella.",
    ref: "Tema 9, slide 50"
  },
  {
    topic: 9,
    q: "¿Qué es el BIA?",
    options: [
      "Business Intelligence Analysis",
      "Análisis de Impacto en el Negocio: identifica las Funciones Vitales del Negocio (VBFs) y sus requisitos en caso de desastre",
      "Backup Information Audit",
      "Best Internal Approach"
    ],
    correct: 1,
    explanation: "BIA (Business Impact Analysis): identifica las Funciones Vitales del Negocio (VBFs) y sus requisitos en caso de desastre, como tiempos y puntos de recuperación.",
    ref: "Tema 9, slide 51"
  },
  {
    topic: 9,
    q: "Según ITIL, ¿cuándo se activa la gestión de continuidad?",
    options: [
      "Ante cualquier incidencia",
      "Sobre eventos realmente significativos, más incluso que las \"incidencias mayores\" (desastres)",
      "Sólo en aniversarios anuales",
      "Cuando lo decide el sponsor"
    ],
    correct: 1,
    explanation: "Gestión de continuidad: se activa sobre eventos realmente significativos, más incluso que las \"incidencias mayores\". Incidencia < Incidencia mayor < Desastre.",
    ref: "Tema 9, slide 52"
  },

  // SERVICE DESK
  {
    topic: 9,
    q: "¿Cuál es el propósito del Service Desk?",
    options: [
      "Vender productos a los usuarios",
      "Capturar las demandas de resolución de incidencias y las peticiones de servicio; ser el punto de contacto único entre el proveedor y todos sus usuarios",
      "Auditar el rendimiento",
      "Aprobar cambios"
    ],
    correct: 1,
    explanation: "Service Desk: captura las demandas de resolución de incidencias y las peticiones de servicio. Debe ser el punto de contacto único entre un proveedor de servicio y todos sus usuarios.",
    ref: "Tema 9, slide 58"
  },
  {
    topic: 9,
    q: "El Service Desk puede ser:",
    options: [
      "Sólo presencial",
      "Local, centralizado o virtual",
      "Sólo telefónico",
      "Únicamente por correo electrónico"
    ],
    correct: 1,
    explanation: "El Service Desk puede ser local, centralizado o virtual. Se está introduciendo automatización y bots.",
    ref: "Tema 9, slide 59"
  },
  {
    topic: 9,
    q: "¿Qué diferencia hay entre multicanalidad y omnicanalidad?",
    options: [
      "Son sinónimos",
      "Multicanalidad: varios canales con trazabilidad. Omnicanalidad: el cliente \"se siente\" atendido igual por cualquier medio",
      "Multicanalidad es para clientes; omnicanalidad para usuarios",
      "Omnicanalidad sólo se aplica a redes sociales"
    ],
    correct: 1,
    explanation: "Multicanalidad: email, teléfono, formulario web, documento, redes sociales, con trazabilidad entre ellas. Omnicanalidad: el cliente o usuario \"se siente\" atendido igual por cualquiera de los medios.",
    ref: "Tema 9, slide 60"
  },

  // GESTIÓN DE NIVELES DE SERVICIO
  {
    topic: 9,
    q: "¿Cuál es el propósito de la Gestión de Niveles de Servicio?",
    options: [
      "Establecer objetivos de niveles de servicio basados en el negocio, y asegurar que la entrega se monitoriza y gestiona de acuerdo a esos niveles",
      "Aprobar cambios técnicos",
      "Gestionar la facturación",
      "Definir la estructura organizativa"
    ],
    correct: 0,
    explanation: "Gestión de Niveles de Servicio: se asegura de establecer objetivos de niveles de servicio basados en el negocio, y que la entrega del servicio se monitoriza y gestiona de acuerdo a esos niveles.",
    ref: "Tema 9, slide 62"
  },
  {
    topic: 9,
    q: "Un ANS (Acuerdo de Nivel de Servicio) es:",
    options: [
      "Un documento técnico de instalación",
      "Un acuerdo documentado entre un proveedor de servicio y un cliente que identifica los servicios requeridos y los niveles esperados",
      "El catálogo de servicios",
      "La política de seguridad"
    ],
    correct: 1,
    explanation: "Nivel de Servicio: acuerdo documentado entre un proveedor de servicio y un cliente, que identifica tanto los servicios requeridos como los niveles de servicio esperados.",
    ref: "Tema 9, slide 63"
  },
  {
    topic: 9,
    q: "¿Qué es el \"efecto sandía\" (watermelon effect)?",
    options: [
      "Cuando los servicios fallan en verano",
      "Cuando las métricas están bien en apariencia pero no representan el valor real entregado al cliente",
      "Cuando un servicio tiene picos de demanda",
      "Cuando el cliente y el usuario discrepan"
    ],
    correct: 1,
    explanation: "Efecto sandía: las métricas mal tomadas no representan el valor aportado. P.ej. un servicio disponible al 99,5% del tiempo, pero indisponible justo cuando el cliente tenía picos máximos de transacciones.",
    ref: "Tema 9, slide 65"
  },
  {
    topic: 9,
    q: "Al escribir un ANS, hay que:",
    options: [
      "Referirse a un servicio concreto, medir resultados (no trabajo operativo), expresar en términos sencillos de negocio",
      "Usar el máximo de jerga técnica",
      "Medir trabajo realizado, no resultados",
      "Aplicar el mismo ANS a todos los servicios"
    ],
    correct: 0,
    explanation: "Cómo escribir un ANS: referido a un servicio concreto, mide resultados (no trabajo operativo), supone un acuerdo medible, expresado en términos sencillos de negocio.",
    ref: "Tema 9, slide 64"
  },

  // GESTIÓN DE PETICIONES
  {
    topic: 9,
    q: "¿Qué es una petición de servicio?",
    options: [
      "Una incidencia menor",
      "Petición de un usuario o representante que inicia una acción de servicio acordada como parte de la entrega del servicio",
      "Una queja",
      "Una propuesta de cambio organizativo"
    ],
    correct: 1,
    explanation: "Petición (Service Request): petición de un usuario o representante de usuarios que inicia una acción de servicio acordada como parte de la entrega del servicio.",
    ref: "Tema 9, slide 68"
  },
  {
    topic: 9,
    q: "¿Cuál NO es un ejemplo válido de petición de servicio?",
    options: [
      "Solicitar un informe",
      "Solicitar la sustitución de un tóner",
      "Solicitar acceso a un recurso",
      "Reportar la caída del servicio (interrupción no planificada)"
    ],
    correct: 3,
    explanation: "Las peticiones son acciones acordadas y planificadas (informes, recursos, accesos, quejas/feedback). Reportar una interrupción es una incidencia, no una petición.",
    ref: "Tema 9, slide 12"
  },

  // VALIDACIÓN Y PRUEBA
  {
    topic: 9,
    q: "¿Cuál es el propósito de la Validación y Prueba del Servicio?",
    options: [
      "Asegurar que los servicios y productos cumplen con sus requisitos; registrar criterios de aceptación y verificar que se satisfacen",
      "Aprobar contratos",
      "Cambiar la estrategia",
      "Calcular el ROI"
    ],
    correct: 0,
    explanation: "Validación y prueba del servicio: asegura que los servicios y productos cumplen con sus requisitos. Registra los criterios de aceptación y comprueba que quedan satisfechos.",
    ref: "Tema 9, slide 71"
  },
  {
    topic: 9,
    q: "¿Cuál de las siguientes es una prueba funcional?",
    options: [
      "Prueba de rendimiento",
      "Prueba de seguridad",
      "Prueba de regresión",
      "Prueba de cumplimiento (compliance)"
    ],
    correct: 2,
    explanation: "Pruebas funcionales: unitarias, de sistema, de integración, de regresión, de aceptación. Las pruebas de rendimiento, seguridad y compliance son no funcionales (de garantía).",
    ref: "Tema 9, slide 73"
  },
  {
    topic: 9,
    q: "¿Cuál de las siguientes es una prueba no funcional (de garantía)?",
    options: [
      "Prueba unitaria",
      "Prueba de integración",
      "Prueba de rendimiento y capacidad",
      "Prueba de aceptación"
    ],
    correct: 2,
    explanation: "Pruebas no funcionales/de garantía: rendimiento y capacidad, seguridad, cumplimiento (compliance), operacionales.",
    ref: "Tema 9, slide 74"
  },

  // DISEÑO DEL SERVICIO
  {
    topic: 9,
    q: "¿Cuál es el propósito del Diseño del Servicio?",
    options: [
      "Asegurar que los productos y servicios son adecuados para su propósito (fit for purpose) y se pueden usar como se pretendía (fit for use)",
      "Eliminar servicios antiguos",
      "Aprobar cambios urgentes",
      "Calcular impuestos"
    ],
    correct: 0,
    explanation: "Diseño del servicio: asegura que los productos y servicios son adecuados para su propósito (fit for purpose) y se pueden usar como se pretendía (fit for use).",
    ref: "Tema 9, slide 53"
  },
  {
    topic: 9,
    q: "Al diseñar un servicio, hay que considerar:",
    options: [
      "Sólo aspectos técnicos",
      "Componentes técnicos, tecnología, comunicaciones, personas, información, suministros necesarios; CX y UX",
      "Sólo los costes financieros",
      "Únicamente los requisitos legales"
    ],
    correct: 1,
    explanation: "Diseño incluye componentes técnicos, tecnología, comunicaciones, personas, información, suministros necesarios. Al diseñar tener en cuenta métricas, CX (Customer Experience) y UX (User Experience).",
    ref: "Tema 9, slide 53"
  },
  {
    topic: 9,
    q: "¿Cuál de estas NO es una de las 17 prácticas de gestión de servicios?",
    options: [
      "Gestión de disponibilidad",
      "Gestión de cambios",
      "Gestión de incidencias",
      "Gestión financiera"
    ],
    correct: 3,
    explanation: "La gestión financiera es una práctica general de gestión (Tema 10), no una práctica de gestión de servicios. Las 17 prácticas de servicios incluyen disponibilidad, cambios, incidencias, problemas, etc.",
    ref: "Tema 9, slide 0"
  }
];
