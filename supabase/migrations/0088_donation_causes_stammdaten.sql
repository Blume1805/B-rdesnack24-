-- ============================================================================
-- 0088 · Spendenorganisationen bekommen echte Stammdaten
-- ----------------------------------------------------------------------------
-- VORGABE des Betriebs: Zur Abstimmung stehen ausschliesslich Organisationen,
-- Vereine und Einrichtungen, die **berechtigt sind, eine Spendenbescheinigung
-- auszustellen**. Die bisherigen Einträge waren Anschauungsmaterial und sind
-- mit 0085 zurückgezogen worden; die echte Liste kommt vom Betrieb.
--
-- Bisher hatte `donation_causes` nur `title`, `description` und `status`.
-- Damit lässt sich eine Organisation nicht identifizieren: Es fehlten der
-- Rechtsname, die Anschrift, der Satzungszweck und vor allem der Nachweis,
-- dass die Bescheinigungsberechtigung überhaupt geprüft wurde.
--
-- DIE REGEL WIRD ZUR EIGENSCHAFT DER DATENBANK. Der Satz „nur
-- bescheinigungsberechtigte Organisationen stehen zur Abstimmung" ist als
-- CHECK-Bedingung hinterlegt und nicht als Vorsatz: Eine Zeile kann nur dann
-- `status = 'active'` tragen (und damit in der Abstimmung erscheinen), wenn
-- `receipt_eligible` gesetzt ist. Wer die Regel künftig umgehen wollte,
-- müsste die Bedingung ausdrücklich entfernen — das fällt auf.
--
-- Kundenvorschläge (`status = 'suggested'`, über suggest_donation_cause)
-- bleiben davon unberührt. Sie sind noch keine Abstimmungsoption, sondern
-- ein Hinweis; die Stammdaten trägt der Betrieb nach, bevor er freischaltet.
-- Die drei zurückgezogenen Zeilen aus 0085 sind ebenfalls ausgenommen,
-- damit diese Migration sie nicht nachträglich zu Fall bringt.
--
-- WAS ÖFFENTLICH IST UND WAS NICHT. `donation_causes_list()` ist die Sicht
-- für Kundinnen und Kunden. Sie bekommt genau das dazu, was man zum Wählen
-- braucht — Rechtsname, Zweck, Ort, Website, Bescheinigungsberechtigung.
-- Steuernummer, Finanzamt und Registernummer bleiben draussen: Sie gehören
-- zur Abwicklung der Bescheinigung, nicht zur Wahlentscheidung, und sind in
-- der Abstimmungsliste jedes Kunden schlicht nicht nötig.
--
-- Ausfüll-Vorlage für den Betrieb: `docs/SPENDENORGANISATIONEN_VORLAGE.md`.
-- ============================================================================

alter table public.donation_causes
  add column if not exists legal_name        text,
  add column if not exists purpose           text,
  add column if not exists street            text,
  add column if not exists zip               text,
  add column if not exists city              text,
  add column if not exists country           text not null default 'DE',
  add column if not exists website           text,
  add column if not exists contact_email     text,
  -- Darf die Organisation eine Zuwendungsbestätigung ausstellen?
  add column if not exists receipt_eligible  boolean not null default false,
  -- Woran das festgemacht wurde: Registereintrag und Freistellungsbescheid.
  add column if not exists registration_ref  text,
  add column if not exists tax_number        text,
  add column if not exists tax_office        text,
  -- Wer hat die Berechtigung wann geprüft. Ohne diese beiden Felder ist
  -- `receipt_eligible` nur eine Behauptung.
  add column if not exists verified_at       timestamptz,
  add column if not exists verified_by       uuid references public.profiles(id);

comment on column public.donation_causes.legal_name is
  'Vollständiger Name laut Register (z. B. "… e. V."). `title` bleibt der kurze Anzeigename in der App.';
comment on column public.donation_causes.purpose is
  'Zweck laut Satzung — die Grundlage der Gemeinnützigkeit.';
comment on column public.donation_causes.receipt_eligible is
  'Berechtigt, eine Zuwendungsbestätigung auszustellen. Voraussetzung für status = ''active''.';
comment on column public.donation_causes.registration_ref is
  'Registereintrag, z. B. "VR 1234, Amtsgericht Stendal".';
comment on column public.donation_causes.tax_number is
  'Steuernummer bzw. Aktenzeichen des Freistellungsbescheids.';
comment on column public.donation_causes.verified_at is
  'Zeitpunkt der Prüfung der Bescheinigungsberechtigung. NULL = ungeprüft.';

-- Nur geprüfte, bescheinigungsberechtigte Organisationen stehen zur Wahl.
-- Ausgenommen: Kundenvorschläge (status <> 'active') und zurückgezogene
-- Zeilen (deleted_at gesetzt) — sonst würden die Altdaten aus 0085 die
-- Bedingung sofort verletzen.
alter table public.donation_causes
  drop constraint if exists donation_causes_active_needs_receipt;
alter table public.donation_causes
  add constraint donation_causes_active_needs_receipt
  check (status <> 'active' or deleted_at is not null or receipt_eligible);

-- ----------------------------------------------------------------------------
-- Kundensicht erweitern. Der Rückgabetyp ändert sich, deshalb drop + create
-- statt create or replace.
-- ----------------------------------------------------------------------------
drop function if exists public.donation_causes_list();

create or replace function public.donation_causes_list()
returns table(
  id                uuid,
  title             text,
  description       text,
  status            text,
  vote_count        bigint,
  voted_by_me       boolean,
  created_at        timestamptz,
  legal_name        text,
  purpose           text,
  city              text,
  website           text,
  receipt_eligible  boolean
)
language sql
security definer
set search_path = public, app
as $$
  select
    c.id, c.title, c.description, c.status,
    coalesce(v.n, 0)::bigint,
    exists(select 1 from public.donation_votes vv
             where vv.cause_id = c.id and vv.customer_id = auth.uid()),
    c.created_at,
    c.legal_name, c.purpose, c.city, c.website, c.receipt_eligible
  from public.donation_causes c
  left join lateral (
    select count(*) n from public.donation_votes v where v.cause_id = c.id
  ) v on true
  where c.deleted_at is null
  order by
    case c.status when 'active' then 0 when 'suggested' then 1 else 2 end,
    coalesce(v.n, 0) desc,
    c.created_at desc
$$;

revoke all on function public.donation_causes_list() from public, anon;
grant execute on function public.donation_causes_list() to authenticated;
