-- Kennzahlen für die Start-Zeile im Kundenbereich.
-- Bewusst als RPC statt Client-Zählung: eine Runde statt zwei, und die
-- Zahlen können nicht auseinanderlaufen, weil sie aus derselben Quelle
-- kommen wie Katalog und Automatenfinder.
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

revoke all on function public.catalog_facts() from public;
grant execute on function public.catalog_facts() to authenticated;
