-- ============================================================================
-- 0073 · „Kunden werben Kunden"
-- ----------------------------------------------------------------------------
-- Ablauf
--   1. Abonnent A holt sich seinen persönlichen Code (my_referral_code).
--   2. A teilt Link/Code, B registriert sich darüber (register_referral).
--   3. B schließt erstmals ein kostenpflichtiges Abo ab → Trigger stuft die
--      Empfehlung auf 'qualified' und setzt payable_at = jetzt + Widerrufsfrist.
--   4. Nach Ablauf der Frist zahlt settle_due_referrals() beide Seiten aus.
--
-- Warum die Auszahlung ZEITVERSETZT läuft
-- Ein Widerruf innerhalb von 14 Tagen (§ 355 BGB) macht das Abo rückwirkend
-- zunichte. Würde die Prämie sofort gutgeschrieben, wäre sie danach nicht mehr
-- rückholbar — Anmelden, Prämie kassieren, widerrufen wäre ein offenes
-- Scheunentor. Deshalb: qualifizieren sofort, auszahlen erst nach Fristablauf.
--
-- ANBINDUNG AN DIE ZAHLUNG
-- Ein echter Payment-Webhook (App Store / Google Play / Stripe) existiert in
-- diesem Projekt noch nicht; die App schreibt die Abo-Wahl nach
-- customer_subscriptions. Der Trigger hängt deshalb dort. Sobald ein Webhook
-- dazukommt, ruft der dieselbe Funktion app.qualify_referral_for() auf —
-- die Logik muss dafür nicht angefasst werden.
-- ============================================================================

-- 1) Konfiguration -----------------------------------------------------------
create table if not exists public.referral_config (
  id                    smallint primary key default 1 check (id = 1),
  enabled               boolean not null default true,
  -- Prämie je geworbenem Abo, für BEIDE Seiten.
  months_monthly        smallint not null default 1,
  months_yearly         smallint not null default 2,
  -- Widerrufsfrist in Tagen (§ 355 BGB).
  withdrawal_days       smallint not null default 14,
  -- Kostendeckel: so viele ausgezahlte Empfehlungen pro Werber und Jahr.
  max_rewards_per_year  smallint not null default 20,
  updated_at            timestamptz not null default now()
);

insert into public.referral_config (id) values (1) on conflict (id) do nothing;

comment on table public.referral_config is
  'Stellschrauben des Empfehlungsprogramms. Genau eine Zeile.';

-- Meilensteine: ab welcher Zahl ausgezahlter Empfehlungen es eine
-- Zusatzprämie gibt. Kumulative Gesamtwerte laut Konzept:
--   1 → +1 Monat · 3 → +4 (3+1) · 5 → +7 (5+2) + Badge
--   10 → +15 (10+5) + Elite-Badge · 20 → Lifetime kostenlos
create table if not exists public.referral_milestones (
  threshold     smallint primary key,
  bonus_months  smallint not null default 0,
  badge_code    text,
  grants_lifetime boolean not null default false,
  label         text not null
);

insert into public.referral_milestones
  (threshold, bonus_months, badge_code, grants_lifetime, label)
values
  (3,  1, null,        false, '3 Empfehlungen — 1 Bonusmonat'),
  (5,  1, 'supporter', false, '5 Empfehlungen — Supporter-Badge + 1 Bonusmonat'),
  (10, 3, 'elite',     false, '10 Empfehlungen — Elite-Badge + 3 Bonusmonate'),
  (20, 0, 'legend',    true,  '20 Empfehlungen — Lifetime kostenlos')
on conflict (threshold) do update
  set bonus_months    = excluded.bonus_months,
      badge_code      = excluded.badge_code,
      grants_lifetime = excluded.grants_lifetime,
      label           = excluded.label;

-- 2) Persönlicher Code -------------------------------------------------------
create table if not exists public.referral_codes (
  owner_id   uuid primary key references public.profiles(id) on delete cascade,
  code       text not null unique,
  created_at timestamptz not null default now()
);

comment on table public.referral_codes is
  'Ein Empfehlungscode je Profil, wird bei der ersten Abfrage erzeugt.';

-- 3) Empfehlungen ------------------------------------------------------------
do $$ begin
  create type app.referral_status as enum
    ('registered', 'qualified', 'rewarded', 'rejected');
