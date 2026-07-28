-- ============================================================================
-- 0068 · Preisfehler: search_products und top_products_by_category liefern
--        den USt-Satz mit
-- ----------------------------------------------------------------------------
-- BEFUND
-- Beide Funktionen gaben nur list_price_net zurück, nicht aber tax_rate.
-- Der Client rechnet brutto = netto × (1 + USt) und fällt ohne tax_rate auf
-- 19 % zurück (RankedProduct.grossPrice: `taxRate ?? 19`). Für die 37 Artikel
-- mit 7 % USt wurde dadurch ein zu hoher Preis angezeigt:
--
--   Ben & Jerry's     6,45 €  statt  5,80 €
--   Cornetto Pistazie 2,78 €  statt  2,50 €
--   Snickers          1,67 €  statt  1,50 €
--
-- Betroffen waren die Produktsuche UND der „Eure Favoriten"-Slider auf der
-- Startseite. product_detail lieferte tax_rate bereits korrekt mit — beim
-- Öffnen eines Treffers sprang der Preis deshalb sichtbar zurück.
--
-- FIX
-- tax_rate in beide Rückgabetypen aufnehmen. Der Client liest das Feld
-- bereits (RankedProduct.fromJson), es kam bisher nur nie an.
--
-- Der Rückgabetyp ändert sich, deshalb ist ein DROP nötig — CREATE OR REPLACE
-- kann die Signatur nicht erweitern.
-- ============================================================================

drop function if exists public.search_products(text, integer);
drop function if exists public.top_products_by_category(text, integer);

create function public.search_products(
  p_query text,
  p_limit integer default 30
)
returns table (
  id uuid,
  name text,
  category text,
  image_url text,
  list_price_net numeric,
  tax_rate numeric,
  avg_rating numeric,
  review_count integer
)
language sql
stable
security definer
set search_path to 'public', 'app'
as $$
  select p.id, p.name, p.category, p.image_url, p.list_price_net, p.tax_rate,
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
  'Katalogsuche für den Kundenbereich (Name/Kategorie, ILIKE). Leerer '
  'Suchbegriff liefert den Katalog. Gibt nur Katalogfelder zurück.';

revoke all on function public.search_products(text, integer) from public;
grant execute on function public.search_products(text, integer) to authenticated;

create function public.top_products_by_category(
  p_category text,
  p_limit integer default 3
)
returns table (
  id uuid,
  name text,
  category text,
  image_url text,
  list_price_net numeric,
  tax_rate numeric,
  avg_rating numeric,
  review_count integer
)
language sql
stable
security definer
set search_path to 'public', 'app'
as $$
  select p.id, p.name, p.category, p.image_url, p.list_price_net, p.tax_rate,
         coalesce(prs.avg_rating, 0),
         coalesce(prs.review_count, 0)
    from public.products p
    left join public.product_rating_summary prs on prs.product_id = p.id
   where p.status = 'active'
     and p.category = p_category
     and coalesce(p.sku, '') <> 'WILDCARD'
   order by coalesce(prs.avg_rating, 0) desc,
            coalesce(prs.review_count, 0) desc,
            random()
   limit p_limit;
$$;

comment on function public.top_products_by_category(text, integer) is
  'Bestbewertete Produkte einer Kategorie für den Favoriten-Slider.';

revoke all on function public.top_products_by_category(text, integer) from public;
grant execute on function public.top_products_by_category(text, integer) to authenticated;
