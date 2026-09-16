# Umsetzungsplan — vom Konzept in den Code

Stand: 2026-09-16 · Grundlage: `2026-09-15-fundament-und-finanzlogik.md`
Kennzeichnung: **FAKT** · **ANNAHME** · **ZU VERIFIZIEREN** · **GESPERRT**

## Leitgedanke

Das Konzept enthält zwei Arten von Änderungen, die **nicht** zusammen umgesetzt
werden dürfen:

* **Aufbau** — die öffentliche Automatenseite. Sie ist additiv, hängt an keiner
  der fünf offenen Größen und kann sofort entstehen.
* **Rückbau** — Abo, Dauerrabatt, Statusstufen, Gamification, Teile des
  Kundenbereichs. Der hängt vollständig an der Frage, ob der zweckgebundene
  Anteil eine Standortvergütung **ersetzt**. Fällt sie negativ aus, kehrt ein
  Endkundenbeitrag möglicherweise zurück — dann wäre gelöschter Code teuer.

Deshalb: Aufbau jetzt, Rückbau erst nach den Standortgesprächen.

## Phase 1 — Öffentliche Automatenseite (sofort, additiv)

**Was entsteht.** Eine öffentliche Seite je Automat, erreichbar über einen
QR-Code am Gerät, ohne Konto und ohne Anmeldung. Inhalt: welcher Automat,
welcher Standort, welcher Empfänger, welcher Betrag im laufenden Jahr, was tun
bei einer Störung, wo der Beleg bleibt.

**Warum nicht in der bestehenden App.** FAKT aus der Messung vom 15.09.2026:
Der Flutter-Web-Build lädt beim Erstaufruf 2,8 bis 4,1 MB. Am Automaten, bei
schwachem Netz in Halle oder Bad, ist das der Abbruchmoment. Die Seite entsteht
deshalb als eigenständiges, sehr leichtes Frontend.

**Entwurf über Lovable.** Der Entwurf wird in Lovable erstellt (React,
TypeScript, Tailwind), kommt als Vorlage zurück und wird hier geprüft, rechtlich
abgeglichen und in die Zielumgebung überführt. Briefing: `docs/lovable-brief-automatenseite.md`.

**Datenquelle.** Zunächst statisch gepflegte Inhalte je Automat. Der
Spendenbetrag wird erst dann automatisch berechnet, wenn die Transaktionsdaten
aus dem Clever-System verlässlich vorliegen — bis dahin wird er manuell gesetzt
und als Stand mit Datum ausgewiesen. Nichts anderes ist belegbar.

**Rechtliche Folgen:** siehe `docs/COMPLIANCE.md`, Vorgang V-006.

## Phase 2 — Gesperrt bis zur Standortentscheidung

> **Teilweise überholt am 2026-09-16.** Der Gesellschafter hat entschieden, die
> App kostenlos zu machen und Dauerrabatt, Coupons und Meilensteine trotzdem
> anzubieten. Damit ist die Zeile „Abo entfernen" erledigt — allerdings nicht
> durch Rückbau, sondern durch einen Schalter
> (`Pricing.benefitsFreeForAll`). Alle übrigen Zeilen bleiben gesperrt. Warum
> die Sperre trotzdem sinnvoll bleibt, steht unter „Nachtrag: kostenlose App"
> am Ende dieses Dokuments.

**GESPERRT.** Diese Punkte werden nicht angefasst, bis die fünf Größen aus
Abschnitt 10 des Fundamentdokuments erhoben sind:

| Vorhaben | Betroffener Code | Warum gesperrt |
|---|---|---|
| ~~Abo entfernen~~ → **entschieden am 2026-09-16** | `subscription_*`-Screens, `core/pricing`, `core/billing`, Migration 0061, Edge Functions `subscription-choose`/`subscription-cancel` | Der Verkaufsweg ist abgeschaltet, der Code steht bewusst unverändert. Genau die Begründung der Sperre — „wäre der Rückbau doppelt bezahlt" — führt hier zum Schalter statt zur Löschung |
| Statusstufen und Challenges entfernen | Migration 0058, `rewards_screen.dart` | dito; zusätzlich Datenbestand bestehender Konten |
| Dauerrabatt entfernen | `Pricing.appDiscountRate`, Preisanzeigen | hängt an der Frage, ob ein kundengebundener Vorteil technisch überhaupt möglich ist (ZU VERIFIZIEREN bei Automatenland) |
| Kundenbereich verkleinern | `features/customer/` (41 Dateien) | erst nach Entscheidung über die Zukunft der App |

