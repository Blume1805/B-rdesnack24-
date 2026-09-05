alter table public.donation_causes
  add column if not exists legal_name        text,
  add column if not exists purpose           text,
  add column if not exists street            text,
  add column if not exists zip               text,
  add column if not exists city              text,
  add column if not exists country           text not null default 'DE',
  add column if not exists website           text,
  add column if not exists contact_email     text,
  add column if not exists receipt_eligible  boolean not null default false,
  add column if not exists registration_ref  text,
  add column if not exists tax_number        text,
  add column if not exists tax_office        text,
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

-- NACHTRAG 02.09.2026 (Befund S-14, Wiederholbarkeit):
-- Diese Prüfregel setzt einen Datenstand voraus, den keine Migration
-- herstellt. Die drei Spendenzwecke aus 20260710104458 wurden 'active'
-- angelegt, ohne bestätigte Bescheinigungsberechtigung. In der Produktion
-- sind sie inzwischen zurückgezogen (`deleted_at` gesetzt) — von Hand, ohne
-- Migration. Genau deshalb lief die Regel dort durch und auf einer leeren
-- Datenbank nicht.
--
-- Der Rückzug wird hier nachgetragen, damit ein Neuaufbau denselben Stand
-- erreicht wie die Produktion. Fachlich ist er richtig: Ein Spendenzweck
-- ohne bestätigte Bescheinigungsberechtigung darf nicht aktiv zur Wahl
-- stehen — nichts anderes sagt die Regel darunter. In der Produktion ist
-- die Anweisung wirkungslos, weil die Zeilen bereits zurückgezogen sind.
update public.donation_causes
   set deleted_at = coalesce(deleted_at, now())
 where status = 'active'
   and deleted_at is null
   and not coalesce(receipt_eligible, false);

alter table public.donation_causes
  drop constraint if exists donation_causes_active_needs_receipt;
alter table public.donation_causes
  add constraint donation_causes_active_needs_receipt
  check (status <> 'active' or deleted_at is not null or receipt_eligible);

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
