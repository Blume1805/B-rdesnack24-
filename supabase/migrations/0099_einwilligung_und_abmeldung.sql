-- ============================================================================
-- 0099 · Einwilligung und Abmeldung — die rechtliche Voraussetzung für
--        alles, was Werbung ist
-- ----------------------------------------------------------------------------
-- Von den gewünschten E-Mails ist ein Teil Vertragspost und ein Teil
-- Werbung. Der Unterschied ist kein Geschmack, sondern entscheidet, ob eine
-- Mail überhaupt losgeschickt werden darf.
--
--   * **Vertragspost** (Registrierung, Passwort, Rechnung, Kündigung,
--     Sicherheitshinweis): Die darf und muss raus. Sie hängt am Vertrag,
--     nicht an einer Einwilligung. Ein Abmelden davon gibt es nicht —
--     wer eine Kündigungsbestätigung abbestellen könnte, stünde nachher
--     ohne Nachweis da.
--
--   * **Werbung** (Neue Funktionen, App-Updates, saisonale Aktionen,
--     Geburtstagsgutschein): Die braucht nach § 7 Abs. 2 Nr. 2 UWG eine
--     **vorherige ausdrückliche Einwilligung**. Ohne die ist jede einzelne
--     Mail eine abmahnfähige unzumutbare Belästigung — unabhängig davon,
--     wie hübsch sie aussieht.
--
-- Deshalb steht diese Migration vor allen Vorlagen. Erst der Rahmen, dann
-- der Inhalt.
--
-- ----------------------------------------------------------------------------
-- Warum ein Ereignisprotokoll und kein Häkchen
--
-- Art. 7 Abs. 1 DSGVO legt die Beweislast auf euch: Ihr müsst nachweisen
-- können, dass eingewilligt wurde. Ein `bool` auf `profiles` kann das
-- nicht — es sagt, wie es jetzt steht, nicht wie es dazu kam, und ein
-- Widerruf löscht den Beweis, dass es je anders war.
--
-- Deshalb `email_consent_event`: eine Zeile je Vorgang, nur angehängt, nie
-- geändert. Festgehalten wird **der Wortlaut, dem zugestimmt wurde**
-- (`proof_text`) — denn nachzuweisen ist nicht „ein Haken war gesetzt",
-- sondern wozu. Ändert ihr später den Einwilligungstext, bleiben die alten
-- Zeilen mit dem alten Wortlaut stehen.
--
-- Der aktuelle Stand ist daraus abgeleitet (`email_has_consent`), nicht
-- gespeichert. Damit kann er nicht auseinanderlaufen.
--
-- ----------------------------------------------------------------------------
-- Datensparsamkeit
--
-- IP und User-Agent werden mitgeschrieben, weil sie den Nachweis tragen —
-- aber nur bei der **Erteilung**, nicht beim Widerruf. Für einen Widerruf
-- braucht niemand einen Beweis; er gilt formlos und sofort (Art. 7 Abs. 3
-- DSGVO). Wer den Widerruf protokolliert wie eine Zustimmung, sammelt
-- Daten ohne Zweck.
-- ============================================================================

-- ----------------------------------------------------------------------------
-- 1) Themen, für die eingewilligt werden kann
--
-- Bewusst eine Tabelle und kein Enum: Ein weiteres Thema soll eine Zeile
-- sein, keine Migration am Typ.
-- ----------------------------------------------------------------------------
create table if not exists public.email_topic (
  key         text primary key,
  label       text not null,
  description text not null,
  sort        int  not null default 100,
  created_at  timestamptz not null default now()
);

comment on table public.email_topic is
  'Themen der Werbepost. Vertragspost taucht hier NICHT auf — sie ist '
  'nicht abbestellbar und braucht keine Einwilligung.';

insert into public.email_topic (key, label, description, sort) values
  ('produkt_neuigkeiten',
   'Neue Funktionen und App-Updates',
   'Wenn es in der App etwas Neues gibt — höchstens ein paar Mal im Jahr.',
   10),
  ('aktionen',
   'Aktionen und Angebote',
   'Saisonale Aktionen, Rabatte und Aktionen an den Automaten.',
   20),
  ('geburtstag',
   'Geburtstagsgruß',
   'Einmal im Jahr ein Gutschein zum Geburtstag.',
   30)
