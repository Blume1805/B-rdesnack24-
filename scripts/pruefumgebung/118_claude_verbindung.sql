-- Probe zur Claude-Verbindung (20261117120000).
-- Erwartung: Gesellschafter und Admin erhalten offene Vorgänge; das Ergebnis
-- enthält KEINE Personenkennung (UUID), keinen Namen und keine E-Mail-Adresse
-- einer beschäftigten Person und keine Freitexte. Kunden und anon erhalten
-- nichts. Jeder Aufruf lässt sich protokollieren.
truncate pruef.ergebnis restart identity;
do $$
declare
  M uuid := 'e7000000-0000-4000-8000-0000000000e7';   -- Beschäftigte(r)
  G uuid := '33333333-3333-3333-3333-333333333333';   -- Gesellschafter
  S uuid := 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa';   -- Admin
  K uuid := '11111111-1111-1111-1111-111111111111';   -- Kunde
  D uuid := 'd7000000-0000-4000-8000-0000000000d7';
  A uuid := 'a7000000-0000-4000-8000-0000000000a7';
  v jsonb; t text; n int;
begin
  -- Aufräumen (wiederholbar)
  delete from public.document_employee_signatures where document_id = D;
  delete from public.document_approval_decisions where approval_id = A;
  delete from public.document_approvals where id = A;
  delete from public.documents where id = D;
  delete from public.audit_log where table_name = 'claude_verbindung';

  -- Beschäftigte(r) mit erkennbarem Namen und Adresse
  if not exists (select 1 from auth.users where id = M) then
    insert into auth.users (id, instance_id, aud, role, email, encrypted_password, created_at, updated_at)
    values (M, '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated',
            'erika.mitarbeiterin@test.invalid', 'x', now(), now());
  end if;
  alter table public.profiles disable trigger trg_profiles_guard;
  update public.profiles set role = 'employee', status = 'active', full_name = 'Erika Mitarbeiterin'
   where id = M;
  alter table public.profiles enable trigger trg_profiles_guard;

  insert into public.documents (id, title, current_version, status, valid_until, is_template)
  values (D, 'Hygieneschulung 2026', 1, 'active', current_date + 10, false);
  insert into public.document_employee_signatures (document_id, document_version, employee_id, invited_by, invited_at, status)
  values (D, 1, M, G, now() - interval '3 days', 'pending');
  insert into public.document_approvals (id, document_kind, period_from, period_to, title, requested_by, status, notes, snapshot)
  values (A, 'haccp_temperature', date '2026-10-01', date '2026-10-31', 'Temperatur Oktober', G, 'pending',
          'Freitext mit Erika Mitarbeiterin', '{"erstellt_von": "Erika Mitarbeiterin"}'::jsonb);
  insert into public.document_approval_decisions (approval_id, approver_id, decision, comment)
  values (A, S, 'approved', 'Kommentar von Erika');

  -- Gesellschafter
  perform set_config('request.jwt.claims', json_build_object('sub', G, 'role', 'authenticated')::text, true);
  set local role authenticated;
  v := public.mcp_offene_vorgaenge();
  reset role;
  t := v::text;
  insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok) values
   ('claude','Freigabe erscheint','gesellschafter','Temperatur Oktober', v->'freigaben_offen'->0->>'titel', v->'freigaben_offen'->0->>'titel' = 'Temperatur Oktober'),
   ('claude','eigene Entscheidung noch offen, 1 Zustimmung','gesellschafter','offen/1',
      (v->'freigaben_offen'->0->>'deine_entscheidung')||'/'||(v->'freigaben_offen'->0->>'zustimmungen'),
      v->'freigaben_offen'->0->>'deine_entscheidung' = 'offen' and (v->'freigaben_offen'->0->>'zustimmungen')::int = 1),
   ('claude','offene Unterschrift nur als Anzahl','gesellschafter','1', v->'unterschriften_offen'->0->>'offen', (v->'unterschriften_offen'->0->>'offen')::int = 1),
   ('claude','ablaufendes Dokument erscheint','gesellschafter','Hygieneschulung 2026', v->'dokumente_laufen_ab'->0->>'dokument', v->'dokumente_laufen_ab'->0->>'dokument' = 'Hygieneschulung 2026'),
   ('claude','keine Personenkennung (UUID) im Ergebnis','gesellschafter','keine',
      coalesce(substring(t from '[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}'),'keine'),
      t !~ '[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}'),
   ('claude','kein Name, keine E-Mail, kein Freitext','gesellschafter','keine Treffer',
      case when t ~* 'erika|mitarbeiterin|@|freitext|kommentar' then 'Treffer' else 'keine Treffer' end,
      t !~* 'erika|mitarbeiterin|@|freitext|kommentar');

  -- Admin sieht es ebenfalls
  n := pruef.zaehle('select * from public.mcp_offene_vorgaenge() x', S);
  insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok) values ('claude','Admin erhält Ergebnis','admin','1',n::text,n=1);
  -- Kunde, Beschäftigte(r) und anon erhalten nichts
  n := pruef.zaehle('select * from public.mcp_offene_vorgaenge() x', K);
  insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok) values ('claude','Kunde abgewiesen','kunde','-1',n::text,n=-1);
  n := pruef.zaehle('select * from public.mcp_offene_vorgaenge() x', M);
  insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok) values ('claude','Beschäftigte(r) abgewiesen','mitarbeiter','-1',n::text,n=-1);
  n := pruef.zaehle('select * from public.mcp_offene_vorgaenge() x', null, 'anon');
  insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok) values ('claude','anon abgewiesen','anon','-1',n::text,n=-1);

  -- Protokollierung
  perform set_config('request.jwt.claims', json_build_object('sub', G, 'role', 'authenticated')::text, true);
  set local role authenticated;
  perform public.mcp_aufruf_protokollieren('protokoll_pdf', '{"art":"temperatur"}');
  reset role;
  perform set_config('request.jwt.claims', '', true);
  n := (select count(*) from public.audit_log where table_name = 'claude_verbindung' and actor_id = G and action = 'mcp:protokoll_pdf');
  insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok) values ('claude','Aufruf protokolliert','gesellschafter','1',n::text,n=1);
  n := pruef.zaehle($q$select * from public.mcp_aufruf_protokollieren('x','{}') x$q$, null, 'anon');
  insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok) values ('claude','anon kann nicht protokollieren','anon','-1',n::text,n=-1);
  -- Ablage gesperrt
  n := pruef.zaehle($q$select * from storage.objects where bucket_id = 'mcp-exporte'$q$, G);
  insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok) values ('claude','Ablage mcp-exporte ist privat','postgres','false',
     (select public::text from storage.buckets where id='mcp-exporte'), (select not public from storage.buckets where id='mcp-exporte'));
  -- KI-Register
  insert into pruef.ergebnis(gruppe,test,akteur,erwartet,gemessen,ok) values ('claude','KI-Register-Eintrag ohne Personenbezug','postgres','false',
     (select personenbezug::text from public.ki_register where key='claude_verwaltung_mcp'),
     (select not personenbezug from public.ki_register where key='claude_verwaltung_mcp'));

  -- Aufräumen
  delete from public.document_employee_signatures where document_id = D;
  delete from public.document_approval_decisions where approval_id = A;
  delete from public.document_approvals where id = A;
  delete from public.documents where id = D;
end $$;
select gruppe, test, erwartet, gemessen, ok from pruef.ergebnis order by id;
