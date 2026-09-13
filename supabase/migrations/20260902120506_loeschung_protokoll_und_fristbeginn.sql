-- ===========================================================================
-- Zwei Fehler, gefunden beim Ausrollen der letzten 15 Löschregeln (CUST-018).
-- Beide waren gemessen, nicht vermutet.
--
-- S-23  Der Löschvorgang schrieb die gelöschten Daten ins Änderungsprotokoll
--       zurück. Gemessen nach `execute_account_deletion`: vier Zeilen in
--       `public.audit_log` mit Klarnamen und E-Mail des gelöschten Kontos,
--       31 weitere mit Inhalten aus gelöschten Tabellen. `audit_log` hatte
--       gar keine Löschregel — die Tabelle stand nicht in den 35.
--
-- S-24  Die Aufbewahrungsfrist lief ab Anlage des Datensatzes, auch wenn der
--       Vorgang noch läuft. Bis CUST-018 waren alle Fristtabellen
--       abgeschlossene Vorgänge (ein Kauf, eine Rechnung). Mit den zehn neuen
--       kamen erstmals *laufende* Sachverhalte hinzu: ein Abo, eine
--       Firmenmitgliedschaft, eine Preisvereinbarung. `purge_nach_frist`
--       hätte ein seit neun Jahren laufendes Abo gelöscht — den laufenden
--       Vertrag, nicht seinen Beleg.
--       § 147 Abs. 4 AO lässt die Frist mit dem Schluss des Kalenderjahres
--       beginnen, in dem der Vorgang endet. Vorher beginnt sie nicht.
-- ===========================================================================


-- ---------------------------------------------------------------------------
-- S-24: Ab wann die Frist läuft
-- ---------------------------------------------------------------------------

alter table public.loeschregeln
  add column if not exists frist_ab text;

comment on column public.loeschregeln.frist_ab is
  'SQL-Ausdruck über dem Alias `t`, der den Zeitpunkt liefert, ab dem die '
  'Aufbewahrungsfrist läuft (§ 147 Abs. 4 AO: Ende des Vorgangs, nicht sein '
  'Beginn). Liefert er NULL, ist der Vorgang noch nicht beendet und die Frist '
  'hat nicht begonnen — die Zeile wird nie gelöscht. Ist die Spalte selbst '
  'NULL, gilt `zeitspalte`; das ist bei abgeschlossenen Vorgängen richtig, '
  'bei laufenden nicht.';

-- Ein Abo gilt als beendet, sobald eine neuere Wahl desselben Kunden vorliegt.
-- Die jeweils letzte Zeile ist der laufende Vertrag.
update public.loeschregeln set frist_ab =
  'case when exists (select 1 from public.customer_subscriptions n
                      where n.customer_id = t.customer_id and n.seq > t.seq)
        then t.chosen_at end',
  begruendung = begruendung || ' — Frist ab Ablösung durch die nächste Wahl',
  geaendert_am = now()
 where tabelle = 'customer_subscriptions';

-- Store-Abo: beendet mit Widerruf, Kündigung oder Ablauf der Periode.
-- Solange es aktiv ist, schiebt die Verlängerung `expires_at` vor sich her.
update public.loeschregeln set frist_ab =
  'case when t.status is distinct from ''active''
        then coalesce(t.revoked_at, t.cancelled_at, t.expires_at) end',
  begruendung = begruendung || ' — Frist ab Ende der Laufzeit',
  geaendert_am = now()
 where tabelle = 'store_subscription';

-- Mitgliedschaft: beendet, wenn sie entfernt ist. `suspended` ist ausgesetzt,
-- nicht beendet.
update public.loeschregeln set frist_ab =
  'case when t.status = ''removed'' then t.updated_at end',
  begruendung = begruendung || ' — Frist ab Ende der Mitgliedschaft',
  geaendert_am = now()
 where tabelle = 'business_members';

-- Der Empfehlungscode endet mit dem Konto seines Inhabers.
update public.loeschregeln set frist_ab =
  'case when exists (select 1 from public.profiles p
                      where p.id = t.owner_id and p.deleted_at is not null)
        then t.created_at end',
  begruendung = begruendung || ' — Frist ab Löschung des Inhaberkontos',
  geaendert_am = now()
 where tabelle = 'referral_codes';

