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
-- Die beiden Staging-Tabellen stammen aus einem einmaligen Import und werden
-- von keiner Migration angelegt. Das `alter ... if exists` lief deshalb in
-- einer leeren Datenbank ins Leere, das nachfolgende `comment on table` brach
-- ab (Befund A-5). Kommentare sind reine Beschriftung — sie werden gesetzt,
-- wenn die Tabelle da ist, und sonst ausgelassen.
alter table if exists public._sig_upload set schema app;
alter table if exists public._pia_sig    set schema app;
do $$
begin
  if to_regclass('app._sig_upload') is not null then
    comment on table app._sig_upload is
      'Import-Rest DocuSign-Signaturen (gemerged in partner_signatures) — nach Go-Live löschen.';
  end if;
  if to_regclass('app._pia_sig') is not null then
    comment on table app._pia_sig is
      'Import-Rest Demo-Signatur Pia (gemerged in partner_signatures) — nach Go-Live löschen.';
  end if;
end $$;

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
-- `alter function` kennt kein `if exists`. app.snapshot_slot_history() und
-- app.snapshot_slot_insert() werden von keiner Migration in diesem Repository
-- angelegt; in einer leeren Datenbank brach die Kette deshalb hier ab
-- (Befund A-5). Die Schleife pinnt jede vorhandene Funktion und meldet jede
-- fehlende als Warnung — das Pinnen ist eine Härtung, die ohne die Funktion
-- gegenstandslos ist, das Fehlen aber nicht verschwiegen werden darf.
do $$
declare
  v_sig  text;
  v_sigs text[] := array[
    'app.generate_redemption_code()',
    'app.assign_customer_number()',
    'app.loyalty_milestones()',
    'app.trg_purchase_loyalty()',
    'app.trg_subscriptions_lifetime_lock()',
    'app.mhd_writedown_pct(integer)',
    'app.snapshot_slot_history()',
    'app.snapshot_slot_insert()',
    'public.donation_rate()',
    'public.purchase_net(numeric)',
    'public.purchase_donation(numeric)'
  ];
begin
  foreach v_sig in array v_sigs loop
    if to_regprocedure(v_sig) is null then
      raise warning 'A-5: % fehlt — search_path wird nicht gepinnt. Siehe docs/OPERATIONS.md, Runbook D.', v_sig;
    else
      execute format('alter function %s set search_path = public, app', v_sig);
    end if;
  end loop;
end $$;

-- ── 4) Test-Helper entfernen ────────────────────────────────────────────
drop function if exists public._sign_jwt_hs256(jsonb, text);

-- ── 5) Views auf security_invoker ───────────────────────────────────────
alter view public.machine_stock           set (security_invoker = true);
alter view public.product_rating_summary  set (security_invoker = true);
