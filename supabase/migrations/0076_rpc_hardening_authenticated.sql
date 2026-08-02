-- ============================================================================
-- 0076 · RPC-Härtung, zweiter Durchgang: Rechte der Rolle `authenticated`
-- ----------------------------------------------------------------------------
-- 0075 hat die Rolle `anon` behandelt. Der Advisor-Lauf danach meldete 83
-- Treffer der Regel `authenticated_security_definer_function_executable` —
-- also SECURITY-DEFINER-Funktionen, die jedes angemeldete Konto über
-- /rest/v1/rpc/... aufrufen kann. Ein angemeldetes Konto ist hier ein
-- Kundenkonto: Registrierung ist offen, die Rolle `authenticated` sagt
-- nichts über Zugehörigkeit zum Betrieb aus.
--
-- Die 83 wurden einzeln durchgesehen. Die große Mehrheit ist unkritisch:
-- Die Finanz- und Verwaltungsfunktionen (finance_kpis, finance_summary,
-- finance_balance_kpis, datev_export_rows, business_customers_csv,
-- inventory_report, upsert_finance_balance …) prüfen die Rolle im Rumpf,
-- meist als `profiles.role in ('system_admin','shareholder')` mit
-- `raise exception 'Nicht autorisiert'`. Sie sind aufrufbar, aber sie
-- geben nichts heraus. Der Advisor kann das nicht sehen — er prüft die
-- ACL, nicht den Rumpf.
--
-- Übrig bleiben drei Gruppen mit echtem Befund. Sie werden hier behandelt.
-- ============================================================================

-- ----------------------------------------------------------------------------
-- Gruppe 1 · Zwei Funktionen hebeln ihre eigene RLS-Policy aus
-- ----------------------------------------------------------------------------
-- `partner_signatures` und `document_folders` haben korrekte, enge
-- Policies:
--
--   ps_read      → profiles.role in ('system_admin','shareholder','employee')
--   folders_read → is_admin() OR auth_has_permission('documents.view')
--
-- Beide Funktionen sind aber nichts weiter als ein `select *` auf genau
-- diese Tabellen — als SECURITY DEFINER. Damit laufen sie mit den Rechten
-- des Eigentümers, die Policy greift nicht, und jedes Kundenkonto kann
-- lesen, was ausdrücklich nur intern lesbar sein soll.
--
-- Bei `list_partner_signatures()` wiegt das schwer: `select *` liefert die
-- vollständigen Zeilen inklusive `image_url` und
-- `docusign_signature_uri` — also Namen und Unterschriftsbilder der
-- Partner. Unterschriftsbilder sind nicht nur personenbezogene Daten,
-- sie sind unmittelbar missbrauchbar.
--
-- Der Entzug der Rechte wäre hier der falsche Weg, denn die internen
-- Screens brauchen die Funktionen (inventory_report_screen.dart,
-- approvals_remote_data_source.dart, documents_screen.dart). Richtig ist,
-- die Umgehung zu beenden: als SECURITY INVOKER greift die vorhandene
-- Policy, interne Nutzer sehen unverändert alles, Kundenkonten nichts.
-- Tabellenrechte stehen dem nicht im Weg — `authenticated` hat auf beiden
-- Tabellen den Supabase-Standard-Grant, gesteuert wird über RLS.
alter function public.list_partner_signatures() security invoker;
alter function public.list_document_folders() security invoker;

