-- ============================================================================
-- 0124 · Auth-Mails gehören nicht ins Protokoll
-- ----------------------------------------------------------------------------
-- Befund der Sicherheitsdurchsicht vom 23.08.2026.
--
-- Seit `auth-email-hook` (0103, Anfang August) laufen ALLE Auth-Mails über
-- denselben Sammelpunkt wie jede andere Mail — `_shared/email/send.ts`. Der
-- protokolliert jede Mail vollständig, also mit Körper. Bei einer
-- Kündigungsbestätigung ist das genau richtig. Bei einer Passwort-
-- Zurücksetzung steht damit Folgendes in der Datenbank:
--
--   .../auth/v1/verify?token=<token_hash>&type=recovery
--
-- und daneben der sechsstellige Einmalcode im Klartext. Beides ist der
-- Zugang zum Konto, nicht die Beschreibung eines Zugangs.
--
-- Lesbar war das für JEDE interne Rolle: `email_log_read_internal` prüfte
-- `public.is_internal()`, und dazu zählt neben `system_admin` und
-- `shareholder` auch `employee` (0008). Ausgelöst werden kann eine
-- Zurücksetzung von jedem, unangemeldet, für jede registrierte Adresse.
-- Ein Beschäftigter mit Lesezugriff hätte also für jedes Konto — auch für
-- ein Gesellschafterkonto — einen gültigen Zugang abholen können, ohne
-- eine einzige Berechtigung zu umgehen.
--
-- Diese Migration behandelt die Seite, die in der Datenbank liegt. Die
-- Ursache selbst sitzt im Code und ist im selben Commit behoben:
-- `sendMail({ logBody: false })` für alle Aktionsmails des Hooks, wodurch
-- Empfänger, Betreff, Zeitpunkt, Status und Anbieter-Id erhalten bleiben
-- und nur der Körper entfällt.
--
-- Zwei Schritte hier:
--   1. Bereits protokollierte Auth-Mail-Körper entfernen. Ein einmal
--      abgelegtes Geheimnis wird nicht dadurch harmlos, dass ab morgen
--      keins mehr dazukommt.
--   2. Die Leseregel auf `email_log` von `is_internal()` auf die Leitung
--      verengen. Die Tabelle enthält den Schriftverkehr mit sämtlichen
--      Kunden; das ist unabhängig von diesem Befund nichts, was jeder
--      Beschäftigte lesen muss.
--
-- Was hier BEWUSST NICHT steht: ein `revoke select ... from authenticated`.
-- `email_log_list` und `email_log_detail` sind laut 0089 ausdrücklich ohne
-- `security definer` gebaut, damit die RLS-Regel greift — sie laufen mit
-- den Rechten der aufrufenden Person. Ein Entzug des Tabellenrechts nähme
-- damit auch der Leitung den Zugang, statt nur den Beschäftigten. Die
-- Regel ist die richtige Stellschraube, das Recht nicht.
-- ============================================================================

-- ── 1. Vorhandene Auth-Mail-Körper entfernen ────────────────────────────────
-- Nur der Körper. Empfänger, Betreff, Zeitpunkt, Status, `provider_id` und
-- Fehlertext bleiben stehen — die Nachweiskette „wann ging welche Mail an
-- wen und was sagte Resend dazu" bleibt vollständig. Das ist keine
-- Verletzung der Revisionssicherheit: Entfernt wird Schlüsselmaterial, das
-- nie hätte abgelegt werden dürfen, kein Geschäftsvorfall.
do $$
declare
  v_betroffen integer;
begin
  update public.email_log
     set html = null,
         text_body = null
   where tag like 'auth-email-hook/%'
     and (html is not null or text_body is not null);
  get diagnostics v_betroffen = row_count;
  raise notice 'Auth-Mail-Körper entfernt: % Zeile(n)', v_betroffen;
end $$;

-- ── 2. Leseregel auf die Leitung verengen ───────────────────────────────────
drop policy if exists email_log_read_internal on public.email_log;
drop policy if exists email_log_read_leitung on public.email_log;
-- `is_shareholder` schliesst Admins heute bereits ein (0002). Der zweite
-- Aufruf steht trotzdem da: Eine Leseregel auf dieser Tabelle soll man in
-- einer Zeile lesen können, ohne einer Hilfsfunktion nachgehen zu müssen —
-- und sie hält auch dann, wenn jemand den Admin-Rückfall dort später
-- herausnimmt. Beide Funktionen prüfen `status = 'active'` und
-- `deleted_at is null`; ein ausgeschiedenes Konto kommt nicht mehr heran.
create policy email_log_read_leitung
  on public.email_log for select
  to authenticated
  using (
    public.is_admin((select auth.uid()))
    or public.is_shareholder((select auth.uid()))
  );

comment on table public.email_log is
  'Vollständiges Protokoll aller ein- und ausgehenden E-Mails. Geschrieben '
  'ausschliesslich serverseitig (service_role) aus dem Sammelpunkt '
  '_shared/email/send.ts. Lesbar nur für system_admin und shareholder '
  '(0124 — vorher jede interne Rolle). Enthält Empfängeradressen und '
  'Mailinhalte — personenbezogene Daten, Aufbewahrungsdauer ist eine '
  'Entscheidung des Betriebs. Bei Auth-Mails wird der KÖRPER nicht '
  'protokolliert: er trägt token_hash und Einmalcode (0124).';

-- ── Gegenprobe ──────────────────────────────────────────────────────────────
-- Bricht ab, wenn eine der beiden Zusagen nicht hält. Ein stiller
-- Teilerfolg wäre hier schlimmer als ein Fehlschlag: Man hielte den Befund
-- für behoben, während er weiterbesteht.
do $$
declare
  v_reste integer;
  v_regeln integer;
begin
  select count(*) into v_reste
    from public.email_log
   where tag like 'auth-email-hook/%'
     and (html is not null or text_body is not null);
  if v_reste > 0 then
    raise exception 'Es liegen noch % Auth-Mail-Zeile(n) mit Körper vor', v_reste;
  end if;

  select count(*) into v_regeln
    from pg_policies
   where schemaname = 'public'
     and tablename = 'email_log'
     and cmd = 'SELECT';
  if v_regeln <> 1 then
    raise exception 'email_log hat % SELECT-Regel(n), erwartet genau 1', v_regeln;
  end if;
end $$;
