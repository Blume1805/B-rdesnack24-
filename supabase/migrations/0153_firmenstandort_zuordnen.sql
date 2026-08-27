-- ============================================================================
-- 0153 — Den Automaten der Firma zuordnen
-- ----------------------------------------------------------------------------
-- Gefunden am 27.08.2026 beim Durchspielen des Ablaufs mit der Muster GmbH.
--
-- Ein Kauf wird zum Firmenkauf, weil der Automat auf dem Gelände der Firma
-- steht. Die Herleitung (0122, überarbeitet in 0123) verlangt dafür drei
-- Dinge:
--
--   1. der Ort ist als Firmengelände gekennzeichnet (`locations.kind =
--      'business'`),
--   2. der Ort ist der Firma zugeordnet (`business_locations`),
--   3. die kaufende Person ist dort aktives Mitglied.
--
-- Punkt 3 entsteht über die Einladung. Punkt 1 und 2 entstanden bisher
-- **nirgends**: Es gibt in der App keinen Bildschirm für Orte (nachgesehen:
-- `from('locations')` kommt in `apps/mobile/lib` kein einziges Mal vor), und
-- keine Funktion, die eine Zuordnung anlegt. Alle vier Orte im Bestand sind
-- `kind = 'public'`.
--
-- Damit endete der Ablauf vor dem ersten Firmenkauf: Einladen, Budget,
-- Abrechnung und Rechnung sind gebaut und geprüft — nur konnte nie ein Kauf
-- entstehen, den sie hätten abrechnen können.
--
-- ----------------------------------------------------------------------------
-- Warum das Verknüpfen die Art des Ortes mitändert
--
-- Ein Ort ist ein Ort. Steht der Automat auf dem Betriebsgelände eines
-- Kunden, dann IST das Firmengelände — eine zweite Einstellung daneben wäre
-- nur eine weitere Stelle, an der sich beides widersprechen kann. Wer
-- verknüpft, sagt damit beides; die Oberfläche schreibt es dazu.
--
-- Beim Lösen bleibt die Art stehen. Das Gelände hört nicht auf, Firmengelände
-- zu sein, nur weil ein Vertrag endet — und ein automatisches Zurücksetzen
-- auf „öffentlich" würde einen Automaten stillschweigend wieder für alle
-- freigeben. Wer das will, sagt es ausdrücklich.
--
-- ----------------------------------------------------------------------------
-- Was sich dadurch NICHT ändert
--
-- `locations.kind` wird ausserhalb der Herleitung nur an einer Stelle
-- gelesen: in `advertising_overview` als Anzeigewert. Kein Kundenbildschirm,
-- keine Preisfindung und keine Auswertung hängen daran (über alle
-- Migrationen und den Flutter-Quelltext geprüft).
-- ============================================================================

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
    -- Ein Ort gehört zu einer Firma. Zwei Firmen am selben Ort liessen die
    -- Herleitung abbrechen (0123), sobald jemand in beiden Mitglied ist —
    -- besser hier abweisen als später beim Kauf.
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
  'Ordnet einen Standort einem Firmenkunden zu (und kennzeichnet ihn als '
  'Firmengelände) oder löst die Zuordnung. Ohne diese Zuordnung entsteht am '
  'Automaten kein Firmenkauf (0153).';

-- ----------------------------------------------------------------------------
-- Die Liste für den Bildschirm
-- ----------------------------------------------------------------------------
-- Alle Orte, nicht nur die zugeordneten: Der Bildschirm soll auch anbieten
-- können, was noch nicht verknüpft ist. Die Zahl der Automaten steht dabei,
-- weil ein Firmenstandort ohne Automaten nichts bewirkt — und das sonst
-- niemandem auffällt.
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
  'Alle Standorte mit dem Kennzeichen, ob sie diesem Firmenkunden zugeordnet '
  'sind. Die Zahl der Automaten steht dabei: ein Firmenstandort ohne '
  'Automaten bewirkt nichts.';
