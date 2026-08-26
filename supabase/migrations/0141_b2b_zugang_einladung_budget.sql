-- ============================================================================
-- 0141 — Schritt 4, Teil 1: Tabellen des Firmenkundenbereichs
-- ----------------------------------------------------------------------------
-- Schliesst offenen Punkt 4 aus `docs/STAND-2026-08-22.md`: „Es gibt keinen
-- Weg in die Firmentabellen hinein: keine RPC zum Anlegen einer Firma, zum
-- Einladen, zum Annehmen einer Einladung."
--
-- Seit 0117 stehen `businesses`, `business_members` und `business_locations`.
-- Seit 0121/0123 trägt jeder Kauf an einem Firmenautomaten die `business_id`,
-- hergeleitet aus dem STANDORT des Automaten. Was fehlte, war die Tür: Ohne
-- sie sind alle drei Tabellen seit fünf Tagen leer.
--
-- Umfang bewusst eng gehalten, entlang `docs/B2B-MASTERPROMPT-ABGLEICH.md`:
-- Zugang, Einladung, Budget, Auswertung. KEINE Zahlungen, KEIN Guthaben.
--
-- ----------------------------------------------------------------------------
-- ENTSCHEIDUNG 1 — Eine Firma legt Bördesnack24 an, nicht die Firma selbst
--
-- `businesses_write` verlangt `is_business_member(id, 'admin')`. Bei einer
-- neuen Firma gibt es noch kein Mitglied — die Regel kann für den ersten
-- Datensatz nicht greifen. Das ist kein Fehler der Regel, sondern der richtige
-- Ablauf: Ein Unternehmen wird Kunde durch einen VERTRAG, nicht durch eine
-- Selbstregistrierung. `business_create` verlangt deshalb `businesses.manage`
-- (Gesellschafter, Systemadministrator).
--
-- Das ist zugleich eine Sicherheitsentscheidung. Könnte sich jeder eine
-- „Firma" anlegen, könnte er einen Standort beanspruchen und fremde Käufe auf
-- seine Rechnung umleiten. Die Zuordnung eines Standorts bleibt ohnehin bei
-- `businesses.manage` (Regel `business_locations_write` aus 0117).
--
-- ----------------------------------------------------------------------------
-- ENTSCHEIDUNG 2 — Das Budget verteilt, es lädt nicht auf
--
-- Der Masterprompt (§17) verlangt ein Wallet. Ein arbeitgeberfinanziertes
-- Guthaben berührt Aufsichtsrecht (ZAG, E-Geld, Ausnahme für begrenzte Netze)
-- und Steuerrecht (Sachbezug). Beides ist ungeklärt; der Prompt sagt in §19
-- selbst, die steuerliche Behandlung nicht anzunehmen.
--
-- Hier wird deshalb KEIN Guthaben ausgegeben. Der Kauf läuft ohnehin schon auf
-- Firmenrechnung (`purchases.business_id`). Das Budget sagt nur, WIE VIEL
-- davon der Arbeitgeber trägt — es ist eine Obergrenze, keine Aufladung.
--
-- Daraus folgt der Standard: **Ohne Budgetzeile trägt der Arbeitgeber 100 %.**
-- Das Budget gewährt nichts, es deckelt. Die Datenschutzerklärung sagt
-- ausdrücklich „Der Kauf geht auf Rechnung Ihres Arbeitgebers" — ein Standard
-- von 0 % würde dem widersprechen.
--
-- ----------------------------------------------------------------------------
-- ENTSCHEIDUNG 3 — Der Anteil wird gerechnet, nicht gespeichert
--
-- Käufe treffen asynchron über Nayax ein. Ein beim Kauf gespeicherter Anteil
-- wäre falsch, sobald ein früherer Kauf nachträglich ankommt: Wer zuerst da
-- ist, bekäme das Budget, nicht wer zuerst gekauft hat. Die Aufteilung
-- entsteht deshalb bei der Abrechnung, in der Reihenfolge des KAUFZEITPUNKTS.
--
-- Dass sich der Anteil eines Kaufs dadurch noch ändern kann, solange der Monat
-- läuft, ist eine Eigenschaft und kein Mangel — eine Monatsabrechnung steht
-- am Monatsende fest, nicht vorher.
--
-- ----------------------------------------------------------------------------
-- ENTSCHEIDUNG 4 — Kein zweiter Buchungspfad
--
-- Hausregel „ein Geldfluss, eine Buchung": Diese Migration schreibt NICHTS in
-- `finance_bookings`. Die Abrechnung ist eine Sicht auf `purchases`. Die
-- Rechnung an den Firmenkunden entsteht in sevDesk und kommt über den
-- vorhandenen Sync als EINE Buchung zurück. `payments` bleibt unberührt —
-- `check_zahlungstexte.py` würde sonst den Bau abbrechen, und zwar zu Recht.
--
-- Die Funktionen (Anlegen, Einladen, Annehmen, Budget, Auswertung) stehen in
-- 0142.
-- ============================================================================

