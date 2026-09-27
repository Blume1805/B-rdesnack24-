-- ============================================================================
-- Pfand getrennt vom Preis führen (§ 7 PAngV) — COMPLIANCE V-016
--
-- Befund 27.09.2026: Die Katalogpreise (Migration product_catalog_price_list,
-- 28.07.2026) enthalten bei 18 Getränken den Einwegpfand von 0,25 €. § 7 PAngV
-- verlangt, den Pfand NEBEN dem Preis anzugeben, nicht darin (EuGH C-543/21).
-- Daraus folgten drei Fehler:
--
--   * App und Kassenbon zeigen einen Preis, der den Pfand einschließt.
--   * Jeder Rabatt (Dauerrabatt, MHD-Abschlag, Tagesangebot, Coupon,
--     Kombiangebot) wird auch auf den Pfand gewährt.
--   * Die Spende (5 % des Nettoerlöses) wird auch auf den Pfand gerechnet.
--
-- Entscheidungen des Gesellschafters vom 27.09.2026: Rabatte nur auf den
-- Preis ohne Pfand; Spende ohne Pfand. Pfand je Produkt: 0,25 € für die 18
-- unten gelisteten Getränke, alle übrigen ohne Pfand (Durstlöscher: Karton).
--
-- UMSATZSTEUER: Der Pfand ist Teil des Entgelts (Abschn. 10.1 Abs. 8 UStAE)
-- und trägt die Steuer zum Satz des Getränks. Umsatz, Rechnung, DATEV und
-- Finanzkennzahlen rechnen deshalb unverändert mit total_gross EINSCHLIESSLICH
-- Pfand. Nur die Spendenbasis (purchase_net_items) lässt ihn weg.
--
-- WAS SICH ÄNDERT
--   products.deposit              neu: Pfand je Stück, brutto
--   products.list_price_net       jetzt OHNE Pfand (Bruttosumme bleibt gleich)
--   machine_slots.unit_price_net  ebenso; Genauigkeit 4 statt 2 Stellen,
--                                 damit die Umrechnung centgenau zurückführt
--   offers, personal_offers       offene Angebote auf den Preis ohne Pfand
--   bundles.price_gross           jetzt ohne Pfand
--   purchase_items.unit_deposit   neu: Pfand je Stück, aus den Stammdaten
--   purchases.deposit_gross       neu: Pfand eines Automatenkaufs ohne Positionen
--   vend_freigaben.pfand_brutto   neu: Pfand der Freigabe
--   automatenpreis, kundenpreis   neue Spalten pfand, zahlbetrag bzw. warenpreis
--   product_detail, search_products, top_products_by_category: Spalte deposit
--   active_bundles                Spalte deposit_total
--   my_receipts                   Pfand je Position und je Kauf
--
-- Zwei Bestandsfehler, beim Nachweis gefunden und hier mit behoben:
--   * vend_freigabe_anlegen brach bei jedem Aufruf mit 42702 ab
--     (mehrdeutige Spalte gueltig_bis).
--   * purchase_net_items rechnete Automatenkäufe ohne Positionen pauschal
--     mit 7 % Umsatzsteuer, auch bei Getränken zu 19 %.
--
-- Was der Kunde am Automaten bezahlt, ändert sich nicht: Warenpreis + Pfand
-- ergibt centgenau den bisherigen Preis. Das prüft Abschnitt 2 selbst.
--
-- Nur Produktionslinie. Die numerierte Linie (0001–0070) führt einen anderen
-- Katalog (dort ist BS-004 Red Bull); Abschnitt 0 bricht dort ab.
-- Nachweis: scripts/pruefumgebung/110_pfand.sql
-- ============================================================================

-- ── 0. Schutz: nur gegen den Katalog, für den die Liste gilt ──────────────
-- Ohne „on commit drop": Im SQL-Editor ohne umschließende Transaktion wäre
-- die Tabelle sonst nach der ersten Anweisung schon weg.
create temporary table _pfand (sku text primary key, name text not null,
                               pfand numeric(4,2) not null);
insert into _pfand values
  ('BS-001', 'Arizona Eistee Pfirsich 0,5 l',          0.25),
  ('BS-002', 'Arizona Green Tea 0,5 l',                0.25),
  ('BS-004', 'Coca-Cola 0,5 l',                        0.25),
  ('BS-005', 'Coca-Cola Zero 0,5 l',                   0.25),
  ('BS-007', 'Fanta 0,5 l',                            0.25),
  ('BS-008', 'GÖNRGY Apfelringe 0,5 l',                0.25),
  ('BS-009', 'GÖNRGY Boost Berries 0,5 l',             0.25),
  ('BS-010', 'GÖNRGY Paradise Punch 0,5 l',            0.25),
  ('BS-011', 'GÖNRGY Sweet & Candies 0,5 l',           0.25),
  ('BS-012', 'Lift Apfelschorle 1 l',                  0.25),
  ('BS-013', 'Paulaner Limo',                          0.25),
  ('BS-014', 'Paulaner Spezi',                         0.25),
  ('BS-015', 'Red Bull 0,25 l',                        0.25),
  ('BS-016', 'Red Bull Sugarfree 0,25 l',              0.25),
  ('BS-017', 'Red Bull Gletschereis Himbeere 0,25 l',  0.25),
  ('BS-018', 'Vio Wasser medium 0,5 l',                0.25),
  ('BS-019', 'Vio Wasser still 0,5 l',                 0.25),
  ('BS-020', 'Müllermilch',                            0.25);

