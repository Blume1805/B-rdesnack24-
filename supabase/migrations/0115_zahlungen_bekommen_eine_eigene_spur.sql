-- ============================================================================
-- 0115 · Geld bekommt eine eigene Spur
-- ----------------------------------------------------------------------------
-- Schritt 2 des Fahrplans zum Vier-Säulen-Modell. Freigabe vom 21.08.2026.
--
-- Heute gibt es keine Zahlung als Sache. Es gibt `purchases` mit einem
-- `payment_method`-Feld (bar, EC, Kredit, kontaktlos, andere) — also die
-- Auskunft, WIE bezahlt wurde, nicht den Vorgang selbst. Das reicht, solange
-- am Automaten Bargeld und Karte durchlaufen und niemand von aussen ein
-- Ereignis zustellt.
--
-- Es reicht nicht mehr, sobald ein Zahlungsdienstleister dazukommt. Der
-- schickt Ereignisse — und er schickt sie mehrfach. Ohne eine Tabelle, die
-- eine Zahlung eindeutig identifiziert, wird aus einem doppelt zugestellten
-- Ereignis eine doppelte Buchung. Das ist kein Ausnahmefall, das ist der
-- Normalbetrieb jeder Zahlungsanbindung.
--
-- ----------------------------------------------------------------------------
-- Anbieterneutral, mit Absicht
--
-- Welcher Zahlungsdienstleister es wird, steht nicht fest. `provider` ist
-- deshalb `text` und KEIN Aufzählungstyp: Ein Anbieterwechsel darf keine
-- Migration erzwingen. Was der Anbieter bestimmt — Rückerstattungsweg,
-- Ereigniszustellung, Gebührenmodell — kommt erst mit der Anbindung.
--
-- ----------------------------------------------------------------------------
-- Was diese Migration NICHT tut
--
-- Sie bindet keinen Zahlungsdienstleister an, und nichts schreibt in diese
-- Tabelle. Sie bleibt vorerst leer. Das ist wichtig für die Rechtstexte:
-- Datenschutzerklärung und Zahlungsinformationen sagen heute wörtlich
-- „Wir haben auch keinen Zahlungsdienstleister eingebunden" und „Wir
-- speichern KEINE Kartennummer, KEINE IBAN und KEINE Zahlungstoken".
-- Beides bleibt wahr, solange nichts schreibt. Ab der ersten geschriebenen
-- Zeile ist es falsch — `provider_ref` IST eine Referenz beim Anbieter.
--
-- Damit das nicht vergessen wird, ist es nicht bei einer Notiz geblieben:
-- `scripts/check_zahlungstexte.py` bricht ab, sobald Anwendungs- oder
-- Edge-Function-Code auf `payments` zugreift, während die Rechtstexte noch
-- „kein Zahlungsdienstleister" behaupten.
-- ============================================================================

-- ----------------------------------------------------------------------------
-- Art und Zustand einer Zahlung
-- ----------------------------------------------------------------------------
-- Beide in `app`, wie alle Aufzählungstypen dieses Projekts.
do $$
begin
  if not exists (
    select 1 from pg_type t join pg_namespace n on n.oid = t.typnamespace
    where n.nspname = 'app' and t.typname = 'payment_kind'
  ) then
    create type app.payment_kind as enum
      ('purchase', 'wallet_topup', 'invoice', 'refund');
  end if;

  if not exists (
    select 1 from pg_type t join pg_namespace n on n.oid = t.typnamespace
    where n.nspname = 'app' and t.typname = 'payment_status'
  ) then
    create type app.payment_status as enum
      ('pending', 'authorized', 'captured', 'failed', 'refunded', 'cancelled');
  end if;
end;
$$;

comment on type app.payment_kind is
  'Was bezahlt wird. purchase = Kauf, wallet_topup = Guthabenaufladung, '
  'invoice = Rechnung (B2B), refund = Rückerstattung einer früheren Zahlung.';

