-- R-11 aus dem Audit vom 31.08.2026.
--
-- business_locations_list() lieferte JEDEM Firmen-Administrator ALLE Standorte
-- -- auch die anderer Firmenkunden, samt deren Namen im Feld fremde_firma.
-- Fuer die interne Zuordnungsmaske ist genau das noetig: Wer einen Standort
-- vergibt, muss sehen, dass er schon belegt ist und von wem. Fuer einen
-- Firmenkunden ist es eine Aussage ueber einen Dritten und geht ihn nichts an.
--
-- Behoben ueber eine Verzweigung im Rumpf statt ueber eine zweite Funktion:
-- Das bestehende Frontend ruft weiterhin denselben Namen mit demselben
-- Parameter auf und bricht nicht. Interne Aufrufer bekommen unveraendert die
-- volle Sicht, Firmenkunden nur noch ihre eigenen Standorte.
--
-- Das Frontend filtert zusaetzlich auf zugeordnet === true. Diese doppelte
-- Absicherung bleibt bewusst bestehen: Die Datenbank ist die Zusage, das
-- Frontend nur die Anzeige.

create or replace function public.business_locations_list(p_business uuid)
returns jsonb
language plpgsql
stable security definer
set search_path to 'public', 'app'
as $function$
declare
  ergebnis jsonb;
  v_intern boolean;
begin
  v_intern := public.is_admin() or public.auth_has_permission('businesses.manage');

  if not (app.is_business_member(p_business, 'admin') or v_intern) then
    raise exception 'Keine Berechtigung für diesen Firmenkunden'
      using errcode = '42501';
  end if;

  if v_intern then
    -- Interne Zuordnungsmaske: volle Sicht, inklusive Fremdbelegung.
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
  else
    -- Firmenkundensicht: ausschliesslich eigene Standorte, keine Aussage
    -- darueber, welche anderen Standorte es gibt oder wem sie gehoeren.
    select coalesce(jsonb_agg(jsonb_build_object(
             'id', l.id,
             'name', l.name,
             'ort', l.city,
             'art', l.kind::text,
             'automaten', (select count(*) from public.machines m
                           where m.location_id = l.id and m.deleted_at is null),
             'zugeordnet', true
           ) order by l.name), '[]'::jsonb)
    into ergebnis
    from public.locations l
    join public.business_locations bl
      on bl.location_id = l.id and bl.business_id = p_business
    where l.deleted_at is null;
  end if;

  return ergebnis;
end;
$function$;

comment on function public.business_locations_list(uuid) is
  'Standorte eines Firmenkunden. Interne Aufrufer (is_admin oder '
  'businesses.manage) sehen alle Standorte inklusive Fremdbelegung und '
  'fremder Firmennamen -- das braucht die Zuordnungsmaske. Ein Firmen-'
  'Administrator sieht ausschliesslich die eigenen Standorte, ohne jede '
  'Aussage ueber andere Firmenkunden (Audit R-11).';
