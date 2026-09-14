-- ===========================================================================
-- Selbstbedienung: Firmenkunden pflegen ihre Rechnungsdaten selbst
-- ===========================================================================
--
-- Bisher konnte ein Firmenkunde an seinen eigenen Stammdaten nichts aendern:
-- business_update verlangt is_admin oder businesses.manage, und darunter
-- blockt der Trigger businesses_nur_verwaltung_aendert jede Aenderung an der
-- Tabelle. Das Firmenportal hat ein Formular dafuer -- es lief ins Leere.
--
-- WAS SICH AENDERT UND WAS AUSDRUECKLICH NICHT.
-- Selbst aendern darf ein Firmen-Admin genau fuenf Felder: Strasse, PLZ,
-- Ort, Land und Rechnungs-E-Mail. Das ist die Anschrift, an die Rechnungen
-- gehen -- der Teil, der sich im Alltag aendert und bei dem eine
-- Rueckfrage bei uns nur Zeit kostet.
--
-- NICHT selbst aenderbar bleiben:
--
--   name, legal_form  -- Die Firmierung ist eine Identitaetsangabe. Sie
--     erscheint auf Rechnungen und, ueber den Rueckfall in
--     kundenkarte_werbeplatz, als Werbetreibender in der Kunden-App. Ein
--     Firmenkunde koennte sich sonst ohne jede Pruefung einen beliebigen
--     Namen geben und ihn Kunden anzeigen lassen. Das ist keine
--     Stammdatenpflege mehr, das ist eine Behauptung ueber die Identitaet
--     gegenueber Dritten.
--
--   tax_number, vat_id  -- Steuernummer und Umsatzsteuer-Identnummer
--     entscheiden darueber, wie eine Rechnung ausgestellt wird. Eine falsche
--     USt-IdNr. fuehrt zu falsch ausgestellten Rechnungen, und die Folgen
--     traegt nicht der, der sie eingetragen hat. Das gehoert geprueft.
--
--   status  -- Wer seinen eigenen Status setzen darf, hebt seine eigene
--     Sperre auf. Rechteausweitung im Wortsinn.
--
--   sevdesk_contact_id  -- Interne Verknuepfung zur Buchhaltung. Geht den
--     Kunden nichts an und darf von aussen nicht gesetzt werden.
--
-- ZWEI UNABHAENGIGE PRUEFUNGEN, KEINE UMGEHUNG.
-- Die Funktion prueft die Berechtigung und die erlaubten Felder. Der
-- Trigger prueft danach noch einmal selbst, welche Spalten sich tatsaechlich
-- bewegt haben. Er glaubt der Funktion nicht: das Kennzeichen, das die
-- Funktion setzt, oeffnet nur den Weg, es erlaubt kein einziges Feld. Wer
-- das Kennzeichen von Hand setzt, kommt an name oder status trotzdem nicht
-- heran.
--
-- KEINE RUECKWIRKUNG AUF RECHNUNGEN. invoices traegt billing_snapshot, also
-- die Rechnungsdaten in dem Zustand, in dem sie bei Ausstellung galten. Eine
-- Aenderung heute veraendert keine ausgestellte Rechnung -- die
-- Unveraenderbarkeit nach GoBD bleibt gewahrt. Die Aenderung selbst
-- protokolliert der bereits vorhandene trg_audit.
-- ===========================================================================

-- --------------------------------------------------------------------------
-- 1. Der Trigger bekommt einen zweiten, eng begrenzten Weg
-- --------------------------------------------------------------------------
create or replace function app.businesses_nur_verwaltung_aendert()
returns trigger
language plpgsql
security definer
set search_path to 'public', 'app'
as $$
declare
  v_selbst boolean;
begin
  -- Interne Vorgaenge ohne angemeldeten Benutzer (Migrationen, Jobs).
  if auth.uid() is null then
    return new;
  end if;

  -- Verwaltung darf weiterhin alles.
  if public.is_admin() or public.auth_has_permission('businesses.manage') then
    return new;
  end if;

  -- Der Selbstbedienungsweg. Das Kennzeichen setzt ausschliesslich
  -- public.business_rechnungsdaten_update; es allein genuegt nicht.
  v_selbst := coalesce(
    current_setting('app.rechnungsdaten_selbstbedienung', true), '') = '1';

  if v_selbst
     and new.id                 is not distinct from old.id
     and new.name               is not distinct from old.name
     and new.legal_form         is not distinct from old.legal_form
     and new.tax_number         is not distinct from old.tax_number
     and new.vat_id             is not distinct from old.vat_id
     and new.status             is not distinct from old.status
     and new.sevdesk_contact_id is not distinct from old.sevdesk_contact_id
     and new.deleted_at         is not distinct from old.deleted_at
     and new.archived_at        is not distinct from old.archived_at
     and new.created_at         is not distinct from old.created_at
     and new.created_by         is not distinct from old.created_by
  then
    return new;
  end if;

  raise exception
    'Stammdaten eines Firmenkunden ändert nur Bördesnack24 (businesses.manage)'
    using errcode = '42501';
