create or replace function app.purchase_business_pruefen()
returns trigger
language plpgsql
set search_path = public, app
as $fn$
declare
  v_firmen uuid[];
begin
  if new.business_id is null and new.machine_id is not null then
    select array_agg(distinct bl.business_id)
      into v_firmen
    from public.machines m
    join public.locations l           on l.id = m.location_id
    join public.business_locations bl on bl.location_id = l.id
    join public.business_members bm
      on bm.business_id = bl.business_id
     and bm.profile_id  = new.customer_id
     and bm.status      = 'active'
    where m.id = new.machine_id
      and l.kind = 'business'
      and l.deleted_at is null;

    if array_length(v_firmen, 1) > 1 then
      raise exception
        'Kauf lässt sich nicht eindeutig zuordnen: % Firmen teilen sich den Standort dieses Automaten, und % ist in mehreren aktives Mitglied.',
        array_length(v_firmen, 1), new.customer_id
        using errcode = 'check_violation';
    end if;

    if v_firmen is not null then
      new.business_id := v_firmen[1];
    end if;
  end if;

  if new.business_id is null then
    return new;
  end if;

  if tg_op = 'UPDATE' and new.business_id is not distinct from old.business_id then
    return new;
  end if;

  if not exists (
    select 1 from public.business_members m
    where m.business_id = new.business_id
      and m.profile_id  = new.customer_id
      and m.status      = 'active'
  ) then
    raise exception
      'Kauf % kann der Firma % nicht zugeordnet werden: % ist dort kein aktives Mitglied.',
      new.id, new.business_id, new.customer_id
      using errcode = 'check_violation';
  end if;

  return new;
end;
$fn$;
