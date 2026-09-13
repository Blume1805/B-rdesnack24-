-- ===========================================================================
-- Werbeplatz auf der Kundenkarte
-- ===========================================================================
--
-- Unternehmen, die digitale Werbung gebucht haben, sollen ihr Logo auf der
-- Kundenkarte zeigen koennen. Drei Entscheidungen tragen den ganzen Aufbau
-- und sind wichtiger als der Code darunter.
--
-- ERSTENS: DIE AUSWAHL IST NICHT PERSONALISIERT.
-- Welches Logo ein Kunde sieht, haengt ausschliesslich vom Kalendertag ab,
-- nicht von seinem Konto, seiner Kaufhistorie, seinem Standort oder seinem
-- Punktestand. Alle Kunden sehen an einem Tag dieselbe Reihenfolge. Das ist
-- keine technische Bequemlichkeit, sondern die Entscheidung, die den
-- gesamten Datenschutzaufwand dieser Flaeche auf null bringt: es entsteht
-- kein Profiling, keine Einzelfallentscheidung, kein berechtigtes Interesse,
-- das gegen den Kunden abzuwaegen waere, und ein Widerspruch gegen
-- personalisierte Anzeige laesst diese Flaeche unberuehrt, weil sie nie
-- personalisiert war. Wer das spaeter aendern will, aendert nicht eine
-- Sortierklausel, sondern die datenschutzrechtliche Grundlage der Flaeche.
--
-- ZWEITENS: DAS LOGO IST ALS WERBUNG ZU KENNZEICHNEN.
-- Paragraf 5a Abs. 4 UWG verlangt, dass der kommerzielle Zweck einer
-- Handlung kenntlich ist, wenn er sich nicht unmittelbar aus den Umstaenden
-- ergibt. Auf einer Kundenkarte, die sonst nur eigene Inhalte traegt, ergibt
-- er sich gerade nicht: ein fremdes Logo neben der eigenen Kundennummer
-- koennte als Partnerschaft, Zahlungsmittel oder Zugehoerigkeit gelesen
-- werden. Die Funktion liefert deshalb das Feld kennzeichnung mit, und die
-- Oberflaeche hat es sichtbar auszugeben. Es ist nicht optional.
--
-- DRITTENS: DER WERBETREIBENDE ERFAEHRT NICHTS UEBER DEN EINZELNEN KUNDEN.
-- Gezaehlt wird ueber advertising_event_record in die bestehende Auswertung
-- mit Mindestgruppengroesse. Die Funktion hier gibt keine Kundendaten aus
-- und nimmt keine entgegen.
-- ===========================================================================
--
-- ZUM ABGLEICH MIT PRODUKTION: dort stehen zu dieser Datei zwei Zeilen im
-- Migrationsverzeichnis, kundenkarte_werbeplatz (20260903161853) und
-- kundenkarte_werbeplatz_wortlaut_aus_repo (20260903163027). Die erste ging
-- ohne die Kommentare im Funktionsrumpf hinein, die zweite hat den Wortlaut
-- dieser Datei nachgezogen. Beide sind Wiederholungen desselben Inhalts, und
-- die Datei hier ist idempotent -- ein Neuaufbau von Null braucht nur sie.
-- Geprueft wurde nicht die Gleichheit der Dateien, sondern die Gleichheit
-- des Ergebnisses: md5(pg_get_functiondef(...)) der Funktion lautet in der
-- lokalen Replik und in Produktion gleichermassen
-- 874742cf85feb8d59833899426500f56.


-- --------------------------------------------------------------------------
-- 1. Ablage fuer die Logos
-- --------------------------------------------------------------------------
-- Oeffentlich lesbar, weil ein Werbelogo genau dazu da ist, gesehen zu
-- werden; signierte Links waeren hier Aufwand ohne Schutzwirkung.
-- KEIN SVG in der Liste der erlaubten Typen. Ein SVG ist ein XML-Dokument
-- und kann Skript enthalten; aus einem oeffentlichen Bucket ausgeliefert
-- waere das eine Einladung. Rasterformate koennen das nicht.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'werbelogos', 'werbelogos', true, 524288,
  array['image/png', 'image/jpeg', 'image/webp']
)
on conflict (id) do update set
  public             = excluded.public,
  file_size_limit    = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists werbelogos_lesen   on storage.objects;
drop policy if exists werbelogos_anlegen on storage.objects;
drop policy if exists werbelogos_aendern on storage.objects;
drop policy if exists werbelogos_loeschen on storage.objects;

create policy werbelogos_lesen on storage.objects
  for select using (bucket_id = 'werbelogos');

create policy werbelogos_anlegen on storage.objects
  for insert with check (
    bucket_id = 'werbelogos'
    and (public.is_admin() or public.auth_has_permission('advertising.manage'))
  );

create policy werbelogos_aendern on storage.objects
  for update using (
    bucket_id = 'werbelogos'
    and (public.is_admin() or public.auth_has_permission('advertising.manage'))
  );

create policy werbelogos_loeschen on storage.objects
  for delete using (
    bucket_id = 'werbelogos'
    and (public.is_admin() or public.auth_has_permission('advertising.manage'))
  );

-- --------------------------------------------------------------------------
-- 2. Felder am Motiv
-- --------------------------------------------------------------------------
alter table public.advertising_creatives
  add column if not exists alt_text     text,
  add column if not exists anzeigename  text,
  add column if not exists ziel_url     text;