end;
$$;

comment on function app.businesses_nur_verwaltung_aendert() is
  'Sperrt Aenderungen an Firmenstammdaten fuer alle ausser der Verwaltung. '
  'Einzige Ausnahme: der Selbstbedienungsweg fuer die Rechnungsanschrift, '
  'und auch der nur, solange Identitaets-, Steuer- und Statusfelder '
  'unveraendert bleiben. Die Pruefung erfolgt hier auf den tatsaechlichen '
  'Spaltenwerten, nicht auf einer Zusicherung der aufrufenden Funktion.';

-- --------------------------------------------------------------------------
-- 2. Die Selbstbedienungsfunktion
-- --------------------------------------------------------------------------
-- Der Name sagt den Umfang: Rechnungsdaten, nicht Stammdaten. Ein Name wie
-- business_stammdaten_update waere eine Einladung, spaeter noch ein Feld
-- dazuzunehmen, weil es ja "auch Stammdaten" sind.
create or replace function public.business_rechnungsdaten_update(
  p_business uuid,
  p_werte    jsonb
)
returns jsonb
language plpgsql
security definer
set search_path to 'public', 'app'
as $$
declare
  erlaubt text[] := array[
    'billing_street', 'billing_zip', 'billing_city',
    'billing_country', 'billing_email'
  ];
  schluessel text;
  wert       text;
  teile      text[] := array[]::text[];
  betroffen  int;
  ergebnis   jsonb;
begin
  -- Nur der Admin der eigenen Firma. Bewusst NICHT zusaetzlich is_admin:
  -- die Verwaltung hat business_update. Damit ist jede Zeile, die diese
  -- Funktion geschrieben hat, nachweislich eine Aenderung des Kunden selbst.
  if not app.is_business_member(p_business, 'admin') then
    raise exception 'Keine Berechtigung für diesen Firmenkunden'
      using errcode = '42501';
  end if;

  if p_werte is null or jsonb_typeof(p_werte) <> 'object' or p_werte = '{}'::jsonb then
    raise exception 'Keine Änderung übergeben' using errcode = '22023';
  end if;

  -- Unbekannte Felder werden abgewiesen, nicht stillschweigend verworfen.
  -- Ein stilles Verwerfen sieht fuer den Aufrufer aus wie Erfolg und ist
  -- der uebliche Weg, auf dem sich Mass Assignment einschleicht.
  for schluessel in select jsonb_object_keys(p_werte) loop
    if not (schluessel = any (erlaubt)) then
      raise exception
        'Dieses Feld können Sie nicht selbst ändern: %. Bitte wenden Sie sich '
        'an Ihren Ansprechpartner bei Bördesnack24.', schluessel
        using errcode = '42501';
    end if;
  end loop;

  -- Zuschnitt und Pruefung je Feld.
  if p_werte ? 'billing_street' then
    wert := btrim(coalesce(p_werte ->> 'billing_street', ''));
    if length(wert) < 3 or length(wert) > 120 then
      raise exception 'Bitte geben Sie eine Straße mit Hausnummer an.'
        using errcode = '22023';
    end if;
    p_werte := jsonb_set(p_werte, '{billing_street}', to_jsonb(wert));
  end if;

  if p_werte ? 'billing_zip' then
    wert := btrim(coalesce(p_werte ->> 'billing_zip', ''));
    if wert !~ '^[A-Za-z0-9][A-Za-z0-9 -]{2,9}$' then
      raise exception 'Bitte geben Sie eine gültige Postleitzahl an.'
        using errcode = '22023';
    end if;
    p_werte := jsonb_set(p_werte, '{billing_zip}', to_jsonb(upper(wert)));
  end if;

  if p_werte ? 'billing_city' then
    wert := btrim(coalesce(p_werte ->> 'billing_city', ''));
    if length(wert) < 2 or length(wert) > 80 then
      raise exception 'Bitte geben Sie einen Ort an.' using errcode = '22023';
    end if;
    p_werte := jsonb_set(p_werte, '{billing_city}', to_jsonb(wert));
  end if;

  if p_werte ? 'billing_country' then
    wert := upper(btrim(coalesce(p_werte ->> 'billing_country', '')));
    if wert !~ '^[A-Z]{2}$' then
      raise exception
        'Bitte geben Sie das Land als zweibuchstabiges Länderkürzel an, '
        'zum Beispiel DE.' using errcode = '22023';
    end if;
    p_werte := jsonb_set(p_werte, '{billing_country}', to_jsonb(wert));
  end if;

  if p_werte ? 'billing_email' then
    wert := lower(btrim(coalesce(p_werte ->> 'billing_email', '')));
    -- Bewusst kein Leeren erlaubt: an diese Adresse gehen die Rechnungen.
    -- Ein leeres Feld waere kein Zustand, den der Kunde selbst herstellen
    -- koennen sollte, ohne dass jemand davon erfaehrt.
    if wert !~ '^[^@[:space:]]+@[^@[:space:]]+\.[A-Za-z]{2,}$' then
      raise exception 'Bitte geben Sie eine gültige Rechnungs-E-Mail an.'
        using errcode = '22023';
    end if;
    p_werte := jsonb_set(p_werte, '{billing_email}', to_jsonb(wert));
  end if;

  for schluessel in select jsonb_object_keys(p_werte) loop
    teile := teile || format('%I = ($1 ->> %L)', schluessel, schluessel);
  end loop;

  -- Kennzeichen nur fuer diese Transaktion. Es oeffnet dem Trigger den Weg;
  -- welche Spalten sich bewegen duerfen, entscheidet weiterhin der Trigger.
  perform set_config('app.rechnungsdaten_selbstbedienung', '1', true);

  execute format(
    'update public.businesses set %s, updated_by = auth.uid() '
    'where id = $2 and deleted_at is null',
    array_to_string(teile, ', ')
  ) using p_werte, p_business;

  get diagnostics betroffen = row_count;

  perform set_config('app.rechnungsdaten_selbstbedienung', '0', true);

  if betroffen = 0 then
    raise exception 'Firmenkunde nicht gefunden' using errcode = 'P0002';
  end if;

  -- Rueckgabe bewusst eng: die eigenen Rechnungsdaten und die
  -- Identitaetsangaben zum Anzeigen. Kein sevdesk_contact_id, keine
  -- internen Spalten.
  select jsonb_build_object(
           'id',              b.id,
           'name',            b.name,
           'legal_form',      b.legal_form,
           'billing_street',  b.billing_street,
           'billing_zip',     b.billing_zip,
           'billing_city',    b.billing_city,
           'billing_country', b.billing_country,
           'billing_email',   b.billing_email,
           'tax_number',      b.tax_number,
           'vat_id',          b.vat_id,
           'updated_at',      b.updated_at)
    into ergebnis
    from public.businesses b
   where b.id = p_business;

  return ergebnis;
