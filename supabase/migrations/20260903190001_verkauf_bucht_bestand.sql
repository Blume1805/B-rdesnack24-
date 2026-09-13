-- ===========================================================================
-- Ein Kundenkauf schreibt den Bestand fort
-- ===========================================================================
--
-- BEFUND, DER DAZU GEFUEHRT HAT. Kunden-App und Gesellschafter-Bereich sind
-- dieselbe Anwendung auf derselben Datenbank; eine Schnittstelle zwischen
-- zwei Systemen gibt es nicht und braucht es nicht. Trotzdem war die
-- Kopplung halb: die Finanzzahlen lesen purchases und purchase_items direkt,
-- der Bestand aber nicht. purchases traegt Ausloeser fuer Rechnung, Loyalty
-- und Firmenpruefung -- keinen fuer den Warenabgang. movement_type kennt den
-- Wert 'sale' seit jeher; geschrieben hat ihn nie jemand.
--
-- Solange kein Kauf existiert, faellt das nicht auf. Mit dem ersten Verkauf
-- waeren Inventur, FIFO-Bewertung und Schwund gleichzeitig falsch: der
-- Bestand bliebe stehen, und die Differenz zur Zaehlung erschiene als
-- Schwund, den es nie gab. Genau deshalb wird das vor dem ersten Verkauf
-- geschlossen und nicht danach.
--
-- WAS DER AUSLOESER TUT. Je Kaufposition eine Bewegung vom Typ 'sale' mit
-- negativer Menge. Der vorhandene Ausloeser trg_apply_movement schreibt
-- daraufhin public.inventory fort; der Bestand sinkt also ohne weiteres
-- Zutun.
--
-- ZWEI ENTSCHEIDUNGEN, DIE MEHR SIND ALS TECHNIK.
--
-- ERSTENS: EINE LUECKE WIRD SICHTBAR GEMACHT, NICHT UEBERGANGEN.
-- purchases.machine_id und purchase_items.product_id sind nullable, die
-- gleichnamigen Spalten in inventory_movements sind es nicht. Eine Position
-- ohne Automat oder ohne Produktbezug laesst sich also nicht buchen. Sie
-- stillschweigend zu ueberspringen waere die bequeme Wahl und die
-- gefaehrliche: der Bestand waere zu hoch, und niemand wuesste, warum. Sie
-- stattdessen abzuweisen und damit den Kauf zu blockieren waere auch falsch
-- -- ein Verkauf am Automaten ist bereits geschehen, wenn wir ihn buchen.
-- Deshalb wandert jede nicht buchbare Position nach
-- public.bestandsabgang_luecken. Die Inventur kann dann sagen "drei
-- Positionen ohne Zuordnung" statt leise zu wenig zu zaehlen.
--
-- ZWEITENS: DOPPELBUCHUNG IST UNMOEGLICH GEMACHT, NICHT NUR UNWAHRSCHEINLICH.
-- source_ref traegt die Kennung der Kaufposition, und ein eindeutiger Index
-- ueber source_ref fuer Bewegungen mit source = 'verkauf' laesst dieselbe
-- Position kein zweites Mal zu. Ein wiederholter Import kann den Bestand
-- damit nicht doppelt senken -- die Datenbank verweigert es, unabhaengig
-- davon, wer die Wiederholung ausgeloest hat.
--
-- NACHTRAEGLICHE KORREKTUREN. Der Ausloeser haengt nur an INSERT. Ein
-- gebuchter Verkauf wird nicht rueckwirkend veraendert, sondern durch eine
-- Bewegung vom Typ 'correction' berichtigt. Das ist keine Bequemlichkeit,
-- sondern die Anforderung an nachvollziehbare Aufzeichnungen: was einmal
-- gebucht ist, bleibt lesbar.
--
-- ZUM BESTAND KEIN EINKAUFSPREIS. unit_cost bleibt bei Verkaufsbewegungen
-- leer. Der Wert des Abgangs ergibt sich aus den Zugangslosen nach FIFO und
-- wird dort gerechnet; ihn hier zu wiederholen hiesse, zwei Wahrheiten zu
-- pflegen.
-- ===========================================================================

-- --------------------------------------------------------------------------
-- 1. Wohin die nicht buchbaren Positionen gehen
-- --------------------------------------------------------------------------
create table if not exists public.bestandsabgang_luecken (
  id                bigint generated always as identity primary key,
  purchase_item_id  uuid not null unique,
  purchase_id       uuid not null,
  machine_id        uuid,
  product_id        uuid,
  product_label     text,
  quantity          integer not null,
  purchased_at      timestamptz not null,
  grund             text not null,
  erfasst_am        timestamptz not null default now(),
  erledigt_am       timestamptz,
  erledigt_von      uuid,
  bemerkung         text
);

comment on table public.bestandsabgang_luecken is
  'Kaufpositionen, die sich nicht als Bestandsabgang buchen liessen, weil '
  'Automat oder Produkt fehlten. Damit die Inventur ihre eigene Luecke kennt, '
  'statt stillschweigend zu wenig zu zaehlen.';
comment on column public.bestandsabgang_luecken.grund is
  'Warum nicht gebucht werden konnte, im Klartext.';
comment on column public.bestandsabgang_luecken.erledigt_am is
  'Gesetzt, wenn die Position nachgetragen oder bewusst verworfen wurde.';

create index if not exists idx_bestandsluecken_offen
  on public.bestandsabgang_luecken (erfasst_am desc)
  where erledigt_am is null;