on conflict (key) do nothing;

-- ----------------------------------------------------------------------------
-- 2) Das Einwilligungsprotokoll — nur anhängen
-- ----------------------------------------------------------------------------
create table if not exists public.email_consent_event (
  id          uuid primary key default gen_random_uuid(),
  profile_id  uuid not null references public.profiles(id) on delete cascade,
  topic_key   text not null references public.email_topic(key),
  granted     boolean not null,
  occurred_at timestamptz not null default now(),

  -- Woher der Vorgang kam: 'registrierung', 'profil', 'abmeldelink', 'intern'.
  source      text not null,

  -- Der Wortlaut, dem zugestimmt wurde. Pflicht bei Erteilung, sinnlos
  -- beim Widerruf — siehe CHECK unten.
  proof_text  text,

  -- Nur bei Erteilung, siehe Kopf.
  ip          inet,
  user_agent  text,

  -- Wer gehandelt hat. Normalerweise die Person selbst; bei 'intern'
  -- diejenige, die es eingetragen hat.
  actor_id    uuid references public.profiles(id),

  constraint email_consent_nachweis_bei_erteilung
    check (not granted or (proof_text is not null and length(proof_text) >= 10)),
  constraint email_consent_kein_beweis_beim_widerruf
    check (granted or (ip is null and user_agent is null))
);

create index if not exists email_consent_event_profil_idx
  on public.email_consent_event (profile_id, topic_key, occurred_at desc);
create index if not exists email_consent_event_actor_idx
  on public.email_consent_event (actor_id);

comment on table public.email_consent_event is
  'Nur anhängen, nie ändern. Trägt die Nachweispflicht aus Art. 7 Abs. 1 '
  'DSGVO. Der aktuelle Stand wird daraus abgeleitet, nicht gespeichert.';

alter table public.email_consent_event enable row level security;

-- Lesen: die eigenen Zeilen, und intern alles. Schreiben ausschliesslich
-- über die Funktionen weiter unten — deshalb gar keine INSERT-Policy.
drop policy if exists consent_read on public.email_consent_event;
create policy consent_read on public.email_consent_event
  for select to authenticated
  using (
    profile_id = (select auth.uid())
    or public.is_internal((select auth.uid()))
  );

revoke all on public.email_consent_event from anon, authenticated;
grant select on public.email_consent_event to authenticated;

-- Änderungen sperren. Ein Protokoll, das sich nachträglich ändern lässt,
-- beweist nichts.
--
-- **Löschen bleibt erlaubt, und zwar mit Absicht.** `profile_id` hängt an
-- `on delete cascade`: Würde der Trigger auch DELETE abfangen, liesse sich
-- ein Konto nicht mehr löschen — der Cascade liefe in die Ausnahme. Damit
-- stünde ein Nachweisprotokoll gegen Art. 17 DSGVO, und das Protokoll
-- verliert. Missbrauchen lässt sich das kaum: Wer die Einwilligung tilgen
-- will, müsste das Profil mitlöschen — und hat danach niemanden mehr, dem
-- er schreiben könnte.
create or replace function public.email_consent_unveraenderlich()
returns trigger
language plpgsql
as $function$
begin
  raise exception
    'email_consent_event ist ein Nachweisprotokoll und wird nur angehängt '
    '(Art. 7 Abs. 1 DSGVO). Ein Widerruf ist eine NEUE Zeile mit '
    'granted = false.';
end;
$function$;

drop trigger if exists email_consent_event_kein_update on public.email_consent_event;
create trigger email_consent_event_kein_update
  before update on public.email_consent_event
  for each row execute function public.email_consent_unveraenderlich();

-- ----------------------------------------------------------------------------
-- 3) Aktueller Stand — abgeleitet
-- ----------------------------------------------------------------------------
create or replace function public.email_has_consent(p_profile uuid, p_topic text)
returns boolean
language sql
stable
security definer
set search_path to 'public', 'app'
as $function$
  -- Kein Ereignis = keine Einwilligung. Schweigen ist keine Zustimmung
  -- (Erwägungsgrund 32 DSGVO), deshalb `coalesce(..., false)` und nicht NULL.
  select coalesce(
    (select e.granted
       from public.email_consent_event e
      where e.profile_id = p_profile
        and e.topic_key  = p_topic
      order by e.occurred_at desc, e.id desc
      limit 1),
    false);
