-- 0041 — finance_kpis(v1): KPIs + Trend + Vorjahres- & Vormonats-Vergleich +
-- Automaten- und Produkt-Kennzahlen.
--
-- Liefert ein einheitliches JSON:
--   period.{from,to,days}
--   current, prior_year, prior_period    -- je das JSON aus finance_summary
--   derived.{gross_margin_pct, net_margin_pct, ebitda_margin_pct,
--            cashflow_operating, revenue_growth_yoy_pct,
--            revenue_growth_mom_pct, result_growth_yoy_pct,
--            result_growth_mom_pct}
--   trend[12]                            -- letzte 12 Monate
--   machines[]                           -- Umsatz + Verkäufe + Ø-Warenkorb
--                                           je Automat, sortiert nach gross
--   top_products[]                       -- Umsatz je Produkt, Top 10
--   customer                             -- Zahlungen, aktive Kunden
--
-- Etappe 2 hängt Bilanz-Kennzahlen (Liquidität/EK/ROI) an derived an.

create or replace function public.finance_kpis(p_from date, p_to date)
returns jsonb
language plpgsql
stable
security definer
set search_path = public, app
as $$
declare
  v_current       jsonb;
  v_prior_year    jsonb;
  v_prior_period  jsonb;
  v_period_days   int := (p_to - p_from) + 1;
  v_py_from       date := (p_from - interval '1 year')::date;
  v_py_to         date := (p_to   - interval '1 year')::date;
  v_pp_from       date := (p_from - (v_period_days || ' days')::interval)::date;
  v_pp_to         date := (p_from - interval '1 day')::date;
  v_trend         jsonb;
  v_machines      jsonb;
  v_top_products  jsonb;
  v_customer      jsonb;
