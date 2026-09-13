-- 0137 — Korrekturen an der Anlage PKW, gesperrt nach der Freigabe.
-- Die Sperre hängt an dem Zustand, den `decide_document_approval` ohnehin
-- setzt: status='approved' und finalized_at, sobald beide Gesellschafter
-- signiert haben. Sie sitzt in der Datenbank, nicht in der Oberfläche: Eine
-- ausgegraute Schaltfläche hält niemanden auf, der die API anspricht.
-- Volltext: supabase/migrations/0137_freigegebene_anlage_ist_gesperrt.sql

create or replace function app.anlage_pkw_freigegeben(p_jahr int)
returns boolean
language sql
stable
security definer
set search_path to 'public', 'app'
as $$
  select exists (
    select 1
    from public.document_approvals a
    where a.document_kind = 'anlage_pkw'
      and a.status = 'approved'
      and a.cancelled_at is null
      and extract(year from a.period_from)::int <= p_jahr
      and extract(year from a.period_to)::int   >= p_jahr
  );
$$;

comment on function app.anlage_pkw_freigegeben(int) is
  'Wahr, wenn die Anlage PKW für dieses Jahr von beiden Gesellschaftern signiert und freigegeben wurde. Grundlage der Änderungssperre.';

create or replace function app.anlage_pkw_sperre()
returns trigger
language plpgsql
security definer
set search_path to 'public', 'app'
as $$
declare
  v_alt int;
  v_neu int;
begin
  if TG_TABLE_NAME = 'pkw_fahrten' then
    v_alt := case when TG_OP <> 'INSERT'
                  then extract(year from OLD.fahrt_datum)::int end;
    v_neu := case when TG_OP <> 'DELETE'
                  then extract(year from NEW.fahrt_datum)::int end;
  else
    v_alt := case when TG_OP <> 'INSERT' then OLD.jahr end;
    v_neu := case when TG_OP <> 'DELETE' then NEW.jahr end;
  end if;

  if v_alt is not null and app.anlage_pkw_freigegeben(v_alt) then
    raise exception
      'Die Anlage PKW % ist freigegeben und unterschrieben. Korrekturen sind nicht mehr möglich.',
      v_alt using errcode = '42501';
  end if;
  if v_neu is not null and v_neu is distinct from v_alt
     and app.anlage_pkw_freigegeben(v_neu) then
    raise exception
      'Die Anlage PKW % ist freigegeben und unterschrieben. Korrekturen sind nicht mehr möglich.',
      v_neu using errcode = '42501';
  end if;

  return case when TG_OP = 'DELETE' then OLD else NEW end;
end;
$$;

drop trigger if exists pkw_kosten_sperre  on public.pkw_kosten;
drop trigger if exists pkw_jahr_sperre    on public.pkw_jahr;
drop trigger if exists pkw_fahrten_sperre on public.pkw_fahrten;

create trigger pkw_kosten_sperre
  before insert or update or delete on public.pkw_kosten
  for each row execute function app.anlage_pkw_sperre();

create trigger pkw_jahr_sperre
  before insert or update or delete on public.pkw_jahr
  for each row execute function app.anlage_pkw_sperre();

create trigger pkw_fahrten_sperre
  before insert or update or delete on public.pkw_fahrten
  for each row execute function app.anlage_pkw_sperre();

create or replace function public.anlage_pkw(p_jahr int)
returns jsonb
language plpgsql
stable
security definer
set search_path to 'public', 'app'
as $function$
declare
  ergebnis jsonb;
  v_freigabe jsonb;
