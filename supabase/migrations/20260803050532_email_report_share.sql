create table if not exists public.email_report_share (
  id uuid primary key default gen_random_uuid(),
  token text not null unique,
  payload jsonb not null,
  entry_count integer not null default 0,
  note text,
  expires_at timestamptz not null,
  revoked_at timestamptz,
  max_views integer,
  created_by uuid default auth.uid() references auth.users (id) on delete cascade,
  created_at timestamptz not null default now()
);

create index if not exists email_report_share_created_by_idx
  on public.email_report_share (created_by, created_at desc);

create table if not exists public.email_report_share_access (
  id uuid primary key default gen_random_uuid(),
  share_id uuid references public.email_report_share (id) on delete cascade,
  token text not null,
  accessed_at timestamptz not null default now(),
  outcome text not null,
  user_agent text,
  referer text,
  client_hint text
);

create index if not exists email_report_share_access_share_idx
  on public.email_report_share_access (share_id, accessed_at desc);

grant select, insert, update on public.email_report_share to authenticated;
grant select on public.email_report_share_access to authenticated;
grant all on public.email_report_share to service_role;
grant all on public.email_report_share_access to service_role;

alter table public.email_report_share enable row level security;
alter table public.email_report_share_access enable row level security;

drop policy if exists "own shares readable" on public.email_report_share;
create policy "own shares readable"
  on public.email_report_share for select
  to authenticated
  using (created_by = auth.uid());

drop policy if exists "own shares insertable" on public.email_report_share;
create policy "own shares insertable"
  on public.email_report_share for insert
  to authenticated
  with check (created_by = auth.uid());

drop policy if exists "own shares updatable" on public.email_report_share;
create policy "own shares updatable"
  on public.email_report_share for update
  to authenticated
  using (created_by = auth.uid())
  with check (created_by = auth.uid());

drop policy if exists "own share access readable" on public.email_report_share_access;
create policy "own share access readable"
  on public.email_report_share_access for select
  to authenticated
  using (
    exists (
      select 1 from public.email_report_share s
      where s.id = email_report_share_access.share_id
        and s.created_by = auth.uid()
    )
  );

create or replace function public.fetch_email_report_share(
  p_token text,
  p_user_agent text default null,
  p_referer text default null,
  p_client_hint text default null
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  s public.email_report_share;
  v_views integer := 0;
  v_outcome text;
  v_ua   text := left(p_user_agent,  300);
  v_ref  text := left(p_referer,     300);
  v_hint text := left(p_client_hint, 120);
begin
  select * into s from public.email_report_share where token = p_token;

  if not found then
    insert into public.email_report_share_access
      (share_id, token, outcome, user_agent, referer, client_hint)
    values (null, left(coalesce(p_token, ''), 200), 'not_found', v_ua, v_ref, v_hint);
    return jsonb_build_object('status', 'not_found');
  end if;

  select count(*) into v_views
  from public.email_report_share_access a
  where a.share_id = s.id and a.outcome = 'ok';

  if s.revoked_at is not null then
    v_outcome := 'revoked';
  elsif s.expires_at <= now() then
    v_outcome := 'expired';
  elsif s.max_views is not null and v_views >= s.max_views then
    v_outcome := 'view_limit';
  else
    v_outcome := 'ok';
  end if;

  insert into public.email_report_share_access
    (share_id, token, outcome, user_agent, referer, client_hint)
  values (s.id, s.token, v_outcome, v_ua, v_ref, v_hint);

  if v_outcome <> 'ok' then
    return jsonb_build_object('status', v_outcome, 'expires_at', s.expires_at);
  end if;

  return jsonb_build_object(
    'status', 'ok',
    'payload', s.payload,
    'note', s.note,
    'entry_count', s.entry_count,
    'expires_at', s.expires_at,
    'created_at', s.created_at,
    'view_number', v_views + 1,
    'max_views', s.max_views
  );
end;
$$;

revoke all on function public.fetch_email_report_share(text, text, text, text) from public;
grant execute on function public.fetch_email_report_share(text, text, text, text)
  to anon, authenticated, service_role;
