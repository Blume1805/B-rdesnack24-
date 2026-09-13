revoke execute on function public.my_receipts() from public, anon;
revoke execute on function public.my_gamification_status() from public, anon;
revoke execute on function public.lifetime_founders_status() from public, anon;
revoke execute on function public.choose_subscription_plan(text, boolean, boolean)
  from public, anon;

grant execute on function public.my_receipts() to authenticated, service_role;
grant execute on function public.my_gamification_status() to authenticated, service_role;
grant execute on function public.lifetime_founders_status() to authenticated, service_role;
grant execute on function public.choose_subscription_plan(text, boolean, boolean)
  to authenticated, service_role;