comment on type app.payment_status is
  'Zustand der Zahlung. Der Weg führt nur vorwärts; app.payments_nur_vorwaerts() '
  'erzwingt das.';

-- ----------------------------------------------------------------------------
-- Die Zahlungen
-- ----------------------------------------------------------------------------
create table if not exists public.payments (
  id                  uuid primary key default gen_random_uuid(),

  kind                app.payment_kind   not null,
  status              app.payment_status not null default 'pending',

  -- Bewusst `text`. Siehe Kopf: Anbieterwechsel ohne Migration.
  provider            text not null,

  -- Kennung beim Anbieter. Nullbar, weil sie beim Anlegen einer noch
  -- unbestätigten Zahlung oft noch nicht vorliegt. Einmal gesetzt,
  -- unveränderlich (siehe Trigger).
  provider_ref        text,

  -- Der Doppelbuchungsschutz. Nicht nullbar: Wer eine Zahlung anlegt, muss
  -- sagen, welcher Vorgang gemeint ist. Ein zweites Mal zugestelltes Ereignis
  -- trägt denselben Schlüssel und läuft in den Unique-Verstoss.
  idempotency_key     text not null,

  amount_gross        numeric(12,2) not null,
  currency            text not null default 'EUR',

  -- Nullbar: Eine Guthabenaufladung gehört zu keinem Kauf.
  purchase_id         uuid references public.purchases(id),

  -- Wer zahlt. Höchstens einer von beiden — siehe Prüfregel unten.
  payer_profile_id    uuid references public.profiles(id),
  payer_business_id   uuid,

  -- Eine Rückerstattung ist eine eigene Zeile, die auf die ursprüngliche zeigt.
  refunds_payment_id  uuid references public.payments(id),

  -- Klartext für den Support. Keine Rohantwort des Anbieters, kein Stack.
  failed_reason       text,

  created_at          timestamptz not null default now(),
  created_by          uuid references public.profiles(id),
  updated_at          timestamptz not null default now(),
  updated_by          uuid references public.profiles(id),

  -- Kein `deleted_at`. Zahlungen werden nicht gelöscht, auch nicht weich.

  constraint payments_idempotency_key_unique unique (idempotency_key),

  -- Betrag immer positiv. Das Vorzeichen steckt in `kind`, nicht im Betrag —
  -- eine Rückerstattung über 4,99 € ist `kind = refund` mit 4.99, nicht -4.99.
  constraint payments_betrag_positiv check (amount_gross > 0),

  constraint payments_waehrung_form check (currency ~ '^[A-Z]{3}$'),

  -- HÖCHSTENS ein Zahler, nie beide. Bewusst nicht „genau einer": Eine
  -- Kartenzahlung am Automaten ohne Kundenkonto hat keinen von beiden, und
  -- diese Regel darf den Fall nicht verbauen, bevor es ihn gibt.
  constraint payments_hoechstens_ein_zahler
    check (num_nonnulls(payer_profile_id, payer_business_id) <= 1),

  -- Genau die Rückerstattungen zeigen auf eine Ursprungszahlung, und nur sie.
  constraint payments_rueckerstattung_zeigt_auf_original
    check ((kind = 'refund') = (refunds_payment_id is not null)),

  -- Ein Fehlergrund gehört zu einer gescheiterten Zahlung.
  constraint payments_fehlergrund_nur_bei_fehler
    check (failed_reason is null or status in ('failed', 'cancelled')),

  -- Bis Schritt 3 (`businesses`) existiert, kann diese Spalte keinen gültigen
  -- Wert tragen — es gibt keine Firma, auf die sie zeigen könnte. Statt eine
  -- Fremdschlüsselprüfung vorzutäuschen, die es noch nicht gibt, hält diese
  -- Regel die Spalte leer. Schritt 3 lässt sie fallen und setzt den echten
  -- Fremdschlüssel.
  constraint payments_firmenzahler_erst_ab_schritt3
    check (payer_business_id is null)
);