begin
  if not public.auth_has_permission('finance.view') then
    raise exception 'Keine Berechtigung für Finanzdaten' using errcode = '42501';
  end if;
  if p_to < p_from then
    raise exception 'Ungültiger Zeitraum';
  end if;

  v_current      := public.finance_summary(p_from,    p_to);
  v_prior_year   := public.finance_summary(v_py_from, v_py_to);
  v_prior_period := public.finance_summary(v_pp_from, v_pp_to);

  -- Trend: 12 volle Monate rückwärts, endend im Monat von p_to.
  with months as (
    select
      (date_trunc('month', p_to::timestamp) - (n || ' months')::interval)::date as month_start,
      (date_trunc('month', p_to::timestamp) - (n || ' months')::interval
        + interval '1 month - 1 day')::date as month_end,
      11 - n as ord
    from generate_series(0, 11) as g(n)
  ),
  monthly as (
    select to_char(m.month_start, 'YYYY-MM') as month, m.ord,
           public.finance_summary(m.month_start, m.month_end) as s
    from months m
  )
  select jsonb_agg(jsonb_build_object(
    'month',       month,
    'revenue_net', coalesce((s->>'revenue_net')::numeric, 0),
    'result_net',  coalesce((s->>'result_net')::numeric, 0),
    'expense_net', coalesce((s->>'expense_net')::numeric, 0)
  ) order by ord) into v_trend from monthly;

  -- Automaten: Umsatz + Anzahl Verkäufe + Ø-Warenkorb je Automat.
  select coalesce(jsonb_agg(jsonb_build_object(
    'machine_id',       machine_id,
    'label',            coalesce(m_label, 'unbekannt'),
    'gross',            round(sum_gross, 2),
    'purchases_count',  cnt,
    'avg_basket',       round(sum_gross / nullif(cnt, 0), 2)
  ) order by sum_gross desc), '[]'::jsonb)
  into v_machines
  from (
    select
      pu.machine_id,
      (select label from public.machines where id = pu.machine_id) as m_label,
      sum(pu.total_gross) as sum_gross,
      count(*)::int       as cnt
    from public.purchases pu
    where pu.purchased_at::date between p_from and p_to
    group by pu.machine_id
  ) t;

  -- Top-Produkte nach Umsatz (aus purchase_items).
  select coalesce(jsonb_agg(jsonb_build_object(
    'product_id', product_id,
    'name',       coalesce(p_name, product_label, 'unbekannt'),
    'quantity',   qty,
    'gross',      round(sum_gross, 2)
  ) order by sum_gross desc), '[]'::jsonb)
  into v_top_products
  from (
    select
      pi.product_id,
      pi.product_label,
      (select name from public.products where id = pi.product_id) as p_name,
      sum(pi.quantity)                              as qty,
      sum(pi.quantity * pi.unit_price)::numeric     as sum_gross
    from public.purchase_items pi
    join public.purchases       pu on pu.id = pi.purchase_id
    where pu.purchased_at::date between p_from and p_to
    group by pi.product_id, pi.product_label
    order by sum(pi.quantity * pi.unit_price) desc
    limit 10
  ) t;

  -- Kunden-Kennzahlen
  select jsonb_build_object(
    'purchases_count', count(*),
    'app_gross',       coalesce(sum(pu.total_gross), 0),
    'active_customers', count(distinct pu.customer_id),
    'avg_basket',      case when count(*) > 0
                            then round(sum(pu.total_gross) / count(*), 2)
                            else 0 end
  ) into v_customer
  from public.purchases pu
  where pu.purchased_at::date between p_from and p_to;

  return jsonb_build_object(
    'period', jsonb_build_object(
      'from', p_from, 'to', p_to, 'days', v_period_days,
      'prior_year',   jsonb_build_object('from', v_py_from, 'to', v_py_to),
      'prior_period', jsonb_build_object('from', v_pp_from, 'to', v_pp_to)
    ),
    'current',      v_current,
    'prior_year',   v_prior_year,
    'prior_period', v_prior_period,
    'trend',        coalesce(v_trend, '[]'::jsonb),
    'machines',     v_machines,
    'top_products', v_top_products,
    'customer',     v_customer,
    'derived',      jsonb_build_object(
      'gross_margin_pct',
        case when (v_current->>'revenue_net')::numeric > 0
             then round(
               ((v_current->>'revenue_net')::numeric
                 - (v_current->>'expense_net')::numeric)
               / (v_current->>'revenue_net')::numeric * 100, 2)
             else 0 end,
      'net_margin_pct',
        case when (v_current->>'revenue_net')::numeric > 0
             then round(
               (v_current->>'result_net')::numeric
               / (v_current->>'revenue_net')::numeric * 100, 2)
             else 0 end,
      'ebitda_margin_pct',
        case when (v_current->>'revenue_net')::numeric > 0
             then round(
               (v_current->>'result_net')::numeric
               / (v_current->>'revenue_net')::numeric * 100, 2)
             else 0 end,
      'cashflow_operating',
        (coalesce((v_current->>'revenue_net')::numeric, 0)
         + coalesce((v_current->>'vat_collected')::numeric, 0))
        - (coalesce((v_current->>'expense_net')::numeric, 0)
           + coalesce((v_current->>'vat_paid')::numeric, 0)),
      'revenue_growth_yoy_pct',
        case when (v_prior_year->>'revenue_net')::numeric > 0
             then round(
               ((v_current->>'revenue_net')::numeric
                 - (v_prior_year->>'revenue_net')::numeric)
               / (v_prior_year->>'revenue_net')::numeric * 100, 2)
             else null end,
      'revenue_growth_mom_pct',
        case when (v_prior_period->>'revenue_net')::numeric > 0
             then round(
               ((v_current->>'revenue_net')::numeric
                 - (v_prior_period->>'revenue_net')::numeric)
               / (v_prior_period->>'revenue_net')::numeric * 100, 2)
             else null end,
      'result_growth_yoy_pct',
        case when abs((v_prior_year->>'result_net')::numeric) > 0
             then round(
               ((v_current->>'result_net')::numeric
                 - (v_prior_year->>'result_net')::numeric)
               / abs((v_prior_year->>'result_net')::numeric) * 100, 2)
             else null end,
      'result_growth_mom_pct',
        case when abs((v_prior_period->>'result_net')::numeric) > 0
             then round(
               ((v_current->>'result_net')::numeric
                 - (v_prior_period->>'result_net')::numeric)
               / abs((v_prior_period->>'result_net')::numeric) * 100, 2)
             else null end
    )
  );
end;
$$;

comment on function public.finance_kpis(date, date) is
  'Aggregierte KPIs, Trend (12 Mon.), Vorjahres- und Vormonatsvergleich, Automaten- und Produktkennzahlen fürs Finanzdashboard.';

grant execute on function public.finance_kpis(date, date) to authenticated;
