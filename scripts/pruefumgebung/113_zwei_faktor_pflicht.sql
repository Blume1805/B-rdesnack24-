-- Probe der Zwei-Faktor-Pflicht. Simuliert die Sitzung so, wie die API sie
-- setzt (Rolle und JWT-Ansprüche), und ruft die Prüfung vor jeder Anfrage auf.
create or replace function pg_temp.probe(p_rolle text, p_sub uuid, p_aal text)
returns text language plpgsql as $$
declare v text;
begin
  perform set_config('request.jwt.claims',
    json_build_object('sub', p_sub, 'role', p_rolle, 'aal', p_aal)::text, true);
  execute format('set local role %I', p_rolle);
  begin
    perform public.pruefe_anfrage();
    v := 'durch';
  exception when others then
    v := 'abgewiesen ' || sqlstate || ' ' || left(sqlerrm, 60);
  end;
  reset role;
  return v;
end $$;
\set I '\'33333333-3333-3333-3333-333333333333\''
\set K '\'11111111-1111-1111-1111-111111111111\''
select 'Rollen: intern=' || (select role from public.profiles where id = :I) || ', kunde=' || (select role from public.profiles where id = :K) as probe;
select 'AUS  intern aal1   -> ' || pg_temp.probe('authenticated', :I, 'aal1');
select 'AUS  kunde  aal1   -> ' || pg_temp.probe('authenticated', :K, 'aal1');
select 'AUS  anon          -> ' || pg_temp.probe('anon', null, null);
begin;
update app.security_settings set enabled = true where key = 'require_mfa_internal';
select 'AN   intern aal1   -> ' || pg_temp.probe('authenticated', :I, 'aal1');
select 'AN   intern aal2   -> ' || pg_temp.probe('authenticated', :I, 'aal2');
select 'AN   kunde  aal1   -> ' || pg_temp.probe('authenticated', :K, 'aal1');
select 'AN   anon          -> ' || pg_temp.probe('anon', null, null);
select 'AN   service_role  -> ' || pg_temp.probe('service_role', null, null);
-- einschränkende Regel auf einer Echtzeit-Tabelle, intern aal1 (sieht sonst alle Fächer)
select set_config('request.jwt.claims', json_build_object('sub', :I, 'role', 'authenticated', 'aal', 'aal1')::text, true);
set local role authenticated;
select 'AN   intern aal1 liest machine_slots: ' || count(*) || ' Zeilen' from public.machine_slots;
reset role;
select set_config('request.jwt.claims', json_build_object('sub', :I, 'role', 'authenticated', 'aal', 'aal2')::text, true);
set local role authenticated;
select 'AN   intern aal2 liest machine_slots: ' || count(*) || ' Zeilen' from public.machine_slots;
reset role;
rollback;
select 'nach Rollback Schalter: ' || app.require_mfa_internal()::text;
