-- 0146 — Schritt 5, Teil 2: Funktionen fuer Werbeflaechen und -vertraege.

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
    raise exception 'Keine Berechtigung fuer Werbeflaechen' using errcode = '42501';
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

create or replace function public.advertising_space_remove(p_space uuid)
returns void
language plpgsql
security definer
set search_path to 'public', 'app'
as $function$
begin
  if not (public.is_admin() or public.auth_has_permission('locations.manage')) then
    raise exception 'Keine Berechtigung fuer Werbeflaechen' using errcode = '42501';
  end if;
  -- Eine Flaeche mit laufendem Vertrag verschwindet nicht. Sonst haengt ein
  -- Vertrag an etwas, das es nicht mehr gibt.
  if exists (
    select 1 from public.advertising_space_contracts c
    where c.space_id = p_space and c.deleted_at is null
      and c.status in ('zur_unterschrift', 'aktiv')
      and (c.bis is null or c.bis >= current_date)
  ) then
    raise exception
      'Diese Flaeche hat einen laufenden Vertrag. Erst beenden, dann entfernen.'
      using errcode = '23514';
  end if;

  update public.advertising_spaces
     set deleted_at = now(), updated_by = auth.uid()
   where id = p_space and deleted_at is null;
  if not found then
    raise exception 'Werbeflaeche nicht gefunden' using errcode = 'P0002';
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
    raise exception 'Keine Berechtigung fuer Werbevertraege' using errcode = '42501';
  end if;
  if p_bis is not null and p_bis < p_von then
    raise exception 'Das Vertragsende liegt vor dem Beginn' using errcode = '22023';
  end if;

  -- Ohne eigenen Preis gilt der Listenpreis der Flaeche. Ihn hier
  -- festzuschreiben ist Absicht: Aendert sich die Liste spaeter, aendert sich
  -- kein laufender Vertrag.
  select coalesce(p_preis_monat, s.listenpreis_monat) into preis
  from public.advertising_spaces s
  where s.id = p_space and s.deleted_at is null;

  if preis is null then
    raise exception 'Werbeflaeche nicht gefunden' using errcode = 'P0002';
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
    raise exception 'Keine Berechtigung fuer Werbevertraege' using errcode = '42501';
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
    raise exception 'Keine Berechtigung fuer Werbevertraege' using errcode = '42501';
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
