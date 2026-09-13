-- 0146, Fortsetzung: Uebersicht, Auslastung, Werbeumsatz je Automat.
--
-- „Frei" wird gerechnet, nicht gespeichert: nutzbar UND kein Vertrag mit
-- Status zur_unterschrift/aktiv, dessen Laufzeit den Stichtag enthaelt. Eine
-- zweite Statusspalte auf der Flaeche waere die zweite Wahrheit.

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
    raise exception 'Keine Berechtigung fuer Werbeflaechen' using errcode = '42501';
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
      -- Auslastung im Sinne des Auftrags: vermietet je nutzbarer Flaeche.
      -- Gesperrte Flaechen zaehlen nicht mit, weil sie nicht vermietbar sind
      -- und die Quote sonst dauerhaft schlechter aussaehe, als sie ist.
      'auslastung_prozent', (
        select case when count(*) filter (where betriebszustand = 'nutzbar') = 0
                    then null
                    else round(100.0 * count(*) filter (where vertrag_id is not null)
                               / count(*) filter (where betriebszustand = 'nutzbar'), 1)
               end
        from flaeche),
      'werbeumsatz_monat', coalesce((
        select sum(preis_monat) from flaeche where vertrag_id is not null), 0),
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
  'Werbeflaechen-Inventar zum Stichtag samt Auslastung und Werbeumsatz je Automat. Belegung wird gerechnet, nicht gespeichert.';

-- Die Sicht des Werbekunden auf seine eigenen Vertraege.
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
