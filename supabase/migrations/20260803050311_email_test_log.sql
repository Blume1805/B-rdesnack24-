create table if not exists public.email_test_log (
  id uuid primary key default gen_random_uuid(),
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
