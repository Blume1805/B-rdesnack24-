// ============================================================================
// Edge Function: sevdesk-invoice
// ----------------------------------------------------------------------------
// Nimmt einen angeforderten Rechnungslauf (`business_invoice_runs`) und legt
// daraus in sevDesk eine Rechnung als ENTWURF an. Versendet wird nichts.
//
// Warum die Rechnung in sevDesk entsteht und nicht hier: Eine ordnungsgemässe
// Rechnung nach § 14 UStG braucht eine lückenlose Nummernfolge, die richtige
// Steuerausweisung, die Aufbewahrung nach § 147 AO und — für die E-Rechnung —
// ein strukturiertes Format (XRechnung/ZUGFeRD). Das alles leistet sevDesk
// bereits. Es hier ein zweites Mal zu bauen hiesse, dieselbe Rechnung an zwei
// Orten zu führen; die Hausregel „ein Geldfluss, eine Buchung" verbietet das
// aus gutem Grund.
//
// ----------------------------------------------------------------------------
// ⚠️ DIE FELDZUORDNUNG IST UNGEPRÜFT — UND DAS STEHT HIER, WEIL ES ZÄHLT
//
// `api.sevdesk.de` ist aus der Entwicklungsumgebung nicht erreichbar (der
// Egress-Proxy lehnt den Host ab), und die Dokumentation ebenso wenig. Die
// Feldnamen unten stammen aus der öffentlichen v1-Schnittstelle, wie sie
// allgemein bekannt ist — sie sind NICHT am echten Konto nachgestellt.
//
// Beim Beleg-Sync ist genau das schiefgegangen: `embed` wurde ignoriert,
// `creditDebit` war verkehrt herum, und `description` war nicht die
// Beschreibung, sondern die Belegnummer. Drei Fehler, die erst der erste
// echte Lauf gezeigt hat.
//
// Deshalb ist der Ablauf hier zweistufig:
//
//   1. `probe: true`  — liest nur (`GET /Invoice`, `GET /Contact`) und
//      schreibt die tatsächlichen Feldnamen in `sevdesk_antwort`. Es wird
//      NICHTS angelegt.
//   2. ohne `probe`   — legt die Rechnung an und schreibt die vollständige
//      Antwort mit, damit ein Fehlschlag nachlesbar ist statt geraten.
//
// **Zuerst die Probe laufen lassen.** Danach lässt sich die Zuordnung gegen
// echte Feldnamen richten, statt sie zu vermuten.
//
// ----------------------------------------------------------------------------
// WAS BEWUSST NICHT PASSIERT
//
//   * Kein Versand. Die Rechnung bleibt Entwurf, bis ein Gesellschafter sie
//     in der App freigibt (`business_invoice_release`) — und den Versand löst
//     er in sevDesk aus, wo auch das E-Rechnungsformat entsteht.
//   * Kein Schreiben nach `finance_bookings`. Die Rechnung kommt über den
//     vorhandenen Beleg-Sync als EINE Buchung zurück.
//   * Kein Anlegen von Kontakten. Fehlt `businesses.sevdesk_contact_id`,
//     bricht schon `business_invoice_request` ab — einen Kontakt blind
//     anzulegen erzeugt Dubletten in der Buchhaltung.
// ============================================================================
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";
import { jsonResponse, corsHeaders } from "../_shared/cors.ts";

/** Feldnamen eines Objekts, ohne Inhalte. Wie `belegProbe` im Beleg-Sync. */
function struktur(o: unknown): Record<string, unknown> | null {
  if (!o || typeof o !== "object") return null;
  const obj = o as Record<string, unknown>;
  const felder = Object.keys(obj).sort();
  const unterobjekte: { feld: string; felder: string[] }[] = [];
  for (const k of felder) {
    const v = obj[k];
    if (v && typeof v === "object" && !Array.isArray(v)) {
      unterobjekte.push({
        feld: k,
        felder: Object.keys(v as Record<string, unknown>).sort(),
      });
    }
  }
  return { felder, unterobjekte };
}

