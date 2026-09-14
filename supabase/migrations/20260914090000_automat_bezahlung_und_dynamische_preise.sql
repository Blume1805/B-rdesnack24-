-- ============================================================================
-- Automatenbezahlung und dynamische Preise
-- ----------------------------------------------------------------------------
-- Anlass: Philipp hat am 14.09.2026 das CCV IM30 als Bezahlterminal bestimmt.
--
-- Diese Migration ist bewusst **herstellerunabhängig**. Das Terminal steht
-- hinter genau einer Schicht (`terminals` + `terminal_ereignisse`); ob dort
-- CCV, Nayax oder später etwas anderes hängt, ändert nichts an Preisen,
-- Buchungen oder Beständen. Der herstellerspezifische Teil liegt allein in
-- der Edge Function `terminal-webhook`, nicht hier.
--
-- Zwei Grundsätze, die den ganzen Entwurf tragen:
--
-- 1. KARTENDATEN BERÜHREN UNSERE SYSTEME NIE. Wir speichern weder PAN noch
--    Ablaufdatum noch Inhabernamen. Was ankommt, ist eine Referenz des
--    Zahlungsdienstleisters und ein Betrag. Alles andere brächte uns in den
--    Geltungsbereich von PCI DSS, ohne dass ein einziger Anwendungsfall es
--    verlangt.
--
-- 2. ROHDATEN ZUERST, VERARBEITUNG DANACH. Der Webhook schreibt das Ereignis
--    unverändert und quittiert. Erst ein zweiter Schritt bucht Verkauf und
--    Bestand. Scheitert der zweite Schritt, ist der Verkauf nicht verloren —
--    er steht in der Warteschlange und taucht in
--    `terminal_ereignisse_offen()` auf. Ohne diese Trennung kostet jeder
--    Fehler in der Verarbeitung einen Umsatz, den §§ 145–147 AO verlangen
--    und den man nachträglich nicht herstellen kann.
-- ============================================================================

-- ----------------------------------------------------------------------------
-- 1. Terminals
-- ----------------------------------------------------------------------------
create table if not exists public.terminals (
  id              uuid primary key default gen_random_uuid(),
  machine_id      uuid not null references public.machines(id) on delete restrict,
  hersteller      text not null check (hersteller in ('ccv', 'nayax', 'sonstige')),
  modell          text,
  seriennummer    text not null,
  -- Die Kennung, unter der der Hersteller das Gerät in seinen Nachrichten
  -- nennt. Oft identisch mit der Seriennummer, aber nicht immer — deshalb
  -- ein eigenes Feld statt einer Annahme.
  terminal_kennung text not null,
  status          app.entity_status not null default 'active',
  in_betrieb_seit date,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now(),
  deleted_at      timestamptz,
  unique (hersteller, terminal_kennung)
);

-- Ein Automat trägt höchstens ein aktives Terminal.
create unique index if not exists uq_terminal_je_automat
  on public.terminals (machine_id)
  where deleted_at is null;

drop trigger if exists trg_terminals_updated_at on public.terminals;
create trigger trg_terminals_updated_at before update on public.terminals
  for each row execute function app.set_updated_at();

comment on table public.terminals is
  'Bezahlterminals an Automaten. Herstellerunabhängig; die Besonderheiten des '
  'jeweiligen Geräts liegen in der Edge Function, nicht im Datenmodell.';

