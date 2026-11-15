\set A '\'11111111-1111-1111-1111-111111111111\''
\set G '\'33333333-3333-3333-3333-333333333333\''
select 'Rollen der Testkonten    ', (select role::text from public.profiles where id = :A), (select role::text from public.profiles where id = :G), public.is_internal(:G);
select 'Kunde A laedt hoch       ', pruef.schreibe(format('insert into storage.objects (bucket_id, name) values (''employee-signatures'', %L)', :A || '/kunde-' || gen_random_uuid() || '.png'), :A);
select 'Kunde A in fremden Ordner', pruef.schreibe(format('insert into storage.objects (bucket_id, name) values (''employee-signatures'', %L)', :G || '/fremd-' || gen_random_uuid() || '.png'), :A);
select 'Intern G laedt hoch      ', pruef.schreibe(format('insert into storage.objects (bucket_id, name) values (''employee-signatures'', %L)', :G || '/intern-' || gen_random_uuid() || '.png'), :G);
select 'ohne Anmeldung           ', pruef.schreibe('insert into storage.objects (bucket_id, name) values (''employee-signatures'', ''x/y.png'')', null, 'anon');
select 'Dateien im Bereich       ', count(*) from storage.objects where bucket_id = 'employee-signatures';
