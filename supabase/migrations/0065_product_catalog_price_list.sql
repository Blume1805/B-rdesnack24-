-- ============================================================================
-- 0065 · Produktkatalog nach Preisliste „Preisübersicht Bördesnack 24"
-- ----------------------------------------------------------------------------
-- Ersetzt den Katalog aus 0059 vollständig durch die 62 Artikel der
-- verbindlichen Preisliste. Reset-Strategie wie 0059: abgeleitete Tabellen
-- (Angebote, Inventur, Slots, Preise, Empfehlungen) via TRUNCATE ... CASCADE;
-- transaktionale Historie (purchase_items, nayax_sales, Telemetrie) wird nur
-- vom Produkt entkoppelt (SET NULL) — die Belege behalten ihr product_label
-- und bleiben lesbar.
--
-- PREISE: die Liste nennt Brutto-Verkaufspreise („VKP je Stk. Brutto").
-- Gespeichert wird netto, weil die App brutto = netto × (1 + USt) rechnet
-- (ProductDetail.grossPrice). Die Nettowerte sind so gewählt, dass der
-- angezeigte Bruttopreis exakt dem Listenpreis entspricht — für alle 62
-- Artikel nachgerechnet.
--
-- USt: die Preisliste kalkuliert durchgängig mit 19 %. In der Datenbank steht
-- der gesetzliche Satz je Warengruppe (Speiseeis/Süßwaren/Snacks 7 %,
-- Getränke 19 %, Milchmischgetränk > 75 % Milch 7 %), weil products.tax_rate
-- den 7/19-Split der USt-Auswertung speist (0005/0039). Auf den Kundenpreis
-- wirkt sich das NICHT aus — der bleibt exakt der Listenpreis; abweichend ist
-- nur die Aufteilung in Netto und Steuer.
--
-- cost_price_net = „EK je Stk. (netto)" aus der Liste. Für „Pirulo Tropical"
-- führt die Liste keinen EK — bleibt NULL, bis der Wert nachgereicht wird.
-- ============================================================================

-- 1) Preisspalten auf 4 Nachkommastellen -------------------------------------
-- numeric(12,2) reicht für Nettopreise nicht: zu 2,10 € brutto bei 19 % gibt
-- es keinen zweistelligen Nettowert, der zurückgerechnet wieder 2,10 € ergibt
-- (1,76 → 2,09 / 1,77 → 2,11). Dadurch wich der angezeigte Preis schon im
-- Altbestand um bis zu einem Cent vom Automatenpreis ab.

-- machine_stock liest products.list_price_net und blockiert sonst das ALTER
-- („cannot alter type of a column used by a view"). Definition unverändert
-- wieder anlegen — inkl. security_invoker, damit weiterhin die RLS des
-- aufrufenden Nutzers auf inventory/machines/products greift.
drop view if exists public.machine_stock;

alter table public.products
  alter column list_price_net type numeric(12,4);

alter table public.offers
  alter column regular_price_net type numeric(12,4),
  alter column offer_price_net   type numeric(12,4);

alter table public.personal_offers
  alter column regular_price_net type numeric(12,4),
  alter column offer_price_net   type numeric(12,4);

create view public.machine_stock
with (security_invoker = true) as
  select i.machine_id,
         m.code as machine_code,
         m.name as machine_name,
         i.product_id,
         p.name as product_name,
         p.image_url,
         p.list_price_net,
         p.tax_rate,
         i.quantity,
         i.par_level,
         coalesce(i.capacity, greatest(12, i.quantity)) as capacity,
         case
           when i.quantity <= 0            then 'out'
           when i.quantity <= i.par_level  then 'low'
           else 'available'
         end as availability
    from public.inventory i
    join public.machines m on m.id = i.machine_id
    join public.products p on p.id = i.product_id
   where m.deleted_at is null and p.deleted_at is null;

grant all on public.machine_stock to anon, authenticated, service_role;

-- 2) Serviertemperatur als Angebots-Merkmal ----------------------------------
-- Grundlage für wetter-/saisonabhängige Angebote: an heißen Tagen 'cold'
-- (Eis, Kaltgetränke), an kalten Tagen 'hot' (Kaffee, Tee, Kakao, Pasta),
-- 'neutral' ganzjährig. Ohne dieses Merkmal müsste ein Generator über
-- Produktnamen raten.
alter table public.products
  add column if not exists serve_temp text not null default 'neutral';

