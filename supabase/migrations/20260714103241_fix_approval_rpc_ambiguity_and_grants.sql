-- Fix 1: authenticated braucht USAGE auf schema app, damit Enum-Typen
--        (document_kind, decision, ...) als Parameter/Return-Typ akzeptiert
--        werden.
grant usage on schema app to authenticated;

-- Fix 2: RETURNS TABLE (id ...) kollidiert in PL/pgSQL mit Spalten-
--        Referenzen namens "id" in Subqueries. Wir setzen
--        #variable_conflict = use_column, damit Spalten-IDs Vorrang haben.

create or replace function public.list_document_approvals(
  p_mine_only boolean default false
) returns table (
  id           uuid,
  document_kind app.document_kind,
  title        text,
  period_from  date,
  period_to    date,
  requested_by uuid,
  requested_at timestamptz,
  status       app.approval_status,
  my_decision  app.decision,
  final_pdf_path text,
  draft_pdf_path text,
  decisions    jsonb
)
language plpgsql security definer set search_path=public,app as $$
#variable_conflict use_column
declare v_role app.role_key;
begin
  select role into v_role from public.profiles where profiles.id = auth.uid();
  if v_role not in ('system_admin','shareholder') then
    raise exception 'Nicht autorisiert';
  end if;
  return query
    select a.id, a.document_kind, a.title, a.period_from, a.period_to,
           a.requested_by, a.requested_at, a.status,
           coalesce(md.decision, 'pending'::app.decision) as my_decision,
           a.final_pdf_path, a.draft_pdf_path,
           (select jsonb_agg(jsonb_build_object(
              'approver_id', d.approver_id,
              'decision', d.decision,
              'decided_at', d.decided_at,
              'comment', d.comment,
              'approver_name', pr.full_name
            ) order by d.created_at)
              from public.document_approval_decisions d
              join public.profiles pr on pr.id = d.approver_id
             where d.approval_id = a.id)
    from public.document_approvals a
    left join public.document_approval_decisions md
      on md.approval_id = a.id and md.approver_id = auth.uid()
    where p_mine_only = false or md.approver_id = auth.uid()
    order by a.requested_at desc
    limit 200;
end $$;
grant execute on function public.list_document_approvals(boolean) to authenticated;

-- request_document_approval + decide_document_approval: gleicher Fix
create or replace function public.request_document_approval(
  p_document_kind app.document_kind,
  p_period_from   date,
  p_period_to     date,
  p_title         text,
  p_snapshot      jsonb,
  p_draft_path    text default null
) returns uuid
language plpgsql security definer set search_path=public,app as $$
#variable_conflict use_column
declare v_role app.role_key; v_id uuid; v_approver uuid;
begin
  select role into v_role from public.profiles where profiles.id = auth.uid();
  if v_role not in ('system_admin','shareholder') then
    raise exception 'Nicht autorisiert';
  end if;
  insert into public.document_approvals
    (document_kind, period_from, period_to, title, requested_by,
     snapshot, draft_pdf_path)
  values
    (p_document_kind, p_period_from, p_period_to, p_title, auth.uid(),
     p_snapshot, p_draft_path)
  returning document_approvals.id into v_id;

  for v_approver in
    select p.id from public.profiles p
     where p.role = 'shareholder' and p.status = 'active'
  loop
    insert into public.document_approval_decisions (approval_id, approver_id)
      values (v_id, v_approver);
    insert into public.notifications (user_id, title, body, data, sent_at)
    values (v_approver,
            'Freigabe angefragt',
            'Dokument „' || p_title || '" wartet auf deine Prüfung.',
            jsonb_build_object('kind','approval','approval_id', v_id),
            now());
  end loop;

  return v_id;
end $$;
grant execute on function public.request_document_approval(
  app.document_kind, date, date, text, jsonb, text) to authenticated;

create or replace function public.decide_document_approval(
  p_approval_id uuid,
  p_decision    app.decision,
  p_comment     text default null
) returns void
language plpgsql security definer set search_path=public,app as $$
#variable_conflict use_column
declare v_role app.role_key; v_pending int; v_rejected int; v_signature text;
begin
  select role into v_role from public.profiles where profiles.id = auth.uid();
  if v_role not in ('system_admin','shareholder') then
    raise exception 'Nicht autorisiert';
  end if;

  if p_decision = 'rejected'
     and (p_comment is null or length(btrim(p_comment)) < 3) then
    raise exception 'Kommentar bei Ablehnung Pflicht';
  end if;

  select image_url into v_signature
    from public.partner_signatures
   where profile_id = auth.uid()
   limit 1;

  update public.document_approval_decisions
     set decision = p_decision,
         decided_at = now(),
         comment = p_comment,
         signature_url = case when p_decision='approved' then v_signature end
   where approval_id = p_approval_id
     and approver_id = auth.uid();

  select
    count(*) filter (where decision='pending'),
    count(*) filter (where decision='rejected')
    into v_pending, v_rejected
  from public.document_approval_decisions
  where approval_id = p_approval_id;

  if v_rejected > 0 then
    update public.document_approvals set status='rejected'
     where id = p_approval_id;
    insert into public.notifications (user_id, title, body, data, sent_at)
    select requested_by, 'Freigabe abgelehnt',
           'Ein Gesellschafter hat „' || title || '" abgelehnt. Bitte prüfen.',
           jsonb_build_object('kind','approval','approval_id', id), now()
      from public.document_approvals
     where id = p_approval_id and requested_by is not null;
  elsif v_pending = 0 then
    update public.document_approvals
       set status='approved', finalized_at = now()
     where id = p_approval_id;
    insert into public.notifications (user_id, title, body, data, sent_at)
    select requested_by, 'Freigabe erteilt',
           'Dokument „' || title || '" ist von beiden Gesellschaftern signiert.',
           jsonb_build_object('kind','approval','approval_id', id), now()
      from public.document_approvals
     where id = p_approval_id and requested_by is not null;
  end if;
end $$;
grant execute on function public.decide_document_approval(uuid, app.decision, text) to authenticated;
