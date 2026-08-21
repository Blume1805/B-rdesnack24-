-- ============================================================================
-- 0117 · Unternehmen und Mitgliedschaften
-- ----------------------------------------------------------------------------
-- Schritt 3 des Fahrplans zum Vier-Säulen-Modell. Freigabe vom 21.08.2026.
--
-- Die heikelste Migration des Vorhabens. Bis hierher beantwortet die gesamte
-- Zeilensicherheit dieses Projekts genau eine Frage: Gehört diese Zeile dem
-- angemeldeten Menschen? Ab jetzt kommt eine zweite dazu: Gehört sie einer
-- Organisation, in der er eine Rolle hat?
--
-- Diese zweite Frage wird EINMAL beantwortet — in `app.is_business_member()` —
-- und überall aufgerufen. Sie in jeder Regel neu zu formulieren wäre die
-- sichere Art, sie irgendwann einmal falsch zu formulieren.
--
-- ----------------------------------------------------------------------------
-- Abgrenzung zum vorhandenen „B2B-Kunden"
--
-- `customers` trägt bereits `customer_type` (private/business), dazu
-- `company_name`, `tax_number`, `vat_id` und eine Rechnungsanschrift, und
-- `b2b_customers_screen.dart` exportiert daraus die „Unternehmer-Kunden"
-- ins sevDesk-Format. Das bleibt unberührt und wird NICHT ersetzt.
--
-- Es sind zwei verschiedene Sachen:
--
--   * `customers.customer_type = 'business'` — EIN Konto, EIN Mensch, der
--     auf seine Firma abrechnet. Einzelunternehmer. Eine Rechnungsanschrift
--     am Kundenkonto.
--   * `businesses` — eine ORGANISATION mit mehreren Mitgliedern, die auf
--     ihre Rechnung kaufen, mit freigegebenen Standorten und später Budgets.
--     Kein Login, sondern etwas, an dem Logins hängen.
--
-- Geprüft, bevor das hier steht: Es gibt heute 2 Kunden, beide `private`,
-- keiner mit Firmenname, USt-IdNr. oder Steuernummer. Die Grenze lässt sich
-- also ohne Datenumzug ziehen — später wäre das teuer. Ob die beiden Wege
-- eines Tages zusammengelegt werden, ist eine Produktentscheidung und keine
-- Migration; sie steht offen und wird hier nicht vorweggenommen.
-- ============================================================================

-- ----------------------------------------------------------------------------
-- Rolle und Zustand einer Mitgliedschaft
-- ----------------------------------------------------------------------------
-- `business_role` heisst bewusst NICHT `employee`. In `profiles.role` bedeutet
-- `employee` heute: Beschäftigter von Bördesnack24 mit Zugriff auf HACCP- und
-- Betriebsprotokolle. Trüge der Mitarbeiter eines Firmenkunden denselben
-- Namen, wäre eine Verwechslung im Code kein Schönheitsfehler, sondern ein
-- Zugriff auf Betriebsprotokolle.
do $$
begin
  if not exists (
    select 1 from pg_type t join pg_namespace n on n.oid = t.typnamespace
    where n.nspname = 'app' and t.typname = 'business_role'
  ) then
    create type app.business_role as enum ('admin', 'member');
  end if;

  if not exists (
    select 1 from pg_type t join pg_namespace n on n.oid = t.typnamespace
    where n.nspname = 'app' and t.typname = 'business_member_status'
  ) then
    create type app.business_member_status as enum
      ('invited', 'active', 'suspended', 'removed');
  end if;
end;
$$;

comment on type app.business_role is
  'Rolle innerhalb eines Firmenkunden. Bewusst nicht `employee` — das ist in '
  'profiles.role ein Beschäftigter von Bördesnack24.';

-- ----------------------------------------------------------------------------
-- Die Unternehmen
-- ----------------------------------------------------------------------------
create table if not exists public.businesses (
  id              uuid primary key default gen_random_uuid(),

  name            text not null,
  legal_form      text,

  billing_street  text,
  billing_zip     text,
  billing_city    text,
  billing_country text not null default 'DE',
  billing_email   text,

  tax_number      text,
  vat_id          text,

  status          app.entity_status not null default 'active',

  created_at      timestamptz not null default now(),
  created_by      uuid references public.profiles(id),
  updated_at      timestamptz not null default now(),
  updated_by      uuid references public.profiles(id),
  archived_at     timestamptz,
  deleted_at      timestamptz,

  constraint businesses_rechnungsmail_form
    check (billing_email is null or billing_email like '%_@_%')
);

