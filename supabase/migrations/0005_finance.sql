-- ============================================================================
-- 0005 — Finanzdashboard (Kategorie 1)
-- ----------------------------------------------------------------------------
-- SKR-03-Konten, normalisierte Buchungen (aus sevDesk/Manuell/BWA-Upload),
-- Sync-Läufe und eine serverseitige Aggregations-RPC für beliebige Zeiträume.
-- Zugriff ausschließlich für Gesellschafter/Admin (finance.view / finance.export).
-- ============================================================================

-- Enums ---------------------------------------------------------------------
do $$ begin
  create type app.finance_direction as enum ('revenue', 'expense', 'asset', 'liability');
exception when duplicate_object then null; end $$;

do $$ begin
  create type app.finance_source as enum ('sevdesk', 'manual', 'bwa_upload');
exception when duplicate_object then null; end $$;

do $$ begin
  create type app.sync_status as enum ('running', 'success', 'error');
exception when duplicate_object then null; end $$;

-- ----------------------------------------------------------------------------
-- SKR-03-Konten (Referenzdaten, siehe Verfahrensdokumentation Abschnitt 9.4)
-- ----------------------------------------------------------------------------
create table if not exists public.finance_accounts (
  code        text primary key,                 -- z. B. '8300'
  name        text not null,
  direction   app.finance_direction not null,
  default_tax numeric(4,1),                      -- 0.0 | 7.0 | 19.0 (NULL = unbestimmt)
  sort_order  int not null default 0
);

comment on table public.finance_accounts is 'SKR-03-Kontenstamm für das Finanzdashboard.';

-- ----------------------------------------------------------------------------
-- Buchungen (eine Zeile je sevDesk-Beleg/Transaktion; arbiträre Zeiträume möglich)
-- ----------------------------------------------------------------------------
create table if not exists public.finance_bookings (
  id            uuid primary key default gen_random_uuid(),
  booking_date  date not null,
  account_code  text not null references public.finance_accounts(code),
  description   text,
  amount_net    numeric(14,2) not null default 0,
  amount_tax    numeric(14,2) not null default 0,
  amount_gross  numeric(14,2) generated always as (amount_net + amount_tax) stored,
  tax_rate      numeric(4,1) not null default 0,
  direction     app.finance_direction not null,
  source        app.finance_source not null default 'sevdesk',
  source_ref    text,                            -- sevDesk-Beleg-ID (für Dedupe)
  sync_run_id   uuid,
  created_at    timestamptz not null default now(),
  created_by    uuid,
  updated_at    timestamptz not null default now(),
  updated_by    uuid,
  deleted_at    timestamptz
);

-- Dedupe: derselbe externe Beleg darf nur einmal existieren.
-- Vollständiger (nicht partieller) Unique-Index, damit ON CONFLICT (source,
-- source_ref) im Upsert sicher inferiert werden kann. NULL source_ref (z. B.
-- manuelle Buchungen) gelten als verschieden (NULLs sind distinct).
create unique index if not exists uq_finance_booking_source
  on public.finance_bookings(source, source_ref);

create index if not exists idx_finance_bookings_date    on public.finance_bookings(booking_date) where deleted_at is null;
create index if not exists idx_finance_bookings_account on public.finance_bookings(account_code) where deleted_at is null;

drop trigger if exists trg_finance_bookings_updated_at on public.finance_bookings;
create trigger trg_finance_bookings_updated_at before update on public.finance_bookings
  for each row execute function app.set_updated_at();

-- ----------------------------------------------------------------------------
-- sevDesk-Sync-Läufe (Protokoll)
-- ----------------------------------------------------------------------------
create table if not exists public.sevdesk_sync_runs (
  id            uuid primary key default gen_random_uuid(),
  from_date     date not null,
  to_date       date not null,
  status        app.sync_status not null default 'running',
  inserted_count int not null default 0,
  updated_count  int not null default 0,
  error         text,
  triggered_by  uuid,
  started_at    timestamptz not null default now(),
  finished_at   timestamptz
);

