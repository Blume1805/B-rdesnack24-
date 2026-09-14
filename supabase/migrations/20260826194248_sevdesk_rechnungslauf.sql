-- 0147 — Rechnungsauftrag an sevDesk: anfordern, pruefen, freigeben.
-- Vollstaendige Begruendung in supabase/migrations/0147_sevdesk_rechnungslauf.sql

alter table public.businesses
  add column if not exists sevdesk_contact_id text;

comment on column public.businesses.sevdesk_contact_id is
  'Kennung des Kontakts in sevDesk. Ohne sie kann dort keine Rechnung adressiert werden.';

do $$
begin
  if not exists (select 1 from pg_type t join pg_namespace n on n.oid=t.typnamespace
                 where n.nspname='app' and t.typname='rechnungslauf_status') then
    create type app.rechnungslauf_status as enum
      ('angefordert', 'in_sevdesk', 'freigegeben', 'fehler', 'storniert');
  end if;
end $$;

create table if not exists public.business_invoice_runs (
  id            uuid primary key default gen_random_uuid(),
  business_id   uuid not null references public.businesses(id) on delete restrict,
  jahr          int  not null check (jahr between 2020 and 2100),
  monat         int  not null check (monat between 1 and 12),

  status        app.rechnungslauf_status not null default 'angefordert',

  -- Eingefrorene Grundlage. Die Aufteilung wird sonst bei jedem Abruf neu
  -- gerechnet; eine Rechnung darf sich nicht mehr bewegen.
  grundlage     jsonb not null,
  brutto        numeric(12,2) not null check (brutto >= 0),

  sevdesk_invoice_id     text,
  sevdesk_invoice_number text,
  sevdesk_antwort        jsonb,

  angefordert_von uuid references public.profiles(id),
  angefordert_am  timestamptz not null default now(),
  freigegeben_von uuid references public.profiles(id),
  freigegeben_am  timestamptz,
  fehlertext      text,

  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now(),
  updated_by    uuid references public.profiles(id),

  constraint rechnungslauf_freigabe_vollstaendig check (
    (freigegeben_von is null) = (freigegeben_am is null)
  ),
  constraint rechnungslauf_freigabe_nur_aus_sevdesk check (
    status <> 'freigegeben' or sevdesk_invoice_id is not null
  ),
  constraint rechnungslauf_fehler_hat_grund check (
    status <> 'fehler' or fehlertext is not null
  )
);

comment on table public.business_invoice_runs is
  'Auftrag an sevDesk, fuer einen Firmenkunden und Monat eine Rechnung zu erstellen. Die Rechnung selbst entsteht in sevDesk; hier steht nur der Auftrag, die eingefrorene Grundlage und die Freigabe.';

-- Ein Monat, eine Rechnung. Hausregel „ein Geldfluss, eine Buchung".
create unique index if not exists rechnungslauf_je_monat
  on public.business_invoice_runs (business_id, jahr, monat)
  where status <> 'storniert';

create index if not exists rechnungslauf_status_idx
  on public.business_invoice_runs (status) where status in ('angefordert','fehler');

drop trigger if exists rechnungslauf_updated_at on public.business_invoice_runs;
create trigger rechnungslauf_updated_at
  before update on public.business_invoice_runs
  for each row execute function app.set_updated_at();

alter table public.business_invoice_runs enable row level security;

drop policy if exists rechnungslauf_read on public.business_invoice_runs;
create policy rechnungslauf_read on public.business_invoice_runs
  for select to authenticated
  using (
    app.is_business_member(business_id, 'admin')
    or public.is_admin()
    or public.auth_has_permission('businesses.manage')
  );

drop policy if exists rechnungslauf_write on public.business_invoice_runs;
create policy rechnungslauf_write on public.business_invoice_runs
  for all to authenticated
  using      (public.is_admin())
  with check (public.is_admin());

grant select on public.business_invoice_runs to authenticated;
