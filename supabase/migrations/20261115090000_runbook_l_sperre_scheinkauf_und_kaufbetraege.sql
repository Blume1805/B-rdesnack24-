-- Runbook L, Schritt 1, Teil für den Stand der Produktion vom 10.09.2026
-- (bar_soll existiert dort nicht). Befunde B-1 und B-2 vom 26.09.2026.
-- Entzieht nur Aufrufrechte. Keine Daten, keine Funktion wird geändert.
revoke execute on function public.dev_add_demo_purchase(text, numeric)
  from public, anon, authenticated;

do $$
begin
  if to_regprocedure('public.purchase_net_items(uuid, numeric)') is not null then
    revoke execute on function public.purchase_net_items(uuid, numeric)
      from public, anon, authenticated;
  end if;
  if to_regprocedure('public.purchase_donation_for(uuid, numeric)') is not null then
    revoke execute on function public.purchase_donation_for(uuid, numeric)
      from public, anon, authenticated;
  end if;
end $$;
