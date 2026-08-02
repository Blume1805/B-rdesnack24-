-- ============================================================================
-- 0077 · Neue Herkunft 'demo' für Käufe
-- ----------------------------------------------------------------------------
-- Eigene Migration, weil ein neuer Enum-Wert in derselben Transaktion, in der
-- er angelegt wird, noch nicht verwendet werden darf. 0078 baut darauf auf.
--
-- Hintergrund in 0078.
-- ============================================================================
alter type app.purchase_source add value if not exists 'demo';
