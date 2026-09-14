-- Deaktivierungs-RPCs für Coupons.
--
-- Wochenangebote:  offer_activations-Zeile hart löschen, damit der Kunde
--                  wieder den gelben "Aktivieren"-Button sieht. Redeemed
--                  (redeemed_at IS NOT NULL) darf NICHT deaktiviert werden.
-- Personal:        activated_at zurück auf NULL setzen. Redeemed dito
--                  gesperrt.

create or replace function public.deactivate_offer(p_offer_id uuid)
returns void
language plpgsql
security definer
set search_path = public, app
as $$
begin
  delete from public.offer_activations
    where customer_id = auth.uid()
      and offer_id = p_offer_id
      and redeemed_at is null;
end;
$$;

create or replace function public.deactivate_personal_offer(p_offer_id uuid)
returns public.personal_offers
language plpgsql
security definer
set search_path = public, app
as $$
declare v_row public.personal_offers;
begin
  update public.personal_offers
    set activated_at = null
    where id = p_offer_id
      and customer_id = auth.uid()
      and redeemed_at is null
    returning * into v_row;
  return v_row;
end;
$$;

grant execute on function public.deactivate_offer(uuid) to authenticated;
grant execute on function public.deactivate_personal_offer(uuid) to authenticated;
