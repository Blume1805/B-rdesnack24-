-- ============================================================================
-- Betriebsprüfung korrigiert (gefunden beim ersten echten Lauf, 17.11.2026)
--
-- 1. Die geplante Aufgabe `betriebszustand` prüfte sich selbst. Während sie
--    läuft, steht ihr eigener Lauf auf "running", also nicht "succeeded" —
--    das Ergebnis war deshalb immer "nicht gesund". Sie nimmt sich jetzt aus.
-- 2. Gesperrte Konten (banned_until in der Zukunft) zählten als interne
--    Konten mit. Für die Frage "haben alle internen Konten einen zweiten
--    Faktor?" (Runbook O) sind sie ohne Bedeutung, sie können sich nicht
--    anmelden. Sie werden jetzt nicht mehr gezählt.
-- Nur der Funktionsrumpf ändert sich; Rechte und Zeitplan bleiben.
-- Rückweg: Funktion aus 20261116100000_betriebszustand.sql erneut anlegen.
-- ============================================================================

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
         -- Die Prüfung selbst läuft gerade, während sie prüft (Lauf vom
         -- 17.11.2026 06:10 meldete sich als "running" und damit ungesund).
         and j.jobname <> 'betriebszustand'
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
  -- Gesperrte Konten (banned_until in der Zukunft) zählen nicht mit: Sie
  -- können sich nicht anmelden und brauchen keinen zweiten Faktor.
  select count(*) into v_intern from public.profiles p
   where p.role in ('system_admin', 'shareholder', 'employee') and p.deleted_at is null
     and not exists (select 1 from auth.users u
                      where u.id = p.id and u.banned_until > now());
  if to_regclass('auth.mfa_factors') is not null then
    execute $q$
      select count(distinct f.user_id) from auth.mfa_factors f
        join public.profiles p on p.id = f.user_id
       where f.status = 'verified'
         and p.role in ('system_admin', 'shareholder', 'employee') and p.deleted_at is null
         and not exists (select 1 from auth.users u
                          where u.id = p.id and u.banned_until > now())
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
