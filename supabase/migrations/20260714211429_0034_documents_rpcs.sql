drop function if exists public.list_documents();
create function public.list_documents()
returns table(
  id                 uuid,
  title              text,
  category           text,
  current_version    integer,
  status             text,
  valid_until        date,
  expiry_status      text,
  latest_file_path   text,
  updated_at         timestamptz
)
language plpgsql
security definer
set search_path = public, app
as $$
declare v_role app.role_key;
begin
  select role into v_role from public.profiles where id = auth.uid();
  if v_role not in ('system_admin','shareholder') then
    raise exception 'Nicht autorisiert';
  end if;
  return query
    select d.id, d.title, d.category, d.current_version, d.status::text,
           d.valid_until,
           case
             when d.valid_until is null                          then 'none'
             when d.valid_until <  current_date                  then 'expired'
             when d.valid_until <= current_date + interval '30 days' then 'expiring'
             else 'ok'
           end as expiry_status,
           (select v.file_path from public.document_versions v
             where v.document_id = d.id and v.version = d.current_version
             limit 1) as latest_file_path,
           d.updated_at
      from public.documents d
     where d.archived_at is null
     order by
       case
         when d.valid_until is not null and d.valid_until < current_date then 0
         when d.valid_until is not null and d.valid_until <= current_date + interval '30 days' then 1
         else 2
       end,
       d.title;
end;
$$;
grant execute on function public.list_documents() to authenticated;

create or replace function public.request_document_review(p_document uuid)
returns uuid
language plpgsql
security definer
set search_path = public, app
as $$
declare
  v_role app.role_key;
  v_id   uuid;
  v_doc  record;
begin
  select role into v_role from public.profiles where id = auth.uid();
  if v_role not in ('system_admin','shareholder') then
    raise exception 'Nicht autorisiert';
  end if;
  select d.id, d.title, d.category, d.current_version,
         (select v.file_path from public.document_versions v
           where v.document_id = d.id and v.version = d.current_version limit 1) as file_path
    into v_doc
    from public.documents d where d.id = p_document;
  if v_doc.id is null then
    raise exception 'Dokument nicht gefunden';
  end if;
  v_id := public.request_document_approval(
    p_document_kind := 'document_review'::app.document_kind,
    p_period_from   := current_date,
    p_period_to     := current_date,
    p_title         := coalesce(v_doc.title, 'Dokument') || ' (v' || v_doc.current_version || ')',
    p_snapshot      := jsonb_build_object(
                         'document_id', v_doc.id,
                         'category',    v_doc.category,
                         'version',     v_doc.current_version,
                         'file_path',   v_doc.file_path
                       ),
    p_draft_path    := v_doc.file_path
  );
  return v_id;
end;
$$;
grant execute on function public.request_document_review(uuid) to authenticated;

create or replace function public.set_document_valid_until(
  p_document uuid, p_valid_until date
)
returns void
language plpgsql
security definer
set search_path = public, app
as $$
declare v_role app.role_key;
begin
  select role into v_role from public.profiles where id = auth.uid();
  if v_role not in ('system_admin','shareholder') then
    raise exception 'Nicht autorisiert';
  end if;
  update public.documents
     set valid_until = p_valid_until,
         updated_at  = now(),
         updated_by  = auth.uid()
   where id = p_document;
end;
$$;
grant execute on function public.set_document_valid_until(uuid, date) to authenticated;