comment on table public.payments is
  'Zahlungsvorgang. Anbieterneutral: `provider` ist Text, kein Aufzählungstyp. '
  'Nur vorwärts — nie gelöscht, Betrag nie geändert, Rückerstattung als eigene '
  'Zeile. Enthält KEINE Kartendaten, nur die Referenz beim Anbieter.';

comment on column public.payments.idempotency_key is
  'Doppelbuchungsschutz. Ein zweimal zugestelltes Anbieter-Ereignis trägt '
  'denselben Schlüssel und kann keine zweite Zahlung erzeugen.';

comment on column public.payments.provider_ref is
  'Referenz beim Zahlungsdienstleister. NIEMALS Kartennummer, Prüfziffer oder '
  'Ablaufdatum — auch nicht verschlüsselt, auch nicht zum Testen.';

comment on column public.payments.payer_business_id is
  'Zahlendes Unternehmen. Ohne Fremdschlüssel und per Prüfregel leer gehalten, '
  'bis Schritt 3 die Tabelle `businesses` anlegt.';

-- Zwei Kennungen zusammen sind ebenfalls eindeutig, aber erst, sobald der
-- Anbieter eine geliefert hat. Als Teilindex, damit beliebig viele Zahlungen
-- ohne Referenz nebeneinander liegen dürfen.
create unique index if not exists idx_payments_provider_ref
  on public.payments (provider, provider_ref)
  where provider_ref is not null;

create index if not exists idx_payments_payer_profile
  on public.payments (payer_profile_id) where payer_profile_id is not null;
create index if not exists idx_payments_purchase
  on public.payments (purchase_id) where purchase_id is not null;
create index if not exists idx_payments_status_zeit
  on public.payments (status, created_at desc);

-- ----------------------------------------------------------------------------
-- Nur vorwärts
-- ----------------------------------------------------------------------------
-- Die Regel aus dem Entwurf, als Trigger statt als Vorsatz. Sie greift auch
-- dann, wenn eine Edge Function mit `service_role` schreibt — RLS greift dort
-- nämlich NICHT, und genau dort werden Zahlungen später geschrieben.
create or replace function app.payments_nur_vorwaerts()
returns trigger
language plpgsql
set search_path = public, app
as $fn$
begin
  if tg_op = 'DELETE' then
    raise exception
      'Zahlungen werden nicht gelöscht. Ein Storno ist eine neue Zeile mit '
      'kind = refund, die auf die ursprüngliche Zahlung zeigt.';
  end if;

  if new.kind              is distinct from old.kind
  or new.amount_gross      is distinct from old.amount_gross
  or new.currency          is distinct from old.currency
  or new.provider          is distinct from old.provider
  or new.idempotency_key   is distinct from old.idempotency_key
  or new.purchase_id       is distinct from old.purchase_id
  or new.payer_profile_id  is distinct from old.payer_profile_id
  or new.payer_business_id is distinct from old.payer_business_id
  or new.refunds_payment_id is distinct from old.refunds_payment_id
  or new.created_at        is distinct from old.created_at
  then
    raise exception
      'Unveränderliches Feld einer Zahlung geändert. Betrag, Art, Anbieter, '
      'Idempotenzschlüssel, Zuordnung und Anlagezeitpunkt stehen fest, sobald '
      'die Zeile existiert.';
  end if;

  -- Die Anbieterreferenz darf einmal nachgetragen werden — danach nicht mehr.
  if old.provider_ref is not null
     and new.provider_ref is distinct from old.provider_ref then
    raise exception
      'Anbieterreferenz einer Zahlung steht fest, sobald sie einmal gesetzt ist.';
  end if;

  if new.status is distinct from old.status then
    if not (
         (old.status = 'pending'
            and new.status in ('authorized', 'captured', 'failed', 'cancelled'))
      or (old.status = 'authorized'
            and new.status in ('captured', 'failed', 'cancelled'))
      or (old.status = 'captured'
            and new.status = 'refunded')
    ) then
      raise exception
        'Unzulässiger Zustandswechsel einer Zahlung: % -> %. Erlaubt sind nur '
        'Wege vorwärts; failed, cancelled und refunded sind Endzustände.',
        old.status, new.status;
    end if;
  end if;

  return new;
