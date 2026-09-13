-- 0052 — Finanz-Etappe 2 (Vorbereitung): Bilanz-Snapshots für
-- Liquidität 1/2/3, EK-Quote und ROI.
--
-- Datenquelle heute: manuelle Erfassung durch Gesellschafter (Formular im
-- Finanzdashboard). Sobald der sevDesk-API-Token als Secret hinterlegt
-- ist, schreibt der sevdesk-sync dieselben Zeilen mit source='sevdesk'
-- und überschreibt den manuellen Stand zum jeweiligen Stichtag.
--
-- Sichtbarkeit: ausschließlich Gesellschafter/System-Admin (RLS).
-- Schreiben nur über die security-definer-RPC (Rollencheck + Audit).

create table if not exists public.finance_balance_snapshots (
  id                    uuid primary key default gen_random_uuid(),
  as_of                 date not null unique,
  -- Aktiva
  cash_and_bank         numeric(12,2) not null default 0, -- flüssige Mittel
  receivables           numeric(12,2) not null default 0, -- kurzfr. Forderungen
  inventory_value       numeric(12,2) not null default 0, -- Vorräte
  other_current_assets  numeric(12,2) not null default 0,
  fixed_assets          numeric(12,2) not null default 0, -- Anlagevermögen
  -- Passiva
  current_liabilities   numeric(12,2) not null default 0, -- kurzfristig
  long_term_liabilities numeric(12,2) not null default 0,
  equity                numeric(12,2) not null default 0, -- Eigenkapital
  source                text not null default 'manual'
                          check (source in ('manual', 'sevdesk')),
  created_by            uuid,
  created_at            timestamptz not null default now(),
  updated_at            timestamptz not null default now()
);

select app.enable_audit('public.finance_balance_snapshots');

alter table public.finance_balance_snapshots enable row level security;

drop policy if exists fbs_select on public.finance_balance_snapshots;
create policy fbs_select on public.finance_balance_snapshots
  for select to authenticated
  using (
    exists (
      select 1 from public.profiles p
      where p.id = auth.uid() and p.role in ('system_admin', 'shareholder')
    )
  );

-- ── Upsert (nur Gesellschafter/Admin, per Stichtag idempotent) ─────────
create or replace function public.upsert_finance_balance(
  p_as_of date,
  p_cash_and_bank numeric,
  p_receivables numeric,
  p_inventory_value numeric,
  p_other_current_assets numeric,
  p_fixed_assets numeric,
  p_current_liabilities numeric,
  p_long_term_liabilities numeric,
  p_equity numeric
)
returns public.finance_balance_snapshots
language plpgsql
security definer
set search_path = public, app
as $$
declare
  v_row public.finance_balance_snapshots;
begin
  if not exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role in ('system_admin', 'shareholder')
  ) then
    raise exception 'Nicht autorisiert' using errcode = '42501';
  end if;

  insert into public.finance_balance_snapshots as f
    (as_of, cash_and_bank, receivables, inventory_value,
     other_current_assets, fixed_assets, current_liabilities,
     long_term_liabilities, equity, source, created_by)
  values
    (p_as_of, coalesce(p_cash_and_bank, 0), coalesce(p_receivables, 0),
     coalesce(p_inventory_value, 0), coalesce(p_other_current_assets, 0),
     coalesce(p_fixed_assets, 0), coalesce(p_current_liabilities, 0),
     coalesce(p_long_term_liabilities, 0), coalesce(p_equity, 0),
     'manual', auth.uid())
  on conflict (as_of) do update set
    cash_and_bank = excluded.cash_and_bank,
    receivables = excluded.receivables,
    inventory_value = excluded.inventory_value,
    other_current_assets = excluded.other_current_assets,
    fixed_assets = excluded.fixed_assets,
    current_liabilities = excluded.current_liabilities,
    long_term_liabilities = excluded.long_term_liabilities,
    equity = excluded.equity,
    source = 'manual',
    updated_at = now()
  returning * into v_row;

  return v_row;
end;
$$;

-- ── Kennzahlen des jüngsten Snapshots ──────────────────────────────────
-- Liquidität 1 = flüssige Mittel / kurzfr. Verbindlichkeiten
-- Liquidität 2 = (flüssig + Forderungen) / kurzfr. Verbindlichkeiten
-- Liquidität 3 = gesamtes Umlaufvermögen / kurzfr. Verbindlichkeiten
-- EK-Quote     = Eigenkapital / Bilanzsumme
create or replace function public.finance_balance_kpis()
returns jsonb
language plpgsql
stable
security definer
set search_path = public, app
as $$
declare
  s public.finance_balance_snapshots;
  v_total_assets numeric;
  v_current_assets numeric;
begin
  if not exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role in ('system_admin', 'shareholder')
  ) then
    raise exception 'Nicht autorisiert' using errcode = '42501';
  end if;

  select * into s
  from public.finance_balance_snapshots
  order by as_of desc
  limit 1;

  if not found then
    return jsonb_build_object('has_data', false);
  end if;

  v_current_assets := s.cash_and_bank + s.receivables
    + s.inventory_value + s.other_current_assets;
  v_total_assets := v_current_assets + s.fixed_assets;

  return jsonb_build_object(
    'has_data', true,
    'as_of', s.as_of,
    'source', s.source,
    'cash_and_bank', s.cash_and_bank,
    'receivables', s.receivables,
    'inventory_value', s.inventory_value,
    'other_current_assets', s.other_current_assets,
    'fixed_assets', s.fixed_assets,
    'current_liabilities', s.current_liabilities,
    'long_term_liabilities', s.long_term_liabilities,
    'equity', s.equity,
    'total_assets', v_total_assets,
    'liquidity1_pct', case when s.current_liabilities > 0
      then round(s.cash_and_bank / s.current_liabilities * 100, 1) end,
    'liquidity2_pct', case when s.current_liabilities > 0
      then round((s.cash_and_bank + s.receivables)
        / s.current_liabilities * 100, 1) end,
    'liquidity3_pct', case when s.current_liabilities > 0
      then round(v_current_assets / s.current_liabilities * 100, 1) end,
    'equity_ratio_pct', case when v_total_assets > 0
      then round(s.equity / v_total_assets * 100, 1) end
  );
end;
$$;

-- 0046: Funktionen bekommen execute nicht mehr automatisch.
grant execute on function public.upsert_finance_balance(
  date, numeric, numeric, numeric, numeric, numeric, numeric, numeric, numeric
) to authenticated, service_role;
grant execute on function public.finance_balance_kpis()
  to authenticated, service_role;
