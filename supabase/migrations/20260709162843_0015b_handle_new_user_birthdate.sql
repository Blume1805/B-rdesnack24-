create or replace function app.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public, app
as $$
begin
  insert into public.profiles (id, email, full_name, birth_date, role, status, activated_at)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'full_name', null),
    case when new.raw_user_meta_data ? 'birth_date'
              and length(new.raw_user_meta_data->>'birth_date') = 10
         then (new.raw_user_meta_data->>'birth_date')::date
         else null end,
    coalesce((new.raw_user_meta_data->>'role')::app.role_key, 'customer'),
    (case when coalesce(new.raw_user_meta_data->>'role','customer') = 'customer'
         then 'active' else 'invited' end)::app.profile_status,
    case when coalesce(new.raw_user_meta_data->>'role','customer') = 'customer'
         then now() else null end
  )
  on conflict (id) do nothing;
  return new;
end;
$$;
