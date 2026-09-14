create or replace function public.business_locations_list(p_business uuid)
returns jsonb
language plpgsql
stable
security definer
set search_path to 'public', 'app'
as $fn_b$
declare
  ergebnis jsonb;
begin
  if not (app.is_business_member(p_business, 'admin') or public.is_admin()
          or public.auth_has_permission('businesses.manage')) then
    raise exception 'Keine Berechtigung für diesen Firmenkunden'
      using errcode = '42501';
  end if;

  select coalesce(jsonb_agg(jsonb_build_object(
           'id', l.id,
           'name', l.name,
           'ort', l.city,
           'art', l.kind::text,
           'automaten', (select count(*) from public.machines m
                         where m.location_id = l.id and m.deleted_at is null),
           'zugeordnet', bl.business_id is not null,
           'fremd', bl2.business_id is not null,
           'fremde_firma', fb.name
         ) order by (bl.business_id is null), l.name), '[]'::jsonb)
  into ergebnis
  from public.locations l
  left join public.business_locations bl
    on bl.location_id = l.id and bl.business_id = p_business
  left join public.business_locations bl2
    on bl2.location_id = l.id and bl2.business_id <> p_business
  left join public.businesses fb on fb.id = bl2.business_id
  where l.deleted_at is null;

  return ergebnis;
end;
$fn_b$;

revoke all on function public.business_locations_list(uuid) from public;
grant execute on function public.business_locations_list(uuid) to authenticated;

comment on function public.business_locations_list(uuid) is
  'Alle Standorte mit dem Kennzeichen, ob sie diesem Firmenkunden zugeordnet sind. Die Zahl der Automaten steht dabei: ein Firmenstandort ohne Automaten bewirkt nichts.';
