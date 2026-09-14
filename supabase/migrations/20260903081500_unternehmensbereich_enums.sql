-- Unternehmensbereich: Werte an bestehende Aufzählungstypen anhängen.
--
-- Eigene Migration, weil ein mit ALTER TYPE ADD VALUE angelegter Wert in
-- derselben Transaktion noch nicht verwendet werden darf. Alles, was diese
-- Werte benutzt, steht in der Folgemigration.

-- lead_status: 'cancelled' fehlte. Eine zurückgezogene Anfrage ist nicht
-- dasselbe wie eine verlorene — 'lost' heißt, wir haben sie nicht gewonnen,
-- 'cancelled' heißt, der Interessent hat sie selbst zurückgezogen oder sie war
-- Unsinn. Für die Kennzahl gewonnen/verloren ist der Unterschied wesentlich.
alter type app.lead_status add value if not exists 'cancelled';

-- business_role: 'viewer' für den Analytics-Bereich — darf Zahlen lesen,
-- sonst nichts.
--
-- ACHTUNG, der Grund für die Folgemigration: app.is_business_member(b) ohne
-- Rollenangabe trifft heute jede Rolle. Ein neuer Wert im Typ würde deshalb
-- sofort auf 19 bestehende Policies durchschlagen und einem viewer unter
-- anderem Lesezugriff auf businesses.tax_number, businesses.vat_id, die
-- Vertragspreise in advertising_space_contracts und die Sponsoringbeträge
-- geben. Das ist mehr als „Analytics ansehen".
--
-- Die Folgemigration schränkt die rollenlose Prüfung deshalb auf
-- admin und member ein und stellt für die Analytics-Flächen eine eigene,
-- ausdrücklich weitere Prüfung bereit. Für die beiden bereits existierenden
-- Rollen ändert sich dadurch nichts; der Nachweis dafür steht im Testskript.
alter type app.business_role add value if not exists 'viewer';
