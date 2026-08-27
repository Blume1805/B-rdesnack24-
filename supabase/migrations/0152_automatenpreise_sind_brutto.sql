-- ============================================================================
-- 0152 — Der Preis am Automaten ist ein Bruttopreis
-- ----------------------------------------------------------------------------
-- Gefunden am 27.08.2026 beim Durchspielen des Firmenkunden-Ablaufs mit der
-- Muster GmbH: Der erste Testkauf liess sich nicht abrechnen. Die Ursache war
-- nicht der Testkauf.
--
-- `purchase_items.unit_price` ist der BRUTTOPREIS. Drei Stellen, die es seit
-- Langem richtig machen, sagen das übereinstimmend:
--
--   * `finance_summary` (0039): `netto = brutto / (1 + satz/100)`
--   * `datev_export_rows` (0055): `sum(quantity * unit_price) as gross`
--   * `receipt-pdf`: „Preise am Automaten sind Bruttopreise", und rechnet
--     den Nettobetrag heraus.
--
-- Zwei Stellen machen es falsch, und beide betreffen Rechnungen:
--
-- 1. `app.business_invoice_basis` (0148/0150, von mir) nahm den Betrag als
--    NETTO und schlug die Steuer OBEN DRAUF. Aus 4,99 € am Automaten wären
--    5,94 € auf der Firmenrechnung geworden. Praktisch fiel es nicht als
--    falscher Betrag auf, sondern als Abbruch: Die Grundlage vergleicht die
--    Summe der Posten mit dem Kaufbetrag, und 5,94 ≠ 4,99 meldet
--    „Summe der Einzelposten weicht vom Kaufbetrag ab". Das Anfordern
--    scheiterte also — an der richtigen Prüfung aus dem falschen Grund.
--
-- 2. `public.create_invoice_for_purchase` (Einzelrechnung für
--    Unternehmer-Kunden, älter als die Firmenkunden) füllt `v_net_7` und
--    `v_net_19` mit `sum(quantity * unit_price)` — also brutto — und rechnet
--    darauf `* 0,07` bzw. `* 0,19`. Die Rechnung wäre um die Steuer zu hoch
--    gewesen. Dass es ein Fehler ist und keine Absicht, steht in derselben
--    Funktion: Der Ersatzweg ohne Einzelposten teilt korrekt
--    (`total_gross / 1.07`). Eine Funktion, zwei Rechenweisen.
--
-- **Nichts Falsches ist hinausgegangen.** `public.invoices` hat 0 Zeilen,
-- `business_invoice_runs` hat 0 Zeilen, `purchases` hat 0 Zeilen — am
-- 27.08.2026 abgefragt, nicht geschätzt. Der Fehler wurde vor dem ersten
-- echten Kauf gefunden.
--
-- ----------------------------------------------------------------------------
-- Wie ab jetzt gerechnet wird
--
-- Brutto ist gegeben, Netto wird herausgerechnet, und die Steuer ist die
-- DIFFERENZ — nicht ein zweites Mal gerundetes Produkt:
--
--     netto  = round(brutto / (1 + satz/100), 2)
--     steuer = brutto - netto
--
-- Damit geht `netto + steuer = brutto` immer auf, auch über mehrere
-- Steuersätze. Rechnete man die Steuer separat, blieben Centdifferenzen, und
-- eine Rechnung, die um einen Cent nicht aufgeht, ist keine ordnungsgemässe
-- Rechnung.
--
-- Zusätzlich in `create_invoice_for_purchase`: Posten, deren Produkt weder
-- 7 % noch 19 % trägt (oder fehlt), fielen bisher STILL aus beiden Summen —
-- die Rechnung wäre zu niedrig gewesen, ohne dass es jemand sieht. Jetzt
-- bricht die Funktion ab. Der auslösende Trigger fängt das ohnehin ab und
-- überlässt die Rechnung der Hand; das ist die richtige Richtung.
-- ============================================================================

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
    -- Brutto ist gegeben; Netto wird herausgerechnet, Steuer ist die
    -- Differenz. So geht die Summe immer auf.
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

-- ----------------------------------------------------------------------------
-- Die ältere Einzelrechnung, derselbe Fehler
-- ----------------------------------------------------------------------------
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

  -- Positionen nach Steuersatz. Die Beträge sind BRUTTO (0152).
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

  -- Ein Posten, dessen Steuersatz wir nicht kennen, fiel früher still aus
  -- der Rechnung. Lieber gar keine Rechnung als eine zu niedrige.
  if v_brutto_rest > 0 then
    raise exception
      'Kauf % enthält Posten ohne bekannten Steuersatz (% €). Rechnung '
      'nicht erstellt.', p_purchase_id, v_brutto_rest;
  end if;

  -- Ersatzweg ohne Einzelposten: unverändert 7 % angenommen.
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

-- Rechte ausdrücklich wie gehabt: `create or replace` erhält sie zwar, aber
-- eine Migration soll den Zustand nennen, den sie herstellt, statt ihn zu
-- erben. Beide Funktionen sind intern — die App ruft sie nicht.
revoke all on function public.create_invoice_for_purchase(uuid) from public;
grant execute on function public.create_invoice_for_purchase(uuid) to service_role;
