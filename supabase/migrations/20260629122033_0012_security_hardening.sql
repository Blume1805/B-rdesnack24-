-- 1) machine_stock auf SECURITY INVOKER stellen (Advisor-ERROR).
alter view public.machine_stock set (security_invoker = true);

-- 2) search_path auf app-Hilfsfunktionen fixieren (Advisor-WARN).
alter function app.set_updated_at()  set search_path = public, app;
alter function app.set_created_by()  set search_path = public, app;
alter function app.enable_audit(regclass) set search_path = public, app;

-- 3) SECURITY DEFINER-Funktionen: EXECUTE für anon widerrufen.
revoke execute on function public.app_role(uuid)              from anon;
revoke execute on function public.is_admin(uuid)              from anon;
revoke execute on function public.is_shareholder(uuid)        from anon;
revoke execute on function public.is_internal(uuid)           from anon;
revoke execute on function public.auth_has_permission(text, uuid) from anon;
revoke execute on function public.my_permissions()            from anon;
revoke execute on function public.finance_summary(date, date) from anon;
revoke execute on function public.approve_shareholder(uuid, app.approval_status, text) from anon;
revoke execute on function public.add_document_version(uuid, text, text) from anon;
