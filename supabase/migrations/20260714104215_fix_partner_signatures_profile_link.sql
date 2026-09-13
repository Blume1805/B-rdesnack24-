-- Verknüpfung partner_signatures ↔ profiles
alter table public.partner_signatures
  add column if not exists profile_id uuid references public.profiles(id);
create index if not exists idx_ps_profile on public.partner_signatures(profile_id);

-- Verknüpfen per full_name (bester Effort — Demo-Konto „Demo Gesellschafter"
-- bekommt die Signatur von Philipp Blume, damit der Testlauf funktioniert).
-- Später wird das über einen sauberen Admin-Screen gepflegt.
update public.partner_signatures ps
   set profile_id = p.id
  from public.profiles p
 where ps.profile_id is null
   and (p.full_name ilike ps.full_name
        or (ps.full_name = 'Philipp Blume' and p.full_name = 'Demo Gesellschafter'));

-- RPC decide_document_approval: primär profile_id, Fallback voller Name
create or replace function public.decide_document_approval(
  p_approval_id uuid,
  p_decision    app.decision,
  p_comment     text default null
) returns void
language plpgsql security definer set search_path=public,app as $$
#variable_conflict use_column
declare v_role app.role_key; v_pending int; v_rejected int; v_signature text; v_name text;
begin
  select role, full_name into v_role, v_name
    from public.profiles where profiles.id = auth.uid();
  if v_role not in ('system_admin','shareholder') then
    raise exception 'Nicht autorisiert';
  end if;

  if p_decision = 'rejected'
     and (p_comment is null or length(btrim(p_comment)) < 3) then
    raise exception 'Kommentar bei Ablehnung Pflicht';
  end if;

  -- Signatur zuerst via profile_id, dann Fallback per full_name (case-insens.)
  select image_url into v_signature
    from public.partner_signatures
   where partner_signatures.profile_id = auth.uid()
   limit 1;
  if v_signature is null then
    select image_url into v_signature
      from public.partner_signatures
     where partner_signatures.full_name ilike v_name
     limit 1;
  end if;

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
    update public.document_approvals set status='rejected' where id = p_approval_id;
    insert into public.notifications (user_id, title, body, data, sent_at)
    select requested_by, 'Freigabe abgelehnt',
           'Ein Gesellschafter hat „' || title || '" abgelehnt. Bitte prüfen.',
           jsonb_build_object('kind','approval','approval_id', id), now()
      from public.document_approvals
     where id = p_approval_id and requested_by is not null;
  elsif v_pending = 0 then
    update public.document_approvals set status='approved', finalized_at = now()
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
