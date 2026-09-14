-- 0055 — DATEV-Export: aggregierte Tageslosungen je USt-Satz für den
-- EXTF-Buchungsstapel (Schnittstelle im Finanzdashboard + Verwaltung).
create or replace function public.datev_export_rows(p_from date, p_to date)
returns table (booking_date date, tax_rate numeric, gross numeric)
language plpgsql
security definer
set search_path = public, app
as $$
begin
  if not exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role in ('system_admin', 'shareholder')
  ) then
    raise exception 'Nicht autorisiert' using errcode = '42501';
  end if;

  if p_from is null or p_to is null or p_from > p_to then
    raise exception 'Ungültiger Zeitraum' using errcode = '22007';
  end if;

  return query
  select
    (pu.purchased_at at time zone 'Europe/Berlin')::date as booking_date,
    coalesce(pr.tax_rate, 19)::numeric as tax_rate,
    round(sum(pi.quantity * pi.unit_price)::numeric, 2) as gross
  from public.purchases pu
  join public.purchase_items pi on pi.purchase_id = pu.id
  left join public.products pr on pr.id = pi.product_id
  where (pu.purchased_at at time zone 'Europe/Berlin')::date between p_from and p_to
  group by 1, 2
  having round(sum(pi.quantity * pi.unit_price)::numeric, 2) <> 0
  order by 1, 2;
end $$;

revoke execute on function public.datev_export_rows(date, date) from public, anon;
grant execute on function public.datev_export_rows(date, date) to authenticated, service_role;
