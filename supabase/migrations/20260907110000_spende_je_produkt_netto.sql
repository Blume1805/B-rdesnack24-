-- Spende: 5 % vom Nettopreis des jeweiligen Produkts
--
-- Entscheidung Philipp, 07.09.2026. Bisher rechnete die Datenbank anders,
-- und zwar auf zwei Arten falsch:
--
--   purchase_net(p_gross)      = round(p_gross / 1.07, 2)
--   purchase_donation(p_gross) = round(purchase_net(p_gross) * 0.05, 2)
--
-- 1. Bezugsgroesse war der Bruttobetrag des GANZEN Kaufs, nicht der
--    Nettopreis je Produkt.
-- 2. Der Steuersatz war fest 7 %. Getraenke tragen 19 % (siehe
--    products.tax_rate, seit 0152 als Prozentwert gepflegt). Bei einem
--    Getraenk fiel der Nettobetrag dadurch zu hoch aus und die Spende
--    entsprechend auch: 2,50 EUR brutto ergaben 2,34 EUR statt 2,10 EUR
--    netto, also 0,12 statt 0,11 EUR Spende. Nach oben abweichend, aber
--    eben nicht das, was zugesagt ist.
--
-- Neu wird je Position gerechnet:
--
--   Nettopreis der Position = round(menge * einzelpreis / (1 + satz/100), 2)
--   Spende des Kaufs        = round(summe der Nettopreise * 5 %, 2)
--
-- Der Einzelpreis am Automaten ist ein Bruttopreis (0152). Gerundet wird
-- je Position auf zwei Stellen, weil genau dieser Betrag auf einer
-- Rechnungszeile stuende, und danach EINMAL fuer die Spende des Kaufs.
--
-- Faellt kein Steuersatz zu einer Position an (Produkt geloescht, Import
-- ohne Produktbezug), wird mit 7 % gerechnet. Das ist derselbe Rueckfall
-- wie in finance_summary seit 0039/0040 und wirkt zugunsten des
-- Spendentopfs: 7 % ergeben einen hoeheren Nettobetrag als 19 %.
--
-- Kaeufe ohne Positionen (Automatenumsatz-Import, der nur total_gross
-- kennt) fallen auf die alte Rechnung zurueck. Sonst verschwaende die
-- Umstellung stillschweigend Spendenbetraege, die schon zugesagt sind.

-- ── 1) Rechenkerne ───────────────────────────────────────────────────

create or replace function public.purchase_net_items(
  p_purchase     uuid,
  p_total_gross  numeric
) returns numeric
language sql
stable
security definer
set search_path to 'public', 'app'
as $function$
  select coalesce(
    (
      select round(sum(
               round(pi.quantity * pi.unit_price
                     / (1 + coalesce(pr.tax_rate, 7) / 100.0), 2)
             ), 2)
      from public.purchase_items pi
      left join public.products pr on pr.id = pi.product_id
      where pi.purchase_id = p_purchase
      having count(*) > 0
    ),
    public.purchase_net(p_total_gross)
  )
$function$;

comment on function public.purchase_net_items(uuid, numeric) is
  'Nettobetrag eines Kaufs, je Position mit dem Steuersatz des Produkts '
  'gerechnet. Ohne Positionen Rueckfall auf purchase_net(total_gross).';

create or replace function public.purchase_donation_for(
  p_purchase     uuid,
  p_total_gross  numeric
) returns numeric
language sql
stable
security definer
set search_path to 'public', 'app'
as $function$
  select round(
    public.purchase_net_items(p_purchase, p_total_gross)
      * public.donation_rate(),
    2
  )
$function$;

comment on function public.purchase_donation_for(uuid, numeric) is
  '5 % vom Nettopreis der Produkte eines Kaufs (Entscheidung 07.09.2026).';

-- purchase_net(numeric) und purchase_donation(numeric) bleiben bestehen:
-- donation_pool_summary schaetzt daraus den Anteil des Automatenumsatzes,
-- zu dem es ueberhaupt keine Positionen gibt. Fuer Kaeufe sind sie ab
-- hier nicht mehr die richtige Rechnung.
comment on function public.purchase_donation(numeric) is
  'Pauschale Schaetzung aus einem Bruttobetrag (7 % USt unterstellt). '
  'Nur noch fuer Umsaetze OHNE Positionen verwenden -- fuer Kaeufe gilt '
  'purchase_donation_for(purchase_id, total_gross).';

-- ── 2) Auswertungen auf die neue Rechnung umstellen ──────────────────

create or replace function public.my_donation_summary()
returns table(total_donated numeric, purchase_count bigint)
language sql
security definer
set search_path to 'public', 'app'
as $function$
  select
    coalesce(sum(public.purchase_donation_for(id, total_gross)), 0)::numeric,
    count(*)::bigint
  from public.purchases
  where customer_id = auth.uid()
    and business_id is null
$function$;

create or replace function public.my_donations_by_purchase()
returns table(purchase_id uuid, purchased_at timestamp with time zone,
              total_gross numeric, total_net numeric, donation numeric,
              share_pct numeric, payment_method text,
              invoice_id uuid, invoice_number text)
