-- ============================================================================
-- pgTAP: Statusstaffel (Beschluss vom 2026-09-16). Ausführung: supabase test db
--
-- Verbindlich festgelegt:
--   bis 149,99 €  →  5,0 % (basis,  kein Zuschlag)
--   ab  150,00 €  →  6,0 % (bronze, +1,0 %)
--   ab  500,00 €  →  7,5 % (silber, +2,5 %)
--   ab 1.000,00 € → 10,0 % (gold,   +5,0 %)
--
-- Der Grundrabatt von 5 % steckt NICHT in status_tiers(), sondern kommt in
-- my_gamification_status() als v_base_pct dazu. discount_pct ist der Zuschlag.
--
-- Hintergrund: Migration 0058 hatte andere Schwellen und Cashback statt
-- Rabatt; 0060 löst sie ab. Eine Analyse vom 2026-09-16 las versehentlich
-- 0058 und meldete einen Widerspruch zum Client, den es nicht gibt
-- („Befund P-1", zurückgezogen). Dieser Test macht die geltende Staffel
-- prüfbar, damit die Frage nicht ein drittes Mal aus dem Gedächtnis
-- beantwortet wird.
-- ============================================================================
begin;
select plan(11);

-- ── Die vier Stufen, genau so und nicht mehr ─────────────────────────────
select is(
  (select count(*)::int from app.status_tiers()), 4,
  'es gibt genau vier Stufen (kein Platin mehr)');

select is(
  (select array_agg(code order by min_eur) from app.status_tiers()),
  array['basis','bronze','silber','gold'],
  'Stufencodes und ihre Reihenfolge');

-- ── Die Schwellen ────────────────────────────────────────────────────────
select is((select min_eur from app.status_tiers() where code = 'basis'),
          0::numeric, 'basis beginnt bei 0 €');
select is((select min_eur from app.status_tiers() where code = 'bronze'),
          150::numeric, 'bronze ab 150 €');
select is((select min_eur from app.status_tiers() where code = 'silber'),
          500::numeric, 'silber ab 500 €');
select is((select min_eur from app.status_tiers() where code = 'gold'),
          1000::numeric, 'gold ab 1.000 €');

-- ── Die Grenzfälle: ein Cent unter der Schwelle zählt noch nicht ─────────
-- Dieselbe Auswahl wie in my_gamification_status().
create or replace function pg_temp.stufe_bei(p_umsatz numeric)
returns text language sql stable as $$
  select code from app.status_tiers()
  where min_eur <= p_umsatz order by min_eur desc limit 1;
$$;

select is(pg_temp.stufe_bei(149.99), 'basis',
  '149,99 € bleibt basis (5 %)');
select is(pg_temp.stufe_bei(150.00), 'bronze',
  '150,00 € erreicht bronze (6 %)');
select is(pg_temp.stufe_bei(499.99), 'bronze',
  '499,99 € bleibt bronze');
select is(pg_temp.stufe_bei(1000.00), 'gold',
  '1.000,00 € erreicht gold (10 %)');

-- ── Der Gesamtrabatt inklusive Grundrabatt ───────────────────────────────
select is(
  (select array_agg(5 + discount_pct order by min_eur) from app.status_tiers()),
  array[5, 6, 7.5, 10]::numeric[],
  'Gesamtrabatt je Stufe: 5 / 6 / 7,5 / 10 %');

select * from finish();
rollback;
