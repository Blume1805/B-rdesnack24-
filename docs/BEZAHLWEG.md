# Wie das Abo bezahlt wird — und warum das die E-Mails bestimmt

Stand 04.08.2026. Ausgangspunkt war die Annahme, das Abo laufe über App
Store und Play Store, und damit entfielen alle Zahlungs-E-Mails, weil
Apple und Google die Belege selbst verschicken.

Die Schlussfolgerung ist richtig — **die Annahme darunter vermutlich
nicht.**

## Der Haken

Apples Prüfrichtlinie 3.1.3(e) (früher 3.1.5):

> If your app enables people to purchase physical goods or services that
> will be consumed outside of the app, you must use purchase methods other
> than in-app purchase.

Also: Für **körperliche Waren oder Leistungen, die ausserhalb der App
verbraucht werden**, ist In-App-Kauf nicht erlaubt — er ist *verboten*.
Apple will dafür ausdrücklich einen anderen Weg (Apple Pay, Karte).

Und genau dort liegt unser Abo. Sein Kern ist laut
`subscription_value_screen.dart` der **Status-Rabatt bis 10 %** auf
Einkäufe am Automaten. Das ist keine digitale Leistung in der App — das
sind Snacks und Getränke, die jemand am Automaten zieht und draussen
isst. Aus Apples Sicht ist das der Lehrbuchfall von „physical goods
consumed outside of the app".

Google Play zieht dieselbe Grenze aus der Gegenrichtung: Play Billing ist
für digitale Inhalte **vorgeschrieben** und für körperliche Waren
**unzulässig**.

Ein Abo für 0,99 € im Monat, das Rabatt am Automaten gibt, dürfte damit
in beiden Läden **nicht** über den jeweiligen Kaufmechanismus laufen.

## Was das praktisch heisst

Die gute Nachricht zuerst: Es spart Geld. Apple und Google nehmen 15–30 %.
Bei 0,99 € im Monat sind das 15–30 Cent, die nicht abgehen.

Die schlechte: **Ein eigener Zahlungsanbieter wird gebraucht** — und damit
kommen genau die E-Mails zurück, die entfallen sollten. Bei einem eigenen
Zahlungsweg seid ihr der Verkäufer, nicht Apple. Dann liegt bei euch:

* die **Rechnung** mit allen Pflichtangaben nach § 14 UStG (fortlaufende
  Nummer, Leistungszeitraum, Netto, Steuersatz, Steuerbetrag, USt-IdNr.),
* die Meldung über **fehlgeschlagene Zahlungen** und was passiert, wenn
  nichts geschieht,
* die Vorwarnung vor der **automatischen Verlängerung**,
* der Hinweis auf ein **ablaufendes Zahlungsmittel**.

Bei App-Store-Abwicklung macht Apple all das. Bei eigenem Zahlungsweg
niemand ausser euch.

## Die Ausnahme, die es vielleicht doch erlaubt

Es gibt einen Weg, bei dem In-App-Kauf zulässig wäre: wenn das Abo
**ausschliesslich digitale Leistungen** verkauft — Funktionen in der App,
Statusabzeichen, Spendenabstimmung — und der Rabatt am Automaten
**nicht** Teil des Verkaufsversprechens ist, sondern eine dreingegebene
Nebenleistung.

Das ist eine juristische Gratwanderung und keine, die ich für euch
entscheiden kann. Sie hängt auch nicht an der Technik, sondern daran, wie
das Abo **beworben** wird. Solange auf der Verkaufsseite „bis 10 % Rabatt
am Automaten" als Hauptargument steht, wird ein Prüfer bei Apple das als
körperliche Leistung lesen — und die Seite ist genau so aufgebaut, weil
das das stärkste Argument ist.

## Empfehlung

**Nicht auf In-App-Kauf planen.** Zwei Gründe, unabhängig voneinander:

1. Das Ablehnungsrisiko bei der App-Prüfung ist real, und es trifft euch
   zum spätestmöglichen Zeitpunkt — kurz vor Veröffentlichung.
2. **Die Web-App braucht ohnehin einen eigenen Zahlungsweg.** Auf
   `boerdesnack24.de` kann weder Apple noch Google kassieren; In-App-Kauf
   gibt es nur in der App. Da der Kundenbereich im Web gerade entsteht,
   werdet ihr einen Zahlungsanbieter so oder so brauchen. Zwei parallele
   Abrechnungswege für dasselbe Abo sind erheblich mehr Arbeit als einer.

Ein Anbieter, der von der Web-App *und* aus der nativen App heraus
aufgerufen wird, ist der geradere Weg — und er hält den Kunden in eurer
Beziehung statt in Apples.

## Was das für den E-Mail-Katalog bedeutet

Vorerst **nichts**. Die neun betroffenen Vorlagen (`abo_rechnung`,
`abo_zahlung_erfolgreich`, `abo_zahlung_fehlgeschlagen`,
`abo_zahlungsmittel_laeuft_ab`, `abo_zahlungsmittel_geaendert`,
`abo_verlaengert`, `abo_test_beginnt`, `abo_test_endet_bald`,
`abo_test_beendet`) bleiben mit `is_active = false` im Katalog stehen.

Sie zu löschen wäre voreilig: Nach dieser Prüfung ist wahrscheinlicher,
dass sie gebraucht werden, als dass sie entfallen. Ihre `precondition`
nennt jetzt beide Zweige, damit niemand später aus dem Text den falschen
Schluss zieht.

Unberührt bleiben `premium_willkommen` (Begrüssung zur Leistung, kein
Beleg), `abo_kuendigung_laufzeitende` und `abo_laeuft_bald_ab` — die
gehören in jedem Fall euch.

## Was in beiden Fällen zu tun ist

Falls es doch bei App Store und Play Store bleibt, entfallen zwar die
E-Mails, **nicht aber die Anbindung**. Beide Läden bieten
Server-Benachrichtigungen an (App Store Server Notifications V2, Google
Play Real-time Developer Notifications). Die werden gebraucht, damit die
Datenbank überhaupt weiss, ob ein Abo noch läuft:

* Jemand kündigt im App Store → ohne Benachrichtigung gewährt die App
  weiter Premium.
* Apple erstattet eine Zahlung → ohne Benachrichtigung steht der Umsatz
  in eurer Auswertung, obwohl das Geld zurück ist.

Das ist kein E-Mail-Thema, sondern eines der Zugangsrechte — und es ist
der Teil, den man beim Planen von In-App-Käufen am ehesten übersieht.

## Quellen

* [App Review Guidelines, Apple](https://developer.apple.com/app-store/review/guidelines/)
* [In-app purchase rules applied by Apple and Google (CMA, Appendix H)](https://assets.publishing.service.gov.uk/media/61b86a0ce90e070441bcf983/Appendix_H_-_In-app_purchase_rules_in_Apples_and_Googles_app_stores.pdf)
