-- ============================================================================
-- 0108 · Fett-Auszeichnung wieder mitnehmen
-- ----------------------------------------------------------------------------
-- Rückbau von 0107, wie dort angekündigt. Migration 0107 hatte die Marker
-- `**…**` beim Übernehmen entfernt, weil das Web-Frontend sie als
-- Sternchen ausgegeben hätte. Seit dem 10.08.2026 stellt es sie dar:
-- `renderLegalText()` in `src/lib/legal.ts` zerlegt den Text am selben
-- Muster und setzt `<strong>`-Knoten — ohne Markdown-Bibliothek und ohne
-- `dangerouslySetInnerHTML`, damit ein Rechtstext nie als HTML gedeutet
-- wird.
--
-- Warum das jetzt gefahrlos ist: Die einzige Anwendung, die
-- `public.legal_text` liest, ist dieses Web-Frontend — die native App
-- nutzt ihre eigenen Konstanten. Und das Projekt ist nicht
-- veröffentlicht (`is_published: false`), es gibt also keine öffentliche
-- Fassung mit altem Code, die jetzt Sternchen zeigen würde. Beides
-- nachgesehen, nicht angenommen.
--
-- Die Funktion ist ansonsten Wort für Wort die aus 0107; einzig der
-- `regexp_replace`-Aufruf fällt weg.
-- ============================================================================

create or replace function public.legal_text_uebernehmen(p_request_id bigint)
-- Die Rückgabespalten heissen bewusst NICHT `slug`: Ein OUT-Parameter
-- dieses Namens kollidiert in `on conflict (slug)` mit der Tabellenspalte,
-- und plpgsql bricht mit „column reference is ambiguous" ab.
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
  'Übernimmt die Rechtstexte aus legal_texts.dart in public.legal_text, '
  'einschliesslich der Fett-Auszeichnung **…**. Nach jeder Textänderung '
  'erneut ausführen — sonst zeigt das Web-Frontend einen älteren Stand '
  'als die App.';

revoke all on function public.legal_text_uebernehmen(bigint)
  from public, anon, authenticated;
