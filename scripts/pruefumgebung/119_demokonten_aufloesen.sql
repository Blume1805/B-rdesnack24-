-- Probe zu 20261118090000 (Demo-Konten auflösen) mit nachgebauten Konten
-- unter den echten Kennungen. Erwartung: Unterschriften hängen danach an
-- Admin S bzw. Gesellschafter G, offene Demo-Freigaben sind abgelehnt, die
-- drei Konten sind gelöscht samt Anmeldedaten; abgeschlossene Freigaben und
-- fremde Daten bleiben unberührt. Zweiter Lauf ändert nichts mehr.
truncate pruef.ergebnis restart identity;
do $$
declare
  GS uuid := '823852fd-d552-49fd-9563-326040ea53e8';
  AD uuid := '8b93c2c0-8714-4517-a369-7d3e3ff74b8f';
  KU uuid := 'c4f2ed06-f955-47dc-b262-43b0d8b6a60c';
  S  uuid := 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa';   -- echter Admin
  G  uuid := '33333333-3333-3333-3333-333333333333';   -- echte Gesellschafterin
  F1 uuid := 'f1000000-0000-4000-8000-0000000000f1';   -- offene Freigabe (Demo)
  F2 uuid := 'f2000000-0000-4000-8000-0000000000f2';   -- abgeschlossene Freigabe (Demo)
  F3 uuid := 'f3000000-0000-4000-8000-0000000000f3';   -- offene Freigabe (echt)
  v jsonb; t text; n int;
  r record;
begin
  for r in select * from (values (GS, 'demo-gs@boerdesnack24.app', 'shareholder'),
                                 (AD, 'demo-admin@boerdesnack24.app', 'system_admin'),
                                 (KU, 'kunde.test@example.invalid', 'customer')) x(id, mail, rolle) loop
    if not exists (select 1 from auth.users where id = r.id) then
      insert into auth.users (id, instance_id, aud, role, email, encrypted_password, created_at, updated_at, raw_user_meta_data)
      values (r.id, '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated', r.mail, 'x', now(), now(),
              jsonb_build_object('full_name', 'Testname ' || r.rolle));
    end if;
    alter table public.profiles disable trigger trg_profiles_guard;
    update public.profiles set role = r.rolle::app.role_key, status = 'active' where id = r.id;
    alter table public.profiles enable trigger trg_profiles_guard;
    insert into auth.identities (user_id, provider, identity_data) values (r.id, 'email', jsonb_build_object('email', r.mail));
  end loop;
  update auth.users set banned_until = 'infinity' where id in (GS, AD);

  delete from public.partner_signatures where full_name in ('Philipp Blume', 'Pia Blume');
  insert into public.partner_signatures (full_name, role_label, sort_order, created_at, profile_id)
  values ('Philipp Blume', 'Gesellschafter', 1, now(), GS), ('Pia Blume', 'Gesellschafterin', 2, now(), AD);
  delete from public.document_approvals where id in (F1, F2, F3);
  insert into public.document_approvals (id, document_kind, period_from, period_to, title, requested_by, status, snapshot)
  values (F1, 'haccp_disposal', date '2026-07-01', date '2026-07-31', 'Vernichtung Juli', GS, 'pending', '{}'),
         (F2, 'haccp_maintenance', date '2026-07-01', date '2026-07-31', 'Wartung Juli', AD, 'approved', '{}'),
         (F3, 'haccp_cleaning', date '2026-11-01', date '2026-11-30', 'Reinigung November', S, 'pending', '{}');

  v := app.demokonten_aufloesen();
  insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok) values ('demo','Bericht','postgres','2 / 1 / 3', v::text,
     (v->>'unterschriften_umgehaengt')::int = 2 and (v->>'freigaben_abgelehnt')::int = 1 and jsonb_array_length(v->'konten_geloescht') = 3);

  t := (select string_agg(full_name || '=' || case profile_id when S then 'Admin' when G then 'Gesellschafterin' else 'FALSCH' end, ', ' order by sort_order)
          from public.partner_signatures where full_name in ('Philipp Blume', 'Pia Blume'));
  insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok) values ('demo','Unterschriften umgehängt','postgres',
     'Philipp Blume=Admin, Pia Blume=Gesellschafterin', t, t = 'Philipp Blume=Admin, Pia Blume=Gesellschafterin');

  t := (select string_agg(status::text || coalesce('+' || (cancelled_at is not null)::text, ''), ',' order by id) from public.document_approvals where id in (F1, F2, F3));
  insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok) values ('demo','Freigaben','postgres',
     'Demo offen abgelehnt, abgeschlossen und echte unverändert', t, t = 'rejected+true,approved+false,pending+false');

  n := (select count(*) from auth.users where id in (GS, AD, KU) and email not like 'geloescht+%@invalid');
  n := n + (select count(*) from auth.identities where user_id in (GS, AD, KU));
  n := n + (select count(*) from public.profiles where id in (GS, AD, KU) and deleted_at is null);
  insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok) values ('demo','Konten samt Anmeldedaten gelöscht','postgres','0', n::text, n = 0);

  v := app.demokonten_aufloesen();
  insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok) values ('demo','Zweiter Lauf ändert nichts','postgres','0 / 0 / 0', v::text,
     (v->>'unterschriften_umgehaengt')::int = 0 and (v->>'freigaben_abgelehnt')::int = 0 and jsonb_array_length(v->'konten_geloescht') = 0);

  n := (select count(*) from public.profiles where id in (S, G) and deleted_at is null and status = 'active');
  insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok) values ('demo','Echte Konten unberührt','postgres','2', n::text, n = 2);

  -- Aufräumen der Freigaben (die Konten bleiben gelöscht; Probe läuft auf frischem Aufbau)
  delete from public.document_approvals where id in (F1, F2, F3);
end $$;
select gruppe, test, erwartet, gemessen, ok from pruef.ergebnis order by id;
