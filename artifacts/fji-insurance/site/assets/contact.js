/* ===== Contact page logic ===== */
(function () {
  function run() {
    const I = window.JIRON_ICONS;
    document.querySelectorAll("[data-ic]").forEach(el => { if (I[el.dataset.ic]) el.innerHTML = I[el.dataset.ic]; });
    document.getElementById("cf-success-ic").innerHTML = I.check;

    // hours with "today" highlight
    const days = [
      ["Monday","Lunes","9am – 5pm"], ["Tuesday","Martes","9am – 5pm"], ["Wednesday","Miércoles","9am – 5pm"],
      ["Thursday","Jueves","9am – 5pm"], ["Friday","Viernes","9am – 5pm"],
      ["Saturday","Sábado","__CLOSED__"], ["Sunday","Domingo","__CLOSED__"]
    ];
    const todayIdx = (new Date().getDay() + 6) % 7; // Mon=0
    const T = (en, es) => (window.JIRON_LANG === "es" ? es : en);
    function renderHours() {
      const closed = T("Closed","Cerrado");
      document.getElementById("hours-list").innerHTML = days.map((d,i) => {
        const val = d[2] === "__CLOSED__" ? `<span class="closed">${closed}</span>` : d[2];
        return `<li class="${i===todayIdx?'today':''}"><span>${T(d[0],d[1])}${i===todayIdx?' · '+T('Today','Hoy'):''}</span><span>${val}</span></li>`;
      }).join("");
    }
    renderHours();
    document.addEventListener("jironlang", renderHours);

    // form
    const form = document.getElementById("contactForm");
    form.addEventListener("submit", e => {
      e.preventDefault();
      const name = document.getElementById("cf-name").value.trim();
      const email = document.getElementById("cf-email").value.trim();
      const phone = document.getElementById("cf-phone").value.trim();
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      const phoneOk = phone.replace(/\D/g,"").length >= 10;
      if (!name || (!emailOk && !phoneOk)) { document.getElementById("cf-err").classList.add("show"); return; }
      document.getElementById("cf-err").classList.remove("show");
      document.getElementById("cf-form-wrap").style.display = "none";
      const succ = document.getElementById("cf-success");
      succ.classList.add("show");
      document.getElementById("cf-success-msg").innerHTML = T(
        `Thanks, ${name.split(" ")[0]}! A bilingual agent will get back to you shortly.`,
        `¡Gracias, ${name.split(" ")[0]}! Un agente bilingüe te responderá muy pronto.`);
    });

    if (window.JIRON_LANG) window.jironSetLang(window.JIRON_LANG);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", () => setTimeout(run, 0));
  else setTimeout(run, 0);
})();
