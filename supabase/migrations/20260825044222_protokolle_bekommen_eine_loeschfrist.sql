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
  'Löscht Einträge des Änderungsprotokolls, die älter als 10 Jahre sind (§ 147 Abs. 3 AO). Täglich per cron.';

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
  'Löscht Zeilen des Versandprotokolls nach 12 Monaten — aber nur für ausdrücklich als kurzlebig eingetragene Tags. Unbekannte Tags und Vertrags-/Belegmails bleiben (§ 147 AO, § 312k BGB, Art. 17 DSGVO).';

revoke execute on function app.purge_audit_log() from public, anon, authenticated;
revoke execute on function app.purge_email_log() from public, anon, authenticated;

select cron.unschedule('purge_audit_log')
where exists (select 1 from cron.job where jobname = 'purge_audit_log');
select cron.unschedule('purge_email_log')
where exists (select 1 from cron.job where jobname = 'purge_email_log');

select cron.schedule('purge_audit_log', '25 3 * * *', 'select app.purge_audit_log();');
select cron.schedule('purge_email_log', '30 3 * * *', 'select app.purge_email_log();');

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

  raise notice 'Loeschfristen eingerichtet. Heute betroffen waere: audit_log %, email_log kurzlebig % / aufbewahrungspflichtig %.',
               v_audit_alt, v_mail_kurz, v_mail_lang;
end $$;