-- ----------------------------------------------------------------------------
-- 2. Rohereignisse — unveränderbar, lückenprüfbar
-- ----------------------------------------------------------------------------
-- GoBD verlangt Unveränderbarkeit und Vollständigkeit. Unveränderbarkeit
-- stellen wir über eine Hashkette her: jeder Satz trägt den Hash seines
-- Vorgängers. Wer einen Satz nachträglich ändert oder herauslöscht, bricht
-- die Kette, und `ereigniskette_pruefen()` nennt die Stelle.
--
-- Vollständigkeit ist das schwierigere Problem: Ein Verkauf, dessen Webhook
-- nie ankommt, fehlt unauffällig. Deshalb speichern wir die laufende Nummer
-- des Herstellers mit, sofern er eine mitschickt — `terminal_luecken()`
-- macht daraus eine prüfbare Aussage.
create table if not exists public.terminal_ereignisse (
  lfd_nr                bigint generated always as identity primary key,
  terminal_id           uuid references public.terminals(id) on delete restrict,
  hersteller            text not null,
  -- Kennung des Geräts, wie sie in der Nachricht stand. Bleibt auch dann
  -- erhalten, wenn wir das Terminal (noch) nicht zuordnen können.
  terminal_kennung      text not null,
  idempotenz_schluessel text not null,
  anbieter_lfd_nr       bigint,
  art                   text not null check (art in ('verkauf', 'storno', 'ausfall', 'lebenszeichen')),
  nutzlast              jsonb not null,
  eingegangen_am        timestamptz not null default now(),
  verarbeitet_am        timestamptz,
  verarbeitung_fehler   text,
  vorgaenger_hash       text,
  satz_hash             text not null,
  unique (hersteller, idempotenz_schluessel)
);

create index if not exists idx_terminal_ereignisse_offen
  on public.terminal_ereignisse (eingegangen_am)
  where verarbeitet_am is null;

create index if not exists idx_terminal_ereignisse_geraet
  on public.terminal_ereignisse (terminal_id, eingegangen_am desc);

-- Hashkette. Der Vorschusslock serialisiert die Einfügungen; ohne ihn
-- könnten zwei gleichzeitige Webhooks denselben Vorgänger lesen und die
-- Kette gabeln.
create or replace function app.terminal_ereignis_verketten()
returns trigger
language plpgsql
security definer
set search_path = public, app, extensions
as $$
declare
  v_vorgaenger text;
begin
  perform pg_advisory_xact_lock(hashtext('terminal_ereignisse_kette'));

  select satz_hash into v_vorgaenger
    from public.terminal_ereignisse
   order by lfd_nr desc
   limit 1;

  new.vorgaenger_hash := v_vorgaenger;
  new.satz_hash := encode(
    extensions.digest(
      coalesce(v_vorgaenger, '') || '|' ||
      new.hersteller || '|' ||
      new.idempotenz_schluessel || '|' ||
      new.art || '|' ||
      new.nutzlast::text || '|' ||
      to_char(new.eingegangen_am at time zone 'UTC', 'YYYY-MM-DD"T"HH24:MI:SS.USOF'),
      'sha256'),
    'hex');
  return new;
end;
$$;

drop trigger if exists trg_terminal_ereignis_verketten on public.terminal_ereignisse;
create trigger trg_terminal_ereignis_verketten
  before insert on public.terminal_ereignisse
  for each row execute function app.terminal_ereignis_verketten();

-- Append-only. Einzige erlaubte Änderung: das Setzen der Verarbeitungsfelder.
-- Alles andere wird abgewiesen, auch für den Dienstschlüssel.
create or replace function app.terminal_ereignis_unveraenderbar()
returns trigger
language plpgsql
as $$
begin
  if tg_op = 'DELETE' then
    raise exception 'Terminalereignisse werden nicht gelöscht (§§ 145-147 AO, GoBD).';
  end if;

  if new.lfd_nr                is distinct from old.lfd_nr
     or new.hersteller            is distinct from old.hersteller
     or new.terminal_kennung      is distinct from old.terminal_kennung
     or new.idempotenz_schluessel is distinct from old.idempotenz_schluessel
     or new.anbieter_lfd_nr       is distinct from old.anbieter_lfd_nr
     or new.art                   is distinct from old.art
     or new.nutzlast              is distinct from old.nutzlast
     or new.eingegangen_am        is distinct from old.eingegangen_am
     or new.vorgaenger_hash       is distinct from old.vorgaenger_hash
     or new.satz_hash             is distinct from old.satz_hash
  then
    raise exception 'Terminalereignisse sind unveränderbar. Änderbar sind nur verarbeitet_am und verarbeitung_fehler.';
  end if;

  return new;
end;
$$;

