-- ============================================================================
-- 0139 — Bildregister: Herkunft und Bearbeitung jedes Produktbildes
-- ----------------------------------------------------------------------------
-- Auftrag des Auftraggebers vom 26.08.2026: Unter „Vorgänge & Prozesse" soll
-- es den Unterbegriff „Bilder" geben. Jedes Produktbild wird künftig in einem
-- festen Satz Angaben dokumentiert — Herkunft, Bearbeitung, KI-Einsatz,
-- Freigabe —, damit sich urheber- und markenrechtlich belegen lässt, woher
-- ein Bild stammt und was daran verändert wurde.
--
-- WOZU DAS GUT IST, KONKRET
--
--   * Urheberrecht: Wer das Bild aufgenommen hat und wann, steht fest. Bei
--     einer Abmahnung ist die Aufnahme der Beweis, nicht die Behauptung.
--   * Markenrecht: Die abgebildeten Marken gehören nicht uns. Wir dürfen sie
--     zeigen, weil wir die Ware verkaufen (§ 23 Abs. 1 Nr. 2, 3 MarkenG,
--     Erschöpfung nach § 24 MarkenG) — aber nicht so, dass eine
--     Geschäftsbeziehung suggeriert wird. Das Register hält fest, ob am
--     Produkt selbst etwas verändert wurde; genau das wäre die Grenze.
--   * EU AI Act: Art. 50 Abs. 4 verpflichtet den BETREIBER, offenzulegen,
--     wenn ein Bild mit KI so erzeugt oder verändert wurde, dass es einem
--     „Deepfake" nach Art. 3 Nr. 60 gleichkommt — also existierende
--     Gegenstände, Orte oder Ereignisse zeigt und dabei fälschlich echt
--     wirkt. Ein freigestellter Hintergrund ist das nicht; ein KI-erzeugtes
--     Produkt oder eine KI-erfundene, echt wirkende Umgebung schon.
--
-- WARUM `kennzeichnung_noetig` GERECHNET UND NICHT EINGETRAGEN WIRD
--
-- Wäre es ein Ankreuzfeld, stünde die eigentliche Regel im Kopf desjenigen,
-- der das Formular ausfüllt — und beim nächsten Bild anders. Sie steht hier,
-- einmal, als generierte Spalte. Wer die Einschätzung ändern will, ändert die
-- Regel und nicht 200 Häkchen.
--
-- Die Regel selbst: Kennzeichnungspflicht besteht, wenn KI im Spiel war UND
-- das Ergebnis den Gegenstand oder seine Umgebung anders zeigt, als sie ist.
-- Reines Freistellen, Zuschneiden, Aufhellen fällt nicht darunter.
--
-- Nicht abgedeckt, weil es woanders hingehört: eine Bearbeitung OHNE KI, die
-- das Produkt verändert (etwa retuschierte Füllmenge), ist kein Fall des
-- Art. 50 — aber irreführende Werbung nach § 5 UWG. Das Register hält den
-- Sachverhalt mit `produkt_veraendert` fest, damit er auffällt.
-- ============================================================================

