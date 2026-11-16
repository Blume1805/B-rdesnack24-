-- 0152 — Der Preis am Automaten ist ein Bruttopreis
-- Volltext und Begründung: supabase/migrations/0152_automatenpreise_sind_brutto.sql

create or replace function app.business_invoice_basis(
  p_business uuid,
  p_jahr     int,
  p_monat    int
)
returns jsonb
language plpgsql
stable
set search_path to 'public', 'app'
as $function$
declare
  von date := make_date(p_jahr, p_monat, 1);
  bis date;
  ergebnis jsonb;
begin
  bis := (von + interval '1 month - 1 day')::date;

  with kauf as (
    select p.id, p.total_gross
    from public.purchases p
    where p.business_id = p_business
      and (p.purchased_at at time zone 'Europe/Berlin')::date between von and bis
  ),
  posten as (
    select k.id as purchase_id, pr.tax_rate,
           sum(pi.quantity * pi.unit_price) as brutto
    from kauf k
    join public.purchase_items pi on pi.purchase_id = k.id
    left join public.products pr on pr.id = pi.product_id
    group by k.id, pr.tax_rate
  ),
  je_kauf as (
    select k.id, k.total_gross,
           coalesce(sum(po.brutto), 0) as aus_posten,
           count(*) filter (where po.purchase_id is not null and po.tax_rate is null) as ohne_satz,
           count(*) filter (where po.purchase_id is not null) as posten
    from kauf k
    left join posten po on po.purchase_id = k.id
    group by k.id, k.total_gross
  ),
  nach_satz as (
    select coalesce(pr.tax_rate, 0) as satz,
           sum(pi.quantity * pi.unit_price) as brutto
    from kauf k
    join public.purchase_items pi on pi.purchase_id = k.id
    left join public.products pr on pr.id = pi.product_id
    group by coalesce(pr.tax_rate, 0)
  ),
  gerechnet as (
    select satz,
           round(brutto, 2) as brutto,
           round(brutto / (1 + satz / 100.0), 2) as netto
    from nach_satz
  )
  select jsonb_build_object(
    'zeitraum', jsonb_build_object('von', von, 'bis', bis),
    'kaeufe', (select count(*) from kauf),
    'brutto_aus_kaeufen', coalesce((select sum(total_gross) from kauf), 0),
    'saetze', coalesce((
      select jsonb_agg(jsonb_build_object(
               'satz_prozent', round(satz, 2),
               'netto', netto,
               'steuer', brutto - netto,
               'brutto', brutto)
             order by satz)
      from gerechnet), '[]'::jsonb),
    'netto_gesamt',  coalesce((select sum(netto) from gerechnet), 0),
    'steuer_gesamt', coalesce((select sum(brutto - netto) from gerechnet), 0),
    'brutto_gesamt', coalesce((select sum(brutto) from gerechnet), 0),
    'probleme', coalesce((
      select jsonb_agg(t.text)
      from (
        select 'Kauf ohne Einzelposten — der Steuersatz ist nicht bestimmbar ('
               || count(*) || ' Stück).' as text
        from je_kauf where posten = 0
        having count(*) > 0
        union all
        select 'Posten ohne hinterlegtes Produkt — Steuersatz unbekannt ('
               || sum(ohne_satz) || ' Stück).'
        from je_kauf where ohne_satz > 0
        having sum(ohne_satz) > 0
        union all
        select 'Summe der Einzelposten weicht vom Kaufbetrag ab ('
               || count(*) || ' Kauf/Käufe).'
        from je_kauf
        where posten > 0 and abs(aus_posten - total_gross) > 0.02
        having count(*) > 0
      ) t), '[]'::jsonb)
  )
  into ergebnis;

  return ergebnis;
end;
$function$;

comment on function app.business_invoice_basis(uuid, int, int) is
  'Grundlage der Monatsrechnung eines Firmenkunden. Automatenpreise sind '
  'brutto; Netto wird herausgerechnet, die Steuer ist die Differenz (0152).';

create or replace function public.create_invoice_for_purchase(p_purchase_id uuid)
returns public.invoices
language plpgsql
security definer
set search_path to 'public', 'app'
as $function$
declare
  v_purchase public.purchases;
  v_customer public.customers;
  v_profile  public.profiles;
  v_existing public.invoices;
  v_brutto_7  numeric(12,2) := 0;
  v_brutto_19 numeric(12,2) := 0;
  v_brutto_rest numeric(12,2) := 0;
  v_net_7    numeric(12,2) := 0;
  v_vat_7    numeric(12,2) := 0;
  v_net_19   numeric(12,2) := 0;
  v_vat_19   numeric(12,2) := 0;
  v_gross    numeric(12,2) := 0;
  v_snapshot jsonb;
