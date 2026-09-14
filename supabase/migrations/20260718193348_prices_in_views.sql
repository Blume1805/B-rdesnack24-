drop view if exists public.machine_stock;
create view public.machine_stock
with (security_invoker = true) as
select i.machine_id,
       m.code as machine_code,
       m.name as machine_name,
       i.product_id,
       p.name as product_name,
       p.image_url as image_url,
       p.list_price_net,
       p.tax_rate,
       i.quantity,
       i.par_level,
       coalesce(i.capacity, greatest(12, i.quantity)) as capacity,
       case
         when i.quantity <= 0 then 'out'
         when i.quantity <= i.par_level then 'low'
         else 'available'
       end as availability
from public.inventory i
  join public.machines m on m.id = i.machine_id
  join public.products p on p.id = i.product_id
where m.deleted_at is null and p.deleted_at is null;

drop function if exists public.product_detail(uuid);
create function public.product_detail(p_product_id uuid)
returns table(
  id uuid, name text, category text, image_url text,
  list_price_net numeric, tax_rate numeric,
  energy_kcal numeric, fat_g numeric, saturated_fat_g numeric,
  carbs_g numeric, sugars_g numeric, protein_g numeric, salt_g numeric,
  allergens text[], avg_rating numeric, review_count integer,
  my_rating integer)
language sql
stable
security definer
set search_path = public, app
as $$
  select p.id, p.name, p.category, p.image_url, p.list_price_net, p.tax_rate,
         p.energy_kcal, p.fat_g, p.saturated_fat_g,
         p.carbs_g, p.sugars_g, p.protein_g, p.salt_g,
         p.allergens,
         coalesce(prs.avg_rating, 0),
         coalesce(prs.review_count, 0),
         (select rating from public.product_ratings
           where product_id = p.id and customer_id = auth.uid())
    from public.products p
    left join public.product_rating_summary prs on prs.product_id = p.id
   where p.id = p_product_id;
$$;

grant execute on function public.product_detail(uuid) to authenticated, service_role;
