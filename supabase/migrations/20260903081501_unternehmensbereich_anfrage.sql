-- Unternehmensbereich: Werbe- und Sponsoring-Anfrage.
--
-- Grundsatz dieser Migration: bestehende Strukturen erweitern, keine zweite
-- Datenquelle danebenstellen. Konkret wird NICHT die im Auftrag skizzierte
-- Tabelle advertising_inquiries angelegt — public.leads erfüllt diesen Zweck
-- bereits, hat lead_kind, lead_status, lead_activities und eine RLS, die
-- Anfragen ausschließlich der Verwaltung zeigt. Ergänzt werden nur die Felder
-- und Kindtabellen, die es dort wirklich noch nicht gibt.

-- ---------------------------------------------------------------------------
-- 1. Betriebsparameter
-- ---------------------------------------------------------------------------
-- Bisher standen Betriebskonstanten als Literale in einzelnen Funktionen —
-- die Mindestgruppengröße 30 zum Beispiel direkt in
-- advertising_campaign_report. Solche Werte gehören an eine Stelle, sonst
-- ändert man sie an einer und übersieht die zweite.
create table if not exists app.betriebsparameter (
  schluessel   text primary key,
  wert         text        not null,
  beschreibung text        not null,
  geaendert_am timestamptz not null default now(),
  geaendert_von uuid
);

comment on table app.betriebsparameter is
  'Betriebskonstanten an einer Stelle. Kein Frontend liest hier, kein Frontend '
  'schreibt hier — die Werte werden ausschließlich serverseitig ausgewertet.';

insert into app.betriebsparameter (schluessel, wert, beschreibung) values
  ('anfrage.mail_intern', 'boerdesnack24@gmail.com',
   'Empfänger der internen Benachrichtigung über eine neue Werbeanfrage.'),
  ('anfrage.drossel_je_mail_tag', '3',
   'Höchstzahl Anfragen je E-Mail-Adresse und Tag.'),
  ('anfrage.drossel_gesamt_tag', '80',
   'Höchstzahl Anfragen aller Absender je Tag. Notbremse gegen verteilten Spam.'),
  ('anfrage.eskalation_stunden', '48',
   'Nach so vielen Stunden ohne Erstkontakt gilt eine Anfrage als überfällig.'),
  ('analytics.mindestgruppe', '30',
   'Kleinste Zahl, die im Werbekunden-Dashboard ausgewiesen werden darf. '
   'Darunter wird nichts angezeigt und nichts exportiert. Der Wert ist eine '
   'betriebliche Festlegung und rechtlich noch nicht abschließend geprüft.')
on conflict (schluessel) do nothing;

create or replace function app.parameter(p_schluessel text)
returns text language sql stable security definer set search_path to 'public','app' as $$
  select wert from app.betriebsparameter where schluessel = p_schluessel;
$$;

create or replace function app.parameter_zahl(p_schluessel text, p_ersatz int)
returns int language sql stable security definer set search_path to 'public','app' as $$
  select coalesce((select wert::int from app.betriebsparameter where schluessel = p_schluessel), p_ersatz);
$$;

comment on function app.parameter_zahl(text, int) is
  'Liest einen Zahlparameter. Der Ersatzwert greift nur, wenn der Schlüssel '
  'fehlt — er ist eine Notbremse gegen einen leeren Parametersatz, kein '
  'zweiter Ort für die Festlegung.';

-- ---------------------------------------------------------------------------
-- 2. Rollenprüfung: viewer sauber einhängen
-- ---------------------------------------------------------------------------
-- Vor dieser Migration traf app.is_business_member(b) ohne Rollenangabe jede
-- Rolle. Mit dem neuen Wert 'viewer' hätte das 19 bestehende Policies
-- stillschweigend geweitet — unter anderem auf businesses.tax_number,
-- businesses.vat_id, advertising_space_contracts.preis_monat und
-- sponsorships.betrag_monat. Deshalb wird die rollenlose Prüfung ausdrücklich
-- auf admin und member festgelegt. Für die beiden bisher einzigen Rollen ist
-- das Verhalten unverändert.
create or replace function app.is_business_member(
  p_business uuid,
  p_role app.business_role default null
) returns boolean
language sql stable security definer set search_path to 'public','app' as $$
  select exists (
    select 1
    from public.business_members m
    join public.profiles p on p.id = m.profile_id
    where m.business_id = p_business
      and m.profile_id  = (select auth.uid())
      and m.status      = 'active'
      and p.status      = 'active'
      and p.deleted_at is null
      and case
            when p_role is not null then m.role = p_role
            else m.role in ('admin', 'member')
          end
  );
$$;

comment on function app.is_business_member(uuid, app.business_role) is
  'Mitgliedschaft mit Handlungsrecht. Ohne Rollenangabe: admin oder member — '
  'ausdrücklich NICHT viewer, weil an dieser Funktion Policies auf '
  'Stammdaten, Vertragspreise und Sponsoringbeträge hängen. Für reinen '
  'Lesezugriff auf Kampagnenzahlen gibt es app.darf_kampagne_lesen.';

