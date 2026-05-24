// Combine all question banks and provide topic metadata.
(function() {
  const all = [].concat(
    window.QUESTIONS_T2_T3 || [],
    window.QUESTIONS_T4 || [],
    window.QUESTIONS_T5_T8 || [],
    window.QUESTIONS_T9 || [],
    window.QUESTIONS_T10 || []
  );
  // Assign deterministic ids
  all.forEach((q, i) => { q.id = i + 1; });
  window.ALL_QUESTIONS = all;

  window.TOPICS = [
    { id: 2,  name: 'Conceptos clave',                short: 'Conceptos clave de la gestión del servicio' },
    { id: 3,  name: 'Sistema de Valor del Servicio',  short: 'SVS · oportunidad, demanda, valor, gobierno' },
    { id: 4,  name: 'Principios rectores',            short: 'Los 7 principios rectores de ITIL' },
    { id: 5,  name: 'Agile ITSM',                     short: 'Métricas, técnicas y prácticas ágiles' },
    { id: 6,  name: 'Cadena de valor',                short: 'Actividades de la cadena de valor del servicio' },
    { id: 7,  name: 'Las 4 dimensiones',              short: 'Personas, tecnología, partners, procesos' },
    { id: 8,  name: 'Gestión técnica',                short: 'Despliegues, infraestructura, software' },
    { id: 9,  name: 'Gestión de servicios',           short: '17 prácticas: incidencias, cambios, niveles…' },
    { id: 10, name: 'Gestión general',                short: '14 prácticas: riesgos, financiera, talento…' },
  ];

  // Count per topic
  window.TOPIC_COUNTS = {};
  window.TOPICS.forEach(t => {
    window.TOPIC_COUNTS[t.id] = all.filter(q => q.topic === t.id).length;
  });
})();
