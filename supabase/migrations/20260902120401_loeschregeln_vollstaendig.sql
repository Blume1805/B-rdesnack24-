-- ===========================================================================
-- CUST-018: Die letzten 15 Tabellen bekommen ihre Löschregel.
--
-- Freigabe: Philipp Blume am 02.09.2026 auf den Vorschlag im Verlauf.
-- Damit steht für **jede** der 35 Tabellen mit Personenbezug fest, was bei
-- einem Löschverlangen mit ihr geschieht. `offen` gibt es danach nicht mehr.
--
-- Der Maßstab war jedes Mal derselbe: Ist es ein Buchungsbeleg (acht
-- Jahre), eine Aufzeichnung (zehn), ein Geschäftsbrief (sechs) — oder
-- nichts davon?
-- ===========================================================================

-- Eine neue Behandlung: Daten, die gar nicht zum Kunden-Löschprozess
-- gehören. Beschäftigtendaten folgen dem Arbeits- und Lebensmittelrecht,
-- nicht § 147 AO — und wer sein Kundenkonto löschen lässt, verliert damit
-- nicht seine Belehrungsnachweise als Mitarbeiter. Sie hier mitzulöschen
-- wäre keine Gründlichkeit, sondern ein Zuständigkeitsfehler.
alter table public.loeschregeln
  drop constraint if exists loeschregeln_behandlung_check;
alter table public.loeschregeln
  add constraint loeschregeln_behandlung_check
  check (behandlung in ('loeschen', 'aufbewahren', 'anonymisieren', 'offen', 'ausserhalb'));

comment on column public.loeschregeln.behandlung is
  'loeschen = sofort entfernen · aufbewahren = sperren bis Fristablauf, dann '
  'entfernen · anonymisieren = Zeile bleibt, Personenbezug fällt weg · '
  'ausserhalb = gehört nicht zum Kunden-Löschprozess (eigene Zuständigkeit) · '
  'offen = noch nicht entschieden. Seit 02.09.2026 steht nichts mehr auf offen.';

-- ---------------------------------------------------------------------------
-- Löschen: kein Beleg, kein Brief, keine Pflicht
-- ---------------------------------------------------------------------------

update public.loeschregeln set
    behandlung = 'loeschen', jahre = null, zeitspalte = null,
    begruendung = 'Lesebestätigung für App-Hinweise, keine Aufbewahrungspflicht',
    geaendert_am = now()
  where tabelle = 'customer_notification_reads';

update public.loeschregeln set
    behandlung = 'loeschen', jahre = null, zeitspalte = null,
    begruendung = 'Klicks auf Anzeigen — Nutzungsverhalten, keine Aufbewahrungspflicht',
    geaendert_am = now()
  where tabelle = 'advertising_redirect_actors';

update public.loeschregeln set
    behandlung = 'loeschen', jahre = null, zeitspalte = null,
    begruendung = 'Aktivierung eines Angebots. Wurde der Rabatt eingelöst, '
               || 'steht er auf dem Kaufbeleg, und der bleibt acht Jahre; '
               || 'die Aktivierung selbst ist nur der Klick davor.',
    geaendert_am = now()
  where tabelle = 'offer_activations';

-- ---------------------------------------------------------------------------
-- Aufbewahren: Nachweis gegenüber Dritten
-- ---------------------------------------------------------------------------

update public.loeschregeln set
    behandlung = 'aufbewahren', jahre = 8, zeitspalte = 'chosen_at',
    begruendung = 'Der Vertrag, aus dem die Rechnungen folgen',
    geaendert_am = now()
  where tabelle = 'customer_subscriptions';

update public.loeschregeln set
    behandlung = 'aufbewahren', jahre = 8, zeitspalte = 'created_at',
    begruendung = 'Vertrag über Apple/Google, wie das eigene Abo',
    geaendert_am = now()
  where tabelle = 'store_subscription';

update public.loeschregeln set
    behandlung = 'aufbewahren', jahre = 8, zeitspalte = 'requested_at',
    begruendung = 'Kündigungsnachweis § 312k BGB — im Streit ist zu zeigen, '
               || 'dass die Kündigung möglich war und angekommen ist',
    geaendert_am = now()
  where tabelle = 'cancellation_requests';

update public.loeschregeln set
    behandlung = 'aufbewahren', jahre = 8, zeitspalte = 'granted_at',
    begruendung = 'Gewährter Rabatt mindert den Erlös — buchungsrelevant',
    geaendert_am = now()
  where tabelle = 'loyalty_bonus_grants';

update public.loeschregeln set
    behandlung = 'aufbewahren', jahre = 8, zeitspalte = 'granted_at',
    begruendung = 'Geschenkte Monate sind eine Erlösminderung — buchungsrelevant',
    geaendert_am = now()
  where tabelle = 'referral_rewards';

update public.loeschregeln set
    behandlung = 'aufbewahren', jahre = 8, zeitspalte = 'created_at',
    begruendung = 'Preisvereinbarung, aus der sich der Rechnungsbetrag erklärt',
    geaendert_am = now()
  where tabelle = 'customer_prices';

update public.loeschregeln set
    behandlung = 'aufbewahren', jahre = 6, zeitspalte = 'created_at',
    begruendung = 'Geschäftsbrief, kein Buchungsbeleg — sechs Jahre. Folgte '
               || 'eine Gutschrift, hängt diese als Beleg an ihrer eigenen Frist.',
    geaendert_am = now()
  where tabelle = 'purchase_complaints';

