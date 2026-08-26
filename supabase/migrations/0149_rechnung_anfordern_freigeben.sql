-- ============================================================================
-- 0149 — Anfordern, freigeben, auflisten
-- ----------------------------------------------------------------------------
-- Die drei Handgriffe des Ablaufs. Begründung der Entscheidungen im Kopf von
-- 0147; die Prüfregeln stehen hier, weil sie hier greifen.
--
-- Nachgestellt am 26.08.2026 mit echten Identitäten, elf Fälle:
--   laufender Monat abgewiesen (22023, mit dem Datum, ab dem es geht);
--   Kunde fordert an, abgewiesen (42501); Gesellschafter fordert an, geht;
--   derselbe Monat ein zweites Mal, abgewiesen (23505);
--   Freigabe vor sevDesk, abgewiesen (22023);
--   Monat ohne Käufe, abgewiesen (P0002);
--   Kunde gibt frei, abgewiesen (42501);
--   Gesellschafter gibt frei, geht; zweite Freigabe, abgewiesen (23505);
--   Firmen-Administrator sieht seine Läufe.
-- Testdaten anschliessend entfernt.
-- ============================================================================

create or replace function public.business_invoice_request(
  p_business uuid,
  p_jahr     int,
  p_monat    int
)
returns jsonb
language plpgsql
security definer
set search_path to 'public', 'app'
as $function$
declare
  b        public.businesses%rowtype;
  basis    jsonb;
  aufstell jsonb;
  bis      date;
  probleme text;
  neu      uuid;
