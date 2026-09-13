create schema if not exists pruef;

drop table if exists pruef.ergebnis;
create table pruef.ergebnis(
  id serial primary key,
  gruppe text, test text, akteur text, ziel text,
  erwartet text, gemessen text, ok boolean, notiz text
);

-- Zählt Zeilen einer Abfrage in der Haut einer Rolle.
-- Rückgabe: >=0 Zeilenzahl, -1 = Fehler (z. B. 42501).
-- Wichtig: Die Rolle wird in JEDEM Pfad zurückgesetzt, bevor die Funktion
-- verlässt — sonst läuft der Aufrufer weiter als 'anon' und jede spätere
-- Messung ist falsch. Genau dieser Fehler hat im August alle Tests grün
-- gefärbt.
create or replace function pruef.zaehle(p_sql text, p_uid uuid, p_rolle text default 'authenticated')
returns int language plpgsql as $$
declare n int; begin
  begin
    execute format('set local role %I', p_rolle);
    if p_uid is not null then
      perform set_config('request.jwt.claims', json_build_object('sub',p_uid,'role',p_rolle)::text, true);
    else
      perform set_config('request.jwt.claims', '', true);
    end if;
    -- WICHTIG: row_to_json erzwingt, dass die Spalten tatsaechlich berechnet
    -- werden. Ohne das darf der Planer bei count(*) ueber einer STABLE-
    -- Funktion den Aufruf ganz weglassen -- der Plan ist dann nur noch
    -- "Aggregate -> Result", die Funktion laeuft nie, und eine Gegenprobe
    -- auf fehlende Rechte meldet Erfolg statt Abweisung. Genau das ist am
    -- 03.09.2026 passiert: bestandsluecken_offen war korrekt fuer anon
    -- gesperrt, der Test hat es nur nicht gemerkt.
    execute 'select count(*) from (select row_to_json(t.*) from ('
            || p_sql || ') t) z' into n;
  exception when others then
    n := -1;
  end;
  reset role;
  perform set_config('request.jwt.claims', '', true);
  return n;
end $$;

-- Führt ein Schreibkommando in der Haut einer Rolle aus.
-- Rückgabe: 'ROWS:n' oder 'ERR:<sqlstate>'.
create or replace function pruef.schreibe(p_sql text, p_uid uuid, p_rolle text default 'authenticated')
returns text language plpgsql as $$
declare n int; r text; begin
  begin
    execute format('set local role %I', p_rolle);
    if p_uid is not null then
      perform set_config('request.jwt.claims', json_build_object('sub',p_uid,'role',p_rolle)::text, true);
    else
      perform set_config('request.jwt.claims', '', true);
    end if;
    execute p_sql;
    get diagnostics n = row_count;
    r := 'ROWS:'||n;
  exception when others then
    r := 'ERR:'||sqlstate;
  end;
  reset role;
  perform set_config('request.jwt.claims', '', true);
  return r;
end $$;

-- Liest einen Einzelwert als postgres (Wahrheit nach dem Schreibversuch).
create or replace function pruef.wahrheit(p_sql text) returns text language plpgsql as $$
declare r text; begin execute p_sql into r; return coalesce(r,'<null>');
exception when others then return 'ERR:'||sqlstate; end $$;
