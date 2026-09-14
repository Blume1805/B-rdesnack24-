-- 0133 — Rücknahme von Teil 2 der 0132: Die 132,00 € vom 31.12.2025 sind die
-- Homeoffice-Pauschale und damit eine echte Betriebsausgabe auf 4651. Die
-- Zeichenfolge „1890" im Partnerfeld ist das GEGENKONTO, nicht das
-- Buchungskonto. Die Erstattung (Teil 1) bleibt bestehen.
-- Volltext: supabase/migrations/0133_homeoffice_pauschale_ist_aufwand.sql
update public.finance_bookings
set account_code = '4651',
    direction = 'expense',
    updated_at = now()
where source = 'sevdesk'
  and deleted_at is null
  and source_ref = '135038921-187708471';
