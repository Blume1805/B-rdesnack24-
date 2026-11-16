-- 0142 — Schritt 4, Teil 2: Funktionen des Firmenkundenbereichs.
-- Vollstaendige Begruendung in supabase/migrations/0142_b2b_funktionen.sql

create or replace function public.business_create(
  p_name           text,
  p_legal_form     text default null,
  p_billing_street text default null,
  p_billing_zip    text default null,
  p_billing_city   text default null,
  p_billing_email  text default null,
  p_tax_number     text default null,
  p_vat_id         text default null
)
returns uuid
language plpgsql
security definer
set search_path to 'public', 'app'
as $function$
declare
  neu uuid;
begin
  if not (public.is_admin() or public.auth_has_permission('businesses.manage')) then
    raise exception 'Keine Berechtigung, Firmenkunden anzulegen' using errcode = '42501';
  end if;
  if p_name is null or length(btrim(p_name)) < 2 then
    raise exception 'Firmenname fehlt' using errcode = '22023';
  end if;

  insert into public.businesses (
    name, legal_form, billing_street, billing_zip, billing_city,
    billing_email, tax_number, vat_id, status, created_by, updated_by
  ) values (
    btrim(p_name), p_legal_form, p_billing_street, p_billing_zip,
    p_billing_city, lower(nullif(btrim(p_billing_email), '')),
    p_tax_number, p_vat_id, 'active', auth.uid(), auth.uid()
  )
  returning id into neu;

  return neu;
end;
$function$;

revoke all on function public.business_create(text,text,text,text,text,text,text,text) from public;
grant execute on function public.business_create(text,text,text,text,text,text,text,text) to authenticated;

create or replace function public.business_invite(
  p_business uuid,
  p_email    text,
  p_role     app.business_role default 'member',
  p_tage     int default 14
)
returns jsonb
language plpgsql
security definer
set search_path to 'public', 'app'
as $function$
declare
  darf     boolean;
  mail     text := lower(btrim(p_email));
  token    text;
  eintrag  uuid;
begin
  darf := app.is_business_member(p_business, 'admin')
       or public.is_admin()
       or public.auth_has_permission('businesses.manage');
  if not darf then
    raise exception 'Keine Berechtigung fuer diesen Firmenkunden' using errcode = '42501';
  end if;
  if mail is null or position('@' in mail) < 2 then
    raise exception 'E-Mail-Adresse fehlt oder ist unvollstaendig' using errcode = '22023';
  end if;
  if p_tage < 1 or p_tage > 90 then
    raise exception 'Gueltigkeit muss zwischen 1 und 90 Tagen liegen' using errcode = '22023';
  end if;

  if exists (
    select 1 from public.business_members m
    join public.profiles p on p.id = m.profile_id
    where m.business_id = p_business
      and lower(p.email) = mail
      and m.status = 'active'
  ) then
    raise exception 'Diese Person ist bereits Mitglied' using errcode = '23505';
  end if;

  update public.business_invitations
     set revoked_at = now()
   where business_id = p_business
     and email = mail
     and accepted_at is null
     and revoked_at is null;

  token := encode(extensions.gen_random_bytes(32), 'hex');

  insert into public.business_invitations (
    business_id, email, role, token_hash, expires_at, created_by
  ) values (
    p_business, mail, p_role,
    extensions.digest(token, 'sha256'),
    now() + make_interval(days => p_tage),
    auth.uid()
  )
  returning id into eintrag;

  return jsonb_build_object(
    'id', eintrag, 'email', mail, 'role', p_role::text,
    'token', token, 'expires_at', now() + make_interval(days => p_tage)
  );
end;
$function$;

revoke all on function public.business_invite(uuid,text,app.business_role,int) from public;
grant execute on function public.business_invite(uuid,text,app.business_role,int) to authenticated;

create or replace function public.business_invitation_revoke(p_invitation uuid)
returns void
language plpgsql
security definer
set search_path to 'public', 'app'
as $function$
declare
  firma uuid;
begin
  select business_id into firma
  from public.business_invitations
  where id = p_invitation and accepted_at is null and revoked_at is null;

  if firma is null then
    raise exception 'Einladung nicht gefunden oder bereits erledigt' using errcode = 'P0002';
  end if;
  if not (app.is_business_member(firma, 'admin') or public.is_admin()
          or public.auth_has_permission('businesses.manage')) then
    raise exception 'Keine Berechtigung fuer diesen Firmenkunden' using errcode = '42501';
  end if;

  update public.business_invitations set revoked_at = now() where id = p_invitation;
end;
$function$;

revoke all on function public.business_invitation_revoke(uuid) from public;
grant execute on function public.business_invitation_revoke(uuid) to authenticated;

