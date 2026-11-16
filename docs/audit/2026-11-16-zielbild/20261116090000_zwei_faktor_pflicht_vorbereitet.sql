-- ============================================================================
-- Zwei-Faktor-Pflicht für interne Konten, vorbereitet und AUSGESCHALTET
-- (Audit 15.11.2026, Befund A2-01; COMPLIANCE V-011 und V-018-j).
--
-- Befund: Die Pflicht stand nur in der main-Linie (0066). In der Produktion
-- genügte ein Passwort für Finanzen, Dokumente und Kundendaten.
--
-- Aufbau, anders als 0066 und bewusst so:
--   0066 hängte die Pflicht in drei Hilfsfunktionen. In der Produktionslinie
--   prüfen viele Regeln und Funktionen die Rolle direkt in `profiles`; drei
--   Hilfsfunktionen hätten Lücken gelassen. Hier greift die Pflicht deshalb
--   an den Eingängen, nicht an einzelnen Prüfstellen:
--     * Datenzugriff über die API (Tabellen und Funktionen): eine Prüfung vor
--       jeder Anfrage (`public.pruefe_anfrage`, Einschalten in der nächsten
--       Migration 20261116090100).
--     * Dateien (Storage) und Echtzeit-Abos laufen nicht über diese Prüfung.
--       Dort sichert je eine einschränkende Regel ab: auf storage.objects und
--       auf den vier Tabellen der Echtzeit-Veröffentlichung.
--
-- Wer betroffen ist: nur Konten mit der Rolle system_admin, shareholder oder
-- employee, und nur, wenn der Schalter steht und die Sitzung keinen zweiten
-- Faktor trägt (JWT-Anspruch aal = aal1). Kunden, nicht angemeldete Aufrufe
-- und Server-Aufrufe (service_role) sind nie betroffen.
--
-- Schalter: app.security_settings, Schlüssel require_mfa_internal, steht auf
-- false. Einschalten erst, wenn alle internen Konten einen bestätigten Faktor
-- haben (docs/OPERATIONS.md, Runbook O). Rückweg: enabled = false.
-- ============================================================================

create table if not exists app.security_settings (
  key        text primary key,
  enabled    boolean     not null default false,
  note       text,
  updated_at timestamptz not null default now()
);
alter table app.security_settings enable row level security;
revoke all on app.security_settings from public, anon, authenticated;
grant select on app.security_settings to service_role;

insert into app.security_settings(key, enabled, note) values (
  'require_mfa_internal', false,
  'Zwei-Faktor-Pflicht für system_admin, shareholder und employee. Erst '
  'einschalten, wenn alle internen Konten einen bestätigten TOTP-Faktor haben '
  '(docs/OPERATIONS.md, Runbook O). Rückweg: enabled = false.'
) on conflict (key) do nothing;

create or replace function app.require_mfa_internal()
returns boolean
language sql stable security definer
set search_path = public, app
as $$
  select coalesce((select enabled from app.security_settings
                    where key = 'require_mfa_internal'), false);
$$;

create or replace function app.session_is_aal2()
returns boolean
language sql stable
set search_path = public, app
as $$
  select coalesce(auth.jwt() ->> 'aal', '') = 'aal2'
      or coalesce(auth.jwt() ->> 'role', '') = 'service_role';
$$;

-- Erfüllt die laufende Sitzung die Pflicht? Liegt in public, weil Regeln auf
-- storage.objects und die Prüfung vor jeder Anfrage sie mit den Rechten des
-- Aufrufers aufrufen, und `anon` kein Nutzungsrecht am Schema app hat.
create or replace function public.mfa_erfuellt()
returns boolean
language sql stable security definer
set search_path = public, app
as $$
  select not app.require_mfa_internal()
      or app.session_is_aal2()
      or not exists (
           select 1 from public.profiles p
            where p.id = auth.uid()
              and p.role in ('system_admin', 'shareholder', 'employee'));
$$;
comment on function public.mfa_erfuellt() is
  'true, außer: Schalter require_mfa_internal steht, der Aufrufer ist ein '
  'internes Konto und die Sitzung trägt keinen zweiten Faktor (aal2).';

-- Prüfung vor jeder Anfrage an die API. Mit Rechten des Aufrufers (invoker),
-- damit sie nicht als Funktion mit Eigentümerrechten nach außen zeigt.
create or replace function public.pruefe_anfrage()
returns void
language plpgsql stable
set search_path = public, app
as $$
begin
  if public.mfa_erfuellt() then
    return;
  end if;
  raise sqlstate 'PGRST' using
    message = json_build_object(
      'code',    'BS24_MFA',
      'message', 'Zwei-Faktor-Anmeldung erforderlich.',
      'hint',    'Bitte in der App den Code aus der Authenticator-App eingeben.')::text,
    detail  = json_build_object('status', 403)::text;
end;
$$;
comment on function public.pruefe_anfrage() is
  'Läuft vor jeder Anfrage an die API (pgrst.db_pre_request). Weist interne '
  'Konten ohne zweiten Faktor ab, solange die Zwei-Faktor-Pflicht steht.';

revoke all on function app.require_mfa_internal() from public, anon;
revoke all on function app.session_is_aal2()      from public, anon;
grant execute on function app.require_mfa_internal() to authenticated, service_role;
grant execute on function app.session_is_aal2()      to authenticated, service_role;
revoke all on function public.mfa_erfuellt()   from public;
revoke all on function public.pruefe_anfrage() from public;
grant execute on function public.mfa_erfuellt()   to anon, authenticated, service_role;
grant execute on function public.pruefe_anfrage() to anon, authenticated, service_role;

-- Einschränkende Regeln: wirken zusätzlich zu allen anderen Regeln (UND).
-- Dateien:
drop policy if exists mfa_pflicht on storage.objects;
create policy mfa_pflicht on storage.objects as restrictive for all to authenticated
  using ((select public.mfa_erfuellt())) with check ((select public.mfa_erfuellt()));

-- Tabellen der Echtzeit-Veröffentlichung (Stand 15.11.2026):
do $$
declare t text;
begin
  foreach t in array array['machine_slots', 'mhd_preisstufen', 'vend_freigaben', 'preis_ausspielungen'] loop
    if to_regclass('public.' || t) is not null then
      execute format('drop policy if exists mfa_pflicht on public.%I', t);
      execute format(
        'create policy mfa_pflicht on public.%I as restrictive for all to authenticated '
        'using ((select public.mfa_erfuellt())) with check ((select public.mfa_erfuellt()))', t);
    end if;
  end loop;
end $$;
