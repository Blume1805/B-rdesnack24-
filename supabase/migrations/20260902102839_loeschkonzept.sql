-- ===========================================================================
-- CUST-008 / CUST-016: Der Löschprozess.
--
-- Freigabe: Philipp Blume am 02.09.2026 auf die Entscheidungsvorlage in
-- `docs/audit/AUDIT-2026-08-GESAMTSYSTEM.md`, Kapitel 32.
--
-- Bisher nahm `request_account_deletion` ein Löschverlangen entgegen und
-- niemand führte es aus. Ab jetzt gibt es einen Ablauf, und er bildet den
-- Konflikt ab, an dem jede naive Löschfunktion scheitert: Art. 17 DSGVO
-- verlangt Löschung, §§ 145–147 AO verlangen Aufbewahrung. Aufgelöst wird
-- das nicht durch Löschen und nicht durch Ignorieren, sondern durch
-- Einschränkung der Verarbeitung (Art. 18 DSGVO).
--
-- DIE FRISTEN STEHEN NICHT IM CODE, SONDERN IN EINER TABELLE. Das ist
-- Absicht: Sie sind eine kaufmännisch-rechtliche Festlegung, keine
-- Programmiereigenschaft. Wer sie ändert, soll das ohne Migration tun
-- können — und wer sie prüft, soll sie lesen können, ohne PL/pgSQL zu
-- kennen.
-- ===========================================================================

-- ---------------------------------------------------------------------------
-- 1) Die Regeln als Daten
-- ---------------------------------------------------------------------------

create table if not exists public.loeschregeln (
  tabelle       text primary key,
  bezugsspalte  text not null,
  zeitspalte    text,
  behandlung    text not null
    check (behandlung in ('loeschen', 'aufbewahren', 'anonymisieren', 'offen')),
  jahre         integer,
  begruendung   text not null,
  geaendert_am  timestamptz not null default now(),
  constraint aufbewahren_braucht_frist
    check (behandlung <> 'aufbewahren' or (jahre is not null and zeitspalte is not null))
);

comment on table public.loeschregeln is
  'Was bei einem Löschverlangen mit welcher Tabelle geschieht. Grundlage: '
  'Kapitel 32 des Audits, freigegeben am 02.09.2026. Fristen aus § 147 AO: '
  'acht Jahre Buchungsbelege, zehn Jahre Bücher/Aufzeichnungen/Inventare, '
  'sechs Jahre Geschäftsbriefe.';
comment on column public.loeschregeln.behandlung is
  'loeschen = sofort entfernen · aufbewahren = sperren bis Fristablauf, dann '
  'entfernen · anonymisieren = Zeile bleibt, Personenbezug fällt weg · '
  'offen = noch nicht entschieden, wird angefasst NICHT und im Bericht genannt.';

alter table public.loeschregeln enable row level security;
revoke all on public.loeschregeln from anon, authenticated;
grant all on public.loeschregeln to service_role;

drop policy if exists loeschregeln_read on public.loeschregeln;
create policy loeschregeln_read on public.loeschregeln for select
  to authenticated using (public.is_internal());

