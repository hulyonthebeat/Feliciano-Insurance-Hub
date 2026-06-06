/**
 * Generates individual HTML files for each blog post in site/posts/.
 * Run: node generate-posts.mjs
 * Each generated file has static title, meta description, h1, article body,
 * BlogPosting JSON-LD, and BreadcrumbList JSON-LD for full SEO crawlability.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const siteDir = path.join(__dirname, "site");
const postsDir = path.join(siteDir, "posts");
const BASE_URL = "https://felicianoinsurancehub.replit.app";

// Load blog-data.js
const src = fs.readFileSync(path.join(siteDir, "assets", "blog-data.js"), "utf8");
const JIRON_POSTS = [];
const assignProxy = { set(t, k, v) { if (k === "JIRON_POSTS") JIRON_POSTS.push(...v); return true; } };
const win = new Proxy({}, assignProxy);
new Function("window", src)(win);

fs.mkdirSync(postsDir, { recursive: true });

const HEAD_COMMON = `<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
<base href="/" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="icon" type="image/x-icon" href="assets/favicon/favicon.ico?v=5" />
<link rel="icon" type="image/png" sizes="32x32" href="assets/favicon/favicon-32x32.png?v=5" />
<link rel="icon" type="image/png" sizes="16x16" href="assets/favicon/favicon-16x16.png?v=5" />
<link rel="icon" type="image/png" sizes="48x48" href="assets/favicon/favicon-48x48.png?v=5" />
<link rel="icon" type="image/png" sizes="64x64" href="assets/favicon/favicon-64x64.png?v=5" />
<link rel="apple-touch-icon" sizes="180x180" href="assets/favicon/favicon-180x180.png?v=5" />
<link rel="manifest" href="site.webmanifest?v=1" />
<meta name="theme-color" content="#0c2747" />
<link rel="preload" as="image" href="assets/img/logo-emblem.png?v=5" fetchpriority="high" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400;1,6..72,500&family=Public+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap" />
<link rel="stylesheet" href="assets/styles.css?v=25" />
<link rel="stylesheet" href="assets/pages.css" />`;

function esc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escAttr(s) {
  return String(s == null ? "" : s).replace(/"/g, "&quot;");
}

// Build a truncated description (max 160 chars)
function metaDesc(post) {
  const raw = post.excerpt || post.title;
  return raw.length > 157 ? raw.slice(0, 157) + "…" : raw;
}

for (const post of JIRON_POSTS) {
  const pageUrl = `${BASE_URL}/posts/${post.slug}`;
  const desc = metaDesc(post);

  const blogPostingSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.ts,
    image: `${BASE_URL}/${post.img}`,
    articleSection: post.cat[0],
    mainEntityOfPage: pageUrl,
    author: {
      "@type": "Organization",
      name: "Feliciano Jiron Insurance Agency",
      url: BASE_URL
    },
    publisher: {
      "@type": "Organization",
      name: "Feliciano Jiron Insurance Agency",
      url: BASE_URL
    }
  }, null, 2);

  const breadcrumbSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.cat[0], item: `${BASE_URL}/blog` },
      { "@type": "ListItem", position: 4, name: post.title, item: pageUrl }
    ]
  }, null, 2);

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
${HEAD_COMMON}
<title>${esc(post.title)} — Feliciano Jiron Insurance Agency</title>
<meta name="description" content="${escAttr(desc)}" />
<script type="application/ld+json">
${blogPostingSchema}
</script>
<script type="application/ld+json">
${breadcrumbSchema}
</script>
<script>try{var t=localStorage.getItem('jiron_theme');if(t&&t!=='brand')document.documentElement.setAttribute('data-theme',t);}catch(e){}</script>
</head>
<body data-page="blog" data-slug="${escAttr(post.slug)}">

<header class="site-header" id="site-header"></header>
<div class="mobile-nav" id="mobile-nav"></div>

<section class="page-hero article-hero">
  <div class="wrap">
    <div class="ph-crumb"><a href="index.html" data-es="Inicio">Home</a><span class="sep">/</span><a href="blog.html" data-es="Blog">Blog</a><span class="sep">/</span><span>${esc(post.cat[0])}</span></div>
    <span class="cat-pill">${esc(post.cat[0])} &middot; ${esc(post.date)}</span>
    <h1>${esc(post.title)}</h1>
  </div>
</section>

<section class="section">
  <div class="wrap article-layout">
    <img class="article-hero-img" src="${escAttr(post.img)}" alt="${escAttr(post.title)}" />
    <div class="article-body">${post.content}</div>
    <div class="article-foot">
      <a class="member-back" href="blog.html" data-es="&larr; Volver al blog">&larr; Back to all posts</a>
      <a class="btn btn-primary" href="quote.html" data-es="Obtener cotización gratis">Get a free quote</a>
    </div>
  </div>
</section>

<div id="post-related"></div>

<footer class="site-footer" id="site-footer"></footer>

<script src="assets/site.js?v=24"></script>
<script src="assets/blog-data.js"></script>
<script src="assets/post.js"></script>
</body>
</html>`;

  fs.writeFileSync(path.join(postsDir, `${post.slug}.html`), html, "utf8");
}

console.log(`Generated ${JIRON_POSTS.length} post files in site/posts/`);
