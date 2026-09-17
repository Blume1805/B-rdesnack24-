-- ============================================================================
-- 0068 — Die drei letzten produktiv-only Objekte nachgezogen (Befund A-5)
-- ----------------------------------------------------------------------------
-- Bis zum 17.09.2026 existierten drei Objekte ausschließlich im Produktiv-
-- projekt, weil sie seinerzeit direkt im Supabase-Dashboard angelegt wurden:
--
--   * public.partner_signatures        — genutzt von vier Edge Functions
--   * app.snapshot_slot_history()      — Trigger-Funktion für die Fachhistorie
--   * app.snapshot_slot_insert()       — dito
--
-- Dadurch ließ sich die Datenbank nicht aus dem Repository wiederherstellen;
-- `0032` und `0045` mussten die betroffenen Stellen überspringen und eine
-- Warnung ausgeben. Der Gesellschafter hat die tatsächliche Struktur am
-- 17.09.2026 über Runbook D exportiert. **Diese Datei ist nicht geraten,
-- sondern abgeschrieben** — Spalten, Vorgabewerte, Fremdschlüssel, Index,
-- Policy und beide Funktionsrümpfe stammen aus dem Export des Produktiv-
-- projekts, nicht aus einer Rekonstruktion.
--
-- Wiederholbar: Gegen das Produktivprojekt, das alle drei Objekte bereits hat,
-- ändert diese Datei nichts.
-- ============================================================================

-- ----------------------------------------------------------------------------
-- 1) public.partner_signatures
-- ----------------------------------------------------------------------------
create table if not exists public.partner_signatures (
  id                     uuid primary key default gen_random_uuid(),
  full_name              text        not null,
  role_label             text        not null default 'Gesellschafter',
  docusign_user_id       text,
  docusign_account_id    text,
  docusign_signature_uri text,
  image_url              text,
  sort_order             integer     not null default 0,
  created_at             timestamptz not null default now(),
  -- ab hier die Spalten, die `0032` nachträgt, sobald die Tabelle existiert
  captured_via           text,
  docusign_envelope_id   text,
  captured_at            timestamptz,
  profile_id             uuid references public.profiles(id)
);

comment on table public.partner_signatures is
  'Unterschriften der Gesellschafter. Befüllt durch die Edge Function '
  'docusign-fetch-signature oder manuell per Upload. Struktur am 17.09.2026 '
  'aus dem Produktivprojekt exportiert (docs/OPERATIONS.md, Runbook D).';

-- Falls die Tabelle in einer Umgebung bereits in der alten, kürzeren Fassung
-- steht: fehlende Spalten ergänzen, statt sie unbemerkt zu lassen.
alter table public.partner_signatures
  add column if not exists captured_via         text,
  add column if not exists docusign_envelope_id text,
  add column if not exists captured_at          timestamptz,
  add column if not exists profile_id           uuid references public.profiles(id);

create index if not exists idx_ps_profile on public.partner_signatures(profile_id);

-- RLS: im Produktivprojekt existiert genau eine Policy, `ps_read` (SELECT).
-- Schreibzugriffe laufen ausschließlich über service_role bzw. die Edge
-- Functions und brauchen deshalb keine Policy — ohne Policy gibt es für
-- Clientrollen kein Schreibrecht, und genau das ist gewollt.
alter table public.partner_signatures enable row level security;

drop policy if exists ps_read on public.partner_signatures;
create policy ps_read on public.partner_signatures for select
  using (
    exists (
      select 1
      from public.profiles p
      where p.status = 'active'
        and p.deleted_at is null
        and p.id = (select auth.uid())
        and p.role = any (array[
          'system_admin'::app.role_key,
          'shareholder'::app.role_key,
          'employee'::app.role_key
        ])
    )
  );

-- ----------------------------------------------------------------------------
-- 2) Die beiden Trigger-Funktionen für die Fachhistorie
-- ----------------------------------------------------------------------------
-- Wortlaut aus dem Produktivexport. `set search_path` ist bereits gesetzt —
-- die Härtung, die `0045` nachträglich vornehmen wollte, ist damit von
-- vornherein enthalten.

create or replace function app.snapshot_slot_insert()
returns trigger
language plpgsql
set search_path to 'public', 'app'
as $function$
begin
  insert into public.machine_slots_history
    (machine_id, slot_code, product_id, unit_price_net, valid_from, reason)
  values (new.machine_id, new.slot_code, new.product_id, new.unit_price_net,
          now(), 'initial');
  return new;
end $function$;

create or replace function app.snapshot_slot_history()
returns trigger
language plpgsql
set search_path to 'public', 'app'
as $function$
begin
  -- alte Zeile schließen
  update public.machine_slots_history
     set valid_to = now()
   where machine_id = old.machine_id
     and slot_code  = old.slot_code
     and valid_to is null;
  -- neue Zeile öffnen (falls Update)
  insert into public.machine_slots_history
    (machine_id, slot_code, product_id, unit_price_net, valid_from, reason)
  values
    (new.machine_id, new.slot_code, new.product_id, new.unit_price_net,
     now(), 'update');
  return new;
end $function$;

-- ----------------------------------------------------------------------------
-- 3) Ausführungsrechte der beiden neuen Funktionen
-- ----------------------------------------------------------------------------
-- `0066` entzieht anon und PUBLIC das Ausführungsrecht auf alle zu diesem
-- Zeitpunkt vorhandenen Funktionen. Alles, was danach entsteht, trägt das
-- eingebaute PUBLIC-Recht erneut (Befund A-10) — der Entzug muss deshalb in
-- jeder neuen Migration mitgeschrieben werden. Ohne diese vier Zeilen schlägt
-- supabase/tests/execute_privileges_test.sql fehl, und zwar zu Recht.
revoke execute on function app.snapshot_slot_insert()  from public, anon;
revoke execute on function app.snapshot_slot_history() from public, anon;
grant  execute on function app.snapshot_slot_insert()  to authenticated, service_role;
grant  execute on function app.snapshot_slot_history() to authenticated, service_role;
