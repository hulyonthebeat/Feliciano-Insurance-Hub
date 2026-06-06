/* ===== Blog list — renders all real posts from blog-data.js ===== */
(function () {
  function esc(s){ return String(s == null ? "" : s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }
  function run() {
    var I = window.JIRON_ICONS || {};
    var P = (window.JIRON_POSTS || []).slice();
    var host = document.getElementById("blog-list");
    if (!host || !P.length) return;
    var feat = P[0], rest = P.slice(1);

    var featHTML =
      '<a class="blog-feature reveal" href="post.html?slug=' + encodeURIComponent(feat.slug) + '">' +
        '<div class="bf-thumb has-img" style="background-image:url(\'' + feat.img + '\')"></div>' +
        '<div class="bf-body">' +
          '<div style="display:flex;gap:10px;align-items:center;margin-bottom:8px">' +
            '<span class="cat-tag" data-es="' + esc(feat.cat[1]) + '">' + esc(feat.cat[0]) + '</span>' +
            '<span class="blog-date" style="margin:0">' + esc(feat.date) + '</span>' +
          '</div>' +
          '<h2>' + esc(feat.title) + '</h2>' +
          '<p>' + esc(feat.excerpt) + '…</p>' +
          '<span class="svc-more" data-es="Leer artículo">Read article ' + (I.arrow||'') + '</span>' +
        '</div>' +
      '</a>';

    var cardsHTML = rest.map(function (p, i) {
      return '<a class="blog-card reveal" href="post.html?slug=' + encodeURIComponent(p.slug) + '"' + (i ? ' data-delay="' + ((i % 3) * 70) + '"' : '') + '>' +
        '<div class="blog-thumb has-img" style="background-image:url(\'' + p.img + '\')">' +
          '<span class="cat-tag" style="position:absolute;top:14px;left:14px;background:rgba(255,255,255,.92)" data-es="' + esc(p.cat[1]) + '">' + esc(p.cat[0]) + '</span>' +
        '</div>' +
        '<div class="blog-body">' +
          '<span class="blog-date">' + esc(p.date) + '</span>' +
          '<h3>' + esc(p.title) + '</h3>' +
          '<p>' + esc(p.excerpt) + '…</p>' +
          '<span class="svc-more" data-es="Leer más">Read more ' + (I.arrow||'') + '</span>' +
        '</div>' +
      '</a>';
    }).join("");

    host.innerHTML = featHTML + cardsHTML;
    if (window.JIRON_LANG) window.jironSetLang(window.JIRON_LANG);
    var io = new IntersectionObserver(function (es) { es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }); }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
    document.querySelectorAll(".reveal:not(.in)").forEach(function (el) { if (el.dataset.delay) el.style.animationDelay = el.dataset.delay + "ms"; io.observe(el); });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { setTimeout(run, 0); });
  else setTimeout(run, 0);
})();
