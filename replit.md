# Feliciano Jiron Insurance Agency

A static marketing website for Feliciano Jiron Insurance Agency, a Las Vegas insurance agency (auto, home, life, renters, business, boat). Includes home, services, about/team, blog, social media, contact, and quote pages.

## Run & Operate

- The site runs as the `fji-insurance` web artifact, served at `/`
- `pnpm --filter @workspace/fji-insurance run dev` — serve the site locally (reads `PORT`, `BASE_PATH`)
- `pnpm --filter @workspace/fji-insurance run build` — copy the site into `dist/public` for static production hosting

## Stack

- Static multi-page site: hand-written HTML, CSS, and vanilla JS (no framework, no bundler)
- Served in development by a tiny Express static server (`artifacts/fji-insurance/server.mjs`)
- Production: static hosting of `dist/public`

## Where things live

- `artifacts/fji-insurance/site/` — the entire website (HTML pages + `assets/` for CSS, JS, images, blog content)
- `artifacts/fji-insurance/server.mjs` — dev static server
- `artifacts/fji-insurance/build.mjs` — copies `site/` to `dist/public` for production
- The pre-existing `api-server` and `mockup-sandbox` artifacts are scaffolding and are not used by this site

## Architecture decisions

- The site was delivered as a complete, polished static build. It is served verbatim (byte-for-byte) rather than rebuilt in a framework, to preserve the original design and behavior exactly.
- All forms (contact, quote) are client-side only — they show success states in-browser and do not post to a backend.
- `assets/image-slot.js` fetches an optional `.image-slots.state.json` sidecar and degrades gracefully if absent.

## Product

Public-facing insurance agency website with service overviews, a team/about section, a blog, a social media page, EN/ES language toggle, a light/dark theme toggle, and contact/quote request forms.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- Asset and inter-page links are relative, so the site must be served at the root (`/`) base path.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
