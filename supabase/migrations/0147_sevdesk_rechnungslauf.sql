-- ============================================================================
-- 0147 — Rechnungsauftrag an sevDesk: anfordern, prüfen, freigeben
-- ----------------------------------------------------------------------------
-- Vorgabe des Auftraggebers vom 26.08.2026: „Die richtige Rechnung für das
-- Unternehmen soll mit sevDesk geschrieben werden, um die Anforderungen einer
-- ordnungsgemässen Rechnung (E-Rechnung) zu erfüllen. Es bedarf also ein
-- Signal aus der App heraus an sevDesk … Diese Rechnung wird aber erst nach
-- Überprüfung durch einen Gesellschafter freigegeben und versendet."
--
-- Die Aufstellung aus 0142/0144 bleibt, was sie ist: ein Nachweis. Sie ist
-- keine Rechnung und sagt das auch selbst auf dem Ausdruck.
--
-- ----------------------------------------------------------------------------
-- WARUM DIE RECHNUNG IN SEVDESK ENTSTEHT
--
-- Eine ordnungsgemässe Rechnung nach § 14 UStG braucht eine lückenlose
-- Nummernfolge, die richtige Steuerausweisung, Aufbewahrung nach § 147 AO
-- und — für die E-Rechnung — ein strukturiertes Format (XRechnung/ZUGFeRD).
-- Das leistet sevDesk bereits. Es hier ein zweites Mal zu bauen hiesse,
-- dieselbe Rechnung an zwei Orten zu führen; die Hausregel „ein Geldfluss,
-- eine Buchung" verbietet das.
--
-- Diese Tabelle führt deshalb nicht die Rechnung, sondern den AUFTRAG dazu:
-- was abgerechnet werden soll, worauf es sich stützt, und wer es freigegeben
-- hat.
--
-- ----------------------------------------------------------------------------
-- ENTSCHEIDUNG 1 — Die Grundlage wird eingefroren
--
-- `app.business_split` rechnet bei jedem Abruf neu, und das ist richtig, weil
-- Käufe asynchron eintreffen. Eine Rechnung darf sich aber nicht mehr
-- bewegen. `grundlage` hält deshalb den vollständigen Stand fest, auf den sie
-- sich stützt — Steueraufteilung, Einzelnachweis und Empfängerdaten. Ändert
-- sich später irgendetwas, bleibt nachvollziehbar, worauf die Rechnung beruht.
--
-- ENTSCHEIDUNG 2 — Ein Monat, eine Rechnung
--
-- Eindeutiger Index auf (Firma, Jahr, Monat). Dieselbe Hausregel wie bei den
-- Umsatzsteuer-Voranmeldungen: Derselbe Geldfluss darf nur einmal abgerechnet
-- werden.
--
-- ENTSCHEIDUNG 3 — Nur abgeschlossene Monate
--
-- Ein laufender Monat lässt sich nicht abrechnen: Jeder weitere Kauf
-- verschiebt die Aufteilung. `business_invoice_request` bricht deshalb ab und
-- nennt das Datum, ab dem es geht.
--
-- ENTSCHEIDUNG 4 — Freigabe ist ein eigener Akt, und nur der Gesellschafter
--
-- Anfordern darf, wer Firmenkunden verwaltet. Freigeben darf nur ein
-- Gesellschafter (oder der Systemadministrator) — und erst, wenn die Rechnung
-- in sevDesk tatsächlich entstanden ist. Eine Freigabe für etwas, das dort
-- noch nicht existiert, wäre eine Freigabe ins Leere.
--
-- Der Versand selbst löst sevDesk aus, nicht wir: Dort entsteht auch das
-- E-Rechnungsformat.
-- ============================================================================

alter table public.businesses
  add column if not exists sevdesk_contact_id text;

comment on column public.businesses.sevdesk_contact_id is
  'Kennung des Kontakts in sevDesk. Ohne sie kann dort keine Rechnung '
  'adressiert werden; das Anlegen bricht vorher ab, statt eine Dublette zu '
  'erzeugen.';

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
  'Auftrag an sevDesk, für einen Firmenkunden und Monat eine Rechnung zu '
  'erstellen. Die Rechnung selbst entsteht in sevDesk; hier steht nur der '
  'Auftrag, die eingefrorene Grundlage und die Freigabe.';

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

-- Der Firmenkunde darf sehen, was ihm berechnet wird — aber nichts ändern.
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