create or replace function public.business_invitation_accept(p_token text)
returns jsonb
language plpgsql
security definer
set search_path to 'public', 'app'
as $function$
declare
  ein   public.business_invitations%rowtype;
  mail  text;
  wer   uuid := auth.uid();
begin
  if wer is null then
    raise exception 'Nicht angemeldet' using errcode = '42501';
  end if;

  select lower(p.email) into mail
  from public.profiles p
  where p.id = wer and p.status = 'active' and p.deleted_at is null;

  if mail is null then
    raise exception 'Kein aktives Profil' using errcode = '42501';
  end if;

  select * into ein
  from public.business_invitations
  where token_hash = extensions.digest(coalesce(p_token, ''), 'sha256')
    and accepted_at is null
    and revoked_at  is null;

  if ein.id is null or ein.expires_at < now() then
    raise exception 'Einladung ungueltig oder abgelaufen' using errcode = 'P0002';
  end if;

  if ein.email <> mail then
    raise exception 'Diese Einladung gehoert zu einer anderen E-Mail-Adresse' using errcode = '42501';
  end if;

  insert into public.business_members (
    business_id, profile_id, role, status, invited_by, activated_at, updated_by
  ) values (
    ein.business_id, wer, ein.role, 'active', ein.created_by, now(), wer
  )
  on conflict (business_id, profile_id) do update
    set role = excluded.role,
        status = 'active',
        activated_at = coalesce(business_members.activated_at, now()),
        updated_at = now(),
        updated_by = wer;

  update public.business_invitations
     set accepted_at = now(), accepted_by = wer
   where id = ein.id;

  return jsonb_build_object(
    'business_id', ein.business_id,
    'role', ein.role::text,
    'name', (select name from public.businesses where id = ein.business_id)
  );
end;
$function$;

revoke all on function public.business_invitation_accept(text) from public;
grant execute on function public.business_invitation_accept(text) to authenticated;

create or replace function public.business_member_set(
  p_business uuid,
  p_profile  uuid,
  p_role     app.business_role default null,
  p_status   app.business_member_status default null
)
returns void
language plpgsql
security definer
set search_path to 'public', 'app'
as $function$
declare
  wer uuid := auth.uid();
begin
  if not (app.is_business_member(p_business, 'admin') or public.is_admin()
          or public.auth_has_permission('businesses.manage')) then
    raise exception 'Keine Berechtigung fuer diesen Firmenkunden' using errcode = '42501';
  end if;

  if (p_role is not null and p_role <> 'admin')
     or (p_status is not null and p_status <> 'active') then
    if exists (
      select 1 from public.business_members m
      where m.business_id = p_business and m.profile_id = p_profile
        and m.role = 'admin' and m.status = 'active'
    ) and (
      select count(*) from public.business_members m
      where m.business_id = p_business and m.role = 'admin' and m.status = 'active'
    ) <= 1
    and not (public.is_admin() or public.auth_has_permission('businesses.manage'))
    then
      raise exception
        'Das ist der letzte Administrator dieser Firma. Erst einen weiteren benennen, dann aendern.'
        using errcode = '23514';
    end if;
  end if;

  update public.business_members
     set role       = coalesce(p_role, role),
         status     = coalesce(p_status, status),
         updated_at = now(),
         updated_by = wer
   where business_id = p_business and profile_id = p_profile;

  if not found then
    raise exception 'Mitglied nicht gefunden' using errcode = 'P0002';
  end if;
end;
$function$;

revoke all on function public.business_member_set(uuid,uuid,app.business_role,app.business_member_status) from public;
grant execute on function public.business_member_set(uuid,uuid,app.business_role,app.business_member_status) to authenticated;

create or replace function public.business_budget_set(
  p_business    uuid,
  p_profile     uuid    default null,
  p_monatslimit numeric default null,
  p_tageslimit  numeric default null,
  p_zuschuss    numeric default 100,
  p_gueltig_von date    default current_date,
  p_gueltig_bis date    default null
)
returns uuid
language plpgsql
security definer
set search_path to 'public', 'app'
as $function$
declare
  neu uuid;
begin
  if not (app.is_business_member(p_business, 'admin') or public.is_admin()
          or public.auth_has_permission('businesses.manage')) then
    raise exception 'Keine Berechtigung fuer diesen Firmenkunden' using errcode = '42501';
  end if;

  insert into public.business_budgets (
    business_id, profile_id, monatslimit_brutto, tageslimit_brutto,
    zuschuss_prozent, gueltig_von, gueltig_bis, created_by, updated_by
  ) values (
    p_business, p_profile, p_monatslimit, p_tageslimit,
    coalesce(p_zuschuss, 100), p_gueltig_von, p_gueltig_bis,
    auth.uid(), auth.uid()
  )
  on conflict (business_id, (coalesce(profile_id, '00000000-0000-0000-0000-000000000000'::uuid)), gueltig_von)
    where deleted_at is null
  do update set
    monatslimit_brutto = excluded.monatslimit_brutto,
    tageslimit_brutto  = excluded.tageslimit_brutto,
    zuschuss_prozent   = excluded.zuschuss_prozent,
    gueltig_bis        = excluded.gueltig_bis,
    updated_at         = now(),
    updated_by         = auth.uid()
  returning id into neu;

  return neu;
