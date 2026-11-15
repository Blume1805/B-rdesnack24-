-- Unterschriften erneut hochladen (Beobachtung vom 15.11.2026).
--
-- Die App lädt eine Unterschrift mit „überschreiben erlaubt" hoch
-- (my_signature_tasks_screen, upsert: true). Für den Speicherbereich
-- employee-signatures gab es eine Regel zum Anlegen und eine zum Lesen, aber
-- keine zum Ändern. Der erste Upload gelang, ein zweiter für dieselbe Aufgabe
-- (z. B. nach einem Abbruch) scheiterte am Zeilenschutz.
--
-- Die neue Regel erlaubt das Ändern unter denselben Bedingungen wie das
-- Anlegen: nur interne Konten, nur im eigenen Unterordner.
do $$
begin
  if not exists (select 1 from pg_policies
                  where schemaname = 'storage' and tablename = 'objects' and policyname = 'es_update_own') then
    create policy es_update_own on storage.objects for update to authenticated
      using (bucket_id = 'employee-signatures'
             and split_part(name, '/', 1) = (auth.uid())::text
             and public.is_internal())
      with check (bucket_id = 'employee-signatures'
                  and split_part(name, '/', 1) = (auth.uid())::text
                  and public.is_internal());
  end if;
end $$;
