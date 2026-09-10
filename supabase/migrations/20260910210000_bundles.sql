-- ===========================================================================
-- Kombiangebote (Bundles) — Auftrag Philipp, 10.09.2026.
--
-- Bisher kannte ein Angebot genau ein Produkt (`offers.product_id`). Ein
-- Bundle wie „Cola + Popcorn fuer 6,00 EUR" liess sich damit nicht abbilden.
--
-- DIE ENTSCHEIDENDE FRAGE IST NICHT DIE DARSTELLUNG, SONDERN DIE AUFTEILUNG.
-- Die beiden Produkte tragen verschiedene Steuersaetze (Cola 19 %, Popcorn
-- 7 %). Ein Bundlepreis ist deshalb keine Zahl, die man buchen kann: er muss
-- auf die Positionen aufgeteilt werden, bevor daraus Umsatzsteuer und
-- Spendenanteil werden. Diese Migration legt die Aufteilung als Funktion ab,
-- damit sie an genau einer Stelle steht und in der Verfahrensdokumentation
-- beschreibbar bleibt (GoBD).
--
-- Verfahren: anteilig am regulaeren Bruttowert der Position. Der
-- Rundungsrest landet auf der letzten Position, damit die Summe der
-- Positionen den Bundlepreis auf den Cent trifft. Ohne diese Korrektur
-- weicht die Summe um bis zu einen Cent je Position ab, und eine Buchung,
-- deren Positionen nicht auf den Rechnungsbetrag aufgehen, ist keine.
--
-- Beispiel (Cola 0,5 l zu 3,10 brutto, Popcorn zu 4,00 brutto, Bundle 6,00):
--   regulaer zusammen 7,10
--   Cola    3,10/7,10 = 43,66 %  ->  2,62 brutto  ->  2,20 netto (19 %)
--   Popcorn 4,00/7,10 = 56,34 %  ->  3,38 brutto  ->  3,16 netto (7 %)
--   Summe 6,00. Spende 5 % je Position vom jeweiligen Nettowert.
--
-- Der Preis steht hier BRUTTO, anders als bei `products.list_price_net`.
-- Das ist Absicht: Ein Bundle ueber zwei Steuersaetze hat keinen einen
-- Nettopreis. Brutto ist der beworbene Preis, netto folgt je Position.
-- ===========================================================================

-- ── Wo ein Produkt ueberhaupt rabattiert werden darf ───────────────────
--
-- Philipp, 10.09.2026: „Popcorn soll nur selten ueber Coupons angeboten
-- werden, wenn nur im Bundle." Der Grund steht in der Kalkulation: Bei
-- 4,00 EUR Verkaufspreis und 2,79 EUR Einkauf netto liegt ein Verkauf mit
-- 25-%-Coupon auf den Abo-Preis unter dem Einkauf. Ein Rabattdeckel ist
-- deshalb kein Marketingwunsch, sondern eine Verlustbremse.
alter table public.products
  add column if not exists coupon_eligibility text not null default 'normal';

do $$
begin
  if not exists (
    select 1 from pg_constraint
    where conrelid = 'public.products'::regclass
      and conname = 'products_coupon_eligibility_check'
  ) then
    alter table public.products
      add constraint products_coupon_eligibility_check
      check (coupon_eligibility in ('normal', 'bundle_only', 'never'));
  end if;
end $$;

comment on column public.products.coupon_eligibility is
  'normal = darf in Tages-, Wochen-, Treue- und persoenlichen Angeboten '
  'erscheinen. bundle_only = nur als Teil eines Kombiangebots. never = gar '
  'nicht rabattieren. Die vier Angebotsgeneratoren pruefen dieses Feld; '
  'ein Bundle pruegt es nicht, weil das Bundle der erlaubte Weg ist.';

update public.products
   set coupon_eligibility = 'bundle_only', updated_at = now()
 where sku in ('BS-063', 'BS-064', 'BS-065', 'BS-066');

