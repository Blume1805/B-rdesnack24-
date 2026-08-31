do $$
begin
  if not exists (
    select 1 from pg_type t join pg_namespace n on n.oid = t.typnamespace
    where n.nspname = 'app' and t.typname = 'payment_kind'
  ) then
    create type app.payment_kind as enum
      ('purchase', 'wallet_topup', 'invoice', 'refund');
  end if;

  if not exists (
    select 1 from pg_type t join pg_namespace n on n.oid = t.typnamespace
    where n.nspname = 'app' and t.typname = 'payment_status'
  ) then
    create type app.payment_status as enum
      ('pending', 'authorized', 'captured', 'failed', 'refunded', 'cancelled');
  end if;
end;
$$;

comment on type app.payment_kind is
  'Was bezahlt wird. purchase = Kauf, wallet_topup = Guthabenaufladung, invoice = Rechnung (B2B), refund = Rückerstattung einer früheren Zahlung.';

comment on type app.payment_status is
  'Zustand der Zahlung. Der Weg führt nur vorwärts; app.payments_nur_vorwaerts() erzwingt das.';

create table if not exists public.payments (
  id                  uuid primary key default gen_random_uuid(),
  kind                app.payment_kind   not null,
  status              app.payment_status not null default 'pending',
  provider            text not null,
  provider_ref        text,
  idempotency_key     text not null,
  amount_gross        numeric(12,2) not null,
  currency            text not null default 'EUR',
  purchase_id         uuid references public.purchases(id),
  payer_profile_id    uuid references public.profiles(id),
  payer_business_id   uuid,
  refunds_payment_id  uuid references public.payments(id),
  failed_reason       text,
  created_at          timestamptz not null default now(),
  created_by          uuid references public.profiles(id),
  updated_at          timestamptz not null default now(),
  updated_by          uuid references public.profiles(id),

  constraint payments_idempotency_key_unique unique (idempotency_key),
  constraint payments_betrag_positiv check (amount_gross > 0),
  constraint payments_waehrung_form check (currency ~ '^[A-Z]{3}$'),
  constraint payments_hoechstens_ein_zahler
    check (num_nonnulls(payer_profile_id, payer_business_id) <= 1),
  constraint payments_rueckerstattung_zeigt_auf_original
    check ((kind = 'refund') = (refunds_payment_id is not null)),
  constraint payments_fehlergrund_nur_bei_fehler
    check (failed_reason is null or status in ('failed', 'cancelled')),
  constraint payments_firmenzahler_erst_ab_schritt3
    check (payer_business_id is null)
);

comment on table public.payments is
  'Zahlungsvorgang. Anbieterneutral: `provider` ist Text, kein Aufzählungstyp. Nur vorwärts — nie gelöscht, Betrag nie geändert, Rückerstattung als eigene Zeile. Enthält KEINE Kartendaten, nur die Referenz beim Anbieter.';

comment on column public.payments.idempotency_key is
  'Doppelbuchungsschutz. Ein zweimal zugestelltes Anbieter-Ereignis trägt denselben Schlüssel und kann keine zweite Zahlung erzeugen.';

comment on column public.payments.provider_ref is
  'Referenz beim Zahlungsdienstleister. NIEMALS Kartennummer, Prüfziffer oder Ablaufdatum — auch nicht verschlüsselt, auch nicht zum Testen.';

comment on column public.payments.payer_business_id is
  'Zahlendes Unternehmen. Ohne Fremdschlüssel und per Prüfregel leer gehalten, bis Schritt 3 die Tabelle `businesses` anlegt.';

create unique index if not exists idx_payments_provider_ref
  on public.payments (provider, provider_ref)
  where provider_ref is not null;

create index if not exists idx_payments_payer_profile
  on public.payments (payer_profile_id) where payer_profile_id is not null;
create index if not exists idx_payments_purchase
  on public.payments (purchase_id) where purchase_id is not null;
create index if not exists idx_payments_status_zeit
  on public.payments (status, created_at desc);