do $$
declare
  v_treffer integer;
begin
  if exists (select 1 from information_schema.columns
              where table_schema = 'public' and table_name = 'products'
                and column_name = 'deposit') then
    raise exception 'Pfand-Migration ist bereits angewandt (products.deposit existiert).';
  end if;

  -- Der Pfand eines Automatenkaufs hängt an source = 'machine'. Den Wert
  -- legt 20260926121000_terminal_webhook_anbindung an; ohne ihn bräche diese
  -- Migration mitten im Lauf ab.
  if not exists (select 1 from pg_enum e
                   join pg_type t on t.oid = e.enumtypid
                   join pg_namespace n on n.oid = t.typnamespace
                  where n.nspname = 'app' and t.typname = 'purchase_source'
                    and e.enumlabel = 'machine') then
    raise exception 'Zuerst 20260926121000_terminal_webhook_anbindung ausrollen (Enum-Wert machine fehlt). Abbruch ohne Änderung.';
  end if;

  -- SKU UND Name müssen passen. Nur die SKU zu prüfen genügt nicht: In der
  -- numerierten Linie heißt BS-004 „Red Bull 0,25 l", und eine Umrechnung
  -- nach SKU zöge dort den Pfand vom falschen Produkt ab.
  select count(*) into v_treffer
    from _pfand k
    join public.products p on p.sku = k.sku and p.name = k.name
   where p.list_price_net is not null
     and round(p.list_price_net * (1 + p.tax_rate / 100), 2) > k.pfand;

  if v_treffer <> (select count(*) from _pfand) then
    raise exception
      'Katalog passt nicht zur Pfandliste: % von % Produkten gefunden. Abbruch ohne Änderung.',
      v_treffer, (select count(*) from _pfand);
  end if;
end $$;

-- ── 1. Schema ───────────────────────────────────────────────────────────
alter table public.products
  add column deposit numeric(4,2) not null default 0
  constraint products_deposit_check check (deposit >= 0 and deposit <= 5);
comment on column public.products.deposit is
  'Pfand je Stück, brutto (Umsatzsteuer zum Satz des Produkts). Nicht in '
  'list_price_net enthalten: § 7 PAngV verlangt die Angabe neben dem Preis.';
-- products vergibt Leserechte je Spalte (cost_price_net bleibt verborgen).
-- Der Pfand ist eine Pflichtangabe gegenüber dem Kunden und wird lesbar
-- wie list_price_net und tax_rate — für angemeldete Konten, nicht für anon.
grant select (deposit) on public.products to authenticated;

comment on column public.products.list_price_net is
  'Listenpreis netto OHNE Pfand (seit 27.09.2026, V-016). Pfand: deposit.';

-- Genauigkeit wie products.list_price_net. Mit zwei Stellen führt netto →
-- brutto nicht immer centgenau zurück; bei der Umrechnung in Abschnitt 2
-- hätte das den Automatenpreis um einen Cent verschoben.
-- Der Verlaufstrigger hängt an der Spalte und muss für die Typänderung kurz
-- weichen; er wird unverändert wieder angelegt.
drop trigger trg_ms_history on public.machine_slots;
alter table public.machine_slots
  alter column unit_price_net type numeric(12,4);
create trigger trg_ms_history
  after update of product_id, unit_price_net on public.machine_slots
  for each row
  when ((old.product_id is distinct from new.product_id)
        or (old.unit_price_net is distinct from new.unit_price_net))
  execute function app.snapshot_slot_history();
alter table public.machine_slots_history
  alter column unit_price_net type numeric(12,4);
comment on column public.machine_slots.unit_price_net is
  'Fachpreis netto OHNE Pfand (seit 27.09.2026, V-016). Pfand: products.deposit.';

-- Ohne Vorgabewert: Der Trigger in Abschnitt 3 setzt den Wert immer aus den
-- Stammdaten; NOT NULL greift erst nach dem Trigger.
alter table public.purchase_items add column unit_deposit numeric(4,2);
comment on column public.purchase_items.unit_deposit is
  'Pfand je Stück zum Kaufzeitpunkt, brutto; in unit_price enthalten. Wird '
  'beim Einfügen aus products.deposit gesetzt, nie vom Aufrufer übernommen.';

alter table public.purchases
  add column deposit_gross numeric(12,2) not null default 0
  constraint purchases_deposit_gross_check check (deposit_gross >= 0);
comment on column public.purchases.deposit_gross is
  'Pfand eines Kaufs ohne Positionen (Automatenkauf über Freigabe), brutto; '
  'in total_gross enthalten. Wird serverseitig gesetzt.';

alter table public.vend_freigaben
  add column pfand_brutto numeric(12,2) not null default 0
  constraint vend_freigaben_pfand_check check (pfand_brutto >= 0);
