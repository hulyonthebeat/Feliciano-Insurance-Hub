---
name: FJI Insurance site conventions
description: Durable conventions for the static fji-insurance vanilla-JS site (data flow, i18n, cache-busting)
---

# Feliciano Jiron Insurance site

- Single source of truth for service links is `window.JIRON_SERVICES` in `assets/site.js` (`file` field, e.g. `services/auto`). Header dropdown, mobile nav, footer, homepage cards, and the services overview all read from it — change links there, not per-page.
- Service subpages live at `site/services/<id>.html`, served at clean URLs `/services/<id>` (no `.html`): dev via Express `static({extensions:["html"]})`, prod via Vercel `cleanUrls:true`. They MUST include `<base href="/">` — without it the depth-0 relative links emitted by the shared `site.js` (which has no `../` awareness) break on these nested pages. **Why:** site.js is shared verbatim across all pages and emits root-relative-style hrefs; base href lets one shared engine work at any URL depth.
- Detail content for service subpages lives in `assets/service-details.js` (`window.JIRON_SERVICE_DETAILS`); subpages render via `assets/service-page.js` keyed off `body[data-service]`.
- **i18n pattern:** every translatable element carries a `data-es="..."` attribute holding the Spanish string; `window.jironSetLang(lang)` (exposed by site.js) swaps text. JS-injected markup MUST include `data-es`, then call `if (window.JIRON_LANG) window.jironSetLang(window.JIRON_LANG)` after inject. Spanish short labels = `JIRON_SERVICES[].es`; full names = `JIRON_SERVICE_DETAILS[].es`.
- **`data-es` and the default English BOTH render via `innerHTML`** (site.js `applyLang` does `el.dataset.en = el.innerHTML` then `el.innerHTML = …`), so HTML like `<strong>`, `<br>`, lists is allowed inside both — use real tags, not markdown. The only attribute-escaping helper is `esc()` (escapes `"` only); never put a literal `"` in a `data-es` value built via `data-es="${esc(...)}"`.
- Real per-service explainer copy was sourced from the agency's original site `jironinsuranceagency.com/our-services/<x>-insurance` (NOT the Farmers carrier links, which are generic). Lives in `JIRON_SERVICE_DETAILS[].sections` ([{h:[en,es], p?, list?}]). Do NOT use third-party brand names (e.g. USAA/Lemonade) in agency-voiced copy.
- **Cache-busting is manual and load-bearing:** assets are linked with `?v=N` query strings across every HTML page. When you edit a shared asset, bump its version in ALL pages that reference it (e.g. `styles.css?v=5`, `site.js?v=3`). Forgetting this serves stale JS/CSS to returning visitors.
- Shared component CSS (e.g. `.svc-grid/.svc-card`) belongs in the global `styles.css` (loaded everywhere), not page-specific sheets like `home.css`.