exception when duplicate_object then null;
end $$;

create table if not exists public.referrals (
  id             uuid primary key default gen_random_uuid(),
  referrer_id    uuid not null references public.profiles(id) on delete cascade,
  -- Jede Person kann nur EINMAL geworben werden.
  referee_id     uuid not null unique
                 references public.profiles(id) on delete cascade,
  code           text not null,
  status         app.referral_status not null default 'registered',
  referee_plan   app.subscription_plan,
  referrer_months smallint not null default 0,
  referee_months  smallint not null default 0,
  registered_at  timestamptz not null default now(),
  qualified_at   timestamptz,
  payable_at     timestamptz,
  rewarded_at    timestamptz,
  reject_reason  text,
  constraint referral_no_self check (referrer_id <> referee_id)
);

create index if not exists referrals_referrer_idx
  on public.referrals (referrer_id, status);
create index if not exists referrals_due_idx
  on public.referrals (payable_at) where status = 'qualified';

comment on table public.referrals is
  'Eine Zeile je geworbener Person. referee_id ist unique — nur einmal werbbar.';

-- 4) Prämien-Journal ---------------------------------------------------------
-- Append-only: jede gewährte Prämie bleibt nachvollziehbar stehen.
create table if not exists public.referral_rewards (
  id           uuid primary key default gen_random_uuid(),
  profile_id   uuid not null references public.profiles(id) on delete cascade,
  referral_id  uuid references public.referrals(id) on delete set null,
  kind         text not null check (kind in
                 ('referral', 'milestone', 'lifetime', 'credit')),
  months       smallint not null default 0,
  badge_code   text,
  note         text,
  granted_at   timestamptz not null default now()
);

create index if not exists referral_rewards_profile_idx
  on public.referral_rewards (profile_id, granted_at desc);

-- Meilensteine dürfen sich nicht wiederholen.
create unique index if not exists referral_rewards_milestone_once
  on public.referral_rewards (profile_id, note)
  where kind in ('milestone', 'lifetime');

comment on table public.referral_rewards is
  'Journal aller gewährten Prämien (Freimonate, Badges, Lifetime).';

-- 5) RLS ---------------------------------------------------------------------
alter table public.referral_config     enable row level security;
alter table public.referral_milestones enable row level security;
alter table public.referral_codes      enable row level security;
alter table public.referrals           enable row level security;
alter table public.referral_rewards    enable row level security;

drop policy if exists referral_config_read on public.referral_config;
create policy referral_config_read on public.referral_config
  for select to authenticated using (true);

drop policy if exists referral_milestones_read on public.referral_milestones;
create policy referral_milestones_read on public.referral_milestones
  for select to authenticated using (true);

-- Den eigenen Code lesen. Fremde Codes bleiben unsichtbar: wer einen Code
-- einlösen will, geht über register_referral (SECURITY DEFINER).
drop policy if exists referral_codes_read_own on public.referral_codes;
create policy referral_codes_read_own on public.referral_codes
  for select to authenticated
  using (owner_id = (select auth.uid()) or public.is_admin());

-- Beide Seiten sehen ihre Empfehlung; Schreiben ausschließlich über RPCs.
drop policy if exists referrals_read_own on public.referrals;
create policy referrals_read_own on public.referrals
  for select to authenticated
  using (referrer_id = (select auth.uid())
      or referee_id  = (select auth.uid())
      or public.is_admin());

drop policy if exists referral_rewards_read_own on public.referral_rewards;
create policy referral_rewards_read_own on public.referral_rewards
  for select to authenticated
  using (profile_id = (select auth.uid()) or public.is_admin());

-- Verwaltung darf die Stellschrauben ändern.
drop policy if exists referral_config_write on public.referral_config;
create policy referral_config_write on public.referral_config
  for all to authenticated
  using (public.is_admin() or public.auth_has_permission('users.manage'))
  with check (public.is_admin() or public.auth_has_permission('users.manage'));

-- 6) Code erzeugen / abrufen -------------------------------------------------
-- Alphabet ohne 0/O/1/I/L: der Code wird abgetippt und vorgelesen.
create or replace function app.new_referral_code()
returns text
language plpgsql
volatile
set search_path = public, app
as $$
declare
  v_alphabet constant text := 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
  v_code text;
  v_try  int := 0;
