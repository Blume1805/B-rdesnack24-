-- ===========================================================================
-- Prüfdaten. Zwei Kunden A und B mit spiegelbildlichen Datensätzen, ein
-- Gesellschafter G, ein minderjähriger Kunde M.
-- Keine echten Personendaten, keine Produktionsdatenbank.
-- ===========================================================================
create schema if not exists pruef;

insert into auth.users (id, instance_id, aud, role, email, encrypted_password, created_at, updated_at, invited_at, raw_user_meta_data)
values
 ('11111111-1111-1111-1111-111111111111','00000000-0000-0000-0000-000000000000','authenticated','authenticated','kunde-a@test.invalid','x',now(),now(),null,'{"full_name":"Kunde A"}'),
 ('22222222-2222-2222-2222-222222222222','00000000-0000-0000-0000-000000000000','authenticated','authenticated','kunde-b@test.invalid','x',now(),now(),null,'{"full_name":"Kunde B"}'),
 ('33333333-3333-3333-3333-333333333333','00000000-0000-0000-0000-000000000000','authenticated','authenticated','gesellschafter@test.invalid','x',now(),now(),now(),'{"full_name":"Gesellschafter G","role":"shareholder"}'),
 ('44444444-4444-4444-4444-444444444444','00000000-0000-0000-0000-000000000000','authenticated','authenticated','minderjaehrig@test.invalid','x',now(),now(),null,'{"full_name":"Minderjaehrig M","birth_date":"2012-05-05"}')
on conflict (id) do nothing;

-- Gesellschafter aktiv schalten (Einladung wird sonst nur "invited").
update public.profiles set status='active', activated_at=now()
 where id='33333333-3333-3333-3333-333333333333';

-- Stammdaten
insert into public.products(id,name,tax_rate) values
 ('e0000000-0000-0000-0000-00000000000a','Testprodukt A',19.0),
 ('e0000000-0000-0000-0000-00000000000b','Testprodukt B',7.0)
on conflict (id) do nothing;

insert into public.locations(id,code,name) values ('f0000000-0000-0000-0000-000000000001','TEST','Teststandort')
on conflict (id) do nothing;

-- Käufe je Kunde
insert into public.purchases(id,customer_id,total_gross,purchased_at) values
 ('a1000000-0000-0000-0000-000000000001','11111111-1111-1111-1111-111111111111', 3.50, now()),
 ('b1000000-0000-0000-0000-000000000001','22222222-2222-2222-2222-222222222222', 4.50, now())
on conflict (id) do nothing;

insert into public.purchase_items(id,purchase_id,product_id,product_label,quantity,unit_price) values
 ('a2000000-0000-0000-0000-000000000001','a1000000-0000-0000-0000-000000000001','e0000000-0000-0000-0000-00000000000a','Testprodukt A',1,3.50),
 ('b2000000-0000-0000-0000-000000000001','b1000000-0000-0000-0000-000000000001','e0000000-0000-0000-0000-00000000000b','Testprodukt B',1,4.50)
on conflict (id) do nothing;

insert into public.consents(profile_id,type,granted) values
 ('11111111-1111-1111-1111-111111111111','analytics',true),
 ('22222222-2222-2222-2222-222222222222','analytics',true)
on conflict do nothing;

insert into public.customer_prices(customer_id,product_id,price_net) values
 ('11111111-1111-1111-1111-111111111111','e0000000-0000-0000-0000-00000000000a',1.49),
 ('22222222-2222-2222-2222-222222222222','e0000000-0000-0000-0000-00000000000b',1.99)
on conflict do nothing;

insert into public.device_tokens(user_id,token,platform) values
 ('11111111-1111-1111-1111-111111111111','tok-a','android'),
 ('22222222-2222-2222-2222-222222222222','tok-b','ios')
on conflict do nothing;

insert into public.product_ratings(customer_id,product_id,rating) values
 ('11111111-1111-1111-1111-111111111111','e0000000-0000-0000-0000-00000000000a',5),
 ('22222222-2222-2222-2222-222222222222','e0000000-0000-0000-0000-00000000000b',4)
on conflict do nothing;

insert into public.notifications(user_id,title,body) values
 ('11111111-1111-1111-1111-111111111111','Nachricht A','nur fuer A'),
 ('22222222-2222-2222-2222-222222222222','Nachricht B','nur fuer B')
on conflict do nothing;

insert into public.contact_messages(customer_id,category,subject,body) values
 ('11111111-1111-1111-1111-111111111111','problem','Betreff A','Text A'),
 ('22222222-2222-2222-2222-222222222222','problem','Betreff B','Text B')
on conflict do nothing;

insert into public.account_deletion_requests(profile_id,reason) values
 ('11111111-1111-1111-1111-111111111111','Test A'),
 ('22222222-2222-2222-2222-222222222222','Test B')
on conflict do nothing;

insert into public.customer_notification_reads(customer_id,key) values
 ('11111111-1111-1111-1111-111111111111','k1'),
 ('22222222-2222-2222-2222-222222222222','k1')
on conflict do nothing;

insert into public.customer_login_days(customer_id,day) values
 ('11111111-1111-1111-1111-111111111111', current_date),
 ('22222222-2222-2222-2222-222222222222', current_date)
on conflict do nothing;

insert into public.customer_card(customer_id) values
 ('11111111-1111-1111-1111-111111111111'),
 ('22222222-2222-2222-2222-222222222222')
on conflict do nothing;

insert into public.recommendations(customer_id,product_id,score,reason) values
 ('11111111-1111-1111-1111-111111111111','e0000000-0000-0000-0000-00000000000a',1,'test'),
 ('22222222-2222-2222-2222-222222222222','e0000000-0000-0000-0000-00000000000b',1,'test')
on conflict do nothing;
