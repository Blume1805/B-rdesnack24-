create or replace function public.lead_create(
  p_kind         app.lead_kind,
  p_company_name text,
  p_contact_name text default null,
  p_email        text default null,
  p_phone        text default null,
  p_message      text default null,
  p_source       text default null
)
returns uuid
language plpgsql
security definer
set search_path to 'public', 'app'
as $lead_create$
declare
  neu uuid;
begin
  if not (public.is_admin() or public.auth_has_permission('leads.manage')) then
    raise exception 'Keine Berechtigung, Anfragen anzulegen' using errcode = '42501';
  end if;
  if length(btrim(coalesce(p_company_name, ''))) < 2 then
    raise exception 'Firmenname fehlt' using errcode = '22023';
  end if;

  insert into public.leads (
    kind, company_name, contact_name, email, phone, message, source,
    created_by, updated_by
  ) values (
    p_kind, btrim(p_company_name), nullif(btrim(coalesce(p_contact_name, '')), ''),
    nullif(lower(btrim(coalesce(p_email, ''))), ''),
    nullif(btrim(coalesce(p_phone, '')), ''),
    nullif(btrim(coalesce(p_message, '')), ''),
    nullif(btrim(coalesce(p_source, '')), ''),
    auth.uid(), auth.uid()
  )
  returning id into neu;

  return neu;
end;
$lead_create$;

revoke all on function public.lead_create(app.lead_kind, text, text, text, text, text, text) from public;
grant execute on function public.lead_create(app.lead_kind, text, text, text, text, text, text) to authenticated;

comment on function public.lead_create(app.lead_kind, text, text, text, text, text, text) is
  'Legt eine Anfrage im internen Vertrieb an. Verlangt leads.manage.';

create or replace function public.lead_status_set(
  p_lead   uuid,
  p_status app.lead_status,
  p_notiz  text default null
)
returns void
language plpgsql
security definer
set search_path to 'public', 'app'
as $lead_status_set$
begin
  if not (public.is_admin() or public.auth_has_permission('leads.manage')) then
    raise exception 'Keine Berechtigung für Anfragen' using errcode = '42501';
  end if;

  update public.leads
     set status = p_status, updated_at = now(), updated_by = auth.uid()
   where id = p_lead and deleted_at is null;
  if not found then
    raise exception 'Anfrage nicht gefunden' using errcode = 'P0002';
  end if;

  if p_notiz is not null and length(btrim(p_notiz)) > 0 then
    insert into public.lead_activities (lead_id, text, created_by)
    values (p_lead, btrim(p_notiz), auth.uid());
  end if;
end;
$lead_status_set$;

revoke all on function public.lead_status_set(uuid, app.lead_status, text) from public;
grant execute on function public.lead_status_set(uuid, app.lead_status, text) to authenticated;

create or replace function public.lead_activity_add(p_lead uuid, p_text text)
returns uuid
language plpgsql
security definer
set search_path to 'public', 'app'
as $lead_activity_add$
declare
  neu uuid;
begin
  if not (public.is_admin() or public.auth_has_permission('leads.manage')) then
    raise exception 'Keine Berechtigung für Anfragen' using errcode = '42501';
  end if;
  if length(btrim(coalesce(p_text, ''))) = 0 then
    raise exception 'Notiz ist leer' using errcode = '22023';
  end if;
  if not exists (select 1 from public.leads where id = p_lead and deleted_at is null) then
    raise exception 'Anfrage nicht gefunden' using errcode = 'P0002';
  end if;

  insert into public.lead_activities (lead_id, text, created_by)
  values (p_lead, btrim(p_text), auth.uid())
  returning id into neu;

  return neu;
end;
$lead_activity_add$;

revoke all on function public.lead_activity_add(uuid, text) from public;
grant execute on function public.lead_activity_add(uuid, text) to authenticated;

create or replace function public.leads_list(p_status app.lead_status default null)
returns jsonb
language plpgsql
stable
security definer
set search_path to 'public', 'app'
as $leads_list$
declare
  ergebnis jsonb;
