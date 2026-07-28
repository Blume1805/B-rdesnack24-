-- ============================================================================
-- 0069 · Produktsuche: Kategorie-Filter + Automaten-Verfügbarkeit
-- ----------------------------------------------------------------------------
-- 1) Warengruppen nach Kundenvorgabe:
--       Getränke · Süßwaren · Snacks · Eis
--    Getränke zusätzlich feiner:
--       Energy Drinks · Kaltgetränke · Heißgetränke
--
--    Bisher lagen Süßwaren und Snacks zusammen unter „Snacks & Süßes" und
--    die Heißgetränke bildeten eine eigene Hauptkategorie. Nebeneffekt der
--    Umstellung: die Startseite fragt seit jeher topProductsProvider('Snacks')
--    ab — das lief gegen „Snacks & Süßes" ins Leere, die Favoriten-Sektion
--    „Snacks" war deshalb dauerhaft leer. Mit der neuen Benennung greift sie.
--
-- 2) search_products bekommt Filter-Parameter und liefert die Zahl der
--    Automaten mit, an denen der Artikel gerade vorrätig ist.
--
-- 3) product_availability(p_product_id) nennt die Automaten samt Standort,
--    damit der Kunde aus der Suche heraus zum passenden Automaten kommt.
-- ============================================================================

-- 1) Feinere Warengruppe -----------------------------------------------------
alter table public.products
  add column if not exists subcategory text;

comment on column public.products.subcategory is
  'Feingliederung innerhalb der Kategorie, aktuell nur für Getränke: '
  'Energy Drinks | Kaltgetränke | Heißgetränke.';

-- Heißgetränke wandern unter „Getränke" und behalten die Feingliederung.
update public.products
   set category = 'Getränke', subcategory = 'Heißgetränke'
 where category = 'Heißgetränke';

-- Milchmischgetränk zählt als Kaltgetränk.
update public.products
   set category = 'Getränke', subcategory = 'Kaltgetränke'
 where category = 'Milch';

update public.products
   set subcategory = 'Energy Drinks'
 where category = 'Getränke'
   and (name ilike 'Red Bull%' or name ilike 'GÖNRGY%');

update public.products
   set subcategory = 'Kaltgetränke'
 where category = 'Getränke' and subcategory is null;

-- „Snacks & Süßes" aufteilen: herzhaft bleibt Snack, der Rest ist Süßware.
update public.products
   set category = 'Snacks'
 where category = 'Snacks & Süßes'
   and (name ilike 'BiFi%' or name ilike 'Chipsfrisch%'
        or name ilike 'Pasta Penne%');

update public.products
   set category = 'Süßwaren'
 where category = 'Snacks & Süßes';

alter table public.products
  drop constraint if exists products_category_check;
alter table public.products
  add constraint products_category_check
  check (category in ('Getränke', 'Süßwaren', 'Snacks', 'Eis'));

alter table public.products
  drop constraint if exists products_subcategory_check;
alter table public.products
  add constraint products_subcategory_check
  check (
    subcategory is null
    or subcategory in ('Energy Drinks', 'Kaltgetränke', 'Heißgetränke')
  );

-- Getränke müssen eine Feingliederung haben, alles andere darf keine haben —
-- sonst laufen die Filterchips auseinander.
alter table public.products
  drop constraint if exists products_subcategory_only_drinks;
alter table public.products
  add constraint products_subcategory_only_drinks
  check (
    (category = 'Getränke' and subcategory is not null)
    or (category <> 'Getränke' and subcategory is null)
  );

create index if not exists idx_products_category
  on public.products(category, subcategory) where status = 'active';

-- 2) Suche mit Filtern + Verfügbarkeitszähler --------------------------------
drop function if exists public.search_products(text, integer);

create function public.search_products(
  p_query       text,
  p_limit       integer default 30,
  p_category    text default null,
  p_subcategory text default null
)
returns table (
  id              uuid,
  name            text,
  category        text,
  subcategory     text,
  image_url       text,
  list_price_net  numeric,
  tax_rate        numeric,
  avg_rating      numeric,
  review_count    integer,
  available_machines integer
)
language sql
stable
security definer
set search_path to 'public', 'app'
as $$
  select p.id, p.name, p.category, p.subcategory, p.image_url,
         p.list_price_net, p.tax_rate,
         coalesce(prs.avg_rating, 0),
         coalesce(prs.review_count, 0),
         (select count(*)::int
            from public.inventory i
            join public.machines m on m.id = i.machine_id
           where i.product_id = p.id
             and i.quantity > 0
             and m.deleted_at is null
             and m.status = 'active')
    from public.products p
    left join public.product_rating_summary prs on prs.product_id = p.id
   where p.status = 'active'
     and coalesce(p.sku, '') <> 'WILDCARD'
     and (p_category    is null or p.category    = p_category)
     and (p_subcategory is null or p.subcategory = p_subcategory)
     and (
       coalesce(trim(p_query), '') = ''
       or p.name ilike '%' || trim(p_query) || '%'
       or p.category ilike '%' || trim(p_query) || '%'
       or coalesce(p.subcategory, '') ilike '%' || trim(p_query) || '%'
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

comment on function public.search_products(text, integer, text, text) is
  'Katalogsuche mit optionalem Kategorie-/Unterkategorie-Filter. Liefert je '
  'Treffer die Zahl der Automaten, an denen der Artikel vorrätig ist.';

revoke all on function public.search_products(text, integer, text, text) from public;
grant execute on function public.search_products(text, integer, text, text)
  to authenticated;

-- 3) An welchem Automaten gibt es den Artikel? -------------------------------
-- Gibt alle aktiven Automaten zurück, die den Artikel führen — auch die
-- gerade leeren, damit der Kunde sieht „dort gäbe es ihn sonst". Sortiert:
-- vorrätig zuerst.
create or replace function public.product_availability(p_product_id uuid)
returns table (
  machine_id    uuid,
  machine_code  text,
  machine_name  text,
  location_name text,
  street        text,
  zip           text,
  city          text,
  lat           double precision,
  lng           double precision,
  quantity      integer,
  availability  text
)
language sql
stable
security definer
set search_path to 'public', 'app'
as $$
  select m.id, m.code, m.name, m.location_name, m.street, m.zip, m.city,
         m.lat, m.lng, i.quantity,
         case
           when i.quantity <= 0           then 'out'
           when i.quantity <= i.par_level then 'low'
           else 'available'
         end
    from public.inventory i
    join public.machines m on m.id = i.machine_id
   where i.product_id = p_product_id
     and m.deleted_at is null
     and m.status = 'active'
   order by (i.quantity > 0) desc, i.quantity desc, m.code;
$$;

comment on function public.product_availability(uuid) is
  'Automaten, die ein Produkt führen, inkl. Standort und Verfügbarkeit.';

revoke all on function public.product_availability(uuid) from public;
grant execute on function public.product_availability(uuid) to authenticated;
