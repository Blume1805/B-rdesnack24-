-- ============================================================================
-- 0151 — Firmenstammdaten pflegen, und zwar nur von unserer Seite
-- ----------------------------------------------------------------------------
-- Zwei Dinge, die zusammengehören.
--
-- ERSTENS: die sevDesk-Kontaktnummer hatte kein Eingabefeld.
--
-- 0147 hat `businesses.sevdesk_contact_id` angelegt, und 0149 bricht das
-- Anfordern einer Rechnung ab, solange sie fehlt. Angelegt werden konnte sie
-- bisher nirgends — `business_create` kennt den Parameter nicht, und ein
-- zweiter Weg existierte nicht. Das Anfordern war damit für jede Firma
-- gesperrt. Diese Migration bringt `business_update`.
--
-- ZWEITENS: dabei ist aufgefallen, wer die Spalte sonst noch schreiben kann.
--
-- Die Regel `businesses_write` aus 0117 erlaubt UPDATE, wenn der Aufrufer
-- `is_business_member(id, 'admin')` erfüllt — also dem Firmen-Administrator
-- des Kunden, einem Beschäftigten des Unternehmens. Zeilensicherheit wirkt je
-- Zeile, nicht je Spalte; damit stand ihm die ganze Zeile offen.
--
-- Nachgestellt am 27.08.2026 mit zwei Prüf-Firmen und einer echten Kennung
-- (`demo-kunde`, Administrator von Firma A):
--
--   * `sevdesk_contact_id` von Firma A auf die Kontaktnummer von Firma B
--     umbiegen — ging durch, die Spalte stand danach auf `2002`.
--   * Firmennamen ändern — ging durch.
--   * dieselben Änderungen an Firma B (fremde Zeile) — trafen keine Zeile;
--     die Mandantentrennung selbst hält.
--
-- Der Schaden wäre in der Rechnung entstanden: `business_invoice_request`
-- friert die Kontaktnummer in die Grundlage ein, und `sevdesk-invoice`
-- adressiert den Entwurf danach. Der Verbrauch von Firma A wäre als Entwurf
-- am Kontakt von Firma B gelandet. Versandt worden wäre nichts — dafür
-- braucht es die Freigabe eines Gesellschafters —, aber die Grundlage wäre
-- falsch gewesen, und in der App hätte man die Änderung nirgends gesehen.
--
-- Was daraus folgt: Die Zeile `businesses` ist Vertragsdatum, nicht
-- Kundendatum. Firmenname, Rechtsform, Anschrift, Steuernummern, Status und
-- die sevDesk-Kontaktnummer stehen fest, wie sie im Vertrag stehen; wer sie
-- ändert, ändert den Vertrag. Der Firmen-Administrator verwaltet seine Leute
-- und deren Budgets — dafür ist er da —, nicht die Stammdaten seiner Firma.
-- Ein Trigger setzt das durch, weil eine Regel je Spalte in RLS nicht
-- ausdrückbar ist.
--
-- Kein Weg wird dadurch enger, der heute benutzt wird: Ausser
-- `business_create` (INSERT) und einer lesenden Abfrage in der App schreibt
-- niemand auf diese Tabelle (geprüft über alle Migrationen und den
-- Flutter-Quelltext).
-- ============================================================================

-- ============================================================================
-- Der Riegel
-- ============================================================================
-- Ohne Nutzerkontext (`auth.uid()` ist NULL) läuft die Wartung: Migrationen,
-- der Dienstschlüssel der Edge Functions. Die kommen durch — wer den
-- Dienstschlüssel hat, kommt ohnehin überall hin, und ein Riegel, der die
-- eigene Wartung aussperrt, wird beim ersten Vorfall entfernt.
create or replace function app.businesses_nur_verwaltung_aendert()
returns trigger
language plpgsql
security definer
set search_path to 'public', 'app'
as $function$
begin
  if auth.uid() is null then
    return new;
  end if;
  if public.is_admin() or public.auth_has_permission('businesses.manage') then
    return new;
  end if;
  raise exception
    'Stammdaten eines Firmenkunden ändert nur Bördesnack24 (businesses.manage)'
    using errcode = '42501';
end;
$function$;

drop trigger if exists trg_businesses_stammdaten on public.businesses;
create trigger trg_businesses_stammdaten
  before update on public.businesses
  for each row execute function app.businesses_nur_verwaltung_aendert();

comment on function app.businesses_nur_verwaltung_aendert() is
  'Die Zeile businesses ist Vertragsdatum. Der Firmen-Administrator des '
  'Kunden darf sie lesen, aber nicht ändern — sonst könnte er die '
  'sevDesk-Kontaktnummer umbiegen, an der die Rechnung hängt (0151).';

