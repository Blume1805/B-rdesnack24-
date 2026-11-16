-- ============================================================================
-- Betriebszustand: eine Prüfung, die täglich läuft und festhält, ob der
-- Betrieb gesund ist (Audit 15.11.2026, Befund A2-15: keine Überwachung).
--
-- app.betriebszustand() prüft, ohne Kundendaten zu lesen:
--   * geplante Aufgaben: welche ist in den letzten 26 Stunden fehlgeschlagen
--     oder gar nicht gelaufen
--   * Zeilenschutz: Tabellen in public ohne Zeilenschutz
--   * Funktionen ohne festen Suchpfad in public und app
--   * Löschanträge, die länger als 30 Tage offen sind (Art. 12 Abs. 3 DSGVO)
--   * Stand der Zwei-Faktor-Pflicht und wie viele interne Konten einen
--     bestätigten Faktor haben
-- Ergebnis: jsonb mit `gesund` (true/false) und den Einzelwerten.
--
-- Ein täglicher Lauf (06:10 Uhr UTC) schreibt das Ergebnis nach
-- app.betriebsprotokoll. Interne Konten mit Recht `finance.view` oder Admins
-- lesen den letzten Stand über public.betriebszustand_letzter().
-- ============================================================================

create table if not exists app.betriebsprotokoll (
  id        bigint generated always as identity primary key,
  geprueft  timestamptz not null default now(),
  gesund    boolean     not null,
  befund    jsonb       not null
);
alter table app.betriebsprotokoll enable row level security;
revoke all on app.betriebsprotokoll from public, anon, authenticated;

create or replace function app.betriebszustand()
returns jsonb
language plpgsql stable security definer
set search_path = public, app
as $$
declare
  v_cron jsonb := '[]'::jsonb;
  v_ohne_rls text[];
  v_ohne_pfad int;
  v_loesch int := 0;
  v_mfa_an boolean := false;
  v_mfa_konten int := 0;
  v_intern int := 0;
begin
  if to_regclass('cron.job') is not null and to_regclass('cron.job_run_details') is not null then
    execute $q$
      select coalesce(jsonb_agg(jsonb_build_object(
               'aufgabe', j.jobname,
               'letzter_lauf', l.start_time,
               'status', l.status)), '[]'::jsonb)
        from cron.job j
        left join lateral (
          select d.start_time, d.status from cron.job_run_details d
           where d.jobid = j.jobid order by d.start_time desc limit 1) l on true
       where j.active
         and (l.status is distinct from 'succeeded'
              or l.start_time < now() - interval '26 hours')
    $q$ into v_cron;
  end if;

  select coalesce(array_agg(c.relname order by c.relname), '{}')
    into v_ohne_rls
    from pg_class c join pg_namespace n on n.oid = c.relnamespace
   where n.nspname = 'public' and c.relkind = 'r' and not c.relrowsecurity;

  select count(*) into v_ohne_pfad
    from pg_proc p join pg_namespace n on n.oid = p.pronamespace
   where n.nspname in ('public', 'app')
     and not exists (select 1 from unnest(coalesce(p.proconfig, '{}')) x
                      where x like 'search_path=%');

  if to_regclass('public.account_deletion_requests') is not null then
    execute $q$
      select count(*) from public.account_deletion_requests r
       where r.requested_at < now() - interval '30 days'
         and r.status = 'pending' and r.handled_at is null
    $q$ into v_loesch;
  end if;

  if to_regprocedure('app.require_mfa_internal()') is not null then
    v_mfa_an := app.require_mfa_internal();
  end if;
  select count(*) into v_intern from public.profiles
   where role in ('system_admin', 'shareholder', 'employee') and deleted_at is null;
  if to_regclass('auth.mfa_factors') is not null then
    execute $q$
      select count(distinct f.user_id) from auth.mfa_factors f
        join public.profiles p on p.id = f.user_id
       where f.status = 'verified'
         and p.role in ('system_admin', 'shareholder', 'employee') and p.deleted_at is null
    $q$ into v_mfa_konten;
  end if;

  return jsonb_build_object(
    'gesund', jsonb_array_length(v_cron) = 0
              and cardinality(v_ohne_rls) = 0
              and v_ohne_pfad = 0
              and v_loesch = 0,
    'aufgaben_auffaellig', v_cron,
    'tabellen_ohne_zeilenschutz', to_jsonb(v_ohne_rls),
    'funktionen_ohne_suchpfad', v_ohne_pfad,
    'loeschantraege_ueber_30_tage', v_loesch,
    'zwei_faktor_pflicht', v_mfa_an,
    'interne_konten', v_intern,
    'interne_konten_mit_faktor', v_mfa_konten
  );
end;
$$;

create or replace function app.betriebszustand_festhalten()
returns void
language plpgsql security definer
set search_path = public, app
as $$
declare v jsonb := app.betriebszustand();
begin
  insert into app.betriebsprotokoll (gesund, befund) values ((v ->> 'gesund')::boolean, v);
  delete from app.betriebsprotokoll where geprueft < now() - interval '400 days';
end;
$$;

create or replace function public.betriebszustand_letzter()
returns table (geprueft timestamptz, gesund boolean, befund jsonb)
language sql stable security definer
set search_path = public, app
as $$
  select b.geprueft, b.gesund, b.befund
    from app.betriebsprotokoll b
   where public.is_admin() or public.auth_has_permission('finance.view')
   order by b.geprueft desc
   limit 1;
$$;

revoke all on function app.betriebszustand()            from public, anon, authenticated;
revoke all on function app.betriebszustand_festhalten() from public, anon, authenticated;
revoke all on function public.betriebszustand_letzter() from public, anon;
grant execute on function public.betriebszustand_letzter() to authenticated, service_role;

do $$
begin
  if to_regclass('cron.job') is not null then
    if exists (select 1 from cron.job where jobname = 'betriebszustand') then
      perform cron.unschedule('betriebszustand');
    end if;
    perform cron.schedule('betriebszustand', '10 6 * * *', 'select app.betriebszustand_festhalten();');
  end if;
end $$;
