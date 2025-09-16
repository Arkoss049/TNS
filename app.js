/* ============================================================================
  Jours View — "Qui paie quoi à quel jour"
  ----------------------------------------------------------------------------
  Objet : composant JS autonome qui ajoute une vue "jours" pour visualiser
          qui paie quoi, jour par jour, avec une limite par défaut à 120 jours
          extensible à 180 / 365 via un slider.
  
  Intégration minimale (HTML) :
    <div id="jours-view"></div>
    <script src="app_jours_view.js"></script>
  
  Ou en JS :
    JoursView.init(document.getElementById('mon-conteneur'), {
      defaultVisibleDays: 120,           // 120 par défaut
      maxDays: 365,                      // extensible jusqu'à 365
      lanes: [
        { label:"CPAM", color:"#4F46E5", segments:[ {start:4, end:90, note:"IJ maladie CPAM (J4–J90)"} ] },
        { label:"Caisse Pro", color:"#06B6D4", segments:[ {start:91, end:365, note:"Régime pro / caisse (exemple)"} ] },
        { label:"Contrat Prévoyance", color:"#22C55E", segments:[ {start:1, end:365, note:"Complément (exemple)"} ] }
      ]
    });
  
  Données :
  - Un 'lane' = une ligne/piste (un payeur / une source).
  - Un 'segment' = un intervalle fermé [start, end] en jours calendaires (J1 = jour de début d'arrêt/accident).
  - 'note' est facultatif. 'amount' est optionnel si vous voulez afficher un montant indicatif.
  
  Remarque : Aucune hypothèse chiffrée n'est imposée ici. Le composant rend
  simplement ce que vous lui donnez. Alimentez les segments depuis vos règles
  métier (CPAM, carence, caisse, contrat, employeur, etc.).
============================================================================= */
(function() {
  const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
  const el = (tag, cls, html) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  };

  const defaultConfig = {
    defaultVisibleDays: 120,
    maxDays: 365,
    lanes: [
      { label:"CPAM", color:"#4F46E5", segments:[ {start:4, end:90, note:"IJ CPAM J4–J90 (exemple)"} ] },
      { label:"Caisse", color:"#06B6D4", segments:[ {start:91, end:365, note:"Caisse pro (exemple)"} ] },
      { label:"Prévoyance", color:"#22C55E", segments:[ {start:30, end:365, note:"Complément (exemple)"} ] }
    ]
  };

  // Convertit un jour (1..maxDays) en position en %, selon visibleDays actuel
  function dayToLeft(day, visibleDays) {
    return ((day - 1) / visibleDays) * 100;
  }
  function spanToWidth(start, end, visibleDays) {
    const s = clamp(start, 1, visibleDays);
    const e = clamp(end, 1, visibleDays);
    if (e < 1 || s > visibleDays || e < s) return 0;
    return ((e - s + 1) / visibleDays) * 100;
  }

  // Calcule qui paie un jour donné
  function whoPaysAtDay(lanes, day) {
    const active = [];
    for (const lane of lanes) {
      for (const seg of (lane.segments || [])) {
        if (day >= seg.start && day <= seg.end) {
          active.push({
            payer: lane.label,
            color: lane.color,
            note: seg.note || "",
            amount: seg.amount
          });
        }
      }
    }
    return active;
  }

  // Fabrique la grille de fond (repères de jours)
  function buildGridTicks(visibleDays) {
    const ticks = [];
    const majorEvery = 30;   // repère fort tous les ~30 j
    const minorEvery = 10;   // repère léger tous les 10 j
    for (let d = 1; d <= visibleDays; d++) {
      let type = "";
      if (d === 1) type = "major";
      else if (d % majorEvery === 0) type = "major";
      else if (d % minorEvery === 0) type = "minor";
      if (type) ticks.push({ day: d, type });
    }
    return ticks;
  }

  // Rendu principal
  function render(container, state) {
    container.innerHTML = "";

    const wrap = el("div", "jv-wrap");
    const header = el("div", "jv-header");
    const title = el("div", "jv-title", 'Vue <b>"jours"</b> — Qui paie quoi à quel jour');
    const controls = el("div", "jv-controls");

    const sliderLabel = el("label", "jv-slider-label", "Plage visible : ");
    const sliderValue = el("span", "jv-slider-value", `${state.visibleDays} j`);
    const slider = el("input", "jv-slider");
    slider.type = "range";
    slider.min = 30;
    slider.max = state.maxDays;
    slider.step = 1;
    slider.value = state.visibleDays;

    const btn120 = el("button", "jv-btn", "120 j");
    const btn180 = el("button", "jv-btn", "180 j");
    const btn365 = el("button", "jv-btn", "365 j");

    controls.append(sliderLabel, slider, sliderValue, btn120, btn180, btn365);

    const legend = el("div", "jv-legend");
    for (const lane of state.lanes) {
      const item = el("div", "jv-legend-item");
      const dot = el("span", "jv-dot");
      dot.style.background = lane.color || "#888";
      const lab = el("span", "jv-legend-label", lane.label);
      item.append(dot, lab);
      legend.append(item);
    }

    const board = el("div", "jv-board");
    const grid = el("div", "jv-grid");
    grid.style.setProperty("--visible-days", state.visibleDays);

    // Repères
    const ticks = buildGridTicks(state.visibleDays);
    for (const t of ticks) {
      const tick = el("div", `jv-tick ${t.type}`);
      tick.style.left = dayToLeft(t.day, state.visibleDays) + "%";
      if (t.type === "major") {
        const lab = el("div", "jv-tick-label", `J${t.day}`);
        tick.append(lab);
      }
      grid.append(tick);
    }

    // Lignes / pistes
    const lanesWrap = el("div", "jv-lanes");
    for (const lane of state.lanes) {
      const laneRow = el("div", "jv-lane");
      const laneLabel = el("div", "jv-lane-label", lane.label);
      const laneBar = el("div", "jv-lane-bar");

      // Segments colorés
      for (const seg of (lane.segments || [])) {
        const left = dayToLeft(seg.start, state.visibleDays);
        const width = spanToWidth(seg.start, seg.end, state.visibleDays);
        if (width <= 0) continue;
        const segEl = el("div", "jv-seg");
        segEl.style.left = left + "%";
        segEl.style.width = width + "%";
        segEl.style.background = lane.color || "#888";
        segEl.title = `${lane.label} — J${seg.start} à J${seg.end}${seg.note ? " • " + seg.note : ""}`;
        laneBar.append(segEl);
      }

      laneRow.append(laneLabel, laneBar);
      lanesWrap.append(laneRow);
    }

    // Pointeur jour + tooltip
    const cursor = el("div", "jv-cursor");
    const tooltip = el("div", "jv-tooltip");
    board.append(grid, lanesWrap, cursor, tooltip);

    // Footer explicatif
    const expl = el("div", "jv-expl",
      "Astuce : survolez la zone pour voir, à un jour donné, qui paie (liste détaillée). " +
      "Utilisez les raccourcis 120 / 180 / 365 jours pour adapter votre discours au rendez‑vous."
    );

    header.append(title, controls, legend);
    wrap.append(header, board, expl);
    container.append(wrap);

    // Interactions
    const setVisible = (v) => {
      state.visibleDays = clamp(v, 30, state.maxDays);
      render(container, state); // re-render simple et robuste
    };

    slider.addEventListener("input", () => {
      sliderValue.textContent = `${slider.value} j`;
    });
    slider.addEventListener("change", () => setVisible(parseInt(slider.value, 10)));
    btn120.addEventListener("click", () => setVisible(120));
    btn180.addEventListener("click", () => setVisible(180));
    btn365.addEventListener("click", () => setVisible(365));

    // Tracking du curseur pour tooltip
    const lanesRectTarget = board;
    lanesRectTarget.addEventListener("mousemove", (e) => {
      const rect = board.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const ratio = clamp(x / rect.width, 0, 1);
      let day = Math.round(ratio * (state.visibleDays - 1)) + 1;
      day = clamp(day, 1, state.visibleDays);

      cursor.style.left = dayToLeft(day, state.visibleDays) + "%";

      const active = whoPaysAtDay(state.lanes, day);
      if (active.length === 0) {
        tooltip.style.display = "none";
        return;
      }
      tooltip.style.display = "block";
      tooltip.innerHTML = `<div class="jv-tip-title">Jour J${day}</div>` +
        active.map(a => {
          const amount = (a.amount !== undefined && a.amount !== null) ?
            ` — <b>${a.amount}</b>` : "";
          const note = a.note ? `<div class="jv-note">${a.note}</div>` : "";
          return `<div class="jv-tip-row">
                    <span class="jv-swatch" style="background:${a.color}"></span>
                    <span class="jv-payer">${a.payer}</span>${amount}
                  </div>${note}`;
        }).join("");
      // Position du tooltip
      const tipRect = tooltip.getBoundingClientRect();
      let left = x + 12;
      if (left + tipRect.width > rect.width) left = rect.width - tipRect.width - 8;
      let top = 6;
      tooltip.style.transform = `translate(${left}px, ${top}px)`;
    });
    lanesRectTarget.addEventListener("mouseleave", () => {
      tooltip.style.display = "none";
    });
  }

  // Styles (injection encapsulée)
  function injectStylesOnce() {
    if (document.getElementById("jv-styles")) return;
    const css = `
    .jv-wrap{font-family:Inter,system-ui,Segoe UI,Roboto,Arial,sans-serif;color:#0f172a}
    .jv-header{display:grid;gap:12px;margin-bottom:8px}
    .jv-title{font-weight:800;font-size:18px}
    .jv-controls{display:flex;align-items:center;gap:10px;flex-wrap:wrap}
    .jv-slider{width:260px}
    .jv-btn{padding:6px 10px;border:1px solid #cbd5e1;border-radius:10px;background:#fff;cursor:pointer}
    .jv-btn:hover{background:#f8fafc}
    .jv-slider-label{font-weight:600}
    .jv-slider-value{font-weight:700;min-width:48px;display:inline-block;text-align:right}
    .jv-legend{display:flex;flex-wrap:wrap;gap:14px;margin-top:4px}
    .jv-legend-item{display:flex;align-items:center;gap:8px;font-size:13px;color:#334155}
    .jv-dot{width:12px;height:12px;border-radius:999px;display:inline-block;border:1px solid rgba(0,0,0,.1)}
    .jv-board{position:relative;border:1px solid #e2e8f0;border-radius:14px;overflow:hidden;background:#ffffff}
    .jv-grid{position:absolute;inset:0}
    .jv-tick{position:absolute;top:0;bottom:0;width:0;border-left:1px dashed #e2e8f0}
    .jv-tick.major{border-left-style:solid;border-left-color:#94a3b8}
    .jv-tick-label{position:absolute;top:6px;left:4px;transform:translateX(-50%);font-size:12px;color:#475569;background:#ffffff;padding:2px 6px;border-radius:6px;border:1px solid #e2e8f0}
    .jv-lanes{position:relative;display:flex;flex-direction:column;gap:10px;padding:42px 12px 16px 12px}
    .jv-lane{display:grid;grid-template-columns:130px 1fr;align-items:center;gap:12px}
    .jv-lane-label{justify-self:end;font-weight:700;font-size:13px;color:#1f2937}
    .jv-lane-bar{position:relative;height:36px;border-radius:10px;background:linear-gradient(180deg,#f8fafc,#ffffff);border:1px solid #e2e8f0;overflow:hidden}
    .jv-seg{position:absolute;top:0;bottom:0;border-right:1px solid rgba(255,255,255,.6)}
    .jv-cursor{position:absolute;top:0;bottom:0;width:0;border-left:2px dashed #334155;pointer-events:none}
    .jv-tooltip{position:absolute;display:none;min-width:220px;max-width:320px;background:#0f172a;color:#e2e8f0;border:1px solid #1f2937;border-radius:10px;padding:10px 12px;box-shadow:0 8px 24px rgba(2,6,23,.25)}
    .jv-tip-title{font-weight:800;margin-bottom:6px}
    .jv-tip-row{display:flex;align-items:center;gap:8px;margin:4px 0}
    .jv-swatch{width:10px;height:10px;border-radius:50%}
    .jv-note{font-size:12px;color:#cbd5e1;margin:0 0 6px 18px}
    .jv-expl{margin-top:10px;font-size:12px;color:#475569}
    `;
    const style = document.createElement("style");
    style.id = "jv-styles";
    style.textContent = css;
    document.head.appendChild(style);
  }

  function init(container, userConfig) {
    if (!container) throw new Error("JoursView: conteneur introuvable");
    injectStylesOnce();
    const cfg = Object.assign({}, defaultConfig, userConfig || {});
    const state = {
      visibleDays: clamp(cfg.defaultVisibleDays || 120, 30, cfg.maxDays || 365),
      maxDays: cfg.maxDays || 365,
      lanes: Array.isArray(cfg.lanes) ? cfg.lanes : defaultConfig.lanes
    };
    render(container, state);
    return { setVisibleDays(v){ render(container, Object.assign({}, state, { visibleDays: clamp(v,30,state.maxDays) })); } };
  }

  // Expose en global
  window.JoursView = { init };

  // Auto-init si #jours-view existe au chargement
  function autoInit() {
    const c = document.getElementById("jours-view");
    if (!c) return;
    // Exemple de configuration par défaut (modifiable depuis l'extérieur en appelant init soi-même)
    init(c, {
      defaultVisibleDays: 120,
      maxDays: 365,
      lanes: [
        { label:"CPAM", color:"#4F46E5", segments:[ {start:4, end:90, note:"IJ CPAM (exemple)"} ] },
        { label:"Caisse Pro", color:"#06B6D4", segments:[ {start:91, end:365, note:"Caisse professionnelle (exemple)"} ] },
        { label:"Contrat Prévoyance", color:"#22C55E", segments:[ {start:30, end:365, note:"Complément prévoyance (exemple)"} ] }
      ]
    });
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", autoInit);
  } else {
    autoInit();
  }
})();
