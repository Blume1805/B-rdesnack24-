-- ============================================================================
-- 0146 — Schritt 5, Teil 2: Funktionen für Werbeflächen und -verträge
-- ----------------------------------------------------------------------------
-- Fortsetzung von 0145 (Tabellen, Ausschluss, Zeilensicherheit).
--
-- Berechtigung: `locations.manage`. Bewusst kein eigenes Recht
-- `advertising.manage` — ein neues Recht muss in der Rollenpflege
-- nachgezogen werden und wird beim nächsten Rollenwechsel vergessen.
-- Werbeflächen hängen an unseren Automaten und Standorten; wer die
-- verwaltet, verwaltet auch die Flächen daran. Beide Rollen, die den
-- Verwaltungsbereich sehen, tragen es bereits.
--
-- „Frei" wird gerechnet, nicht gespeichert: `betriebszustand = nutzbar` UND
-- kein Vertrag mit Status `zur_unterschrift`/`aktiv`, dessen Laufzeit den
-- Stichtag enthält. Begründung im Kopf von 0145.
--
-- Nachgestellt am 26.08.2026 mit echten Zeilen — sieben Fälle, darunter:
-- Vertrag ohne Motivfreigabe nicht aktivierbar (23514); ein aktiver Vertrag
-- um einen Tag verlängert, sodass er den nächsten überschneidet (23P01);
-- derselbe Vertrag unbefristet gemacht (23P01); ein dritter Mieter mitten in
-- einer laufenden Miete (23P01); derselbe Zeitraum als ENTWURF dagegen
-- zulässig. Testdaten anschliessend entfernt.
-- ============================================================================

create or replace function public.advertising_space_set(
  p_machine      uuid,
  p_position     app.werbeflaeche_position,
  p_bezeichnung  text    default null,
  p_breite_mm    int     default null,
  p_hoehe_mm     int     default null,
  p_preis_monat  numeric default 0,
  p_zustand      app.werbeflaeche_zustand default 'nutzbar',
  p_bemerkung    text    default null
)
returns uuid
language plpgsql
security definer
set search_path to 'public', 'app'
as $function$
declare
  neu uuid;
begin
  if not (public.is_admin() or public.auth_has_permission('locations.manage')) then
    raise exception 'Keine Berechtigung für Werbeflächen' using errcode = '42501';
  end if;
  if not exists (select 1 from public.machines m
                 where m.id = p_machine and m.deleted_at is null) then
    raise exception 'Automat nicht gefunden' using errcode = 'P0002';
  end if;

  insert into public.advertising_spaces (
    machine_id, position, bezeichnung, breite_mm, hoehe_mm,
    listenpreis_monat, betriebszustand, bemerkung, created_by, updated_by
  ) values (
    p_machine, p_position, p_bezeichnung, p_breite_mm, p_hoehe_mm,
    coalesce(p_preis_monat, 0), coalesce(p_zustand, 'nutzbar'), p_bemerkung,
    auth.uid(), auth.uid()
  )
  on conflict (machine_id, position) where deleted_at is null
  do update set
    bezeichnung       = excluded.bezeichnung,
    breite_mm         = excluded.breite_mm,
    hoehe_mm          = excluded.hoehe_mm,
    listenpreis_monat = excluded.listenpreis_monat,
    betriebszustand   = excluded.betriebszustand,
    bemerkung         = excluded.bemerkung,
    updated_at        = now(),
    updated_by        = auth.uid()
  returning id into neu;

  return neu;
end;
$function$;

revoke all on function public.advertising_space_set(uuid,app.werbeflaeche_position,text,int,int,numeric,app.werbeflaeche_zustand,text) from public;
grant execute on function public.advertising_space_set(uuid,app.werbeflaeche_position,text,int,int,numeric,app.werbeflaeche_zustand,text) to authenticated;