**Auslöser für die Entsperrung:** drei geführte Standortgespräche mit Antwort
auf die Frage „Welche Beteiligung oder Miete hat Ihnen ein anderer Betreiber
angeboten?", plus die technische Auskunft von Automatenland.

## Phase 3 — Nachziehen der Rechtstexte

**Für das Abo am 2026-09-16 ausgeführt.** Die Regel dieses Abschnitts hat genau
so gegriffen, wie sie gedacht war: Rechtstexte folgen dem Code. Solange der
Verkaufsweg erreichbar war, war der AGB-Abschnitt über Abo-Modelle richtig. In
dem Moment, in dem `Pricing.benefitsFreeForAll` gesetzt wurde und der
Kundenbereich keinen Kauf mehr anbietet, wurde er falsch — und war deshalb im
selben Zug zu ändern, nicht später.

Erledigt:

* `legal_texts.dart` — AGB Ziffer 4 (jetzt „Unentgeltlichkeit der App und
  Vorteilsprogramm"), Ziffer 5 (jetzt „Laufzeit, Beendigung und Löschung des
  Kontos") und Ziffer 6 (Widerrufsrecht) neu gefasst; Version `v1 · 2026-06`
  → `v2 · 2026-09`
* `cancellation_screen.dart` — Überschrift, Einleitung und Hinweistext; § 312k
  BGB ist jetzt als freiwillig gehaltene Funktion gekennzeichnet, nicht als
  Pflicht
* `ai_info_screen.dart` — Statusstufen und Meilensteine ergänzt, zuständige
  Aufsichtsbehörde korrigiert
* `docs/COMPLIANCE.md` — Eintrag V-007 mit vollständiger Matrix

Ebenfalls erledigt:

* Alle drei Marketing-Unterlagen (`abo-rechnet-sich`, `app-mehrwert`,
  `sachbezug-steuerfrei`) wurden in der HTML-Quelle unter `docs/marketing/`
  überarbeitet und daraus neu als PDF gedruckt — in `docs/marketing/` und in
  `apps/mobile/web/marketing/`. Geprüft wurde der Textinhalt der erzeugten
  PDF-Dateien, nicht nur die Quelle.
* `docs/CUSTOMER.md`, `docs/LEGAL_AUDIT.md` und `docs/PRIVACY.md` wurden
  durchsucht: kein Anpassungsbedarf.

Offen geblieben (siehe V-007):

* Der Bestand an Abonnements ist nicht durch eine Datenbankabfrage belegt.
* Die Store-Metadaten sind noch nicht auf Preisangaben geprüft.

Für alle übrigen Phase-2-Punkte gilt die Regel unverändert weiter: Rechtstexte
folgen dem Code, nicht dem Konzept.

## Was in Phase 1 ausdrücklich nicht entsteht

Kein Konto, keine Anmeldung, kein Abo, kein Rabatt, keine Punkte, keine
Benachrichtigungen, keine Kundenidentifikation, keine native App, kein Tracking
ohne Einwilligung.

## Befund P-1 — ZURÜCKGEZOGEN am 2026-09-16

> **Dieser Abschnitt war falsch.** Er beruht auf Migration `0058`, die von
> `0060` abgelöst wird — `0060` droppt die alte Stufenfunktion ausdrücklich
> und ersetzt Cashback durch Rabatt. Es gab nie zwei Stufensysteme, nur eine
> veraltete Quelle. Geprüft durch Einspielen beider Migrationen in eine
> laufende PostgreSQL-16-Instanz; die geltende Staffel lautet 5 % bis
> 149,99 €, 6 % ab 150 €, 7,5 % ab 500 €, 10 % ab 1.000 € und stimmt mit dem
> Client überein. Elf Zusicherungen einschließlich aller Grenzwerte bestanden.
>
> Der Text bleibt zur Nachvollziehbarkeit stehen. Er ist **keine** Beschreibung
> des Codes, sondern das Protokoll eines Irrtums: Eine Migration wurde für die
> Wahrheit gehalten, obwohl nur die zuletzt angewandte es ist. Siehe
> `docs/ARCHITECTURE.md`, A-7.


Gefunden am 2026-09-16 beim Gegenprüfen der Statuslogik. **FAKT**, aus dem Code
belegt.

Es existieren zwei Stufensysteme mit denselben Namen, aber unterschiedlichen
Schwellen und unterschiedlichem Vorteil:

| | Server: `app.status_tiers` (Migration 0058) | Client: `core/pricing/pricing.dart` |
|---|---|---|
| bronze | ab 0 € → 0 % Cashback | +1 % Rabatt |
| silber | ab 50 € → 1 % Cashback | +2,5 % Rabatt |
| gold | ab 150 € → 2 % Cashback | +5 % Rabatt |
| platin | ab 400 € → 3 % Cashback | **nicht abgebildet → 0 %** |

`customer_providers.dart` liest den Stufencode vom Server und reicht ihn an
`Pricing.effectiveDiscountRate` weiter. Daraus folgt im Betrieb:

1. **Der Zusatzrabatt greift zehnmal früher als dokumentiert.** Ein Kunde mit
   50 € kumuliertem Umsatz ist serverseitig `silber` und bekommt im Client
   2,5 Prozentpunkte extra — der Kommentar nannte dafür 500 €. Bei 150 € sind
   es bereits 10 % Gesamtrabatt statt der dokumentierten 1.000 €-Schwelle.
2. **Die höchste Stufe ist die schlechteste.** `platin` kennt der Client nicht
   und fällt auf 0 %. Ein Kunde mit 400 € Umsatz erhält 5 % Gesamtrabatt, einer
   mit 200 € dagegen 10 %.
3. **Cashback kommt obendrauf.** Der Server gewährt zusätzlich 1 bis 3 %.

**Wirkung.** Die Rechnung im Fundamentdokument ging vom dokumentierten Stand
aus. Real ist der Margenabfluss höher und setzt früher ein. Das schwächt das
Abo-Modell zusätzlich — und ist ein weiteres Argument dafür, die Statuslogik
nicht zu reparieren, bevor entschieden ist, ob sie überhaupt bleibt.

**Nicht behoben, mit Absicht.** Welche Schwellen und welcher Vorteil richtig
wären, ist eine Geschäftsentscheidung, keine technische. Sie gehört in Phase 2.
Korrigiert wurde nur der irreführende Kommentar in `pricing.dart`, der das
Gegenteil behauptete.

**Verbraucherrechtlich unkritisch:** Kunden erhalten derzeit einen höheren
Rabatt als dokumentiert, nicht einen niedrigeren. Es entsteht kein Nachteil für
sie und damit kein Anpassungsbedarf an Preisangaben oder AGB.

## Nachtrag: kostenlose App (Beschluss vom 2026-09-16)

### Sachverhalt

Nach der Auseinandersetzung mit der Querfinanzierungsthese (Nachtrag 2 im
Fundamentdokument) hat der Gesellschafter entschieden: Die App wird kostenlos,
Dauerrabatt, Coupons, Meilensteine und Statusstufen bleiben und stehen allen
angemeldeten Kundinnen und Kunden offen.

Umgesetzt über `Pricing.benefitsFreeForAll = true`. Der gesamte Abo-Apparat —
Screens, Server-RPC `choose_subscription_plan`, Tabellen, Preiskonstanten,
Founders-Kontingent — bleibt unverändert im Code. Erreichbar ist er nicht mehr.

### Warum ein Schalter und keine Löschung

Der Umsetzungsplan sperrt den Rückbau des Abos mit der Begründung, ein späterer
Wiederaufbau wäre doppelt bezahlt. Diese Begründung gilt unverändert. Die
Entscheidung, kein Geld mehr zu verlangen, ist davon unabhängig: Sie lässt sich
mit einer Zeile umsetzen und mit einer Zeile zurücknehmen. Ein Rückbau dagegen
wäre unumkehrbar und fiele in Änderungsklasse K4.

Der Preis dieser Wahl ist Ehrlichkeit über den Zustand: Im Repository liegt
jetzt mehrere hundert Zeilen Code, der nicht erreichbar ist. Das ist kein
sauberer Zustand, sondern ein bewusst gehaltener. Er gehört aufgelöst, sobald
die Standortgespräche entschieden sind — in die eine oder die andere Richtung.

### Was die Entscheidung nicht löst

Die Abo-Erlöse waren in der Finanzrechnung nie ein tragender Posten. Bei 50
zahlenden Konten zu 9,99 € im Jahr standen rund 500 € Jahresumsatz gegen einen
Rohertrag von 5.040 bis 8.640 € pro zusätzlichem Standort. Der Wegfall tut
rechnerisch kaum weh — aber er bringt eben auch nichts ein. **Das Grundproblem
bleibt unverändert: Der Engpass ist der Standort, nicht der Kunde.** Wer die
App kostenlos macht, hat damit keinen einzigen Standort gewonnen.

Ebenfalls ungelöst:

* **Der Dauerrabatt kostet jetzt mehr.** 5 % gehen bisher nur bei Abonnenten
  vom Rohertrag ab, künftig bei jedem angemeldeten Konto. Bei einer
  Rohertragsmarge von 50 bis 70 % ist das kein Randeffekt. Die Rechnung im
  Fundamentdokument (Abschnitt 7.4) geht von einem Abonnentenanteil aus und
  ist damit **überholt** — sie ist neu zu rechnen, sobald die Zahl der
  angemeldeten Konten aussagekräftig ist. Bis dahin: Der Defizitbereich
  beginnt früher als dort ausgewiesen.
* ~~**Befund P-1 wiegt schwerer.**~~ **Zurückgezogen am 2026-09-16.** Der
  behauptete Widerspruch zwischen Client- und Server-Stufen existiert nicht.
  Die Analyse hatte Migration `0058` gelesen, die von `0060` abgelöst wird.
  Geprüft durch Einspielen beider Migrationen: Die geltende Staffel lautet
  5 % bis 149,99 €, 6 % ab 150 €, 7,5 % ab 500 €, 10 % ab 1.000 € — genau so,
  wie der Client sie abbildet und wie der Gesellschafter sie bestätigt hat.
  Der Fehler lag bei der Analyse, nicht im Code. Was bleibt: Der Dauerrabatt
  gilt jetzt für jedes Konto, nicht nur für Abonnenten — die Kostenwirkung
  unten steht unverändert.
* **Die These der Querfinanzierung ist unbelegt.** Die Annahme war, ein
  niedriger Abopreis erzeuge Reichweite, die sich an B2B-Werbekunden verkaufen
  lässt. Die Gegenrechnung steht in Nachtrag 2: Bei realistischer Nutzerzahl
  fehlt Faktor 28. Die App kostenlos zu machen, erhöht die Reichweite — aber
  auf einer Basis von zwei Konten ändert das an der Größenordnung nichts.

### Was sie tatsächlich verbessert

Die Abogebühr hat das reduziert, was sie steigern sollte: die Zahl der Konten.
Ohne Bezahlschranke fällt die einzige Hürde zwischen Automatenkäufer und Konto
weg. Das ist die richtige Richtung — nur ist sie kleiner als sie wirkt. Sie
verbessert die Voraussetzung, nicht das Ergebnis.

Zusätzlich fällt eine ganze Klasse von Pflichten weg: keine In-App-Käufe in den
Stores, keine Button-Lösung, keine Pflicht zur Kündigungsschaltfläche, keine
Abo-Umsatzsteuer, kein Store-Billing zu bauen. Für ein Zwei-Personen-Unternehmen
ist das ein spürbarer Wegfall an Aufwand — vermutlich der größere reale Gewinn
dieser Entscheidung als jeder Reichweiteneffekt.

### Empfehlung

Die Entscheidung ist vertretbar und sie ist umkehrbar. Sie ersetzt aber keine
der fünf Größen aus Abschnitt 10 des Fundamentdokuments. Die drei
Standortgespräche bleiben der eigentliche Prüfstein; bis dahin ändert sich an
der Sperre für Phase 2 nichts.

Vorschlag zur Reihenfolge:

1. ~~Befund P-1 entscheiden~~ — **erledigt am 2026-09-16.** Der Befund war
   falsch (veraltete Migration gelesen) und ist zurückgezogen. Die Staffel
   5 / 6 / 7,5 / 10 % ab 0 / 150 / 500 / 1.000 € ist bestätigt und in Client
   wie Server identisch.
2. **Standortgespräche führen** — unverändert der Engpass.
3. **Bestandsabfrage fahren** —
   Anleitung in `docs/OPERATIONS.md`, Runbook E. Ergibt sie Zeilen, greift die
   Erstattungszusage aus AGB Ziffer 4 f) und die betroffenen Personen sind
   aktiv zu informieren. (Der hier zuvor genannte Tabellenname
   `app.subscriptions` war falsch; sie heißt `public.customer_subscriptions`.)
