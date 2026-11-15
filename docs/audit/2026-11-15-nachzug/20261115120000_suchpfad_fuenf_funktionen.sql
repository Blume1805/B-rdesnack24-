-- Fester Suchpfad für fünf Funktionen (Hinweis „function_search_path_mutable"
-- von Supabase nach dem Ausrollen am 15.11.2026).
--
-- Keine der fünf läuft mit Eigentümerrechten, und alle nennen ihre Objekte mit
-- Schema. Der feste Suchpfad ist trotzdem Hausregel: Er nimmt einem Aufrufer
-- die Möglichkeit, über einen eigenen Suchpfad andere Objekte unterzuschieben.
-- Rumpf, Rechte und Verhalten ändern sich nicht.
alter function app.benefits_free_for_all()            set search_path = public, app;
alter function app.darf_bundles_pflegen()             set search_path = public, app;
alter function app.dauerrabatt_prozent()              set search_path = public, app;
alter function app.kassenzaehlung_unveraenderbar()    set search_path = public, app;
alter function app.terminal_ereignis_unveraenderbar() set search_path = public, app;