-- Eine Fläche mit laufendem Vertrag verschwindet nicht. Sonst hängt ein
-- Vertrag an etwas, das es nicht mehr gibt.
create or replace function public.advertising_space_remove(p_space uuid)
returns void
language plpgsql
security definer
set search_path to 'public', 'app'
as $function$
begin
  if not (public.is_admin() or public.auth_has_permission('locations.manage')) then
    raise exception 'Keine Berechtigung für Werbeflächen' using errcode = '42501';
  end if;
  if exists (
    select 1 from public.advertising_space_contracts c
    where c.space_id = p_space and c.deleted_at is null
      and c.status in ('zur_unterschrift', 'aktiv')
      and (c.bis is null or c.bis >= current_date)
  ) then
    raise exception
      'Diese Fläche hat einen laufenden Vertrag. Erst beenden, dann entfernen.'
      using errcode = '23514';
  end if;

  update public.advertising_spaces
     set deleted_at = now(), updated_by = auth.uid()
   where id = p_space and deleted_at is null;
  if not found then
    raise exception 'Werbefläche nicht gefunden' using errcode = 'P0002';
  end if;
end;
$function$;

revoke all on function public.advertising_space_remove(uuid) from public;
grant execute on function public.advertising_space_remove(uuid) to authenticated;

create or replace function public.advertising_contract_set(
  p_space        uuid,
  p_business     uuid,
  p_von          date,
  p_bis          date    default null,
  p_preis_monat  numeric default null,
  p_kuendigungsfrist int default 30,
  p_motiv        text    default null,
  p_bemerkung    text    default null,
  p_contract     uuid    default null
)
returns uuid
language plpgsql
security definer
set search_path to 'public', 'app'
as $function$
declare
  neu   uuid;
  preis numeric;
begin
  if not (public.is_admin() or public.auth_has_permission('locations.manage')) then
    raise exception 'Keine Berechtigung für Werbeverträge' using errcode = '42501';
  end if;
  if p_bis is not null and p_bis < p_von then
    raise exception 'Das Vertragsende liegt vor dem Beginn' using errcode = '22023';
  end if;

  -- Ohne eigenen Preis gilt der Listenpreis der Fläche. Ihn hier
  -- festzuschreiben ist Absicht: Ändert sich die Liste später, ändert sich
  -- kein laufender Vertrag.
  select coalesce(p_preis_monat, s.listenpreis_monat) into preis
  from public.advertising_spaces s
  where s.id = p_space and s.deleted_at is null;

  if preis is null then
    raise exception 'Werbefläche nicht gefunden' using errcode = 'P0002';
  end if;

  if p_contract is null then
    insert into public.advertising_space_contracts (
      space_id, business_id, von, bis, preis_monat, kuendigungsfrist_tage,
      motiv_beschreibung, bemerkung, created_by, updated_by
    ) values (
      p_space, p_business, p_von, p_bis, preis,
      coalesce(p_kuendigungsfrist, 30), p_motiv, p_bemerkung,
      auth.uid(), auth.uid()
    )
    returning id into neu;
  else
    update public.advertising_space_contracts
       set space_id = p_space, business_id = p_business,
           von = p_von, bis = p_bis, preis_monat = preis,
           kuendigungsfrist_tage = coalesce(p_kuendigungsfrist, 30),
           motiv_beschreibung = p_motiv, bemerkung = p_bemerkung,
           updated_at = now(), updated_by = auth.uid()
     where id = p_contract and deleted_at is null
     returning id into neu;
    if neu is null then
      raise exception 'Vertrag nicht gefunden' using errcode = 'P0002';
    end if;
  end if;

  return neu;
end;
$function$;

revoke all on function public.advertising_contract_set(uuid,uuid,date,date,numeric,int,text,text,uuid) from public;
grant execute on function public.advertising_contract_set(uuid,uuid,date,date,numeric,int,text,text,uuid) to authenticated;

