-- Die öffentliche Anfrage war für nicht angemeldete Besucher nicht aufrufbar.
--
-- Befund vom 03.09.2026, gefunden vom Frontend-Agenten beim Aufruf gegen die
-- laufende Datenbank: `advertising_inquiry_submit` scheiterte für `anon` mit
-- `42501 permission denied for schema app`.
--
-- Ursache: Der erste Parameter hatte den Typ `app.lead_kind`. Um eine Funktion
-- mit einem Parameter aus Schema `app` aufzurufen, braucht der Aufrufer USAGE
-- auf dieses Schema — und die hat `anon` bewusst nicht. Das EXECUTE-Recht auf
-- die Funktion allein genügt dafür nicht. Die Funktion ist zwar SECURITY
-- DEFINER, aber die Signatur wird noch im Kontext des Aufrufers aufgelöst,
-- bevor der Rumpf überhaupt beginnt.
--
-- Warum meine Prüfung das nicht gefunden hat: Das Testskript rief die Funktion
-- über `pruef.wahrheit` auf, und das läuft als Superuser. Damit war das
-- Verhalten geprüft, aber nicht der Zugriffsweg. Ein Aufruf, der nie in der
-- Haut der Rolle stattfindet, die ihn im Betrieb ausführt, prüft die
-- Berechtigung nicht mit. Das Skript 97 bekommt dafür einen eigenen Test.
--
-- Die falsche Abhilfe wäre `grant usage on schema app to anon` gewesen — damit
-- stünde dem nicht angemeldeten Besucher die gesamte interne Namensschicht
-- offen. Stattdessen verschwindet der Typ aus der Signatur: der Parameter ist
-- jetzt Text und wird im Rumpf geprüft und umgewandelt, wo das Schema
-- ohnehin erreichbar ist.

drop function if exists public.advertising_inquiry_submit(
  app.lead_kind, text, text, text, text, text, text, numeric, date, int,
  text, text, text[], uuid[], boolean, boolean, boolean, boolean, boolean, text);

create or replace function public.advertising_inquiry_submit(
  p_kind              text,
  p_company_name      text,
  p_contact_name      text,
  p_email             text,
  p_phone             text default null,
  p_website           text default null,
  p_message           text default null,
  p_budget            numeric default null,
  p_wunsch_start      date default null,
  p_wunsch_laufzeit_monate int default null,
  p_zielgruppe        text default null,
  p_region            text default null,
  p_produkte          text[] default '{}',
  p_standorte         uuid[] default '{}',
  p_standort_egal     boolean default false,
  p_werbemittel_vorhanden boolean default null,
  p_werbemittel_durch_uns boolean default null,
  p_datenschutz       boolean default false,
  p_marketing         boolean default false,
  p_hp                text default null
) returns jsonb
language plpgsql security definer set search_path to 'public','app' as $$
declare
  v_mail    text := nullif(lower(btrim(coalesce(p_email, ''))), '');
  v_firma   text := btrim(coalesce(p_company_name, ''));
  v_name    text := btrim(coalesce(p_contact_name, ''));
  v_art     app.lead_kind;
  v_nummer  text;
  v_lead    uuid;
  v_prod    record;
  v_loc     uuid;
  v_zeilen  jsonb := '[]'::jsonb;
  v_orte    jsonb := '[]'::jsonb;
  v_intern  text := app.parameter('anfrage.mail_intern');
  v_absender text;
