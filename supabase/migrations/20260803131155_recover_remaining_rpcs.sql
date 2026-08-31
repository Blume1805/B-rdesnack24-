create or replace function public.link_partner_signature_profile(
  p_signature_id uuid, p_profile_id uuid
)
returns void
language plpgsql
security definer
set search_path to 'public', 'app'
as $function$
#variable_conflict use_column
declare v_role app.role_key;
begin
  select role into v_role from public.profiles
   where profiles.id = auth.uid()
     and profiles.status = 'active'
     and profiles.deleted_at is null;
  if v_role is null or v_role <> 'system_admin' then
    raise exception 'Nicht autorisiert';
  end if;
  update public.partner_signatures
     set profile_id = p_profile_id
   where id = p_signature_id;
end $function$;

create or replace function public.register_telemetry_provider(
  p_name text, p_adapter app.telemetry_adapter,
  p_hmac_secret text, p_notes text default null::text
)
returns uuid
language plpgsql
security definer
set search_path to 'public', 'app'
as $function$
declare v_role app.role_key; v_id uuid;
begin
  select role into v_role from public.profiles
   where id = auth.uid() and status = 'active' and deleted_at is null;
  if v_role is null or v_role <> 'system_admin' then
    raise exception 'Nicht autorisiert';
  end if;
  insert into public.telemetry_providers (name, adapter, hmac_secret, notes)
       values (p_name, p_adapter, p_hmac_secret, p_notes)
       returning id into v_id;
  return v_id;
end $function$;

create or replace function public.rotate_provider_secret(
  p_provider_id uuid, p_new_secret text
)
returns void
language plpgsql
security definer
set search_path to 'public', 'app'
as $function$
declare v_role app.role_key;
begin
  select role into v_role from public.profiles
   where id = auth.uid() and status = 'active' and deleted_at is null;
  if v_role is null or v_role <> 'system_admin' then
    raise exception 'Nicht autorisiert';
  end if;
  update public.telemetry_providers
     set hmac_secret = p_new_secret,
         updated_at = now()
   where id = p_provider_id;
end $function$;

create or replace function public.set_partner_signature_image(
  p_signature_id uuid, p_image_url text, p_captured_via text default 'manual'::text
)
returns void
language plpgsql
security definer
set search_path to 'public', 'app'
as $function$
#variable_conflict use_column
declare v_role app.role_key;
begin
  select role into v_role from public.profiles
   where profiles.id = auth.uid()
     and profiles.status = 'active'
     and profiles.deleted_at is null;
  if v_role is null or v_role not in ('system_admin','shareholder') then
    raise exception 'Nicht autorisiert';
  end if;
  update public.partner_signatures
     set image_url = p_image_url,
         captured_via = p_captured_via,
         captured_at = now()
   where id = p_signature_id;
end $function$;

create or replace function public.set_machine_slot(
  p_machine_id uuid, p_slot_code text, p_product_id uuid,
  p_unit_price_net numeric, p_capacity integer default 12
)
returns void
language plpgsql
security definer
set search_path to 'public', 'app'
as $function$
declare v_role app.role_key;
begin
  select role into v_role from public.profiles
   where id = auth.uid() and status = 'active' and deleted_at is null;
  if v_role is null or v_role not in ('system_admin','shareholder') then
    raise exception 'Nicht autorisiert';
  end if;
  insert into public.machine_slots (machine_id, slot_code, product_id,
                                    unit_price_net, capacity, updated_at)
       values (p_machine_id, p_slot_code, p_product_id,
               p_unit_price_net, p_capacity, now())
  on conflict (machine_id, slot_code) do update
     set product_id     = excluded.product_id,
         unit_price_net = excluded.unit_price_net,
         capacity       = excluded.capacity,
         updated_at     = now();
end $function$;

create or replace function public.request_document_approval(
  p_document_kind app.document_kind, p_period_from date, p_period_to date,
  p_title text, p_snapshot jsonb, p_draft_path text default null::text
)
returns uuid
language plpgsql
security definer
set search_path to 'public', 'app'
as $function$
#variable_conflict use_column
declare v_role app.role_key; v_id uuid; v_approver uuid;
begin
  select role into v_role from public.profiles
   where profiles.id = auth.uid()
     and profiles.status = 'active'
     and profiles.deleted_at is null;
  if v_role is null or v_role not in ('system_admin','shareholder') then
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
end $function$;

revoke all on function public.link_partner_signature_profile(uuid, uuid) from public, anon;
revoke all on function public.register_telemetry_provider(text, app.telemetry_adapter, text, text) from public, anon;
revoke all on function public.rotate_provider_secret(uuid, text) from public, anon;
revoke all on function public.set_partner_signature_image(uuid, text, text) from public, anon;
revoke all on function public.set_machine_slot(uuid, text, uuid, numeric, integer) from public, anon;
revoke all on function public.request_document_approval(app.document_kind, date, date, text, jsonb, text) from public, anon;

grant execute on function public.link_partner_signature_profile(uuid, uuid) to authenticated;
grant execute on function public.register_telemetry_provider(text, app.telemetry_adapter, text, text) to authenticated;
grant execute on function public.rotate_provider_secret(uuid, text) to authenticated;
grant execute on function public.set_partner_signature_image(uuid, text, text) to authenticated;
grant execute on function public.set_machine_slot(uuid, text, uuid, numeric, integer) to authenticated;
grant execute on function public.request_document_approval(app.document_kind, date, date, text, jsonb, text) to authenticated;
