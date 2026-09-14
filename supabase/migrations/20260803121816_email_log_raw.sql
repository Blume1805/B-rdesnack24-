alter table public.email_log
  add column if not exists raw jsonb;

comment on column public.email_log.raw is
  'Unveränderte Nutzlast des Anbieters bei eingehender Post. Für ausgehende Mails leer. Dient als Rückfallebene, falls die Zuordnung einzelner Felder nicht stimmt — siehe Migration 0091.';

create unique index if not exists email_log_provider_eingang_uidx
  on public.email_log (provider_id)
  where direction = 'in' and provider_id is not null;
