-- ============================================================================
-- 0109 · Gekündigt heisst: keine Abo-Vorteile mehr
-- ----------------------------------------------------------------------------
-- Geschäftsentscheidung des Auftraggebers vom 12.08.2026: Wer kündigt, soll
-- keine Loyalty-Gutscheine mehr bekommen.
--
-- Die Absicht stand seit Migration 0048 im Kommentar — „Monats-/Jahres-Abo
-- gelten als aktiv, solange keine Kündigung verarbeitet wurde" —, umgesetzt
-- war sie nie. `app.has_subscription()` prüfte nur, ob überhaupt jemals ein
-- Modell gewählt wurde. Eine Zeile in `customer_subscriptions` genügte, für
-- immer. Genau die Sorte Lücke, bei der die Absicht im Kommentar steht und
-- das Ergebnis im Code fehlt.
--
-- ----------------------------------------------------------------------------
-- Warum an dieser einen Funktion und nicht nur bei Loyalty
--
-- `app.has_subscription()` bewacht drei Dinge: `activate_offer`,
-- `activate_personal_offer` und `grant_loyalty_bonuses`. Es wäre nicht
-- erklärbar, dass ein gekündigter Kunde keine Meilenstein-Gutscheine mehr
-- bekommt, aber weiterhin Coupons aktivieren darf. Die Regel gilt für alle
-- Abo-Vorteile.
--
-- ----------------------------------------------------------------------------
-- Die Regel, und warum sie in beiden Welten stimmt
--
-- Aktiv ist, wer EINES von beidem hat:
--
--   1. Ein echtes bezahltes Store-Abo (`public.has_paid_subscription`).
--      Das prüft `store_subscription` auf `active`/`in_grace`, nicht
--      abgelaufen, nicht widerrufen. Sobald die Abrechnung über Apple und
--      Google läuft, ist das die massgebliche Quelle — und sie endet von
--      selbst zum bezahlten Zeitraumsende.
--
--   2. Ein in der App gewähltes Modell, zu dem KEINE Kündigung vorliegt,
--      die nach der Wahl eingegangen ist.
--
-- Die Reihenfolge ist wichtig, und sie löst das rechtliche Problem: Eine
-- ordentliche Kündigung wirkt zum Ende des Abrechnungszeitraums. Wer bis
-- dahin bezahlt hat, hat bis dahin Anspruch auf die Vorteile — sie sofort
-- abzuschalten wäre eine Vertragsverletzung. Genau das verhindert Zweig 1:
-- Solange das Store-Abo läuft, bleibt der Zugang bestehen, unabhängig von
-- der Kündigungsanfrage.
--
-- Heute greift ausschliesslich Zweig 2, denn `store_subscription` hat null
-- Zeilen und die Abo-Wahl in der App ist laut Zahlungsinformationen eine
-- unverbindliche Vormerkung ohne Abbuchung. Es zahlt also niemand, und
-- sofortiges Abschalten schadet niemandem.
--
-- Wer nach einer Kündigung erneut ein Modell wählt, ist wieder aktiv: Die
-- neue Zeile hat ein späteres `chosen_at` als die Kündigung.
--
-- ----------------------------------------------------------------------------
-- Was diese Migration NICHT kann, und das ist wichtig
--
-- `cancellation_requests.cancel_at` ist eine **Textspalte**. Der einzige
-- vorhandene Eintrag lautet „zum nächstmöglichen Zeitpunkt". Daraus lässt
-- sich kein Datum berechnen. Es gibt in der Datenbank auch sonst keinen
-- Zustand „Abo beendet" — `customer_subscriptions` wird nur angehängt, hat
-- weder Enddatum noch Status, und `processed_at` wird von Hand gesetzt.
--
-- Diese Migration behandelt deshalb den **Eingang** der Kündigung als
-- Stichtag, nicht ihr Wirksamwerden. Das ist bewusst die strengere
-- Auslegung und deckt sich mit dem Wunsch des Auftraggebers. Sauber wird es
-- erst mit einem echten Enddatum am Abo — das kommt mit der
-- Store-Abrechnung, die diesen Zustand ohnehin mitliefert.
--
-- Zwei Fälle, die man kennen sollte:
--   * Eine versehentliche oder unbegründete Kündigungsanfrage schaltet die
--     Vorteile sofort ab. Rückgängig macht man das, indem der Kunde erneut
--     ein Modell wählt.
--   * Beim Lifetime-Abo ist eine Kündigung inhaltlich sinnlos (Einmalzahlung
--     ohne Verlängerung). Eine Anfrage würde die Vorteile trotzdem beenden.
--     Bewusst nicht ausgenommen: Wenn jemand ausdrücklich kündigt, wird das
--     nicht stillschweigend ignoriert — der Fall gehört auf den Tisch eines
--     Menschen, und dafür gibt es `cancellation_requests.processed_at`.
-- ============================================================================

create or replace function app.has_subscription(p_customer uuid)
returns boolean
language sql
stable
set search_path = public, app
as $$
  select
    -- Zweig 1: echtes bezahltes Store-Abo. Endet von selbst zum bezahlten
    -- Zeitraumsende und hat deshalb Vorrang vor der Kündigungsanfrage.
    public.has_paid_subscription(p_customer)
    or
    -- Zweig 2: in der App gewähltes Modell ohne spätere Kündigung.
    exists (
      select 1
      from public.customer_subscriptions s
      where s.customer_id = p_customer
        and s.seq = (
          select max(s2.seq)
          from public.customer_subscriptions s2
          where s2.customer_id = p_customer
        )
        and not exists (
          select 1
          from public.cancellation_requests r
          where r.customer_id = p_customer
            and r.requested_at > s.chosen_at
        )
    );
$$;

comment on function app.has_subscription(uuid) is
  'True, wenn der Kunde Anspruch auf die Abo-Vorteile hat: entweder ein '
  'laufendes bezahltes Store-Abo, oder ein in der App gewähltes Modell, zu '
  'dem keine spätere Kündigung vorliegt. Bewacht activate_offer, '
  'activate_personal_offer und grant_loyalty_bonuses.';
