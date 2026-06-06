---
name: FJI Insurance site conventions
description: Durable conventions for the static fji-insurance vanilla-JS site (data flow, i18n, cache-busting)
---

# Feliciano Jiron Insurance site

- Single source of truth for service links is `window.JIRON_SERVICES` in `assets/site.js` (`file` field). Header dropdown, mobile nav, footer, homepage cards, and the services overview all read from it — change links there, not per-page.
- Detail content for service subpages lives in `assets/service-details.js` (`window.JIRON_SERVICE_DETAILS`); subpages render via `assets/service-page.js` keyed off `body[data-service]`.
- **i18n pattern:** every translatable element carries a `data-es="..."` attribute holding the Spanish string; `window.jironSetLang(lang)` (exposed by site.js) swaps text. JS-injected markup MUST include `data-es`, then call `if (window.JIRON_LANG) window.jironSetLang(window.JIRON_LANG)` after inject. Spanish short labels = `JIRON_SERVICES[].es`; full names = `JIRON_SERVICE_DETAILS[].es`.
- **Cache-busting is manual and load-bearing:** assets are linked with `?v=N` query strings across every HTML page. When you edit a shared asset, bump its version in ALL pages that reference it (e.g. `styles.css?v=5`, `site.js?v=3`). Forgetting this serves stale JS/CSS to returning visitors.
- Shared component CSS (e.g. `.svc-grid/.svc-card`) belongs in the global `styles.css` (loaded everywhere), not page-specific sheets like `home.css`.
