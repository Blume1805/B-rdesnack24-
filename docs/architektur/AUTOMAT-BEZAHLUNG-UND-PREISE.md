# Bezahlung am Automaten und dynamische Preise

Stand 14.09.2026 · Anlass: Philipp hat das **CCV IM30** als Bezahlterminal
bestimmt.

---

## Zuerst: die Pflichtliste

**Sobald der erste Automat gekauft ist, gilt
`docs/betrieb/AUTOMAT-INBETRIEBNAHME.md`.** Ein Bezahlterminal auszuwählen
heißt, dass der Kauf bevorsteht oder schon erfolgt ist — das ist der
Anlass, an dem `CLAUDE.md` die Erinnerung verlangt.

Der Grund ist kein Formalismus: Aufzeichnungen nach §§ 145–147 AO lassen
sich nachträglich nicht herstellen. Fehlt die Anbindung beim ersten
Verkauf, kommt keine Fehlermeldung — es kommen nur keine Umsätze.

**Die Liste ist mit diesem Schritt veraltet.** Sie beschreibt durchgehend
Nayax. Sie ist am 14.09.2026 auf das neue Terminal umgeschrieben worden;
was sich geändert hat, steht dort im Kopf.

---

## Der Befund, der alles andere bestimmt

**Ein Kartenterminal weiß nicht, wer davorsteht.** Es kennt einen Betrag
und gibt eine Zahlung frei. Es kennt kein Konto, kein Abo, keinen Coupon —
und es darf sie auch nicht kennen: Die einzige Kennung, die eine Karte
mitbringt, ist die Kartennummer, und wer die liest oder speichert, fällt
unter PCI DSS. Für einen Betrieb mit einer Handvoll Automaten ist das kein
gangbarer Weg.

Daraus folgt eine Trennung, die durch die ganze Umsetzung geht:

### Zwei Preisarten

| | **Automatenpreis** | **Kundenpreis** |
|---|---|---|
| Hängt an | Produkt | Produkt **und** Konto |
| Enthält | Grundpreis, MHD-Abschlag | zusätzlich Dauerrabatt, Status, Coupon |
| Gilt | für jeden am Gerät | nur für den angemeldeten Kunden |
| Funktion | `public.automatenpreis()` | `public.kundenpreis()` |

Der **MHD-Abschlag** funktioniert am Terminal, weil er am Produkt hängt:
Was kurz vor dem Ablauf steht, kostet für alle weniger. Der **Dauerrabatt
von 5 %** funktioniert dort nicht, weil er am Abo hängt.

### Zwei Kaufwege

**Weg A — anonym am Terminal.** Karte vorhalten, voller Automatenpreis
(MHD-Abschlag inbegriffen). Kein Dauerrabatt, kein Coupon, keine
Zuordnung zum Konto. Das ist der Normalfall und muss ohne App vollständig
funktionieren.

**Weg B — über die App.** Der Kunde wählt in der App, der Server rechnet
den Kundenpreis, legt eine **Vend-Freigabe** an und zeigt einen
Einmalcode. Der Automat löst ihn ein und zieht genau den freigegebenen
Betrag.

**Weg B ist der einzige, auf dem ein kundenbezogener Rabatt an einen
Automaten gelangt.** Wer Dauerrabatt und Coupons am Automaten haben will,
braucht diesen Weg — es gibt keinen dritten.

Das ist eine Entscheidung über die Kaufmechanik, nicht über Technik, und
sie gehört Philipp. Gebaut ist Weg B so, dass er ohne ihn nicht schadet:
Ohne App läuft alles über Weg A weiter.

---

## Was gebaut und nachgewiesen ist

Migration `20260914090000_automat_bezahlung_und_dynamische_preise.sql`,
Nachweis `scripts/pruefumgebung/105_automat_bezahlung.sql`.

### Dynamische Preise

* `mhd_preisstufen` — der Abschlag steht als **Tabelle**, nicht als
  Konstante im Code. Er ist eine kaufmännische Entscheidung, die sich
  ändert, und jede Änderung bewegt einen ausgewiesenen Preis (PAngV).
  Voreinstellung: 10 Tage → 20 %, 3 Tage → 40 %.
* Es greift die **strengste** zutreffende Stufe, nicht die erstbeste. Bei
  zwei Resttagen gilt die 3-Tage-Stufe.
* **Der Prozentsatz wird gerundet, bevor er angewandt wird** — dieselbe
  Regel wie bei den Kombiangeboten. Angezeigte und gerechnete Zahl müssen
  dieselbe sein, sonst ist die Rechnung nicht prüfbar.
* Maßgeblich ist das **kürzeste MHD im Bestand dieses Automaten**, nicht
  ein Produktdurchschnitt.

