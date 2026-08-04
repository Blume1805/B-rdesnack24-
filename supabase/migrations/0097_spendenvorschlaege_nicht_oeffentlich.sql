-- ============================================================================
-- 0097 · Kundenvorschläge sind kein öffentlicher Aushang
-- ----------------------------------------------------------------------------
-- Gefunden beim Abnehmen der Loveable-Spendenseite (A5). Der Fehler steckt
-- nicht in der neuen Seite — sie zeigt nur getreu an, was die Datenbank
-- herausgibt. Beide Clients, Flutter (`donations_screen.dart`, Abschnitt
-- „Vorschläge von Kund*innen") und jetzt auch das Web, hängen an derselben
-- Funktion und hatten damit dasselbe Loch.
--
-- Bisher galt:
--
--   * `suggest_donation_cause` prüft nur `length(title) >= 3`. Sonst nichts.
--   * `donation_causes_list()` gibt JEDE nicht gelöschte Zeile heraus,
--     also auch `status = 'suggested'`.
--   * `vote_donation_cause` nimmt jede beliebige `cause_id` an, ohne den
--     Status anzusehen.
--
-- Zusammen heisst das: Wer angemeldet ist, tippt einen beliebigen Text ein,
-- und dieser Text steht Sekunden später bei ALLEN Kund*innen in der Liste
-- der gemeinnützigen Organisationen — unter unserem Namen, ohne dass ein
-- Mensch draufgeschaut hat. Das Etikett „Vorschlag — noch nicht
-- freigegeben" ändert daran nichts: Der Name steht trotzdem da. Bei einer
-- Beleidigung ist das peinlich; beim Namen eines echten Vereins, der nie
-- gefragt wurde, ist es eine Aussage über einen Dritten, die wir nicht
-- belegen können (§ 5 UWG).
--
-- Dazu kam, dass Stimmen auf unfreigegebenen Vorschlägen mitgezählt wurden
-- und die Sortierung verschoben haben — also genau die Reihenfolge, die
-- darüber entscheidet, wohin das Geld geht.
--
-- ----------------------------------------------------------------------------
-- Was sich ändert
--
-- 1. `donation_causes_list()` gibt `suggested` nur noch an die Person
--    heraus, die den Vorschlag gemacht hat, und an interne Rollen. Wer
--    etwas vorschlägt, sieht seinen Vorschlag also weiterhin — er steht
--    nur nicht mehr bei fremden Leuten in der App. `archived` und alles
--    Übrige verschwindet ganz aus dem Kundenbereich.
--
-- 2. `vote_donation_cause` verweigert alles, was nicht `active` und nicht
--    gelöscht ist. Vorher liess sich per RPC auch auf einem Vorschlag
--    abstimmen, den die eigene App gar nicht anzeigt.
--
-- 3. `suggest_donation_cause` begrenzt auf drei offene Vorschläge je
--    Person. Ohne Grenze kann eine einzelne angemeldete Person die
--    Freigabeliste beliebig weit vollschreiben.
--
-- Absichtlich NICHT geändert: die bestehenden Stimmen. Eine Stimme auf
-- einem Vorschlag, der später freigegeben wird, soll erhalten bleiben —
-- sie war ja ernst gemeint. Sie zählt nur nicht mehr sichtbar mit,
-- solange der Vorschlag nicht freigegeben ist.
--
-- Beide Clients vertragen das ohne Codeänderung: Flutter filtert selbst
-- auf `isSuggested`, das Web auf `status === 'suggested'` — beide zeigen
-- danach schlicht weniger an.
-- ============================================================================

-- ----------------------------------------------------------------------------
-- 1) Liste: fremde Vorschläge nicht mehr ausliefern
-- ----------------------------------------------------------------------------
create or replace function public.donation_causes_list()
returns table (
  id uuid,
  title text,
  description text,
  status text,
  vote_count bigint,
  voted_by_me boolean,
  created_at timestamptz,
  legal_name text,
  purpose text,
  city text,
  website text,
  receipt_eligible boolean
)
language sql
security definer
set search_path to 'public', 'app'
as $function$
  select
    c.id, c.title, c.description, c.status,
    coalesce(v.n, 0)::bigint,
    exists(select 1 from public.donation_votes vv
             where vv.cause_id = c.id and vv.customer_id = (select auth.uid())),
    c.created_at,
    c.legal_name, c.purpose, c.city, c.website, c.receipt_eligible
  from public.donation_causes c
  left join lateral (
    select count(*) n from public.donation_votes v where v.cause_id = c.id
  ) v on true
  where c.deleted_at is null
    and (
      c.status = 'active'
      -- Eigener Vorschlag: sichtbar, damit niemand denkt, das Formular
      -- habe nicht funktioniert. Ist auth.uid() NULL (anonym), ergibt der
      -- Vergleich NULL und die Zeile fällt heraus — die sichere Richtung.
      or (c.status = 'suggested' and c.suggested_by = (select auth.uid()))
      -- Intern: alles sehen, sonst kann niemand freigeben.
      or public.is_internal((select auth.uid()))
    )
  order by
    case c.status when 'active' then 0 when 'suggested' then 1 else 2 end,
    coalesce(v.n, 0) desc,
    c.created_at desc