begin
  if not (public.is_admin() or public.auth_has_permission('leads.manage')) then
    raise exception 'Keine Berechtigung für Anfragen' using errcode = '42501';
  end if;

  select coalesce(jsonb_agg(jsonb_build_object(
           'id', l.id, 'kind', l.kind::text, 'status', l.status::text,
           'company_name', l.company_name, 'contact_name', l.contact_name,
           'email', l.email, 'phone', l.phone, 'source', l.source,
           'business_id', l.business_id,
           'created_at', l.created_at
         ) order by l.created_at desc), '[]'::jsonb)
  into ergebnis
  from public.leads l
  where l.deleted_at is null
    and (p_status is null or l.status = p_status);

  return ergebnis;
end;
$leads_list$;

revoke all on function public.leads_list(app.lead_status) from public;
grant execute on function public.leads_list(app.lead_status) to authenticated;

create or replace function public.advertising_campaign_set(
  p_business    uuid,
  p_name        text,
  p_welt        app.campaign_welt,
  p_von         date,
  p_bis         date default null,
  p_budget      numeric default null,
  p_ziel_url    text default null,
  p_bemerkung   text default null,
  p_campaign    uuid default null
)
returns uuid
language plpgsql
security definer
set search_path to 'public', 'app'
as $campaign_set$
declare
  neu uuid;
begin
  if not (public.is_admin() or public.auth_has_permission('advertising.manage')) then
    raise exception 'Keine Berechtigung für Werbekampagnen' using errcode = '42501';
  end if;
  if length(btrim(coalesce(p_name, ''))) < 2 then
    raise exception 'Name der Kampagne fehlt' using errcode = '22023';
  end if;
  if p_bis is not null and p_bis < p_von then
    raise exception 'Das Kampagnenende liegt vor dem Beginn' using errcode = '22023';
  end if;
  if not exists (select 1 from public.businesses where id = p_business and deleted_at is null) then
    raise exception 'Unternehmen nicht gefunden' using errcode = 'P0002';
  end if;

  if p_campaign is null then
    insert into public.advertising_campaigns (
      business_id, name, welt, von, bis, budget_gesamt, ziel_url, bemerkung,
      created_by, updated_by
    ) values (
      p_business, btrim(p_name), p_welt, p_von, p_bis, p_budget,
      nullif(btrim(coalesce(p_ziel_url, '')), ''),
      nullif(btrim(coalesce(p_bemerkung, '')), ''),
      auth.uid(), auth.uid()
    )
    returning id into neu;
  else
    update public.advertising_campaigns
       set business_id = p_business, name = btrim(p_name), welt = p_welt,
           von = p_von, bis = p_bis, budget_gesamt = p_budget,
           ziel_url = nullif(btrim(coalesce(p_ziel_url, '')), ''),
           bemerkung = nullif(btrim(coalesce(p_bemerkung, '')), ''),
           updated_at = now(), updated_by = auth.uid()
     where id = p_campaign and deleted_at is null
     returning id into neu;
    if neu is null then
      raise exception 'Kampagne nicht gefunden' using errcode = 'P0002';
    end if;
  end if;

  return neu;
end;
$campaign_set$;

revoke all on function public.advertising_campaign_set(
  uuid, text, app.campaign_welt, date, date, numeric, text, text, uuid) from public;
grant execute on function public.advertising_campaign_set(
  uuid, text, app.campaign_welt, date, date, numeric, text, text, uuid) to authenticated;

create or replace function public.advertising_campaign_status(
  p_campaign uuid,
  p_status   app.campaign_status
)
returns void
language plpgsql
security definer
set search_path to 'public', 'app'
as $campaign_status$
begin
  if not (public.is_admin() or public.auth_has_permission('advertising.manage')) then
    raise exception 'Keine Berechtigung für Werbekampagnen' using errcode = '42501';
  end if;

  update public.advertising_campaigns
     set status = p_status, updated_at = now(), updated_by = auth.uid()
   where id = p_campaign and deleted_at is null;
  if not found then
    raise exception 'Kampagne nicht gefunden' using errcode = 'P0002';
  end if;
