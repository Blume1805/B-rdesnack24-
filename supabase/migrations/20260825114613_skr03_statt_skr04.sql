delete from public.finance_bookings where source = 'sevdesk';

delete from public.finance_accounts
where code in ('0670','4839','6300','6805','6810','6815','6837','6845');

do $$
declare v_offen int;
begin
  select count(*) into v_offen
  from public.finance_accounts
  where code in ('0670','4839','6300','6805','6810','6815','6837','6845');
  if v_offen > 0 then
    raise exception 'Es stehen noch % SKR-04-Konten im Stamm.', v_offen;
  end if;
  raise notice 'SKR-04-Konten entfernt, Stamm bei % Konten.',
    (select count(*) from public.finance_accounts);
end $$;
