-- ============================================================================
-- 0012 — Security-Hardening (Supabase Advisors)
-- ----------------------------------------------------------------------------
-- - machine_stock View: SECURITY INVOKER (statt default DEFINER) ⇒ Sichtbarkeit
--   wird vom anfragenden Nutzer ausgewertet, nicht vom View-Owner.
-- - app-Hilfsfunktionen: search_path fixiert.
-- - SECURITY-DEFINER-RPCs: EXECUTE für anon entzogen (interner Aufruf nur durch
--   angemeldete Nutzer; die Funktionen prüfen intern auf auth.uid()).
-- ============================================================================
alter view public.machine_stock set (security_invoker = true);

alter function app.set_updated_at()       set search_path = public, app;
alter function app.set_created_by()       set search_path = public, app;
alter function app.enable_audit(regclass) set search_path = public, app;

revoke execute on function public.app_role(uuid)                                from anon;
revoke execute on function public.is_admin(uuid)                                from anon;
revoke execute on function public.is_shareholder(uuid)                          from anon;
revoke execute on function public.is_internal(uuid)                             from anon;
revoke execute on function public.auth_has_permission(text, uuid)               from anon;
revoke execute on function public.my_permissions()                              from anon;
revoke execute on function public.finance_summary(date, date)                   from anon;
revoke execute on function public.approve_shareholder(uuid, app.approval_status, text) from anon;
revoke execute on function public.add_document_version(uuid, text, text)        from anon;
