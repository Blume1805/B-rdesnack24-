// Rendert den Standortgeber-Film Bild für Bild (deterministisch) und kodiert mit ffmpeg.
// Aufruf: node render.mjs <16x9|9x16> [--stills 1,5.5,12] [--fps 30]
// Benötigt: Playwright (Chromium) und ffmpeg im PATH oder FFMPEG=/pfad/zu/ffmpeg.
import { chromium } from "playwright";
import { spawn } from "node:child_process";
import { existsSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const fmt = process.argv[2] === "9x16" ? "9x16" : "16x9";
const arg = (name) => { const i = process.argv.indexOf(name); return i > 0 ? process.argv[i + 1] : null; };
const fps = Number(arg("--fps") || 30);
const stills = arg("--stills");
const [W, H] = fmt === "9x16" ? [1080, 1920] : [1920, 1080];
const out = resolve(here, "out"); mkdirSync(out, { recursive: true });
const FFMPEG = process.env.FFMPEG || "ffmpeg";

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM || undefined, args: ["--allow-file-access-from-files"] });
const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
// Echte Fotos (media/<name>.jpg) ersetzen automatisch die 3D-Aufnahmen gleichen Namens
const fotos = ["flaeche", "steckdose", "schluessel", "vertrag", "muenzen"].filter((n) => existsSync(resolve(here, "media", `${n}.jpg`)));
if (fotos.length) console.log("echte Fotos:", fotos.join(", "));
await page.goto(pathToFileURL(resolve(here, "index.html")).href + `?f=${fmt}&foto=${fotos.join(",")}`);
await page.evaluate(() => window.ready);
const duration = await page.evaluate(() => window.DURATION);
const stage = page.locator("#stage");

if (stills) {
  for (const s of stills.split(",").map(Number)) {
    await page.evaluate((t) => window.render(t), s);
    await stage.screenshot({ path: resolve(out, `still-${fmt}-${s.toFixed(1)}.png`) });
  }
  console.log("Standbilder:", stills);
} else {
  const frames = Math.round(duration * fps);
  const base = resolve(out, `standortgeber-${fmt}`);
  const ff = spawn(FFMPEG, ["-y", "-loglevel", "error", "-f", "image2pipe", "-framerate", String(fps), "-i", "-",
    "-c:v", "libx264", "-preset", "slow", "-crf", "20", "-pix_fmt", "yuv420p", "-movflags", "+faststart",
    "-tune", "animation", `${base}.mp4`], { stdio: ["pipe", "inherit", "inherit"] });
  for (let f = 0; f < frames; f++) {
    await page.evaluate((t) => window.render(t), f / fps);
    const buf = await stage.screenshot({ type: "png" });
    if (!ff.stdin.write(buf)) await new Promise((r) => ff.stdin.once("drain", r));
    if (f % 150 === 0) console.log(`${fmt}: Bild ${f}/${frames}`);
  }
  ff.stdin.end();
  await new Promise((r) => ff.on("close", r));
  console.log("fertig:", `${base}.mp4`);
}
await browser.close();