-- Die weitere Prüfung für den Analytics-Bereich: hier ist viewer erwünscht.
create or replace function app.is_business_reader(p_business uuid)
returns boolean
language sql stable security definer set search_path to 'public','app' as $$
  select exists (
    select 1
    from public.business_members m
    join public.profiles p on p.id = m.profile_id
    where m.business_id = p_business
      and m.profile_id  = (select auth.uid())
      and m.status      = 'active'
      and p.status      = 'active'
      and p.deleted_at is null
  );
$$;

comment on function app.is_business_reader(uuid) is
  'Jede aktive Mitgliedschaft, viewer eingeschlossen. Ausschließlich für '
  'aggregierte Kampagnenzahlen zu verwenden, nie für Stammdaten, Preise, '
  'Verträge, Rechnungen oder personenbezogene Daten.';

create or replace function app.darf_kampagne_lesen(p_campaign uuid)
returns boolean
language sql stable security definer set search_path to 'public','app' as $$
  select exists (
    select 1 from public.advertising_campaigns c
    where c.id = p_campaign
      and c.deleted_at is null
      and (app.is_business_reader(c.business_id)
           or public.is_admin()
           or public.auth_has_permission('advertising.manage'))
  );
$$;

-- ---------------------------------------------------------------------------
-- 3. Produktkatalog
-- ---------------------------------------------------------------------------
create type app.werbeprodukt_kategorie as enum (
  'werbung_analog', 'werbung_digital', 'sponsoring',
  'partnerschaft', 'social_media', 'coupon'
);

create type app.werbepreis_art as enum (
  'einmalig', 'monatlich', 'jaehrlich', 'kampagne', 'individuell'
);

create table if not exists public.advertising_products (
  id                  uuid primary key default gen_random_uuid(),
  schluessel          text not null unique,
  name                text not null,
  kategorie           app.werbeprodukt_kategorie not null,
  kurzbeschreibung    text not null,
  beschreibung        text,
  leistungen          text[] not null default '{}',
  zielgruppe          text,
  bild_url            text,
  preis               numeric(12,2),
  preis_art           app.werbepreis_art not null,
  ab_preis            boolean not null default false,
  mindestlaufzeit_monate int,
  zusatzkosten_hinweis text,
  aktiv               boolean not null default true,
  sortierung          int not null default 100,
  created_at          timestamptz not null default now(),
  created_by          uuid,
  updated_at          timestamptz not null default now(),
  updated_by          uuid,
  -- § 5 UWG und PAngV: entweder es gibt einen Preis, oder es steht
  -- ausdrücklich „auf Anfrage" da. Ein Produkt mit preis_art 'individuell'
  -- und gleichzeitig gesetztem Preis wäre beides zugleich und damit
  -- irreführend; ein Produkt mit fester Preisart und ohne Preis wäre eine
  -- leere Preisangabe.
  constraint advertising_products_preis_stimmig check (
    (preis_art = 'individuell' and preis is null)
    or (preis_art <> 'individuell' and preis is not null and preis >= 0)
  ),
  -- „ab" ohne Preis ergibt keinen Satz.
  constraint advertising_products_ab_preis_nur_mit_preis check (
    not ab_preis or preis is not null
  ),
  constraint advertising_products_laufzeit check (
    mindestlaufzeit_monate is null or mindestlaufzeit_monate > 0
  )
);

comment on table public.advertising_products is
  'Katalog der buchbaren Werbe- und Sponsoringleistungen. Einzige Quelle für '
  'Preise im Unternehmensbereich — im Frontend steht kein Preis im Code.';
comment on column public.advertising_products.ab_preis is
  'true zeigt „ab X €". Nur setzen, wenn X tatsächlich der Regelfall und nicht '
  'der seltene Ausnahmefall ist.';

create index if not exists advertising_products_katalog_idx
  on public.advertising_products (aktiv, kategorie, sortierung, name);

alter table public.advertising_products enable row level security;

-- Katalog lesen darf jeder — es ist ein Preisaushang. Schreiben darf nur die
-- Verwaltung, und zwar über RPC; die Policy ist der zweite Riegel.
create policy advertising_products_read on public.advertising_products
  for select to anon, authenticated
  using (aktiv);

create policy advertising_products_read_intern on public.advertising_products
  for select to authenticated
  using (public.is_admin() or public.auth_has_permission('advertising.manage'));

create policy advertising_products_write on public.advertising_products
  for all to authenticated
  using (public.is_admin() or public.auth_has_permission('advertising.manage'))
  with check (public.is_admin() or public.auth_has_permission('advertising.manage'));

-- ---------------------------------------------------------------------------
-- 4. leads erweitern
-- ---------------------------------------------------------------------------
alter table public.leads
  add column if not exists inquiry_number       text,
  add column if not exists website              text,
  add column if not exists budget               numeric(12,2),
  add column if not exists wunsch_start         date,
  add column if not exists wunsch_laufzeit_monate int,
  add column if not exists zielgruppe           text,
  add column if not exists region               text,
  add column if not exists standort_egal        boolean not null default false,
  add column if not exists werbemittel_vorhanden boolean,
  add column if not exists werbemittel_durch_uns boolean,
  add column if not exists datenschutz_zugestimmt_am timestamptz,
  add column if not exists marketing_einwilligung boolean not null default false,
  add column if not exists erstkontakt_am       timestamptz;

