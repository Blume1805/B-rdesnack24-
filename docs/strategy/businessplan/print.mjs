// businessplan.html -> PDF (A4) mit Seitenzahl in der Fußzeile.
import { chromium } from "playwright";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
const here = dirname(fileURLToPath(import.meta.url));
const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(pathToFileURL(resolve(here, "businessplan.html")).href);
await page.evaluate(() => document.fonts.ready);
await page.pdf({
  path: resolve(here, "Businessplan-Boerdesnack24-2027-2036.pdf"),
  format: "A4", printBackground: true, preferCSSPageSize: true,
  displayHeaderFooter: true, headerTemplate: "<span></span>",
  footerTemplate: '<div style="width:100%;font-family:Arial,sans-serif;font-size:7px;color:#777;padding:0 30mm;display:flex;justify-content:space-between"><span>Bördesnack24 GbR, Businessplan 2027 bis 2036, Stand 01.11.2026</span><span>Seite <span class="pageNumber"></span> von <span class="totalPages"></span></span></div>',
});
await browser.close();
console.log("PDF geschrieben");
