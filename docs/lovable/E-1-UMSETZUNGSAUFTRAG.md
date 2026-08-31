# E-1 — Unternehmensbereich in die Kunden-App integrieren

**Stand 31.08.2026: vorbereitet, Ausführung blockiert.** Die Lovable-Workspace
hat keine Credits mehr (`Your workspace is out of credits`). Der Bauauftrag
unten ist fertig und geprüft; er lässt sich unverändert in Projekt A einfügen,
sobald Credits vorhanden sind.

* Projekt A (Ziel): **BÖRDESNACK Hub**, `d5033021-6dce-4044-8bf6-bb50d80aa8ff`
* Projekt B (löst sich auf): **Bördesnack24 Partner Portal**,
  `35646ee4-142a-4017-bdb2-089951ddcc94`

## Was bereits erledigt ist

1. **API-Vertrag** — `docs/API-UNTERNEHMENSBEREICH.md`. Alle Signaturen,
   Rückgabeschlüssel und Rollengates gegen die Live-Datenbank geprüft.
2. **Projektwissen von Projekt A aktualisiert** (wirkt sofort, kostet keine
   Credits). Es beschrieb sich bisher fälschlich selbst als „Firmenportal" —
   der Text stammte offensichtlich aus Projekt B. Jetzt steht dort, dass
   Projekt A die Kunden-App mit zwei Nutzerbereichen ist, samt der exakten
   RPC-Signaturen und der Regel, dass PostgREST Parameter über den Namen
   bindet.

## Was noch aussteht

3. Den Auftrag unten an Projekt A senden.
4. Ergebnis gegen `docs/API-UNTERNEHMENSBEREICH.md` prüfen (Parameternamen,
   Rollengates, Unterdrückung unter 30, keine gebauten Sperrfunktionen).
5. Projekt B stilllegen — **erst danach**, und nicht löschen, solange der
   Bereich in Projekt A nicht abgenommen ist.

## Warum kein fünfter Reiter

Die untere Leiste ist bewusst vier Reiter plus Kundenkarte in der Mitte
(„Die Mitte ist kein Reiter, sondern eine Handlung", Kommentar in
`bottom-nav.tsx`). Ein fünfter Reiter zerstört diese Anordnung. Für einen
Firmenkunden ist der Unternehmensbereich zudem ein Modus, kein Geschwister
von „Bonus". Deshalb: Einstiegskarte im Profil, dann ein eigener Bereich mit
eigener Unternavigation.

Das weicht von der Skizze in Kapitel 17 des Auditberichts ab, wo fünf
gleichrangige Bereiche vorgeschlagen waren. Die Skizze kannte die bestehende
Navigation noch nicht.

---

## Bauauftrag (unverändert an Projekt A senden)

