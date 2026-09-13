create or replace function public.my_permissions()
returns text[]
language sql stable security definer
set search_path = public, app
as $$
  with me as (
    select id, role from public.profiles
    where id = auth.uid() and status = 'active' and deleted_at is null
  )
  select case
    when not exists (select 1 from me) then array[]::text[]
    when (select role from me) = 'system_admin'
      then (select coalesce(array_agg(key), array[]::text[]) from public.permissions)
    else (
      select coalesce(array_agg(distinct perm), array[]::text[])
      from (
        select rp.permission_key as perm
          from public.role_permissions rp, me where rp.role_key = me.role
        union
        select up.permission_key
          from public.user_permissions up, me
          where up.user_id = me.id and up.granted = true
      ) granted
      where perm not in (
        select up2.permission_key from public.user_permissions up2, me
        where up2.user_id = me.id and up2.granted = false
      )
    )
  end;
$$;
