-- ============================================================================
-- 0018 — Coupon-Aktivierung, Produktbewertungen, Nährwerte, Eure-Favoriten
-- ----------------------------------------------------------------------------
-- * offer_activations + personal_offers.activated_at → Angebote müssen vom
--   Kunden aktiv „aktiviert" werden, bevor sie am Automaten einlösbar sind.
-- * product_ratings + View product_rating_summary → Kunden bewerten Produkte
--   1-5 Sterne, die App zeigt Durchschnitt + Anzahl.
-- * Nährwertfelder auf products (Referenz: LMIV-Kennzeichnung); Allergene
--   als text[]; Icons entscheidet das Frontend.
-- * public.top_products_by_category(cat, limit) → Ranking je Kategorie
--   („Eure Favoriten": Getränke, Snacks, Eis).
-- * public.product_detail(id) → alle Detailinfos + eigenes Rating.
-- ============================================================================

-- 1) Nährwerte + Allergene auf products -------------------------------------
alter table public.products
  add column if not exists energy_kcal      numeric(6,1),
  add column if not exists fat_g            numeric(6,2),
  add column if not exists saturated_fat_g  numeric(6,2),
  add column if not exists carbs_g          numeric(6,2),
  add column if not exists sugars_g         numeric(6,2),
  add column if not exists protein_g        numeric(6,2),
  add column if not exists salt_g           numeric(6,2),
  add column if not exists allergens        text[];

-- 2) Produkt-Bewertungen -----------------------------------------------------
create table if not exists public.product_ratings (
  id           uuid primary key default gen_random_uuid(),
  customer_id  uuid not null references public.customers(id) on delete cascade,
  product_id   uuid not null references public.products(id) on delete cascade,
  rating       int  not null check (rating between 1 and 5),
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now(),
  unique (customer_id, product_id)
);
create index if not exists idx_ratings_product on public.product_ratings(product_id);

alter table public.product_ratings enable row level security;

drop policy if exists ratings_read on public.product_ratings;
create policy ratings_read on public.product_ratings for select to authenticated
  using (true);

drop policy if exists ratings_write_self on public.product_ratings;
create policy ratings_write_self on public.product_ratings for all to authenticated
  using (customer_id = auth.uid())
  with check (customer_id = auth.uid());

create or replace view public.product_rating_summary as
  select product_id,
         round(avg(rating)::numeric, 2) as avg_rating,
         count(*)::int                  as review_count
    from public.product_ratings
   group by product_id;

grant select on public.product_rating_summary to anon, authenticated;

-- 3) Aktivierung — Wochenangebote --------------------------------------------
create table if not exists public.offer_activations (
  id            uuid primary key default gen_random_uuid(),
  customer_id   uuid not null references public.customers(id) on delete cascade,
  offer_id      uuid not null references public.offers(id)    on delete cascade,
  activated_at  timestamptz not null default now(),
  redeemed_at   timestamptz,
  unique (customer_id, offer_id)
);
create index if not exists idx_offer_activ_customer
  on public.offer_activations(customer_id, activated_at desc);

alter table public.offer_activations enable row level security;
drop policy if exists offacc_read on public.offer_activations;
create policy offacc_read on public.offer_activations for select to authenticated
  using (customer_id = auth.uid()
         or public.is_admin()
         or public.auth_has_permission('offers.manage'));
drop policy if exists offacc_write_self on public.offer_activations;
create policy offacc_write_self on public.offer_activations for insert to authenticated
  with check (customer_id = auth.uid());
drop policy if exists offacc_delete_self on public.offer_activations;
create policy offacc_delete_self on public.offer_activations for delete to authenticated
  using (customer_id = auth.uid());

-- 4) Aktivierung — Individuelle Angebote -------------------------------------
alter table public.personal_offers
  add column if not exists activated_at timestamptz;

-- 5) RPC — Angebote aktivieren -----------------------------------------------
create or replace function public.activate_offer(p_offer_id uuid)
returns public.offer_activations
language plpgsql
security definer
set search_path = public, app
as $$
declare v_row public.offer_activations;
begin
  insert into public.offer_activations(customer_id, offer_id)
  values (auth.uid(), p_offer_id)
  on conflict (customer_id, offer_id) do nothing;
  select * into v_row from public.offer_activations
    where customer_id = auth.uid() and offer_id = p_offer_id;
  return v_row;
end;
$$;

create or replace function public.activate_personal_offer(p_offer_id uuid)
returns public.personal_offers
language plpgsql
security definer
set search_path = public, app
as $$
declare v_row public.personal_offers;
begin
  update public.personal_offers
    set activated_at = coalesce(activated_at, now())
    where id = p_offer_id and customer_id = auth.uid()
    returning * into v_row;
  return v_row;
end;
$$;

-- 6) RPC — Produkt bewerten ---------------------------------------------------
create or replace function public.rate_product(p_product_id uuid, p_rating int)
returns void
language plpgsql
security definer
set search_path = public, app
as $$
begin
  if p_rating < 1 or p_rating > 5 then
    raise exception 'Rating muss zwischen 1 und 5 liegen';
  end if;
  insert into public.product_ratings(customer_id, product_id, rating, updated_at)
  values (auth.uid(), p_product_id, p_rating, now())
  on conflict (customer_id, product_id) do update
    set rating = excluded.rating, updated_at = now();
end;
$$;

