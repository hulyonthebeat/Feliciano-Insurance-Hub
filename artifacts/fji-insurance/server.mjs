import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const rawPort = process.env.PORT;
if (!rawPort) {
  throw new Error("PORT environment variable is required but was not provided.");
}
const port = Number(rawPort);
if (Number.isNaN(port) || port <= 0) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

const basePath = process.env.BASE_PATH || "/";
const siteDir = path.join(__dirname, "site");
const isDev = process.env.NODE_ENV !== "production";

const app = express();

const router = express.Router();

// The "/services" overview lives in `services/index.html` so that it resolves
// natively on any static host (production serves dist/public as plain static
// files — no custom routes run there). express.static serves the directory
// index for "/services/" automatically; we also answer "/services" with the
// same file (no redirect) so dev never bounces, even for browsers that cached
// an old "/services" <-> "/services/" 301 from earlier iterations. The page
// carries <base href="/"> so its assets resolve from "/" at either URL.
router.get(["/services", "/services/"], (req, res, next) => {
  res.sendFile(path.join(siteDir, "services", "index.html"), (err) => {
    if (err) next(err);
  });
});

router.use(
  express.static(siteDir, {
    extensions: ["html"],
    setHeaders(res) {
      if (isDev) {
        res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate");
      }
    },
  }),
);

app.use(basePath, router);

app.listen(port, "0.0.0.0", () => {
  console.log(`Serving ${siteDir} on port ${port} at base path ${basePath}`);
});