create index if not exists idx_sync_runs_started on public.sevdesk_sync_runs(started_at desc);

-- Audit aktivieren
select app.enable_audit('public.finance_bookings');
select app.enable_audit('public.finance_accounts');

-- ============================================================================
-- Aggregations-RPC: Kennzahlen für beliebige Zeiträume (serverseitig geprüft)
-- ============================================================================
create or replace function public.finance_summary(p_from date, p_to date)
returns jsonb
language plpgsql
stable
security definer
set search_path = public, app
as $$
declare
  result jsonb;
begin
  if not public.auth_has_permission('finance.view') then
    raise exception 'Keine Berechtigung für Finanzdaten' using errcode = '42501';
  end if;
  if p_to < p_from then
    raise exception 'Ungültiger Zeitraum';
  end if;

  with b as (
    select * from public.finance_bookings
    where deleted_at is null and booking_date between p_from and p_to
  ),
  by_account as (
    select b.account_code,
           a.name,
           a.direction,
           sum(b.amount_net)   as net,
           sum(b.amount_tax)   as tax,
           sum(b.amount_gross) as gross
    from b join public.finance_accounts a on a.code = b.account_code
    group by b.account_code, a.name, a.direction
  )
  select jsonb_build_object(
    'from', p_from,
    'to',   p_to,
    'revenue_net_7',  coalesce((select sum(net) from b where direction='revenue' and tax_rate=7),0),
    'revenue_net_19', coalesce((select sum(net) from b where direction='revenue' and tax_rate=19),0),
    'revenue_net',    coalesce((select sum(net) from b where direction='revenue'),0),
    'expense_net',    coalesce((select sum(net) from b where direction='expense'),0),
    'result_net',     coalesce((select sum(net) from b where direction='revenue'),0)
                      - coalesce((select sum(net) from b where direction='expense'),0),
    'vat_collected',  coalesce((select sum(tax) from b where direction='revenue'),0),
    'vat_paid',       coalesce((select sum(tax) from b where direction='expense'),0),
    'accounts', coalesce((
      select jsonb_agg(jsonb_build_object(
        'code', account_code, 'name', name, 'direction', direction,
        'net', net, 'tax', tax, 'gross', gross
      ) order by account_code)
      from by_account
    ), '[]'::jsonb)
  ) into result;

  return result;
end;
$$;

comment on function public.finance_summary(date, date) is
  'Aggregierte Finanzkennzahlen für einen Zeitraum; prüft finance.view serverseitig.';

-- ============================================================================
-- RLS
-- ============================================================================
alter table public.finance_accounts   enable row level security;
alter table public.finance_bookings   enable row level security;
alter table public.sevdesk_sync_runs  enable row level security;

-- Konten: lesbar mit finance.view; Pflege durch Admin.
drop policy if exists fin_acc_read on public.finance_accounts;
create policy fin_acc_read on public.finance_accounts
  for select to authenticated
  using (public.auth_has_permission('finance.view'));
drop policy if exists fin_acc_write on public.finance_accounts;
create policy fin_acc_write on public.finance_accounts
  for all to authenticated
  using (public.is_admin()) with check (public.is_admin());

-- Buchungen: nur lesbar mit finance.view. Schreiben ausschließlich serverseitig
-- (Edge Function mit Service-Role) -> keine Client-Schreibrichtlinie. Kein DELETE.
drop policy if exists fin_book_read on public.finance_bookings;
create policy fin_book_read on public.finance_bookings
  for select to authenticated
  using (public.auth_has_permission('finance.view'));

-- Sync-Läufe: lesbar mit finance.view.
drop policy if exists fin_sync_read on public.sevdesk_sync_runs;
create policy fin_sync_read on public.sevdesk_sync_runs
  for select to authenticated
  using (public.auth_has_permission('finance.view'));
