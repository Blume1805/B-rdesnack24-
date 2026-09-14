-- Prüfzugang wieder entfernen.
--
-- Eingerichtet am 03.09.2026, damit der Betreiber sich die Anwendung
-- angemeldet ansehen kann. Dieses Skript macht das rückstandslos rückgängig.
--
-- Ausführen über die Supabase-Konsole (SQL Editor) oder über einen Zugang
-- mit Dienstrolle. NICHT als Migration ablegen: das hier ist eine
-- Betriebsmassnahme an Zugangsdaten, keine Änderung am Bauplan.

-- 1. Passwörter unbrauchbar machen.
--
-- Die drei Konten werden nicht gelöscht — sie stammen aus der Zeit vor dem
-- Prüfzugang und werden für Testläufe gebraucht. Entzogen wird nur die
-- Anmeldbarkeit: ein zufälliges Passwort, das niemand kennt, auch nicht die,
-- die dieses Skript ausführen.
update auth.users
   set encrypted_password = extensions.crypt(
         encode(extensions.gen_random_bytes(32), 'hex'),
         extensions.gen_salt('bf')),
       updated_at = now()
 where email in ('demo-admin@boerdesnack24.app',
                 'demo-gs@boerdesnack24.app',
                 'demo-kunde@boerdesnack24.app');

-- 2. Laufende Sitzungen beenden.
--
-- Ohne diesen Schritt bliebe ein bereits angemeldetes Gerät weiter drin —
-- ein geändertes Passwort wirft eine bestehende Sitzung nicht hinaus.
delete from auth.refresh_tokens
 where user_id in (select id::text from auth.users
                   where email like 'demo-%@boerdesnack24.app');
delete from auth.sessions
 where user_id in (select id from auth.users
                   where email like 'demo-%@boerdesnack24.app');

-- 3. Firmenmitgliedschaften zurücknehmen.
--
-- Ohne sie ist der Unternehmensbereich für diese Konten wieder leer — also
-- der Zustand von vor dem 03.09.2026.
delete from public.business_members
 where profile_id in (select id from public.profiles
                      where email like 'demo-%@boerdesnack24.app');

-- 4. Kontrolle: alle drei Zeilen müssen 0 Mitgliedschaften und 0 Sitzungen
--    zeigen. identities bleiben stehen — die gehören zum Konto, nicht zum
--    Prüfzugang, und ohne sie liesse sich das Konto später nicht wieder
--    verwenden.
select u.email,
       (select count(*) from public.business_members m where m.profile_id = u.id) as mitgliedschaften,
       (select count(*) from auth.sessions s where s.user_id = u.id) as sitzungen,
       (select count(*) from auth.identities i where i.user_id = u.id) as identitaeten
from auth.users u
where u.email like 'demo-%@boerdesnack24.app'
order by u.email;
