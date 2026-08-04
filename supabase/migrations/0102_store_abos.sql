-- ============================================================================
-- 0102 · Abos aus App Store und Play Store
-- ----------------------------------------------------------------------------
-- Entscheidung vom 04.08.2026: Bezahlt wird ausschliesslich über die beiden
-- Läden, kein eigener Zahlungsanbieter.
--
-- Damit entfallen neun E-Mail-Vorlagen — Apple und Google verschicken Beleg,
-- Zahlungsmeldung und Verlängerungshinweis selbst. Was **nicht** entfällt,
-- ist die Anbindung. Das wird beim Planen von In-App-Käufen am ehesten
-- übersehen, deshalb hier ausdrücklich:
--
--   * Jemand kündigt im App Store. Ohne Benachrichtigung erfährt die
--     Datenbank davon nichts und die App gewährt weiter Premium.
--   * Apple erstattet eine Zahlung. Ohne Benachrichtigung steht der Umsatz
--     weiter in der Auswertung, obwohl das Geld zurück ist.
--   * Eine Verlängerung scheitert. Ohne Benachrichtigung läuft der Rabatt
--     am Automaten weiter, ohne dass jemand dafür zahlt.
--
-- Der Laden ist ab jetzt die Wahrheit darüber, **ob und bis wann bezahlt
-- ist**. Diese Migration schafft den Platz, wo diese Wahrheit landet.
--
-- ----------------------------------------------------------------------------
-- Warum eine eigene Tabelle und nicht `customer_subscriptions`
--
-- `customer_subscriptions` beantwortet eine andere Frage, und die bleibt
-- wichtig: **Was hat der Kunde gewählt und wozu hat er zugestimmt?** Dort
-- stehen `withdrawal_consent` und `age_consent`, dort hängt die
-- Lifetime-Sperre, dort ist es bewusst ein Protokoll, das nur wächst.
--
-- `store_subscription` beantwortet: **Ist bis wann bezahlt?** Das ist keine
-- Entscheidung des Kunden, sondern eine Tatsache des Ladens, und sie ändert
-- sich ohne unser Zutun.
--
-- Die beiden zusammenzulegen wäre verlockend und falsch. Eine Erstattung
-- durch Apple würde dann eine Zeile im Einwilligungsprotokoll ändern, und
-- eine Zustimmung zum Erlöschen des Widerrufsrechts hinge plötzlich am
-- Zahlungsstand.
--
-- ----------------------------------------------------------------------------
-- Die zwei Fallen bei Store-Benachrichtigungen
--
-- 1. **Sie kommen mehrfach.** Beide Läden wiederholen, bis sie eine 200
--    sehen. Ein Netzwerkfehler nach dem Verarbeiten erzeugt also eine
--    zweite Zustellung derselben Sache. Deshalb ein eindeutiger Schlüssel
--    je Benachrichtigung (Apple: `notificationUUID`, Google:
--    `messageId`) und ein Verarbeiten, das beim zweiten Mal nichts tut.
--
-- 2. **Sie kommen in falscher Reihenfolge.** Das ist die unangenehmere.
--    Eine wiederholte `EXPIRED` kann NACH der `DID_RENEW` ankommen, die
--    sie eigentlich abgelöst hat. Wer stumpf den letzten Stand schreibt,
--    setzt ein laufendes Abo auf abgelaufen — und der Kunde verliert
--    seinen Rabatt, obwohl er bezahlt hat.
--
--    Dagegen hilft nur, den Zeitstempel des Ladens mitzuführen und
--    ältere Nachrichten zu verwerfen. Genau das macht
--    `store_notification_apply` weiter unten.
-- ============================================================================

