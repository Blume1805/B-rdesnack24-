-- Fix: RPCs verwendeten customer_notifications (existiert nicht) —
-- korrekte Tabelle ist notifications.

create or replace function public.request_document_approval(
  p_document_kind app.document_kind,
  p_period_from   date,
  p_period_to     date,
  p_title         text,
  p_snapshot      jsonb,
  p_draft_path    text default null
) returns uuid
language plpgsql security definer set search_path=public,app as $$
declare v_role app.role_key; v_id uuid; v_approver uuid;
begin
  select role into v_role from public.profiles where id = auth.uid();
  if v_role not in ('system_admin','shareholder') then
    raise exception 'Nicht autorisiert';
  end if;
  insert into public.document_approvals
    (document_kind, period_from, period_to, title, requested_by,
     snapshot, draft_pdf_path)
  values
    (p_document_kind, p_period_from, p_period_to, p_title, auth.uid(),
     p_snapshot, p_draft_path)
  returning id into v_id;

  for v_approver in
    select id from public.profiles
     where role = 'shareholder' and status = 'active'
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
declare v_role app.role_key; v_pending int; v_rejected int; v_signature text;
begin
  select role into v_role from public.profiles where id = auth.uid();
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
