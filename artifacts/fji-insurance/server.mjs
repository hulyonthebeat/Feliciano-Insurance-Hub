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

// The "/services" overview lives in `services.html`, which collides with the
// `services/<id>` subpage directory. express.static would 301 "/services" to
// "/services/" (a directory with no index file) and 404. Serve the overview
// for BOTH "/services" and "/services/" directly (no redirect) — services.html
// carries <base href="/"> so its assets resolve from "/" at either URL. We must
// NOT redirect between the two: browsers may have permanently cached the old
// serve-static "/services" -> "/services/" 301, and a server redirect the other
// way would create an infinite loop ("redirected you too many times").
router.get(["/services", "/services/"], (req, res, next) => {
  res.sendFile(path.join(siteDir, "services.html"), (err) => {
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
