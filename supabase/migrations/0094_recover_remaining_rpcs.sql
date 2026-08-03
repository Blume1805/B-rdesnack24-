-- ============================================================================
-- 0094 · Die letzten acht RPCs zurück ins Repository — sechs davon repariert
-- ----------------------------------------------------------------------------
-- WIE DAS GEFUNDEN WURDE. Nach 0093 habe ich aufgehört, einzeln zu suchen,
-- und stattdessen systematisch verglichen: alle Funktionen und Tabellen der
-- produktiven Datenbank gegen das, was die Migrationen im Repository
-- erzeugen.
--
--   Tabellen:   77 von 77 abgedeckt.
--   Funktionen: 85 von 93 abgedeckt — acht fehlten.
--
-- Die acht sind hier nachgetragen. Zwei davon sind harmlose Lesezugriffe
-- auf eigene Daten (`my_invoices`, `donation_pool_summary`) und werden
-- unverändert übernommen.
--
-- ----------------------------------------------------------------------------
-- SECHS TRUGEN DIESELBE NULL-FALLE.
--
-- Zwei Schreibweisen, dieselbe Lücke:
--
--     if v_role not in ('system_admin','shareholder') then raise ...
--     if v_role <> 'system_admin' then raise ...
--
-- Ist `v_role` NULL — weil der Aufrufer keine Profilzeile hat —, ergeben
-- BEIDE Ausdrücke NULL. `if NULL then` ist unwahr, die Ausnahme bleibt aus,
-- die Funktion arbeitet weiter.
--
-- Beim Suchen nach 0093 hatte ich zunächst nur die `not in`-Form geprüft
-- und drei Treffer gefunden. Die `<>`-Form verhält sich genauso und kam
-- erst beim Lesen der Quelltexte dazu. Es sind also sechs, nicht drei.
--
-- NACHGEWIESEN gegen die produktive Datenbank: Ein angemeldeter Nutzer mit
-- der Kennung 0000…00aa (keine Profilzeile) konnte
-- `set_partner_signature_image` aufrufen und die Unterschrift eines
-- Gesellschafters durch eine beliebige URL ersetzen. Der Aufruf lief ohne
-- Fehler durch.
--
-- Das ist genau der Weg, für den am selben Tag die Function
-- `install-signature` stillgelegt wurde — dort als unauthentifizierter
-- Endpunkt, hier als RPC. Die Lücke war also nie geschlossen, nur die eine
-- Tür davor.
--
-- Was die sechs im Einzelnen zugelassen hätten:
--
--   set_partner_signature_image    Unterschrift eines Gesellschafters ersetzen
--   link_partner_signature_profile Unterschrift einer anderen Person zuordnen
--   rotate_provider_secret         HMAC-Schlüssel eines Telemetrie-Anbieters
--                                  austauschen — danach kann der Angreifer
--                                  selbst gültig signierte Messwerte schicken
--   register_telemetry_provider    eigenen Telemetrie-Anbieter anlegen
--   set_machine_slot               Belegung und Preis eines Automatenfachs setzen
--   request_document_approval      Freigabevorgang anstossen und beide
--                                  Gesellschafter benachrichtigen
--
-- Keine davon ist für `anon` freigegeben; es braucht ein angemeldetes
-- Konto. Nach 0087 ist das eine niedrige Hürde: Registrieren kann sich
-- jeder, und eine Profilzeile ist für den Angriff gerade NICHT nötig —
-- ihr Fehlen ist die Lücke.
--
-- Die Korrektur ist überall dieselbe Form wie in 0079 und 0093:
-- `status`/`deleted_at` mitprüfen und `v_role is null` ausdrücklich
-- abfangen. Damit gilt im ganzen Bestand ein Muster.
-- ============================================================================

-- ----------------------------------------------------------------------------
-- 1) Unverändert nachgetragen — Lesezugriffe auf eigene Daten
-- ----------------------------------------------------------------------------
create or replace function public.my_invoices()
returns setof public.invoices
language sql
security definer
set search_path to 'public', 'app'
as $function$
  select * from public.invoices
   where customer_id = auth.uid()
   order by issued_at desc
$function$;

create or replace function public.donation_pool_summary()
returns table(my_donated numeric, total_pool numeric, my_share_pct numeric, non_app_gross numeric)
language sql
security definer
set search_path to 'public', 'app'
as $function$
  with mine as (
    select coalesce(sum(public.purchase_donation(total_gross)),0) as v
    from public.purchases
    where customer_id = auth.uid()
  ),
  app_total as (
    select coalesce(sum(public.purchase_donation(total_gross)),0) as v
    from public.purchases
  ),
  automat as (
    -- Automaten-Gesamtumsatz minus App-Käufe (damit App-Käufe nicht
    -- doppelt gezählt werden). Nur letzten 90 Tage betrachten für die
    -- Demo, damit die Zahlen zeitlich stabil bleiben.
    select
      greatest(
        coalesce((select sum(gross_total) from public.machine_sales_daily
                  where day >= current_date - interval '90 days'),0)
        - coalesce((select sum(total_gross) from public.purchases
                    where purchased_at >= current_date - interval '90 days'),0),
        0
      ) as v
  ),
  automat_donation as (
    select round(public.purchase_donation((select v from automat)),2) as v
  )
  select
    (select v from mine),
    (select v from app_total) + (select v from automat_donation),
    case when ((select v from app_total) + (select v from automat_donation)) = 0 then 0
         else round((select v from mine) /
                    ((select v from app_total) + (select v from automat_donation)) * 100, 2)
    end,
    (select v from automat)
$function$;

-- ----------------------------------------------------------------------------
-- 2) Nur system_admin — NULL-Falle geschlossen, Status geprüft
-- ----------------------------------------------------------------------------
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

-- ----------------------------------------------------------------------------
-- 3) system_admin oder shareholder — dieselbe Korrektur
-- ----------------------------------------------------------------------------
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

-- Rechte unverändert: angemeldet genügt zum Aufrufen, die Prüfung im Rumpf
-- entscheidet. Ausdrücklich von public/anon zurückgenommen.
revoke all on function public.my_invoices() from public, anon;
revoke all on function public.donation_pool_summary() from public, anon;
revoke all on function public.link_partner_signature_profile(uuid, uuid) from public, anon;
revoke all on function public.register_telemetry_provider(text, app.telemetry_adapter, text, text) from public, anon;
revoke all on function public.rotate_provider_secret(uuid, text) from public, anon;
revoke all on function public.set_partner_signature_image(uuid, text, text) from public, anon;
revoke all on function public.set_machine_slot(uuid, text, uuid, numeric, integer) from public, anon;
revoke all on function public.request_document_approval(app.document_kind, date, date, text, jsonb, text) from public, anon;

grant execute on function public.my_invoices() to authenticated;
grant execute on function public.donation_pool_summary() to authenticated;
grant execute on function public.link_partner_signature_profile(uuid, uuid) to authenticated;
grant execute on function public.register_telemetry_provider(text, app.telemetry_adapter, text, text) to authenticated;
grant execute on function public.rotate_provider_secret(uuid, text) to authenticated;
grant execute on function public.set_partner_signature_image(uuid, text, text) to authenticated;
grant execute on function public.set_machine_slot(uuid, text, uuid, numeric, integer) to authenticated;
grant execute on function public.request_document_approval(app.document_kind, date, date, text, jsonb, text) to authenticated;
