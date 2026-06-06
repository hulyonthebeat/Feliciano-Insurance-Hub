/* ===== Home page content rendering ===== */
(function () {
  function run() {
    const I = window.JIRON_ICONS, S = window.JIRON_SERVICES;
    const star5 = '<span class="stars">' + I.star.repeat(5) + '</span>';
    const stars = (n) => I.star.repeat(n);

    // hero / section stars
    ["hero-stars","why-stars","rev-stars"].forEach(id => { const e=document.getElementById(id); if(e) e.innerHTML = stars(5); });
    const hb = document.getElementById("hb-shield"); if (hb) hb.innerHTML = I.shield;

    // services grid
    const grid = document.getElementById("svc-grid");
    if (grid) grid.innerHTML = S.map((s,i) => `
      <a class="svc-card reveal" href="${s.file}" ${i? 'data-delay="'+(i*70)+'"':''}>
        <span class="svc-ic">${I[s.icon]}</span>
        <h3 data-es="Seguro de ${s.es}">${s.name} Insurance</h3>
        <p data-es="${s.esblurb.replace(/"/g,'&quot;')}">${s.blurb}</p>
        <span class="svc-more" data-es="Saber más">Learn more ${I.arrow}</span>
      </a>`).join("");

    // why-list icons
    document.querySelectorAll("[data-ic]").forEach(el => { const k = el.dataset.ic; if (I[k]) el.innerHTML = I[k]; });

    // reviews (from scraped Yelp)
    const reviews = [
      { t_en: "I had the absolute best experience getting my policy with this team. They really took the time to inform me on the entire policy and coverages. I finally understood every part — fantastic team, 10/10 would recommend.",
        t_es: "Tuve la mejor experiencia obteniendo mi póliza con este equipo. Se tomaron el tiempo de explicarme toda la póliza y las coberturas. Por fin entendí cada parte — equipo fantástico, 10/10 lo recomiendo.",
        n: "Lana R.", a: "L" },
      { t_en: "Really solid experience. Everyone was friendly, down-to-earth, and walked me through my options without making it overwhelming. You can tell they care about getting you the right coverage, not just a sale.",
        t_es: "Una experiencia excelente. Todos fueron amables y me explicaron mis opciones sin abrumarme. Se nota que les importa darte la cobertura correcta, no solo una venta.",
        n: "Maalik S.", a: "M" },
      { t_en: "Muy buen servicio. Engelbert fue excelente y muy útil. Comparó varias compañías y encontró la cobertura adecuada para mi presupuesto. Lo recomendaría a él y a la Agencia Jiron — ¡y todos hablan español!",
        t_es: "Muy buen servicio. Engelbert fue excelente y muy útil. Comparó varias compañías y encontró la cobertura adecuada para mi presupuesto. Lo recomendaría a él y a la Agencia Jiron — ¡y todos hablan español!",
        n: "Maria G.", a: "M" },
    ];
    const rg = document.getElementById("rev-grid");
    if (rg) rg.innerHTML = reviews.map((r,i) => `
      <div class="rev-card reveal" ${i? 'data-delay="'+(i*90)+'"':''}>
        <span class="stars">${stars(5)}</span>
        <p class="rev-text" data-es="${r.t_es.replace(/"/g,'&quot;')}">${r.t_en}</p>
        <div class="rev-by"><span class="rev-av">${r.a}</span><div><strong>${r.n}</strong><small data-es="Reseña verificada de Yelp">Verified Yelp review</small></div></div>
      </div>`).join("");

    // blog preview — 3 most recent real posts from blog-data.js
    const esc = s => String(s == null ? "" : s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;");
    const posts = (window.JIRON_POSTS || []).slice(0, 3);
    const bg = document.getElementById("blog-grid");
    if (bg) bg.innerHTML = posts.map((p,i) => `
      <a class="blog-card reveal" href="post.html?slug=${encodeURIComponent(p.slug)}" ${i? 'data-delay="'+(i*90)+'"':''}>
        <div class="blog-thumb has-img" style="background-image:url('${p.img}')"><span class="cat-tag" style="position:absolute;top:14px;left:14px;background:rgba(255,255,255,.92)" data-es="${esc(p.cat[1])}">${esc(p.cat[0])}</span></div>
        <div class="blog-body">
          <span class="blog-date">${esc(p.date)}</span>
          <h3>${esc(p.title)}</h3>
          <p>${esc(p.excerpt)}…</p>
          <span class="svc-more" data-es="Leer más">Read more ${I.arrow}</span>
        </div>
      </a>`).join("");

    // re-apply language to freshly injected nodes + re-observe reveals
    if (window.JIRON_LANG) window.jironSetLang(window.JIRON_LANG);
    const io = new IntersectionObserver((es) => es.forEach(en => { if (en.isIntersecting){ en.target.classList.add("in"); io.unobserve(en.target); }}), { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    document.querySelectorAll(".reveal:not(.in)").forEach(el => { if (el.dataset.delay) el.style.animationDelay = el.dataset.delay + "ms"; io.observe(el); });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", () => setTimeout(run, 0));
  else setTimeout(run, 0);
})();
