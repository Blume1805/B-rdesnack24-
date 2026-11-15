-- ============================================================================
-- Vorteile ohne Abo — Produktionslinie (COMPLIANCE V-018-a, Gegenstück zu
-- main 0065_free_benefits_for_all, Beschluss des Gesellschafters 16.09.2026)
--
-- Befund 03.11.2026: Landingpage und Nutzungsbedingungen v4 versprechen
-- Dauerrabatt, Coupons, Meilensteine und Statusstufen für jedes kostenlose
-- Konto. In der Produktion hingen genau diese Vorteile weiter an
-- app.has_subscription(), und Monats- und Jahresabo standen als
-- „Dauerangebot" in app.abo_angebotszeitraeume. Die Freischaltung aus 0065
-- war nur in die main-Linie (Testdatenbank) gelangt.
--
-- Diese Migration
--   1. legt den Schalter app.benefits_free_for_all() an (true; Spiegel von
--      Pricing.benefitsFreeForAll in der App) und das neue Gate
--      app.has_app_benefits(): registriertes Konto UND (Schalter oder Abo),
--   2. tauscht in den fünf Funktionen, die Vorteile gewähren, nur die
--      Abo-Prüfung gegen dieses Gate. Die Rümpfe sind sonst wörtlich die
--      letzte Fassung (Quellen unten), damit nichts anderes mitwandert,
--   3. beendet die Angebotszeiträume für Monats- und Jahresabo. Kein
--      Zeitraum heißt nicht wählbar (107_abo_angebotszeitraum). Umkehrbar
--      durch einen neuen Zeitraum, keine Zeile wird gelöscht.
--
-- app.has_subscription() bleibt unverändert und meldet weiter wahrheitsgemäß,
-- ob ein Abo gewählt wurde. Kein Tabellen- oder Spaltenwechsel, nichts wird
-- gelöscht.
--
-- Voraussetzung: 20260927200000_pfand_getrennt (kundenpreis in der Fassung
-- mit Pfand). Rollout: docs/OPERATIONS.md, Runbook N, nach Runbook M.
-- Nachweis: scripts/pruefumgebung/112_vorteile_ohne_abo.sql
--
-- Quellen der Rümpfe:
--   public.activate_offer            20260718121154_subscription_gating
--   app.grant_loyalty_bonuses        20260910215000_rabattdeckel_generatoren
--   public.card_entitlements         20260812075453_kundenkarte_token
--   public.kundenpreis               20260927200000_pfand_getrennt
--   public.my_subscription_benefits  20260910230000_bundle_coupon_darstellung
-- ============================================================================

do $$
begin
  if not exists (select 1 from information_schema.columns
                  where table_schema = 'public' and table_name = 'products'
                    and column_name = 'deposit') then
    raise exception 'Zuerst Runbook M (20260927200000_pfand_getrennt) ausrollen. Abbruch ohne Änderung.';
  end if;
end $$;

-- ── 1. Schalter und Gate ────────────────────────────────────────────────
create or replace function app.benefits_free_for_all()
returns boolean
language sql
immutable
as $$ select true $$;

comment on function app.benefits_free_for_all() is
  'Schalter: Vorteile (Dauerrabatt, Coupons, Meilensteine, Status) für jedes '
  'registrierte Konto, ohne Abo. Beschluss 16.09.2026. Spiegel von '
  'Pricing.benefitsFreeForAll in der App. false stellt das Abo-Gating wieder her.';

create or replace function app.has_app_benefits(p_customer uuid)
returns boolean
language sql
stable
security definer
set search_path = public, app
as $$
  select p_customer is not null
     and exists (select 1 from public.customers c where c.id = p_customer)
     and (app.benefits_free_for_all() or app.has_subscription(p_customer));
$$;

comment on function app.has_app_benefits(uuid) is
  'Gate aller Kundenvorteile: registriertes Konto und (Schalter oder Abo). '
  'Ersetzt app.has_subscription() als Vorteilsprüfung (COMPLIANCE V-018-a).';

revoke all on function app.has_app_benefits(uuid) from public, anon, authenticated;
revoke all on function app.benefits_free_for_all() from public, anon, authenticated;

-- ── 2. Die fünf Vorteilsfunktionen, nur das Gate getauscht ──────────────
create or replace function public.activate_offer(p_offer_id uuid)
returns public.offer_activations
language plpgsql
security definer
set search_path = public, app
as $$
declare v_row public.offer_activations;
begin
  if not app.has_app_benefits(auth.uid()) then
    raise exception 'Konto erforderlich: Coupons lassen sich nur mit einem Bördesnack24-Konto aktivieren.'
      using errcode = 'P0001';
  end if;
  insert into public.offer_activations(customer_id, offer_id)
  values (auth.uid(), p_offer_id)
  on conflict (customer_id, offer_id) do nothing;
  select * into v_row from public.offer_activations
    where customer_id = auth.uid() and offer_id = p_offer_id;
  return v_row;
end;
$$;