-- Die drei, die auch Dritte betreffen
update public.loeschregeln set
    behandlung = 'aufbewahren', jahre = 8, zeitspalte = 'created_at',
    begruendung = 'Der Code gehört dem Werbenden, verknüpft ihn aber mit den '
               || 'Geworbenen. Wird er gelöscht, verliert die andere Person '
               || 'die Herkunft ihrer Prämie — und an ihm hängen Geldflüsse.',
    geaendert_am = now()
  where tabelle = 'referral_codes';

update public.loeschregeln set
    behandlung = 'aufbewahren', jahre = 8, zeitspalte = 'invited_at',
    begruendung = 'Auch ein Datum der Firma: Sie muss belegen können, wer auf '
               || 'ihre Kosten eingekauft hat. Der Personenbezug fällt bereits '
               || 'über die Anonymisierung des Profils weg.',
    geaendert_am = now()
  where tabelle = 'business_members';

update public.loeschregeln set
    behandlung = 'aufbewahren', jahre = 8, zeitspalte = 'created_at',
    begruendung = 'Wie die Mitgliedschaft: betrifft auch die Firma',
    geaendert_am = now()
  where tabelle = 'business_budgets';

-- ---------------------------------------------------------------------------
-- Ausserhalb: Beschäftigtendaten
-- ---------------------------------------------------------------------------

update public.loeschregeln set
    behandlung = 'ausserhalb', jahre = null, zeitspalte = null,
    begruendung = 'Beschäftigtendaten. Die Aufbewahrung folgt dem Arbeits- und '
               || 'Lebensmittelrecht, nicht § 147 AO. Wer sein KUNDENkonto '
               || 'löschen lässt, verliert nicht seine Belehrungsnachweise als '
               || 'Mitarbeiter — eigener Vorgang zum Ende des Arbeitsverhältnisses.',
    geaendert_am = now()
  where tabelle in ('ifsg_briefings', 'employee_trainings');

-- ---------------------------------------------------------------------------
-- Der Bericht der Löschung muss die neue Behandlung kennen
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
  v_ausserhalb text[] := '{}';
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

  select coalesce(array_agg(tabelle order by tabelle), '{}') into v_offen
    from public.loeschregeln where behandlung = 'offen';
  select coalesce(array_agg(tabelle order by tabelle), '{}') into v_ausserhalb
    from public.loeschregeln where behandlung = 'ausserhalb';

  update public.profiles set
      full_name  = 'Gelöschtes Konto',
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

  update auth.users set banned_until = 'infinity'::timestamptz where id = p_profile;

  update public.account_deletion_requests
     set status = 'ausgefuehrt', handled_at = now(), handled_by = auth.uid(),
         note = coalesce(note || ' | ', '') || 'ausgeführt am ' || now()::date
   where profile_id = p_profile and status is distinct from 'ausgefuehrt';

  perform set_config('app.konto_loeschung', 'off', true);

  return jsonb_build_object(
    'konto',           p_profile,
    'ausgefuehrt_am',  now(),
    'geloescht',       v_geloescht,
    'gesperrt_bis_fristablauf', v_bleibt,
    'ohne_entscheidung', to_jsonb(v_offen),
    'nicht_zustaendig',  to_jsonb(v_ausserhalb),
    'hinweis', case
      when array_length(v_offen, 1) is null then
        'Für jede Tabelle mit Personenbezug liegt eine Regel vor. Die unter '
        || '"nicht_zustaendig" genannten Tabellen sind Beschäftigtendaten und '
        || 'folgen einem eigenen Vorgang.'
      else
        'Die unter "ohne_entscheidung" genannten Tabellen wurden NICHT '
        || 'angefasst. Für sie fehlt die Festlegung.'
      end
  );
end;
$function$;

-- ---------------------------------------------------------------------------
-- Zusicherung
-- ---------------------------------------------------------------------------

do $$
declare
  v_offen int; v_gesamt int; v_ohne_frist text;
begin
  select count(*) filter (where behandlung = 'offen'), count(*)
    into v_offen, v_gesamt from public.loeschregeln;

  if v_offen > 0 then
    raise exception 'Es stehen weiterhin % Tabellen auf offen', v_offen;
  end if;

  -- Jede Aufbewahrungsregel braucht eine Zeitspalte, die es wirklich gibt —
  -- sonst scheitert der Fristlauf erst 2032, und dann sieht es niemand.
  select string_agg(l.tabelle, ', ') into v_ohne_frist
  from public.loeschregeln l
  where l.behandlung = 'aufbewahren'
    and not exists (
      select 1 from information_schema.columns c
      where c.table_schema = 'public' and c.table_name = l.tabelle
        and c.column_name = l.zeitspalte);

  if v_ohne_frist is not null then
    raise exception 'Diese Regeln nennen eine Zeitspalte, die es nicht gibt: %', v_ohne_frist;
  end if;

  -- Und die Bezugsspalte ebenso.
  select string_agg(l.tabelle, ', ') into v_ohne_frist
  from public.loeschregeln l
  where not exists (
      select 1 from information_schema.columns c
      where c.table_schema = 'public' and c.table_name = l.tabelle
        and c.column_name = l.bezugsspalte);

  if v_ohne_frist is not null then
    raise exception 'Diese Regeln nennen eine Bezugsspalte, die es nicht gibt: %', v_ohne_frist;
  end if;

  raise notice 'CUST-018: % Regeln, keine offen. Zeit- und Bezugsspalten geprüft.', v_gesamt;
end $$;
