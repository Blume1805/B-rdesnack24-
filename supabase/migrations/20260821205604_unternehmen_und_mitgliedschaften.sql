do $$
begin
  if not exists (
    select 1 from pg_type t join pg_namespace n on n.oid = t.typnamespace
    where n.nspname = 'app' and t.typname = 'business_role'
  ) then
    create type app.business_role as enum ('admin', 'member');
  end if;

  if not exists (
    select 1 from pg_type t join pg_namespace n on n.oid = t.typnamespace
    where n.nspname = 'app' and t.typname = 'business_member_status'
  ) then
    create type app.business_member_status as enum
      ('invited', 'active', 'suspended', 'removed');
  end if;
end;
$$;

comment on type app.business_role is
  'Rolle innerhalb eines Firmenkunden. Bewusst nicht `employee` — das ist in profiles.role ein Beschäftigter von Bördesnack24.';

create table if not exists public.businesses (
  id              uuid primary key default gen_random_uuid(),
  name            text not null,
  legal_form      text,
  billing_street  text,
  billing_zip     text,
  billing_city    text,
  billing_country text not null default 'DE',
  billing_email   text,
  tax_number      text,
  vat_id          text,
  status          app.entity_status not null default 'active',
  created_at      timestamptz not null default now(),
  created_by      uuid references public.profiles(id),
  updated_at      timestamptz not null default now(),
  updated_by      uuid references public.profiles(id),
  archived_at     timestamptz,
  deleted_at      timestamptz,
  constraint businesses_rechnungsmail_form
    check (billing_email is null or billing_email like '%_@_%')
);

comment on table public.businesses is
  'Firmenkunde als Organisation, an der Mitgliedschaften hängen. Nicht zu verwechseln mit customers.customer_type = business — das ist ein Einzelkonto mit Firmenrechnungsdaten.';

create table if not exists public.business_members (
  business_id   uuid not null references public.businesses(id) on delete cascade,
  profile_id    uuid not null references public.profiles(id)   on delete cascade,
  role          app.business_role          not null default 'member',
  status        app.business_member_status not null default 'invited',
  invited_by    uuid references public.profiles(id),
  invited_at    timestamptz not null default now(),
  activated_at  timestamptz,
  updated_at    timestamptz not null default now(),
  updated_by    uuid references public.profiles(id),
  primary key (business_id, profile_id),
  constraint business_members_aktiv_hat_zeitpunkt
    check ((status = 'active') = (activated_at is not null))
);

comment on table public.business_members is
  'Mitgliedschaft eines Profils in einem Firmenkunden. Grundlage jeder Mandantentrennung — app.is_business_member() liest ausschliesslich hier.';

create index if not exists idx_business_members_profil
  on public.business_members (profile_id) where status = 'active';

create table if not exists public.business_locations (
  business_id  uuid not null references public.businesses(id) on delete cascade,
  location_id  uuid not null references public.locations(id)  on delete cascade,
  created_at   timestamptz not null default now(),
  created_by   uuid references public.profiles(id),
  primary key (business_id, location_id)
);

comment on table public.business_locations is
  'Welche Standorte die Mitglieder eines Firmenkunden nutzen dürfen. Vertragsgegenstand — wird von Bördesnack24 gepflegt, nicht vom Firmenkunden.';

create or replace function app.is_business_member(
  p_business uuid,
  p_role     app.business_role default null
)
returns boolean
language sql
stable
security definer
set search_path = public, app
as $fn$
  select exists (
    select 1
    from public.business_members m
    join public.profiles p on p.id = m.profile_id
    where m.business_id = p_business
      and m.profile_id  = (select auth.uid())
      and m.status      = 'active'
      and p.status      = 'active'
      and p.deleted_at is null
      and (p_role is null or m.role = p_role)
  );
$fn$;

comment on function app.is_business_member(uuid, app.business_role) is
  'Ist der angemeldete Mensch aktives Mitglied dieses Firmenkunden (optional in einer bestimmten Rolle)? Einzige Quelle jeder Mandantentrennung.';

grant execute on function app.is_business_member(uuid, app.business_role)
  to authenticated;