create or replace function app.grant_loyalty_bonuses(p_customer_id uuid)
returns integer
language plpgsql
security definer
set search_path to 'public', 'app'
as $function$
declare
  v_month_start date := date_trunc('month', app.heute())::date;
  v_gross       numeric(12,2);
  v_pts         int;
  v_granted     int := 0;
  v_tier        int;
  v_offer       public.personal_offers;
  v_product     public.products%rowtype;
  v_regular     numeric(12,2);
  v_discount    numeric(5,2);
begin
  if not app.has_app_benefits(p_customer_id) then
    return 0;
  end if;

  select coalesce(sum(total_gross), 0) into v_gross
  from public.purchases
  where customer_id = p_customer_id
    and business_id is null
    and purchased_at >= v_month_start;

  v_pts := floor(v_gross * 100)::int
         + app.login_points(p_customer_id, v_month_start)
         + app.challenge_points(p_customer_id, v_month_start);

  foreach v_tier in array app.loyalty_milestones() loop
    exit when v_pts < v_tier;
    if exists (
      select 1 from public.loyalty_bonus_grants
      where customer_id = p_customer_id
        and month_start = v_month_start
        and tier = v_tier
    ) then
      continue;
    end if;

    v_discount := case v_tier
      when 500  then  5.0
      when 1200 then 10.0
      when 2000 then 15.0
      when 3000 then 25.0
      else 5.0
    end;

    select p.* into v_product
    from public.products p
    join public.purchase_items pi on pi.product_id = p.id
    join public.purchases pu       on pu.id = pi.purchase_id
    where pu.customer_id = p_customer_id
      and pu.business_id is null
      and pu.purchased_at > now() - interval '90 days'
      and p.status = 'active' and p.list_price_net is not null
      and p.coupon_eligibility = 'normal'
    group by p.id
    order by sum(pi.quantity) desc, random()
    limit 1;

    if not found then
      select * into v_product
      from public.products
      where status = 'active' and list_price_net is not null and list_price_net > 0
        and coupon_eligibility = 'normal'
      order by random()
      limit 1;
    end if;
    if not found then continue; end if;

    v_regular := v_product.list_price_net;

    insert into public.personal_offers(
      customer_id, product_id, title,
      regular_price_net, offer_price_net, discount_percent,
      redemption_code, valid_from, valid_to, image_url, source
    ) values (
      p_customer_id, v_product.id, v_product.name,
      v_regular,
      round(v_regular * (1 - v_discount/100.0), 2),
      v_discount,
      app.generate_redemption_code(),
      now(),
      now() + interval '14 days',
      v_product.image_url,
      'loyalty'
    )
    returning * into v_offer;

    insert into public.loyalty_bonus_grants(customer_id, month_start, tier, offer_id)
    values (p_customer_id, v_month_start, v_tier, v_offer.id)
    on conflict do nothing;

    v_granted := v_granted + 1;
  end loop;

  return v_granted;
end;
$function$;


create or replace function public.card_entitlements(p_token text)
returns table(customer_number text, discount_percent int)
language sql
stable
security definer
set search_path = public, app
as $$
  select
    cu.customer_number,
    case when app.has_app_benefits(c.customer_id) then app.dauerrabatt_prozent()::int else 0 end
  from public.customer_card c
  left join public.customers cu on cu.id = c.customer_id
  where c.token = p_token;
$$;


create or replace function public.kundenpreis(p_machine uuid, p_product uuid, p_customer uuid default null)
returns table(automatenpreis numeric, dauerrabatt_prozent numeric,
              dauerrabatt_betrag numeric, coupon_prozent numeric,
              coupon_betrag numeric, endpreis numeric, herleitung jsonb,
              warenpreis numeric, pfand numeric)
language plpgsql
stable security definer
set search_path = public, app
as $$
declare
  v_kunde        uuid;
  v_automat      numeric;
  v_mhd_prozent  numeric;
  v_rest         integer;
  v_pfand        numeric := 0;
  v_dauer_p      numeric := 0;
  v_dauer_b      numeric := 0;
  v_coupon_p     numeric := 0;
  v_coupon_b     numeric := 0;
  v_zwischen     numeric;
  v_ende         numeric;
  v_hat_abo      boolean := false;