-- ----------------------------------------------------------------------------
-- 1) Der Stand je Abo beim Laden
-- ----------------------------------------------------------------------------
create table if not exists public.store_subscription (
  id          uuid primary key default gen_random_uuid(),
  profile_id  uuid references public.profiles(id) on delete set null,

  store       text not null check (store in ('apple','google')),

  -- Der dauerhafte Schlüssel des Abos beim Laden. Bei Apple die
  -- `originalTransactionId`, bei Google der `purchaseToken`. Er überlebt
  -- Verlängerungen — die Transaktions-Id je Abbuchung tut das nicht und
  -- taugt deshalb nicht als Schlüssel.
  store_ref   text not null,

  product_id  text not null,

  status      text not null default 'unknown'
              check (status in ('unknown','active','in_grace','on_hold',
                                'paused','expired','revoked','refunded')),

  -- Bis wann bezahlt ist. Das Feld, an dem der Zugang hängt.
  expires_at  timestamptz,
  auto_renew  boolean,

  -- Sandkasten-Käufe dürfen NIE echten Zugang geben. Ein Testkauf aus der
  -- Entwicklung sonst einen kostenlosen Dauerrabatt.
  environment text not null default 'production'
              check (environment in ('sandbox','production')),

  purchased_at timestamptz,
  cancelled_at timestamptz,
  revoked_at   timestamptz,

  -- Der Zeitstempel des Ladens zur zuletzt angewandten Nachricht. Trägt
  -- den Schutz gegen vertauschte Reihenfolge.
  last_event_at        timestamptz,
  last_notification    text,

  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now(),

  unique (store, store_ref)
);

create index if not exists store_subscription_profil_idx
  on public.store_subscription (profile_id);
create index if not exists store_subscription_ablauf_idx
  on public.store_subscription (expires_at) where status in ('active','in_grace');

comment on table public.store_subscription is
  'Was der Laden über das Abo sagt: ob und bis wann bezahlt ist. Die Frage, '
  'was der Kunde gewählt und wozu er zugestimmt hat, beantwortet weiterhin '
  'customer_subscriptions — das sind zwei Dinge und bleiben getrennt.';

alter table public.store_subscription enable row level security;
revoke all on public.store_subscription from anon, authenticated;

drop policy if exists store_sub_read on public.store_subscription;
create policy store_sub_read on public.store_subscription
  for select to authenticated
  using (
    profile_id = (select auth.uid())
    or public.is_internal((select auth.uid()))
  );
grant select on public.store_subscription to authenticated;

-- ----------------------------------------------------------------------------
-- 2) Jede eingehende Benachrichtigung, roh und vollständig
--
-- Auch die, die verworfen wird. Wenn später etwas nicht stimmt, ist die
-- Frage immer „was hat der Laden eigentlich geschickt" — und die lässt sich
-- nur beantworten, wenn es noch da ist.
-- ----------------------------------------------------------------------------
create table if not exists public.store_notification (
  id            uuid primary key default gen_random_uuid(),
  store         text not null check (store in ('apple','google')),

  -- Apple: notificationUUID · Google: messageId. Trägt die Wiederholungs-
  -- sicherheit.
  notification_id text not null,

  notification_type text,
  subtype           text,
  store_ref         text,
  event_at          timestamptz,

  -- 'applied' · 'duplicate' · 'stale' · 'unmatched' · 'error'
  outcome       text not null,
  note          text,

  raw           jsonb not null,
  received_at   timestamptz not null default now(),

  unique (store, notification_id)
);

create index if not exists store_notification_ref_idx
  on public.store_notification (store, store_ref, event_at desc);

alter table public.store_notification enable row level security;
revoke all on public.store_notification from anon, authenticated;

drop policy if exists store_notif_read on public.store_notification;
create policy store_notif_read on public.store_notification
  for select to authenticated
  using (public.is_internal((select auth.uid())));
grant select on public.store_notification to authenticated;

-- ----------------------------------------------------------------------------
-- 3) Anwenden — wiederholungs- und reihenfolgefest
-- ----------------------------------------------------------------------------
create or replace function public.store_notification_apply(
  p_store             text,
  p_notification_id   text,
  p_notification_type text,
  p_subtype           text,
  p_store_ref         text,
  p_product_id        text,
  p_status            text,
  p_expires_at        timestamptz,
  p_auto_renew        boolean,
  p_environment       text,
  p_event_at          timestamptz,
  p_raw               jsonb
)
returns text
language plpgsql
security definer
set search_path to 'public', 'app'
as $function$
declare
  v_vorher_event timestamptz;
  v_profil       uuid;
  v_ergebnis     text;
