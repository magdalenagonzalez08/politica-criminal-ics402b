/* =========================================================
   Política Criminal · ICS-402B
   Router por hash, prácticas, simulacros y progreso local.
   Sin dependencias externas.
   ========================================================= */

(function () {
  "use strict";

  const P2_LECTURA = ["concepto", "roxin", "origenes", "estado-derecho", "cuatro-d", "prevencion"];
  const P2_DECKS = ["p2-concepto", "p2-capitulo1", "p2-estado", "p2-cuatro-d", "p2-prevencion"];

  function firstById(list, ids) {
    return list.slice().sort((a, b) => {
      const ia = ids.indexOf(a.id);
      const ib = ids.indexOf(b.id);
      if (ia === -1 && ib === -1) return 0;
      if (ia === -1) return 1;
      if (ib === -1) return -1;
      return ia - ib;
    });
  }

  let QUIZZES = (window.QUIZZES || []).slice().sort((a, b) => Number(!!b.p2) - Number(!!a.p2));
  const VF = window.VF || [];
  let MC = window.MC || [];
  let PARCIALES = (window.PARCIALES || []).slice().sort((a, b) => Number(!!b.p2) - Number(!!a.p2));
  const FUENTES = window.FUENTES || [];
  const LECTURA = firstById(window.LECTURA || [], P2_LECTURA);
  const FLASHCARDS = firstById(window.FLASHCARDS || [], P2_DECKS);
  const PARCIAL2 = window.PARCIAL2 || null;

  /* Mezcla determinista de opciones: evita que la respuesta correcta
     caiga siempre en la misma letra. La posición se conserva entre
     visitas para que la revisión coincida con lo que se respondió. */
  function hashSeed(str) {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }

  function rng(seed) {
    let a = seed;
    return function () {
      a |= 0;
      a = (a + 0x6d2b79f5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function mixOptions(list, seed) {
    const random = rng(seed);
    let bag = [];
    return list.map((q) => {
      if (!Array.isArray(q.o) || q.o.length !== 4) return q;
      if (!bag.length) {
        bag = [0, 1, 2, 3];
        for (let i = bag.length - 1; i > 0; i--) {
          const j = Math.floor(random() * (i + 1));
          const tmp = bag[i];
          bag[i] = bag[j];
          bag[j] = tmp;
        }
      }
      const target = bag.pop();
      const correct = q.o[q.c];
      const others = q.o.filter((_, i) => i !== q.c);
      const out = new Array(4);
      out[target] = correct;
      let k = 0;
      for (let i = 0; i < 4; i++) {
        if (i !== target) out[i] = others[k++];
      }
      return Object.assign({}, q, { o: out, c: target });
    });
  }

  QUIZZES = QUIZZES.map((q) => Object.assign({}, q, { preguntas: mixOptions(q.preguntas, hashSeed(q.id)) }));
  MC = mixOptions(MC, hashSeed("seleccion"));
  PARCIALES = PARCIALES.map((p) =>
    Object.assign({}, p, { preguntas: mixOptions(p.preguntas, hashSeed(p.id)) })
  );

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const content = $("#contenido");
  const KEY = "pc_ics402b_v1";

  let cleanup = null;

  /* ---------------- utilidades ---------------- */

  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const fmt = (s) =>
    esc(s)
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>");

  const pctOf = (n, total) => (total ? Math.round((n / total) * 100) : 0);

  const icon = (name, cls = "") =>
    `<svg class="${cls}" aria-hidden="true"><use href="#i-${name}"></use></svg>`;

  const letters = ["A", "B", "C", "D", "E"];

  const fmtDate = (ts) => {
    if (!ts) return "";
    try {
      return new Date(ts).toLocaleDateString("es-PA", { day: "2-digit", month: "short" });
    } catch (_) {
      return "";
    }
  };

  /* ---------------- estado ---------------- */

  const DEFAULT_STATE = {
    theme: "",
    quizzes: {},
    vf: null,
    mc: null,
    parciales: {},
    lectura: {},
    flash: { starred: [], best: {} },
    lecturaSize: 17
  };
  let memoryState = null;

  function loadState() {
    let raw = null;
    try {
      raw = localStorage.getItem(KEY);
    } catch (_) {
      raw = memoryState;
    }
    if (!raw) return JSON.parse(JSON.stringify(DEFAULT_STATE));
    try {
      const parsed = JSON.parse(raw);
      const merged = Object.assign(JSON.parse(JSON.stringify(DEFAULT_STATE)), parsed);
      if (!merged.lectura || typeof merged.lectura !== "object") merged.lectura = {};
      if (!merged.flash || typeof merged.flash !== "object") merged.flash = { starred: [], best: {} };
      if (!Array.isArray(merged.flash.starred)) merged.flash.starred = [];
      if (!merged.flash.best || typeof merged.flash.best !== "object") merged.flash.best = {};
      if (!merged.lecturaSize) merged.lecturaSize = 17;
      return merged;
    } catch (_) {
      return JSON.parse(JSON.stringify(DEFAULT_STATE));
    }
  }

  let S = loadState();

  function save() {
    try {
      localStorage.setItem(KEY, JSON.stringify(S));
    } catch (_) {
      memoryState = JSON.stringify(S);
    }
    updateChrome();
  }

  /* ---------------- tema ---------------- */

  function setTheme(theme, persist) {
    const valid = ["claro", "oscuro", "ambar"].includes(theme) ? theme : "claro";
    document.documentElement.setAttribute("data-theme", valid);
    if (persist !== false) {
      S.theme = valid;
      save();
    }
    $$("[data-theme-set]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.themeSet === valid)));
    const quick = $("#quickThemeIcon use");
    if (quick) quick.setAttribute("href", valid === "claro" ? "#i-moon" : valid === "oscuro" ? "#i-amber" : "#i-sun");
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", valid === "claro" ? "#f6f2ec" : valid === "oscuro" ? "#0c1411" : "#161009");
  }

  function initTheme() {
    let saved = S.theme;
    if (!saved) {
      const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      saved = prefersDark ? "oscuro" : "claro";
    }
    setTheme(saved, false);
  }

  /* ---------------- progreso ---------------- */

  function quizDone(id) {
    return !!S.quizzes[id];
  }

  function parcialDone(id) {
    return !!S.parciales[id];
  }

  function stats() {
    const qDone = QUIZZES.filter((q) => quizDone(q.id)).length;
    const pDone = PARCIALES.filter((p) => parcialDone(p.id)).length;
    const vfBest = S.vf ? S.vf.best : 0;
    const mcBest = S.mc ? S.mc.best : 0;
    const read = LECTURA.filter((c) => S.lectura[c.id]).length;
    const flashTotal = FLASHCARDS.reduce((a, d) => a + d.cards.length, 0);
    const flashLearned = FLASHCARDS.reduce(
      (a, d) => a + Math.min(d.cards.length, (S.flash.best && S.flash.best[d.id]) || 0),
      0
    );
    const overall = Math.round(
      (qDone / (QUIZZES.length || 1)) * 40 +
        (vfBest / (VF.length || 1)) * 15 +
        (mcBest / (MC.length || 1)) * 15 +
        (pDone / (PARCIALES.length || 1)) * 30
    );
    return { qDone, pDone, vfBest, mcBest, read, flashTotal, flashLearned, overall };
  }

  function updateChrome() {
    const st = stats();
    const sidePercent = $("#sidePercent");
    if (sidePercent) sidePercent.textContent = st.overall + "%";
    const sideBar = $("#sideBar");
    if (sideBar) sideBar.style.width = st.overall + "%";
    const mini = $("#miniRing");
    if (mini) mini.style.setProperty("--p", st.overall);
    const miniPct = $("#miniPercent");
    if (miniPct) miniPct.textContent = st.overall + "%";
    const bq = $("#badgeQuiz");
    if (bq) bq.textContent = st.qDone + "/" + QUIZZES.length;
    const bp = $("#badgeParcial");
    if (bp) bp.textContent = st.pDone + "/" + PARCIALES.length;
    const bl = $("#badgeLectura");
    if (bl) bl.textContent = st.read + "/" + LECTURA.length;
    const bf = $("#badgeFlash");
    if (bf) bf.textContent = st.flashLearned + "/" + st.flashTotal;
  }

  function applyLecturaSize() {
    const size = Math.min(20, Math.max(15, Number(S.lecturaSize) || 17));
    document.documentElement.style.setProperty("--lectura-size", size + "px");
    const label = $("#lecturaSizeLabel");
    if (label) label.textContent = size + " px";
  }

  /* ---------------- navegación ---------------- */

  const NAV_BY_ROUTE = {
    "": "inicio",
    parcial2: "parcial2",
    lectura: "lectura",
    flashcards: "flashcards",
    quizzes: "quizzes",
    verdadero: "vf",
    seleccion: "mc",
    parciales: "parciales",
    pronostico: "pronostico",
    progreso: "progreso",
    fuentes: "fuentes"
  };

  function setCrumb(text) {
    const c = $("#crumb");
    if (c) c.textContent = text;
    document.title = text + " · Política Criminal ICS-402B";
  }

  function setActiveNav(key) {
    $$("[data-nav]").forEach((a) => a.classList.toggle("active", a.dataset.nav === key));
  }

  function closeMenu() {
    $("#sidebar").classList.remove("open");
    $("#scrim").hidden = true;
    $("#menuBtn").setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  function openMenu() {
    $("#sidebar").classList.add("open");
    $("#scrim").hidden = false;
    $("#menuBtn").setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }

  /* ---------------- componentes ---------------- */

  function statCard(label, value, total, iconName, href) {
    const p = pctOf(value, total);
    return `
      <a class="card stat" href="${href}" style="text-decoration:none">
        <div class="stat-top"><span>${esc(label)}</span>${icon(iconName)}</div>
        <strong>${value}<span> / ${total}</span></strong>
        <div class="bar bar-thin"><i style="width:${p}%"></i></div>
      </a>`;
  }

  function quizCard(q, index) {
    const r = S.quizzes[q.id];
    const best = r ? r.best : null;
    const total = q.preguntas.length;
    return `
      <a class="card quiz-card" href="#/quiz/${q.slug}">
        <div class="quiz-card-top">
          <span class="quiz-num">${String(index + 1).padStart(2, "0")}</span>
          ${best === null ? `<span class="pill">Sin empezar</span>` : `<span class="pill ${best >= Math.ceil(total * 0.7) ? "green" : "orange"}">Mejor: ${best}/${total}</span>`}
        </div>
        <h3>${esc(q.titulo)}</h3>
        <p>${esc(q.desc)}</p>
        <div class="quiz-card-foot">
          <span>${esc(q.tema)}</span>
          <span>5 preguntas ${icon("arrow", "arrow")}</span>
        </div>
      </a>`;
  }

  function resultHTML({ title, score, total, review, retryLabel, extra }) {
    const pct = pctOf(score, total);
    const msg =
      pct >= 90 ? "Excelente. Lo tienes fresco." :
      pct >= 70 ? "Bien. Ya estás para el parcial." :
      pct >= 50 ? "Vas por buen camino; repasa lo fallado." :
      "Toca volver a los materiales y reintentar.";
    return `
      <section class="card result">
        <span class="eyebrow">Resultado</span>
        <div class="ring" style="--p:${pct}">
          <div class="ring-in"><strong>${pct}%</strong><span>${score} de ${total}</span></div>
        </div>
        <h2>${esc(title)}</h2>
        <p class="lead">${esc(msg)}</p>
        ${extra || ""}
        <div class="result-actions">
          <button class="btn primary" id="retryBtn">${icon("refresh")}${esc(retryLabel || "Reintentar")}</button>
          <a class="btn ghost" href="#/quizzes">${icon("back")}Volver a la zona de quiz</a>
        </div>
      </section>
      ${review && review.length ? `
        <div class="section-head"><h2>${icon("list")}Revisión</h2><p>Lee la explicación de cada una.</p></div>
        <div class="review">
          ${review.map((r, i) => `
            <div class="card review-item ${r.ok ? "ok" : "bad"}">
              <div class="rq">${i + 1}. ${esc(r.q)}</div>
              <div class="ra">Tu respuesta: <b>${esc(r.given)}</b>${r.ok ? "" : ` · Correcta: <b>${esc(r.correct)}</b>`}</div>
              <div class="ra" style="margin-top:4px">${esc(r.e)}</div>
            </div>`).join("")}
        </div>` : ""}`;
  }

  /* ---------------- inicio ---------------- */

  /* ---------------- Parcial 2: enfoque oficial ---------------- */

  function renderParcial2() {
    if (!PARCIAL2) return render404();
    setCrumb("Parcial 2");
    setActiveNav("parcial2");

    const tableRows = PARCIAL2.mapa
      .map(
        (m) => `<tr>
          <td><span class="p2-map-num">${esc(m.n)}</span></td>
          <td><strong>${esc(m.tema)}</strong><br><span class="small muted">${esc(m.autor)}</span></td>
          <td class="p2-pdf-cell">${esc(m.pdf)}</td>
          <td>${fmt(m.que)}</td>
          <td class="p2-map-links"><a href="#/lectura/${esc(m.lectura)}">Leer</a><a href="#/quiz/${esc(m.quiz)}">Quiz</a></td>
        </tr>`
      )
      .join("");

    const topics = PARCIAL2.temas
      .map((t) => {
        const table = t.tabla
          ? `<div class="table-wrap p2-table"><table>
              <thead><tr>${t.tabla.head.map((h) => `<th>${fmt(h)}</th>`).join("")}</tr></thead>
              <tbody>${t.tabla.rows
                .map((r) => `<tr>${r.map((c) => `<td>${fmt(c)}</td>`).join("")}</tr>`)
                .join("")}</tbody>
            </table></div>`
          : "";
        const quote = t.cita
          ? `<blockquote class="p2-quote">${fmt(t.cita.texto)}<cite>— ${esc(t.cita.autor)}</cite></blockquote>`
          : "";
        const links = t.links
          .map((l) => `<a class="btn ghost sm" href="${esc(l.href)}">${esc(l.label)}${icon("arrow")}</a>`)
          .join("");
        return `<article class="card p2-tema" id="tema-${esc(t.id)}">
          <div class="p2-tema-head">
            <span class="p2-num">${esc(t.n)}</span>
            <div class="p2-tema-title">
              <span class="p2-tag">${esc(t.etiqueta)}</span>
              <h3>${esc(t.titulo)}</h3>
              <p class="p2-pdf">${icon("book")}${esc(t.pdf)}</p>
            </div>
          </div>
          <p class="p2-idea">${fmt(t.idea)}</p>
          <ul class="p2-list">${t.puntos.map((p) => `<li>${fmt(p)}</li>`).join("")}</ul>
          ${table}
          ${quote}
          <div class="p2-trap">${icon("target")}<div><strong>Ojo con esto:</strong> ${fmt(t.trampa)}</div></div>
          <div class="p2-links">${links}</div>
        </article>`;
      })
      .join("");

    const cases = PARCIAL2.casos
      .map(
        (c, i) => `<details class="card p2-case">
          <summary><span class="p2-case-num">${String(i + 1).padStart(2, "0")}</span><span>${fmt(c.caso)}</span>${icon("arrow", "arrow")}</summary>
          <p>${fmt(c.respuesta)}</p>
        </details>`
      )
      .join("");

    content.innerHTML = `
      <section class="p2-hero">
        <div class="hero-top">
          <span class="eyebrow">Parcial 2 · ICS-402B</span>
          <span class="pill orange">5 temas oficiales</span>
        </div>
        <h1>Lo que la profesora pidió, <em>sin ruido</em>.</h1>
        <p class="lead">${esc(PARCIAL2.intro)}</p>
        <div class="hero-actions">
          <a class="btn primary" href="#/parcial/parcial-2-oficial">${icon("exam")}Simulacro oficial</a>
          <a class="btn ghost" href="#/lectura/roxin">${icon("read")}Empezar a leer</a>
        </div>
      </section>

      <div class="callout warn" style="margin-top:18px">
        ${icon("target")}
        <div><strong>Antes de empezar:</strong> ${fmt(PARCIAL2.aviso)}</div>
      </div>

      <div class="section-head">
        <h2>${icon("list")}Mapa de los cinco temas</h2>
        <p>Qué PDF corresponde a cada uno y por dónde entrar.</p>
      </div>
      <div class="table-wrap p2-map">
        <table>
          <thead><tr><th>#</th><th>Tema</th><th>PDF</th><th>Qué mirar</th><th>Practicar</th></tr></thead>
          <tbody>${tableRows}</tbody>
        </table>
      </div>

      <div class="section-head">
        <h2>${icon("book")}Fichas de estudio</h2>
        <p>Las cinco fichas, con lo que hay que distinguir y la trampa típica.</p>
      </div>
      <div class="p2-temas">${topics}</div>

      <div class="section-head">
        <h2>${icon("target")}Casos para comprobar</h2>
        <p>Intenta responder antes de abrir la solución.</p>
      </div>
      <div class="grid grid-2 p2-cases">${cases}</div>

      <div class="section-head">
        <h2>${icon("spark")}Datos para memorizar</h2>
        <p>Los que más se pueden caer en el parcial.</p>
      </div>
      <div class="chips">${PARCIAL2.datos.map((d) => `<span class="chip">${esc(d)}</span>`).join("")}</div>

      <div class="section-head">
        <h2>${icon("check")}Plan de 60 minutos</h2>
        <p>Si el parcial es pronto, sigue este orden.</p>
      </div>
      <div class="grid grid-2">
        <a class="quick-item" href="#/lectura/roxin">
          <span class="quick-ico orange">${icon("read")}</span>
          <span><strong>1. Concepto</strong><span>Roxin, von Liszt, Feuerbach y la dogmática.</span></span>
          ${icon("arrow", "arrow")}
        </a>
        <a class="quick-item" href="#/lectura/origenes">
          <span class="quick-ico">${icon("book")}</span>
          <span><strong>2. Capítulo I</strong><span>Las cinco etapas y los nombres.</span></span>
          ${icon("arrow", "arrow")}
        </a>
        <a class="quick-item" href="#/lectura/estado-derecho">
          <span class="quick-ico orange">${icon("shield")}</span>
          <span><strong>3. Estado de derecho</strong><span>Límites, misiones, víctima y seguridad.</span></span>
          ${icon("arrow", "arrow")}
        </a>
        <a class="quick-item" href="#/quiz/cuatro-d">
          <span class="quick-ico">${icon("quiz")}</span>
          <span><strong>4. Las cuatro D</strong><span>Distingue sanción, cárcel, juicio y delito.</span></span>
          ${icon("arrow", "arrow")}
        </a>
        <a class="quick-item" href="#/quiz/prevencion-diapositivas">
          <span class="quick-ico orange">${icon("target")}</span>
          <span><strong>5. Prevención</strong><span>Fuentes, evidencia, espacios y cifras.</span></span>
          ${icon("arrow", "arrow")}
        </a>
        <a class="quick-item" href="#/parcial/parcial-2-oficial">
          <span class="quick-ico">${icon("exam")}</span>
          <span><strong>6. Simulacro</strong><span>20 preguntas con tiempo y resultado.</span></span>
          ${icon("arrow", "arrow")}
        </a>
      </div>

      <div class="callout" style="margin-top:20px">
        ${icon("cards")}
        <div><strong>Para cerrar:</strong> repasa los mazos “Parcial 2” en <a href="#/flashcards">Flashcards</a> y vuelve a los quizzes que fallaste. La meta no es leerlo todo: es distinguir las trampas.</div>
      </div>`;
    updateChrome();
  }

  function renderHome() {
    setCrumb("Inicio");
    setActiveNav("inicio");
    const st = stats();
    const nextQuiz = QUIZZES.find((q) => !quizDone(q.id));
    const nextParcial = PARCIALES.find((p) => !parcialDone(p.id));

    let nextHTML = "";
    if (nextQuiz) {
      nextHTML = `
        <div class="card continue-card">
          <div>
            <span class="pill orange">Siguiente paso</span>
            <h3 style="margin-top:8px">${esc(nextQuiz.titulo)}</h3>
            <p>${esc(nextQuiz.desc)} · 5 preguntas</p>
          </div>
          <a class="btn primary" href="#/quiz/${nextQuiz.slug}">Continuar ${icon("arrow")}</a>
        </div>`;
    } else if (nextParcial) {
      nextHTML = `
        <div class="card continue-card">
          <div>
            <span class="pill green">Quizzes completados</span>
            <h3 style="margin-top:8px">${esc(nextParcial.titulo)}</h3>
            <p>Ahora prueba en formato de examen, con tiempo.</p>
          </div>
          <a class="btn green" href="#/parcial/${nextParcial.slug}">Hacer parcial ${icon("arrow")}</a>
        </div>`;
    } else {
      nextHTML = `
        <div class="card continue-card">
          <div>
            <span class="pill green">Todo recorrido</span>
            <h3 style="margin-top:8px">Ya pasaste por todo el banco</h3>
            <p>Vuelve a los parciales con peor resultado o repasa el pronóstico.</p>
          </div>
          <a class="btn ghost" href="#/progreso">Ver progreso ${icon("arrow")}</a>
        </div>`;
    }

    content.innerHTML = `
      <section class="card hero">
        <div class="hero-top">
          <span class="eyebrow">ICS-402B · UNACHI</span>
          <span class="pill green">Basado en tus documentos</span>
        </div>
        <h1>Repasa <em>política criminal</em> sin perderte en el intento.</h1>
        <p class="lead">${QUIZZES.length} quizzes, ${VF.length} de verdadero o falso, ${MC.length} de selección múltiple y ${PARCIALES.length} parciales armados con los materiales de la profesora Diana Núñez. Ahora con una ruta enfocada en los <strong>cinco temas oficiales del Parcial&nbsp;2</strong>.</p>
        <div class="hero-actions">
          <a class="btn primary" href="#/parcial2">${icon("target")}Modo Parcial 2</a>
          <a class="btn ghost" href="#/quizzes">Ver todos los quizzes ${icon("arrow")}</a>
        </div>
      </section>

      <a class="card p2-banner" href="#/parcial2">
        <div class="p2-banner-copy">
          <span class="eyebrow">Parcial 2 · enfoque oficial</span>
          <h2>Cinco temas. Una sola ruta.</h2>
          <p>Concepto de política criminal, Capítulo I del Tratado, Estado de derecho, las cuatro D y prevención. Cada tema con su PDF, su ficha, su quiz y sus flashcards.</p>
          <div class="chips">
            <span class="chip"><b>01</b> Concepto</span>
            <span class="chip"><b>02</b> Capítulo I</span>
            <span class="chip"><b>03</b> Estado de derecho</span>
            <span class="chip"><b>04</b> Cuatro D</span>
            <span class="chip"><b>05</b> Prevención</span>
          </div>
        </div>
        <span class="p2-banner-arrow">${icon("arrow")}</span>
      </a>

      <div class="grid grid-4" style="margin-top:16px">
        ${statCard("Quizzes", st.qDone, QUIZZES.length, "quiz", "#/quizzes")}
        ${statCard("Verdadero / falso", st.vfBest, VF.length, "check", "#/verdadero-falso")}
        ${statCard("Selección múltiple", st.mcBest, MC.length, "list", "#/seleccion")}
        ${statCard("Parciales", st.pDone, PARCIALES.length, "exam", "#/parciales")}
      </div>

      <div class="section-head">
        <h2>${icon("read")}Leer y memorizar</h2>
        <p>Dos formas de estudiar sin responder preguntas.</p>
      </div>
      <div class="grid grid-2">
        <a class="card study-card" href="#/lectura">
          <span class="study-ico orange">${icon("read")}</span>
          <div class="study-body">
            <h3>Lectura guiada</h3>
            <p>${LECTURA.length} capítulos cortos con lo esencial, los artículos y las cifras.</p>
            <div class="bar bar-thin"><i style="width:${pctOf(st.read, LECTURA.length)}%"></i></div>
            <span class="small muted">${st.read} de ${LECTURA.length} capítulos leídos</span>
          </div>
          ${icon("arrow", "arrow")}
        </a>
        <a class="card study-card" href="#/flashcards">
          <span class="study-ico">${icon("cards")}</span>
          <div class="study-body">
            <h3>Flashcards</h3>
            <p>${st.flashTotal} tarjetas para preguntarte y voltear. Marca las que se te olvidan.</p>
            <div class="bar bar-thin"><i style="width:${pctOf(st.flashLearned, st.flashTotal)}%"></i></div>
            <span class="small muted">${st.flashLearned} de ${st.flashTotal} tarjetas dominadas</span>
          </div>
          ${icon("arrow", "arrow")}
        </a>
      </div>

      ${nextHTML}

      <div class="section-head">
        <h2>${icon("spark")}Ruta corta si el parcial es pronto</h2>
        <p>Empieza por lo que más pesa.</p>
      </div>
      <div class="grid grid-2">
        <div class="card" style="padding:20px">
          <div class="quick-list">
            <a class="quick-item" href="#/parcial2">
              <span class="quick-ico orange">${icon("target")}</span>
              <span><strong>1. Abre el modo Parcial 2</strong><span>Las cinco fichas y el mapa de PDF.</span></span>
              ${icon("arrow", "arrow")}
            </a>
            <a class="quick-item" href="#/parcial/parcial-2-oficial">
              <span class="quick-ico">${icon("exam")}</span>
              <span><strong>2. Haz el simulacro oficial</strong><span>20 preguntas de los cinco temas, con tiempo.</span></span>
              ${icon("arrow", "arrow")}
            </a>
            <a class="quick-item" href="#/quiz/cuatro-d">
              <span class="quick-ico orange">${icon("check")}</span>
              <span><strong>3. Cierra con las cuatro D</strong><span>La tabla que más se confunde.</span></span>
              ${icon("arrow", "arrow")}
            </a>
          </div>
        </div>
        <div class="card" style="padding:20px">
          <h3 style="margin-bottom:10px">Datos del Parcial 2</h3>
          <div class="chips">
            <span class="chip"><b>Roxin</b> · Berlín 1970</span>
            <span class="chip"><b>Beccaria</b> · 1764</span>
            <span class="chip"><b>4 D</b> · 4 filtros</span>
            <span class="chip"><b>9 de 10</b> · programas previos a 1970</span>
            <span class="chip"><b>11.5 → 5.2</b> · Costa Rica</span>
            <span class="chip"><b>40 %</b> · Barrio Seguro</span>
            <span class="chip"><b>−14 % / −9 %</b> · Ecuador</span>
            <span class="chip"><b>Tokio 1970</b> · IV Congreso ONU</span>
          </div>
          <p class="small muted" style="margin-top:14px">Estos datos aparecen en los PDF del Parcial 2 y son buenos candidatos a pregunta.</p>
        </div>
      </div>

      <div class="section-head">
        <h2>${icon("quiz")}Quizzes por tema</h2>
        <p>${QUIZZES.length} recorridos de 5 preguntas. Los del Parcial 2 aparecen primero.</p>
      </div>
      <div class="grid grid-quizzes">
        ${QUIZZES.slice(0, 6).map((q, i) => quizCard(q, i)).join("")}
      </div>
      <div style="margin-top:14px">
        <a class="btn ghost" href="#/quizzes">Ver los ${QUIZZES.length} quizzes ${icon("arrow")}</a>
      </div>
    `;
    updateChrome();
  }

  /* ---------------- lista de quizzes ---------------- */

  function renderQuizList() {
    setCrumb("Zona de quiz");
    setActiveNav("quizzes");
    content.innerHTML = `
      <span class="eyebrow">Práctica guiada</span>
      <h1 style="margin:12px 0 8px">Zona de quiz</h1>
      <p class="lead">${QUIZZES.length} quizzes de 5 preguntas. Los cinco primeros son del Parcial 2; el resto repasa el curso completo. Cada respuesta te muestra la explicación y la fuente.</p>
      <div class="callout" style="margin-top:18px">
        ${icon("target")}
        <div><strong>Si tu examen es el Parcial 2:</strong> empieza por “Concepto: Roxin y la dogmática”, “Capítulo I”, “Estado de derecho”, “Las cuatro D en casos” y “Prevención: diapositivas”.</div>
      </div>
      <div class="grid grid-quizzes" style="margin-top:26px">
        ${QUIZZES.map((q, i) => quizCard(q, i)).join("")}
      </div>`;
  }

  /* ---------------- práctica genérica ---------------- */

  function paintPractice(opts) {
    const { list, idx, log, chosen, answered, title, tag } = opts;
    const q = list[idx];
    const total = list.length;
    const isLast = idx === total - 1;
    const optsHTML = q.o
      .map((txt, i) => {
        let cls = "option";
        let mark = "";
        if (answered) {
          if (i === q.c) {
            cls += " correct";
            mark = icon("check", "mark");
          } else if (i === chosen) {
            cls += " wrong";
            mark = icon("x", "mark");
          } else {
            cls += " dim";
          }
        } else if (i === chosen) {
          cls += " selected";
        }
        return `<button type="button" class="${cls}" data-opt="${i}" ${answered ? "disabled" : ""}>
          <span class="key">${letters[i]}</span>
          <span class="txt">${esc(txt)}</span>
          ${mark}
        </button>`;
      })
      .join("");

    let fb = "";
    if (answered) {
      const ok = chosen === q.c;
      fb = `<div class="feedback ${ok ? "ok" : "bad"}" role="status">
        <div class="feedback-head">${ok ? icon("check") : icon("x")}${ok ? "Correcto" : "Casi. La correcta es " + letters[q.c]}</div>
        <p>${esc(q.e)}</p>
        ${q.f ? `<span class="fuente">Fuente: ${esc(q.f)}</span>` : ""}
      </div>`;
    }

    return `
      <div class="runner">
        <div class="runner-top">
          <a class="btn ghost sm" href="${opts.backHref}">${icon("back")}${esc(opts.backLabel)}</a>
          <span class="pill green">${esc(tag)}</span>
          <button type="button" class="btn ghost sm" id="copyLink">${icon("link")}Copiar enlace</button>
        </div>
        <div class="card q-card" id="practiceCard">
          <div class="q-meta">
            <span>Pregunta <strong>${idx + 1}</strong> de ${total}</span>
            <span>${esc(title)}</span>
          </div>
          <div class="bar bar-thin" style="margin-bottom:18px"><i style="width:${pctOf(idx, total)}%"></i></div>
          <p class="q-text">${esc(q.p)}</p>
          <div class="options" role="group" aria-label="Opciones de respuesta">${optsHTML}</div>
          ${fb}
          <div class="runner-actions">
            <span class="small muted">${answered ? `Aciertos: ${log.filter((x) => x.ok).length}` : "Elige una opción"}</span>
            <button type="button" class="btn primary" id="nextBtn" ${answered ? "" : "disabled"}>
              ${isLast ? "Ver resultado" : "Siguiente"} ${icon("arrow")}
            </button>
          </div>
        </div>
      </div>`;
  }

  function runPractice(config) {
    const list = config.list;
    let idx = 0;
    const log = [];
    let chosen = null;
    let answered = false;

    function paint() {
      content.innerHTML = paintPractice({
        list, idx, log, chosen, answered,
        title: config.title,
        tag: config.tag,
        backHref: config.backHref,
        backLabel: config.backLabel
      });

      $$("[data-opt]").forEach((btn) => {
        btn.addEventListener("click", () => {
          if (answered) return;
          chosen = Number(btn.dataset.opt);
          answered = true;
          const q = list[idx];
          log[idx] = {
            ok: chosen === q.c,
            given: q.o[chosen],
            correct: q.o[q.c],
            q: q.p,
            e: q.e,
            f: q.f
          };
          paint();
        });
      });

      const next = $("#nextBtn");
      if (next) {
        next.addEventListener("click", () => {
          if (!answered) return;
          if (idx === list.length - 1) return finish();
          idx += 1;
          chosen = null;
          answered = false;
          paint();
        });
      }

      const copy = $("#copyLink");
      if (copy) copy.addEventListener("click", () => copyLink(copy));
    }

    function finish() {
      const score = log.filter((x) => x && x.ok).length;
      const best = config.onFinish(score, list.length);
      cleanup = null;
      content.innerHTML = resultHTML({
        title: score === list.length ? "Perfecto" : "Quiz terminado",
        score,
        total: list.length,
        review: log,
        retryLabel: "Repetir quiz",
        extra: best !== undefined ? `<p class="small muted">Mejor resultado guardado: ${best}/${list.length}</p>` : ""
      });
      window.scrollTo({ top: 0, behavior: "smooth" });
      $("#retryBtn").addEventListener("click", () => runPractice(config));
    }

    paint();
    cleanup = null;
  }

  function renderPracticeQuiz(slug) {
    const quiz = QUIZZES.find((q) => q.slug === slug);
    if (!quiz) return render404();
    setCrumb(quiz.titulo);
    setActiveNav("quizzes");
    runPractice({
      list: quiz.preguntas,
      title: quiz.tema,
      tag: "Quiz · 5 preguntas",
      backHref: "#/quizzes",
      backLabel: "Quizzes",
      onFinish(score, total) {
        const prev = S.quizzes[quiz.id];
        const best = Math.max(prev ? prev.best : 0, score);
        S.quizzes[quiz.id] = { best, last: score, at: Date.now(), attempts: (prev ? prev.attempts || 1 : 0) + 1 };
        save();
        return best;
      }
    });
  }

  /* ---------------- VF / selección ---------------- */

  function vfAsQuestions() {
    return VF.map((q) => ({
      p: q.p,
      o: ["Verdadero", "Falso"],
      c: q.c ? 0 : 1,
      e: q.e,
      f: q.f
    }));
  }

  function runSet(kind) {
    const isVF = kind === "vf";
    const list = isVF ? vfAsQuestions() : MC.map((q) => ({ p: q.p, o: q.o, c: q.c, e: q.e, f: q.f }));
    const label = isVF ? "Verdadero o falso" : "Selección múltiple";
    const stateKey = isVF ? "vf" : "mc";

    setCrumb(label);
    setActiveNav(isVF ? "vf" : "mc");

    runPractice({
      list,
      title: label,
      tag: label + " · 20 preguntas",
      backHref: "#/",
      backLabel: "Inicio",
      onFinish(score) {
        const prev = S[stateKey];
        const best = Math.max(prev ? prev.best : 0, score);
        S[stateKey] = { best, last: score, at: Date.now(), attempts: (prev ? prev.attempts || 1 : 0) + 1 };
        save();
        return best;
      }
    });
  }

  /* ---------------- parciales ---------------- */

  function parcialCard(p, index) {
    const r = S.parciales[p.id];
    const total = p.preguntas.length;
    const pass = Math.ceil(total * 0.7);
    return `
      <a class="card quiz-card" href="#/parcial/${p.slug}">
        <div class="quiz-card-top">
          <span class="quiz-num">${String(index + 1).padStart(2, "0")}</span>
          ${r ? `<span class="pill ${r.best >= pass ? "green" : "orange"}">Mejor: ${r.best}/${total}</span>` : `<span class="pill">Sin hacer</span>`}
        </div>
        <h3>${esc(p.titulo)}</h3>
        <p>${esc(p.desc)}</p>
        <div class="quiz-card-foot">
          <span>${esc(p.tema)} · ${p.minutos} min</span>
          <span>${total} preguntas ${icon("arrow", "arrow")}</span>
        </div>
      </a>`;
  }

  function renderParcialList() {
    setCrumb("Parciales");
    setActiveNav("parciales");
    content.innerHTML = `
      <span class="eyebrow">Simulacros</span>
      <h1 style="margin:12px 0 8px">Parciales y simulacros</h1>
      <p class="lead">${PARCIALES.length} exámenes con tiempo y sin retroalimentación hasta entregar. El primero es el <strong>Parcial 2 oficial</strong>, de 20 preguntas; los demás son simulacros de 10. Al final ves tu puntaje y la explicación de cada respuesta.</p>
      <div class="callout" style="margin-top:20px">
        ${icon("clock")}
        <div><strong>Así se siente el parcial.</strong> El cronómetro corre, puedes moverte entre preguntas y entregar cuando termines. Los simulacros no reproducen preguntas reales: son una estimación basada en tus materiales.</div>
      </div>
      <div class="grid grid-quizzes" style="margin-top:24px">
        ${PARCIALES.map((p, i) => parcialCard(p, i)).join("")}
      </div>`;
  }

  function renderParcial(slug) {
    const p = PARCIALES.find((x) => x.slug === slug);
    if (!p) return render404();
    setCrumb(p.titulo);
    setActiveNav("parciales");

    const total = p.preguntas.length;
    let idx = 0;
    const answers = new Array(total).fill(null);
    let warned = false;
    let left = p.minutos * 60;
    const started = Date.now();

    content.innerHTML = `
      <div class="runner">
        <div class="runner-top">
          <a class="btn ghost sm" href="#/parciales">${icon("back")}Parciales</a>
          <span class="pill orange">${esc(p.tema)}</span>
          <button type="button" class="btn ghost sm" id="copyLink">${icon("link")}Copiar enlace</button>
        </div>
        <div class="card exam-bar">
          <span class="timer" id="timer">${icon("clock")}<span id="timeTxt">--:--</span></span>
          <div class="bar"><i id="examBar" style="width:0%"></i></div>
          <span class="small muted" id="answeredTxt">0/${total} respondidas</span>
        </div>
        <div id="examArea"></div>
      </div>`;

    const timeTxt = $("#timeTxt");
    const timerEl = $("#timer");
    const examBar = $("#examBar");
    const answeredTxt = $("#answeredTxt");
    const area = $("#examArea");

    function updateTimer() {
      const m = Math.floor(left / 60);
      const s = left % 60;
      timeTxt.textContent = String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
      timerEl.classList.toggle("low", left <= 120);
    }

    function paint() {
      const q = p.preguntas[idx];
      const isLast = idx === total - 1;
      const isVF = q.t === "vf";
      const options = isVF ? ["Verdadero", "Falso"] : q.o;
      const correct = isVF ? (q.c ? 0 : 1) : q.c;
      const selected = answers[idx];

      area.innerHTML = `
        <div class="card q-card">
          <div class="q-meta">
            <span>Pregunta <strong>${idx + 1}</strong> de ${total}</span>
            <span class="pill">${isVF ? "Verdadero o falso" : "Selección múltiple"}</span>
          </div>
          <p class="q-text">${esc(q.p)}</p>
          <div class="options" role="group" aria-label="Opciones de respuesta">
            ${options.map((txt, i) => `
              <button type="button" class="option ${selected === i ? "selected" : ""}" data-opt="${i}">
                <span class="key">${letters[i]}</span>
                <span class="txt">${esc(txt)}</span>
              </button>`).join("")}
          </div>
          <div id="warn"></div>
          <div class="runner-actions">
            <button type="button" class="btn ghost" id="prevBtn" ${idx === 0 ? "disabled" : ""}>${icon("back")}Anterior</button>
            <span class="spacer"></span>
            <button type="button" class="btn soft" id="finishBtn">Entregar</button>
            <button type="button" class="btn primary" id="nextBtn">${isLast ? "Última" : "Siguiente"}${icon("arrow")}</button>
          </div>
        </div>
        <div class="card" style="padding:14px 16px;margin-top:12px">
          <div class="q-meta" style="margin-bottom:2px"><span>Navegación</span><span>${answers.filter((a) => a !== null).length}/${total}</span></div>
          <div class="q-nav" role="group" aria-label="Ir a una pregunta">
            ${p.preguntas.map((_, i) => `<button type="button" class="q-dot ${answers[i] !== null ? "answered" : ""} ${i === idx ? "current" : ""}" data-jump="${i}" aria-label="Pregunta ${i + 1}${answers[i] !== null ? ", respondida" : ""}">${i + 1}</button>`).join("")}
          </div>
        </div>`;

      $$("[data-opt]", area).forEach((btn) => {
        btn.addEventListener("click", () => {
          answers[idx] = Number(btn.dataset.opt);
          warned = false;
          paint();
        });
      });
      $$("[data-jump]", area).forEach((btn) => {
        btn.addEventListener("click", () => {
          idx = Number(btn.dataset.jump);
          paint();
        });
      });
      $("#prevBtn").addEventListener("click", () => {
        if (idx > 0) { idx -= 1; paint(); }
      });
      $("#nextBtn").addEventListener("click", () => {
        if (idx < total - 1) { idx += 1; paint(); }
        else finishExam(false);
      });
      $("#finishBtn").addEventListener("click", () => finishExam(false));

      answeredTxt.textContent = `${answers.filter((a) => a !== null).length}/${total} respondidas`;
      examBar.style.width = pctOf(answers.filter((a) => a !== null).length, total) + "%";
      void correct;
    }

    function finishExam(auto) {
      const missing = answers.filter((a) => a === null).length;
      if (!auto && missing > 0 && !warned) {
        warned = true;
        $("#warn").innerHTML = `<div class="feedback bad" role="alert"><div class="feedback-head">${icon("x")}Faltan ${missing} pregunta${missing === 1 ? "" : "s"}</div><p>Puedes seguir respondiendo. Si quieres entregar así, pulsa otra vez “Entregar”.</p></div>`;
        return;
      }
      clearInterval(timerId);
      cleanup = null;

      let score = 0;
      const review = p.preguntas.map((q, i) => {
        const isVF = q.t === "vf";
        const opts = isVF ? ["Verdadero", "Falso"] : q.o;
        const correct = isVF ? (q.c ? 0 : 1) : q.c;
        const given = answers[i];
        const ok = given === correct;
        if (ok) score += 1;
        return {
          ok,
          q: q.p,
          given: given === null ? "Sin responder" : opts[given],
          correct: opts[correct],
          e: q.e,
          f: q.f
        };
      });

      const prev = S.parciales[p.id];
      const best = Math.max(prev ? prev.best : 0, score);
      S.parciales[p.id] = { best, last: score, at: Date.now(), attempts: (prev ? prev.attempts || 1 : 0) + 1 };
      save();

      const used = Math.min(p.minutos * 60, Math.round((Date.now() - started) / 1000));
      const mm = String(Math.floor(used / 60)).padStart(2, "0");
      const ss = String(used % 60).padStart(2, "0");

      content.innerHTML = resultHTML({
        title: score >= Math.ceil(total * 0.7) ? "Aprobado" : "A reforzar",
        score,
        total,
        review,
        retryLabel: "Repetir parcial",
        extra: `<p class="small muted">Tiempo usado: ${mm}:${ss} · Mejor resultado: ${best}/${total}</p>`
      });
      window.scrollTo({ top: 0, behavior: "smooth" });
      $("#retryBtn").addEventListener("click", () => renderParcial(p.slug));
    }

    let timerId = setInterval(() => {
      left -= 1;
      if (left <= 0) {
        left = 0;
        updateTimer();
        finishExam(true);
        return;
      }
      updateTimer();
    }, 1000);

    cleanup = () => clearInterval(timerId);
    updateTimer();
    paint();

    const copy = $("#copyLink");
    if (copy) copy.addEventListener("click", () => copyLink(copy));
  }

  /* ---------------- lectura guiada ---------------- */

  function bloqueHTML(b) {
    if (b.h) return `<h3>${fmt(b.h)}</h3>`;
    if (b.p) return `<p>${fmt(b.p)}</p>`;
    if (b.ul) return `<ul>${b.ul.map((li) => `<li>${fmt(li)}</li>`).join("")}</ul>`;
    if (b.cita) return `<blockquote>${fmt(b.cita)}</blockquote>`;
    if (b.dato) return `<div class="dato-clave">${icon("spark")}<div>${fmt(b.dato)}</div></div>`;
    if (b.tabla) {
      return `<div class="table-wrap"><table>
        <thead><tr>${b.tabla.head.map((h) => `<th>${fmt(h)}</th>`).join("")}</tr></thead>
        <tbody>${b.tabla.rows.map((r) => `<tr>${r.map((c) => `<td>${fmt(c)}</td>`).join("")}</tr>`).join("")}</tbody>
      </table></div>`;
    }
    return "";
  }

  function renderLectura() {
    setCrumb("Lectura guiada");
    setActiveNav("lectura");
    const leidos = LECTURA.filter((c) => S.lectura[c.id]).length;
    const pct = pctOf(leidos, LECTURA.length);
    content.innerHTML = `
      <section class="card study-hero">
        <div>
          <span class="eyebrow">Para entender antes de memorizar</span>
          <h1 style="margin:12px 0 8px">Lectura guiada</h1>
          <p class="lead">${LECTURA.length} capítulos cortos, escritos con los documentos de la carpeta. Los seis primeros forman la ruta del Parcial 2; el resto repasa el curso completo. Cada uno tiene las ideas clave, los artículos y las cifras que sirven para el parcial.</p>
        </div>
        <div class="study-progress">
          <strong>${pct}%</strong>
          <span>${leidos} de ${LECTURA.length} leídos</span>
          <div class="bar bar-thin"><i style="width:${pct}%"></i></div>
        </div>
      </section>

      <div class="callout warn" style="margin-top:18px">
        ${icon("target")}
        <div><strong>Si el parcial es el 2:</strong> la planificación lo ubica en el Eje 3 como cuestionario presencial. Empieza por el capítulo 8 (salidas alternas), sigue con el 7 (bases legales) y después vuelve al resto.</div>
      </div>

      <div class="chapter-list">
        ${LECTURA.map((c, i) => {
          const leido = !!S.lectura[c.id];
          return `
          <a class="card chapter-card ${leido ? "read" : ""}" href="#/lectura/${c.id}">
            <span class="chapter-num">${String(i + 1).padStart(2, "0")}</span>
            <div class="chapter-body">
              <div class="chapter-top">
                <h3>${esc(c.titulo)}</h3>
                ${leido ? `<span class="pill green">Leído</span>` : ""}
              </div>
              <p>${esc(c.resumen)}</p>
              <div class="chapter-meta">
                <span>${icon("clock")}${c.minutos} min</span>
                <span>${icon("book")}${c.fuentes.length} ${c.fuentes.length === 1 ? "fuente" : "fuentes"}</span>
              </div>
            </div>
            ${icon("arrow", "arrow")}
          </a>`;
        }).join("")}
      </div>

      <div class="callout" style="margin-top:20px">
        ${icon("cards")}
        <div><strong>Después de leer, pregúntate.</strong> Las flashcards convierten cada capítulo en tarjetas de pregunta y respuesta. <a href="#/flashcards">Ir a flashcards</a>.</div>
      </div>`;
    updateChrome();
  }

  function renderCapitulo(id) {
    const idx = LECTURA.findIndex((c) => c.id === id);
    if (idx < 0) return render404();
    const c = LECTURA[idx];
    const prev = LECTURA[idx - 1];
    const next = LECTURA[idx + 1];
    const leido = !!S.lectura[c.id];

    setCrumb(c.titulo);
    setActiveNav("lectura");

    content.innerHTML = `
      <div class="reading">
        <div class="runner-top">
          <a class="btn ghost sm" href="#/lectura">${icon("back")}Lectura guiada</a>
          <span class="pill">Capítulo ${idx + 1} de ${LECTURA.length} · ${c.minutos} min</span>
          <button type="button" class="btn ghost sm" id="copyLink">${icon("link")}Copiar enlace</button>
        </div>

        <article class="card lectura-card">
          <header class="lectura-head">
            <span class="eyebrow">Lectura guiada · ICS-402B</span>
            <h1>${esc(c.titulo)}</h1>
            <p class="lead">${esc(c.resumen)}</p>
            <div class="reading-tools">
              <div class="font-tools" role="group" aria-label="Tamaño de letra">
                <button type="button" class="icon-btn sm" id="fontDown" aria-label="Reducir letra">A−</button>
                <span id="lecturaSizeLabel" class="tiny muted">${S.lecturaSize} px</span>
                <button type="button" class="icon-btn sm" id="fontUp" aria-label="Aumentar letra">A+</button>
              </div>
              <button type="button" class="btn ${leido ? "green" : "soft"} sm" id="markRead" aria-pressed="${leido}">
                ${icon(leido ? "check" : "book")}<span>${leido ? "Leído" : "Marcar como leído"}</span>
              </button>
            </div>
          </header>

          <div class="lectura">
            ${c.bloques.map(bloqueHTML).join("")}
          </div>

          <footer class="lectura-foot">
            <div class="claves">
              <span class="claves-title">${icon("spark")}Tres ideas para llevarte</span>
              <ul>${c.clave.map((k) => `<li>${fmt(k)}</li>`).join("")}</ul>
            </div>
            <p class="fuente-line"><strong>Fuentes:</strong> ${c.fuentes.map(esc).join(" · ")}</p>
          </footer>
        </article>

        <nav class="chapter-nav" aria-label="Capítulos">
          ${prev ? `<a class="btn ghost" href="#/lectura/${prev.id}">${icon("back")}${esc(prev.titulo)}</a>` : `<span></span>`}
          ${next
            ? `<a class="btn primary" href="#/lectura/${next.id}">${esc(next.titulo)}${icon("arrow")}</a>`
            : `<a class="btn green" href="#/flashcards">${icon("cards")}Practicar con flashcards</a>`}
        </nav>
      </div>`;

    $("#copyLink").addEventListener("click", (e) => copyLink(e.currentTarget));

    const btn = $("#markRead");
    btn.addEventListener("click", () => {
      if (S.lectura[c.id]) delete S.lectura[c.id];
      else S.lectura[c.id] = true;
      save();
      const on = !!S.lectura[c.id];
      btn.className = "btn " + (on ? "green" : "soft") + " sm";
      btn.setAttribute("aria-pressed", String(on));
      btn.innerHTML = `${icon(on ? "check" : "book")}<span>${on ? "Leído" : "Marcar como leído"}</span>`;
    });

    const step = (delta) => {
      S.lecturaSize = Math.min(20, Math.max(15, (Number(S.lecturaSize) || 17) + delta));
      applyLecturaSize();
      save();
    };
    $("#fontDown").addEventListener("click", () => step(-1));
    $("#fontUp").addEventListener("click", () => step(1));

    applyLecturaSize();
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  /* ---------------- flashcards ---------------- */

  const starKey = (deckId, i) => deckId + ":" + i;

  function deckStars(deck) {
    return deck.cards.filter((_, i) => S.flash.starred.includes(starKey(deck.id, i))).length;
  }

  function renderFlashcards() {
    setCrumb("Flashcards");
    setActiveNav("flashcards");
    const st = stats();
    const stars = S.flash.starred.length;

    content.innerHTML = `
      <section class="card study-hero">
        <div>
          <span class="eyebrow">Pregunta, piensa, voltea</span>
          <h1 style="margin:12px 0 8px">Flashcards</h1>
          <p class="lead">${st.flashTotal} tarjetas en ${FLASHCARDS.length} mazos. Lee la pregunta, responde en tu cabeza y voltea para comprobar. Si no la sabías, márcala: se queda guardada para el repaso final.</p>
        </div>
        <div class="study-progress">
          <strong>${st.flashLearned}/${st.flashTotal}</strong>
          <span>tarjetas dominadas</span>
          <div class="bar bar-thin"><i style="width:${pctOf(st.flashLearned, st.flashTotal)}%"></i></div>
        </div>
      </section>

      ${stars ? `
        <div class="callout warn" style="margin-top:18px">
          ${icon("refresh")}
          <div><strong>Tienes ${stars} ${stars === 1 ? "tarjeta marcada" : "tarjetas marcadas"} para repasar.</strong> Puedes ir directo a ellas desde cada mazo o hacer un repaso mezclado. <a href="#/flashcards/repaso">Repasar todas</a>.</div>
        </div>` : ""}

      <div class="grid grid-quizzes" style="margin-top:22px">
        ${FLASHCARDS.map((d) => {
          const best = (S.flash.best[d.id] || 0);
          const marked = deckStars(d);
          return `
          <a class="card quiz-card" href="#/flashcards/${d.id}">
            <div class="quiz-card-top">
              <span class="quiz-num">${String(d.cards.length).padStart(2, "0")}</span>
              ${best >= Math.ceil(d.cards.length * 0.7)
                ? `<span class="pill green">Mejor: ${best}/${d.cards.length}</span>`
                : best > 0
                  ? `<span class="pill orange">Mejor: ${best}/${d.cards.length}</span>`
                  : `<span class="pill">Sin empezar</span>`}
            </div>
            <h3>${esc(d.titulo)}</h3>
            <p>${esc(d.desc)}</p>
            <div class="quiz-card-foot">
              <span>${d.cards.length} tarjetas</span>
              <span>${marked ? marked + " por repasar" : "Al día"} ${icon("arrow", "arrow")}</span>
            </div>
          </a>`;
        }).join("")}
      </div>

      <div class="callout" style="margin-top:20px">
        ${icon("read")}
        <div><strong>¿Prefieres leer primero?</strong> Cada mazo sale de un capítulo de la lectura guiada. <a href="#/lectura">Abrir la lectura</a>.</div>
      </div>`;
    updateChrome();
  }

  function flashSummary(deck, cards, known, again) {
    const pct = pctOf(known, cards.length);
    const isMixed = deck.id === "__repaso";
    const prev = isMixed ? 0 : (S.flash.best[deck.id] || 0);
    if (!isMixed) S.flash.best[deck.id] = Math.max(prev, known);
    save();
    const starredNow = cards.filter((c) => S.flash.starred.includes(c.key)).length;
    return `
      <section class="card result flash-result">
        <span class="eyebrow">Mazo terminado</span>
        <div class="ring" style="--p:${pct}"><div class="ring-in"><strong>${pct}%</strong><span>${known} de ${cards.length}</span></div></div>
        <h2>${known === cards.length ? "Todo claro" : "Buen repaso"}</h2>
        <p class="lead">${known} ${known === 1 ? "tarjeta sabida" : "tarjetas sabidas"} y ${again} ${again === 1 ? "marcada" : "marcadas"} para volver.</p>
        <p class="small muted">${isMixed ? "Repaso mezclado" : `Mejor resultado en este mazo: ${S.flash.best[deck.id]}/${deck.cards.length}`}${starredNow ? ` · ${starredNow} pendientes` : ""}</p>
        <div class="result-actions">
          <button type="button" class="btn primary" id="flashRetry">${icon("refresh")}Repetir mazo</button>
          ${starredNow ? `<button type="button" class="btn soft" id="flashStarred">${icon("target")}Repasar las ${starredNow} marcadas</button>` : ""}
          <a class="btn ghost" href="#/flashcards">${icon("back")}Volver a mazos</a>
        </div>
      </section>`;
  }

  function renderDeck(slug, onlyStarred) {
    if (slug === "repaso") {
      const all = FLASHCARDS.flatMap((d) => d.cards.map((c, i) => ({ ...c, key: starKey(d.id, i), deck: d })));
      const marked = all.filter((c) => S.flash.starred.includes(c.key));
      if (!marked.length) {
        setCrumb("Flashcards");
        setActiveNav("flashcards");
        content.innerHTML = `
          <section class="card result">
            <span class="eyebrow">Repaso</span>
            <h2 style="margin-top:14px">No hay tarjetas marcadas</h2>
            <p class="lead">Cuando falles una tarjeta y pulses “Otra vez”, se guarda aquí para el repaso final.</p>
            <div class="result-actions"><a class="btn primary" href="#/flashcards">Ver los mazos</a></div>
          </section>`;
        return;
      }
      // Repaso mezclado: se arma un mazo virtual con las tarjetas marcadas.
      const virtual = { id: "__repaso", titulo: "Repaso mezclado", cards: marked };
      return renderDeckCards(virtual, marked, true);
    }

    const deck = FLASHCARDS.find((d) => d.id === slug);
    if (!deck) return render404();
    setCrumb(deck.titulo);
    setActiveNav("flashcards");
    const all = deck.cards.map((c, i) => ({ ...c, key: starKey(deck.id, i) }));
    const cards = onlyStarred ? all.filter((c) => S.flash.starred.includes(c.key)) : all;
    if (onlyStarred && !cards.length) return renderDeck(deck.id, false);
    renderDeckCards(deck, cards, false);
  }

  function renderDeckCards(deck, cards, mixed) {
    let i = 0;
    let flipped = false;
    let known = 0;
    let again = 0;
    const total = cards.length;
    const isMarked = (card) => S.flash.starred.includes(card.key);

    content.innerHTML = `
      <div class="runner flash-runner">
        <div class="runner-top">
          <a class="btn ghost sm" href="#/flashcards">${icon("back")}Flashcards</a>
          <span class="pill orange">${esc(deck.titulo)}</span>
          <button type="button" class="btn ghost sm" id="copyLink">${icon("link")}Copiar enlace</button>
        </div>
        <div class="card flash-bar">
          <span class="small muted" id="flashCount">Tarjeta 1 de ${total}</span>
          <div class="bar"><i id="flashBar" style="width:0%"></i></div>
          <span class="small muted" id="flashKnown">0 sabidas</span>
        </div>
        <div id="flashArea"></div>
      </div>`;

    const area = $("#flashArea");
    const copy = $("#copyLink");
    if (copy) copy.addEventListener("click", () => copyLink(copy));

    function paint() {
      const card = cards[i];
      flipped = false;
      area.innerHTML = `
        <button type="button" class="flash-card" id="flashCard" aria-pressed="false" aria-label="Tarjeta ${i + 1} de ${total}. Pulsa para voltear.">
          <span class="flash-inner">
            <span class="flash-face flash-front" id="flashFront">
              <span class="flash-tag">Pregunta ${isMarked(card) ? "· marcada" : ""}</span>
              <span class="flash-text">${fmt(card.f)}</span>
              <span class="flash-hint">Clic o Espacio para ver la respuesta</span>
            </span>
            <span class="flash-face flash-back" id="flashBack" aria-hidden="true">
              <span class="flash-tag">Respuesta</span>
              <span class="flash-text">${fmt(card.r)}</span>
              <span class="flash-src">Fuente: ${esc(card.fte)}</span>
            </span>
          </span>
        </button>
        <div class="flash-actions">
          <button type="button" class="btn ghost" id="againBtn">${icon("refresh")}Otra vez</button>
          <button type="button" class="btn soft" id="flipBtn">Voltear</button>
          <button type="button" class="btn green" id="knownBtn">${icon("check")}La sabía</button>
        </div>
        <p class="flash-keys small muted">Atajos: <b>Espacio</b> voltea · <b>←</b> otra vez · <b>→</b> la sabía</p>`;

      $("#flashCount").textContent = `Tarjeta ${i + 1} de ${total}`;
      $("#flashBar").style.width = pctOf(i, total) + "%";
      $("#flashKnown").textContent = `${known} sabidas`;

      $("#flashCard").addEventListener("click", () => setFlipped(!flipped));
      $("#flipBtn").addEventListener("click", () => setFlipped(!flipped));
      $("#againBtn").addEventListener("click", () => advance(false));
      $("#knownBtn").addEventListener("click", () => advance(true));
    }

    function setFlipped(v) {
      flipped = v;
      const card = $("#flashCard");
      card.classList.toggle("flipped", v);
      card.setAttribute("aria-pressed", String(v));
      $("#flashBack").setAttribute("aria-hidden", String(!v));
      $("#flashFront").setAttribute("aria-hidden", String(v));
      $("#flipBtn").textContent = v ? "Ver pregunta" : "Voltear";
    }

    function advance(ok) {
      const card = cards[i];
      if (ok) {
        known += 1;
        S.flash.starred = S.flash.starred.filter((k) => k !== card.key);
      } else {
        again += 1;
        if (!S.flash.starred.includes(card.key)) S.flash.starred.push(card.key);
      }
      save();
      if (i === total - 1) return finish();
      i += 1;
      paint();
    }

    function finish() {
      const retrySlug = deck.id === "__repaso" ? "repaso" : deck.id;
      area.innerHTML = flashSummary(deck, cards, known, again);
      $("#flashRetry").addEventListener("click", () => renderDeck(retrySlug, false));
      const back = $("#flashStarred");
      if (back) back.addEventListener("click", () => renderDeck(retrySlug, true));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    paint();
  }

  /* ---------------- pronóstico ---------------- */

  function meter(p) {
    return `<div class="meter"><div class="bar bar-thin"><i style="width:${p}%"></i></div><span>${p}%</span></div>`;
  }

  const FORECAST = [
    {
      t: "El concepto de política criminal (Borja Jiménez)",
      p: 99,
      why: "Es el primer tema de la lista oficial y el artículo define el concepto desde Roxin. Los nombres y frases que más se pueden preguntar son Roxin (Berlín, 1970), von Liszt (Carta Magna del delincuente) y Feuerbach (métodos represivos).",
      tags: "Roxin · Von Liszt · Feuerbach · Dogmática"
    },
    {
      t: "Capítulo I del Tratado: orígenes científicos",
      p: 96,
      why: "Es el único PDF del Tratado y tiene una estructura muy preguntable: etapa estática, época dinámica, fase humanitaria, dirección biológica y corriente racionalista. Kleinschrod, Henke y Holtzendorff son los nombres clave.",
      tags: "Etapas · Beccaria · Kleinschrod · Henke"
    },
    {
      t: "Política criminal en un Estado de derecho",
      p: 96,
      why: "El artículo de García Aquino da definición, principios, misión inmediata y mediata, víctima, funcionalismo y seguridad. Es el tema con más material para preguntas de definición y de caso.",
      tags: "Garantías · Mínima intervención · Víctima · Seguridad"
    },
    {
      t: "Estrategias de reacción social: las cuatro D",
      p: 94,
      why: "Hay dos fuentes: las diapositivas de la profesora y el Capítulo IV de Reyes Echandía. La tabla de despenalización, desprisionalización, desjudicialización y descriminalización es el candidato más claro a pregunta de caso.",
      tags: "Despenalización · Desprisionalización · Desjudicialización · Descriminalización"
    },
    {
      t: "Políticas de prevención del delito",
      p: 90,
      why: "Las diapositivas traen cinco fuentes, el riesgo de las demandas sociales, la evidencia, la criminología ambiental y programas con cifras. El material de prevención genérica complementa con Tokio 1970 y factores.",
      tags: "Fuentes · Evidencia · Espacios · Programas"
    }
  ];

  function renderPronostico() {
    setCrumb("Pronóstico");
    setActiveNav("pronostico");
    content.innerHTML = `
      <span class="eyebrow">Antes del examen</span>
      <h1 style="margin:12px 0 8px">Pronóstico del Parcial 2</h1>
      <p class="lead">Los cinco temas que indicó la profesora, ordenados por peso y por formato de pregunta. No es una filtración: es una guía para no estudiar de más ni de menos.</p>

      <div class="callout warn" style="margin-top:22px">
        ${icon("target")}
        <div><strong>La lista oficial es esta:</strong> concepto de política criminal, Capítulo I del Tratado, política criminal en un Estado de derecho, estrategias de reacción social (las cuatro D) y políticas de prevención. Las salidas alternas y los modelos siguen en el sitio, pero <strong>no son parte de esta lista</strong>.</div>
      </div>

      <div class="section-head">
        <h2>${icon("target")}Qué es más probable</h2>
        <p>Ordenado por la lista de la profesora y el peso de cada PDF.</p>
      </div>

      ${FORECAST.map((f, i) => `
        <article class="card forecast">
          <div class="forecast-head">
            <span class="n">${i + 1}</span>
            <div style="flex:1">
              <h3>${esc(f.t)}</h3>
              <p>${esc(f.tags)}</p>
            </div>
            <span class="pill ${f.p >= 85 ? "orange" : f.p >= 70 ? "green" : ""}">${f.p >= 85 ? "Muy probable" : f.p >= 70 ? "Probable" : "Repaso"}</span>
          </div>
          <p class="why">${esc(f.why)}</p>
          ${meter(f.p)}
        </article>`).join("")}

      <div class="section-head">
        <h2>${icon("quiz")}Cómo suele preguntar</h2>
        <p>Con estos cinco temas, el formato más probable es definición + autor + caso.</p>
      </div>
      <div class="card" style="padding:20px">
        <div class="prose">
          <ul>
            <li><strong>Definición con autor.</strong> “¿Cómo define Roxin la política criminal?”, “¿quién dijo que es el conjunto de métodos represivos?”.</li>
            <li><strong>Distinguir autores.</strong> Roxin no es von Liszt, y Feuerbach no es Beccaria. La trampa es mezclar la frase con el autor.</li>
            <li><strong>Distinguir las cuatro D en un caso.</strong> “Una falta pasa a multa administrativa… ¿qué es?”. La respuesta se juega en si cambia la sanción, la cárcel, el juicio o la definición del delito.</li>
            <li><strong>Límites del Estado de derecho.</strong> “¿Puede castigarse una conducta que todavía no pone en riesgo un bien jurídico?”. La respuesta es no: mínima intervención y lesividad.</li>
            <li><strong>Historia del Capítulo I.</strong> Etapas, Beccaria, Kleinschrod, Henke y Holtzendorff; no definiciones.</li>
            <li><strong>Prevención con evidencia y cifras.</strong> Las cinco fuentes, el 9 de 10, Costa Rica 11.5→5.2, Barrio Seguro 40 % y Ecuador −14 %/−9 %.</li>
          </ul>
        </div>
      </div>

      <div class="section-head">
        <h2>${icon("list")}La tabla que hay que dominar</h2>
        <p>Las cuatro D se confunden todo el tiempo.</p>
      </div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Estrategia</th><th>Qué toca</th><th>Qué pasa con la conducta</th><th>Ejemplo</th></tr></thead>
          <tbody>
            <tr><td><strong>Despenalización</strong></td><td>La sanción penal</td><td>Sigue regulada, pero pasa a otra jurisdicción (civil, comercial o administrativa).</td><td>Una falta antes castigada con cárcel pasa a multa administrativa.</td></tr>
            <tr><td><strong>Desprisionalización</strong></td><td>La ejecución de la pena</td><td>Sigue siendo delito, pero se cumple fuera de la cárcel.</td><td>Trabajo comunitario o libertad vigilada.</td></tr>
            <tr><td><strong>Desjudicialización</strong></td><td>El proceso</td><td>El conflicto se resuelve sin juicio formal.</td><td>Mediación o conciliación.</td></tr>
            <tr><td><strong>Descriminalización</strong></td><td>La definición del delito</td><td>La conducta deja de ser delito; pasa a ser lícita o indiferente.</td><td>Derogación de un tipo penal.</td></tr>
          </tbody>
        </table>
      </div>

      <div class="section-head">
        <h2>${icon("spark")}Datos para memorizar</h2>
        <p>Números que aparecen en los documentos.</p>
      </div>
      <div class="chips">
        <span class="chip"><b>Roxin</b> · Berlín 1970</span>
        <span class="chip"><b>Beccaria</b> · 1764</span>
        <span class="chip"><b>Kleinschrod</b> · medios del legislador</span>
        <span class="chip"><b>4 D</b> · 4 filtros</span>
        <span class="chip"><b>9 de 10</b> · programas previos a 1970</span>
        <span class="chip"><b>11.5 → 5.2</b> · Costa Rica 2011-2019</span>
        <span class="chip"><b>40 %</b> · Barrio Seguro</span>
        <span class="chip"><b>−14 % / −9 %</b> · Vive Seguro, Ecuador</span>
        <span class="chip"><b>Tokio 1970</b> · IV Congreso ONU</span>
      </div>

      <div class="section-head">
        <h2>${icon("check")}Plan de repaso en 4 pasos</h2>
        <p>Si tienes poco tiempo, sigue este orden.</p>
      </div>
      <div class="grid grid-2">
        <a class="quick-item" href="#/lectura/roxin">
          <span class="quick-ico orange">${icon("read")}</span>
          <span><strong>1. Concepto</strong><span>Roxin, von Liszt, Feuerbach y la dogmática.</span></span>
          ${icon("arrow", "arrow")}
        </a>
        <a class="quick-item" href="#/lectura/origenes">
          <span class="quick-ico">${icon("book")}</span>
          <span><strong>2. Capítulo I</strong><span>Las cinco etapas y los nombres.</span></span>
          ${icon("arrow", "arrow")}
        </a>
        <a class="quick-item" href="#/quiz/cuatro-d">
          <span class="quick-ico orange">${icon("quiz")}</span>
          <span><strong>3. Cuatro D</strong><span>Casos para distinguir sanción, cárcel, juicio y delito.</span></span>
          ${icon("arrow", "arrow")}
        </a>
        <a class="quick-item" href="#/parcial/parcial-2-oficial">
          <span class="quick-ico">${icon("exam")}</span>
          <span><strong>4. Simulacro oficial</strong><span>20 preguntas de los cinco temas, con tiempo.</span></span>
          ${icon("arrow", "arrow")}
        </a>
      </div>

      <div class="callout" style="margin-top:22px">
        ${icon("book")}
        <div><strong>Esto es una guía, no una filtración.</strong> Sale de la lista de temas que dio la profesora y de los PDF de la carpeta. No reemplaza leerlos ni asistir a clase. Si ella dio una indicación nueva, esa manda.</div>
      </div>
    `;
    updateChrome();
  }

  /* ---------------- progreso ---------------- */

  function renderProgreso() {
    setCrumb("Mi progreso");
    setActiveNav("progreso");
    const st = stats();

    const rows = [
      { label: "Quizzes", value: st.qDone, total: QUIZZES.length },
      { label: "Verdadero / falso", value: st.vfBest, total: VF.length },
      { label: "Selección múltiple", value: st.mcBest, total: MC.length },
      { label: "Parciales", value: st.pDone, total: PARCIALES.length },
      { label: "Lectura guiada", value: st.read, total: LECTURA.length },
      { label: "Flashcards", value: st.flashLearned, total: st.flashTotal }
    ];

    content.innerHTML = `
      <span class="eyebrow">Tu recorrido</span>
      <h1 style="margin:12px 0 8px">Mi progreso</h1>
      <p class="lead">Se guarda solo en este navegador. Si cambias de equipo o borras los datos del sitio, empiezas de nuevo.</p>

      <div class="card" style="padding:24px;margin-top:24px">
        <div class="q-meta"><span>Avance general</span><strong>${st.overall}%</strong></div>
        <div class="bar"><i style="width:${st.overall}%"></i></div>
        <div style="margin-top:20px">
          ${rows.map((r) => `
            <div class="prog-row">
              <span>${esc(r.label)}</span>
              <div class="bar"><i style="width:${pctOf(r.value, r.total)}%"></i></div>
              <strong>${r.value}/${r.total}</strong>
            </div>`).join("")}
        </div>
        <p class="small muted" style="margin-top:14px">El avance general pondera quizzes, verdadero/falso, selección múltiple y parciales. La lectura y las flashcards son apoyo: no cambian ese porcentaje.</p>
      </div>

      <div class="section-head">
        <h2>${icon("exam")}Tus parciales</h2>
        <p>Mejor resultado de cada simulacro.</p>
      </div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Parcial</th><th>Tema</th><th>Mejor</th><th>Último</th><th>Intentos</th></tr></thead>
          <tbody>
            ${PARCIALES.map((p) => {
              const r = S.parciales[p.id];
              const total = p.preguntas.length;
              return `<tr>
                <td><a href="#/parcial/${p.slug}" style="text-decoration:none"><strong>${esc(p.titulo)}</strong></a></td>
                <td>${esc(p.tema)}</td>
                <td>${r ? r.best + "/" + total : "-"}</td>
                <td>${r ? r.last + "/" + total + " · " + fmtDate(r.at) : "-"}</td>
                <td>${r ? r.attempts || 1 : 0}</td>
              </tr>`;
            }).join("")}
          </tbody>
        </table>
      </div>

      <div class="section-head">
        <h2>${icon("refresh")}Reiniciar</h2>
        <p>Borra el progreso guardado en este navegador.</p>
      </div>
      <div class="card" style="padding:20px;display:flex;gap:14px;align-items:center;justify-content:space-between;flex-wrap:wrap">
        <p class="small muted" style="max-width:52ch">Úsalo solo si quieres empezar de cero. No se borran los archivos del sitio ni tus documentos.</p>
        <button class="btn danger" id="resetBtn">Borrar mi progreso</button>
      </div>
    `;

    let armed = false;
    const btn = $("#resetBtn");
    btn.addEventListener("click", () => {
      if (!armed) {
        armed = true;
        btn.textContent = "¿Seguro? Pulsa otra vez";
        setTimeout(() => {
          armed = false;
          btn.textContent = "Borrar mi progreso";
        }, 4000);
        return;
      }
      S = JSON.parse(JSON.stringify(DEFAULT_STATE));
      S.theme = document.documentElement.getAttribute("data-theme");
      save();
      renderProgreso();
    });
  }

  /* ---------------- fuentes ---------------- */

  function renderFuentes() {
    setCrumb("Fuentes");
    setActiveNav("fuentes");
    content.innerHTML = `
      <span class="eyebrow">Trazabilidad</span>
      <h1 style="margin:12px 0 8px">Fuentes</h1>
      <p class="lead">Todo el contenido del sitio sale de estos documentos, que están en la misma carpeta. Las citas cortas indican de dónde se tomó cada idea.</p>
      <div class="grid" style="margin-top:24px;gap:10px">
        ${FUENTES.map((f, i) => `
          <div class="card source">
            <span class="source-num">${String(i + 1).padStart(2, "0")}</span>
            <div><strong>${esc(f.n)}</strong><span>${esc(f.d)}</span></div>
          </div>`).join("")}
      </div>
      <div class="callout" style="margin-top:22px">
        ${icon("shield")}
        <div><strong>Sin contenido externo.</strong> No se agregaron teorías, cifras ni leyes que no aparezcan en la carpeta. Cuando un dato no estaba en los documentos, se omitió en lugar de rellenarlo.</div>
      </div>
      <div class="section-head"><h2>${icon("book")}Cómo se armó</h2></div>
      <div class="card" style="padding:20px">
        <div class="prose">
          <p>Primero se leyó la planificación para ubicar los tres ejes y el tipo de evaluación. Después se extrajeron los temas de los materiales de clase y de los artículos. Con eso se construyeron los quizzes, los enunciados de verdadero/falso, la selección múltiple y los diez simulacros.</p>
          <p>Las preguntas de caso siguen el formato que aparece en el taller: una situación concreta y una decisión que obliga a distinguir conceptos. Las explicaciones repiten la idea del documento, no una interpretación nueva.</p>
        </div>
      </div>
    `;
  }

  /* ---------------- 404 ---------------- */

  function render404() {
    setCrumb("No encontrado");
    setActiveNav("");
    content.innerHTML = `
      <section class="card result">
        <span class="eyebrow">404</span>
        <h2 style="margin-top:14px">Esa página no existe</h2>
        <p class="lead">Puede que el enlace esté mal escrito o que el contenido se haya movido.</p>
        <div class="result-actions">
          <a class="btn primary" href="#/">${icon("home")}Volver al inicio</a>
          <a class="btn ghost" href="#/quizzes">Ir a los quizzes</a>
        </div>
      </section>`;
  }

  /* ---------------- copiar enlace ---------------- */

  function copyLink(btn) {
    const url = location.href;
    const done = () => {
      const original = btn.innerHTML;
      btn.textContent = "Enlace copiado";
      setTimeout(() => { btn.innerHTML = original; }, 1800);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(done).catch(() => fallbackCopy(url, done));
    } else {
      fallbackCopy(url, done);
    }
  }

  function fallbackCopy(text, done) {
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      done();
    } catch (_) {
      /* silencio: el enlace sigue visible en la barra */
    }
  }

  /* ---------------- router ---------------- */

  function parse() {
    const raw = location.hash || "#/";
    if (!raw.startsWith("#/")) return null;
    let path = raw.slice(1);
    if (path.length > 1 && path.endsWith("/")) path = path.slice(0, -1);
    return path;
  }

  function route() {
    if (cleanup) {
      cleanup();
      cleanup = null;
    }
    closeMenu();
    window.scrollTo({ top: 0, behavior: "auto" });
    const path = parse();
    if (path === null) return;

    const parts = path.split("/").filter(Boolean);

    if (parts.length === 0) return renderHome();
    if (parts[0] === "parcial2" && parts.length === 1) return renderParcial2();
    if (parts[0] === "lectura" && parts.length === 1) return renderLectura();
    if (parts[0] === "lectura" && parts[1]) return renderCapitulo(parts[1]);
    if (parts[0] === "flashcards" && parts.length === 1) return renderFlashcards();
    if (parts[0] === "flashcards" && parts[1]) return renderDeck(parts[1], false);
    if (parts[0] === "quizzes" && parts.length === 1) return renderQuizList();
    if (parts[0] === "quiz" && parts[1]) return renderPracticeQuiz(parts[1]);
    if (parts[0] === "verdadero-falso" && parts.length === 1) return runSet("vf");
    if (parts[0] === "seleccion" && parts.length === 1) return runSet("mc");
    if (parts[0] === "parciales" && parts.length === 1) return renderParcialList();
    if (parts[0] === "parcial" && parts[1]) return renderParcial(parts[1]);
    if (parts[0] === "pronostico" && parts.length === 1) return renderPronostico();
    if (parts[0] === "progreso" && parts.length === 1) return renderProgreso();
    if (parts[0] === "fuentes" && parts.length === 1) return renderFuentes();
    return render404();
  }

  /* ---------------- eventos globales ---------------- */

  function bindChrome() {
    $(".skip-link").addEventListener("click", (e) => {
      e.preventDefault();
      content.focus();
      content.scrollIntoView({ block: "start" });
    });
    $("#menuBtn").addEventListener("click", () => {
      $("#sidebar").classList.contains("open") ? closeMenu() : openMenu();
    });
    $("#sidebarClose").addEventListener("click", closeMenu);
    $("#scrim").addEventListener("click", closeMenu);
    $("#sidebar").addEventListener("click", (e) => {
      if (e.target.closest(".nav-link")) closeMenu();
    });
    $$("[data-theme-set]").forEach((b) => {
      b.addEventListener("click", () => setTheme(b.dataset.themeSet, true));
    });
    $("#quickTheme").addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      setTheme(current === "claro" ? "oscuro" : "claro", true);
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
      if (e.target.matches("input, textarea, select")) return;
      const flash = $("#flashCard");
      if (flash) {
        if (e.code === "Space" || e.key === " ") {
          e.preventDefault();
          flash.click();
        } else if (e.key === "ArrowLeft") {
          e.preventDefault();
          const b = $("#againBtn");
          if (b) b.click();
        } else if (e.key === "ArrowRight") {
          e.preventDefault();
          const b = $("#knownBtn");
          if (b) b.click();
        }
        return;
      }
      const card = $("#practiceCard");
      if (!card) return;
      const opts = $$("[data-opt]", card);
      const next = $("#nextBtn");
      const key = e.key.toLowerCase();
      if (/^[1-4]$/.test(key) && opts[Number(key) - 1] && !opts[Number(key) - 1].disabled) {
        opts[Number(key) - 1].click();
      } else if (/^[a-d]$/.test(key)) {
        const i = "abcd".indexOf(key);
        if (opts[i] && !opts[i].disabled) opts[i].click();
      } else if ((e.key === "Enter" || e.key === "ArrowRight") && next && !next.disabled) {
        e.preventDefault();
        next.click();
      }
    });
    window.addEventListener("hashchange", route);
  }

  /* ---------------- arranque ---------------- */

  initTheme();
  applyLecturaSize();
  bindChrome();
  updateChrome();
  route();
})();