create or replace function app.payments_nur_vorwaerts()
returns trigger
language plpgsql
set search_path = public, app
as $fn$
begin
  if tg_op = 'DELETE' then
    raise exception
      'Zahlungen werden nicht gelöscht. Ein Storno ist eine neue Zeile mit kind = refund, die auf die ursprüngliche Zahlung zeigt.';
  end if;

  if new.kind              is distinct from old.kind
  or new.amount_gross      is distinct from old.amount_gross
  or new.currency          is distinct from old.currency
  or new.provider          is distinct from old.provider
  or new.idempotency_key   is distinct from old.idempotency_key
  or new.purchase_id       is distinct from old.purchase_id
  or new.payer_profile_id  is distinct from old.payer_profile_id
  or new.payer_business_id is distinct from old.payer_business_id
  or new.refunds_payment_id is distinct from old.refunds_payment_id
  or new.created_at        is distinct from old.created_at
  then
    raise exception
      'Unveränderliches Feld einer Zahlung geändert. Betrag, Art, Anbieter, Idempotenzschlüssel, Zuordnung und Anlagezeitpunkt stehen fest, sobald die Zeile existiert.';
  end if;

  if old.provider_ref is not null
     and new.provider_ref is distinct from old.provider_ref then
    raise exception
      'Anbieterreferenz einer Zahlung steht fest, sobald sie einmal gesetzt ist.';
  end if;

  if new.status is distinct from old.status then
    if not (
         (old.status = 'pending'
            and new.status in ('authorized', 'captured', 'failed', 'cancelled'))
      or (old.status = 'authorized'
            and new.status in ('captured', 'failed', 'cancelled'))
      or (old.status = 'captured'
            and new.status = 'refunded')
    ) then
      raise exception
        'Unzulässiger Zustandswechsel einer Zahlung: % -> %. Erlaubt sind nur Wege vorwärts; failed, cancelled und refunded sind Endzustände.',
        old.status, new.status;
    end if;
  end if;

  return new;
end;
$fn$;

comment on function app.payments_nur_vorwaerts() is
  'Erzwingt die Nur-vorwärts-Regel für Zahlungen: kein Löschen, keine Änderung an Betrag/Art/Zuordnung, nur erlaubte Zustandswechsel.';

alter table public.payments enable row level security;

drop policy if exists payments_read on public.payments;
create policy payments_read on public.payments
  for select to authenticated
  using (
    payer_profile_id = (select auth.uid())
    or public.is_admin()
    or public.auth_has_permission('payments.view')
  );

drop policy if exists payments_write on public.payments;
create policy payments_write on public.payments
  for all to authenticated
  using      (public.is_admin() or public.auth_has_permission('payments.manage'))
  with check (public.is_admin() or public.auth_has_permission('payments.manage'));

revoke truncate on public.payments from anon, authenticated;
revoke all on public.payments from anon;

grant select on public.payments to authenticated;

drop trigger if exists trg_audit on public.payments;
create trigger trg_audit
  after insert or update or delete on public.payments
  for each row execute function app.audit_row();

drop trigger if exists trg_payments_nur_vorwaerts on public.payments;
create trigger trg_payments_nur_vorwaerts
  before update or delete on public.payments
  for each row execute function app.payments_nur_vorwaerts();

drop trigger if exists trg_payments_updated_at on public.payments;
create trigger trg_payments_updated_at
  before update on public.payments
  for each row execute function app.set_updated_at();

insert into public.permissions (key, area, description)
values ('payments.view',   'finance', 'Zahlungen aller Kunden einsehen'),
       ('payments.manage', 'finance', 'Zahlungen anlegen und ihren Zustand ändern')
on conflict (key) do nothing;

insert into public.role_permissions (role_key, permission_key)
values ('system_admin', 'payments.view'),
       ('system_admin', 'payments.manage'),
       ('shareholder',  'payments.view'),
       ('shareholder',  'payments.manage')
on conflict do nothing;
