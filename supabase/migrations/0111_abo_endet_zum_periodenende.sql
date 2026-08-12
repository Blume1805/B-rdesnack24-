-- ============================================================================
-- 0111 · Der Rabatt läuft bis zum Periodenende, nicht bis zur Kündigung
-- ----------------------------------------------------------------------------
-- Korrektur an Migration 0109 und Nachtrag zu 0048.
--
-- Präzisierung des Auftraggebers vom 12.08.2026:
--
--   „Wenn der Kunde kündigt, entfällt der 5 % Dauerrabatt mit Ablauf des
--    Abos. Beispiel: Monatsabo läuft bis 25.08.26, Kunde kündigt zum
--    25.08.26 — dann entfällt der Dauerrabatt ab 26.08.26. Bereits
--    erhaltene Gutscheine, die noch nicht eingelöst wurden, bleiben aber
--    bestehen."
--
-- 0109 hatte den EINGANG der Kündigung als Stichtag genommen und das
-- ausdrücklich als die strengere Auslegung gekennzeichnet — mangels
-- Enddatum. Das war zu streng: Wer bis zum 25. bezahlt hat, hat bis zum
-- 25. Anspruch. Sofortiges Abschalten wäre eine Vertragsverletzung.
--
-- ----------------------------------------------------------------------------
-- Der Folgefehler, den die zweite Vorgabe aufgedeckt hat
--
-- `activate_personal_offer()` war seit 0048 an `app.has_subscription()`
-- gekoppelt. Damit hätte ein Kunde nach Aboende einen Gutschein, den er
-- noch im Abo erhalten hat, NICHT mehr einlösen können — obwohl er ihm
-- zusteht. Der Gutschein wäre sichtbar, aber tot.
--
-- Die Unterscheidung, die hier eingezogen wird:
--
--   * `activate_offer` — allgemeine Wochen-/Aktionscoupons. Ein laufender
--     Vorteil, den man mit dem Abo bezieht. Bleibt gesperrt.
--   * `activate_personal_offer` — ein Gutschein, der diesem Kunden bereits
--     persönlich gewährt wurde. Seine Existenz IST der Anspruch. Die
--     Abo-Prüfung fällt weg.
--
-- Ein persönliches Angebot entsteht ohnehin nur, während ein Abo läuft
-- (`grant_loyalty_bonuses` prüft das), und es trägt sein eigenes
-- Ablaufdatum in `valid_to` — 14 Tage. „Bleibt bestehen" ist damit von
-- selbst begrenzt und braucht keine zusätzliche Frist.
--
-- Heute sind davon null Zeilen betroffen: `personal_offers` ist leer.
-- Repariert wird es trotzdem jetzt, weil der Fehler sonst erst auffällt,
-- wenn ein echter Kunde vor einem toten Gutschein steht.
--
-- ----------------------------------------------------------------------------
-- Wie das Periodenende bestimmt wird
--
-- Vorrang hat das Store-Abo: Apple und Google liefern mit `expires_at`
-- das verbindliche Ende. Solange dort nichts steht (heute: null Zeilen),
-- wird es aus dem Abrechnungsrhythmus gerechnet.
--
-- Monatsabo: Startdatum + so viele Monate, dass das Ergebnis nach dem
-- Kündigungseingang liegt. Beispiel aus der Vorgabe — gewählt am 25.07.,
-- gekündigt am 10.08.: 25.07. + 1 Monat = 25.08. Der Rabatt gilt bis
-- einschliesslich 25.08., ab dem 26.08. nicht mehr. Genau so gerechnet.
--
-- Jahresabo entsprechend in Jahren.
--
-- Lifetime hat keinen Abrechnungszeitraum — eine Einmalzahlung ohne
-- Verlängerung endet nicht. Eine Kündigung läuft dort ins Leere; der Fall
-- gehört auf den Tisch eines Menschen, dafür gibt es
-- `cancellation_requests.processed_at`.
--
-- ----------------------------------------------------------------------------
-- Warum nicht `cancellation_requests.cancel_at`
--
-- Weil dort Text steht. Der einzige vorhandene Eintrag lautet „zum
-- nächstmöglichen Zeitpunkt". Daraus lässt sich kein Datum rechnen. Das
-- Feld bleibt, was es ist: die Willenserklärung des Kunden im Wortlaut,
-- für die Bestätigung nach § 312k BGB. Gerechnet wird mit dem
-- Eingangszeitpunkt und dem Rhythmus.
-- ============================================================================