begin
  select * into v_existing from public.invoices where purchase_id = p_purchase_id;
  if found then return v_existing; end if;

  select * into v_purchase from public.purchases where id = p_purchase_id;
  if not found then raise exception 'Kauf nicht gefunden'; end if;
  select * into v_customer from public.customers where id = v_purchase.customer_id;
  select * into v_profile  from public.profiles  where id = v_purchase.customer_id;

  if v_customer.customer_type <> 'business' then
    raise exception 'Rechnung nur für Unternehmer-Kunden erlaubt';
  end if;
  if coalesce(v_customer.billing_street,'') = ''
     or coalesce(v_customer.billing_zip,'') = ''
     or coalesce(v_customer.billing_city,'') = ''
     or coalesce(v_customer.tax_number,'') = '' then
    raise exception 'Stammdaten unvollständig (Anschrift + Steuernummer erforderlich)';
  end if;

  select
    coalesce(sum(case when round(p.tax_rate, 0) = 7  then pi.quantity * pi.unit_price end), 0),
    coalesce(sum(case when round(p.tax_rate, 0) = 19 then pi.quantity * pi.unit_price end), 0),
    coalesce(sum(case when p.tax_rate is null
                       or round(p.tax_rate, 0) not in (7, 19)
                      then pi.quantity * pi.unit_price end), 0)
  into v_brutto_7, v_brutto_19, v_brutto_rest
  from public.purchase_items pi
  left join public.products p on p.id = pi.product_id
  where pi.purchase_id = p_purchase_id;

  if v_brutto_rest > 0 then
    raise exception
      'Kauf % enthält Posten ohne bekannten Steuersatz (% €). Rechnung '
      'nicht erstellt.', p_purchase_id, v_brutto_rest;
  end if;

  if v_brutto_7 + v_brutto_19 = 0 then
    v_brutto_7 := v_purchase.total_gross;
  end if;

  v_net_7  := round(v_brutto_7  / 1.07, 2);
  v_vat_7  := v_brutto_7  - v_net_7;
  v_net_19 := round(v_brutto_19 / 1.19, 2);
  v_vat_19 := v_brutto_19 - v_net_19;
  v_gross  := v_brutto_7 + v_brutto_19;

  v_snapshot := jsonb_build_object(
    'company_name', v_customer.company_name,
    'full_name',    v_profile.full_name,
    'email',        v_profile.email,
    'street',       v_customer.billing_street,
    'zip',          v_customer.billing_zip,
    'city',         v_customer.billing_city,
    'country',      coalesce(v_customer.billing_country, 'DE'),
    'tax_number',   v_customer.tax_number,
    'vat_id',       v_customer.vat_id,
    'issuer', jsonb_build_object(
      'name',       'Bördesnack24 GbR (Pia & Philipp Blume)',
      'street',     'Sülldorfer Str. 3A',
      'zip',        '39171',
      'city',       'Sülzetal OT Osterweddingen',
      'country',    'DE',
      'tax_number', '102/178/01635',
      'email',      'boerdesnack24@gmail.com'
    )
  );

  insert into public.invoices(
    purchase_id, customer_id, invoice_number,
    total_net_7, total_vat_7, total_net_19, total_vat_19, total_gross,
    payment_method, billing_snapshot, email_sent_at
  ) values (
    p_purchase_id, v_purchase.customer_id, public.next_invoice_number(),
    v_net_7, v_vat_7, v_net_19, v_vat_19, v_gross,
    v_purchase.payment_method, v_snapshot, now()
  )
  returning * into v_existing;
  return v_existing;
end;
$function$;

comment on function public.create_invoice_for_purchase(uuid) is
  'Einzelrechnung zu einem Kauf eines Unternehmer-Kunden. Automatenpreise '
  'sind brutto; Netto wird herausgerechnet, die Steuer ist die Differenz '
  '(0152).';

revoke all on function public.create_invoice_for_purchase(uuid) from public;
grant execute on function public.create_invoice_for_purchase(uuid) to service_role;