begin
  -- Honigtopf. Ein Mensch sieht dieses Feld nicht und füllt es nicht aus.
  -- Der Absender bekommt eine plausible Antwort, damit er nicht merkt, dass
  -- er erkannt wurde und es gleich anders versucht. Es wird NICHTS
  -- gespeichert: die zurückgegebene Nummer bezeichnet keine Anfrage und
  -- taucht in keiner Liste auf.
  if nullif(btrim(coalesce(p_hp, '')), '') is not null then
    perform app.anfrage_drossel_zaehlen('honigtopf', 2147483647);
    return jsonb_build_object('anfrage_nummer', 'BS24-000000', 'gespeichert', false);
  end if;

  -- Die Art kommt als Text herein, damit die Signatur ohne Schema `app`
  -- auskommt. Geprüft wird sie hier, gegen den Typ selbst — eine erfundene
  -- Art fällt durch, statt zu einem Datenbankfehler zu führen, den der
  -- Besucher nicht versteht.
  begin
    v_art := lower(btrim(coalesce(p_kind, '')))::app.lead_kind;
  exception when invalid_text_representation or others then
    raise exception 'Unbekannte Anfrageart.' using errcode = '22023';
  end;

  -- Pflichtangaben. Serverseitig, weil die Prüfung im Formular nur eine
  -- Bequemlichkeit für ehrliche Nutzer ist.
  if length(v_firma) < 2 then
    raise exception 'Bitte den Firmennamen angeben.' using errcode = '22023';
  end if;
  if length(v_firma) > 200 then
    raise exception 'Der Firmenname ist zu lang.' using errcode = '22023';
  end if;
  if length(v_name) < 2 then
    raise exception 'Bitte einen Ansprechpartner angeben.' using errcode = '22023';
  end if;
  if v_mail is null or v_mail !~ '^[^@[:space:]]+@[^@[:space:]]+\.[a-z]{2,}$' then
    raise exception 'Bitte eine gültige E-Mail-Adresse angeben.' using errcode = '22023';
  end if;
  if length(v_mail) > 254 then
    raise exception 'Die E-Mail-Adresse ist zu lang.' using errcode = '22023';
  end if;
  if length(coalesce(p_message, '')) > 5000 then
    raise exception 'Die Nachricht ist zu lang.' using errcode = '22023';
  end if;
  if not coalesce(p_datenschutz, false) then
    raise exception 'Ohne Zustimmung zur Datenschutzerklärung können wir die Anfrage nicht entgegennehmen.'
      using errcode = '22023';
  end if;
  if p_budget is not null and (p_budget < 0 or p_budget > 10000000) then
    raise exception 'Der Budgetwert ist nicht plausibel.' using errcode = '22023';
  end if;
  if p_wunsch_laufzeit_monate is not null
     and (p_wunsch_laufzeit_monate < 1 or p_wunsch_laufzeit_monate > 120) then
    raise exception 'Die gewünschte Laufzeit ist nicht plausibel.' using errcode = '22023';
  end if;
  if coalesce(array_length(p_produkte, 1), 0) > 20
     or coalesce(array_length(p_standorte, 1), 0) > 50 then
    raise exception 'Zu viele Positionen in einer Anfrage.' using errcode = '22023';
  end if;

  -- Drossel. Erst nach der Validierung, damit ein Tippfehler kein Kontingent
  -- verbraucht.
  --
  -- Zuerst die Absenderadresse. Die Grenze je E-Mail-Adresse allein war
  -- kein Schutz: wer die Adresse wechselt, wechselt das Kontingent mit.
  v_absender := app.absender_schluessel();
  if v_absender is not null then
    if not app.anfrage_drossel_zaehlen('ip:' || v_absender,
           app.parameter_zahl('anfrage.drossel_je_ip_tag', 5)) then
      raise exception 'Von diesem Anschluss liegen heute bereits mehrere Anfragen vor. Bitte melde Dich direkt bei uns.'
        using errcode = '53400';
    end if;
  else
    -- Keine Adresse zu ermitteln. Die Anfrage wird trotzdem angenommen —
    -- ein Interessent soll nicht daran scheitern, dass eine Kopfzeile
    -- fehlt. Aber es wird festgehalten, sonst wäre die Drossel eine
    -- Behauptung, die niemand widerlegen kann.
    insert into app.betriebsparameter (schluessel, wert, beschreibung)
    values ('anfrage.ip_kopfzeile_fehlt',
            to_char(now() at time zone 'Europe/Berlin', 'DD.MM.YYYY HH24:MI'),
            'Zeitpunkt der letzten Anfrage, bei der keine Absenderadresse zu '
            'ermitteln war. Steht hier ein Datum und in ''anfrage.ip_kopfzeile_erkannt'' '
            'keines, greift die Drossel je Adresse nicht.')
    on conflict (schluessel) do update
      set wert = excluded.wert, geaendert_am = now();
  end if;

  if not app.anfrage_drossel_zaehlen('mail:' || v_mail,
         app.parameter_zahl('anfrage.drossel_je_mail_tag', 3)) then
    raise exception 'Von dieser Adresse liegen heute bereits mehrere Anfragen vor. Bitte melde Dich direkt bei uns.'
      using errcode = '53400';
  end if;
  if not app.anfrage_drossel_zaehlen('gesamt',
         app.parameter_zahl('anfrage.drossel_gesamt_tag', 80)) then
    raise exception 'Das Anfrageformular ist vorübergehend nicht verfügbar. Bitte melde Dich direkt bei uns.'
      using errcode = '53400';
  end if;

  v_nummer := app.anfrage_nummer();

  insert into public.leads (
    kind, status, company_name, contact_name, email, phone, message,
    source, inquiry_number, website, budget, wunsch_start,
    wunsch_laufzeit_monate, zielgruppe, region, standort_egal,
    werbemittel_vorhanden, werbemittel_durch_uns,
    datenschutz_zugestimmt_am, marketing_einwilligung
  ) values (
    v_art, 'new', v_firma, v_name, v_mail,
    nullif(btrim(coalesce(p_phone, '')), ''),
    nullif(btrim(coalesce(p_message, '')), ''),
    'website_werbung', v_nummer,
    nullif(btrim(coalesce(p_website, '')), ''),
    p_budget, p_wunsch_start, p_wunsch_laufzeit_monate,
    nullif(btrim(coalesce(p_zielgruppe, '')), ''),
    nullif(btrim(coalesce(p_region, '')), ''),
    coalesce(p_standort_egal, false),
    p_werbemittel_vorhanden, p_werbemittel_durch_uns,
    now(), coalesce(p_marketing, false)
  )
  returning id into v_lead;

  -- Positionen mit eingefrorenem Preis. Unbekannte Schlüssel werden
  -- übergangen, nicht erfunden — und die Anfrage geht trotzdem durch, weil
  -- ein Formularfehler den Interessenten nicht kosten soll.
  for v_prod in
    select p.id, p.schluessel, p.name, p.preis, p.preis_art, p.ab_preis
    from unnest(p_produkte) as k(schluessel)
    join public.advertising_products p on p.schluessel = k.schluessel and p.aktiv
  loop
    insert into public.advertising_inquiry_items (
      lead_id, product_id, produkt_name, produkt_schluessel,
      preis, preis_art, ab_preis
    ) values (
      v_lead, v_prod.id, v_prod.name, v_prod.schluessel,
      v_prod.preis, v_prod.preis_art, v_prod.ab_preis
    );
    v_zeilen := v_zeilen || jsonb_build_object(
      'name', v_prod.name,
      'preis', v_prod.preis,
      'preis_art', v_prod.preis_art::text,
      'ab_preis', v_prod.ab_preis
    );
  end loop;

  foreach v_loc in array coalesce(p_standorte, '{}'::uuid[]) loop
    insert into public.advertising_inquiry_locations (lead_id, location_id)
    select v_lead, l.id from public.locations l
    where l.id = v_loc and l.deleted_at is null
    on conflict do nothing;
  end loop;

  select coalesce(jsonb_agg(l.name order by l.name), '[]'::jsonb) into v_orte
  from public.advertising_inquiry_locations il
  join public.locations l on l.id = il.location_id
  where il.lead_id = v_lead;

  -- E-Mails. Die Anfrage ist zu diesem Zeitpunkt gespeichert; schlägt der
  -- Versand fehl, bleibt sie erhalten und der Fehler steht in email_outbox.
  perform public.email_enqueue(
    'werbeanfrage_kunde', null,
    jsonb_build_object(
      'anfrageNummer', v_nummer, 'firma', v_firma, 'ansprechpartner', v_name,
      'positionen', v_zeilen, 'standorte', v_orte,
      'standortEgal', coalesce(p_standort_egal, false),
      'laufzeitMonate', p_wunsch_laufzeit_monate, 'wunschStart', p_wunsch_start
    ),
    v_mail, now(), 'werbeanfrage_kunde:' || v_nummer
  );

  if v_intern is not null then
    perform public.email_enqueue(
      'werbeanfrage_intern', null,
      jsonb_build_object(
        'anfrageNummer', v_nummer, 'firma', v_firma, 'ansprechpartner', v_name,
        'email', v_mail, 'telefon', nullif(btrim(coalesce(p_phone, '')), ''),
        'positionen', v_zeilen, 'standorte', v_orte,
        'standortEgal', coalesce(p_standort_egal, false),
        'laufzeitMonate', p_wunsch_laufzeit_monate, 'wunschStart', p_wunsch_start,
        'budget', p_budget, 'nachricht', nullif(btrim(coalesce(p_message, '')), ''),
        'eingang', to_char(now() at time zone 'Europe/Berlin', 'DD.MM.YYYY HH24:MI')
      ),
      v_intern, now(), 'werbeanfrage_intern:' || v_nummer
    );
  end if;

  -- Zurück geht nur, was der Absender ohnehin weiß. Insbesondere keine
  -- lead-id: sonst hätte ein Aufrufer eine Kennung in der Hand, mit der er
  -- anderswo sein Glück versuchen könnte.
  return jsonb_build_object('anfrage_nummer', v_nummer, 'gespeichert', true);
end;
$$;

comment on function public.advertising_inquiry_submit(text, text, text, text, text, text, text, numeric, date, int, text, text, text[], uuid[], boolean, boolean, boolean, boolean, boolean, text) is
  'Nimmt eine unverbindliche Werbe- oder Sponsoringanfrage entgegen. Ohne '
  'Konto aufrufbar — die Signatur verwendet ausschließlich Typen aus '
  'pg_catalog und public, damit der Aufruf keine USAGE auf Schema app '
  'voraussetzt. Es entsteht kein Vertrag; die Funktion legt einen Lead mit '
  'Status new an. Gibt ausschließlich die Anfragenummer zurück.';

revoke all on function public.advertising_inquiry_submit(text, text, text, text, text, text, text, numeric, date, int, text, text, text[], uuid[], boolean, boolean, boolean, boolean, boolean, text) from public, anon, authenticated;
grant execute on function public.advertising_inquiry_submit(text, text, text, text, text, text, text, numeric, date, int, text, text, text[], uuid[], boolean, boolean, boolean, boolean, boolean, text) to anon, authenticated;
