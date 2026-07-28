-- ============================================================================
-- 0066 · Wetterabhängige Tages-Angebote
-- ----------------------------------------------------------------------------
-- Ziel: an heißen Tagen Eis und Kaltgetränke bewerben, an kalten Tagen
-- Heißgetränke. Grundlage ist products.serve_temp aus 0065.
--
-- WARUM TAGES- UND NICHT WOCHENANGEBOTE
-- generate_weekly_offers legt die Angebote eine ganze Woche im Voraus an.
-- Eine Wettervorhersage trägt aber nur zwei bis drei Tage. Wetterlogik hängt
-- deshalb an einem eigenen Tages-Deal (kind='daily'); die Wochenangebote
-- bleiben bewusst wetterunabhängig und damit planbar (Einkauf, Befüllung).
--
-- DATENSCHUTZ
-- Abgefragt wird ausschließlich der feste Standort der Automaten, niemals
-- der Standort eines Kunden. Damit sind keine personenbezogenen Daten im
-- Spiel und es braucht keine Einwilligung. Der Abruf läuft serverseitig
-- (Edge Function + Cron) — der Client ruft nie einen Wetterdienst.
--
-- QUELLE
-- Bright Sky (https://brightsky.dev) liefert die offenen Daten des Deutschen
-- Wetterdienstes: kein API-Key, kostenfrei, kommerzielle Nutzung durch die
-- DWD-Open-Data-Lizenz gedeckt. Bewusst nicht Open-Meteo — dort verlangt die
-- gewerbliche Nutzung einen kostenpflichtigen Plan.
-- ============================================================================

-- 1) Konfiguration (genau eine Zeile) ----------------------------------------
create table if not exists public.weather_config (
  id              smallint primary key default 1 check (id = 1),
  lat             double precision not null,
  lng             double precision not null,
  -- Ab dieser Tageshöchsttemperatur werden 'cold'-Artikel bevorzugt.
  hot_threshold_c numeric(4,1) not null default 25.0,
  -- Bis zu dieser Tageshöchsttemperatur werden 'hot'-Artikel bevorzugt.
  cold_threshold_c numeric(4,1) not null default 8.0,
  enabled         boolean not null default true,
  updated_at      timestamptz not null default now()
);

comment on table public.weather_config is
  'Standort und Schwellen für wetterabhängige Angebote. Genau eine Zeile.';

-- Standort der Automaten (Sülzetal OT Osterweddingen). Alle Automaten stehen
-- im selben Ort — ein Messpunkt genügt.
insert into public.weather_config (id, lat, lng)
values (1, 52.0483, 11.5836)
on conflict (id) do nothing;

-- 2) Vorhersage-Cache ---------------------------------------------------------
create table if not exists public.weather_daily (
  day        date primary key,
  temp_max_c numeric(4,1),
  temp_min_c numeric(4,1),
  condition  text,
  source     text not null default 'dwd/brightsky',
  fetched_at timestamptz not null default now()
);

comment on table public.weather_daily is
  'Tages-Vorhersage je Kalendertag, befüllt von der Edge Function weather-sync.';

-- 3) RLS ----------------------------------------------------------------------
-- Wetterdaten sind nicht personenbezogen; Kunden dürfen lesen (die App zeigt
-- den Grund des Deals an). Schreiben nur Verwaltung/Service-Role.
alter table public.weather_config enable row level security;
alter table public.weather_daily  enable row level security;

drop policy if exists weather_daily_read on public.weather_daily;
create policy weather_daily_read on public.weather_daily
  for select to authenticated using (true);

drop policy if exists weather_daily_write on public.weather_daily;
create policy weather_daily_write on public.weather_daily
  for all to authenticated
  using (public.is_admin() or public.auth_has_permission('offers.manage'))
  with check (public.is_admin() or public.auth_has_permission('offers.manage'));

drop policy if exists weather_config_read on public.weather_config;
create policy weather_config_read on public.weather_config
  for select to authenticated using (true);

drop policy if exists weather_config_write on public.weather_config;
create policy weather_config_write on public.weather_config
  for all to authenticated
  using (public.is_admin() or public.auth_has_permission('offers.manage'))
  with check (public.is_admin() or public.auth_has_permission('offers.manage'));

-- 4) Welche Serviertemperatur soll heute beworben werden? ---------------------
-- Fallback-Kette, damit ein Ausfall des Wetterdienstes die Angebotserzeugung
-- nie blockiert:
--   1. frische Vorhersage (< 24 h alt)  → Temperaturschwellen
--   2. keine/veraltete Vorhersage       → Monatsregel (Jahreszeit)
--   3. Übergangsmonate                  → 'neutral' (alles gleich gewichtet)
create or replace function app.weather_bias(p_day date default current_date)
returns text
language plpgsql
stable
set search_path = public, app
as $$
declare
  v_cfg  public.weather_config%rowtype;
  v_w    public.weather_daily%rowtype;
