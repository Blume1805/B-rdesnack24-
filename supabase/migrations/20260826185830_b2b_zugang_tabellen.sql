-- 0141 — Schritt 4, Teil 1: Tabellen des Firmenkundenbereichs.
-- Vollstaendige Begruendung in supabase/migrations/0141_b2b_zugang_einladung_budget.sql

create table if not exists public.business_invitations (
  id           uuid primary key default gen_random_uuid(),
  business_id  uuid not null references public.businesses(id) on delete cascade,
  email        text not null
               check (email = lower(btrim(email)) and position('@' in email) > 1),
  role         app.business_role not null default 'member',
  token_hash   bytea not null,
  expires_at   timestamptz not null,
  accepted_at  timestamptz,
  accepted_by  uuid references public.profiles(id),
  revoked_at   timestamptz,
  created_at   timestamptz not null default now(),
  created_by   uuid references public.profiles(id),
  constraint business_invitations_annahme_vollstaendig check (
    (accepted_at is null) = (accepted_by is null)
  ),
  constraint business_invitations_nicht_beides check (
    accepted_at is null or revoked_at is null
  )
);

comment on table public.business_invitations is
  'Einladungen in einen Firmenkunden. Token als SHA-256, nie im Klartext; der Klartext wird einmalig beim Anlegen zurueckgegeben.';

create unique index if not exists business_invitations_offen_eindeutig
  on public.business_invitations (business_id, email)
  where accepted_at is null and revoked_at is null;

create index if not exists business_invitations_token_idx
  on public.business_invitations (token_hash);

create table if not exists public.business_budgets (
  id            uuid primary key default gen_random_uuid(),
  business_id   uuid not null references public.businesses(id) on delete cascade,
  profile_id    uuid references public.profiles(id) on delete cascade,
  monatslimit_brutto numeric(10,2) check (monatslimit_brutto is null or monatslimit_brutto >= 0),
  tageslimit_brutto  numeric(10,2) check (tageslimit_brutto  is null or tageslimit_brutto  >= 0),
  zuschuss_prozent numeric(5,2) not null default 100
                   check (zuschuss_prozent >= 0 and zuschuss_prozent <= 100),
  gueltig_von   date not null default current_date,
  gueltig_bis   date,
  created_at    timestamptz not null default now(),
  created_by    uuid references public.profiles(id),
  updated_at    timestamptz not null default now(),
  updated_by    uuid references public.profiles(id),
  deleted_at    timestamptz,
  constraint business_budgets_zeitraum check (
    gueltig_bis is null or gueltig_bis >= gueltig_von
  )
);

comment on table public.business_budgets is
  'Obergrenze fuer den Arbeitgeberanteil je Mitglied und Monat/Tag. Kein Guthaben: Es wird nichts aufgeladen, nur begrenzt. Ohne Zeile traegt der Arbeitgeber 100 %.';

comment on column public.business_budgets.profile_id is
  'NULL = Standardbudget fuer alle Mitglieder. Eine Zeile mit Profil schlaegt die Standardzeile.';

create unique index if not exists business_budgets_eindeutig
  on public.business_budgets (business_id, (coalesce(profile_id, '00000000-0000-0000-0000-000000000000'::uuid)), gueltig_von)
  where deleted_at is null;

drop trigger if exists business_budgets_updated_at on public.business_budgets;
create trigger business_budgets_updated_at
  before update on public.business_budgets
  for each row execute function app.set_updated_at();

create or replace function app.business_budget_pruefen()
returns trigger
language plpgsql
set search_path = public, app
as $fn$
begin
  if new.profile_id is null then
    return new;
  end if;
  if not exists (
    select 1 from public.business_members m
    where m.business_id = new.business_id
      and m.profile_id  = new.profile_id
      and m.status in ('invited', 'active')
  ) then
    raise exception
      'Budget kann nicht gesetzt werden: % ist in Firma % kein Mitglied.',
      new.profile_id, new.business_id
      using errcode = '23514';
  end if;
  return new;
end;
$fn$;

drop trigger if exists business_budgets_mitglied on public.business_budgets;
create trigger business_budgets_mitglied
  before insert or update of business_id, profile_id on public.business_budgets
  for each row execute function app.business_budget_pruefen();

alter table public.business_invitations enable row level security;
alter table public.business_budgets     enable row level security;

drop policy if exists business_invitations_read on public.business_invitations;
create policy business_invitations_read on public.business_invitations
  for select to authenticated
  using (
    app.is_business_member(business_id, 'admin')
    or public.is_admin()
    or public.auth_has_permission('businesses.manage')
  );

drop policy if exists business_invitations_write on public.business_invitations;
create policy business_invitations_write on public.business_invitations
  for all to authenticated
  using      (public.is_admin())
  with check (public.is_admin());

drop policy if exists business_budgets_read on public.business_budgets;
create policy business_budgets_read on public.business_budgets
  for select to authenticated
  using (
    profile_id = (select auth.uid())
    or app.is_business_member(business_id, 'admin')
    or public.is_admin()
    or public.auth_has_permission('businesses.manage')
  );

drop policy if exists business_budgets_write on public.business_budgets;
create policy business_budgets_write on public.business_budgets
  for all to authenticated
  using (
    app.is_business_member(business_id, 'admin')
    or public.is_admin()
    or public.auth_has_permission('businesses.manage')
  )
  with check (
    app.is_business_member(business_id, 'admin')
    or public.is_admin()
    or public.auth_has_permission('businesses.manage')
  );

grant select on public.business_invitations to authenticated;
grant select, insert, update on public.business_budgets to authenticated;