create unique index if not exists leads_inquiry_number_uidx
  on public.leads (inquiry_number) where inquiry_number is not null;

comment on column public.leads.inquiry_number is
  'Anfragenummer BS24-XXXXXX. Wird dem Interessenten angezeigt und in beiden '
  'E-Mails geführt. Zufällig, nicht fortlaufend — eine laufende Nummer würde '
  'das Anfrageaufkommen preisgeben und ließe sich durchprobieren.';
comment on column public.leads.marketing_einwilligung is
  'Getrennt und freiwillig. Eine Anfrage allein ist keine Einwilligung in '
  'Werbung; ohne dieses Feld darf die Adresse nicht in einen Verteiler.';
comment on column public.leads.erstkontakt_am is
  'Zeitpunkt der ersten Rückmeldung an den Interessenten. Grundlage der '
  '48-Stunden-Überwachung — nicht der Statuswechsel, denn ein Status lässt '
  'sich setzen, ohne dass jemand angerufen hat.';

-- ---------------------------------------------------------------------------
-- 5. Positionen und Standorte einer Anfrage
-- ---------------------------------------------------------------------------
create table if not exists public.advertising_inquiry_items (
  id            uuid primary key default gen_random_uuid(),
  lead_id       uuid not null references public.leads(id) on delete cascade,
  product_id    uuid references public.advertising_products(id) on delete set null,
  menge         int  not null default 1 check (menge > 0),
  -- Eingefroren, weil eine Anfrage von gestern zu den Bedingungen von gestern
  -- gestellt wurde. Der Katalog darf sich ändern, die Anfrage nicht.
  produkt_name  text not null,
  produkt_schluessel text not null,
  preis         numeric(12,2),
  preis_art     app.werbepreis_art not null,
  ab_preis      boolean not null default false,
  notiz         text,
  created_at    timestamptz not null default now()
);

comment on table public.advertising_inquiry_items is
  'Positionen einer Werbeanfrage mit dem zum Zeitpunkt der Anfrage '
  'angezeigten Preis. Wird nie nachträglich an den Katalog angeglichen. '
  'product_id darf null werden, wenn ein Produkt später aus dem Katalog '
  'verschwindet — Name, Schlüssel und Preis bleiben trotzdem lesbar.';

create index if not exists advertising_inquiry_items_lead_idx
  on public.advertising_inquiry_items (lead_id);

create table if not exists public.advertising_inquiry_locations (
  lead_id     uuid not null references public.leads(id) on delete cascade,
  location_id uuid not null references public.locations(id) on delete cascade,
  primary key (lead_id, location_id)
);

comment on table public.advertising_inquiry_locations is
  'Vom Interessenten gewünschte Standorte. Leer bedeutet nicht „keine '
  'Angabe" — dafür steht leads.standort_egal, damit sich beides '
  'unterscheiden lässt.';

alter table public.advertising_inquiry_items    enable row level security;
alter table public.advertising_inquiry_locations enable row level security;

-- Beide Kindtabellen folgen der Zugriffsregel von leads: nur die Verwaltung.
-- Ausdrücklich kein Zugriff für den Interessenten — es gibt keinen Weg, mit
-- der Anfragenummer eine fremde Anfrage aufzurufen.
create policy advertising_inquiry_items_rw on public.advertising_inquiry_items
  for all to authenticated
  using (public.is_admin() or public.auth_has_permission('leads.manage'))
  with check (public.is_admin() or public.auth_has_permission('leads.manage'));

create policy advertising_inquiry_locations_rw on public.advertising_inquiry_locations
  for all to authenticated
  using (public.is_admin() or public.auth_has_permission('leads.manage'))
  with check (public.is_admin() or public.auth_has_permission('leads.manage'));

-- ---------------------------------------------------------------------------
-- 6. Drossel gegen Spam
-- ---------------------------------------------------------------------------
create table if not exists app.anfrage_drossel (
  schluessel text not null,
  tag        date not null,
  anzahl     int  not null default 0,
  primary key (schluessel, tag)
);

comment on table app.anfrage_drossel is
  'Zähler je Absender und Tag. Serverseitig, weil eine Prüfung im Browser '
  'kein Schutz ist. Was hier NICHT möglich ist: eine Begrenzung je '
  'IP-Adresse — die steht einer Datenbankfunktion nicht zur Verfügung. Diese '
  'Grenze gehört an den Rand des Systems (Edge Function, Reverse Proxy, '
  'Turnstile) und ist bis dahin eine offene Lücke, keine erledigte Anforderung.';

create or replace function app.anfrage_drossel_zaehlen(p_schluessel text, p_grenze int)
returns boolean
language plpgsql security definer set search_path to 'public','app' as $$
declare v_neu int;
begin
  insert into app.anfrage_drossel (schluessel, tag, anzahl)
  values (p_schluessel, app.heute(), 1)
  on conflict (schluessel, tag) do update
    set anzahl = app.anfrage_drossel.anzahl + 1
  returning anzahl into v_neu;
  return v_neu <= p_grenze;
