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
           btrim(
             -- Auszeichnung entfernen, Wortlaut behalten. Verlangt ein PAAR
             -- und erlaubt dazwischen keinen Umbruch — wie die Regel in der
             -- App. Einzelne Sternchen bleiben: „(*) Unzutreffendes
             -- streichen" im Muster-Widerrufsformular ist Text.
             regexp_replace(
               replace(
                 (regexp_match(v_inhalt,
                    'static const ' || z.dart_name || ' = ''''''(.*?)'''''';',
                    'ns'))[1],
                 '$version', v_version),
               E'\\*\\*([^*\n]+)\\*\\*', '\1', 'g'),
             E' \t\r\n') as inhalt
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
  'Entfernt dabei die Fett-Auszeichnung **…**, weil das Web-Frontend sie '
  'noch nicht darstellt. Nach jeder Textänderung erneut ausführen — sonst '
  'zeigt das Web-Frontend einen älteren Stand als die App.';

revoke all on function public.legal_text_uebernehmen(bigint)
  from public, anon, authenticated;
