-- R-2 aus dem Audit vom 31.08.2026.
--
-- advertising_redirect_count() war fuer anon ausfuehrbar: ohne Rate-Limit,
-- ohne Entprellung, ohne Sitzungsbindung. Der Rumpf zaehlt bedingungslos
-- hoch. Wer die Kampagnen-UUID kannte -- sie steht im oeffentlichen
-- Weiterleitungslink -- konnte den Zaehler beliebig hochtreiben. Genau diese
-- Zahl wird zahlenden Werbekunden in advertising_campaign_report als
-- "Anzahl Klicks auf den Link" ausgewiesen.
--
-- Das ist heute folgenlos moeglich, weil noch keine Kampagne existiert
-- (advertising_campaigns hat 0 Zeilen) und kein Weiterleitungsendpunkt
-- ausgerollt ist. Genau deshalb ist jetzt der richtige Zeitpunkt: Der Entzug
-- kostet nichts und schliesst die Luecke, bevor das Werbegeschaeft anlaeuft.
--
-- WAS DAMIT NOCH NICHT ERLEDIGT IST: Sobald es einen Weiterleitungslink gibt,
-- braucht es eine Edge Function, die den Klick entgegennimmt, mit Rate-Limit
-- und kurzlebiger, gehashter Entprellung zaehlt und dabei bewusst weiterhin
-- KEINE IP, Sitzung oder Cookie speichert. Die Function ruft dann mit
-- service_role auf. Ohne sie bleibt die Kennzahl unerhebbar -- das ist
-- richtig so: lieber keine Zahl als eine faelschbare.

revoke execute on function public.advertising_redirect_count(uuid) from anon;
revoke execute on function public.advertising_redirect_count(uuid) from public;

comment on function public.advertising_redirect_count(uuid) is
  'Zaehlt einen Weiterleitungsklick je Kampagne und Tag. NICHT fuer anon '
  'ausfuehrbar (Audit R-2): ohne Rate-Limit und Entprellung waere der Wert '
  'beliebig hochzaehlbar, und er wird Werbekunden als Leistungsnachweis '
  'ausgewiesen. Aufruf kuenftig ausschliesslich aus einer Edge Function mit '
  'service_role, die Rate-Limit und Entprellung traegt.';
