-- ===========================================================================
-- S-6: Die Volljährigkeit wird gegen das gespeicherte Geburtsdatum geprüft,
--      nicht mehr allein gegen ein Häkchen aus dem Browser.
--
-- Befund vom 02.09.2026: `choose_subscription_plan` prüfte ausschließlich
-- den übergebenen Wahrheitswert `p_age_consent`. Das am Profil
-- gespeicherte `birth_date` wurde nie gelesen. Im Test hat ein Konto mit
-- Geburtsdatum 05.05.2012 das Monatsabo zu 99 Cent abgeschlossen.
--
-- Ein Häkchen ist keine Umsetzung, sondern eine Anzeige: es kommt aus
-- derselben Hand, die es umgehen möchte. Geprüft wird deshalb ab jetzt
-- gegen ein Feld, das
--   * die Registrierung ohnehin verlangt (register_screen.dart, Pflichtfeld),
--   * nach der ersten Setzung unveränderlich ist
--     (Trigger `trg_profiles_birth_date_immutable`),
--   * und vom Kunden nicht nachträglich verstellt werden kann.
--
-- WAS DAMIT NICHT BEHAUPTET WIRD. Das Geburtsdatum ist eine
-- Selbstauskunft; ein Ausweis wird nicht geprüft. Die Schranke steigt
-- damit von „einmal tippen" auf „ein Datum angeben, das danach feststeht
-- und serverseitig geprüft wird". Für ein Snack-Abo ist das das
-- angemessene Mittel; eine Identitätsprüfung wäre für den Zweck
-- unverhältnismäßig. Diese Einordnung gehört in die
-- Datenschutzdokumentation, nicht in eine Zusicherung.
--
-- Die Projektentscheidung lautet: Loyalty kostenfrei für alle,
-- „Bördesnack24 Plus" nur für Volljährige. Ein Minderjähriger wird
-- deshalb abgewiesen und nicht auf eine Zustimmung der gesetzlichen
-- Vertreter verwiesen, die technisch nicht nachweisbar wäre.
--
-- Signatur und Rückgabe bleiben gleich, damit die Edge Function
-- `subscription-choose` unverändert weiterläuft.
-- ===========================================================================

create or replace function public.choose_subscription_plan(
  p_plan text,
  p_withdrawal_consent boolean default false,
  p_age_consent boolean default false
)
returns jsonb
language plpgsql
security definer
set search_path to 'public', 'app'
as $function$
declare
  v_uid      uuid := auth.uid();
  v_plan     app.subscription_plan;
  v_current  app.subscription_plan;
  v_price    int;
  v_label    text;
  v_taken    int;
  v_limit    int := app.lifetime_founders_limit();
  v_birth    date;
begin
  if v_uid is null then
    raise exception 'Nicht angemeldet' using errcode = '42501';
  end if;
  if not exists (select 1 from public.customers c where c.id = v_uid) then
    raise exception 'Nur Kundenkonten können ein Abo wählen' using errcode = '42501';
  end if;

  begin
    v_plan := p_plan::app.subscription_plan;
  exception when others then
    raise exception 'Unbekanntes Abo-Modell: %', p_plan;
  end;

  -- Altersschranke: erst das gespeicherte Datum, dann die Erklärung.
  -- Die Reihenfolge ist Absicht — wer minderjährig ist, soll nicht durch
  -- Setzen eines Häkchens weiterkommen.
  select p.birth_date into v_birth
    from public.profiles p where p.id = v_uid;

  if v_birth is null then
    raise exception
      'Für ein kostenpflichtiges Abo brauchen wir dein Geburtsdatum. '
      'Bitte trage es in deinen Stammdaten nach — es lässt sich danach '
      'nicht mehr ändern.'
      using errcode = 'P0001';
  end if;

  if v_birth > (current_date - interval '18 years') then
    raise exception
      'Bördesnack24 Plus ist volljährigen Kundinnen und Kunden vorbehalten. '
      'Alle kostenfreien Vorteile stehen dir weiterhin offen.'
      using errcode = '42501';
  end if;

  if not coalesce(p_age_consent, false) then
    raise exception 'Bitte bestätige, dass du volljährig bist oder mit Zustimmung deiner gesetzlichen Vertreter handelst.';
  end if;

  if v_plan = 'lifetime' and not coalesce(p_withdrawal_consent, false) then
    raise exception 'Für das Lifetime-Abo ist die Zustimmung zum Erlöschen des Widerrufsrechts erforderlich.';
  end if;

  select plan into v_current
  from public.customer_subscriptions
  where customer_id = v_uid
  order by seq desc
  limit 1;

  if v_current = 'lifetime' then
    raise exception 'Lifetime-Abo ist endgültig — kein Wechsel mehr möglich';
  end if;
  if v_current = v_plan then
    raise exception 'Dieses Abo-Modell ist bereits aktiv';
  end if;

  if v_plan = 'lifetime' then
    select count(distinct customer_id) into v_taken
    from public.customer_subscriptions
    where plan = 'lifetime';
    if v_taken >= v_limit then
      raise exception 'Die Lifetime Founders Edition ist ausverkauft (% von % Plätzen vergeben).',
        v_taken, v_limit;
    end if;
  end if;

  -- Preise stehen seit 0080 in app.subscription_plans, damit Web-App,
  -- native App und diese RPC dieselbe Quelle lesen.
  select sp.price_cents, sp.billing_label
    into v_price, v_label
    from app.subscription_plans sp
   where sp.plan::text = v_plan::text;
  if v_price is null then
    raise exception 'Unbekanntes Abo-Modell: %', v_plan;
  end if;

  insert into public.customer_subscriptions
    (customer_id, plan, price_cents, billing_label, previous_plan,
     withdrawal_consent, age_consent)
  values (v_uid, v_plan, v_price, v_label, v_current,
          coalesce(p_withdrawal_consent, false),
          coalesce(p_age_consent, false));

  return jsonb_build_object(
    'plan',          v_plan,
    'price_cents',   v_price,
    'billing_label', v_label,
    'previous_plan', v_current,
    'chosen_at',     now()
  );
end;
$function$;

comment on function public.choose_subscription_plan(text, boolean, boolean) is
  'Wählt ein kostenpflichtiges Abo. Preis kommt aus app.subscription_plans, '
  'Identität aus auth.uid(), Volljährigkeit aus profiles.birth_date '
  '(S-6, 02.09.2026). Das Häkchen p_age_consent bleibt als dokumentierte '
  'Erklärung erhalten, ersetzt die Prüfung aber nicht.';