drop trigger if exists trg_terminal_ereignis_unveraenderbar on public.terminal_ereignisse;
create trigger trg_terminal_ereignis_unveraenderbar
  before update or delete on public.terminal_ereignisse
  for each row execute function app.terminal_ereignis_unveraenderbar();

comment on table public.terminal_ereignisse is
  'Rohereignisse der Bezahlterminals, unverändert und append-only. '
  'Hashkette gegen nachträgliche Änderung, Herstellernummer gegen Lücken.';

-- ----------------------------------------------------------------------------
-- 3. Preisstufen für kurzes Mindesthaltbarkeitsdatum
-- ----------------------------------------------------------------------------
-- Als Tabelle, nicht als Konstante im Code: Der Abschlag ist eine
-- kaufmännische Entscheidung, die sich ändert, und jede Änderung muss
-- nachvollziehbar sein, weil sie den ausgewiesenen Preis bewegt (PAngV).
create table if not exists public.mhd_preisstufen (
  id               uuid primary key default gen_random_uuid(),
  rest_tage_bis    integer not null unique check (rest_tage_bis > 0),
  abschlag_prozent numeric(5,2) not null check (abschlag_prozent > 0 and abschlag_prozent <= 60),
  aktiv            boolean not null default true,
  created_at       timestamptz not null default now(),
  updated_at       timestamptz not null default now()
);

drop trigger if exists trg_mhd_preisstufen_updated_at on public.mhd_preisstufen;
create trigger trg_mhd_preisstufen_updated_at before update on public.mhd_preisstufen
  for each row execute function app.set_updated_at();

insert into public.mhd_preisstufen (rest_tage_bis, abschlag_prozent)
values (10, 20.00), (3, 40.00)
on conflict (rest_tage_bis) do nothing;

comment on table public.mhd_preisstufen is
  'Abschlag nach Restlaufzeit. Es gilt die strengste zutreffende Stufe: bei '
  'zwei Resttagen greift die 3-Tage-Stufe, nicht die 10-Tage-Stufe.';

-- ----------------------------------------------------------------------------
-- 4. Der Automatenpreis — produktgebunden
-- ----------------------------------------------------------------------------
-- Das ist der Betrag, den das Gerät verlangt. Er kennt keinen Kunden, weil
-- ein Kartenterminal keinen kennt. Enthalten ist deshalb nur, was am Produkt
-- hängt: der Grundpreis und der MHD-Abschlag.
create or replace function public.automatenpreis(
  p_machine uuid,
  p_product uuid
)
returns table (
  grundpreis_brutto    numeric,
  rest_tage            integer,
  mhd_abschlag_prozent numeric,
  brutto               numeric,
  steuersatz           numeric
)
language sql
stable
security definer
set search_path = public, app
as $$
  with produkt as (
    select p.id, p.tax_rate, p.list_price_net
      from public.products p
     where p.id = p_product and p.deleted_at is null
  ),
  -- Slotpreis schlägt Listenpreis: der Preis am Gerät ist die Wahrheit.
  basis as (
    select coalesce(
             (select ms.unit_price_net
                from public.machine_slots ms
               where ms.machine_id = p_machine
                 and ms.product_id = p_product
                 and ms.unit_price_net is not null
               limit 1),
             (select list_price_net from produkt)
           ) as netto
  ),
  -- Kürzestes MHD im Bestand dieses Automaten entscheidet.
  mhd as (
    select min(i.expiry_date) as frist
      from public.inventory i
     where i.machine_id = p_machine
       and i.product_id = p_product
       and i.quantity > 0
       and i.expiry_date is not null
  ),
  tage as (
    select case when (select frist from mhd) is null then null
                else ((select frist from mhd) - current_date)::integer
           end as rest
  ),
  stufe as (
    select coalesce(
             (select s.abschlag_prozent
                from public.mhd_preisstufen s
               where s.aktiv
                 and (select rest from tage) is not null
                 and (select rest from tage) <= s.rest_tage_bis
               order by s.rest_tage_bis asc
               limit 1),
             0)::numeric(5,2) as prozent
  )
  select
    round((select netto from basis) * (1 + (select tax_rate from produkt) / 100), 2),
    (select rest from tage),
    (select prozent from stufe),
    -- Der Prozentsatz wird gerundet, bevor er angewandt wird — dieselbe
    -- Regel wie bei den Kombiangeboten: angezeigte und gerechnete Zahl
    -- müssen dieselbe sein, sonst ist die Rechnung nicht prüfbar.
    round(
      round((select netto from basis) * (1 + (select tax_rate from produkt) / 100), 2)
      * (1 - (select prozent from stufe) / 100), 2),
    (select tax_rate from produkt)
  where exists (select 1 from produkt) and (select netto from basis) is not null;