end;
$$;

comment on function app.anfrage_drossel_zaehlen(text, int) is
  'Zählt hoch und meldet, ob die Grenze noch eingehalten ist. Zählt auch die '
  'abgelehnten Versuche mit — sonst könnte man durch wiederholtes Anlaufen '
  'beliebig oft an der Grenze kratzen.';

-- ---------------------------------------------------------------------------
-- 7. Anfragenummer
-- ---------------------------------------------------------------------------
create or replace function app.anfrage_nummer()
returns text
language plpgsql security definer set search_path to 'public','app' as $$
declare
  -- Ohne 0/O und 1/I: die Nummer wird am Telefon vorgelesen.
  v_zeichen constant text := '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
  v_kandidat text;
  v_versuch  int := 0;
begin
  loop
    v_versuch := v_versuch + 1;
    v_kandidat := 'BS24-' || (
      select string_agg(substr(v_zeichen, 1 + floor(random() * length(v_zeichen))::int, 1), '')
      from generate_series(1, 6)
    );
    exit when not exists (select 1 from public.leads where inquiry_number = v_kandidat);
    if v_versuch >= 20 then
      raise exception 'Anfragenummer konnte nicht vergeben werden' using errcode = '55000';
    end if;
  end loop;
  return v_kandidat;
end;
$$;

-- ---------------------------------------------------------------------------
-- 8. Öffentlicher Katalog
-- ---------------------------------------------------------------------------
create or replace function public.advertising_catalog()
returns jsonb
language sql stable security definer set search_path to 'public','app' as $$
  select coalesce(jsonb_agg(jsonb_build_object(
    'schluessel', p.schluessel,
    'name', p.name,
    'kategorie', p.kategorie::text,
    'kurzbeschreibung', p.kurzbeschreibung,
    'beschreibung', p.beschreibung,
    'leistungen', to_jsonb(p.leistungen),
    'zielgruppe', p.zielgruppe,
    'bild_url', p.bild_url,
    'preis', p.preis,
    'preis_art', p.preis_art::text,
    'ab_preis', p.ab_preis,
    'mindestlaufzeit_monate', p.mindestlaufzeit_monate,
    'zusatzkosten_hinweis', p.zusatzkosten_hinweis
  ) order by p.sortierung, p.name), '[]'::jsonb)
  from public.advertising_products p
  where p.aktiv;
$$;

comment on function public.advertising_catalog() is
  'Öffentlicher Preisaushang. Gibt bewusst keine id heraus, sondern den '
  'stabilen Schlüssel — damit aus der Antwort keine Datenbankkennung in '
  'fremde Hände gerät und der Frontend-Code stabil bleibt.';

-- Standorte für die Auswahl im Formular. Nur Bezeichnung und Ort, keine
-- Innereien: keine Umsätze, keine Automatenkennungen, keine Koordinaten.
create or replace function public.advertising_locations()
returns jsonb
language sql stable security definer set search_path to 'public','app' as $$
  select coalesce(jsonb_agg(jsonb_build_object(
    'id', l.id,
    'name', l.name,
    'ort', l.city
  ) order by l.name), '[]'::jsonb)
  from public.locations l
  where l.deleted_at is null;
$$;

-- ---------------------------------------------------------------------------
-- 9. Die Anfrage selbst
-- ---------------------------------------------------------------------------
create or replace function public.advertising_inquiry_submit(
  p_kind              app.lead_kind,
  p_company_name      text,
  p_contact_name      text,
  p_email             text,
  p_phone             text default null,
  p_website           text default null,
  p_message           text default null,
  p_budget            numeric default null,
  p_wunsch_start      date default null,
  p_wunsch_laufzeit_monate int default null,
  p_zielgruppe        text default null,
  p_region            text default null,
  p_produkte          text[] default '{}',
  p_standorte         uuid[] default '{}',
  p_standort_egal     boolean default false,
  p_werbemittel_vorhanden boolean default null,
  p_werbemittel_durch_uns boolean default null,
  p_datenschutz       boolean default false,
  p_marketing         boolean default false,
  p_hp                text default null
) returns jsonb
language plpgsql security definer set search_path to 'public','app' as $$
declare
  v_mail    text := nullif(lower(btrim(coalesce(p_email, ''))), '');
  v_firma   text := btrim(coalesce(p_company_name, ''));
  v_name    text := btrim(coalesce(p_contact_name, ''));
  v_nummer  text;
  v_lead    uuid;
  v_prod    record;
  v_loc     uuid;
  v_zeilen  jsonb := '[]'::jsonb;
  v_orte    jsonb := '[]'::jsonb;
  v_intern  text := app.parameter('anfrage.mail_intern');