comment on column public.vend_freigaben.pfand_brutto is
  'Pfand der Freigabe, brutto; in betrag_brutto enthalten.';

-- ── 2. Bestand umrechnen ────────────────────────────────────────────────
update public.products p
   set deposit        = k.pfand,
       list_price_net = round(
         (round(p.list_price_net * (1 + p.tax_rate / 100), 2) - k.pfand)
         / (1 + p.tax_rate / 100), 4)
  from _pfand k
 where p.sku = k.sku and p.name = k.name;

-- Fachpreise: dieselbe Umrechnung, nur für Fächer mit Pfandprodukt.
create temporary table _slot_vorher as
  select ms.id, round(ms.unit_price_net * (1 + p.tax_rate / 100), 2) as brutto_alt
    from public.machine_slots ms
    join public.products p on p.id = ms.product_id
   where p.deposit > 0 and ms.unit_price_net is not null;

update public.machine_slots ms
   set unit_price_net = round((v.brutto_alt - p.deposit) / (1 + p.tax_rate / 100), 4),
       updated_at     = now()
  from _slot_vorher v, public.products p
 where v.id = ms.id and p.id = ms.product_id;

-- Offene Angebote: Rabatt nur noch auf den Warenpreis. Der Prozentsatz
-- bleibt, der Rabattbetrag sinkt um den Anteil, der auf den Pfand entfiel.
-- Abgelaufene und eingelöste Angebote bleiben, wie sie waren: Sie sind
-- Geschichte, und damals galt der Preis mit Pfand.
update public.offers o
   set regular_price_net = n.reg,
       offer_price_net   = round(n.reg * (1 - o.discount_percent / 100), 4),
       updated_at        = now()
  from (select o2.id,
               round((round(o2.regular_price_net * (1 + p.tax_rate / 100), 2) - p.deposit)
                     / (1 + p.tax_rate / 100), 4) as reg
          from public.offers o2
          join public.products p on p.id = o2.product_id
         where p.deposit > 0
           and o2.regular_price_net is not null
           and (o2.valid_to is null or o2.valid_to >= current_date)) n
 where n.id = o.id;

update public.personal_offers o
   set regular_price_net = n.reg,
       offer_price_net   = round(n.reg * (1 - o.discount_percent / 100), 2)
  from (select o2.id,
               round((round(o2.regular_price_net * (1 + p.tax_rate / 100), 2) - p.deposit)
                     / (1 + p.tax_rate / 100), 4) as reg
          from public.personal_offers o2
          join public.products p on p.id = o2.product_id
         where p.deposit > 0
           and o2.regular_price_net is not null
           and o2.redeemed_at is null
           and (o2.valid_to is null or o2.valid_to >= now())) n
 where n.id = o.id;

-- Kombiangebote: Der Festpreis enthielt den Pfand der enthaltenen Getränke.
update public.bundles b
   set price_gross = b.price_gross - d.pfand,
       updated_at  = now()
  from (select bi.bundle_id, sum(p.deposit * bi.quantity) as pfand
          from public.bundle_items bi
          join public.products p on p.id = bi.product_id
         where p.deposit > 0
         group by bi.bundle_id) d
 where d.bundle_id = b.id and b.deleted_at is null;

-- Bisherige Käufe: Die Positionen enthielten den Pfand im Stückpreis.
update public.purchase_items pi
   set unit_deposit = least(p.deposit, greatest(pi.unit_price, 0))
  from public.products p
 where p.id = pi.product_id and p.deposit > 0;
update public.purchase_items set unit_deposit = 0 where unit_deposit is null;
alter table public.purchase_items
  alter column unit_deposit set not null,
  add constraint purchase_items_unit_deposit_check check (unit_deposit >= 0);

update public.vend_freigaben f
   set pfand_brutto = least(p.deposit, f.betrag_brutto)
  from public.products p
 where p.id = f.product_id and p.deposit > 0;

update public.purchases pu
   set deposit_gross = least(f.pfand_brutto, greatest(pu.total_gross, 0))
  from public.vend_freigaben f
  join public.terminal_ereignisse t on t.lfd_nr = f.ereignis_lfd_nr
 where pu.source = 'machine'
   and t.idempotenz_schluessel = pu.source_ref
   and f.eingeloest_am is not null
   and f.pfand_brutto > 0
   and not exists (select 1 from public.purchase_items pi where pi.purchase_id = pu.id);

-- Selbstprüfung: Warenpreis + Pfand ergibt centgenau den bisherigen Preis.
do $$
declare
  v_falsch integer;
begin
  select count(*) into v_falsch
    from _pfand k
    join public.products p on p.sku = k.sku and p.name = k.name
   where p.deposit <> k.pfand;
  if v_falsch > 0 then
    raise exception 'Pfand bei % Produkten nicht gesetzt.', v_falsch;
  end if;

  select count(*) into v_falsch
    from _slot_vorher v
    join public.machine_slots ms on ms.id = v.id
    join public.products p on p.id = ms.product_id
   where round(ms.unit_price_net * (1 + p.tax_rate / 100), 2) + p.deposit <> v.brutto_alt;
  if v_falsch > 0 then
    raise exception 'Fachpreis + Pfand weicht bei % Fächern vom bisherigen Preis ab.', v_falsch;
  end if;

  if exists (select 1 from public.bundles where deleted_at is null and price_gross <= 0) then
    raise exception 'Ein Kombiangebot hätte nach Abzug des Pfands keinen positiven Preis.';
  end if;