-- ----------------------------------------------------------------------------
-- Gruppe 2 · Server- und Wartungsfunktionen ohne Aufrufer im Client
-- ----------------------------------------------------------------------------
-- Diese Funktionen werden von keinem Client aufgerufen (geprüft: kein
-- `rpc('…')` in apps/mobile). Sie laufen per Cron oder von Hand. Cron
-- läuft als Job-Eigentümer, nicht als `authenticated` — der Entzug
-- berührt die Jobs `daily-offers` und `referral-settle` also nicht.
--
-- Warum das nicht nur Kosmetik ist:
--
--   * `next_invoice_number()` zieht `nextval` auf der Rechnungsnummern-
--     Sequenz. Wer sie in einer Schleife aufruft, verbrennt Nummern und
--     reißt Lücken in eine Nummernfolge, die nach § 14 Abs. 4 Nr. 4 UStG
--     fortlaufend und einmalig sein muss. Vergebene Nummern lassen sich
--     nicht zurückholen.
--   * `generate_weekly_offers(int)` beginnt mit einem `delete` auf die
--     Angebote der kommenden Woche und baut sie neu auf. Ein Kundenkonto
--     könnte damit die Angebotslage der ganzen App durchwechseln.
--   * `run_daily_special_offers()` läuft über *alle* Kunden. Die inneren
--     Prüfungen verhindern doppelte Gutschriften, die Schleife selbst
--     bleibt aber ein billiger Weg, Last zu erzeugen.
--   * `create_invoice_for_purchase(uuid)` gibt die Rechnungszeile zurück.
--     `invoices` hat eine Policy, die Kunden auf ihre eigenen Rechnungen
--     begrenzt — die Funktion umgeht sie.
--   * `grant_birthday_offer(uuid)` / `grant_anniversary_offer(uuid)`
--     schreiben Angebote für ein beliebig übergebenes Konto.
revoke execute on function public.next_invoice_number()
  from public, anon, authenticated;
revoke execute on function public.create_invoice_for_purchase(uuid)
  from public, anon, authenticated;
revoke execute on function public.run_daily_special_offers()
  from public, anon, authenticated;
revoke execute on function public.generate_weekly_offers(integer)
  from public, anon, authenticated;
revoke execute on function public.generate_daily_offers(integer)
  from public, anon, authenticated;
revoke execute on function public.grant_birthday_offer(uuid)
  from public, anon, authenticated;
revoke execute on function public.grant_anniversary_offer(uuid)
  from public, anon, authenticated;

grant execute on function public.next_invoice_number() to service_role;
grant execute on function public.create_invoice_for_purchase(uuid) to service_role;
grant execute on function public.run_daily_special_offers() to service_role;
grant execute on function public.generate_weekly_offers(integer) to service_role;
grant execute on function public.generate_daily_offers(integer) to service_role;
grant execute on function public.grant_birthday_offer(uuid) to service_role;
grant execute on function public.grant_anniversary_offer(uuid) to service_role;

