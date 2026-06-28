-- ============================================================================
-- 0001 — Extensions, Schemas & gemeinsame Konventionen
-- ----------------------------------------------------------------------------
-- Legt Erweiterungen, ein internes Helper-Schema und wiederverwendbare
-- Trigger-Funktionen an (updated_at-Pflege). Audit/Versionierung folgt in 0003.
-- ============================================================================

-- Erweiterungen ------------------------------------------------------------
create extension if not exists "pgcrypto"  with schema extensions;  -- gen_random_uuid, AES (crypto)
create extension if not exists "citext"     with schema extensions;  -- case-insensitive E-Mail
create extension if not exists "pg_trgm"    with schema extensions;  -- Suche/Indizes

-- Internes Schema für Helper, die nicht über die API erreichbar sein sollen.
create schema if not exists app;
revoke all on schema app from anon, authenticated;

-- ----------------------------------------------------------------------------
-- updated_at automatisch pflegen
-- ----------------------------------------------------------------------------
create or replace function app.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at := now();
  -- updated_by (sofern Spalte existiert) auf den aktuellen Nutzer setzen
  begin
    new.updated_by := auth.uid();
  exception when undefined_column then
    null;
  end;
  return new;
end;
$$;

comment on function app.set_updated_at() is
  'Setzt updated_at=now() und (falls vorhanden) updated_by=auth.uid() vor jedem UPDATE.';

-- ----------------------------------------------------------------------------
-- created_by automatisch setzen
-- ----------------------------------------------------------------------------
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

comment on function app.set_created_by() is
  'Setzt created_by=auth.uid() beim INSERT, sofern nicht explizit gesetzt.';
