-- Probe zu 20261119120000 (Automaten in der App verwalten).
-- Erwartung:
--  * Kunde: legt keinen Automaten/Standort an, ändert keinen, löscht keinen.
--  * Gesellschafter (Recht inventory.edit): legt an, benennt um, ändert den
--    Standort, legt still und nimmt wieder in Betrieb. Löschen geht auch für
--    ihn nicht (kein Recht, keine Regel); der Automat steht danach noch da.
--  * Die Testvorlagen tragen keine Kennung A1–A4 mehr, die
--    Platzhalter-Standorte „(ANPASSEN)" sind ausgeblendet.
--  * Gelöschte Automaten sind auch für Berechtigte nicht mehr sichtbar.
-- Wiederholbar: eigene Kennungen, Aufräumen am Anfang und am Ende.
\set ON_ERROR_STOP on
truncate pruef.ergebnis restart identity;

\set kunde  '\'11111111-1111-1111-1111-111111111111\''
\set gesell '\'33333333-3333-3333-3333-333333333333\''

delete from public.machines  where code in ('PRUEF-121', 'PRUEF-121-K');
delete from public.locations where code in ('STO-PRUEF-121', 'STO-PRUEF-121-K', 'STO-PRUEF-121-NEU');

-- ── Aufräumen der Vorlagen (Teil 1 und 2 der Migration) ────────────────
insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok)
select 'automaten', 'Vorlagen ohne Kennung A1–A4', 'postgres', '0', count(*)::text, count(*) = 0
  from public.machines
 where deleted_at is not null and code in ('A1', 'A2', 'A3', 'A4');
insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok)
select 'automaten', 'Platzhalter-Standorte ausgeblendet', 'postgres', '0', count(*)::text, count(*) = 0
  from public.locations
 where name like '%(ANPASSEN)%' and deleted_at is null;

-- ── Rechte auf Tabellenebene ───────────────────────────────────────────
insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok)
select 'automaten', 'kein DELETE-Recht (machines/locations)', r, 'false/false',
       has_table_privilege(r, 'public.machines', 'delete')::text || '/' ||
       has_table_privilege(r, 'public.locations', 'delete')::text,
       not has_table_privilege(r, 'public.machines', 'delete')
       and not has_table_privilege(r, 'public.locations', 'delete')
  from unnest(array['anon', 'authenticated']) r;

-- ── Kunde ──────────────────────────────────────────────────────────────
insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok)
select 'automaten', 'Kunde legt keinen Automaten an', 'kunde', 'ERR:42501', x, x = 'ERR:42501'
  from pruef.schreibe($$insert into public.machines (code, name) values ('PRUEF-121-K', 'Kundenautomat')$$, :kunde) x;
insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok)
select 'automaten', 'Kunde legt keinen Standort an', 'kunde', 'ERR:42501', x, x = 'ERR:42501'
  from pruef.schreibe($$insert into public.locations (code, name) values ('STO-PRUEF-121-K', 'Kundenstandort')$$, :kunde) x;
insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok)
select 'automaten', 'Kunde benennt keinen Automaten um', 'kunde', 'ROWS:0', x, x = 'ROWS:0'
  from pruef.schreibe($$update public.machines set name = 'gekapert' where code = 'PRUEF-01'$$, :kunde) x;
insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok)
select 'automaten', 'Kunde legt keinen Automaten still', 'kunde', 'ROWS:0', x, x = 'ROWS:0'
  from pruef.schreibe($$update public.machines set status = 'inactive' where code = 'PRUEF-01'$$, :kunde) x;
insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok)
select 'automaten', 'Kunde ändert keinen Standort', 'kunde', 'ROWS:0', x, x = 'ROWS:0'
  from pruef.schreibe($$update public.locations set city = 'gekapert' where code = 'TEST'$$, :kunde) x;
insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok)
select 'automaten', 'Kunde löscht keinen Automaten', 'kunde', 'ERR:42501', x, x = 'ERR:42501'
  from pruef.schreibe($$delete from public.machines where code = 'PRUEF-01'$$, :kunde) x;
insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok)
select 'automaten', 'Prüfautomat nach Kundenversuchen unverändert', 'postgres', 'Prüfautomat/active', x,
       x = 'Prüfautomat/active'
  from pruef.wahrheit($$select name || '/' || status from public.machines where code = 'PRUEF-01'$$) x;

