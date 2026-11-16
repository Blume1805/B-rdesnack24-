-- Probe zu A2-14: Preisaufteilung eines Kombi-Angebots nur für sichtbare Angebote.
-- Zwei Angebote mit je einem Produkt: eines aktiv, eines inaktiv.
-- Kunde: aktiv -> Zeilen, inaktiv -> 0. Admin: beide -> Zeilen. anon -> abgewiesen.
-- Dazu A2-12: machine_stock nur noch lesbar.
truncate pruef.ergebnis restart identity;
delete from public.bundle_items where bundle_id in ('b0000000-0000-4000-8000-0000000000a1','b0000000-0000-4000-8000-0000000000a2');
delete from public.bundles where id in ('b0000000-0000-4000-8000-0000000000a1','b0000000-0000-4000-8000-0000000000a2');
insert into public.bundles(id, code, title, price_gross, status)
values ('b0000000-0000-4000-8000-0000000000a1','PROBE-AKTIV','Probe aktiv',2.00,'active'),
       ('b0000000-0000-4000-8000-0000000000a2','PROBE-ENTWURF','Probe inaktiv',2.00,'inactive');
insert into public.bundle_items(bundle_id, product_id, quantity, sort_order)
select b, (select id from public.products where list_price_net is not null and deleted_at is null order by id limit 1), 1, 1
  from unnest(array['b0000000-0000-4000-8000-0000000000a1','b0000000-0000-4000-8000-0000000000a2']::uuid[]) b;
do $$
declare
  K uuid := '11111111-1111-1111-1111-111111111111';
  S uuid := 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa';
  n int; e text;
begin
  n := pruef.zaehle($q$select * from public.bundle_split('b0000000-0000-4000-8000-0000000000a1')$q$, K);
  insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok) values ('A2-14','Kunde: aktives Angebot','kunde','1',n::text,n=1);
  n := pruef.zaehle($q$select * from public.bundle_split('b0000000-0000-4000-8000-0000000000a2')$q$, K);
  insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok) values ('A2-14','Kunde: inaktiv','kunde','0',n::text,n=0);
  n := pruef.zaehle($q$select * from public.bundle_split('b0000000-0000-4000-8000-0000000000a2')$q$, S);
  insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok) values ('A2-14','Admin: inaktiv','admin','1',n::text,n=1);
  n := pruef.zaehle($q$select * from public.bundle_split('b0000000-0000-4000-8000-0000000000a1')$q$, null, 'anon');
  insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok) values ('A2-14','anon: aktives Angebot','anon','-1',n::text,n=-1);
  select string_agg(grantee||':'||privilege_type, ',') into e
    from information_schema.role_table_grants
   where table_schema='public' and table_name='machine_stock' and grantee in ('anon','authenticated') and privilege_type <> 'SELECT';
  insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok) values ('A2-12','machine_stock: Rechte außer Lesen','anon/authenticated','keine',coalesce(e,'keine'),e is null);
  n := pruef.zaehle('select * from public.machine_stock', K);
  insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok) values ('A2-12','machine_stock: Kunde liest weiter','kunde','>=0',n::text,n>=0);
end $$;
delete from public.bundle_items where bundle_id in ('b0000000-0000-4000-8000-0000000000a1','b0000000-0000-4000-8000-0000000000a2');
delete from public.bundles where id in ('b0000000-0000-4000-8000-0000000000a1','b0000000-0000-4000-8000-0000000000a2');
select gruppe, test, erwartet, gemessen, ok from pruef.ergebnis order by id;