$$;

comment on function public.automatenpreis(uuid, uuid) is
  'Preis am Gerät: Grundpreis abzüglich MHD-Abschlag. Kennt keinen Kunden.';

-- ----------------------------------------------------------------------------
-- 5. Der Kundenpreis — nur mit bekanntem Kunden
-- ----------------------------------------------------------------------------
-- Dauerrabatt, Status und Coupons hängen am Konto. Ein Kartenterminal weiß
-- nicht, wer davorsteht, und darf es auch nicht wissen. Dieser Preis gilt
-- deshalb nur auf dem app-geführten Weg (Abschnitt 6).
--
-- Reihenfolge ist festgelegt und nicht verhandelbar, weil sie das Ergebnis
-- ändert: erst MHD (steckt schon im Automatenpreis), dann Dauerrabatt,
-- zuletzt der Coupon. Jeder Schritt wird auf den Cent gerundet, und jeder
-- Schritt steht in der Herleitung.
create or replace function public.kundenpreis(
  p_machine  uuid,
  p_product  uuid,
  p_customer uuid default null
)
returns table (
  automatenpreis      numeric,
  dauerrabatt_prozent numeric,
  dauerrabatt_betrag  numeric,
  coupon_prozent      numeric,
  coupon_betrag       numeric,
  endpreis            numeric,
  herleitung          jsonb
)
language plpgsql
stable
security definer
set search_path = public, app
as $$
declare
  v_kunde        uuid;
  v_automat      numeric;
  v_mhd_prozent  numeric;
  v_rest         integer;
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

  select a.brutto, a.mhd_abschlag_prozent, a.rest_tage
    into v_automat, v_mhd_prozent, v_rest
    from public.automatenpreis(p_machine, p_product) a;

  if v_automat is null then
    return;
  end if;

  -- Genau derselbe Helfer, den my_subscription_benefits benutzt. Eine zweite
  -- Abo-Prüfung wäre eine zweite Wahrheit darüber, wer Dauerrabatt bekommt.
  if v_kunde is not null then
    v_hat_abo := app.has_subscription(v_kunde);
  end if;

  if v_hat_abo then
    v_dauer_p := app.dauerrabatt_prozent();
  end if;

  v_dauer_b  := round(v_automat * v_dauer_p / 100, 2);
  v_zwischen := v_automat - v_dauer_b;

  -- Coupons bleiben in dieser Migration bewusst bei 0: Welcher Coupon am
  -- Automaten gilt, entscheidet die Einlösung in vend_freigabe_anlegen(),
  -- nicht die Preisauskunft. Eine Auskunft, die einen Coupon einrechnet,
  -- den die Einlösung dann ablehnt, ist schlimmer als keine.
  v_coupon_b := round(v_zwischen * v_coupon_p / 100, 2);
  v_ende     := v_zwischen - v_coupon_b;

  return query select
    v_automat,
    v_dauer_p,
    v_dauer_b,
    v_coupon_p,
    v_coupon_b,
    v_ende,
    jsonb_build_object(
      'automatenpreis_brutto', v_automat,
      'mhd_abschlag_prozent',  v_mhd_prozent,
      'mhd_rest_tage',         v_rest,
      'dauerrabatt_prozent',   v_dauer_p,
      'dauerrabatt_betrag',    v_dauer_b,
      'coupon_prozent',        v_coupon_p,
      'coupon_betrag',         v_coupon_b,
      'endpreis_brutto',       v_ende,
      'berechnet_am',          now()
    );
