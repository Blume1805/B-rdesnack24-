# Automat gekauft — was vor dem ersten Verkauf passieren muss

Angelegt am 05.09.2026 · Auslöser: der erste gekaufte Automat
**Überarbeitet am 14.09.2026: das Bezahlsystem ist CCV, nicht Nayax.**

Philipp hat am 14.09.2026 das **CCV IM30** als Bezahlterminal bestimmt.
Diese Liste beschrieb bis dahin durchgehend Nayax. Was sich ändert:

* Nicht mehr `nayax-webhook`, sondern **`terminal-webhook`** — dieselbe
  Aufgabe, aber herstellerunabhängig gebaut (`docs/architektur/AUTOMAT-BEZAHLUNG-UND-PREISE.md`).
* Nicht mehr `NAYAX_WEBHOOK_SECRET`, sondern **`TERMINAL_WEBHOOK_SECRET`**.
* Der Automat bekommt einen Eintrag in der neuen Tabelle **`terminals`**;
  die alte Spalte `machines.nayax_terminal_id` bleibt nur für Altbestände.
* **Neu und zwingend vor dem ersten Verkauf:** Die
  Integrationsdokumentation des IM30 muss vorliegen. Ohne sie ist die
  Feldbenennung geraten, und geratene Felder buchen falsche Beträge.

## Warum diese Liste existiert

Am 05.09.2026 hat der Gesamtaudit gezeigt: Der Webhook, über den
Automatenumsätze in die Datenbank laufen (`nayax-webhook`), liegt zwar im
Repository, ist aber **nicht ausgerollt**. Das war zu diesem Zeitpunkt
richtig so — es gab keine Automaten. Ab dem ersten Automaten ist es falsch,
und der Fehler fällt nicht von selbst auf: Es kommt keine Fehlermeldung,
es kommen nur keine Umsätze.

Aufzeichnungen nach §§ 145–147 AO lassen sich nachträglich nicht
herstellen. Deshalb steht diese Liste **vor** dem ersten Verkauf, nicht
danach.

## Reihenfolge

### 1. Automat und Standort anlegen
- [ ] Standort in `locations` (Adresse, Öffnungszeiten, Ansprechpartner)
- [ ] Automat in `machines` (Bezeichnung, Code, Standortzuordnung, Status)
- [ ] Fächer in `machine_slots` (Produkt je Fach, Kapazität)
- [ ] Erstbefüllung als Zugang in `inventory_movements` erfassen —
      **nicht** als bloßen Bestandswert. Ohne Bewegung fehlt der FIFO-Lauf
      die Grundlage.

### 2. Terminal-Anbindung scharfstellen (CCV IM30)

**Zuerst, sonst ist alles Weitere geraten:**
- [ ] Integrationsdokumentation des IM30 bei CCV oder Automatenland
      anfordern: Nachrichtenformat, Feldnamen, Cent oder Euro, laufende
      Nummer
- [ ] Klären, ob das Terminal **überhaupt Webhooks sendet** — oder ob die
      Daten über den Automatenrechner (MDB) oder ein CCV-Portal kommen
- [ ] Klären, ob ein **Referenzfeld** vom Automaten zum Terminal
      durchgereicht werden kann. Ohne dieses Feld gibt es keinen
      Dauerrabatt und keine Coupons am Automaten
- [ ] `adapter.ts` auf die echten Feldnamen umstellen und
      `adapter_test.ts` mit einer echten Beispielnachricht ergänzen

**Danach:**
- [ ] Terminal in der Tabelle `terminals` anlegen (Hersteller `ccv`,
      Modell `IM30`, Seriennummer, Kennung, Automatenzuordnung)
- [ ] Secret `TERMINAL_WEBHOOK_SECRET` in Supabase anlegen
      (Edge Functions → Secrets). Ohne dieses Secret antwortet die
      Function mit `500` — bewusst, damit sie nicht ungeprüfte Daten
      annimmt.
- [ ] `terminal-webhook` ausrollen
- [ ] Die Webhook-Adresse bei CCV hinterlegen, mit demselben Secret
- [ ] **Nachweis:** einen Testverkauf auslösen und prüfen, dass er in
      `terminal_ereignisse` ankommt **und** dass
      `terminal_ereignisse_offen()` danach leer ist. Eine Function, die
      nur „deployed" ist, ist kein Beleg dafür, dass Daten fließen.
- [ ] **Gegenprobe:** denselben Testverkauf ein zweites Mal senden. Er
      muss mit `bereits_erfasst` quittiert werden und darf nicht doppelt
      buchen.
- [ ] **Gegenprobe:** eine Nachricht mit falscher Signatur senden. Sie
      muss mit `401` abgewiesen werden.

### 2b. Dynamische Preise einschalten
- [ ] `mhd_preisstufen` prüfen: voreingestellt sind 10 Tage → 20 % und
      3 Tage → 40 %. Das ist eine kaufmännische Entscheidung, keine
      Voreinstellung zum Übernehmen.
- [ ] Entscheiden, ob der **app-geführte Kauf** (Weg B) kommen soll. Nur
      auf diesem Weg gelangen Dauerrabatt und Coupons an einen Automaten.
      Ohne ihn zahlt jeder den Automatenpreis.
- [ ] **Betrieblich:** abgelaufene Ware wird aussortiert, nicht bepreist.
      Der MHD-Abschlag ersetzt keine Sichtkontrolle.

### 3. Bestandsfortschreibung prüfen
- [ ] Nach dem Testverkauf: `bestandsluecken_offen()` aufrufen. Sie muss
      leer sein. Steht dort etwas, hat ein Verkauf den Bestand nicht
      fortgeschrieben.
- [ ] Erste Inventur gegen den rechnerischen Bestand stellen

### 4. Kassen- und Belegpflichten klären
- [ ] Zahlarten des Automaten feststellen (bar / Karte / beides)
- [ ] Bei Barzahlung: prüfen, ob **daneben** ein Kassensystem existiert.
      Waren- und Dienstleistungsautomaten stehen auf der Negativliste des
      § 1 KassenSichV — die Pflicht nach § 146a AO entsteht nicht aus dem
      Automaten selbst. Das ist eine Sachverhaltsfrage, keine
      Standardantwort.
- [ ] Belegausgabe klären (digitaler Beleg über `receipt-pdf` vorhanden)
- [ ] Verfahrensdokumentation fortschreiben — der Ablauf ändert sich mit
      dem ersten Automaten grundlegend

### 5. Push scharfstellen (getrennt zu betrachten)
- [ ] `send-push` ist ebenfalls nicht ausgerollt. Die App registriert
      bereits Gerätekennungen in `device_tokens`, es geht nur nichts
      hinaus. Vor der ersten Benachrichtigung ausrollen und die
      FCM-Zugangsdaten hinterlegen.

## Wer erinnert

`CLAUDE.md` trägt die Regel, dass jede Sitzung an diese Liste erinnert,
sobald Automaten, Standorte, Nayax, Bestand oder Umsätze zur Sprache
kommen — bis in `machines` ein aktiver Automat steht.
