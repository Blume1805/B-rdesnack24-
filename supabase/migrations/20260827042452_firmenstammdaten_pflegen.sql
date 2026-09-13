-- 0151 — Firmenstammdaten pflegen, und zwar nur von unserer Seite
-- Volltext und Begründung: supabase/migrations/0151_firmenstammdaten_pflegen.sql

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
