create or replace function public.business_location_set(
  p_business    uuid,
  p_location    uuid,
  p_zuordnen    boolean default true
)
returns jsonb
language plpgsql
security definer
set search_path to 'public', 'app'
as $fn_a$
declare
  v_name text;
  v_art  text;
begin
  if not (public.is_admin() or public.auth_has_permission('businesses.manage')) then
    raise exception 'Keine Berechtigung, Firmenstandorte zu ändern'
      using errcode = '42501';
  end if;

  select l.name into v_name
  from public.locations l
  where l.id = p_location and l.deleted_at is null;
  if v_name is null then
    raise exception 'Standort nicht gefunden' using errcode = 'P0002';
  end if;
  if not exists (select 1 from public.businesses b
                 where b.id = p_business and b.deleted_at is null) then
    raise exception 'Firmenkunde nicht gefunden' using errcode = 'P0002';
  end if;

  if p_zuordnen then
    if exists (select 1 from public.business_locations bl
               where bl.location_id = p_location and bl.business_id <> p_business) then
      raise exception
        'Dieser Standort ist bereits einem anderen Firmenkunden zugeordnet.'
        using errcode = '23505';
    end if;

    update public.locations
       set kind = 'business', updated_by = auth.uid()
     where id = p_location and kind <> 'business';

    insert into public.business_locations (business_id, location_id)
    values (p_business, p_location)
    on conflict (business_id, location_id) do nothing;
  else
    delete from public.business_locations
     where business_id = p_business and location_id = p_location;
  end if;

  select l.kind::text into v_art from public.locations l where l.id = p_location;

  return jsonb_build_object(
    'location_id', p_location,
    'name', v_name,
    'art', v_art,
    'zugeordnet', p_zuordnen);
end;
$fn_a$;

revoke all on function public.business_location_set(uuid, uuid, boolean) from public;
grant execute on function public.business_location_set(uuid, uuid, boolean) to authenticated;

comment on function public.business_location_set(uuid, uuid, boolean) is
  'Ordnet einen Standort einem Firmenkunden zu (und kennzeichnet ihn als Firmengelände) oder löst die Zuordnung. Ohne diese Zuordnung entsteht am Automaten kein Firmenkauf (0153).';
