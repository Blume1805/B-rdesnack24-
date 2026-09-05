# Automat gekauft — was vor dem ersten Verkauf passieren muss

Angelegt am 05.09.2026 · Auslöser: der erste gekaufte Automat

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

### 2. Nayax-Anbindung scharfstellen
- [ ] Secret `NAYAX_WEBHOOK_SECRET` in Supabase anlegen
      (Edge Functions → Secrets). **Am 05.09.2026 nicht vorhanden.**
      Ohne dieses Secret antwortet die Function mit `500` — bewusst, damit
      sie nicht ungeprüfte Daten annimmt.
- [ ] `nayax-webhook` ausrollen: Tag `functions-deploy-nayax` pushen
      (siehe `.github/workflows/deploy-functions.yaml`)
- [ ] Die Webhook-Adresse bei Nayax hinterlegen, mit demselben Secret
- [ ] **Nachweis:** einen Testverkauf auslösen und prüfen, dass er in
      `nayax_sales` UND in `purchases` ankommt. Eine Function, die nur
      „deployed" ist, ist kein Beleg dafür, dass Daten fließen.

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