begin
  loop
    v_code := '';
    for i in 1..8 loop
      v_code := v_code ||
        substr(v_alphabet, 1 + floor(random() * length(v_alphabet))::int, 1);
    end loop;
    exit when not exists (
      select 1 from public.referral_codes where code = v_code
    );
    v_try := v_try + 1;
    if v_try > 50 then
      raise exception 'Konnte keinen freien Empfehlungscode erzeugen';
    end if;
  end loop;
  return v_code;
end;
$$;

create or replace function public.my_referral_code()
returns text
language plpgsql
security definer
set search_path = public, app
as $$
declare
  v_uid  uuid := auth.uid();
  v_code text;
begin
  if v_uid is null then
    raise exception 'Nicht angemeldet';
  end if;

  select code into v_code from public.referral_codes where owner_id = v_uid;
  if v_code is not null then
    return v_code;
  end if;

  v_code := app.new_referral_code();
  insert into public.referral_codes (owner_id, code)
  values (v_uid, v_code)
  on conflict (owner_id) do nothing;

  -- Bei parallelem Aufruf hat der andere Lauf gewonnen.
  select code into v_code from public.referral_codes where owner_id = v_uid;
  return v_code;
end;
$$;

revoke all on function public.my_referral_code() from public;
grant execute on function public.my_referral_code() to authenticated;

-- 7) Empfehlung eintragen (durch die geworbene Person) -----------------------
create or replace function public.register_referral(p_code text)
returns jsonb
language plpgsql
security definer
set search_path = public, app
as $$
declare
  v_uid         uuid := auth.uid();
  v_cfg         public.referral_config%rowtype;
  v_referrer    uuid;
  v_my_email    text;
  v_ref_email   text;
  v_has_sub     boolean;
begin
  if v_uid is null then
    raise exception 'Nicht angemeldet';
  end if;

  select * into v_cfg from public.referral_config where id = 1;
  if not found or not v_cfg.enabled then
    return jsonb_build_object('ok', false, 'reason', 'programm_inaktiv');
  end if;

  select owner_id into v_referrer
    from public.referral_codes
   where code = upper(trim(p_code));

  if v_referrer is null then
    return jsonb_build_object('ok', false, 'reason', 'code_unbekannt');
  end if;

  -- Keine Eigenwerbung.
  if v_referrer = v_uid then
    return jsonb_build_object('ok', false, 'reason', 'eigenwerbung');
  end if;

  select email into v_my_email  from public.profiles where id = v_uid;
  select email into v_ref_email from public.profiles where id = v_referrer;
  if lower(coalesce(v_my_email, '')) = lower(coalesce(v_ref_email, '')) then
    return jsonb_build_object('ok', false, 'reason', 'eigenwerbung');
  end if;

  -- Der Werber muss selbst zahlender Kunde sein.
  select exists (
    select 1 from public.customer_subscriptions
     where customer_id = v_referrer
  ) into v_has_sub;
  if not v_has_sub then
    return jsonb_build_object('ok', false, 'reason', 'werber_ohne_abo');
  end if;

  -- Zu spät: wer schon ein Abo hat, kann nicht mehr geworben werden.
  if exists (
    select 1 from public.customer_subscriptions where customer_id = v_uid
  ) then
    return jsonb_build_object('ok', false, 'reason', 'schon_abonnent');
  end if;

  insert into public.referrals (referrer_id, referee_id, code)
  values (v_referrer, v_uid, upper(trim(p_code)))
  on conflict (referee_id) do nothing;

  if not found then
    return jsonb_build_object('ok', false, 'reason', 'bereits_geworben');
  end if;

  return jsonb_build_object('ok', true, 'reason', 'registriert');
end;
$$;

revoke all on function public.register_referral(text) from public;
grant execute on function public.register_referral(text) to authenticated;

-- 8) Qualifizieren beim ersten kostenpflichtigen Abo -------------------------
create or replace function app.qualify_referral_for(
  p_customer uuid,
  p_plan     app.subscription_plan
)
returns void
language plpgsql
security definer
set search_path = public, app
as $$
declare
  v_cfg   public.referral_config%rowtype;
  v_ref   public.referrals%rowtype;
  v_count int;
  v_months smallint;