insert into public.loeschregeln (tabelle, bezugsspalte, zeitspalte, behandlung, jahre, begruendung) values
  -- Sofort löschen: keine Aufbewahrungspflicht erkennbar
  ('product_ratings',              'customer_id', null, 'loeschen', null, 'Meinungsäußerung, keine Aufbewahrungspflicht'),
  ('recommendations',              'customer_id', null, 'loeschen', null, 'Berechnetes Vorschlagsergebnis'),
  ('personal_offers',              'customer_id', null, 'loeschen', null, 'Persönliches Angebot, kein Beleg'),
  ('donation_votes',               'customer_id', null, 'loeschen', null, 'Abstimmung, keine Aufbewahrungspflicht'),
  ('customer_login_days',          'customer_id', null, 'loeschen', null, 'Nutzungsverhalten'),
  ('customer_card',                'customer_id', null, 'loeschen', null, 'Kartenzuordnung, mit dem Konto gegenstandslos'),
  ('customer_challenge_awards',    'customer_id', null, 'loeschen', null, 'Spielstand'),
  ('device_tokens',                'user_id',     null, 'loeschen', null, 'Push-Zuordnung, mit dem Konto gegenstandslos'),
  ('notifications',                'user_id',     null, 'loeschen', null, 'Zugestellte Hinweise'),
  ('contact_messages',             'customer_id', null, 'loeschen', null, 'Kundenanfrage; kein Handelsbrief im Sinne des § 147 AO'),

  -- Aufbewahren: Buchungsbelege, acht Jahre (§ 147 Abs. 1 Nr. 4, Abs. 3 AO)
  ('purchases',                    'customer_id', 'purchased_at', 'aufbewahren', 8, 'Buchungsbeleg'),
  ('invoices',                     'customer_id', 'issued_at',    'aufbewahren', 8, 'Buchungsbeleg'),
  ('payments',                     'payer_profile_id', 'created_at', 'aufbewahren', 8, 'Buchungsbeleg'),
  ('business_invoice_runs',        'business_id', 'created_at',   'aufbewahren', 8, 'Buchungsbeleg (Firmenabrechnung)'),

  -- Aufbewahren: Nachweis der Einwilligung, solange sie wirken kann
  ('consents',                     'profile_id',  'created_at',   'aufbewahren', 8, 'Nachweis der Einwilligung, Art. 7 Abs. 1 DSGVO'),
  ('email_consent_event',          'profile_id',  'occurred_at',  'aufbewahren', 8, 'Nachweis der Einwilligung, Art. 7 Abs. 1 DSGVO'),

  -- Aufbewahren: Geschäftsbriefe, sechs Jahre
  ('email_outbox',                 'profile_id',  'created_at',   'aufbewahren', 6, 'Geschäftsbrief einschließlich E-Mail'),

  -- Anonymisieren: Zeile wird gebraucht, der Personenbezug nicht
  ('profiles',                     'id',          null, 'anonymisieren', null, 'Beleg braucht den Namen des Leistungsempfängers; alles darüber hinaus fällt weg'),
  ('customers',                    'id',          null, 'anonymisieren', null, 'Rechnungsanschrift bleibt am Beleg, nicht am Konto'),

  -- Behalten: Nachweis über die Bearbeitung des Verlangens selbst
  ('account_deletion_requests',    'profile_id',  'requested_at', 'aufbewahren', 8, 'Nachweis, dass und wann das Verlangen bearbeitet wurde'),

  -- Noch nicht entschieden. Diese Tabellen standen nicht in der Vorlage.
  -- Sie werden NICHT angefasst und im Bericht der Löschung genannt, damit
  -- die Lücke sichtbar bleibt statt still zu verschwinden.
  ('customer_prices',              'customer_id', null, 'offen', null, 'Preisvereinbarung — Beleg oder Stammdatum? offen'),
  ('customer_subscriptions',       'customer_id', null, 'offen', null, 'Vertragsverlauf — Aufbewahrungsdauer offen'),
  ('store_subscription',           'profile_id',  null, 'offen', null, 'Abo über den Store — Aufbewahrungsdauer offen'),
  ('cancellation_requests',        'customer_id', null, 'offen', null, 'Kündigungsnachweis § 312k BGB — Dauer offen'),
  ('purchase_complaints',          'customer_id', null, 'offen', null, 'Reklamation — Geschäftsbrief? offen'),
  ('offer_activations',            'customer_id', null, 'offen', null, 'Einlösung eines Angebots — Beleg? offen'),
  ('loyalty_bonus_grants',         'customer_id', null, 'offen', null, 'Gewährter Rabatt — Beleg? offen'),
  ('customer_notification_reads',  'customer_id', null, 'offen', null, 'Lesebestätigung — in der Vorlage nicht genannt'),
  ('advertising_redirect_actors',  'profile_id',  null, 'offen', null, 'Klickzähler je Konto — in der Vorlage nicht genannt'),
  ('referral_codes',               'owner_id',    null, 'offen', null, 'Empfehlungscode — betrifft auch geworbene Dritte'),
  ('referral_rewards',             'profile_id',  null, 'offen', null, 'Gewährte Prämie — Beleg? offen'),
  ('business_members',             'profile_id',  null, 'offen', null, 'Firmenzugehörigkeit — betrifft auch die Firma'),
  ('business_budgets',             'profile_id',  null, 'offen', null, 'Budget im Firmenkonto — betrifft auch die Firma'),
  ('ifsg_briefings',               'profile_id',  null, 'offen', null, 'Beschäftigtendaten, eigene Aufbewahrungslage'),
  ('employee_trainings',           'profile_id',  null, 'offen', null, 'Beschäftigtendaten, eigene Aufbewahrungslage')
on conflict (tabelle) do nothing;