create table if not exists public.produktbilder (
  id                uuid primary key default gen_random_uuid(),

  -- Verweis auf den Katalog, wenn es das Produkt dort schon gibt. Optional:
  -- Ein Bild kann vor dem Katalogeintrag entstehen, und dann soll die
  -- Dokumentation nicht warten müssen.
  produkt_id        uuid references public.products(id) on delete set null,

  -- Die Bezeichnung, wie sie auf dem Bild zu sehen ist („Coca-Cola 0,5 l").
  -- Bewusst zusätzlich zum Verweis: Der Katalogname kann sich ändern, das
  -- Bild zeigt aber weiterhin die Aufmachung von damals.
  produkt           text not null check (length(btrim(produkt)) between 1 and 200),

  -- Der Dateiname der unbearbeiteten Aufnahme („IMG_1234.JPG"). Er ist das
  -- Bindeglied zum Original in der Kamerarolle bzw. im Archiv.
  originalfoto      text not null check (length(btrim(originalfoto)) between 1 and 200),

  fotograf          text not null default 'Bördesnack24'
                    check (length(btrim(fotograf)) between 1 and 120),
  aufnahmedatum     date not null check (aufnahmedatum >= date '2020-01-01'),

  ki_verwendet      boolean not null default false,
  ki_system         text check (ki_system is null or length(btrim(ki_system)) between 1 and 120),
  bearbeitung       text check (bearbeitung is null or length(bearbeitung) <= 500),

  produkt_veraendert boolean not null default false,
  ki_neues_produkt   boolean not null default false,
  ki_neue_umgebung   boolean not null default false,

  art50_geprueft    boolean not null default false,

  -- Die Regel steht hier und nirgends sonst. Siehe Kopf.
  kennzeichnung_noetig boolean
    generated always as (
      ki_verwendet and (produkt_veraendert or ki_neues_produkt or ki_neue_umgebung)
    ) stored,

  freigegeben_von   text check (freigegeben_von is null or length(btrim(freigegeben_von)) between 1 and 120),
  freigabe_am       date,

  -- Wo die freigegebene Fassung liegt (Storage-Pfad im Bucket `documents`).
  -- Optional: Das Register dokumentiert, es ist kein Bildarchiv.
  bildpfad          text,
  bemerkung         text check (bemerkung is null or length(bemerkung) <= 1000),

  created_at        timestamptz not null default now(),
  created_by        uuid references public.profiles(id),
  updated_at        timestamptz not null default now(),
  updated_by        uuid references public.profiles(id),
  deleted_at        timestamptz,

  -- „KI verwendet: ja" ohne System ist keine Dokumentation, sondern eine
  -- Andeutung. Umgekehrt soll kein System dastehen, wo keine KI lief.
  constraint produktbilder_ki_system_stimmig check (
    (ki_verwendet and ki_system is not null and length(btrim(ki_system)) > 0)
    or (not ki_verwendet and ki_system is null)
  ),

  -- Ohne KI kann KI nichts erzeugt haben.
  constraint produktbilder_ki_folgen_stimmig check (
    ki_verwendet or (not ki_neues_produkt and not ki_neue_umgebung)
  ),

  -- Freigabe heisst: eine Person, ein Datum. Halb freigegeben gibt es nicht.
  constraint produktbilder_freigabe_vollstaendig check (
    (freigegeben_von is null) = (freigabe_am is null)
  ),

  -- Und freigeben kann nur, wer vorher hingesehen hat. Das ist der Grund,
  -- warum „Art. 50 geprüft" im Formular steht: Sonst wäre es ein Häkchen,
  -- das man setzt, weil es da ist.
  constraint produktbilder_freigabe_erst_nach_pruefung check (
    freigabe_am is null or art50_geprueft
  ),

  constraint produktbilder_freigabe_nicht_vor_aufnahme check (
    freigabe_am is null or freigabe_am >= aufnahmedatum
  )
);

comment on table public.produktbilder is
  'Bildregister: Herkunft, Bearbeitung, KI-Einsatz und Freigabe je '
  'Produktbild. Grundlage für den urheber- und markenrechtlichen Nachweis '
  'und für die Kennzeichnungspflicht nach Art. 50 Abs. 4 EU AI Act.';

comment on column public.produktbilder.kennzeichnung_noetig is
  'Gerechnet, nicht eingetragen: KI verwendet UND Produkt oder Umgebung '
  'verändert. Ist sie wahr, gehört ein sichtbarer Hinweis an jede Stelle, '
  'an der das Bild im Kundenbereich erscheint.';

create index if not exists produktbilder_produkt_idx
  on public.produktbilder (produkt_id) where deleted_at is null;
create index if not exists produktbilder_datum_idx
  on public.produktbilder (aufnahmedatum desc) where deleted_at is null;

drop trigger if exists produktbilder_updated_at on public.produktbilder;
create trigger produktbilder_updated_at
  before update on public.produktbilder
  for each row execute function app.set_updated_at();

-- ── Zugriff ─────────────────────────────────────────────────────────────────
-- Dieselbe Berechtigung wie der Produktkatalog: Wer Produkte pflegen darf,
-- pflegt auch deren Bilddokumentation. Ein eigenes Recht wäre eine weitere
-- Zeile in der Rollenpflege, die beim nächsten Rollenwechsel vergessen wird.
alter table public.produktbilder enable row level security;

drop policy if exists produktbilder_read on public.produktbilder;
create policy produktbilder_read on public.produktbilder
  for select to authenticated
  using (public.auth_has_permission('inventory.view'));

drop policy if exists produktbilder_write on public.produktbilder;
create policy produktbilder_write on public.produktbilder
  for all to authenticated
  using (public.is_admin() or public.auth_has_permission('inventory.edit'))
  with check (public.is_admin() or public.auth_has_permission('inventory.edit'));

-- ── Auswertung ──────────────────────────────────────────────────────────────
-- Die Liste samt Kennzahlen kommt vom Server, damit App und PDF dieselbe
-- Aussage treffen. Zwei Zählungen an zwei Stellen sind zwei Wahrheiten.
create or replace function public.produktbild_register()
returns jsonb
language plpgsql
stable
security definer
set search_path to 'public', 'app'
as $function$
declare
  ergebnis jsonb;
begin
  if not public.auth_has_permission('inventory.view') then
    raise exception 'Keine Berechtigung für den Produktkatalog'
      using errcode = '42501';
  end if;

  select jsonb_build_object(
    'stand', to_char(now() at time zone 'Europe/Berlin', 'YYYY-MM-DD"T"HH24:MI:SS'),
    'kennzahlen', jsonb_build_object(
      'gesamt',              count(*),
      'mit_ki',              count(*) filter (where b.ki_verwendet),
      'kennzeichnungspflicht', count(*) filter (where b.kennzeichnung_noetig),
      'ohne_freigabe',       count(*) filter (where b.freigabe_am is null),
      'ohne_art50_pruefung', count(*) filter (where not b.art50_geprueft)
    ),
    'bilder', coalesce(
      jsonb_agg(
        jsonb_build_object(
          'id', b.id,
          'produkt_id', b.produkt_id,
          'produkt', b.produkt,
          'originalfoto', b.originalfoto,
          'fotograf', b.fotograf,
          'aufnahmedatum', b.aufnahmedatum,
          'ki_verwendet', b.ki_verwendet,
          'ki_system', b.ki_system,
          'bearbeitung', b.bearbeitung,
          'produkt_veraendert', b.produkt_veraendert,
          'ki_neues_produkt', b.ki_neues_produkt,
          'ki_neue_umgebung', b.ki_neue_umgebung,
          'art50_geprueft', b.art50_geprueft,
          'kennzeichnung_noetig', b.kennzeichnung_noetig,
          'freigegeben_von', b.freigegeben_von,
          'freigabe_am', b.freigabe_am,
          'bildpfad', b.bildpfad,
          'bemerkung', b.bemerkung
        )
        order by b.aufnahmedatum desc, b.produkt
      ),
      '[]'::jsonb
    )
  )
  into ergebnis
  from public.produktbilder b
  where b.deleted_at is null;

  return ergebnis;
end;
$function$;

revoke all on function public.produktbild_register() from public;
grant execute on function public.produktbild_register() to authenticated;

comment on function public.produktbild_register() is
  'Bildregister als JSON: Kennzahlen und alle nicht gelöschten Einträge. '
  'Grundlage für die Ansicht in der App und für den PDF-Ausdruck.';
