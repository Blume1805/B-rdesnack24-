-- 0050 — Produktkatalog 03/2026: 108 Selgros-Artikel + 6 Heissgetraenke.
--
-- VK-Kalkulation nach den KPI-Benchmarks des Finanzdashboards:
--   Ziel-Wareneinsatzquote 35 % (Band 30-40 %), USt 7 % Lebensmittel /
--   19 % Getraenke, Kaugummi, Alkohol, Non-Food; Aufrundung auf
--   10-Cent-Stufen; Vending-Untergrenze 1,00 EUR brutto.
-- Sonderregeln: Non-Food Faktor 1,6 auf EK brutto; Heineken-EK als 1/6
-- Gebindepreis angenommen (PRUEFEN); Nescafe-Sticks-VE pruefen;
-- Heissgetraenke-Preise aus der Gastro-Preisliste, Cafe Crema nach
-- Americano-Richtwert. list_price_net = VK netto, cost_price_net = EK
-- netto. sku: SG- = Selgros-Artikelnummer, HOT- = Heissgetraenk.
-- Idempotent: bestehende sku werden uebersprungen.

insert into public.machines (code, name, location_name)
select 'A4', 'Heißgetränkeautomat', 'Standort Heißgetränke (ANPASSEN)'
where not exists (select 1 from public.machines where code = 'A4');

