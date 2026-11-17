-- ============================================================================
-- Zwei-Faktor-Pflicht für interne Konten EINSCHALTEN (Runbook O, Teil 3)
--
-- Entscheidung Philipp 17.11.2026: ohne Pia einschalten. Stand vor dem
-- Einschalten (gemessen): Administrator-Konto mit bestätigtem Faktor und
-- Anmeldung auf Stufe aal2; Gesellschafterin ohne Faktor (sieht bis zu ihrer
-- Einrichtung keine Daten, kann den Faktor aber über die Anmeldung
-- einrichten); Demo-Konten gesperrt.
--
-- Wirkung: public.pruefe_anfrage() weist interne Konten ohne zweiten Faktor
-- ab (403, BS24_MFA); einschränkende Regeln auf Dateien und Echtzeit-Tabellen
-- greifen. Kunden, nicht angemeldete Aufrufe und Server-Aufrufe sind nicht
-- betroffen (Probe 113).
--
-- Ein Datenwert, kein Schema: Der Fingerabdruck bleibt unverändert.
-- Rückweg (sofort wirksam):
--   update app.security_settings set enabled = false, updated_at = now()
--    where key = 'require_mfa_internal';
-- ============================================================================

update app.security_settings
   set enabled = true, updated_at = now()
 where key = 'require_mfa_internal';
