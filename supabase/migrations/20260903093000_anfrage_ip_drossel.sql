-- Drossel je Absenderadresse.
--
-- Bis hierher war das Anfrageformular nur je E-Mail-Adresse gedrosselt. Wer
-- die Adresse wechselt, wechselt damit auch das Kontingent — die Grenze war
-- also eine Höflichkeit, kein Schutz. Diese Migration schließt das, soweit
-- es sich in der Datenbank schließen lässt.
--
-- Die IP wird NICHT im Klartext gespeichert. Eine IP-Adresse ist ein
-- personenbezogenes Datum; für eine Zählung brauche ich aber keine Adresse,
-- sondern nur einen Schlüssel, der sich innerhalb eines Tages
-- wiedererkennen lässt. Deshalb ein Hash mit einem Geheimnis, das täglich
-- wechselt: derselbe Absender bekommt an einem Tag denselben Schlüssel, am
-- nächsten Tag einen anderen, und aus dem gespeicherten Wert lässt sich die
-- Adresse nicht zurückrechnen.

-- ---------------------------------------------------------------------------
-- 1. Tagesgeheimnis
-- ---------------------------------------------------------------------------
create table if not exists app.drossel_tagesschluessel (
  tag        date primary key,
  geheimnis  text not null,
  erzeugt_am timestamptz not null default now()
);

comment on table app.drossel_tagesschluessel is
  'Ein Zufallswert je Tag. Er macht den gespeicherten Absenderschlüssel '
  'unumkehrbar und sorgt dafür, dass derselbe Absender an zwei Tagen nicht '
  'als derselbe erkennbar ist. Zeilen älter als die Drosselfrist werden mit '
  'aufgeräumt — mit dem Geheimnis verschwindet auch die Verknüpfbarkeit.';

alter table app.drossel_tagesschluessel enable row level security;

create or replace function app.drossel_geheimnis()
returns text
language plpgsql security definer set search_path to 'app','extensions' as $$
declare v_geheim text;
begin
  select geheimnis into v_geheim
  from app.drossel_tagesschluessel where tag = app.heute();
  if v_geheim is null then
    insert into app.drossel_tagesschluessel (tag, geheimnis)
    values (app.heute(), encode(extensions.gen_random_bytes(32), 'hex'))
    on conflict (tag) do nothing;
    select geheimnis into v_geheim
    from app.drossel_tagesschluessel where tag = app.heute();
  end if;
  return v_geheim;
end;
$$;

-- ---------------------------------------------------------------------------
-- 2. Absenderadresse ermitteln
-- ---------------------------------------------------------------------------
create or replace function app.request_ip()
returns text
language plpgsql stable set search_path to 'app' as $$
declare
  v_kopf  jsonb;
  v_kette text;
  v_wert  text;
  v_name  text;
begin
  -- request.headers wird von PostgREST gesetzt. Wird die Funktion aus psql
  -- oder aus einem Hintergrundlauf aufgerufen, gibt es die Einstellung nicht.
  begin
    v_kopf := nullif(current_setting('request.headers', true), '')::jsonb;
  exception when others then
    return null;
  end;
  if v_kopf is null then
    return null;
  end if;

  -- Reihenfolge nach Vertrauenswürdigkeit. Diese vier setzt jeweils der
  -- vorgelagerte Dienst selbst; ein Client kann sie nicht durchreichen.
  foreach v_name in array array['cf-connecting-ip', 'true-client-ip',
                               'fly-client-ip', 'x-real-ip'] loop
    v_wert := nullif(btrim(coalesce(v_kopf ->> v_name, '')), '');
    if v_wert is not null then
      return v_name || '=' || v_wert;
    end if;
  end loop;

  -- x-forwarded-for ist eine Liste, an die jeder Zwischenschritt hinten
  -- anhängt. Ein Client, der den Kopf selbst mitschickt, steht deshalb VORNE.
  -- Deshalb wird der LETZTE Eintrag genommen — der stammt vom nächstgelegenen
  -- Proxy und ist der einzige, den der Absender nicht bestimmen kann.
  v_kette := nullif(btrim(coalesce(v_kopf ->> 'x-forwarded-for', '')), '');
  if v_kette is not null then
    v_wert := btrim(split_part(v_kette, ',', array_length(string_to_array(v_kette, ','), 1)));
    if v_wert <> '' then
      return 'x-forwarded-for=' || v_wert;
    end if;
  end if;

  return null;