-- Wer freigibt, wird namentlich festgehalten. Ohne Freigabe lässt die
-- Prüfregel aus 0145 den Vertrag nicht verbindlich werden.
create or replace function public.advertising_motif_approve(
  p_contract uuid,
  p_wer      text
)
returns void
language plpgsql
security definer
set search_path to 'public', 'app'
as $function$
begin
  if not (public.is_admin() or public.auth_has_permission('locations.manage')) then
    raise exception 'Keine Berechtigung für Werbeverträge' using errcode = '42501';
  end if;
  if p_wer is null or length(btrim(p_wer)) < 2 then
    raise exception 'Wer freigibt, muss genannt werden' using errcode = '22023';
  end if;

  update public.advertising_space_contracts
     set motiv_freigegeben_am = current_date,
         motiv_freigegeben_von = btrim(p_wer),
         updated_at = now(), updated_by = auth.uid()
   where id = p_contract and deleted_at is null;
  if not found then
    raise exception 'Vertrag nicht gefunden' using errcode = 'P0002';
  end if;
end;
$function$;

revoke all on function public.advertising_motif_approve(uuid,text) from public;
grant execute on function public.advertising_motif_approve(uuid,text) to authenticated;

create or replace function public.advertising_contract_status(
  p_contract uuid,
  p_status   app.werbevertrag_status
)
returns void
language plpgsql
security definer
set search_path to 'public', 'app'
as $function$
begin
  if not (public.is_admin() or public.auth_has_permission('locations.manage')) then
    raise exception 'Keine Berechtigung für Werbeverträge' using errcode = '42501';
  end if;

  update public.advertising_space_contracts
     set status = p_status, updated_at = now(), updated_by = auth.uid()
   where id = p_contract and deleted_at is null;
  if not found then
    raise exception 'Vertrag nicht gefunden' using errcode = 'P0002';
  end if;
end;
$function$;

revoke all on function public.advertising_contract_status(uuid,app.werbevertrag_status) from public;
grant execute on function public.advertising_contract_status(uuid,app.werbevertrag_status) to authenticated;

-- ----------------------------------------------------------------------------
-- Übersicht, Auslastung, Werbeumsatz je Automat
-- ----------------------------------------------------------------------------
create or replace function public.advertising_overview(
  p_stichtag date default current_date
)
returns jsonb
language plpgsql
stable
security definer
set search_path to 'public', 'app'
as $function$
declare
  ergebnis jsonb;
