-- ============================================================================
-- 0064 · RLS für den IoT-/Telemetrie-Layer aus 0031
-- ----------------------------------------------------------------------------
-- Befund vom 2026-09-16: Die sechs Tabellen aus 0031_iot_telemetry.sql wurden
-- ohne `enable row level security` und ohne Policy angelegt; keine spätere
-- Migration holte das nach. Jedes authentifizierte Konto — auch ein
-- Kundenkonto — konnte sämtliche Betriebsdaten lesen.
--
-- Besonders kritisch: public.telemetry_providers.hmac_secret ist das Geheimnis,
-- mit dem eingehende Webhooks signiert werden. Wer es liest, kann Verkaufs- und
-- Bestandsereignisse fälschen. Die Secrets sind nach dem Einspielen dieser
-- Migration zu rotieren (siehe docs/ARCHITECTURE.md, Abweichung A-1).
--
-- Rechtemodell (analog 0006/0007), nach dem Prinzip der geringsten Rechte und
-- abgeglichen mit den tatsächlichen Zugriffen des Telemetrie-Hubs:
--   lesen            → is_admin() oder inventory.view   (alle sechs Tabellen)
--   machine_devices  → zusätzlich insert/update mit inventory.edit
--                      (einziger Schreibzugriff des Clients, Zeile 623 in
--                      telemetry_hub_screen.dart)
--   alle übrigen Schreibvorgänge laufen über den Ingest-Pfad mit service_role,
--   der RLS umgeht; dafür ist keine Policy nötig und es wird keine erteilt.
--
-- Schutz des Webhook-Geheimnisses: Ein spaltenweiser `revoke` bleibt wirkungslos,
-- solange das SELECT-Recht auf Tabellenebene besteht. Deshalb wird das
-- Tabellenrecht entzogen und stattdessen spaltenweise erteilt — ohne
-- hmac_secret. Anlage und Pflege von Providern erfolgen serverseitig.
-- ============================================================================

-- ── RLS aktivieren ──────────────────────────────────────────────────────────
alter table public.telemetry_providers      enable row level security;
alter table public.machine_devices          enable row level security;
alter table public.machine_slots            enable row level security;
alter table public.machine_slots_history    enable row level security;
alter table public.machine_telemetry_events enable row level security;
alter table public.machine_health           enable row level security;

-- ── Lesepolicies ────────────────────────────────────────────────────────────
do $$
declare t text;
begin
  foreach t in array array[
    'telemetry_providers','machine_devices','machine_slots',
    'machine_slots_history','machine_telemetry_events','machine_health'
  ] loop
    execute format('drop policy if exists %I_read on public.%I', t, t);
    execute format(
      'create policy %I_read on public.%I for select to authenticated
         using (public.is_admin() or public.auth_has_permission(%L))',
      t, t, 'inventory.view');
  end loop;
end $$;

-- ── Schreibpolicy ausschließlich für machine_devices ────────────────────────
drop policy if exists machine_devices_insert on public.machine_devices;
create policy machine_devices_insert on public.machine_devices
  for insert to authenticated
  with check (public.is_admin() or public.auth_has_permission('inventory.edit'));

drop policy if exists machine_devices_update on public.machine_devices;
create policy machine_devices_update on public.machine_devices
  for update to authenticated
  using      (public.is_admin() or public.auth_has_permission('inventory.edit'))
  with check (public.is_admin() or public.auth_has_permission('inventory.edit'));

-- ── Spaltengenauer Schutz des Webhook-Geheimnisses ──────────────────────────
revoke select, insert, update, delete
  on public.telemetry_providers from authenticated;
revoke select, insert, update, delete
  on public.telemetry_providers from anon;

grant select
  (id, name, adapter, time_skew_max_s, is_active, notes, created_at, updated_at)
  on public.telemetry_providers to authenticated;
