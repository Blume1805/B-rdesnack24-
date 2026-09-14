create table if not exists public.auth_hook_diagnose (
  id            uuid primary key default gen_random_uuid(),
  occurred_at   timestamptz not null default now(),
  ok            boolean not null,
  grund         text,
  secret_laenge int,
  secret_anzahl int,
  sig_anzahl    int,
  ts_versatz    int,
  aktion        text
);

create index if not exists auth_hook_diagnose_zeit_idx
  on public.auth_hook_diagnose (occurred_at desc);

comment on table public.auth_hook_diagnose is
  'Warum der Send-Email-Hook angenommen oder abgelehnt hat. Existiert, weil GoTrue jeden Hook-Fehler in "Hook requires authorization token" umschreibt und das Aufruf-Protokoll der Edge Functions Lücken hat. Ohne Geheimnisse.';

alter table public.auth_hook_diagnose enable row level security;
revoke all on public.auth_hook_diagnose from anon, authenticated;

drop policy if exists auth_hook_diagnose_read on public.auth_hook_diagnose;
create policy auth_hook_diagnose_read on public.auth_hook_diagnose
  for select to authenticated
  using (public.is_internal((select auth.uid())));
grant select on public.auth_hook_diagnose to authenticated;
