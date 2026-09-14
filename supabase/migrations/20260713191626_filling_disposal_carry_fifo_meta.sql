-- filling_logs bekommt EK-Preis + Rechnungs-Referenz + Lot-MHD, damit
-- neue Nachfüllungen automatisch zu einem sauberen FIFO-Lot werden.

alter table public.filling_logs
  add column if not exists unit_cost      numeric(12,2),
  add column if not exists invoice_number text,
  add column if not exists invoice_date   date,
  add column if not exists lot_expiry     date;

alter table public.disposal_logs
  add column if not exists lot_expiry     date;

-- Trigger neu: FIFO-Meta wird in inventory_movements durchgereicht.
create or replace function app.filling_to_movement()
returns trigger
language plpgsql
security definer
set search_path = public, app
as $$
begin
  insert into public.inventory_movements
    (machine_id, product_id, type, quantity_delta, reason,
     source, source_ref, occurred_at, created_by,
     unit_cost, invoice_number, invoice_date, lot_expiry)
  values
    (new.machine_id, new.product_id, 'refill', new.quantity, 'Befüllung',
     'inventory', 'fill:'||new.id::text, new.filled_at, new.recorded_by,
     new.unit_cost, new.invoice_number,
     coalesce(new.invoice_date, new.filled_at::date), new.lot_expiry);
  return new;
end;
$$;

create or replace function app.disposal_to_movement()
returns trigger
language plpgsql
security definer
set search_path = public, app
as $$
begin
  insert into public.inventory_movements
    (machine_id, product_id, type, quantity_delta, reason,
     source, source_ref, occurred_at, created_by, lot_expiry)
  values
    (new.machine_id, new.product_id, 'disposal', -abs(new.quantity),
     new.reason, 'inventory', 'disp:'||new.id::text, new.disposed_at,
     new.recorded_by, new.lot_expiry);
  return new;
end;
$$;