begin
  if not (public.is_admin() or public.auth_has_permission('businesses.manage')) then
    raise exception 'Keine Berechtigung für Firmenkunden' using errcode = '42501';
  end if;
  if p_jahr < 2020 or p_jahr > 2100 or p_monat < 1 or p_monat > 12 then
    raise exception 'Ungültiger Abrechnungsmonat' using errcode = '22023';
  end if;

  bis := (make_date(p_jahr, p_monat, 1) + interval '1 month - 1 day')::date;

  -- Ein laufender Monat darf nicht abgerechnet werden: Die Aufteilung
  -- verschiebt sich noch mit jedem weiteren Kauf.
  if bis >= current_date then
    raise exception
      'Der Monat ist noch nicht abgeschlossen. Abrechnen ab dem %.',
      to_char(bis + 1, 'DD.MM.YYYY')
      using errcode = '22023';
  end if;

  select * into b from public.businesses where id = p_business and deleted_at is null;
  if not found then
    raise exception 'Firmenkunde nicht gefunden' using errcode = 'P0002';
  end if;

  -- § 14 UStG verlangt den vollständigen Namen und die Anschrift des
  -- Empfängers. Fehlt das, entsteht keine ordnungsgemässe Rechnung — dann
  -- lieber hier abbrechen als in sevDesk eine unbrauchbare erzeugen.
  if coalesce(btrim(b.billing_street), '') = ''
     or coalesce(btrim(b.billing_zip), '') = ''
     or coalesce(btrim(b.billing_city), '') = '' then
    raise exception
      'Rechnungsanschrift des Firmenkunden ist unvollständig (Straße, PLZ, Ort).'
      using errcode = '22023';
  end if;
  if coalesce(btrim(b.sevdesk_contact_id), '') = '' then
    raise exception
      'Für diesen Firmenkunden ist kein sevDesk-Kontakt hinterlegt.'
      using errcode = '22023';
  end if;

  basis := app.business_invoice_basis(p_business, p_jahr, p_monat);

  if (basis->>'kaeufe')::int = 0 then
    raise exception 'In diesem Monat gibt es keine Firmenkäufe.'
      using errcode = 'P0002';
  end if;

  -- Eine Rechnung, die nicht aufgeht, ist schlimmer als keine.
  if jsonb_array_length(basis->'probleme') > 0 then
    select string_agg(value #>> '{}', ' ') into probleme
    from jsonb_array_elements(basis->'probleme');
    raise exception 'Rechnung nicht möglich: %', probleme using errcode = '22023';
  end if;

  aufstell := public.business_statement(p_business, p_jahr, p_monat);

  insert into public.business_invoice_runs (
    business_id, jahr, monat, status, grundlage, brutto,
    angefordert_von, updated_by
  ) values (
    p_business, p_jahr, p_monat, 'angefordert',
    jsonb_build_object(
      'basis', basis,
      'aufstellung', aufstell,
      'empfaenger', jsonb_build_object(
        'name', b.name,
        'strasse', b.billing_street,
        'plz', b.billing_zip,
        'ort', b.billing_city,
        'land', coalesce(b.billing_country, 'DE'),
        'steuernummer', b.tax_number,
        'ust_id', b.vat_id,
        'sevdesk_contact_id', b.sevdesk_contact_id,
        'rechnungs_email', b.billing_email)),
    (basis->>'brutto_gesamt')::numeric,
    auth.uid(), auth.uid()
  )
  returning id into neu;

  return jsonb_build_object(
    'id', neu,
    'status', 'angefordert',
    'brutto', (basis->>'brutto_gesamt')::numeric,
    'netto', (basis->>'netto_gesamt')::numeric,
    'steuer', (basis->>'steuer_gesamt')::numeric);
exception
  when unique_violation then
    raise exception
      'Für diesen Monat wurde bereits eine Rechnung angefordert.'
      using errcode = '23505';
end;
$function$;

revoke all on function public.business_invoice_request(uuid,int,int) from public;
grant execute on function public.business_invoice_request(uuid,int,int) to authenticated;

-- Freigabe: ausschliesslich Gesellschafter oder Systemadministrator, und erst
-- wenn die Rechnung in sevDesk tatsächlich entstanden ist. Eine Freigabe für
-- etwas, das es dort noch nicht gibt, wäre eine Freigabe ins Leere.
create or replace function public.business_invoice_release(p_run uuid)
returns void
language plpgsql
security definer
set search_path to 'public', 'app'
as $function$
declare
  lauf public.business_invoice_runs%rowtype;
begin
  if not (public.is_admin() or public.app_role() = 'shareholder') then
    raise exception
      'Nur ein Gesellschafter kann eine Rechnung freigeben.'
      using errcode = '42501';
  end if;

  select * into lauf from public.business_invoice_runs where id = p_run;
  if not found then
    raise exception 'Rechnungslauf nicht gefunden' using errcode = 'P0002';
  end if;
  if lauf.status = 'freigegeben' then
    raise exception 'Diese Rechnung ist bereits freigegeben.' using errcode = '23505';
  end if;
  if lauf.status <> 'in_sevdesk' then
    raise exception
      'Diese Rechnung liegt noch nicht in sevDesk. Erst übertragen, dann freigeben.'
      using errcode = '22023';
  end if;

  update public.business_invoice_runs
     set status = 'freigegeben',
         freigegeben_von = auth.uid(),
         freigegeben_am  = now(),
         updated_at = now(), updated_by = auth.uid()
   where id = p_run;
end;
$function$;

revoke all on function public.business_invoice_release(uuid) from public;
grant execute on function public.business_invoice_release(uuid) to authenticated;

create or replace function public.business_invoice_runs_list(p_business uuid)
returns jsonb
language plpgsql
stable
security definer
set search_path to 'public', 'app'
as $function$
declare ergebnis jsonb;
begin
  if not (app.is_business_member(p_business, 'admin') or public.is_admin()
          or public.auth_has_permission('businesses.manage')) then
    raise exception 'Keine Berechtigung für diesen Firmenkunden' using errcode = '42501';
  end if;

  select coalesce(jsonb_agg(jsonb_build_object(
           'id', r.id, 'jahr', r.jahr, 'monat', r.monat,
           'status', r.status::text,
           'brutto', r.brutto,
           'netto',  (r.grundlage->'basis'->>'netto_gesamt')::numeric,
           'steuer', (r.grundlage->'basis'->>'steuer_gesamt')::numeric,
           'sevdesk_invoice_id', r.sevdesk_invoice_id,
           'sevdesk_invoice_number', r.sevdesk_invoice_number,
           'angefordert_am', r.angefordert_am,
           'angefordert_von', ap.full_name,
           'freigegeben_am', r.freigegeben_am,
           'freigegeben_von', fp.full_name,
           'fehlertext', r.fehlertext
         ) order by r.jahr desc, r.monat desc), '[]'::jsonb)
  into ergebnis
  from public.business_invoice_runs r
  left join public.profiles ap on ap.id = r.angefordert_von
  left join public.profiles fp on fp.id = r.freigegeben_von
  where r.business_id = p_business;

  return ergebnis;
end;
$function$;

revoke all on function public.business_invoice_runs_list(uuid) from public;
grant execute on function public.business_invoice_runs_list(uuid) to authenticated;
