-- ===========================================================================
-- S-5: Die E-Mail-Adresse am Profil folgt der bestätigten Anmeldeadresse
--      und ist nicht länger frei setzbar.
--
-- Befund vom 02.09.2026: `profiles.email` war vom Kontoinhaber beliebig
-- beschreibbar. Im Test auf `opfer@example.invalid` gesetzt und
-- gespeichert. Zwei Wirkungen:
--
--   1. `email_enqueue` bestimmt den Empfänger, wenn keine Adresse
--      übergeben wird, aus genau diesem Feld. Post zum Konto ging damit
--      an eine frei gewählte fremde Adresse.
--   2. Supabase bestätigt eine Adressänderung an der Anmeldung doppelt
--      (`double_confirm_changes = true`). Über die Tabelle ließ sich das
--      umgehen — die Bestätigung galt für `auth.users`, geschrieben wurde
--      aber `public.profiles`.
--
-- Die Korrektur schließt beides und lässt den legitimen Fall offen: Wer
-- seine Anmeldeadresse ändert und die Bestätigungsmail anklickt, dessen
-- Profil zieht automatisch nach. Ohne diesen Nachlauf hätte das Sperren
-- des Feldes eine stille Fehlfunktion erzeugt — Post an die alte Adresse.
-- ===========================================================================

-- 1) Nachlauf: bestätigte Adressänderung an der Anmeldung übernehmen.
create or replace function app.sync_profile_email()
returns trigger
language plpgsql
security definer
set search_path to 'public', 'app'
as $$
begin
  if new.email is distinct from old.email and new.email is not null then
    -- Kennzeichen für die Schleuse unten: diese eine Änderung ist gewollt
    -- und kommt aus auth, nicht aus einem Client-Request.
    perform set_config('app.email_sync', 'on', true);
    update public.profiles set email = new.email where id = new.id;
    perform set_config('app.email_sync', 'off', true);
  end if;
  return new;
end;
$$;

drop trigger if exists on_auth_user_email_changed on auth.users;
create trigger on_auth_user_email_changed
  after update of email on auth.users
  for each row execute function app.sync_profile_email();

-- 2) Schleuse: Rolle, Status, Identität — und jetzt auch die Adresse.
create or replace function app.guard_profile_update()
returns trigger
language plpgsql
security definer
set search_path to 'public', 'app'
as $$
begin
  if public.is_admin() then return new; end if;

  -- Der Nachlauf aus auth.users darf die Adresse setzen.
  if new.email is distinct from old.email
     and coalesce(current_setting('app.email_sync', true), 'off') <> 'on'
  then
    raise exception
      'Die E-Mail-Adresse ändert sich über die Anmeldung, nicht über das '
      'Profil. Bitte ändere sie in den Kontoeinstellungen und bestätige '
      'den Link in der E-Mail.'
      using errcode = '42501';
  end if;

  if new.role <> old.role
     or new.status <> old.status
     or new.id <> old.id
     or coalesce(new.archived_at, 'epoch'::timestamptz) <> coalesce(old.archived_at, 'epoch'::timestamptz)
     or coalesce(new.deleted_at,  'epoch'::timestamptz) <> coalesce(old.deleted_at,  'epoch'::timestamptz)
  then
    raise exception 'Rolle/Status/Identität dürfen nur durch einen Administrator geändert werden'
      using errcode = '42501';
  end if;
  return new;
end;
$$;

comment on function app.guard_profile_update() is
  'Schleuse für public.profiles: Rolle, Status, Identität und seit S-5 '
  '(02.09.2026) auch die E-Mail-Adresse sind für Nicht-Administratoren '
  'gesperrt. Die Adresse folgt der bestätigten Anmeldeadresse über '
  'app.sync_profile_email().';