end;
$$;

comment on function public.kundenpreis(uuid, uuid, uuid) is
  'Endpreis für einen bekannten Kunden. Nur über den app-geführten Kauf '
  'nutzbar — ein Kartenterminal kennt den Kunden nicht.';

-- ----------------------------------------------------------------------------
-- 6. Vend-Freigaben: der app-geführte Kauf
-- ----------------------------------------------------------------------------
-- Der einzige Weg, auf dem ein kundenbezogener Rabatt an einen Automaten
-- gelangt. Ablauf:
--   Kunde wählt in der App  ->  Server rechnet und legt eine Freigabe an
--   ->  App zeigt einen Einmalcode  ->  Automat/Terminal löst ihn ein
--   ->  Terminal zieht genau den freigegebenen Betrag.
--
-- Der Code wird nur als Hash gespeichert, wie die B2B-Token im Bestand.
-- Wer die Datenbank liest, kann damit nichts einlösen.
create table if not exists public.vend_freigaben (
  id             uuid primary key default gen_random_uuid(),
  code_hash      bytea not null unique,
  customer_id    uuid not null references public.customers(id) on delete restrict,
  machine_id     uuid not null references public.machines(id) on delete restrict,
  product_id     uuid not null references public.products(id) on delete restrict,
  slot_code      text,
  betrag_brutto  numeric(12,2) not null check (betrag_brutto >= 0),
  herleitung     jsonb not null,
  angelegt_am    timestamptz not null default now(),
  gueltig_bis    timestamptz not null,
  eingeloest_am  timestamptz,
  ereignis_lfd_nr bigint references public.terminal_ereignisse(lfd_nr),
  storniert_am   timestamptz,
  storno_grund   text
);

create index if not exists idx_vend_freigaben_kunde
  on public.vend_freigaben (customer_id, angelegt_am desc);

create index if not exists idx_vend_freigaben_offen
  on public.vend_freigaben (gueltig_bis)
  where eingeloest_am is null and storniert_am is null;

-- Ein Kunde hält höchstens eine offene Freigabe. Sonst legt jemand zehn
-- Freigaben zum Rabattpreis an und löst sie über den Tag verteilt ein.
--
-- Die Ablaufzeit steht bewusst NICHT in der Bedingung: ein Index darf nur
-- unveränderliche Ausdrücke tragen, und `now()` ist keiner. Eine abgelaufene
-- Freigabe zählt hier deshalb weiter als offen. Aufgelöst wird das in
-- vend_freigabe_anlegen(), das alte Freigaben zuerst storniert — der Index
-- ist die Rückfallebene für zwei gleichzeitige Aufrufe, nicht der
-- Regelweg.
create unique index if not exists uq_vend_freigabe_offen_je_kunde
  on public.vend_freigaben (customer_id)
  where eingeloest_am is null and storniert_am is null;

comment on table public.vend_freigaben is
  'Einmalige Freigabe eines Kaufs zum Kundenpreis. Code nur als Hash.';

-- Anlegen: als angemeldeter Kunde, für sich selbst.
create or replace function public.vend_freigabe_anlegen(
  p_machine uuid,
  p_product uuid,
  p_slot    text default null
)
returns table (
  code        text,
  betrag      numeric,
  gueltig_bis timestamptz,
  herleitung  jsonb
)
language plpgsql
security definer
set search_path = public, app, extensions
as $$
declare
  v_kunde      uuid;
  v_code       text;
  v_preis      record;
  v_bis        timestamptz;
  v_bestand    integer;
