insert into public.finance_accounts (code, name, direction, default_tax, sort_order) values
  ('1800', 'Privatentnahmen allgemein',                    'liability', null, 1800),
  ('1801', 'Privatentnahmen allgemein',                    'liability', null, 1801),
  ('1810', 'Privatsteuern',                                'liability', null, 1810),
  ('1820', 'Sonderausgaben beschränkt abzugsfähig',        'liability', null, 1820),
  ('1830', 'Sonderausgaben unbeschränkt abzugsfähig',      'liability', null, 1830),
  ('1840', 'Zuwendungen, Spenden',                         'liability', null, 1840),
  ('1850', 'Außergewöhnliche Belastungen',                 'liability', null, 1850),
  ('1860', 'Grundstücksaufwand',                           'liability', null, 1860),
  ('1870', 'Grundstücksertrag',                            'liability', null, 1870),
  ('1880', 'Unentgeltliche Wertabgaben',                   'liability', null, 1880),
  ('1890', 'Privateinlagen',                               'liability', null, 1890),
  ('1891', 'Privateinlagen (nur Einzelunternehmen)',       'liability', null, 1891)
on conflict (code) do update
  set name       = excluded.name,
      direction  = excluded.direction,
      sort_order = excluded.sort_order;

update public.finance_bookings b
   set direction = 'liability'
  from public.finance_accounts a
 where a.code = b.account_code
   and b.account_code ~ '^1[89][0-9]{2}$'
   and b.direction <> 'liability';

delete from public.finance_bookings where source = 'sevdesk';

do $$
declare v_privat int; v_falsch int;
begin
  select count(*) into v_privat from public.finance_accounts
   where code ~ '^1[89][0-9]{2}$';
  select count(*) into v_falsch from public.finance_accounts
   where code ~ '^1[89][0-9]{2}$' and direction <> 'liability';
  if v_falsch > 0 then
    raise exception '% Privatkonten tragen noch eine Ergebnis-Richtung.', v_falsch;
  end if;
  raise notice '% Privatkonten im Stamm, alle als Kapitalkonto gefuehrt.', v_privat;
end $$;
