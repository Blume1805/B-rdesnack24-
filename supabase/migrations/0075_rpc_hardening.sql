-- ============================================================================
-- 0075 · RPC-Härtung: anon-Rechte entziehen, search_path fixieren
-- ----------------------------------------------------------------------------
-- BEFUND (Security-Advisor, Lauf vom 02.08.2026)
-- Vier SECURITY-DEFINER-Funktionen waren für die Rolle `anon` ausführbar,
-- also über /rest/v1/rpc/... ohne Anmeldung erreichbar. Ein Datenleck war
-- das nicht — drei brechen bei fehlendem auth.uid() selbst ab, die vierte
-- liefert nur ein Aggregat ohne Personenbezug. Aber:
--
--   * `my_receipts()` verlässt sich allein auf SQL-NULL-Semantik: der
--     Filter `customer_id = auth.uid()` trifft bei anon auf NULL und
--     liefert deshalb eine leere Liste. Das ist richtig, aber unbeabsichtigt
--     richtig. Wer den Filter später umbaut, verliert den Schutz, ohne es
--     zu merken.
--   * Ein Endpunkt, den niemand braucht, ist Angriffsfläche ohne Nutzen.
--
-- Geprüft vor dem Entzug: Alle vier RPCs werden ausschließlich aus
-- angemeldeten Screens aufgerufen (customer_providers.dart,
-- subscription_screen.dart). Die einzigen ohne Login erreichbaren Routen
-- der App sind Impressum, Datenschutz, AGB und die Kündigungsseite — keine
-- davon ruft eine dieser Funktionen auf.
--
-- Die Rolle `authenticated` behält ihre Rechte unverändert.
--
-- Sollte später eine öffentliche Kennzahl auf der Landing Page gebraucht
-- werden (z. B. der Spendenstand), ist `lifetime_founders_status()` die
-- Vorlage: Aggregat ohne Personenbezug, gezielt für anon freigegeben.
-- Dann bitte bewusst neu granten, nicht diese Migration zurückdrehen.
-- ============================================================================

-- WICHTIG: der Entzug muss gegen PUBLIC gehen, nicht gegen anon.
-- Postgres vergibt EXECUTE auf neue Funktionen automatisch an die
-- Pseudo-Rolle PUBLIC; `revoke ... from anon` nimmt nur einen direkten
-- Grant weg, den es nie gab — anon erbt das Recht weiter über PUBLIC und
-- die Migration wirkt, ohne etwas zu bewirken. Genau das ist hier beim
-- ersten Anlauf passiert.
--
-- Zu erkennen an der ACL: `{=X/postgres, ...}` — der führende `=` ohne
-- Rollennamen IST der PUBLIC-Grant. Bei den bereits sauberen Funktionen
-- (request_account_deletion, export_my_data) fehlt dieser Eintrag.
--
-- Nach dem Entzug müssen die gewünschten Rollen ihr Recht ausdrücklich
-- bekommen, sonst sperrt man auch die angemeldeten Nutzer aus.
revoke execute on function public.my_receipts() from public, anon;
revoke execute on function public.my_gamification_status() from public, anon;
revoke execute on function public.lifetime_founders_status() from public, anon;
revoke execute on function public.choose_subscription_plan(text, boolean, boolean)
  from public, anon;

grant execute on function public.my_receipts() to authenticated, service_role;
grant execute on function public.my_gamification_status() to authenticated, service_role;
grant execute on function public.lifetime_founders_status() to authenticated, service_role;
grant execute on function public.choose_subscription_plan(text, boolean, boolean)
  to authenticated, service_role;

-- ----------------------------------------------------------------------------
-- Veränderlicher search_path
-- ----------------------------------------------------------------------------
-- `app.lifetime_founders_limit()` lief als einzige Funktion ohne gesetzten
-- search_path. Sie ist zwar SECURITY INVOKER und gibt nur eine Konstante
-- zurück, wird aber von `choose_subscription_plan` (SECURITY DEFINER)
-- aufgerufen. Ein fixierter Pfad kostet nichts und nimmt die Frage von der
-- Liste, ob hier über ein untergeschobenes Schema etwas zu holen wäre.
alter function app.lifetime_founders_limit() set search_path = public, app;

-- ----------------------------------------------------------------------------
-- BEWUSST NICHT GEÄNDERT: pg_net im public-Schema
-- ----------------------------------------------------------------------------
-- Der Advisor meldet „Extension pg_net is installed in the public schema".
-- Nachgesehen: Die Extension ist zwar in `public` registriert, aber
-- sämtliche 15 Objekte (http_post, http_get, http_request_queue, …) liegen
-- im Schema `net`. In `public` steht nichts — die Meldung beschreibt also
-- einen Registrierungseintrag, keine Angriffsfläche.
--
-- Dagegen steht ein echtes Risiko: Der Cron-Job `weather-sync` (täglich
-- 03:40) ruft `net.http_post` auf. Ein Verschieben der Extension kann diese
-- Referenz brechen. Ein Produktionsjob gegen eine kosmetische Meldung zu
-- tauschen, wäre der falsche Handel.
