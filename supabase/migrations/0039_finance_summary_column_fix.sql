-- 0039 — finance_summary reparieren + App-Käufe einbeziehen (KORRIGIERT).
--
-- Zwei getrennte Baustellen in einer Migration:
--
-- 1) Der bestehende Bug seit 0005: die RPC hat `sum(net)` und `sum(tax)`
--    auf b (finance_bookings) referenziert; die Spalten heißen dort
--    aber amount_net/amount_tax/amount_gross. Sobald Zeilen im Zeitraum
--    lagen, warf Postgres ERROR 42703 „column net does not exist" —
--    dart2js verkürzt das im Release zum berüchtigten minified:qY, das
--    ganze Dashboard bricht (siehe Screenshot #9859).
--
-- 2) Kunden-App-Käufe (public.purchases + purchase_items) waren im
--    Dashboard bisher unsichtbar. Die neue Version aggregiert sie mit
--    products.tax_rate; Purchases ohne verknüpfte Items nehmen wir per
--    Fallback direkt aus total_gross und rechnen sie mit 7 % Steuer um.
--
-- 3) Zusätzlich raus: der Ordner „Reinigungspläne" (delete from
--    document_folders where slug = 'reinigung'; zugehörige Blanko-
--    Vorlagen werden nur archiviert, nicht gelöscht — GoBD-Trail
--    bleibt intakt).

update public.documents
   set archived_at = coalesce(archived_at, now()),
       status      = 'archived',
       updated_at  = now()
 where category = 'reinigung'
   and archived_at is null;

delete from public.document_folders where slug = 'reinigung';

create or replace function public.finance_summary(p_from date, p_to date)
returns jsonb
language plpgsql
stable
security definer
set search_path = public, app
as $$
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

  -- 1) Aggregation aus purchase_items (mit product.tax_rate).
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
    where pu.purchased_at::date between p_from and p_to
  ) t;

  -- 2) Fallback: Käufe ohne items → total_gross direkt (7 %).
  select coalesce(sum(pu.total_gross), 0)
    into v_fallback_gross
  from public.purchases pu
  where pu.purchased_at::date between p_from and p_to
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
           a.direction,
           sum(b.amount_net)   as net,
           sum(b.amount_tax)   as tax,
           sum(b.amount_gross) as gross
    from b join public.finance_accounts a on a.code = b.account_code
    group by b.account_code, a.name, a.direction
  ),
  account_rows as (
    select account_code as code, name, direction, net, tax, gross from by_account
    union all
    -- Zwei zusätzliche virtuelle Zeilen für die App-Käufe. Präfix
    -- „APP-" macht transparent, dass diese nicht aus sevDesk stammen.
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
$$;

comment on function public.finance_summary(date, date) is
  'Aggregierte Finanzkennzahlen für einen Zeitraum; kombiniert sevDesk-Buchungen und App-Käufe. Prüft finance.view serverseitig.';
