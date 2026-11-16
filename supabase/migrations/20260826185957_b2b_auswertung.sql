-- 0142, Fortsetzung: Uebersicht und Monatsabrechnung.

create or replace function public.business_dashboard(
  p_business uuid,
  p_von      date default null,
  p_bis      date default null
)
returns jsonb
language plpgsql
stable
security definer
set search_path to 'public', 'app'
as $function$
declare
  von date := coalesce(p_von, date_trunc('month', current_date)::date);
  bis date := coalesce(p_bis, current_date);
  ergebnis jsonb;
begin
  if not (app.is_business_member(p_business, 'admin') or public.is_admin()
          or public.auth_has_permission('businesses.manage')) then
    raise exception 'Keine Berechtigung fuer diesen Firmenkunden' using errcode = '42501';
  end if;
  if bis < von then
    raise exception 'Zeitraum verkehrt herum' using errcode = '22023';
  end if;

  with s as (
    select * from app.business_split(p_business, von, bis)
  ),
  je_person as (
    select s.profile_id,
           count(*)           as kaeufe,
           sum(s.brutto)      as brutto,
           sum(s.arbeitgeber) as arbeitgeber,
           sum(s.mitarbeiter) as mitarbeiter
    from s group by s.profile_id
  )
  select jsonb_build_object(
    'business', (
      select jsonb_build_object('id', b.id, 'name', b.name, 'status', b.status::text)
      from public.businesses b where b.id = p_business
    ),
    'zeitraum', jsonb_build_object('von', von, 'bis', bis),
    'kennzahlen', jsonb_build_object(
      'mitglieder_aktiv', (
        select count(*) from public.business_members m
        where m.business_id = p_business and m.status = 'active'),
      'einladungen_offen', (
        select count(*) from public.business_invitations i
        where i.business_id = p_business
          and i.accepted_at is null and i.revoked_at is null
          and i.expires_at > now()),
      'standorte', (
        select count(*) from public.business_locations l
        where l.business_id = p_business),
      'kaeufe',      coalesce((select sum(kaeufe)      from je_person), 0),
      'brutto',      coalesce((select sum(brutto)      from je_person), 0),
      'arbeitgeber', coalesce((select sum(arbeitgeber) from je_person), 0),
      'mitarbeiter', coalesce((select sum(mitarbeiter) from je_person), 0)
    ),
    'mitglieder', coalesce((
      select jsonb_agg(jsonb_build_object(
               'profile_id', m.profile_id,
               'name',   p.full_name,
               'email',  p.email,
               'role',   m.role::text,
               'status', m.status::text,
               'kaeufe',      coalesce(j.kaeufe, 0),
               'brutto',      coalesce(j.brutto, 0),
               'arbeitgeber', coalesce(j.arbeitgeber, 0),
               'mitarbeiter', coalesce(j.mitarbeiter, 0),
               'budget', (
                 select jsonb_build_object(
                          'monatslimit', bb.monatslimit_brutto,
                          'tageslimit',  bb.tageslimit_brutto,
                          'zuschuss',    bb.zuschuss_prozent,
                          'persoenlich', bb.profile_id is not null)
                 from public.business_budgets bb
                 where bb.business_id = p_business
                   and bb.deleted_at is null
                   and (bb.profile_id = m.profile_id or bb.profile_id is null)
                   and bb.gueltig_von <= bis
                   and (bb.gueltig_bis is null or bb.gueltig_bis >= von)
                 order by (bb.profile_id is null), bb.gueltig_von desc
                 limit 1)
             ) order by p.full_name nulls last, p.email)
      from public.business_members m
      join public.profiles p on p.id = m.profile_id
      left join je_person j on j.profile_id = m.profile_id
      where m.business_id = p_business and m.status <> 'removed'
    ), '[]'::jsonb),
    'einladungen', coalesce((
      select jsonb_agg(jsonb_build_object(
               'id', i.id, 'email', i.email, 'role', i.role::text,
               'expires_at', i.expires_at)
             order by i.created_at desc)
      from public.business_invitations i
      where i.business_id = p_business
        and i.accepted_at is null and i.revoked_at is null
        and i.expires_at > now()
    ), '[]'::jsonb)
  )
  into ergebnis;

  return ergebnis;
end;
$function$;

revoke all on function public.business_dashboard(uuid, date, date) from public;
grant execute on function public.business_dashboard(uuid, date, date) to authenticated;

create or replace function public.business_statement(
  p_business uuid,
  p_jahr     int,
  p_monat    int
)
returns jsonb
language plpgsql
stable
security definer
set search_path to 'public', 'app'
as $function$
declare
  von date;
  bis date;
  ergebnis jsonb;
begin
  if not (app.is_business_member(p_business, 'admin') or public.is_admin()
          or public.auth_has_permission('businesses.manage')) then
    raise exception 'Keine Berechtigung fuer diesen Firmenkunden' using errcode = '42501';
  end if;
  if p_jahr < 2020 or p_jahr > 2100 or p_monat < 1 or p_monat > 12 then
    raise exception 'Ungueltiger Abrechnungsmonat' using errcode = '22023';
  end if;

  von := make_date(p_jahr, p_monat, 1);
  bis := (von + interval '1 month - 1 day')::date;

  with s as (select * from app.business_split(p_business, von, bis))
  select jsonb_build_object(
    'business', (
      select jsonb_build_object(
               'id', b.id, 'name', b.name,
               'anschrift', concat_ws(', ',
                 nullif(b.billing_street,''),
                 nullif(concat_ws(' ', b.billing_zip, b.billing_city), ' ')),
               'steuernummer', b.tax_number, 'ust_id', b.vat_id)
      from public.businesses b where b.id = p_business),
    'zeitraum', jsonb_build_object('von', von, 'bis', bis,
                                   'jahr', p_jahr, 'monat', p_monat),
    'summen', jsonb_build_object(
      'kaeufe',      (select count(*) from s),
      'brutto',      coalesce((select sum(brutto)      from s), 0),
      'arbeitgeber', coalesce((select sum(arbeitgeber) from s), 0),
      'mitarbeiter', coalesce((select sum(mitarbeiter) from s), 0)),
    'zeilen', coalesce((
      select jsonb_agg(jsonb_build_object(
               'gekauft_am',  s.gekauft_am,
               'wer',         coalesce(p.full_name, p.email),
               'automat',     coalesce(ma.code, ma.name),
               'standort',    lo.name,
               'artikel',     coalesce((
                                select jsonb_agg(jsonb_build_object(
                                         'bezeichnung', pi.product_label,
                                         'menge',       pi.quantity,
                                         'einzelpreis', pi.unit_price)
                                       order by pi.product_label)
                                from public.purchase_items pi
                                where pi.purchase_id = s.purchase_id),
                                '[]'::jsonb),
               'brutto',      s.brutto,
               'arbeitgeber', s.arbeitgeber,
               'mitarbeiter', s.mitarbeiter)
             order by s.gekauft_am)
      from s
      left join public.profiles p  on p.id  = s.profile_id
      left join public.machines ma on ma.id = s.machine_id
      left join public.locations lo on lo.id = ma.location_id
    ), '[]'::jsonb)
  )
  into ergebnis;

  return ergebnis;
end;
$function$;

revoke all on function public.business_statement(uuid, int, int) from public;
grant execute on function public.business_statement(uuid, int, int) to authenticated;
