// deno-lint-ignore-file no-explicit-any -- Testantworten sind JSON-RPC-Objekte ohne Typ
import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { abgelaufeneExporte, bearbeite, kurz, PROTOKOLLARTEN, type Werkzeugbank, zeitraumFehler } from "./mcp.ts";

const HEUTE = new Date("2026-11-17T12:00:00Z");

function bank(over: Partial<Werkzeugbank> = {}) {
  const aufrufe: string[] = [];
  const b: Werkzeugbank = {
    protokollPdf: (kind, von, bis) => { aufrufe.push(`pdf:${kind}:${von}:${bis}`); return Promise.resolve({ link: "https://x/sign?token=abc", dateiname: "t.pdf" }); },
    offeneVorgaenge: () => { aufrufe.push("vorgaenge"); return Promise.resolve({ freigaben_offen: [] }); },
    protokolliere: (w) => { aufrufe.push(`log:${w}`); return Promise.resolve(); },
    ...over,
  };
  return { b, aufrufe };
}

Deno.test("initialize nennt Werkzeugfähigkeit und übernimmt bekannte Version", async () => {
  const { b } = bank();
  const r = await bearbeite({ jsonrpc: "2.0", id: 1, method: "initialize", params: { protocolVersion: "2025-03-26" } }, b) as any;
  assertEquals(r.result.protocolVersion, "2025-03-26");
  assertEquals(typeof r.result.capabilities.tools, "object");
});

Deno.test("Benachrichtigung bekommt keine Antwort", async () => {
  const { b } = bank();
  assertEquals(await bearbeite({ jsonrpc: "2.0", method: "notifications/initialized" }, b), null);
});

Deno.test("tools/list: zwei Werkzeuge, keine Schulungsnachweise", async () => {
  const { b } = bank();
  const r = await bearbeite({ jsonrpc: "2.0", id: 2, method: "tools/list" }, b) as any;
  assertEquals(r.result.tools.map((t: any) => t.name), ["protokoll_pdf", "offene_vorgaenge"]);
  assertEquals(Object.values(PROTOKOLLARTEN).some((a) => a.kind === "training"), false);
});

Deno.test("protokoll_pdf: gültiger Aufruf protokolliert erst, liefert nur Link", async () => {
  const { b, aufrufe } = bank();
  const r = await bearbeite({ jsonrpc: "2.0", id: 3, method: "tools/call",
    params: { name: "protokoll_pdf", arguments: { art: "temperatur", von: "2026-10-01", bis: "2026-10-31" } } }, b, HEUTE) as any;
  assertEquals(aufrufe, ["log:protokoll_pdf", "pdf:temperature:2026-10-01:2026-10-31"]);
  assertEquals(r.result.isError, false);
  // Meldung an Claude ohne Link; Link nur im Teil, der für den Menschen bestimmt ist.
  assertEquals(r.result.content[0].text.includes("https://x/sign"), false);
  assertEquals(r.result.content[0].text.includes("nicht selbst öffnen"), true);
  assertEquals(r.result.content[1].text.includes("https://x/sign?token=abc"), true);
  assertEquals(r.result.content[1].annotations.audience, ["user"]);
});

Deno.test("protokoll_pdf: Schulungen und unbekannte Arten abgewiesen, ohne PDF", async () => {
  const { b, aufrufe } = bank();
  for (const art of ["schulung", "training", "x"]) {
    const r = await bearbeite({ jsonrpc: "2.0", id: 4, method: "tools/call",
      params: { name: "protokoll_pdf", arguments: { art, von: "2026-10-01", bis: "2026-10-31" } } }, b, HEUTE) as any;
    assertEquals(r.result.isError, true);
  }
  assertEquals(aufrufe, []);
});

Deno.test("Zeitraum: Format, Reihenfolge, Länge, Zukunft", () => {
  assertEquals(zeitraumFehler("2026-10-01", "2026-10-31", HEUTE), null);
  assertEquals(zeitraumFehler("01.10.2026", "2026-10-31", HEUTE) !== null, true);
  assertEquals(zeitraumFehler("2026-02-30", "2026-03-01", HEUTE) !== null, true);
  assertEquals(zeitraumFehler("2026-10-31", "2026-10-01", HEUTE) !== null, true);
  assertEquals(zeitraumFehler("2024-01-01", "2026-01-01", HEUTE) !== null, true);
  assertEquals(zeitraumFehler("2027-01-01", "2027-01-31", HEUTE) !== null, true);
});

Deno.test("offene_vorgaenge: protokolliert und gibt Struktur zurück", async () => {
  const { b, aufrufe } = bank();
  const r = await bearbeite({ jsonrpc: "2.0", id: 5, method: "tools/call", params: { name: "offene_vorgaenge" } }, b) as any;
  assertEquals(aufrufe, ["log:offene_vorgaenge", "vorgaenge"]);
  assertEquals(r.result.structuredContent, { freigaben_offen: [] });
});

Deno.test("Fehler der Datenbank werden kurz und ohne Adressen/Token gemeldet", async () => {
  const { b } = bank({ offeneVorgaenge: () => Promise.reject(new Error("fail https://abc.supabase.co/rest eyJhbGciOi.x.y")) });
  const r = await bearbeite({ jsonrpc: "2.0", id: 6, method: "tools/call", params: { name: "offene_vorgaenge" } }, b) as any;
  assertEquals(r.result.isError, true);
  assertEquals(r.result.content[0].text.includes("supabase.co"), false);
  assertEquals(r.result.content[0].text.includes("eyJ"), false);
  assertEquals(kurz("x https://a.b/c"), "x [Adresse]");
});

Deno.test("unbekannte Methode und Werkzeug", async () => {
  const { b } = bank();
  assertEquals((await bearbeite({ jsonrpc: "2.0", id: 7, method: "resources/list" }, b) as any).error.code, -32601);
  assertEquals((await bearbeite({ jsonrpc: "2.0", id: 8, method: "tools/call", params: { name: "loeschen" } }, b) as any).error.code, -32602);
  assertEquals((await bearbeite({ id: 9, method: "ping" } as any, b) as any).error.code, -32600);
});

Deno.test("abgelaufeneExporte: nur Exporte älter als 24 h, fremde Namen bleiben", () => {
  const jetzt = Date.UTC(2026, 10, 17, 12);
  const alt = String(jetzt - 25 * 3600_000);
  const frisch = String(jetzt - 3600_000);
  assertEquals(
    abgelaufeneExporte([`${alt}_a.pdf`, `${frisch}_b.pdf`, "notiz.pdf", "123_kurz.pdf"], jetzt),
    [`${alt}_a.pdf`],
  );
});