begin
  if p_store not in ('apple','google') then
    raise exception 'Unbekannter Laden: %', p_store;
  end if;

  -- ── Falle 1: schon gesehen? ─────────────────────────────────────────
  -- Der eindeutige Schlüssel macht das Wiedereinspielen harmlos. Wichtig
  -- ist, hier NICHT zu scheitern: Der Laden würde sonst weiter wiederholen.
  if exists (select 1 from public.store_notification
              where store = p_store and notification_id = p_notification_id) then
    return 'duplicate';
  end if;

  select last_event_at, profile_id
    into v_vorher_event, v_profil
    from public.store_subscription
   where store = p_store and store_ref = p_store_ref;

  -- ── Falle 2: älter als das, was schon steht? ────────────────────────
  -- `v_vorher_event is not null and p_event_at is not null and
  --  p_event_at < v_vorher_event` — alle drei Teile nötig. Fehlt einer,
  --  greift die Prüfung bei einer noch unbekannten Zeile nicht und die
  --  erste Nachricht würde verworfen.
  if v_vorher_event is not null
     and p_event_at is not null
     and p_event_at < v_vorher_event then
    v_ergebnis := 'stale';
  else
    insert into public.store_subscription
      (profile_id, store, store_ref, product_id, status, expires_at,
       auto_renew, environment, last_event_at, last_notification, updated_at)
    values
      (v_profil, p_store, p_store_ref, p_product_id,
       coalesce(p_status, 'unknown'), p_expires_at, p_auto_renew,
       coalesce(p_environment, 'production'), p_event_at, p_notification_type,
       now())
    on conflict (store, store_ref) do update set
      product_id        = excluded.product_id,
      status            = excluded.status,
      expires_at        = excluded.expires_at,
      auto_renew        = excluded.auto_renew,
      environment       = excluded.environment,
      last_event_at     = excluded.last_event_at,
      last_notification = excluded.last_notification,
      cancelled_at      = case when excluded.auto_renew is false
                                 and store_subscription.cancelled_at is null
                               then now()
                               else store_subscription.cancelled_at end,
      revoked_at        = case when excluded.status in ('revoked','refunded')
                               then now()
                               else store_subscription.revoked_at end,
      updated_at        = now();

    v_ergebnis := case when v_profil is null then 'unmatched' else 'applied' end;
  end if;

  insert into public.store_notification
    (store, notification_id, notification_type, subtype, store_ref,
     event_at, outcome, raw)
  values
    (p_store, p_notification_id, p_notification_type, p_subtype, p_store_ref,
     p_event_at, v_ergebnis, coalesce(p_raw, '{}'::jsonb));

  return v_ergebnis;
end;
$function$;

comment on function public.store_notification_apply is
  'Nimmt eine Store-Benachrichtigung entgegen. Wiederholungen ergeben '
  '"duplicate", vertauschte Reihenfolge "stale" — beides ohne Fehler, damit '
  'der Laden aufhört zu wiederholen.';

-- ----------------------------------------------------------------------------
-- 4) Kauf einem Konto zuordnen
--
-- Der Laden weiss nicht, wer bei uns angemeldet ist. Die Verknüpfung
-- entsteht in der App: Nach dem Kauf meldet sie den Schlüssel des Ladens.
-- Bis dahin steht die Zeile mit `profile_id is null` — deshalb der Ausgang
-- 'unmatched' oben, damit man sieht, dass etwas bezahlt, aber noch nicht
-- zugeordnet ist.
-- ----------------------------------------------------------------------------
create or replace function public.store_subscription_claim(
  p_store     text,
  p_store_ref text
)
returns boolean
language plpgsql
security definer
set search_path to 'public', 'app'
as $function$
declare
  v_uid    uuid := auth.uid();
  v_bisher uuid;
