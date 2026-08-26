-- ============================================================================
-- 0145 — Schritt 5, Teil 1: Werbeflächen als Inventar
-- ----------------------------------------------------------------------------
-- Zweiter Schritt des B2B-Vorhabens, entlang `docs/B2B-MASTERPROMPT-ABGLEICH.md`.
-- Bewusst VOR der Werbung in der App: Die Vermietung einer physischen Fläche
-- ist Vertrag und Rechnung — keine Einwilligung, kein Tracking, keine
-- Kennzeichnung im Kundenbereich, keine Rechtstextänderung. Der schnellste
-- Umsatz mit dem geringsten Risiko.
--
-- Umfang: Inventar, Verträge, Motivfreigabe, Auslastung. KEINE Ausspielung
-- von Werbung, KEINE Zahlungen, KEIN Marktplatz.
--
-- ----------------------------------------------------------------------------
-- ENTSCHEIDUNG 1 — „vermietet" ist kein Zustand der Fläche
--
-- Der Masterprompt (§27) schlägt für die Fläche einen Status
-- AVAILABLE/RESERVED/ACTIVE/BLOCKED/MAINTENANCE vor. Die ersten drei Werte
-- ergeben sich aber aus den Verträgen. Stünden sie zusätzlich an der Fläche,
-- gäbe es zwei Wahrheiten, die auseinanderlaufen, sobald jemand einen Vertrag
-- ändert, ohne den Status nachzuziehen — derselbe Fehler wie bei
-- `kennzeichnung_noetig` (0139) und `finance_bookings.direction` (0131).
--
-- `betriebszustand` sagt deshalb NUR, ob die Fläche technisch nutzbar ist:
-- `nutzbar`, `gesperrt`, `wartung`. Ob sie frei ist, wird gerechnet.
--
-- ----------------------------------------------------------------------------
-- ENTSCHEIDUNG 2 — Doppelbelegung verhindert die Datenbank, nicht das Formular
--
-- Eine Fläche zweimal gleichzeitig zu vermieten ist der teuerste Fehler
-- dieses Geschäftsfelds: Zwei Kunden haben bezahlt, einer bekommt nichts, und
-- es fällt erst bei der Montage auf. Eine Prüfung in der Oberfläche hilft
-- dagegen nicht — zwei gleichzeitige Buchungen sehen beide eine freie Fläche.
--
-- Deshalb ein Ausschluss über `gist (space_id =, laufzeit &&)`, wirksam nur
-- für verbindliche Verträge (`zur_unterschrift`, `aktiv`). Er braucht
-- `btree_gist` für den Gleichheitsvergleich auf uuid.
--
-- ENTWÜRFE dürfen sich überschneiden, und das ist Absicht: Man soll mehrere
-- Angebote für denselben Platz vorbereiten können. Verbindlich wird nur eines.
--
-- ----------------------------------------------------------------------------
-- ENTSCHEIDUNG 3 — Kein Motiv ohne Freigabe an unseren Automaten
--
-- Was auf unserem Automaten klebt, verantworten wir mit — wettbewerbs- und
-- jugendschutzrechtlich. Ein Vertrag kann deshalb erst `zur_unterschrift`
-- oder `aktiv` werden, wenn eine Person namentlich freigegeben hat. Das ist
-- eine Prüfregel der Tabelle, keine Bitte an die Oberfläche.
--
-- ----------------------------------------------------------------------------
-- ENTSCHEIDUNG 4 — Der Preis wird im Vertrag festgeschrieben
--
-- `advertising_spaces.listenpreis_monat` ist die Liste, `contracts.preis_monat`
-- der vereinbarte Preis. Ändert sich die Liste, ändert sich kein laufender
-- Vertrag. Ohne diese Trennung würde eine Preispflege rückwirkend Rechnungen
-- verändern.
-- ============================================================================

create extension if not exists btree_gist with schema extensions;