-- Preisvereinbarung: beendet mit Ablauf ihrer Gültigkeit. Ohne `valid_to`
-- gilt sie weiter.
update public.loeschregeln set frist_ab =
  'case when t.valid_to is not null and t.valid_to < current_date
        then t.valid_to::timestamptz end',
  begruendung = begruendung || ' — Frist ab Ende der Gültigkeit',
  geaendert_am = now()
 where tabelle = 'customer_prices';

update public.loeschregeln set frist_ab =
  'coalesce(t.deleted_at,
            case when t.gueltig_bis is not null and t.gueltig_bis < current_date
                 then t.gueltig_bis::timestamptz end)',
  begruendung = begruendung || ' — Frist ab Aufhebung oder Ende der Gültigkeit',
  geaendert_am = now()
 where tabelle = 'business_budgets';

-- Auch bestehend und aus demselben Grund falsch: Eine Einwilligung ist eine
-- fortwirkende Erklärung. Sie endet, wenn eine neuere für denselben Zweck
-- vorliegt. Die geltende Einwilligung zu löschen, während die Verarbeitung
-- weiterläuft, nähme dem Nachweis nach Art. 7 Abs. 1 DSGVO die Grundlage.
update public.loeschregeln set frist_ab =
  'case when exists (select 1 from public.consents n
                      where n.profile_id = t.profile_id and n.type = t.type
                        and n.created_at > t.created_at)
        then t.created_at end',
  begruendung = begruendung || ' — Frist ab Ablösung durch eine neuere Erklärung',
  geaendert_am = now()
 where tabelle = 'consents';


create or replace function app.purge_nach_frist()
returns jsonb
language plpgsql
security definer
set search_path to 'public', 'app'
as $function$
declare
  r         record;
  v_ab      text;
  v_anzahl  bigint;
  v_bericht jsonb := '{}'::jsonb;
begin
  if app.aufbewahrung_gehemmt() then
    return jsonb_build_object('uebersprungen', true,
      'grund', coalesce((select grund from public.aufbewahrung_hemmung where id), 'Ablaufhemmung gesetzt'));
  end if;

  for r in select tabelle, zeitspalte, jahre, frist_ab from public.loeschregeln
            where behandlung = 'aufbewahren' and jahre is not null and zeitspalte is not null
            order by tabelle
  loop
    -- Ohne `frist_ab` zählt die Anlage des Datensatzes. Das ist nur richtig,
    -- wenn der Vorgang mit der Anlage abgeschlossen ist — ein Kauf, eine
    -- Rechnung. Bei laufenden Sachverhalten liefert `frist_ab` NULL, der
    -- Vergleich wird NULL, und die Zeile bleibt.
    v_ab := coalesce(r.frist_ab, format('t.%I', r.zeitspalte));
    execute format(
      'delete from public.%I t where (%s) < (now() - make_interval(years => $1))',
      r.tabelle, v_ab) using r.jahre;
    get diagnostics v_anzahl = row_count;
    if v_anzahl > 0 then
      v_bericht := v_bericht || jsonb_build_object(r.tabelle, v_anzahl);
    end if;
  end loop;

  return jsonb_build_object('uebersprungen', false, 'geloescht', v_bericht, 'gelaufen_am', now());
end;
$function$;


-- ---------------------------------------------------------------------------
-- S-23: Das Änderungsprotokoll darf die Löschung nicht rückgängig machen
-- ---------------------------------------------------------------------------

-- `audit_log` fehlte in der Aufstellung, weil dort kein Personenbezug in einer
-- Spalte steht — er steckt in `old_data`/`new_data`. Genau deshalb war er
-- unsichtbar.
--
-- Die Behandlung ist `anonymisieren` und nicht `loeschen`: Wer wann welchen
-- Datensatz geändert hat, ist die Protokollierung, die die GoBD für
-- nachträgliche Änderungen an buchungsrelevanten Daten verlangen. Diese
-- Angabe bleibt. Der Inhalt der Änderung fällt weg, soweit er zu einer
-- Tabelle gehört, deren Daten gelöscht oder anonymisiert wurden — dort ist er
-- nicht buchungsrelevant (Kontaktnachrichten, Gerätetoken, persönliche
-- Angebote, Profil, Kundenstammdaten). Zeilen über aufbewahrungspflichtige
-- Tabellen behalten ihren Inhalt und teilen dessen Frist.
insert into public.loeschregeln
  (tabelle, bezugsspalte, behandlung, jahre, zeitspalte, begruendung, geaendert_am)
