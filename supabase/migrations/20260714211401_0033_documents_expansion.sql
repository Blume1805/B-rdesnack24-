alter table public.documents add column if not exists valid_until date;
alter type app.document_kind add value if not exists 'document_review';
