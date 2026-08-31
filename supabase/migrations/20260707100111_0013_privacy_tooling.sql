do $$ begin
  alter type app.consent_type add value if not exists 'terms';
exception when others then null; end $$;

create table if not exists public.account_deletion_requests (
  id           uuid primary key default gen_random_uuid(),
  profile_id   uuid not null references public.profiles(id) on delete restrict,
  requested_at timestamptz not null default now(),
  reason       text,
  status       text not null default 'pending',
  handled_by   uuid references public.profiles(id),
  handled_at   timestamptz,
  note         text
);
create index if not exists idx_del_req_status on public.account_deletion_requests(status, requested_at desc);
alter table public.account_deletion_requests enable row level security;

drop policy if exists del_req_insert on public.account_deletion_requests;
create policy del_req_insert on public.account_deletion_requests for insert to authenticated
  with check (profile_id = auth.uid());

drop policy if exists del_req_read on public.account_deletion_requests;
create policy del_req_read on public.account_deletion_requests for select to authenticated
  using (profile_id = auth.uid() or public.is_admin()
         or public.auth_has_permission('users.manage'));

drop policy if exists del_req_update on public.account_deletion_requests;
create policy del_req_update on public.account_deletion_requests for update to authenticated
  using (public.is_admin() or public.auth_has_permission('users.manage'))
  with check (public.is_admin() or public.auth_has_permission('users.manage'));

select app.enable_audit('public.account_deletion_requests');

create or replace function public.request_account_deletion(p_reason text default null)
returns public.account_deletion_requests
language plpgsql security definer
set search_path = public, app
as $$
declare rec public.account_deletion_requests;
begin
  if auth.uid() is null then raise exception 'Nicht angemeldet' using errcode='42501'; end if;
  insert into public.account_deletion_requests(profile_id, reason)
  values (auth.uid(), p_reason)
  returning * into rec;
  return rec;
end;
$$;
revoke execute on function public.request_account_deletion(text) from anon;

create or replace function public.export_my_data()
returns jsonb
language plpgsql stable security definer
set search_path = public, app
as $$
declare uid uuid := auth.uid(); result jsonb;
begin
  if uid is null then raise exception 'Nicht angemeldet' using errcode='42501'; end if;
  select jsonb_build_object(
    'generated_at', now(),
    'profile', (select to_jsonb(p) from public.profiles p where p.id = uid),
    'customer', (select to_jsonb(c) from public.customers c where c.id = uid),
    'consents', coalesce((select jsonb_agg(to_jsonb(c)) from public.consents c where c.profile_id = uid), '[]'::jsonb),
    'purchases', coalesce((select jsonb_agg(to_jsonb(p)) from public.purchases p where p.customer_id = uid), '[]'::jsonb),
    'customer_prices', coalesce((select jsonb_agg(to_jsonb(cp)) from public.customer_prices cp where cp.customer_id = uid), '[]'::jsonb),
    'recommendations', coalesce((select jsonb_agg(to_jsonb(r)) from public.recommendations r where r.customer_id = uid), '[]'::jsonb),
    'contact_messages', coalesce((select jsonb_agg(to_jsonb(m)) from public.contact_messages m where m.customer_id = uid), '[]'::jsonb),
    'device_tokens', coalesce((select jsonb_agg(to_jsonb(d)) from public.device_tokens d where d.user_id = uid), '[]'::jsonb),
    'ifsg_briefings', coalesce((select jsonb_agg(to_jsonb(b)) from public.ifsg_briefings b where b.profile_id = uid), '[]'::jsonb),
    'employee_trainings', coalesce((select jsonb_agg(to_jsonb(t)) from public.employee_trainings t where t.profile_id = uid), '[]'::jsonb)
  ) into result;
  return result;
end;
$$;
revoke execute on function public.export_my_data() from anon;