end;
$$;

comment on function public.business_rechnungsdaten_update(uuid, jsonb) is
  'Selbstbedienung fuer Firmen-Admins: Rechnungsanschrift und '
  'Rechnungs-E-Mail. Aendert ausdruecklich keine Identitaets-, Steuer- oder '
  'Statusangaben -- die bleiben bei der Verwaltung, weil eine Firmierung '
  'eine Aussage gegenueber Dritten ist und eine USt-IdNr. die Rechnungs'
  'stellung bestimmt. Rueckwirkungsfrei gegenueber ausgestellten Rechnungen '
  '(invoices.billing_snapshot).';

revoke all on function public.business_rechnungsdaten_update(uuid, jsonb) from public, anon;
grant execute on function public.business_rechnungsdaten_update(uuid, jsonb) to authenticated;

-- --------------------------------------------------------------------------
-- 3. Lesen, was man aendern darf
-- --------------------------------------------------------------------------
-- Ohne diese Funktion muesste das Portal die Felder erraten oder aus dem
-- Dashboard zusammensuchen, das sie gar nicht liefert.
create or replace function public.business_rechnungsdaten(p_business uuid)
returns jsonb
language plpgsql
stable
security definer
set search_path to 'public', 'app'
as $$
declare
  ergebnis jsonb;
begin
  if not (app.is_business_member(p_business, 'admin')
          or public.is_admin()
          or public.auth_has_permission('businesses.manage')) then
    raise exception 'Keine Berechtigung für diesen Firmenkunden'
      using errcode = '42501';
  end if;

  select jsonb_build_object(
           'id',              b.id,
           'name',            b.name,
           'legal_form',      b.legal_form,
           'billing_street',  b.billing_street,
           'billing_zip',     b.billing_zip,
           'billing_city',    b.billing_city,
           'billing_country', b.billing_country,
           'billing_email',   b.billing_email,
           'tax_number',      b.tax_number,
           'vat_id',          b.vat_id,
           'updated_at',      b.updated_at,
           -- Damit die Oberflaeche nicht raten muss, welche Felder sie
           -- schreibbar anzeigt. Wird die Liste oben je erweitert, zieht die
           -- Oberflaeche automatisch nach.
           'selbst_aenderbar', jsonb_build_array(
             'billing_street', 'billing_zip', 'billing_city',
             'billing_country', 'billing_email'))
    into ergebnis
    from public.businesses b
   where b.id = p_business and b.deleted_at is null;

  if ergebnis is null then
    raise exception 'Firmenkunde nicht gefunden' using errcode = 'P0002';
  end if;
  return ergebnis;
end;
$$;

comment on function public.business_rechnungsdaten(uuid) is
  'Rechnungsdaten der eigenen Firma zum Anzeigen, mit der Liste der Felder, '
  'die der Kunde selbst aendern darf.';

revoke all on function public.business_rechnungsdaten(uuid) from public, anon;
grant execute on function public.business_rechnungsdaten(uuid) to authenticated;
