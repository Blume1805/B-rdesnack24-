# Rechtstexte der Website boerdesnack24.de

Diese Fassungen gelten für die **Website**. Die Texte in
`docs/rechtstexte/` daneben gelten für die **App** und sind zeichengenau
mit der Produktionsdatenbank abgeglichen — sie werden hier nicht
verändert.

Warum getrennt? Die Website verarbeitet anderes als die App (kein Konto,
kein Kauf, kein Abo-Abschluss), sie wird woanders gehostet, und sie
spricht Besucher an, die noch kein Kunde sind. Ein Text, der beides
gleichzeitig behauptet, ist an beiden Stellen ungenau.

| Datei | Pflicht? | Grundlage |
|---|---|---|
| `impressum.md` | ja | § 5 DDG, § 18 Abs. 2 MStV |
| `datenschutz.md` | ja | Art. 13 DSGVO |
| `nutzungsbedingungen.md` | nein, aber zugesagt | — |
| `widerruf.md` | ja, sobald das Abo beworben wird | §§ 355 ff. BGB |
| `kuendigung.md` | ja, sobald das Abo beworben wird | § 312k BGB |

## Zwei Unterschiede zur App-Fassung, die Absicht sind

**Kein Lifetime-Abo.** `Pricing.lifetimePubliclyOffered` steht auf
`false`, das Modell wird also nicht angeboten. Die Website-Fassungen von
Nutzungsbedingungen und Widerrufsbelehrung führen es deshalb nicht auf.
Ein Rechtstext, der ein Produkt beschreibt, das es nicht zu kaufen gibt,
verwirrt im besten Fall und ist im schlechteren eine falsche Angabe.
Die App-Fassungen führen es weiter — dort ist der Plan im Backend noch
vorhanden. Ob Lifetime ganz entfällt, ist offen (siehe AUFGABEN-PHILIPP).

**„Diese App" wird zu „diese Website und unsere App".** Betrifft
Impressum und Nutzungsbedingungen. Auf einer Website ist die
App-Formulierung schief.

## Vor der Veröffentlichung — was noch fehlt

**Entscheidung Philipp, 08.09.2026: gehostet wird bei Hostinger, nicht
bei Lovable.** Grund: Im Pro-Tarif von Lovable gibt es keinen
Auftragsverarbeitungsvertrag nach Art. 28 DSGVO. Lovable ist damit reines
Bauwerkzeug; ausgeliefert wird die Seite von Hostinger.

Daraus folgt der Zuschnitt dieser Datenschutzerklärung: Die Website ist
eine reine Informationsseite. Kein Formular, kein Konto, kein Kauf.
Personenbezogene Daten gibt der Kunde erst in der App an — die hat ihre
eigene, ausführlichere Erklärung.

Firmierung und Anschrift des Hosters stehen inzwischen fest. Sie stammen
aus den Nutzungsbedingungen von Hostinger (Screenshots vom 08.09.2026):
Für alle Länder ausserhalb der dort genannten Gruppen — „einschliesslich
aller EU-Länder" — ist Vertragspartner die **HOSTINGER INTERNATIONAL
LIMITED**, 61 Lordou Vironos str., 6023 Larnaca, Zypern.

Zypern ist EU-Mitgliedstaat. Auf Ebene des Vertragspartners besteht
deshalb kein Drittlandproblem, und die Erklärung braucht dafür keinen
eigenen Abschnitt.

**Ein Platzhalter ist noch offen:**

| Platzhalter | Was einzutragen ist |
|---|---|
| `[[SERVERSTANDORT]]` | das Land des Rechenzentrums laut Tarif |

Er wird nicht aus dem Gedächtnis gefüllt. Hostinger ist von hier aus
nicht abrufbar, und bei Supabase hat das Raten schon einmal eine falsche
Firmierung erzeugt.

## Fünf Punkte, die vor dem Online-Gang stimmen müssen

1. **Der Auftragsverarbeitungsvertrag ist geklärt.** Das „Data
   Processing Addendum" ist durch Verweis Bestandteil der
   Nutzungsbedingungen; die elektronische Annahme bindet daran. Eine
   gesonderte Unterschrift ist nicht nötig. Er entsteht damit mit der
   Buchung — vorher nicht.
2. **Die Ländergruppe ist bestätigt.** Die AGB nennen daneben die
   HOSTINGER Global S.à r.l. (Luxemburg) für eine „Gruppe 2". Nach dem
   Wortlaut fallen EU-Länder nicht darunter; die in den AGB verlinkte
   Liste sollte das einmal bestätigen. Ergibt sie etwas anderes, ändert
   sich die Firmierung — und dann auch hier.
3. **Das Rechenzentrum steht in der EU.** Der Sitz des Vertragspartners
   sagt nichts über den Serverstandort; der wird bei der Einrichtung
   gewählt.
4. **Auf der ausgelieferten Seite ist kein Formular.** Steht doch eines
   drauf, fehlt der Erklärung ein ganzer Abschnitt (siehe unten).
5. **Eine datierte Kopie der Nutzungsbedingungen samt DPA liegt ab.**
   Hostinger darf sie jederzeit ändern und kündigt wesentliche
   Änderungen per E-Mail an, mit 30 Tagen Kündigungsrecht. Für den
   Nachweis zählt die Fassung, die beim Vertragsschluss galt
   (Art. 5 Abs. 2 DSGVO).

Eine Datenschutzerklärung, die den falschen Hoster oder einen nicht
bestehenden Vertrag nennt, ist schlechter als keine: sie behauptet eine
Prüfung, die nicht stattgefunden hat.

## Falls das Kontaktformular doch bleibt

Die frühere Fassung hatte einen Abschnitt zum Formular „Fläche oder
Werbefläche anbieten", das an die Supabase-Funktion
`advertising_inquiry_submit` sendet. Er ist entfernt, weil die Seite
nichts mehr entgegennimmt.

Soll das Formular zurück, gehören zwei Dinge wieder hinein: der Abschnitt
zur Verarbeitung der Formulardaten und Supabase als Auftragsverarbeiter.
Beides steht in der Fassung vom 08.09.2026 in der Git-Historie und lässt
sich zurückholen. Ohne diese Abschnitte darf kein Formular online gehen.
