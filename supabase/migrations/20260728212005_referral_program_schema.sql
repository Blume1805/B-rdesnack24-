create table if not exists public.referral_config (
  id                    smallint primary key default 1 check (id = 1),
  enabled               boolean not null default true,
  months_monthly        smallint not null default 1,
  months_yearly         smallint not null default 2,
  withdrawal_days       smallint not null default 14,
  max_rewards_per_year  smallint not null default 20,
  updated_at            timestamptz not null default now()
);
insert into public.referral_config (id) values (1) on conflict (id) do nothing;
comment on table public.referral_config is
  'Stellschrauben des Empfehlungsprogramms. Genau eine Zeile.';

create table if not exists public.referral_milestones (
  threshold       smallint primary key,
  bonus_months    smallint not null default 0,
  badge_code      text,
  grants_lifetime boolean not null default false,
  label           text not null
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

create table if not exists public.referral_codes (
  owner_id   uuid primary key references public.profiles(id) on delete cascade,
  code       text not null unique,
  created_at timestamptz not null default now()
);
comment on table public.referral_codes is
  'Ein Empfehlungscode je Profil, wird bei der ersten Abfrage erzeugt.';

do $$ begin
  create type app.referral_status as enum
    ('registered', 'qualified', 'rewarded', 'rejected');
exception when duplicate_object then null;
end $$;

create table if not exists public.referrals (
  id              uuid primary key default gen_random_uuid(),
  referrer_id     uuid not null references public.profiles(id) on delete cascade,
  referee_id      uuid not null unique references public.profiles(id) on delete cascade,
  code            text not null,
  status          app.referral_status not null default 'registered',
  referee_plan    app.subscription_plan,
  referrer_months smallint not null default 0,
  referee_months  smallint not null default 0,
  registered_at   timestamptz not null default now(),
  qualified_at    timestamptz,
  payable_at      timestamptz,
  rewarded_at     timestamptz,
  reject_reason   text,
  constraint referral_no_self check (referrer_id <> referee_id)
);
create index if not exists referrals_referrer_idx on public.referrals (referrer_id, status);
create index if not exists referrals_due_idx on public.referrals (payable_at) where status = 'qualified';
comment on table public.referrals is
  'Eine Zeile je geworbener Person. referee_id ist unique — nur einmal werbbar.';

create table if not exists public.referral_rewards (
  id          uuid primary key default gen_random_uuid(),
  profile_id  uuid not null references public.profiles(id) on delete cascade,
  referral_id uuid references public.referrals(id) on delete set null,
  kind        text not null check (kind in ('referral', 'milestone', 'lifetime', 'credit')),
  months      smallint not null default 0,
  badge_code  text,
  note        text,
  granted_at  timestamptz not null default now()
);
create index if not exists referral_rewards_profile_idx
  on public.referral_rewards (profile_id, granted_at desc);
create unique index if not exists referral_rewards_milestone_once
  on public.referral_rewards (profile_id, note)
  where kind in ('milestone', 'lifetime');
comment on table public.referral_rewards is
  'Journal aller gewährten Prämien (Freimonate, Badges, Lifetime).';

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

drop policy if exists referral_codes_read_own on public.referral_codes;
create policy referral_codes_read_own on public.referral_codes
  for select to authenticated
  using (owner_id = (select auth.uid()) or public.is_admin());

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

drop policy if exists referral_config_write on public.referral_config;
create policy referral_config_write on public.referral_config
  for all to authenticated
  using (public.is_admin() or public.auth_has_permission('users.manage'))
  with check (public.is_admin() or public.auth_has_permission('users.manage'));
