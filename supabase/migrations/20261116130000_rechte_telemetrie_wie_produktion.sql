-- ============================================================================
-- Rechte an telemetry_providers wie in der Produktion (Abweichung 16.11.2026)
--
-- Befund: Beim Vergleich aller Tabellen- und Spaltenrechte von anon und
-- authenticated (276 Zeilen) war telemetry_providers die einzige Abweichung.
-- Produktion: kein Tabellenrecht für anon und authenticated; authenticated
-- liest acht Spalten, NICHT hmac_secret. Nachbau aus dem Repository: volle
-- Tabellenrechte für beide, also auch hmac_secret für interne Konten mit
-- inventory.view (Zeilenschutz lässt sie durch). Die Produktion ist richtig,
-- das Repository wird angeglichen. Gefunden mit dem alten pgTAP-Test
-- iot_telemetry_rls_test.sql (Zusicherung 6), beim Stilllegen der main-Linie.
--
-- In der Produktion ändert diese Migration nichts (gleicher Stand).
-- Rückweg: grant select, insert, update, delete on public.telemetry_providers
--          to authenticated;  (nicht empfohlen)
-- ============================================================================

revoke all on public.telemetry_providers from anon, authenticated;
grant select (id, name, adapter, is_active, notes, time_skew_max_s, created_at, updated_at)
  on public.telemetry_providers to authenticated;
