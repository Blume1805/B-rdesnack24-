-- ===========================================================================
-- Gesamtaudit Phase 2, Teil A
-- ---------------------------------------------------------------------------
-- Drei Befunde aus docs/audit/GESAMTAUDIT-2026-09-05-PHASE1.md.
-- Bewusst NICHT enthalten: M-1 und M-3 — siehe Begruendung am Ende.
-- ===========================================================================

-- ---------------------------------------------------------------------------
-- H-1 · pg_net: NICHT behebbar, und das ist belegt statt vermutet
--
-- anon und authenticated haben USAGE auf dem Schema net und EXECUTE auf
-- net.http_get/http_post/http_delete. Der Entzug stand hier zunaechst als
-- REVOKE. Er lief still ins Leere -- die Nachpruefung zeigte danach
-- unveraenderte Rechte, und die ACL sagt warum:
--
--     schema net   Eigentuemer supabase_admin
--                  anon=U/supabase_admin  authenticated=U/supabase_admin
--     net.http_*   Eigentuemer supabase_admin
--                  =X/supabase_admin      (EXECUTE an PUBLIC)
--
-- Alle Rechte wurden von supabase_admin vergeben. Ein REVOKE entfernt nur,
-- was die ausfuehrende Rolle selbst vergeben hat. Wir laufen als postgres,
-- und postgres ist hier weder Superuser noch Mitglied von supabase_admin
-- (beides abgefragt). Der Entzug ist von der Datenbank aus unmoeglich.
--
-- Ein REVOKE, der nichts tut, aber im Migrationsverlauf wie eine erledigte
-- Massnahme aussieht, ist schlimmer als gar keiner. Deshalb steht hier nur
-- noch diese Erklaerung.
--
-- WAS STATTDESSEN SCHUETZT: net steht nicht in den Exposed Schemas
-- (geprueft am 05.09.2026: dort stehen graphql_public und public). Ohne
-- Exponierung ist net ueber die Data API nicht erreichbar. Diese Einstellung
-- ist damit die eigentliche Schranke -- und sie darf nicht angetastet werden.
-- Bleibt offen: als Anfrage an den Supabase-Support oder mit der Entscheidung,
-- die Erweiterung pg_net ganz zu entfernen, falls sie entbehrlich wird
-- (derzeit nicht: der Cron-Job weather-sync ruft net.http_post auf).

-- ---------------------------------------------------------------------------
-- M-5 · app.werbe_nil bekommt einen festen search_path
--
-- Die einzige Funktion im System ohne festgelegten search_path. Sie ist
-- SECURITY INVOKER und gibt eine Konstante zurueck, der Hebel ist also klein.
-- Sie bleibt trotzdem nicht stehen: Eine einzelne Ausnahme von einer sonst
-- lueckenlosen Regel wird spaeter kopiert, und dann sitzt sie an einer
-- Stelle, an der sie wehtut.
-- ---------------------------------------------------------------------------
alter function app.werbe_nil() set search_path = public, app;

