-- 0033 — Signatur-Management
-- Storage-Bucket + RPCs für Upload und Verknüpfung von Gesellschafter-
-- Signaturen. Signaturbilder werden von der Edge Function
-- docusign-fetch-signature (JWT-Auth zu DocuSign) oder manuell per
-- Client-Upload befüllt. Vollständige Definition siehe Backend-Migration.

insert into storage.buckets (id, name, public)
values ('partner-signatures', 'partner-signatures', false)
on conflict (id) do nothing;

-- RLS + RPCs siehe Backend-Migration.