end;
$function$;

revoke all on function public.business_budget_set(uuid,uuid,numeric,numeric,numeric,date,date) from public;
grant execute on function public.business_budget_set(uuid,uuid,numeric,numeric,numeric,date,date) to authenticated;

create or replace function app.business_split(
  p_business uuid,
  p_von      date,
  p_bis      date
)
returns table (
  purchase_id   uuid,
  profile_id    uuid,
  gekauft_am    timestamptz,
  machine_id    uuid,
  brutto        numeric,
  arbeitgeber   numeric,
  mitarbeiter   numeric
)
language sql
stable
set search_path to 'public', 'app'
as $function$
  with kauf as (
    select p.id, p.customer_id, p.purchased_at, p.machine_id, p.total_gross,
           (p.purchased_at at time zone 'Europe/Berlin')::date as tag,
           date_trunc('month', p.purchased_at at time zone 'Europe/Berlin')::date as monat
    from public.purchases p
    where p.business_id = p_business
      and (p.purchased_at at time zone 'Europe/Berlin')::date between p_von and p_bis
  ),
  mit_budget as (
    select k.*,
           coalesce(b.zuschuss_prozent, 100) as zuschuss,
           b.monatslimit_brutto,
           b.tageslimit_brutto
    from kauf k
    left join lateral (
      select bb.*
      from public.business_budgets bb
      where bb.business_id = p_business
        and bb.deleted_at is null
        and (bb.profile_id = k.customer_id or bb.profile_id is null)
        and bb.gueltig_von <= k.tag
        and (bb.gueltig_bis is null or bb.gueltig_bis >= k.tag)
      order by (bb.profile_id is null), bb.gueltig_von desc
      limit 1
    ) b on true
  ),
  grundsatz as (
    select m.*, round(m.total_gross * m.zuschuss / 100.0, 2) as satz
    from mit_budget m
  ),
  lauf as (
    select g.*,
           coalesce(sum(g.satz) over (
             partition by g.customer_id, g.monat
             order by g.purchased_at, g.id
             rows between unbounded preceding and 1 preceding), 0) as vorher_monat,
           coalesce(sum(g.satz) over (
             partition by g.customer_id, g.tag
             order by g.purchased_at, g.id
             rows between unbounded preceding and 1 preceding), 0) as vorher_tag
    from grundsatz g
  )
  select
    l.id, l.customer_id, l.purchased_at, l.machine_id, l.total_gross,
    greatest(least(
        l.satz,
        case when l.monatslimit_brutto is null then null
             else greatest(l.monatslimit_brutto - l.vorher_monat, 0) end,
        case when l.tageslimit_brutto is null then null
             else greatest(l.tageslimit_brutto - l.vorher_tag, 0) end
      ), 0) as arbeitgeber,
    l.total_gross - greatest(least(
        l.satz,
        case when l.monatslimit_brutto is null then null
             else greatest(l.monatslimit_brutto - l.vorher_monat, 0) end,
        case when l.tageslimit_brutto is null then null
             else greatest(l.tageslimit_brutto - l.vorher_tag, 0) end
      ), 0) as mitarbeiter
  from lauf l;
$function$;

comment on function app.business_split(uuid, date, date) is
  'Aufteilung jedes Firmenkaufs in Arbeitgeber- und Mitarbeiteranteil. Wird gerechnet, nicht gespeichert — Kaeufe treffen asynchron ein.';

revoke all on function app.business_split(uuid, date, date) from public;

create or replace function public.my_businesses()
returns jsonb
language sql
stable
security definer
set search_path to 'public', 'app'
as $function$
  select coalesce(jsonb_agg(jsonb_build_object(
           'id', b.id, 'name', b.name, 'role', m.role::text,
           'status', m.status::text, 'seit', m.activated_at
         ) order by b.name), '[]'::jsonb)
  from public.business_members m
  join public.businesses b on b.id = m.business_id
  where m.profile_id = (select auth.uid())
    and m.status = 'active'
    and b.deleted_at is null;
$function$;

revoke all on function public.my_businesses() from public;
grant execute on function public.my_businesses() to authenticated;
