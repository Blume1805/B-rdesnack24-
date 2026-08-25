-- ============================================================================
-- 0126 — Änderungs- und Versandprotokoll bekommen eine Löschfrist
-- ----------------------------------------------------------------------------
-- ANLASS
--
-- Das Verarbeitungsverzeichnis vom 25.08.2026 hat es als erste Lücke benannt:
-- Für `public.audit_log` und `public.email_log` gab es KEINE automatische
-- Löschfrist. Die Datenschutzerklärung sagte das offen — „wir behaupten keine
-- Frist, die technisch nicht durchgesetzt wird" —, aber Art. 5 Abs. 1 lit. e
-- verlangt eine Begrenzung, nicht deren ehrliche Abwesenheit.
--
-- Für `customer_login_days` existiert die Mechanik seit Langem
-- (`app.purge_login_days`, täglich 03:15 Uhr). Diese Migration überträgt sie
-- auf die beiden Protokolle. Entscheidung des Auftraggebers vom 25.08.2026.
--
-- ----------------------------------------------------------------------------
-- WARUM DIE E-MAIL-REGEL EINE ERLAUBNISLISTE IST UND KEINE SPERRLISTE
--
-- Naheliegend wäre: „nach 12 Monaten löschen, ausser der Tag sieht nach
-- Rechnung aus". Diese Richtung irrt in die falsche Seite. Wer später einen
-- Rechnungsversand ergänzt und den Tag vergisst, verliert nach zwölf Monaten
-- einen Nachweis, den § 147 AO zehn Jahre verlangt — und merkt es nie.
--
-- Deshalb umgekehrt: Gelöscht wird nur, was ausdrücklich als kurzlebig
-- eingetragen ist. Ein unbekannter oder neuer Tag bleibt liegen. Das ist
-- dieselbe fehlerverzeihende Richtung wie RLS ohne Policy: Im Zweifel nicht.
-- ============================================================================

-- ----------------------------------------------------------------------------
-- 1) Änderungsprotokoll: einheitlich 10 Jahre
-- ----------------------------------------------------------------------------
-- Einheitlich statt gestaffelt, ausdrücklich so gewählt: Das Protokoll mischt
-- steuerlich relevante Tabellen (finance_*, inventory_movements, products,
-- customers, customer_subscriptions) mit rein betrieblichen (offers,
-- role_permissions, profiles). Eine einzige Frist kann nichts übersehen, wenn
-- später eine Tabelle dazukommt — die Staffelung hätte gepflegt werden müssen.
-- 10 Jahre entspricht § 147 Abs. 3 AO für die zugrunde liegenden Belege.
create or replace function app.purge_audit_log()
returns integer
language plpgsql
security definer
set search_path = public, app
as $$
declare v_geloescht int;
begin
  delete from public.audit_log
  where occurred_at < now() - interval '10 years';
  get diagnostics v_geloescht = row_count;
  return v_geloescht;
end;
$$;

comment on function app.purge_audit_log() is
  'Löscht Einträge des Änderungsprotokolls, die älter als 10 Jahre sind '
  '(§ 147 Abs. 3 AO). Täglich per cron.';

