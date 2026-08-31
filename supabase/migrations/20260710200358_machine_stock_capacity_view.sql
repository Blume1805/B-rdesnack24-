drop view if exists public.machine_stock;
create view public.machine_stock as
select i.machine_id,
       m.code as machine_code,
       m.name as machine_name,
       i.product_id,
       p.name as product_name,
       p.image_url as image_url,
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
