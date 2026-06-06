/* ===== Quote wizard logic — service-specific questions ===== */
(function () {
  function run() {
    const I = window.JIRON_ICONS, S = window.JIRON_SERVICES;
    const T = (en, es) => (window.JIRON_LANG === "es" ? es : en);

    document.getElementById("rail-stars").innerHTML = I.star.repeat(5);
    document.getElementById("rail-phone").textContent = window.JIRON_INFO.PHONE;
    document.getElementById("q-success-ic").innerHTML = I.check;

    /* ---- service-specific forms (auto/home/life are exact from their site) ---- */
    const yn = [["Yes","Sí"],["No","No"]];
    const FORMS = {
      auto: { title: ["Auto Insurance details","Detalles de seguro de auto"], fields: [
        { k:"vin", t:"text", req:false, label:["VIN (optional)","VIN (opcional)"], ph:["1HGCM82633A004352","1HGCM82633A004352"] },
        { k:"_or", t:"divider", label:["or enter your vehicle","o ingresa tu vehículo"] },
        { k:"make", t:"text", label:["Make","Marca"], ph:["Toyota","Toyota"], col:1 },
        { k:"model", t:"text", label:["Model","Modelo"], ph:["Camry","Camry"], col:1 },
        { k:"year", t:"text", label:["Year","Año"], ph:["2021","2021"], col:1 },
        { k:"carrier", t:"text", req:true, label:["Current insurance carrier","Aseguradora actual"], ph:["e.g. State Farm, or None","ej. State Farm, o Ninguna"] },
      ], validate: v => (v.vin || (v.make && v.model && v.year)) && v.carrier },
      home: { title: ["Home Insurance details","Detalles de seguro de hogar"], fields: [
        { k:"address", t:"text", req:true, label:["Home address","Dirección del hogar"], ph:["2585 S Nellis Blvd, Las Vegas","2585 S Nellis Blvd, Las Vegas"] },
        { k:"age", t:"text", req:true, label:["Estimated age of home","Edad estimada del hogar"], ph:["e.g. 15 years","ej. 15 años"], col:1 },
        { k:"yearbought", t:"text", req:true, label:["Year purchased","Año de compra"], ph:["2019","2019"], col:1 },
        { k:"roof", t:"select", req:true, label:["Roof type","Tipo de techo"], options:[["Asphalt shingle","Teja asfáltica"],["Tile","Teja"],["Metal","Metal"],["Flat / foam","Plano / espuma"],["Other","Otro"]] },
        { k:"ownership", t:"radio", req:true, label:["Do you…","¿Tú…"], options:[["Own the home outright","Eres dueño total"],["Currently paying a mortgage","Pagas hipoteca"]] },
        { k:"pool", t:"radio", req:true, label:["Do you have a pool or hot tub?","¿Tienes piscina o jacuzzi?"], options: yn },
        { k:"claims", t:"radio", req:true, label:["Filed any insurance claims in the past 5 years?","¿Reclamos en los últimos 5 años?"], options: yn },
      ]},
      life: { title: ["Life Insurance details","Detalles de seguro de vida"], fields: [
        { k:"dob", t:"date", req:true, label:["Date of birth","Fecha de nacimiento"] },
        { k:"occupation", t:"text", req:true, label:["Occupation","Ocupación"], ph:["e.g. Teacher","ej. Maestro/a"] },
        { k:"address", t:"text", req:true, label:["Address","Dirección"], ph:["Street, City, NV","Calle, Ciudad, NV"] },
        { k:"existing", t:"radio", req:true, label:["Do you have an existing policy?","¿Tienes una póliza existente?"], options: yn },
        { k:"_note", t:"note", label:["Additional information will be required by your agent.","Tu agente solicitará información adicional."] },
      ]},
      business: { title: ["Business Insurance details","Detalles de seguro de negocio"], fields: [
        { k:"bizname", t:"text", req:true, label:["Business name","Nombre del negocio"], ph:["Acme LLC","Acme LLC"] },
        { k:"industry", t:"text", req:true, label:["Type of business / industry","Tipo de negocio / industria"], ph:["e.g. Restaurant, Contractor","ej. Restaurante, Contratista"] },
        { k:"employees", t:"select", req:true, label:["Number of employees","Número de empleados"], options:[["Just me","Solo yo"],["2–5","2–5"],["6–20","6–20"],["21–50","21–50"],["50+","50+"]] },
        { k:"years", t:"text", req:true, label:["Years in business","Años en operación"], ph:["e.g. 3","ej. 3"] },
        { k:"coverage", t:"select", req:true, label:["Coverage needed","Cobertura que necesitas"], options:[["General liability","Responsabilidad general"],["Commercial property","Propiedad comercial"],["Workers' comp","Compensación laboral"],["Commercial auto","Auto comercial"],["Business owner's policy (BOP)","Póliza BOP"],["Not sure — help me","No estoy seguro"]] },
        { k:"carrier", t:"text", req:false, label:["Current insurance carrier (if any)","Aseguradora actual (si aplica)"], ph:["State Farm, or None","State Farm, o Ninguna"] },
      ]},
      renters: { title: ["Renters Insurance details","Detalles de seguro de inquilinos"], fields: [
        { k:"address", t:"text", req:true, label:["Rental address","Dirección de renta"], ph:["Street, Unit, City, NV","Calle, Unidad, Ciudad, NV"] },
        { k:"proptype", t:"select", req:true, label:["Property type","Tipo de propiedad"], options:[["Apartment","Apartamento"],["House","Casa"],["Condo","Condominio"],["Townhome","Townhome"],["Other","Otro"]] },
        { k:"value", t:"select", req:true, label:["Estimated value of belongings","Valor estimado de pertenencias"], options:[["Under $10,000","Menos de $10,000"],["$10,000–$25,000","$10,000–$25,000"],["$25,000–$50,000","$25,000–$50,000"],["$50,000+","$50,000+"]] },
        { k:"pets", t:"radio", req:true, label:["Any pets?","¿Tienes mascotas?"], options: yn },
        { k:"carrier", t:"text", req:false, label:["Current insurance carrier (if any)","Aseguradora actual (si aplica)"], ph:["State Farm, or None","State Farm, o Ninguna"] },
      ]},
      boat: { title: ["Boat Insurance details","Detalles de seguro de embarcación"], fields: [
        { k:"makemodel", t:"text", req:true, label:["Boat make & model","Marca y modelo"], ph:["e.g. Bayliner VR5","ej. Bayliner VR5"] },
        { k:"year", t:"text", req:true, label:["Year","Año"], ph:["2020","2020"], col:1 },
        { k:"value", t:"text", req:true, label:["Estimated value","Valor estimado"], ph:["$25,000","$25,000"], col:1 },
        { k:"boattype", t:"select", req:true, label:["Boat type","Tipo de embarcación"], options:[["Powerboat","Lancha a motor"],["Sailboat","Velero"],["Personal watercraft (Jet Ski)","Moto acuática"],["Pontoon","Pontón"],["Fishing boat","Bote de pesca"],["Other","Otro"]] },
        { k:"use", t:"select", req:true, label:["Primary use","Uso principal"], options:[["Recreational","Recreativo"],["Fishing","Pesca"],["Watersports","Deportes acuáticos"]] },
        { k:"storage", t:"select", req:true, label:["Where is it stored?","¿Dónde se guarda?"], options:[["Marina / dock","Marina / muelle"],["Trailer","Remolque"],["Dry / garage storage","Almacenaje seco"]] },
      ]},
    };

    /* ---- coverage cards (single-select) ---- */
    const cov = document.getElementById("q-coverages");
    cov.innerHTML = S.map(s =>
      `<div class="q-cov" data-id="${s.id}" role="button" tabindex="0">
        <span class="qc-check">${I.check}</span>
        <span class="qc-ic">${I[s.icon]}</span>
        <span data-es="${s.es}">${s.name}</span>
      </div>`).join("");

    const data = { coverage: "", fields: {}, fname:"", lname:"", phone:"", email:"", contactpref:"", lang:"" };
    const hash = (location.hash || "").replace("#", "");
    if (S.some(s => s.id === hash)) data.coverage = hash;

    function selectCov(id) {
      data.coverage = id;
      cov.querySelectorAll(".q-cov").forEach(c => c.classList.toggle("sel", c.dataset.id === id));
      document.getElementById("err-coverage").classList.remove("show");
    }
    cov.querySelectorAll(".q-cov").forEach(c => {
      const pick = () => selectCov(c.dataset.id);
      c.addEventListener("click", pick);
      c.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); pick(); } });
    });
    if (data.coverage) selectCov(data.coverage);

    /* ---- render service fields ---- */
    let builtFor = "";
    function renderService() {
      if (builtFor === data.coverage) return;
      builtFor = data.coverage;
      data.fields = {};
      const def = FORMS[data.coverage];
      const svc = S.find(s => s.id === data.coverage);
      document.getElementById("svc-title").innerHTML = T(def.title[0], def.title[1]);
      const wrap = document.getElementById("q-service-fields");
      let html = "", rowOpen = false;
      def.fields.forEach(f => {
        const close = () => { if (rowOpen) { html += `</div>`; rowOpen = false; } };
        if (f.col) { if (!rowOpen) { html += `<div class="q-grid3">`; rowOpen = true; } }
        else close();
        const lab = `data-es="${esc(f.label[1])}"`;
        if (f.t === "divider") { close(); html += `<div class="q-or" data-es="${esc(f.label[1])}">${esc(f.label[0])}</div>`; }
        else if (f.t === "note") { close(); html += `<p class="q-note" data-es="${esc(f.label[1])}">${esc(f.label[0])}</p>`; }
        else if (f.t === "text" || f.t === "date") {
          html += `<div class="q-field"><label for="f_${f.k}" ${lab}>${esc(f.label[0])}${f.req?' *':''}</label>
            <input type="${f.t==='date'?'date':'text'}" id="f_${f.k}" ${f.ph?`placeholder="${esc(f.ph[0])}" data-es-ph="${esc(f.ph[1])}"`:''} /></div>`;
        } else if (f.t === "select") {
          html += `<div class="q-field"><label for="f_${f.k}" ${lab}>${esc(f.label[0])}${f.req?' *':''}</label>
            <select id="f_${f.k}"><option value="" data-es="Selecciona…">Select…</option>${f.options.map((o,i)=>`<option value="${esc(o[0])}" data-es="${esc(o[1])}">${esc(o[0])}</option>`).join("")}</select></div>`;
        } else if (f.t === "radio") {
          html += `<div class="q-field"><label ${lab}>${esc(f.label[0])}${f.req?' *':''}</label>
            <div class="q-radio-row" data-name="f_${f.k}">${f.options.map(o=>`<button type="button" class="q-radio" data-val="${esc(o[0])}" data-es="${esc(o[1])}">${esc(o[0])}</button>`).join("")}</div></div>`;
        }
      });
      if (rowOpen) html += `</div>`;
      wrap.innerHTML = html;
      // bind radios
      wrap.querySelectorAll(".q-radio-row").forEach(row => {
        const name = row.dataset.name;
        row.querySelectorAll(".q-radio").forEach(btn => btn.addEventListener("click", () => {
          row.querySelectorAll(".q-radio").forEach(b => b.classList.remove("sel"));
          btn.classList.add("sel");
          data.fields[name.replace(/^f_/, "")] = btn.dataset.val;
          document.getElementById("err-service").classList.remove("show");
        }));
      });
      if (window.JIRON_LANG) window.jironSetLang(window.JIRON_LANG);
    }

    function collectService() {
      const wrap = document.getElementById("q-service-fields");
      wrap.querySelectorAll("input, select").forEach(el => { data.fields[el.id.replace(/^f_/, "")] = el.value.trim(); });
    }

    /* ---- contact radios ---- */
    document.querySelectorAll('#quoteForm > fieldset[data-step="2"] .q-radio-row').forEach(row => {
      const name = row.dataset.name;
      row.querySelectorAll(".q-radio").forEach(btn => btn.addEventListener("click", () => {
        row.querySelectorAll(".q-radio").forEach(b => b.classList.remove("sel"));
        btn.classList.add("sel");
        data[name] = btn.dataset.val;
      }));
    });

    /* ---- wizard nav ---- */
    const steps = Array.from(document.querySelectorAll(".q-step"));
    const total = steps.length;
    let cur = 0;
    const bar = document.getElementById("q-bar");
    const backBtn = document.getElementById("q-back");
    const nextBtn = document.getElementById("q-next");
    const success = document.getElementById("q-success");
    const nav = document.getElementById("q-nav");

    const stepNames = [["Coverage","Cobertura"],["Details","Detalles"],["Your info","Tus datos"],["Review","Revisar"]];
    const stepsEl = document.getElementById("q-steps");
    stepsEl.innerHTML = stepNames.map((n,i) =>
      `<li data-i="${i}"><span class="q-dot">${i+1}</span><span class="q-label" data-es="${n[1]}">${n[0]}</span></li>`).join("");

    function syncRail() {
      stepsEl.querySelectorAll("li").forEach((li, i) => {
        li.classList.toggle("active", i === cur);
        li.classList.toggle("done", i < cur);
        li.querySelector(".q-dot").innerHTML = i < cur ? I.check : (i + 1);
      });
    }
    function show(n) {
      steps.forEach((s, i) => s.classList.toggle("is-active", i === n));
      bar.style.width = ((n + 1) / total) * 100 + "%";
      backBtn.hidden = n === 0;
      nextBtn.innerHTML = n === total - 1 ? T("Submit my quote", "Enviar mi cotización") : T("Continue", "Continuar");
      cur = n; syncRail();
    }
    function validate(n) {
      if (n === 0) { if (!data.coverage) { document.getElementById("err-coverage").classList.add("show"); return false; } }
      if (n === 1) {
        collectService();
        const def = FORMS[data.coverage];
        let ok = true;
        if (def.validate) ok = !!def.validate(data.fields);
        else ok = def.fields.filter(f => f.req).every(f => data.fields[f.k]);
        if (!ok) { document.getElementById("err-service").classList.add("show"); return false; }
        document.getElementById("err-service").classList.remove("show");
      }
      if (n === 2) {
        ["fname","lname","phone","email"].forEach(id => data[id] = document.getElementById(id).value.trim());
        const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);
        const phoneOk = data.phone.replace(/\D/g,"").length >= 10;
        if (!data.fname || (!emailOk && !phoneOk) || !document.getElementById("consent").checked) {
          document.getElementById("err-contact").classList.add("show"); return false;
        }
        document.getElementById("err-contact").classList.remove("show");
      }
      return true;
    }
    function buildReview() {
      collectService();
      const def = FORMS[data.coverage];
      const svc = S.find(s => s.id === data.coverage);
      const rows = [[T("Coverage","Cobertura"), T(svc.name, svc.es)]];
      def.fields.forEach(f => {
        if (f.t === "divider" || f.t === "note") return;
        const val = data.fields[f.k];
        if (val) rows.push([T(f.label[0], f.label[1]).replace(' *',''), localizeVal(f, val)]);
      });
      const cm = { email:T("Email","Correo"), call:T("Call","Llamada"), text:T("Text","Texto"), en:T("English","Inglés"), es:T("Spanish","Español") };
      rows.push([T("Name","Nombre"), (data.fname+" "+data.lname).trim() || "—"]);
      rows.push([T("Phone","Teléfono"), data.phone || "—"]);
      rows.push([T("Email","Correo"), data.email || "—"]);
      if (data.contactpref) rows.push([T("Preferred contact","Contacto preferido"), cm[data.contactpref]]);
      if (data.lang) rows.push([T("Language","Idioma"), cm[data.lang]]);
      document.getElementById("q-review").innerHTML = rows.map(r =>
        `<div class="q-rev-row"><span class="k">${r[0]}</span><span class="v">${r[1]}</span></div>`).join("");
    }
    function localizeVal(f, val) {
      if ((f.t === "select" || f.t === "radio") && f.options) {
        const m = f.options.find(o => o[0] === val);
        if (m) return T(m[0], m[1]);
      }
      return val;
    }

    nextBtn.addEventListener("click", () => {
      if (!validate(cur)) return;
      if (cur === 0) renderService();
      if (cur === total - 2) buildReview();
      if (cur === total - 1) {
        const name = (data.fname || "").trim();
        success.hidden = false;
        steps.forEach(s => s.classList.remove("is-active"));
        nav.hidden = true;
        bar.style.width = "100%";
        document.getElementById("success-msg").innerHTML = T(
          `Thanks${name ? ", " + name : ""}! A bilingual agent will reach out shortly with your ${labelFor()} options.`,
          `¡Gracias${name ? ", " + name : ""}! Un agente bilingüe te contactará pronto con tus opciones de ${labelForEs()}.`);
        stepsEl.querySelectorAll("li").forEach(li => { li.classList.add("done"); li.classList.remove("active"); li.querySelector(".q-dot").innerHTML = I.check; });
        return;
      }
      show(cur + 1);
    });
    backBtn.addEventListener("click", () => { if (cur > 0) show(cur - 1); });
    function labelFor(){ const s=S.find(x=>x.id===data.coverage); return s?s.name.toLowerCase():"insurance"; }
    function labelForEs(){ const s=S.find(x=>x.id===data.coverage); return s?s.es.toLowerCase():"seguro"; }

    document.addEventListener("jironlang", () => {
      if (!success.hidden) return;
      nextBtn.innerHTML = cur === total - 1 ? T("Submit my quote", "Enviar mi cotización") : T("Continue", "Continuar");
      if (cur === 1) { const def = FORMS[data.coverage]; if (def) document.getElementById("svc-title").innerHTML = T(def.title[0], def.title[1]); }
      if (cur === total - 1) buildReview();
    });

    show(0);
    if (window.JIRON_LANG) window.jironSetLang(window.JIRON_LANG);
  }
  function esc(s){ return String(s).replace(/"/g,"&quot;"); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", () => setTimeout(run, 0));
  else setTimeout(run, 0);
})();