Nachgewiesen (A1–A4): ohne MHD 2,50 € · 20 Tage 2,50 € · 7 Tage 2,00 €
(20 %) · 2 Tage 1,50 € (40 %).

### Kein Datenverlust

* **Rohdaten zuerst, Verbuchung danach.** Der Webhook schreibt das
  Ereignis unverändert und quittiert. Erst danach werden Kauf und Bestand
  gebucht. Scheitert das, steht der Fehler am Ereignis und der Satz taucht
  in `terminal_ereignisse_offen()` auf. Der Umsatz ist nicht weg.
* **Idempotenz.** Jede Nachricht trägt einen Schlüssel; eine doppelte
  Zustellung wird angenommen und quittiert, aber nicht doppelt gebucht.
* **Lückenprüfung.** `terminal_luecken()` liest die laufende Nummer des
  Herstellers. Eine Nachricht, die nie ankommt, fehlt sonst unauffällig —
  das ist der Verlustfall, den niemand bemerkt.

Nachgewiesen (B4, E1): doppelte Zustellung abgewiesen; nach 1, 2, 3, 6
meldet die Lückenprüfung „fehlt 4 bis 5".

### Kein unbemerkter Angriff

* **Kartendaten erreichen uns nie.** `entferneKartendaten()` wirft PAN,
  Ablaufdatum, Prüfziffer, Inhabername und Magnetspur weg, bevor etwas
  gespeichert wird — über eine Sperrliste **und** eine Luhn-geprüfte
  Mustererkennung, falls der Hersteller ein neues Feld erfindet.
* **Signatur mit Zeitstempel.** HMAC-SHA256 über Zeitstempel und
  Rohtext, zeitkonstant verglichen, älter als fünf Minuten wird
  abgewiesen. Ohne den Zeitstempel ließe sich eine mitgeschnittene
  Nachricht beliebig oft erneut senden.
* **Rohereignisse sind append-only.** Löschen ist gesperrt, Ändern ist
  gesperrt; änderbar sind allein die beiden Verarbeitungsfelder.
* **Hashkette.** Jeder Satz trägt den Hash seines Vorgängers. Wer mit
  Datenbankrechten den Trigger abschaltet und einen Betrag fälscht, wird
  nicht gehindert — aber `ereigniskette_pruefen()` nennt genau den Satz.
* **Freigaben sind einmalig.** Der Code steht nur als Hash in der
  Datenbank, gilt drei Minuten, für einen Automaten, genau einmal.
* **Rohereignisse sind über PostgREST für niemanden lesbar**, auch nicht
  für die Verwaltung. Der Zugang läuft über zwei Funktionen, die zeigen,
  was gebraucht wird.

Nachgewiesen (B1–B3, C0–C2, D1–D4): Ändern und Löschen abgewiesen,
Verarbeitungsvermerk erlaubt, erzwungene Fälschung von der Hashkette
punktgenau erkannt, Freigabe ein zweites Mal / abgelaufen / am fremden
Automaten jeweils abgewiesen, Prüffunktionen ohne Berechtigung stumm.

### Echtzeit in die Apps

Über die Supabase-Realtime-Publikation: `vend_freigaben` (der Kunde sieht
seine Freigabe eingelöst werden), `machine_slots` und `mhd_preisstufen`
(Preisänderungen). Alles geht durch RLS — ein Kunde sieht nur die eigenen
Freigaben.

**Die Apps hängen an der Datenbank, nicht am Terminal.** Das Terminal
spricht mit genau einer Edge Function, sonst mit nichts.

---

## Was die Produktseite klärt (Nachtrag 14.09.2026)

Philipp hat Bildschirmfotos der Seite geschickt. Damit sind zwei der vier
Fragen beantwortet, eine hat einen anderen Adressaten bekommen, und ein
Punkt ist neu dazugekommen.

### Der Gesprächspartner heißt CleverMetrics, nicht CCV

> „Das CCV IM30 ist ein Android-basiertes Kartenterminal, das bei uns mit
> **CleverMetrics** vorinstalliert ausgeliefert wird — unserer App für
> Kartenzahlung, Telemetrie, Altersverifizierung und
> Automaten-Management. **Ohne App ist das IM30 ein leeres Terminal.**"

Das Gerät kommt von CCV, die Software von Automatenland. Wer uns Daten
schicken würde, ist **CleverMetrics** — dort liegt auch das Dashboard mit
den Umsätzen. Der Adapter heißt deshalb jetzt `ausCleverMetrics`, und die
Tabelle `terminals` kennt den Hersteller `clevermetrics`; das Gerät steht
daneben in `modell`.

### Die Zahlarten sind geklärt: nur Karte

NFC, Chip (EMV), Magnetstreifen, Apple Pay, Google Pay, Girocard, Visa,
Mastercard. **Kein Bargeld.** Dazu **PCI PTS 6.x zertifiziert** — die
Kartendaten bleiben im Gerät, was unseren Grundsatz bestätigt.

