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

Drei Angaben stehen noch als Platzhalter in `datenschutz.md` und müssen
vor dem Online-Gang ersetzt werden:

| Platzhalter | Was einzutragen ist |
|---|---|
| `[[HOSTER-FIRMA]]` | die Firmierung, die im Hostinger-Vertrag steht |
| `[[HOSTER-ANSCHRIFT]]` | deren Anschrift aus demselben Dokument |
| `[[SERVERSTANDORT]]` | das Land des Rechenzentrums laut Tarif |

Ich habe sie **nicht** aus dem Gedächtnis gefüllt. Hostinger ist von hier
aus nicht abrufbar, und bei Supabase hat mich das Raten schon einmal eine
falsche Firmierung gekostet. Die Angaben stehen im Vertrag, den Philipp
vorliegen hat.

Ausserdem muss gelten:

1. **Der Auftragsverarbeitungsvertrag mit Hostinger ist geschlossen.**
   Der Text behauptet ihn. Ohne ihn ist das eine unrichtige Angabe
   gegenüber jedem Besucher — und der Grund, aus dem Lovable als Hoster
   ausgeschieden ist, gilt dann genauso hier.
2. **Das Rechenzentrum steht in der EU.** Sonst fehlt dem Text der
   Abschnitt zum Drittlandtransfer.
3. **Auf der ausgelieferten Seite ist kein Formular.** Steht doch eines
   drauf, fehlt der Erklärung ein ganzer Abschnitt (siehe unten).

## Falls das Kontaktformular doch bleibt

Die frühere Fassung hatte einen Abschnitt zum Formular „Fläche oder
Werbefläche anbieten", das an die Supabase-Funktion
`advertising_inquiry_submit` sendet. Er ist entfernt, weil die Seite
nichts mehr entgegennimmt.

Soll das Formular zurück, gehören zwei Dinge wieder hinein: der Abschnitt
zur Verarbeitung der Formulardaten und Supabase als Auftragsverarbeiter.
Beides steht in der Fassung vom 08.09.2026 in der Git-Historie und lässt
sich zurückholen. Ohne diese Abschnitte darf kein Formular online gehen.