begin
  -- Honigtopf. Ein Mensch sieht dieses Feld nicht und füllt es nicht aus.
  -- Der Absender bekommt eine plausible Antwort, damit er nicht merkt, dass
  -- er erkannt wurde und es gleich anders versucht. Es wird NICHTS
  -- gespeichert: die zurückgegebene Nummer bezeichnet keine Anfrage und
  -- taucht in keiner Liste auf.
  if nullif(btrim(coalesce(p_hp, '')), '') is not null then
    perform app.anfrage_drossel_zaehlen('honigtopf', 2147483647);
    return jsonb_build_object('anfrage_nummer', 'BS24-000000', 'gespeichert', false);
  end if;

  -- Pflichtangaben. Serverseitig, weil die Prüfung im Formular nur eine
  -- Bequemlichkeit für ehrliche Nutzer ist.
  if length(v_firma) < 2 then
    raise exception 'Bitte den Firmennamen angeben.' using errcode = '22023';
  end if;
  if length(v_firma) > 200 then
    raise exception 'Der Firmenname ist zu lang.' using errcode = '22023';
  end if;
  if length(v_name) < 2 then
    raise exception 'Bitte einen Ansprechpartner angeben.' using errcode = '22023';
  end if;
  if v_mail is null or v_mail !~ '^[^@[:space:]]+@[^@[:space:]]+\.[a-z]{2,}$' then
    raise exception 'Bitte eine gültige E-Mail-Adresse angeben.' using errcode = '22023';
  end if;
  if length(v_mail) > 254 then
    raise exception 'Die E-Mail-Adresse ist zu lang.' using errcode = '22023';
  end if;
  if length(coalesce(p_message, '')) > 5000 then
    raise exception 'Die Nachricht ist zu lang.' using errcode = '22023';
  end if;
  if not coalesce(p_datenschutz, false) then
    raise exception 'Ohne Zustimmung zur Datenschutzerklärung können wir die Anfrage nicht entgegennehmen.'
      using errcode = '22023';
  end if;
  if p_budget is not null and (p_budget < 0 or p_budget > 10000000) then
    raise exception 'Der Budgetwert ist nicht plausibel.' using errcode = '22023';
  end if;
  if p_wunsch_laufzeit_monate is not null
     and (p_wunsch_laufzeit_monate < 1 or p_wunsch_laufzeit_monate > 120) then
    raise exception 'Die gewünschte Laufzeit ist nicht plausibel.' using errcode = '22023';
  end if;
  if coalesce(array_length(p_produkte, 1), 0) > 20
     or coalesce(array_length(p_standorte, 1), 0) > 50 then
    raise exception 'Zu viele Positionen in einer Anfrage.' using errcode = '22023';
  end if;

  -- Drossel. Erst nach der Validierung, damit ein Tippfehler kein Kontingent
  -- verbraucht.
  if not app.anfrage_drossel_zaehlen('mail:' || v_mail,
         app.parameter_zahl('anfrage.drossel_je_mail_tag', 3)) then
    raise exception 'Von dieser Adresse liegen heute bereits mehrere Anfragen vor. Bitte melde Dich direkt bei uns.'
      using errcode = '53400';
  end if;
  if not app.anfrage_drossel_zaehlen('gesamt',
         app.parameter_zahl('anfrage.drossel_gesamt_tag', 80)) then
    raise exception 'Das Anfrageformular ist vorübergehend nicht verfügbar. Bitte melde Dich direkt bei uns.'
      using errcode = '53400';
  end if;

  v_nummer := app.anfrage_nummer();

  insert into public.leads (
    kind, status, company_name, contact_name, email, phone, message,
    source, inquiry_number, website, budget, wunsch_start,
    wunsch_laufzeit_monate, zielgruppe, region, standort_egal,
    werbemittel_vorhanden, werbemittel_durch_uns,
    datenschutz_zugestimmt_am, marketing_einwilligung
  ) values (
    p_kind, 'new', v_firma, v_name, v_mail,
    nullif(btrim(coalesce(p_phone, '')), ''),
    nullif(btrim(coalesce(p_message, '')), ''),
    'website_werbung', v_nummer,
    nullif(btrim(coalesce(p_website, '')), ''),
    p_budget, p_wunsch_start, p_wunsch_laufzeit_monate,
    nullif(btrim(coalesce(p_zielgruppe, '')), ''),
    nullif(btrim(coalesce(p_region, '')), ''),
    coalesce(p_standort_egal, false),
    p_werbemittel_vorhanden, p_werbemittel_durch_uns,
    now(), coalesce(p_marketing, false)
  )
  returning id into v_lead;

  -- Positionen mit eingefrorenem Preis. Unbekannte Schlüssel werden
  -- übergangen, nicht erfunden — und die Anfrage geht trotzdem durch, weil
  -- ein Formularfehler den Interessenten nicht kosten soll.
  for v_prod in
    select p.id, p.schluessel, p.name, p.preis, p.preis_art, p.ab_preis
    from unnest(p_produkte) as k(schluessel)
    join public.advertising_products p on p.schluessel = k.schluessel and p.aktiv
  loop
    insert into public.advertising_inquiry_items (
      lead_id, product_id, produkt_name, produkt_schluessel,
      preis, preis_art, ab_preis
    ) values (
      v_lead, v_prod.id, v_prod.name, v_prod.schluessel,
      v_prod.preis, v_prod.preis_art, v_prod.ab_preis
    );
    v_zeilen := v_zeilen || jsonb_build_object(
      'name', v_prod.name,
      'preis', v_prod.preis,
      'preis_art', v_prod.preis_art::text,
      'ab_preis', v_prod.ab_preis
    );
  end loop;

  foreach v_loc in array coalesce(p_standorte, '{}'::uuid[]) loop
    insert into public.advertising_inquiry_locations (lead_id, location_id)
    select v_lead, l.id from public.locations l
    where l.id = v_loc and l.deleted_at is null
    on conflict do nothing;
  end loop;

  select coalesce(jsonb_agg(l.name order by l.name), '[]'::jsonb) into v_orte
  from public.advertising_inquiry_locations il
  join public.locations l on l.id = il.location_id
  where il.lead_id = v_lead;

  -- E-Mails. Die Anfrage ist zu diesem Zeitpunkt gespeichert; schlägt der
  -- Versand fehl, bleibt sie erhalten und der Fehler steht in email_outbox.
  perform public.email_enqueue(
    'werbeanfrage_kunde', null,
    jsonb_build_object(
      'anfrageNummer', v_nummer, 'firma', v_firma, 'ansprechpartner', v_name,
      'positionen', v_zeilen, 'standorte', v_orte,
      'standortEgal', coalesce(p_standort_egal, false),
      'laufzeitMonate', p_wunsch_laufzeit_monate, 'wunschStart', p_wunsch_start
    ),
    v_mail, now(), 'werbeanfrage_kunde:' || v_nummer
  );

  if v_intern is not null then
    perform public.email_enqueue(
      'werbeanfrage_intern', null,
      jsonb_build_object(
        'anfrageNummer', v_nummer, 'firma', v_firma, 'ansprechpartner', v_name,
        'email', v_mail, 'telefon', nullif(btrim(coalesce(p_phone, '')), ''),
        'positionen', v_zeilen, 'standorte', v_orte,
        'standortEgal', coalesce(p_standort_egal, false),
        'laufzeitMonate', p_wunsch_laufzeit_monate, 'wunschStart', p_wunsch_start,
        'budget', p_budget, 'nachricht', nullif(btrim(coalesce(p_message, '')), ''),
        'eingang', to_char(now() at time zone 'Europe/Berlin', 'DD.MM.YYYY HH24:MI')
      ),
      v_intern, now(), 'werbeanfrage_intern:' || v_nummer
    );
  end if;

  -- Zurück geht nur, was der Absender ohnehin weiß. Insbesondere keine
  -- lead-id: sonst hätte ein Aufrufer eine Kennung in der Hand, mit der er
  -- anderswo sein Glück versuchen könnte.
  return jsonb_build_object('anfrage_nummer', v_nummer, 'gespeichert', true);