end;
$$;

comment on function app.request_ip() is
  'Absenderadresse aus den Kopfzeilen der Anfrage, mit dem Namen der '
  'Kopfzeile davor. Gibt NULL zurück, wenn keine zu finden ist — dann greift '
  'die Drossel nicht und das ist im Aufrufer zu behandeln, nicht hier zu '
  'verschleiern. Bei x-forwarded-for wird bewusst der letzte Eintrag genommen: '
  'ein selbst mitgeschickter Wert steht vorne und wäre frei wählbar.';

create or replace function app.absender_schluessel()
returns text
language plpgsql security definer set search_path to 'app','extensions' as $$
declare
  v_roh  text := app.request_ip();
  v_name text;
begin
  if v_roh is null then
    return null;
  end if;
  v_name := split_part(v_roh, '=', 1);

  -- Belegt, dass die Erkennung im Betrieb wirklich greift, ohne dafür eine
  -- Adresse zu speichern: festgehalten wird nur, WELCHE Kopfzeile getragen
  -- hat und wann zuletzt. Ohne diesen Vermerk wäre die Drossel eine
  -- Behauptung — von außen ist nicht zu sehen, ob sie je gezogen hat.
  insert into app.betriebsparameter (schluessel, wert, beschreibung)
  values ('anfrage.ip_kopfzeile_erkannt',
          v_name || ' zuletzt am ' || to_char(now() at time zone 'Europe/Berlin', 'DD.MM.YYYY HH24:MI'),
          'Nachweis, dass die Absendererkennung greift. Enthält nur den Namen '
          'der Kopfzeile und den Zeitpunkt, niemals eine Adresse.')
  on conflict (schluessel) do update
    set wert = excluded.wert, geaendert_am = now();

  return encode(
    extensions.hmac(v_roh, app.drossel_geheimnis(), 'sha256'), 'hex');
end;
$$;

comment on function app.absender_schluessel() is
  'Unumkehrbarer Tagesschlüssel des Absenders. Aus dem Ergebnis lässt sich '
  'die Adresse nicht zurückrechnen, und derselbe Absender ist an zwei Tagen '
  'nicht als derselbe erkennbar. NULL bedeutet: keine Adresse ermittelbar.';

-- ---------------------------------------------------------------------------
-- 3. Aufräumen
-- ---------------------------------------------------------------------------
create or replace function app.drossel_aufraeumen()
returns int
language plpgsql security definer set search_path to 'public','app' as $$
declare v_zahl int; v_tage int := app.parameter_zahl('anfrage.drossel_tage', 7);
begin
  delete from app.anfrage_drossel where tag < app.heute() - v_tage;
  get diagnostics v_zahl = row_count;
  delete from app.drossel_tagesschluessel where tag < app.heute() - v_tage;
  return v_zahl;
end;
$$;

comment on function app.drossel_aufraeumen() is
  'Räumt Zähler und Tagesgeheimnisse ab. Muss regelmäßig laufen: ohne diesen '
  'Lauf wachsen beide Tabellen unbegrenzt, und die Geheimnisse alter Tage '
  'liegen länger herum als nötig.';

-- ---------------------------------------------------------------------------
-- 4. Parameter
-- ---------------------------------------------------------------------------
insert into app.betriebsparameter (schluessel, wert, beschreibung) values
  ('anfrage.drossel_je_ip_tag', '5',
   'Höchstzahl Anfragen je Absenderadresse und Tag. Etwas höher als die '
   'Grenze je E-Mail-Adresse, weil hinter einer Adresse ein ganzes Büro '
   'sitzen kann.'),
  ('anfrage.drossel_tage', '7',
   'So lange bleiben Drosselzähler und Tagesgeheimnisse erhalten.')
