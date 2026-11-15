\set A '\'11111111-1111-1111-1111-111111111111\''
\set G '\'33333333-3333-3333-3333-333333333333\''
select 'Intern G: erster Upload         ', pruef.schreibe(format('insert into storage.objects (bucket_id, name) values (''employee-signatures'', %L) on conflict (bucket_id, name) do update set updated_at = now()', :G || '/aufgabe-1.png'), :G);
select 'Intern G: zweiter Upload (gleich)', pruef.schreibe(format('insert into storage.objects (bucket_id, name) values (''employee-signatures'', %L) on conflict (bucket_id, name) do update set updated_at = now()', :G || '/aufgabe-1.png'), :G);
select 'Kunde A: eigene Datei           ', pruef.schreibe(format('insert into storage.objects (bucket_id, name) values (''employee-signatures'', %L) on conflict (bucket_id, name) do update set updated_at = now()', :A || '/x.png'), :A);
select 'Kunde A: ändert Datei von G     ', pruef.schreibe(format('update storage.objects set updated_at = now() where bucket_id = ''employee-signatures'' and name = %L', :G || '/aufgabe-1.png'), :A);
select 'Intern G: ändert in fremdem Ordner', pruef.schreibe(format('insert into storage.objects (bucket_id, name) values (''employee-signatures'', %L) on conflict (bucket_id, name) do update set updated_at = now()', :A || '/y.png'), :G);