-- ---------------------------------------------------------------------------
-- M-6 · customers.customer_type ist keine Selbstbedienung mehr
--
-- BEFUND. Die Policy cust_self_update erlaubt UPDATE auf die eigene Zeile
-- ohne Spaltengrenze, und authenticated hat das Spaltenrecht auf
-- customer_type. Anders als bei profiles gab es hier keinen Guard.
--
-- WARUM DAS ZAEHLT, obwohl Firmenkunden fachlich wie Privatkunden behandelt
-- werden: An customer_type haengt die Rechnungsstellung.
--   * create_invoice_for_purchase bricht ab, solange customer_type <> 'business'
--   * der Buchhaltungs-Export waehlt "where c.customer_type = 'business'"
-- Ein Privatkunde koennte sich also selbst zum Unternehmer erklaeren, sich
-- eine Rechnung mit ausgewiesener Umsatzsteuer erzeugen und mit einer selbst
-- eingetippten Steuernummer im Buchhaltungs-Export erscheinen. Das ist kein
-- fremder Datenzugriff, sondern ein Buchfuehrungsmangel — und der ist im
-- Zweifel teurer.
--
-- Die App liest customer_type nur (Stammdaten-Anzeige); geschrieben wird er
-- bei der Registrierung durch app.handle_new_user, und INSERTs beruehrt
-- dieser Trigger nicht. Es geht also nichts kaputt.
-- ---------------------------------------------------------------------------
create or replace function app.guard_customer_update()
returns trigger
language plpgsql
security definer
set search_path = public, app
as $$
begin
  if public.is_admin() or public.auth_has_permission('customers.manage') then
    return new;
  end if;

  -- coalesce, obwohl beide Spalten NOT NULL sind: Der Schutz soll nicht
  -- davon abhaengen, dass eine spaetere Migration diese Zusage nicht
  -- zuruecknimmt. Bei profiles fehlt genau dieses Netz (dort haelt es
  -- heute nur, weil role und status NOT NULL sind).
  if coalesce(new.customer_type::text, '') is distinct from
     coalesce(old.customer_type::text, '')
  then
    raise exception 'Die Kundenart wird von der Verwaltung gesetzt, nicht vom Konto.'
      using errcode = '42501';
  end if;

  if new.id is distinct from old.id then
    raise exception 'Die Kundenkennung ist unveraenderlich.'
      using errcode = '42501';
  end if;

  return new;
end;
$$;

comment on function app.guard_customer_update() is
  'Verhindert, dass ein Kunde seine eigene Kundenart oder Kennung aendert. '
  'Gegenstueck zu app.guard_profile_update fuer profiles. Audit 05.09.2026, M-6.';

drop trigger if exists trg_customers_guard on public.customers;
create trigger trg_customers_guard
  before update on public.customers
  for each row execute function app.guard_customer_update();

-- ===========================================================================
-- BEWUSST NICHT ENTHALTEN — mit Begruendung, damit es niemand fuer
-- Vergesslichkeit haelt
-- ===========================================================================
--
-- M-1 · product_rating_summary auf security_invoker umstellen: NICHT gemacht.
--   Die Empfehlung im Auditbericht war falsch, und die Pruefung hat es
--   gezeigt: Die Policy auf product_ratings lautet
--       (customer_id = auth.uid()) OR is_internal()
--   Mit security_invoker=true saehe ein Kunde den Durchschnitt NUR SEINER
--   EIGENEN Bewertungen. Die Produktbewertung waere kaputt. Die View ist
--   absichtlich eine Aggregat-Sicht ueber Zeilen, die der Aufrufer einzeln
--   nicht sehen darf — das ist ein zulaessiges Muster, kein Leck. Der
--   Supabase-Advisor wird sie weiter als ERROR melden; das ist hier ein
--   Fehlalarm.
--
-- M-3 · Spaltenrechte auf unit_cost / cost_amount entziehen: NICHT gemacht.
--   Es gibt heute kein Leck: Die Policies auf inventory_movements,
--   filling_logs und maintenance_logs verlangen is_admin() oder eine
--   Berechtigung (inventory.view/edit, haccp.fill, haccp.maintenance). Ein
--   Kunde bekommt keine Zeile.
--   Um die Spalte wirklich zu schliessen, muesste man — wie bei
--   products.cost_price_net — das Tabellenrecht SELECT entziehen und alle
--   uebrigen Spalten einzeln zurueckgeben. Das trifft auch die internen
--   Rollen, denn Spaltenrechte kennen nur authenticated. Die
--   Inventurbewertung zeigt unit_cost an. Solange nicht nachgewiesen ist,
--   dass jeder interne Lesepfad ueber eine SECURITY-DEFINER-Funktion laeuft,
--   waere der Entzug ein reales Risiko fuer eine funktionierende Ansicht
--   gegen einen theoretischen Gewinn. Erst nachweisen, dann schliessen.