**Für § 146a AO heißt das:** Das Terminal löst die Pflicht nicht aus. Die
Frage verschiebt sich auf den **Automaten selbst** — hat der einen
Münz- oder Scheinprüfer? Ein Warenautomat steht zwar auf der
Negativliste des § 1 KassenSichV, aber die Prüfung gehört an den
konkreten Sachverhalt, nicht an eine Faustregel.

### MDB/DEX bestätigt die Preisarchitektur

Schnittstellen: **USB, RS232, Ethernet, MDB/DEX (je nach Konfiguration)**.

MDB ist der Bus zwischen Automatenrechner und Peripherie. Über ihn
verlangt **der Automat** einen Betrag, und das Terminal zieht ihn ein.
Das heißt: **Der MHD-Abschlag muss im Automaten gesetzt werden**, nicht
im Terminal — genau die Trennung, die oben als „Automatenpreis" steht.
Wie der neue Preis dorthin kommt, ist die verbliebene Frage: über die
Automaten-Management-Funktion von CleverMetrics oder von Hand am Gerät.

### Neu und vorher übersehen: Umsatz ist nicht Auszahlung

> „dein Geld kommt per **täglicher Auszahlung** statt Wochen später"
> (CleverPay)

Ein Zahlungsdienstleister zahlt nicht den vollen Umsatz aus — Disagio und
Transaktionsgebühren gehen ab. Damit stehen drei Zahlen nebeneinander,
die nicht gleich sind: die Summe der Verkäufe (Umsatz, § 22 UStG), der
Betrag auf dem Konto (Auszahlung) und die Differenz (Aufwand, eigene
Buchung).

**Wer nur die Auszahlung bucht, verkürzt den Umsatz und zieht die Gebühr
nicht als Betriebsausgabe.** Beides ist falsch, und beides fällt erst bei
der Betriebsprüfung auf. Dafür gibt es jetzt `terminal_auszahlungen` mit
einer Bedingung, die den Satz gar nicht erst annimmt, wenn die Rechnung
nicht aufgeht, dazu `auszahlungen_abgleich()` für die Tage, an denen
gemeldeter und ausgewiesener Umsatz auseinandergehen.

### Was Philipp bei **Automatenland** klären muss

Alle verbliebenen Fragen gehen an Automatenland, nicht an CCV — die
Software ist deren Werk.

1. **Gibt es eine Schnittstelle für Dritte?** Bekannt ist, dass es ein
   Cloud-Dashboard mit Echtzeitdaten gibt. Nicht bekannt ist, ob man an
   diese Daten **programmatisch** herankommt (Webhook, API, Export).
   **Ohne sie sehen unsere Apps keine Verkäufe** — dann bleibt nur ein
   manueller Export, und „Echtzeit in die App" fällt aus. Das ist die
   Frage, die vor der Bestellung gestellt gehört, nicht danach.
2. **Nachrichtenformat**, falls es eine Schnittstelle gibt: Feldnamen,
   Cent oder Euro, laufende Nummer je Terminal.
3. **Lässt sich ein Referenzfeld durchreichen** (Kuponcode, QR am
   Terminaldisplay)? Das Terminal ist Android-basiert, technisch wäre es
   möglich — aber es ist CleverMetrics' App, nicht unsere. Ohne dieses
   Feld gibt es Weg B nicht und damit **keinen Dauerrabatt am Automaten**.
4. **Wie kommen Preise in den Automaten?** Kann CleverMetrics die
   Preisliste setzen, oder geht das nur am Gerät? Davon hängt ab, ob der
   MHD-Abschlag automatisch läuft oder von Hand nachgezogen werden muss.
5. **CleverPay:** Welche Gebühren, welches Abrechnungsformat, gibt es
   einen maschinenlesbaren Auszahlungsbeleg?
6. **Wer ist Vertragspartner** für die Zahlungsabwicklung — Automatenland,
   CCV oder ein dritter Zahlungsdienstleister? Davon hängen
   Auftragsverarbeitung und Datenschutzerklärung ab.

Bis zu Punkt 1 und 2 ist die Anbindung **nicht ausrollbar**. Alles
darunter — Preise, Buchungen, Bestände, Auszahlungsabstimmung,
Sicherheit — steht und ist geprüft.

---

## Rechtliche Würdigung

### Sachverhalt

Ein Bezahlterminal nimmt bargeldlose Zahlungen an einem Warenautomaten
entgegen. Verkaufsdaten laufen in die Buchführung. Preise verändern sich
nach Restlaufzeit des Produkts und nach Kundenmerkmalen.

### Ergebnis je Bereich