do $$
begin
  if not exists (select 1 from pg_type t join pg_namespace n on n.oid=t.typnamespace
                 where n.nspname='app' and t.typname='werbeflaeche_position') then
    create type app.werbeflaeche_position as enum
      ('front', 'seite_links', 'seite_rechts', 'oben', 'rueckseite', 'display');
  end if;
  if not exists (select 1 from pg_type t join pg_namespace n on n.oid=t.typnamespace
                 where n.nspname='app' and t.typname='werbeflaeche_zustand') then
    create type app.werbeflaeche_zustand as enum ('nutzbar', 'gesperrt', 'wartung');
  end if;
  if not exists (select 1 from pg_type t join pg_namespace n on n.oid=t.typnamespace
                 where n.nspname='app' and t.typname='werbevertrag_status') then
    create type app.werbevertrag_status as enum
      ('entwurf', 'zur_unterschrift', 'aktiv', 'beendet', 'gekuendigt');
  end if;
end $$;

create table if not exists public.advertising_spaces (
  id            uuid primary key default gen_random_uuid(),
  machine_id    uuid not null references public.machines(id) on delete cascade,
  position      app.werbeflaeche_position not null,
  bezeichnung   text check (bezeichnung is null or length(bezeichnung) <= 120),
  breite_mm     int check (breite_mm is null or breite_mm between 10 and 5000),
  hoehe_mm      int check (hoehe_mm  is null or hoehe_mm  between 10 and 5000),
  listenpreis_monat numeric(10,2) not null default 0
                    check (listenpreis_monat >= 0),
  betriebszustand app.werbeflaeche_zustand not null default 'nutzbar',
  bemerkung     text check (bemerkung is null or length(bemerkung) <= 1000),
  created_at    timestamptz not null default now(),
  created_by    uuid references public.profiles(id),
  updated_at    timestamptz not null default now(),
  updated_by    uuid references public.profiles(id),
  deleted_at    timestamptz
);

comment on table public.advertising_spaces is
  'Physische Werbeflächen an unseren Automaten. Der Betriebszustand sagt nur, '
  'ob die Fläche technisch nutzbar ist — ob sie frei ist, ergibt sich aus den '
  'Verträgen.';

comment on column public.advertising_spaces.betriebszustand is
  'NUR der technische Zustand. „vermietet" gibt es hier bewusst nicht: '
  'Belegung wird aus advertising_space_contracts gerechnet, nicht doppelt '
  'geführt.';

create unique index if not exists advertising_spaces_je_automat
  on public.advertising_spaces (machine_id, position)
  where deleted_at is null;

drop trigger if exists advertising_spaces_updated_at on public.advertising_spaces;
create trigger advertising_spaces_updated_at
  before update on public.advertising_spaces
  for each row execute function app.set_updated_at();

create table if not exists public.advertising_space_contracts (
  id            uuid primary key default gen_random_uuid(),
  space_id      uuid not null references public.advertising_spaces(id) on delete cascade,
  business_id   uuid not null references public.businesses(id) on delete restrict,

  von           date not null,
  -- `bis is null` heisst unbefristet. Der Ausschluss unten behandelt das
  -- richtig, weil `daterange(von, null, '[]')` nach oben offen ist.
  bis           date,
  preis_monat   numeric(10,2) not null check (preis_monat >= 0),
  kuendigungsfrist_tage int not null default 30
                        check (kuendigungsfrist_tage between 0 and 365),

  status        app.werbevertrag_status not null default 'entwurf',

  motiv_beschreibung   text check (motiv_beschreibung is null or length(motiv_beschreibung) <= 500),
  motiv_freigegeben_am date,
  motiv_freigegeben_von text check (motiv_freigegeben_von is null or length(btrim(motiv_freigegeben_von)) between 1 and 120),

  bemerkung     text check (bemerkung is null or length(bemerkung) <= 1000),

  laufzeit      daterange generated always as (daterange(von, bis, '[]')) stored,

  created_at    timestamptz not null default now(),
  created_by    uuid references public.profiles(id),
  updated_at    timestamptz not null default now(),
  updated_by    uuid references public.profiles(id),
  deleted_at    timestamptz,

  constraint werbevertrag_zeitraum check (bis is null or bis >= von),
  constraint werbevertrag_freigabe_vollstaendig check (
    (motiv_freigegeben_am is null) = (motiv_freigegeben_von is null)
  ),
  constraint werbevertrag_aktiv_nur_mit_freigabe check (
    status not in ('zur_unterschrift', 'aktiv') or motiv_freigegeben_am is not null
  )
);

