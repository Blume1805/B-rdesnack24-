-- Hilfsschema für das Ausrollen am 15.11.2026: nicht über die API erreichbar,
-- keine Rechte für anon/authenticated. Enthält die geprüften Migrationstexte
-- und eine Sicherung der Preise vor dem Pfand-Schritt.
create schema if not exists ausrollen_20261115;
revoke all on schema ausrollen_20261115 from public, anon, authenticated;
create table if not exists ausrollen_20261115.migration (
  nr             integer primary key,
  name           text not null unique,
  sql            text not null,
  md5_soll       text not null,
  abgelegt_am    timestamptz not null default now(),
  eingespielt_am timestamptz
);
alter table ausrollen_20261115.migration enable row level security;
revoke all on ausrollen_20261115.migration from public, anon, authenticated;