end $$;

-- ── 3. Pfand beim Kauf festhalten ────────────────────────────────────────
-- Immer aus den Stammdaten, nie vom Aufrufer: Wer purchase_items schreibt,
-- soll den Pfand nicht wählen und damit die Spendenbasis nicht verschieben
-- können.
create or replace function app.pfand_je_position()
returns trigger
language plpgsql
security definer
set search_path = public, app
as $$
begin
  new.unit_deposit := least(
    coalesce((select p.deposit from public.products p where p.id = new.product_id), 0),
    greatest(coalesce(new.unit_price, 0), 0));
  return new;
end;
$$;
revoke all on function app.pfand_je_position() from public;

create trigger trg_purchase_items_pfand
  before insert on public.purchase_items
  for each row execute function app.pfand_je_position();

-- Ein Automatenkauf hat keine Positionen. Der Pfand steht an der Freigabe,
-- die das Terminal-Ereignis mit demselben Idempotenzschlüssel eingelöst hat
-- (terminal-webhook: erst vend_freigabe_einloesen, dann insert purchases).
create or replace function app.pfand_je_kauf()
returns trigger
language plpgsql
security definer
set search_path = public, app
as $$
begin
  new.deposit_gross := 0;
  if new.source = 'machine' and new.source_ref is not null then
    new.deposit_gross := least(
      coalesce((select f.pfand_brutto
                  from public.vend_freigaben f
                  join public.terminal_ereignisse t on t.lfd_nr = f.ereignis_lfd_nr
                 where t.idempotenz_schluessel = new.source_ref
                   and f.eingeloest_am is not null
                 order by f.eingeloest_am desc
                 limit 1), 0),
      greatest(coalesce(new.total_gross, 0), 0));
  end if;
  return new;
end;
$$;
revoke all on function app.pfand_je_kauf() from public;

create trigger trg_purchases_pfand
  before insert on public.purchases
  for each row execute function app.pfand_je_kauf();

-- ── 4. Spendenbasis ohne Pfand ──────────────────────────────────────────
create or replace function public.purchase_net_items(p_purchase uuid, p_total_gross numeric)
returns numeric
language sql
stable security definer
set search_path = public, app
as $$
  -- Spendenbasis: Nettoerlös OHNE Pfand (Entscheidung 27.09.2026, V-016).
  -- Nicht für Umsatzsteuer oder Buchhaltung verwenden: Dort gehört der
  -- Pfand zum Entgelt (Abschn. 10.1 Abs. 8 UStAE).
  select coalesce(
    (
      select round(sum(
               round(pi.quantity * (pi.unit_price - pi.unit_deposit)
                     / (1 + coalesce(pr.tax_rate, 7) / 100.0), 2)
             ), 2)
      from public.purchase_items pi
      left join public.products pr on pr.id = pi.product_id
      where pi.purchase_id = p_purchase
      having count(*) > 0
    ),
    -- Automatenkauf ohne Positionen: Das Produkt steht an der eingelösten
    -- Freigabe. Bis hierher rechnete dieser Zweig pauschal mit 7 % (über
    -- purchase_net) — bei Getränken zu 19 % ein zu hoher Nettobetrag und
    -- damit eine zu hohe Spende. Befund beim Pfand-Umbau, 27.09.2026.
    (
      select round((p_total_gross - pu.deposit_gross)
                   / (1 + pr.tax_rate / 100.0), 2)
        from public.purchases pu
        join public.terminal_ereignisse t on t.idempotenz_schluessel = pu.source_ref
        join public.vend_freigaben f on f.ereignis_lfd_nr = t.lfd_nr
                                   and f.eingeloest_am is not null
        join public.products pr on pr.id = f.product_id
       where pu.id = p_purchase and pu.source = 'machine'
       order by f.eingeloest_am desc
       limit 1
    ),
    -- Sonst wie bisher pauschal, nur ohne Pfand.
    public.purchase_net(
      p_total_gross
      - coalesce((select pu.deposit_gross from public.purchases pu
                   where pu.id = p_purchase), 0))
  )
$$;

-- ── 5. Preise am Automaten ─────────────────────────────────────────────
-- Neue Spalten verlangen DROP und CREATE; die Rechte werden unten exakt
-- wiederhergestellt (authenticated, service_role; nicht anon, nicht PUBLIC).
drop function public.automatenpreis(uuid, uuid);
create function public.automatenpreis(p_machine uuid, p_product uuid)
returns table(grundpreis_brutto numeric, rest_tage integer,
              mhd_abschlag_prozent numeric, brutto numeric, steuersatz numeric,
              pfand numeric, zahlbetrag numeric)
