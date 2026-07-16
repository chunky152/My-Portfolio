// Prerenders each route into build/ as static HTML.
// Runs after `vite build` (client) and `vite build --ssr` (server bundle);
// see the "build" script in package.json.
import { readFileSync, writeFileSync, mkdirSync, rmSync, readdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const ssrDir = resolve(root, "build-ssr");

const entryFile = readdirSync(ssrDir).find((f) => /^server\.(m?js)$/.test(f));
if (!entryFile) throw new Error("SSR bundle (server.mjs) not found in build-ssr/");
const { render } = await import(pathToFileURL(resolve(ssrDir, entryFile)).href);

const routes = {
  "/": "index.html",
  "/project": "project/index.html",
  "/about": "about/index.html",
  "/resume": "resume/index.html",
};

const template = readFileSync(resolve(root, "build/index.html"), "utf8");
const marker = '<div id="root"></div>';
if (!template.includes(marker)) throw new Error("#root marker not found in build/index.html");

for (const [route, outFile] of Object.entries(routes)) {
  const html = await render(route);
  const page = template.replace(marker, `<div id="root">${html}</div>`);
  const outPath = resolve(root, "build", outFile);
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, page);
  console.log(`prerendered ${route} -> build/${outFile}`);
}

// The SSR bundle is only needed at build time
rmSync(ssrDir, { recursive: true, force: true });
