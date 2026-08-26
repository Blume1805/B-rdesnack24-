-- ============================================================================
-- 0148 — Rechnungsgrundlage: Steueraufteilung und die Prüfung dazu
-- ----------------------------------------------------------------------------
-- Die Monatsaufstellung aus 0142 kennt nur Bruttobeträge. Für eine Rechnung
-- reicht das nicht: § 14 Abs. 4 Nr. 8 UStG verlangt das Entgelt, nach
-- Steuersätzen aufgeschlüsselt, und den darauf entfallenden Steuerbetrag.
--
-- Diese Funktion leitet beides aus den Einzelposten ab — und sagt vor allem,
-- WANN SIE ES NICHT KANN. Das ist ihr eigentlicher Zweck.
--
-- DREI GRÜNDE, AUS DENEN KEINE RECHNUNG ENTSTEHEN DARF
--
--   1. Ein Kauf ohne Einzelposten. Der Steuersatz ist dann nicht bestimmbar.
--      Beim ersten Test genau so aufgetreten: ein Kauf über 4,99 € ohne
--      Posten hätte eine Rechnung über 0,00 € ergeben. Nayax liefert nicht in
--      jedem Fall Positionen mit.
--   2. Ein Posten ohne hinterlegtes Produkt — dann fehlt der Satz ebenfalls.
--   3. Die Summe der Einzelposten weicht vom Kaufbetrag ab. Dann stimmt
--      irgendetwas nicht, und eine Rechnung, die nicht aufgeht, ist schlimmer
--      als keine.
--
-- Toleranz 2 Cent für Rundung. Alles darüber ist ein Befund, keine Unschärfe.
--
-- ANNAHME, DIE HIER STECKT UND BENANNT GEHÖRT
-- `purchase_items.unit_price` wird als NETTO behandelt — so wie es die
-- bestehende `create_invoice_for_purchase` seit jeher tut, und passend zu
-- `products.list_price_net`. Nachprüfen liess sich das nicht: `purchases` und
-- `purchase_items` sind leer. Die Abstimmprüfung oben ist genau die
-- Sicherung, die anschlägt, falls die Annahme falsch ist.
--
-- WAS ABGERECHNET WIRD
-- Der VOLLE Bruttobetrag aller Firmenkäufe, nicht nur der Arbeitgeberanteil.
-- Der Kauf läuft auf Rechnung des Arbeitgebers — so sagt es die
-- Datenschutzerklärung seit v14, und so ist es auch der einfachere und
-- steuerlich unstrittigere Weg. Was der Arbeitgeber von der beschäftigten
-- Person zurückverlangt, ist Sache des Arbeitsverhältnisses; die Aufstellung
-- weist den Anteil dafür aus.
-- ============================================================================

-- ⚠️ DIESE FASSUNG RECHNET FALSCH — sie steht hier, weil sie so angewandt
-- wurde. Sie nimmt `products.tax_rate` als Bruchteil (0,07), tatsächlich
-- steht dort Prozent (7,0). Korrigiert in **0150**, mit Begründung.

create or replace function app.business_invoice_basis(
  p_business uuid,
  p_jahr     int,
  p_monat    int
)
returns jsonb
language plpgsql
stable
set search_path to 'public', 'app'
as $function$
declare
  von date := make_date(p_jahr, p_monat, 1);
  bis date;
  ergebnis jsonb;
begin
  bis := (von + interval '1 month - 1 day')::date;

  with kauf as (
    select p.id, p.total_gross
    from public.purchases p
    where p.business_id = p_business
      and (p.purchased_at at time zone 'Europe/Berlin')::date between von and bis
  ),
  posten as (
    select k.id as purchase_id, pr.tax_rate,
           sum(pi.quantity * pi.unit_price) as netto
    from kauf k
    join public.purchase_items pi on pi.purchase_id = k.id
    left join public.products pr on pr.id = pi.product_id
    group by k.id, pr.tax_rate
  ),
  je_kauf as (
    select k.id, k.total_gross,
           coalesce(sum(round(po.netto * (1 + coalesce(po.tax_rate, 0)), 2)), 0) as aus_posten,
           count(*) filter (where po.purchase_id is not null and po.tax_rate is null) as ohne_satz,
           count(*) filter (where po.purchase_id is not null) as posten
    from kauf k
    left join posten po on po.purchase_id = k.id
    group by k.id, k.total_gross
  ),
  nach_satz as (
    select coalesce(pr.tax_rate, 0) as satz,
           sum(pi.quantity * pi.unit_price) as netto
    from kauf k
    join public.purchase_items pi on pi.purchase_id = k.id
    left join public.products pr on pr.id = pi.product_id
    group by coalesce(pr.tax_rate, 0)
  )
  select jsonb_build_object(
    'zeitraum', jsonb_build_object('von', von, 'bis', bis),
    'kaeufe', (select count(*) from kauf),
    'brutto_aus_kaeufen', coalesce((select sum(total_gross) from kauf), 0),
    'saetze', coalesce((
      select jsonb_agg(jsonb_build_object(
               'satz_prozent', round(satz * 100, 2),
               'netto', round(netto, 2),
               'steuer', round(netto * satz, 2),
               'brutto', round(netto * (1 + satz), 2))
             order by satz)
      from nach_satz), '[]'::jsonb),
    'netto_gesamt', coalesce((select round(sum(netto), 2) from nach_satz), 0),
    'steuer_gesamt', coalesce((select round(sum(netto * satz), 2) from nach_satz), 0),
    'brutto_gesamt', coalesce((select round(sum(netto * (1 + satz)), 2) from nach_satz), 0),
    'probleme', coalesce((
      select jsonb_agg(t.text)
      from (
        select 'Kauf ohne Einzelposten — der Steuersatz ist nicht bestimmbar ('
               || count(*) || ' Stueck).' as text
        from je_kauf where posten = 0
        having count(*) > 0
        union all
        select 'Posten ohne hinterlegtes Produkt — Steuersatz unbekannt ('
               || sum(ohne_satz) || ' Stueck).'
        from je_kauf where ohne_satz > 0
        having sum(ohne_satz) > 0
        union all
        select 'Summe der Einzelposten weicht vom Kaufbetrag ab ('
               || count(*) || ' Kauf/Kaeufe).'
        from je_kauf
        where posten > 0 and abs(aus_posten - total_gross) > 0.02
        having count(*) > 0
      ) t), '[]'::jsonb)
  )
  into ergebnis;

  return ergebnis;
end;
$function$;

revoke all on function app.business_invoice_basis(uuid, int, int) from public;