begin
  select * into v_cfg from public.referral_config where id = 1;
  if not found or not v_cfg.enabled then return; end if;

  select * into v_ref
    from public.referrals
   where referee_id = p_customer and status = 'registered';
  if not found then return; end if;

  -- Nur das ERSTE kostenpflichtige Abo zählt.
  select count(*) into v_count
    from public.customer_subscriptions
   where customer_id = p_customer;
  if v_count <> 1 then
    update public.referrals
       set status = 'rejected', reject_reason = 'nicht das erste Abo'
     where id = v_ref.id;
    return;
  end if;

  v_months := case p_plan
    when 'monthly' then v_cfg.months_monthly
    when 'yearly'  then v_cfg.months_yearly
    -- Lifetime: keine Freimonate (es gibt nichts zu verlängern) — die
    -- Gegenleistung kommt in settle_due_referrals als 'credit'.
    else 0
  end;

  update public.referrals
     set status          = 'qualified',
         referee_plan    = p_plan,
         referrer_months = v_months,
         referee_months  = v_months,
         qualified_at    = now(),
         payable_at      = now() + (v_cfg.withdrawal_days || ' days')::interval
   where id = v_ref.id;
end;
$$;

comment on function app.qualify_referral_for(uuid, app.subscription_plan) is
  'Stuft eine offene Empfehlung beim ersten Abo hoch. Einstiegspunkt für '
  'einen späteren Payment-Webhook.';

create or replace function app.tg_referral_on_subscription()
returns trigger
language plpgsql
security definer
set search_path = public, app
as $$
begin
  perform app.qualify_referral_for(new.customer_id, new.plan);
  return new;
end;
$$;

drop trigger if exists trg_referral_on_subscription
  on public.customer_subscriptions;
create trigger trg_referral_on_subscription
  after insert on public.customer_subscriptions
  for each row execute function app.tg_referral_on_subscription();

-- 9) Auszahlen nach Ablauf der Widerrufsfrist --------------------------------
create or replace function public.settle_due_referrals()
returns int
language plpgsql
security definer
set search_path = public, app
as $$
declare
  v_cfg       public.referral_config%rowtype;
  r           public.referrals%rowtype;
  v_paid_year int;
  v_total     int;
  m           public.referral_milestones%rowtype;
  v_settled   int := 0;
  v_lifetime  boolean;
begin
  -- Wie generate_daily_offers: aus dem Cron (kein JWT) erlaubt, sonst nur
  -- für die Verwaltung. Sonst könnte jeder Client die Auszahlung antriggern.
  if auth.uid() is not null
     and not (public.is_admin()
              or public.auth_has_permission('users.manage'))
  then
    raise exception 'Keine Berechtigung für settle_due_referrals';
  end if;

  select * into v_cfg from public.referral_config where id = 1;
  if not found or not v_cfg.enabled then return 0; end if;

  for r in
    select * from public.referrals
     where status = 'qualified' and payable_at <= now()
     order by payable_at
  loop
    -- Jahres-Deckel je Werber.
    select count(*) into v_paid_year
      from public.referrals
     where referrer_id = r.referrer_id
       and status = 'rewarded'
       and rewarded_at > now() - interval '1 year';

    if v_paid_year >= v_cfg.max_rewards_per_year then
      update public.referrals
         set status = 'rejected',
             reject_reason = 'Jahres-Höchstzahl an Prämien erreicht'
       where id = r.id;
      continue;
    end if;

    -- Werber: Freimonate — oder Guthaben, wenn er Lifetime hat (dort gibt
    -- es keine Laufzeit, die man verlängern könnte).
    select exists (
      select 1 from public.customer_subscriptions
       where customer_id = r.referrer_id and plan = 'lifetime'
    ) into v_lifetime;

    if v_lifetime then
      insert into public.referral_rewards
        (profile_id, referral_id, kind, months, note)
      values (r.referrer_id, r.id, 'credit', 0,
              'Guthaben statt Freimonat (Lifetime-Abo)');
    else
      insert into public.referral_rewards
        (profile_id, referral_id, kind, months, note)
      values (r.referrer_id, r.id, 'referral', r.referrer_months,
              'Erfolgreiche Empfehlung');
    end if;

    -- Geworbene Person.
    if r.referee_months > 0 then
      insert into public.referral_rewards
        (profile_id, referral_id, kind, months, note)
      values (r.referee_id, r.id, 'referral', r.referee_months,
              'Willkommensprämie über Empfehlung');
    end if;

    update public.referrals
       set status = 'rewarded', rewarded_at = now()
     where id = r.id;

    -- Meilensteine des Werbers prüfen.
    select count(*) into v_total
      from public.referrals
     where referrer_id = r.referrer_id and status = 'rewarded';

    for m in
      select * from public.referral_milestones
       where threshold <= v_total order by threshold
    loop
      begin
        if m.grants_lifetime then
          insert into public.referral_rewards
            (profile_id, kind, months, badge_code, note)
          values (r.referrer_id, 'lifetime', 0, m.badge_code, m.label);
        else
          insert into public.referral_rewards
            (profile_id, kind, months, badge_code, note)
          values (r.referrer_id, 'milestone', m.bonus_months,
                  m.badge_code, m.label);
        end if;
      exception when unique_violation then
        -- Meilenstein schon vergeben (Index referral_rewards_milestone_once).
        null;
      end;
    end loop;

    v_settled := v_settled + 1;
  end loop;

  return v_settled;