-- ── Bundles ────────────────────────────────────────────────────────────
create table if not exists public.bundles (
  id          uuid primary key default gen_random_uuid(),
  code        text unique,
  title       text not null,
  description text,
  price_gross numeric(12,2) not null check (price_gross > 0),
  valid_from  date not null default current_date,
  valid_to    date,
  status      app.entity_status not null default 'active',
  created_at  timestamptz not null default now(),
  created_by  uuid,
  updated_at  timestamptz not null default now(),
  updated_by  uuid,
  deleted_at  timestamptz,
  check (valid_to is null or valid_to >= valid_from)
);

create table if not exists public.bundle_items (
  id         uuid primary key default gen_random_uuid(),
  bundle_id  uuid not null references public.bundles(id) on delete cascade,
  product_id uuid not null references public.products(id) on delete restrict,
  quantity   integer not null default 1 check (quantity > 0),
  position   smallint not null default 1,
  unique (bundle_id, product_id)
);

create index if not exists idx_bundle_items_bundle
  on public.bundle_items(bundle_id, position);
create index if not exists idx_bundles_gueltig
  on public.bundles(valid_from, valid_to) where deleted_at is null;

comment on table public.bundles is
  'Kombiangebot mit einem Bruttopreis fuer mehrere Produkte. Der Preis ist '
  'brutto, weil ein Bundle ueber zwei Steuersaetze keinen einen Nettopreis '
  'hat; die Aufteilung macht public.bundle_split().';
comment on column public.bundle_items.position is
  'Reihenfolge in der Darstellung. Die Kundenansicht zeigt die Produktbilder '
  'in dieser Reihenfolge mit einem Pluszeichen dazwischen.';
comment on column public.bundle_items.quantity is
  'Menge dieser Position. Bei Mengen groesser 1 ist die Zeilensumme der '
  'massgebliche Wert; der Stueckpreis daraus ist gerundet und geht nicht '
  'zwingend glatt auf. Beim Buchen zaehlt die Zeile, nicht das Stueck.';

select app.enable_audit('public.bundles');
select app.enable_audit('public.bundle_items');

drop trigger if exists trg_bundles_updated_at on public.bundles;
create trigger trg_bundles_updated_at before update on public.bundles
  for each row execute function app.set_updated_at();

alter table public.bundles      enable row level security;
alter table public.bundle_items enable row level security;

drop policy if exists bundles_read on public.bundles;
create policy bundles_read on public.bundles for select to authenticated
  using (
    (deleted_at is null and status = 'active')
    or public.is_admin()
    or public.auth_has_permission('offers.manage')
  );

drop policy if exists bundles_write on public.bundles;
create policy bundles_write on public.bundles for all to authenticated
  using (public.is_admin() or public.auth_has_permission('offers.manage'))
  with check (public.is_admin() or public.auth_has_permission('offers.manage'));

drop policy if exists bundle_items_read on public.bundle_items;
create policy bundle_items_read on public.bundle_items for select to authenticated
  using (
    exists (
      select 1 from public.bundles b
      where b.id = bundle_id
        and ((b.deleted_at is null and b.status = 'active')
             or public.is_admin()
             or public.auth_has_permission('offers.manage'))
    )
  );

drop policy if exists bundle_items_write on public.bundle_items;
create policy bundle_items_write on public.bundle_items for all to authenticated
  using (public.is_admin() or public.auth_has_permission('offers.manage'))
  with check (public.is_admin() or public.auth_has_permission('offers.manage'));

