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