alter table public.bestandsabgang_luecken enable row level security;

drop policy if exists bestandsluecken_lesen   on public.bestandsabgang_luecken;
drop policy if exists bestandsluecken_pflegen on public.bestandsabgang_luecken;

-- Dieselbe Schwelle wie das Bestandsjournal selbst.
create policy bestandsluecken_lesen on public.bestandsabgang_luecken
  for select to authenticated using (
    public.is_admin()
    or public.auth_has_permission('inventory.view')
    or public.auth_has_permission('inventory.edit')
  );

-- Erledigen darf nur, wer den Bestand auch pflegen darf.
create policy bestandsluecken_pflegen on public.bestandsabgang_luecken
  for update to authenticated using (
    public.is_admin() or public.auth_has_permission('inventory.edit')
  );

-- --------------------------------------------------------------------------
-- 2. Keine Position zweimal
-- --------------------------------------------------------------------------
create unique index if not exists uq_bewegung_je_kaufposition
  on public.inventory_movements (source_ref)
  where source = 'verkauf';

-- --------------------------------------------------------------------------
-- 3. Der Ausloeser
-- --------------------------------------------------------------------------
create or replace function app.kauf_bucht_bestandsabgang()
returns trigger
language plpgsql
security definer
set search_path to 'public', 'app'
as $$
declare
  v_machine   uuid;
  v_gekauft   timestamptz;
  v_grund     text;
begin
  select p.machine_id, p.purchased_at
    into v_machine, v_gekauft
    from public.purchases p
   where p.id = new.purchase_id;

  -- Eine Menge von null oder weniger ist keine Warenbewegung. Sie kommt in
  -- Gutschriftzeilen vor und darf den Bestand nicht anheben.
  if coalesce(new.quantity, 0) <= 0 then
    return new;
  end if;

  if v_machine is null or new.product_id is null then
    v_grund := case
      when v_machine is null and new.product_id is null then
        'Kauf ohne Automat und Position ohne Produktbezug'
      when v_machine is null then 'Kauf ohne Automat'
      else 'Position ohne Produktbezug'
    end;

    insert into public.bestandsabgang_luecken (
      purchase_item_id, purchase_id, machine_id, product_id,
      product_label, quantity, purchased_at, grund
    ) values (
      new.id, new.purchase_id, v_machine, new.product_id,
      new.product_label, new.quantity, coalesce(v_gekauft, now()), v_grund
    )
    on conflict (purchase_item_id) do nothing;

    return new;
  end if;

  insert into public.inventory_movements (
    machine_id, product_id, type, quantity_delta,
    source, source_ref, occurred_at, reason
  ) values (
    v_machine, new.product_id, 'sale', -new.quantity,
    'verkauf', new.id::text, coalesce(v_gekauft, now()),
    'Verkauf aus Kauf ' || new.purchase_id::text
  )
  -- Wiederholter Import derselben Position: die Bewegung steht schon.
  on conflict do nothing;

  return new;
end;
$$;

comment on function app.kauf_bucht_bestandsabgang() is
  'Schreibt je Kaufposition einen Bestandsabgang vom Typ sale. Nicht '
  'zuordenbare Positionen landen in bestandsabgang_luecken, damit die '
  'Inventur ihre Luecke kennt. Doppelbuchung verhindert der eindeutige '
  'Index uq_bewegung_je_kaufposition, nicht diese Funktion.';

drop trigger if exists trg_kauf_bestandsabgang on public.purchase_items;
create trigger trg_kauf_bestandsabgang
  after insert on public.purchase_items
  for each row execute function app.kauf_bucht_bestandsabgang();

-- --------------------------------------------------------------------------
-- 4. Die offenen Luecken abrufbar machen
-- --------------------------------------------------------------------------
create or replace function public.bestandsluecken_offen()
returns jsonb
language plpgsql
stable
security definer
set search_path to 'public', 'app'
as $$
declare ergebnis jsonb;
begin
  if not (public.is_admin()
          or public.auth_has_permission('inventory.view')
          or public.auth_has_permission('inventory.edit')) then
    raise exception 'Keine Berechtigung für Bestandsdaten' using errcode = '42501';
  end if;

  select coalesce(jsonb_agg(jsonb_build_object(
           'id',            l.id,
           'purchase_id',   l.purchase_id,
           'produkt',       l.product_label,
           'menge',         l.quantity,
           'gekauft_am',    l.purchased_at,
           'grund',         l.grund,
           'erfasst_am',    l.erfasst_am)
         order by l.purchased_at desc), '[]'::jsonb)
    into ergebnis
    from public.bestandsabgang_luecken l
   where l.erledigt_am is null;

  return ergebnis;
end;
$$;

comment on function public.bestandsluecken_offen() is
  'Offene Kaufpositionen, die nicht als Bestandsabgang gebucht werden '
  'konnten. Gehoert in jede Inventurauswertung: ohne sie sieht ein zu hoher '
  'Bestand wie ein richtiger aus.';

revoke all on function public.bestandsluecken_offen() from public, anon;
grant execute on function public.bestandsluecken_offen() to authenticated;

-- --------------------------------------------------------------------------
-- 5. Kein Nachtrag noetig
-- --------------------------------------------------------------------------
-- Stand 03.09.2026 stehen in purchases und purchase_items null Zeilen. Es
-- gibt also nichts nachzubuchen; der Ausloeser greift ab dem ersten Verkauf.
-- Waere das anders, muesste hier ein Nachtrag stehen und nicht der Hinweis
-- darauf.