comment on table public.businesses is
  'Firmenkunde als Organisation, an der Mitgliedschaften hängen. Nicht zu '
  'verwechseln mit customers.customer_type = business — das ist ein '
  'Einzelkonto mit Firmenrechnungsdaten.';

-- ----------------------------------------------------------------------------
-- Die Mitgliedschaften
-- ----------------------------------------------------------------------------
-- Die wichtigste Tabelle des ganzen Vorhabens: Sie entscheidet, wer welche
-- Firmendaten sieht.
create table if not exists public.business_members (
  business_id   uuid not null references public.businesses(id) on delete cascade,
  profile_id    uuid not null references public.profiles(id)   on delete cascade,

  role          app.business_role          not null default 'member',
  status        app.business_member_status not null default 'invited',

  invited_by    uuid references public.profiles(id),
  invited_at    timestamptz not null default now(),
  activated_at  timestamptz,

  updated_at    timestamptz not null default now(),
  updated_by    uuid references public.profiles(id),

  primary key (business_id, profile_id),

  -- Ein aktives Mitglied hat einen Aktivierungszeitpunkt, ein eingeladenes
  -- nicht. Ohne diese Regel driftet beides auseinander, und niemand merkt es.
  constraint business_members_aktiv_hat_zeitpunkt
    check ((status = 'active') = (activated_at is not null))
);

comment on table public.business_members is
  'Mitgliedschaft eines Profils in einem Firmenkunden. Grundlage jeder '
  'Mandantentrennung — app.is_business_member() liest ausschliesslich hier.';

create index if not exists idx_business_members_profil
  on public.business_members (profile_id) where status = 'active';

-- ----------------------------------------------------------------------------
-- Die freigegebenen Standorte
-- ----------------------------------------------------------------------------
create table if not exists public.business_locations (
  business_id  uuid not null references public.businesses(id) on delete cascade,
  location_id  uuid not null references public.locations(id)  on delete cascade,

  created_at   timestamptz not null default now(),
  created_by   uuid references public.profiles(id),

  primary key (business_id, location_id)
);

comment on table public.business_locations is
  'Welche Standorte die Mitglieder eines Firmenkunden nutzen dürfen. '
  'Vertragsgegenstand — wird von Bördesnack24 gepflegt, nicht vom Firmenkunden.';