end;
$fn$;

comment on function app.payments_nur_vorwaerts() is
  'Erzwingt die Nur-vorwärts-Regel für Zahlungen: kein Löschen, keine Änderung '
  'an Betrag/Art/Zuordnung, nur erlaubte Zustandswechsel.';

-- ----------------------------------------------------------------------------
-- Zugriff
-- ----------------------------------------------------------------------------
-- Lesen: die eigenen Zahlungen, sonst nur mit ausdrücklichem Recht. Schreiben
-- über RLS gar nicht — Zahlungen entstehen serverseitig aus Anbieterereignissen,
-- nicht aus einer Formulareingabe im Browser. Deshalb trägt die Schreib-Policy
-- `payments.manage` und nicht etwa das Konto des Zahlenden.
alter table public.payments enable row level security;

drop policy if exists payments_read on public.payments;
create policy payments_read on public.payments
  for select to authenticated
  using (
    payer_profile_id = (select auth.uid())
    or public.is_admin()
    or public.auth_has_permission('payments.view')
  );

drop policy if exists payments_write on public.payments;
create policy payments_write on public.payments
  for all to authenticated
  using      (public.is_admin() or public.auth_has_permission('payments.manage'))
  with check (public.is_admin() or public.auth_has_permission('payments.manage'));

-- TRUNCATE kennt keine RLS. Eine Tabelle, deren erste Regel „wird nie
-- gelöscht" lautet, darf diese Berechtigung nicht tragen — sonst hebelt ein
-- einziger Befehl den ganzen Trigger aus. Geprüft am 21.08.2026: Die
-- Supabase-Standardrechte vergeben TRUNCATE auf jeder neuen Tabelle in
-- `public` an `anon` und `authenticated`. Migration 0116 räumt das für den
-- gesamten Bestand auf; hier steht es, damit die Regel bei dieser Tabelle
-- auch dann gilt, wenn jemand 0116 später zurücknimmt.
revoke truncate on public.payments from anon, authenticated;
revoke all on public.payments from anon;

grant select on public.payments to authenticated;

-- ----------------------------------------------------------------------------
-- Protokoll und Zeitstempel
-- ----------------------------------------------------------------------------
-- Die Protokollpflicht aus dem Entwurf. Bei dieser Tabelle reicht die heutige
-- Abdeckung von 31 aus 89 Tabellen nicht — jede Zustandsänderung einer Zahlung
-- muss nachvollziehbar bleiben.
drop trigger if exists trg_audit on public.payments;
create trigger trg_audit
  after insert or update or delete on public.payments
  for each row execute function app.audit_row();

drop trigger if exists trg_payments_nur_vorwaerts on public.payments;
create trigger trg_payments_nur_vorwaerts
  before update or delete on public.payments
  for each row execute function app.payments_nur_vorwaerts();

drop trigger if exists trg_payments_updated_at on public.payments;
create trigger trg_payments_updated_at
  before update on public.payments
  for each row execute function app.set_updated_at();

-- ----------------------------------------------------------------------------
-- Rechte
-- ----------------------------------------------------------------------------
-- Getrennt nach Sehen und Verwalten: Wer Zahlungen für die Buchhaltung
-- einsehen soll, muss deswegen noch keine anlegen oder ihren Zustand ändern
-- dürfen.
insert into public.permissions (key, area, description)
values ('payments.view',   'finance', 'Zahlungen aller Kunden einsehen'),
       ('payments.manage', 'finance', 'Zahlungen anlegen und ihren Zustand ändern')
on conflict (key) do nothing;

insert into public.role_permissions (role_key, permission_key)
values ('system_admin', 'payments.view'),
       ('system_admin', 'payments.manage'),
       ('shareholder',  'payments.view'),
       ('shareholder',  'payments.manage')
on conflict do nothing;
