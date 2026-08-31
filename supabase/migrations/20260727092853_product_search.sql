create or replace function public.search_products(
  p_query text,
  p_limit integer default 30
)
returns table (
  id uuid,
  name text,
  category text,
  image_url text,
  list_price_net numeric,
  avg_rating numeric,
  review_count integer
)
language sql
stable
security definer
set search_path to 'public', 'app'
as $$
  select p.id, p.name, p.category, p.image_url, p.list_price_net,
         coalesce(prs.avg_rating, 0),
         coalesce(prs.review_count, 0)
    from public.products p
    left join public.product_rating_summary prs on prs.product_id = p.id
   where p.status = 'active'
     and coalesce(p.sku, '') <> 'WILDCARD'
     and (
       coalesce(trim(p_query), '') = ''
       or p.name ilike '%' || trim(p_query) || '%'
       or p.category ilike '%' || trim(p_query) || '%'
     )
   order by
     case
       when coalesce(trim(p_query), '') = '' then 1
       when p.name ilike trim(p_query) || '%' then 0
       else 1
     end,
     coalesce(prs.avg_rating, 0) desc,
     p.name
   limit greatest(1, least(coalesce(p_limit, 30), 100));
$$;

comment on function public.search_products(text, integer) is
  'Katalogsuche fuer den Kundenbereich (Name/Kategorie, ILIKE). Leerer Suchbegriff liefert den Katalog. Gibt nur Katalogfelder zurueck.';

revoke all on function public.search_products(text, integer) from public;
grant execute on function public.search_products(text, integer) to authenticated;
