-- Demo-Kauf-RPC: legt für den angemeldeten Kunden eine Test-Purchase mit
-- gewählter payment_method an. Wird von der Stammdaten-Seite aufgerufen,
-- damit der Kunde Payment-Icon und (bei Business) PDF-Download prüfen kann.
create or replace function public.dev_add_demo_purchase(
  p_payment_method text default 'card_ec',
  p_total_gross numeric default 4.99
)
returns public.purchases
language plpgsql
security definer
set search_path = public, app
as $$
declare v_row public.purchases;
        v_valid app.payment_method;
begin
  if auth.uid() is null then raise exception 'Anmeldung erforderlich'; end if;
  begin
    v_valid := p_payment_method::app.payment_method;
  exception when others then
    v_valid := 'card_ec';
  end;

  insert into public.purchases(
    customer_id, machine_id, total_gross, purchased_at,
    source, payment_method
  )
  values (auth.uid(), null, coalesce(p_total_gross, 4.99), now(),
          'manual', v_valid)
  returning * into v_row;
  return v_row;
end;
$$;

grant execute on function public.dev_add_demo_purchase(text, numeric) to authenticated;