end;
$$;

comment on function public.advertising_inquiry_submit is
  'Nimmt eine unverbindliche Werbe- oder Sponsoringanfrage entgegen. Ohne '
  'Konto aufrufbar. Es entsteht kein Vertrag — die Funktion legt einen Lead '
  'mit Status new an, mehr nicht. Gibt ausschließlich die Anfragenummer '
  'zurück, nie eine Datenbankkennung.';

-- ---------------------------------------------------------------------------
-- 10. Verwaltung
-- ---------------------------------------------------------------------------
create or replace function public.advertising_inquiry_detail(p_lead uuid)
returns jsonb
language plpgsql stable security definer set search_path to 'public','app' as $$
declare v_out jsonb;
begin
  if not (public.is_admin() or public.auth_has_permission('leads.manage')) then
    raise exception 'Keine Berechtigung' using errcode = '42501';
  end if;

  select jsonb_build_object(
    'id', l.id, 'anfrage_nummer', l.inquiry_number,
    'art', l.kind::text, 'status', l.status::text,
    'firma', l.company_name, 'ansprechpartner', l.contact_name,
    'email', l.email, 'telefon', l.phone, 'website', l.website,
    'nachricht', l.message, 'budget', l.budget,
    'wunsch_start', l.wunsch_start, 'wunsch_laufzeit_monate', l.wunsch_laufzeit_monate,
    'zielgruppe', l.zielgruppe, 'region', l.region,
    'standort_egal', l.standort_egal,
    'werbemittel_vorhanden', l.werbemittel_vorhanden,
    'werbemittel_durch_uns', l.werbemittel_durch_uns,
    'marketing_einwilligung', l.marketing_einwilligung,
    'datenschutz_zugestimmt_am', l.datenschutz_zugestimmt_am,
    'eingang', l.created_at, 'erstkontakt_am', l.erstkontakt_am,
    'ueberfaellig', l.erstkontakt_am is null
      and l.status = 'new'
      and l.created_at < now() - make_interval(hours => app.parameter_zahl('anfrage.eskalation_stunden', 48)),
    'positionen', (
      select coalesce(jsonb_agg(jsonb_build_object(
        'name', i.produkt_name, 'schluessel', i.produkt_schluessel,
        'menge', i.menge, 'preis', i.preis,
        'preis_art', i.preis_art::text, 'ab_preis', i.ab_preis,
        'produkt_noch_im_katalog', i.product_id is not null
      ) order by i.created_at), '[]'::jsonb)
      from public.advertising_inquiry_items i where i.lead_id = l.id),
    'standorte', (
      select coalesce(jsonb_agg(jsonb_build_object('id', lo.id, 'name', lo.name) order by lo.name), '[]'::jsonb)
      from public.advertising_inquiry_locations il
      join public.locations lo on lo.id = il.location_id
      where il.lead_id = l.id),
    'verlauf', (
      select coalesce(jsonb_agg(jsonb_build_object(
        'text', a.text, 'am', a.created_at) order by a.created_at desc), '[]'::jsonb)
      from public.lead_activities a where a.lead_id = l.id),
    'mailversand', (
      select coalesce(jsonb_agg(jsonb_build_object(
        'vorlage', o.template_key, 'status', o.status,
        'versuche', o.attempts, 'fehler', o.last_error,
        'gesendet_am', o.sent_at) order by o.created_at), '[]'::jsonb)
      from public.email_outbox o
      where o.dedupe_key in ('werbeanfrage_kunde:' || l.inquiry_number,
                             'werbeanfrage_intern:' || l.inquiry_number))
  ) into v_out
  from public.leads l
  where l.id = p_lead and l.deleted_at is null;

  if v_out is null then
    raise exception 'Anfrage nicht gefunden' using errcode = 'P0002';
  end if;
  return v_out;
