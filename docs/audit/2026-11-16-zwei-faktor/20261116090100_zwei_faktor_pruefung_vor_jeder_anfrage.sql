-- Hängt public.pruefe_anfrage() vor jede Anfrage an die API (PostgREST).
-- Getrennt von 20261116090000, damit die Funktion vorher in der Produktion
-- unter jeder Rolle ausprobiert werden kann: Scheitert die Prüfung selbst,
-- scheitert jede Anfrage. Solange der Schalter require_mfa_internal auf false
-- steht, kehrt sie sofort zurück und ändert nichts.
--
-- Rückweg:  alter role authenticator reset pgrst.db_pre_request;
--           notify pgrst, 'reload config';
alter role authenticator set pgrst.db_pre_request to 'public.pruefe_anfrage';
notify pgrst, 'reload config';
