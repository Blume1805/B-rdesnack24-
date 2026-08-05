-- ============================================================================
-- 0103 · Der Auth-Hook soll sagen können, warum er ablehnt
-- ----------------------------------------------------------------------------
-- Anlass (05.08.2026): Registrierung und Passwort-Reset waren tot. Die
-- Fehlersuche hat mehrere Runden gekostet, weil an zwei Stellen niemand
-- hineinsehen konnte:
--
-- 1. **GoTrue schreibt den Fehler um.** Was immer der Hook antwortet, dem
--    Aufrufer wird „Hook requires authorization token" gemeldet — auch wenn
--    es damit nichts zu tun hat. Ich habe die Meldung wörtlich genommen und
--    zweimal in die falsche Richtung gesucht.
--
-- 2. **Das Aufruf-Protokoll der Edge Functions ist lückenhaft.** Nachgewiesen:
--    Ein Aufruf über `pg_net`, dessen Antwort nachweislich zurückkam, taucht
--    dort nicht auf. „Kein Eintrag" heisst also NICHT „nicht aufgerufen" —
--    ein Fehlschluss, den ich ebenfalls gemacht habe.
--
-- Die `console.error`-Zeilen der Function sind von aussen nicht abfragbar.
-- Damit blieb genau eine belastbare Quelle übrig: die Datenbank. Also
-- schreibt der Hook seinen Ausgang hierher.
--
-- ----------------------------------------------------------------------------
-- Was NICHT hineingeschrieben wird
--
-- Kein Secret, keine vollständige Signatur, kein Nutzlast-Inhalt. Es geht um
-- die Unterscheidung „welcher der drei Gründe war es", und dafür genügen
-- Längen und Anzahlen. Ein Diagnosewerkzeug, das Geheimnisse protokolliert,
-- schafft ein grösseres Problem als das, welches es lösen soll.
-- ============================================================================

create table if not exists public.auth_hook_diagnose (
  id            uuid primary key default gen_random_uuid(),
  occurred_at   timestamptz not null default now(),

  ok            boolean not null,
  -- Bei Ablehnung der Wortlaut aus WebhookError, z. B. „Signatur stimmt
  -- nicht" / „Hook-Secret ist kein gültiges Base64" / „Zeitstempel
  -- außerhalb des zulässigen Fensters". Genau diese Unterscheidung fehlte.
  grund         text,

  -- Aussagekräftig, aber harmlos:
  secret_laenge int,     -- wie lang der konfigurierte Wert ist
  secret_anzahl int,     -- wie viele "whsec_" darin vorkommen (Schlüsselwechsel)
  sig_anzahl    int,     -- wie viele Signaturen im Header stehen
  ts_versatz    int,     -- Sekunden zwischen Zeitstempel und Empfang
  aktion        text     -- 'recovery', 'signup', …
);

create index if not exists auth_hook_diagnose_zeit_idx
  on public.auth_hook_diagnose (occurred_at desc);

comment on table public.auth_hook_diagnose is
  'Warum der Send-Email-Hook angenommen oder abgelehnt hat. Existiert, weil '
  'GoTrue jeden Hook-Fehler in "Hook requires authorization token" umschreibt '
  'und das Aufruf-Protokoll der Edge Functions Lücken hat. Ohne Geheimnisse.';

alter table public.auth_hook_diagnose enable row level security;
revoke all on public.auth_hook_diagnose from anon, authenticated;

drop policy if exists auth_hook_diagnose_read on public.auth_hook_diagnose;
create policy auth_hook_diagnose_read on public.auth_hook_diagnose
  for select to authenticated
  using (public.is_internal((select auth.uid())));
grant select on public.auth_hook_diagnose to authenticated;
