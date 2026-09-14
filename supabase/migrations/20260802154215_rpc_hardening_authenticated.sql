alter function public.list_partner_signatures() security invoker;
alter function public.list_document_folders() security invoker;

revoke execute on function public.next_invoice_number() from public, anon, authenticated;
revoke execute on function public.create_invoice_for_purchase(uuid) from public, anon, authenticated;
revoke execute on function public.run_daily_special_offers() from public, anon, authenticated;
revoke execute on function public.generate_weekly_offers(integer) from public, anon, authenticated;
revoke execute on function public.generate_daily_offers(integer) from public, anon, authenticated;
revoke execute on function public.grant_birthday_offer(uuid) from public, anon, authenticated;
revoke execute on function public.grant_anniversary_offer(uuid) from public, anon, authenticated;

grant execute on function public.next_invoice_number() to service_role;
grant execute on function public.create_invoice_for_purchase(uuid) to service_role;
grant execute on function public.run_daily_special_offers() to service_role;
grant execute on function public.generate_weekly_offers(integer) to service_role;
grant execute on function public.generate_daily_offers(integer) to service_role;
grant execute on function public.grant_birthday_offer(uuid) to service_role;
grant execute on function public.grant_anniversary_offer(uuid) to service_role;

create or replace function public.generate_personal_offer(p_customer_id uuid)
returns public.personal_offers
language plpgsql
security definer
set search_path to 'public', 'app'
as $function$
declare
  v_existing public.personal_offers;
  v_product public.products%rowtype;
  v_new public.personal_offers;
  v_regular numeric(12,2);
  v_offer   numeric(12,2);
begin
  if p_customer_id is distinct from auth.uid()
     and not public.is_internal(auth.uid()) then
    raise exception 'Nicht autorisiert' using errcode = '42501';
  end if;

  if not exists (select 1 from public.customers where id = p_customer_id) then
    raise exception 'Kunde nicht gefunden';
  end if;

  select * into v_existing
  from public.personal_offers
  where customer_id = p_customer_id and redeemed_at is null
  limit 1;
  if found then
    return v_existing;
  end if;

  select p.* into v_product
  from public.products p
  join public.purchase_items pi on pi.product_id = p.id
  join public.purchases pu       on pu.id = pi.purchase_id
  where pu.customer_id = p_customer_id
    and pu.purchased_at > now() - interval '90 days'
    and p.status = 'active' and p.list_price_net is not null
  group by p.id
  order by sum(pi.quantity) desc, random()
  limit 1;

  if not found then
    select * into v_product
    from public.products
    where status = 'active' and list_price_net is not null and list_price_net > 0
    order by random()
    limit 1;
  end if;

  if not found then
    raise exception 'Kein Produkt für individuelles Angebot gefunden';
  end if;

  v_regular := v_product.list_price_net;
  v_offer   := round(v_regular * 0.90, 2);

  insert into public.personal_offers(
    customer_id, product_id, title,
    regular_price_net, offer_price_net, discount_percent,
    redemption_code, valid_from, valid_to, image_url
  ) values (
    p_customer_id, v_product.id, v_product.name,
    v_regular, v_offer, 10.0,
    app.generate_redemption_code(),
    now(), now() + interval '3 days', v_product.image_url
  )
  returning * into v_new;

  return v_new;
end;
$function$;

revoke execute on function public.generate_personal_offer(uuid) from public, anon;
grant execute on function public.generate_personal_offer(uuid) to authenticated, service_role;
