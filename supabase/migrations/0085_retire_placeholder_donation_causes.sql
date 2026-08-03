-- ============================================================================
-- 0085 · Platzhalter-Spendenprojekte zurückgezogen
-- ----------------------------------------------------------------------------
-- BEFUND
-- In `donation_causes` standen drei Projekte, die der Kundenbereich zur
-- Abstimmung anzeigte — in der veröffentlichten Flutter-App, für jedes
-- angemeldete Konto:
--
--     Tafel Magdeburg
--     Kinderhospiz Magdeburger Elbland
--     Feuerwehr Sülzetal
--
-- Nach Auskunft des Betriebs waren das **Platzhalter zur Veranschaulichung**.
-- Es sind aber Namen real existierender Organisationen, die von ihrer
-- Nennung nichts wissen.
--
-- Das wiegt schwerer als eine erfundene Zahl: Bei „Jugendtreff Irxleben"
-- (dem Mock in der Web-App) erfindet man etwas. Hier benutzt man den Namen
-- eines Dritten für eine Werbeaussage — „wir unterstützen diese
-- Einrichtung" —, die er nie erlaubt hat. Das ist irreführende Werbung
-- nach § 5 UWG und berührt zusätzlich das Namensrecht der Genannten.
--
-- ENTSCHEIDUNG
-- Zurückgezogen per `deleted_at`, nicht gelöscht. `donation_causes_list()`
-- filtert `where c.deleted_at is null` — die Projekte verschwinden damit
-- sofort aus **beiden** Apps. Gegengeprüft: Ein Kundenkonto sieht 0
-- Projekte.
--
-- Umkehrbar mit einem `update ... set deleted_at = null`, falls eine der
-- drei Organisationen später tatsächlich Partner wird.
--
-- WAS ALS NÄCHSTES KOMMT
-- Der Betrieb reicht eine echte Liste nach: Name, Anschrift, Zweck und die
-- Eigenschaft, Spendenbescheinigungen ausstellen zu dürfen. Dafür fehlen
-- der Tabelle heute die Spalten — sie kann nur `title`, `description` und
-- `status`. Die Erweiterung folgt, sobald die Liste vorliegt und klar ist,
-- welche Angaben sie enthält.
--
-- Bis dahin zeigt der Spendenbereich einen leeren Zustand. Das ist der
-- ehrliche Zwischenstand: Lieber „Projekte werden gerade festgelegt" als
-- drei Vereine, die nichts davon wissen.
-- ============================================================================
update public.donation_causes
   set deleted_at = now()
 where deleted_at is null
   and title in ('Tafel Magdeburg',
                 'Kinderhospiz Magdeburger Elbland',
                 'Feuerwehr Sülzetal');
