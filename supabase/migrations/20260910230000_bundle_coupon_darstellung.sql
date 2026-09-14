-- ===========================================================================
-- Kombiangebot-Coupon: vier Preise, Laufzeit, Werbeflaeche.
--
-- Vorgabe Philipp vom 10.09.2026: Die Coupon-Gestaltung ist fuer ALLE
-- Bundles identisch. Sie zeigt
--
--   * die Produktbilder mit einem Pluszeichen dazwischen
--   * den Gesamtpreis der Einzelprodukte, durchgestrichen -- **mit und
--     ohne** den 5-%-Dauerrabatt
--   * den Bundlepreis -- ebenfalls mit und ohne Dauerrabatt
--   * kleiner darunter die Gueltigkeitsdauer
--   * eine Flaeche fuer ein Werbelogo, wie jeder andere Coupon auch
--
-- Weil die Gestaltung immer gleich ist, entsteht ein neues Kombiangebot
-- allein durch Anlegen in der Gesellschafter-App. Es braucht dafuer weder
-- einen Entwurf noch eine neue Programmfassung.
--
-- ALLE VIER PREISE KOMMEN VOM SERVER. Der Client rechnet keinen Rabatt
-- nach -- dieselbe Regel, die `my_subscription_benefits` seit dem
-- 13.08.2026 aufstellt: „Einzige Quelle fuer die Anzeige des Dauerrabatts,
-- damit die Regel nicht im Frontend nachgebaut wird."
-- ===========================================================================

-- ── Der Dauerrabatt an einer Stelle ────────────────────────────────────
-- Bis heute stand die 5 als Zahl in my_subscription_benefits. Jetzt steht
-- sie in einer Funktion, damit der Bundle-Coupon nicht dieselbe Zahl ein
-- zweites Mal fuehrt. Pricing.appDiscountRate in der App spiegelt sie.
create or replace function app.dauerrabatt_prozent()
returns numeric
language sql
immutable
as $$ select 5::numeric $$;

comment on function app.dauerrabatt_prozent() is
  'Dauerrabatt fuer Abonnenten in Prozent. Einzige Quelle im Backend; '
  'my_subscription_benefits und active_bundles lesen sie.';

create or replace function public.my_subscription_benefits()
returns jsonb
language sql
stable
security definer
set search_path = public, app
as $$
  select jsonb_build_object(
    'active',           app.has_subscription(auth.uid()),
    'discount_percent', case when app.has_subscription(auth.uid())
                             then app.dauerrabatt_prozent() else 0 end,
    'period_end',       app.subscription_period_end(auth.uid()),
    'plan',             (select s.plan::text
                         from public.customer_subscriptions s
                         where s.customer_id = auth.uid()
                         order by s.seq desc
                         limit 1)
  );
$$;

-- ── Werbeflaeche auf dem Coupon ────────────────────────────────────────
-- Baugleich zu kundenkarte_werbeplatz, aber mit eigener Motivart. Eine
-- Freigabe bleibt flaechenbezogen: ein fuer die Kundenkarte freigegebenes
-- Logo erscheint nicht ungeprueft auf einem Coupon.
create or replace function public.coupon_werbeplatz()
returns table (
  creative_id     uuid,
  campaign_id     uuid,
  logo_url        text,
  alt_text        text,
  werbetreibender text,
  ziel_url        text,
  kennzeichnung   text
)
language sql
stable
security definer
set search_path to 'public', 'app'
as $$
  select
    cr.id,
    c.id,
    cr.file_url,
    cr.alt_text,
    coalesce(nullif(btrim(cr.anzeigename), ''), b.name),
    coalesce(cr.ziel_url, c.ziel_url),
    coalesce(app.parameter('coupon_werbung_kennzeichnung'), 'Anzeige')
  from public.advertising_creatives cr
  join public.advertising_campaigns c on c.id = cr.campaign_id
  join public.businesses            b on b.id = c.business_id
  where cr.kind = 'coupon_logo'
    and cr.status = 'active'
    and cr.deleted_at is null
    and cr.file_url is not null
    and c.status = 'active'
    and c.welt in ('digital', 'komplett')
    and c.deleted_at is null
    and c.von <= current_date
    and (c.bis is null or c.bis >= current_date)
    and b.status = 'active'
    and b.deleted_at is null
    and b.archived_at is null
  -- Tagesbezogene, fuer alle Kunden gleiche Reihenfolge. Kein Bezug zum
  -- Konto: dieselbe Abfrage liefert allen Angemeldeten dasselbe Ergebnis.
  order by md5(to_char(current_date, 'YYYY-MM-DD') || cr.id::text)
  limit app.parameter_zahl('coupon_werbeplaetze', 1);
