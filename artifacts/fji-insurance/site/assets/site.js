/* ============================================================
   Feliciano Jiron Insurance Agency — Site engine
   Header/footer injection · i18n (EN/ES) · theme · interactions
   ============================================================ */
(function () {
  "use strict";

  /* ---------------- Icons ---------------- */
  const I = {
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    chev: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>',
    // services
    life: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
    auto: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l1.5-4.5A2 2 0 0 1 8.4 7h7.2a2 2 0 0 1 1.9 1.5L19 13M5 13h14m-14 0a2 2 0 0 0-2 2v2a1 1 0 0 0 1 1h1m14-5a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1h-1M6 18v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1m6 0v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1M7 16h.01M17 16h.01"/></svg>',
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V20a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V9.5"/></svg>',
    business: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-3M9 9v.01M9 13v.01M9 17v.01"/></svg>',
    renters: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z"/><path d="M9 21v-6h6v6"/><circle cx="12" cy="11" r="1"/></svg>',
    boat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 14h18l-2.5 5.5a2 2 0 0 1-1.8 1.5H7.3a2 2 0 0 1-1.8-1.5L3 14Z"/><path d="M5 14V7l7-4 7 4v7M12 3v11"/></svg>',
    notary: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M5 3h9l5 5v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"/><path d="M9 13h6M9 17h4"/></svg>',
    fb: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z"/></svg>',
    ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="3.6"/><circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none"/></svg>',
    li: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0 0-5ZM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.76-2.05 4.02 0 4.76 2.65 4.76 6.1V21H22h-.37v-5.2c0-1.24-.02-2.84-1.73-2.84-1.73 0-2 1.35-2 2.75V21H14V9Z"/></svg>',
    quote: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"/></svg>',
  };
  window.JIRON_ICONS = I;

  /* ---------------- Data ---------------- */
  const LOGO = "https://primary.jwwb.nl/public/i/u/u/temp-fraahvbakcyiefuwlxvq/image-high-rv5qeq.png?enable-io=true&enable=upscale&height=92";
  const PHONE = "(702) 522-0079";
  const PHONE_RAW = "7025220079";
  const ADDR = "2585 S. Nellis Blvd., Las Vegas, NV 89121";
  const MAPS = "https://www.google.com/maps/place/2585+S+Nellis+Blvd,+Las+Vegas,+NV+89121";

  const SERVICES = [
    { id: "auto", icon: "auto", name: "Auto", es: "Auto", file: "services/auto", blurb: "Coverage that keeps you moving — from liability to full coverage.", esblurb: "Cobertura que te mantiene en movimiento — de responsabilidad a cobertura total." },
    { id: "home", icon: "home", name: "Home", es: "Hogar", file: "services/home", blurb: "Protect your biggest investment against the unexpected.", esblurb: "Protege tu mayor inversión contra lo inesperado." },
    { id: "life", icon: "life", name: "Life", es: "Vida", file: "services/life", blurb: "Peace of mind for the people who depend on you.", esblurb: "Tranquilidad para las personas que dependen de ti." },
    { id: "business", icon: "business", name: "Business", es: "Negocio", file: "services/business", blurb: "Tailored protection so your business keeps running.", esblurb: "Protección a medida para que tu negocio siga funcionando." },
    { id: "renters", icon: "renters", name: "Renters", es: "Inquilinos", file: "services/renters", blurb: "Affordable coverage for everything inside your four walls.", esblurb: "Cobertura accesible para todo dentro de tu hogar." },
    { id: "boat", icon: "boat", name: "Boat", es: "Embarcación", file: "services/boat", blurb: "Hit the lake with confidence and on-water protection.", esblurb: "Disfruta del lago con confianza y protección en el agua." },
  ];
  window.JIRON_SERVICES = SERVICES;
  window.JIRON_INFO = { LOGO, PHONE, PHONE_RAW, ADDR, MAPS, I };

  /* ---------------- Header ---------------- */
  function buildHeader(page) {
    const sv = SERVICES.map(s => `<a href="${s.file}"><span class="di">${I[s.icon]}</span><span><strong data-es="${s.es} Seguro">${s.name} Insurance</strong><small data-es="${esc(s.esblurb)}">${esc(s.blurb)}</small></span></a>`).join("");
    const link = (href, label, es, key) => `<a class="nav-link${page===key?' active':''}" href="${href}" data-es="${es}">${label}</a>`;
    return `
    <div class="topbar">
      <div class="wrap">
        <div class="tb-left">
          <a class="tb-addr" href="${MAPS}" target="_blank" rel="noopener">${I.pin}<span>${ADDR}</span></a>
          <span class="tb-hours" style="display:inline-flex;gap:7px;align-items:center;opacity:.85">${I.clock}<span data-es="Lun–Vie 9am–5pm">Mon–Fri 9am–5pm</span></span>
        </div>
        <div class="tb-right">
          <a href="tel:${PHONE_RAW}">${I.phone}<span>${PHONE}</span></a>
        </div>
      </div>
    </div>
    <div class="navrow wrap">
      <a class="brand" href="index.html" aria-label="Feliciano Jiron Insurance Agency">
        <img class="blogo" src="assets/img/logo-emblem.png?v=4" alt="" />
        <span class="btext"><strong><span class="fn">Feliciano</span> <span class="jn">Jiron</span></strong><span data-es="Agencia de Seguros">Insurance Agency</span></span>
      </a>
      <nav class="nav">
        ${link("index.html","Home","Inicio","home")}
        <div class="nav-item">
          <a class="nav-link${page==='services'?' active':''}" href="services.html" data-es="Servicios">Services <span class="chev">${I.chev}</span></a>
          <div class="dropdown">${sv}</div>
        </div>
        ${link("about.html","About","Nosotros","about")}
        ${link("blog.html","Blog","Blog","blog")}
        ${link("social-media.html","Social Media","Redes Sociales","social")}
        ${link("contact.html","Contact","Contacto","contact")}
      </nav>
      <div class="nav-actions">
        <div class="lang-toggle" role="group" aria-label="Language">
          <button data-lang="en">EN</button>
          <button data-lang="es">ES</button>
        </div>
        <a class="btn btn-primary" href="quote.html" data-es="Cotización Gratis">${I.shield}Free Quote</a>
        <button class="burger" aria-label="Menu"><span></span><span></span><span></span></button>
      </div>
    </div>`;
  }

  function buildMobileNav() {
    const sv = SERVICES.map(s => `<a class="sub" href="${s.file}" data-es="${s.es} Seguro">${s.name} Insurance</a>`).join("");
    return `<div class="scrim"></div><div class="panel">
      <div style="display:flex"><button class="mclose" aria-label="Close">✕</button></div>
      <a href="index.html" data-es="Inicio">Home</a>
      <a href="services.html" data-es="Servicios">Services</a>
      ${sv}
      <a href="about.html" data-es="Nosotros">About Us</a>
      <a href="blog.html" data-es="Blog">Blog</a>
      <a href="social-media.html" data-es="Redes Sociales">Social Media</a>
      <a href="contact.html" data-es="Contacto">Contact</a>
      <a class="btn btn-primary" style="margin-top:18px;width:100%" href="quote.html" data-es="Cotización Gratis">Free Quote</a>
      <a class="btn btn-ghost" style="margin-top:10px;width:100%" href="tel:${PHONE_RAW}">${I.phone} ${PHONE}</a>
    </div>`;
  }

  /* ---------------- Footer ---------------- */
  function buildFooter() {
    const sv = SERVICES.map(s => `<li><a href="${s.file}" data-es="${s.es} Seguro">${s.name} Insurance</a></li>`).join("");
    return `
    <div class="wrap">
      <div class="footer-grid">
        <div>
          <div class="fbrand"><img src="assets/img/logo.png" alt="Feliciano Jiron Insurance Agency" /></div>
          <p data-es="Soluciones de seguros excepcionales y un servicio al cliente sobresaliente, adaptado a las necesidades de cada cliente. Orgullosamente bilingüe y al servicio de Las Vegas.">Exceptional insurance solutions and outstanding customer service, tailored to each client's needs. Proudly bilingual and serving the Las Vegas community.</p>
          <div class="fsocial">
            <a href="https://www.facebook.com/profile.php?id=61567834461772" target="_blank" rel="noopener" aria-label="Facebook">${I.fb}</a>
            <a href="https://www.instagram.com/fjironagency/" target="_blank" rel="noopener" aria-label="Instagram">${I.ig}</a>
            <a href="https://www.linkedin.com/in/jiron-insurance-agency-1a8b77369/" target="_blank" rel="noopener" aria-label="LinkedIn">${I.li}</a>
          </div>
        </div>
        <div>
          <h4 data-es="Seguros">Insurance</h4>
          <ul>${sv}</ul>
        </div>
        <div>
          <h4 data-es="Agencia">Agency</h4>
          <ul>
            <li><a href="about.html" data-es="Nosotros">About Us</a></li>
            <li><a href="blog.html" data-es="Blog">Blog</a></li>
            <li><a href="social-media.html" data-es="Redes Sociales">Social Media</a></li>
            <li><a href="quote.html" data-es="Cotización Gratis">Free Quote</a></li>
            <li><a href="contact.html" data-es="Contacto">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 data-es="Comunícate">Get in Touch</h4>
          <div class="fcontact-row">${I.pin}<a href="${MAPS}" target="_blank" rel="noopener">${ADDR}</a></div>
          <div class="fcontact-row">${I.phone}<a href="tel:${PHONE_RAW}">${PHONE}</a></div>
          <div class="fcontact-row">${I.clock}<span data-es="Lun–Vie: 9am–5pm<br>Sáb–Dom: Cerrado">Mon–Fri: 9am–5pm<br>Sat–Sun: Closed</span></div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2025–2026 Feliciano Jiron Insurance Agency</span>
        <span data-es="No compartimos información móvil con terceros para marketing.">We do not share mobile information with third parties for marketing.</span>
        <span class="powered-by">Powered by 511 Tech Labs</span>
      </div>
    </div>`;
  }

  function esc(s){ return String(s).replace(/"/g,'&quot;'); }

  /* ---------------- i18n ---------------- */
  function applyLang(lang) {
    document.documentElement.setAttribute("lang", lang === "es" ? "es" : "en");
    document.querySelectorAll("[data-es]").forEach(el => {
      if (el.dataset.en === undefined) el.dataset.en = el.innerHTML;
      el.innerHTML = lang === "es" ? el.dataset.es : el.dataset.en;
    });
    document.querySelectorAll("[data-es-ph]").forEach(el => {
      if (el.dataset.enPh === undefined) el.dataset.enPh = el.getAttribute("placeholder") || "";
      el.setAttribute("placeholder", lang === "es" ? el.dataset.esPh : el.dataset.enPh);
    });
    document.querySelectorAll(".lang-toggle button").forEach(b => b.classList.toggle("on", b.dataset.lang === lang));
    try { localStorage.setItem("jiron_lang", lang); } catch(e){}
    window.JIRON_LANG = lang;
    document.dispatchEvent(new CustomEvent("jironlang", { detail: lang }));
  }
  window.jironSetLang = applyLang;

  /* ---------------- Theme ---------------- */
  function applyTheme(theme) {
    const root = document.documentElement;
    // Brief crossfade between palettes — only after the initial load.
    if (applyTheme._init) {
      root.classList.add("theme-anim");
      clearTimeout(applyTheme._t);
      applyTheme._t = setTimeout(() => root.classList.remove("theme-anim"), 500);
    }
    applyTheme._init = true;
    if (theme && theme !== "brand") root.setAttribute("data-theme", theme);
    else root.removeAttribute("data-theme");
    try { localStorage.setItem("jiron_theme", theme || "brand"); } catch(e){}
  }
  window.jironSetTheme = applyTheme;

  /* ---------------- Tweaks panel ---------------- */
  const THEMES = [
    { id: "brand", name: "Blue & Red",  c: ["#0c2747", "#1f8ae0", "#e23b26"] },
    { id: "gold",  name: "Navy & Gold", c: ["#0d2741", "#c39a3f"] },
    { id: "teal",  name: "Deep Teal",   c: ["#0b2a3d", "#1f9c92"] },
    { id: "green", name: "Forest",      c: ["#143524", "#2f8a55"] },
  ];
  function buildTweaks() {
    let theme = "brand"; try { theme = localStorage.getItem("jiron_theme") || "brand"; } catch(e){}
    let lang = window.JIRON_LANG || "en";
    const panel = document.createElement("div");
    panel.className = "tweaks-panel";
    panel.id = "tweaks-panel";
    panel.innerHTML = `
      <div class="tweaks-head"><strong>Tweaks</strong><button id="tw-close" aria-label="Close">✕</button></div>
      <div class="tweaks-sec">
        <label>Color theme</label>
        <div class="tw-swatches">
          ${THEMES.map(t => `<button class="tw-swatch${t.id===theme?' on':''}" data-theme="${t.id}">
            <span class="tw-chip">${t.c.map(col => `<i style="background:${col}"></i>`).join("")}</span>
            <span>${t.name}</span></button>`).join("")}
        </div>
      </div>
      <div class="tweaks-sec">
        <label>Language</label>
        <div class="tw-seg">
          <button data-twlang="en"${lang==="en"?' class="on"':''}>English</button>
          <button data-twlang="es"${lang==="es"?' class="on"':''}>Español</button>
        </div>
      </div>`;
    document.body.appendChild(panel);

    panel.querySelectorAll(".tw-swatch").forEach(b => b.addEventListener("click", () => {
      panel.querySelectorAll(".tw-swatch").forEach(x => x.classList.remove("on"));
      b.classList.add("on");
      applyTheme(b.dataset.theme);
    }));
    panel.querySelectorAll("[data-twlang]").forEach(b => b.addEventListener("click", () => {
      panel.querySelectorAll("[data-twlang]").forEach(x => x.classList.remove("on"));
      b.classList.add("on");
      applyLang(b.dataset.twlang);
    }));
    document.getElementById("tw-close").addEventListener("click", () => {
      panel.classList.remove("show");
      try { window.parent.postMessage({ type: "__edit_mode_dismissed" }, "*"); } catch(e){}
    });
    // keep language seg in sync if changed from header
    document.addEventListener("jironlang", (e) => {
      panel.querySelectorAll("[data-twlang]").forEach(x => x.classList.toggle("on", x.dataset.twlang === e.detail));
    });

    // host protocol — register listener BEFORE announcing availability
    window.addEventListener("message", (ev) => {
      const t = ev.data && ev.data.type;
      if (t === "__activate_edit_mode") panel.classList.add("show");
      else if (t === "__deactivate_edit_mode") panel.classList.remove("show");
    });
    try { window.parent.postMessage({ type: "__edit_mode_available" }, "*"); } catch(e){}
  }

  /* ---------------- Init ---------------- */
  function init() {
    const page = document.body.getAttribute("data-page") || "";
    const header = document.getElementById("site-header");
    if (header) header.innerHTML = buildHeader(page);
    const footer = document.getElementById("site-footer");
    if (footer) footer.innerHTML = buildFooter();
    const mob = document.getElementById("mobile-nav");
    if (mob) mob.innerHTML = buildMobileNav();

    // theme first (no flash handled by inline head script)
    let theme = "brand"; try { theme = localStorage.getItem("jiron_theme") || "brand"; } catch(e){}
    applyTheme(theme);

    // language
    let lang = "en"; try { lang = localStorage.getItem("jiron_lang") || "en"; } catch(e){}
    applyLang(lang);

    // lang buttons
    document.querySelectorAll(".lang-toggle button").forEach(b => {
      b.addEventListener("click", () => applyLang(b.dataset.lang));
    });

    // scroll shadow + reading-progress bar
    const hdr = header;
    let ticking = false;
    const render = () => {
      if (hdr) hdr.classList.toggle("scrolled", window.scrollY > 8);
      ticking = false;
    };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(render); } };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    render();

    // mobile menu
    const burger = document.querySelector(".burger");
    if (burger && mob) {
      const open = () => mob.classList.add("open");
      const close = () => mob.classList.remove("open");
      burger.addEventListener("click", open);
      mob.addEventListener("click", e => { if (e.target.classList.contains("scrim") || e.target.closest(".mclose") || e.target.tagName === "A") close(); });
    }

    // reveal on scroll
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    // Auto-stagger reveal siblings (e.g. cards in a grid) for a cascading feel.
    const groupIndex = new Map();
    document.querySelectorAll(".reveal").forEach((el) => {
      if (el.dataset.delay) {
        el.style.animationDelay = el.dataset.delay + "ms";
      } else {
        const parent = el.parentElement;
        const i = groupIndex.get(parent) || 0;
        if (i > 0) el.style.animationDelay = Math.min(i * 70, 420) + "ms";
        groupIndex.set(parent, i + 1);
      }
      io.observe(el);
    });
    // Failsafe: reveal anything already in view (above the fold) so first paint is never blank;
    // below-fold elements still animate in on scroll via the observer.
    setTimeout(() => document.querySelectorAll(".reveal:not(.in)").forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.95) el.classList.add("in");
    }), 500);

    // External links: open in a new tab, but if the environment blocks popups
    // (e.g. sandboxed preview) fall back to same-tab navigation so clicks always work.
    document.addEventListener("click", (e) => {
      if (!e.target || !e.target.closest) return;
      const a = e.target.closest('a[target="_blank"]');
      if (!a) return;
      const href = a.getAttribute("href");
      if (!href || href.charAt(0) === "#" || href.toLowerCase().indexOf("javascript:") === 0) return;
      e.preventDefault();
      let w = null;
      try { w = window.open(href, "_blank", "noopener"); } catch (err) { w = null; }
      if (!w) window.location.href = href;
    });

    // Page navigation crossfade: fade the current page out, then navigate.
    const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduceMotion) {
      document.addEventListener("click", (e) => {
        if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        if (!e.target || !e.target.closest) return;
        const a = e.target.closest("a");
        if (!a) return;
        if (a.target === "_blank" || a.hasAttribute("download")) return;
        const href = a.getAttribute("href");
        if (!href || href.charAt(0) === "#") return;
        const proto = (a.protocol || "").toLowerCase();
        if (proto === "mailto:" || proto === "tel:" || proto === "javascript:") return;
        let url;
        try { url = new URL(a.href, window.location.href); } catch (err) { return; }
        if (url.origin !== window.location.origin) return;
        // Same-page (hash/query only) — let the browser handle it without a fade.
        if (url.pathname === window.location.pathname && url.hash) return;
        // No-op navigation to the exact same URL — skip the fade/reload entirely.
        if (url.href === window.location.href) return;
        e.preventDefault();
        document.documentElement.classList.add("is-leaving");
        // Wait the full fade-out (CSS opacity .26s) plus a small buffer before navigating.
        setTimeout(() => { window.location.href = a.href; }, 280);
      });
    }
    // Restore visibility when returning via the back/forward (bfcache) so a
    // page restored mid-fade is never left blank.
    window.addEventListener("pageshow", (e) => {
      document.documentElement.classList.remove("is-leaving");
    });

    // Seamless photo loading: fade each image in once it has decoded instead of
    // letting it pop in. Only applied to images still loading, so cached images
    // stay instant and a JS failure never hides anything.
    if (!reduceMotion) {
      const fadeImg = (img) => {
        if (img.dataset.fadeInit) return;
        img.dataset.fadeInit = "1";
        if (img.complete && img.naturalWidth > 0) return; // already loaded
        img.classList.add("img-fade");
        let done = false;
        const reveal = () => { if (done) return; done = true; img.classList.add("is-loaded"); };
        // Reveal on whichever fires first: decode() resolving, the load/error
        // events, or a hard timeout — so a hung decode can never leave an image
        // stuck invisible.
        if (img.decode) img.decode().then(reveal).catch(reveal);
        img.addEventListener("load", reveal, { once: true });
        img.addEventListener("error", reveal, { once: true });
        setTimeout(reveal, 3000);
      };
      document.querySelectorAll("img").forEach(fadeImg);
    }

    document.dispatchEvent(new CustomEvent("jironready"));
    buildTweaks();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
