-- ============================================================================
-- Verfügbarkeit für Kunden (COMPLIANCE V-016-d)
--
-- Befund 27.09.2026: Die Kunden-App wirbt mit „Echtzeit-Bestand" (auch die
-- Landingpage), liest dafür aber `machine_stock`. Die Sicht läuft mit den
-- Rechten des Aufrufers, und `inventory` ist nur intern lesbar
-- (inventory_read: is_internal()). Kunden sahen deshalb keinen einzigen
-- Artikel.
--
-- Entscheidung des Gesellschafters vom 29.09.2026: Bestand für Kunden öffnen,
-- aber nur als Zustand je Produkt und Automat — verfügbar, bald leer,
-- ausverkauft. Keine Stückzahlen, keine Kapazität, keine Nachfüllschwelle:
-- Das sind Betriebsdaten (Absatz, Befüllrhythmus) und gehen Kunden nichts an.
--
-- Die Tabelle `inventory` bleibt unverändert nur intern lesbar. Kunden
-- bekommen eine eigene Funktion, die genau die drei Zustände, den Preis am
-- Automaten und den Pfand liefert.
--
-- Setzt 20260927200000_pfand_getrennt voraus (Spalte pfand in automatenpreis).
-- Nachweis: scripts/pruefumgebung/111_verfuegbarkeit.sql
-- ============================================================================

do $$
begin
  if not exists (select 1 from information_schema.columns
                  where table_schema = 'public' and table_name = 'products'
                    and column_name = 'deposit') then
    raise exception 'Zuerst 20260927200000_pfand_getrennt ausrollen. Abbruch ohne Änderung.';
  end if;
end $$;

create or replace function public.machine_availability(p_machine uuid)
returns table(product_id uuid, product_name text, image_url text,
              availability text, price_gross numeric, deposit numeric,
              mhd_discount_percent numeric)
language sql
stable security definer
set search_path = public, app
as $$
  -- availability: 'available' | 'low' | 'out'. Die Schwelle für „bald leer"
  -- ist dieselbe wie in machine_stock (Menge ≤ Nachfüllschwelle), damit
  -- Kunden- und Betriebsansicht nie widersprechen.
  -- price_gross ist der Warenpreis am Automaten nach MHD-Abschlag, ohne
  -- Pfand; deposit steht daneben (§ 7 PAngV).
  select p.id,
         p.name,
         p.image_url,
         case when i.quantity <= 0 then 'out'
              when i.quantity <= i.par_level then 'low'
              else 'available'
         end,
         a.brutto,
         a.pfand,
         a.mhd_abschlag_prozent
    from public.inventory i
    join public.machines m on m.id = i.machine_id
    join public.products p on p.id = i.product_id
    left join lateral public.automatenpreis(i.machine_id, i.product_id) a on true
   where i.machine_id = p_machine
     and auth.uid() is not null
     and m.deleted_at is null
     and m.status = 'active'
     and p.deleted_at is null
     and p.status = 'active'
     and coalesce(p.sku, '') <> 'WILDCARD'
   order by case when i.quantity <= 0 then 1 else 0 end, p.name;
$$;

comment on function public.machine_availability(uuid) is
  'Verfügbarkeit je Produkt eines aktiven Automaten für angemeldete Kunden: '
  'nur verfügbar/bald leer/ausverkauft, Warenpreis am Automaten und Pfand. '
  'Keine Stückzahlen (V-016-d, Entscheidung 29.09.2026).';

revoke all on function public.machine_availability(uuid) from public, anon;
grant execute on function public.machine_availability(uuid) to authenticated, service_role;
