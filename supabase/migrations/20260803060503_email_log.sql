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
