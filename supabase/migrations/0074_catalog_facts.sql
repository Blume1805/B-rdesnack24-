-- ============================================================================
-- 0074 · Katalog-Kennzahlen für die Wert-Zeile im Kundenbereich
-- ----------------------------------------------------------------------------
-- Der Start-Screen nennt jetzt drei harte Zahlen („62 Produkte · 4 Automaten
-- · 24/7"). Die kommen live aus dem Katalog statt aus dem Quelltext: eine
-- hartkodierte Zahl ist genau so lange richtig, bis jemand ein Produkt
-- anlegt — und eine falsche Zahl auf dem ersten Screen kostet mehr
-- Vertrauen, als die Zahl an Aufmerksamkeit bringt.
--
-- Als RPC statt zweier Client-Abfragen: eine Runde, und beide Werte stammen
-- garantiert aus demselben Moment.
-- ============================================================================

create or replace function public.catalog_facts()
returns jsonb
language sql
stable
security definer
set search_path = public, app
as $$
  select jsonb_build_object(
    'products', (select count(*) from public.products
                  where status = 'active' and deleted_at is null),
    'machines', (select count(*) from public.machines
                  where deleted_at is null),
    'categories', (select count(distinct category) from public.products
                    where status = 'active' and deleted_at is null)
  );
$$;

comment on function public.catalog_facts() is
  'Produkt-, Automaten- und Kategorienzahl für die Startseite.';

revoke all on function public.catalog_facts() from public;
grant execute on function public.catalog_facts() to authenticated;
