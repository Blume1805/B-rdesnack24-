-- ============================================================================
-- 0131 — Die Richtung kommt aus der Buchung, nicht aus dem Kontenstamm
-- ----------------------------------------------------------------------------
-- Beim Umsetzen der Vorgabe „Ausgaben immer rot mit einem `-` davor"
-- (25.08.2026) ist aufgefallen, dass dieselbe Buchung in den beiden Ansichten
-- verschieden eingeordnet war:
--
--   * `finance_bookings_list` (Einzelbuchungen) nimmt `finance_bookings.direction`
--     — die Richtung, die der Sync aus dem Beleg ermittelt hat.
--   * `finance_summary` (Kontoübersicht) nahm `finance_accounts.direction`
--     — die Stammdaten-Einordnung des Kontos.
--
-- Wo beide auseinandergehen, widersprach die App sich selbst. Nachgesehen am
-- laufenden Bestand, nicht vermutet:
--
--   0480  Geringwerte Wirtschaftsgüter  Stamm: asset      Buchung: expense
--         → 352,93 € Anschaffung: in der Liste rot mit „-", in der
--           Kontoübersicht grau ohne Vorzeichen.
--   1780  Umsatzsteuer-Vorauszahlungen  Stamm: liability  Buchung: revenue
--   2709  Sonstige Erträge              Stamm: asset      Buchung: revenue
--
-- Für die Kennzahlen darüber (Umsatz, Aufwand, Ergebnis, USt) galt schon
-- immer die Buchung — nur die Kontozeilen tanzten aus der Reihe. Ab hier
-- gilt überall dieselbe Quelle.
--
-- Nebenwirkung, bewusst in Kauf genommen: Ein Konto, auf dem Buchungen in
-- zwei Richtungen liegen, erscheint jetzt in zwei Zeilen. Das ist genauer
-- als eine Zeile mit einer Richtung, die für die Hälfte der Beträge falsch
-- ist.
--
-- Sonst unverändert gegenüber 0125.
-- ============================================================================

create or replace function public.finance_summary(p_from date, p_to date)
returns jsonb
language plpgsql
stable
security definer
set search_path to 'public', 'app'
as $function$
declare
  result jsonb;
  v_purchases_net_7   numeric(14,2) := 0;
  v_purchases_net_19  numeric(14,2) := 0;
  v_purchases_vat_7   numeric(14,2) := 0;
  v_purchases_vat_19  numeric(14,2) := 0;
  v_fallback_gross    numeric(14,2) := 0;
  v_fallback_net      numeric(14,2) := 0;
  v_fallback_vat      numeric(14,2) := 0;
begin
  if not public.auth_has_permission('finance.view') then
    raise exception 'Keine Berechtigung für Finanzdaten' using errcode = '42501';
  end if;
  if p_to < p_from then
    raise exception 'Ungültiger Zeitraum';
  end if;

  -- 1) Aggregation aus purchase_items (mit product.tax_rate)
  select
    coalesce(sum(case when tr = 7  then item_net end), 0),
    coalesce(sum(case when tr = 19 then item_net end), 0),
    coalesce(sum(case when tr = 7  then item_vat end), 0),
    coalesce(sum(case when tr = 19 then item_vat end), 0)
  into
    v_purchases_net_7,
    v_purchases_net_19,
    v_purchases_vat_7,
    v_purchases_vat_19
  from (
    select
      (coalesce(round(p.tax_rate::numeric, 0), 7))::int as tr,
      round((pi.quantity * pi.unit_price)
              / (1 + coalesce(round(p.tax_rate::numeric, 0), 7) / 100.0), 2)
        as item_net,
      round((pi.quantity * pi.unit_price)
              - (pi.quantity * pi.unit_price)
                / (1 + coalesce(round(p.tax_rate::numeric, 0), 7) / 100.0), 2)
        as item_vat
    from public.purchase_items pi
    join public.purchases       pu on pu.id = pi.purchase_id
    left join public.products    p on p.id = pi.product_id
    where pu.purchased_at::date between p_from and p_to and pu.source <> 'demo'
  ) t;

  -- 2) Fallback: Käufe ohne items → total_gross direkt (7 %)
  select coalesce(sum(pu.total_gross), 0)
    into v_fallback_gross
  from public.purchases pu
  where pu.purchased_at::date between p_from and p_to and pu.source <> 'demo'
    and not exists (select 1 from public.purchase_items pi where pi.purchase_id = pu.id);
  v_fallback_net := round(v_fallback_gross / 1.07, 2);
  v_fallback_vat := round(v_fallback_gross - v_fallback_net, 2);
  v_purchases_net_7 := v_purchases_net_7 + v_fallback_net;
  v_purchases_vat_7 := v_purchases_vat_7 + v_fallback_vat;

  with b as (
    select * from public.finance_bookings
    where deleted_at is null and booking_date between p_from and p_to
  ),
  by_account as (
    select b.account_code,
           a.name,
           -- HIER die Änderung: die Richtung der Buchung, nicht die des
           -- Kontenstamms.
           b.direction,
           sum(b.amount_net)   as net,
           sum(b.amount_tax)   as tax,
           sum(b.amount_gross) as gross
    from b join public.finance_accounts a on a.code = b.account_code
    group by b.account_code, a.name, b.direction
  ),
  account_rows as (
    select account_code as code, name, direction, net, tax, gross from by_account
    union all
    select 'APP-8300', 'App-Käufe (Kunden) 7 %',  'revenue',
           v_purchases_net_7,  v_purchases_vat_7,  v_purchases_net_7  + v_purchases_vat_7
    where v_purchases_net_7 <> 0 or v_purchases_vat_7 <> 0
    union all
    select 'APP-8400', 'App-Käufe (Kunden) 19 %', 'revenue',
           v_purchases_net_19, v_purchases_vat_19, v_purchases_net_19 + v_purchases_vat_19
    where v_purchases_net_19 <> 0 or v_purchases_vat_19 <> 0
  )
  select jsonb_build_object(
    'from', p_from,
    'to',   p_to,
    'revenue_net_7',
      coalesce((select sum(amount_net) from b where direction='revenue' and tax_rate=7),0)
      + v_purchases_net_7,
    'revenue_net_19',
      coalesce((select sum(amount_net) from b where direction='revenue' and tax_rate=19),0)
      + v_purchases_net_19,
    'revenue_net',
      coalesce((select sum(amount_net) from b where direction='revenue'),0)
      + v_purchases_net_7 + v_purchases_net_19,
    'expense_net',
      coalesce((select sum(amount_net) from b where direction='expense'),0),
    'result_net',
      (coalesce((select sum(amount_net) from b where direction='revenue'),0)
        + v_purchases_net_7 + v_purchases_net_19)
      - coalesce((select sum(amount_net) from b where direction='expense'),0),
    'vat_collected',
      coalesce((select sum(amount_tax) from b where direction='revenue'),0)
      + v_purchases_vat_7 + v_purchases_vat_19,
    'vat_paid',
      coalesce((select sum(amount_tax) from b where direction='expense'),0),
    'accounts', coalesce((
      select jsonb_agg(jsonb_build_object(
        'code', code, 'name', name, 'direction', direction,
        'net', net, 'tax', tax, 'gross', gross
      ) order by code)
      from account_rows
    ), '[]'::jsonb)
  ) into result;

  return result;
end;
$function$;
