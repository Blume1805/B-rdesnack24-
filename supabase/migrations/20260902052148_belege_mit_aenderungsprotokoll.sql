-- ===========================================================================
-- S-7: Buchführungsrelevante Sätze bekommen ein Änderungsprotokoll.
--
-- 36 Tabellen trugen bereits `trg_audit`, darunter `payments`,
-- `finance_bookings` und `customer_prices`. Fünf fehlten — ausgerechnet
-- die, an denen der Umsatz hängt:
--
--   purchases, purchase_items   der Verkauf selbst
--   invoices                    der Beleg dazu
--   business_invoice_runs       die Sammelabrechnung an Firmenkunden
--   store_subscription          der Abo-Status aus dem Store
--
-- `purchases` trägt zusätzlich eine `ALL`-Policy für `customers.manage`:
-- Wer dieses Recht hat, konnte einen Verkauf ändern oder löschen, ohne
-- dass davon eine Spur blieb. Nachträgliche Änderungen an
-- buchungsrelevanten Daten müssen nachvollziehbar sein — wer, wann, was
-- vorher (§§ 145–147 AO, GoBD).
--
-- Das Protokoll ersetzt keine Unveränderbarkeit; es macht Änderungen
-- sichtbar. Eine echte Festschreibung (Storno statt Änderung) ist der
-- nächste Schritt und in der Verfahrensdokumentation als offener Punkt
-- geführt — hier wird sie nicht behauptet.
-- ===========================================================================

select app.enable_audit('public.purchases');
select app.enable_audit('public.purchase_items');
select app.enable_audit('public.invoices');
select app.enable_audit('public.business_invoice_runs');
select app.enable_audit('public.store_subscription');

do $$
declare v_fehlend text;
begin
  select string_agg(t, ', ' order by t) into v_fehlend
  from unnest(array['purchases','purchase_items','invoices',
                    'business_invoice_runs','store_subscription']) as t
  where not exists (
    select 1 from pg_trigger tr
    join pg_class c on c.oid = tr.tgrelid
    join pg_namespace n on n.oid = c.relnamespace
    where n.nspname = 'public' and c.relname = t and tr.tgname = 'trg_audit'
  );

  if v_fehlend is not null then
    raise exception 'Änderungsprotokoll fehlt weiterhin bei: %', v_fehlend;
  end if;
  raise notice 'S-7: Änderungsprotokoll für fünf belegführende Tabellen eingerichtet.';
end $$;