| Bereich | Geprüft | Ergebnis | Anpassung nötig |
|---|---|---|---|
| Steuer und Buchführung (§§ 145–147 AO, GoBD) | ✓ | Aufzeichnungs- und Aufbewahrungspflicht greift ab dem ersten Verkauf. Unveränderbarkeit über Hashkette, Vollständigkeit über Lückenprüfung. | **Ja** — Verfahrensdokumentation fortschreiben |
| § 146a AO / KassenSichV | ✓ | **Das Terminal nimmt nur Karte** (Produktseite 14.09.2026), löst die Pflicht also nicht aus. Warenautomaten stehen zudem auf der Negativliste des § 1 KassenSichV. Offen bleibt allein, ob der **Automat selbst** Bargeld annimmt. | **Teilweise geklärt** — Rest hängt am Automaten, nicht am Terminal |
| Umsatzsteuer (§ 22 UStG, § 14 UStG, § 33 UStDV) | ✓ | Je Position mit dem Steuersatz des Produkts. Kleinbetragsregel greift bei Automatenverkäufen regelmäßig. | Nein — Rechenweg steht |
| Preisangaben (PAngV) | ✓ | Der ausgewiesene Preis muss der geforderte sein. Deshalb kommen alle Preise vom Server, und der Prozentsatz wird vor der Anwendung gerundet. | Nein |
| UWG (§ 5) | ✓ | Ein durchgestrichener Preis ohne echte Ersparnis wäre irreführend. Der MHD-Abschlag ist eine echte Reduzierung. | Nein |
| DSGVO | ✓ | Weg A erzeugt **keine** personenbezogenen Daten — das ist ein Vorzug, kein Mangel. Weg B verknüpft Kauf und Konto; Rechtsgrundlage ist die Vertragserfüllung (Art. 6 Abs. 1 lit. b). | **Ja** — Datenschutzerklärung um die Terminalverarbeitung ergänzen |
| Auftragsverarbeitung (Art. 28) | ✓ | CCV verarbeitet Zahlungsdaten. Ob Auftragsverarbeitung oder eigene Verantwortlichkeit, hängt am Vertrag. | **Ja** — Vertrag prüfen, Register ergänzen |
| PCI DSS | ✓ | Wir speichern keine Kartendaten. Das Terminal ist **PCI PTS 6.x zertifiziert**; die Kartendaten bleiben darin. | Nein — solange der Grundsatz hält |
| Zahlungsdiensteaufsicht / Abrechnung | ✓ | CleverPay zahlt täglich aus, abzüglich Gebühren. Umsatz und Auszahlung sind getrennt zu buchen. | **Ja** — Gebührenkonto und Abstimmung einrichten |
| Lebensmittelrecht (LMIV) | ✓ | Der MHD-Abschlag ändert nichts an der Kennzeichnung. **Abgelaufene Ware darf nicht verkauft werden** — der Abschlag ist kein Ersatz für Aussortieren. | Nein, aber betrieblich zu regeln |
| Jugendschutz | ✓ | Im Sortiment sind keine altersbeschränkten Waren. | Nein |
| Verpackung und Pfand | ✓ | Unberührt. | Nein |
| Barrierefreiheit | ✓ | Das Terminal ist ein fremdes Gerät. Die App-Seite folgt den bestehenden Vorgaben. | Nein |
| EU AI Act | ✓ | Der MHD-Abschlag ist eine Regel, kein KI-System. In der App gehört der Chip **„Automatisch"** daran, nicht „KI". | **Ja** — Chip an der Preisanzeige |
| Store-Regeln | ✓ | Der Kauf am Automaten ist eine Ware, keine digitale Leistung. Keine Store-Abgabe. | Nein |

### Handlungsbedarf

- [ ] **Verfahrensdokumentation** fortschreiben — Philipp, vor dem ersten Verkauf
- [ ] **Nimmt der Automat selbst Bargeld?** (§ 146a AO) — Philipp, mit der Bestellung des Automaten. Das Terminal tut es nicht.
- [ ] **Schnittstelle von CleverMetrics klären** — vor der Bestellung, nicht danach
- [ ] **Gebührenkonto** für die CleverPay-Abzüge anlegen und Abstimmung einrichten
- [ ] **Datenschutzerklärung** um Terminal und Zahlungsdienstleister ergänzen
- [ ] **Vertrag prüfen** — und zuerst klären, mit wem: Automatenland, CCV oder ein dritter Zahlungsdienstleister
- [ ] **Chip „Automatisch"** an die Preisanzeige, sobald sie in der App steht
- [ ] Betrieblich: **abgelaufene Ware aussortieren**, nicht bepreisen

### Status

🟡 — Die Datenbank- und Sicherheitsschicht ist grün und nachgewiesen. Die
Anbindung an das Gerät bleibt gelb, bis die Integrationsdokumentation
vorliegt. Die sechs Punkte oben sind offen und benannt.
