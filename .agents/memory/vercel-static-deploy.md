---
name: Vercel deploy of fji-insurance static site
description: How the prebuilt static site is deployed to Vercel from this pnpm monorepo, and why no build step is used.
---

# Deploying fji-insurance to Vercel

The site is a fully prebuilt static bundle committed at `artifacts/fji-insurance/site/`
(plain HTML/CSS/JS, no compilation). Deploy it to Vercel by serving those committed
files directly — **no build command**.

**Why:** A build-based Vercel config repeatedly failed with "No Output Directory named
public". Root cause: Vercel's working directory / output-path resolution in this pnpm
monorepo is unpredictable and depends on the project's dashboard **Root Directory**
setting, which is not visible from code. Shell `cp` steps broke because the build
command ran from an unexpected CWD; `outputDirectory` pointing at a nested build dir
was not honored.

**How to apply:**
- `vercel.json` (repo root) and `artifacts/fji-insurance/vercel.json` both set a no-op
  install/build (`echo ...`) and `framework: null`. The only difference is
  `outputDirectory`: repo-root config uses `artifacts/fji-insurance/site`; the nested
  config uses `site`. This covers both possible Root Directory settings (repo root vs
  the artifact folder) since Vercel reads the vercel.json at the Root Directory.
- If it still fails with "No Output Directory", get the FULL Vercel build log (not just
  the error card) — the log's working directory and which buildCommand text appears tells
  you what Root Directory Vercel is using. That is what cracked the diagnosis.
- Replit deployment is independent: it uses `artifact.toml` + `build.mjs` (site -> dist/public).
  Do not couple the two.