begin
  v_kunde := auth.uid();

  if v_kunde is null
     or not exists (select 1 from public.customers c where c.id = v_kunde) then
    raise exception 'Nur für angemeldete Kunden.' using errcode = '42501';
  end if;

  -- Kein Automat, kein Verkauf. Der Vorbehalt gilt bis zum ersten Gerät.
  if not exists (select 1 from public.machines m
                  where m.id = p_machine
                    and m.status = 'active'
                    and m.deleted_at is null) then
    raise exception 'Dieser Automat ist nicht in Betrieb.' using errcode = 'P0002';
  end if;

  select i.quantity into v_bestand
    from public.inventory i
   where i.machine_id = p_machine and i.product_id = p_product;

  if coalesce(v_bestand, 0) < 1 then
    raise exception 'Das Produkt liegt in diesem Automaten nicht vor.'
      using errcode = 'P0002';
  end if;

  select * into v_preis
    from public.kundenpreis(p_machine, p_product, v_kunde);

  if v_preis.endpreis is null then
    raise exception 'Für dieses Produkt ist kein Preis hinterlegt.'
      using errcode = 'P0002';
  end if;

  -- Offene Freigaben desselben Kunden verfallen. Der Kunde hat sich
  -- umentschieden; die alte Freigabe darf nicht liegen bleiben.
  update public.vend_freigaben
     set storniert_am = now(),
         storno_grund = case when gueltig_bis < now() then 'abgelaufen' else 'ersetzt' end
   where customer_id = v_kunde
     and eingeloest_am is null
     and storniert_am is null;

  -- 128 Bit Zufall. Kurz genug zum Abtippen wäre zu kurz zum Raten.
  v_code := encode(extensions.gen_random_bytes(16), 'hex');
  v_bis  := now() + interval '3 minutes';

  insert into public.vend_freigaben
    (code_hash, customer_id, machine_id, product_id, slot_code,
     betrag_brutto, herleitung, gueltig_bis)
  values
    (extensions.digest(v_code, 'sha256'), v_kunde, p_machine, p_product, p_slot,
     v_preis.endpreis, v_preis.herleitung, v_bis);

  return query select v_code, v_preis.endpreis, v_bis, v_preis.herleitung;
end;
$$;

comment on function public.vend_freigabe_anlegen(uuid, uuid, text) is
  'Legt eine Einmalfreigabe zum Kundenpreis an. Drei Minuten gültig, '
  'höchstens eine offene je Kunde.';

-- Einlösen: ausschließlich durch den Dienstschlüssel (Edge Function).
-- Atomar und einmalig — das `where eingeloest_am is null` im UPDATE ist die
-- Sperre, nicht ein vorheriges SELECT.
create or replace function app.vend_freigabe_einloesen(
  p_code            text,
  p_machine         uuid,
  p_ereignis_lfd_nr bigint default null
)
returns table (
  freigabe_id   uuid,
  customer_id   uuid,
  product_id    uuid,
  betrag_brutto numeric
)
language plpgsql
security definer
set search_path = public, app, extensions
as $$
begin
  return query
  update public.vend_freigaben v
     set eingeloest_am   = now(),
         ereignis_lfd_nr = p_ereignis_lfd_nr
   where v.code_hash     = extensions.digest(p_code, 'sha256')
     and v.machine_id    = p_machine
     and v.eingeloest_am is null
     and v.storniert_am  is null
     and v.gueltig_bis   > now()
  returning v.id, v.customer_id, v.product_id, v.betrag_brutto;
end;
$$;

comment on function app.vend_freigabe_einloesen(text, uuid, bigint) is
  'Löst eine Freigabe einmalig ein. Leeres Ergebnis heißt: ungültig, '
  'abgelaufen, fremder Automat oder bereits eingelöst.';

-- ----------------------------------------------------------------------------
-- 7. Vollständigkeit nachweisen
-- ----------------------------------------------------------------------------
create or replace function public.terminal_ereignisse_offen()
returns table (
  lfd_nr           bigint,
  terminal_kennung text,
  art              text,
  eingegangen_am   timestamptz,
  fehler           text
)
language sql
stable
security definer
set search_path = public, app
as $$
  select e.lfd_nr, e.terminal_kennung, e.art, e.eingegangen_am, e.verarbeitung_fehler
    from public.terminal_ereignisse e
   where e.verarbeitet_am is null
     and public.auth_has_permission('payments.view')
   order by e.lfd_nr;
