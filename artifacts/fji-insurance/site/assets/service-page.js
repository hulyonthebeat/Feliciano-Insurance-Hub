/* ===== Individual service subpage renderer ===== */
(function () {
  function run() {
    const I = window.JIRON_ICONS;
    const DET = window.JIRON_SERVICE_DETAILS || [];
    const SV = window.JIRON_SERVICES || [];
    const id = document.body.getAttribute("data-service");
    const d = DET.find(x => x.id === id);
    if (!d) return;
    const shortName = d.name.replace(" Insurance", "");
    const sv = SV.find(x => x.id === id) || {};

    document.title = d.name + " — Feliciano Jiron Insurance Agency";

    const hero = document.getElementById("svc-hero");
    if (hero) hero.innerHTML = `
      <div class="ph-crumb"><a href="index.html" data-es="Inicio">Home</a><span class="sep">/</span><a href="services.html" data-es="Servicios">Services</a><span class="sep">/</span><span data-es="${esc(sv.es || d.es)}">${esc(shortName)}</span></div>
      <span class="eyebrow" data-es="Cobertura">Coverage</span>
      <h1 data-es="${esc(d.es)}">${esc(d.name)}</h1>
      <p class="ph-sub" data-es="${esc(d.eslead)}">${esc(d.lead)}</p>
      <div class="ph-cta">
        <a class="btn btn-on-navy btn-lg" href="quote.html#${d.id}" data-es="Cotizar ${esc(d.es)}">Quote ${esc(shortName)}</a>
        <a class="btn btn-outline-navy btn-lg" href="tel:7025220079" data-es="Llama (702) 522-0079">Call (702) 522-0079</a>
      </div>`;

    const det = document.getElementById("svc-detail");
    if (det) det.innerHTML = `
      <section class="svc-detail">
        <div class="wrap svc-detail-grid">
          <div class="svc-detail-copy reveal">
            <div class="sd-ic">${I[d.icon]}</div>
            <h2 data-es="Qué cubre">What's covered</h2>
            <ul class="sd-list">
              ${d.pts.map(p => `<li><span class="ck">${I.check}</span><span data-es="${esc(p[1])}">${esc(p[0])}</span></li>`).join("")}
            </ul>
            <a class="btn btn-primary" href="quote.html#${d.id}" data-es="Cotizar ${esc(d.es)}">Quote ${esc(shortName)}</a>
          </div>
          <div class="svc-detail-media reveal" data-delay="120">
            <img class="sd-photo" src="assets/img/svc-${d.id}.png" alt="${esc(d.name)}" />
            <div class="sd-fact"><strong>${esc(d.fact[0])}</strong><span class="sf-div"></span><span data-es="${esc(d.fact[2])}">${esc(d.fact[1])}</span></div>
          </div>
        </div>
      </section>
      ${(d.sections && d.sections.length) ? `
      <section class="svc-info">
        <div class="wrap svc-info-wrap">
          ${d.sections.map(sec => `
            <article class="si-block reveal">
              <h2 data-es="${esc(sec.h[1])}">${sec.h[0]}</h2>
              ${(sec.p || []).map(p => `<p data-es="${esc(p[1])}">${p[0]}</p>`).join("")}
              ${(sec.list && sec.list.length) ? `<ul class="si-list">${sec.list.map(li => `<li data-es="${esc(li[1])}">${li[0]}</li>`).join("")}</ul>` : ""}
            </article>`).join("")}
        </div>
      </section>` : ""}`;

    const others = document.getElementById("svc-others");
    if (others) others.innerHTML = SV.filter(s => s.id !== id).map(s =>
      `<a class="pill-trust" href="${s.file}"><span style="width:20px;height:20px;display:grid;place-items:center;color:var(--accent-deep)">${I[s.icon]}</span><span data-es="${esc(s.es)} Seguro">${s.name} Insurance</span></a>`).join("");

    if (window.JIRON_LANG) window.jironSetLang(window.JIRON_LANG);
    const io = new IntersectionObserver((es) => es.forEach(en => { if (en.isIntersecting){ en.target.classList.add("in"); io.unobserve(en.target); }}), { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
    document.querySelectorAll(".reveal:not(.in)").forEach(el => { if (el.dataset.delay) el.style.animationDelay = el.dataset.delay + "ms"; io.observe(el); });
  }
  function esc(s){ return String(s).replace(/"/g,'&quot;'); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", () => setTimeout(run, 0));
  else setTimeout(run, 0);
})();
