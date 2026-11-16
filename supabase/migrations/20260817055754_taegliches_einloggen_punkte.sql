create or replace function app.heute()
returns date
language sql
stable
set search_path = public, app
as $fn$ select (now() at time zone 'Europe/Berlin')::date; $fn$;

comment on function app.heute() is
  'Heutiger Kalendertag in deutscher Zeit. Die Datenbank läuft auf UTC — current_date wechselt deshalb um 01:00/02:00 Uhr deutscher Zeit und nicht um Mitternacht.';

create table if not exists public.customer_login_days (
  customer_id uuid not null references public.customers(id) on delete cascade,
  day         date not null,
  recorded_at timestamptz not null default now(),
  primary key (customer_id, day)
);

comment on table public.customer_login_days is
  'Tage, an denen der Kunde die App geöffnet hat. Grundlage der Login-Punkte. Bewusst ohne Uhrzeit, ohne Gerät, ohne IP.';

comment on column public.customer_login_days.day is
  'Kalendertag in deutscher Zeit (app.heute()), nicht UTC und nicht vom Client.';

alter table public.customer_login_days enable row level security;
revoke all on public.customer_login_days from anon, authenticated;

create or replace function app.login_points(p_customer uuid, p_month_start date)
returns int
language sql
stable
set search_path = public, app
as $fn$
  with tage as (
    select
      d.day,
      row_number() over (
        partition by date_trunc('week', d.day) order by d.day
      ) as platz,
      count(*) over (partition by date_trunc('week', d.day)) as tage_der_woche
    from public.customer_login_days d
    where d.customer_id = p_customer
  )
  select coalesce(sum(
      case when platz <= 6 then 10 else 0 end
    + case when tage_der_woche = 7 and platz = 7 then 100 else 0 end
  ), 0)::int
  from tage
  where day >= p_month_start
    and day <  (p_month_start + interval '1 month')::date;
$fn$;

comment on function app.login_points(uuid, date) is
  'Punkte aus Logins im angegebenen Monat: 10 je Tag für die ersten sechs Tage einer Woche, 100 zusätzlich für die volle Woche. Höchstens 640 im Monat.';

create or replace function app.login_week(p_customer uuid)
returns jsonb
language sql
stable
set search_path = public, app
as $fn$
  with grenzen as (
    select
      date_trunc('week', app.heute())::date                        as wochenstart,
      (date_trunc('week', app.heute()) + interval '6 days')::date  as wochenende,
      date_trunc('month', app.heute())::date                       as monatsstart,
      app.heute()                                                  as heute
  ),
  kaesten as (
    select
      g.wochenstart + i as tag,
      exists (
        select 1 from public.customer_login_days d
        where d.customer_id = p_customer
          and d.day = g.wochenstart + i
      ) as eingeloggt,
      (g.wochenstart + i) > g.heute as zukunft
    from grenzen g, generate_series(0, 6) as i
  )
  select jsonb_build_object(
    'week_start',     (select wochenstart from grenzen),
    'week_end',       (select wochenende  from grenzen),
    'today',          (select heute       from grenzen),
    'days',           (select jsonb_agg(jsonb_build_object(
                               'day',       tag,
                               'logged_in', eingeloggt,
                               'future',    zukunft
                             ) order by tag)
                       from kaesten),
    'days_logged_in', (select count(*) from kaesten where eingeloggt),
    'week_complete',  (select count(*) = 7 from kaesten where eingeloggt),
    'points_per_day', 10,
    'streak_bonus',   100,
    'points_max_week',160,
    'login_points_month',
                      app.login_points(p_customer, (select monatsstart from grenzen))
  );
$fn$;

comment on function app.login_week(uuid) is
  'Sieben Kästen Montag bis Sonntag mit Login-Status, plus die Punkte-Eckwerte für die Anzeige. Tage in der Zukunft sind markiert.';

create or replace function public.my_login_week()
returns jsonb
language plpgsql
stable
security definer
set search_path = public, app
as $fn$
begin
  if auth.uid() is null then
    raise exception 'Anmeldung erforderlich' using errcode = 'P0001';
  end if;
  return app.login_week(auth.uid());
end;
$fn$;

comment on function public.my_login_week() is
  'Wochenübersicht des angemeldeten Kunden, ohne etwas zu buchen.';

revoke all on function public.my_login_week() from public, anon;
grant execute on function public.my_login_week() to authenticated;

create or replace function public.record_daily_login()
returns jsonb
language plpgsql
security definer
set search_path = public, app
as $fn$
declare
  v_uid     uuid := auth.uid();
  v_heute   date := app.heute();
  v_monat   date := date_trunc('month', app.heute())::date;
  v_zeilen  int;
  v_vorher  int;
  v_nachher int;
  v_woche   jsonb;
begin
  if v_uid is null then
    raise exception 'Anmeldung erforderlich' using errcode = 'P0001';
  end if;

  if not exists (select 1 from public.customers c where c.id = v_uid) then
    return jsonb_build_object('participates', false);
  end if;

  v_vorher := app.login_points(v_uid, v_monat);

  insert into public.customer_login_days(customer_id, day)
  values (v_uid, v_heute)
  on conflict (customer_id, day) do nothing;
  get diagnostics v_zeilen = row_count;

  v_nachher := app.login_points(v_uid, v_monat);

  if v_zeilen > 0 then
    perform app.grant_loyalty_bonuses(v_uid);
  end if;

  v_woche := app.login_week(v_uid);

  return v_woche || jsonb_build_object(
    'participates',    true,
    'counted_today',   v_zeilen > 0,
    'awarded',         v_nachher - v_vorher,
    'benefits_active', app.has_subscription(v_uid)
  );
