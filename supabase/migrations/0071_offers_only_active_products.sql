-- ============================================================================
-- 0071 · Angebote nur auf Produkte aus dem Sortiment
-- ----------------------------------------------------------------------------
-- Vorgabe: „Angebote können nur Produkte sein, die es auch im Sortiment gibt"
-- — für Wochen-/Tagesangebote, persönliche Angebote, Meilensteine sowie
-- Geburtstags- und Jahrestags-Coupons.
--
-- BEFUND
-- Die Generatoren filtern bereits alle auf `status = 'active'`, und die
-- Datenbank enthielt keine verwaisten Angebote. Was im Kundenbereich noch
-- auftauchte (z. B. „Airwaves Cool Cassis Dragees 50St" als Meilenstein-
-- Bonus), stammte aus dem lokalen Offline-Cache der App: der hatte kein
-- Ablaufdatum und hielt Coupons auf Produkte am Leben, die es seit dem
-- Katalogwechsel nicht mehr gibt. Das ist clientseitig behoben.
--
-- Diese Migration zieht zusätzlich den Riegel serverseitig ein, damit kein
-- künftiger Generator daran vorbeikommt — ein FK allein prüft nur die
-- Existenz, nicht den Status.
--
-- AUSNAHME: das Wildcard-Produkt.
-- Geburtstags- und Jahrestags-Coupons gelten „auf alles" und hängen deshalb
-- bewusst an einem Platzhalter-Produkt (sku = 'WILDCARD'), das nicht im
-- Katalog erscheint. Das ist kein Fehler, sondern die technische Abbildung
-- eines produktfreien Coupons — und bleibt ausdrücklich erlaubt.
-- ============================================================================

create or replace function app.assert_offer_product_in_catalog()
returns trigger
language plpgsql
set search_path = public, app
as $$
declare
  v_sku    text;
  v_status app.entity_status;
  v_del    timestamptz;
begin
  if new.product_id is null then
    return new;  -- Angebote ohne Produktbezug sind zulässig.
  end if;

  select sku, status, deleted_at
    into v_sku, v_status, v_del
    from public.products
   where id = new.product_id;

  if not found then
    raise exception 'Angebot verweist auf ein unbekanntes Produkt (%)',
      new.product_id;
  end if;

  -- Der Platzhalter für „Coupon auf alles" ist gewollt.
  if coalesce(v_sku, '') = 'WILDCARD' then
    return new;
  end if;

  if v_status <> 'active' or v_del is not null then
    raise exception
      'Angebot nur auf Produkte im Sortiment — % ist % (gelöscht: %)',
      coalesce(v_sku, new.product_id::text), v_status, v_del is not null;
  end if;

  return new;
end;
$$;

comment on function app.assert_offer_product_in_catalog() is
  'Verhindert Angebote auf inaktive/gelöschte Produkte. WILDCARD erlaubt.';

drop trigger if exists trg_offers_product_in_catalog on public.offers;
create trigger trg_offers_product_in_catalog
  before insert or update of product_id on public.offers
  for each row execute function app.assert_offer_product_in_catalog();

drop trigger if exists trg_personal_offers_product_in_catalog
  on public.personal_offers;
create trigger trg_personal_offers_product_in_catalog
  before insert or update of product_id on public.personal_offers
  for each row execute function app.assert_offer_product_in_catalog();

-- Bestandsbereinigung: alles, was jetzt schon auf ein Produkt außerhalb des
-- Sortiments zeigt, wird entfernt. (Aktuell leer — der Lauf ist die
-- Absicherung für den Fall, dass diese Migration später auf einem Stand mit
-- Altlasten ausgeführt wird.)
delete from public.personal_offers po
 where po.product_id is not null
   and not exists (
     select 1 from public.products p
      where p.id = po.product_id
        and p.deleted_at is null
        and (p.status = 'active' or coalesce(p.sku, '') = 'WILDCARD')
   );

delete from public.offers o
 where o.product_id is not null
   and not exists (
     select 1 from public.products p
      where p.id = o.product_id
        and p.deleted_at is null
        and (p.status = 'active' or coalesce(p.sku, '') = 'WILDCARD')
   );