on conflict (schluessel) do nothing;

-- ---------------------------------------------------------------------------
-- 5. Rechte
-- ---------------------------------------------------------------------------
revoke all on function app.request_ip() from public, anon, authenticated;
revoke all on function app.absender_schluessel() from public, anon, authenticated;
revoke all on function app.drossel_geheimnis() from public, anon, authenticated;
revoke all on function app.drossel_aufraeumen() from public, anon, authenticated;

-- ---------------------------------------------------------------------------
-- 6. Die Drossel in die Anfragefunktion einhängen
-- ---------------------------------------------------------------------------
-- Die Funktion wird nicht neu geschrieben, sondern an zwei Stellen ergänzt.
-- Vorher wird geprüft, dass sie aussieht wie erwartet — findet die Prüfung
-- die Ankertexte nicht, bricht die Migration ab, statt stillschweigend nichts
-- zu tun.
do $do$
declare
  v_def   text;
  v_anker text;
  v_neu   text;
begin
  select pg_get_functiondef(p.oid) into v_def
  from pg_proc p join pg_namespace n on n.oid = p.pronamespace
  where n.nspname = 'public' and p.proname = 'advertising_inquiry_submit';

  -- Anker 1: Variablenblock
  v_anker := '  v_intern  text := app.parameter(''anfrage.mail_intern'');';
  if position(v_anker in v_def) = 0 then
    raise exception 'advertising_inquiry_submit: Variablenblock sieht anders aus als erwartet';
  end if;
  v_def := replace(v_def, v_anker, v_anker || E'\n  v_absender text;');

  -- Anker 2: vor der Drossel je E-Mail-Adresse
  v_anker := '  -- Drossel. Erst nach der Validierung, damit ein Tippfehler kein Kontingent'
          || E'\n  -- verbraucht.';
  if position(v_anker in v_def) = 0 then
    raise exception 'advertising_inquiry_submit: Drosselblock sieht anders aus als erwartet';
  end if;

  v_neu := v_anker || E'\n'
    || E'  --\n'
    || E'  -- Zuerst die Absenderadresse. Die Grenze je E-Mail-Adresse allein war\n'
    || E'  -- kein Schutz: wer die Adresse wechselt, wechselt das Kontingent mit.\n'
    || E'  v_absender := app.absender_schluessel();\n'
    || E'  if v_absender is not null then\n'
    || E'    if not app.anfrage_drossel_zaehlen(''ip:'' || v_absender,\n'
    || E'           app.parameter_zahl(''anfrage.drossel_je_ip_tag'', 5)) then\n'
    || E'      raise exception ''Von diesem Anschluss liegen heute bereits mehrere Anfragen vor. Bitte melde Dich direkt bei uns.''\n'
    || E'        using errcode = ''53400'';\n'
    || E'    end if;\n'
    || E'  else\n'
    || E'    -- Keine Adresse zu ermitteln. Die Anfrage wird trotzdem angenommen —\n'
    || E'    -- ein Interessent soll nicht daran scheitern, dass eine Kopfzeile\n'
    || E'    -- fehlt. Aber es wird festgehalten, sonst wäre die Drossel eine\n'
    || E'    -- Behauptung, die niemand widerlegen kann.\n'
    || E'    insert into app.betriebsparameter (schluessel, wert, beschreibung)\n'
    || E'    values (''anfrage.ip_kopfzeile_fehlt'',\n'
    || E'            to_char(now() at time zone ''Europe/Berlin'', ''DD.MM.YYYY HH24:MI''),\n'
    || E'            ''Zeitpunkt der letzten Anfrage, bei der keine Absenderadresse zu ''\n'
    || E'            ''ermitteln war. Steht hier ein Datum und in ''''anfrage.ip_kopfzeile_erkannt'''' ''\n'
    || E'            ''keines, greift die Drossel je Adresse nicht.'')\n'
    || E'    on conflict (schluessel) do update\n'
    || E'      set wert = excluded.wert, geaendert_am = now();\n'
    || E'  end if;\n';

  v_def := replace(v_def, v_anker, v_neu);
  execute v_def;
end $do$;
