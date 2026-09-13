-- Storage-Policies: signed-documents darf von Admin/Gesellschafter gelesen werden
drop policy if exists "signed_docs_ro" on storage.objects;
create policy "signed_docs_ro"
  on storage.objects for select to authenticated
  using (bucket_id = 'signed-documents' and exists (
    select 1 from public.profiles p
     where p.id = auth.uid()
       and p.role in ('system_admin','shareholder')
  ));

drop policy if exists "signed_docs_ins" on storage.objects;
create policy "signed_docs_ins"
  on storage.objects for insert to authenticated
  with check (bucket_id = 'signed-documents' and exists (
    select 1 from public.profiles p
     where p.id = auth.uid()
       and p.role in ('system_admin','shareholder')
  ));