alter table public.businesses         enable row level security;
alter table public.business_members   enable row level security;
alter table public.business_locations enable row level security;

drop policy if exists businesses_read on public.businesses;
create policy businesses_read on public.businesses
  for select to authenticated
  using (
    deleted_at is null
    and (
      app.is_business_member(id)
      or public.is_admin()
      or public.auth_has_permission('businesses.manage')
    )
  );

drop policy if exists businesses_write on public.businesses;
create policy businesses_write on public.businesses
  for all to authenticated
  using (
    app.is_business_member(id, 'admin')
    or public.is_admin()
    or public.auth_has_permission('businesses.manage')
  )
  with check (
    app.is_business_member(id, 'admin')
    or public.is_admin()
    or public.auth_has_permission('businesses.manage')
  );

drop policy if exists business_members_read on public.business_members;
create policy business_members_read on public.business_members
  for select to authenticated
  using (
    profile_id = (select auth.uid())
    or app.is_business_member(business_id, 'admin')
    or public.is_admin()
    or public.auth_has_permission('businesses.manage')
  );

drop policy if exists business_members_write on public.business_members;
create policy business_members_write on public.business_members
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

drop policy if exists business_locations_read on public.business_locations;
create policy business_locations_read on public.business_locations
  for select to authenticated
  using (
    app.is_business_member(business_id)
    or public.is_admin()
    or public.auth_has_permission('businesses.manage')
  );

drop policy if exists business_locations_write on public.business_locations;
create policy business_locations_write on public.business_locations
  for all to authenticated
  using      (public.is_admin() or public.auth_has_permission('businesses.manage'))
  with check (public.is_admin() or public.auth_has_permission('businesses.manage'));

grant select on public.businesses, public.business_members, public.business_locations
  to authenticated;
grant insert, update, delete on public.businesses, public.business_members
  to authenticated;
grant insert, update, delete on public.business_locations to authenticated;
revoke all on public.businesses         from anon;
revoke all on public.business_members   from anon;
revoke all on public.business_locations from anon;

drop trigger if exists trg_audit on public.businesses;
create trigger trg_audit after insert or update or delete on public.businesses
  for each row execute function app.audit_row();
drop trigger if exists trg_businesses_updated_at on public.businesses;
create trigger trg_businesses_updated_at before update on public.businesses
  for each row execute function app.set_updated_at();

drop trigger if exists trg_audit on public.business_members;
create trigger trg_audit after insert or update or delete on public.business_members
  for each row execute function app.audit_row();
drop trigger if exists trg_business_members_updated_at on public.business_members;
create trigger trg_business_members_updated_at before update on public.business_members
  for each row execute function app.set_updated_at();

drop trigger if exists trg_audit on public.business_locations;
create trigger trg_audit after insert or update or delete on public.business_locations
  for each row execute function app.audit_row();

alter table public.payments
  drop constraint if exists payments_firmenzahler_erst_ab_schritt3;

alter table public.payments
  drop constraint if exists payments_payer_business_id_fkey;
alter table public.payments
  add constraint payments_payer_business_id_fkey
  foreign key (payer_business_id) references public.businesses(id);

create index if not exists idx_payments_payer_business
  on public.payments (payer_business_id) where payer_business_id is not null;

comment on column public.payments.payer_business_id is
  'Zahlendes Unternehmen. Seit Migration 0117 mit Fremdschlüssel auf businesses.';

drop policy if exists payments_read on public.payments;
create policy payments_read on public.payments
  for select to authenticated
  using (
    payer_profile_id = (select auth.uid())
    or (payer_business_id is not null
        and app.is_business_member(payer_business_id, 'admin'))
    or public.is_admin()
    or public.auth_has_permission('payments.view')
  );

insert into public.permissions (key, area, description)
values ('businesses.manage', 'crm', 'Firmenkunden, Mitglieder und Standortfreigaben pflegen')
on conflict (key) do nothing;

insert into public.role_permissions (role_key, permission_key)
values ('system_admin', 'businesses.manage'),
       ('shareholder',  'businesses.manage')
on conflict do nothing;
