-- ============================================================================
-- 0027b · Gesellschafter-Unterschriften (nachgetragen)
-- ----------------------------------------------------------------------------
-- Diese Migration wurde am 11.07.2026 angewendet (Version 20260711052156),
-- aber nie als Datei abgelegt. Aufgefallen ist das, weil 0032 ein
-- `alter table public.partner_signatures` enthält, ohne dass die Tabelle
-- irgendwo erzeugt wird — ein Neuaufbau aus dem Repository wäre dort mit
-- einem Fehler abgebrochen.
--
-- Der Inhalt ist **nicht rekonstruiert, sondern zurückgeholt**: Supabase
-- speichert zu jeder angewendeten Migration das ausgeführte SQL in
-- `supabase_migrations.schema_migrations.statements`. Von dort stammt der
-- folgende Text unverändert.
--
-- Die Nummer 0027b sortiert hinter `0027_inventory_summary_fix.sql` und
-- damit an die Stelle, an der die Migration tatsächlich lief — vor allem
-- aber vor 0032.
--
-- Gegen die laufende Datenbank ist die Datei ein Leerlauf: `if not exists`,
-- `drop policy if exists`, `on conflict do nothing`, `create or replace`.
--
-- Nachfolgende Migrationen bauen darauf auf und bleiben gültig:
--   * 0032 ergänzt vier Spalten inkl. Fremdschlüssel auf `profiles`
--   * 0076 stellt `list_partner_signatures()` auf SECURITY INVOKER um
--   * 0079 ergänzt in `ps_read` die Prüfung auf `status = 'active'`
-- Die Reihenfolge stimmt, deshalb steht hier bewusst die ursprüngliche,
-- noch ungehärtete Fassung.
--
-- Hinweis zum Seed: Er enthält Namen und DocuSign-Kennungen der beiden
-- Gesellschafter. Das ist der Originalinhalt; ohne ihn hätte eine neu
-- aufgebaute Datenbank keine Unterschriften. Kennungen, keine Geheimnisse.
-- ============================================================================

-- Gesellschafter-Unterschriften für PDF-Reports
create table if not exists public.partner_signatures (
  id                     uuid primary key default gen_random_uuid(),
  full_name              text not null,
  role_label             text not null default 'Gesellschafter',
  docusign_user_id       text,
  docusign_account_id    text,
  docusign_signature_uri text,   -- z.B. /users/xxx/signatures/yyy/signature_image
  image_url              text,   -- Supabase Storage URL, falls Bild eingespielt
  sort_order             int not null default 0,
  created_at             timestamptz not null default now()
);

alter table public.partner_signatures enable row level security;
drop policy if exists ps_read on public.partner_signatures;
create policy ps_read on public.partner_signatures
  for select to authenticated
  using (exists (select 1 from public.profiles p
                  where p.id = auth.uid()
                    and p.role in ('system_admin','shareholder','employee')));

-- Seed: Pia + Philipp (Philipps DocuSign-URI aus MCP-Konnektor)
insert into public.partner_signatures(full_name, role_label, docusign_user_id, docusign_account_id, docusign_signature_uri, sort_order)
values
  ('Pia Blume', 'Gesellschafterin',
   null, null, null, 1),
  ('Philipp Blume', 'Gesellschafter',
   '7c998655-7597-408c-8b65-d37b37ab8c53',
   'd66bd608-cbc3-4677-84f0-e17fc2be8e2a',
   '/users/7c998655-7597-408c-8b65-d37b37ab8c53/signatures/55561321-e780-4b8d-8ee2-f8a901954572/signature_image',
   2)
on conflict do nothing;

create or replace function public.list_partner_signatures()
returns setof public.partner_signatures
language sql
security definer
set search_path = public, app
as $$
  select * from public.partner_signatures order by sort_order, full_name
$$;

grant execute on function public.list_partner_signatures() to authenticated;
