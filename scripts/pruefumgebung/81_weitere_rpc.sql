-- Nachtrag zu 80: die Verwaltungsfunktionen, die dort fehlten.
--
-- Die Liste in 80 stammte aus einer Aufzählung von Hand und deckte 48 von
-- ihnen ab. Beim Abgleich fuer den Lovable-Auftrag stellte sich heraus, dass
-- `authenticated` deutlich mehr aufrufen darf — darunter DATEV-Export,
-- Finanzbilanz, Dokumentenfreigaben, Mailprotokoll und Telemetrie-Schluessel.
-- Keine davon war je gegen ein Kundenkonto geprueft worden.
--
-- Ergebnis der ersten Ausfuehrung am 02.09.2026: alle weisen ab oder liefern
-- nachweislich nichts. Kein Befund. Dieses Skript haelt den Stand fest.
delete from pruef.ergebnis where gruppe = 'Vertikal-RPC-Nachtrag';
do $$
declare
  A uuid := '11111111-1111-1111-1111-111111111111';   -- normaler Kunde
  f record; call text; w text; inhalt text; leer boolean;
  liste text[] := array[
    'approve_shareholder','business_customers_csv','datev_export_rows',
    'decide_document_approval','dev_add_demo_purchase','email_log_detail',
    'email_log_list','email_log_stats','email_outbox_stats','email_template_save',
    'finance_balance_kpis','generate_personal_offer','inventory_fifo_lots',
    'inventory_fifo_movements','inventory_report','inventory_summary_by_product',
    'invite_employee_signature','link_partner_signature_profile',
    'list_document_approvals','list_document_folders','list_document_signature_tasks',
    'list_documents','list_employees_for_signature','list_partner_signatures',
    'register_telemetry_provider','request_document_approval','request_document_review',
    'rotate_provider_secret','set_document_valid_until','set_machine_slot',
    'set_partner_signature_image','upsert_finance_balance'];
begin
  for f in
    select p.proname,
           coalesce(string_agg('null::'||format_type(t.oid,null), ',' order by o.ord),'') as args
    from pg_proc p join pg_namespace n on n.oid=p.pronamespace
    left join lateral unnest(p.proargtypes) with ordinality as o(typ,ord) on true
    left join pg_type t on t.oid=o.typ
    where n.nspname='public' and p.proname = any(liste)
    group by p.oid, p.proname order by p.proname
  loop
    call := format('select public.%I(%s)', f.proname, f.args);
    w := pruef.schreibe(call, A);
    inhalt := case when w = 'ROWS:1' then pruef.lies(call, A) else null end;

    -- Eine Kennzahlfunktion liefert auch bei leerem Ergebnis eine Zeile —
    -- naemlich lauter Nullen. Die Zeilenzahl allein wuerde das als Treffer
    -- lesen, deshalb wird der Inhalt geprueft: enthaelt er ausser 0, null,
    -- Klammern und Kommas nichts, ist nichts drin.
    leer := inhalt is null
            or inhalt in ('[]','{}','[null]','[{}]')
            or regexp_replace(inhalt, '[\[\]\(\)\{\},"0 :nul]', '', 'g') = '';

    insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok,notiz)
    values ('Vertikal-RPC-Nachtrag', f.proname, 'Kunde A', 'Verwaltungsfunktion',
            'Abweisung (42501/P0001/P0002) oder nachweislich leeres Ergebnis',
            w || coalesce(' -> '||left(inhalt,60), ''),
            (w like 'ERR:42501%' or w like 'ERR:P0001%' or w like 'ERR:P0002%'
             or w = 'ROWS:0' or leer),
            call);
  end loop;
end $$;

-- GEGENPROBE zum Maillog: "0" ist nur dann ein Nachweis, wenn es etwas zu
-- sehen gaebe. Also erst eine Zeile anlegen, dann messen.
do $$
declare
  A uuid := '11111111-1111-1111-1111-111111111111';
  n_wahr int; n_kunde int; r text;
begin
  delete from public.email_log where subject = 'Gegenprobe Maillog';
  insert into public.email_log(direction, status, to_addresses, subject, occurred_at)
  values ('out','sent', array['gegenprobe@test.invalid'], 'Gegenprobe Maillog', now());

  select count(*) into n_wahr from public.email_log;
  n_kunde := pruef.zaehle('select 1 from public.email_log_list()', A);
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok,notiz)
   values ('Gegenprobe','Maillog trotz vorhandener Zeile unsichtbar','Kunde A','email_log_list',
           '0 Zeilen bei '||n_wahr||' vorhandenen', n_kunde::text, n_kunde = 0,
           'Policy email_log_read_leitung: nur is_admin oder is_shareholder');

  r := pruef.lies('select public.email_log_stats() as x', A);
  insert into pruef.ergebnis(gruppe,test,akteur,ziel,erwartet,gemessen,ok,notiz)
   values ('Gegenprobe','Maillog-Kennzahlen bleiben auf null','Kunde A','email_log_stats',
           'lauter Nullen bei '||n_wahr||' vorhandenen Zeilen', left(r,40),
           regexp_replace(r, '[\[\]\(\)\{\},"0 :nul]', '', 'g') = '',
           'SECURITY INVOKER — die Policy auf email_log traegt die Absicherung');

  delete from public.email_log where subject = 'Gegenprobe Maillog';
end $$;

select gruppe, test, erwartet, gemessen, case when ok then 'GRUEN' else 'ROT' end
from pruef.ergebnis where gruppe like '%Nachtrag%' or gruppe='Gegenprobe' order by id;
select count(*) filter (where ok) as gruen, count(*) filter (where not ok) as rot
from pruef.ergebnis;
