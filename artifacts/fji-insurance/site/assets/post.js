/* ===== Single blog post renderer ===== */
(function () {
  function esc(s){ return String(s == null ? "" : s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }
  function run() {
    var I = window.JIRON_ICONS || {};
    var P = window.JIRON_POSTS || [];
    var host = document.getElementById("post-page");
    if (!host) return;
    var slug = new URLSearchParams(location.search).get("slug");
    var post = P.filter(function (p) { return p.slug === slug; })[0] || P[0];
    if (!post) { host.innerHTML = '<section class="section"><div class="wrap"><p>Post not found. <a href="blog">Back to the blog</a>.</p></div></section>'; return; }

    // related: same category, else most recent others
    var related = P.filter(function (p) { return p.slug !== post.slug && p.cat[0] === post.cat[0]; });
    if (related.length < 3) related = related.concat(P.filter(function (p) { return p.slug !== post.slug && related.indexOf(p) < 0; }));
    related = related.slice(0, 3);

    var relHTML = related.map(function (p) {
      return '<a class="blog-card reveal" href="post?slug=' + encodeURIComponent(p.slug) + '">' +
        '<div class="blog-thumb has-img" style="background-image:url(\'' + p.img + '\')"><span class="cat-tag" style="position:absolute;top:14px;left:14px;background:rgba(255,255,255,.92)" data-es="' + esc(p.cat[1]) + '">' + esc(p.cat[0]) + '</span></div>' +
        '<div class="blog-body"><span class="blog-date">' + esc(p.date) + '</span><h3>' + esc(p.title) + '</h3>' +
        '<span class="svc-more" data-es="Leer más">Read more ' + (I.arrow||'') + '</span></div></a>';
    }).join("");

    host.innerHTML =
      '<section class="page-hero article-hero">' +
        '<div class="wrap">' +
          '<div class="ph-crumb"><a href="/" data-es="Inicio">Home</a><span class="sep">/</span><a href="blog" data-es="Blog">Blog</a><span class="sep">/</span><span>' + esc(post.cat[0]) + '</span></div>' +
          '<span class="cat-pill">' + esc(post.cat[0]) + ' · ' + esc(post.date) + '</span>' +
          '<h1>' + esc(post.title) + '</h1>' +
        '</div>' +
      '</section>' +
      '<section class="section">' +
        '<div class="wrap article-layout">' +
          '<img class="article-hero-img" src="' + post.img + '" alt="' + esc(post.title) + '" />' +
          '<div class="article-body">' + post.content + '</div>' +
          '<div class="article-foot">' +
            '<a class="member-back" href="blog" data-es="← Volver al blog">← Back to all posts</a>' +
            '<a class="btn btn-primary" href="quote" data-es="Obtener cotización gratis">Get a free quote</a>' +
          '</div>' +
        '</div>' +
      '</section>' +
      (relHTML ?
      '<section class="section" style="background:var(--paper-2)">' +
        '<div class="wrap">' +
          '<div class="sec-head related-head"><span class="eyebrow" data-es="Sigue leyendo">Keep reading</span><h2 class="h2" data-es="Artículos relacionados">Related articles</h2></div>' +
          '<div class="related-grid">' + relHTML + '</div>' +
        '</div>' +
      '</section>' : "");

    document.title = post.title + " — Feliciano Jiron Insurance Agency";
    if (window.JIRON_LANG) window.jironSetLang(window.JIRON_LANG);
    window.scrollTo(0, 0);
    var io = new IntersectionObserver(function (es) { es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }); }, { threshold: 0.1 });
    document.querySelectorAll(".reveal:not(.in)").forEach(function (el) { io.observe(el); });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { setTimeout(run, 0); });
  else setTimeout(run, 0);
})();
