# Entwurf: Rechtstexte zur Automatenzahlung

**Stand 14.09.2026 · Entwurf, keine Setzung.**

Dieses Dokument enthält **Vorschläge für Wortlaute**, nicht die neuen
Texte selbst. Kein einziger Satz hieraus geht in `zahlung.md`,
`nutzungsbedingungen.md`, `widerruf.md` oder `datenschutz.md`, bevor
Philipp ihn freigegeben hat — sichtbarer Text ist nach `CLAUDE.md`
ausdrücklich keine Änderung, die ohne Vorlage gesetzt werden darf.

Auslöser sind zwei getrennte Dinge, die nicht vermischt werden dürfen:

* **Teil A** — zwei Fehler, die **heute schon** in den Texten stehen und
  nichts mit den Automaten zu tun haben. Sie sind unabhängig von jedem
  Automatenkauf wirksam und deshalb *sofort* fällig.
* **Teil B** — was sich ändert, **wenn** der erste Automat mit
  Kartenterminal in Betrieb geht. Diese Änderungen dürfen **nicht
  vorher** veröffentlicht werden: eine Datenschutzerklärung, die eine
  Verarbeitung beschreibt, die es noch nicht gibt, ist genauso falsch
  wie eine, die eine bestehende verschweigt.

Die Zuordnung zu Kategorien, Verantwortlichen und Fristen steht in
`docs/COMPLIANCE.md` (Abschnitt „Legal Impact Matrix — Automatenzahlung
und dynamische Preise").

---

## Teil A — sofort, unabhängig vom Automaten

### A1 · Das Lifetime-Abo wird in drei Texten angeboten, in der App aber nicht

**Befund.** `Pricing.lifetimePubliclyOffered = false`
(`packages/bs24_kern/lib/core/pricing/pricing.dart:56`). Die App blendet
das Modell aus — `subscription_screen.dart:83` filtert es heraus,
`subscription_value_screen.dart:190` zeigt es nur bei gesetztem Flag, und
der Test `subscription_value_screen_test.dart:35` hält diesen Zustand
sogar fest.

Die Rechtstexte behaupten das Gegenteil:

| Datei | Zeile | Aussage |
| --- | --- | --- |
| `zahlung.md` | 34 | „Lifetime-Abo **79,99 € einmalig**" |
| `nutzungsbedingungen.md` | 106 | dieselbe Zeile |
| `nutzungsbedingungen.md` | 110 | „Das Lifetime-Abo ist eine Einmalzahlung ohne Verlängerung." |
| `nutzungsbedingungen.md` | 112–115 | Kontingent „Founders Edition", 20 Konten, „Die Zahl der freien Plätze zeigen wir in der App an." |
| `nutzungsbedingungen.md` | 118–119 | Wechselausschluss nach Abschluss |
| `widerruf.md` | 55–61 | Erlöschen des Widerrufsrechts beim Lifetime-Abo |

**Würdigung.** Das ist keine Formulierungsfrage, sondern eine Angabe über
ein Angebot, das nicht besteht. Besonders deutlich bei
`nutzungsbedingungen.md:115`: Der Satz verweist auf eine Anzeige in der
App, die es nicht gibt. Eine Preisangabe für ein nicht wählbares Modell
ist zudem keine Preisangabe im Sinne der PAngV, sondern eine irreführende
Angabe über die Verfügbarkeit (§ 5 Abs. 2 Nr. 1 UWG).

**Vorschlag: ersatzlos streichen**, nicht umformulieren. Das Modell
existiert im Code, aber es wird nicht angeboten; ein Text, der es
„derzeit nicht verfügbar" nennt, hält die Frage offen, die gerade
geschlossen werden soll.

Konkret vorgeschlagen:

> **`zahlung.md`, Abschnitt ABONNEMENTS** — die Liste wird zu:
>
>       • Monats-Abo    **0,99 € pro Monat**
>       • Jahres-Abo    **9,99 € pro Jahr**
>
> Der Folgesatz „Das Jahres-Abo entspricht rechnerisch zehn
> Monatsbeiträgen; zwei Monate sind darin geschenkt." bleibt unverändert
> — er stimmt weiterhin.

> **`nutzungsbedingungen.md`** — dieselbe Kürzung der Liste; die Zeilen
> 110 und 112–115 (Einmalzahlung, Kontingent, Founders Edition) sowie in
> Zeile 118–119 der Halbsatz zum Wechselausschluss entfallen. Der
> verbleibende Wechselsatz lautet dann:
>
> > Wechsel: Zwischen Monats- und Jahres-Abo kannst du jederzeit
> > wechseln, wirksam zum nächsten Abrechnungszeitraum.

> **`widerruf.md`** — der Abschnitt „Erlöschen beim Lifetime-Abo"
> (Zeilen 55–61) entfällt vollständig.
>
> **Achtung, das ist der Punkt mit Folgen:** § 356 Abs. 5 BGB ist ohne
> Lifetime-Abo *nicht* gegenstandslos. Er greift bei jedem digitalen
> Inhalt, der vor Ablauf der Widerrufsfrist vollständig bereitgestellt
> wird. Ob Monats- und Jahres-Abo darunterfallen, hängt daran, ob die
> Freischaltung als „vollständige Bereitstellung" gilt oder als
> laufende Dienstleistung über den Abrechnungszeitraum — das ist für
> laufzeitgebundene Freischaltungen nicht einheitlich beantwortet.
> **Ich kläre das nicht durch Streichen.** Vorschlag: Der Abschnitt wird
> gestrichen *und* die Frage als eigener offener Punkt geführt, statt
> stillschweigend zu unterstellen, dass sie sich mit dem Lifetime-Abo
> erledigt hat.

**Wenn das Lifetime-Abo später doch angeboten wird**, sind alle drei
Texte wieder zu ergänzen — vor der Freischaltung des Flags, nicht danach.
Das gehört in `docs/betrieb/AUFGABEN-PHILIPP.md`, damit die Reihenfolge
nicht verlorengeht.

---

### A2 · „Wir haben auch keinen Zahlungsdienstleister eingebunden"

**Befund.** Der Satz steht zweimal:

* `zahlung.md`, Abschnitt „Welche Daten wir dabei bekommen"
* `datenschutz.md:181–186`, Abschnitt 3 „Was wir ausdrücklich nicht tun" —
  „… und binden keinen Zahlungsdienstleister ein."

Heute ist der Satz richtig: Es gibt keinen Automaten, kein Terminal,
keine Kartenzahlung. Er wird **falsch in dem Moment**, in dem das erste
CCV-IM30-Terminal Karten annimmt, denn die Abwicklung läuft dann über
**CleverPay**, das täglich abzüglich Gebühren auf unser Konto auszahlt
(`docs/architektur/AUTOMAT-BEZAHLUNG-UND-PREISE.md`, Zeilen 191, 278).

**Würdigung.** Eine Datenschutzerklärung, die einen Empfänger verschweigt,
verletzt Art. 13 Abs. 1 lit. e DSGVO. Der Satz ist außerdem in einem
Abschnitt platziert, der ausdrücklich Zusicherungen gibt („Was wir nicht
tun") — er wiegt dort schwerer als eine bloße Auslassung.

**Vorschlag.** Der Satz bleibt **bis zur Inbetriebnahme unverändert
stehen** und wird zu diesem Zeitpunkt durch Teil B ersetzt. Er wird
*nicht* vorsorglich entschärft: „Wir könnten künftig einen
Zahlungsdienstleister einbinden" ist keine Information, sondern eine
Verwässerung einer heute zutreffenden Zusage.

**Damit das nicht vergessen wird**, ist der Austausch als Pflichtschritt
in `docs/betrieb/AUTOMAT-INBETRIEBNAHME.md` geführt — vor der ersten
Kartenzahlung, nicht nach der ersten Abrechnung.

---

## Teil B — bei Inbetriebnahme des ersten Kartenterminals

Alles in diesem Teil ist **aufschiebend bedingt**. Solange
`machines` keinen aktiven Automaten enthält und kein Terminal angebunden
ist, sind diese Texte falsch.

### B1 · `zahlung.md` — Abschnitt „Welche Daten wir dabei bekommen"

**Vorgeschlagener Wortlaut (ersetzt den bisherigen Absatz):**

> **Wir speichern KEINE Kartennummer, KEINE IBAN und KEINE
> Zahlungstoken.** Das Kartenterminal am Automaten übermittelt uns diese
> Daten gar nicht erst; unsere Schnittstelle weist sie zusätzlich ab,
> falls sie doch einmal mitgeschickt würden.
>
> Die Zahlung selbst wickeln das Kartenterminal, der Zahlungsdienst
> **CleverPay** und dein Kartenanbieter ab. Von uns aus geht dabei nichts
> an CleverPay — der Weg läuft vom Terminal aus. Wir erhalten
> anschließend, dass und womit bezahlt wurde, den Betrag, den Zeitpunkt,
> den Automaten und eine Vorgangsnummer des Terminals. Die Auszahlung auf
> unser Konto erfolgt gesammelt, abzüglich der Gebühren des
> Zahlungsdienstes.
>
> **Bei Barzahlung** erfahren wir noch weniger: Münzprüfer und
> Scheinprüfer melden nur Betrag und Zeitpunkt. Es entsteht kein Bezug zu
> einer Person, und es gibt keinen, den wir später herstellen könnten.

**Begründung für „Von uns aus geht dabei nichts an CleverPay".** Der Satz
ist keine Beruhigung, sondern eine Tatsachenbehauptung über die
Datenrichtung, und sie muss stimmen. Nach dem jetzigen Entwurf stimmt
sie: Die Edge Function `terminal-webhook` **empfängt** nur. Ändert sich
das — etwa weil Preise über eine CleverMetrics-API gesetzt werden
(offene Frage 4 an Automatenland) —, muss der Satz weg.

---

### B2 · `zahlung.md` — neuer Abschnitt „Preise am Automaten"

Der Satz „**Der am Automaten angezeigte Preis gilt.**" steht heute schon
im Text und bleibt. Er braucht jetzt aber eine Erläuterung, weil es
zwei Preise gibt, die auseinanderfallen können.

**Vorgeschlagener Wortlaut (neuer Abschnitt nach „AM AUTOMATEN"):**

> **Warum der Preis in der App niedriger sein kann**
>
> Am Automaten gilt der Preis, der am Gerät angezeigt wird. Darin ist
> bereits ein Abschlag enthalten, wenn ein Produkt bald sein
> Mindesthaltbarkeitsdatum erreicht.
>
> Rabatte, die an dein Konto gebunden sind — der Dauerrabatt und deine
> Gutscheine —, kennt der Automat nicht. **Er weiß nicht, wer vor ihm
> steht, und das soll er auch nicht wissen.** Diese Rabatte bekommst du
> deshalb nur über die App: Du wählst das Produkt dort aus, die App zeigt
> dir deinen Preis und gibt dir einen Freigabecode, den du am Automaten
> eingibst. Der Code gilt **drei Minuten** und **genau einmal**.
>
> Zahlst du am Automaten direkt mit Karte oder bar, gilt der Preis am
> Gerät — ohne deine persönlichen Rabatte. Das ist keine Panne, sondern
> die Folge davon, dass wir das Terminal nichts über dich wissen lassen.

**Begründung.** Ohne diesen Absatz entsteht genau die Situation, die
§ 5 UWG erfasst: Die App zeigt 2,38 €, der Automat verlangt 2,50 €, und
niemand hat gesagt, warum. Der Absatz ist keine juristische Vorsorge,
sondern die Beschreibung dessen, was tatsächlich passiert.

**Offen und ausdrücklich nicht entschieden:** ob die *App* den
Automatenpreis zusätzlich ausweisen muss, wenn sie den Kundenpreis zeigt.
Die Funktion `kundenpreis()` liefert beides und die Herleitung dazu; die
Frage ist, ob die Oberfläche beides zeigt. Das ist eine
Gestaltungsentscheidung und gehört nach Spur 1 (`CLAUDE.md`), also über
einen Lovable-Entwurf — nicht in diesen Text.

---

### B3 · `datenschutz.md` — Abschnitt 3 „Was wir ausdrücklich nicht tun"

**Vorgeschlagener Wortlaut (ersetzt den Spiegelstrich „Keine
Zahlungsdaten"):**

> * **Keine Kartendaten.** Wir speichern weder Kartennummer noch IBAN noch
>   Zahlungstoken. Die Schnittstelle, über die uns der Automat seine
>   Vorgänge meldet, entfernt solche Angaben, bevor überhaupt etwas
>   gespeichert wird — auch dann, wenn sie in einem Feld stehen, das wir
>   nicht erwartet haben. Gespeichert wird die Zahlungsart als Kategorie
>   (bar, EC-Karte, Kreditkarte, kontaktlos, andere), der Betrag, der
>   Zeitpunkt, der Automat und eine Vorgangsnummer des Terminals.

**Begründung.** Der bisherige Satzteil „und binden keinen
Zahlungsdienstleister ein" entfällt hier ersatzlos; der Empfänger
CleverPay wird stattdessen in Abschnitt 4 genannt, wo Empfänger
hingehören. Ihn an zwei Stellen zu behandeln, erzeugt genau den
Widerspruch, der jetzt korrigiert wird.

Der Satz zur Feldbereinigung beschreibt etwas, das tatsächlich
implementiert und geprüft ist (`entferneKartendaten()` in
`supabase/functions/terminal-webhook/adapter.ts`, Tests in
`adapter_test.ts`). Er wird nur dann so aufgenommen, wenn diese Prüfung
bis zur Inbetriebnahme auch **ausgeführt** wurde — Deno ist in der
jetzigen Umgebung nicht installiert, der Nachweis steht aus.

---

### B4 · `datenschutz.md` — Abschnitt 4 „Wer Ihre Daten zu sehen bekommt"

**Vorgeschlagener neuer Eintrag in der Empfängerliste:**

> * **CleverPay / Automatenland** (Zahlungsabwicklung am Automaten).
>   Übermittelt werden Betrag, Zeitpunkt, Terminal und die
>   Vorgangsnummer — von Ihrem Konto bei uns erfährt der Dienst nichts,
>   weil das Terminal es nicht kennt. Die Übermittlung erfolgt vom
>   Terminal aus, nicht von uns.

**Ausdrücklich nicht entschieden — und das ist der wichtigste Punkt in
diesem Dokument:** Es ist **offen, ob CleverPay Auftragsverarbeiter nach
Art. 28 DSGVO oder eigener Verantwortlicher** ist. Bei Kartenzahlung
spricht einiges dafür, dass der Zahlungsdienst eigenverantwortlich
handelt, weil er eigenen aufsichtsrechtlichen Pflichten unterliegt; das
ist aber keine Aussage, die ich ohne den tatsächlichen Vertrag treffen
kann.

Davon hängt ab:

* ob ein Auftragsverarbeitungsvertrag geschlossen werden muss,
* welche Rechtsgrundlage in der Erklärung steht,
* was im Verzeichnis der Verarbeitungstätigkeiten einzutragen ist,
* und ob überhaupt „Empfänger" die richtige Bezeichnung ist.

Es ist ebenfalls offen, **wer Vertragspartner** ist — Automatenland, CCV
oder ein dritter Zahlungsdienstleister (offene Frage 6 in
`docs/architektur/AUTOMAT-BEZAHLUNG-UND-PREISE.md`). Solange das nicht
geklärt ist, ist der Wortlaut oben ein Platzhalter mit dem richtigen
Inhalt, aber möglicherweise der falschen Rolle.

**Das ist nicht durch Formulieren lösbar.** Es braucht den Vertrag und,
wenn der ihn nicht eindeutig beantwortet, eine fachliche Prüfung.
Verantwortlich: Philipp. Frist: vor der ersten Kartenzahlung.

---

### B5 · `datenschutz.md` — Abschnitt 1, Kaufdaten und ein neuer Buchstabe

Der bestehende Buchstabe **c) Kaufdaten** bleibt inhaltlich richtig; er
nennt Produkte, Menge, Preis, Zeitpunkt, Automat und Zahlungsart. Er
ergänzt sich um die Vorgangsnummer des Terminals.

**Neu vorgeschlagen — Buchstabe zur app-geführten Freigabe:**

> **x) Freigabecodes für den app-geführten Kauf**
>
> Wenn Sie ein Produkt in der App auswählen, um Ihren Dauerrabatt oder
> einen Gutschein einzulösen, erzeugen wir einen Freigabecode. Wir
> speichern dazu: Ihr Konto, den Automaten, das Produkt, den Betrag und
> die Herleitung des Preises — also welcher Abschlag aus welchem Grund
> eingerechnet wurde.
>
> **Den Code selbst speichern wir nicht**, sondern nur einen Prüfwert,
> aus dem er sich nicht zurückrechnen lässt. Der Code gilt drei Minuten
> und nur einmal; danach ist er wertlos.
>
> Zweck: Einlösung Ihres Rabatts am Automaten und die Nachvollziehbarkeit,
> warum ein Preis zustande kam.
> Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.

**Begründung für „Herleitung des Preises".** Das Feld `herleitung` ist
kein technisches Detail, das man verschweigen darf: Es enthält die
Begründung einer Preisentscheidung, die diese Person betrifft. Es
gehört genannt, gerade weil es dem Kunden nützt — es ist der Nachweis,
dass der Rabatt gewährt wurde.

---

### B6 · `datenschutz.md` — Abschnitt 6 „Wie lange wir speichern"

**Offen und noch nicht geschrieben:** Für `vend_freigaben` fehlt die
Zuordnung im Löschkonzept. Die Tabelle ist ein Zwitter:

* Eine **nicht eingelöste, abgelaufene** Freigabe ist kein Beleg. Es hat
  kein Kauf stattgefunden. Sie unterliegt keiner Aufbewahrungspflicht und
  ist zu löschen — Vorschlag: nach 30 Tagen, weil länger kein Zweck
  besteht.
* Eine **eingelöste** Freigabe ist der Grund, warum ein bestimmter Preis
  berechnet wurde. Sie hängt damit an einem buchungsrelevanten Vorgang
  und fällt unter §§ 145–147 AO. Sie ist bei einem Löschverlangen nicht
  zu löschen, sondern nach Art. 18 DSGVO **zu sperren**.

Das ist die Normkollision aus `boerdesnack24-legal-impact` in
konkreter Form. Der bestehende Löschprozess (CUST-008) kennt die Tabelle
noch nicht; sie muss dort eingetragen werden, mit dem Sperrkennzeichen,
das in *jeder* Abfrage wirkt — nicht nur in der Kunden-App.

**Das ist eine technische Anpassung, keine Textanpassung.** Sie steht
hier, weil der Text erst geschrieben werden kann, wenn der Mechanismus
existiert. Ein Satz in der Datenschutzerklärung, der eine Löschfrist
verspricht, die niemand ausführt, ist schlimmer als gar kein Satz.

---

### B7 · Was sich **nicht** ändert

Damit die Prüfung vollständig ist, auch das ausdrücklich:

* **`impressum.md`** — unberührt. Es ändert sich weder Anbieter noch
  Vertretung noch Zuständigkeit.
* **`cookies.md`** — unberührt. Das Terminal setzt keine Cookies, und die
  App bekommt durch diese Änderung keine dazu.
* **`barrierefreiheit.md`** — unberührt durch die Zahlungsabwicklung. Die
  Preisanzeige in der App ist eine Oberfläche und wird über Spur 1
  entworfen; erst dann ist sie zu bewerten.
* **KI-Kennzeichnung.** Die MHD-Preisstufen (10 Tage → 20 %, 3 Tage →
  40 %) sind eine feste Rechenregel, kein KI-System nach Art. 3 EU AI Act
  — dieselbe Einordnung wie beim regelbasierten Chatbot. Nach `CLAUDE.md`
  ist die Preisanzeige aber trotzdem **algorithmisch erzeugter Inhalt im
  Kundenbereich** und bekommt einen Chip. Vorschlag für die Beschriftung:
  **„Automatisch"**, nicht „KI" — und ein entsprechender Absatz im
  `AiInfoScreen` unter „Was wird eingesetzt?". Der Chip wird gesetzt,
  wenn der Bildschirm gebaut wird; heute gibt es ihn noch nicht.
* **Jugendschutz.** Snacks sind keine altersbeschränkte Ware. Die
  Altersschranke betrifft weiterhin nur das kostenpflichtige Abo und
  bleibt serverseitig, wo sie ist.

---

## Reihenfolge

1. **Jetzt:** A1 entscheiden (Streichung Lifetime) — wirkt sofort,
   unabhängig von allem anderen. Offene Frage § 356 Abs. 5 BGB als
   eigenen Punkt führen.
2. **Vor dem ersten Automatenkauf:** Vertragslage CleverPay klären
   (B4) — das ist die Angabe mit der längsten Vorlaufzeit.
3. **Vor der ersten Kartenzahlung:** A2 austauschen, B1–B5 einsetzen.
4. **Vor B6:** Sperrmechanismus für `vend_freigaben` bauen, dann erst den
   Text schreiben.

Keine dieser Zeilen ist erledigt. Der Stand in `docs/COMPLIANCE.md` ist
deshalb 🟡 GELB, und das ist ein Zwischenstatus, kein Abschluss.
