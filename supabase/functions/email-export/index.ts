// ============================================================================
// Edge Function: email-export
// ----------------------------------------------------------------------------
// Löst die zweite Hälfte der Zusage ein: „Ich möchte JEDE versendete und
// empfangene E-Mail transparent einsehen und EXPORTIEREN können."
//
// Zwei Formate, weil zwei verschiedene Fragen dahinterstehen:
//
//   format=csv  — „Was ist in diesem Zeitraum rausgegangen?" Eine Tabelle
//                 mit den Kopfdaten, die sich in Excel öffnen und einem
//                 Prüfer vorlegen lässt.
//
//   format=eml  — „Wie sah genau diese eine Mail aus?" Eine echte
//                 .eml-Datei, die sich in Outlook, Thunderbird oder Apple
//                 Mail öffnen lässt — mit Absender, Empfänger, Datum und
//                 beiden Fassungen. Das ist das Format, das im Streitfall
//                 zählt, weil es die Mail selbst ist und nicht ein
//                 Bildschirmfoto davon.
//
// WER DARF DAS. Die Berechtigung wird NICHT hier nachgebaut. Sie liegt an
// genau einer Stelle: der RLS-Regel auf `email_log` (0086). Diese Function
// arbeitet mit dem Token der aufrufenden Person, ruft die INVOKER-Funktionen
// aus 0089 auf und bekommt damit von der Datenbank ausschliesslich das, was
// diese Person ohnehin sehen dürfte. `is_internal()` wird nur abgefragt, um
// eine klare 403 zu liefern statt einer verwirrend leeren Datei.
//
// Genau diese Trennung fehlte den sechs Functions, die am 03.08.2026
// nachgebessert werden mussten: Sie trugen die Rollenprüfung selbst, jede
// mit einer eigenen Kopie — und eine Kopie war falsch.
//
// Die Formatierer stehen in `format.ts`, ohne Netz- und Datenbankzugriff,
// und sind in `format_test.ts` abgedeckt.
// ============================================================================
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";
import { corsHeaders, jsonResponse } from "../_shared/cors.ts";
import { csvBauen, dateiname, emlBauen, type LogZeile } from "./format.ts";

/// Obergrenze für einen CSV-Export. `email_log_list` liefert höchstens 500
/// Zeilen pro Aufruf, deshalb wird geblättert. Die Grenze verhindert, dass
/// ein Export bei stark gewachsenem Protokoll ins Zeitlimit läuft — wer
/// mehr braucht, grenzt über den Zeitraum ein.
const MAX_ZEILEN = 20_000;
const SEITE = 500;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST" && req.method !== "GET") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  const authHeader = req.headers.get("Authorization");
  if (!authHeader) return jsonResponse({ error: "Missing Authorization" }, 401);

  const caller = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_ANON_KEY")!,
    { global: { headers: { Authorization: authHeader } } },
  );

  // Parameter dürfen aus der Query oder dem Rumpf kommen — die Ansicht
  // schickt POST mit JSON, ein Test von Hand ist per GET bequemer.
  const url = new URL(req.url);
  const rumpf = req.method === "POST"
    ? await req.json().catch(() => ({} as Record<string, unknown>))
    : {};
  const hole = (name: string): string | null => {
    const ausRumpf = (rumpf as Record<string, unknown>)[name];
    if (typeof ausRumpf === "string" && ausRumpf !== "") return ausRumpf;
    return url.searchParams.get(name);
  };

  // Die eine Berechtigungsfrage. Sie wird von der Datenbank beantwortet,
  // nicht hier — is_internal() ist dieselbe Prüfung, die auch die
  // RLS-Regel auf email_log verwendet.
  const { data: intern, error: internFehler } = await caller.rpc("is_internal");
  if (internFehler) {
    console.error("[email-export] is_internal fehlgeschlagen:", internFehler.message);
    return jsonResponse({ error: "Berechtigung nicht prüfbar" }, 500);
  }
  if (intern !== true) return jsonResponse({ error: "Nicht autorisiert" }, 403);

  const format = (hole("format") ?? "csv").toLowerCase();

  // -------------------------------------------------------------------------
  // Einzelne Mail als .eml
  // -------------------------------------------------------------------------
  if (format === "eml") {
    const id = hole("id");
    if (!id) return jsonResponse({ error: "id fehlt" }, 400);

    const { data, error } = await caller.rpc("email_log_detail", { p_id: id });
    if (error) {
      console.error("[email-export] email_log_detail:", error.message);
      return jsonResponse({ error: "Abruf fehlgeschlagen" }, 500);
    }
    const mail = Array.isArray(data) ? data[0] : data;
    if (!mail) return jsonResponse({ error: "Nicht gefunden" }, 404);

    const datum = new Date(mail.occurred_at).toISOString().slice(0, 10);
    const name = `${datum}_${dateiname(mail.subject ?? "mail")}.eml`;
    return new Response(emlBauen(mail), {
      status: 200,
      headers: {
        ...corsHeaders,
        "Content-Type": "message/rfc822; charset=utf-8",
        "Content-Disposition": `attachment; filename="${name}"`,
      },
    });
  }

  // -------------------------------------------------------------------------
  // Gefilterte Liste als CSV
  // -------------------------------------------------------------------------
  if (format !== "csv") {
    return jsonResponse({ error: "format muss csv oder eml sein" }, 400);
  }

  const filter = {
    p_direction: hole("direction"),
    p_status: hole("status"),
    p_search: hole("search"),
    p_from: hole("from"),
    p_to: hole("to"),
  };

  const alle: LogZeile[] = [];
  for (let offset = 0; offset < MAX_ZEILEN; offset += SEITE) {
    const { data, error } = await caller.rpc("email_log_list", {
      ...filter,
      p_limit: SEITE,
      p_offset: offset,
    });
    if (error) {
      console.error("[email-export] email_log_list:", error.message);
      return jsonResponse({ error: "Abruf fehlgeschlagen" }, 500);
    }
    const seite = (data ?? []) as LogZeile[];
    alle.push(...seite);
    if (seite.length < SEITE) break;
  }

  const name = `email-protokoll_${new Date().toISOString().slice(0, 10)}.csv`;
  return new Response(csvBauen(alle), {
    status: 200,
    headers: {
      ...corsHeaders,
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="${name}"`,
      // Damit die Ansicht anzeigen kann „1.234 Zeilen exportiert", ohne
      // die Datei selbst zu zählen.
      "X-Zeilen": String(alle.length),
    },
  });
});