-- ----------------------------------------------------------------------------
-- Gruppe 3 · Ein Parameter, dem zu sehr vertraut wird
-- ----------------------------------------------------------------------------
-- `generate_personal_offer(p_customer_id)` wird sehr wohl aus der App
-- aufgerufen (customer_remote_data_source.dart, ensurePersonalOffer) —
-- der Entzug scheidet also aus. Die Funktion nimmt die Kunden-ID aber als
-- Parameter entgegen und prüft nicht, ob sie zum Aufrufer gehört. Die
-- App schickt brav die eigene ID; ein direkter Aufruf gegen die REST-API
-- kann jede beliebige schicken.
--
-- Zwei Folgen, beide an der Policy „nur eigene Zeilen" auf
-- `personal_offers` vorbei:
--
--   1. Existiert für das fremde Konto bereits ein offenes Angebot, gibt
--      die Funktion es unverändert zurück — mitsamt `redemption_code`.
--   2. Existiert keines, wird eines aus der *Kaufhistorie der letzten 90
--      Tage* jenes Kontos erzeugt. Der Titel ist der Produktname. Damit
--      verrät die Antwort, was diese Person zuletzt gekauft hat.
--
-- Der erbeutete Code nützt für sich genommen nichts:
-- `redeem_personal_offer` löst nur ein, was `customer_id = auth.uid()`
-- erfüllt. Es bleibt aber die Offenlegung des Kaufverhaltens, und das ist
-- genau das, was die Policy verhindern soll.
--
-- Die Signatur bleibt, damit der bestehende App-Aufruf unverändert
-- funktioniert; ergänzt wird nur die Prüfung am Anfang. Interne Rollen
-- dürfen weiterhin für andere erzeugen — dort ist es beabsichtigt.
-- Rumpf ab „if not exists (select 1 from public.customers" unverändert
-- aus dem Bestand übernommen.
create or replace function public.generate_personal_offer(p_customer_id uuid)
returns public.personal_offers
language plpgsql
security definer
set search_path to 'public', 'app'
as $function$
declare
  v_existing public.personal_offers;
  v_product public.products%rowtype;
  v_new public.personal_offers;
  v_regular numeric(12,2);
  v_offer   numeric(12,2);
begin
  -- NEU (0076): fremde Kunden-IDs nur für interne Rollen.
  if p_customer_id is distinct from auth.uid()
     and not public.is_internal(auth.uid()) then
    raise exception 'Nicht autorisiert' using errcode = '42501';
  end if;

  if not exists (select 1 from public.customers where id = p_customer_id) then
    raise exception 'Kunde nicht gefunden';
  end if;

  select * into v_existing
  from public.personal_offers
  where customer_id = p_customer_id and redeemed_at is null
  limit 1;
  if found then
    return v_existing;
  end if;

  select p.* into v_product
  from public.products p
  join public.purchase_items pi on pi.product_id = p.id
  join public.purchases pu       on pu.id = pi.purchase_id
  where pu.customer_id = p_customer_id
    and pu.purchased_at > now() - interval '90 days'
    and p.status = 'active' and p.list_price_net is not null
  group by p.id
  order by sum(pi.quantity) desc, random()
  limit 1;

  if not found then
    select * into v_product
    from public.products
    where status = 'active' and list_price_net is not null and list_price_net > 0
    order by random()
    limit 1;
  end if;

  if not found then
    raise exception 'Kein Produkt für individuelles Angebot gefunden';
  end if;

  v_regular := v_product.list_price_net;
  v_offer   := round(v_regular * 0.90, 2);

  insert into public.personal_offers(
    customer_id, product_id, title,
    regular_price_net, offer_price_net, discount_percent,
    redemption_code, valid_from, valid_to, image_url
  ) values (
    p_customer_id, v_product.id, v_product.name,
    v_regular, v_offer, 10.0,
    app.generate_redemption_code(),
    now(), now() + interval '3 days', v_product.image_url
  )
  returning * into v_new;

  return v_new;
end;
$function$;

-- `create or replace` setzt die ACL zurück. Der Bestand vor dieser
-- Migration war der PUBLIC-Standardgrant; damit die App weiterarbeitet,
-- wird hier ausdrücklich nur an `authenticated` und `service_role`
-- vergeben — der Umweg über PUBLIC (siehe Kopf von 0075) entfällt.
revoke execute on function public.generate_personal_offer(uuid) from public, anon;
grant execute on function public.generate_personal_offer(uuid)
  to authenticated, service_role;

-- ----------------------------------------------------------------------------
-- BEWUSST NICHT GEÄNDERT
-- ----------------------------------------------------------------------------
-- `catalog_facts()`, `search_products(...)`, `top_products_by_category(...)`,
-- `product_availability(uuid)`, `list_news(int)` und
-- `lifetime_founders_status()` bleiben für angemeldete Nutzer offen. Sie
-- liefern Sortiments- und Aggregatdaten ohne Personenbezug — genau das,
-- wofür die Kunden-App sie braucht. Der Advisor führt sie weiter als WARN;
-- das ist hier die richtige Antwort und keine offene Aufgabe.
--
-- `is_admin(uuid)`, `is_internal(uuid)`, `app_role(uuid)` und
-- `auth_has_permission(text, uuid)` sind die Prüffunktionen selbst. Sie
-- müssen für `authenticated` aufrufbar bleiben, weil die RLS-Policies sie
-- im Namen des aufrufenden Nutzers auswerten. Sie geben nur Auskunft über
-- die Rolle des jeweiligen Kontos.