language sql
stable security definer
set search_path = public, app
as $$
  -- grundpreis_brutto und brutto sind Warenpreise OHNE Pfand; der MHD-
  -- Abschlag gilt nur für die Ware. zahlbetrag = brutto + pfand ist, was
  -- der Automat kassiert.
  with produkt as (
    select p.id, p.tax_rate, p.list_price_net, p.deposit
      from public.products p
     where p.id = p_product and p.deleted_at is null
  ),
  -- Slotpreis schlägt Listenpreis: der Preis am Gerät ist die Wahrheit.
  basis as (
    select coalesce(
             (select ms.unit_price_net
                from public.machine_slots ms
               where ms.machine_id = p_machine
                 and ms.product_id = p_product
                 and ms.unit_price_net is not null
               limit 1),
             (select list_price_net from produkt)
           ) as netto
  ),
  -- Kürzestes MHD im Bestand dieses Automaten entscheidet.
  mhd as (
    select min(i.expiry_date) as frist
      from public.inventory i
     where i.machine_id = p_machine
       and i.product_id = p_product
       and i.quantity > 0
       and i.expiry_date is not null
  ),
  tage as (
    select case when (select frist from mhd) is null then null
                else ((select frist from mhd) - current_date)::integer
           end as rest
  ),
  stufe as (
    select coalesce(
             (select s.abschlag_prozent
                from public.mhd_preisstufen s
               where s.aktiv
                 and (select rest from tage) is not null
                 and (select rest from tage) <= s.rest_tage_bis
               order by s.rest_tage_bis asc
               limit 1),
             0)::numeric(5,2) as prozent
  ),
  preis as (
    select
      round((select netto from basis) * (1 + (select tax_rate from produkt) / 100), 2) as grund,
      (select rest from tage) as rest,
      (select prozent from stufe) as prozent,
      -- Der Prozentsatz wird gerundet, bevor er angewandt wird — dieselbe
      -- Regel wie bei den Kombiangeboten: angezeigte und gerechnete Zahl
      -- müssen dieselbe sein, sonst ist die Rechnung nicht prüfbar.
      round(
        round((select netto from basis) * (1 + (select tax_rate from produkt) / 100), 2)
        * (1 - (select prozent from stufe) / 100), 2) as ware,
      (select tax_rate from produkt) as satz,
      (select deposit from produkt) as pfand
  )
  select grund, rest, prozent, ware, satz, pfand, ware + pfand
    from preis
   where exists (select 1 from produkt) and (select netto from basis) is not null;
$$;

drop function public.kundenpreis(uuid, uuid, uuid);
create function public.kundenpreis(p_machine uuid, p_product uuid, p_customer uuid default null)
returns table(automatenpreis numeric, dauerrabatt_prozent numeric,
              dauerrabatt_betrag numeric, coupon_prozent numeric,
              coupon_betrag numeric, endpreis numeric, herleitung jsonb,
              warenpreis numeric, pfand numeric)
language plpgsql
stable security definer
set search_path = public, app
as $$
declare
  v_kunde        uuid;
  v_automat      numeric;
  v_mhd_prozent  numeric;
  v_rest         integer;
  v_pfand        numeric := 0;
  v_dauer_p      numeric := 0;
  v_dauer_b      numeric := 0;
  v_coupon_p     numeric := 0;
  v_coupon_b     numeric := 0;
  v_zwischen     numeric;
  v_ende         numeric;
  v_hat_abo      boolean := false;
begin
  -- Die Kundenkennung IST die Auth-Kennung: public.customers.id verweist auf
  -- public.profiles.id. Es gibt keine zweite Zuordnung, und es darf auch
  -- keine geben — sonst entstehen zwei Wahrheiten darüber, wer jemand ist.
  --
  -- Fremde Konten sind tabu. Ein Kunde sieht nur den eigenen Preis; Personal
  -- darf jeden sehen. Ohne diese Prüfung wäre die Funktion ein
  -- Auskunftsdienst darüber, wer ein Abo hat.
  v_kunde := coalesce(p_customer, auth.uid());

  if v_kunde is distinct from auth.uid()
     and not public.auth_has_permission('customers.manage')
  then
    raise exception 'Kein Zugriff auf fremde Kundenpreise.'
      using errcode = '42501';
  end if;

  select a.brutto, a.mhd_abschlag_prozent, a.rest_tage, a.pfand
    into v_automat, v_mhd_prozent, v_rest, v_pfand
    from public.automatenpreis(p_machine, p_product) a;

  if v_automat is null then
    return;
  end if;

  -- Genau derselbe Helfer, den my_subscription_benefits benutzt. Eine zweite
  -- Abo-Prüfung wäre eine zweite Wahrheit darüber, wer Dauerrabatt bekommt.
  if v_kunde is not null then
    v_hat_abo := app.has_subscription(v_kunde);
  end if;

  if v_hat_abo then
    v_dauer_p := app.dauerrabatt_prozent();
  end if;

  -- Rabatte nur auf den Warenpreis, nie auf den Pfand (V-016).
  v_dauer_b  := round(v_automat * v_dauer_p / 100, 2);
  v_zwischen := v_automat - v_dauer_b;

  -- Coupons bleiben in dieser Migration bewusst bei 0: Welcher Coupon am
  -- Automaten gilt, entscheidet die Einlösung in vend_freigabe_anlegen(),
  -- nicht die Preisauskunft. Eine Auskunft, die einen Coupon einrechnet,
  -- den die Einlösung dann ablehnt, ist schlimmer als keine.
  v_coupon_b := round(v_zwischen * v_coupon_p / 100, 2);
  v_ende     := v_zwischen - v_coupon_b;

  -- endpreis ist der zu zahlende Betrag (Ware + Pfand) und bleibt damit,
  -- was vend_freigabe_anlegen als betrag_brutto kassiert. Für die Anzeige
  -- nach § 7 PAngV: warenpreis und pfand getrennt.
  return query select
    v_automat,
    v_dauer_p,
    v_dauer_b,
    v_coupon_p,
    v_coupon_b,
    v_ende + v_pfand,
    jsonb_build_object(
      'automatenpreis_brutto', v_automat,
      'mhd_abschlag_prozent',  v_mhd_prozent,
      'mhd_rest_tage',         v_rest,
      'dauerrabatt_prozent',   v_dauer_p,
      'dauerrabatt_betrag',    v_dauer_b,
      'coupon_prozent',        v_coupon_p,
      'coupon_betrag',         v_coupon_b,
      'warenpreis_brutto',     v_ende,
      'pfand_brutto',          v_pfand,
      'endpreis_brutto',       v_ende + v_pfand,
      'berechnet_am',          now()
    ),
    v_ende,
    v_pfand;
