do $$ begin
  create type app.device_platform as enum ('android', 'ios', 'web');
exception when duplicate_object then null; end $$;

create table if not exists public.device_tokens (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  token text not null unique,
  platform app.device_platform not null,
  created_at timestamptz not null default now(),
  last_seen timestamptz not null default now()
);
create index if not exists idx_device_tokens_user on public.device_tokens(user_id);

create table if not exists public.notifications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  title text not null, body text, data jsonb,
  sent_at timestamptz not null default now(),
  read_at timestamptz
);
create index if not exists idx_notifications_user on public.notifications(user_id, sent_at desc);

select app.enable_audit('public.device_tokens');

alter table public.device_tokens enable row level security;
alter table public.notifications enable row level security;

drop policy if exists dt_rw on public.device_tokens;
create policy dt_rw on public.device_tokens for all to authenticated
  using (user_id = auth.uid()) with check (user_id = auth.uid());

drop policy if exists notif_read on public.notifications;
create policy notif_read on public.notifications for select to authenticated
  using (user_id = auth.uid());
drop policy if exists notif_update on public.notifications;
create policy notif_update on public.notifications for update to authenticated
  using (user_id = auth.uid()) with check (user_id = auth.uid());
