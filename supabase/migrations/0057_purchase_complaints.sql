-- ============================================================================
-- 0057 · Reklamationen je Kauf (Vertrauensfunktion Kundenbereich)
-- ----------------------------------------------------------------------------
-- Kund:innen können direkt am Kauf ein Problem melden („Produkt nicht
-- erhalten", „Produkt beschädigt", „Falsches Produkt", „Sonstiges").
-- Jede Meldung wird als Ticket geführt: Kunde legt an und liest den
-- eigenen Status; Gesellschafter/Systemadmin bearbeiten (Status +
-- Lösungsnotiz). Keine harten Löschungen — Historie bleibt erhalten.
-- ============================================================================

do $$ begin
  create type app.complaint_kind as enum
    ('not_received', 'damaged', 'wrong_product', 'other');
exception when duplicate_object then null; end $$;

do $$ begin
  create type app.complaint_status as enum
    ('open', 'in_progress', 'resolved', 'rejected');
exception when duplicate_object then null; end $$;

create table if not exists public.purchase_complaints (
  id              uuid primary key default gen_random_uuid(),
  purchase_id     uuid not null references public.purchases(id) on delete restrict,
  customer_id     uuid not null references public.customers(id) on delete restrict,
  kind            app.complaint_kind not null,
  comment         text,
  photo_path      text,                       -- optionales Foto (Storage), UI folgt
  status          app.complaint_status not null default 'open',
  resolution_note text,                       -- Antwort/Begründung der Bearbeitung
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now(),
  updated_by      uuid references public.profiles(id)
);

create index if not exists idx_complaints_customer
  on public.purchase_complaints(customer_id, created_at desc);
create index if not exists idx_complaints_status
  on public.purchase_complaints(status, created_at desc);

-- Pro Kauf höchstens EIN offenes Ticket (Doppelmeldungen vermeiden;
-- nach Abschluss darf erneut gemeldet werden, z. B. bei Rückfragen).
create unique index if not exists uq_complaints_open_per_purchase
  on public.purchase_complaints(purchase_id)
  where status in ('open', 'in_progress');

drop trigger if exists trg_complaints_updated_at on public.purchase_complaints;
create trigger trg_complaints_updated_at
  before update on public.purchase_complaints
  for each row execute function app.set_updated_at();

alter table public.purchase_complaints enable row level security;

-- Kunde: eigene Tickets lesen.
drop policy if exists complaints_read on public.purchase_complaints;
create policy complaints_read on public.purchase_complaints
  for select to authenticated
  using (
    customer_id = auth.uid()
    or exists (
      select 1 from public.profiles p
      where p.id = auth.uid() and p.role in ('system_admin', 'shareholder')
    )
  );

-- Kunde: Ticket nur zum EIGENEN Kauf anlegen, Status startet immer 'open'.
drop policy if exists complaints_insert on public.purchase_complaints;
create policy complaints_insert on public.purchase_complaints
  for insert to authenticated
  with check (
    customer_id = auth.uid()
    and status = 'open'
    and exists (
      select 1 from public.purchases pu
      where pu.id = purchase_id and pu.customer_id = auth.uid()
    )
  );

-- Bearbeitung (Status/Lösungsnotiz) nur durch Gesellschafter/Systemadmin.
drop policy if exists complaints_update on public.purchase_complaints;
create policy complaints_update on public.purchase_complaints
  for update to authenticated
  using (
    exists (
      select 1 from public.profiles p
      where p.id = auth.uid() and p.role in ('system_admin', 'shareholder')
    )
  )
  with check (
    exists (
      select 1 from public.profiles p
      where p.id = auth.uid() and p.role in ('system_admin', 'shareholder')
    )
  );

grant select, insert, update on public.purchase_complaints to authenticated;
