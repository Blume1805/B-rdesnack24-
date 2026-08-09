-- ============================================================================
-- 0106 · Rechtstexte an einer Stelle, lesbar von jedem Frontend
-- ----------------------------------------------------------------------------
-- Anlass (09.08.2026): Im Lovable-Kundenbereich waren die Profil-Kacheln
-- „Benachrichtigungen", „Datenschutz" und „Support" nicht anklickbar —
-- `<button type="button">` ganz ohne `onClick`. Beim Nachsehen stellte sich
-- das eigentliche Problem heraus: Dieses Frontend hatte ÜBERHAUPT KEINE
-- Rechtsseiten, obwohl es öffentlich erreichbar ist. Kein Impressum
-- (§ 5 DDG), keine Datenschutzerklärung (Art. 13 DSGVO).
--
-- ----------------------------------------------------------------------------
-- Warum eine Tabelle und nicht einfach kopieren
--
-- Der naheliegende Weg wäre gewesen, die sieben Texte ins zweite Frontend zu
-- kopieren. Dann gäbe es sie zweimal — und die zweite Fassung wäre beim
-- nächsten Nachziehen vergessen worden. Genau die Drift, gegen die die Regel
-- „Rechtstexte mitziehen" in CLAUDE.md steht: Der Code wandert, die Texte
-- bleiben stehen. Zwei Kopien machen das doppelt wahrscheinlich.
--
-- Massgeblich bleibt `legal_texts.dart`. Diese Tabelle wird daraus befüllt,
-- die Flutter-App liest weiter ihre Konstanten (offline verfügbar), und
-- jedes weitere Frontend liest die Tabelle.
--
-- ----------------------------------------------------------------------------
-- Wie die Texte hineinkommen
--
-- Nicht von Hand. Abgetippte Rechtstexte enthalten Tippfehler, und ein
-- Tippfehler im Impressum ist ein Rechtsfehler. Stattdessen holt die
-- Datenbank die Quelldatei selbst und schneidet die Konstanten heraus —
-- siehe `legal_text_uebernehmen()` weiter unten. Der Abgleich lässt sich
-- nach jeder Textänderung wiederholen und liefert dann exakt denselben
-- Stand wie die App.
-- ============================================================================

create table if not exists public.legal_text (
  slug            text primary key,
  titel           text not null,
  -- Die Untergrenze ist keine Kosmetik: Ein leerer Rechtstext fällt in der
  -- Oberfläche nicht auf — die Seite sieht dann nur kurz aus.
  inhalt          text not null check (length(btrim(inhalt)) > 200),
  sortierung      int  not null default 0,
  aktualisiert_am timestamptz not null default now()
);

comment on table public.legal_text is
  'Rechtstexte für alle Frontends. Quelle ist '
  'apps/mobile/lib/features/legal/presentation/legal_texts.dart; diese '
  'Tabelle wird daraus befüllt, damit es nur eine Fassung gibt.';

-- Rechtstexte müssen OHNE Anmeldung lesbar sein. Ein Impressum hinter einem
-- Login erfüllt § 5 DDG nicht, und die Widerrufsbelehrung muss man lesen
-- können, bevor man ein Konto anlegt.
alter table public.legal_text enable row level security;
revoke all on public.legal_text from anon, authenticated;
grant select on public.legal_text to anon, authenticated;

drop policy if exists legal_text_read on public.legal_text;
create policy legal_text_read on public.legal_text
  for select to anon, authenticated using (true);

-- Schreiben bleibt der Migration bzw. `service_role` vorbehalten. Ein
-- Rechtstext, den man im Dashboard ändern kann, ist nicht nachvollziehbar
-- versioniert.

-- ----------------------------------------------------------------------------
-- Übernahme aus der Quelldatei
--
-- Holt `legal_texts.dart` vom angegebenen Branch und schneidet die
-- `static const <name> = '''…''';`-Blöcke heraus. `$version` wird dabei so
-- ersetzt, wie Dart es zur Laufzeit tut.
--
-- Zweistufig, weil pg_net asynchron arbeitet: erst `legal_text_abrufen()`,
-- das die Anfrage-Id liefert, dann `legal_text_uebernehmen(id)`.
-- ----------------------------------------------------------------------------
create or replace function public.legal_text_abrufen(
  p_branch text default 'main'
) returns bigint
language sql
security definer
set search_path = public, net
as $$
  select net.http_get(
    'https://raw.githubusercontent.com/Blume1805/B-rdesnack24-/'
    || p_branch
    || '/apps/mobile/lib/features/legal/presentation/legal_texts.dart');
$$;

create or replace function public.legal_text_uebernehmen(p_request_id bigint)
-- Die Rückgabespalten heissen bewusst NICHT `slug`: Ein OUT-Parameter
-- dieses Namens kollidiert in `on conflict (slug)` mit der Tabellenspalte,
-- und plpgsql bricht mit „column reference is ambiguous" ab. Aufgefallen
-- beim ersten echten Aufruf — die Migration selbst lief fehlerfrei durch.
returns table(o_slug text, o_zeichen int)
language plpgsql
security definer
set search_path = public, net
as $$
declare
  v_inhalt text;
  v_version text;
begin
  select r.content into v_inhalt
  from net._http_response r
  where r.id = p_request_id and r.status_code = 200;

  if v_inhalt is null then
    raise exception 'Antwort % fehlt oder war nicht 200', p_request_id;
  end if;

  v_version := substring(v_inhalt from 'static const version = ''([^'']+)''');

  return query
  with zuordnung(dart_name, s, titel, sortierung) as (values
    ('imprint','impressum','Impressum',10),
    ('privacy','datenschutz','Datenschutzerklärung',20),
    ('terms','nutzungsbedingungen','Nutzungsbedingungen',30),
    ('withdrawal','widerruf','Widerrufsbelehrung',40),
    ('payment','zahlung','Zahlungsinformationen',50),
    ('cookies','cookies','Cookies und Tracking',60),
    ('accessibility','barrierefreiheit','Barrierefreiheit',70)
  ),
  geparst as (
    select z.s, z.titel, z.sortierung,
           -- btrim MIT Zeichenmenge: ohne Argument entfernt es nur
           -- Leerzeichen, und die Blöcke beginnen mit einem Umbruch.
           btrim(replace(
             (regexp_match(v_inhalt,
                'static const ' || z.dart_name || ' = ''''''(.*?)'''''';', 'ns'))[1],
             '$version', v_version), E' \t\r\n') as inhalt
    from zuordnung z
  )
  insert into public.legal_text as l (slug, titel, inhalt, sortierung)
  select g.s, g.titel, g.inhalt, g.sortierung from geparst g
  on conflict (slug) do update
    set titel = excluded.titel, inhalt = excluded.inhalt,
        sortierung = excluded.sortierung, aktualisiert_am = now()
  returning l.slug, length(l.inhalt)::int;
end;
$$;

comment on function public.legal_text_uebernehmen(bigint) is
  'Übernimmt die Rechtstexte aus legal_texts.dart in public.legal_text. '
  'Nach jeder Textänderung erneut ausführen — sonst zeigt das Web-Frontend '
  'einen älteren Stand als die App.';

revoke all on function public.legal_text_abrufen(text) from public, anon, authenticated;
revoke all on function public.legal_text_uebernehmen(bigint) from public, anon, authenticated;