begin
  if not (public.is_admin() or public.auth_has_permission('locations.manage')) then
    raise exception 'Keine Berechtigung für Werbeflächen' using errcode = '42501';
  end if;

  with flaeche as (
    select s.id, s.machine_id, s.position, s.bezeichnung, s.breite_mm,
           s.hoehe_mm, s.listenpreis_monat, s.betriebszustand, s.bemerkung,
           m.code as automat_code, m.name as automat_name,
           lo.name as standort, lo.kind::text as standort_art,
           c.id as vertrag_id, c.business_id, b.name as mieter,
           c.von, c.bis, c.preis_monat, c.status::text as vertrag_status,
           c.motiv_freigegeben_am
    from public.advertising_spaces s
    join public.machines m on m.id = s.machine_id
    left join public.locations lo on lo.id = m.location_id
    left join lateral (
      select cc.*
      from public.advertising_space_contracts cc
      where cc.space_id = s.id
        and cc.deleted_at is null
        and cc.status in ('zur_unterschrift', 'aktiv')
        and cc.laufzeit @> p_stichtag
      order by cc.von desc
      limit 1
    ) c on true
    left join public.businesses b on b.id = c.business_id
    where s.deleted_at is null
  )
  select jsonb_build_object(
    'stichtag', p_stichtag,
    'kennzahlen', jsonb_build_object(
      'flaechen_gesamt', (select count(*) from flaeche),
      'nutzbar',         (select count(*) from flaeche where betriebszustand = 'nutzbar'),
      'vermietet',       (select count(*) from flaeche where vertrag_id is not null),
      'frei',            (select count(*) from flaeche
                          where betriebszustand = 'nutzbar' and vertrag_id is null),
      'nicht_nutzbar',   (select count(*) from flaeche where betriebszustand <> 'nutzbar'),
      -- Auslastung im Sinne des Auftrags (§45): vermietet je NUTZBARER Fläche.
      -- Gesperrte Flächen zählen nicht mit, weil sie nicht vermietbar sind und
      -- die Quote sonst dauerhaft schlechter aussähe, als sie ist.
      'auslastung_prozent', (
        select case when count(*) filter (where betriebszustand = 'nutzbar') = 0
                    then null
                    else round(100.0 * count(*) filter (where vertrag_id is not null)
                               / count(*) filter (where betriebszustand = 'nutzbar'), 1)
               end
        from flaeche),
      'werbeumsatz_monat', coalesce((
        select sum(preis_monat) from flaeche where vertrag_id is not null), 0),
      -- Was an freien Flächen zum Listenpreis noch zu holen wäre. Die Zahl
      -- macht aus einer Quote eine Aufgabe.
      'listenwert_frei', coalesce((
        select sum(listenpreis_monat) from flaeche
        where betriebszustand = 'nutzbar' and vertrag_id is null), 0)
    ),
    'je_automat', coalesce((
      select jsonb_agg(x order by x->>'automat')
      from (
        select jsonb_build_object(
                 'machine_id', machine_id,
                 'automat', coalesce(automat_code, automat_name),
                 'standort', standort,
                 'flaechen', count(*),
                 'vermietet', count(*) filter (where vertrag_id is not null),
                 'werbeumsatz_monat',
                   coalesce(sum(preis_monat) filter (where vertrag_id is not null), 0)
               ) as x
        from flaeche
        group by machine_id, automat_code, automat_name, standort
      ) t), '[]'::jsonb),
    'flaechen', coalesce((
      select jsonb_agg(jsonb_build_object(
               'id', id,
               'automat', coalesce(automat_code, automat_name),
               'standort', standort,
               'position', position::text,
               'bezeichnung', bezeichnung,
               'groesse_mm', case when breite_mm is null or hoehe_mm is null
                                  then null
                                  else breite_mm || ' x ' || hoehe_mm end,
               'listenpreis_monat', listenpreis_monat,
               'betriebszustand', betriebszustand::text,
               'frei', betriebszustand = 'nutzbar' and vertrag_id is null,
               'vertrag', case when vertrag_id is null then null else
                 jsonb_build_object(
                   'id', vertrag_id, 'business_id', business_id,
                   'mieter', mieter, 'von', von, 'bis', bis,
                   'preis_monat', preis_monat, 'status', vertrag_status,
                   'motiv_freigegeben_am', motiv_freigegeben_am)
               end)
             order by standort nulls last, automat_code, position)
      from flaeche), '[]'::jsonb)
  )
  into ergebnis;

  return ergebnis;
end;
$function$;

revoke all on function public.advertising_overview(date) from public;
grant execute on function public.advertising_overview(date) to authenticated;

comment on function public.advertising_overview(date) is
  'Werbeflächen-Inventar zum Stichtag samt Auslastung und Werbeumsatz je '
  'Automat. Belegung wird gerechnet, nicht gespeichert.';

-- Die Sicht des Werbekunden auf seine eigenen Verträge — mehr sieht er nicht.
create or replace function public.my_advertising_contracts()
returns jsonb
language sql
stable
security definer
set search_path to 'public', 'app'
as $function$
  select coalesce(jsonb_agg(jsonb_build_object(
           'id', c.id,
           'firma', b.name,
           'automat', coalesce(m.code, m.name),
           'standort', lo.name,
           'position', s.position::text,
           'von', c.von, 'bis', c.bis,
           'preis_monat', c.preis_monat,
           'status', c.status::text,
           'motiv_freigegeben_am', c.motiv_freigegeben_am
         ) order by c.von desc), '[]'::jsonb)
  from public.advertising_space_contracts c
  join public.businesses b on b.id = c.business_id
  join public.advertising_spaces s on s.id = c.space_id
  join public.machines m on m.id = s.machine_id
  left join public.locations lo on lo.id = m.location_id
  where c.deleted_at is null
    and app.is_business_member(c.business_id);
$function$;

revoke all on function public.my_advertising_contracts() from public;
grant execute on function public.my_advertising_contracts() to authenticated;
