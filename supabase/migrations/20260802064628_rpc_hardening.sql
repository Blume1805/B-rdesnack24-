revoke execute on function public.my_receipts() from anon;
revoke execute on function public.my_gamification_status() from anon;
revoke execute on function public.lifetime_founders_status() from anon;
revoke execute on function public.choose_subscription_plan(text, boolean, boolean)
  from anon;

alter function app.lifetime_founders_limit() set search_path = public, app;
