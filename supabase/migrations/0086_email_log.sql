-- ============================================================================
-- 0086 · Lückenloses Protokoll aller E-Mails
-- ----------------------------------------------------------------------------
-- ANFORDERUNG des Betriebs: „Ich möchte JEDE versendete und empfangene
-- E-Mail transparent einsehen und exportieren können."
--
-- Das Entscheidende an dieser Anforderung ist das Wort „jede". Ein
-- Protokoll, das an einzelnen Versandstellen ansetzt, ist nur so
-- vollständig wie die Disziplin derer, die später neue Stellen bauen.
--
-- Deshalb sitzt das Schreiben im Sammelpunkt `_shared/email/send.ts`.
-- Jede ausgehende Mail läuft dort durch — Vollständigkeit ist damit eine
-- Eigenschaft des Aufbaus. Wer sie umgehen wollte, müsste einen eigenen
-- `fetch` auf Resend schreiben, und das fällt beim Lesen auf.
--
-- Dabei kam heraus, dass es genau eine solche Umgehung schon gab:
-- `email-send` verschickte mit eigenem `fetch`, und `approval-notify`
-- nutzt genau diesen Weg. Ohne den Umbau wäre das Protokoll von Anfang an
-- unvollständig gewesen — ausgerechnet für die Freigabe-Benachrichtigungen.
--
-- Protokolliert werden alle drei Ausgänge:
--   sent   — Resend hat angenommen, mit Message-Id
--   failed — Resend hat abgelehnt, mit Fehlertext
--   dev    — kein RESEND_API_KEY gesetzt, nichts verschickt
--
-- Die Message-Id ist der Faden zum Anbieter. Ohne sie lässt sich eine
-- Beschwerde „ich habe nie eine Mail bekommen" später nicht nachverfolgen.
--
-- `direction` ist auf 'out' und 'in' ausgelegt. Eingehende Post fehlt noch:
-- sie setzt einen Resend-Eingangskanal und MX-Einträge auf einer
-- verifizierten Domain voraus. Die Spalte ist da, damit beides später in
-- derselben Ansicht liegt.
--
-- ZUM DATENSCHUTZ, offen benannt: Die Tabelle enthält Empfängeradressen
-- und vollständige Mailinhalte — personenbezogene Daten. Lesbar
-- ausschliesslich für interne Rollen, geschrieben ausschliesslich
-- serverseitig. Eine Aufbewahrungsfrist ist bewusst nicht gesetzt: Das ist
-- eine Abwägung zwischen der geforderten Nachvollziehbarkeit und
-- Art. 5 Abs. 1 lit. e DSGVO und gehört dem Betrieb, nicht dieser Migration.
-- ============================================================================

create table if not exists public.email_log (
  id            uuid primary key default gen_random_uuid(),
  direction     text not null default 'out' check (direction in ('out','in')),
  tag           text,
  from_address  text,
  to_addresses  text[] not null default '{}',
  subject       text,
  html          text,
  text_body     text,
  status        text not null check (status in ('sent','dev','failed','received')),
  provider_id   text,
  error         text,
  occurred_at   timestamptz not null default now(),
  created_at    timestamptz not null default now()
);

create index if not exists email_log_occurred_idx on public.email_log (occurred_at desc);
create index if not exists email_log_direction_idx on public.email_log (direction, occurred_at desc);
create index if not exists email_log_status_idx on public.email_log (status);

alter table public.email_log enable row level security;

revoke all on public.email_log from anon, authenticated, public;
grant select on public.email_log to authenticated;
grant all on public.email_log to service_role;

drop policy if exists email_log_read_internal on public.email_log;
create policy email_log_read_internal
  on public.email_log for select
  to authenticated
  using (public.is_internal((select auth.uid())));

comment on table public.email_log is
  'Vollständiges Protokoll aller ein- und ausgehenden E-Mails. Geschrieben '
  'ausschliesslich serverseitig (service_role) aus dem Sammelpunkt '
  '_shared/email/send.ts. Lesbar nur für interne Rollen. Enthält '
  'Empfängeradressen und Mailinhalte — personenbezogene Daten, '
  'Aufbewahrungsdauer ist eine Entscheidung des Betriebs.';
