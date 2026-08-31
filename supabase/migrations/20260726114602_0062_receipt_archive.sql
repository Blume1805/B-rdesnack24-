create or replace function public.my_receipts()
returns jsonb
language sql
stable
security definer
set search_path to 'public', 'app'
as $$
  select coalesce(jsonb_agg(to_jsonb(r) order by r.purchased_at desc), '[]'::jsonb)
  from (
    select
      p.id,
      p.purchased_at,
      p.total_gross,
      p.source::text as source,
      m.name as machine_name,
      coalesce((
        select jsonb_agg(jsonb_build_object(
          'label', coalesce(pi.product_label, pr.name, 'Artikel'),
          'quantity', pi.quantity,
          'unit_price', pi.unit_price,
          'line_gross', round(pi.unit_price * pi.quantity, 2),
          'category', coalesce(pr.category, 'Sonstiges')
        ) order by pi.id)
        from public.purchase_items pi
        left join public.products pr on pr.id = pi.product_id
        where pi.purchase_id = p.id
      ), '[]'::jsonb) as items,
      coalesce((
        select coalesce(pr.category, 'Sonstiges')
        from public.purchase_items pi
        left join public.products pr on pr.id = pi.product_id
        where pi.purchase_id = p.id
        group by coalesce(pr.category, 'Sonstiges')
        order by sum(pi.quantity) desc, coalesce(pr.category, 'Sonstiges')
        limit 1
      ), 'Sonstiges') as category,
      coalesce((
        select sum(pi.quantity) from public.purchase_items pi
        where pi.purchase_id = p.id
      ), 0) as item_count,
      case when exists (
        select 1 from public.purchase_items pi
        left join public.products pr on pr.id = pi.product_id
        where pi.purchase_id = p.id
          and coalesce(pr.category, '') = any (array['Non-Food', 'Technik', 'Zubehör'])
      ) then (p.purchased_at + interval '24 months') else null end as warranty_until
    from public.purchases p
    left join public.machines m on m.id = p.machine_id
    where p.customer_id = auth.uid()
  ) r;
$$;

grant execute on function public.my_receipts() to authenticated;
