-- ===========================================================================
-- S-2: Einkaufspreise stehen nicht mehr jedem angemeldeten Konto offen.
--
-- Befund vom 02.09.2026: Die Policy `products_read` prüft nur
-- `deleted_at is null` und gilt für die Rolle `authenticated`. Wer ein
-- Konto hat — und die Registrierung steht offen — konnte
--   GET /rest/v1/products?select=name,list_price_net,cost_price_net
-- abrufen und damit 61 Einkaufspreise und die Marge jedes Artikels lesen.
-- Nachgewiesen als Kunde A: „Arizona Eistee Pfirsich = EK 0,87 / VK 1,8487".
--
-- WARUM SPALTENRECHTE UND NICHT EINE ZWEITE TABELLE. Die Spalte in eine
-- eigene Tabelle zu verschieben wäre das strukturell sauberere Mittel,
-- ist aber das Löschen einer Spalte aus einer produktiven Tabelle und
-- damit ein Eingriff eigener Risikoklasse. Der Entzug des Leserechts auf
-- genau diese eine Spalte erreicht dasselbe Ziel, ist rückholbar und
-- lässt die einzige Quelle der Wahrheit an ihrem Platz.
--
-- WARUM ERST ENTZIEHEN, DANN EINZELN GEBEN. Ein Recht auf Spaltenebene
-- kann ein Recht auf Tabellenebene nicht überstimmen: `grant select on
-- products` schliesst jede Spalte ein, auch künftige. Ein `revoke
-- select (cost_price_net)` allein läuft deshalb ins Leere — das
-- Tabellenrecht bleibt und deckt die Spalte weiter ab. Der erste
-- Anlauf dieser Migration ist genau daran gescheitert und hat sich
-- selbst gestoppt; die Prüfung am Ende ist deswegen kein Zierrat.
--
-- FOLGE FÜR AUFRUFER: `select=*` auf `products` beantwortet PostgREST ab
-- jetzt mit 42501, weil `*` alle Spalten einschließt. Wer den Katalog
-- liest, nennt seine Spalten. Die Flutter-App tut das bereits
-- (`id, name, sku, tax_rate`); für die Lovable-Oberflächen ist es in
-- `docs/API-UNTERNEHMENSBEREICH.md` vermerkt.
--
-- FOLGE FÜR NEUE SPALTEN: Wer `products` künftig erweitert, muss das
-- Leserecht für die neue Spalte ausdrücklich vergeben. Das ist Absicht —
-- die Voreinstellung ist damit „nicht sichtbar" statt „sichtbar".
--
-- WER DEN EK WEITERHIN SIEHT: die Auswertungen `inventory_report` und
-- `inventory_summary_by_product`. Beide laufen als SECURITY DEFINER und
-- prüfen selbst auf `inventory.view`/`inventory.edit` — der Weg zum
-- Einkaufspreis führt damit über eine Berechtigungsprüfung statt über
-- ein Tabellenrecht.
-- ===========================================================================

revoke select on public.products from anon, authenticated;

grant select (
  id, sku, name, category, ean, tax_rate, status,
  created_at, created_by, updated_at, updated_by, deleted_at,
  list_price_net, image_url,
  energy_kcal, fat_g, saturated_fat_g, carbs_g, sugars_g,
  protein_g, salt_g, allergens, serve_temp, subcategory
) on public.products to anon, authenticated;

comment on column public.products.cost_price_net is
  'Einkaufspreis netto. Leserecht für anon/authenticated ist entzogen '
  '(S-2, 02.09.2026). Sichtbar nur über inventory_report und '
  'inventory_summary_by_product, die auf inventory.view/edit prüfen. '
  'Deshalb ist "select=*" auf products kein gültiger Aufruf mehr.';

do $$
declare v_anon boolean; v_auth boolean; v_fehlt text;
begin
  v_anon := has_column_privilege('anon',          'public.products', 'cost_price_net', 'SELECT');
  v_auth := has_column_privilege('authenticated', 'public.products', 'cost_price_net', 'SELECT');
  if v_anon or v_auth then
    raise exception 'Entzug fehlgeschlagen: anon=% authenticated=%', v_anon, v_auth;
  end if;

  -- Gegenprobe: JEDE andere Spalte muss lesbar bleiben, sonst wäre der
  -- Katalog für die App still kaputt.
  select string_agg(c.column_name, ', ') into v_fehlt
  from information_schema.columns c
  where c.table_schema = 'public' and c.table_name = 'products'
    and c.column_name <> 'cost_price_net'
    and not has_column_privilege('authenticated', 'public.products', c.column_name, 'SELECT');

  if v_fehlt is not null then
    raise exception 'Zu viel entzogen — nicht mehr lesbar: %', v_fehlt;
  end if;

  raise notice 'S-2: Einkaufspreis entzogen, alle uebrigen Spalten bleiben lesbar.';
end $$;
