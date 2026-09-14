-- ============================================================================
-- 0059 · Produktkatalog-Reset 2026: Bördesnack24-Sortiment
-- ----------------------------------------------------------------------------
-- Ersetzt den bisherigen (Test-)Katalog vollständig durch das reale
-- Sortiment. Alte Produkte werden HART gelöscht (ausdrücklich gewünscht —
-- es waren nur Testdaten; Live-Start mit echten Käufen). Abgeleitete/Test-
-- Tabellen (Angebote, Inventur, Slots, Preise, Empfehlungen, HACCP-Test-
-- logs) via TRUNCATE ... CASCADE geleert; transaktionale Historie
-- (purchase_items, nayax_sales, Telemetrie) wird vom Produkt entkoppelt
-- (SET NULL) — Beleg-Label bleibt lesbar, keine gefährlichen Kaskaden.
-- VK nach KPI-Regel (35 % Wareneinsatz, 10-Cent-Stufen, min. 1 € brutto).
-- Preislose Artikel (Calippo, Capri, Nui, Pirulo) bewusst ausgelassen.
-- ============================================================================

truncate table
  public.personal_offers, public.offers, public.product_ratings,
  public.customer_prices, public.recommendations,
  public.filling_logs, public.disposal_logs,
  public.inventory_movements, public.inventory, public.warehouse_stock,
  public.machine_slots_history, public.machine_slots
  cascade;

update public.purchase_items set product_id = null where product_id is not null;
update public.nayax_sales set product_id = null where product_id is not null;
update public.machine_telemetry_events set product_id_hint = null where product_id_hint is not null;

delete from public.products;

insert into public.products
  (sku, name, category, tax_rate, status, list_price_net, cost_price_net)
values
('BS-001','Coca-Cola 0,5 l','Getränke',19.0,'active',2.605,0.89),
('BS-002','Coca-Cola Zero 0,5 l','Getränke',19.0,'active',2.605,0.89),
('BS-003','Fanta Orange 0,5 l','Getränke',19.0,'active',2.605,0.89),
('BS-004','Red Bull 0,25 l','Getränke',19.0,'active',2.9412,1.01),
('BS-005','Monster Energy 0,5 l','Getränke',19.0,'active',2.9412,1.02),
('BS-006','Rockstar Energy 0,5 l','Getränke',19.0,'active',3.0252,1.04),
('BS-007','Arizona Eistee 0,5 l','Getränke',19.0,'active',3.0252,1.04),
('BS-008','Eistee Rauch 0,5 l','Getränke',19.0,'active',1.9328,0.6533),
('BS-009','Durstlöscher 0,5 l','Getränke',19.0,'active',1.5966,0.54),
('BS-010','Paulaner Spezi 0,5 l','Getränke',19.0,'active',2.6891,0.94),
('BS-011','Paulaner Limo 0,5 l','Getränke',19.0,'active',2.6891,0.94),
('BS-012','Vio Wasser 0,5 l','Getränke',19.0,'active',1.5126,0.5233),
('BS-013','Müllermilch 0,4 l','Milch',7.0,'active',2.8972,0.99),
('BS-014','Bärenmarke Milch 3,5 %','Milch',7.0,'active',2.5234,0.88),
('BS-015','Laktosefreie Milch 3,5 %','Milch',7.0,'active',3.5514,1.23),
('BS-016','Lavazza Kaffeebohnen 1 kg','Kaffee',7.0,'active',37.1963,12.99),
('BS-017','Kinder Bueno Eis','Eis',7.0,'active',2.1495,0.7475),
('BS-018','Cornetto Pistazie','Eis',7.0,'active',4.0187,1.3804),
('BS-019','Flutschfinger','Eis',7.0,'active',1.8692,0.6314),
('BS-020','Magnum Klassik','Eis',7.0,'active',3.8318,1.3375),
('BS-021','Kaktus Eis','Eis',7.0,'active',0.9346,0.2211),
('BS-022','Mars Eis','Eis',7.0,'active',1.1215,0.3908),
('BS-023','Snickers Eis','Eis',7.0,'active',1.1215,0.3908),
('BS-024','Häagen-Dazs Becher','Eis',7.0,'active',10,3.49),
('BS-025','Ben & Jerry''s Becher','Eis',7.0,'active',12.7103,4.44),
('BS-026','Magnum Pistazie','Eis',7.0,'active',2.4299,0.83),
('BS-027','Magnum Pfirsich','Eis',7.0,'active',2.4299,0.83),
('BS-028','Hexenkerze','Eis',7.0,'active',0.9346,0.2488),
('BS-029','Eis-Sandwich','Eis',7.0,'active',0.9346,0.2488),
('BS-030','Monte Eis','Eis',7.0,'active',2.1495,0.7475),
('BS-031','Yogurette Eis','Eis',7.0,'active',2.1495,0.7475),
('BS-032','BiFi XXL','Snacks & Süßes',7.0,'active',3.0841,1.0593),
('BS-033','BiFi Carazza','Snacks & Süßes',7.0,'active',3.5514,1.2306),
('BS-034','Kinderriegel','Snacks & Süßes',7.0,'active',0.9346,0.24),
('BS-035','Mars','Snacks & Süßes',7.0,'active',1.1215,0.385),
('BS-036','Snickers','Snacks & Süßes',7.0,'active',2.6168,0.9096),
('BS-037','Kinder Bueno','Snacks & Süßes',7.0,'active',1.028,0.352),
('BS-038','Kinder Bueno White','Snacks & Süßes',7.0,'active',2.8037,0.9523),
('BS-039','Kinder Schokobons 500 g','Snacks & Süßes',7.0,'active',19.9065,6.94),
('BS-040','Knoppers Riegel','Snacks & Süßes',7.0,'active',1.3084,0.426),
('BS-041','Chipsfrisch','Snacks & Süßes',7.0,'active',1.6822,0.5833),
('BS-042','Chio Tortilla Chips XXL','Snacks & Süßes',7.0,'active',5.1402,1.79),
('BS-043','Saure Würmer','Snacks & Süßes',7.0,'active',2.3364,0.79),
('BS-044','Haribo Fan Pixel','Snacks & Süßes',7.0,'active',1.8692,0.64),
('BS-045','Haribo Happy Cola','Snacks & Süßes',7.0,'active',2.3364,0.8027),
('BS-046','Haribo Goldbären','Snacks & Süßes',7.0,'active',2.3364,0.8027),
('BS-047','Pasta Penne Snackbecher','Snacks & Süßes',7.0,'active',3.3645,1.17)
;
