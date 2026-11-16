-- 0144 — Die Abrechnung nennt Datum und Uhrzeit in Europe/Berlin.
--
-- Der Ausdruck formatierte den Zeitstempel bisher mit `toLocal()`, also in
-- der Zeitzone dessen, der das PDF oeffnet. Am gerenderten PDF aufgefallen:
-- Ein Kauf um 08:00 Uhr MESZ stand als „06:00 Uhr" da, weil die Testumgebung
-- in UTC laeuft. Im Ausland geoeffnet waere es wieder etwas anderes.
--
-- Fuer ein Abrechnungsdokument ist das nicht hinnehmbar: Die Zuordnung zu Tag
-- und Monat rechnet die Datenbank in Europe/Berlin (app.business_split), und
-- der Ausdruck muss denselben Tag zeigen. Sonst steht auf dem Blatt ein
-- anderes Datum als in der Rechnung.
--
-- Deshalb kommt die Zeit jetzt fertig formatiert vom Server. Eine Quelle.

create or replace function public.business_statement(
  p_business uuid,
  p_jahr     int,
  p_monat    int
)
returns jsonb
language plpgsql
stable
security definer
set search_path to 'public', 'app'
as $function$
declare
  von date;
  bis date;
  ergebnis jsonb;
begin
  if not (app.is_business_member(p_business, 'admin') or public.is_admin()
          or public.auth_has_permission('businesses.manage')) then
    raise exception 'Keine Berechtigung fuer diesen Firmenkunden' using errcode = '42501';
  end if;
  if p_jahr < 2020 or p_jahr > 2100 or p_monat < 1 or p_monat > 12 then
    raise exception 'Ungueltiger Abrechnungsmonat' using errcode = '22023';
  end if;

  von := make_date(p_jahr, p_monat, 1);
  bis := (von + interval '1 month - 1 day')::date;

  with s as (select * from app.business_split(p_business, von, bis))
  select jsonb_build_object(
    'business', (
      select jsonb_build_object(
               'id', b.id, 'name', b.name,
               'anschrift', concat_ws(', ',
                 nullif(b.billing_street,''),
                 nullif(concat_ws(' ', b.billing_zip, b.billing_city), ' ')),
               'steuernummer', b.tax_number, 'ust_id', b.vat_id)
      from public.businesses b where b.id = p_business),
    'zeitraum', jsonb_build_object('von', von, 'bis', bis,
                                   'jahr', p_jahr, 'monat', p_monat),
    'summen', jsonb_build_object(
      'kaeufe',      (select count(*) from s),
      'brutto',      coalesce((select sum(brutto)      from s), 0),
      'arbeitgeber', coalesce((select sum(arbeitgeber) from s), 0),
      'mitarbeiter', coalesce((select sum(mitarbeiter) from s), 0)),
    'zeilen', coalesce((
      select jsonb_agg(jsonb_build_object(
               'gekauft_am',  s.gekauft_am,
               -- Fertig formatiert in Europe/Berlin: dieselbe Zeitzone, in
               -- der die Zuordnung zu Tag und Monat gerechnet wird.
               'datum',       to_char(s.gekauft_am at time zone 'Europe/Berlin', 'DD.MM.YYYY'),
               'uhrzeit',     to_char(s.gekauft_am at time zone 'Europe/Berlin', 'HH24:MI'),
               'wer',         coalesce(p.full_name, p.email),
               'automat',     coalesce(ma.code, ma.name),
               'standort',    lo.name,
               'artikel',     coalesce((
                                select jsonb_agg(jsonb_build_object(
                                         'bezeichnung', pi.product_label,
                                         'menge',       pi.quantity,
                                         'einzelpreis', pi.unit_price)
                                       order by pi.product_label)
                                from public.purchase_items pi
                                where pi.purchase_id = s.purchase_id),
                                '[]'::jsonb),
               'brutto',      s.brutto,
               'arbeitgeber', s.arbeitgeber,
               'mitarbeiter', s.mitarbeiter)
             order by s.gekauft_am)
      from s
      left join public.profiles p  on p.id  = s.profile_id
      left join public.machines ma on ma.id = s.machine_id
      left join public.locations lo on lo.id = ma.location_id
    ), '[]'::jsonb)
  )
  into ergebnis;

  return ergebnis;
end;
$function$;

revoke all on function public.business_statement(uuid, int, int) from public;
grant execute on function public.business_statement(uuid, int, int) to authenticated;