end;
$campaign_status$;

revoke all on function public.advertising_campaign_status(uuid, app.campaign_status) from public;
grant execute on function public.advertising_campaign_status(uuid, app.campaign_status) to authenticated;

create or replace function public.my_advertising_campaigns()
returns jsonb
language sql
stable
security definer
set search_path to 'public', 'app'
as $my_campaigns$
  select coalesce(jsonb_agg(jsonb_build_object(
           'id', c.id, 'firma', b.name, 'name', c.name,
           'welt', c.welt::text, 'status', c.status::text,
           'von', c.von, 'bis', c.bis, 'budget_gesamt', c.budget_gesamt
         ) order by c.von desc), '[]'::jsonb)
  from public.advertising_campaigns c
  join public.businesses b on b.id = c.business_id
  where c.deleted_at is null
    and app.is_business_member(c.business_id);
$my_campaigns$;

revoke all on function public.my_advertising_campaigns() from public;
grant execute on function public.my_advertising_campaigns() to authenticated;

create or replace function public.advertising_creative_upload(
  p_campaign uuid,
  p_kind     app.creative_kind,
  p_file_url text
)
returns uuid
language plpgsql
security definer
set search_path to 'public', 'app'
as $creative_upload$
declare
  neu uuid;
  v_business uuid;
begin
  select business_id into v_business from public.advertising_campaigns
   where id = p_campaign and deleted_at is null;
  if v_business is null then
    raise exception 'Kampagne nicht gefunden' using errcode = 'P0002';
  end if;
  if not (app.is_business_member(v_business, 'admin') or public.is_admin()
          or public.auth_has_permission('creatives.approve')) then
    raise exception 'Keine Berechtigung für diese Kampagne' using errcode = '42501';
  end if;
  if coalesce(btrim(p_file_url), '') = '' or p_file_url !~ '^https://' then
    raise exception 'Datei fehlt oder ist keine gültige Adresse' using errcode = '22023';
  end if;

  insert into public.advertising_creatives (
    campaign_id, kind, file_url, status, created_by, updated_by
  ) values (
    p_campaign, p_kind, p_file_url, 'pending_review', auth.uid(), auth.uid()
  )
  returning id into neu;

  return neu;
end;
$creative_upload$;

revoke all on function public.advertising_creative_upload(uuid, app.creative_kind, text) from public;
grant execute on function public.advertising_creative_upload(uuid, app.creative_kind, text) to authenticated;

comment on function public.advertising_creative_upload(uuid, app.creative_kind, text) is
  'Ein Werbekunde lädt sein eigenes Werbemittel hoch (Punkt 27). Es startet '
  'als pending_review — aktiv wird es erst nach Prüfung (0155).';

create or replace function public.advertising_creative_review(
  p_creative uuid,
  p_status   app.creative_status,
  p_notiz    text default null
)
returns void
language plpgsql
security definer
set search_path to 'public', 'app'
as $creative_review$
begin
  if not (public.is_admin() or public.auth_has_permission('creatives.approve')) then
    raise exception 'Keine Berechtigung, Werbemittel zu prüfen' using errcode = '42501';
  end if;
  if p_status not in ('approved', 'rejected', 'revision_required') then
    raise exception 'Nur approved, rejected oder revision_required sind eine Prüfentscheidung'
      using errcode = '22023';
  end if;

  update public.advertising_creatives
     set status = p_status,
         review_note = nullif(btrim(coalesce(p_notiz, '')), ''),
         reviewed_by = auth.uid(), reviewed_at = now(),
         updated_at = now(), updated_by = auth.uid()
   where id = p_creative and deleted_at is null;
  if not found then
    raise exception 'Werbemittel nicht gefunden' using errcode = 'P0002';
  end if;
end;
$creative_review$;

