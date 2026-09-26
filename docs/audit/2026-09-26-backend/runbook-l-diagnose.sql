-- Runbook L, Schritt 3 — nur lesen, ändert nichts.
-- Zählt, ob und in welchem Umfang in der echten Datenbank Demo-Käufe liegen
-- und welche Folgen sie ausgelöst haben (Befund B-1, 26.09.2026).
-- Nutzt nur Tabellen, die vor dem 02.09.2026 angelegt wurden und damit
-- sicher in der Produktion stehen.
select
  (select count(*) from public.purchases where source = 'demo')
    as demo_kaeufe,
  (select count(distinct customer_id) from public.purchases where source = 'demo')
    as betroffene_konten,
  (select count(*) from public.purchases pu
     join public.profiles p on p.id = pu.customer_id
    where pu.source = 'demo' and p.role = 'customer')
    as davon_von_kundenkonten,
  (select coalesce(sum(total_gross), 0) from public.purchases where source = 'demo')
    as summe_brutto_euro,
  (select coalesce(max(total_gross), 0) from public.purchases where source = 'demo')
    as hoechster_einzelbetrag,
  (select count(*) from public.invoices i
     join public.purchases pu on pu.id = i.purchase_id
    where pu.source = 'demo')
    as rechnungen_zu_demo_kaeufen,
  (select count(*) from public.loyalty_bonus_grants g
    where exists (select 1 from public.purchases pu
                   where pu.customer_id = g.customer_id
                     and pu.source = 'demo'
                     and date_trunc('month', pu.purchased_at)::date = g.month_start))
    as treuestufen_in_monaten_mit_demo,
  (select min(purchased_at)::date from public.purchases where source = 'demo')
    as erster_demo_kauf,
  (select max(purchased_at)::date from public.purchases where source = 'demo')
    as letzter_demo_kauf;
