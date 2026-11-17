// verwaltung-mcp — Verbindung zwischen Claude und der Verwaltung (MCP).
//
// Entscheidung Philipp 17.11.2026. Claude meldet sich über den OAuth-2.1-
// Server von Supabase Auth als Philipp an (einmalige Zustimmung in der App
// unter /oauth/consent). Dieser Dienst prüft das Zugriffstoken selbst
// (verify_jwt = false, sonst könnte er die Anmelde-Entdeckung nicht
// beantworten) und arbeitet ausschließlich mit den Rechten des Nutzers:
// Datenbankabfragen und die PDF-Erzeugung laufen mit seinem Token, die
// Zeilenschutz-Regeln und die Zwei-Faktor-Pflicht gelten also unverändert.
// Den Dienstschlüssel braucht er nur, um das fertige PDF im gesperrten
// Speicher `mcp-exporte` abzulegen und einen befristeten Link zu erzeugen.
//
// An Claude gehen nie Daten von Beschäftigten (siehe mcp.ts).

import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";
import { abgelaufeneExporte, bearbeite, kurz, type Werkzeugbank } from "./mcp.ts";

const URL_BASIS = Deno.env.get("SUPABASE_URL")!;
const RESSOURCE = `${URL_BASIS}/functions/v1/verwaltung-mcp`;
const METADATEN = `${RESSOURCE}/.well-known/oauth-protected-resource`;
const LINK_GUELTIG_S = 24 * 60 * 60;

const kopf = {
  "Content-Type": "application/json",
  "Cache-Control": "no-store",
};

const json = (body: unknown, status = 200, extra: Record<string, string> = {}) =>
  new Response(JSON.stringify(body), { status, headers: { ...kopf, ...extra } });

function nichtAngemeldet() {
  // RFC 9728: Claude findet über diesen Kopf den Anmeldeserver.
  return json({ error: "unauthorized" }, 401, {
    "WWW-Authenticate": `Bearer resource_metadata="${METADATEN}"`,
  });
}

Deno.serve(async (req) => {
  const pfad = new URL(req.url).pathname;

  if (req.method === "GET" && pfad.endsWith("/.well-known/oauth-protected-resource")) {
    return json({
      resource: RESSOURCE,
      authorization_servers: [`${URL_BASIS}/auth/v1`],
      bearer_methods_supported: ["header"],
      resource_name: "Bördesnack24 Verwaltung",
    });
  }
  if (req.method !== "POST") return json({ error: "Nur POST" }, 405, { Allow: "POST" });

  const auth = req.headers.get("Authorization") ?? "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7).trim() : "";
  if (!token) return nichtAngemeldet();

  const anon = Deno.env.get("SUPABASE_ANON_KEY")!;
  const nutzer = createClient(URL_BASIS, anon, {
    global: { headers: { Authorization: `Bearer ${token}` } },
    auth: { persistSession: false, autoRefreshToken: false },
  });
  const { data: wer, error: werFehler } = await nutzer.auth.getUser(token);
  if (werFehler || !wer?.user) return nichtAngemeldet();
  const uid = wer.user.id;

  const dienst = createClient(URL_BASIS, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  // PDFs können Namen von Beschäftigten enthalten. Nach Ablauf des Links
  // (24 h) gibt es keinen Grund, sie aufzubewahren: Jeder neue Export räumt
  // die abgelaufenen Exporte desselben Nutzers weg. Scheitert das, wird der
  // Export trotzdem erstellt und der Fehler protokolliert.
  async function alteExporteLoeschen() {
    try {
      const ablage = dienst.storage.from("mcp-exporte");
      const { data, error } = await ablage.list(uid, { limit: 1000 });
      if (error || !data) throw new Error(error?.message ?? "keine Liste");
      const weg = abgelaufeneExporte(data.map((d: { name: string }) => d.name), Date.now(), LINK_GUELTIG_S * 1000);
      if (weg.length) {
        const { error: rmErr } = await ablage.remove(weg.map((n) => `${uid}/${n}`));
        if (rmErr) throw new Error(rmErr.message);
      }
    } catch (e) {
      console.error(`[verwaltung-mcp] Aufräumen: ${kurz(e)}`);
    }
  }

  const bank: Werkzeugbank = {
    async protokolliere(werkzeug, parameter) {
      const { error } = await nutzer.rpc("mcp_aufruf_protokollieren", {
        p_werkzeug: werkzeug, p_parameter: parameter,
      });
      if (error) throw new Error(error.message);
    },
    async offeneVorgaenge() {
      const { data, error } = await nutzer.rpc("mcp_offene_vorgaenge");
      if (error) throw new Error(error.message);
      return data;
    },
    async protokollPdf(kind, von, bis) {
      // Bestehende Funktion, mit dem Token des Nutzers (Zeilenschutz gilt).
      const res = await fetch(`${URL_BASIS}/functions/v1/protocol-export-pdf`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}`, apikey: anon, "Content-Type": "application/json" },
        body: JSON.stringify({ kind, from: von, to: bis }),
      });
      if (!res.ok) throw new Error(`PDF-Erzeugung meldet ${res.status}`);
      const pdf = await res.json() as { filename?: string; base64?: string };
      if (!pdf.base64) throw new Error("Kein PDF erhalten");
      const bytes = Uint8Array.from(atob(pdf.base64), (c) => c.charCodeAt(0));
      await alteExporteLoeschen();
      const dateiname = pdf.filename ?? `${kind}_${von}_${bis}.pdf`;
      const pfadImSpeicher = `${uid}/${Date.now()}_${dateiname}`;
      const { error: upErr } = await dienst.storage.from("mcp-exporte")
        .upload(pfadImSpeicher, bytes, { contentType: "application/pdf", upsert: false });
      if (upErr) throw new Error("Ablage fehlgeschlagen");
      const { data: link, error: linkErr } = await dienst.storage.from("mcp-exporte")
        .createSignedUrl(pfadImSpeicher, LINK_GUELTIG_S, { download: dateiname });
      if (linkErr || !link?.signedUrl) throw new Error("Link konnte nicht erzeugt werden");
      return { link: link.signedUrl, dateiname };
    },
  };

  let nachricht: unknown;
  try {
    nachricht = await req.json();
  } catch {
    return json({ jsonrpc: "2.0", id: null, error: { code: -32700, message: "Kein gültiges JSON" } }, 400);
  }

  try {
    if (Array.isArray(nachricht)) {
      const antworten = (await Promise.all(nachricht.map((m) => bearbeite(m, bank)))).filter((a) => a !== null);
      return antworten.length ? json(antworten) : new Response(null, { status: 202 });
    }
    const a = await bearbeite(nachricht as never, bank);
    return a === null ? new Response(null, { status: 202 }) : json(a);
  } catch (e) {
    console.error(`[verwaltung-mcp] ${String(e)}`);
    const id = (nachricht as { id?: unknown })?.id ?? null;
    return json({ jsonrpc: "2.0", id, error: { code: -32000, message: kurz(e) } });
  }
});