$function$;

-- ----------------------------------------------------------------------------
-- 2) Abstimmen nur auf freigegebenen Zwecken
-- ----------------------------------------------------------------------------
create or replace function public.vote_donation_cause(p_cause_id uuid)
returns boolean
language plpgsql
security definer
set search_path to 'public', 'app'
as $function$
declare
  v_uid    uuid := auth.uid();
  v_status text;
  v_exists boolean;
begin
  if v_uid is null then
    raise exception 'Nicht angemeldet';
  end if;

  select c.status into v_status
    from public.donation_causes c
   where c.id = p_cause_id and c.deleted_at is null;

  -- `v_status is distinct from 'active'` statt `<>`: Gibt es die Zeile
  -- nicht, ist v_status NULL, und `NULL <> 'active'` wäre NULL — die
  -- Bedingung liefe ins Leere und der Aufruf ginge durch. Genau die
  -- Falle, die in 0094/0095 siebzehn Funktionen betraf.
  if v_status is distinct from 'active' then
    raise exception 'Für diesen Zweck kann nicht abgestimmt werden';
  end if;

  select exists(select 1 from public.donation_votes
                 where customer_id = v_uid and cause_id = p_cause_id)
    into v_exists;

  if v_exists then
    delete from public.donation_votes
      where customer_id = v_uid and cause_id = p_cause_id;
    return false;
  else
    insert into public.donation_votes(customer_id, cause_id)
      values (v_uid, p_cause_id);
    return true;
  end if;
end;
$function$;

-- ----------------------------------------------------------------------------
-- 3) Vorschläge begrenzen
-- ----------------------------------------------------------------------------
create or replace function public.suggest_donation_cause(
  p_title text, p_description text
)
returns public.donation_causes
language plpgsql
security definer
set search_path to 'public', 'app'
as $function$
declare
  v_uid  uuid := auth.uid();
  v_open int;
  v_row  public.donation_causes;
begin
  if v_uid is null then
    raise exception 'Nicht angemeldet';
  end if;

  if length(coalesce(p_title, '')) < 3 then
    raise exception 'Titel zu kurz';
  end if;

  select count(*) into v_open
    from public.donation_causes
   where suggested_by = v_uid
     and status = 'suggested'
     and deleted_at is null;

  if v_open >= 3 then
    raise exception 'Es sind bereits drei Vorschläge offen. Bitte warte die Prüfung ab.';
  end if;

  insert into public.donation_causes(title, description, status, suggested_by)
  values (trim(p_title),
          nullif(trim(coalesce(p_description, '')), ''),
          'suggested',
          v_uid)
  returning * into v_row;

  return v_row;
end;
$function$;
