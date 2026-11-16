create or replace function public.generate_daily_offers(p_count int default 2)
returns setof public.offers
language plpgsql
security definer
set search_path = public, app
as $$
declare
  v_bias  text := app.weather_bias(current_date);
  v_title text;
  v_note  text;
  rec     record;
  v_reg   numeric(12,4);
  v_off   numeric(12,4);
begin
  -- SECURITY DEFINER + EXECUTE für 'authenticated' hieße sonst: jeder
  -- eingeloggte Kunde könnte den Tages-Deal per REST beliebig neu würfeln,
  -- bis ihm der Preis passt. auth.uid() is null = Aufruf aus dem Cron
  -- (kein JWT) und damit erlaubt.
  if auth.uid() is not null
     and not (public.is_admin() or public.auth_has_permission('offers.manage'))
  then
    raise exception 'Keine Berechtigung für generate_daily_offers';
  end if;

  delete from public.offers
   where kind = 'daily' and valid_from = current_date;

  v_title := case v_bias
    when 'cold' then 'Hitze-Deal'
    when 'hot'  then 'Aufwärm-Deal'
    else 'Tages-Deal'
  end;
  v_note := case v_bias
    when 'cold' then 'Heute wird''s warm — 10 % auf die Abkühlung.'
    when 'hot'  then 'Heute wird''s frisch — 10 % auf was Warmes.'
    else 'Heute 10 % Rabatt.'
  end;

  for rec in (
    select p.id, p.name, p.list_price_net, p.image_url
      from public.products p
     where p.status = 'active'
       and p.list_price_net is not null
       and p.list_price_net > 0
     order by
       case
         when v_bias <> 'neutral' and p.serve_temp = v_bias then 0
         when p.serve_temp = 'neutral'                      then 1
         else 2
       end,
       random()
     limit greatest(p_count, 1)
  ) loop
    v_reg := rec.list_price_net;
    v_off := round(v_reg * 0.90, 4);
    return query
      insert into public.offers(
        title, description, kind, valid_from, valid_to,
        product_id, regular_price_net, offer_price_net, discount_percent, image_url
      ) values (
        format('%s: %s', v_title, rec.name),
        v_note,
        'daily',
        current_date, current_date,
        rec.id, v_reg, v_off, 10.0, rec.image_url
      )
      returning *;
  end loop;
end;
$$;
