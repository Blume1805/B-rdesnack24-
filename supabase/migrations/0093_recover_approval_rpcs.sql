-- ============================================================================
-- 0093 · Drei RPCs zurück ins Repository — und zwei davon repariert
-- ----------------------------------------------------------------------------
-- GEFUNDEN BEIM SCHREIBEN DER PORTIERUNGSANWEISUNGEN. Für den Block I4
-- (Dokumente und Freigaben) wollte ich die Signaturen der Freigabe-RPCs
-- nachschlagen und fand sie nicht — sie stehen in KEINER Migration.
-- Aufgerufen werden sie trotzdem, aus dem Flutter-Code, und in der
-- produktiven Datenbank existieren sie.
--
-- Das ist dieselbe Klasse wie bei `partner_signatures` und
-- `customer_notifications`, die schon einmal zurückgeholt werden mussten:
-- Das Repository beschreibt die Datenbank nicht vollständig. Wer die
-- Datenbank aus den Migrationen neu aufbaut, bekommt eine App, die beim
-- Öffnen der Freigaben scheitert.
--
-- Zurückgeholt werden:
--   * public.business_customers_csv()
--   * public.decide_document_approval(uuid, app.decision, text)
--   * public.list_document_approvals(boolean)
--
-- ----------------------------------------------------------------------------
-- UND DABEI FIEL EINE LÜCKE AUF.
--
-- Zwei der drei prüfen die Berechtigung so:
--
--     select role into v_role from public.profiles where id = auth.uid();
--     if v_role not in ('system_admin','shareholder') then
--       raise exception 'Nicht autorisiert';
--     end if;
--
-- Daran sind zwei Dinge falsch, und beide sind genau die, die Migration
-- 0079 anderswo geschlossen hat — diese beiden Funktionen wurden damals
-- nicht erfasst, weil sie im Repository gar nicht auftauchten.
--
-- 1. DIE NULL-FALLE. Hat der Aufrufer keine Profilzeile, ist `v_role`
--    NULL. `NULL not in (...)` ergibt NULL, und `if NULL then` ist
--    unwahr — die Ausnahme wird also NICHT ausgelöst und die Funktion
--    läuft weiter.
--
--    NACHGEWIESEN gegen die produktive Datenbank: Ein angemeldeter Nutzer
--    mit der zufälligen Kennung 0000…00aa (keine Profilzeile) bekam von
--    `list_document_approvals(false)` **9 Freigabevorgänge** zurück —
--    Titel, Zeiträume, Entscheider und Kommentare inklusive.
--
-- 2. WEDER `status` NOCH `deleted_at` WERDEN GEPRÜFT. Ein deaktiviertes
--    Konto behält seine Rolle in der Zeile und besteht die Prüfung
--    weiterhin. Ein ausgeschiedener Gesellschafter könnte damit weiterhin
--    Freigaben einsehen — und über `decide_document_approval` sogar
--    entscheiden.
--
-- `business_customers_csv` ist von beidem NICHT betroffen: Sie wurde mit
-- 0079 korrigiert und prüft bereits `status = 'active' and deleted_at is
-- null` sowie `v_role is null`. Sie wird hier nur unverändert
-- nachgetragen, damit das Repository vollständig ist.
--
-- Die Korrektur ist dieselbe Form wie in 0079, damit im ganzen Bestand
-- ein Muster gilt und nicht drei.
-- ============================================================================

-- ----------------------------------------------------------------------------
-- 1) Unverändert nachgetragen (bereits korrekt seit 0079)
-- ----------------------------------------------------------------------------
create or replace function public.business_customers_csv()
returns text
language plpgsql
security definer
set search_path to 'public', 'app'
as $function$
declare
  v_header text := 'customer_number;company_name;full_name;email;street;zip;city;country;tax_number;vat_id';
  v_rows text;
  v_role app.role_key;
begin
  select role into v_role from public.profiles
   where id = auth.uid() and status = 'active' and deleted_at is null;
  if v_role is null or v_role not in ('shareholder','system_admin') then
    raise exception 'Nicht autorisiert';
  end if;

  select string_agg(
    format('%s;%s;%s;%s;%s;%s;%s;%s;%s;%s',
      c.customer_number,
      coalesce(c.company_name,''),
      coalesce(p.full_name,''),
      coalesce(p.email,''),
      coalesce(c.billing_street,''),
      coalesce(c.billing_zip,''),
      coalesce(c.billing_city,''),
      coalesce(c.billing_country,'DE'),
      coalesce(c.tax_number,''),
      coalesce(c.vat_id,'')
    ), E'\n')
    into v_rows
  from public.customers c
  join public.profiles p on p.id = c.id
  where c.customer_type = 'business';

  return v_header || E'\n' || coalesce(v_rows, '');
end;
$function$;

-- ----------------------------------------------------------------------------
-- 2) Freigaben lesen — NULL-Falle und fehlende Statusprüfung behoben
-- ----------------------------------------------------------------------------
create or replace function public.list_document_approvals(p_mine_only boolean default false)
returns table(
  id uuid, document_kind app.document_kind, title text,
  period_from date, period_to date, requested_by uuid,
  requested_at timestamp with time zone, status app.approval_status,
  my_decision app.decision, final_pdf_path text, draft_pdf_path text,
  decisions jsonb
)
language plpgsql
security definer
set search_path to 'public', 'app'
as $function$
#variable_conflict use_column
declare v_role app.role_key;
begin
  -- Geändert mit 0093: `status`/`deleted_at` mitprüfen und die NULL-Falle
  -- schliessen. Vorher genügte es, angemeldet zu sein und KEINE Profilzeile
  -- zu haben, um die gesamte Freigabeliste zu sehen.
  select role into v_role from public.profiles
   where profiles.id = auth.uid()
     and profiles.status = 'active'
     and profiles.deleted_at is null;
  if v_role is null or v_role not in ('system_admin','shareholder') then
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
end $function$;

-- ----------------------------------------------------------------------------
-- 3) Freigabe entscheiden — dieselbe Korrektur
-- ----------------------------------------------------------------------------
create or replace function public.decide_document_approval(
  p_approval_id uuid,
  p_decision app.decision,
  p_comment text default null::text
)
returns void
language plpgsql
security definer
set search_path to 'public', 'app'
as $function$
#variable_conflict use_column
declare v_role app.role_key; v_pending int; v_rejected int; v_signature text; v_name text;
begin
  -- Geändert mit 0093, siehe list_document_approvals. Hier wiegt es
  -- schwerer: Es geht nicht ums Lesen, sondern ums Entscheiden.
  select role, full_name into v_role, v_name
    from public.profiles
   where profiles.id = auth.uid()
     and profiles.status = 'active'
     and profiles.deleted_at is null;
  if v_role is null or v_role not in ('system_admin','shareholder') then
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
end $function$;

-- Rechte wie gehabt: angemeldete Nutzer dürfen aufrufen, die Prüfung im
-- Rumpf entscheidet. Ausdrücklich von public/anon zurückgenommen.
revoke all on function public.business_customers_csv() from public, anon;
revoke all on function public.list_document_approvals(boolean) from public, anon;
revoke all on function public.decide_document_approval(uuid, app.decision, text) from public, anon;

grant execute on function public.business_customers_csv() to authenticated;
grant execute on function public.list_document_approvals(boolean) to authenticated;
grant execute on function public.decide_document_approval(uuid, app.decision, text) to authenticated;
