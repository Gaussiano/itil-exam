// ITIL Foundation Exam App — main app
// Renders inside an Android device frame (412×892).

const VERSION = 'v1.1.0';

const { useState, useEffect, useRef, useMemo, useCallback } = React;

// ─── Design tokens ────────────────────────────────────────────────────────
const T = {
  bg: '#faf8f3',
  surface: '#ffffff',
  surfaceAlt: '#f4f1ea',
  border: '#e3dfd2',
  borderSubtle: '#ece8db',
  text: '#1a1a1a',
  text2: '#6b6b6b',
  text3: '#9a9a9a',
  accent: '#2a4a6b',          // deep blue
  accentLight: '#e8eef4',
  accentInk: '#1a3552',
  success: '#2d7d4a',
  successLight: '#e5f1e9',
  error: '#b54533',
  errorLight: '#f5e4e1',
  warn: '#a8722a',
  warnLight: '#f3ead9',
};

// ─── Helpers ──────────────────────────────────────────────────────────────
const fmtTime = (s) => {
  if (s < 0) s = 0;
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${String(m).padStart(2,'0')}:${String(r).padStart(2,'0')}`;
};

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickExamQuestions(allQs, topicIds, count) {
  const pool = allQs.filter(q => topicIds.includes(q.topic));
  return shuffle(pool).slice(0, count);
}

// ─── Reusable UI ──────────────────────────────────────────────────────────
function Btn({ children, onClick, variant = 'primary', disabled, full, style }) {
  const palette = {
    primary:   { bg: T.accent, color: '#fff', border: T.accent },
    secondary: { bg: T.surface, color: T.accent, border: T.accent },
    ghost:     { bg: 'transparent', color: T.text, border: T.border },
    success:   { bg: T.success, color: '#fff', border: T.success },
  }[variant];
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        background: palette.bg, color: palette.color,
        border: `1.5px solid ${palette.border}`,
        padding: '14px 20px',
        borderRadius: 14,
        font: '600 15px Manrope, sans-serif',
        letterSpacing: '0.005em',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.4 : 1,
        width: full ? '100%' : 'auto',
        transition: 'transform 0.08s ease, opacity 0.15s ease',
        ...style,
      }}
      onMouseDown={(e) => !disabled && (e.currentTarget.style.transform = 'scale(0.98)')}
      onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      {children}
    </button>
  );
}

function Pill({ children, color = T.text2, bg = T.surfaceAlt, style }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '4px 10px', borderRadius: 100, background: bg, color,
      font: '600 11px Manrope', textTransform: 'uppercase', letterSpacing: '0.06em',
      ...style,
    }}>{children}</span>
  );
}

function Progress({ value, max, color = T.accent }) {
  const pct = max ? (value / max) * 100 : 0;
  return (
    <div style={{
      width: '100%', height: 6, background: T.borderSubtle,
      borderRadius: 100, overflow: 'hidden',
    }}>
      <div style={{
        width: `${pct}%`, height: '100%', background: color,
        borderRadius: 100, transition: 'width 0.3s ease',
      }} />
    </div>
  );
}

// ─── Screens ──────────────────────────────────────────────────────────────

function HomeScreen({ mode, setMode, selectedTopics, setSelectedTopics, onStart, onOpenTopics }) {
  const totalQs = window.ALL_QUESTIONS.length;
  const availableQs = window.ALL_QUESTIONS.filter(q => selectedTopics.includes(q.topic)).length;
  const canStart = availableQs >= 1;

  return (
    <div style={{ padding: '22px 22px 30px', display: 'flex', flexDirection: 'column', gap: 22 }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ font: '700 11px Manrope', letterSpacing: '0.14em', color: T.text3, textTransform: 'uppercase' }}>
            ITIL® Foundation · v4
          </div>
          <div style={{ font: '600 11px Manrope', color: T.text3, letterSpacing: '0.05em' }}>{VERSION}</div>
        </div>
        <h1 style={{
          font: '800 30px/1.12 Manrope', margin: '8px 0 6px', letterSpacing: '-0.02em', color: T.text,
          textWrap: 'balance',
        }}>
          Practica tu<br />examen oficial
        </h1>
        <p style={{ font: '500 14px/1.5 Manrope', color: T.text2, margin: 0 }}>
          40 preguntas · 60 minutos · 65% para aprobar.
        </p>
      </div>

      <div>
        <div style={{ font: '700 11px Manrope', letterSpacing: '0.1em', color: T.text3, marginBottom: 10, textTransform: 'uppercase' }}>
          Modo de práctica
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <ModeCard
            active={mode === 'study'}
            onClick={() => setMode('study')}
            label="Estudio"
            description="Te muestro la respuesta correcta y la explicación tras cada pregunta."
            icon="📖"
          />
          <ModeCard
            active={mode === 'exam'}
            onClick={() => setMode('exam')}
            label="Examen"
            description="60:00 en marcha. Resultados solo al final, igual que en el examen real."
            icon="⏱️"
          />
        </div>
      </div>

      <button
        onClick={onOpenTopics}
        style={{
          background: T.surface, border: `1.5px solid ${T.border}`,
          padding: '14px 16px', borderRadius: 14, textAlign: 'left',
          cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 12,
        }}>
        <div style={{
          width: 38, height: 38, borderRadius: 10, background: T.accentLight,
          color: T.accent, display: 'grid', placeItems: 'center',
          font: '700 16px Manrope',
        }}>{selectedTopics.length}</div>
        <div style={{ flex: 1 }}>
          <div style={{ font: '600 14px Manrope', color: T.text }}>
            Temas seleccionados
          </div>
          <div style={{ font: '500 12px Manrope', color: T.text2, marginTop: 2 }}>
            {availableQs} preguntas disponibles · de {totalQs}
          </div>
        </div>
        <div style={{ color: T.text3, font: '600 18px Manrope' }}>›</div>
      </button>

      <Btn full onClick={onStart} disabled={!canStart}>
        Comenzar {mode === 'exam' ? 'examen' : 'práctica'} →
      </Btn>

      <div style={{
        background: T.surfaceAlt, border: `1px solid ${T.borderSubtle}`,
        borderRadius: 14, padding: '14px 16px',
        font: '500 12px/1.55 Manrope', color: T.text2,
      }}>
        <div style={{ font: '700 11px Manrope', color: T.text, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>
          Recordatorio
        </div>
        En el examen real no se puede volver atrás. En esta app tampoco — avanza con seguridad en cada respuesta.
      </div>
    </div>
  );
}

function ModeCard({ active, onClick, label, description, icon }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: active ? T.accentLight : T.surface,
        border: `1.5px solid ${active ? T.accent : T.border}`,
        borderRadius: 16,
        padding: '16px 16px',
        textAlign: 'left', cursor: 'pointer',
        display: 'flex', gap: 14, alignItems: 'flex-start',
        transition: 'all 0.15s ease',
      }}
    >
      <div style={{
        width: 42, height: 42, borderRadius: 12,
        background: active ? T.accent : T.surfaceAlt,
        color: active ? '#fff' : T.text,
        display: 'grid', placeItems: 'center', font: '600 22px Manrope', flexShrink: 0,
      }}>{icon}</div>
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ font: '700 16px Manrope', color: T.text }}>Modo {label}</div>
          {active && <Pill color={T.accent} bg="rgba(42,74,107,0.12)">Activo</Pill>}
        </div>
        <div style={{ font: '500 13px/1.45 Manrope', color: T.text2, marginTop: 4 }}>
          {description}
        </div>
      </div>
    </button>
  );
}

function TopicsScreen({ selectedTopics, setSelectedTopics, onBack }) {
  const topics = window.TOPICS;
  const counts = window.TOPIC_COUNTS;
  const allSelected = selectedTopics.length === topics.length;

  const toggle = (id) => {
    setSelectedTopics(prev =>
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    );
  };
  const toggleAll = () => {
    setSelectedTopics(allSelected ? [] : topics.map(t => t.id));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{
        padding: '18px 22px 14px',
        borderBottom: `1px solid ${T.borderSubtle}`,
        background: T.bg,
        position: 'sticky', top: 0, zIndex: 2,
      }}>
        <button onClick={onBack} style={{
          background: 'none', border: 'none', color: T.text2,
          font: '600 14px Manrope', cursor: 'pointer', padding: 0,
          display: 'flex', alignItems: 'center', gap: 6,
        }}>← Volver</button>
        <h2 style={{ font: '800 22px Manrope', margin: '10px 0 4px', letterSpacing: '-0.015em' }}>
          Elige los temas
        </h2>
        <p style={{ font: '500 13px Manrope', color: T.text2, margin: 0 }}>
          Las preguntas del examen se sortearán solo entre los temas seleccionados.
        </p>
      </div>

      <div style={{ padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
        <button onClick={toggleAll} style={{
          background: T.surface, border: `1.5px solid ${T.border}`,
          borderRadius: 12, padding: '12px 14px', cursor: 'pointer',
          font: '600 13px Manrope', color: T.accent, textAlign: 'left',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <span>{allSelected ? 'Quitar todos' : 'Seleccionar todos'}</span>
          <span style={{ color: T.text3 }}>{selectedTopics.length}/{topics.length}</span>
        </button>

        {topics.map(topic => {
          const checked = selectedTopics.includes(topic.id);
          return (
            <button
              key={topic.id}
              onClick={() => toggle(topic.id)}
              style={{
                background: checked ? T.accentLight : T.surface,
                border: `1.5px solid ${checked ? T.accent : T.border}`,
                borderRadius: 14, padding: '14px 14px',
                textAlign: 'left', cursor: 'pointer',
                display: 'flex', gap: 12, alignItems: 'flex-start',
              }}
            >
              <Checkbox checked={checked} />
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                  <span style={{ font: '700 11px Manrope', color: T.text3, letterSpacing: '0.06em' }}>
                    TEMA {topic.id}
                  </span>
                  <span style={{ font: '600 11px Manrope', color: T.text3 }}>·</span>
                  <span style={{ font: '600 11px Manrope', color: T.text3 }}>
                    {counts[topic.id]} preguntas
                  </span>
                </div>
                <div style={{ font: '700 15px Manrope', color: T.text, marginTop: 2 }}>
                  {topic.name}
                </div>
                <div style={{ font: '500 12px/1.45 Manrope', color: T.text2, marginTop: 3 }}>
                  {topic.short}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div style={{
        padding: '14px 22px 22px',
        borderTop: `1px solid ${T.borderSubtle}`,
        background: T.bg,
      }}>
        <Btn full onClick={onBack} disabled={selectedTopics.length === 0}>
          {selectedTopics.length === 0 ? 'Selecciona al menos un tema' : 'Listo'}
        </Btn>
      </div>
    </div>
  );
}

function Checkbox({ checked }) {
  return (
    <div style={{
      width: 22, height: 22, borderRadius: 6,
      border: `1.5px solid ${checked ? T.accent : T.border}`,
      background: checked ? T.accent : T.surface,
      display: 'grid', placeItems: 'center', flexShrink: 0,
      marginTop: 2,
    }}>
      {checked && (
        <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
          <path d="M3 7.2 5.8 10 11 4.2" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </div>
  );
}

// ─── Exam screen ──────────────────────────────────────────────────────────
function ExamScreen({ mode, questions, onFinish, onAbort }) {
  const total = questions.length;
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [answers, setAnswers] = useState([]); // [{questionId, selected, correct, topic}]
  const [timeLeft, setTimeLeft] = useState(60 * 60);

  const q = questions[idx];
  const topic = window.TOPICS.find(t => t.id === q.topic);

  // Timer for exam mode
  useEffect(() => {
    if (mode !== 'exam') return;
    const i = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) { clearInterval(i); return 0; }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(i);
  }, [mode]);

  // Auto-finish when timer hits 0
  useEffect(() => {
    if (mode === 'exam' && timeLeft === 0) {
      const padded = [...answers];
      // Add empty answers for remaining
      for (let i = answers.length; i < total; i++) {
        padded.push({ questionId: questions[i].id, selected: null, correct: false, topic: questions[i].topic });
      }
      onFinish(padded, 60 * 60);
    }
  }, [timeLeft]);

  const pick = (optIdx) => {
    if (selected !== null) return;
    setSelected(optIdx);
    const correct = optIdx === q.correct;
    const entry = { questionId: q.id, selected: optIdx, correct, topic: q.topic };

    if (mode === 'study') {
      // Show feedback, keep on screen until Continue
      setRevealed(true);
      setAnswers(a => [...a, entry]);
    } else {
      // Exam mode: a quick visual confirmation, then auto-advance
      setAnswers(a => [...a, entry]);
      setTimeout(() => goNext([...answers, entry]), 280);
    }
  };

  const goNext = (currentAnswers) => {
    const list = currentAnswers || answers;
    if (idx + 1 >= total) {
      onFinish(list, mode === 'exam' ? (60*60 - timeLeft) : null);
    } else {
      setIdx(i => i + 1);
      setSelected(null);
      setRevealed(false);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Header */}
      <div style={{ padding: '14px 22px 12px', background: T.bg, borderBottom: `1px solid ${T.borderSubtle}` }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
          <button onClick={onAbort} style={{
            background: 'none', border: 'none', padding: 0,
            font: '600 12px Manrope', color: T.text2, cursor: 'pointer',
          }}>✕ Salir</button>
          <div style={{ font: '700 13px Manrope', color: T.text, letterSpacing: '0.02em' }}>
            <span style={{ color: T.accent }}>{idx + 1}</span>
            <span style={{ color: T.text3 }}> / {total}</span>
          </div>
          {mode === 'exam' ? (
            <div style={{
              font: '700 13px JetBrains Mono, monospace',
              color: timeLeft < 5*60 ? T.error : T.text,
              background: timeLeft < 5*60 ? T.errorLight : T.surfaceAlt,
              padding: '4px 10px', borderRadius: 8,
            }}>{fmtTime(timeLeft)}</div>
          ) : (
            <Pill color={T.accent} bg={T.accentLight}>Estudio</Pill>
          )}
        </div>
        <Progress value={idx + (revealed ? 1 : 0)} max={total} />
      </div>

      {/* Question content */}
      <div style={{ flex: 1, padding: '18px 22px 16px', display: 'flex', flexDirection: 'column', gap: 14, overflow: 'auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Pill bg={T.surfaceAlt} color={T.text2}>Tema {topic.id}</Pill>
          <span style={{ font: '600 12px Manrope', color: T.text3 }}>{topic.name}</span>
        </div>
        <div style={{
          font: '700 18px/1.4 Manrope', color: T.text,
          textWrap: 'pretty', letterSpacing: '-0.005em',
        }}>{q.q}</div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 4 }}>
          {q.options.map((opt, i) => (
            <OptionRow
              key={i}
              letter={String.fromCharCode(65 + i)}
              label={opt}
              selected={selected === i}
              correct={revealed && i === q.correct}
              wrong={revealed && selected === i && i !== q.correct}
              dim={revealed && i !== q.correct && i !== selected}
              onClick={() => pick(i)}
              disabled={selected !== null}
            />
          ))}
        </div>

        {revealed && (
          <div style={{
            background: selected === q.correct ? T.successLight : T.errorLight,
            border: `1px solid ${selected === q.correct ? T.success : T.error}33`,
            borderRadius: 14, padding: '14px 16px', marginTop: 6,
          }}>
            <div style={{
              font: '700 11px Manrope', textTransform: 'uppercase', letterSpacing: '0.08em',
              color: selected === q.correct ? T.success : T.error, marginBottom: 6,
            }}>
              {selected === q.correct ? '✓ Correcto' : '✗ Incorrecto'}
            </div>
            <div style={{ font: '500 13.5px/1.55 Manrope', color: T.text }}>
              {q.explanation}
            </div>
            {q.ref && (
              <div style={{ font: '600 11px Manrope', color: selected === q.correct ? T.success : T.error, marginTop: 8, opacity: 0.75 }}>
                📖 {q.ref}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      {mode === 'study' && (
        <div style={{
          padding: '14px 22px 18px',
          background: T.bg, borderTop: `1px solid ${T.borderSubtle}`,
        }}>
          {revealed ? (
            <Btn full onClick={() => goNext()}>
              {idx + 1 === total ? 'Ver resultados' : 'Siguiente pregunta →'}
            </Btn>
          ) : (
            <div style={{
              font: '500 12px Manrope', color: T.text3, textAlign: 'center',
            }}>
              Selecciona una respuesta para ver la explicación
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function OptionRow({ letter, label, selected, correct, wrong, dim, onClick, disabled }) {
  let bg = T.surface;
  let border = T.border;
  let textColor = T.text;
  let badgeBg = T.surfaceAlt;
  let badgeColor = T.text2;
  if (correct) {
    bg = T.successLight; border = T.success; badgeBg = T.success; badgeColor = '#fff';
  } else if (wrong) {
    bg = T.errorLight; border = T.error; badgeBg = T.error; badgeColor = '#fff';
  } else if (selected && !disabled) {
    border = T.accent; bg = T.accentLight; badgeBg = T.accent; badgeColor = '#fff';
  } else if (selected) {
    border = T.accent; badgeBg = T.accent; badgeColor = '#fff';
  }
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        background: bg, border: `1.5px solid ${border}`,
        borderRadius: 14, padding: '12px 14px',
        textAlign: 'left', cursor: disabled ? 'default' : 'pointer',
        display: 'flex', gap: 12, alignItems: 'flex-start',
        opacity: dim ? 0.55 : 1,
        transition: 'all 0.15s ease',
      }}
    >
      <div style={{
        width: 28, height: 28, borderRadius: 8, flexShrink: 0,
        background: badgeBg, color: badgeColor,
        display: 'grid', placeItems: 'center',
        font: '700 13px Manrope',
      }}>{letter}</div>
      <div style={{
        flex: 1, font: '500 14px/1.4 Manrope', color: textColor,
        textWrap: 'pretty', paddingTop: 5,
      }}>{label}</div>
    </button>
  );
}

// ─── Results screen ───────────────────────────────────────────────────────
function ResultsScreen({ questions, answers, mode, timeUsed, onRestart, onHome }) {
  const total = questions.length;
  const correct = answers.filter(a => a.correct).length;
  const pct = Math.round((correct / total) * 100);
  const passed = pct >= 65;

  // Per-topic stats
  const topicStats = useMemo(() => {
    const map = {};
    questions.forEach((q, i) => {
      if (!map[q.topic]) map[q.topic] = { topic: q.topic, total: 0, correct: 0 };
      map[q.topic].total++;
      if (answers[i] && answers[i].correct) map[q.topic].correct++;
    });
    return Object.values(map).sort((a, b) => a.topic - b.topic);
  }, [questions, answers]);

  const [expandedQ, setExpandedQ] = useState(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ padding: '18px 22px 14px', background: T.bg, borderBottom: `1px solid ${T.borderSubtle}` }}>
        <div style={{ font: '700 11px Manrope', textTransform: 'uppercase', letterSpacing: '0.1em', color: T.text3 }}>
          Resultado del examen
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginTop: 6 }}>
          <div style={{ font: '800 44px Manrope', color: passed ? T.success : T.error, letterSpacing: '-0.03em' }}>
            {pct}%
          </div>
          <Pill
            color={passed ? T.success : T.error}
            bg={passed ? T.successLight : T.errorLight}
          >
            {passed ? '✓ Aprobado' : '✗ No aprobado'}
          </Pill>
        </div>
        <div style={{ font: '500 13px Manrope', color: T.text2, marginTop: 4 }}>
          {correct} de {total} correctas
          {timeUsed != null && ` · Tiempo usado: ${fmtTime(timeUsed)}`}
          {' · '}Aprobado a partir de 65%
        </div>
      </div>

      <div style={{ flex: 1, overflow: 'auto', padding: '14px 22px 16px', display: 'flex', flexDirection: 'column', gap: 14 }}>
        {/* Per-topic stats */}
        <div>
          <div style={{ font: '700 11px Manrope', textTransform: 'uppercase', letterSpacing: '0.08em', color: T.text3, marginBottom: 8 }}>
            Por tema
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {topicStats.map(s => {
              const t = window.TOPICS.find(x => x.id === s.topic);
              const tPct = Math.round((s.correct / s.total) * 100);
              return (
                <div key={s.topic} style={{
                  background: T.surface, border: `1px solid ${T.borderSubtle}`,
                  borderRadius: 12, padding: '10px 12px',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                    <div style={{ font: '600 13px Manrope', color: T.text }}>
                      {t.name}
                    </div>
                    <div style={{ font: '700 12px Manrope', color: tPct >= 65 ? T.success : T.error }}>
                      {s.correct}/{s.total}
                    </div>
                  </div>
                  <Progress value={s.correct} max={s.total} color={tPct >= 65 ? T.success : T.error} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Question review */}
        <div>
          <div style={{ font: '700 11px Manrope', textTransform: 'uppercase', letterSpacing: '0.08em', color: T.text3, marginBottom: 8 }}>
            Revisión pregunta a pregunta
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {questions.map((q, i) => {
              const a = answers[i];
              const isCorrect = a && a.correct;
              const exp = expandedQ === i;
              return (
                <div key={q.id} style={{
                  background: T.surface, border: `1px solid ${T.borderSubtle}`,
                  borderRadius: 12, overflow: 'hidden',
                }}>
                  <button onClick={() => setExpandedQ(exp ? null : i)} style={{
                    background: 'none', border: 'none', width: '100%',
                    padding: '12px 14px', textAlign: 'left', cursor: 'pointer',
                    display: 'flex', alignItems: 'flex-start', gap: 10,
                  }}>
                    <div style={{
                      width: 24, height: 24, borderRadius: 6, flexShrink: 0,
                      background: isCorrect ? T.success : (a && a.selected !== null ? T.error : T.text3),
                      color: '#fff', display: 'grid', placeItems: 'center',
                      font: '700 11px Manrope', marginTop: 2,
                    }}>
                      {isCorrect ? '✓' : (a && a.selected !== null ? '✗' : '−')}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ font: '600 12px Manrope', color: T.text3, marginBottom: 3 }}>
                        Pregunta {i + 1} · Tema {q.topic}
                      </div>
                      <div style={{ font: '600 13.5px/1.4 Manrope', color: T.text }}>
                        {q.q}
                      </div>
                    </div>
                    <div style={{
                      color: T.text3, font: '600 18px Manrope',
                      transform: exp ? 'rotate(90deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease',
                      marginTop: 2,
                    }}>›</div>
                  </button>
                  {exp && (
                    <div style={{ padding: '0 14px 14px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {q.options.map((opt, oi) => {
                        const isAnswer = oi === q.correct;
                        const wasPicked = a && a.selected === oi;
                        return (
                          <div key={oi} style={{
                            padding: '8px 10px', borderRadius: 8,
                            background: isAnswer ? T.successLight : (wasPicked ? T.errorLight : T.surfaceAlt),
                            border: `1px solid ${isAnswer ? T.success+'66' : (wasPicked ? T.error+'66' : T.borderSubtle)}`,
                            font: '500 12.5px/1.4 Manrope', color: T.text,
                            display: 'flex', gap: 8, alignItems: 'flex-start',
                          }}>
                            <span style={{
                              font: '700 11px Manrope',
                              color: isAnswer ? T.success : (wasPicked ? T.error : T.text3),
                              minWidth: 16,
                            }}>{String.fromCharCode(65+oi)}.</span>
                            <span>{opt}</span>
                            {isAnswer && <span style={{ marginLeft: 'auto', font: '700 10px Manrope', color: T.success, textTransform: 'uppercase', letterSpacing: '0.06em', whiteSpace: 'nowrap' }}>Correcta</span>}
                            {wasPicked && !isAnswer && <span style={{ marginLeft: 'auto', font: '700 10px Manrope', color: T.error, textTransform: 'uppercase', letterSpacing: '0.06em', whiteSpace: 'nowrap' }}>Tu resp.</span>}
                          </div>
                        );
                      })}
                      <div style={{
                        background: T.accentLight, borderRadius: 8, padding: '10px 12px',
                        border: `1px solid ${T.accent}22`,
                        font: '500 12.5px/1.55 Manrope', color: T.accentInk,
                      }}>
                        <strong style={{ font: '700 10.5px Manrope', textTransform: 'uppercase', letterSpacing: '0.08em', color: T.accent, display: 'block', marginBottom: 3 }}>
                          Explicación
                        </strong>
                        {q.explanation}
                        {q.ref && (
                          <div style={{ font: '600 11px Manrope', color: T.accent, marginTop: 6, opacity: 0.7 }}>
                            📖 {q.ref}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div style={{
        padding: '14px 22px 18px',
        background: T.bg, borderTop: `1px solid ${T.borderSubtle}`,
        display: 'flex', gap: 10,
      }}>
        <Btn variant="ghost" onClick={onHome} style={{ flex: 1 }}>Inicio</Btn>
        <Btn variant="primary" onClick={onRestart} style={{ flex: 1 }}>Nuevo examen</Btn>
      </div>
    </div>
  );
}

// ─── App shell ────────────────────────────────────────────────────────────
function App() {
  const [screen, setScreen] = useState('home'); // home | topics | exam | results
  const [mode, setMode] = useState('study');
  const [selectedTopics, setSelectedTopics] = useState(window.TOPICS.map(t => t.id));
  const [examQuestions, setExamQuestions] = useState([]);
  const [examAnswers, setExamAnswers] = useState([]);
  const [timeUsed, setTimeUsed] = useState(null);

  // Number of questions per exam (default 40 — configurable later via tweaks)
  const [examSize, setExamSize] = useState(40);

  const startExam = () => {
    const pool = window.ALL_QUESTIONS.filter(q => selectedTopics.includes(q.topic));
    const n = Math.min(examSize, pool.length);
    const qs = shuffle(pool).slice(0, n);
    setExamQuestions(qs);
    setExamAnswers([]);
    setTimeUsed(null);
    setScreen('exam');
  };

  const finishExam = (answers, used) => {
    setExamAnswers(answers);
    setTimeUsed(used);
    setScreen('results');
  };

  const abortExam = () => {
    if (confirm('¿Salir del examen? Se perderá el progreso de esta sesión.')) {
      setScreen('home');
    }
  };

  let content;
  if (screen === 'home') {
    content = (
      <HomeScreen
        mode={mode}
        setMode={setMode}
        selectedTopics={selectedTopics}
        setSelectedTopics={setSelectedTopics}
        onStart={startExam}
        onOpenTopics={() => setScreen('topics')}
      />
    );
  } else if (screen === 'topics') {
    content = (
      <TopicsScreen
        selectedTopics={selectedTopics}
        setSelectedTopics={setSelectedTopics}
        onBack={() => setScreen('home')}
      />
    );
  } else if (screen === 'exam') {
    content = (
      <ExamScreen
        mode={mode}
        questions={examQuestions}
        onFinish={finishExam}
        onAbort={abortExam}
      />
    );
  } else if (screen === 'results') {
    content = (
      <ResultsScreen
        questions={examQuestions}
        answers={examAnswers}
        mode={mode}
        timeUsed={timeUsed}
        onRestart={() => setScreen('home')}
        onHome={() => setScreen('home')}
      />
    );
  }

  // On mobile, fill the screen directly without the device frame mockup
  if (window.innerWidth <= 500) {
    return (
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: T.bg }}>
        {content}
      </div>
    );
  }

  // Wrap content in Android device frame (desktop design view)
  return (
    <div className="stage">
      <div data-screen-label={`App · ${screen}`} className="app-root">
        <AndroidDevice width={412} height={892}>
          <div style={{ height: '100%', background: T.bg }}>
            {content}
          </div>
        </AndroidDevice>
      </div>
      <div className="annotation">
        <h4>App de práctica · ITIL Foundation v4</h4>
        <p style={{ margin: 0 }}>
          <strong>Modo Estudio:</strong> feedback inmediato con explicación por pregunta.<br /><br />
          <strong>Modo Examen:</strong> cronómetro 60:00 y resultados solo al final, con revisión completa.<br /><br />
          Banco actual: <strong>{window.ALL_QUESTIONS.length}</strong> preguntas distribuidas entre <strong>{window.TOPICS.length}</strong> temas.
        </p>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
