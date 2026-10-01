// Rendert die 3D-Aufnahmen aus scene.html als PNG (Platzhalter, bis echte Fotos vorliegen).
// Aufruf: THREE_DIR=/pfad/zu/node_modules/three node render-objects.mjs [szene …]
// Ergebnis: ../media/<szene>.png (2048×2048). Ein echtes Foto gleichen Namens als .jpg in
// ../media/ hat im Film Vorrang (siehe index.html, Funktion media()).
import { chromium } from "playwright";
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { dirname, resolve, extname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const roots = {
  "/three/": process.env.THREE_DIR || resolve(here, "node_modules/three"),
  "/fonts/": resolve(here, "../../../../apps/mobile/assets/fonts"),
  "/": here,
};
const types = { ".html": "text/html", ".js": "text/javascript", ".ttf": "font/ttf" };
const server = createServer(async (req, res) => {
  const path = decodeURIComponent(req.url.split("?")[0]);
  const prefix = Object.keys(roots).find((p) => path.startsWith(p));
  try {
    const body = await readFile(join(roots[prefix], path.slice(prefix.length)));
    res.writeHead(200, { "content-type": types[extname(path)] || "application/octet-stream" }); res.end(body);
  } catch { res.writeHead(404); res.end(); }
}).listen(0);
const port = server.address().port;
const names = process.argv.slice(2).length ? process.argv.slice(2) : ["flaeche", "steckdose", "schluessel", "vertrag", "muenzen"];
const browser = await chromium.launch({ args: ["--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist"] });
for (const s of names) {
  const page = await browser.newPage({ viewport: { width: 2048, height: 2048 } });
  page.on("pageerror", (e) => console.error(s, e.message));
  await page.goto(`http://127.0.0.1:${port}/scene.html?s=${s}`);
  await page.waitForFunction(() => window.done === true, null, { timeout: 300000 });
  await page.locator("canvas").screenshot({ path: resolve(here, `../media/${s}.png`) });
  console.log("gerendert:", s);
  await page.close();
}
await browser.close(); server.close();
