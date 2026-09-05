# Auftrag an Lovable — Firmenportal, Selbstbedienung Rechnungsdaten

**Status: NICHT GESENDET.** Der Lovable-Workspace hat keine Credits mehr
(Meldung vom 03.09.2026, `https://lovable.dev/settings/billing`). Sobald
aufgeladen ist, geht dieser Text als Nachricht an Projekt
`35646ee4-142a-4017-bdb2-089951ddcc94` raus.

Er ist ein **Nachtrag** zur Nachricht `umsg_01m1p9aawsevxtb3jqtpbqdms7`
(Korrektur der Datenzugriffsschicht), die bereits gesendet ist. Ein Punkt
daraus ändert sich: die Rechnungsdaten sind nun doch Selbstbedienung.

---

Nachtrag zur laufenden Korrektur. Ein Punkt daraus ändert sich: **die
Rechnungsdaten sind jetzt doch Selbstbedienung.** Der Rest meiner vorigen
Nachricht gilt unverändert.

Ich habe dafür zwei neue Funktionen gebaut, ausgerollt und mit 21 Prüfungen
belegt. `/firma` wird also **nicht** komplett schreibgeschützt, sondern
gemischt: ein Teil ist editierbar, der Rest nur lesbar.

## Lesen

`business_rechnungsdaten(p_business uuid)` → Objekt

```json
{ "id", "name", "legal_form",
  "billing_street", "billing_zip", "billing_city", "billing_country",
  "billing_email", "tax_number", "vat_id", "updated_at",
  "selbst_aenderbar": ["billing_street","billing_zip","billing_city",
                       "billing_country","billing_email"] }
```

**Bitte `selbst_aenderbar` tatsächlich auswerten**, statt die fünf Feldnamen
im Frontend fest zu verdrahten. Die Liste steht genau deshalb in der
Antwort: wächst sie später, zieht die Oberfläche von allein nach, ohne dass
jemand daran denken muss.

`p_business` kommt wie überall aus `my_businesses()[…].id`.

## Schreiben

`business_rechnungsdaten_update(p_business uuid, p_werte jsonb)` → dasselbe
Objekt ohne `selbst_aenderbar`

`p_werte` ist ein Objekt mit **nur** den geänderten Feldern, etwa
`{"billing_city":"Wanzleben","billing_email":"rechnung@firma.example"}`.

Schick bitte nur, was sich geändert hat, nicht das ganze Formular. Jedes
nicht erlaubte Feld wird mit `42501` abgewiesen — auch dann, wenn es
unverändert mitgeschickt wird. Ein Formular, das stumpf alle Felder
zurücksendet, scheitert also, sobald `name` mit dabei ist.

Der Server schneidet zu und normalisiert: Land wird großgeschrieben
(`de` → `DE`), E-Mail kleingeschrieben und getrimmt, Leerraum überall
entfernt. **Bitte die Antwort in den Formularzustand zurückschreiben**,
damit der Nutzer sieht, was tatsächlich gespeichert wurde.

## Was nur lesbar bleibt, und warum

Firmierung, Rechtsform, Steuernummer und USt-IdNr. bleiben bei der
Verwaltung. Bitte im Formular als nicht editierbar darstellen, mit einem
kurzen Hinweis, dass Änderungen daran über den Ansprechpartner laufen — und
ohne die Felder zu verstecken. Der Kunde soll sehen, was hinterlegt ist.

Der Grund ist kein Formalismus: die Firmierung erscheint über den Werbeplatz
als Name des Werbetreibenden in der Kunden-App, und eine USt-IdNr. bestimmt,
wie eine Rechnung ausgestellt wird. Beides ist nichts, was ohne Prüfung
geändert werden sollte.

Die Rechnungs-E-Mail lässt sich **nicht leeren**. Ein leeres Feld heißt,
dass Rechnungen nirgends ankommen; das soll niemand unbemerkt herstellen
können. Bitte im Formular als Pflichtfeld behandeln.

## Fehlermeldungen

Der Server liefert verständliche deutsche Texte — bitte durchreichen statt
durch eigene zu ersetzen:

* `42501` bei einem nicht erlaubten Feld: „Dieses Feld können Sie nicht
  selbst ändern: …"
* `42501` bei fremder Firma oder einfachem Mitglied: „Keine Berechtigung für
  diesen Firmenkunden"
* `22023` bei Prüffehlern: „Bitte geben Sie eine gültige Postleitzahl an."
  und so weiter

Nur ein **Firmen-Admin** darf schreiben. Ein einfaches Mitglied bekommt
`42501` — bitte die Felder für Mitglieder gar nicht erst editierbar
anzeigen, aber verlass dich nicht darauf: die Sperre sitzt im Server, das
Frontend spiegelt sie nur.

## Standorte bleiben unverändert nur lesbar

Daran ändert sich nichts. `business_location_set` ist weiterhin intern und
verknüpft ohnehin nur vorhandene Standorte, statt Adressen zu pflegen.

## Nachweise zusätzlich zu den bisherigen

* Wie du `selbst_aenderbar` auswertest.
* Dass nur geänderte Felder gesendet werden, und wie du das sicherstellst.
* Dass die Serverantwort den Formularzustand aktualisiert (Beispiel: Eingabe
  `de` im Land, danach steht `DE` im Feld).