values
  ('audit_log', 'actor_id', 'anonymisieren', null, null,
   'Änderungsprotokoll. Wer/wann/welcher Datensatz bleibt (GoBD). Der '
   || 'protokollierte Inhalt wird entfernt, soweit er aus einer Tabelle stammt, '
   || 'die gelöscht oder anonymisiert wurde — sonst stünde das Gelöschte im '
   || 'Protokoll weiter.', now())
on conflict (tabelle) do update set
  bezugsspalte = excluded.bezugsspalte,
  behandlung   = excluded.behandlung,
  jahre        = excluded.jahre,
  zeitspalte   = excluded.zeitspalte,
  begruendung  = excluded.begruendung,
  geaendert_am = now();


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
  v_protokoll  bigint;
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

  -- ZULETZT: Alles oben hat Protokollzeilen erzeugt, die den Inhalt der
  -- gelöschten und anonymisierten Zeilen tragen — einschließlich des Namens,
  -- den die Anonymisierung gerade entfernt hat. Ohne diesen Schritt stünde
  -- die Löschung im Protokoll wieder drin.
  update public.audit_log a set
      old_data = case when a.old_data is null then null else jsonb_build_object(
        'entfernt', 'Inhalt nach Kontolöschung entfernt',
        'felder', (select jsonb_agg(k order by k) from jsonb_object_keys(a.old_data) k)) end,
      new_data = case when a.new_data is null then null else jsonb_build_object(
        'entfernt', 'Inhalt nach Kontolöschung entfernt',
        'felder', (select jsonb_agg(k order by k) from jsonb_object_keys(a.new_data) k)) end
    where a.table_name in (
            select tabelle from public.loeschregeln
             where behandlung in ('loeschen', 'anonymisieren'))
      and (a.record_id = p_profile::text
           or a.old_data->>'profile_id'  = p_profile::text
           or a.new_data->>'profile_id'  = p_profile::text
           or a.old_data->>'customer_id' = p_profile::text
           or a.new_data->>'customer_id' = p_profile::text
           or a.old_data->>'user_id'     = p_profile::text
           or a.new_data->>'user_id'     = p_profile::text
           or a.old_data->>'owner_id'    = p_profile::text
           or a.new_data->>'owner_id'    = p_profile::text)
      and coalesce(a.old_data->>'entfernt', a.new_data->>'entfernt') is null;
  get diagnostics v_protokoll = row_count;

  perform set_config('app.konto_loeschung', 'off', true);

  return jsonb_build_object(
    'konto',           p_profile,
    'ausgefuehrt_am',  now(),
    'geloescht',       v_geloescht,
    'gesperrt_bis_fristablauf', v_bleibt,
    'protokoll_bereinigt', v_protokoll,
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
-- Zusicherung: Jeder `frist_ab`-Ausdruck wird ausgeführt, nicht gelesen.
-- Ein Ausdruck, der erst 2034 zum ersten Mal läuft, wird nie geprüft.
-- ---------------------------------------------------------------------------

do $$
declare
  r record; v_dummy bigint; v_anzahl int := 0;
begin
  for r in select tabelle, zeitspalte, frist_ab from public.loeschregeln
            where behandlung = 'aufbewahren' order by tabelle
  loop
    begin
      execute format('select count(*) from public.%I t where (%s) < now()',
                     r.tabelle, coalesce(r.frist_ab, format('t.%I', r.zeitspalte)))
        into v_dummy;
    exception when others then
      raise exception 'Fristbeginn für % ist nicht ausführbar: %', r.tabelle, sqlerrm;
    end;
    v_anzahl := v_anzahl + 1;
  end loop;

  raise notice 'S-24: % Fristausdrücke ausgeführt, alle gültig.', v_anzahl;
end $$;

do $$
declare v_offen int;
begin
  select count(*) filter (where behandlung = 'offen') into v_offen from public.loeschregeln;
  if v_offen > 0 then
    raise exception 'Es stehen weiterhin % Tabellen auf offen', v_offen;
  end if;
  if not exists (select 1 from public.loeschregeln where tabelle = 'audit_log') then
    raise exception 'Das Änderungsprotokoll hat keine Löschregel';
  end if;
  raise notice 'S-23: audit_log hat eine Regel. Keine Tabelle steht auf offen.';
end $$;