$$;

comment on function public.terminal_ereignisse_offen() is
  'Angekommene, aber nicht verbuchte Ereignisse. Muss leer sein.';

-- Lücken in der Herstellernummer: so fällt ein Verkauf auf, der nie ankam.
create or replace function public.terminal_luecken(p_tage integer default 30)
returns table (
  terminal_kennung text,
  fehlt_ab         bigint,
  fehlt_bis        bigint
)
language sql
stable
security definer
set search_path = public, app
as $$
  with nummern as (
    select e.terminal_kennung,
           e.anbieter_lfd_nr as nr,
           lead(e.anbieter_lfd_nr) over (
             partition by e.terminal_kennung order by e.anbieter_lfd_nr
           ) as naechste
      from public.terminal_ereignisse e
     where e.anbieter_lfd_nr is not null
       and e.eingegangen_am >= now() - make_interval(days => p_tage)
  )
  select n.terminal_kennung, n.nr + 1, n.naechste - 1
    from nummern n
   where n.naechste is not null
     and n.naechste > n.nr + 1
     and public.auth_has_permission('payments.view')
   order by 1, 2;
$$;

comment on function public.terminal_luecken(integer) is
  'Lücken in der laufenden Nummer des Herstellers — Hinweis auf Verkäufe, '
  'deren Nachricht nie angekommen ist.';

create or replace function public.ereigniskette_pruefen()
returns table (
  erste_abweichung bigint,
  geprueft         bigint
)
language plpgsql
stable
security definer
set search_path = public, app, extensions
as $$
declare
  r            record;
  v_vorgaenger text := null;
  v_soll       text;
  v_anzahl     bigint := 0;
begin
  if not public.auth_has_permission('payments.view') then
    raise exception 'Kein Zugriff.' using errcode = '42501';
  end if;

  for r in
    select * from public.terminal_ereignisse order by lfd_nr
  loop
    v_anzahl := v_anzahl + 1;
    v_soll := encode(
      extensions.digest(
        coalesce(v_vorgaenger, '') || '|' ||
        r.hersteller || '|' ||
        r.idempotenz_schluessel || '|' ||
        r.art || '|' ||
        r.nutzlast::text || '|' ||
        to_char(r.eingegangen_am at time zone 'UTC', 'YYYY-MM-DD"T"HH24:MI:SS.USOF'),
        'sha256'),
      'hex');

    if v_soll is distinct from r.satz_hash
       or coalesce(v_vorgaenger, '') is distinct from coalesce(r.vorgaenger_hash, '')
    then
      return query select r.lfd_nr, v_anzahl;
      return;
    end if;

    v_vorgaenger := r.satz_hash;
  end loop;

  return query select null::bigint, v_anzahl;
end;
$$;

comment on function public.ereigniskette_pruefen() is
  'Prüft die Hashkette der Terminalereignisse. Ergebnis ohne Abweichung '
  'heißt: kein Satz wurde nachträglich geändert.';

-- ----------------------------------------------------------------------------
-- 8. Zugriffsschutz
-- ----------------------------------------------------------------------------
alter table public.terminals           enable row level security;
alter table public.terminal_ereignisse enable row level security;
alter table public.mhd_preisstufen     enable row level security;
alter table public.vend_freigaben      enable row level security;

-- Terminals: Personal liest, Verwaltung schreibt.
drop policy if exists terminals_ro on public.terminals;
create policy terminals_ro on public.terminals
  for select to authenticated
  using (exists (select 1 from public.profiles p
                  where p.id = auth.uid()
                    and p.role in ('system_admin', 'shareholder', 'employee')));

drop policy if exists terminals_rw on public.terminals;
create policy terminals_rw on public.terminals
  for all to authenticated
  using (exists (select 1 from public.profiles p
                  where p.id = auth.uid() and p.role in ('system_admin', 'shareholder')))
  with check (exists (select 1 from public.profiles p
                       where p.id = auth.uid() and p.role in ('system_admin', 'shareholder')));

