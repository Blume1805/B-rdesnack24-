-- Korrektur dreier ungueltiger Tests aus 94_loeschung.sql.
--
-- Zwei scheiterten am Aufbau, nicht an der Sache: Der Mailtest an einer
-- Vorlage, die es gar nicht gibt, der Gutscheintest am Geburtsdatum des
-- Testkontos. Beide werden hier so aufgesetzt, dass sie den Loeschstand
-- tatsaechlich pruefen.
--
-- Beim dritten war meine ERWARTUNG falsch: Ich hatte angenommen, an ein
-- gelöschtes Konto duerfe gar keine Post mehr gehen. Art. 18 DSGVO
-- schraenkt die Verarbeitung ein, er verbietet sie nicht - ueber das
-- Ergebnis seines Loeschverlangens ist der Betroffene gerade zu
-- informieren. Gesperrt gehoert die Werbung, nicht die Vertragsnachricht.
-- Genau das misst dieses Skript jetzt: das eine geht hinaus, das andere
-- wird unterdrueckt, mit Grund im Datensatz.
delete from pruef.ergebnis where test in (
  'Post an ein geloeschtes Konto','Geburtstagsangebot fuer ein geloeschtes Konto');
do $$
declare
  D uuid := '66666666-6666-6666-6666-666666666666';  -- geloeschtes Konto, Geburtstag heute
  V uuid := '77777777-7777-7777-7777-777777777777';  -- aktives Konto, Geburtstag heute (Gegenprobe)
  w text; r text;
  v_vertrag text; v_werbung text;
  n_vor int; n_nach int;
begin
  insert into auth.users (id, instance_id, aud, role, email, encrypted_password, created_at, updated_at, raw_user_meta_data)
  values (D,'00000000-0000-0000-0000-000000000000','authenticated','authenticated','geloescht@test.invalid','x',now(),now(),
          jsonb_build_object('birth_date', to_char(current_date - interval '30 years','YYYY-MM-DD'))),
         (V,'00000000-0000-0000-0000-000000000000','authenticated','authenticated','aktiv-geburtstag@test.invalid','x',now(),now(),
          jsonb_build_object('birth_date', to_char(current_date - interval '30 years','YYYY-MM-DD')))
  on conflict (id) do nothing;

  -- Wiederholbar machen: Warteschlange und Angebote der beiden Testkonten
  -- zuruecksetzen. Ohne das misst der zweite Lauf die Reste des ersten.
  delete from public.email_outbox where profile_id in (D,V);
  delete from public.personal_offers where customer_id in (D,V);

  alter table public.profiles disable trigger trg_profiles_guard;
  update public.profiles set deleted_at = now()  where id = D;
  update public.profiles set deleted_at = null   where id = V;
  alter table public.profiles enable trigger trg_profiles_guard;

  select key into v_vertrag from public.email_templates
   where is_active and category = 'transactional' order by key limit 1;
  select key into v_werbung from public.email_templates
   where is_active and category = 'marketing' order by key limit 1;

  -- 1) Die Vertragsnachricht MUSS hinausgehen (Art. 18 DSGVO)
  w := pruef.wahrheit(format('select coalesce(public.email_enqueue(%L, %L)::text, ''<null>'')', v_vertrag, D));
  r := pruef.wahrheit(format('select count(*)::text from public.email_outbox where profile_id=%L and status=''queued''', D));
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok,notiz)
   values ('Loeschung','Vertragspost an ein geloeschtes Konto','System','email_enqueue ('||v_vertrag||')',
           '1 Zeile in der Warteschlange - Art. 18 schraenkt ein, er verbietet nicht',
           'ergebnis='||left(w,12)||' / queued='||r, r='1',
           'Ueber das Ergebnis des Loeschverlangens ist der Betroffene zu informieren');

  -- 2) Die Werbung MUSS unterdrueckt werden - mit Grund im Datensatz
  w := pruef.wahrheit(format('select coalesce(public.email_enqueue(%L, %L)::text, ''<null>'')', v_werbung, D));
  r := pruef.wahrheit(format('select coalesce(string_agg(distinct status||''/''||coalesce(suppressed_reason,''-''),'',''),''keine Zeile'') from public.email_outbox where profile_id=%L and template_key=%L', D, v_werbung));
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Loeschung','Werbung an ein geloeschtes Konto','System','email_enqueue ('||v_werbung||')',
           'suppressed/konto_geloescht', r, r = 'suppressed/konto_geloescht');

  -- 3) GEGENPROBE: Das aktive Konto bekommt seine Vertragspost
  n_vor := pruef.wahrheit(format('select count(*)::text from public.email_outbox where profile_id=%L and status=''queued''', V))::int;
  w := pruef.wahrheit(format('select coalesce(public.email_enqueue(%L, %L)::text, ''<null>'')', v_vertrag, V));
  n_nach := pruef.wahrheit(format('select count(*)::text from public.email_outbox where profile_id=%L and status=''queued''', V))::int;
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Gegenprobe','Post an ein aktives Konto','System','email_enqueue',
           'genau eine Zeile mehr', n_vor||' -> '||n_nach, n_nach = n_vor + 1);

  -- 4) Geburtstagsangebot: heute IST der Geburtstag beider Konten
  w := pruef.wahrheit(format('select coalesce(public.grant_birthday_offer(%L)::text, ''<null>'')', D));
  r := pruef.wahrheit(format('select count(*)::text from public.personal_offers where customer_id=%L and source=''birthday''', D));
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Loeschung','Geburtstagsangebot fuer ein geloeschtes Konto','System','grant_birthday_offer','kein Angebot', 'Angebote='||r, r='0');

  w := pruef.wahrheit(format('select coalesce(public.grant_birthday_offer(%L)::text, ''<null>'')', V));
  r := pruef.wahrheit(format('select count(*)::text from public.personal_offers where customer_id=%L and source=''birthday''', V));
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok)
   values ('Gegenprobe','Geburtstagsangebot fuer ein aktives Konto','System','grant_birthday_offer','ein Angebot', 'Angebote='||r, r='1');
end $$;