begin
  -- Die Kundenkennung IST die Auth-Kennung: public.customers.id verweist auf
  -- public.profiles.id. Es gibt keine zweite Zuordnung, und es darf auch
  -- keine geben — sonst entstehen zwei Wahrheiten darüber, wer jemand ist.
  --
  -- Fremde Konten sind tabu. Ein Kunde sieht nur den eigenen Preis; Personal
  -- darf jeden sehen. Ohne diese Prüfung wäre die Funktion ein
  -- Auskunftsdienst darüber, wer ein Abo hat.
  v_kunde := coalesce(p_customer, auth.uid());

  if v_kunde is distinct from auth.uid()
     and not public.auth_has_permission('customers.manage')
  then
    raise exception 'Kein Zugriff auf fremde Kundenpreise.'
      using errcode = '42501';
  end if;

  select a.brutto, a.mhd_abschlag_prozent, a.rest_tage, a.pfand
    into v_automat, v_mhd_prozent, v_rest, v_pfand
    from public.automatenpreis(p_machine, p_product) a;

  if v_automat is null then
    return;
  end if;

  -- Genau derselbe Helfer, den my_subscription_benefits benutzt. Eine zweite
  -- Abo-Prüfung wäre eine zweite Wahrheit darüber, wer Dauerrabatt bekommt.
  if v_kunde is not null then
    v_hat_abo := app.has_app_benefits(v_kunde);
  end if;

  if v_hat_abo then
    v_dauer_p := app.dauerrabatt_prozent();
  end if;

  -- Rabatte nur auf den Warenpreis, nie auf den Pfand (V-016).
  v_dauer_b  := round(v_automat * v_dauer_p / 100, 2);
  v_zwischen := v_automat - v_dauer_b;

  -- Coupons bleiben in dieser Migration bewusst bei 0: Welcher Coupon am
  -- Automaten gilt, entscheidet die Einlösung in vend_freigabe_anlegen(),
  -- nicht die Preisauskunft. Eine Auskunft, die einen Coupon einrechnet,
  -- den die Einlösung dann ablehnt, ist schlimmer als keine.
  v_coupon_b := round(v_zwischen * v_coupon_p / 100, 2);
  v_ende     := v_zwischen - v_coupon_b;

  -- endpreis ist der zu zahlende Betrag (Ware + Pfand) und bleibt damit,
  -- was vend_freigabe_anlegen als betrag_brutto kassiert. Für die Anzeige
  -- nach § 7 PAngV: warenpreis und pfand getrennt.
  return query select
    v_automat,
    v_dauer_p,
    v_dauer_b,
    v_coupon_p,
    v_coupon_b,
    v_ende + v_pfand,
    jsonb_build_object(
      'automatenpreis_brutto', v_automat,
      'mhd_abschlag_prozent',  v_mhd_prozent,
      'mhd_rest_tage',         v_rest,
      'dauerrabatt_prozent',   v_dauer_p,
      'dauerrabatt_betrag',    v_dauer_b,
      'coupon_prozent',        v_coupon_p,
      'coupon_betrag',         v_coupon_b,
      'warenpreis_brutto',     v_ende,
      'pfand_brutto',          v_pfand,
      'endpreis_brutto',       v_ende + v_pfand,
      'berechnet_am',          now()
    ),
    v_ende,
    v_pfand;
end;
$$;


create or replace function public.my_subscription_benefits()
returns jsonb
language sql
stable
security definer
set search_path = public, app
as $$
  select jsonb_build_object(
    'active',           app.has_subscription(auth.uid()),
    'benefits',         app.has_app_benefits(auth.uid()),
    'discount_percent', case when app.has_app_benefits(auth.uid())
                             then app.dauerrabatt_prozent() else 0 end,
    'period_end',       app.subscription_period_end(auth.uid()),
    'plan',             (select s.plan::text
                         from public.customer_subscriptions s
                         where s.customer_id = auth.uid()
                         order by s.seq desc
                         limit 1)
  );
$$;


comment on function public.card_entitlements(text) is
  'Automaten-Nachschlag: Kartenkennung → Kundennummer und Rabattsatz. '
  'Gibt keine Personendaten zurück. Dauerrabatt für jedes registrierte '
  'Konto (app.has_app_benefits, V-018-a).';

-- ── 3. Abo-Angebot beenden ──────────────────────────────────────────────
update app.abo_angebotszeitraeume
   set bis = now()
 where plan in ('monthly', 'yearly')
   and von < now()
   and (bis is null or bis > now());


-- ── 4. Kontolöschung darf an Treueboni nicht scheitern ──────────────────
-- Gefunden beim Nachweis dieser Migration (96_loeschprozess): Die Löschregel
-- löscht persönliche Angebote (`personal_offers`: loeschen), bewahrt aber den
-- Nachweis des gewährten Bonus acht Jahre auf (`loyalty_bonus_grants`:
-- aufbewahren). Der Fremdschlüssel loyalty_bonus_grants.offer_id hatte keine
-- Löschregel, also brach die Löschung eines Kontos mit Treuebonus ab
-- (Art. 17 DSGVO). Bisher fiel das nicht auf, weil ohne Abo nie ein Bonus
-- vergeben wurde. Mit Vorteilen für alle träfe es jedes aktive Konto.
--
-- Lösung ohne Datenverlust: Beim Löschen des Angebots bleibt der Nachweis
-- (Kunde, Monat, Stufe, Zeitpunkt) stehen, nur der Verweis wird leer. Die
-- Spalte ist bereits nullbar. Der tatsächlich eingelöste Rabatt steht
-- ohnehin auf dem Kaufbeleg.
alter table public.loyalty_bonus_grants
  drop constraint if exists loyalty_bonus_grants_offer_id_fkey;
alter table public.loyalty_bonus_grants
  add constraint loyalty_bonus_grants_offer_id_fkey
  foreign key (offer_id) references public.personal_offers(id) on delete set null;