language sql
security definer
set search_path to 'public', 'app'
as $function$
  with mine as (
    select id, purchased_at, total_gross, payment_method,
           public.purchase_net_items(id, total_gross) as netto,
           public.purchase_donation_for(id, total_gross) as spende
    from public.purchases
    where customer_id = auth.uid()
      and business_id is null
  ),
  agg as (
    select coalesce(sum(spende), 0) as total_don from mine
  )
  select
    m.id,
    m.purchased_at,
    m.total_gross,
    m.netto,
    m.spende,
    case when a.total_don = 0 then 0
         else round(m.spende / a.total_don * 100, 1)
    end,
    m.payment_method::text,
    i.id,
    i.invoice_number
  from mine m
  cross join agg a
  left join public.invoices i on i.purchase_id = m.id
  order by m.purchased_at desc
$function$;

create or replace function public.donation_pool_summary()
returns table(my_donated numeric, total_pool numeric,
              my_share_pct numeric, non_app_gross numeric)
language sql
security definer
set search_path to 'public', 'app'
as $function$
  with mine as (
    select coalesce(sum(public.purchase_donation_for(id, total_gross)),0) as v
    from public.purchases
    where customer_id = auth.uid()
      and business_id is null
  ),
  app_total as (
    select coalesce(sum(public.purchase_donation_for(id, total_gross)),0) as v
    from public.purchases
  ),
  automat as (
    select
      greatest(
        coalesce((select sum(gross_total) from public.machine_sales_daily
                  where day >= current_date - interval '90 days'),0)
        - coalesce((select sum(total_gross) from public.purchases
                    where purchased_at >= current_date - interval '90 days'),0),
        0
      ) as v
  ),
  automat_donation as (
    -- Bewusst die pauschale Rechnung: zu diesem Umsatz gibt es keine
    -- Positionen, also auch keinen Steuersatz je Produkt.
    select round(public.purchase_donation((select v from automat)),2) as v
  )
  select
    (select v from mine),
    (select v from app_total) + (select v from automat_donation),
    case when ((select v from app_total) + (select v from automat_donation)) = 0 then 0
         else round((select v from mine) /
                    ((select v from app_total) + (select v from automat_donation)) * 100, 2)
    end,
    (select v from automat)
$function$;

-- ── 3) Rechte wie zuvor ──────────────────────────────────────────────

revoke all on function public.purchase_net_items(uuid, numeric) from public, anon;
revoke all on function public.purchase_donation_for(uuid, numeric) from public, anon;
grant execute on function public.purchase_net_items(uuid, numeric) to authenticated, service_role;
grant execute on function public.purchase_donation_for(uuid, numeric) to authenticated, service_role;

-- ── 4) Die drei Spendenzwecke aus dem Seed nehmen ────────────────────
--
-- Entscheidung Philipp, 07.09.2026: die drei angelegten Zwecke fliegen
-- raus. Zwei davon (Tafel Magdeburg, Kinderhospiz Magdeburger Elbland)
-- lagen ohnehin ausserhalb des Suelzetals und widersprachen damit der
-- Aussage zum Empfaengerkreis.
--
-- Kein DELETE: die Stimmen haengen per Fremdschluessel daran, und ein
-- archivierter Datensatz laesst sich zurueckholen, ein geloeschter nicht.
-- Wirkung ist dieselbe -- die Leseregel filtert auf `deleted_at is null`,
-- und vote_donation_cause verlangt `status = 'active'`.

-- Bewusst OHNE `deleted_at is null` in der Bedingung: in der Produktion
-- sind die drei bereits weggeraeumt, tragen aber weiterhin
-- `status = 'active'`. Sichtbar sind sie dadurch nicht (jede Leseregel
-- filtert auf `deleted_at is null`), aber der Halbzustand faellt frueher
-- oder spaeter jemandem auf die Fuesse. So endet die Migration ueberall
-- im selben Zustand und laesst sich beliebig oft anwenden.
update public.donation_causes
   set status = 'archived',
       deleted_at = coalesce(deleted_at, now())
 where title in (
     'Tafel Magdeburg',
     'Kinderhospiz Magdeburger Elbland',
     'Feuerwehr Sülzetal'
   )
   and (status is distinct from 'archived' or deleted_at is null);

-- ── 5) Drei Demo-Nachrichten, die einen Betrieb behaupten ────────────
--
-- Nicht bestellt, aber im selben Zug aufgefallen und zu ernst zum
-- Liegenlassen: der Seed von 0020 legt drei Nachrichten an, die Kunden
-- im Nachrichtenbereich der App zu lesen bekommen --
--
--   "Ab sofort findet ihr am Nordausgang des Bahnhofs Osterweddingen
--    einen dritten Bördesnack24-Automaten."
--   "Wir haben unser Kühlautomaten-Sortiment für den Sommer erweitert."
--   "Ab sofort fließen 5 % jedes Netto-Umsatzes in einen Spendentopf."
--
-- Stand 09/2026 gibt es null Automaten, null Verkaeufe und keinen
-- Spendentopf. Das sind Aussagen ueber einen Betriebszustand, den es
-- nicht gibt (§ 5 UWG). Sie werden nicht geloescht, sondern auf
-- unveroeffentlicht gesetzt -- als Textvorlage taugen sie weiter, sobald
-- der erste Automat steht.

update public.news_articles
   set is_published = false
 where is_published
   and title in (
     'Neuer Automat am Bahnhof Osterweddingen',
     '5 % für den guten Zweck',
     'Sommer-Sortiment ist da'
   );