$$;

comment on function public.coupon_werbeplatz() is
  'Logo der aktiven Coupon-Kampagnen, taeglich rotierend und fuer alle '
  'Kunden identisch. Gibt keine Kundendaten aus und wertet keine aus. Das '
  'Feld kennzeichnung ist sichtbar auszugeben (Paragraf 5a Abs. 4 UWG).';

revoke all on function public.coupon_werbeplatz() from public, anon;
revoke all on function app.dauerrabatt_prozent()  from public, anon;
grant execute on function public.coupon_werbeplatz() to authenticated;

-- ── Die Kundenansicht mit allen vier Preisen ───────────────────────────
-- Der Rueckgabetyp aendert sich, deshalb drop + create. Die Rechte werden
-- danach ausdruecklich neu gesetzt: `create` gibt PUBLIC sonst wieder das
-- Ausfuehrungsrecht, das Migration 20260902060051 entzogen hat.
drop function if exists public.active_bundles();
create function public.active_bundles()
returns table(
  id                uuid,
  code              text,
  title             text,
  description       text,
  price_gross       numeric,
  price_gross_abo   numeric,
  regular_gross     numeric,
  regular_gross_abo numeric,
  discount_percent  numeric,
  valid_from        date,
  valid_to          date,
  items             jsonb
)
language sql
stable
security definer
set search_path = public, app
as $$
  with rabatt as (select app.dauerrabatt_prozent() as p),
  roh as (
    select b.id, b.code, b.title, b.description, b.price_gross,
           b.valid_from, b.valid_to,
           (select sum(s.regular_line_gross) from public.bundle_split(b.id) s)
             as regular_gross,
           (select coalesce(jsonb_agg(jsonb_build_object(
                     'product_id',    s.product_id,
                     'name',          s.product_name,
                     'image_url',     s.image_url,
                     'quantity',      s.quantity,
                     'tax_rate',      s.tax_rate,
                     'regular_gross', s.regular_line_gross,
                     'share_percent', s.share_percent,
                     'bundle_gross',  s.bundle_line_gross,
                     'bundle_net',    s.bundle_line_net,
                     'bundle_vat',    s.bundle_line_vat
                   ) order by s.sort_order), '[]'::jsonb)
              from public.bundle_split(b.id) s) as items
      from public.bundles b
     where b.deleted_at is null
       and b.status = 'active'
       and b.valid_from <= current_date
       and (b.valid_to is null or b.valid_to >= current_date)
       and exists (select 1 from public.bundle_items bi where bi.bundle_id = b.id)
  )
  select r.id, r.code, r.title, r.description,
         r.price_gross,
         round(r.price_gross   * (1 - rabatt.p / 100), 2) as price_gross_abo,
         r.regular_gross,
         round(r.regular_gross * (1 - rabatt.p / 100), 2) as regular_gross_abo,
         rabatt.p as discount_percent,
         r.valid_from, r.valid_to, r.items
    from roh r cross join rabatt
   order by r.valid_from desc, r.title;
$$;

comment on function public.active_bundles() is
  'Kombiangebote fuer die Kundenansicht: Bundlepreis und Summe der '
  'Einzelpreise, jeweils mit und ohne Dauerrabatt, dazu Laufzeit und die '
  'Positionen in Anzeigereihenfolge. Der Client rechnet keinen Rabatt nach.';

revoke execute on function public.active_bundles() from public, anon;
grant  execute on function public.active_bundles() to authenticated, service_role;
