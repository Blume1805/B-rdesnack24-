-- ============================================================================
-- 0008 — Dokumentenmanagement (versioniert), IfSG-Belehrung/Schulungen, Storage
-- ============================================================================

-- Hilfsfunktion: interner Nutzer (aktiv, nicht Kunde)?
create or replace function public.is_internal(uid uuid default auth.uid())
returns boolean
language sql stable security definer
set search_path = public, app
as $$
  select exists (
    select 1 from public.profiles p
    where p.id = uid and p.status = 'active' and p.deleted_at is null
      and p.role in ('system_admin','shareholder','employee')
  );
$$;

-- ── Dokumente + Versionen (GoBD: Korrektur nur über neue Version) ────────────
create table if not exists public.documents (
  id              uuid primary key default gen_random_uuid(),
  title           text not null,
  category        text,                       -- 'verfahrensdoku' | 'hygienekonzept' | 'haccp' | ...
  current_version integer not null default 0,
  status          app.entity_status not null default 'active',
  created_at      timestamptz not null default now(),
  created_by      uuid,
  updated_at      timestamptz not null default now(),
  updated_by      uuid,
  archived_at     timestamptz
);

drop trigger if exists trg_documents_updated_at on public.documents;
create trigger trg_documents_updated_at before update on public.documents
  for each row execute function app.set_updated_at();

create table if not exists public.document_versions (
  id           uuid primary key default gen_random_uuid(),
  document_id  uuid not null references public.documents(id) on delete restrict,
  version      integer not null,
  file_path    text not null,                 -- Storage-Pfad (Bucket 'documents')
  notes        text,
  created_at   timestamptz not null default now(),
  created_by   uuid,
  unique (document_id, version)
);

-- Atomare Anlage einer neuen Version (berechtigungsgeprüft, hochzählend).
create or replace function public.add_document_version(
  p_document uuid, p_file_path text, p_notes text default null)
returns public.document_versions
language plpgsql security definer
set search_path = public, app
as $$
declare
  next_v int;
  rec public.document_versions;
begin
  if not (public.is_admin() or public.auth_has_permission('documents.edit')) then
    raise exception 'Keine Berechtigung für Dokumente' using errcode = '42501';
  end if;
  perform 1 from public.documents where id = p_document for update;
  if not found then raise exception 'Dokument nicht gefunden'; end if;

  select coalesce(max(version),0)+1 into next_v
    from public.document_versions where document_id = p_document;

  insert into public.document_versions(document_id, version, file_path, notes, created_by)
  values (p_document, next_v, p_file_path, p_notes, auth.uid())
  returning * into rec;

  update public.documents set current_version = next_v, updated_at = now()
   where id = p_document;
  return rec;
end;
$$;

-- ── IfSG-Belehrung §§ 42/43 + Schulungen ────────────────────────────────────
create table if not exists public.ifsg_briefings (
  id                uuid primary key default gen_random_uuid(),
  profile_id        uuid not null references public.profiles(id) on delete restrict,
  first_briefing    date not null,
  next_due          date,
  certificate_path  text,
  created_at        timestamptz not null default now(),
  created_by        uuid
);
create index if not exists idx_ifsg_profile on public.ifsg_briefings(profile_id);

create table if not exists public.employee_trainings (
  id            uuid primary key default gen_random_uuid(),
  profile_id    uuid not null references public.profiles(id) on delete restrict,
  topic         text not null default 'HACCP / Lebensmittelhygiene',
  training_date date not null,
  signature_path text,
  created_at    timestamptz not null default now(),
  created_by    uuid
);
create index if not exists idx_training_profile on public.employee_trainings(profile_id);

-- Audit
select app.enable_audit('public.documents');
select app.enable_audit('public.document_versions');
select app.enable_audit('public.ifsg_briefings');
select app.enable_audit('public.employee_trainings');

-- ============================================================================
-- RLS
-- ============================================================================
alter table public.documents         enable row level security;
alter table public.document_versions enable row level security;
alter table public.ifsg_briefings    enable row level security;
alter table public.employee_trainings enable row level security;

-- Dokumente: lesen documents.view; Pflege documents.edit. Kein Hard-Delete.
drop policy if exists doc_read on public.documents;
create policy doc_read on public.documents for select to authenticated
  using (public.is_admin() or public.auth_has_permission('documents.view'));
drop policy if exists doc_write on public.documents;
create policy doc_write on public.documents for all to authenticated
  using (public.is_admin() or public.auth_has_permission('documents.edit'))
  with check (public.is_admin() or public.auth_has_permission('documents.edit'));

-- Versionen: lesen documents.view; einfügen documents.edit (i. d. R. via RPC).
-- Kein Update/Delete (Unveränderlichkeit).
drop policy if exists docver_read on public.document_versions;
create policy docver_read on public.document_versions for select to authenticated
  using (public.is_admin() or public.auth_has_permission('documents.view'));
drop policy if exists docver_insert on public.document_versions;
create policy docver_insert on public.document_versions for insert to authenticated
  with check (public.is_admin() or public.auth_has_permission('documents.edit'));

-- IfSG/Schulungen: Personaldaten -> employees.manage/Admin; Betroffene sehen sich selbst.
drop policy if exists ifsg_read on public.ifsg_briefings;
create policy ifsg_read on public.ifsg_briefings for select to authenticated
  using (public.is_admin() or public.auth_has_permission('employees.manage') or profile_id = auth.uid());
drop policy if exists ifsg_write on public.ifsg_briefings;
create policy ifsg_write on public.ifsg_briefings for insert to authenticated
  with check (public.is_admin() or public.auth_has_permission('employees.manage'));

drop policy if exists training_read on public.employee_trainings;
create policy training_read on public.employee_trainings for select to authenticated
  using (public.is_admin() or public.auth_has_permission('employees.manage') or profile_id = auth.uid());
drop policy if exists training_write on public.employee_trainings;
create policy training_write on public.employee_trainings for insert to authenticated
  with check (public.is_admin() or public.auth_has_permission('employees.manage'));

-- ============================================================================
-- Storage: private Buckets + Policies (sichere Uploads)
-- ============================================================================
insert into storage.buckets (id, name, public) values
  ('haccp', 'haccp', false),
  ('documents', 'documents', false)
on conflict (id) do nothing;

-- Lesen: interne Nutzer. Einfügen: interne Nutzer. Kein Update/Delete
-- (Unveränderlichkeit der abgelegten Nachweise).
drop policy if exists storage_internal_read on storage.objects;
create policy storage_internal_read on storage.objects for select to authenticated
  using (bucket_id in ('haccp','documents') and public.is_internal());

drop policy if exists storage_internal_insert on storage.objects;
create policy storage_internal_insert on storage.objects for insert to authenticated
  with check (bucket_id in ('haccp','documents') and public.is_internal());