end;
$$;

create or replace function public.preis_abweichungen(p_machine uuid default null)
returns table(machine_id uuid, slot_code text, product_id uuid,
              soll_brutto numeric, zuletzt_bestaetigt numeric,
              bestaetigt_am timestamptz)
language sql
stable security definer
set search_path = public, app
as $$
  -- soll_brutto ist der Betrag, den das Gerät kassiert: Ware + Pfand.
  with faecher as (
    select ms.machine_id, ms.slot_code, ms.product_id
      from public.machine_slots ms
     where ms.product_id is not null
       and (p_machine is null or ms.machine_id = p_machine)
  ),
  soll as (
    select f.*, (select a.zahlbetrag
                   from public.automatenpreis(f.machine_id, f.product_id) a) as brutto
      from faecher f
  ),
  ist as (
    select distinct on (p.machine_id, p.slot_code)
           p.machine_id, p.slot_code, p.preis_brutto, p.bestaetigt_am
      from public.preis_ausspielungen p
     where p.bestaetigt_am is not null
     order by p.machine_id, p.slot_code, p.bestaetigt_am desc
  )
  select s.machine_id, s.slot_code, s.product_id,
         s.brutto, i.preis_brutto, i.bestaetigt_am
    from soll s
    left join ist i
      on i.machine_id = s.machine_id and i.slot_code = s.slot_code
   where s.brutto is not null
     and s.brutto is distinct from i.preis_brutto
     and public.auth_has_permission('prices.manage')
   order by s.machine_id, s.slot_code;
$$;

create or replace function public.vend_freigabe_anlegen(p_machine uuid, p_product uuid, p_slot text default null)
returns table(code text, betrag numeric, gueltig_bis timestamptz, herleitung jsonb)
language plpgsql
security definer
set search_path = public, app, extensions
as $$
declare
  v_kunde      uuid;
  v_code       text;
  v_preis      record;
  v_bis        timestamptz;
  v_bestand    integer;
begin
  v_kunde := auth.uid();

  if v_kunde is null
     or not exists (select 1 from public.customers c where c.id = v_kunde) then
    raise exception 'Nur für angemeldete Kunden.' using errcode = '42501';
  end if;

  -- Kein Automat, kein Verkauf. Der Vorbehalt gilt bis zum ersten Gerät.
  if not exists (select 1 from public.machines m
                  where m.id = p_machine
                    and m.status = 'active'
                    and m.deleted_at is null) then
    raise exception 'Dieser Automat ist nicht in Betrieb.' using errcode = 'P0002';
  end if;

  select i.quantity into v_bestand
    from public.inventory i
   where i.machine_id = p_machine and i.product_id = p_product;

  if coalesce(v_bestand, 0) < 1 then
    raise exception 'Das Produkt liegt in diesem Automaten nicht vor.'
      using errcode = 'P0002';
  end if;

  select * into v_preis
    from public.kundenpreis(p_machine, p_product, v_kunde);

  if v_preis.endpreis is null then
    raise exception 'Für dieses Produkt ist kein Preis hinterlegt.'
      using errcode = 'P0002';
  end if;

  -- Offene Freigaben desselben Kunden verfallen. Der Kunde hat sich
  -- umentschieden; die alte Freigabe darf nicht liegen bleiben.
  --
  -- Spalten mit Tabellenalias: Ohne ihn ist „gueltig_bis" mehrdeutig
  -- (Tabellenspalte und gleichnamige Rückgabespalte), und die Funktion brach
  -- bei JEDEM Aufruf mit 42702 ab. Aufgefallen beim Pfand-Nachweis am
  -- 27.09.2026; die bisherigen Prüfskripte legten Freigaben von Hand an.
  update public.vend_freigaben vf
     set storniert_am = now(),
         storno_grund = case when vf.gueltig_bis < now() then 'abgelaufen' else 'ersetzt' end
   where vf.customer_id = v_kunde
     and vf.eingeloest_am is null
     and vf.storniert_am is null;

  -- 128 Bit Zufall. Kurz genug zum Abtippen wäre zu kurz zum Raten.
  v_code := encode(extensions.gen_random_bytes(16), 'hex');
  v_bis  := now() + interval '3 minutes';

  -- betrag_brutto ist Ware + Pfand; pfand_brutto hält den Pfand getrennt,
  -- damit der Kauf ihn aus der Spendenbasis herausnehmen kann.
  insert into public.vend_freigaben
    (code_hash, customer_id, machine_id, product_id, slot_code,
     betrag_brutto, pfand_brutto, herleitung, gueltig_bis)
  values
    (extensions.digest(v_code, 'sha256'), v_kunde, p_machine, p_product, p_slot,
     v_preis.endpreis, coalesce(v_preis.pfand, 0), v_preis.herleitung, v_bis);

  return query select v_code, v_preis.endpreis, v_bis, v_preis.herleitung;