Baue den Unternehmensbereich als zweiten Nutzerbereich in DIESE App ein. Er existierte bisher als eigenes Lovable-Projekt („Partner Portal"), dessen Datenschicht gegen Parameternamen gebaut war, die es in der Datenbank nicht gibt. Wir ziehen den Bereich hierher und bauen die Datenschicht korrekt neu. Die geprüften Signaturen stehen im Projektwissen, Abschnitt 1. Bitte halte Dich exakt daran.

### Einstieg und Navigation

Die untere Leiste bleibt unverändert bei vier Reitern plus Kundenkarte in der Mitte. Kein fünfter Reiter, das würde das Layout zerstören, und für einen Firmenkunden ist der Bereich ein Modus, kein Geschwister von „Bonus".

Stattdessen: In `/app/profil` erscheint ganz oben eine ruhige Einstiegskarte „Für Unternehmen" mit dem Firmennamen, die nach `/app/unternehmen` führt. Sie wird **nur** gerendert, wenn `my_businesses()` mindestens eine Zeile liefert. Liefert die Funktion ein leeres Array, existiert der ganze Bereich für diese Person nicht, auch die Routen nicht.

Gehören mehrere Firmen zur Person, gehört eine Firmenauswahl in den Bereich (die gewählte Firma in der URL oder im Zustand halten, nicht raten).

### Datenschicht

Eine neue Datei `src/lib/business.ts`, gebaut wie `src/lib/products.ts` und `src/lib/loyalty.ts`: TanStack-Query-Options, der vorhandene Supabase-Client aus `@/lib/supabase`, kein zweiter Client, keine eigene Rollenprüfung neben der Datenbank.

Alle Rückgaben sind `jsonb`, also einfache JS-Objekte oder Arrays, keine Zeilenmengen. Kein `first()`-Auspacken von Arrays, wo die Funktion ein Objekt liefert.

Kein Demo-Fallback und keine Beispieldaten. Ist etwas leer, ist es leer, dann gehört dorthin ein ehrlicher Leerzustand.

### Seiten

**`/app/unternehmen`** — Übersicht. Für Firmenrolle `admin`: `business_dashboard(p_business, p_von, p_bis)`. Zeige `kennzahlen` mit klarer Hierarchie, nicht als vier gleich große Kacheln: „Vom Arbeitgeber getragen" (`arbeitgeber`) ist die wichtigste Zahl, `brutto` und `mitarbeiter` ordnen sich unter, `kaeufe`, `mitglieder_aktiv`, `einladungen_offen`, `standorte` sind Nebenwerte. Zeitraum ist wählbar, Standard ist der laufende Monat.

Für Firmenrolle `member`: kein Dashboard, sondern ein erklärender Zustand („Zahlen und Abrechnung sieht die Administratorin oder der Administrator Ihres Unternehmens"), darunter direkt die Verträge und Kampagnen. Das ist kein Fehler und darf nicht wie einer aussehen.

**`/app/unternehmen/kontoauszug`** — nur `admin`. `business_statement(p_business, p_jahr, p_monat)` mit Monatswahl. `summen` oben, `zeilen` als Tabelle darunter in einem eigenen `overflow-x: auto`-Container. Darunter die Rechnungsläufe aus `business_invoice_runs_list(p_business)`, **nur lesend** mit Statusanzeige. Anfordern und Freigeben sind interne Vorgänge, dafür keine Knöpfe.

**`/app/unternehmen/vertraege`** — `member` genügt. `my_advertising_contracts()`. Liste mit Automat, Standort, Position, Laufzeit, Preis pro Monat, Status. Ist `motiv_freigegeben_am` gesetzt, zeige das als Zustand, sonst „Motiv noch nicht freigegeben".

**`/app/unternehmen/kampagnen`** — `member` genügt. `my_advertising_campaigns()`. Liste mit Name, Welt, Laufzeit, Budget, Status.

**`/app/unternehmen/kampagnen/$id`** — `advertising_campaign_report(p_campaign)`. Bitte hier besonders sorgfältig:
- Ist `aufrufe_unter_mindestzahl` wahr, steht dort „weniger als 30", nicht die Zahl und nicht „0". Dasselbe für jede Zeile in `je_anlass` mit `ausgabe_unter_mindestzahl` und `einloesung_unter_mindestzahl`.
- Erkläre die Unterdrückung einmal sichtbar in einem Satz, damit sie nicht wie ein Fehler wirkt.
- An `aufrufe` gehört der Hinweis, dass es sich um einen technisch gezählten Rohwert ohne Bereinigung handelt.

**`/app/unternehmen/stammdaten`** — nur `admin`, **reine Anzeige**. Firmenangaben aus `business_statement().business` (`name`, `anschrift`, `steuernummer`, `ust_id`) und die zugeordneten Standorte aus `business_locations_list(p_business)`. Dort **ausschließlich** Zeilen mit `zugeordnet === true` rendern; `fremd` und `fremde_firma` niemals anzeigen, das sind Daten anderer Firmen. Statt eines Formulars ein Satz, dass Vertragsdaten bei Bördesnack24 gepflegt werden, mit Verweis auf die Kontaktseite.

**`/app/unternehmen/kontakt`** — Nachricht an Bördesnack24. Kein RPC, sondern ein direkter Insert:
```ts
await supabase.from("contact_messages").insert({
  customer_id: session.user.id,
  category, subject, message,
});
```
`category` ist eines von `problem`, `question`, `praise`, `criticism`, `suggestion`. Nach dem Absenden eine klare Bestätigung.

### Ausdrücklich nicht bauen

- Kein Formular für Firmenstammdaten und keines für Standorte. Beide Schreibwege sind internen Rollen vorbehalten, ein Formular liefe zwingend in eine Fehlermeldung.
- Kein Werbemittel-Upload. Die RPC erwartet eine fertige HTTPS-Adresse, und es gibt keinen Storage-Bucket für Kampagnenmaterial. Ein Uploader, der die Datei annimmt und dann scheitert, ist schlechter als ein ehrlicher Hinweis, dass Material derzeit per Kontakt eingereicht wird.
- Keine Kampagnenverwaltung, kein Anlegen oder Ändern von Kampagnen, Verträgen oder Sponsorings. Das ist internes Personal-Tooling.
- Keine Leads, kein CRM.

### Umgang mit Fehlern

`42501` bedeutet fehlende Berechtigung und gehört als ruhiger Hinweis dargestellt, nicht als technischer Fehler. `P0002` bedeutet „nicht gefunden" und gehört als Leerzustand dargestellt. Zeige nie einen Fehlercode im Klartext.

### Ton

Privatkunden duzen wir, Firmenkunden siezen wir. Der Unternehmensbereich ist sachlich und zahlenorientiert, keine Verspieltheit, keine Konfetti-Momente. Er nutzt dieselben Tokens und Schriften wie der Rest der App, damit es eine App bleibt und nicht zwei.

Halte Dich an das Projektwissen: keine rohen Hex-Werte, Gold nie als Schriftfarbe auf Hell, keine Gedankenstriche und Mittelpunkte im sichtbaren Text, genau ein Signature-Element je Oberfläche.

---

## Abnahmeprüfung nach dem Bau

| Prüfpunkt | Erwartung |
| --- | --- |
| Parameternamen | `p_business`, `p_von`, `p_bis`, `p_jahr`, `p_monat`, `p_campaign` — kein `p_business_id`, kein `p_payload`, kein `p_campaign_id` |
| Rückgabeform | Objekt bleibt Objekt, kein `first()` auf `business_dashboard`/`business_statement` |
| Rollengate | `member` sieht Verträge und Kampagnen, kein Dashboard und keinen Kontoauszug — und bekommt einen erklärenden Zustand, keinen Fehler |
| Standorte | nur `zugeordnet === true`; `fremde_firma` kommt nirgends vor |
| Kampagnenbericht | „weniger als 30" bei gesetztem `*_unter_mindestzahl`, nie eine Zahl |
| Nicht gebaut | kein Stammdaten-Formular, kein Standort-Formular, kein Upload |
| Navigation | weiterhin vier Reiter plus Kundenkarte |
| Einstieg | Karte im Profil nur bei nicht-leerem `my_businesses()` |
