-- 0132 — Eine Erstattung ist kein zweiter Aufwand, eine Einlage kein Aufwand.
-- Zwei Befunde vom 25.08.2026: die spätere der beiden Amazon-Buchungen mit
-- derselben Rechnungsnummer ist eine Rückerstattung (bleibt auf 4930, aber
-- negativ), und der Beleg, dessen Geschäftspartner „1890" heisst, ist eine
-- Privateinlage (gehört auf 1890, nicht auf 4651).
-- Volltext: supabase/migrations/0132_erstattung_und_privateinlage.sql
update public.finance_bookings
set amount_net = -abs(amount_net),
    amount_tax = -abs(amount_tax),
    updated_at = now()
where source = 'sevdesk'
  and source_ref = '145210124-199804949'
  and deleted_at is null
  and amount_net > 0;

update public.finance_bookings
set account_code = btrim(split_part(description, '·', 1)),
    direction = 'liability',
    updated_at = now()
where source = 'sevdesk'
  and deleted_at is null
  and account_code <> btrim(split_part(description, '·', 1))
  and btrim(split_part(description, '·', 1)) ~ '^1[89][0-9]{2}$';
