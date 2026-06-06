/* ===== Services page content ===== */
(function () {
  function run() {
    const I = window.JIRON_ICONS;
    const DET = [
      { id: "auto", icon: "auto", name: "Auto Insurance", es: "Seguro de Auto",
        lead: "From your daily commute to weekend road trips, we'll find coverage that protects you, your passengers, and your wallet.",
        eslead: "Desde tu trayecto diario hasta los viajes de fin de semana, encontramos cobertura que te protege a ti, a tus pasajeros y a tu bolsillo.",
        pts: [["Liability & full coverage","Responsabilidad y cobertura total"],["Uninsured motorist","Conductor sin seguro"],["Roadside assistance","Asistencia en carretera"],["New & classic vehicles","Autos nuevos y clásicos"],["SR-22 filings","Trámites SR-22"],["Multi-car discounts","Descuentos multi-auto"]],
        fact: ["55+","Driver discounts","Descuentos 55+"] },
      { id: "home", icon: "home", name: "Home Insurance", es: "Seguro de Hogar",
        lead: "Your home is your biggest investment. We protect the structure, your belongings, and your peace of mind against the unexpected.",
        eslead: "Tu hogar es tu mayor inversión. Protegemos la estructura, tus pertenencias y tu tranquilidad ante lo inesperado.",
        pts: [["Dwelling & structure","Vivienda y estructura"],["Personal property","Propiedad personal"],["Liability protection","Protección de responsabilidad"],["Fire, theft & storm","Incendio, robo y tormenta"],["Mobile home coverage","Casas móviles"],["Bundle & save","Combina y ahorra"]],
        fact: ["Bundle","Home + Auto savings","Ahorra hogar + auto"] },
      { id: "life", icon: "life", name: "Life Insurance", es: "Seguro de Vida",
        lead: "Give the people who depend on you lasting security. We'll help you choose the right policy for your family and budget.",
        eslead: "Da seguridad duradera a quienes dependen de ti. Te ayudamos a elegir la póliza correcta para tu familia y presupuesto.",
        pts: [["Term life","Vida a término"],["Whole life","Vida entera"],["Final expense","Gastos finales"],["Family coverage","Cobertura familiar"],["No-exam options","Opciones sin examen"],["Living benefits","Beneficios en vida"]],
        fact: ["1-on-1","Personal guidance","Asesoría personal"] },
      { id: "business", icon: "business", name: "Business Insurance", es: "Seguro de Negocio",
        lead: "Keep your business running no matter what. We tailor protection to your industry, your team, and your day-to-day risks.",
        eslead: "Mantén tu negocio funcionando pase lo que pase. Adaptamos la protección a tu industria, tu equipo y tus riesgos diarios.",
        pts: [["General liability","Responsabilidad general"],["Commercial property","Propiedad comercial"],["Workers' comp","Compensación laboral"],["Commercial auto","Auto comercial"],["Professional liability","Responsabilidad profesional"],["BOP packages","Paquetes BOP"]],
        fact: ["15+","Carriers compared","Aseguradoras comparadas"] },
      { id: "renters", icon: "renters", name: "Renters Insurance", es: "Seguro de Inquilinos",
        lead: "Affordable protection for everything inside your four walls — often for less than the cost of a streaming bundle.",
        eslead: "Protección accesible para todo lo que hay dentro de tu hogar — a menudo por menos que un servicio de streaming.",
        pts: [["Personal belongings","Pertenencias personales"],["Liability coverage","Cobertura de responsabilidad"],["Loss of use","Pérdida de uso"],["Theft protection","Protección contra robo"],["Student-friendly","Ideal para estudiantes"],["Fast setup","Activación rápida"]],
        fact: ["Low $","Monthly premiums","Primas mensuales"] },
      { id: "boat", icon: "boat", name: "Boat Insurance", es: "Seguro de Embarcación",
        lead: "Hit Lake Mead with confidence. We cover your boat, your gear, and your time on the water.",
        eslead: "Disfruta el Lago Mead con confianza. Cubrimos tu embarcación, tu equipo y tu tiempo en el agua.",
        pts: [["Hull & motor","Casco y motor"],["On-water liability","Responsabilidad en el agua"],["Trailer coverage","Cobertura de remolque"],["Personal effects","Efectos personales"],["Towing & assistance","Remolque y asistencia"],["Seasonal options","Opciones por temporada"]],
        fact: ["Lake","Mead & beyond","Mead y más"] },
    ];

    // quicknav
    document.getElementById("svc-quicknav").innerHTML = DET.map(d =>
      `<a class="pill-trust" href="#${d.id}"><span style="width:20px;height:20px;display:grid;place-items:center;color:var(--accent-deep)">${I[d.icon]}</span><span data-es="${d.es}">${d.name.replace(' Insurance','')}</span></a>`).join("");

    function jumpToId(id) {
      var target = document.getElementById(id);
      if (!target) return;
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 104, behavior: "auto" });
    }

    // Instant jump for quicknav pills (bypass global smooth-scroll, which feels abrupt).
    document.getElementById("svc-quicknav").addEventListener("click", function (e) {
      var a = e.target.closest("a[href^='#']");
      if (!a) return;
      var id = a.getAttribute("href").slice(1);
      if (!document.getElementById(id)) return;
      e.preventDefault();
      jumpToId(id);
      if (history.replaceState) history.replaceState(null, "", "#" + id);
      else location.hash = id;
    });

    // details
    document.getElementById("svc-details").innerHTML = DET.map(d => `
      <section class="svc-detail anchor" id="${d.id}">
        <div class="wrap svc-detail-grid">
          <div class="svc-detail-copy reveal">
            <div class="sd-ic">${I[d.icon]}</div>
            <h2 data-es="${d.es}">${d.name}</h2>
            <p class="sd-lead" data-es="${esc(d.eslead)}">${esc(d.lead)}</p>
            <ul class="sd-list">
              ${d.pts.map(p => `<li><span class="ck">${I.check}</span><span data-es="${esc(p[1])}">${esc(p[0])}</span></li>`).join("")}
            </ul>
            <a class="btn btn-primary" href="quote.html#${d.id}" data-es="Cotizar ${d.es}">Quote ${d.name.replace(' Insurance','')}</a>
          </div>
          <div class="svc-detail-media reveal" data-delay="120">
            <img class="sd-photo" src="assets/img/svc-${d.id}.png" alt="${esc(d.name)}" loading="lazy" />
            <div class="sd-fact"><strong>${d.fact[0]}</strong><span class="sf-div"></span><span data-es="${esc(d.fact[2])}">${esc(d.fact[1])}</span></div>
          </div>
        </div>
      </section>`).join("");

    if (window.JIRON_LANG) window.jironSetLang(window.JIRON_LANG);
    const io = new IntersectionObserver((es) => es.forEach(en => { if (en.isIntersecting){ en.target.classList.add("in"); io.unobserve(en.target); }}), { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
    document.querySelectorAll(".reveal:not(.in)").forEach(el => { if (el.dataset.delay) el.style.animationDelay = el.dataset.delay + "ms"; io.observe(el); });

    // If arriving with a #service hash, jump to that service. Re-run after fonts load
    // (web fonts reflow the page, which would otherwise leave the jump short).
    function jumpToHash() {
      if (!location.hash || location.hash.length < 2) return;
      jumpToId(location.hash.slice(1));
    }
    requestAnimationFrame(jumpToHash);
    setTimeout(jumpToHash, 300);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { setTimeout(jumpToHash, 30); });
  }
  function esc(s){ return String(s).replace(/"/g,'&quot;'); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", () => setTimeout(run, 0));
  else setTimeout(run, 0);
})();
