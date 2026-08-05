-- ============================================================================
-- 0104 · email_topic war offen — und damit der Einwilligungsnachweis
-- ----------------------------------------------------------------------------
-- Befund (05.08.2026, Systemanalyse): `public.email_topic` stand ohne RLS im
-- öffentlichen Schema, und `anon` besass SELECT, INSERT, UPDATE, DELETE,
-- TRUNCATE. Über PostgREST heisst das: ohne jede Anmeldung beschreibbar.
--
-- Das ist mein eigener Fehler aus 0099. Dort wurden `email_consent_event`,
-- `email_unsubscribe_token` und die übrigen Tabellen sauber abgeriegelt —
-- bei der Themenliste ist es schlicht vergessen worden. Sie sah nach einem
-- harmlosen Katalog aus. Ist sie aber nicht:
--
--   * `label` und `description` sind GENAU die Texte, mit denen die
--     Einwilligung eingeholt wird. Art. 7 Abs. 1 DSGVO verlangt den Nachweis,
--     WOZU eingewilligt wurde. Wer diese Texte überschreiben kann, entwertet
--     jeden Nachweis rückwirkend — die Zustimmung stünde plötzlich unter
--     einem anderen Wortlaut.
--   * `email_consent_event.topic_key` und `email_templates.topic_key` zeigen
--     per Fremdschlüssel hierher (nachgeprüft über pg_constraint). Die Liste
--     ist also das Rückgrat der Einwilligungsprüfung in `email_enqueue`.
--
-- Gelesen werden darf sie weiterhin von allen — die Themenauswahl im
-- Kundenbereich braucht Label und Beschreibung. Geschrieben wird nur noch
-- über Migrationen bzw. mit `service_role`.
-- ============================================================================

alter table public.email_topic enable row level security;

-- Erst die Schreibrechte entziehen, dann das Lesen gezielt wieder erlauben.
-- Reihenfolge ist Absicht: `revoke all` nimmt auch SELECT mit, damit kein
-- Recht aus Versehen stehen bleibt, an das hier niemand gedacht hat.
revoke all on public.email_topic from anon, authenticated;
grant select on public.email_topic to anon, authenticated;

drop policy if exists email_topic_read on public.email_topic;
create policy email_topic_read on public.email_topic
  for select to anon, authenticated
  using (true);

-- Bewusst KEINE Policy für insert/update/delete. Ohne passende Policy lehnt
-- RLS ab; das ist die fehlerverzeihende Richtung. Neue Themen kommen per
-- Migration dazu, damit die Änderung im Repository nachlesbar ist und nicht
-- als stiller Klick im Dashboard verschwindet.

comment on table public.email_topic is
  'Katalog der Werbethemen (Art. 7 DSGVO, § 7 Abs. 2 Nr. 2 UWG). Nur lesbar; '
  'label/description sind der Wortlaut der Einwilligung und werden '
  'ausschliesslich per Migration geändert.';

-- ----------------------------------------------------------------------------
-- Nachtrag: search_path der Sperr-Trigger-Funktion festnageln
--
-- `email_consent_unveraenderlich` ist SECURITY INVOKER, der Hebel ist also
-- kleiner als bei einer DEFINER-Funktion. Trotzdem gehört bei einer Funktion,
-- die eine Sperre durchsetzt, der Suchpfad festgeschrieben und nicht dem
-- Aufrufer überlassen — sonst entscheidet dessen Sitzung mit, welche Objekte
-- der Trigger überhaupt sieht.
-- ----------------------------------------------------------------------------
alter function public.email_consent_unveraenderlich() set search_path = public;