comment on column public.advertising_creatives.alt_text is
  'Alternativtext des Logos. Fuer kundenkarte_logo Pflicht: ohne ihn ist die '
  'Flaeche fuer Screenreader stumm, und eine stumme Werbeflaeche ist eine '
  'nicht gekennzeichnete Werbeflaeche.';
comment on column public.advertising_creatives.anzeigename is
  'Name des Werbetreibenden, wie er unter dem Logo erscheint. Faellt auf '
  'businesses.name zurueck. Getrennt gefuehrt, weil die beworbene Marke '
  'nicht immer die Firmierung ist.';
comment on column public.advertising_creatives.ziel_url is
  'Ziel des Logos, wenn es von dem der Kampagne abweicht. Nur https.';

-- Alternativtext ist Pflicht, sobald das Motiv auf der Kundenkarte laufen
-- soll. Der Constraint greift nur fuer diese Art, damit bestehende Motive
-- unberuehrt bleiben.
alter table public.advertising_creatives
  drop constraint if exists creatives_kundenkarte_braucht_alt_text;
alter table public.advertising_creatives
  add constraint creatives_kundenkarte_braucht_alt_text check (
    kind <> 'kundenkarte_logo'
    or (alt_text is not null and btrim(alt_text) <> '')
  );

-- Ziele nur ueber https. Ein http-Ziel aus einer App heraus ist ein
-- Downgrade, ueber das der Betreiber nichts weiss.
alter table public.advertising_creatives
  drop constraint if exists creatives_ziel_url_https;
alter table public.advertising_creatives
  add constraint creatives_ziel_url_https check (
    ziel_url is null or ziel_url like 'https://%'
  );

-- --------------------------------------------------------------------------
-- 3. Betriebsparameter
-- --------------------------------------------------------------------------
insert into app.betriebsparameter (schluessel, wert, beschreibung) values
  ('kundenkarte_werbeplaetze', '2',
   'Wie viele Werbelogos die Kundenkarte hoechstens gleichzeitig zeigt.'),
  ('kundenkarte_werbung_kennzeichnung', 'Anzeige',
   'Wort, mit dem der Werbeplatz auf der Kundenkarte gekennzeichnet wird '
   '(Paragraf 5a Abs. 4 UWG).')
on conflict (schluessel) do nothing;

-- --------------------------------------------------------------------------
-- 4. Die Ausspielung
-- --------------------------------------------------------------------------
create or replace function public.kundenkarte_werbeplatz()
returns table (
  creative_id     uuid,
  campaign_id     uuid,
  logo_url        text,
  alt_text        text,
  werbetreibender text,
  ziel_url        text,
  kennzeichnung   text
)
language sql
stable
security definer
set search_path to 'public', 'app'
as $$
  select
    cr.id,
    c.id,
    cr.file_url,
    cr.alt_text,
    coalesce(nullif(btrim(cr.anzeigename), ''), b.name),
    coalesce(cr.ziel_url, c.ziel_url),
    coalesce(app.parameter('kundenkarte_werbung_kennzeichnung'), 'Anzeige')
  from public.advertising_creatives cr
  join public.advertising_campaigns c on c.id = cr.campaign_id
  join public.businesses            b on b.id = c.business_id
  where cr.kind = 'kundenkarte_logo'
    and cr.status = 'active'
    and cr.deleted_at is null
    and cr.file_url is not null
    and c.status = 'active'
    -- Nur wer digitale Werbung gebucht hat. Eine rein analoge Buchung
    -- (Aufkleber am Automaten) ist keine Zusage fuer eine Flaeche in der App;
    -- sie hier mitlaufen zu lassen waere eine Leistung, die niemand gekauft
    -- hat, und im Streitfall eine Behauptung ueber den Vertragsinhalt.
    and c.welt in ('digital', 'komplett')
    and c.deleted_at is null
    and c.von <= current_date
    and (c.bis is null or c.bis >= current_date)
    and b.status = 'active'
    and b.deleted_at is null
    and b.archived_at is null
  -- Tagesbezogene, fuer alle Kunden gleiche Reihenfolge. Kein Bezug zum
  -- Konto: dieselbe Abfrage liefert allen Angemeldeten dasselbe Ergebnis.
  order by md5(to_char(current_date, 'YYYY-MM-DD') || cr.id::text)
  limit app.parameter_zahl('kundenkarte_werbeplaetze', 2);
$$;

comment on function public.kundenkarte_werbeplatz() is
  'Logos der aktiven Kundenkarten-Kampagnen, taeglich rotierend und fuer '
  'alle Kunden identisch. Gibt keine Kundendaten aus und wertet keine aus. '
  'Das Feld kennzeichnung ist sichtbar auszugeben (Paragraf 5a Abs. 4 UWG).';

revoke all on function public.kundenkarte_werbeplatz() from public, anon;
grant execute on function public.kundenkarte_werbeplatz() to authenticated;

-- --------------------------------------------------------------------------
-- 5. Loeschregel
-- --------------------------------------------------------------------------
-- Motive und Kampagnen sind Unternehmensdaten, keine Kundendaten. Es gibt
-- hier nichts kundenbezogen zu loeschen: die Zaehlung laeuft ueber
-- advertising_events, fuer die bereits eine Regel besteht. Der Eintrag steht
-- trotzdem hier, damit spaeter niemand die Frage neu stellen muss.