begin
  if not public.auth_has_permission('finance.view') then
    raise exception 'Keine Berechtigung für Finanzdaten' using errcode = '42501';
  end if;
  if p_jahr < 2000 or p_jahr > 2100 then
    raise exception 'Ungültiges Jahr';
  end if;

  select jsonb_build_object(
           'freigegeben_am', a.finalized_at,
           'titel', a.title,
           'unterzeichner', coalesce((
             select jsonb_agg(jsonb_build_object(
               'name', pr.full_name,
               'entschieden_am', d.decided_at,
               'unterschrift', d.signature_url
             ) order by d.decided_at)
             from public.document_approval_decisions d
             left join public.profiles pr on pr.id = d.approver_id
             where d.approval_id = a.id and d.decision = 'approved'
           ), '[]'::jsonb)
         )
    into v_freigabe
  from public.document_approvals a
  where a.document_kind = 'anlage_pkw'
    and a.status = 'approved'
    and a.cancelled_at is null
    and extract(year from a.period_from)::int <= p_jahr
    and extract(year from a.period_to)::int   >= p_jahr
  order by a.finalized_at desc
  limit 1;

  with fahrzeug as (
    select p.id, p.kennzeichen, p.bezeichnung, p.sort_order,
           j.km_stand_anfang, j.km_stand_ende,
           case
             when j.km_stand_anfang is null or j.km_stand_ende is null then null
             else j.km_stand_ende - j.km_stand_anfang
           end as km_gefahren
    from public.pkw p
    left join public.pkw_jahr j on j.pkw_id = p.id and j.jahr = p_jahr
    where p.deleted_at is null and p.aktiv
  ),
  kosten as (
    select pkw_id, sum(betrag_brutto) as summe
    from public.pkw_kosten
    where jahr = p_jahr and deleted_at is null
    group by pkw_id
  ),
  satz as (
    select f.*,
           coalesce(k.summe, 0) as gesamtkosten,
           case
             when f.km_gefahren is null or f.km_gefahren = 0 then null
             else round(coalesce(k.summe, 0) / f.km_gefahren, 4)
           end as satz_je_km
    from fahrzeug f
    left join kosten k on k.pkw_id = f.id
  ),
  fahrten as (
    select t.id, t.fahrt_datum, t.anlass, t.kilometer, t.pkw_id,
           s.kennzeichen, s.satz_je_km,
           case when s.satz_je_km is null then null
                else round(t.kilometer * s.satz_je_km, 2) end as betrag
    from public.pkw_fahrten t
    join satz s on s.id = t.pkw_id
    where t.deleted_at is null
      and extract(year from t.fahrt_datum)::int = p_jahr
  )
  select jsonb_build_object(
    'jahr', p_jahr,
    'gesperrt', v_freigabe is not null,
    'freigabe', v_freigabe,
    'fahrzeuge', coalesce((
      select jsonb_agg(jsonb_build_object(
        'id', id, 'kennzeichen', kennzeichen, 'bezeichnung', bezeichnung,
        'km_stand_anfang', km_stand_anfang, 'km_stand_ende', km_stand_ende,
        'km_gefahren', km_gefahren, 'gesamtkosten', gesamtkosten,
        'satz_je_km', satz_je_km,
        'kosten', coalesce((
          select jsonb_agg(jsonb_build_object(
            'id', k.id, 'kostenart', k.kostenart, 'beleg_datum', k.beleg_datum,
            'bezeichnung', k.bezeichnung, 'betrag_brutto', k.betrag_brutto
          ) order by k.kostenart, k.beleg_datum, k.id)
          from public.pkw_kosten k
          where k.pkw_id = satz.id and k.jahr = p_jahr and k.deleted_at is null
        ), '[]'::jsonb)
      ) order by sort_order)
      from satz
    ), '[]'::jsonb),
    'fahrten', coalesce((
      select jsonb_agg(jsonb_build_object(
        'id', id, 'fahrt_datum', fahrt_datum, 'anlass', anlass,
        'kilometer', kilometer, 'pkw_id', pkw_id, 'kennzeichen', kennzeichen,
        'satz_je_km', satz_je_km, 'betrag', betrag
      ) order by fahrt_datum, id)
      from fahrten
    ), '[]'::jsonb),
    'nutzungseinlage', coalesce((select sum(betrag) from fahrten), 0),
    'fahrten_ohne_satz', coalesce(
      (select count(*) from fahrten where betrag is null), 0)
  ) into ergebnis;

  return ergebnis;
end;
$function$;

revoke all on function public.anlage_pkw(int) from public;
grant execute on function public.anlage_pkw(int) to authenticated;
revoke all on function app.anlage_pkw_freigegeben(int) from public, anon;
