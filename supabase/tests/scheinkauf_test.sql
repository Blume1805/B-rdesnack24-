-- ============================================================================
-- pgTAP: Kein Kundenkonto kann Käufe erfinden (0070, Befund B-1).
-- Ausführung: supabase test db
--
-- `dev_add_demo_purchase` legte für jedes angemeldete Konto einen Kauf mit
-- frei wählbarem Betrag an — mit Treue-Coupons und Kassenbon als Folge.
-- Geprüft wird das Recht UND der tatsächliche Aufruf, und danach der
-- gespeicherte Zustand: Ein abgewiesener Aufruf darf keine Zeile hinterlassen.
-- ============================================================================
begin;
select plan(5);

select ok(
  not has_function_privilege('authenticated',
        'public.dev_add_demo_purchase(text, numeric)', 'EXECUTE'),
  'authenticated darf dev_add_demo_purchase nicht ausführen'
);

select ok(
  not has_function_privilege('anon',
        'public.dev_add_demo_purchase(text, numeric)', 'EXECUTE'),
  'anon darf dev_add_demo_purchase nicht ausführen'
);

-- Ein echtes Kundenkonto: Der Trigger auf auth.users legt Profil und
-- Kundenzeile an. Ohne echtes Konto scheiterte der Aufruf schon am
-- Fremdschlüssel, und der Test bestünde aus dem falschen Grund.
insert into auth.users (id, instance_id, aud, role, email, encrypted_password, created_at, updated_at)
values ('e5555555-5555-5555-5555-555555555555','00000000-0000-0000-0000-000000000000',
        'authenticated','authenticated','scheinkauf@test.de','x', now(), now());

select set_config('request.jwt.claims',
  json_build_object('sub', 'e5555555-5555-5555-5555-555555555555',
                    'role', 'authenticated')::text,
  true);

create temporary table _vorher on commit drop as
  select count(*)::int as n from public.purchases;
grant select on _vorher to authenticated;

set local role authenticated;
select throws_ok(
  $$ select public.dev_add_demo_purchase('card_ec', 30) $$,
  '42501',
  null,
  'Aufruf als Kundenkonto wird mit 42501 abgewiesen'
);
reset role;

select is(
  (select count(*)::int from public.purchases),
  (select n from _vorher),
  'der abgewiesene Aufruf hat keinen Kauf gespeichert'
);

-- Gegenprobe: Mit Eigentümerrechten bleibt die Funktion für Tests nutzbar.
-- Sonst hätte der Entzug mehr getroffen als beabsichtigt.
select ok(
  has_function_privilege('postgres',
        'public.dev_add_demo_purchase(text, numeric)', 'EXECUTE'),
  'Eigentümer kann die Funktion weiterhin für Tests aufrufen'
);

select * from finish();
rollback;