comment on table public.advertising_space_contracts is
  'Mietverträge über eine Werbefläche. Überschneidungen verhindert die '
  'Datenbank über einen Ausschluss, nicht die Oberfläche.';

alter table public.advertising_space_contracts
  drop constraint if exists werbevertrag_keine_doppelbelegung;
alter table public.advertising_space_contracts
  add constraint werbevertrag_keine_doppelbelegung
  exclude using gist (space_id with =, laufzeit with &&)
  where (status in ('zur_unterschrift', 'aktiv') and deleted_at is null);

create index if not exists werbevertrag_firma_idx
  on public.advertising_space_contracts (business_id) where deleted_at is null;
create index if not exists werbevertrag_flaeche_idx
  on public.advertising_space_contracts (space_id) where deleted_at is null;

drop trigger if exists werbevertrag_updated_at on public.advertising_space_contracts;
create trigger werbevertrag_updated_at
  before update on public.advertising_space_contracts
  for each row execute function app.set_updated_at();

-- ----------------------------------------------------------------------------
-- Zeilensicherheit
-- ----------------------------------------------------------------------------
-- `advertising_space_contracts` trägt `business_id`; `check_mandantentrennung.py`
-- verlangt deshalb eine Regel, die `app.is_business_member` aufruft. Genau das
-- ist hier auch fachlich richtig: Der Werbekunde soll seine eigenen Verträge
-- sehen — und nur die.
--
-- Bei den Flächen ist es feiner: Sie gehören uns, nicht dem Werbekunden. Er
-- sieht eine Fläche nur, wenn er einen Vertrag darauf hat. Einen Marktplatz
-- mit allen freien Flächen gibt es bewusst noch nicht (Phase 2).
alter table public.advertising_spaces           enable row level security;
alter table public.advertising_space_contracts  enable row level security;

drop policy if exists advertising_spaces_read on public.advertising_spaces;
create policy advertising_spaces_read on public.advertising_spaces
  for select to authenticated
  using (
    deleted_at is null
    and (
      public.is_admin()
      or public.auth_has_permission('locations.manage')
      or exists (
        select 1 from public.advertising_space_contracts c
        where c.space_id = advertising_spaces.id
          and c.deleted_at is null
          and app.is_business_member(c.business_id)
      )
    )
  );

drop policy if exists advertising_spaces_write on public.advertising_spaces;
create policy advertising_spaces_write on public.advertising_spaces
  for all to authenticated
  using      (public.is_admin() or public.auth_has_permission('locations.manage'))
  with check (public.is_admin() or public.auth_has_permission('locations.manage'));

drop policy if exists werbevertrag_read on public.advertising_space_contracts;
create policy werbevertrag_read on public.advertising_space_contracts
  for select to authenticated
  using (
    app.is_business_member(business_id)
    or public.is_admin()
    or public.auth_has_permission('locations.manage')
  );

drop policy if exists werbevertrag_write on public.advertising_space_contracts;
create policy werbevertrag_write on public.advertising_space_contracts
  for all to authenticated
  using      (public.is_admin() or public.auth_has_permission('locations.manage'))
  with check (public.is_admin() or public.auth_has_permission('locations.manage'));

grant select on public.advertising_spaces to authenticated;
grant select on public.advertising_space_contracts to authenticated;
