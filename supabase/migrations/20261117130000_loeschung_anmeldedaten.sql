-- ============================================================================
-- Kontolöschung entfernt auch die Anmeldedaten (Befund 17.11.2026)
--
-- Sachverhalt: public.execute_account_deletion anonymisierte profiles und
-- customers, sperrte in auth.users aber nur die Anmeldung. Anmeldeadresse,
-- Anmelde-Metadaten (u. a. Name) und die Anmeldeidentität (enthält erneut die
-- Adresse) blieben unbegrenzt gespeichert. Gefunden beim Löschen des
-- Demo-Kundenkontos; eine echte Person war nicht betroffen (es gab bis dahin
-- keinen anderen Löschantrag). Art. 17 DSGVO.
--
-- Änderung:
--   * app.anmeldedaten_entfernen(uuid): anonymisiert auth.users (Adresse,
--     Telefon, Metadaten, Passwort-Hash, offene Codes), sperrt dauerhaft und
--     löscht Identitäten, Sitzungen, Auffrischungs-Token, Faktoren,
--     Einmal-Codes und OAuth-Zustimmungen. Tabellen, die es nicht gibt (lokaler
--     Nachbau), werden übersprungen.
--   * execute_account_deletion ruft sie statt der reinen Sperre auf.
--   * Nachholen für alle bereits gelöschten Konten (profiles.deleted_at gesetzt,
--     Adresse 'geloescht+…@invalid'): derzeit nur das Demo-Kundenkonto.
--
-- Unumkehrbar für die betroffenen Konten (gewollt).
-- Rückweg für die Funktion: execute_account_deletion aus
-- 20260903081502_werbe_analytics.sql erneut einspielen.
-- ============================================================================

create or replace function app.anmeldedaten_entfernen(p_profile uuid)
returns void
language plpgsql
security definer
set search_path = public, app
as $$
declare
  v_tabelle text;
  v_spalte  text;
begin
  update auth.users set
      email              = 'geloescht+' || replace(p_profile::text, '-', '') || '@invalid',
      phone              = null,
      raw_user_meta_data = '{}'::jsonb,
      encrypted_password = null,
      banned_until       = 'infinity'::timestamptz
    where id = p_profile;

  -- Felder, die es nur in der echten Supabase-Anmeldung gibt.
  if exists (select 1 from information_schema.columns
              where table_schema = 'auth' and table_name = 'users'
                and column_name = 'email_change') then
    execute $q$
      update auth.users set
          email_change = '', phone_change = '',
          confirmation_token = '', recovery_token = '',
          email_change_token_new = '', email_change_token_current = '',
          reauthentication_token = ''
        where id = $1
    $q$ using p_profile;
  end if;

  for v_tabelle, v_spalte in
    select * from (values
      ('identities', 'user_id'), ('sessions', 'user_id'),
      ('refresh_tokens', 'user_id'), ('mfa_factors', 'user_id'),
      ('one_time_tokens', 'user_id'), ('oauth_consents', 'user_id'),
      ('oauth_authorizations', 'user_id')) t(tabelle, spalte)
  loop
    if to_regclass('auth.' || v_tabelle) is not null
       and exists (select 1 from information_schema.columns
                    where table_schema = 'auth' and table_name = v_tabelle
                      and column_name = v_spalte) then
      execute format('delete from auth.%I where %I::text = $1::text', v_tabelle, v_spalte)
        using p_profile;
    end if;
  end loop;
end;
$$;

revoke all on function app.anmeldedaten_entfernen(uuid) from public, anon, authenticated;

CREATE OR REPLACE FUNCTION public.execute_account_deletion(p_profile uuid)
 RETURNS jsonb
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public', 'app'
AS $function$
declare
  r            record;
  v_anzahl     bigint;
  v_geloescht  jsonb := '{}'::jsonb;
  v_bleibt     jsonb := '{}'::jsonb;
  v_offen      text[] := '{}';
  v_ausserhalb text[] := '{}';
  v_protokoll  bigint;
