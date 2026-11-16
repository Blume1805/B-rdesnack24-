-- ============================================================================
-- Zwei Kleinbefunde aus dem Audit vom 15.11.2026
--
-- A2-14  bundle_split lieferte die Preisaufteilung auch für Kombi-Angebote,
--        die nicht aktiv oder gelöscht sind, wenn man die Kennung kannte.
--        Jetzt gilt dieselbe Sichtbarkeit wie die Leseregel `bundles_read`:
--        aktiv und nicht gelöscht, oder Admin, oder Recht `offers.manage`.
-- A2-12  Die Sicht machine_stock trug Schreib-, Lösch- und Leerungsrechte für
--        anon und authenticated. An der Sicht bewirken sie nichts (sie ist
--        nicht beschreibbar), sie gehören trotzdem nicht dorthin.
--        Lesen bleibt unverändert.
-- Rückweg: Funktion aus 20260910210000_bundles.sql erneut anlegen;
--          grant insert, update, delete, truncate, references, trigger
--          on public.machine_stock to anon, authenticated.
-- ============================================================================

CREATE OR REPLACE FUNCTION public.bundle_split(p_bundle uuid)
 RETURNS TABLE(product_id uuid, product_name text, image_url text, sort_order smallint, quantity integer, tax_rate numeric, regular_unit_gross numeric, regular_line_gross numeric, share_percent numeric, bundle_line_gross numeric, bundle_unit_gross numeric, bundle_line_net numeric, bundle_line_vat numeric)
 LANGUAGE sql
 STABLE SECURITY DEFINER
 SET search_path TO 'public', 'app'
AS $function$
  with b as (
    select id, price_gross from public.bundles
     where id = p_bundle
       and ((deleted_at is null and status = 'active'::app.entity_status)
            or public.is_admin()
            or public.auth_has_permission('offers.manage'))
  ),
  zeilen as (
    select bi.product_id,
           p.name  as product_name,
           p.image_url,
           bi.sort_order,
           bi.quantity,
           p.tax_rate,
           round(p.list_price_net * (1 + p.tax_rate / 100), 2) as unit_gross
      from public.bundle_items bi
      join public.products p on p.id = bi.product_id
     where bi.bundle_id = p_bundle
       and p.list_price_net is not null
  ),
  summiert as (
    select z.*, (z.unit_gross * z.quantity)::numeric(12,2) as line_gross
      from zeilen z
  ),
  verteilt as (
    select s.*,
           b.price_gross,
           -- Schritt 1: Prozentsatz auf zwei Nachkommastellen.
           round(s.line_gross * 100
                 / nullif(sum(s.line_gross) over (), 0), 2) as prozent,
           row_number() over (order by s.sort_order, s.product_id) as rn,
           count(*) over () as n
      from summiert s cross join b
  ),
  angewandt as (
    -- Schritt 2: mit genau diesem Prozentsatz multiplizieren.
    select v.*, round(v.price_gross * v.prozent / 100, 2) as anteil
      from verteilt v
  ),
  korrigiert as (
    select a.*,
           case
             when a.rn < a.n then a.anteil
             else a.price_gross - coalesce(
                    sum(a.anteil) over (
                      order by a.rn
                      rows between unbounded preceding and 1 preceding
                    ), 0)
           end as line_bundle
      from angewandt a
  )
  -- Schritt 3: Netto und Umsatzsteuer je Position, mit dem Steuersatz
  -- dieses Produkts.
  select k.product_id, k.product_name, k.image_url, k.sort_order, k.quantity,
         k.tax_rate,
         k.unit_gross                         as regular_unit_gross,
         k.line_gross                         as regular_line_gross,
         k.prozent                            as share_percent,
         k.line_bundle::numeric(12,2)         as bundle_line_gross,
         round(k.line_bundle / k.quantity, 2) as bundle_unit_gross,
         round(k.line_bundle / (1 + k.tax_rate / 100), 2)
           as bundle_line_net,
         (k.line_bundle - round(k.line_bundle / (1 + k.tax_rate / 100), 2))
           ::numeric(12,2) as bundle_line_vat
    from korrigiert k
   order by k.sort_order, k.product_id;
$function$;


revoke insert, update, delete, truncate, references, trigger
  on public.machine_stock from anon, authenticated;
