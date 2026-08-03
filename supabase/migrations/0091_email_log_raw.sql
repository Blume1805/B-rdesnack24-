-- ============================================================================
-- 0091 · Rohnutzlast eingehender Post aufbewahren
-- ----------------------------------------------------------------------------
-- Vorbereitung für den Posteingang (Edge Function `email-inbound`).
--
-- WARUM DIESE SPALTE. Für ausgehende Mails kennen wir die Felder genau —
-- wir bauen sie selbst. Bei eingehender Post kommt die Nutzlast vom
-- Anbieter, und deren genaue Form liess sich beim Bau nicht nachschlagen
-- (die Dokumentation war aus dieser Umgebung nicht erreichbar).
--
-- Statt zu raten und im Zweifel Daten zu verlieren, wird die vollständige
-- Nutzlast mitgeschrieben. Die Zuordnung auf `subject`, `from_address`
-- und die übrigen Spalten ist damit eine Bequemlichkeit — kein Nadelöhr.
-- Stellt sich heraus, dass ein Feld anders heisst, lässt sich das
-- nachträglich aus `raw` korrigieren, ohne dass Post verloren ist.
--
-- Das ist die gleiche Überlegung wie bei `provider_id` in 0086: Der Faden
-- zum Anbieter muss erhalten bleiben, sonst ist eine spätere Rückfrage
-- nicht mehr zu klären.
--
-- Für ausgehende Mails bleibt die Spalte leer.
--
-- ZUM DATENSCHUTZ: `raw` enthält denselben personenbezogenen Inhalt wie
-- die übrigen Spalten, teilweise mehr (Kopfzeilen, Zustellwege). Es gelten
-- unverändert die Regeln aus 0086 — lesbar ausschliesslich für interne
-- Rollen, geschrieben ausschliesslich serverseitig. Eine Aufbewahrungsfrist
-- ist weiterhin eine Entscheidung des Betriebs.
-- ============================================================================

alter table public.email_log
  add column if not exists raw jsonb;

comment on column public.email_log.raw is
  'Unveränderte Nutzlast des Anbieters bei eingehender Post. Für '
  'ausgehende Mails leer. Dient als Rückfallebene, falls die Zuordnung '
  'einzelner Felder nicht stimmt — siehe Migration 0091.';

-- Wiederholte Zustellung desselben Webhooks darf keine zweite Zeile
-- erzeugen. Anbieter wiederholen bei Zeitüberschreitung, und ein doppelt
-- protokollierter Posteingang wäre ein Fehler im Protokoll selbst.
-- Teilindex, weil provider_id für simulierte Mails NULL ist und NULL-Werte
-- sich nicht sinnvoll eindeutig machen lassen.
create unique index if not exists email_log_provider_eingang_uidx
  on public.email_log (provider_id)
  where direction = 'in' and provider_id is not null;
