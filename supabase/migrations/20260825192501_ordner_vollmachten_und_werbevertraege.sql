-- 0134 — Zwei fehlende Ordner im Dokumentenarchiv. Der Auftraggeber hat am
-- 25.08.2026 aufgezählt, was unter „Dokumente" abgelegt wird; Vollmachten und
-- Werbeverträge gab es als Ordner noch nicht.
-- Volltext: supabase/migrations/0134_ordner_vollmachten_und_werbevertraege.sql
insert into public.document_folders (slug, label, sort_order, icon)
values
  ('vollmacht', 'Vollmachten', 92, 'assignment_ind'),
  ('werbung', 'Werbeverträge', 94, 'campaign')
on conflict (slug) do nothing;
