-- Freigabe-Workflow für revisionspflichtige Dokumente
-- (Inventurreport, HACCP-Protokolle, Finance).
-- Regel: 2-of-2 Gesellschafter (Pia + Philipp), Pflicht-Kommentar bei
-- Ablehnung, Snapshot der Daten (GoBD: unveränderlich), Signatureinsatz
-- aus DocuSign-Stempel (partner_signatures.image_url) beim finalisierten
-- PDF.

do $$ begin
  create type app.document_kind as enum (
    'inventory_fifo',
    'haccp_temperature','haccp_cleaning','haccp_disposal',
    'haccp_filling','haccp_maintenance','haccp_cash','haccp_training',
    'finance_period'
  );
exception when duplicate_object then null; end $$;

do $$ begin
  create type app.approval_status as enum
    ('pending','approved','rejected','cancelled');
exception when duplicate_object then null; end $$;

do $$ begin
  create type app.decision as enum ('pending','approved','rejected');
exception when duplicate_object then null; end $$;

create table if not exists public.document_approvals (
  id             uuid primary key default gen_random_uuid(),
  document_kind  app.document_kind not null,
  period_from    date not null,
  period_to      date not null,
  title          text not null,
  requested_by   uuid references public.profiles(id),
  requested_at   timestamptz not null default now(),
  status         app.approval_status not null default 'pending',
  snapshot       jsonb not null,
  draft_pdf_path text,
  final_pdf_path text,
  finalized_at   timestamptz,
  cancelled_at   timestamptz,
  notes          text
);
create index if not exists idx_da_status on public.document_approvals(status, requested_at desc);
create index if not exists idx_da_kind on public.document_approvals(document_kind, period_from, period_to);

create table if not exists public.document_approval_decisions (
  id            uuid primary key default gen_random_uuid(),
  approval_id   uuid not null references public.document_approvals(id) on delete cascade,
  approver_id   uuid not null references public.profiles(id),
  decision      app.decision not null default 'pending',
  decided_at    timestamptz,
  comment       text,
  signature_url text,
  created_at    timestamptz not null default now(),
  unique (approval_id, approver_id)
);
create index if not exists idx_dad_approver on public.document_approval_decisions(approver_id, decision);

-- partner_signatures um DocuSign-Meta erweitern
alter table public.partner_signatures
  add column if not exists captured_via         text,
  add column if not exists docusign_envelope_id text,
  add column if not exists captured_at          timestamptz;

alter table public.document_approvals enable row level security;
alter table public.document_approval_decisions enable row level security;

-- Nur Admin + Gesellschafter dürfen Freigaben sehen; Anfordern darf jeder
-- mit Vollzugriff (customers.manage-Berechtigung), Entscheiden nur wer
-- Gesellschafter ist.
drop policy if exists da_ro on public.document_approvals;
create policy da_ro on public.document_approvals
  for select to authenticated using (
    exists (select 1 from public.profiles p
              where p.id = auth.uid()
                and p.role in ('system_admin','shareholder'))
  );
drop policy if exists da_ins on public.document_approvals;
create policy da_ins on public.document_approvals
  for insert to authenticated with check (
    exists (select 1 from public.profiles p
              where p.id = auth.uid()
                and p.role in ('system_admin','shareholder'))
  );

drop policy if exists dad_ro on public.document_approval_decisions;
create policy dad_ro on public.document_approval_decisions
  for select to authenticated using (
    exists (select 1 from public.profiles p
              where p.id = auth.uid()
                and p.role in ('system_admin','shareholder'))
  );

-- Freigabe anfordern: RPC prüft Rolle, legt Anfrage + je Gesellschafter
-- eine Entscheidung an, verschickt In-App-Notification.
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

  -- Alle Gesellschafter (Rolle 'shareholder') als Entscheider eintragen
  for v_approver in
    select id from public.profiles
     where role = 'shareholder' and status = 'active'
  loop
    insert into public.document_approval_decisions (approval_id, approver_id)
      values (v_id, v_approver);
    -- In-App-Notification
    insert into public.customer_notifications
      (customer_id, kind, title, body, action_url)
    values
      (v_approver, 'system',
       'Freigabe angefragt',
       'Dokument „' || p_title || '" wartet auf deine Prüfung.',
       'approval:' || v_id::text);
  end loop;

  return v_id;
end $$;
grant execute on function public.request_document_approval(
  app.document_kind, date, date, text, jsonb, text) to authenticated;

-- Entscheiden: der aufrufende Gesellschafter entscheidet über seine Zeile
-- der aktuellen Anfrage. Bei rejected ist ein Kommentar Pflicht.  Wenn
-- alle Zeilen approved sind, wird status = 'approved' gesetzt; sobald
-- eine rejected ist, status = 'rejected'.
create or replace function public.decide_document_approval(
  p_approval_id uuid,
  p_decision    app.decision,
  p_comment     text default null
) returns void
language plpgsql security definer set search_path=public,app as $$
declare v_role app.role_key; v_status app.approval_status;
        v_pending int; v_rejected int; v_signature text;
begin
  select role into v_role from public.profiles where id = auth.uid();
  if v_role not in ('system_admin','shareholder') then
    raise exception 'Nicht autorisiert';
  end if;

  if p_decision = 'rejected'
     and (p_comment is null or length(btrim(p_comment)) < 3) then
    raise exception 'Kommentar bei Ablehnung Pflicht';
  end if;

  -- aktuelles Signaturbild des Entscheiders (DocuSign-Stempel)
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

  -- Aggregat-Status neu berechnen
  select
    count(*) filter (where decision='pending'),
    count(*) filter (where decision='rejected')
    into v_pending, v_rejected
  from public.document_approval_decisions
  where approval_id = p_approval_id;

  if v_rejected > 0 then
    update public.document_approvals set status='rejected'
     where id = p_approval_id;
    -- Ersteller benachrichtigen
    insert into public.customer_notifications
      (customer_id, kind, title, body, action_url)
    select requested_by, 'system',
           'Freigabe abgelehnt',
           'Ein Gesellschafter hat „' || title || '" abgelehnt. Bitte prüfen.',
           'approval:' || id::text
      from public.document_approvals
     where id = p_approval_id and requested_by is not null;
  elsif v_pending = 0 then
    update public.document_approvals
       set status='approved', finalized_at = now()
     where id = p_approval_id;
    insert into public.customer_notifications
      (customer_id, kind, title, body, action_url)
    select requested_by, 'system',
           'Freigabe erteilt',
           'Dokument „' || title || '" ist von beiden Gesellschaftern signiert.',
           'approval:' || id::text
      from public.document_approvals
     where id = p_approval_id and requested_by is not null;
  end if;
end $$;
grant execute on function public.decide_document_approval(uuid, app.decision, text) to authenticated;

-- Abfrage: meine offenen und meine erstellten Approvals
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
declare v_role app.role_key;
begin
  select role into v_role from public.profiles where id = auth.uid();
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

-- Storage-Policy für signed-documents-Bucket: nur Systemadmin/Gesellschafter lesen
insert into storage.buckets (id, name, public)
values ('signed-documents', 'signed-documents', false)
on conflict (id) do nothing;
