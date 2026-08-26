-- ============================================================================
-- 0143 — Das Budget verbraucht, was gezahlt wurde, nicht den Anspruch
-- ----------------------------------------------------------------------------
-- Korrektur an `app.business_split` aus 0142, gefunden beim Nachrechnen des
-- eigenen Beispiels — nicht in einem Test, sondern mit Zettel und Stift.
--
-- DER FEHLER
--
-- Der erste Entwurf summierte den ANSPRUCH (Brutto × Zuschussanteil) mit
-- einer Fensterfunktion auf und zog ihn vom Monatstopf ab. Solange nur ein
-- Limit gesetzt ist, fällt das nicht auf. Mit beiden schon:
--
--   Monatslimit 30 €, Tageslimit 10 €, Zuschuss 100 %
--   03.08.  4,00 €  → Arbeitgeber 4,00
--   03.08.  8,00 €  → Tageslimit greift, Arbeitgeber 6,00
--   04.08. 12,00 €  → Tageslimit greift, Arbeitgeber 10,00
--   05.08. 20,00 €  → ?
--
-- Beim vierten Kauf hatte der Arbeitgeber tatsächlich 20,00 € getragen, der
-- Monatstopf also noch 10,00 € übrig. Der alte Rechenweg hatte ihm aber
-- 4 + 8 + 12 = 24,00 € abgezogen und liess nur noch 6,00 € zu.
--
-- Der Mitarbeiter wurde damit zweimal bestraft: einmal durch das Tageslimit,
-- das seinen Anteil bereits gedeckelt hatte, und ein zweites Mal durch den
-- Monatstopf, der sich um Geld leerte, das nie geflossen ist. Bei 44 € Umsatz
-- ging es um 4 € — auf einer Rechnung, die der Arbeitgeber unterschreibt.
--
-- DIE BEHEBUNG
--
-- Fortgeschrieben wird das GEZAHLTE. Das ist rekursiv: Der Anteil von Kauf N
-- hängt an den Anteilen 1 bis N−1. Eine Fensterfunktion kann das nicht
-- ausdrücken, weil ihr Rahmen auf den Rohwerten arbeitet und nicht auf dem,
-- was die Rechnung vorher ergeben hat. Also eine Schleife.
--
-- Sie ist billig: Nach Person und Kaufzeitpunkt sortiert sind Monat und Tag
-- monoton steigend. Die Zähler müssen nur beim Wechsel zurückgesetzt werden —
-- ein Durchgang, kein Nachschlagen.
--
-- NACHGERECHNET
--
-- Am 26.08.2026 mit vier echten Käufen an einem echten Firmenstandort
-- durchgespielt. Ergebnis: 4,00 / 6,00 / 10,00 / 10,00 — Arbeitgeber 30,00 €
-- (genau das Monatslimit), Mitarbeiter 14,00 € bei 44,00 € Umsatz. Von Hand
-- vorher ausgerechnet, dann verglichen. Testdaten anschliessend entfernt.
-- ============================================================================

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
      -- Persönliches Budget schlägt Standardbudget; bei mehreren gilt das
      -- zuletzt begonnene.
      order by (bb.profile_id is null), bb.gueltig_von desc
      limit 1
    ) b on true
    where p.business_id = p_business
      and (p.purchased_at at time zone 'Europe/Berlin')::date between p_von and p_bis
    order by p.customer_id, p.purchased_at, p.id
  loop
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

    -- `least()` übergeht NULL — ein fehlendes Limit ist damit „unbegrenzt",
    -- ohne Sonderfall im Code. Am laufenden System nachgestellt:
    -- `select least(5, null, 3)` ergibt 3.
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
  'Aufteilung jedes Firmenkaufs in Arbeitgeber- und Mitarbeiteranteil. '
  'Gerechnet, nicht gespeichert. Die Limits verbrauchen das tatsächlich '
  'Getragene, nicht den ungedeckelten Anspruch.';

revoke all on function app.business_split(uuid, date, date) from public;
