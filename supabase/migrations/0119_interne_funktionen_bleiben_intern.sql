-- ============================================================================
-- 0119 · Interne Funktionen bleiben intern
-- ----------------------------------------------------------------------------
-- Ergebnis einer Durchsicht des Zusammenspiels am 22.08.2026. Bis dahin war
-- jede Migration einzeln geprüft — aber nie, ob die Funktionen einander
-- widersprechen oder blockieren. Zwei Befunde, ein gemeinsamer Grund.
--
-- ----------------------------------------------------------------------------
-- Befund 1: Zwei Meilenstein-Funktionen mit verschiedenen Regeln
--
-- Neben `app.grant_loyalty_bonuses` (Mehrzahl, in Gebrauch) stand noch
-- `app.grant_loyalty_bonus` (Einzahl) aus einer früheren Fassung. Beide
-- vergeben Meilenstein-Gutscheine, aber nach unterschiedlichen Regeln:
--
--   Regel                    Einzahl (alt)        Mehrzahl (in Gebrauch)
--   ---------------------------------------------------------------------
--   Abo-Prüfung              KEINE                has_subscription, sonst 0
--   Login-Punkte             zählen nicht mit     zählen mit
--   Aufgaben-Prämien         zählen nicht mit     zählen mit
--   Monatsgrenze             current_date (UTC)   app.heute() (Berlin)
--   Gutschein gültig         3 Tage               14 Tage
--   Einlösecode              lpad(random()*1e6)   app.generate_redemption_code()
--   Doppelvergabe            kein on conflict     on conflict do nothing
--
-- Die dritte Zeile ist die schwerste: Die alte Fassung vergibt den Gutschein
-- OHNE Abo. Das widerspricht der Regel „sammeln darf jeder, den Gutschein
-- bekommt nur, wer zahlt" unmittelbar. Die vorletzte ist die zweitschwerste:
-- ein sechsstelliger Code aus `random()` ist nicht unvorhersehbar.
--
-- Geprüft, dass sie wirklich tot ist, bevor sie fällt: Keine andere
-- Datenbankfunktion ruft sie auf, kein Trigger, keine Zugriffsregel, kein
-- Zeitplan-Auftrag, und im Repository kommt der Name in keiner Dart- oder
-- TypeScript-Datei vor. Sie fällt deshalb ganz, statt nur entschärft zu
-- werden — ihr Quelltext bleibt in der Migrationsgeschichte auffindbar.
--
-- ----------------------------------------------------------------------------
-- Befund 2: Interne Helfer sind für Angemeldete ausführbar
--
-- Vier schreibende SECURITY-DEFINER-Funktionen im Schema `app` nehmen eine
-- FREMDE Kunden-Kennung als Parameter und trugen EXECUTE für
-- `authenticated`:
--
--   app.grant_loyalty_bonus(uuid)          -- fällt mit Befund 1
--   app.grant_loyalty_bonuses(uuid)
--   app.grant_challenge_rewards(uuid)
--   app.qualify_referral_for(uuid, ...)
--
-- SECURITY DEFINER heisst: Sie umgehen die Zeilensicherheit. Wer sie mit
-- einer fremden Kennung aufrufen kann, löst dort Gutscheine, Punkte oder die
-- Werbeprämien-Qualifizierung aus.
--
-- Einordnung ohne Dramatik, damit die Bewertung stimmt: Das Schema `app` ist
-- nach aller Wahrscheinlichkeit gar nicht über PostgREST erreichbar — die
-- Standardfreigabe von Supabase umfasst nur `public` und `graphql_public`.
-- Nachprüfen liess sich das von hier aus NICHT: In der Datenbank steht keine
-- `pgrst.db_schemas`-Einstellung (in `pg_roles.rolconfig` nachgesehen), und
-- der Ausgangs-Proxy dieser Umgebung lässt supabase.co nicht durch, so dass
-- die REST-Schnittstelle nicht befragt werden konnte. Die Aussage „nicht
-- erreichbar" wäre also ungeprüft.
--
-- Genau deshalb wird das Recht entzogen: Der Schutz soll nicht daran hängen,
-- wie eine Plattformeinstellung gerade steht, die niemand in diesem
-- Repository sieht. Dieselbe Überlegung wie bei TRUNCATE in Migration 0116.
--
-- Ursache ist auch dieselbe: Die Supabase-Standardrechte vergeben EXECUTE auf
-- jede neue Funktion an `anon` und `authenticated`. Das Schema `app` war als
-- interner Bereich gedacht — die Rechte wussten davon nichts.
--
-- ----------------------------------------------------------------------------
-- Was NICHT entzogen wird, und warum
--
-- `app.is_business_member(uuid, app.business_role)` behält EXECUTE für
-- `authenticated`. Sie wird in SECHS Zugriffsregeln aufgerufen (auf
-- `businesses`, `business_members`, `business_locations` und `payments`), und
-- Regelausdrücke werden unter dem aufrufenden Konto ausgewertet. Ohne das
-- Recht schlüge jeder Firmenzugriff fehl. Sie ist lesend und liefert nur
-- wahr/falsch — kein Schreibweg.
--
-- Vor dem Entzug geprüft, damit nichts stillsteht:
--   * Kein Client ruft eine `app`-Funktion — die 42 vom Code gerufenen RPCs
--     liegen alle in `public`.
--   * Keine SECURITY-INVOKER-Funktion in `public`, die `authenticated`
--     ausführen darf, ruft eine `app`-Funktion auf.
--   * Alle `app.`-Vorkommen in Spalten-Vorgaben, Prüfregeln und Indizes sind
--     Typumwandlungen (`'active'::app.entity_status`), keine Aufrufe.
--   * Die `public`-Funktionen, die `app`-Helfer benutzen, sind SECURITY
--     DEFINER und laufen als Eigentümer — sie brauchen das Recht nicht.
-- ============================================================================

-- ----------------------------------------------------------------------------
-- Befund 1
-- ----------------------------------------------------------------------------
drop function if exists app.grant_loyalty_bonus(uuid);

-- ----------------------------------------------------------------------------
-- Befund 2
-- ----------------------------------------------------------------------------
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
      -- Die eine Ausnahme: wird in Zugriffsregeln ausgewertet.
      and p.proname <> 'is_business_member'
  loop
    execute format('revoke execute on function %s from anon, authenticated', r.sig);
    v_anzahl := v_anzahl + 1;
  end loop;
  raise notice 'EXECUTE auf % Funktionen in app entzogen.', v_anzahl;
end;
$$;

-- Ohne diesen Teil bekäme die nächste Funktion in `app` das Recht sofort
-- wieder. Gilt für Objekte, die `postgres` anlegt — also für Migrationen;
-- dieselbe Einschränkung wie in 0116, dort ausführlich begründet.
alter default privileges in schema app
  revoke execute on functions from anon, authenticated;
