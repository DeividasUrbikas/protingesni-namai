/* ProtingesniNamai.lt: savarankiskai veikiantis demonstracinis valdymas.
   Niekada nesijungia prie lankytojo ar savininko tikros Home Assistant sistemos. */
(() => {
  "use strict";
  const root = document.getElementById("pn-ha-native");
  if (!root) return;
  const state = {
    living: true, kitchen: false, bedroom: true, brightness: 72,
    target: 22, actual: 21.1, blinds: 100, vent: true,
    charger: false, security: false, pv: 4.6, battery: 78, power: 1.8
  };
  const initial = { ...state };
  let activeTab = "namai";
  const select = (selector) => root.querySelector(selector);
  const number = (n, decimals = 0) => Number(n).toLocaleString("lt-LT", {
    minimumFractionDigits: decimals, maximumFractionDigits: decimals
  });
  const note = (message) => {
    const text = select("[data-ha-feedback]");
    if (text) text.textContent = message;
  };
  function render() {
    root.querySelectorAll("[data-ha-view]").forEach(button => {
      const selected = button.dataset.haView === activeTab;
      button.classList.toggle("is-active", selected);
      button.setAttribute("aria-selected", String(selected));
      button.tabIndex = selected ? 0 : -1;
    });
    root.querySelectorAll("[data-ha-panel]").forEach(panel => {
      const selected = panel.dataset.haPanel === activeTab;
      panel.hidden = !selected;
    });
    root.querySelectorAll("[data-ha-toggle]").forEach(button => {
      const key = button.dataset.haToggle;
      const on = Boolean(state[key]);
      button.setAttribute("aria-pressed", String(on));
      button.classList.toggle("is-on", on);
      const status = button.querySelector("[data-ha-status]");
      if (status) status.textContent = on ? "Įjungta" : "Išjungta";
    });
    root.querySelectorAll("[data-ha-slider]").forEach(slider => {
      const key = slider.dataset.haSlider;
      if (document.activeElement !== slider) slider.value = String(state[key]);
      const output = select('[data-ha-value="' + key + '"]');
      if (output) output.textContent = number(state[key], key === "pv" ? 1 : (key === "target" ? 1 : 0)) +
        (key === "target" ? " °C" : key === "pv" ? " kW" : " %");
    });
    const counter = select("[data-ha-on-count]");
    if (counter) counter.textContent = String([state.living,state.kitchen,state.bedroom,state.vent].filter(Boolean).length);
    const temperature = select("[data-ha-temp-main]");
    if (temperature) temperature.textContent = number(state.target,1) + "°";
    const current = select("[data-ha-temp-current]");
    if (current) current.textContent = number(state.actual,1) + " °C";
    const ring = select("[data-ha-thermo-ring]");
    if (ring) ring.style.setProperty("--ha-heat-angle", (Math.round((state.target - 16) / 12 * 280) + 40) + "deg");
    const blinds = select("[data-ha-blinds-text]");
    if (blinds) blinds.textContent = state.blinds === 0 ? "Uždarytos" : state.blinds === 100 ? "Atidarytos" : "Atidaryta " + state.blinds + " %";
    const flow = select("[data-ha-flow]");
    if (flow) flow.textContent = state.charger ? "Saulė → namai + automobilis" : "Saulė → namai + baterija";
    const metrics = { pv: state.pv, battery: state.battery, power: state.power };
    Object.keys(metrics).forEach(key => {
      const label = select('[data-ha-metric="' + key + '"]');
      if (label) label.textContent = number(metrics[key], key === "battery" ? 0 : 1) + (key === "battery" ? " %" : " kW");
      const fill = select('[data-ha-meter="' + key + '"]');
      if (fill) fill.style.width = Math.max(2,Math.min(100,
        key === "battery" ? state.battery : key === "pv" ? state.pv * 10 : state.power * 10)) + "%";
    });
    const mode = select("[data-ha-alarm-status]");
    if (mode) mode.textContent = state.security ? "Apsauga įjungta" : "Apsauga išjungta";
    const ev = select("[data-ha-ev-status]");
    if (ev) ev.textContent = state.charger ? "Įkraunama" : "Pristabdyta";
    const allLights = select("[data-ha-all-lights]");
    if (allLights) allLights.textContent = [state.living,state.kitchen,state.bedroom].filter(Boolean).length + " / 3";
  }
  root.addEventListener("click", event => {
    const tab = event.target.closest("[data-ha-view]");
    if (tab) {
      activeTab = tab.dataset.haView;
      render();
      return;
    }
    const button = event.target.closest("[data-ha-toggle]");
    if (button) {
      const key = button.dataset.haToggle;
      state[key] = !state[key];
      note(button.dataset.haName + (state[key] ? ": įjungta" : ": išjungta") + ". Tai demonstracinis veiksmas.");
      render();
      return;
    }
    const adjust = event.target.closest("[data-ha-adjust]");
    if (adjust) {
      state.target = Math.min(28,Math.max(16,state.target + Number(adjust.dataset.haAdjust)));
      note("Nustatyta šildymo temperatūra: " + number(state.target,1) + " °C.");
      render();
      return;
    }
    const scene = event.target.closest("[data-ha-scene]");
    if (scene) {
      const which = scene.dataset.haScene;
      if (which === "home") Object.assign(state,{living:true,kitchen:true,bedroom:false,brightness:75,blinds:100,target:22,security:false});
      if (which === "away") Object.assign(state,{living:false,kitchen:false,bedroom:false,blinds:0,target:18,security:true,charger:false});
      if (which === "night") Object.assign(state,{living:false,kitchen:false,bedroom:true,brightness:18,blinds:0,target:20.5,security:true});
      if (which === "sunny") Object.assign(state,{pv:8.1,charger:true,battery:84});
      note("Scenarijus „" + scene.textContent.trim() + "“ pritaikytas demonstraciniams įrenginiams.");
      render();
      return;
    }
    if (event.target.closest("[data-ha-reset]")) {
      Object.assign(state, initial);
      activeTab = "namai";
      note("Atstatyti pradiniai demonstraciniai nustatymai.");
      render();
    }
  });
  root.addEventListener("input", event => {
    const slider = event.target.closest("[data-ha-slider]");
    if (!slider) return;
    const key = slider.dataset.haSlider;
    state[key] = Number(slider.value);
    note("Pakeista: " + (slider.dataset.haName || key) + " – " + slider.value + (key === "target" ? " °C" : key === "pv" ? " kW" : " %") + ".");
    render();
  });
  root.addEventListener("keydown", event => {
    const selected = event.target.closest("[data-ha-view]");
    if (!selected || !["ArrowLeft","ArrowRight"].includes(event.key)) return;
    const tabs = [...root.querySelectorAll("[data-ha-view]")];
    const n = tabs.indexOf(selected);
    event.preventDefault();
    const next = tabs[(n + (event.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length];
    next.focus();
    next.click();
  });
  render();
})();