end;
$$;

revoke all on function public.settle_due_referrals() from public;
grant execute on function public.settle_due_referrals() to authenticated;

-- 10) Status für den Kundenbereich -------------------------------------------
create or replace function public.my_referral_status()
returns jsonb
language plpgsql
stable
security definer
set search_path = public, app
as $$
declare
  v_uid       uuid := auth.uid();
  v_cfg       public.referral_config%rowtype;
  v_code      text;
  v_rewarded  int;
  v_pending   int;
  v_months    int;
  v_next      public.referral_milestones%rowtype;
begin
  if v_uid is null then
    raise exception 'Nicht angemeldet';
  end if;

  select * into v_cfg from public.referral_config where id = 1;
  select code into v_code from public.referral_codes where owner_id = v_uid;

  select count(*) filter (where status = 'rewarded'),
         count(*) filter (where status in ('registered', 'qualified'))
    into v_rewarded, v_pending
    from public.referrals
   where referrer_id = v_uid;

  select coalesce(sum(months), 0) into v_months
    from public.referral_rewards where profile_id = v_uid;

  select * into v_next
    from public.referral_milestones
   where threshold > v_rewarded
   order by threshold
   limit 1;

  return jsonb_build_object(
    'enabled',        coalesce(v_cfg.enabled, false),
    'code',           v_code,
    'rewarded_count', coalesce(v_rewarded, 0),
    'pending_count',  coalesce(v_pending, 0),
    'months_total',   coalesce(v_months, 0),
    'months_monthly', v_cfg.months_monthly,
    'months_yearly',  v_cfg.months_yearly,
    'next_milestone', case when v_next.threshold is null then null else
      jsonb_build_object(
        'threshold',    v_next.threshold,
        'bonus_months', v_next.bonus_months,
        'badge_code',   v_next.badge_code,
        'label',        v_next.label)
    end,
    'history', coalesce((
      select jsonb_agg(jsonb_build_object(
               'id',           r.id,
               'name',         split_part(coalesce(p.full_name, 'Freund*in'), ' ', 1),
               'status',       r.status,
               'plan',         r.referee_plan,
               'months',       r.referrer_months,
               'payable_at',   r.payable_at,
               'rewarded_at',  r.rewarded_at,
               'registered_at', r.registered_at)
             order by r.registered_at desc)
        from public.referrals r
        join public.profiles p on p.id = r.referee_id
       where r.referrer_id = v_uid), '[]'::jsonb),
    'rewards', coalesce((
      select jsonb_agg(jsonb_build_object(
               'kind',       kind,
               'months',     months,
               'badge_code', badge_code,
               'note',       note,
               'granted_at', granted_at)
             order by granted_at desc)
        from public.referral_rewards
       where profile_id = v_uid), '[]'::jsonb)
  );
end;
$$;

revoke all on function public.my_referral_status() from public;
grant execute on function public.my_referral_status() to authenticated;

-- 11) Täglicher Lauf ----------------------------------------------------------
create extension if not exists pg_cron;

select cron.unschedule(jobname)
  from cron.job where jobname = 'referral-settle';

select cron.schedule(
  'referral-settle', '20 4 * * *',
  $job$ select public.settle_due_referrals(); $job$
);