end;
$$;

create or replace function public.advertising_inquiry_contacted(p_lead uuid, p_notiz text default null)
returns void
language plpgsql security definer set search_path to 'public','app' as $$
begin
  if not (public.is_admin() or public.auth_has_permission('leads.manage')) then
    raise exception 'Keine Berechtigung' using errcode = '42501';
  end if;
  update public.leads
     set erstkontakt_am = coalesce(erstkontakt_am, now()),
         status = case when status = 'new' then 'contacted'::app.lead_status else status end,
         updated_at = now(), updated_by = auth.uid()
   where id = p_lead and deleted_at is null;
  if not found then
    raise exception 'Anfrage nicht gefunden' using errcode = 'P0002';
  end if;
  if nullif(btrim(coalesce(p_notiz, '')), '') is not null then
    insert into public.lead_activities (lead_id, text, created_by)
    values (p_lead, btrim(p_notiz), auth.uid());
  end if;
end;
$$;

comment on function public.advertising_inquiry_contacted(uuid, text) is
  'Hält fest, dass tatsächlich Kontakt aufgenommen wurde. Der Zeitpunkt wird '
  'nur beim ersten Mal gesetzt und danach nie überschrieben — die '
  '48-Stunden-Auswertung soll nicht dadurch grün werden, dass jemand ein '
  'zweites Mal auf den Knopf drückt.';

create or replace function public.advertising_inquiries_overdue()
returns jsonb
language sql stable security definer set search_path to 'public','app' as $$
  select case when public.is_admin() or public.auth_has_permission('leads.manage')
    then coalesce((
      select jsonb_agg(jsonb_build_object(
        'id', l.id, 'anfrage_nummer', l.inquiry_number,
        'firma', l.company_name, 'eingang', l.created_at,
        'stunden_offen', floor(extract(epoch from (now() - l.created_at)) / 3600)::int
      ) order by l.created_at)
      from public.leads l
      where l.deleted_at is null
        and l.erstkontakt_am is null
        and l.status = 'new'
        and l.created_at < now() - make_interval(hours => app.parameter_zahl('anfrage.eskalation_stunden', 48))
    ), '[]'::jsonb)
    else '[]'::jsonb end;
$$;

create or replace function public.advertising_product_set(
  p_schluessel text, p_name text, p_kategorie app.werbeprodukt_kategorie,
  p_kurzbeschreibung text, p_beschreibung text default null,
  p_leistungen text[] default '{}', p_zielgruppe text default null,
  p_bild_url text default null, p_preis numeric default null,
  p_preis_art app.werbepreis_art default 'individuell',
  p_ab_preis boolean default false, p_mindestlaufzeit_monate int default null,
  p_zusatzkosten_hinweis text default null, p_aktiv boolean default true,
  p_sortierung int default 100
) returns uuid
language plpgsql security definer set search_path to 'public','app' as $$
declare v_id uuid;
begin
  if not (public.is_admin() or public.auth_has_permission('advertising.manage')) then
    raise exception 'Keine Berechtigung' using errcode = '42501';
  end if;
  insert into public.advertising_products (
    schluessel, name, kategorie, kurzbeschreibung, beschreibung, leistungen,
    zielgruppe, bild_url, preis, preis_art, ab_preis, mindestlaufzeit_monate,
    zusatzkosten_hinweis, aktiv, sortierung, created_by, updated_by
  ) values (
    btrim(p_schluessel), btrim(p_name), p_kategorie, btrim(p_kurzbeschreibung),
    p_beschreibung, coalesce(p_leistungen, '{}'), p_zielgruppe, p_bild_url,
    p_preis, p_preis_art, p_ab_preis, p_mindestlaufzeit_monate,
    p_zusatzkosten_hinweis, p_aktiv, p_sortierung, auth.uid(), auth.uid()
  )
  on conflict (schluessel) do update set
    name = excluded.name, kategorie = excluded.kategorie,
    kurzbeschreibung = excluded.kurzbeschreibung, beschreibung = excluded.beschreibung,
    leistungen = excluded.leistungen, zielgruppe = excluded.zielgruppe,
    bild_url = excluded.bild_url, preis = excluded.preis,
    preis_art = excluded.preis_art, ab_preis = excluded.ab_preis,
    mindestlaufzeit_monate = excluded.mindestlaufzeit_monate,
    zusatzkosten_hinweis = excluded.zusatzkosten_hinweis,
    aktiv = excluded.aktiv, sortierung = excluded.sortierung,
    updated_at = now(), updated_by = auth.uid()
  returning id into v_id;
  return v_id;
