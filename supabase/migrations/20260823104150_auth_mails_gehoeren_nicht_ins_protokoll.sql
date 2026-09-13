do $$
declare
  v_betroffen integer;
begin
  update public.email_log
     set html = null,
         text_body = null
   where tag like 'auth-email-hook/%'
     and (html is not null or text_body is not null);
  get diagnostics v_betroffen = row_count;
  raise notice 'Auth-Mail-Körper entfernt: % Zeile(n)', v_betroffen;
end $$;

drop policy if exists email_log_read_internal on public.email_log;
drop policy if exists email_log_read_leitung on public.email_log;
create policy email_log_read_leitung
  on public.email_log for select
  to authenticated
  using (
    public.is_admin((select auth.uid()))
    or public.is_shareholder((select auth.uid()))
  );

comment on table public.email_log is
  'Vollständiges Protokoll aller ein- und ausgehenden E-Mails. Geschrieben '
  'ausschliesslich serverseitig (service_role) aus dem Sammelpunkt '
  '_shared/email/send.ts. Lesbar nur für system_admin und shareholder '
  '(0124 — vorher jede interne Rolle). Enthält Empfängeradressen und '
  'Mailinhalte — personenbezogene Daten, Aufbewahrungsdauer ist eine '
  'Entscheidung des Betriebs. Bei Auth-Mails wird der KÖRPER nicht '
  'protokolliert: er trägt token_hash und Einmalcode (0124).';

do $$
declare
  v_reste integer;
  v_regeln integer;
begin
  select count(*) into v_reste
    from public.email_log
   where tag like 'auth-email-hook/%'
     and (html is not null or text_body is not null);
  if v_reste > 0 then
    raise exception 'Es liegen noch % Auth-Mail-Zeile(n) mit Körper vor', v_reste;
  end if;

  select count(*) into v_regeln
    from pg_policies
   where schemaname = 'public'
     and tablename = 'email_log'
     and cmd = 'SELECT';
  if v_regeln <> 1 then
    raise exception 'email_log hat % SELECT-Regel(n), erwartet genau 1', v_regeln;
  end if;
end $$;
