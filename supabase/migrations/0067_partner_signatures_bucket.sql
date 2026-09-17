-- 0067 — Signatur-Management (Storage-Bucket)
--
-- Warum die Nummer gewechselt hat: Diese Datei hiess bis zum 17.09.2026
-- `0033_partner_signatures_management.sql` und trug damit dieselbe Versions-
-- nummer wie `0033_documents_expansion.sql`. Die Supabase-CLI leitet die
-- Version aus dem Zahlenpraefix ab; zwei Dateien mit `0033` brechen jeden
-- Neuaufbau ab:
--
--   ERROR: duplicate key value violates unique constraint
--          "schema_migrations_pkey"  Key (version)=(0033) already exists.
--
-- Seit `supabase db reset` in der CI blockierend ist (16.09.2026, Befund A-5),
-- war die CI deshalb durchgehend rot und der pgTAP-Schritt wurde nie erreicht.
-- Die Datei bekommt eine freie Nummer am Ende statt einer Luecke, damit sie in
-- einem bereits eingespielten Produktivprojekt nicht ausser der Reihe laeuft.
-- Ihr Inhalt ist wiederholbar (`on conflict do nothing`), ein erneuter Lauf
-- aendert also nichts.
-- Storage-Bucket + RPCs für Upload und Verknüpfung von Gesellschafter-
-- Signaturen. Signaturbilder werden von der Edge Function
-- docusign-fetch-signature (JWT-Auth zu DocuSign) oder manuell per
-- Client-Upload befüllt. Vollständige Definition siehe Backend-Migration.

insert into storage.buckets (id, name, public)
values ('partner-signatures', 'partner-signatures', false)
on conflict (id) do nothing;

-- RLS + RPCs siehe Backend-Migration.
