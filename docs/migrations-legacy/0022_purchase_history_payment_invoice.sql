-- 0022 — Verlaufs-RPC um Payment-Methode + Rechnungsverknüpfung erweitern
drop function if exists public.my_donations_by_purchase();

create or replace function public.my_donations_by_purchase()
returns table(
  purchase_id     uuid,
  purchased_at    timestamptz,
  total_gross     numeric,
  total_net       numeric,
  donation        numeric,
  share_pct       numeric,
  payment_method  text,
  invoice_id      uuid,
  invoice_number  text
)
language sql
security definer
set search_path = public, app
as $$
  with mine as (
    select id, purchased_at, total_gross, payment_method
    from public.purchases
    where customer_id = auth.uid()
  ),
  agg as (
    select coalesce(sum(public.purchase_donation(total_gross)), 0) as total_don
    from mine
  )
  select
    m.id, m.purchased_at, m.total_gross,
    public.purchase_net(m.total_gross),
    public.purchase_donation(m.total_gross),
    case when a.total_don = 0 then 0
         else round(public.purchase_donation(m.total_gross) / a.total_don * 100, 1)
    end,
    m.payment_method::text,
    i.id, i.invoice_number
  from mine m
  cross join agg a
  left join public.invoices i on i.purchase_id = m.id
  order by m.purchased_at desc
$$;

grant execute on function public.my_donations_by_purchase() to authenticated;
