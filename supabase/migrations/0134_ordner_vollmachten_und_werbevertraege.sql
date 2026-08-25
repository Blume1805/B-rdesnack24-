-- ============================================================================
-- 0134 — Zwei fehlende Ordner im Dokumentenarchiv
-- ----------------------------------------------------------------------------
-- Der Auftraggeber hat am 25.08.2026 aufgezählt, was künftig unter
-- „Dokumente" abgelegt wird: Miet-, Lieferantenverträge, Steuerbescheide,
-- Arbeitsverträge, Versicherungspolicen, Vollmachten, Werbeverträge.
--
-- Am Bestand nachgesehen statt angenommen: Sieben der neun Ordner gibt es
-- schon (miete, lieferant, steuern, arbeitsvertrag, versicherung, dazu
-- wartung, ifsg, haccp_konzept, verfahrensdoku, protokolle, sonstiges).
-- Vollmachten und Werbeverträge fehlten.
--
-- `sort_order` reiht sie zwischen Versicherungen (90) und Steuerbescheide
-- (100) ein, weil beide zu den kaufmännischen Unterlagen gehören.
-- ============================================================================

insert into public.document_folders (slug, label, sort_order, icon)
values
  ('vollmacht', 'Vollmachten', 92, 'assignment_ind'),
  ('werbung', 'Werbeverträge', 94, 'campaign')
on conflict (slug) do nothing;
