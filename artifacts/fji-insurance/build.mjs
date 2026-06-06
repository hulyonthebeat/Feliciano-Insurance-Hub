import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const src = path.join(__dirname, "site");
const dest = path.join(__dirname, "dist", "public");

// Regenerate individual blog post pages from blog-data.js before copying
console.log("Generating blog post pages…");
execFileSync(process.execPath, [path.join(__dirname, "generate-posts.mjs")], { stdio: "inherit" });

fs.rmSync(dest, { recursive: true, force: true });
fs.mkdirSync(dest, { recursive: true });
fs.cpSync(src, dest, { recursive: true });
console.log(`Copied ${src} -> ${dest}`);