end;
$$;

-- ---------------------------------------------------------------------------
-- 11. Ausführungsrechte
-- ---------------------------------------------------------------------------
-- Regel des Projekts: erst alles entziehen, dann gezielt geben.
revoke all on function public.advertising_catalog() from public, anon, authenticated;
revoke all on function public.advertising_locations() from public, anon, authenticated;
revoke all on function public.advertising_inquiry_submit(app.lead_kind, text, text, text, text, text, text, numeric, date, int, text, text, text[], uuid[], boolean, boolean, boolean, boolean, boolean, text) from public, anon, authenticated;
revoke all on function public.advertising_inquiry_detail(uuid) from public, anon, authenticated;
revoke all on function public.advertising_inquiry_contacted(uuid, text) from public, anon, authenticated;
revoke all on function public.advertising_inquiries_overdue() from public, anon, authenticated;
revoke all on function public.advertising_product_set(text, text, app.werbeprodukt_kategorie, text, text, text[], text, text, numeric, app.werbepreis_art, boolean, int, text, boolean, int) from public, anon, authenticated;
revoke all on function app.parameter(text) from public, anon, authenticated;
revoke all on function app.parameter_zahl(text, int) from public, anon, authenticated;
revoke all on function app.anfrage_drossel_zaehlen(text, int) from public, anon, authenticated;
revoke all on function app.anfrage_nummer() from public, anon, authenticated;
revoke all on function app.is_business_reader(uuid) from public, anon, authenticated;
revoke all on function app.darf_kampagne_lesen(uuid) from public, anon, authenticated;

-- Der Katalog, die Standortliste und das Absenden sind der öffentliche Teil.
grant execute on function public.advertising_catalog() to anon, authenticated;
grant execute on function public.advertising_locations() to anon, authenticated;
grant execute on function public.advertising_inquiry_submit(app.lead_kind, text, text, text, text, text, text, numeric, date, int, text, text, text[], uuid[], boolean, boolean, boolean, boolean, boolean, text) to anon, authenticated;

-- Alles Weitere ist Verwaltung. Die Funktionen prüfen die Berechtigung
-- zusätzlich selbst; das Ausführungsrecht allein ist kein Zugriffsschutz.
grant execute on function public.advertising_inquiry_detail(uuid) to authenticated;
grant execute on function public.advertising_inquiry_contacted(uuid, text) to authenticated;
grant execute on function public.advertising_inquiries_overdue() to authenticated;
grant execute on function public.advertising_product_set(text, text, app.werbeprodukt_kategorie, text, text, text[], text, text, numeric, app.werbepreis_art, boolean, int, text, boolean, int) to authenticated;

-- Tabellenrechte: der Katalog wird gelesen, nie direkt geschrieben.
grant select on public.advertising_products to anon, authenticated;
grant select, insert, update, delete on public.advertising_inquiry_items to authenticated;
grant select, insert, update, delete on public.advertising_inquiry_locations to authenticated;

-- ---------------------------------------------------------------------------
-- 12. Protokollierung
-- ---------------------------------------------------------------------------
select app.enable_audit('public.advertising_products');
select app.enable_audit('public.advertising_inquiry_items');

-- ---------------------------------------------------------------------------
-- 13. E-Mail-Vorlagen
-- ---------------------------------------------------------------------------
insert into public.email_templates (key, label, description, variables, category, is_active, precondition)
values
  ('werbeanfrage_kunde', 'Werbeanfrage: Eingangsbestätigung',
   'Bestätigt dem Unternehmen den Eingang seiner unverbindlichen Anfrage. '
   'Keine Werbung — reine Transaktionsmail zum angefragten Vorgang.',
   array['anfrageNummer','firma','ansprechpartner','positionen','standorte',
         'standortEgal','laufzeitMonate','wunschStart'],
   'transactional', true, null),
  ('werbeanfrage_intern', 'Werbeanfrage: Meldung an den Betrieb',
   'Interne Benachrichtigung über eine neue Werbe- oder Sponsoringanfrage.',
   array['anfrageNummer','firma','ansprechpartner','email','telefon','positionen',
         'standorte','standortEgal','laufzeitMonate','wunschStart','budget',
         'nachricht','eingang'],
   'transactional', true, null)
on conflict (key) do nothing;
