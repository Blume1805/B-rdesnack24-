-- Korrektur zweier ungueltiger Tests: Der Mailtest scheiterte an einer
-- fehlenden Vorlage, der Angebotstest am Geburtsdatum - beide also NICHT
-- an der Loeschung. Beide werden jetzt so aufgesetzt, dass sie den
-- Loeschstand tatsaechlich pruefen.
delete from pruef.ergebnis where test in ('Post an ein geloeschtes Konto','Geburtstagsangebot fuer ein geloeschtes Konto');
do $$
declare
  D uuid := '66666666-6666-6666-6666-666666666666';  -- geloeschtes Konto, Geburtstag heute
  V uuid := '77777777-7777-7777-7777-777777777777';  -- aktives Konto, Geburtstag heute (Gegenprobe)
  w text; r text;
  v_vorlage text;
begin
  insert into auth.users (id, instance_id, aud, role, email, encrypted_password, created_at, updated_at, raw_user_meta_data)
  values (D,'00000000-0000-0000-0000-000000000000','authenticated','authenticated','geloescht@test.invalid','x',now(),now(),
          jsonb_build_object('birth_date', to_char(current_date - interval '30 years','YYYY-MM-DD'))),
         (V,'00000000-0000-0000-0000-000000000000','authenticated','authenticated','aktiv-geburtstag@test.invalid','x',now(),now(),
          jsonb_build_object('birth_date', to_char(current_date - interval '30 years','YYYY-MM-DD')))
  on conflict (id) do nothing;

  alter table public.profiles disable trigger trg_profiles_guard;
  update public.profiles set deleted_at = now() where id = D;
  alter table public.profiles enable trigger trg_profiles_guard;

  select key into v_vorlage from public.email_templates
   where is_active and category = 'transactional' order by key limit 1;

  -- Post an ein geloeschtes Konto, mit einer WIRKLICH aktiven Vorlage
  w := pruef.wahrheit(format('select coalesce(public.email_enqueue(%L, %L)::text, ''<null>'')', v_vorlage, D));
  r := pruef.wahrheit(format('select count(*)::text from public.email_outbox where profile_id=%L and status=''queued''', D));
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Loeschung','Post an ein geloeschtes Konto','System','email_enqueue ('||v_vorlage||')','nichts in der Warteschlange', 'ergebnis='||left(w,12)||' / queued='||r, r='0');

  -- Gegenprobe: aktives Konto bekommt seine Post
  w := pruef.wahrheit(format('select coalesce(public.email_enqueue(%L, %L)::text, ''<null>'')', v_vorlage, V));
  r := pruef.wahrheit(format('select count(*)::text from public.email_outbox where profile_id=%L and status=''queued''', V));
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Gegenprobe','Post an ein aktives Konto','System','email_enqueue','eine Zeile in der Warteschlange', 'queued='||r, r='1');

  -- Geburtstagsangebot: heute IST der Geburtstag beider Konten
  w := pruef.wahrheit(format('select coalesce(public.grant_birthday_offer(%L)::text, ''<null>'')', D));
  r := pruef.wahrheit(format('select count(*)::text from public.personal_offers where customer_id=%L and source=''birthday''', D));
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Loeschung','Geburtstagsangebot fuer ein geloeschtes Konto','System','grant_birthday_offer','kein Angebot', 'Angebote='||r, r='0');

  w := pruef.wahrheit(format('select coalesce(public.grant_birthday_offer(%L)::text, ''<null>'')', V));
  r := pruef.wahrheit(format('select count(*)::text from public.personal_offers where customer_id=%L and source=''birthday''', V));
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Gegenprobe','Geburtstagsangebot fuer ein aktives Konto','System','grant_birthday_offer','ein Angebot', 'Angebote='||r, r='1');
end $$;
