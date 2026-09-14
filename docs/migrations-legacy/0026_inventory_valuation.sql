-- 0026 — Inventur mit Warenwert, MHD-Abschlag und Lagerbestand
--
-- Inventar wird um MHD je Bestandsposten erweitert; ein neuer Lagerbestand
-- (warehouse_stock) hält Vorräte, die noch nicht in einem Automaten liegen.
-- Der Inventur-Report berechnet nun zusätzlich:
--   • Verkaufspreis (netto) je Stück
--   • Warenwert brutto  = Endbestand × Verkaufspreis
--   • 50-%-MHD-Abschlag, wenn Restlaufzeit < 7 Tage
--   • Zeilenbilanzwert  = Warenwert − Abschlag
-- Zusätzlich gibt es eine Zusammenfassung pro Produkt über alle Automaten
-- und den Lagerbestand.

alter table public.inventory
  add column if not exists expiry_date date;

create table if not exists public.warehouse_stock (
  id          uuid primary key default gen_random_uuid(),
  product_id  uuid not null references public.products(id) on delete restrict,
  quantity    integer not null default 0 check (quantity >= 0),
  expiry_date date,
  updated_at  timestamptz not null default now()
);
create index if not exists idx_warehouse_product on public.warehouse_stock(product_id);

alter table public.warehouse_stock enable row level security;
drop policy if exists ws_read on public.warehouse_stock;
create policy ws_read on public.warehouse_stock
  for select to authenticated
  using (exists (select 1 from public.profiles p
                  where p.id = auth.uid()
                    and p.role in ('system_admin','shareholder','employee')));

-- inventory_report + inventory_summary_by_product: vollständige Definitionen
-- siehe Backend-Migration.
