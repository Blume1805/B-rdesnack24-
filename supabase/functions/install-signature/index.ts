// ============================================================================
// Edge Function: install-signature — STILLGELEGT am 03.08.2026
// ----------------------------------------------------------------------------
// Diese Function war ein Einmal-Werkzeug: sie hat eine Unterschrifts-PNG in
// den Bucket `partner-signatures` geladen und die zugehörige Zeile in
// `partner_signatures` verknüpft. Sie lag ausschliesslich auf dem Server,
// nie im Repository — gefunden wurde sie nur, weil die Liste der
// deployten Functions nicht zum Repository passte.
//
// WARUM SIE WEG MUSSTE. Drei Eigenschaften zusammen ergaben einen
// unauthentifizierten Schreibpfad auf Unterschriftsdaten:
//
//   1. `verify_jwt = false` — aufrufbar ohne jede Anmeldung.
//   2. Der einzige Schutz war ein geteiltes Geheimnis MIT fest
//      einkompiliertem Rückfallwert:
//
//        Deno.env.get("INSTALL_SIG_SECRET") ?? "install-sig-oneshot-2026"
//
//      War die Variable im Projekt nicht gesetzt, stand das Geheimnis im
//      ausgelieferten Code. Ein Rückfallwert ist bei einem Geheimnis kein
//      Komfort, sondern die Abschaffung des Geheimnisses.
//   3. Geschrieben wurde mit dem Service-Role-Schlüssel, also an RLS
//      vorbei — und der Ablagepfad kam ungeprüft aus dem Header
//      `x-signature-id` (`${sigId}.png`, `upsert: true`).
//
// In Summe: Wer den Aufruf kannte, konnte die Unterschrift eines beliebigen
// Partners überschreiben, den Datensatz auf „manual-upload" umschreiben und
// sich eine fünf Jahre gültige signierte URL zurückgeben lassen. Bei
// Unterschriften ist das keine Datenänderung, sondern eine Fälschung.
//
// Der Zweck ist ausserdem erledigt: Die Signatur-Hilfstabellen sind mit
// Migration 0082 entfernt worden, und Pias Unterschrift kommt künftig über
// DocuSign. Es gibt also nichts mehr, wofür dieses Werkzeug gebraucht würde.
//
// Statt die Function zu löschen, bleibt sie als Grabstein bestehen: Ein
// stillgelegter, dokumentierter Endpunkt ist ehrlicher als ein
// verschwundener, weil ein Aufruf jetzt eine erklärende Antwort bekommt
// statt eines 404, das nach „falsche URL" aussieht. Der ursprüngliche
// Quelltext steht oben vollständig beschrieben und ist über die
// Versionshistorie der Function (Version 1) weiterhin einsehbar.
// ============================================================================

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-signature-id, x-shared-secret",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

Deno.serve((req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }
  return new Response(
    JSON.stringify({
      error: "gone",
      message:
        "install-signature wurde am 03.08.2026 stillgelegt. Unterschriften " +
        "werden über DocuSign erfasst (docusign-fetch-signature).",
    }),
    {
      status: 410,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    },
  );
});