-- ── Die Aufteilung ─────────────────────────────────────────────────────
create or replace function public.bundle_split(p_bundle uuid)
returns table(
  product_id          uuid,
  product_name        text,
  image_url           text,
  position            smallint,
  quantity            integer,
  tax_rate            numeric,
  regular_unit_gross  numeric,
  regular_line_gross  numeric,
  bundle_line_gross   numeric,
  bundle_unit_gross   numeric
)
language sql
stable
security definer
set search_path = public, app
as $$
  with b as (
    select id, price_gross from public.bundles
     where id = p_bundle and deleted_at is null
  ),
  zeilen as (
    select bi.product_id,
           p.name  as product_name,
           p.image_url,
           bi.position,
           bi.quantity,
           p.tax_rate,
           round(p.list_price_net * (1 + p.tax_rate / 100), 2) as unit_gross
      from public.bundle_items bi
      join public.products p on p.id = bi.product_id
     where bi.bundle_id = p_bundle
       and p.list_price_net is not null
  ),
  summiert as (
    select z.*, (z.unit_gross * z.quantity)::numeric(12,2) as line_gross
      from zeilen z
  ),
  verteilt as (
    select s.*,
           b.price_gross,
           round(b.price_gross * s.line_gross
                 / nullif(sum(s.line_gross) over (), 0), 2) as anteil,
           row_number() over (order by s.position, s.product_id) as rn,
           count(*) over () as n
      from summiert s cross join b
  ),
  korrigiert as (
    select v.*,
           case
             when v.rn < v.n then v.anteil
             -- Rundungsrest auf die letzte Position, damit die Summe der
             -- Positionen den Bundlepreis genau trifft.
             else v.price_gross - coalesce(
                    sum(v.anteil) over (
                      order by v.rn
                      rows between unbounded preceding and 1 preceding
                    ), 0)
           end as line_bundle
      from verteilt v
  )
  select k.product_id, k.product_name, k.image_url, k.position, k.quantity,
         k.tax_rate,
         k.unit_gross                            as regular_unit_gross,
         k.line_gross                            as regular_line_gross,
         k.line_bundle::numeric(12,2)            as bundle_line_gross,
         round(k.line_bundle / k.quantity, 2)    as bundle_unit_gross
    from korrigiert k
   order by k.position, k.product_id;
$$;

comment on function public.bundle_split(uuid) is
  'Teilt den Bruttopreis eines Bundles anteilig am regulaeren Bruttowert '
  'auf die Positionen auf. Der Rundungsrest liegt auf der letzten Position, '
  'damit die Summe den Bundlepreis auf den Cent trifft. Einzige Quelle der '
  'Aufteilung -- Umsatzsteuer je Position und der Spendenanteil (5 % vom '
  'Nettowert des jeweiligen Produkts) rechnen darauf auf.';

-- ── Was die Kunden-App liest ───────────────────────────────────────────
create or replace function public.active_bundles()
returns table(
  id          uuid,
  code        text,
  title       text,
  description text,
  price_gross numeric,
  regular_gross numeric,
  valid_to    date,
  items       jsonb
)
language sql
stable
security definer
set search_path = public, app
as $$
  select b.id, b.code, b.title, b.description, b.price_gross,
         (select sum(s.regular_line_gross) from public.bundle_split(b.id) s)
           as regular_gross,
         b.valid_to,
         (select coalesce(jsonb_agg(jsonb_build_object(
                   'product_id',   s.product_id,
                   'name',         s.product_name,
                   'image_url',    s.image_url,
                   'quantity',     s.quantity,
                   'regular_gross', s.regular_line_gross,
                   'bundle_gross',  s.bundle_line_gross
                 ) order by s.position), '[]'::jsonb)
            from public.bundle_split(b.id) s) as items
    from public.bundles b
   where b.deleted_at is null
     and b.status = 'active'
     and b.valid_from <= current_date
     and (b.valid_to is null or b.valid_to >= current_date)
     and exists (select 1 from public.bundle_items bi where bi.bundle_id = b.id)
   order by b.valid_from desc, b.title;
$$;

comment on function public.active_bundles() is
  'Kombiangebote fuer die Kundenansicht: Bundlepreis, regulaerer '
  'Gesamtpreis zum Durchstreichen und die Positionen in Anzeigereihenfolge.';

revoke execute on function public.bundle_split(uuid)  from public, anon;
revoke execute on function public.active_bundles()    from public, anon;
grant  execute on function public.bundle_split(uuid)  to authenticated, service_role;
grant  execute on function public.active_bundles()    to authenticated, service_role;

-- ── Warum ein Kaufpreis vom Listenpreis abweicht ───────────────────────
-- Ohne diesen Verweis sieht eine Bundle-Buchung in den Aufzeichnungen aus
-- wie ein willkuerlich abweichender Preis. Der Bezug macht sie pruefbar.
alter table public.purchase_items
  add column if not exists bundle_id uuid references public.bundles(id);

comment on column public.purchase_items.bundle_id is
  'Gesetzt, wenn diese Position Teil eines Kombiangebots war. Der '
  'abweichende Stueckpreis ist dann durch public.bundle_split() erklaerbar.';
