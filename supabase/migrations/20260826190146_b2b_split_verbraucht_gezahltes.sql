-- Korrektur zu 0142: Der laufende Verbrauch zaehlt, was der Arbeitgeber
-- TATSAECHLICH getragen hat — nicht den ungedeckelten Anspruch.
--
-- Der erste Entwurf summierte den Anspruch (Brutto x Zuschussanteil) mit einer
-- Fensterfunktion auf. Am Beispiel nachgerechnet faellt der Fehler auf:
--
--   Monatslimit 30 EUR, Tageslimit 10 EUR, Zuschuss 100 %
--   Tag 2, ein Kauf ueber 12 EUR -> das Tageslimit deckelt auf 10 EUR.
--
-- Der Arbeitgeber hat 10 EUR getragen. Der erste Entwurf zog dem Monatstopf
-- trotzdem 12 EUR ab: Der Mitarbeiter wurde zweimal bestraft — einmal durch
-- das Tageslimit, ein zweites Mal durch den zu schnell leeren Monatstopf.
--
-- Richtig ist die Fortschreibung des GEZAHLTEN. Sie ist rekursiv (der Anteil
-- von Kauf N haengt an den Anteilen 1..N-1) und laesst sich mit einer
-- Fensterfunktion nicht ausdruecken. Deshalb eine Schleife.
--
-- Sie ist billig: Sortiert nach Person und Kaufzeitpunkt sind Monat und Tag
-- monoton steigend, die Zaehler brauchen also nur beim Wechsel zurueckgesetzt
-- zu werden — kein Nachschlagen, ein Durchgang.

create or replace function app.business_split(
  p_business uuid,
  p_von      date,
  p_bis      date
)
returns table (
  purchase_id   uuid,
  profile_id    uuid,
  gekauft_am    timestamptz,
  machine_id    uuid,
  brutto        numeric,
  arbeitgeber   numeric,
  mitarbeiter   numeric
)
language plpgsql
stable
set search_path to 'public', 'app'
as $function$
declare
  r record;
  letzte_person uuid;
  letzter_monat date;
  letzter_tag   date;
  verbraucht_monat numeric := 0;
  verbraucht_tag   numeric := 0;
  satz  numeric;
  rest_monat numeric;
  rest_tag   numeric;
  ag numeric;
begin
  for r in
    select p.id, p.customer_id, p.purchased_at, p.machine_id, p.total_gross,
           (p.purchased_at at time zone 'Europe/Berlin')::date as tag,
           date_trunc('month', p.purchased_at at time zone 'Europe/Berlin')::date as monat,
           coalesce(b.zuschuss_prozent, 100) as zuschuss,
           b.monatslimit_brutto,
           b.tageslimit_brutto
    from public.purchases p
    left join lateral (
      select bb.*
      from public.business_budgets bb
      where bb.business_id = p_business
        and bb.deleted_at is null
        and (bb.profile_id = p.customer_id or bb.profile_id is null)
        and bb.gueltig_von <= (p.purchased_at at time zone 'Europe/Berlin')::date
        and (bb.gueltig_bis is null
             or bb.gueltig_bis >= (p.purchased_at at time zone 'Europe/Berlin')::date)
      order by (bb.profile_id is null), bb.gueltig_von desc
      limit 1
    ) b on true
    where p.business_id = p_business
      and (p.purchased_at at time zone 'Europe/Berlin')::date between p_von and p_bis
    order by p.customer_id, p.purchased_at, p.id
  loop
    -- Zaehler zuruecksetzen, wenn Person, Monat oder Tag wechseln.
    if letzte_person is distinct from r.customer_id
       or letzter_monat is distinct from r.monat then
      verbraucht_monat := 0;
    end if;
    if letzte_person is distinct from r.customer_id
       or letzter_tag is distinct from r.tag then
      verbraucht_tag := 0;
    end if;
    letzte_person := r.customer_id;
    letzter_monat := r.monat;
    letzter_tag   := r.tag;

    satz := round(r.total_gross * r.zuschuss / 100.0, 2);

    rest_monat := case when r.monatslimit_brutto is null then null
                       else greatest(r.monatslimit_brutto - verbraucht_monat, 0) end;
    rest_tag   := case when r.tageslimit_brutto is null then null
                       else greatest(r.tageslimit_brutto - verbraucht_tag, 0) end;

    -- least() uebergeht NULL — ein fehlendes Limit ist damit „unbegrenzt",
    -- ohne Sonderfall. Am laufenden System nachgestellt: least(5, null, 3) = 3.
    ag := greatest(least(satz, rest_monat, rest_tag), 0);

    verbraucht_monat := verbraucht_monat + ag;
    verbraucht_tag   := verbraucht_tag   + ag;

    purchase_id := r.id;
    profile_id  := r.customer_id;
    gekauft_am  := r.purchased_at;
    machine_id  := r.machine_id;
    brutto      := r.total_gross;
    arbeitgeber := ag;
    mitarbeiter := r.total_gross - ag;
    return next;
  end loop;
end;
$function$;

comment on function app.business_split(uuid, date, date) is
  'Aufteilung jedes Firmenkaufs in Arbeitgeber- und Mitarbeiteranteil. Gerechnet, nicht gespeichert. Die Limits verbrauchen das tatsaechlich Getragene, nicht den ungedeckelten Anspruch.';

revoke all on function app.business_split(uuid, date, date) from public;
