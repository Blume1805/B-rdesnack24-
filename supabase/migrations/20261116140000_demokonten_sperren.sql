-- ============================================================================
-- Zwei Demo-Konten mit internen Rollen sperren (Befund V-018-n, 16.11.2026)
--
-- Befund: Die Anmeldeseite der echten App zeigte jedem Besucher Demo-Zugänge
-- und nannte die Adressen aktiver Produktionskonten, darunter ein
-- system_admin und ein shareholder, beide ohne zweiten Faktor. Das in der App
-- hinterlegte Passwort galt nicht (gemessen), die Konten bleiben aber ein
-- unnötiger Angriffspunkt und zählen zu den internen Konten, die vor dem
-- Einschalten der Zwei-Faktor-Pflicht einen Faktor brauchen.
-- Entscheidung Philipp 16.11.2026: sperren.
--
-- Wirkung: keine Anmeldung und keine Verlängerung einer Sitzung mehr
-- (banned_until wie bei der Kontolöschung). Offene Sitzungen werden beendet;
-- ein bereits ausgegebenes Zugangstoken läuft spätestens nach seiner
-- Gültigkeit (Standard eine Stunde) ab. Nichts wird gelöscht, das Konto und
-- seine Daten bleiben bestehen. Das Demo-Kundenkonto bleibt unverändert.
-- Im lokalen Nachbau gibt es die Konten nicht; dort ändert sich nichts.
--
-- Rückweg: update auth.users set banned_until = null where email in (...);
-- ============================================================================

update auth.users
   set banned_until = 'infinity'::timestamptz
 where email in ('demo-admin@boerdesnack24.app', 'demo-gs@boerdesnack24.app');

delete from auth.sessions
 where user_id in (select id from auth.users
                    where email in ('demo-admin@boerdesnack24.app', 'demo-gs@boerdesnack24.app'));
