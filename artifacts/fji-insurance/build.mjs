import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.join(__dirname, "..", "..");
const src = path.join(__dirname, "site");

const targets = [
  path.join(__dirname, "dist", "public"), // Replit static production serve
  path.join(repoRoot, "public"), // Vercel when Root Directory = repository root
  path.join(__dirname, "public"), // Vercel when Root Directory = artifacts/fji-insurance
];

for (const dest of targets) {
  fs.rmSync(dest, { recursive: true, force: true });
  fs.mkdirSync(dest, { recursive: true });
  fs.cpSync(src, dest, { recursive: true });
  console.log(`Copied ${src} -> ${dest}`);
}
