do $$
begin
  if not exists (select 1 from pg_type t
                  join pg_namespace n on n.oid = t.typnamespace
                 where n.nspname = 'app' and t.typname = 'employee_sig_status') then
    create type app.employee_sig_status as enum ('pending', 'signed', 'expired', 'cancelled');
  end if;
end$$;

create table if not exists public.document_employee_signatures (
  id                 uuid primary key default gen_random_uuid(),
  document_id        uuid not null references public.documents(id) on delete cascade,
  document_version   int  not null,
  employee_id        uuid not null references public.profiles(id) on delete cascade,
  invited_by         uuid not null references public.profiles(id),
  invited_at         timestamptz not null default now(),
  signed_at          timestamptz,
  signature_png_path text,
  signed_pdf_path    text,
  ip_hash            text,
  status             app.employee_sig_status not null default 'pending',
  unique (document_id, document_version, employee_id)
);

create index if not exists document_employee_signatures_employee_id_idx
  on public.document_employee_signatures(employee_id);
create index if not exists document_employee_signatures_document_id_idx
  on public.document_employee_signatures(document_id);

alter table public.document_employee_signatures enable row level security;

drop policy if exists des_read_all on public.document_employee_signatures;
create policy des_read_all on public.document_employee_signatures
  for select using (
    exists(select 1 from public.profiles p
            where p.id = auth.uid()
              and p.role in ('shareholder','system_admin'))
  );

drop policy if exists des_read_own on public.document_employee_signatures;
create policy des_read_own on public.document_employee_signatures
  for select using (employee_id = auth.uid());

drop policy if exists des_insert on public.document_employee_signatures;
create policy des_insert on public.document_employee_signatures
  for insert with check (
    invited_by = auth.uid() and exists(select 1 from public.profiles p
      where p.id = auth.uid()
        and p.role in ('shareholder','system_admin'))
  );

drop policy if exists des_update_own on public.document_employee_signatures;
create policy des_update_own on public.document_employee_signatures
  for update using (employee_id = auth.uid());

create or replace function public.invite_employee_signature(
  p_document uuid, p_employee uuid
)
returns uuid
language plpgsql
security definer
set search_path = public, app
as $$
#variable_conflict use_column
declare
  v_role app.role_key;
  v_ver  int;
  v_id   uuid;
begin
  select role into v_role from public.profiles where profiles.id = auth.uid();
  if v_role not in ('shareholder','system_admin') then
    raise exception 'Nicht autorisiert';
  end if;
  select current_version into v_ver
    from public.documents where id = p_document;
  if v_ver is null then
    raise exception 'Dokument nicht gefunden';
  end if;
  insert into public.document_employee_signatures(
    document_id, document_version, employee_id, invited_by
  ) values (p_document, v_ver, p_employee, auth.uid())
  on conflict (document_id, document_version, employee_id) do nothing
  returning id into v_id;
  return v_id;
end;
$$;
grant execute on function public.invite_employee_signature(uuid, uuid) to authenticated;

create or replace function public.submit_employee_signature(
  p_task uuid,
  p_png_path text,
  p_ip_hash text default null
)
returns void
language plpgsql
security definer
set search_path = public, app
as $$
#variable_conflict use_column
begin
  update public.document_employee_signatures
     set signature_png_path = p_png_path,
         ip_hash            = p_ip_hash,
         signed_at          = now(),
         status             = 'signed'
   where id = p_task
     and employee_id = auth.uid();
  if not found then
    raise exception 'Aufgabe nicht gefunden oder nicht zugewiesen';
  end if;
end;
$$;
grant execute on function public.submit_employee_signature(uuid, text, text) to authenticated;

create or replace function public.list_my_signature_tasks()
returns table(
  id                 uuid,
  document_id        uuid,
  document_title     text,
  document_category  text,
  document_version   int,
  invited_at         timestamptz,
  status             text,
  signed_at          timestamptz,
  latest_file_path   text
)
language plpgsql
security definer
set search_path = public, app
as $$
#variable_conflict use_column
begin
  return query
    select t.id, t.document_id, d.title, d.category, t.document_version,
           t.invited_at, t.status::text, t.signed_at,
           (select v.file_path from public.document_versions v
             where v.document_id = t.document_id and v.version = t.document_version
             limit 1)
      from public.document_employee_signatures t
      join public.documents d on d.id = t.document_id
     where t.employee_id = auth.uid()
     order by
       case t.status when 'pending' then 0 when 'signed' then 1 else 2 end,
       t.invited_at desc;
end;
$$;
grant execute on function public.list_my_signature_tasks() to authenticated;

create or replace function public.list_document_signature_tasks(p_document uuid)
returns table(
  id                 uuid,
  employee_id        uuid,
  employee_name      text,
  document_version   int,
  invited_at         timestamptz,
  signed_at          timestamptz,
  status             text,
  signed_pdf_path    text
)
language plpgsql
security definer
set search_path = public, app
as $$
#variable_conflict use_column
declare v_role app.role_key;
begin
  select role into v_role from public.profiles where profiles.id = auth.uid();
  if v_role not in ('shareholder','system_admin') then
    raise exception 'Nicht autorisiert';
  end if;
  return query
    select t.id, t.employee_id, p.full_name, t.document_version,
           t.invited_at, t.signed_at, t.status::text, t.signed_pdf_path
      from public.document_employee_signatures t
      join public.profiles p on p.id = t.employee_id
     where t.document_id = p_document
     order by t.invited_at desc;
end;
$$;
grant execute on function public.list_document_signature_tasks(uuid) to authenticated;

create or replace function public.list_employees_for_signature()
returns table(id uuid, full_name text, email text)
language plpgsql
security definer
set search_path = public, app
as $$
#variable_conflict use_column
declare v_role app.role_key;
begin
  select role into v_role from public.profiles where profiles.id = auth.uid();
  if v_role not in ('shareholder','system_admin') then
    raise exception 'Nicht autorisiert';
  end if;
  return query
    select p.id, p.full_name, p.email::text
      from public.profiles p
     where p.role = 'employee'
       and p.archived_at is null
     order by p.full_name;
end;
$$;
grant execute on function public.list_employees_for_signature() to authenticated;
