insert into public.finance_accounts(code, name, direction, default_tax, sort_order) values
  ('1000', 'Kasse',                        'asset',     null, 10),
  ('1200', 'Bank (Geschäftskonto)',        'asset',     null, 20),
  ('3300', 'Wareneinkauf 7 %',             'expense',   7.0,  30),
  ('3400', 'Wareneinkauf 19 %',            'expense',   19.0, 40),
  ('4805', 'Reparatur/Instandhaltung BGA', 'expense',   19.0, 50),
  ('4980', 'Sonstige betr. Aufwendungen',  'expense',   19.0, 60),
  ('8300', 'Erlöse 7 %',                   'revenue',   7.0,  70),
  ('8400', 'Erlöse 19 %',                  'revenue',   19.0, 80)
on conflict (code) do update
  set name = excluded.name, direction = excluded.direction,
      default_tax = excluded.default_tax, sort_order = excluded.sort_order;

insert into public.machines(code, name, type, is_cooled, location_name, city, status) values
  ('A1', 'Automat 1', 'snack', false, 'Standort 1 (ANPASSEN)', 'Sülzetal OT Osterweddingen', 'active'),
  ('A2', 'Automat 2', 'combi', true,  'Standort 2 (ANPASSEN)', 'Sülzetal OT Osterweddingen', 'active'),
  ('A3', 'Automat 3', 'drink', true,  'Standort 3 (ANPASSEN)', 'Sülzetal OT Osterweddingen', 'active')
on conflict (code) do nothing;