-- ----------------------------------------------------------------------------
-- Einladungen
-- ----------------------------------------------------------------------------
-- `business_members.profile_id` verweist auf ein Profil. Eine Einladung geht
-- aber an jemanden, der vielleicht noch gar kein Konto hat. Sie braucht
-- deshalb eine eigene Tabelle mit E-Mail statt Profil.
--
-- Der Token wird NICHT im Klartext gespeichert, sondern als SHA-256. Wer die
-- Tabelle lesen kann, soll damit keine Einladung annehmen können — dieselbe
-- Überlegung wie bei einem Passwort. Der Klartext wird genau einmal
-- zurückgegeben, beim Anlegen.
create table if not exists public.business_invitations (
  id           uuid primary key default gen_random_uuid(),
  business_id  uuid not null references public.businesses(id) on delete cascade,

  email        text not null
               check (email = lower(btrim(email)) and position('@' in email) > 1),
  role         app.business_role not null default 'member',

  token_hash   bytea not null,
  expires_at   timestamptz not null,

  accepted_at  timestamptz,
  accepted_by  uuid references public.profiles(id),
  revoked_at   timestamptz,

  created_at   timestamptz not null default now(),
  created_by   uuid references public.profiles(id),

  -- Angenommen heisst: von wem. Beides oder keines.
  constraint business_invitations_annahme_vollstaendig check (
    (accepted_at is null) = (accepted_by is null)
  ),
  -- Eine angenommene Einladung lässt sich nicht mehr zurückziehen.
  constraint business_invitations_nicht_beides check (
    accepted_at is null or revoked_at is null
  )
);

comment on table public.business_invitations is
  'Einladungen in einen Firmenkunden. Token als SHA-256, nie im Klartext; '
  'der Klartext wird einmalig beim Anlegen zurückgegeben.';

-- Nur EINE offene Einladung je Firma und E-Mail. Ohne das sammeln sich bei
-- jedem Klick auf „nochmal senden" gültige Token an, die alle funktionieren.
create unique index if not exists business_invitations_offen_eindeutig
  on public.business_invitations (business_id, email)
  where accepted_at is null and revoked_at is null;

create index if not exists business_invitations_token_idx
  on public.business_invitations (token_hash);

-- ----------------------------------------------------------------------------
-- Budgets
-- ----------------------------------------------------------------------------
-- `profile_id is null` bedeutet: gilt für alle Mitglieder der Firma. Eine
-- Zeile mit Profil schlägt die Standardzeile.
create table if not exists public.business_budgets (
  id            uuid primary key default gen_random_uuid(),
  business_id   uuid not null references public.businesses(id) on delete cascade,
  profile_id    uuid references public.profiles(id) on delete cascade,

  -- Brutto, weil der Automatenpreis brutto ist und der Mitarbeiter genau den
  -- sieht. Ein Nettolimit müsste jeder im Kopf umrechnen.
  monatslimit_brutto numeric(10,2) check (monatslimit_brutto is null or monatslimit_brutto >= 0),
  tageslimit_brutto  numeric(10,2) check (tageslimit_brutto  is null or tageslimit_brutto  >= 0),

  -- Anteil, den der Arbeitgeber übernimmt, bevor die Limits greifen.
  zuschuss_prozent numeric(5,2) not null default 100
                   check (zuschuss_prozent >= 0 and zuschuss_prozent <= 100),

  gueltig_von   date not null default current_date,
  gueltig_bis   date,

  created_at    timestamptz not null default now(),
  created_by    uuid references public.profiles(id),
  updated_at    timestamptz not null default now(),
  updated_by    uuid references public.profiles(id),
  deleted_at    timestamptz,

  constraint business_budgets_zeitraum check (
    gueltig_bis is null or gueltig_bis >= gueltig_von
  )
);

