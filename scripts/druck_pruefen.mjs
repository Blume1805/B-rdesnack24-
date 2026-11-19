// Rendert die Drucklayouts der App als echtes PDF und jede Seite als Bild,
// damit Seitenumbrüche angesehen statt vermutet werden (Befund 19.11.2026).
//
//   cd apps/mobile && DRUCK_AUSGABE=/tmp/druck flutter test test/druck
//   node scripts/druck_pruefen.mjs /tmp/druck
//
// Ergebnis je Beispiel: <name>.pdf und <name>-<seite>.png (pdftoppm), dazu
// die Seitenzahl auf der Konsole. Chromium steht für den Druck aus dem
// Browser; Safari (iPhone) bricht in Einzelfällen anders um, deshalb
// arbeiten die Regeln mit unteilbaren Blöcken (druck_regeln.dart).
import { createRequire } from 'node:module';
import { readdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join, basename } from 'node:path';
import { pathToFileURL } from 'node:url';

// require statt import: So findet Node das vorinstallierte Playwright auch
// außerhalb eines Projektordners (globaler Suchpfad).
const { chromium } = createRequire(import.meta.url)('playwright');

const ordner = process.argv[2];
if (!ordner) {
  console.error('Aufruf: node scripts/druck_pruefen.mjs <ordner mit .html>');
  process.exit(2);
}
const browser = await chromium.launch();
const seite = await browser.newPage();
for (const datei of readdirSync(ordner).filter((d) => d.endsWith('.html')).sort()) {
  const name = basename(datei, '.html');
  await seite.goto(pathToFileURL(join(ordner, datei)).href);
  const pdf = join(ordner, `${name}.pdf`);
  await seite.pdf({ path: pdf, preferCSSPageSize: true, printBackground: true });
  const info = execFileSync('pdfinfo', [pdf]).toString();
  const seiten = /Pages:\s+(\d+)/.exec(info)?.[1] ?? '?';
  execFileSync('pdftoppm', ['-r', '60', '-png', pdf, join(ordner, name)]);
  console.log(`${name}: ${seiten} Seite(n)`);
}
await browser.close();
