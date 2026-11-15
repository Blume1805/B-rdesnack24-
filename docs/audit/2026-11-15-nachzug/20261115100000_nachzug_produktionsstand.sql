-- ============================================================================
-- Nachzug: Was am 15.11.2026 nur in der Produktion stand, kommt ins Repository
-- (Abgleich per Fingerabdruck, docs/audit/2026-11-15-ausrollplan, N-1 bis N-3).
--
-- Die Migration ist so geschrieben, dass sie in der Produktion nur EINE Sache
-- ändert (Abschnitt 3b, Upload-Regel) und alles andere nur anlegt, wenn es
-- fehlt. Auf einem frischen Aufbau stellt sie den Stand der Produktion her.
--
--   1. N-1: request_document_review und set_document_valid_until in der Fassung
--      der Produktion (#variable_conflict use_column, Spalten voll benannt).
--   2. N-2: acht Zeilenschutz-Regeln auf den Telemetrie-Tabellen, die Zugriff
--      über das Recht inventory.view / inventory.edit geben.
--   3. N-3: Speicherbereich employee-signatures mit seinen zwei Regeln.
--      3b. Die Upload-Regel ließ jedes angemeldete Konto hochladen, auch
--      Kundenkonten. Unterschriften laden nur interne Konten hoch
--      (my_signature_tasks_screen). Sie verlangt jetzt public.is_internal().
-- ============================================================================

-- ── 1. N-1 ──────────────────────────────────────────────────────────────
do $nachzug$
begin
  if (select p.prosrc from pg_proc p
       where p.oid = to_regprocedure('public.request_document_review(uuid)'))
     not like '%#variable_conflict use_column%' then
    execute $f$
create or replace function public.request_document_review(p_document uuid)
 returns uuid
 language plpgsql
 security definer
 set search_path to 'public', 'app'
as $body$
#variable_conflict use_column
declare
  v_role app.role_key;
  v_id   uuid;
  v_doc  record;
begin
  select role into v_role from public.profiles where profiles.id = auth.uid() and profiles.status = 'active' and profiles.deleted_at is null;
  if v_role is null or v_role not in ('system_admin','shareholder') then
    raise exception 'Nicht autorisiert';
  end if;
  select d.id, d.title, d.category, d.current_version,
         (select v.file_path from public.document_versions v
           where v.document_id = d.id and v.version = d.current_version limit 1) as file_path
    into v_doc
    from public.documents d where d.id = p_document;
  if v_doc.id is null then
    raise exception 'Dokument nicht gefunden';
  end if;
  v_id := public.request_document_approval(
    p_document_kind := 'document_review'::app.document_kind,
    p_period_from   := current_date,
    p_period_to     := current_date,
    p_title         := coalesce(v_doc.title, 'Dokument') || ' (v' || v_doc.current_version || ')',
    p_snapshot      := jsonb_build_object(
                         'document_id', v_doc.id,
                         'category',    v_doc.category,
                         'version',     v_doc.current_version,
                         'file_path',   v_doc.file_path
                       ),
    p_draft_path    := v_doc.file_path
  );
  return v_id;
end;
$body$
    $f$;
  end if;

  if (select p.prosrc from pg_proc p
       where p.oid = to_regprocedure('public.set_document_valid_until(uuid, date)'))
     not like '%#variable_conflict use_column%' then
    execute $f$
create or replace function public.set_document_valid_until(p_document uuid, p_valid_until date)
 returns void
 language plpgsql
 security definer
 set search_path to 'public', 'app'
as $body$
#variable_conflict use_column
declare v_role app.role_key;
begin
  select role into v_role from public.profiles where profiles.id = auth.uid() and profiles.status = 'active' and profiles.deleted_at is null;
  if v_role is null or v_role not in ('system_admin','shareholder') then
    raise exception 'Nicht autorisiert';
  end if;
  update public.documents
     set valid_until = p_valid_until,
         updated_at  = now(),
         updated_by  = auth.uid()
   where id = p_document;
end;
$body$
    $f$;
  end if;
end $nachzug$;

-- ── 2. N-2 ──────────────────────────────────────────────────────────────
do $nachzug$
declare
  r record;
begin
  for r in
    select * from (values
      ('machine_devices',          'machine_devices_read',          'select', 'inventory.view'),
      ('machine_devices',          'machine_devices_insert',        'insert', 'inventory.edit'),
      ('machine_devices',          'machine_devices_update',        'update', 'inventory.edit'),
      ('machine_health',           'machine_health_read',           'select', 'inventory.view'),
      ('machine_slots',            'machine_slots_read',            'select', 'inventory.view'),
      ('machine_slots_history',    'machine_slots_history_read',    'select', 'inventory.view'),
      ('machine_telemetry_events', 'machine_telemetry_events_read', 'select', 'inventory.view'),
      ('telemetry_providers',      'telemetry_providers_read',      'select', 'inventory.view')
    ) as t(tabelle, regel, befehl, recht)
  loop
    if not exists (select 1 from pg_policies
                    where schemaname = 'public' and tablename = r.tabelle and policyname = r.regel) then
      execute format(
        'create policy %I on public.%I for %s to authenticated %s',
        r.regel, r.tabelle, r.befehl,
        case r.befehl
          when 'select' then format('using (public.is_admin() or public.auth_has_permission(%L))', r.recht)
          when 'insert' then format('with check (public.is_admin() or public.auth_has_permission(%L))', r.recht)
          else format('using (public.is_admin() or public.auth_has_permission(%1$L)) with check (public.is_admin() or public.auth_has_permission(%1$L))', r.recht)
        end);
    end if;
  end loop;
end $nachzug$;

-- ── 3. N-3 ──────────────────────────────────────────────────────────────
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('employee-signatures', 'employee-signatures', false, 2097152, array['image/png','image/jpeg'])
on conflict (id) do nothing;

do $nachzug$
begin
  if not exists (select 1 from pg_policies
                  where schemaname = 'storage' and tablename = 'objects' and policyname = 'es_read_own') then
    create policy es_read_own on storage.objects for select to public
      using (bucket_id = 'employee-signatures'
             and (split_part(name, '/', 1) = (auth.uid())::text
                  or exists (select 1 from public.profiles p
                              where p.id = auth.uid()
                                and p.role = any (array['shareholder'::app.role_key, 'system_admin'::app.role_key]))));
  end if;

  -- 3b. Einzige Änderung an der Produktion: Hochladen nur für interne Konten.
  if exists (select 1 from pg_policies
              where schemaname = 'storage' and tablename = 'objects' and policyname = 'es_upload') then
    drop policy es_upload on storage.objects;
  end if;
  create policy es_upload on storage.objects for insert to authenticated
    with check (bucket_id = 'employee-signatures'
                and split_part(name, '/', 1) = (auth.uid())::text
                and public.is_internal());
end $nachzug$;
