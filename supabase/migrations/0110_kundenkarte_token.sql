-- ============================================================================
-- 0110 · Kundenkarte bekommt eine eigene Kennung
-- ----------------------------------------------------------------------------
-- Geschäftsentscheidung vom 12.08.2026: Der Dauerrabatt von 5 % hängt an der
-- Kundenkarte. Scannt der Kunde den QR-Code am Automaten, soll das System
-- wissen, dass ihm 5 % auf alle Produkte zustehen.
--
-- Damit wird der QR-Code zum Schlüssel für einen Geldvorteil. Und genau
-- deshalb darf darin nicht stehen, was heute darin steht.
--
-- ----------------------------------------------------------------------------
-- Der Befund, der diese Migration ausgelöst hat
--
-- Beide Apps kodieren derzeit die rohe Konto-Kennung aus `auth.users`:
--
--   * native App:   `BS24:<Kundennummer>:<auth-uid>`
--   * Web-Frontend: `https://boerdesnack24.de/karte/<auth-uid>`
--
-- Zwei Probleme, beide ernst:
--
--   1. Sobald ein Scan Geld wert ist, wird diese Kennung zum Inhaberpapier.
--      Wer den Bildschirm einmal abfotografiert — Schulter, geteilter
--      Screenshot, Aushang —, bekommt den Rabatt dauerhaft. Die Kennung
--      lässt sich nicht sperren, ohne das Konto zu zerstören: Sie ist der
--      Primärschlüssel des Nutzers und steckt in Fremdschlüsseln quer durch
--      die Datenbank.
--
--   2. Die beiden Apps schreiben Unterschiedliches in denselben Code. Ein
--      Automat müsste zwei Formate kennen. Solange nichts scannt (heute:
--      `machine_devices` hat null Zeilen), kostet die Vereinheitlichung
--      nichts. Nach dem Ausrollen der Hardware kostet sie einen Rückruf.
--
-- Diese Migration legt deshalb eine eigene Kartenkennung an: zufällig,
-- austauschbar, ohne Bezug zur Konto-Id.
--
-- ----------------------------------------------------------------------------
-- Was diese Migration NICHT entscheidet
--
-- Ob der Automat die Kennung online nachschlägt oder ob der QR-Code sich
-- selbst tragen muss (signiertes Token, offline prüfbar), hängt daran, was
-- das Kartenterminal kann. Beide Wege brauchen diese Tabelle — der zweite
-- zusätzlich eine Signatur. Deshalb hier nur der gemeinsame Unterbau.
-- ============================================================================

create table if not exists public.customer_card (
  customer_id uuid primary key references auth.users(id) on delete cascade,
  -- 128 Bit Zufall, hexadezimal. Nicht ableitbar, nicht durchprobierbar,
  -- und vor allem: ersetzbar, ohne das Konto anzufassen.
  token       text not null unique
              default encode(gen_random_bytes(16), 'hex')
              check (token ~ '^[0-9a-f]{32}$'),
  issued_at   timestamptz not null default now(),
  rotated_at  timestamptz
);

comment on table public.customer_card is
  'Kartenkennung für den QR-Code am Automaten. Bewusst getrennt von der '
  'Konto-Id: Der Scan ist einen Rabatt wert, die Kennung muss deshalb '
  'sperrbar sein, ohne das Konto zu berühren.';

alter table public.customer_card enable row level security;
revoke all on public.customer_card from anon, authenticated;

-- Niemand liest diese Tabelle direkt — auch der eigene Kunde nicht. Der
-- Zugriff läuft ausschliesslich über die beiden Funktionen unten. Eine
-- Tabelle ohne Lesepolicy ist für `anon` und `authenticated` unsichtbar,
-- selbst wenn jemand später versehentlich ein GRANT setzt.

-- ----------------------------------------------------------------------------
-- Für die App: eigene Kartenkennung holen, beim ersten Aufruf erzeugen.
-- ----------------------------------------------------------------------------
create or replace function public.my_customer_card()
returns text
language plpgsql
security definer
set search_path = public
as $$
declare
  v_token text;
begin
  if auth.uid() is null then
    raise exception 'Anmeldung erforderlich' using errcode = 'P0001';
  end if;

  insert into public.customer_card(customer_id)
  values (auth.uid())
  on conflict (customer_id) do nothing;

  select c.token into v_token
  from public.customer_card c
  where c.customer_id = auth.uid();

  return v_token;
end;
$$;

comment on function public.my_customer_card() is
  'Liefert die Kartenkennung des angemeldeten Kunden und legt sie beim '
  'ersten Aufruf an. Inhalt des QR-Codes in beiden Apps.';

revoke all on function public.my_customer_card() from public, anon;
grant execute on function public.my_customer_card() to authenticated;

-- ----------------------------------------------------------------------------
-- Für den Automaten: Kennung nachschlagen und Anspruch beantworten.
-- ----------------------------------------------------------------------------
-- Gibt bewusst NUR zurück, was der Automat für die Preisbildung braucht:
-- die Kundennummer für den Beleg und den Rabattsatz. Kein Name, keine
-- E-Mail, kein Geburtsdatum. Ein Automat im öffentlichen Raum ist kein Ort
-- für Personendaten.
--
-- Der Rabattsatz kommt aus `app.has_subscription()` — derselben Funktion,
-- die auch Coupons, persönliche Angebote und Loyalty-Gutscheine bewacht.
-- Damit gilt automatisch dieselbe Regel: Wer gekündigt hat, bekommt am
-- Automaten keinen Rabatt mehr (Migration 0109). Es gibt keine zweite,
-- abweichende Auslegung von „Abo aktiv".
create or replace function public.card_entitlements(p_token text)
returns table(customer_number text, discount_percent int)
language sql
stable
security definer
set search_path = public, app
as $$
  select
    cu.customer_number,
    case when app.has_subscription(c.customer_id) then 5 else 0 end
  from public.customer_card c
  left join public.customers cu on cu.id = c.customer_id
  where c.token = p_token;
$$;

comment on function public.card_entitlements(text) is
  'Automaten-Nachschlag: Kartenkennung → Kundennummer und Rabattsatz. '
  'Gibt keine Personendaten zurück. 5 % nur bei aktivem Abo, dieselbe '
  'Regel wie bei allen anderen Abo-Vorteilen.';

-- NIEMALS für anon oder authenticated freigeben. Wäre die Funktion
-- öffentlich aufrufbar, könnte man fremde Kartenkennungen darauf testen
-- und damit prüfen, ob eine Karte gültig ist. Der Automat ruft sie über
-- eine signierte Edge Function auf, die mit service_role arbeitet.
revoke all on function public.card_entitlements(text) from public, anon, authenticated;
