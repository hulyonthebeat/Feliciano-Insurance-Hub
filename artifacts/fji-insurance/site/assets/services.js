/* ===== Services overview page — cards linking to each service subpage ===== */
(function () {
  function run() {
    const I = window.JIRON_ICONS, S = window.JIRON_SERVICES || [];
    const grid = document.getElementById("svc-grid");
    if (grid) grid.innerHTML = S.map((s, i) => `
      <a class="svc-card reveal" href="${s.file}" ${i ? 'data-delay="' + (i * 70) + '"' : ''}>
        <span class="svc-ic">${I[s.icon]}</span>
        <h3 data-es="Seguro de ${s.es}">${s.name} Insurance</h3>
        <p data-es="${s.esblurb.replace(/"/g, '&quot;')}">${s.blurb}</p>
        <span class="svc-more" data-es="Saber más">Learn more ${I.arrow}</span>
      </a>`).join("");

    if (window.JIRON_LANG) window.jironSetLang(window.JIRON_LANG);
    const io = new IntersectionObserver((es) => es.forEach(en => { if (en.isIntersecting){ en.target.classList.add("in"); io.unobserve(en.target); }}), { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
    document.querySelectorAll(".reveal:not(.in)").forEach(el => { if (el.dataset.delay) el.style.animationDelay = el.dataset.delay + "ms"; io.observe(el); });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", () => setTimeout(run, 0));
  else setTimeout(run, 0);
})();