async function holeEines(
  url: string,
  token: string,
): Promise<{ objekt: Record<string, unknown> | null; fehler: string | null }> {
  try {
    const res = await fetch(`${url}?limit=1`, {
      headers: { Authorization: token, Accept: "application/json" },
    });
    if (!res.ok) {
      return { objekt: null, fehler: `HTTP ${res.status}: ${await res.text()}` };
    }
    const body = await res.json();
    return { objekt: (body.objects ?? [])[0] ?? null, fehler: null };
  } catch (e) {
    return { objekt: null, fehler: String(e) };
  }
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return jsonResponse({ error: "Method not allowed" }, 405);

  const authHeader = req.headers.get("Authorization");
  if (!authHeader) return jsonResponse({ error: "Missing Authorization" }, 401);

  const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
  const anonKey = Deno.env.get("SUPABASE_ANON_KEY")!;
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const sevToken = Deno.env.get("SEVDESK_API_TOKEN");
  const sevBase = Deno.env.get("SEVDESK_BASE_URL") ?? "https://my.sevdesk.de/api/v1";

  if (!sevToken) return jsonResponse({ error: "sevDesk nicht konfiguriert" }, 500);

  // Aufrufer und Berechtigung. Wer Firmenkunden verwaltet, darf die Rechnung
  // anstossen — freigeben darf sie danach nur ein Gesellschafter, und das
  // prüft die Datenbank, nicht diese Funktion.
  const caller = createClient(supabaseUrl, anonKey, {
    global: { headers: { Authorization: authHeader } },
  });
  const { data: userData, error: userErr } = await caller.auth.getUser();
  if (userErr || !userData.user) return jsonResponse({ error: "Unauthorized" }, 401);

  const { data: darf } = await caller.rpc("auth_has_permission", {
    perm: "businesses.manage",
  });
  if (darf !== true) return jsonResponse({ error: "Forbidden" }, 403);

  let runId: string | null = null;
  let nurProbe = false;
  try {
    const body = await req.json();
    runId = body.run ? String(body.run) : null;
    nurProbe = body.probe === true;
  } catch {
    // Leerer Rumpf ist zulässig: dann wird der älteste offene Lauf genommen.
  }

  const admin = createClient(supabaseUrl, serviceKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  // ── Stufe 1: Strukturprobe ────────────────────────────────────────────
  // Sie läuft IMMER, auch vor dem Anlegen. Schlägt das Anlegen fehl, steht
  // damit im Protokoll, wie die Felder wirklich heissen.
  const [rechnungProbe, kontaktProbe] = await Promise.all([
    holeEines(`${sevBase}/Invoice`, sevToken),
    holeEines(`${sevBase}/Contact`, sevToken),
  ]);

  const probe = {
    invoice: {
      fehler: rechnungProbe.fehler,
      struktur: struktur(rechnungProbe.objekt),
    },
    contact: {
      fehler: kontaktProbe.fehler,
      struktur: struktur(kontaktProbe.objekt),
    },
    geprueft_am: new Date().toISOString(),
  };

  if (nurProbe) {
    return jsonResponse({ ok: true, nur_probe: true, probe });
  }

  // ── Lauf holen ────────────────────────────────────────────────────────
  const auswahl = admin
    .from("business_invoice_runs")
    .select("id, business_id, jahr, monat, status, grundlage, brutto")
    .eq("status", "angefordert")
    .order("angefordert_am", { ascending: true })
    .limit(1);
  const { data: laeufe, error: laufErr } = runId
    ? await admin
        .from("business_invoice_runs")
        .select("id, business_id, jahr, monat, status, grundlage, brutto")
        .eq("id", runId)
        .limit(1)
    : await auswahl;
  if (laufErr) return jsonResponse({ error: String(laufErr) }, 500);

  const lauf = (laeufe ?? [])[0];
  if (!lauf) {
    return jsonResponse({ ok: true, hinweis: "Kein offener Rechnungslauf.", probe });
  }
  if (lauf.status !== "angefordert") {
    return jsonResponse(
      { error: `Lauf steht auf „${lauf.status}" und nicht auf „angefordert".` },
      409,
    );
  }

  const grundlage = lauf.grundlage as Record<string, unknown>;
  const empfaenger = (grundlage.empfaenger ?? {}) as Record<string, unknown>;
  const basis = (grundlage.basis ?? {}) as Record<string, unknown>;
  const saetze = (basis.saetze ?? []) as Record<string, unknown>[];

  const monatName = [
    "Januar", "Februar", "März", "April", "Mai", "Juni",
    "Juli", "August", "September", "Oktober", "November", "Dezember",
  ][Number(lauf.monat) - 1];

  // ── Stufe 2: Rechnung anlegen ─────────────────────────────────────────
  // Eine Position JE STEUERSATZ, nicht je Kauf. Gründe:
  //   * Ein Monat kann hunderte Käufe haben; eine Rechnung mit hunderten
  //     Zeilen liest niemand.
  //   * § 14 UStG verlangt die Entgelte NACH STEUERSÄTZEN aufgeschlüsselt —
  //     genau das ist diese Form.
  //   * Der Einzelnachweis liegt der Rechnung als Aufstellung aus der App
  //     bei; er steht in `grundlage.aufstellung` und ist eingefroren.
  const positionen = saetze.map((s, i) => ({
    objectName: "InvoicePos",
    mapAll: true,
    name: `Warenbezug ${monatName} ${lauf.jahr} — ${s.satz_prozent} % USt`,
    quantity: 1,
    price: Number(s.netto),
    taxRate: Number(s.satz_prozent),
    positionNumber: i,
    unity: { id: 1, objectName: "Unity" },
  }));

  const nutzlast = {
    invoice: {
      objectName: "Invoice",
      mapAll: true,
      invoiceType: "RE",
      status: 100, // 100 = Entwurf. Wird NICHT versendet.
      invoiceDate: new Date().toISOString().slice(0, 10),
      contact: {
        id: Number(empfaenger.sevdesk_contact_id),
        objectName: "Contact",
      },
      header: `Rechnung ${monatName} ${lauf.jahr}`,
      headText:
        `Warenbezug Ihrer Beschäftigten an unserem Automaten am Standort ` +
        `Ihres Unternehmens im Zeitraum ${monatName} ${lauf.jahr}. ` +
        `Der Einzelnachweis liegt als Aufstellung bei.`,
      currency: "EUR",
      taxType: "default",
      taxText: "Umsatzsteuer",
      discount: 0,
      // Kleinunternehmerregelung greift hier nicht — Bördesnack24 weist
      // Umsatzsteuer aus (USt-IdNr. DE 458804058).
      smallSettlement: false,
    },
    invoicePosSave: positionen,
    invoicePosDelete: null,
    discountSave: null,
    discountDelete: null,
  };

  let antwort: unknown = null;
  let httpStatus = 0;
  try {
    const res = await fetch(`${sevBase}/Invoice/Factory/saveInvoice`, {
      method: "POST",
      headers: {
        Authorization: sevToken,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(nutzlast),
    });
    httpStatus = res.status;
    const text = await res.text();
    try {
      antwort = JSON.parse(text);
    } catch {
      antwort = { roh: text.slice(0, 4000) };
    }

    if (!res.ok) throw new Error(`sevDesk HTTP ${res.status}`);

    const obj =
      ((antwort as Record<string, unknown>)?.objects as Record<string, unknown>) ??
      null;
    const rechnung = (obj?.invoice ?? obj) as Record<string, unknown> | null;

    await admin
      .from("business_invoice_runs")
      .update({
        status: "in_sevdesk",
        sevdesk_invoice_id: rechnung?.id ? String(rechnung.id) : null,
        sevdesk_invoice_number: rechnung?.invoiceNumber
          ? String(rechnung.invoiceNumber)
          : null,
        sevdesk_antwort: { probe, http: httpStatus, antwort },
        fehlertext: null,
      })
      .eq("id", lauf.id);

    return jsonResponse({
      ok: true,
      run: lauf.id,
      sevdesk_invoice_id: rechnung?.id ?? null,
      sevdesk_invoice_number: rechnung?.invoiceNumber ?? null,
      hinweis:
        "Entwurf in sevDesk angelegt. Versand erst nach Freigabe durch einen " +
        "Gesellschafter.",
      probe,
    });
  } catch (e) {
    // Der Fehltext wird vollständig festgehalten. Beim Beleg-Sync war genau
    // das der Unterschied zwischen „geht nicht" und „Feld X heisst anders".
    await admin
      .from("business_invoice_runs")
      .update({
        status: "fehler",
        fehlertext: String(e),
        sevdesk_antwort: { probe, http: httpStatus, antwort, gesendet: nutzlast },
      })
      .eq("id", lauf.id);

    return jsonResponse(
      { error: String(e), http: httpStatus, antwort, probe },
      502,
    );
  }
});