end;
$$;

-- ── 6. Anzeige: Pfand neben dem Preis ────────────────────────────────────
drop function public.product_detail(uuid);
create function public.product_detail(p_product_id uuid)
returns table(id uuid, name text, category text, image_url text,
              list_price_net numeric, tax_rate numeric, energy_kcal numeric,
              fat_g numeric, saturated_fat_g numeric, carbs_g numeric,
              sugars_g numeric, protein_g numeric, salt_g numeric,
              allergens text[], ingredients text, avg_rating numeric,
              review_count integer, my_rating integer, deposit numeric)
language sql
stable security definer
set search_path = public, app
as $$
  select p.id, p.name, p.category, p.image_url, p.list_price_net, p.tax_rate,
         p.energy_kcal, p.fat_g, p.saturated_fat_g,
         p.carbs_g, p.sugars_g, p.protein_g, p.salt_g,
         p.allergens, p.ingredients,
         coalesce(prs.avg_rating, 0),
         coalesce(prs.review_count, 0),
         (select rating from public.product_ratings
           where product_id = p.id and customer_id = auth.uid()),
         p.deposit
    from public.products p
    left join public.product_rating_summary prs on prs.product_id = p.id
   where p.id = p_product_id;
$$;

drop function public.search_products(text, integer, text, text);
create function public.search_products(p_query text, p_limit integer default 30,
                                       p_category text default null,
                                       p_subcategory text default null)
returns table(id uuid, name text, category text, subcategory text,
              image_url text, list_price_net numeric, tax_rate numeric,
              avg_rating numeric, review_count integer,
              available_machines integer, deposit numeric)
language sql
stable security definer
set search_path = public, app
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
             and m.status = 'active'),
         p.deposit
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

drop function public.top_products_by_category(text, integer);
create function public.top_products_by_category(p_category text, p_limit integer default 3)
returns table(id uuid, name text, category text, image_url text,
              list_price_net numeric, tax_rate numeric, avg_rating numeric,
              review_count integer, deposit numeric)
language sql
stable security definer
set search_path = public, app
as $$
  select p.id, p.name, p.category, p.image_url, p.list_price_net, p.tax_rate,
         coalesce(prs.avg_rating, 0),
         coalesce(prs.review_count, 0),
         p.deposit
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

drop function public.active_bundles();
create function public.active_bundles()
returns table(id uuid, code text, title text, description text,
              price_gross numeric, price_gross_abo numeric,
              regular_gross numeric, regular_gross_abo numeric,
              discount_percent numeric, valid_from date, valid_to date,
              items jsonb, deposit_total numeric)
language sql
stable security definer
set search_path = public, app
as $$
  -- price_gross und regular_gross sind Warenpreise ohne Pfand; der Kunde
  -- zahlt zusätzlich deposit_total. Der Dauerrabatt gilt nur für die Ware.
  with rabatt as (select app.dauerrabatt_prozent() as p),
  roh as (
    select b.id, b.code, b.title, b.description, b.price_gross,
           b.valid_from, b.valid_to,
           (select sum(s.regular_line_gross) from public.bundle_split(b.id) s)
             as regular_gross,
           (select coalesce(jsonb_agg(jsonb_build_object(
                     'product_id',    s.product_id,
                     'name',          s.product_name,
                     'image_url',     s.image_url,
                     'quantity',      s.quantity,
                     'tax_rate',      s.tax_rate,
                     'regular_gross', s.regular_line_gross,
                     'share_percent', s.share_percent,
                     'bundle_gross',  s.bundle_line_gross,
                     'bundle_net',    s.bundle_line_net,
                     'bundle_vat',    s.bundle_line_vat,
                     'deposit',       (select p.deposit * s.quantity
                                         from public.products p
                                        where p.id = s.product_id)
                   ) order by s.sort_order), '[]'::jsonb)
              from public.bundle_split(b.id) s) as items,
           (select coalesce(sum(p.deposit * bi.quantity), 0)
              from public.bundle_items bi
              join public.products p on p.id = bi.product_id
             where bi.bundle_id = b.id) as deposit_total
      from public.bundles b
     where b.deleted_at is null
       and b.status = 'active'
       and b.valid_from <= current_date
       and (b.valid_to is null or b.valid_to >= current_date)
       and exists (select 1 from public.bundle_items bi where bi.bundle_id = b.id)
  )
  select r.id, r.code, r.title, r.description,
         r.price_gross,
         round(r.price_gross   * (1 - rabatt.p / 100), 2) as price_gross_abo,
         r.regular_gross,
         round(r.regular_gross * (1 - rabatt.p / 100), 2) as regular_gross_abo,
         rabatt.p as discount_percent,
         r.valid_from, r.valid_to, r.items, r.deposit_total
    from roh r cross join rabatt
   order by r.valid_from desc, r.title;