begin
  select * into v_cfg from public.weather_config where id = 1;
  if not found or not v_cfg.enabled then
    return 'neutral';
  end if;

  select * into v_w
    from public.weather_daily
   where day = p_day
     and fetched_at > now() - interval '24 hours'
     and temp_max_c is not null;

  if found then
    if v_w.temp_max_c >= v_cfg.hot_threshold_c  then return 'cold'; end if;
    if v_w.temp_max_c <= v_cfg.cold_threshold_c then return 'hot';  end if;
    return 'neutral';
  end if;

  -- Ohne Vorhersage: grobe Jahreszeit statt gar nichts.
  return case
    when extract(month from p_day) between 5  and 9  then 'cold'
    when extract(month from p_day) in (11, 12, 1, 2, 3) then 'hot'
    else 'neutral'
  end;
end;
$$;

comment on function app.weather_bias(date) is
  'cold | hot | neutral — bevorzugte Serviertemperatur für Tages-Angebote.';

-- 5) Tages-Angebote erzeugen ---------------------------------------------------
-- Idempotent: der heutige Tages-Deal wird vorher entfernt, ein erneuter Aufruf
-- erzeugt also keine Dubletten. Gewichtung: passende serve_temp zuerst, dann
-- 'neutral', dann der Rest — innerhalb jeder Gruppe zufällig, damit sich der
-- Deal nicht festfährt.
create or replace function public.generate_daily_offers(p_count int default 2)
returns setof public.offers
language plpgsql
security definer
set search_path = public, app
as $$
declare
  v_bias  text := app.weather_bias(current_date);
  v_title text;
  v_note  text;
  rec     record;
  v_reg   numeric(12,4);
  v_off   numeric(12,4);
begin
  -- SECURITY DEFINER + EXECUTE für 'authenticated' hieße sonst: jeder
  -- eingeloggte Kunde könnte den Tages-Deal per REST beliebig neu würfeln,
  -- bis ihm der Preis passt. auth.uid() is null = Aufruf aus dem Cron
  -- (kein JWT) und damit erlaubt.
  if auth.uid() is not null
     and not (public.is_admin() or public.auth_has_permission('offers.manage'))
  then
    raise exception 'Keine Berechtigung für generate_daily_offers';
  end if;

  delete from public.offers
   where kind = 'daily' and valid_from = current_date;

  v_title := case v_bias
    when 'cold' then 'Hitze-Deal'
    when 'hot'  then 'Aufwärm-Deal'
    else 'Tages-Deal'
  end;
  v_note := case v_bias
    when 'cold' then 'Heute wird''s warm — 10 % auf die Abkühlung.'
    when 'hot'  then 'Heute wird''s frisch — 10 % auf was Warmes.'
    else 'Heute 10 % Rabatt.'
  end;

  for rec in (
    select p.id, p.name, p.list_price_net, p.image_url
      from public.products p
     where p.status = 'active'
       and p.list_price_net is not null
       and p.list_price_net > 0
     order by
       case
         when v_bias <> 'neutral' and p.serve_temp = v_bias then 0
         when p.serve_temp = 'neutral'                      then 1
         else 2
       end,
       random()
     limit greatest(p_count, 1)
  ) loop
    v_reg := rec.list_price_net;
    v_off := round(v_reg * 0.90, 4);
    return query
      insert into public.offers(
        title, description, kind, valid_from, valid_to,
        product_id, regular_price_net, offer_price_net, discount_percent, image_url
      ) values (
        format('%s: %s', v_title, rec.name),
        v_note,
        'daily',
        current_date, current_date,
        rec.id, v_reg, v_off, 10.0, rec.image_url
      )
      returning *;
  end loop;
end;
$$;

comment on function public.generate_daily_offers(int) is
  'Erzeugt die Tages-Angebote, gewichtet nach der Wetterlage (app.weather_bias).';

revoke all on function public.generate_daily_offers(int) from public;
grant execute on function public.generate_daily_offers(int) to authenticated;

-- 6) Zeitplan -------------------------------------------------------------------
-- Zeiten in UTC: 03:40 = 05:40 MESZ (Vorhersage holen), 03:50 = 05:50 MESZ
-- (Deal daraus erzeugen). Die zehn Minuten Abstand sind der Puffer für den
-- Function-Aufruf — pg_net arbeitet asynchron.
--
-- HINWEIS: Die Projekt-URL steckt hier fest im Job-Body. Beim Umzug auf ein
-- anderes Supabase-Projekt müssen beide Jobs neu angelegt werden.
create extension if not exists pg_cron;

select cron.unschedule(jobname)
  from cron.job where jobname in ('weather-sync', 'daily-offers');

select cron.schedule(
  'weather-sync', '40 3 * * *',
  $job$
    select net.http_post(
      url     := 'https://nnfsyuglkqycwenwxmuw.supabase.co/functions/v1/weather-sync',
      headers := '{"Content-Type": "application/json"}'::jsonb,
      body    := '{}'::jsonb
    );
  $job$
);

select cron.schedule(
  'daily-offers', '50 3 * * *',
  $job$ select public.generate_daily_offers(2); $job$
);