revoke all on function public.advertising_creative_review(uuid, app.creative_status, text) from public;
grant execute on function public.advertising_creative_review(uuid, app.creative_status, text) to authenticated;

create or replace function public.sponsorship_set(
  p_business    uuid,
  p_location    uuid,
  p_betrag      numeric,
  p_von         date,
  p_bis         date default null,
  p_beteiligung numeric default null,
  p_bemerkung   text default null,
  p_sponsorship uuid default null
)
returns uuid
language plpgsql
security definer
set search_path to 'public', 'app'
as $sponsorship_set$
declare
  neu uuid;
begin
  if not (public.is_admin() or public.auth_has_permission('sponsorship.manage')) then
    raise exception 'Keine Berechtigung für Sponsoring' using errcode = '42501';
  end if;
  if p_betrag < 0 then
    raise exception 'Der Betrag darf nicht negativ sein' using errcode = '22023';
  end if;
  if p_bis is not null and p_bis < p_von then
    raise exception 'Das Sponsoringende liegt vor dem Beginn' using errcode = '22023';
  end if;
  if not exists (select 1 from public.locations where id = p_location and deleted_at is null) then
    raise exception 'Standort nicht gefunden' using errcode = 'P0002';
  end if;

  if p_sponsorship is null then
    insert into public.sponsorships (
      business_id, location_id, betrag_monat, beteiligung_prozent, von, bis,
      bemerkung, created_by, updated_by
    ) values (
      p_business, p_location, p_betrag, p_beteiligung, p_von, p_bis,
      nullif(btrim(coalesce(p_bemerkung, '')), ''), auth.uid(), auth.uid()
    )
    returning id into neu;
  else
    update public.sponsorships
       set business_id = p_business, location_id = p_location,
           betrag_monat = p_betrag, beteiligung_prozent = p_beteiligung,
           von = p_von, bis = p_bis,
           bemerkung = nullif(btrim(coalesce(p_bemerkung, '')), ''),
           updated_at = now(), updated_by = auth.uid()
     where id = p_sponsorship and deleted_at is null
     returning id into neu;
    if neu is null then
      raise exception 'Sponsoring nicht gefunden' using errcode = 'P0002';
    end if;
  end if;

  return neu;
end;
$sponsorship_set$;

revoke all on function public.sponsorship_set(
  uuid, uuid, numeric, date, date, numeric, text, uuid) from public;
grant execute on function public.sponsorship_set(
  uuid, uuid, numeric, date, date, numeric, text, uuid) to authenticated;

create or replace function public.sponsorship_status(
  p_sponsorship uuid,
  p_status      app.werbevertrag_status
)
returns void
language plpgsql
security definer
set search_path to 'public', 'app'
as $sponsorship_status$
begin
  if not (public.is_admin() or public.auth_has_permission('sponsorship.manage')) then
    raise exception 'Keine Berechtigung für Sponsoring' using errcode = '42501';
  end if;

  update public.sponsorships
     set status = p_status, updated_at = now(), updated_by = auth.uid()
   where id = p_sponsorship and deleted_at is null;
  if not found then
    raise exception 'Sponsoring nicht gefunden' using errcode = 'P0002';
  end if;
end;
$sponsorship_status$;

revoke all on function public.sponsorship_status(uuid, app.werbevertrag_status) from public;
grant execute on function public.sponsorship_status(uuid, app.werbevertrag_status) to authenticated;

create or replace function public.advertising_coupon_sponsorship_set(
  p_campaign uuid,
  p_anlass   app.coupon_anlass,
  p_von      date,
  p_bis      date,
  p_sponsorship uuid default null
)
returns uuid
language plpgsql
security definer
set search_path to 'public', 'app'
as $coupon_sponsorship_set$
declare
  neu uuid;
