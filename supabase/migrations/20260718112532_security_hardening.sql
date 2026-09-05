-- 0045 — Security-Hardening (Empfehlungen 1, 2, 16 aus dem Audit).

-- NACHTRAG 02.09.2026 (Befund S-14, Wiederholbarkeit):
-- `_sig_upload` und `_pia_sig` waren Arbeitstabellen des Signatur-Imports.
-- Sie sind NIE über eine Migration entstanden, sondern von Hand auf dem
-- Server angelegt worden — dieselbe Herkunft wie die stillgelegte Function
-- `install-signature`. Auf einer leeren Datenbank gibt es sie nicht, und
-- die `comment on`-Zeilen brachen den Lauf ab. Migration 0082 hat sie
-- später ohnehin entfernt.
-- Der Zusatz ändert an der Produktion nichts; er macht den Lauf auf einer
-- LEEREN Datenbank möglich.
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

alter table public.document_folders enable row level security;

drop policy if exists folders_read on public.document_folders;
create policy folders_read on public.document_folders for select to authenticated
  using (public.is_admin() or public.auth_has_permission('documents.view'));

revoke execute on all functions in schema public from anon;
revoke execute on all functions in schema app    from anon;
alter default privileges in schema public revoke execute on functions from anon;
alter default privileges in schema app    revoke execute on functions from anon;

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

drop function if exists public._sign_jwt_hs256(jsonb, text);

alter view public.machine_stock           set (security_invoker = true);
alter view public.product_rating_summary  set (security_invoker = true);
