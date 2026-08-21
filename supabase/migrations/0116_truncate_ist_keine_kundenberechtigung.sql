-- ============================================================================
-- 0116 · TRUNCATE ist keine Kundenberechtigung
-- ----------------------------------------------------------------------------
-- Befund vom 21.08.2026, entstanden beim Bau von Schritt 2. Beim Nachsehen,
-- welche Rechte auf der neuen Tabelle `locations` tatsächlich liegen, stand
-- in `information_schema.role_table_grants` neben SELECT/INSERT/UPDATE/DELETE
-- auch TRUNCATE — für `anon` und für `authenticated`.
--
-- Das ist keine Kleinigkeit, denn TRUNCATE kennt keine Row Level Security.
-- Jede Policy dieses Projekts filtert Zeilen; TRUNCATE fragt nicht nach
-- Zeilen. Nachgestellt mit der echten Kennung von `demo-kunde`:
--
--     set local role authenticated;
--     set local request.jwt.claims = '{"sub":"e77190c4-…","role":"authenticated"}';
--     truncate public.locations cascade;   -- lief durch, danach 0 Zeilen
--
-- Der Versuch lief in einer Transaktion und wurde zurückgerollt; es ist nichts
-- verloren gegangen. Aber er lief durch.
--
-- ----------------------------------------------------------------------------
-- Wie schlimm ist es wirklich
--
-- Damit die Einordnung stimmt und nicht dramatisiert wird: PostgREST — der
-- Weg, über den App und Web an die Datenbank kommen — kennt kein TRUNCATE.
-- Es gibt dort GET, POST, PATCH, DELETE und RPC, aber kein Verb, das diesen
-- Befehl auslöst, und keine RPC dieses Projekts führt ihn aus. Geprüft mit
-- einer Suche über das gesamte Repository: In ausführbarem Code steht
-- TRUNCATE ausschliesslich in den Migrationen 0059 und 0065, die als
-- Eigentümer laufen; die übrigen Fundstellen sind Fliesstext in `docs/`
-- und frühere Rechte-Migrationen (0081, 0104), die es entziehen.
--
-- Ein Kunde kann diesen Befehl heute also nicht über die App absetzen. Was
-- bleibt, ist ein Recht, das niemand braucht und das der einzige Schutzwall
-- des Projekts — RLS — nicht abfangen kann. Der Schutz hängt damit allein
-- daran, dass eine fremde Software kein Verb anbietet. Das ist kein Schutz,
-- das ist ein Zufall.
--
-- Warum es überhaupt so ist: Die Supabase-Standardrechte vergeben auf jede
-- neue Tabelle in `public` alles an `anon`, `authenticated` und
-- `service_role` — `arwdDxtm`, und das `D` darin ist TRUNCATE.
--
-- Betroffen waren 74 der damals 89 Basistabellen, dazu die zwei Sichten
-- (siehe Nachtrag unten). Die übrigen 15 Tabellen tragen bereits ein
-- `revoke all` aus früheren Migrationen — 0081 und 0104 sowie die drei
-- Tabellen ganz ohne Client-Berechtigung (`customer_card`,
-- `customer_login_days`, `email_unsubscribe_token`). Dort war der Fall aus
-- anderem Anlass schon geschlossen, ohne dass jemand die allgemeine Ursache
-- bemerkt hätte. Diese Migration zieht es auf den gesamten Bestand nach.
--
-- ----------------------------------------------------------------------------
-- Mitgenommen: TRIGGER und REFERENCES
--
-- Aus demselben Standardrecht stammen zwei weitere Berechtigungen, die kein
-- Client braucht: TRIGGER (Trigger an fremde Tabellen hängen) und REFERENCES
-- (Fremdschlüssel darauf anlegen). Beide sind heute kaum ausnutzbar, weil
-- weder `anon` noch `authenticated` CREATE im Schema `public` haben und
-- deshalb keine eigene Funktion oder Tabelle anlegen können — nachgeprüft
-- mit `has_schema_privilege`. Sie werden hier trotzdem entzogen: Ein Recht,
-- für das es keinen Verwendungszweck gibt, gehört nicht vergeben. Anders als
-- bei TRUNCATE ist das Aufräumen und kein Befund.
--
-- Was NICHT angefasst wird: SELECT, INSERT, UPDATE und DELETE. Die stehen
-- unter RLS und sind genau der Mechanismus, auf dem dieses Projekt aufbaut.
-- ============================================================================

-- ----------------------------------------------------------------------------
-- Der Bestand
-- ----------------------------------------------------------------------------
do $$
declare
  r record;
  v_anzahl int := 0;
begin
  for r in
    select tablename from pg_tables where schemaname = 'public' order by tablename
  loop
    execute format(
      'revoke truncate, trigger, references on public.%I from anon, authenticated',
      r.tablename
    );
    v_anzahl := v_anzahl + 1;
  end loop;
  raise notice 'TRUNCATE/TRIGGER/REFERENCES auf % Tabellen entzogen.', v_anzahl;
end;
$$;

-- ----------------------------------------------------------------------------
-- Und für alles, was noch kommt
-- ----------------------------------------------------------------------------
-- Ohne diesen Teil wäre die Migration eine einmalige Aufräumaktion: Die
-- nächste `create table` in `public` bekäme das Recht sofort wieder.
--
-- Zwei Einschränkungen, die benannt gehören statt verschwiegen zu werden:
--
--   1. `alter default privileges` wirkt nur auf Objekte, die von der Rolle
--      angelegt werden, die den Befehl absetzt. Diese Migration läuft als
--      `postgres`, und alle 90 Tabellen in `public` gehören `postgres`
--      (geprüft über `pg_tables.tableowner`) — für Migrationen greift es
--      also.
--   2. Es existiert ein zweiter Standardrechte-Eintrag für `public`, gesetzt
--      von `supabase_admin`. Der lässt sich von hier aus nicht ändern. Legt
--      Supabase selbst eine Tabelle in `public` an, trägt sie das Recht
--      wieder. Für dieses Projekt legt niemand ausser den Migrationen
--      Tabellen in `public` an; sollte sich das ändern, greift Punkt 2.
alter default privileges in schema public
  revoke truncate, trigger, references on tables from anon, authenticated;

-- ----------------------------------------------------------------------------
-- Nachtrag: die zwei, die stehen bleiben
-- ----------------------------------------------------------------------------
-- Nach dem Lauf tragen `machine_stock` und `product_rating_summary` das Recht
-- weiterhin. Beide sind Sichten, keine Tabellen, und stehen deshalb nicht in
-- `pg_tables`. Sie werden nicht nachgezogen, weil das Recht dort ins Leere
-- greift — nachgestellt als `demo-kunde`:
--
--     truncate public.machine_stock;
--     → 42809: "machine_stock" is not a table
--
-- PostgreSQL lehnt ab, bevor es überhaupt eine Berechtigung prüft. Der
-- Eintrag in der Rechteliste ist damit Kosmetik und kein Befund. Wer die
-- Prüfabfrage später wiederholt und diese zwei Zeilen sieht, findet hier den
-- Grund, statt ihn noch einmal zu suchen.