alter table public.products
  drop constraint if exists products_serve_temp_check;
alter table public.products
  add constraint products_serve_temp_check
  check (serve_temp in ('cold', 'hot', 'neutral'));

comment on column public.products.serve_temp is
  'Serviertemperatur für wetterabhängige Angebote: cold | hot | neutral.';

create index if not exists idx_products_serve_temp
  on public.products(serve_temp) where status = 'active';

-- 3) Alten Katalog abräumen ---------------------------------------------------
truncate table
  public.personal_offers, public.offers, public.product_ratings,
  public.customer_prices, public.recommendations,
  public.filling_logs, public.disposal_logs,
  public.inventory_movements, public.inventory, public.warehouse_stock,
  public.machine_slots_history, public.machine_slots
  cascade;

update public.purchase_items set product_id = null where product_id is not null;
update public.nayax_sales    set product_id = null where product_id is not null;
update public.machine_telemetry_events
   set product_id_hint = null where product_id_hint is not null;

delete from public.products;

-- 4) Neuer Katalog (62 Artikel) ----------------------------------------------
insert into public.products
  (sku, name, category, tax_rate, status, list_price_net, cost_price_net, serve_temp)
values
('BS-001','Arizona Eistee Pfirsich 0,5 l','Getränke',19.0,'active',1.8487,0.87,'cold'),
('BS-002','Arizona Green Tea 0,5 l','Getränke',19.0,'active',1.8487,0.87,'cold'),
('BS-003','Capri-Sonne','Getränke',19.0,'active',1.0084,0.36,'cold'),
('BS-004','Coca-Cola 0,5 l','Getränke',19.0,'active',1.9328,0.75,'cold'),
('BS-005','Coca-Cola Zero 0,5 l','Getränke',19.0,'active',1.9328,0.75,'cold'),
('BS-006','Durstlöscher','Getränke',19.0,'active',1.2605,0.54,'cold'),
('BS-007','Fanta 0,5 l','Getränke',19.0,'active',1.9328,0.75,'cold'),
('BS-008','GÖNRGY Apfelringe 0,5 l','Getränke',19.0,'active',2.5210,1.43,'cold'),
('BS-009','GÖNRGY Boost Berries 0,5 l','Getränke',19.0,'active',2.5210,1.43,'cold'),
('BS-010','GÖNRGY Paradise Punch 0,5 l','Getränke',19.0,'active',2.5210,1.43,'cold'),
('BS-011','GÖNRGY Sweet & Candies 0,5 l','Getränke',19.0,'active',2.5210,1.43,'cold'),
('BS-012','Lift Apfelschorle 1 l','Getränke',19.0,'active',1.5126,0.82,'cold'),
('BS-013','Paulaner Limo','Getränke',19.0,'active',1.6807,0.94,'cold'),
('BS-014','Paulaner Spezi','Getränke',19.0,'active',1.6807,0.94,'cold'),
('BS-015','Red Bull 0,25 l','Getränke',19.0,'active',1.6807,0.85,'cold'),
('BS-016','Red Bull Sugarfree 0,25 l','Getränke',19.0,'active',1.7647,0.97,'cold'),
('BS-017','Red Bull Gletschereis Himbeere 0,25 l','Getränke',19.0,'active',1.8487,1.08,'cold'),
('BS-018','Vio Wasser medium 0,5 l','Getränke',19.0,'active',1.2605,0.70,'cold'),
('BS-019','Vio Wasser still 0,5 l','Getränke',19.0,'active',1.2605,0.70,'cold'),
('BS-020','Müllermilch','Milch',7.0,'active',1.4019,0.83,'cold'),
('BS-021','Kaffee','Heißgetränke',19.0,'active',1.5126,0.33,'hot'),
('BS-022','Espresso','Heißgetränke',19.0,'active',1.0924,0.24,'hot'),
('BS-023','Doppelter Espresso','Heißgetränke',19.0,'active',1.8487,0.29,'hot'),
('BS-024','Cappuccino','Heißgetränke',19.0,'active',1.8487,0.32,'hot'),
('BS-025','Latte Macchiato','Heißgetränke',19.0,'active',1.8487,0.34,'hot'),
('BS-026','Tee','Heißgetränke',19.0,'active',1.0924,0.22,'hot'),
('BS-027','Kakao','Heißgetränke',19.0,'active',1.2605,0.28,'hot'),
('BS-028','Ben & Jerry''s','Eis',7.0,'active',5.4206,3.73,'cold'),
('BS-029','Kinder Bueno Eis','Eis',7.0,'active',1.6822,0.63,'cold'),
('BS-030','Calippo Cola','Eis',7.0,'active',1.4019,0.65,'cold'),
('BS-031','Calippo Orange','Eis',7.0,'active',1.4019,0.65,'cold'),
('BS-032','Cornetto Pistazie','Eis',7.0,'active',2.3364,1.38,'cold'),
('BS-033','Flutschfinger','Eis',7.0,'active',1.4019,0.63,'cold'),
('BS-034','Häagen-Dazs','Eis',7.0,'active',4.6729,2.93,'cold'),
('BS-035','Hexenkerze','Eis',7.0,'active',0.9346,0.21,'cold'),
('BS-036','Kaktus Eis','Eis',7.0,'active',0.9346,0.19,'cold'),
('BS-037','Magnum Klassik','Eis',7.0,'active',2.3364,1.34,'cold'),
('BS-038','Magnum Pfirsich','Eis',7.0,'active',2.3364,0.70,'cold'),
('BS-039','Magnum Pistazie','Eis',7.0,'active',2.3364,0.70,'cold'),
('BS-040','Mars Eis','Eis',7.0,'active',1.4953,0.33,'cold'),
('BS-041','Monte Eis','Eis',7.0,'active',1.6822,0.63,'cold'),
('BS-042','Nuii Eis','Eis',7.0,'active',2.0561,0.62,'cold'),
('BS-043','Pirulo Tropical','Eis',7.0,'active',1.6822,null,'cold'),
('BS-044','Eis-Sandwich','Eis',7.0,'active',1.1215,0.21,'cold'),
('BS-045','Snickers Eis','Eis',7.0,'active',1.4019,0.33,'cold'),
('BS-046','Yogurette Eis','Eis',7.0,'active',1.6822,0.63,'cold'),
('BS-047','BiFi Carazza','Snacks & Süßes',7.0,'active',2.3364,1.23,'neutral'),
('BS-048','BiFi XXL','Snacks & Süßes',7.0,'active',1.8692,1.06,'neutral'),
('BS-049','Kinder Bueno','Snacks & Süßes',7.0,'active',0.9346,0.30,'neutral'),
('BS-050','Chipsfrisch','Snacks & Süßes',7.0,'active',1.1215,0.58,'neutral'),
('BS-051','Haribo Happy Cola','Snacks & Süßes',7.0,'active',1.4019,0.67,'neutral'),
('BS-052','Haribo Goldbären','Snacks & Süßes',7.0,'active',1.4019,0.67,'neutral'),
('BS-053','Kinder Bueno 4 Stk.','Snacks & Süßes',7.0,'active',3.2710,1.25,'neutral'),
('BS-054','Kinderriegel','Snacks & Süßes',7.0,'active',0.7477,0.20,'neutral'),
('BS-055','Kinderriegel 2 Stk.','Snacks & Süßes',7.0,'active',1.4019,0.59,'neutral'),
('BS-056','Kinderriegel 4 Stk.','Snacks & Süßes',7.0,'active',2.6168,1.25,'neutral'),
('BS-057','Knoppers Riegel','Snacks & Süßes',7.0,'active',0.9346,0.44,'neutral'),
('BS-058','Knoppers Riegel 5 Stk.','Snacks & Süßes',7.0,'active',3.2710,1.79,'neutral'),
('BS-059','Mars','Snacks & Süßes',7.0,'active',1.4953,0.65,'neutral'),
('BS-060','Pasta Penne Snackbecher','Snacks & Süßes',7.0,'active',1.5888,0.98,'hot'),
('BS-061','Saure Würmer','Snacks & Süßes',7.0,'active',1.4019,0.66,'neutral'),
('BS-062','Snickers','Snacks & Süßes',7.0,'active',1.4019,0.76,'neutral')
;
