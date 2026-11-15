\set A '\'11111111-1111-1111-1111-111111111111\''
\set B '\'22222222-2222-2222-2222-222222222222\''
-- fremder Kauf für B, als Wahrheit angelegt
insert into public.purchases (id, customer_id, total_gross, source) values ('aaaaaaaa-0000-4000-8000-00000000000b', :B, 12.34, 'manual') on conflict do nothing;
insert into public.purchases (id, customer_id, total_gross, source) values ('aaaaaaaa-0000-4000-8000-00000000000a', :A, 5.00, 'manual') on conflict do nothing;
select 'A erfindet Kauf         ', pruef.schreibe('select public.dev_add_demo_purchase(''card'', 999)', :A);
select 'A liest fremden Netto   ', pruef.lies('select public.purchase_net_items(''aaaaaaaa-0000-4000-8000-00000000000b'', 12.34)::text', :A);
select 'A liest fremde Spende   ', pruef.lies('select public.purchase_donation_for(''aaaaaaaa-0000-4000-8000-00000000000b'', 12.34)::text', :A);
select 'anon erfindet Kauf      ', pruef.schreibe('select public.dev_add_demo_purchase(''card'', 999)', null, 'anon');
select 'A: eigene Spendenuebers.', left(pruef.lies('select public.my_donation_summary()::text', :A), 60);
select 'A: Spenden je Kauf      ', left(pruef.lies('select count(*)::text from public.my_donations_by_purchase()', :A), 60);
select 'A: Spendentopf          ', left(pruef.lies('select public.donation_pool_summary()::text', :A), 60);
select 'Kaeufe von A mit 999    ', count(*) from public.purchases where customer_id = :A and total_gross = 999;
select 'service_role darf noch  ', has_function_privilege('service_role','public.purchase_net_items(uuid,numeric)','execute'), has_function_privilege('service_role','public.dev_add_demo_purchase(text,numeric)','execute');
