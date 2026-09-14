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

## Was noch fehlt — und warum

**Die Feldbenennung des CCV IM30 ist nicht belegt.** Die verlinkte
Produktseite war aus der Entwicklungsumgebung nicht abrufbar
(Netzrichtlinie), und eine Integrationsdokumentation liegt nicht vor. Der
Adapter in `supabase/functions/terminal-webhook/adapter.ts` akzeptiert
deshalb mehrere gebräuchliche Schreibweisen und **erfindet im Zweifel
keinen Verkauf**, sondern stuft das Ereignis als Lebenszeichen ein.

**Was Philipp bei CCV oder Automatenland besorgen muss:**

1. Die **Integrationsdokumentation** des IM30: Nachrichtenformat,
   Feldnamen, ob Beträge in Cent oder Euro kommen, ob eine laufende
   Nummer mitgeschickt wird.
2. Die Antwort auf die Frage, ob das Terminal **überhaupt Webhooks
   sendet** — oder ob die Verkaufsdaten über den Automatenrechner (MDB)
   oder eine Portalschnittstelle von CCV kommen. Davon hängt ab, ob die
   Edge Function der richtige Weg ist.
3. Ob ein **Referenzfeld** vom Automaten an das Terminal durchgereicht
   werden kann. Ohne dieses Feld gibt es Weg B nicht, und damit keinen
   Dauerrabatt am Automaten.
4. Die **Zahlarten**: Nimmt das Gerät nur Karte, oder steht daneben eine
   Bargeldannahme? Das entscheidet die Frage nach § 146a AO (siehe unten).

Bis dahin ist die Anbindung **nicht ausrollbar**. Alles darunter —
Preise, Buchungen, Bestände, Sicherheit — steht und ist geprüft.

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
| § 146a AO / KassenSichV | ✓ | Waren- und Dienstleistungsautomaten stehen auf der Negativliste des § 1 KassenSichV. Die Pflicht entsteht **nicht aus dem Automaten selbst**. Zu prüfen ist, ob **daneben** ein Kassensystem Barzahlungen erfasst. | **Offen** — hängt an der Zahlart (Punkt 4 oben) |
| Umsatzsteuer (§ 22 UStG, § 14 UStG, § 33 UStDV) | ✓ | Je Position mit dem Steuersatz des Produkts. Kleinbetragsregel greift bei Automatenverkäufen regelmäßig. | Nein — Rechenweg steht |
| Preisangaben (PAngV) | ✓ | Der ausgewiesene Preis muss der geforderte sein. Deshalb kommen alle Preise vom Server, und der Prozentsatz wird vor der Anwendung gerundet. | Nein |
| UWG (§ 5) | ✓ | Ein durchgestrichener Preis ohne echte Ersparnis wäre irreführend. Der MHD-Abschlag ist eine echte Reduzierung. | Nein |
| DSGVO | ✓ | Weg A erzeugt **keine** personenbezogenen Daten — das ist ein Vorzug, kein Mangel. Weg B verknüpft Kauf und Konto; Rechtsgrundlage ist die Vertragserfüllung (Art. 6 Abs. 1 lit. b). | **Ja** — Datenschutzerklärung um die Terminalverarbeitung ergänzen |
| Auftragsverarbeitung (Art. 28) | ✓ | CCV verarbeitet Zahlungsdaten. Ob Auftragsverarbeitung oder eigene Verantwortlichkeit, hängt am Vertrag. | **Ja** — Vertrag prüfen, Register ergänzen |
| PCI DSS | ✓ | Wir speichern keine Kartendaten. Die Verantwortung liegt beim Terminalbetreiber. | Nein — solange der Grundsatz hält |
| Lebensmittelrecht (LMIV) | ✓ | Der MHD-Abschlag ändert nichts an der Kennzeichnung. **Abgelaufene Ware darf nicht verkauft werden** — der Abschlag ist kein Ersatz für Aussortieren. | Nein, aber betrieblich zu regeln |
| Jugendschutz | ✓ | Im Sortiment sind keine altersbeschränkten Waren. | Nein |
| Verpackung und Pfand | ✓ | Unberührt. | Nein |
| Barrierefreiheit | ✓ | Das Terminal ist ein fremdes Gerät. Die App-Seite folgt den bestehenden Vorgaben. | Nein |
| EU AI Act | ✓ | Der MHD-Abschlag ist eine Regel, kein KI-System. In der App gehört der Chip **„Automatisch"** daran, nicht „KI". | **Ja** — Chip an der Preisanzeige |
| Store-Regeln | ✓ | Der Kauf am Automaten ist eine Ware, keine digitale Leistung. Keine Store-Abgabe. | Nein |

### Handlungsbedarf

- [ ] **Verfahrensdokumentation** fortschreiben — Philipp, vor dem ersten Verkauf
- [ ] **Zahlart klären** (§ 146a AO) — Philipp, mit der Bestellung
- [ ] **Datenschutzerklärung** um Terminal und Zahlungsdienstleister ergänzen
- [ ] **Vertrag mit CCV** auf Auftragsverarbeitung prüfen, Register ergänzen
- [ ] **Chip „Automatisch"** an die Preisanzeige, sobald sie in der App steht
- [ ] Betrieblich: **abgelaufene Ware aussortieren**, nicht bepreisen

### Status

🟡 — Die Datenbank- und Sicherheitsschicht ist grün und nachgewiesen. Die
Anbindung an das Gerät bleibt gelb, bis die Integrationsdokumentation
vorliegt. Die sechs Punkte oben sind offen und benannt.
