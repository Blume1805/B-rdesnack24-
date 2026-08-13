-- ============================================================================
-- 0112 · Die Frontends dürfen fragen, ob die Abo-Vorteile gelten
-- ----------------------------------------------------------------------------
-- Anlass: Das Web-Frontend soll den 5-%-Dauerrabatt nur denen anzeigen, die
-- ihn tatsächlich haben. Bisher gab es dafür keine aufrufbare Quelle —
-- `app.has_subscription()` liegt im `app`-Schema und ist für Clients nicht
-- erreichbar, `my_subscription()` kennt die Kündigung nicht.
--
-- Ohne diese Funktion bliebe dem Frontend nur, die Regel selbst
-- nachzubauen: neueste Zeile aus `customer_subscriptions`, Kündigungen
-- dagegenhalten, Periodenende rechnen. Damit gäbe es die Regel zweimal —
-- einmal in der Datenbank, einmal im Frontend — und beim nächsten
-- Kündigungsdetail laufen sie auseinander. Genau davor bewahrt eine
-- gemeinsame Quelle.
--
-- Gibt bewusst nur zurück, was für die Anzeige nötig ist. Der Rabattsatz
-- kommt aus derselben Prüfung wie am Automaten (`card_entitlements`) und
-- bei den Loyalty-Gutscheinen — es gibt eine Regel, nicht drei.
-- ============================================================================

create or replace function public.my_subscription_benefits()
returns jsonb
language sql
stable
security definer
set search_path = public, app
as $$
  select jsonb_build_object(
    -- Läuft der bezahlte Zeitraum noch?
    'active',           app.has_subscription(auth.uid()),
    -- Dauerrabatt in Prozent. 0, wenn kein Anspruch besteht.
    'discount_percent', case when app.has_subscription(auth.uid()) then 5 else 0 end,
    -- Letzter Tag mit Vorteilen. NULL heisst: kein Ende in Sicht —
    -- nicht gekündigt, Lifetime, oder gar kein Abo. Zusammen mit
    -- `active` ist das eindeutig: active=false und period_end=null
    -- bedeutet „nie eines gehabt".
    'period_end',       app.subscription_period_end(auth.uid()),
    -- Das zuletzt gewählte Modell, für die Anzeige.
    'plan',             (select s.plan::text
                         from public.customer_subscriptions s
                         where s.customer_id = auth.uid()
                         order by s.seq desc
                         limit 1)
  );
$$;

comment on function public.my_subscription_benefits() is
  'Abo-Vorteile des angemeldeten Kunden: active, discount_percent, '
  'period_end, plan. Einzige Quelle für die Anzeige des Dauerrabatts — '
  'damit die Regel nicht im Frontend nachgebaut wird.';

revoke all on function public.my_subscription_benefits() from public, anon;
grant execute on function public.my_subscription_benefits() to authenticated;