-- ---------------------------------------------------------------------------
-- 2) Die Ablaufhemmung
--
-- § 147 Abs. 3 Satz 5 AO: Die Frist läuft nicht ab, solange die Unterlagen
-- für eine noch offene Steuerfestsetzung von Bedeutung sind. Läuft eine
-- Außenprüfung, darf kein Fristlauf löschen. Ohne diesen Schalter würde der
-- Job genau in dem Moment aufräumen, in dem die Unterlagen gebraucht werden.
-- ---------------------------------------------------------------------------

create table if not exists public.aufbewahrung_hemmung (
  id           boolean primary key default true check (id),
  gehemmt      boolean not null default false,
  grund        text,
  gesetzt_von  uuid references public.profiles (id),
  gesetzt_am   timestamptz not null default now()
);

insert into public.aufbewahrung_hemmung (id, gehemmt, grund)
values (true, false, null) on conflict (id) do nothing;

comment on table public.aufbewahrung_hemmung is
  'Ein Schalter, der alle Fristläufe anhält (§ 147 Abs. 3 Satz 5 AO, '
  'Ablaufhemmung — etwa während einer Außenprüfung).';

alter table public.aufbewahrung_hemmung enable row level security;
revoke all on public.aufbewahrung_hemmung from anon, authenticated;
grant all on public.aufbewahrung_hemmung to service_role;

drop policy if exists hemmung_read on public.aufbewahrung_hemmung;
create policy hemmung_read on public.aufbewahrung_hemmung for select
  to authenticated using (public.is_internal());
drop policy if exists hemmung_write on public.aufbewahrung_hemmung;
create policy hemmung_write on public.aufbewahrung_hemmung for update
  to authenticated
  using (public.is_admin() or public.auth_has_permission('finance.manage'))
  with check (public.is_admin() or public.auth_has_permission('finance.manage'));

create or replace function app.aufbewahrung_gehemmt()
returns boolean language sql stable
set search_path to 'public', 'app'
as $$ select coalesce((select gehemmt from public.aufbewahrung_hemmung where id), false) $$;

-- ---------------------------------------------------------------------------
-- 3) Die Schleuse muss die Anonymisierung durchlassen
--
-- `app.guard_profile_update` sperrt Rolle, Status, Identität und E-Mail für
-- alle ausser Administratoren. Die Löschfunktion läuft als SECURITY DEFINER
-- und ist kein Administrator im Sinne von `is_admin()` — sie braucht eine
-- benannte Ausnahme. Dieselbe Bauart wie beim E-Mail-Nachlauf: ein Merkmal,
-- das nur diese eine Transaktion setzt.
-- ---------------------------------------------------------------------------

create or replace function app.guard_profile_update()
returns trigger
language plpgsql
security definer
set search_path to 'public', 'app'
as $$
begin
  if public.is_admin() then return new; end if;

  -- Die Kontolöschung darf anonymisieren.
  if coalesce(current_setting('app.konto_loeschung', true), 'off') = 'on' then
    return new;
  end if;

  if new.email is distinct from old.email
     and coalesce(current_setting('app.email_sync', true), 'off') <> 'on'
  then
    raise exception
      'Die E-Mail-Adresse ändert sich über die Anmeldung, nicht über das '
      'Profil. Bitte ändere sie in den Kontoeinstellungen und bestätige '
      'den Link in der E-Mail.'
      using errcode = '42501';
  end if;

  if new.role <> old.role
     or new.status <> old.status
     or new.id <> old.id
     or coalesce(new.archived_at, 'epoch'::timestamptz) <> coalesce(old.archived_at, 'epoch'::timestamptz)
     or coalesce(new.deleted_at,  'epoch'::timestamptz) <> coalesce(old.deleted_at,  'epoch'::timestamptz)
  then
    raise exception 'Rolle/Status/Identität dürfen nur durch einen Administrator geändert werden'
      using errcode = '42501';
  end if;
  return new;
end;
$$;

-- Dasselbe für das Geburtsdatum: Die Anonymisierung muss es entfernen dürfen.
create or replace function app.assert_birth_date_immutable()
returns trigger
language plpgsql
set search_path to 'public', 'app'
as $function$
begin
  if new.birth_date is not distinct from old.birth_date then
    return new;
  end if;

  if coalesce(current_setting('app.konto_loeschung', true), 'off') = 'on' then
    return new;
  end if;

  if coalesce(public.is_admin(), false)
     or coalesce(public.auth_has_permission('users.manage'), false)
  then
    return new;
  end if;

  if old.birth_date is null then
    return new;
  end if;

  raise exception
    'Das Geburtsdatum kann nach der Anmeldung nicht mehr geändert werden. '
    'Bitte wende dich an den Kundenservice.'
    using errcode = 'check_violation';