begin
  if not (public.is_admin() or public.auth_has_permission('advertising.manage')) then
    raise exception 'Keine Berechtigung für Werbekampagnen' using errcode = '42501';
  end if;
  if p_bis < p_von then
    raise exception 'Das Ende liegt vor dem Beginn' using errcode = '22023';
  end if;
  if not exists (select 1 from public.advertising_campaigns
                 where id = p_campaign and deleted_at is null) then
    raise exception 'Kampagne nicht gefunden' using errcode = 'P0002';
  end if;

  if p_sponsorship is null then
    insert into public.advertising_coupon_sponsorships (
      campaign_id, anlass, von, bis, created_by, updated_by
    ) values (
      p_campaign, p_anlass, p_von, p_bis, auth.uid(), auth.uid()
    )
    returning id into neu;
  else
    update public.advertising_coupon_sponsorships
       set campaign_id = p_campaign, anlass = p_anlass, von = p_von, bis = p_bis,
           updated_at = now(), updated_by = auth.uid()
     where id = p_sponsorship and deleted_at is null
     returning id into neu;
    if neu is null then
      raise exception 'Coupon-Sponsorschaft nicht gefunden' using errcode = 'P0002';
    end if;
  end if;

  return neu;
end;
$coupon_sponsorship_set$;

revoke all on function public.advertising_coupon_sponsorship_set(
  uuid, app.coupon_anlass, date, date, uuid) from public;
grant execute on function public.advertising_coupon_sponsorship_set(
  uuid, app.coupon_anlass, date, date, uuid) to authenticated;

comment on function public.advertising_coupon_sponsorship_set(
  uuid, app.coupon_anlass, date, date, uuid) is
  'Ordnet einer Kampagne den Logoplatz auf einem Coupon-Anlass zu. Der '
  'Ausschluss in advertising_coupon_sponsorships lässt einen zweiten '
  'gleichzeitigen Partner auf demselben Anlass nicht zu, sobald der Status '
  'auf zur_unterschrift oder aktiv wechselt (0155).';

create or replace function public.advertising_coupon_sponsorship_status(
  p_sponsorship uuid,
  p_status      app.werbevertrag_status
)
returns void
language plpgsql
security definer
set search_path to 'public', 'app'
as $coupon_sponsorship_status$
begin
  if not (public.is_admin() or public.auth_has_permission('advertising.manage')) then
    raise exception 'Keine Berechtigung für Werbekampagnen' using errcode = '42501';
  end if;

  update public.advertising_coupon_sponsorships
     set status = p_status, updated_at = now(), updated_by = auth.uid()
   where id = p_sponsorship and deleted_at is null;
  if not found then
    raise exception 'Coupon-Sponsorschaft nicht gefunden' using errcode = 'P0002';
  end if;
end;
$coupon_sponsorship_status$;

revoke all on function public.advertising_coupon_sponsorship_status(uuid, app.werbevertrag_status) from public;
grant execute on function public.advertising_coupon_sponsorship_status(uuid, app.werbevertrag_status) to authenticated;

create or replace function public.advertising_redirect_count(p_campaign uuid)
returns void
language plpgsql
security definer
set search_path to 'public', 'app'
as $redirect_count$
begin
  if not exists (select 1 from public.advertising_campaigns
                 where id = p_campaign and deleted_at is null) then
    return;
  end if;

  insert into public.advertising_redirect_counts (campaign_id, day, count)
  values (p_campaign, current_date, 1)
  on conflict (campaign_id, day) do update
    set count = advertising_redirect_counts.count + 1;
end;
$redirect_count$;

revoke all on function public.advertising_redirect_count(uuid) from public;
grant execute on function public.advertising_redirect_count(uuid) to anon, authenticated;

comment on function public.advertising_redirect_count(uuid) is
  'Zählt eine Weiterleitung. Absichtlich ohne Authentifizierung aufrufbar '
  '(anon) — der Aufruf kommt von einem angetippten Link. Kann nur '
  'hochzählen, nichts lesen (0155).';

create or replace function app.coupon_anlass_zu_offer_source(p_anlass app.coupon_anlass)
returns text
language sql
immutable
as $anlass_zu_source$
  select case p_anlass
    when 'geburtstag'            then 'birthday'
    when 'meilenstein'           then 'loyalty'
    when 'jahrestag'             then 'anniversary'
    when 'persoenliches_angebot' then 'auto'
    else null
  end;