begin
  if not (public.is_admin() or public.auth_has_permission('users.manage')) then
    raise exception 'Keine Berechtigung, ein Konto zu löschen' using errcode = '42501';
  end if;
  if p_profile is null then
    raise exception 'Kein Konto angegeben' using errcode = '22023';
  end if;
  if not exists (select 1 from public.profiles where id = p_profile) then
    raise exception 'Konto nicht gefunden' using errcode = 'P0002';
  end if;

  perform set_config('app.konto_loeschung', 'on', true);

  for r in select tabelle, bezugsspalte from public.loeschregeln
            where behandlung = 'loeschen' and bezugsspalte is not null order by tabelle
  loop
    execute format('delete from public.%I where %I = $1', r.tabelle, r.bezugsspalte)
      using p_profile;
    get diagnostics v_anzahl = row_count;
    if v_anzahl > 0 then
      v_geloescht := v_geloescht || jsonb_build_object(r.tabelle, v_anzahl);
    end if;
  end loop;

  for r in select tabelle, bezugsspalte, jahre from public.loeschregeln
            where behandlung = 'aufbewahren' and bezugsspalte is not null order by tabelle
  loop
    execute format('select count(*) from public.%I where %I = $1', r.tabelle, r.bezugsspalte)
      into v_anzahl using p_profile;
    if v_anzahl > 0 then
      v_bleibt := v_bleibt || jsonb_build_object(
        r.tabelle, jsonb_build_object('zeilen', v_anzahl, 'jahre', r.jahre));
    end if;
  end loop;

  select coalesce(array_agg(tabelle order by tabelle), '{}') into v_offen
    from public.loeschregeln where behandlung = 'offen';
  select coalesce(array_agg(tabelle order by tabelle), '{}') into v_ausserhalb
    from public.loeschregeln where behandlung = 'ausserhalb';

  update public.profiles set
      full_name  = 'Gelöschtes Konto',
      email      = 'geloescht+' || replace(p_profile::text, '-', '') || '@invalid',
      phone      = null,
      gender     = null,
      birth_date = null,
      deleted_at = coalesce(deleted_at, now()),
      status     = 'archived'
    where id = p_profile;

  update public.customers set
      billing_street = null,
      billing_zip    = null,
      billing_city   = null,
      company_name   = null,
      tax_number     = null,
      vat_id         = null,
      notify_email   = false,
      notify_push    = false
    where id = p_profile;

  -- Anmeldedaten (17.11.2026): Bis hierhin blieben Anmeldeadresse, Name in
  -- den Anmelde-Metadaten und die verknüpfte Anmeldeidentität in auth.users
  -- stehen; das Konto war nur gesperrt. Jetzt wird auch dort anonymisiert,
  -- und Sitzungen, Faktoren und Einmal-Codes werden entfernt. Die Zeile in
  -- auth.users selbst bleibt (gesperrt), weil Belege mit Aufbewahrungsfrist
  -- über profiles an ihr hängen.
  perform app.anmeldedaten_entfernen(p_profile);

  update public.account_deletion_requests
     set status = 'ausgefuehrt', handled_at = now(), handled_by = auth.uid(),
         note = coalesce(note || ' | ', '') || 'ausgeführt am ' || now()::date
   where profile_id = p_profile and status is distinct from 'ausgefuehrt';

  -- ZULETZT: Alles oben hat Protokollzeilen erzeugt, die den Inhalt der
  -- gelöschten und anonymisierten Zeilen tragen — einschließlich des Namens,
  -- den die Anonymisierung gerade entfernt hat. Ohne diesen Schritt stünde
  -- die Löschung im Protokoll wieder drin.
  update public.audit_log a set
      old_data = case when a.old_data is null then null else jsonb_build_object(
        'entfernt', 'Inhalt nach Kontolöschung entfernt',
        'felder', (select jsonb_agg(k order by k) from jsonb_object_keys(a.old_data) k)) end,
      new_data = case when a.new_data is null then null else jsonb_build_object(
        'entfernt', 'Inhalt nach Kontolöschung entfernt',
        'felder', (select jsonb_agg(k order by k) from jsonb_object_keys(a.new_data) k)) end
    where a.table_name in (
            select tabelle from public.loeschregeln
             where behandlung in ('loeschen', 'anonymisieren'))
      and (a.record_id = p_profile::text
           or a.old_data->>'profile_id'  = p_profile::text
           or a.new_data->>'profile_id'  = p_profile::text
           or a.old_data->>'customer_id' = p_profile::text
           or a.new_data->>'customer_id' = p_profile::text
           or a.old_data->>'user_id'     = p_profile::text
           or a.new_data->>'user_id'     = p_profile::text
           or a.old_data->>'owner_id'    = p_profile::text
           or a.new_data->>'owner_id'    = p_profile::text)
      and coalesce(a.old_data->>'entfernt', a.new_data->>'entfernt') is null;
  get diagnostics v_protokoll = row_count;

  perform set_config('app.konto_loeschung', 'off', true);

  return jsonb_build_object(
    'konto',           p_profile,
    'ausgefuehrt_am',  now(),
    'geloescht',       v_geloescht,
    'gesperrt_bis_fristablauf', v_bleibt,
    'protokoll_bereinigt', v_protokoll,
    'ohne_entscheidung', to_jsonb(v_offen),
    'nicht_zustaendig',  to_jsonb(v_ausserhalb),
    'hinweis', case
      when array_length(v_offen, 1) is null then
        'Für jede Tabelle mit Personenbezug liegt eine Regel vor. Die unter '
        || '"nicht_zustaendig" genannten Tabellen sind Beschäftigtendaten und '
        || 'folgen einem eigenen Vorgang.'
      else
        'Die unter "ohne_entscheidung" genannten Tabellen wurden NICHT '
        || 'angefasst. Für sie fehlt die Festlegung.'
      end
  );
end;
$function$;


-- Nachholen für bereits gelöschte Konten.
do $$
declare r record;
begin
  for r in select p.id from public.profiles p
            where p.deleted_at is not null
              and p.email like 'geloescht+%@invalid'
  loop
    perform app.anmeldedaten_entfernen(r.id);
  end loop;
end $$;
