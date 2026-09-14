-- 0033 — Dokumente-Ausbau (Teil 1: Schema + Enum)
--
-- • valid_until: Gültigkeitsende (z. B. IfSG-Belehrung alle 2 Jahre).
--   NULL = zeitlich nicht begrenzt.
-- • document_kind-Enum um 'document_review' erweitert — Freigabe-Workflow
--   für Dokumente (Verfahrensdokumentation, HACCP-Konzept, Verträge etc.).
--   ALTER TYPE ADD VALUE muss in einer eigenen Migration passieren,
--   damit die Funktionen in Teil 2 den neuen Wert nutzen können.
alter table public.documents
  add column if not exists valid_until date;

alter type app.document_kind add value if not exists 'document_review';