-- ----------------------------------------------------------------------------
-- Ende des bezahlten Zeitraums. NULL heisst: kein Ende in Sicht.
-- ----------------------------------------------------------------------------
create or replace function app.subscription_period_end(p_customer uuid)
returns date
language plpgsql
stable
set search_path = public, app
as $$
declare
  v_store_end   date;
  v_store_found boolean := false;
  v_plan        text;
  v_chosen      timestamptz;
  v_cancelled   timestamptz;
  v_perioden    int;
begin
  -- Das Store-Abo ist massgeblich, sobald es eines gibt. `expires_at` darf
  -- dabei NULL sein (unbefristet) — deshalb ein eigenes Fundkennzeichen
  -- statt einer NULL-Prüfung auf dem Datum.
  select s.expires_at::date, true
    into v_store_end, v_store_found
  from public.store_subscription s
  where s.profile_id = p_customer
    and s.environment = 'production'
    and s.revoked_at is null
  order by s.expires_at desc nulls first
  limit 1;

  if v_store_found then
    return v_store_end;
  end if;

  select s.plan::text, s.chosen_at
    into v_plan, v_chosen
  from public.customer_subscriptions s
  where s.customer_id = p_customer
  order by s.seq desc
  limit 1;

  if v_plan is null then
    return null;                      -- kein Abo gewählt
  end if;

  if v_plan = 'lifetime' then
    return null;                      -- Einmalzahlung, kein Zeitraum
  end if;

  select min(r.requested_at)
    into v_cancelled
  from public.cancellation_requests r
  where r.customer_id = p_customer
    and r.requested_at > v_chosen;

  if v_cancelled is null then
    return null;                      -- nicht gekündigt, läuft weiter
  end if;

  if v_plan = 'monthly' then
    v_perioden := extract(year  from age(v_cancelled, v_chosen))::int * 12
                + extract(month from age(v_cancelled, v_chosen))::int;
    return (v_chosen + ((v_perioden + 1) * interval '1 month'))::date;
  end if;

  -- yearly
  v_perioden := extract(year from age(v_cancelled, v_chosen))::int;
  return (v_chosen + ((v_perioden + 1) * interval '1 year'))::date;
end;
$$;

comment on function app.subscription_period_end(uuid) is
  'Letzter Tag mit Abo-Vorteilen. NULL = kein Ende (nicht gekündigt, '
  'Lifetime oder kein Abo). Store-Abo hat Vorrang vor der Berechnung.';

-- ----------------------------------------------------------------------------
-- Abo-Anspruch: bezahlter Zeitraum läuft noch.
-- ----------------------------------------------------------------------------
-- Zwei Zweige, weil ein Store-Abo auch ohne App-Zeile bestehen kann —
-- etwa wenn der Kauf direkt im Store getätigt wurde.
create or replace function app.has_subscription(p_customer uuid)
returns boolean
language sql
stable
set search_path = public, app
as $$
  select
    public.has_paid_subscription(p_customer)
    or (
      exists (
        select 1 from public.customer_subscriptions s
        where s.customer_id = p_customer
      )
      and coalesce(
            current_date <= app.subscription_period_end(p_customer),
            true          -- kein Ende bestimmt = läuft weiter
          )
    );
$$;

comment on function app.has_subscription(uuid) is
  'True, solange der bezahlte Zeitraum läuft. Nach einer Kündigung endet '
  'der Anspruch mit dem Periodenende, nicht mit dem Kündigungseingang. '
  'Bewacht activate_offer, grant_loyalty_bonuses und den Rabattsatz in '
  'card_entitlements.';

-- ----------------------------------------------------------------------------
-- Bereits gewährte Gutscheine bleiben einlösbar.
-- ----------------------------------------------------------------------------
-- Volle Neudefinition von 0048, ohne die Abo-Prüfung. Der Gutschein
-- existiert nur, weil er im laufenden Abo gewährt wurde — seine Existenz
-- ist der Anspruch. Sein `valid_to` begrenzt ihn ohnehin.
create or replace function public.activate_personal_offer(p_offer_id uuid)
returns public.personal_offers
language plpgsql
security definer
set search_path = public, app
as $$
declare v_row public.personal_offers;
begin
  update public.personal_offers
    set activated_at = coalesce(activated_at, now())
    where id = p_offer_id and customer_id = auth.uid()
    returning * into v_row;
  return v_row;
end;
$$;

comment on function public.activate_personal_offer(uuid) is
  'Aktiviert einen bereits gewährten persönlichen Gutschein. BEWUSST ohne '
  'Abo-Prüfung: Wer den Gutschein im Abo erhalten hat, darf ihn auch nach '
  'Aboende einlösen, solange valid_to läuft. Die Bedingung '
  'customer_id = auth.uid() bleibt die Absicherung.';