insert into public.products (sku, name, category, tax_rate, status, list_price_net, cost_price_net)
select v.sku, v.name, v.category, v.tax_rate, 'active', v.list_net, v.cost_net
from (values
('SG-126409','Airwaves Cool Cassis Dragees 50St','Süßes',19.0,5.1261,1.79),
('SG-328388','Balisto Yoberry halal, UTZ-zertifiziert 37 g','Snacks & Süßes',7.0,1.4019,0.47),
('SG-50920','BiFi Currywurst 60 g','Snacks & Süßes',7.0,2.6168,0.89),
('SG-294912','BiFi Original 20 g','Snacks & Süßes',7.0,1.4019,0.49),
('SG-116385','BiFi Roll 45g','Snacks & Süßes',7.0,2.8972,0.99),
('SG-255668','BiFi Roll Turkey 45 g','Snacks & Süßes',7.0,2.8972,0.99),
('SG-821065','Bio Honigwaffeln 75 g','Snacks & Süßes',7.0,6.2617,2.19),
('SG-18020','BOUNTY 57 g','Snacks & Süßes',7.0,2.1495,0.75),
('SG-958867','Bytes 50 g','Snacks & Süßes',7.0,2.3364,0.79),
('SG-324474','Capri Sun Multivitamin 0,2 l','Getränke',19.0,0.9244,0.3),
('SG-926708','Capri Sun Orange 0,2 l','Getränke',19.0,0.9244,0.3),
('SG-130950','Capri-Sun Kirsche 0,2 l','Getränke',19.0,0.9244,0.3),
('SG-337725','Cheez-It Cheese und Chili 40 g','Snacks & Süßes',7.0,2.6168,0.89),
('SG-367055','Cheez-It Double Cheese 40 g','Snacks & Süßes',7.0,2.6168,0.89),
('SG-809999','Chips Sea Salt 30 g','Snacks & Süßes',7.0,4.5794,1.59),
('SG-557184','Club-Mate 0,5 l','Getränke',19.0,2.0168,0.69),
('SG-126064','CLUB-MATE Granat 0,5 l','Getränke',19.0,2.0168,0.69),
('SG-363073','Club-Mate Ice-T Kraftstoff 0,5 l','Getränke',19.0,2.0168,0.69),
('SG-965150','Coca Cola 0,5 l','Getränke',19.0,2.1849,0.75),
('SG-165554','Coca Cola Zero 0,5 l','Getränke',19.0,2.1849,0.75),
('SG-20947','Color-Rado 100 g','Snacks & Süßes',7.0,1.8692,0.64),
('SG-487986','Cookie Crunchies 30 g','Snacks & Süßes',7.0,5.4206,1.89),
('SG-5586','Corny Big ´Schoko´, UTZ-zertifiziert 50 g','Snacks & Süßes',7.0,1.4019,0.48),
('SG-407465','Corny Big ´Schoko-Banane´, UTZ-zertifiziert 50 g','Snacks & Süßes',7.0,1.4019,0.48),
('SG-376527','Cristinen Multivitamin-12-Fruchtnektar 0,5 l','Getränke',19.0,1.9328,0.65),
('SG-856809','Crunchips Paprika 50 g','Snacks & Süßes',7.0,4.0187,1.38),
('SG-561099','Cup Noodles Ramen Spiced Curry 67 g','Snacks & Süßes',7.0,2.6168,0.89),
('SG-466593','Dr Pepper 0,33 l','Getränke',19.0,2.1849,0.75),
('SG-933311','Dr Pepper Vanilla Float 0,33 l','Getränke',19.0,2.1849,0.75),
('SG-914819','Dr Pepper Zero 0,33 l','Getränke',19.0,2.1849,0.75),
('SG-98767','Duplo 2St','Snacks & Süßes',7.0,1.7757,0.59),
('SG-56326','effect® High Quality Energy Drink 0,33 l','Getränke',19.0,2.1008,0.71),
('SG-546911','Erdbeeren ´Primavera´ 100 g','Snacks & Süßes',7.0,1.8692,0.64),
('SG-532518','Erdnüsse 50 g','Snacks & Süßes',7.0,1.4953,0.51),
('SG-510617','Evian Premium Mineralwasser Naturelle 0,5 l','Getränke',19.0,1.7647,0.59),
('SG-744452','Fanta Orange 0,5 l','Getränke',19.0,2.1849,0.75),
('SG-88107','Fisherman´s Friend Eucalyptus 25 g','Snacks & Süßes',7.0,2.6168,0.89),
('SG-721408','FUZE TEA Schwarzer TEE Pfirisich-Hibiskus PET DPG 0,4 l','Getränke',19.0,2.1008,0.71),
('SG-180308','Fuze Tea Schwarzer Tee Pfirsich 0,4 l','Getränke',19.0,2.1008,0.71),
('SG-417348','Gob Smackers Kinobox - Fruchtbonbons 120 g','Snacks & Süßes',7.0,4.2991,1.49),
('SG-110464','Goldbären 100 g','Snacks & Süßes',7.0,1.8692,0.64),
('SG-908498','Goldbären mini 75 g','Snacks & Süßes',7.0,1.8692,0.64),
('SG-110600','Hanuta 2St','Snacks & Süßes',7.0,1.3084,0.45),
('SG-259194','Happy Cola 100 g','Snacks & Süßes',7.0,1.8692,0.64),
('SG-478585','Heineken Pils 0,33 l','Getränke (Alkohol)',19.0,2.3529,0.81),
('SG-410438','Jack Daniel´s & Coca Cola 0,33 l','Getränke (Alkohol)',19.0,5.2941,1.85),
('SG-854610','Kakao-Drink 0,1% 0,5 l','Getränke',7.0,2.0561,0.69),
('SG-394780','Kinder Riegel 2er 2St','Snacks & Süßes',7.0,1.7757,0.59),
('SG-79498','KitKat 41,5 g','Snacks & Süßes',7.0,1.5888,0.55),
('SG-836944','KitKat Chunky 40 g','Snacks & Süßes',7.0,1.5888,0.55),
('SG-463042','KitKat Chunky Funky 40 g','Snacks & Süßes',7.0,1.5888,0.55),
('SG-836869','KitKat Chunky White 40 g','Snacks & Süßes',7.0,1.5888,0.55),
('SG-516775','Kluth Fit Food Protein Mix 50 g','Snacks & Süßes',7.0,6.2617,2.19),
('SG-335787','Knoppers 25 g','Snacks & Süßes',7.0,0.9346,0.23),
('SG-20954','Konfekt 100 g','Snacks & Süßes',7.0,1.7757,0.59),
('SG-894545','Lay´s Chips gesalzen 150 g','Snacks & Süßes',7.0,4.0187,1.39),
('SG-318721','Lindt Hello Mini Sticks Mix 120 g','Snacks & Süßes',7.0,7.757,2.69),
('SG-765046','Lion 2Pack 2St','Snacks & Süßes',7.0,2.0561,0.69),
('SG-979121','M&M`s Crispy 36 g','Snacks & Süßes',7.0,1.4953,0.51),
('SG-288750','M&M`s Peanut 45 g','Snacks & Süßes',7.0,1.4953,0.51),
('SG-327898','Mais-Chips HOT Chilli-Limette Style 90 g','Snacks & Süßes',7.0,1.4019,0.49),
('SG-153287','Mars Duo Riegel 70 g','Snacks & Süßes',7.0,1.8692,0.65),
('SG-91817','Mega-Roulette Frucht 45 g','Snacks & Süßes',7.0,1.1215,0.39),
('SG-121965','Mentos Fruit 38 g','Snacks & Süßes',7.0,1.215,0.42),
('SG-121958','Mentos Mint 38 g','Snacks & Süßes',7.0,1.215,0.42),
('SG-411450','Monster Energy 0,5 l','Getränke',19.0,3.6134,1.25),
('SG-830144','Nescafe 3in1 Creamy Latte Sticks 15 g','Snacks & Süßes',7.0,5.1402,1.79),
('SG-143239','Nic Nac´s Original 35 g','Snacks & Süßes',7.0,1.4953,0.5),
('SG-858220','Nuss und Frucht mit Joghurt Pops 40 g','Snacks & Süßes',7.0,2.6168,0.89),
('SG-965707','Original Spiced Gold Rum <(>&<)> Cola 10% 0,25 l','Getränke (Alkohol)',19.0,5.1261,1.79),
('SG-441059','Paulaner Spezi 0,33 l','Getränke',19.0,1.7647,0.59),
('SG-467561','Pico-Balla mini 65 g','Snacks & Süßes',7.0,1.8692,0.64),
('SG-996587','Powerade Mountain Blast 0,5 l','Getränke',19.0,3.1933,1.1),
('SG-776512','Powerade Mountain Blast zero 0,5 l','Getränke',19.0,3.1933,1.1),
('SG-378987','Pringles Original 40 g','Snacks & Süßes',7.0,1.5888,0.55),
('SG-702136','Radeberger Pilsener 0,33 l','Getränke (Alkohol)',19.0,1.9328,0.65),
('SG-988704','Red Bull 0,25 l','Getränke',19.0,2.7731,0.97),
('SG-598851','Red Bull Gletschereis 0,25 l','Getränke',19.0,3.1933,1.09),
('SG-706875','Red Bull Springedition Cherry Sakura 0,25 l','Getränke',19.0,3.1933,1.09),
('SG-676315','Red Bull Springedition Cherry Sakura Zuckerfrei 0,25 l','Getränke',19.0,3.1933,1.09),
('SG-327060','Red Bull Sugarfree 0,25 l','Getränke',19.0,2.7731,0.97),
('SG-58087','Roulette Fruchtgummi Rolle 25 g','Snacks & Süßes',7.0,0.9346,0.19),
('SG-194761','Saure Pommes ´FIZZ´ 100 g','Snacks & Süßes',7.0,1.8692,0.64),
('SG-461948','Schweppes Indian Tonic Water 0,2 l','Getränke',19.0,2.2689,0.79),
('SG-427452','Screamers Nippers Kinobox Sour Candy Crunch 140 g','Snacks & Süßes',7.0,4.2991,1.49),
('SG-378692','Skittles Fruits 38 g','Snacks & Süßes',7.0,1.215,0.41),
('SG-968413','Snickers Riegel 80 g','Snacks & Süßes',7.0,2.3364,0.79),
('SG-256544','Studentenfutter 50 g','Snacks & Süßes',7.0,2.6168,0.89),
('SG-591181','Studentenfutter 300 g','Snacks & Süßes',7.0,10.8411,3.79),
('SG-834677','Tempo Taschentücher XXL 3L Light Box 140T','Non-Food',19.0,3.3613,2.09),
('SG-81624','Trio Creamy Peanut Butter 54,75 g','Snacks & Süßes',7.0,2.3364,0.79),
('SG-58063','Tropifrutti 100 g','Snacks & Süßes',7.0,1.8692,0.64),
('SG-222969','Tropifrutti mini 75 g','Snacks & Süßes',7.0,1.8692,0.64),
('SG-243742','True Fruits Smoothie Pink 250 ml','Getränke',19.0,5.7143,1.99),
('SG-243711','True Fruits Smoothie Yellow 250 ml','Getränke',19.0,5.7143,1.99),
('SG-481854','Twix halal 50 g','Snacks & Süßes',7.0,1.4019,0.47),
('SG-875454','USB-C Ladekabel schwarz 120cm 1 St','Non-Food',19.0,14.4538,8.99),
('SG-319341','Vanillemilch 0,1% 0,5 l','Getränke',7.0,2.0561,0.69),
('SG-135470','Varta Batterie Longlife Extra AA 1 St','Non-Food',19.0,4.7899,2.99),
('SG-93951','Vitamin Well Antioxidan 0,5 l','Getränke',19.0,3.6975,1.29),
('SG-36687','Vitamin Well Hydrate 0,5 l','Getränke',19.0,3.6975,1.29),
('SG-384792','Vitamin Well Pineapple zero 0,5 l','Getränke',19.0,3.6975,1.29),
('SG-133056','Vitamin Well Raspberry zero 0,5 l','Getränke',19.0,3.6975,1.29),
('SG-164117','Vitamin Well Recover 0,5 l','Getränke',19.0,3.6975,1.29),
('SG-535866','Vitamin Well Sport 002 0,5 l','Getränke',19.0,3.6975,1.29),
('SG-427110','Volvic Juicy Orange-Mango 0,5 l','Getränke',19.0,2.1849,0.75),
('SG-452949','Volvic Juicy Sommerfrüchte 0,5 l','Getränke',19.0,2.1849,0.75),
('SG-20930','Weinland Weingummi-Dessert 100 g','Snacks & Süßes',7.0,1.8692,0.64),
('HOT-01','Espresso (doppelt)','Heißgetränke',19.0,2.8571,0.45),
('HOT-02','Cappuccino','Heißgetränke',19.0,2.9412,0.55),
('HOT-03','Latte Macchiato','Heißgetränke',19.0,3.8655,0.7),
('HOT-04','Café Crema','Heißgetränke',19.0,2.6891,0.5),
('HOT-05','Tee (Bio, 350 ml)','Heißgetränke',19.0,3.1933,0.25),
('HOT-06','Heiße Schokolade','Heißgetränke',19.0,3.0252,0.6)
) as v(sku, name, category, tax_rate, list_net, cost_net)
where not exists (select 1 from public.products p where p.sku = v.sku);

-- Bestand Heißgetränkeautomat (Portionen je Slot)
insert into public.inventory (machine_id, product_id, slot_code, quantity, capacity, par_level)
select m.id, p.id, 'H' || right(p.sku, 2), 80, 100, 20
from public.machines m
join public.products p on p.sku like 'HOT-%'
where m.code = 'A4'
  and not exists (
    select 1 from public.inventory i
    where i.machine_id = m.id and i.product_id = p.id);
