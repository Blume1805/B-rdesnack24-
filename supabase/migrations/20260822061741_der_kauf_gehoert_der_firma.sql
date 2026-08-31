alter table public.purchases
  add column if not exists business_id uuid references public.businesses(id);

comment on column public.purchases.business_id is
  'Firma, auf deren Rechnung der Kauf geht. NULL = Privatkauf. `customer_id` bleibt daneben bestehen und sagt, wer am Automaten stand.';

create index if not exists idx_purchases_business
  on public.purchases (business_id, purchased_at desc)
  where business_id is not null;

drop policy if exists purch_read on public.purchases;
create policy purch_read on public.purchases
  for select to authenticated
  using (
    customer_id = (select auth.uid())
    or (business_id is not null
        and app.is_business_member(business_id, 'admin'))
    or public.is_admin()
    or public.auth_has_permission('customers.manage')
  );

create or replace function app.purchase_business_pruefen()
returns trigger
language plpgsql
set search_path = public, app
as $fn$
begin
  if new.business_id is null then
    return new;
  end if;

  if tg_op = 'UPDATE' and new.business_id is not distinct from old.business_id then
    return new;
  end if;

  if not exists (
    select 1 from public.business_members m
    where m.business_id = new.business_id
      and m.profile_id  = new.customer_id
      and m.status      = 'active'
  ) then
    raise exception
      'Kauf % kann der Firma % nicht zugeordnet werden: % ist dort kein aktives Mitglied.',
      new.id, new.business_id, new.customer_id
      using errcode = 'check_violation';
  end if;

  return new;
end;
$fn$;

comment on function app.purchase_business_pruefen() is
  'Lässt eine Firmenzuordnung nur zu, wenn der Käufer dort aktives Mitglied ist. Greift auch bei service_role, wo keine Zugriffsregel greift.';

drop trigger if exists trg_purchases_business on public.purchases;
create trigger trg_purchases_business
  before insert or update on public.purchases
  for each row execute function app.purchase_business_pruefen();