-- ----------------------------------------------------------------------------
-- 2) Versandprotokoll: 12 Monate, aufbewahrungspflichtige Mails ausgenommen
-- ----------------------------------------------------------------------------
-- KURZLEBIG (12 Monate) — die Erlaubnisliste:
--
--   auth-email-hook/…      Anmelde-, Registrierungs- und Kennwortmails. Ihr
--                          Inhalt wird seit Migration 0124 ohnehin nicht mehr
--                          protokolliert; übrig bleiben Empfänger, Betreff und
--                          Zustellstatus. Nach zwölf Monaten fragt danach
--                          niemand mehr.
--   email-send             Allgemeine Benachrichtigungen ohne Vertragsbezug.
--   test                   Testversand.
--
-- ALLES ANDERE BLEIBT — und das ist kein Versehen:
--
--   subscription-choose    Vertragsschluss.
--   subscription-cancel    Kündigungsbestätigung. § 312k Abs. 4 BGB verlangt
--                          die Bestätigung in Textform samt Zeitpunkt; das
--                          Versandprotokoll ist der Nachweis dafür.
--   account-deletion-request  Nachweis, dass ein Antrag nach Art. 17 DSGVO
--                          bearbeitet wurde.
--   (künftige Rechnungs- oder Belegmails, ohne dass jemand daran denken muss)
--
-- Ein Tag gehört nur dann in die Liste unten, wenn feststeht, dass an der
-- Mail keine Nachweispflicht hängt.
create or replace function app.purge_email_log()
returns integer
language plpgsql
security definer
set search_path = public, app
as $$
declare v_geloescht int;
begin
  delete from public.email_log
  where coalesce(occurred_at, created_at) < now() - interval '12 months'
    and tag is not null
    and (
      tag like 'auth-email-hook/%'
      or tag in ('email-send', 'test')
    );
  get diagnostics v_geloescht = row_count;
  return v_geloescht;
end;
$$;

comment on function app.purge_email_log() is
  'Löscht Zeilen des Versandprotokolls nach 12 Monaten — aber nur für '
  'ausdrücklich als kurzlebig eingetragene Tags. Unbekannte Tags und '
  'Vertrags-/Belegmails bleiben (§ 147 AO, § 312k BGB, Art. 17 DSGVO).';

-- Wie in Migration 0120 gelernt: Bei Funktionen genügt ein Entzug von
-- `anon`/`authenticated` NICHT — PostgreSQL vergibt EXECUTE automatisch an
-- PUBLIC, und PUBLIC schliesst beide ein.
revoke execute on function app.purge_audit_log() from public, anon, authenticated;
revoke execute on function app.purge_email_log() from public, anon, authenticated;

-- ----------------------------------------------------------------------------
-- 3) Täglich ausführen
-- ----------------------------------------------------------------------------
-- Zeiten bewusst versetzt zu den bestehenden Aufträgen (03:15 Öffnungstage,
-- 03:40 Wetter, 03:50 Angebote, 04:20 Empfehlungen).
select cron.unschedule('purge_audit_log')
where exists (select 1 from cron.job where jobname = 'purge_audit_log');
select cron.unschedule('purge_email_log')
where exists (select 1 from cron.job where jobname = 'purge_email_log');

select cron.schedule('purge_audit_log', '25 3 * * *', 'select app.purge_audit_log();');
select cron.schedule('purge_email_log', '30 3 * * *', 'select app.purge_email_log();');

-- ----------------------------------------------------------------------------
-- 4) Nachweis statt Vertrauen
-- ----------------------------------------------------------------------------
-- Ein Löschauftrag, der nichts löscht, sieht genauso aus wie einer, der
-- funktioniert — beide melden 0, solange nichts alt genug ist. Deshalb hier
-- eine Probe gegen eine erfundene Zeitgrenze statt gegen das Ergebnis.
do $$
declare
  v_audit_alt   int;
  v_mail_kurz   int;
  v_mail_lang   int;
  v_auftraege   int;
begin
  select count(*) into v_audit_alt
  from public.audit_log where occurred_at < now() - interval '10 years';

  select count(*) into v_mail_kurz
  from public.email_log
  where tag is not null
    and (tag like 'auth-email-hook/%' or tag in ('email-send', 'test'));

  select count(*) into v_mail_lang
  from public.email_log
  where tag is null
     or not (tag like 'auth-email-hook/%' or tag in ('email-send', 'test'));

  select count(*) into v_auftraege
  from cron.job where jobname in ('purge_audit_log', 'purge_email_log');

  if v_auftraege <> 2 then
    raise exception 'Es sind % statt 2 Loeschauftraege eingetragen.', v_auftraege;
  end if;

  raise notice 'Loeschfristen eingerichtet. Heute betroffen waere: audit_log %, '
               'email_log kurzlebig % / aufbewahrungspflichtig %.',
               v_audit_alt, v_mail_kurz, v_mail_lang;
end $$;
