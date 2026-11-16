-- ============================================================================
-- weather-sync nur noch mit Einmalmarke aufrufbar (Audit A2-02)
--
-- Befund: Die Server-Funktion weather-sync war ohne jede Anmeldung aufrufbar
-- und prüfte selbst nichts. Die geplante Aufgabe `weather-sync` stand nur in
-- der echten Datenbank (im Dashboard angelegt), nicht im Repository.
--
-- Lösung ohne neues Geheimnis: Vor jedem Aufruf legt die Datenbank eine
-- zufällige Einmalmarke an und schickt sie im Kopf `x-bs24-marke` mit. Die
-- Funktion löst die Marke über public.wetter_marke_einloesen() ein; das darf
-- nur der Dienstschlüssel. Eine Marke gilt 10 Minuten und genau einmal.
-- Wer die Funktion von außen aufruft, hat keine gültige Marke und wird mit
-- 401 abgewiesen.
--
-- Reihenfolge beim Ausrollen: ERST diese Migration, DANN die Funktion. Die
-- alte Funktion ignoriert den Kopf und läuft weiter; umgekehrt würde der
-- alte Aufruf ohne Marke abgewiesen (Folge nur: ein Tag ohne Wetterdaten,
-- der Tages-Deal fällt auf die Monatsregel zurück).
--
-- Rückweg: cron.schedule('weather-sync', '40 3 * * *', <alter Befehl ohne
-- Kopf>) und die vorige Funktionsversion ausliefern.
-- ============================================================================

create table if not exists app.wetter_abruf_marken (
  marke    uuid        primary key default gen_random_uuid(),
  angelegt timestamptz not null default now()
);
alter table app.wetter_abruf_marken enable row level security;
revoke all on app.wetter_abruf_marken from public, anon, authenticated;

create or replace function app.wetter_abruf_ausloesen()
returns bigint
language plpgsql security definer
set search_path = public, app, extensions
as $$
declare v_marke uuid;
begin
  delete from app.wetter_abruf_marken where angelegt < now() - interval '1 hour';
  insert into app.wetter_abruf_marken default values returning marke into v_marke;
  return net.http_post(
    url     := 'https://nnfsyuglkqycwenwxmuw.supabase.co/functions/v1/weather-sync',
    body    := '{}'::jsonb,
    params  := '{}'::jsonb,
    headers := jsonb_build_object('Content-Type', 'application/json',
                                  'x-bs24-marke', v_marke::text),
    timeout_milliseconds := 10000
  );
end;
$$;

create or replace function public.wetter_marke_einloesen(p_marke uuid)
returns boolean
language sql volatile security definer
set search_path = public, app
as $$
  with weg as (
    delete from app.wetter_abruf_marken
     where marke = p_marke and angelegt > now() - interval '10 minutes'
    returning 1
  )
  select exists (select 1 from weg);
$$;

revoke all on function app.wetter_abruf_ausloesen()          from public, anon, authenticated;
revoke all on function public.wetter_marke_einloesen(uuid)   from public, anon, authenticated;
grant execute on function public.wetter_marke_einloesen(uuid) to service_role;

do $$
begin
  if to_regclass('cron.job') is not null then
    if exists (select 1 from cron.job where jobname = 'weather-sync') then
      perform cron.unschedule('weather-sync');
    end if;
    perform cron.schedule('weather-sync', '40 3 * * *', 'select app.wetter_abruf_ausloesen();');
  end if;
end $$;