end;
$function$;

-- ---------------------------------------------------------------------------
-- 4) Die Ausführung
--
-- Löscht, was keine Frist hat. Anonymisiert Profil und Kundendaten. Sperrt
-- die Anmeldung — ohne das könnte sich ein gelöschtes Konto weiter anmelden
-- und seine aufbewahrungspflichtigen Daten lesen (gemessen am 02.09.2026).
-- Alles Übrige bleibt gesperrt stehen, bis der Fristlauf es abholt.
--
-- Gibt einen Bericht zurück: was gelöscht wurde, was bleibt, und was noch
-- gar nicht entschieden ist.
-- ---------------------------------------------------------------------------

create or replace function public.execute_account_deletion(p_profile uuid)
returns jsonb
language plpgsql
security definer
set search_path to 'public', 'app'
as $function$
declare
  r            record;
  v_anzahl     bigint;
  v_geloescht  jsonb := '{}'::jsonb;
  v_bleibt     jsonb := '{}'::jsonb;
  v_offen      text[] := '{}';
  v_email      text;
begin
  if not (public.is_admin() or public.auth_has_permission('users.manage')) then
    raise exception 'Keine Berechtigung, ein Konto zu löschen' using errcode = '42501';
  end if;
  if p_profile is null then
    raise exception 'Kein Konto angegeben' using errcode = '22023';
  end if;
  if not exists (select 1 from public.profiles where id = p_profile) then
    raise exception 'Konto nicht gefunden' using errcode = 'P0002';
  end if;

  perform set_config('app.konto_loeschung', 'on', true);

  -- a) Was keine Frist hat, geht weg.
  for r in select tabelle, bezugsspalte from public.loeschregeln
            where behandlung = 'loeschen' order by tabelle
  loop
    execute format('delete from public.%I where %I = $1', r.tabelle, r.bezugsspalte)
      using p_profile;
    get diagnostics v_anzahl = row_count;
    if v_anzahl > 0 then
      v_geloescht := v_geloescht || jsonb_build_object(r.tabelle, v_anzahl);
    end if;
  end loop;

  -- b) Was eine Frist hat, bleibt — gesperrt, nicht gelöscht.
  for r in select tabelle, bezugsspalte, jahre from public.loeschregeln
            where behandlung = 'aufbewahren' order by tabelle
  loop
    execute format('select count(*) from public.%I where %I = $1', r.tabelle, r.bezugsspalte)
      into v_anzahl using p_profile;
    if v_anzahl > 0 then
      v_bleibt := v_bleibt || jsonb_build_object(
        r.tabelle, jsonb_build_object('zeilen', v_anzahl, 'jahre', r.jahre));
    end if;
  end loop;

  -- c) Was niemand entschieden hat, bleibt unangetastet und wird benannt.
  select array_agg(tabelle order by tabelle) into v_offen
    from public.loeschregeln where behandlung = 'offen';

  -- d) Personenbezug aus Profil und Kundendaten nehmen.
  select email::text into v_email from public.profiles where id = p_profile;

  update public.profiles set
      full_name  = 'Gelöschtes Konto',
      -- Kein expliziter Cast auf citext: Der Typ liegt im Schema
      -- `extensions`, und der search_path dieser Funktion kennt es nicht.
      -- Die Zuweisung castet ohnehin selbst.
      email      = 'geloescht+' || replace(p_profile::text, '-', '') || '@invalid',
      phone      = null,
      gender     = null,
      birth_date = null,
      deleted_at = coalesce(deleted_at, now()),
      status     = 'archived'
    where id = p_profile;

  update public.customers set
      billing_street = null,
      billing_zip    = null,
      billing_city   = null,
      company_name   = null,
      tax_number     = null,
      vat_id         = null,
      notify_email   = false,
      notify_push    = false
    where id = p_profile;

  -- e) Anmeldung sperren. Solange das Konto sich anmelden kann, ist die
  --    Einschränkung der Verarbeitung nur eine Behauptung.
  update auth.users set banned_until = 'infinity'::timestamptz where id = p_profile;

  -- f) Den Vorgang festhalten.
  update public.account_deletion_requests
     set status = 'ausgefuehrt', handled_at = now(), handled_by = auth.uid(),
         note = coalesce(note || ' | ', '') || 'ausgeführt am ' || now()::date
   where profile_id = p_profile and status is distinct from 'ausgefuehrt';

  perform set_config('app.konto_loeschung', 'off', true);

  return jsonb_build_object(
    'konto',        p_profile,
    'ausgefuehrt_am', now(),
    'geloescht',    v_geloescht,
    'gesperrt_bis_fristablauf', v_bleibt,
    'ohne_entscheidung', coalesce(to_jsonb(v_offen), '[]'::jsonb),
    'hinweis', 'Die unter "ohne_entscheidung" genannten Tabellen wurden NICHT '
             || 'angefasst. Für sie fehlt die Festlegung, ob sie zu löschen '
             || 'oder aufzubewahren sind.'
  );
