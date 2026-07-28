-- ============================================================================
-- 0072 · Geburtsdatum nach der Anmeldung unveränderlich
-- ----------------------------------------------------------------------------
-- BEFUND
-- Die Policy `profiles_update_self` erlaubt Kund:innen, ihre eigene Zeile zu
-- aktualisieren — inklusive `birth_date`. Die App zeigt das Feld zwar nur
-- lesend an, aber RLS ist die einzige Grenze, die zählt: ein manipulierter
-- Client hätte das Datum vor jedem Monatswechsel neu setzen und sich so
-- beliebig viele Geburtstags-Coupons ausstellen lassen können.
--
-- REGEL
-- Ist ein Geburtsdatum einmal gesetzt, bleibt es. Änderungen sind nur noch
-- über die Verwaltung möglich (is_admin oder users.manage) — für echte
-- Korrekturfälle, etwa nach einem Tippfehler bei der Registrierung.
--
-- Ein NULL-Wert darf einmalig nachgetragen werden: Konten aus der Zeit vor
-- Migration 0015 haben kein Datum, und ohne diese Lücke käme man dort nie an
-- den Geburtstags-Coupon. Der Weg von NULL auf einen Wert ist einbahnig.
-- ============================================================================

create or replace function app.assert_birth_date_immutable()
returns trigger
language plpgsql
set search_path = public, app
as $$
begin
  -- Nichts geändert: durchlassen (spart den Rest bei jedem Profil-Update).
  if new.birth_date is not distinct from old.birth_date then
    return new;
  end if;

  -- Verwaltung darf korrigieren. coalesce, weil is_admin() ohne JWT NULL
  -- liefert — ohne das wäre die Bedingung NULL statt false. (Sie fiele hier
  -- zwar ohnehin auf die sichere Seite, aber das soll man nicht erst
  -- nachrechnen müssen.)
  if coalesce(public.is_admin(), false)
     or coalesce(public.auth_has_permission('users.manage'), false)
  then
    return new;
  end if;

  -- Einmaliges Nachtragen bei Altkonten ohne Datum.
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