-- 7) Top-3 pro Kategorie ------------------------------------------------------
create or replace function public.top_products_by_category(p_category text, p_limit int default 3)
returns table (
  id             uuid,
  name           text,
  category       text,
  image_url      text,
  list_price_net numeric,
  avg_rating     numeric,
  review_count   int
)
language sql
security definer
set search_path = public, app
stable
as $$
  select p.id, p.name, p.category, p.image_url, p.list_price_net,
         coalesce(prs.avg_rating, 0) as avg_rating,
         coalesce(prs.review_count, 0) as review_count
    from public.products p
    left join public.product_rating_summary prs on prs.product_id = p.id
   where p.status = 'active'
     and p.category = p_category
     and coalesce(p.sku,'') <> 'WILDCARD'
   order by coalesce(prs.avg_rating, 0) desc,
            coalesce(prs.review_count, 0) desc,
            random()
   limit p_limit;
$$;

-- 8) Produkt-Detail inkl. eigenes Rating -------------------------------------
create or replace function public.product_detail(p_product_id uuid)
returns table (
  id              uuid,
  name            text,
  category        text,
  image_url       text,
  list_price_net  numeric,
  energy_kcal     numeric,
  fat_g           numeric,
  saturated_fat_g numeric,
  carbs_g         numeric,
  sugars_g        numeric,
  protein_g       numeric,
  salt_g          numeric,
  allergens       text[],
  avg_rating      numeric,
  review_count    int,
  my_rating       int
)
language sql
security definer
set search_path = public, app
stable
as $$
  select p.id, p.name, p.category, p.image_url, p.list_price_net,
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

-- 9) Seed — Nährwerte + Eis-Sortiment ---------------------------------------
-- Beispieldaten für die vorhandenen SKUs (Snacks, Süßes, Getränke) und ein
-- kleines Eis-Sortiment für die neue Kategorie.
insert into public.products (sku, name, category, tax_rate, list_price_net,
                             energy_kcal, fat_g, saturated_fat_g,
                             carbs_g, sugars_g, protein_g, salt_g, allergens)
values
  ('EIS-001', 'Vanille-Eis am Stiel',        'Eis', 7.0, 1.49,
   220, 12.0, 8.5, 22.0, 20.0, 3.0, 0.10, array['Milch']),
  ('EIS-002', 'Schoko-Eis Waffel',            'Eis', 7.0, 1.79,
   260, 14.0, 9.0, 28.0, 24.0, 4.0, 0.20, array['Milch','Gluten','Ei']),
  ('EIS-003', 'Erdbeer-Sorbet',               'Eis', 7.0, 1.29,
   140,  0.5, 0.2, 32.0, 28.0, 0.5, 0.05, array[]::text[]),
  ('EIS-004', 'Nuss-Nougat-Eis Becher',       'Eis', 7.0, 1.99,
   290, 18.0, 9.5, 26.0, 22.0, 4.5, 0.10, array['Milch','Haselnüsse']),
  ('EIS-005', 'Karamell-Sahne-Eis Sandwich',  'Eis', 7.0, 1.89,
   270, 15.0, 8.0, 30.0, 25.0, 3.5, 0.15, array['Milch','Gluten'])
on conflict (sku) do update
  set list_price_net = coalesce(public.products.list_price_net, excluded.list_price_net),
      energy_kcal    = coalesce(public.products.energy_kcal,    excluded.energy_kcal),
      fat_g          = coalesce(public.products.fat_g,          excluded.fat_g),
      saturated_fat_g= coalesce(public.products.saturated_fat_g,excluded.saturated_fat_g),
      carbs_g        = coalesce(public.products.carbs_g,        excluded.carbs_g),
      sugars_g       = coalesce(public.products.sugars_g,       excluded.sugars_g),
      protein_g      = coalesce(public.products.protein_g,      excluded.protein_g),
      salt_g         = coalesce(public.products.salt_g,         excluded.salt_g),
      allergens      = coalesce(public.products.allergens,      excluded.allergens);

-- Nährwerte für vorhandene Snacks/Süßes/Getränke (falls noch leer)
update public.products set
  energy_kcal = coalesce(energy_kcal, 210), fat_g = coalesce(fat_g, 12),
  saturated_fat_g = coalesce(saturated_fat_g, 3), carbs_g = coalesce(carbs_g, 22),
  sugars_g = coalesce(sugars_g, 1), protein_g = coalesce(protein_g, 3),
  salt_g = coalesce(salt_g, 1.2), allergens = coalesce(allergens, array['Gluten'])
  where sku like 'SN-%';

update public.products set
  energy_kcal = coalesce(energy_kcal, 230), fat_g = coalesce(fat_g, 12),
  saturated_fat_g = coalesce(saturated_fat_g, 6), carbs_g = coalesce(carbs_g, 25),
  sugars_g = coalesce(sugars_g, 20), protein_g = coalesce(protein_g, 3),
  salt_g = coalesce(salt_g, 0.1), allergens = coalesce(allergens, array['Milch','Gluten'])
  where sku like 'SU-%';

update public.products set
  energy_kcal = coalesce(energy_kcal, 40),  fat_g = coalesce(fat_g, 0),
  saturated_fat_g = coalesce(saturated_fat_g, 0), carbs_g = coalesce(carbs_g, 10),
  sugars_g = coalesce(sugars_g, 10), protein_g = coalesce(protein_g, 0),
  salt_g = coalesce(salt_g, 0.05), allergens = coalesce(allergens, array[]::text[])
  where sku like 'DR-%';
