/* ===== Team member bios + subpage renderer ===== */
(function () {
  const MEMBERS = {
    "feliciano-jiron": {
      name: "Feliciano Jiron", role: ["Agency Owner", "Dueño de la Agencia"], photo: "assets/img/feliciano.png", photoWebp: "assets/img/feliciano.webp",
      tags: ["Español", "English", "Auto", "Home", "Life"],
      bio_en: [
        "Feliciano Jiron is a dedicated and knowledgeable insurance agent driven by a genuine passion for helping individuals, families, and business owners protect what matters most. With comprehensive expertise across multiple lines of insurance — including auto, home, life, and pet coverage — Feliciano is committed to delivering personalized solutions that meet each client's unique needs, lifestyle, and long-term goals.",
        "Known for his approachable nature and transparent communication style, Feliciano strives to make the insurance process simple, educational, and stress-free. He believes that informed clients make empowered decisions, which is why he takes the time to explain every policy detail and explore the best possible coverage options.",
        "Feliciano's dedication extends beyond policies and paperwork — he's deeply invested in building meaningful, lasting relationships based on trust, reliability, and care. His clients appreciate his proactive approach, timely support, and unwavering commitment to their financial security and peace of mind.",
        "Whether helping a first-time homeowner find the right protection, assisting a family in planning for the future, or ensuring a pet owner's companion is covered, Feliciano brings empathy, professionalism, and a problem-solving mindset to every interaction. His goal is to serve not only as an agent but as a dependable partner and advocate for those he serves.",
        "Outside of his professional life, Feliciano remains actively engaged in his community, continually seeking ways to give back and connect with the people he helps protect. His work is guided by the belief that great insurance goes beyond coverage — it's about creating confidence, stability, and a sense of security for every client, every day."
      ],
      bio_es: [
        "Feliciano Jiron es un agente de seguros dedicado y conocedor, impulsado por una pasión genuina por ayudar a personas, familias y dueños de negocios a proteger lo que más importa. Con amplia experiencia en múltiples líneas de seguro — incluyendo auto, hogar, vida y mascotas — Feliciano se compromete a ofrecer soluciones personalizadas que se ajustan a las necesidades, el estilo de vida y las metas de cada cliente.",
        "Conocido por su trato cercano y su comunicación transparente, Feliciano busca hacer del proceso de seguro algo simple, educativo y sin estrés. Cree que un cliente informado toma mejores decisiones, por eso se toma el tiempo de explicar cada detalle de la póliza y explorar las mejores opciones de cobertura.",
        "La dedicación de Feliciano va más allá de las pólizas y el papeleo — está profundamente comprometido con construir relaciones significativas y duraderas basadas en la confianza, la responsabilidad y el cuidado. Sus clientes valoran su enfoque proactivo, su apoyo oportuno y su compromiso constante con su seguridad financiera y tranquilidad.",
        "Ya sea ayudando a un comprador de vivienda por primera vez, asistiendo a una familia a planear su futuro o asegurando a la mascota de un cliente, Feliciano aporta empatía, profesionalismo y una mentalidad orientada a resolver problemas en cada interacción. Su meta es servir no solo como agente, sino como un socio confiable y defensor de quienes atiende.",
        "Fuera de su vida profesional, Feliciano permanece activo en su comunidad, buscando continuamente maneras de retribuir y conectar con las personas que protege. Su trabajo se guía por la creencia de que un buen seguro va más allá de la cobertura — se trata de crear confianza, estabilidad y una sensación de seguridad para cada cliente, todos los días."
      ]
    },
    "maxwell-saavedra": {
      name: "Maxwell Saavedra", role: ["Insurance Agent", "Agente de Seguros"], photo: "assets/img/maxwell.png", photoWebp: "assets/img/maxwell.webp",
      tags: ["Español", "English", "Licensed in 31 states", "Health & Life"],
      bio_en: [
        "With nearly three years of experience in the insurance industry, Maxwell has built a strong foundation in Health & Life coverage and is now expanding his expertise to include Auto & Property insurance. Based in Nevada and licensed across 31 states, Maxwell takes pride in helping individuals and families find coverage that fits their unique needs.",
        "Outside of work, Maxwell is passionate about storytelling and creativity — particularly through Dungeons & Dragons, where he enjoys crafting worlds that evolve through the imagination and choices of others. This creative mindset enhances how he approaches his career: adaptable, curious, and always striving to understand others' perspectives.",
        "Maxwell lives by the golden rule — \"treat others how you wish to be treated.\" Whether he is working with clients or collaborating with colleagues, Maxwell aims to lead with kindness, patience, and integrity, offering others the same grace and respect he values in return."
      ],
      bio_es: [
        "Con casi tres años de experiencia en la industria de los seguros, Maxwell ha construido una base sólida en cobertura de Salud y Vida, y ahora amplía su experiencia para incluir seguros de Auto y Propiedad. Radicado en Nevada y con licencia en 31 estados, Maxwell se enorgullece de ayudar a personas y familias a encontrar la cobertura que se ajusta a sus necesidades.",
        "Fuera del trabajo, a Maxwell le apasiona la narración y la creatividad — especialmente a través de Dungeons & Dragons, donde disfruta creando mundos que evolucionan con la imaginación y las decisiones de los demás. Esta mentalidad creativa enriquece su manera de trabajar: adaptable, curioso y siempre buscando entender la perspectiva de los demás.",
        "Maxwell vive según la regla de oro: \"trata a los demás como te gustaría ser tratado\". Ya sea con clientes o colegas, Maxwell busca liderar con amabilidad, paciencia e integridad, ofreciendo a los demás la misma gracia y respeto que valora a cambio."
      ]
    },
    "engelbert-mora": {
      name: "Engelbert Mora", role: ["Insurance Agent", "Agente de Seguros"], photo: "assets/img/engelbert.png", photoWebp: "assets/img/engelbert.webp",
      tags: ["Español", "English"],
      bio_en: [
        "What inspired Engelbert to enter the insurance industry was the understanding that insurance is something everyone needs — regardless of the economy. He wanted a career that offers long-term stability, growth, and a healthy work-life balance, and has found all of that within this field.",
        "Originally from Houston, Texas, Engelbert moved to California at age three and has called Las Vegas, Nevada home since he was eight. Outside of work, Engelbert enjoys spending quality time with family and friends, working on his car to prepare for drag racing events, and traveling with his fiancé to explore new places and experiences. Engelbert's happiest moments are those shared with his loved ones.",
        "He is also a proud pet parent to two wonderful pugs, Gucci and Olive — his loyal companions who bring so much joy to Engelbert's life.",
        "In Engelbert's professional role, he brings a personal touch to every interaction. He understands that life happens, and his goal is to be an agent who listens first, guides with empathy, and provides dependable support — whether it's answering a quick question or helping through a major claim."
      ],
      bio_es: [
        "Lo que inspiró a Engelbert a entrar en la industria de los seguros fue entender que el seguro es algo que todos necesitan, sin importar la economía. Buscaba una carrera con estabilidad a largo plazo, crecimiento y un buen equilibrio entre el trabajo y la vida personal, y ha encontrado todo eso en este campo.",
        "Originario de Houston, Texas, Engelbert se mudó a California a los tres años y considera a Las Vegas, Nevada su hogar desde los ocho. Fuera del trabajo, disfruta pasar tiempo de calidad con familia y amigos, trabajar en su auto para prepararlo para eventos de drag racing y viajar con su prometida para explorar nuevos lugares y experiencias. Sus momentos más felices son los que comparte con sus seres queridos.",
        "También es un orgulloso papá de dos maravillosos pugs, Gucci y Olive — sus fieles compañeros que traen tanta alegría a su vida.",
        "En su rol profesional, Engelbert aporta un toque personal a cada interacción. Entiende que la vida sucede, y su meta es ser un agente que primero escucha, guía con empatía y ofrece un apoyo confiable, ya sea respondiendo una pregunta rápida o ayudando durante un reclamo importante."
      ]
    },
    "gunnar-jiron": {
      name: "Gunnar Jiron", role: ["Marketing Director", "Director de Marketing"], photo: "assets/img/gunnar.png", photoWebp: "assets/img/gunnar.webp",
      tags: ["Español", "English", "Community"],
      bio_en: [
        "Gunnar Jiron serves as the Marketing and Outreach Coordinator for Feliciano Jiron Insurance Agency, bringing energy, creativity, and a strong sense of community to the team. Originally from New Mexico and now based in the City of Las Vegas, Gunnar is passionate about connecting people with the resources and support they need to make informed insurance decisions.",
        "With a background in community relations, he plays a key role in building the agency's local presence — designing advertisements, coordinating marketing strategies, and leading outreach efforts with local businesses across the Valley. Gunnar also assists with day-to-day office operations, always ready to provide extra support wherever it's needed.",
        "What sets Gunnar apart is his dedication to genuine, face-to-face connection. Whether through marketing or conversation, he enjoys being someone who helps others feel welcomed, heard, and informed.",
        "Outside of work, Gunnar enjoys following Las Vegas's local sports teams, developing his skills in music, and spending time with family, friends, and his dog, NaVi."
      ],
      bio_es: [
        "Gunnar Jiron se desempeña como Coordinador de Marketing y Alcance Comunitario de Feliciano Jiron Insurance Agency, aportando energía, creatividad y un fuerte sentido de comunidad al equipo. Originario de Nuevo México y ahora radicado en la ciudad de Las Vegas, a Gunnar le apasiona conectar a las personas con los recursos y el apoyo que necesitan para tomar decisiones informadas sobre sus seguros.",
        "Con experiencia en relaciones comunitarias, juega un papel clave en construir la presencia local de la agencia — diseñando anuncios, coordinando estrategias de marketing y liderando esfuerzos de alcance con negocios locales por todo el Valle. Gunnar también ayuda con las operaciones diarias de la oficina, siempre listo para brindar apoyo adicional donde se necesite.",
        "Lo que distingue a Gunnar es su dedicación a la conexión genuina, cara a cara. Ya sea a través del marketing o de una conversación, disfruta ser alguien que ayuda a los demás a sentirse bienvenidos, escuchados e informados.",
        "Fuera del trabajo, Gunnar disfruta seguir a los equipos deportivos locales de Las Vegas, desarrollar sus habilidades musicales y pasar tiempo con su familia, amigos y su perro, NaVi."
      ]
    }
  };
  window.JIRON_MEMBERS = MEMBERS;

  function render() {
    const id = document.body.getAttribute("data-member");
    const m = MEMBERS[id];
    const host = document.getElementById("member-page");
    if (!m || !host) return;
    const first = m.name.split(" ")[0];
    const esc = s => String(s).replace(/"/g, "&quot;");
    const paras = m.bio_en.map((p, i) => `<p data-es="${esc(m.bio_es[i] || "")}">${p}</p>`).join("");
    const tags = m.tags.map(t => `<span>${t}</span>`).join("");
    host.innerHTML = `
      <section class="page-hero member-hero">
        <div class="wrap">
          <div class="ph-crumb"><a href="index.html" data-es="Inicio">Home</a><span class="sep">/</span><a href="about.html" data-es="Nosotros">About Us</a><span class="sep">/</span><span>${m.name}</span></div>
          <span class="eyebrow" data-es="${esc(m.role[1])}">${m.role[0]}</span>
          <h1>${m.name}</h1>
        </div>
      </section>
      <section class="section">
        <div class="wrap member-grid">
          <aside class="member-aside">
            <picture>
              <source type="image/webp" srcset="${m.photoWebp}" />
              <img class="member-photo" src="${m.photo}" alt="${esc(m.name)}" />
            </picture>
            <a class="member-back" href="about.html#team" data-es="← Volver al equipo">← Back to the team</a>
          </aside>
          <div class="member-bio">
            <h2 data-es="Acerca de ${esc(first)}">About ${first}</h2>
            ${paras}
          </div>
        </div>
      </section>`;
    document.title = m.name + " — Feliciano Jiron Insurance Agency";
    if (window.JIRON_LANG) window.jironSetLang(window.JIRON_LANG);
    const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { threshold: 0.1 });
    document.querySelectorAll(".reveal:not(.in)").forEach(el => io.observe(el));
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", () => setTimeout(render, 0));
  else setTimeout(render, 0);
})();
