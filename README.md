# Feliciano Jiron Insurance Agency

The marketing website for **Feliciano Jiron Insurance Agency**, a bilingual (English/Spanish) insurance agency in Las Vegas, NV offering auto, home, life, renters, business, and boat coverage.

🌐 **2585 S. Nellis Blvd., Las Vegas, NV 89121** · 📞 (702) 522-0079 · 🕘 Mon–Fri 9am–5pm

## Features

- Multi-page marketing site: home, services, about/team, blog, social media, contact, and quote pages
- English / Spanish language toggle
- Light / dark theme toggle
- Client-side contact and quote request forms with in-browser success states
- Fully responsive layout

## Tech Stack

- Hand-written **HTML, CSS, and vanilla JavaScript** — no framework, no bundler
- Served in development by a tiny **Express** static server
- Production: static hosting of the built `dist/public` directory
- Lives inside a pnpm workspace monorepo (see `pnpm-workspace.yaml`)

## Project Structure

```
artifacts/fji-insurance/
├── site/            # The entire website (HTML pages + assets/)
│   └── assets/      # CSS, JS, images, blog content
├── server.mjs       # Development static server (reads PORT, BASE_PATH)
├── build.mjs        # Copies site/ → dist/public for production
└── package.json
```

## Getting Started

This site is one artifact within a pnpm workspace. From the repository root:

```bash
# Install dependencies
pnpm install

# Run the site locally (serves on the PORT env var)
pnpm --filter @workspace/fji-insurance run dev

# Build for static production hosting (outputs to dist/public)
pnpm --filter @workspace/fji-insurance run build
```

## Notes

- The site is served at the root path (`/`). Asset and inter-page links are relative, so it must be hosted at the root.
- Contact and quote forms are client-side only — they show success states in the browser and do not post to a backend.

---

© 2025–2026 Feliciano Jiron Insurance Agency
