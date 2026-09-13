create or replace function app.assert_birth_date_immutable()
returns trigger
language plpgsql
set search_path = public, app
as $$
begin
  if new.birth_date is not distinct from old.birth_date then
    return new;
  end if;

  if coalesce(public.is_admin(), false)
     or coalesce(public.auth_has_permission('users.manage'), false)
  then
    return new;
  end if;

  if old.birth_date is null then
    return new;
  end if;

  raise exception
    'Das Geburtsdatum kann nach der Anmeldung nicht mehr geändert werden. '
    'Bitte wende dich an den Kundenservice.'
    using errcode = 'check_violation';
end;
$$;
