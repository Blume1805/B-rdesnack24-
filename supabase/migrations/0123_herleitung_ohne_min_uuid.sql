-- ============================================================================
-- 0123 · Herleitung ohne min(uuid)
-- ----------------------------------------------------------------------------
-- Sofortkorrektur zu 0122, wenige Minuten später. Die dortige Herleitung
-- benutzte `min(bl.business_id)`, um bei genau einem Treffer die Firma zu
-- greifen. `min()` gibt es für `uuid` in PostgreSQL nicht:
--
--     ERROR: 42883: function min(uuid) does not exist
--
-- Das war nicht bloss unschön, sondern ein Ausfall: Die Herleitung läuft bei
-- JEDEM Kauf, der einen Automaten nennt — also bei jedem echten Kauf. Solange
-- 0122 unkorrigiert stand, liess sich in `purchases` nichts einfügen. Gefunden
-- hat es der Nachweis beim ersten Testkauf, nicht das Nachlesen.
--
-- Ersetzt durch `array_agg(distinct …)`: Das gibt es für `uuid`, es liefert
-- die Zahl der Treffer über `array_length` und den Wert über `[1]` — beides
-- aus einer Abfrage, ohne zweiten Durchlauf.
-- ============================================================================

create or replace function app.purchase_business_pruefen()
returns trigger
language plpgsql
set search_path = public, app
as $fn$
declare
  v_firmen uuid[];
begin
  -- ── Schritt 1: Herleiten ────────────────────────────────────────────────
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

    -- Zwei Firmen am selben Ort, in denen dieselbe Person Mitglied ist:
    -- Dann ist nicht entscheidbar, wer die Rechnung trägt. Lieber abbrechen
    -- als würfeln — eine falsche Rechnung fällt niemandem auf.
    if array_length(v_firmen, 1) > 1 then
      raise exception
        'Kauf lässt sich nicht eindeutig zuordnen: % Firmen teilen sich den '
        'Standort dieses Automaten, und % ist in mehreren aktives Mitglied.',
        array_length(v_firmen, 1), new.customer_id
        using errcode = 'check_violation';
    end if;

    if v_firmen is not null then
      new.business_id := v_firmen[1];
    end if;
  end if;

  -- ── Schritt 2: Prüfen ───────────────────────────────────────────────────
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
      'Kauf % kann der Firma % nicht zugeordnet werden: % ist dort kein '
      'aktives Mitglied.', new.id, new.business_id, new.customer_id
      using errcode = 'check_violation';
  end if;

  return new;
end;
$fn$;
