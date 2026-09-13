-- 0130 — Ein Geldfluss, eine Buchung.
-- Hausregel vom 25.08.2026: „immer nur eine Ein- oder Auszahlung",
-- Konto 1780 ist das richtige. sevDesk führt zu jeder
-- Umsatzsteuer-Voranmeldung zwei Belege (Anmeldung und Zahlung); in der
-- Auswertung stand derselbe Geldeingang dadurch zweimal.
-- Weich gelöscht, nur auf Umsatzsteuer-Zahlkonten 1700–1799. Begründung
-- und Gegenbeispiele: supabase/migrations/0130_ein_geldfluss_eine_buchung.sql
update public.finance_bookings a
set deleted_at = now(),
    updated_at = now()
where a.deleted_at is null
  and a.source = 'sevdesk'
  and a.account_code between '1700' and '1799'
  and exists (
    select 1
    from public.finance_bookings b
    where b.id <> a.id
      and b.deleted_at is null
      and b.source = 'sevdesk'
      and b.account_code between '1700' and '1799'
      and b.direction = a.direction
      and round(b.amount_net + b.amount_tax, 2)
        = round(a.amount_net + a.amount_tax, 2)
      and abs(b.booking_date - a.booking_date) <= 14
      and lower(split_part(btrim(split_part(b.description, '·', 1)), ' ', 1))
        = lower(split_part(btrim(split_part(a.description, '·', 1)), ' ', 1))
      and (
        (b.account_code = '1780') > (a.account_code = '1780')
        or (
          (b.account_code = '1780') = (a.account_code = '1780')
          and (b.booking_date, b.source_ref) < (a.booking_date, a.source_ref)
        )
      )
  );