-- ============================================================================
-- Der Kern
-- ============================================================================
-- Spiegelt die Prüfkette von `auth_has_permission`: aktives Mitglied, aktives
-- Profil, nicht gelöscht. Ein deaktiviertes Konto verliert damit sofort jeden
-- Firmenzugriff, ohne dass irgendwo aufgeräumt werden muss.
--
-- SECURITY DEFINER ist hier nicht Bequemlichkeit, sondern Notwendigkeit: Die
-- Zugriffsregel auf `business_members` ruft diese Funktion auf, und die
-- Funktion liest `business_members`. Als SECURITY INVOKER liefe das in eine
-- Endlosschleife („infinite recursion detected in policy"). Als DEFINER läuft
-- sie unter dem Eigentümer der Tabelle, für den RLS nicht angewandt wird —
-- nachgestellt und bestätigt, bevor diese Migration angewandt wurde.
--
-- `search_path` ist festgenagelt, wie bei jeder SECURITY-DEFINER-Funktion
-- dieses Projekts: Ohne das könnte ein Aufrufer mit eigenem Schema im Pfad
-- bestimmen, welche `business_members` gelesen wird.
create or replace function app.is_business_member(
  p_business uuid,
  p_role     app.business_role default null
)
returns boolean
language sql
stable
security definer
set search_path = public, app
as $fn$
  select exists (
    select 1
    from public.business_members m
    join public.profiles p on p.id = m.profile_id
    where m.business_id = p_business
      and m.profile_id  = (select auth.uid())
      and m.status      = 'active'
      and p.status      = 'active'
      and p.deleted_at is null
      and (p_role is null or m.role = p_role)
  );
$fn$;

comment on function app.is_business_member(uuid, app.business_role) is
  'Ist der angemeldete Mensch aktives Mitglied dieses Firmenkunden (optional '
  'in einer bestimmten Rolle)? Einzige Quelle jeder Mandantentrennung.';

grant execute on function app.is_business_member(uuid, app.business_role)
  to authenticated;

-- ============================================================================
-- Zugriff
-- ============================================================================
alter table public.businesses        enable row level security;
alter table public.business_members  enable row level security;
alter table public.business_locations enable row level security;

-- ----------------------------------------------------------------------------
-- Unternehmensstammdaten
-- ----------------------------------------------------------------------------
-- Mitglied liest, Firmen-Administrator ändert. Bördesnack24 selbst über
-- `businesses.manage`.
drop policy if exists businesses_read on public.businesses;
create policy businesses_read on public.businesses
  for select to authenticated
  using (
    deleted_at is null
    and (
      app.is_business_member(id)
      or public.is_admin()
      or public.auth_has_permission('businesses.manage')
    )
  );

drop policy if exists businesses_write on public.businesses;
create policy businesses_write on public.businesses
  for all to authenticated
  using (
    app.is_business_member(id, 'admin')
    or public.is_admin()
    or public.auth_has_permission('businesses.manage')
  )
  with check (
    app.is_business_member(id, 'admin')
    or public.is_admin()
    or public.auth_has_permission('businesses.manage')
  );

-- ----------------------------------------------------------------------------
-- Mitgliederliste
-- ----------------------------------------------------------------------------
-- Aus der Rechtematrix: Ein einfaches Firmenmitglied sieht die Mitgliederliste
-- NICHT. Wer bei seinem Arbeitgeber Essensgeld bekommt, muss nicht erfahren,
-- wer sonst noch dabei ist.
--
-- Die eigene Zeile ist davon ausgenommen, und zwar aus einem funktionalen
-- Grund und nicht aus Bequemlichkeit: Ohne sie könnte die App nicht
-- feststellen, zu welchem Unternehmen der Angemeldete überhaupt gehört. Eine
-- Zeile über sich selbst ist keine Mitgliederliste.
drop policy if exists business_members_read on public.business_members;
create policy business_members_read on public.business_members
  for select to authenticated
  using (
    profile_id = (select auth.uid())
    or app.is_business_member(business_id, 'admin')
    or public.is_admin()
    or public.auth_has_permission('businesses.manage')
  );

-- Schreiben nur Firmen-Administratoren und Bördesnack24.
--
-- KORREKTUR ZUM ENTWURF (21.08.2026). Der Entwurf begründete das `with check`
-- so: „Ohne with check prüft die Regel nur, ob die Zeile vorher dem eigenen
-- Unternehmen gehörte — nicht, ob sie es nachher noch tut." Das ist falsch,
-- und zwar nachprüfbar falsch. Nachgestellt wurden beide Fassungen mit der
-- echten Kennung von `demo-kunde`, Administrator von Firma A, der seine
-- eigene Mitgliedszeile per update auf Firma B schieben will:
--
--   for all using (…is_business_member(business_id,'admin'))
--     ohne with check          → 42501, abgewiesen
--   for all using (…is_business_member(business_id,'admin'))
--     with check (true)        → durchgelassen, Zeile lag danach bei Firma B
--
-- PostgreSQL verwendet den USING-Ausdruck ZUGLEICH als Prüfung für die neue
-- Zeile, wenn `with check` fehlt. Ein fehlendes `with check` öffnet die Lücke
-- also nicht — ein zu SCHWACHES öffnet sie. Die Gefahr liegt nicht im
-- Weglassen, sondern im Danebenschreiben.
--
-- Warum es hier trotzdem ausgeschrieben steht: Es benennt die Absicht, und es
-- schützt vor der Änderung von übermorgen, die den USING-Ausdruck verschärft
-- und die Prüfung dabei stehen lässt. Wer beide Ausdrücke nebeneinander sieht,
-- ändert sie zusammen.
drop policy if exists business_members_write on public.business_members;
create policy business_members_write on public.business_members
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
-- Freigegebene Standorte
-- ----------------------------------------------------------------------------
-- ABWEICHUNG vom allgemeinen Muster des Entwurfs, mit Absicht:
--
-- Der Entwurf nennt als Muster für jede Tabelle mit `business_id`
-- „Schreiben: nur Firmen-Administratoren". Hier wäre das falsch. Welche
-- Standorte ein Firmenkunde nutzen darf, ist Vertragsgegenstand zwischen ihm
-- und Bördesnack24 — dürfte der Firmen-Administrator selbst Zeilen anlegen,
-- könnte er sich jeden beliebigen Standort freischalten, und die
-- Standortbeschränkung wäre keine.
--
-- Lesen darf das Mitglied (es muss wissen, wo es einkaufen kann), schreiben
-- nur Bördesnack24.
drop policy if exists business_locations_read on public.business_locations;
create policy business_locations_read on public.business_locations
  for select to authenticated
  using (
    app.is_business_member(business_id)
    or public.is_admin()
    or public.auth_has_permission('businesses.manage')
  );

drop policy if exists business_locations_write on public.business_locations;
create policy business_locations_write on public.business_locations
  for all to authenticated
  using      (public.is_admin() or public.auth_has_permission('businesses.manage'))
  with check (public.is_admin() or public.auth_has_permission('businesses.manage'));

-- ----------------------------------------------------------------------------
-- Rechte auf Tabellenebene
-- ----------------------------------------------------------------------------
-- TRUNCATE, TRIGGER und REFERENCES kommen durch Migration 0116 gar nicht erst
-- an — die Standardrechte sind dort entzogen. Hier steht nur, was gelten soll.
grant select on public.businesses, public.business_members, public.business_locations
  to authenticated;
grant insert, update, delete on public.businesses, public.business_members
  to authenticated;
grant insert, update, delete on public.business_locations to authenticated;
revoke all on public.businesses        from anon;
revoke all on public.business_members  from anon;
revoke all on public.business_locations from anon;

-- ----------------------------------------------------------------------------
-- Protokoll und Zeitstempel
-- ----------------------------------------------------------------------------
drop trigger if exists trg_audit on public.businesses;
create trigger trg_audit after insert or update or delete on public.businesses
  for each row execute function app.audit_row();
drop trigger if exists trg_businesses_updated_at on public.businesses;
create trigger trg_businesses_updated_at before update on public.businesses
  for each row execute function app.set_updated_at();

drop trigger if exists trg_audit on public.business_members;
create trigger trg_audit after insert or update or delete on public.business_members
  for each row execute function app.audit_row();
drop trigger if exists trg_business_members_updated_at on public.business_members;
create trigger trg_business_members_updated_at before update on public.business_members
  for each row execute function app.set_updated_at();

drop trigger if exists trg_audit on public.business_locations;
create trigger trg_audit after insert or update or delete on public.business_locations
  for each row execute function app.audit_row();

-- ============================================================================
-- Nachtrag zu Schritt 2: Zahlungen bekommen ihren Firmenzahler
-- ============================================================================
-- Migration 0115 hat `payments.payer_business_id` angelegt, aber per Prüfregel
-- leer gehalten und ohne Fremdschlüssel gelassen — es gab keine Tabelle, auf
-- die er hätte zeigen können. Jetzt gibt es sie.
alter table public.payments
  drop constraint if exists payments_firmenzahler_erst_ab_schritt3;

alter table public.payments
  drop constraint if exists payments_payer_business_id_fkey;
alter table public.payments
  add constraint payments_payer_business_id_fkey
  foreign key (payer_business_id) references public.businesses(id);

create index if not exists idx_payments_payer_business
  on public.payments (payer_business_id) where payer_business_id is not null;

comment on column public.payments.payer_business_id is
  'Zahlendes Unternehmen. Seit Migration 0117 mit Fremdschlüssel auf businesses.';

-- Aus der Rechtematrix, Zeile „Zahlungen": Firmenmitglied sieht die eigenen,
-- Firmen-Administrator die des Unternehmens. Die eigenen sind über
-- `payer_profile_id` bereits abgedeckt; hier kommt der Firmenblick dazu.
drop policy if exists payments_read on public.payments;
create policy payments_read on public.payments
  for select to authenticated
  using (
    payer_profile_id = (select auth.uid())
    or (payer_business_id is not null
        and app.is_business_member(payer_business_id, 'admin'))
    or public.is_admin()
    or public.auth_has_permission('payments.view')
  );

-- ============================================================================
-- Rechte im Katalog
-- ============================================================================
-- Nur EIN neues Recht. Die Firmenrechte stehen bewusst NICHT im
-- `permissions`-Katalog: Sie kommen aus der Mitgliedschaft, nicht aus der
-- Kontorolle. Wer Firmen-Administrator ist, ist es für SEIN Unternehmen —
-- ein Katalogrecht würde für alle gelten.
insert into public.permissions (key, area, description)
values ('businesses.manage', 'crm', 'Firmenkunden, Mitglieder und Standortfreigaben pflegen')
on conflict (key) do nothing;

insert into public.role_permissions (role_key, permission_key)
values ('system_admin', 'businesses.manage'),
       ('shareholder',  'businesses.manage')
on conflict do nothing;
