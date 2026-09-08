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

## Vor der Veröffentlichung — drei Dinge müssen erledigt sein

Der Hoster-Abschnitt in `datenschutz.md` (Nummer 3) benennt bereits
**Lovable Labs Incorporated** als Ausliefernde und Hostinger als reine
Registrarin der Domain. Das entspricht der Entscheidung vom 07.09.2026
(Lovable hostet, Hostinger liefert nur die Domain).

Damit diese Angaben stimmen, muss vor dem Online-Gang gelten:

1. **Die Domain ist tatsächlich mit dem Lovable-Projekt verbunden.**
   Steht die Seite woanders, ist der ganze Abschnitt falsch.
2. **Der Auftragsverarbeitungsvertrag mit Lovable ist geschlossen.**
   Der Text behauptet ihn. Solange er nicht besteht, ist das eine
   unrichtige Angabe gegenüber jedem Besucher — siehe AUFGABEN-PHILIPP
   Abschnitt 1.2.
3. **Die Firmenanschrift von Lovable ist gegen deren eigenes
   Auftragsverarbeitungs-Dokument geprüft.** Die öffentlich
   auffindbaren Quellen nennen zwei verschiedene US-Anschriften
   (Boston und Dover). Massgeblich ist, was im Vertrag steht — das
   liegt Philipp vor, mir nicht.

Eine Datenschutzerklärung, die den falschen Hoster oder einen nicht
bestehenden Vertrag nennt, ist schlechter als keine: sie behauptet eine
Prüfung, die nicht stattgefunden hat.
