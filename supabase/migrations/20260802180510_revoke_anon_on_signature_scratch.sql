-- NACHTRAG 02.09.2026 (Befund S-14, Wiederholbarkeit):
-- Dieselben Arbeitstabellen wie in 0045: von Hand auf dem Server angelegt,
-- nie über eine Migration. Auf einer leeren Datenbank existieren sie nicht,
-- und ein `revoke` auf eine fehlende Tabelle bricht ab. Die Wirkung auf die
-- Produktion bleibt unverändert.
do $$
begin
  if to_regclass('app._pia_sig') is not null then
    execute 'revoke all on app._pia_sig from anon, authenticated, public';
  end if;
  if to_regclass('app._sig_upload') is not null then
    execute 'revoke all on app._sig_upload from anon, authenticated, public';
  end if;
end $$;