comment on table public.business_budgets is
  'Obergrenze für den Arbeitgeberanteil je Mitglied und Monat/Tag. Kein '
  'Guthaben: Es wird nichts aufgeladen, nur begrenzt. Ohne Zeile trägt der '
  'Arbeitgeber 100 %.';

comment on column public.business_budgets.profile_id is
  'NULL = Standardbudget für alle Mitglieder. Eine Zeile mit Profil schlägt '
  'die Standardzeile.';

-- Je Firma, Person und Beginn nur eine Zeile.
create unique index if not exists business_budgets_eindeutig
  on public.business_budgets (business_id, (coalesce(profile_id, '00000000-0000-0000-0000-000000000000'::uuid)), gueltig_von)
  where deleted_at is null;

drop trigger if exists business_budgets_updated_at on public.business_budgets;
create trigger business_budgets_updated_at
  before update on public.business_budgets
  for each row execute function app.set_updated_at();

-- Ein Budget für jemanden, der in dieser Firma kein Mitglied ist, ist
-- sinnlos — und wäre der bequemste Weg, aus Versehen Fremde zu adressieren.
-- Dieselbe Bauart wie `app.purchase_business_pruefen` aus 0121.
create or replace function app.business_budget_pruefen()
returns trigger
language plpgsql
set search_path = public, app
as $fn$
begin
  if new.profile_id is null then
    return new;
  end if;
  if not exists (
    select 1 from public.business_members m
    where m.business_id = new.business_id
      and m.profile_id  = new.profile_id
      and m.status in ('invited', 'active')
  ) then
    raise exception
      'Budget kann nicht gesetzt werden: % ist in Firma % kein Mitglied.',
      new.profile_id, new.business_id
      using errcode = '23514';
  end if;
  return new;
end;
$fn$;

drop trigger if exists business_budgets_mitglied on public.business_budgets;
create trigger business_budgets_mitglied
  before insert or update of business_id, profile_id on public.business_budgets
  for each row execute function app.business_budget_pruefen();

-- ----------------------------------------------------------------------------
-- Zeilensicherheit
-- ----------------------------------------------------------------------------
-- Beide Tabellen tragen `business_id`; `check_mandantentrennung.py` verlangt
-- deshalb eine Regel, die `app.is_business_member` aufruft. Das ist hier keine
-- Formalie: Ohne sie sähe jeder Angemeldete die Budgets fremder Firmen.
--
-- Lesen darf bei Einladungen NUR der Firmen-Administrator — eine offene
-- Einladung nennt die E-Mail einer Person, die noch nichts mit der Firma zu
-- tun hat. Mitglieder brauchen das nicht zu sehen.
alter table public.business_invitations enable row level security;
alter table public.business_budgets     enable row level security;

drop policy if exists business_invitations_read on public.business_invitations;
create policy business_invitations_read on public.business_invitations
  for select to authenticated
  using (
    app.is_business_member(business_id, 'admin')
    or public.is_admin()
    or public.auth_has_permission('businesses.manage')
  );

-- Geschrieben wird ausschliesslich über die RPC unten (SECURITY DEFINER).
-- Eine offene Schreibregel wäre die Möglichkeit, sich selbst eine Einladung
-- mit bekanntem Token einzutragen.
drop policy if exists business_invitations_write on public.business_invitations;
create policy business_invitations_write on public.business_invitations
  for all to authenticated
  using      (public.is_admin())
  with check (public.is_admin());

drop policy if exists business_budgets_read on public.business_budgets;
create policy business_budgets_read on public.business_budgets
  for select to authenticated
  using (
    -- Das eigene Budget darf man sehen. Man muss wissen, woran man ist.
    profile_id = (select auth.uid())
    or app.is_business_member(business_id, 'admin')
    or public.is_admin()
    or public.auth_has_permission('businesses.manage')
  );

drop policy if exists business_budgets_write on public.business_budgets;
create policy business_budgets_write on public.business_budgets
  for all to authenticated
  using (
    app.is_business_member(business_id, 'admin')
    or public.is_admin()
    or public.auth_has_permission('businesses.manage')
  )
  with check (
    app.is_business_member(business_id, 'admin')
    or public.is_admin()
    or public.auth_has_permission('businesses.manage')
  );

-- ----------------------------------------------------------------------------
-- Tabellenrechte
-- ----------------------------------------------------------------------------
-- Wie im gesamten Bestand: Lesen über RLS, Schreiben über die RPC. TRUNCATE
-- bleibt entzogen (0116).
grant select on public.business_invitations to authenticated;
grant select, insert, update on public.business_budgets to authenticated;
