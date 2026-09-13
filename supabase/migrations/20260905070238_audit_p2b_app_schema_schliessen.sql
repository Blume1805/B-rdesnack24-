-- ===========================================================================
-- Gesamtaudit Phase 2, Teil B — H-2: das Schema app vom Client trennen
-- ---------------------------------------------------------------------------
-- BEFUND. app ist als internes Schema gedacht. Tatsaechlich hatte
-- authenticated USAGE darauf, und zwei SECURITY-DEFINER-Funktionen waren
-- ausfuehrbar:
--     app.purge_nach_frist()          -- der Loeschjob
--     app.kauf_bucht_bestandsabgang() -- Triggerfunktion
-- Ueber die Data API ist das heute nicht erreichbar (app steht nicht in den
-- Exposed Schemas, geprueft am 05.09.2026). Es bleibt trotzdem falsch: Der
-- Grant wartet nur darauf, dass jemand das Haekchen setzt.
--
-- WARUM DIESE MIGRATION EINE AUSNAHME MACHT UND NICHT PAUSCHAL ENTZIEHT.
-- RLS-Ausdruecke werden mit den Rechten des Aufrufers ausgewertet. Genau
-- eine app-Funktion steht direkt in Policies:
--     app.is_business_member(uuid, app.business_role default null)
-- Sie kommt in businesses_read/_write und business_members_read/_write vor,
-- ausserdem in payments_read und purch_read. Ein pauschaler Entzug haette
-- den gesamten Firmenbereich mit "permission denied for function" lahmgelegt
-- -- und zwar erst zur Laufzeit, nicht beim Anwenden dieser Migration.
--
-- Alle uebrigen app-Funktionen werden von SECURITY-DEFINER-Funktionen
-- aufgerufen, die dem Eigentuemer gehoeren. Dort laeuft der Aufruf mit
-- dessen Rechten; der Aufrufer braucht keine.
-- ===========================================================================

-- PUBLIC MUSS MIT -- und das ist der Grund, warum diese Migration einen
-- zweiten Anlauf gebraucht hat. Postgres vergibt EXECUTE auf Funktionen
-- standardmaessig an PUBLIC. Der erste Entwurf entzog nur anon und
-- authenticated; im lokalen Nachweis liess sich app.purge_nach_frist()
-- danach immer noch als angemeldeter Kunde aufrufen -- und hat den
-- Loeschlauf tatsaechlich gestartet. Ein Entzug, den man nicht nachprueft,
-- ist eine Behauptung.
revoke all on all functions in schema app from public, anon, authenticated;
revoke all on all tables    in schema app from public, anon, authenticated;
revoke all on all sequences in schema app from public, anon, authenticated;
revoke usage on schema app  from public, anon;

-- Serverseitig bleibt alles erreichbar. Die Cron-Jobs laufen als postgres
-- (Superuser, vom Entzug unberuehrt); service_role bekommt die Rechte
-- ausdruecklich zurueck, damit Edge Functions nicht stillschweigend
-- ausfallen.
grant usage on schema app to service_role;
grant execute on all functions in schema app to service_role;

-- authenticated behaelt USAGE auf dem Schema -- ohne das ist die eine
-- erlaubte Funktion unerreichbar und jede B2B-Policy scheitert.
grant usage on schema app to authenticated;
grant execute on function app.is_business_member(uuid, app.business_role)
  to authenticated;

-- Damit der Befund nicht wiederkommt: kuenftige Funktionen in app bekommen
-- gar nicht erst das PUBLIC-Recht. Ohne diese Zeile haette die naechste
-- app-Funktion denselben Fehler wieder eingebaut, ohne dass es jemandem
-- auffaellt.
alter default privileges in schema app revoke execute on functions from public;

comment on function app.is_business_member(uuid, app.business_role) is
  'Einzige app-Funktion, die authenticated aufrufen darf. Sie steht direkt in '
  'RLS-Policies (businesses, business_members, payments, purchases) und wird '
  'deshalb mit den Rechten des Aufrufers ausgewertet. Audit 05.09.2026, H-2.';
