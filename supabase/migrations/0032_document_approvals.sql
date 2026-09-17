-- 0032 — Freigabe-Workflow (2-of-2 Gesellschafter, DocuSign-Stempel,
--        Snapshot, E-Mail-Notification)
-- Vollständige Definition siehe Backend-Migration; hier kompakt gespiegelt.

do $$ begin
  create type app.document_kind as enum (
    'inventory_fifo','haccp_temperature','haccp_cleaning','haccp_disposal',
    'haccp_filling','haccp_maintenance','haccp_cash','haccp_training',
    'finance_period');
exception when duplicate_object then null; end $$;

do $$ begin
  create type app.approval_status as enum
    ('pending','approved','rejected','cancelled');
exception when duplicate_object then null; end $$;

do $$ begin
  create type app.decision as enum ('pending','approved','rejected');
exception when duplicate_object then null; end $$;

create table if not exists public.document_approvals (
  id             uuid primary key default gen_random_uuid(),
  document_kind  app.document_kind not null,
  period_from    date not null,
  period_to      date not null,
  title          text not null,
  requested_by   uuid references public.profiles(id),
  requested_at   timestamptz not null default now(),
  status         app.approval_status not null default 'pending',
  snapshot       jsonb not null,
  draft_pdf_path text,
  final_pdf_path text,
  finalized_at   timestamptz,
  cancelled_at   timestamptz,
  notes          text
);
create index if not exists idx_da_status on public.document_approvals(status, requested_at desc);

create table if not exists public.document_approval_decisions (
  id            uuid primary key default gen_random_uuid(),
  approval_id   uuid not null references public.document_approvals(id) on delete cascade,
  approver_id   uuid not null references public.profiles(id),
  decision      app.decision not null default 'pending',
  decided_at    timestamptz,
  comment       text,
  signature_url text,
  created_at    timestamptz not null default now(),
  unique (approval_id, approver_id)
);

-- public.partner_signatures wird von KEINER Migration in diesem Repository
-- angelegt (0033 vermerkt dazu „Vollständige Definition siehe
-- Backend-Migration"). Beim Aufbau aus einer leeren Datenbank brach die Kette
-- deshalb hier ab — docs/ARCHITECTURE.md, Befund A-5.
--
-- Die Tabelle wird hier bewusst NICHT nachgebaut: Ihre echte Struktur steht
-- nur im Produktivprojekt, und eine geratene Fassung würde stillschweigend
-- davon abweichen — das ist gefährlicher als ihr Fehlen. Stattdessen wird die
-- Erweiterung übersprungen und der Grund laut ausgegeben, damit ein
-- unvollständiger Aufbau nicht wie ein vollständiger aussieht.
--
-- SEIT DEM 17.09.2026 ERLEDIGT: Der Gesellschafter hat die Struktur über
-- Runbook D exportiert; `0068_partner_signatures_and_slot_snapshots.sql` legt
-- die Tabelle vollständig an — einschließlich der vier Spalten, die hier
-- nachgetragen würden. Beim Aufbau aus einer leeren Datenbank erscheint die
-- Warnung unten deshalb weiterhin, sie ist aber gegenstandslos: Was hier
-- übersprungen wird, entsteht in 0068 in derselben Fassung.
-- Diese Anweisung bleibt stehen, weil sie in Umgebungen greift, in denen die
-- Tabelle in ihrer alten, kürzeren Fassung bereits existiert.
do $$
begin
  if to_regclass('public.partner_signatures') is null then
    raise warning 'A-5 (gegenstandslos seit 0068): public.partner_signatures existiert hier noch nicht; sie wird in 0068 vollstaendig angelegt, inklusive captured_via, docusign_envelope_id, captured_at und profile_id. Kein Handlungsbedarf.';
  else
    alter table public.partner_signatures
      add column if not exists captured_via         text,
      add column if not exists docusign_envelope_id text,
      add column if not exists captured_at          timestamptz,
      add column if not exists profile_id           uuid references public.profiles(id);
    create index if not exists idx_ps_profile on public.partner_signatures(profile_id);
  end if;
end $$;

alter table public.document_approvals enable row level security;
alter table public.document_approval_decisions enable row level security;

-- Storage-Bucket signed-documents + RLS: siehe Backend-Migration.
-- RPCs request_document_approval / decide_document_approval /
-- list_document_approvals: siehe Backend-Migration.
