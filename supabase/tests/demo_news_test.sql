-- ============================================================================
-- pgTAP: Beispiel-Nachrichten aus 0020 sind nicht sichtbar (0069).
-- Ausführung: supabase test db
--
-- Hintergrund: 0020 legt drei erfundene Nachrichten an, darunter „Neuer
-- Automat am Bahnhof Osterweddingen", obwohl kein Automat in Betrieb ist.
-- 0069 blendet sie aus. Dieser Test hält fest, dass sie nicht zurückkehren
-- und dass ein angemeldetes Konto sie über die Policy nicht mehr liest.
-- ============================================================================
begin;
select plan(3);

select is(
  (select count(*)::int from public.news_articles
    where is_published
      and title in ('Neuer Automat am Bahnhof Osterweddingen',
                    '5 % für den guten Zweck',
                    'Sommer-Sortiment ist da')),
  0,
  'keine der drei Beispiel-Nachrichten aus 0020 ist veröffentlicht'
);

select ok(
  (select count(*) from public.news_articles
    where title = 'Neuer Automat am Bahnhof Osterweddingen') >= 1,
  'die Beiträge sind ausgeblendet, nicht gelöscht'
);

-- Sicht eines angemeldeten Kontos über die Policy news_read.
set local role authenticated;
select is(
  (select count(*)::int from public.news_articles
    where title in ('Neuer Automat am Bahnhof Osterweddingen',
                    '5 % für den guten Zweck',
                    'Sommer-Sortiment ist da')),
  0,
  'ein angemeldetes Konto sieht keinen der drei Beiträge'
);
reset role;

select * from finish();
rollback;
