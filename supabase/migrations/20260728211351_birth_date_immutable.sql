create or replace function app.assert_birth_date_immutable()
returns trigger
language plpgsql
set search_path = public, app
as $$
begin
  if new.birth_date is not distinct from old.birth_date then
    return new;
  end if;

  if public.is_admin() or public.auth_has_permission('users.manage') then
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

comment on function app.assert_birth_date_immutable() is
  'Sperrt Änderungen an profiles.birth_date (Missbrauch Geburtstags-Coupon).';

drop trigger if exists trg_profiles_birth_date_immutable on public.profiles;
create trigger trg_profiles_birth_date_immutable
  before update of birth_date on public.profiles
  for each row execute function app.assert_birth_date_immutable();
