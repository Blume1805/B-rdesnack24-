-- Zwei Firmenkunden mit spiegelbildlichem Bestand. Firma 1 ist der
-- Angreifer, Firma 2 das Ziel.
insert into auth.users (id, instance_id, aud, role, email, encrypted_password, created_at, updated_at)
values
 ('f1a00000-0000-0000-0000-000000000001','00000000-0000-0000-0000-000000000000','authenticated','authenticated','firma1-admin@test.invalid','x',now(),now()),
 ('f2a00000-0000-0000-0000-000000000002','00000000-0000-0000-0000-000000000000','authenticated','authenticated','firma2-admin@test.invalid','x',now(),now()),
 ('f1c00000-0000-0000-0000-000000000003','00000000-0000-0000-0000-000000000000','authenticated','authenticated','firma1-mitglied@test.invalid','x',now(),now())
on conflict (id) do nothing;

insert into public.businesses(id, name) values
 ('b1000000-0000-0000-0000-0000000000f1','Firma Eins GmbH'),
 ('b2000000-0000-0000-0000-0000000000f2','Firma Zwei GmbH')
on conflict (id) do nothing;

insert into public.business_members(business_id, profile_id, role, status, activated_at) values
 ('b1000000-0000-0000-0000-0000000000f1','f1a00000-0000-0000-0000-000000000001','admin','active', now()),
 ('b1000000-0000-0000-0000-0000000000f1','f1c00000-0000-0000-0000-000000000003','member','active', now()),
 ('b2000000-0000-0000-0000-0000000000f2','f2a00000-0000-0000-0000-000000000002','admin','active', now())
on conflict (business_id, profile_id) do update set role=excluded.role, status=excluded.status, activated_at=excluded.activated_at;

-- Standorte
insert into public.locations(id, code, name, city) values
 ('10000000-0000-0000-0000-0000000000f1','F1','Standort Firma Eins','Wanzleben'),
 ('20000000-0000-0000-0000-0000000000f2','F2','Standort Firma Zwei','Oschersleben')
on conflict (id) do nothing;
insert into public.business_locations(business_id, location_id) values
 ('b1000000-0000-0000-0000-0000000000f1','10000000-0000-0000-0000-0000000000f1'),
 ('b2000000-0000-0000-0000-0000000000f2','20000000-0000-0000-0000-0000000000f2')
on conflict do nothing;

-- Kampagnen
insert into public.advertising_campaigns(id, business_id, name, welt, status, von, bis, budget_gesamt, ziel_url) values
 ('c1000000-0000-0000-0000-0000000000f1','b1000000-0000-0000-0000-0000000000f1','Kampagne Eins','analog','active',current_date, current_date+60, 500, 'https://eins.invalid'),
 ('c2000000-0000-0000-0000-0000000000f2','b2000000-0000-0000-0000-0000000000f2','Kampagne Zwei','digital','active',current_date, current_date+60, 900, 'https://zwei.invalid')
on conflict (id) do nothing;

insert into public.advertising_creatives(id, campaign_id, kind, status, file_url) values
 ('d1000000-0000-0000-0000-0000000000f1','c1000000-0000-0000-0000-0000000000f1','aushang','pending_review','https://eins.invalid/a.png'),
 ('d2000000-0000-0000-0000-0000000000f2','c2000000-0000-0000-0000-0000000000f2','aushang','pending_review','https://zwei.invalid/a.png')
on conflict (id) do nothing;

-- Werbeflaechen und Vertraege
insert into public.advertising_spaces(id, machine_id, position, bezeichnung, listenpreis_monat)
select 'e1000000-0000-0000-0000-0000000000f1', m.id, 'front', 'Flaeche Eins', 50 from public.machines m order by m.created_at limit 1
on conflict (id) do nothing;
insert into public.advertising_space_contracts(id, space_id, business_id, von, preis_monat, status, motiv_freigegeben_am, motiv_freigegeben_von)
values ('a1000000-0000-0000-0000-0000000000f2','e1000000-0000-0000-0000-0000000000f1','b2000000-0000-0000-0000-0000000000f2', current_date, 50, 'aktiv', now(), 'f2a00000-0000-0000-0000-000000000002')
on conflict (id) do nothing;

-- Abrechnungslauf und Budget der Firma 2
insert into public.business_invoice_runs(id, business_id, jahr, monat, grundlage, brutto, status)
values ('91000000-0000-0000-0000-0000000000f2','b2000000-0000-0000-0000-0000000000f2', extract(year from current_date)::int, extract(month from current_date)::int, '{"art":"zuschuss"}'::jsonb, 123.45, 'angefordert')
on conflict (id) do nothing;

insert into public.business_budgets(id, business_id, profile_id, monatslimit_brutto, zuschuss_prozent)
values ('92000000-0000-0000-0000-0000000000f2','b2000000-0000-0000-0000-0000000000f2','f2a00000-0000-0000-0000-000000000002', 200, 100)
on conflict (id) do nothing;

-- Einladung der Firma 2
insert into public.business_invitations(id, business_id, email, role, token_hash, expires_at)
values ('93000000-0000-0000-0000-0000000000f2','b2000000-0000-0000-0000-0000000000f2','neu@firma-zwei.invalid','member', extensions.digest('geheim-f2','sha256'), now()+interval '14 days')
on conflict (id) do nothing;

-- Lead der Firma 2
insert into public.leads(id, kind, company_name, contact_name, email, business_id)
values ('94000000-0000-0000-0000-0000000000f2','advertising','Firma Zwei GmbH','Kontakt Zwei','kontakt@firma-zwei.invalid','b2000000-0000-0000-0000-0000000000f2')
on conflict (id) do nothing;
