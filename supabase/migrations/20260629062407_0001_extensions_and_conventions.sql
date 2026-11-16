create extension if not exists "pgcrypto"  with schema extensions;
create extension if not exists "citext"     with schema extensions;
create extension if not exists "pg_trgm"    with schema extensions;

create schema if not exists app;
revoke all on schema app from anon, authenticated;

create or replace function app.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at := now();
  begin
    new.updated_by := auth.uid();
  exception when undefined_column then
    null;
  end;
  return new;
end;
$$;

create or replace function app.set_created_by()
returns trigger
language plpgsql
as $$
begin
  if new.created_by is null then
    new.created_by := auth.uid();
  end if;
  return new;
end;
$$;
