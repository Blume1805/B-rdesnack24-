// ============================================================================
// Edge Function: documents-install-haccp-set — STILLGELEGT am 03.08.2026
// ----------------------------------------------------------------------------
// Diese Function war ein Installer: sie hat acht Dokumente erzeugt und
// angelegt — HACCP-Eigenkontrollkonzept, Verfahrensdokumentation (GoBD) und
// sechs Protokollvorlagen (Befüllung, Temperatur, Reinigung, Vernichtung,
// Wartung, Geldentnahme).
//
// DIE ARBEIT IST GETAN. Alle acht Dokumente liegen seit dem 20.07.2026 in
// `documents` (die GoBD-Doku seit dem 15.07.), zuletzt am 26.07.2026
// aufgefrischt. Ein Installer, der fertig installiert hat, muss nicht
// dauerhaft aufrufbar bleiben.
//
// WARUM JETZT. Die Function trug bis zuletzt die Rollenprüfung in ihrer
// alten Form: sie sah nur auf `role`, nicht auf `status`/`deleted_at`.
// Migration 0087 hat der Lücke die Grundlage entzogen — eine gefälschte
// Rolle kann seither gar nicht mehr in `profiles` entstehen. Übrig blieb
// ein schmaler Rest: ein deaktiviertes oder noch nicht aktiviertes internes
// Konto hätte die Prüfung weiterhin bestanden und die acht Vorlagen neu
// erzeugen können. Kein Datenabfluss, keine Rechteausweitung — aber bei
// Hygiene- und Steuerdokumentation ist schon das unnötige Risiko.
//
// Der Weg dorthin ist bewusst gewählt und offen benannt: Die korrigierte
// Fassung liegt vollständig im Repository, konnte aber nicht ausgeliefert
// werden. Der Deploy-Kanal nimmt Dateiinhalte nur inline entgegen, es gibt
// hier weder ein Supabase-CLI-Token noch eine Deploy-Pipeline (die CI
// lintet nur). 1033 Zeilen Hygiene-Dokumentation von Hand abzuschreiben
// wäre das grössere Risiko gewesen als die Lücke selbst: ein einzelner
// falscher Buchstabe hätte still die Compliance-Vorlagen verfälscht, ohne
// dass es irgendwo aufgefallen wäre.
//
// WIE MAN SIE WIEDERBELEBT. Der vollständige Quelltext steht unverändert
// in `installer.ts` — inklusive der korrigierten Rollenprüfung (sie wertet
// `status` und `deleted_at` mit aus). Zum Reaktivieren:
//
//   1. `installer.ts` nach `index.ts` kopieren (diese Datei ersetzen),
//   2. mit dem Supabase CLI byte-genau von der Platte deployen:
//      `supabase functions deploy documents-install-haccp-set`
//   3. danach ggf. mit `?refresh=1` die Vorlagen neu erzeugen.
//
// Solange das nicht gebraucht wird, antwortet die Function mit 410 statt
// zu arbeiten. Ein stillgelegter, erklärender Endpunkt ist ehrlicher als
// ein gelöschter: ein Aufruf bekommt eine Antwort, die sagt was los ist,
// statt eines 404, das nach „falsche URL" aussieht.
// ============================================================================

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
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
        "documents-install-haccp-set wurde am 03.08.2026 stillgelegt. Die acht " +
        "HACCP-/GoBD-Dokumente sind installiert und bleiben unberührt. Zum " +
        "Neuerzeugen den Quelltext aus installer.ts wieder als index.ts " +
        "ausrollen (siehe Kommentar in index.ts).",
    }),
    {
      status: 410,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    },
  );
});