$$;

create or replace function public.my_receipts()
returns jsonb
language sql
stable security definer
set search_path = public, app
as $$
  select coalesce(jsonb_agg(to_jsonb(r) order by r.purchased_at desc), '[]'::jsonb)
  from (
    select
      p.id,
      p.purchased_at,
      p.total_gross,
      p.source::text as source,
      m.name as machine_name,
      coalesce((
        select jsonb_agg(jsonb_build_object(
          'label', coalesce(pi.product_label, pr.name, 'Artikel'),
          'quantity', pi.quantity,
          'unit_price', pi.unit_price,
          'unit_deposit', pi.unit_deposit,
          'line_gross', round(pi.unit_price * pi.quantity, 2),
          'category', coalesce(pr.category, 'Sonstiges')
        ) order by pi.id)
        from public.purchase_items pi
        left join public.products pr on pr.id = pi.product_id
        where pi.purchase_id = p.id
      ), '[]'::jsonb) as items,
      -- Pfand des ganzen Kaufs: aus den Positionen, sonst vom Kauf selbst.
      coalesce((
        select sum(pi.unit_deposit * pi.quantity)
        from public.purchase_items pi
        where pi.purchase_id = p.id
      ), p.deposit_gross) as deposit_total,
      coalesce((
        select coalesce(pr.category, 'Sonstiges')
        from public.purchase_items pi
        left join public.products pr on pr.id = pi.product_id
        where pi.purchase_id = p.id
        group by coalesce(pr.category, 'Sonstiges')
        order by sum(pi.quantity) desc, coalesce(pr.category, 'Sonstiges')
        limit 1
      ), 'Sonstiges') as category,
      coalesce((
        select sum(pi.quantity) from public.purchase_items pi
        where pi.purchase_id = p.id
      ), 0) as item_count,
      case when exists (
        select 1 from public.purchase_items pi
        left join public.products pr on pr.id = pi.product_id
        where pi.purchase_id = p.id
          and coalesce(pr.category, '') = any (array['Non-Food', 'Technik', 'Zubehör'])
      ) then (p.purchased_at + interval '24 months') else null end as warranty_until
    from public.purchases p
    left join public.machines m on m.id = p.machine_id
    where p.customer_id = auth.uid()
  ) r;
$$;

-- Bestandsansicht der Automaten (Kunden-App: Verfügbarkeit mit Preis).
-- Neue Spalte nur am Ende, damit „create or replace" genügt; die Rechte und
-- security_invoker bleiben dabei erhalten.
create or replace view public.machine_stock
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
            when (i.quantity <= 0) then 'out'::text
            when (i.quantity <= i.par_level) then 'low'::text
            else 'available'::text
        end as availability,
    p.deposit
   from ((public.inventory i
     join public.machines m on ((m.id = i.machine_id)))
     join public.products p on ((p.id = i.product_id)))
  where ((m.deleted_at is null) and (p.deleted_at is null));

-- ── 7. Rechte wiederherstellen ────────────────────────────────────────────
-- Genau wie vorher: authenticated und service_role, nicht anon, nicht PUBLIC.
revoke all on function public.automatenpreis(uuid, uuid) from public, anon;
revoke all on function public.kundenpreis(uuid, uuid, uuid) from public, anon;
revoke all on function public.product_detail(uuid) from public, anon;
revoke all on function public.search_products(text, integer, text, text) from public, anon;
revoke all on function public.top_products_by_category(text, integer) from public, anon;
revoke all on function public.active_bundles() from public, anon;
grant execute on function public.automatenpreis(uuid, uuid) to authenticated, service_role;
grant execute on function public.kundenpreis(uuid, uuid, uuid) to authenticated, service_role;
grant execute on function public.product_detail(uuid) to authenticated, service_role;
grant execute on function public.search_products(text, integer, text, text) to authenticated, service_role;
grant execute on function public.top_products_by_category(text, integer) to authenticated, service_role;
grant execute on function public.active_bundles() to authenticated, service_role;

drop table _pfand;
drop table _slot_vorher;
