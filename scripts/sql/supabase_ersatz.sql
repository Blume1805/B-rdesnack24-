-- ============================================================================
-- Supabase-Ersatzteile für eine reine PostgreSQL-Installation.
--
-- Nur so viel, wie die Migrationskette und die pgTAP-Tests brauchen. Kein
-- Nachbau von Supabase, sondern die Kanten, an denen die Migrationen
-- andocken: Schemata, Rollen, die drei auth-Funktionen und die Tabellen,
-- auf die Policies verweisen.
-- ============================================================================

create schema if not exists auth;
create schema if not exists extensions;
create schema if not exists app;
create schema if not exists storage;

do $$ begin create role anon         nologin; exception when duplicate_object then null; end $$;
do $$ begin create role authenticated nologin; exception when duplicate_object then null; end $$;
do $$ begin create role service_role  nologin bypassrls; exception when duplicate_object then null; end $$;

create extension if not exists pgcrypto  with schema extensions;
create extension if not exists citext    with schema extensions;
create extension if not exists "uuid-ossp" with schema extensions;

-- ── auth ───────────────────────────────────────────────────────────────────
create table if not exists auth.users (
  id                 uuid primary key default extensions.gen_random_uuid(),
  instance_id        uuid,
  aud                text,
  role               text,
  email              text unique,
  encrypted_password text,
  raw_user_meta_data jsonb default '{}'::jsonb,
  created_at         timestamptz default now(),
  updated_at         timestamptz default now()
);

-- Supabase liest die Sitzung aus dem JWT. Lokal kommt sie aus den GUCs
-- request.jwt.claims bzw. request.jwt.claim.sub — genau die Namen, die
-- `set local "request.jwt.claims" = '{...}'` in den Tests setzt.
create or replace function auth.jwt() returns jsonb
language sql stable as $$
  select coalesce(nullif(current_setting('request.jwt.claims', true), '')::jsonb, '{}'::jsonb)
$$;

create or replace function auth.uid() returns uuid
language sql stable as $$
  select coalesce(
    nullif(current_setting('request.jwt.claim.sub', true), ''),
    auth.jwt() ->> 'sub'
  )::uuid
$$;

create or replace function auth.role() returns text
language sql stable as $$
  select coalesce(auth.jwt() ->> 'role', 'anon')
$$;

-- ── storage ────────────────────────────────────────────────────────────────
create table if not exists storage.buckets (
  id text primary key, name text not null, public boolean default false,
  created_at timestamptz default now()
);
create table if not exists storage.objects (
  id uuid primary key default extensions.gen_random_uuid(),
  bucket_id text references storage.buckets(id),
  name text, owner uuid, path_tokens text[], metadata jsonb,
  created_at timestamptz default now()
);
alter table storage.objects enable row level security;
create or replace function storage.foldername(name text) returns text[]
language sql immutable as $$ select string_to_array(name, '/') $$;

-- ── Grundrechte, die Supabase selbst vergibt ───────────────────────────────
--
-- Reihenfolge ist wesentlich: Diese Datei läuft VOR den Migrationen, genau wie
-- in einem echten Supabase-Projekt. Die Standardrechte greifen deshalb für
-- jede Tabelle und jede Funktion, die eine Migration anlegt — und der Entzug
-- in 0045/0046/0066 wirkt danach so, wie er auch produktiv wirkt. Würde man
-- hier nachträglich neu granten, wäre der Test execute_privileges_test.sql
-- wertlos.
--
-- Supabase gibt anon UND authenticated volle Tabellenrechte in `public`;
-- geschützt wird ausschließlich über RLS. Ohne diese Zeilen scheiterten die
-- Tests an „permission denied" statt an der Policy — und ein echter Fehler
-- bliebe unsichtbar.
grant usage on schema public to anon, authenticated, service_role;
-- Ohne USAGE auf `auth` scheitert jede Policy, die auth.uid() aufruft, mit
-- „permission denied for schema auth" — Supabase vergibt dieses Recht selbst.
-- Auf `app` vergibt Supabase es bewusst NICHT: Der Client ruft app.* nie direkt
-- auf, sondern immer über eine security-definer-Funktion in `public`.
grant usage on schema auth to anon, authenticated, service_role;

alter default privileges in schema public grant all     on tables    to anon, authenticated, service_role;
alter default privileges in schema public grant all     on sequences to anon, authenticated, service_role;
alter default privileges in schema public grant execute on functions to anon, authenticated, service_role;
alter default privileges in schema app    grant execute on functions to anon, authenticated, service_role;