end;
$function$;

comment on function public.execute_account_deletion(uuid) is
  'Führt ein Löschverlangen aus: löscht ohne Frist, sperrt mit Frist, '
  'anonymisiert Profil und Kundendaten, sperrt die Anmeldung. Gibt einen '
  'Bericht zurück, der auch die noch nicht entschiedenen Tabellen nennt '
  '(CUST-016, 02.09.2026).';

revoke all on function public.execute_account_deletion(uuid) from public, anon;
grant execute on function public.execute_account_deletion(uuid) to authenticated, service_role;

-- ---------------------------------------------------------------------------
-- 5) Der Fristlauf
--
-- Läuft täglich und entfernt, was seine Aufbewahrungsfrist hinter sich hat —
-- je Dokumentart, nicht pauschal. Ein einheitlicher Lauf nach acht Jahren
-- würde die zehnjährigen Aufzeichnungen zu früh löschen.
--
-- Heute ist der Lauf folgenlos: Die ältesten Daten des Systems stammen aus
-- 2026. Er wird erst 2032 das erste Mal etwas tun. Genau deshalb gehört er
-- jetzt eingerichtet und nicht dann.
-- ---------------------------------------------------------------------------

create or replace function app.purge_nach_frist()
returns jsonb
language plpgsql
security definer
set search_path to 'public', 'app'
as $function$
declare
  r        record;
  v_anzahl bigint;
  v_bericht jsonb := '{}'::jsonb;
begin
  if app.aufbewahrung_gehemmt() then
    return jsonb_build_object('uebersprungen', true,
      'grund', coalesce((select grund from public.aufbewahrung_hemmung where id), 'Ablaufhemmung gesetzt'));
  end if;

  for r in select tabelle, zeitspalte, jahre from public.loeschregeln
            where behandlung = 'aufbewahren' and jahre is not null and zeitspalte is not null
            order by tabelle
  loop
    execute format(
      'delete from public.%I where %I < (now() - make_interval(years => $1))',
      r.tabelle, r.zeitspalte) using r.jahre;
    get diagnostics v_anzahl = row_count;
    if v_anzahl > 0 then
      v_bericht := v_bericht || jsonb_build_object(r.tabelle, v_anzahl);
    end if;
  end loop;

  return jsonb_build_object('uebersprungen', false, 'geloescht', v_bericht, 'gelaufen_am', now());
end;
$function$;

comment on function app.purge_nach_frist() is
  'Entfernt täglich, was seine Aufbewahrungsfrist hinter sich hat — je '
  'Dokumentart nach public.loeschregeln. Hält an, solange '
  'app.aufbewahrung_gehemmt() wahr ist (§ 147 Abs. 3 Satz 5 AO).';

select cron.unschedule('purge_nach_frist')
 where exists (select 1 from cron.job where jobname = 'purge_nach_frist');
select cron.schedule('purge_nach_frist', '40 3 * * *', 'select app.purge_nach_frist();');

-- ---------------------------------------------------------------------------
-- Zusicherungen
-- ---------------------------------------------------------------------------

do $$
declare v_regeln int; v_offen int; v_job int;
begin
  select count(*) into v_regeln from public.loeschregeln;
  select count(*) into v_offen  from public.loeschregeln where behandlung = 'offen';
  select count(*) into v_job    from cron.job where jobname = 'purge_nach_frist';

  if v_regeln < 30 then
    raise exception 'Nur % Löschregeln hinterlegt', v_regeln;
  end if;
  if v_job <> 1 then
    raise exception 'Der Fristlauf ist nicht eingerichtet';
  end if;
  if app.aufbewahrung_gehemmt() then
    raise exception 'Die Ablaufhemmung steht beim Einrichten bereits auf gehemmt';
  end if;

  raise notice 'Löschkonzept eingerichtet: % Regeln, davon % noch ohne Entscheidung. Fristlauf täglich 03:40.',
    v_regeln, v_offen;
end $$;