begin
  if v_uid is null then
    raise exception 'Nicht angemeldet';
  end if;
  if p_store not in ('apple','google') then
    raise exception 'Unbekannter Laden: %', p_store;
  end if;

  select profile_id into v_bisher
    from public.store_subscription
   where store = p_store and store_ref = p_store_ref;

  if not found then
    -- Die Benachrichtigung des Ladens kann noch unterwegs sein. Die Zeile
    -- wird angelegt und beim Eintreffen ergänzt — nicht umgekehrt, sonst
    -- ginge die Zuordnung verloren.
    insert into public.store_subscription
      (profile_id, store, store_ref, product_id, status)
    values (v_uid, p_store, p_store_ref, 'unbekannt', 'unknown');
    return true;
  end if;

  -- Einen fremden Kauf darf niemand an sich ziehen. Das ist der Grund für
  -- diese Prüfung: Ohne sie liesse sich mit einem abgeschriebenen Schlüssel
  -- ein bezahltes Abo übernehmen.
  if v_bisher is not null and v_bisher <> v_uid then
    raise exception 'Dieser Kauf gehört bereits zu einem anderen Konto';
  end if;

  update public.store_subscription
     set profile_id = v_uid, updated_at = now()
   where store = p_store and store_ref = p_store_ref;

  return true;
end;
$function$;

-- ----------------------------------------------------------------------------
-- 5) Die Frage, auf die es ankommt: hat diese Person Zugang?
-- ----------------------------------------------------------------------------
create or replace function public.has_paid_subscription(p_profile uuid)
returns boolean
language sql
stable
security definer
set search_path to 'public', 'app'
as $function$
  select exists (
    select 1 from public.store_subscription s
     where s.profile_id = p_profile
       -- Sandkasten gibt nie echten Zugang.
       and s.environment = 'production'
       and s.status in ('active','in_grace')
       -- `expires_at is null` gilt als gültig: Einmalkäufe (Lifetime)
       -- laufen nicht ab und tragen deshalb kein Ablaufdatum.
       and (s.expires_at is null or s.expires_at > now())
       and s.revoked_at is null
  );
$function$;

create or replace function public.my_store_subscription()
returns table (
  store       text,
  product_id  text,
  status      text,
  expires_at  timestamptz,
  auto_renew  boolean,
  bezahlt     boolean
)
language sql
stable
security definer
set search_path to 'public', 'app'
as $function$
  select s.store, s.product_id, s.status, s.expires_at, s.auto_renew,
         (s.environment = 'production'
          and s.status in ('active','in_grace')
          and (s.expires_at is null or s.expires_at > now())
          and s.revoked_at is null)
    from public.store_subscription s
   where s.profile_id = (select auth.uid())
   order by s.updated_at desc;
$function$;

-- ----------------------------------------------------------------------------
-- 6) Die neun Vorlagen, die Apple und Google übernehmen
-- ----------------------------------------------------------------------------
update public.email_templates
   set is_active = false,
       precondition =
         'Entfällt: Bezahlt wird über App Store und Play Store, und beide '
         'verschicken Beleg, Zahlungsmeldung und Verlängerungshinweis '
         'selbst. Eine zweite Mail von uns zur selben Sache wäre doppelt '
         'und im Zweifel widersprüchlich. Wird nur gebraucht, falls doch '
         'einmal ein eigener Zahlungsweg dazukommt — etwa für die Web-App, '
         'wo weder Apple noch Google kassieren kann.'
 where key in (
   'abo_rechnung',
   'abo_zahlung_erfolgreich',
   'abo_zahlung_fehlgeschlagen',
   'abo_zahlungsmittel_laeuft_ab',
   'abo_zahlungsmittel_geaendert',
   'abo_verlaengert',
   'abo_test_beginnt',
   'abo_test_endet_bald',
   'abo_test_beendet'
 );

-- ----------------------------------------------------------------------------
-- 7) Rechte
-- ----------------------------------------------------------------------------
revoke all on function public.store_notification_apply(
  text,text,text,text,text,text,text,timestamptz,boolean,text,timestamptz,jsonb)
  from public, anon, authenticated;
revoke all on function public.has_paid_subscription(uuid) from public, anon, authenticated;
revoke all on function public.store_subscription_claim(text,text) from public, anon;
revoke all on function public.my_store_subscription() from public, anon;

grant execute on function public.store_subscription_claim(text,text) to authenticated;
grant execute on function public.my_store_subscription() to authenticated;