-- Rohereignisse: niemand über PostgREST. Auch Verwaltung nicht — der Zugang
-- läuft über terminal_ereignisse_offen() und terminal_luecken(), die nur
-- zeigen, was gebraucht wird. Geschrieben wird allein mit dem Dienstschlüssel,
-- der RLS ohnehin umgeht.
drop policy if exists te_kein_zugriff on public.terminal_ereignisse;
create policy te_kein_zugriff on public.terminal_ereignisse
  for select to authenticated using (false);

-- Preisstufen: alle Angemeldeten dürfen lesen (der Abschlag steht am Produkt
-- und ist keine Betriebsinterna), ändern darf nur die Verwaltung.
drop policy if exists mhd_ro on public.mhd_preisstufen;
create policy mhd_ro on public.mhd_preisstufen
  for select to authenticated using (true);

drop policy if exists mhd_rw on public.mhd_preisstufen;
create policy mhd_rw on public.mhd_preisstufen
  for all to authenticated
  using (exists (select 1 from public.profiles p
                  where p.id = auth.uid() and p.role in ('system_admin', 'shareholder')))
  with check (exists (select 1 from public.profiles p
                       where p.id = auth.uid() and p.role in ('system_admin', 'shareholder')));

-- Freigaben: jeder sieht nur die eigenen. Kein INSERT und kein UPDATE über
-- die Tabelle — das läuft ausschließlich über die beiden Funktionen.
drop policy if exists vf_eigene on public.vend_freigaben;
create policy vf_eigene on public.vend_freigaben
  for select to authenticated
  using (customer_id = auth.uid());

-- ----------------------------------------------------------------------------
-- 9. Rechte
-- ----------------------------------------------------------------------------
revoke all on public.terminals           from public, anon;
revoke all on public.terminal_ereignisse from public, anon;
revoke all on public.mhd_preisstufen     from public, anon;
revoke all on public.vend_freigaben      from public, anon;

grant select on public.terminals       to authenticated;
grant select on public.mhd_preisstufen to authenticated;
grant select on public.vend_freigaben  to authenticated;

revoke all on function public.automatenpreis(uuid, uuid)                from public, anon;
revoke all on function public.kundenpreis(uuid, uuid, uuid)             from public, anon;
revoke all on function public.vend_freigabe_anlegen(uuid, uuid, text)   from public, anon;
revoke all on function app.vend_freigabe_einloesen(text, uuid, bigint)  from public, anon;
revoke all on function public.terminal_ereignisse_offen()               from public, anon;
revoke all on function public.terminal_luecken(integer)                 from public, anon;
revoke all on function public.ereigniskette_pruefen()                   from public, anon;
revoke all on function app.terminal_ereignis_verketten()                from public, anon;

grant execute on function public.automatenpreis(uuid, uuid)              to authenticated;
grant execute on function public.kundenpreis(uuid, uuid, uuid)           to authenticated;
grant execute on function public.vend_freigabe_anlegen(uuid, uuid, text) to authenticated;
grant execute on function public.terminal_ereignisse_offen()             to authenticated;
grant execute on function public.terminal_luecken(integer)               to authenticated;
grant execute on function public.ereigniskette_pruefen()                 to authenticated;
-- vend_freigabe_einloesen bleibt ohne Grant: nur der Dienstschlüssel.

-- ----------------------------------------------------------------------------
-- 10. Echtzeit in die Apps
-- ----------------------------------------------------------------------------
-- Die Apps hängen an der Publikation, nicht am Terminal. Was sie sehen,
-- geht durch RLS — ein Kunde bekommt nur die eigenen Freigaben.
do $$
begin
  if exists (select 1 from pg_publication where pubname = 'supabase_realtime') then
    begin
      alter publication supabase_realtime add table public.vend_freigaben;
    exception when duplicate_object then null;
    end;
    begin
      alter publication supabase_realtime add table public.machine_slots;
    exception when duplicate_object then null;
    end;
    begin
      alter publication supabase_realtime add table public.mhd_preisstufen;
    exception when duplicate_object then null;
    end;
  end if;
end;
$$;