$function$;

comment on function public.email_has_consent(uuid, text) is
  'Letztes Ereignis gewinnt. Ohne Ereignis: false.';

-- Der Stand aller Themen für die angemeldete Person — für den Profil-Tab.
create or replace function public.email_consent_state()
returns table (
  topic_key   text,
  label       text,
  description text,
  granted     boolean,
  changed_at  timestamptz
)
language sql
stable
security definer
set search_path to 'public', 'app'
as $function$
  select t.key, t.label, t.description,
         public.email_has_consent((select auth.uid()), t.key),
         (select max(e.occurred_at) from public.email_consent_event e
           where e.profile_id = (select auth.uid()) and e.topic_key = t.key)
    from public.email_topic t
   where (select auth.uid()) is not null
   order by t.sort, t.key;
$function$;

-- ----------------------------------------------------------------------------
-- 4) Erteilen und widerrufen
-- ----------------------------------------------------------------------------
create or replace function public.email_consent_grant(
  p_topic      text,
  p_proof_text text,
  p_source     text default 'profil',
  p_user_agent text default null
)
returns boolean
language plpgsql
security definer
set search_path to 'public', 'app'
as $function$
declare
  v_uid uuid := auth.uid();
begin
  if v_uid is null then
    raise exception 'Nicht angemeldet';
  end if;

  if not exists (select 1 from public.email_topic where key = p_topic) then
    raise exception 'Unbekanntes Thema: %', p_topic;
  end if;

  -- Der Wortlaut ist der Nachweis. Ohne ihn ist die Zeile wertlos, also
  -- wird sie gar nicht erst angelegt.
  if p_proof_text is null or length(trim(p_proof_text)) < 10 then
    raise exception
      'Der Einwilligungstext muss mitgegeben werden — er ist der Nachweis.';
  end if;

  insert into public.email_consent_event
    (profile_id, topic_key, granted, source, proof_text, ip, user_agent, actor_id)
  values
    (v_uid, p_topic, true, coalesce(p_source, 'profil'), trim(p_proof_text),
     nullif(current_setting('request.headers', true)::jsonb ->> 'x-forwarded-for', '')::inet,
     p_user_agent, v_uid);

  return true;
exception
  -- Eine unbrauchbare IP darf den Vorgang nicht scheitern lassen. Die
  -- Einwilligung ist wichtiger als ihre Randnotiz.
  when invalid_text_representation then
    insert into public.email_consent_event
      (profile_id, topic_key, granted, source, proof_text, user_agent, actor_id)
    values
      (v_uid, p_topic, true, coalesce(p_source, 'profil'), trim(p_proof_text),
       p_user_agent, v_uid);
    return true;
end;
$function$;

create or replace function public.email_consent_revoke(
  p_topic  text,
  p_source text default 'profil'
)
returns boolean
language plpgsql
security definer
set search_path to 'public', 'app'
as $function$
declare
  v_uid uuid := auth.uid();
begin
  if v_uid is null then
    raise exception 'Nicht angemeldet';
  end if;

  if not exists (select 1 from public.email_topic where key = p_topic) then
    raise exception 'Unbekanntes Thema: %', p_topic;
  end if;

  -- Ein Widerruf muss so einfach sein wie die Erteilung (Art. 7 Abs. 3
  -- Satz 4 DSGVO): kein Grund, kein Nachweis, keine Rückfrage.
  insert into public.email_consent_event
    (profile_id, topic_key, granted, source, actor_id)
  values (v_uid, p_topic, false, coalesce(p_source, 'profil'), v_uid);

  return true;
end;
$function$;

