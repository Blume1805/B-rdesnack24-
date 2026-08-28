-- ============================================================================
-- 0154 — Werbenetzwerk, Teil 1: Tabellen
-- ----------------------------------------------------------------------------
-- MVP-Umfang aus dem Abgleich vom 27.08.2026
-- (docs/ADVERTISING-MASTERPROMPT-ABGLEICH.md). Sechs neue Tabellen statt der
-- siebzehn aus dem Masterprompt-Entwurf; alles andere erweitert Vorhandenes.
--
-- Bewusst KEINE neue Spalte auf `businesses` für „ist Werbekunde" /
-- „ist Sponsor": Ein Unternehmen ist Werbekunde, weil es eine Zeile in
-- `advertising_space_contracts` oder `advertising_campaigns` hat, und
-- Sponsor, weil es eine Zeile in `sponsorships` hat. Ein Flag würde denselben
-- Sachverhalt zweimal sagen — genau das verlangt Punkt 42 zu vermeiden.
-- Damit ist Punkt 62 („ein Konto, mehrere Aktivitäten") ohne neue Spalte
-- erfüllt: `businesses` ist bereits die eine Zeile für alles.
-- ============================================================================

-- ============================================================================
-- Leads
-- ----------------------------------------------------------------------------
-- Rein intern. Der Werbekunde, den ein Lead beschreibt, sieht diesen Lead nie
-- — sonst bekäme er unser Vertriebsprotokoll über sich selbst zu Gesicht.
-- Deshalb absichtlich OHNE `is_business_member`-Regel, obwohl `business_id`
-- im Namen steht; das ist in `check_mandantentrennung.py` als Ausnahme
-- einzutragen, mit dieser Begründung.
-- ============================================================================

do $$
begin
  if not exists (select 1 from pg_type t join pg_namespace n on n.oid=t.typnamespace
                 where n.nspname='app' and t.typname='lead_kind') then
    create type app.lead_kind as enum
      ('advertising', 'ad_space', 'sponsoring', 'partnership', 'recruiting',
       'event', 'business');
  end if;
  if not exists (select 1 from pg_type t join pg_namespace n on n.oid=t.typnamespace
                 where n.nspname='app' and t.typname='lead_status') then
    create type app.lead_status as enum
      ('new', 'qualified', 'contacted', 'meeting', 'offer', 'negotiation',
       'won', 'lost');
  end if;
end $$;

create table if not exists public.leads (
  id            uuid primary key default gen_random_uuid(),
  kind          app.lead_kind not null,
  status        app.lead_status not null default 'new',
  company_name  text not null check (length(btrim(company_name)) between 2 and 200),
  contact_name  text check (contact_name is null or length(btrim(contact_name)) <= 200),
  email         text check (email is null or email ~ '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  phone         text check (phone is null or length(btrim(phone)) <= 40),
  message       text check (message is null or length(message) <= 2000),
  source        text check (source is null or length(source) <= 120),
  business_id   uuid references public.businesses(id),
  assigned_to   uuid references public.profiles(id),
  created_at    timestamptz not null default now(),
  created_by    uuid references public.profiles(id),
  updated_at    timestamptz not null default now(),
  updated_by    uuid references public.profiles(id),
  deleted_at    timestamptz
);

comment on table public.leads is
  'Anfragen aus Werbung, Sponsoring, Partnerschaft, Recruiting, Events. Rein '
  'intern — der beschriebene Werbekunde sieht diese Zeile nie (0154).';
comment on column public.leads.business_id is
  'Erst gesetzt, sobald aus dem Lead ein Vertrag wird. NICHT für Zugriff '
  'durch den Werbekunden gedacht — siehe Tabellenkommentar.';

drop trigger if exists trg_leads_updated_at on public.leads;
create trigger trg_leads_updated_at
  before update on public.leads
  for each row execute function app.set_updated_at();

alter table public.leads enable row level security;

drop policy if exists leads_rw on public.leads;
create policy leads_rw on public.leads
  for all to authenticated
  using (public.is_admin() or public.auth_has_permission('leads.manage'))
  with check (public.is_admin() or public.auth_has_permission('leads.manage'));

create table if not exists public.lead_activities (
  id          uuid primary key default gen_random_uuid(),
  lead_id     uuid not null references public.leads(id) on delete cascade,
  text        text not null check (length(btrim(text)) between 1 and 2000),
  created_at  timestamptz not null default now(),
  created_by  uuid references public.profiles(id)
);

comment on table public.lead_activities is
  'Verlauf zu einem Lead: Notizen, Anrufe, Terminstatus. Ein Statuswechsel '
  'auf leads.status erzeugt hier bewusst KEINEN Eintrag automatisch — wer '
  'den Status ändert, trägt bei Bedarf auch den Grund ein.';

alter table public.lead_activities enable row level security;

drop policy if exists lead_activities_rw on public.lead_activities;
create policy lead_activities_rw on public.lead_activities
  for all to authenticated
  using (public.is_admin() or public.auth_has_permission('leads.manage'))
  with check (public.is_admin() or public.auth_has_permission('leads.manage'));

-- ============================================================================
-- Kampagnen
-- ----------------------------------------------------------------------------
-- Klammert mehrere Werbeflächen-Verträge und/oder eine Coupon-Sponsorschaft
-- zu EINEM Auftrag eines Werbekunden. `welt` hält fest, was der Kunde am
-- 27.08.2026 gewählt hat: digital, analog oder beides — das bestimmt später
-- die Darstellung im Business Account, nicht nur die Abrechnung.
-- ============================================================================

do $$
begin
  if not exists (select 1 from pg_type t join pg_namespace n on n.oid=t.typnamespace
                 where n.nspname='app' and t.typname='campaign_status') then
    create type app.campaign_status as enum
      ('draft', 'pending_review', 'approved', 'active', 'paused',
       'completed', 'cancelled');
  end if;
  if not exists (select 1 from pg_type t join pg_namespace n on n.oid=t.typnamespace
                 where n.nspname='app' and t.typname='campaign_welt') then
    create type app.campaign_welt as enum ('analog', 'digital', 'komplett');
  end if;
end $$;

create table if not exists public.advertising_campaigns (
  id            uuid primary key default gen_random_uuid(),
  business_id   uuid not null references public.businesses(id) on delete restrict,
  name          text not null check (length(btrim(name)) between 2 and 160),
  welt          app.campaign_welt not null,
  status        app.campaign_status not null default 'draft',
  von           date not null,
  bis           date,
  budget_gesamt numeric(10,2) check (budget_gesamt is null or budget_gesamt >= 0),
  -- Ziel der Weiterleitung für QR-Codes und Coupon-Links dieser Kampagne.
  -- Eine Kampagne, ein Ziel — ein Werbekunde mit zwei Zielen bucht zwei
  -- Kampagnen. Das hält den Bericht (0155) einfach und eindeutig.
  ziel_url      text check (ziel_url is null or ziel_url ~ '^https://'),
  bemerkung     text check (bemerkung is null or length(bemerkung) <= 1000),
  created_at    timestamptz not null default now(),
  created_by    uuid references public.profiles(id),
  updated_at    timestamptz not null default now(),
  updated_by    uuid references public.profiles(id),
  deleted_at    timestamptz,
  check (bis is null or bis >= von)
);

comment on table public.advertising_campaigns is
  'Ein Werbeauftrag eines Unternehmens: bündelt Flächenverträge und/oder '
  'eine Coupon-Sponsorschaft. Ein Konto (businesses), mehrere Kampagnen '
  'möglich — das ist Punkt 62 des Auftrags (0154).';

drop trigger if exists trg_advertising_campaigns_updated_at on public.advertising_campaigns;
create trigger trg_advertising_campaigns_updated_at
  before update on public.advertising_campaigns
  for each row execute function app.set_updated_at();

alter table public.advertising_campaigns enable row level security;

drop policy if exists advertising_campaigns_read on public.advertising_campaigns;
create policy advertising_campaigns_read on public.advertising_campaigns
  for select to authenticated
  using (
    deleted_at is null
    and (app.is_business_member(business_id)
         or public.is_admin()
         or public.auth_has_permission('advertising.manage'))
  );

drop policy if exists advertising_campaigns_write on public.advertising_campaigns;
create policy advertising_campaigns_write on public.advertising_campaigns
  for all to authenticated
  using (public.is_admin() or public.auth_has_permission('advertising.manage'))
  with check (public.is_admin() or public.auth_has_permission('advertising.manage'));

-- Ein Vertrag über eine Werbefläche kann zu einer Kampagne gehören, die
-- weitere Flächen oder eine Coupon-Sponsorschaft desselben Kunden bündelt.
-- Erweitert 0145, statt eine zweite Zuordnungstabelle anzulegen.
alter table public.advertising_space_contracts
  add column if not exists campaign_id uuid references public.advertising_campaigns(id);

comment on column public.advertising_space_contracts.campaign_id is
  'Optionale Klammer über mehrere Flächenverträge einer Kampagne (0154). '
  'NULL = Einzelvertrag ohne Kampagne, wie bisher.';

-- ============================================================================
-- Werbemittel mit Freigabelauf
-- ============================================================================

do $$
begin
  if not exists (select 1 from pg_type t join pg_namespace n on n.oid=t.typnamespace
                 where n.nspname='app' and t.typname='creative_kind') then
    create type app.creative_kind as enum
      ('motiv_flaeche', 'aushang', 'coupon_logo', 'social_post',
       'news_beitrag', 'profil_logo');
  end if;
  if not exists (select 1 from pg_type t join pg_namespace n on n.oid=t.typnamespace
                 where n.nspname='app' and t.typname='creative_status') then
    create type app.creative_status as enum
      ('draft', 'pending_review', 'approved', 'rejected', 'revision_required',
       'active', 'expired');
  end if;
end $$;

create table if not exists public.advertising_creatives (
  id            uuid primary key default gen_random_uuid(),
  campaign_id   uuid not null references public.advertising_campaigns(id) on delete cascade,
  kind          app.creative_kind not null,
  status        app.creative_status not null default 'draft',
  file_url      text check (file_url is null or file_url ~ '^https://'),
  review_note   text check (review_note is null or length(review_note) <= 1000),
  reviewed_by   uuid references public.profiles(id),
  reviewed_at   timestamptz,
  created_at    timestamptz not null default now(),
  created_by    uuid references public.profiles(id),
  updated_at    timestamptz not null default now(),
  updated_by    uuid references public.profiles(id),
  deleted_at    timestamptz,
  -- Wer geprüft hat, wird genannt, sonst ist die Freigabe nicht nachweisbar
  -- (dasselbe Prinzip wie die Motivfreigabe in 0145/0146).
  check (status not in ('approved', 'rejected') or reviewed_by is not null)
);

comment on table public.advertising_creatives is
  'Werbemittel je Kampagne mit Freigabelauf. Kein Motiv wird ohne Freigabe '
  'aktiv (0154), dasselbe Prinzip wie die Motivfreigabe der Flächenverträge.';

drop trigger if exists trg_advertising_creatives_updated_at on public.advertising_creatives;
create trigger trg_advertising_creatives_updated_at
  before update on public.advertising_creatives
  for each row execute function app.set_updated_at();

alter table public.advertising_creatives enable row level security;

-- Zugriff läuft über die Kampagne, nicht über eine eigene business_id-Spalte
-- — es gibt keine, deshalb greift `check_mandantentrennung.py` hier nicht.
drop policy if exists advertising_creatives_read on public.advertising_creatives;
create policy advertising_creatives_read on public.advertising_creatives
  for select to authenticated
  using (
    deleted_at is null
    and exists (
      select 1 from public.advertising_campaigns c
      where c.id = advertising_creatives.campaign_id
        and (app.is_business_member(c.business_id)
             or public.is_admin()
             or public.auth_has_permission('advertising.manage'))
    )
  );

-- Ein Werbekunde darf sein eigenes Werbemittel HOCHLADEN (Punkt 27), aber
-- nur als eigenen Entwurf — freigeben darf nur, wer `creatives.approve` hat.
drop policy if exists advertising_creatives_insert on public.advertising_creatives;
create policy advertising_creatives_insert on public.advertising_creatives
  for insert to authenticated
  with check (
    status = 'draft'
    and exists (
      select 1 from public.advertising_campaigns c
      where c.id = advertising_creatives.campaign_id
        and app.is_business_member(c.business_id, 'admin')
    )
    or public.is_admin()
    or public.auth_has_permission('creatives.approve')
  );

drop policy if exists advertising_creatives_manage on public.advertising_creatives;
create policy advertising_creatives_manage on public.advertising_creatives
  for update to authenticated
  using (public.is_admin() or public.auth_has_permission('creatives.approve'))
  with check (public.is_admin() or public.auth_has_permission('creatives.approve'));

drop policy if exists advertising_creatives_delete on public.advertising_creatives;
create policy advertising_creatives_delete on public.advertising_creatives
  for delete to authenticated
  using (public.is_admin() or public.auth_has_permission('creatives.approve'));

-- ============================================================================
-- Sponsoring
-- ----------------------------------------------------------------------------
-- Wiederverwendet `app.werbevertrag_status` aus 0145 — dieselbe Bedeutung
-- (Entwurf/zur Unterschrift/aktiv/beendet/gekündigt), kein zweiter Typ dafür.
-- ============================================================================

create table if not exists public.sponsorships (
  id                uuid primary key default gen_random_uuid(),
  business_id       uuid not null references public.businesses(id) on delete restrict,
  location_id       uuid not null references public.locations(id) on delete restrict,
  campaign_id       uuid references public.advertising_campaigns(id),
  betrag_monat      numeric(10,2) not null check (betrag_monat >= 0),
  beteiligung_prozent numeric(5,2) check (beteiligung_prozent is null
                       or beteiligung_prozent between 0 and 100),
  von               date not null,
  bis               date,
  status            app.werbevertrag_status not null default 'entwurf',
  bemerkung         text check (bemerkung is null or length(bemerkung) <= 1000),
  created_at        timestamptz not null default now(),
  created_by        uuid references public.profiles(id),
  updated_at        timestamptz not null default now(),
  updated_by        uuid references public.profiles(id),
  deleted_at        timestamptz,
  check (bis is null or bis >= von)
);

comment on table public.sponsorships is
  'Sponsoring eines Standorts (typischerweise Vereinsgelände, '
  'locations.kind = club) durch ein Unternehmen. beteiligung_prozent ist '
  'die Umsatzbeteiligung an den Standort, falls vereinbart (0154).';

drop trigger if exists trg_sponsorships_updated_at on public.sponsorships;
create trigger trg_sponsorships_updated_at
  before update on public.sponsorships
  for each row execute function app.set_updated_at();

alter table public.sponsorships enable row level security;

drop policy if exists sponsorships_read on public.sponsorships;
create policy sponsorships_read on public.sponsorships
  for select to authenticated
  using (
    deleted_at is null
    and (app.is_business_member(business_id)
         or public.is_admin()
         or public.auth_has_permission('sponsorship.manage'))
  );

drop policy if exists sponsorships_write on public.sponsorships;
create policy sponsorships_write on public.sponsorships
  for all to authenticated
  using (public.is_admin() or public.auth_has_permission('sponsorship.manage'))
  with check (public.is_admin() or public.auth_has_permission('sponsorship.manage'));

-- ============================================================================
-- Coupon-Anlass als Werbeplatz
-- ----------------------------------------------------------------------------
-- Entscheidung vom 27.08.2026: Kein Erfolgspreis je Einlösung. Der
-- Werbekunde kauft den Logoplatz auf einem Coupon-Anlass. Je Anlass genau
-- EIN Partner gleichzeitig — dieselbe Mechanik wie die Doppelbelegung bei
-- Werbeflächen (0145), nur ist der Schlüssel hier `anlass` statt `space_id`.
--
-- Die fünf Anlässe entsprechen exakt den Werten, die die Kunden-App bereits
-- kennt (`offers.kind = 'daily'` und `PersonalOfferSource` in
-- `apps/mobile/lib/features/customer/domain/entities/offer.dart`). Ein
-- sechster Wert „weekly" ist am 27.08.2026 ausdrücklich NICHT gebaut worden
-- — es bleibt bei den fünf bestehenden Anlässen.
-- ============================================================================

do $$
begin
  if not exists (select 1 from pg_type t join pg_namespace n on n.oid=t.typnamespace
                 where n.nspname='app' and t.typname='coupon_anlass') then
    create type app.coupon_anlass as enum
      ('tagesangebot', 'geburtstag', 'meilenstein', 'jahrestag',
       'persoenliches_angebot');
  end if;
end $$;

create table if not exists public.advertising_coupon_sponsorships (
  id            uuid primary key default gen_random_uuid(),
  campaign_id   uuid not null references public.advertising_campaigns(id) on delete cascade,
  anlass        app.coupon_anlass not null,
  von           date not null,
  bis           date not null,
  status        app.werbevertrag_status not null default 'entwurf',
  laufzeit      daterange generated always as (daterange(von, bis, '[]')) stored,
  created_at    timestamptz not null default now(),
  created_by    uuid references public.profiles(id),
  updated_at    timestamptz not null default now(),
  updated_by    uuid references public.profiles(id),
  deleted_at    timestamptz,
  check (bis >= von),
  -- Nur ein Partner je Anlass gleichzeitig, und nur wenn es verbindlich ist
  -- (Entwürfe dürfen sich überschneiden — dieselbe Regel wie bei
  -- Werbeflächen 0145, damit mehrere Angebote parallel vorbereitet werden
  -- können).
  exclude using gist (anlass with =, laufzeit with &&)
    where (status in ('zur_unterschrift', 'aktiv') and deleted_at is null)
);

comment on table public.advertising_coupon_sponsorships is
  'Logoplatz eines Werbekunden auf einem Coupon-Anlass. Der Ausschluss '
  'verhindert zwei gleichzeitige Partner auf demselben Anlass — die '
  'Datenbank erzwingt es, nicht die Oberfläche (0154).';

drop trigger if exists trg_advertising_coupon_sponsorships_updated_at
  on public.advertising_coupon_sponsorships;
create trigger trg_advertising_coupon_sponsorships_updated_at
  before update on public.advertising_coupon_sponsorships
  for each row execute function app.set_updated_at();

alter table public.advertising_coupon_sponsorships enable row level security;

drop policy if exists advertising_coupon_sponsorships_read
  on public.advertising_coupon_sponsorships;
create policy advertising_coupon_sponsorships_read on public.advertising_coupon_sponsorships
  for select to authenticated
  using (
    deleted_at is null
    and exists (
      select 1 from public.advertising_campaigns c
      where c.id = advertising_coupon_sponsorships.campaign_id
        and (app.is_business_member(c.business_id)
             or public.is_admin()
             or public.auth_has_permission('advertising.manage'))
    )
  );

drop policy if exists advertising_coupon_sponsorships_write
  on public.advertising_coupon_sponsorships;
create policy advertising_coupon_sponsorships_write on public.advertising_coupon_sponsorships
  for all to authenticated
  using (public.is_admin() or public.auth_has_permission('advertising.manage'))
  with check (public.is_admin() or public.auth_has_permission('advertising.manage'));

-- ============================================================================
-- Weiterleitungszähler
-- ----------------------------------------------------------------------------
-- Die dritte und vierte Zahl des Abschlussberichts (0155): Aufrufe über den
-- Kampagnen-Link. Eine Zeile je Kampagne und Tag, die hochgezählt wird — kein
-- Ereignis je Klick, also nichts Personenbezogenes, das man anonymisieren
-- müsste (siehe Abgleich-Dokument, Abschnitt „Der Bericht am Ende der
-- Laufzeit").
-- ============================================================================

create table if not exists public.advertising_redirect_counts (
  campaign_id uuid not null references public.advertising_campaigns(id) on delete cascade,
  day         date not null,
  count       int not null default 0 check (count >= 0),
  primary key (campaign_id, day)
);

comment on table public.advertising_redirect_counts is
  'Ein Zähler je Kampagne und Tag, keine Ereigniszeile je Aufruf. Absichtlich '
  'ohne IP, Sitzung oder Cookie — es gibt nichts zu anonymisieren, weil nie '
  'etwas Personenbezogenes entsteht (0154).';

alter table public.advertising_redirect_counts enable row level security;

drop policy if exists advertising_redirect_counts_read on public.advertising_redirect_counts;
create policy advertising_redirect_counts_read on public.advertising_redirect_counts
  for select to authenticated
  using (
    exists (
      select 1 from public.advertising_campaigns c
      where c.id = advertising_redirect_counts.campaign_id
        and (app.is_business_member(c.business_id)
             or public.is_admin()
             or public.auth_has_permission('advertising.manage'))
    )
  );

-- Kein Schreibzugriff für authenticated/anon über RLS — das Hochzählen läuft
-- ausschließlich über die SECURITY DEFINER-Funktion in 0155, die selbst
-- entscheidet, wann sie zählt.
revoke all on public.advertising_redirect_counts from anon, authenticated;

-- ============================================================================
-- Rechte im Katalog
-- ============================================================================

insert into public.permissions (key, area, description)
values
  ('leads.manage',        'crm',        'Anfragen zu Werbung, Sponsoring, Partnerschaft verwalten'),
  ('advertising.manage',  'advertising','Werbekampagnen und Coupon-Sponsorschaften verwalten'),
  ('creatives.approve',   'advertising','Werbemittel prüfen und freigeben'),
  ('sponsorship.manage',  'advertising','Sponsoring von Standorten verwalten')
on conflict (key) do nothing;

insert into public.role_permissions (role_key, permission_key)
values
  ('system_admin', 'leads.manage'),
  ('shareholder',  'leads.manage'),
  ('system_admin', 'advertising.manage'),
  ('shareholder',  'advertising.manage'),
  ('system_admin', 'creatives.approve'),
  ('shareholder',  'creatives.approve'),
  ('system_admin', 'sponsorship.manage'),
  ('shareholder',  'sponsorship.manage')
on conflict do nothing;
