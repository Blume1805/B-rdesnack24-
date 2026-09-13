-- 0045 — Security-Hardening (Empfehlungen 1, 2, 16 aus dem Audit).
--
-- Behebt alle ERROR-Findings und die relevanten WARN-Findings des
-- Supabase-Security-Advisors:
--
--   1) RLS-Lücken:
--      * _sig_upload/_pia_sig — Import-Staging der Gesellschafter-
--        Signaturen (Inhalt längst in partner_signatures gemerged).
--        Wandern ins interne app-Schema: damit sind sie aus der
--        PostgREST-API raus, bleiben aber als Archiv erhalten und
--        können nach Go-Live endgültig gelöscht werden.
--      * document_folders — RLS an + Leserecht nur für Rollen mit
--        documents.view (wie documents selbst). Schreiben bleibt
--        Migrationen/Service-Role vorbehalten (Bypass).
--   2) anon-Rechte: Kein einziger RPC wird vor dem Login gebraucht —
--      execute für anon auf public+app pauschal entziehen (inkl.
--      Default-Privileges für künftige Funktionen). Die internen
--      Berechtigungsprüfungen der Funktionen bleiben als zweite
--      Verteidigungslinie bestehen.
--   3) search_path bei 11 Funktionen pinnen (Advisor:
--      function_search_path_mutable) — verhindert Schema-Shadowing.
--   4) _sign_jwt_hs256 löschen — temporärer Test-Helper, hat in einer
--      Produktions-DB nichts verloren.
--   5) Views machine_stock + product_rating_summary auf
--      security_invoker umstellen: Die RLS des Aufrufers gilt.
--      Basistabellen (inventory, machines, products, product_ratings)
--      haben bereits Select-Policies für authenticated — für Kunden
--      ändert sich nichts, anon verliert den letzten Lesepfad.
--
-- Leaked-Password-Protection (Advisor-WARN) ist eine Auth-Einstellung
-- und wird im Dashboard aktiviert: Authentication → Providers →
-- Password → "Prevent use of leaked passwords".

-- ── 1) Signatur-Staging aus der API nehmen ──────────────────────────────
alter table if exists public._sig_upload set schema app;
alter table if exists public._pia_sig    set schema app;
comment on table app._sig_upload is
  'Import-Rest DocuSign-Signaturen (gemerged in partner_signatures) — nach Go-Live löschen.';
comment on table app._pia_sig is
  'Import-Rest Demo-Signatur Pia (gemerged in partner_signatures) — nach Go-Live löschen.';

-- ── 1b) document_folders unter RLS ──────────────────────────────────────
alter table public.document_folders enable row level security;

drop policy if exists folders_read on public.document_folders;
create policy folders_read on public.document_folders for select to authenticated
  using (public.is_admin() or public.auth_has_permission('documents.view'));
-- Keine Write-Policies: Ordnerstruktur ist fix, Änderungen laufen über
-- Migrationen bzw. Service-Role (RLS-Bypass).

-- ── 2) anon darf keine Funktionen ausführen ─────────────────────────────
revoke execute on all functions in schema public from anon;
revoke execute on all functions in schema app    from anon;
alter default privileges in schema public revoke execute on functions from anon;
alter default privileges in schema app    revoke execute on functions from anon;

-- ── 3) search_path pinnen ───────────────────────────────────────────────
alter function app.generate_redemption_code()            set search_path = public, app;
alter function app.assign_customer_number()              set search_path = public, app;
alter function app.loyalty_milestones()                  set search_path = public, app;
alter function app.trg_purchase_loyalty()                set search_path = public, app;
alter function app.trg_subscriptions_lifetime_lock()     set search_path = public, app;
alter function app.mhd_writedown_pct(integer)            set search_path = public, app;
alter function app.snapshot_slot_history()               set search_path = public, app;
alter function app.snapshot_slot_insert()                set search_path = public, app;
alter function public.donation_rate()                    set search_path = public, app;
alter function public.purchase_net(numeric)              set search_path = public, app;
alter function public.purchase_donation(numeric)         set search_path = public, app;

-- ── 4) Test-Helper entfernen ────────────────────────────────────────────
drop function if exists public._sign_jwt_hs256(jsonb, text);

-- ── 5) Views auf security_invoker ───────────────────────────────────────
alter view public.machine_stock           set (security_invoker = true);
alter view public.product_rating_summary  set (security_invoker = true);
