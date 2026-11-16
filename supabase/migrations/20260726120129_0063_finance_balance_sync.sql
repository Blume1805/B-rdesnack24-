create or replace function public.upsert_finance_balance_synced(
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
  insert into public.finance_balance_snapshots as f
    (as_of, cash_and_bank, receivables, inventory_value,
     other_current_assets, fixed_assets, current_liabilities,
     long_term_liabilities, equity, source, created_by)
  values
    (p_as_of, coalesce(p_cash_and_bank, 0), coalesce(p_receivables, 0),
     coalesce(p_inventory_value, 0), coalesce(p_other_current_assets, 0),
     coalesce(p_fixed_assets, 0), coalesce(p_current_liabilities, 0),
     coalesce(p_long_term_liabilities, 0), coalesce(p_equity, 0),
     'sevdesk', null)
  on conflict (as_of) do update set
    cash_and_bank = excluded.cash_and_bank,
    receivables = excluded.receivables,
    inventory_value = excluded.inventory_value,
    other_current_assets = excluded.other_current_assets,
    fixed_assets = excluded.fixed_assets,
    current_liabilities = excluded.current_liabilities,
    long_term_liabilities = excluded.long_term_liabilities,
    equity = excluded.equity,
    source = 'sevdesk',
    updated_at = now()
  returning * into v_row;

  return v_row;
end;
$$;

revoke all on function public.upsert_finance_balance_synced(
  date, numeric, numeric, numeric, numeric, numeric, numeric, numeric, numeric
) from public, authenticated, anon;
grant execute on function public.upsert_finance_balance_synced(
  date, numeric, numeric, numeric, numeric, numeric, numeric, numeric, numeric
) to service_role;
