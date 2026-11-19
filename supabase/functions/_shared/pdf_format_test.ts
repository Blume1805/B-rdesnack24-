import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { datumDe, zeitDe, zelle } from "./pdf_format.ts";

Deno.test("Freitext mit großem T bleibt vollständig (Befund 19.11.2026)", () => {
  const t = "Tür geschlossen, nach 30 Minuten erneut gemessen: 5,0 °C";
  assertEquals(zelle(t), t);
  assertEquals(zelle("Temperaturfühler getauscht, Thermometer kalibriert"),
    "Temperaturfühler getauscht, Thermometer kalibriert");
});

Deno.test("Zeitstempel in deutscher Zeit (Sommer- und Winterzeit)", () => {
  assertEquals(zeitDe("2026-10-01T00:15:00+00:00"), "01.10.2026 02:15"); // MESZ
  assertEquals(zeitDe("2026-11-19T09:28:00Z"), "19.11.2026 10:28"); // MEZ
  assertEquals(zelle("2026-11-19T09:28:00.123456+00:00"), "19.11.2026 10:28");
  assertEquals(zelle("2026-11-19 09:28:00+00"), "19.11.2026 10:28");
});

Deno.test("Datum, Zahlen, Beträge, Ja/Nein, leer", () => {
  assertEquals(datumDe("2026-10-31"), "31.10.2026");
  assertEquals(zelle("2027-01-31"), "31.01.2027");
  assertEquals(zelle(4.5), "4,5");
  assertEquals(zelle(12.5, true), "12,50");
  assertEquals(zelle("1234.5", true), "1.234,50");
  assertEquals(zelle(true), "Ja");
  assertEquals(zelle(false), "Nein");
  assertEquals(zelle(null), "");
  assertEquals(zelle("A-01 Osterweddingen"), "A-01 Osterweddingen");
});

Deno.test("Umbruch: nichts geht verloren, jede Zeile passt", async () => {
  const { umbrechen } = await import("./pdf_format.ts");
  const schrift = { widthOfTextAtSize: (t: string, g: number) => t.length * g * 0.5 }; // 4 pt je Zeichen bei 8 pt
  const text = "Münzprüfer gereinigt und neu kalibriert, Ausgabefach Donnerstagnachmittagsschicht";
  const zeilen = umbrechen(text, 60, schrift, 8); // 15 Zeichen je Zeile
  for (const z of zeilen) if (z.length > 15) throw new Error(`zu lang: ${z}`);
  assertEquals(zeilen.join(" ").replace(/\s+/g, ""), text.replace(/\s+/g, ""));
  assertEquals(umbrechen("", 60, schrift, 8), [""]);
  assertEquals(umbrechen("kurz", 60, schrift, 8), ["kurz"]);
});