end;
$fn$;

comment on function public.record_daily_login() is
  'Hält den heutigen Login fest, prüft die Meilensteine und liefert die Wochenübersicht. Mehrfachaufruf am selben Tag bucht nichts und meldet awarded = 0.';

revoke all on function public.record_daily_login() from public, anon;
grant execute on function public.record_daily_login() to authenticated;

create or replace function public.my_loyalty_status()
returns table (
  points          int,
  next_tier       int,
  points_to_next  int,
  reached_tiers   int[],
  month_start     date,
  next_reset      date
)
language plpgsql
security definer
set search_path = public, app
stable
as $fn$
declare
  v_month_start date := date_trunc('month', app.heute())::date;
  v_next_reset  date := (date_trunc('month', app.heute()) + interval '1 month')::date;
  v_gross       numeric(12,2);
  v_pts         int;
  v_tiers       int[] := app.loyalty_milestones();
  v_reached     int[] := array[]::int[];
  v_next        int;
  v_to_next     int;
  t             int;
begin
  select coalesce(sum(total_gross), 0) into v_gross
  from public.purchases
  where customer_id = auth.uid()
    and purchased_at >= v_month_start;

  v_pts := floor(v_gross * 100)::int
         + app.login_points(auth.uid(), v_month_start);

  foreach t in array v_tiers loop
    if v_pts >= t then
      v_reached := v_reached || t;
    end if;
  end loop;

  v_next := null;
  foreach t in array v_tiers loop
    if v_pts < t then
      v_next := t;
      exit;
    end if;
  end loop;

  if v_next is null then
    v_to_next := 0;
  else
    v_to_next := v_next - v_pts;
  end if;

  return query select
    v_pts, v_next, v_to_next, v_reached, v_month_start, v_next_reset;
end;
$fn$;

comment on function public.my_loyalty_status() is
  'Punktestand des laufenden Monats: 1 Punkt je Cent Umsatz plus Login-Punkte (10 je Tag, 100 je voller Woche). Reset am Monatsersten.';

create or replace function app.grant_loyalty_bonuses(p_customer_id uuid)
returns int
language plpgsql
security definer
set search_path = public, app
as $fn$
declare
  v_month_start date := date_trunc('month', app.heute())::date;
  v_gross       numeric(12,2);
  v_pts         int;
  v_granted     int := 0;
  v_tier        int;
  v_offer       public.personal_offers;
  v_product     public.products%rowtype;
  v_regular     numeric(12,2);
  v_discount    numeric(5,2);
begin
  if not app.has_subscription(p_customer_id) then
    return 0;
  end if;

  select coalesce(sum(total_gross), 0) into v_gross
  from public.purchases
  where customer_id = p_customer_id
    and purchased_at >= v_month_start;

  v_pts := floor(v_gross * 100)::int
         + app.login_points(p_customer_id, v_month_start);

  foreach v_tier in array app.loyalty_milestones() loop
    exit when v_pts < v_tier;
    if exists (
      select 1 from public.loyalty_bonus_grants
      where customer_id = p_customer_id
        and month_start = v_month_start
        and tier = v_tier
    ) then
      continue;
    end if;

    v_discount := case v_tier
      when 500  then  5.0
      when 1200 then 10.0
      when 2000 then 15.0
      when 3000 then 25.0
      else 5.0
    end;

    select p.* into v_product
    from public.products p
    join public.purchase_items pi on pi.product_id = p.id
    join public.purchases pu       on pu.id = pi.purchase_id
    where pu.customer_id = p_customer_id
      and pu.purchased_at > now() - interval '90 days'
      and p.status = 'active' and p.list_price_net is not null
    group by p.id
    order by sum(pi.quantity) desc, random()
    limit 1;

    if not found then
      select * into v_product
      from public.products
      where status = 'active' and list_price_net is not null and list_price_net > 0
      order by random()
      limit 1;
    end if;
    if not found then continue; end if;

    v_regular := v_product.list_price_net;

    insert into public.personal_offers(
      customer_id, product_id, title,
      regular_price_net, offer_price_net, discount_percent,
      redemption_code, valid_from, valid_to, image_url, source
    ) values (
      p_customer_id, v_product.id, v_product.name,
      v_regular,
      round(v_regular * (1 - v_discount/100.0), 2),
      v_discount,
      app.generate_redemption_code(),
      now(),
      now() + interval '14 days',
      v_product.image_url,
      'loyalty'
    )
    returning * into v_offer;

    insert into public.loyalty_bonus_grants(customer_id, month_start, tier, offer_id)
    values (p_customer_id, v_month_start, v_tier, v_offer.id)
    on conflict do nothing;

    v_granted := v_granted + 1;
  end loop;

  return v_granted;
end;
$fn$;

comment on function app.grant_loyalty_bonuses(uuid) is
  'Vergibt Meilenstein-Gutscheine. Punktequelle identisch mit my_loyalty_status(): Umsatz plus Login-Punkte. Ohne aktives Abo keine Gutscheine — gesammelt wird trotzdem.';

create or replace function app.purge_login_days()
returns int
language plpgsql
security definer
set search_path = public, app
as $fn$
declare v_geloescht int;
begin
  delete from public.customer_login_days
  where day < app.heute() - 90;
  get diagnostics v_geloescht = row_count;
  return v_geloescht;
end;
$fn$;

comment on function app.purge_login_days() is
  'Löscht Login-Tage älter als 90 Tage (Art. 5 Abs. 1 lit. e DSGVO).';

revoke all on function app.purge_login_days() from public, anon, authenticated;