-- ============================================================================
-- Der Weg, der bleibt
-- ============================================================================
-- Ein jsonb statt zehn Parametern, aus zwei Gründen: Nur die Schlüssel, die
-- wirklich mitgeschickt werden, werden geändert — ein Formular, das ein Feld
-- nicht kennt, löscht es damit nicht versehentlich. Und die Signatur bleibt
-- gleich, wenn eine Spalte dazukommt; sonst wandert bei jeder Erweiterung ein
-- `revoke`/`grant`-Paar mit.
--
-- `null` als Wert ist ausdrücklich „leeren", nicht „unverändert" — wer ein
-- Feld im Formular leert, meint das auch. Ein unbekannter Schlüssel bricht
-- ab, statt still nichts zu tun: Ein Tippfehler im Aufruf soll auffallen.
create or replace function public.business_update(
  p_business uuid,
  p_werte    jsonb
)
returns jsonb
language plpgsql
security definer
set search_path to 'public', 'app'
as $function$
declare
  erlaubt text[] := array[
    'name', 'legal_form', 'billing_street', 'billing_zip', 'billing_city',
    'billing_country', 'billing_email', 'tax_number', 'vat_id',
    'sevdesk_contact_id', 'status'
  ];
  schluessel text;
  teile      text[] := array[]::text[];
  neuer_name text;
  betroffen  int;
  ergebnis   jsonb;
begin
  if not (public.is_admin() or public.auth_has_permission('businesses.manage')) then
    raise exception 'Keine Berechtigung, Firmenkunden zu ändern'
      using errcode = '42501';
  end if;
  if p_business is null then
    raise exception 'Firma fehlt' using errcode = '22023';
  end if;
  if p_werte is null or jsonb_typeof(p_werte) <> 'object' or p_werte = '{}'::jsonb then
    raise exception 'Keine Änderung übergeben' using errcode = '22023';
  end if;

  -- Der Name ist das einzige Pflichtfeld; dieselbe Schranke wie beim Anlegen.
  if p_werte ? 'name' then
    neuer_name := btrim(coalesce(p_werte ->> 'name', ''));
    if length(neuer_name) < 2 then
      raise exception 'Firmenname fehlt' using errcode = '22023';
    end if;
    p_werte := jsonb_set(p_werte, '{name}', to_jsonb(neuer_name));
  end if;
  if p_werte ? 'billing_email' then
    p_werte := jsonb_set(
      p_werte, '{billing_email}',
      coalesce(to_jsonb(lower(nullif(btrim(p_werte ->> 'billing_email'), ''))),
               'null'::jsonb));
  end if;
  if p_werte ? 'sevdesk_contact_id' then
    p_werte := jsonb_set(
      p_werte, '{sevdesk_contact_id}',
      coalesce(to_jsonb(nullif(btrim(p_werte ->> 'sevdesk_contact_id'), '')),
               'null'::jsonb));
  end if;
  -- Der Status ist ein Aufzählungstyp. Ein freier Text soll hier abbrechen,
  -- mit den zulässigen Werten im Klartext, statt weiter unten als Typfehler.
  if p_werte ? 'status'
     and coalesce(p_werte ->> 'status', '') not in ('active', 'inactive', 'archived') then
    raise exception 'Unbekannter Status: % (erlaubt: active, inactive, archived)',
      coalesce(p_werte ->> 'status', '(leer)') using errcode = '22023';
  end if;

  for schluessel in select jsonb_object_keys(p_werte) loop
    if not (schluessel = any (erlaubt)) then
      raise exception 'Unbekanntes Feld: %', schluessel using errcode = '22023';
    end if;
    if schluessel = 'status' then
      teile := teile || format('%I = ($1 ->> %L)::public.entity_status',
                               schluessel, schluessel);
    else
      teile := teile || format('%I = ($1 ->> %L)', schluessel, schluessel);
    end if;
  end loop;

  execute format(
    'update public.businesses set %s, updated_by = auth.uid() '
    'where id = $2 and deleted_at is null',
    array_to_string(teile, ', ')
  ) using p_werte, p_business;

  -- EXECUTE setzt FOUND nicht — die Zahl kommt aus GET DIAGNOSTICS.
  get diagnostics betroffen = row_count;
  if betroffen = 0 then
    raise exception 'Firmenkunde nicht gefunden' using errcode = 'P0002';
  end if;

  select to_jsonb(b) - 'created_by' - 'updated_by'
    into ergebnis
    from public.businesses b
   where b.id = p_business;
  return ergebnis;
end;
$function$;

revoke all on function public.business_update(uuid, jsonb) from public;
grant execute on function public.business_update(uuid, jsonb) to authenticated;

comment on function public.business_update(uuid, jsonb) is
  'Ändert die Stammdaten eines Firmenkunden. Nur die übergebenen Schlüssel '
  'werden angefasst; null leert das Feld. Verlangt businesses.manage.';
