-- ============================================================================
-- 0083 · Archiv der E-Mail-Testversände
-- ----------------------------------------------------------------------------
-- HERKUNFT
-- Diese Tabelle wurde in der Loveable-App als `supabase/sql/email_test_log.sql`
-- geschrieben, mit dem Hinweis „einmalig im Supabase SQL-Editor ausführen".
-- Ausgeführt wurde sie nie — die Vorschau unter `/email-vorschau` meldete
-- deshalb beim Archivieren „Tabelle fehlt".
--
-- Auf Entscheidung des Betriebs wandert sie als Migration ins Repository,
-- statt von Hand eingespielt zu werden. Grund: Genau so ist die Lücke
-- entstanden, die bei `partner_signatures` gefunden wurde (siehe 0027b) —
-- Tabellen in der Datenbank, die im Repository nicht existieren, und ein
-- Neuaufbau, der daran scheitert.
--
-- Der Inhalt ist unverändert übernommen. Was die Vorschau schreibt, passt
-- damit ohne Anpassung.
--
-- ZUM INHALT, EHRLICH BENANNT
-- Die Tabelle speichert `recipient`, `html` und `template_values` — also
-- Empfängeradressen und vollständige Mailinhalte. Das sind personenbezogene
-- Daten. RLS begrenzt den Zugriff auf die eigenen Zeilen, das ist richtig
-- und ausreichend, solange nur intern getestet wird.
--
-- Zwei Punkte, die bewusst so bleiben und in `LOVEABLE_EMAIL_REVIEW.md`
-- stehen:
--   * Schreibrecht hat jede angemeldete Person, auch ein Kundenkonto. Eng
--     zu ziehen (`is_internal`) würde heute die eigenen Konten aussperren,
--     weil sie als `customer` geführt werden. Gehört nachgezogen, sobald
--     die interne App nach ADR 0005 getrennt ist.
--   * Der Testversand gehört fachlich in den internen Bereich, liegt aber
--     in der Kunden-App. Ebenfalls ADR 0005.
-- ============================================================================

create table if not exists public.email_test_log (
  id uuid primary key default gen_random_uuid(),
  -- Id aus dem lokalen Browser-Verlauf: verhindert doppelte Exporte.
  client_entry_id text not null unique,
  sent_at timestamptz not null,
  template_id text not null,
  template_label text,
  recipient text not null,
  subject text,
  status text not null,
  message_id text,
  reason text,
  detail text,
  http_status integer,
  status_text text,
  request_id text,
  duration_ms integer,
  response_headers jsonb,
  response_body text,
  template_values jsonb,
  html text,
  created_by uuid default auth.uid() references auth.users (id) on delete set null,
  created_at timestamptz not null default now()
);

create index if not exists email_test_log_sent_at_idx on public.email_test_log (sent_at desc);
create index if not exists email_test_log_recipient_idx on public.email_test_log (recipient);

grant select, insert on public.email_test_log to authenticated;
grant all on public.email_test_log to service_role;

alter table public.email_test_log enable row level security;

-- Nur angemeldete Nutzer sehen und schreiben ihre eigenen Export-Einträge.
drop policy if exists "own email test log rows are readable" on public.email_test_log;
create policy "own email test log rows are readable"
  on public.email_test_log for select
  to authenticated
  using (created_by = auth.uid());

drop policy if exists "authenticated users can archive their test sends" on public.email_test_log;
create policy "authenticated users can archive their test sends"
  on public.email_test_log for insert
  to authenticated
  with check (created_by = auth.uid());
