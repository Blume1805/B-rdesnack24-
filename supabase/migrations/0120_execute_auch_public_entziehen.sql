-- ============================================================================
-- 0120 · EXECUTE auch PUBLIC entziehen
-- ----------------------------------------------------------------------------
-- Nachbesserung zu 0119, am selben Tag. Der Entzug dort war unvollständig,
-- und der Nachweis hat es gefunden — nicht das Nachdenken.
--
-- 0119 entzog EXECUTE im Schema `app` von `anon` und `authenticated`. Danach
-- wurde geprüft, ob ein angemeldeter Kunde noch eine fremde Prämienvergabe
-- auslösen kann. Ergebnis:
--
--   fremde Gutscheinvergabe (grant_loyalty_bonuses)  → abgewiesen
--   fremde Prämienvergabe   (grant_challenge_rewards) → GING DURCH
--
-- Der Blick in `pg_proc.proacl` erklärt den Unterschied:
--
--   grant_loyalty_bonuses    postgres=X/postgres, service_role=X/postgres
--   grant_challenge_rewards  =X/postgres, postgres=X/postgres, service_role=X/postgres
--
-- Der Eintrag `=X/postgres` ohne Rollennamen davor ist **PUBLIC**. PostgreSQL
-- vergibt EXECUTE auf jede neue Funktion automatisch an PUBLIC, und PUBLIC
-- schliesst jede Rolle ein — auch `anon` und `authenticated`. Ein `revoke …
-- from anon, authenticated` nimmt dieses Recht NICHT weg; es entfernt nur
-- rollenbezogene Einträge, die hier gar nicht existierten.
--
-- `grant_loyalty_bonuses` war unauffällig, weil eine frühere Migration dort
-- bereits von PUBLIC entzogen hatte. Die in dieser Sitzung entstandenen
-- Funktionen (0117, 0118) und `qualify_referral_for` trugen es noch.
--
-- Lehre für die Migration selbst: „von anon und authenticated entziehen"
-- klingt vollständig und ist es bei Funktionen nie. Bei Tabellen stimmt es —
-- dort vergibt PostgreSQL nichts an PUBLIC. Bei Funktionen schon.
-- ============================================================================

do $$
declare
  r record;
  v_anzahl int := 0;
begin
  for r in
    select p.oid::regprocedure as sig
    from pg_proc p
    where p.pronamespace = 'app'::regnamespace
      and p.prokind = 'f'
  loop
    -- Diesmal ohne Ausnahme UND einschliesslich PUBLIC.
    execute format('revoke execute on function %s from public, anon, authenticated', r.sig);
    v_anzahl := v_anzahl + 1;
  end loop;
  raise notice 'EXECUTE (inkl. PUBLIC) auf % Funktionen in app entzogen.', v_anzahl;
end;
$$;

-- Und danach die eine Ausnahme wieder ausdrücklich setzen.
--
-- Der erste Anlauf dieser Migration nahm `is_business_member` aus der
-- Schleife aus und verliess sich darauf, dass ihr `authenticated`-Grant aus
-- Migration 0117 einen Entzug von PUBLIC überlebt. Das war falsch gedacht:
-- Der Entzug nannte `authenticated` selbst mit, also fiel der Grant. Das
-- Sicherheitsnetz unten hat es gefangen, die Migration brach ab, und in der
-- Datenbank blieb nichts halb Fertiges zurück.
--
-- Erst alles entziehen, dann gezielt zurückgeben, ist ohnehin die
-- verlässlichere Reihenfolge: Sie hängt nicht davon ab, welche Einträge in
-- der Rechteliste vorher standen.
grant execute on function app.is_business_member(uuid, app.business_role)
  to authenticated;

-- Sicherheitsnetz: Wenn der Entzug oben die Zugriffsregeln der Firmenkunden
-- lahmgelegt hätte, bricht die Migration hier ab, statt eine Datenbank zu
-- hinterlassen, in der kein Firmenmitglied mehr an seine Daten kommt.
do $$
begin
  if not has_function_privilege(
       'authenticated',
       'app.is_business_member(uuid, app.business_role)',
       'EXECUTE') then
    raise exception
      'app.is_business_member hat das Ausführungsrecht für authenticated '
      'verloren. Sechs Zugriffsregeln auf businesses, business_members, '
      'business_locations und payments werten sie unter dem aufrufenden '
      'Konto aus — ohne das Recht schlägt jeder Firmenzugriff fehl.';
  end if;
end;
$$;

alter default privileges in schema app
  revoke execute on functions from public, anon, authenticated;