$anlass_zu_source$;

comment on function app.coupon_anlass_zu_offer_source(app.coupon_anlass) is
  'Übersetzt einen Coupon-Anlass in den Wert von personal_offers.source. '
  'NULL für tagesangebot — der läuft über offers/offer_activations, nicht '
  'über personal_offers (0155).';

create or replace function public.advertising_campaign_report(p_campaign uuid)
returns jsonb
language plpgsql
stable
security definer
set search_path to 'public', 'app'
as $campaign_report$
declare
  v_business uuid;
  v_ziel     text;
  je_anlass  jsonb := '[]'::jsonb;
  r          record;
  v_ausgabe  bigint;
  v_einloesung bigint;
  v_aufrufe  bigint;
  mindest constant int := 30;
begin
  select business_id, ziel_url into v_business, v_ziel
  from public.advertising_campaigns where id = p_campaign and deleted_at is null;
  if v_business is null then
    raise exception 'Kampagne nicht gefunden' using errcode = 'P0002';
  end if;
  if not (app.is_business_member(v_business) or public.is_admin()
          or public.auth_has_permission('advertising.manage')) then
    raise exception 'Keine Berechtigung für diese Kampagne' using errcode = '42501';
  end if;

  for r in
    select s.id, s.anlass, s.von, s.bis
    from public.advertising_coupon_sponsorships s
    where s.campaign_id = p_campaign and s.deleted_at is null
    order by s.von
  loop
    if r.anlass = 'tagesangebot' then
      select count(*) into v_ausgabe
      from public.offer_activations a
      join public.offers o on o.id = a.offer_id
      where o.kind = 'daily'
        and a.activated_at::date between r.von and r.bis;
      select count(*) into v_einloesung
      from public.offer_activations a
      join public.offers o on o.id = a.offer_id
      where o.kind = 'daily'
        and a.redeemed_at is not null
        and a.redeemed_at::date between r.von and r.bis;
    else
      select count(*) into v_ausgabe
      from public.personal_offers p
      where p.source = app.coupon_anlass_zu_offer_source(r.anlass)
        and p.created_at::date between r.von and r.bis;
      select count(*) into v_einloesung
      from public.personal_offers p
      where p.source = app.coupon_anlass_zu_offer_source(r.anlass)
        and p.redeemed_at is not null
        and p.redeemed_at::date between r.von and r.bis;
    end if;

    je_anlass := je_anlass || jsonb_build_object(
      'anlass', r.anlass::text,
      'von', r.von, 'bis', r.bis,
      'ausgabe', case when v_ausgabe >= mindest then v_ausgabe else null end,
      'ausgabe_unter_mindestzahl', v_ausgabe < mindest,
      'einloesung', case when v_einloesung >= mindest then v_einloesung else null end,
      'einloesung_unter_mindestzahl', v_einloesung < mindest
    );
  end loop;

  select coalesce(sum(c.count), 0) into v_aufrufe
  from public.advertising_redirect_counts c
  where c.campaign_id = p_campaign;

  return jsonb_build_object(
    'campaign_id', p_campaign,
    'ziel_url', v_ziel,
    'je_anlass', je_anlass,
    'aufrufe', case when v_aufrufe >= mindest then v_aufrufe else null end,
    'aufrufe_unter_mindestzahl', v_aufrufe < mindest,
    'mindestzahl', mindest
  );
end;
$campaign_report$;

revoke all on function public.advertising_campaign_report(uuid) from public;
grant execute on function public.advertising_campaign_report(uuid) to authenticated;

comment on function public.advertising_campaign_report(uuid) is
  'Der Abschlussbericht: Ausgabe/Aktivierung, Einlösung und Aufrufe, je '
  'Anlass. Unter 30 wird die Zahl unterdrückt (ausgabe_unter_mindestzahl = '
  'true), nicht gerundet oder geschätzt (0155, Entscheidung vom 27.08.2026).';
