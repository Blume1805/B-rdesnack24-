alter table public.machines
  add column if not exists access_hours text;

comment on column public.machines.access_hours is
  'Zugangszeiten am Standort als Freitext, z. B. "Rund um die Uhr zugänglich" oder "Mo–Sa 7–20 Uhr (Zugang über den Markt)". NULL = nicht gepflegt; die App zeigt dann nichts an und nimmt insbesondere KEINE durchgehende Zugänglichkeit an.';
