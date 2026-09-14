-- inventory_movements bekommt für FIFO-fähige Zugänge einen Einkaufspreis
-- (netto je Stück) und eine Rechnungs-Referenz (Nummer + Datum). Für
-- Vernichtungen wird das MHD des betroffenen Lots erfasst, damit im
-- Report nachvollzogen werden kann, ob die Vernichtung wegen MHD erfolgte.

alter table public.inventory_movements
  add column if not exists unit_cost      numeric(12,2),
  add column if not exists invoice_number text,
  add column if not exists invoice_date   date,
  add column if not exists lot_expiry     date;

comment on column public.inventory_movements.unit_cost is
  'Netto-Einkaufspreis je Stück laut Lieferantenrechnung (nur für type=refill).';
comment on column public.inventory_movements.invoice_number is
  'Nummer der Lieferantenrechnung, aus der der Zugang stammt.';
comment on column public.inventory_movements.invoice_date is
  'Datum der Lieferantenrechnung — Zugangsdatum für die FIFO-Reihenfolge.';
comment on column public.inventory_movements.lot_expiry is
  'MHD-Datum des Lots (bei Zugang und Vernichtung ausfüllen).';

-- Historische Zugänge (aus Demo-Seed) werden mit dem aktuellen
-- Stammpreis initialisiert, damit der FIFO-Report sofort läuft.
update public.inventory_movements m
   set unit_cost = coalesce(p.cost_price_net, 0)
  from public.products p
 where m.product_id = p.id
   and m.type = 'refill'
   and m.unit_cost is null;

-- Fiktive Rechnungsnummer/-datum für bestehende Zugänge, wo noch nichts
-- gesetzt ist (nur Demo-Zweck; künftig kommt der Wert aus dem
-- Nachfüll-Formular / Lieferschein-Ingest).
update public.inventory_movements
   set invoice_date = occurred_at::date
 where type = 'refill' and invoice_date is null;

update public.inventory_movements
   set invoice_number = 'RE-' || to_char(occurred_at, 'YYYYMMDD') || '-'
                        || substring(md5(id::text) from 1 for 4)
 where type = 'refill' and invoice_number is null;