-- ----------------------------------------------------------------------------
-- 5) Der Abmeldelink in jeder Werbemail
--
-- In jede Werbemail gehört ein Abmeldeweg, der **ohne Anmeldung**
-- funktioniert (§ 7 Abs. 3 Nr. 4 UWG; und Gmail verlangt seit 2024 für
-- Massenversender zusätzlich `List-Unsubscribe`). Wer sich erst einloggen
-- muss, um Werbung abzubestellen, hat keinen einfachen Weg.
--
-- Das Merkmal steht im Klartext, nicht als Hash. Ein Hash wäre hier
-- Sicherheitstheater: Der Link muss in jeder Mail erneut erzeugt werden,
-- also müsste der Klartext ohnehin ableitbar bleiben. Und was jemand mit
-- einem fremden Merkmal anstellen kann, ist genau eine Sache: die Person
-- von Werbung abmelden. Der Schaden geht gegen null, der Nutzen eines
-- funktionierenden Abmeldelinks ist gross.
-- ----------------------------------------------------------------------------
create table if not exists public.email_unsubscribe_token (
  profile_id uuid primary key references public.profiles(id) on delete cascade,
  token      text not null unique default encode(gen_random_bytes(24), 'hex'),
  created_at timestamptz not null default now()
);

alter table public.email_unsubscribe_token enable row level security;
revoke all on public.email_unsubscribe_token from anon, authenticated;

comment on table public.email_unsubscribe_token is
  'Ein dauerhaftes Merkmal je Person für den Abmeldelink in Werbemails. '
  'Keine Policy, keine Rechte: ausschliesslich über SECURITY-DEFINER-'
  'Funktionen erreichbar.';

-- Beim Versand aufgerufen: liefert das Merkmal und legt es beim ersten
-- Mal an.
create or replace function public.email_unsubscribe_token_for(p_profile uuid)
returns text
language plpgsql
security definer
set search_path to 'public', 'app'
as $function$
declare v_token text;
begin
  insert into public.email_unsubscribe_token (profile_id)
  values (p_profile)
  on conflict (profile_id) do nothing;

  select token into v_token
    from public.email_unsubscribe_token where profile_id = p_profile;

  return v_token;
end;
$function$;

revoke all on function public.email_unsubscribe_token_for(uuid) from public, anon, authenticated;

-- Der Abmeldeweg selbst. Ohne Anmeldung aufrufbar — das Merkmal ist der
-- Ausweis. Absichtlich mehrfach aufrufbar: Ein zweiter Klick auf denselben
-- Link soll nicht in einen Fehler laufen, sondern wieder „abgemeldet"
-- sagen.
create or replace function public.email_unsubscribe(p_token text)
returns table (ok boolean, topics_abgemeldet int)
language plpgsql
security definer
set search_path to 'public', 'app'
as $function$
declare
  v_profile uuid;
  v_anzahl  int := 0;
  v_topic   text;
begin
  if p_token is null or length(p_token) < 20 then
    return query select false, 0;
    return;
  end if;

  select profile_id into v_profile
    from public.email_unsubscribe_token where token = p_token;

  -- Unbekanntes Merkmal: gleiche Antwort wie bei einem gültigen. Sonst
  -- liesse sich über die Antwort durchprobieren, welche Merkmale es gibt.
  if v_profile is null then
    return query select true, 0;
    return;
  end if;

  for v_topic in select key from public.email_topic loop
    if public.email_has_consent(v_profile, v_topic) then
      insert into public.email_consent_event
        (profile_id, topic_key, granted, source, actor_id)
      values (v_profile, v_topic, false, 'abmeldelink', v_profile);
      v_anzahl := v_anzahl + 1;
    end if;
  end loop;

  return query select true, v_anzahl;
end;
$function$;

-- ----------------------------------------------------------------------------
-- 6) Rechte
-- ----------------------------------------------------------------------------
revoke all on function public.email_consent_grant(text,text,text,text)  from public, anon;
revoke all on function public.email_consent_revoke(text,text)           from public, anon;
revoke all on function public.email_consent_state()                     from public, anon;
revoke all on function public.email_has_consent(uuid,text)              from public, anon, authenticated;

grant execute on function public.email_consent_grant(text,text,text,text) to authenticated;
grant execute on function public.email_consent_revoke(text,text)          to authenticated;
grant execute on function public.email_consent_state()                    to authenticated;

-- Der Abmeldelink muss ohne Anmeldung gehen — das ist der ganze Zweck.
grant execute on function public.email_unsubscribe(text) to anon, authenticated;

grant select on public.email_topic to authenticated;
