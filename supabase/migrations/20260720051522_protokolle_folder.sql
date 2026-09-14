insert into public.document_folders(slug, label, sort_order, icon) values
  ('protokolle', 'Betriebsprotokolle (HACCP/GoBD)', 25, 'health_and_safety')
on conflict (slug) do update
  set label = excluded.label,
      sort_order = excluded.sort_order,
      icon = excluded.icon;