-- ── Gesellschafter (Recht inventory.edit) ─────────────────────────────
insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok)
select 'automaten', 'Gesellschafter legt Standort an', 'gesellschafter', 'ROWS:1', x, x = 'ROWS:1'
  from pruef.schreibe($$insert into public.locations (code, name, street, zip, city)
                        values ('STO-PRUEF-121', 'Probestandort', 'Probeweg 1', '39171', 'Sülzetal')$$, :gesell) x;
insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok)
select 'automaten', 'Gesellschafter legt Automat an', 'gesellschafter', 'ROWS:1', x, x = 'ROWS:1'
  from pruef.schreibe($$insert into public.machines (code, name, type, location_id, city, status)
                        select 'PRUEF-121', 'Probeautomat', 'snack', id, city, 'active'
                          from public.locations where code = 'STO-PRUEF-121'$$, :gesell) x;
insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok)
select 'automaten', 'Gesellschafter benennt um', 'gesellschafter', 'ROWS:1', x, x = 'ROWS:1'
  from pruef.schreibe($$update public.machines set name = 'Probeautomat Halle' where code = 'PRUEF-121'$$, :gesell) x;
insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok)
select 'automaten', 'Gesellschafter legt zweiten Standort an', 'gesellschafter', 'ROWS:1', x, x = 'ROWS:1'
  from pruef.schreibe($$insert into public.locations (code, name, city)
                        values ('STO-PRUEF-121-NEU', 'Neuer Probestandort', 'Wanzleben')$$, :gesell) x;
insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok)
select 'automaten', 'Gesellschafter ändert Standort', 'gesellschafter', 'ROWS:1', x, x = 'ROWS:1'
  from pruef.schreibe($$update public.machines m set location_id = l.id, city = l.city
                          from public.locations l
                         where m.code = 'PRUEF-121' and l.code = 'STO-PRUEF-121-NEU'$$, :gesell) x;
insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok)
select 'automaten', 'Gesellschafter legt still', 'gesellschafter', 'ROWS:1', x, x = 'ROWS:1'
  from pruef.schreibe($$update public.machines set status = 'inactive' where code = 'PRUEF-121'$$, :gesell) x;
insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok)
select 'automaten', 'Stand nach Stilllegen', 'postgres', 'Probeautomat Halle/inactive/Wanzleben', x,
       x = 'Probeautomat Halle/inactive/Wanzleben'
  from pruef.wahrheit($$select name || '/' || status || '/' || city from public.machines where code = 'PRUEF-121'$$) x;
insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok)
select 'automaten', 'Gesellschafter nimmt wieder in Betrieb', 'gesellschafter', 'ROWS:1', x, x = 'ROWS:1'
  from pruef.schreibe($$update public.machines set status = 'active' where code = 'PRUEF-121'$$, :gesell) x;
insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok)
select 'automaten', 'Gesellschafter löscht keinen Automaten', 'gesellschafter', 'ERR:42501', x, x = 'ERR:42501'
  from pruef.schreibe($$delete from public.machines where code = 'PRUEF-121'$$, :gesell) x;
insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok)
select 'automaten', 'Gesellschafter löscht keinen Standort', 'gesellschafter', 'ERR:42501', x, x = 'ERR:42501'
  from pruef.schreibe($$delete from public.locations where code = 'STO-PRUEF-121'$$, :gesell) x;
insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok)
select 'automaten', 'Automat nach Löschversuch noch da', 'postgres', '1', x, x = '1'
  from pruef.wahrheit($$select count(*)::text from public.machines where code = 'PRUEF-121'$$) x;
insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok)
select 'automaten', 'Kennung doppelt abgewiesen', 'gesellschafter', 'ERR:23505', x, x = 'ERR:23505'
  from pruef.schreibe($$insert into public.machines (code, name) values ('PRUEF-121', 'Doppelt')$$, :gesell) x;

-- Gelöschte Zeilen bleiben auch für Berechtigte unsichtbar.
update public.machines set deleted_at = now() where code = 'PRUEF-121';
insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok)
select 'automaten', 'gelöschter Automat unsichtbar', 'gesellschafter', '0', n::text, n = 0
  from pruef.zaehle($$select * from public.machines where code = 'PRUEF-121'$$, :gesell) n;

delete from public.machines  where code in ('PRUEF-121', 'PRUEF-121-K');
delete from public.locations where code in ('STO-PRUEF-121', 'STO-PRUEF-121-K', 'STO-PRUEF-121-NEU');
