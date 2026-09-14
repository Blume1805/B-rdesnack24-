# Auftrag: Unternehmensbereich — Werbung, Sponsoring, Anfrage und Auswertung

An den Lovable-Agenten, Projekt A (Kundenapp mit Privat- und
Unternehmensbereich). Stand 03.09.2026.

**Abgeschickt am 03.09.2026, Nachricht `umsg_01m1jtjnm4edrsxb3x7aa75hp3`.**

Setze bei der Bearbeitung `/impeccable`, `/frontend-taste` und
`/humanizer` ein. Die drei Skills liegen in der Workspace.

---

## Worum es geht

Das Backend für den Werbe- und Sponsoringbereich ist gebaut, ausgerollt und
nachgewiesen. Du baust die Oberfläche dazu. Es geht **nicht** um einen
Marktplatz mit Buchung und Zahlung, sondern um einen sauberen digitalen
Anfrageprozess: ein Unternehmen sieht, was es bekommen kann, wählt aus und
stellt eine unverbindliche Anfrage. Wir melden uns innerhalb von 48 Stunden.

Du erweiterst den bestehenden Bereich unter `/app/unternehmen`. Die Routen
`app.unternehmen.index`, `.kampagnen`, `.kontakt`, `.kontoauszug`,
`.stammdaten`, `.vertraege` existieren bereits. Bau nichts daneben, was es
schon gibt.

Neu hinzu kommt außerdem ein **öffentlicher** Bereich „Für Unternehmen",
der ohne Anmeldung erreichbar ist. Das ist der Unterschied zum bestehenden
`/app/unternehmen`: dort ist man angemeldet und hat schon eine
Geschäftsbeziehung, hier kommt jemand zum ersten Mal.

---

## Teil 1 — Der öffentliche Bereich „Für Unternehmen"

### Navigation

Auf der Landing Page prominent erreichbar. Ein Eintrag „Für Unternehmen",
darunter: Werbung · Sponsoring · Preise · Anfrage stellen.

### Die drei Angebote

**Werbung** — „Erreichen Sie Ihre Kunden direkt in der Region."
**Sponsoring** — „Unterstützen Sie regionale Standorte, Vereine und
Einrichtungen und zeigen Sie dabei Ihre Marke."
**Partnerschaften** — „Werden Sie langfristiger Partner."

Werbung und Sponsoring sind der Schwerpunkt. Partnerschaft ist eine
Anfrage wie die anderen, nur ohne Katalogauswahl.

Der Unterschied zwischen Werbung und Sponsoring muss dem Besucher erklärt
werden, nicht nur durch zwei Überschriften angedeutet. Werbung heißt: Sie
wollen Ihre Marke bewerben. Sponsoring heißt: Sie wollen einen konkreten
Standort, Verein oder ein Projekt unterstützen und dabei sichtbar sein.
Das sind zwei verschiedene Absichten, und wer das Falsche anklickt,
bekommt ein Angebot, das nicht passt.

### Katalog

```ts
const { data } = await supabase.rpc('advertising_catalog')
```

Rolle `anon` genügt — kein Konto nötig.

```json
[{ "schluessel": "automat_werbeflaeche", "name": "Automaten-Werbefläche",
   "kategorie": "werbung_analog", "kurzbeschreibung": "…", "beschreibung": "…",
   "leistungen": ["…", "…"], "zielgruppe": "…", "bild_url": null,
   "preis": null, "preis_art": "individuell", "ab_preis": false,
   "mindestlaufzeit_monate": null, "zusatzkosten_hinweis": null }]
```

`kategorie`: `werbung_analog` · `werbung_digital` · `sponsoring` ·
`partnerschaft` · `social_media` · `coupon`

Zwölf Einträge liegen vor: Automaten-Werbefläche, Komplettbranding,
Namensrecht und Standortbranding, Standortpartnerschaft, Platzierung in
der App, Unternehmensprofil, QR-Code-Kampagne, Display-Werbung,
Coupon-Kampagne, Social Media, Sponsoring eines Standorts, Partnerschaft.

### Preisdarstellung — hier bitte genau lesen

| Zustand | Anzeige |
|---|---|
| `preis_art === "individuell"` (dann ist `preis` immer `null`) | **„Preis auf Anfrage"** |
| `preis` gesetzt, `ab_preis === false` | `249 € / Monat` |
| `preis` gesetzt, `ab_preis === true` | `ab 199 € / Monat` |
| `zusatzkosten_hinweis` gesetzt | zusätzlich als zweite, kleinere Zeile |

Einheit aus `preis_art`: `einmalig` → „einmalig", `monatlich` → „/ Monat",
`jaehrlich` → „/ Jahr", `kampagne` → „je Kampagne", `individuell` → keine
Einheit.

**Stand heute stehen alle zwölf Einträge auf `individuell`.** Die
Oberfläche zeigt also überall „Preis auf Anfrage". Das ist richtig so und
kein fehlender Wert: die Preise sind eine Entscheidung des Betreibers und
sind noch nicht getroffen. **Erfinde keine Preise, auch nicht als
Beispiel, auch nicht als Platzhalter im Mockup.** Eine erfundene Zahl im
Preisaushang ist eine irreführende Angabe, und ein Screenshot mit „ab
199 €" wird zitiert werden, sobald er existiert.

Bau die anderen drei Fälle trotzdem vollständig — sobald Preise gepflegt
sind, greifen sie ohne Codeänderung.

### Produktdetailseite

Je Produkt eine eigene Ansicht: Titel, Beschreibung, Leistungen als Liste,
Zielgruppe, Mindestlaufzeit, Preis nach obiger Regel, Zusatzkostenhinweis,
Bildplatzhalter, und der Knopf „Anfrage stellen", der das Produkt bereits
vorausgewählt ins Formular übernimmt.

---

## Teil 2 — Das Anfrageformular

### Mehrfachauswahl

Der Interessent soll kombinieren können: Automaten-Werbefläche **und**
App-Platzierung **und** Social Media. Die Zusammenfassung vor dem Absenden
zeigt die gewählten Leistungen.

Zur Preissumme: solange auch nur eine gewählte Position auf „Preis auf
Anfrage" steht, lautet die Zusammenfassung **„Individuelles Angebot"** —
keine Teilsumme, kein „ab". Erst wenn alle Positionen einen festen Preis
haben, darf eine Summe stehen, und dann mit dem Zusatz, dass Produktion
und Montage nach Angebot dazukommen können, sofern
`zusatzkosten_hinweis` an einer der Positionen hängt.

### Standortauswahl

```ts
const { data } = await supabase.rpc('advertising_locations')
// [{ "id": uuid, "name": "…", "ort": "…" }]
```

Mehrfachauswahl, plus die Möglichkeit **„Ich bin noch nicht sicher /
Standort egal"**. Die ist wichtig: die wenigsten Werbekunden kennen unsere
Standorte. Sie ist ein eigenes Feld (`p_standort_egal`), nicht dasselbe wie
„nichts ausgewählt" — das Backend unterscheidet beides, die Oberfläche
muss es auch.

Zum Zustand der Standortdaten: die Bezeichnungen im Bestand sind teils noch
Platzhalter der Form „Standort 2 (ANPASSEN)". Filtere sie wie in der
Korrekturliste zu `machinePlace()` beschrieben und zeige stattdessen den
Ort. Ist beides unbrauchbar, lass den Eintrag aus der Auswahl weg.

### Felder

**Unternehmen** — Firmenname (Pflicht), Ansprechpartner (Pflicht),
E-Mail (Pflicht), Telefon, Website.

**Anfrage** — gewählte Leistungen, Standorte, gewünschter Start,
gewünschte Laufzeit in Monaten, Budget (freiwillig), Zielgruppe, Region,
Nachricht.

**Werbemittel** — zwei Ja/Nein-Fragen: „Sie haben bereits Werbemittel?"
und „Sollen wir die Gestaltung übernehmen?". Ein Datei-Upload ist **nicht**
zu bauen: es gibt keinen Storage-Bucket dafür. Schreib stattdessen
„Werbemittel noch nicht vorhanden? Kein Problem — wir besprechen die
Gestaltung mit Ihnen."

**Zustimmungen** — zwei getrennte Kästchen:

1. Datenschutz (Pflicht, `p_datenschutz`) — mit Verweis auf die
   Datenschutzerklärung.
2. Werbeeinwilligung (freiwillig, `p_marketing`) — **nicht vorausgewählt**,
   eigener Satz, klar abgegrenzt. Eine Anfrage allein ist keine
   Einwilligung in Werbung.

**Honigtopf** — ein zusätzliches Textfeld, das an `p_hp` gebunden wird und
für Menschen unsichtbar ist:

```html
<input name="firma_zusatz" tabIndex={-1} autoComplete="off" aria-hidden="true"
       style={{ position: 'absolute', left: '-9999px' }} />
```

Nicht `display: none` und nicht `hidden` — manche Bots meiden genau die.
Das Feld bekommt einen unauffälligen Namen, nicht `honeypot`.

### Absenden

```ts
const { data, error } = await supabase.rpc('advertising_inquiry_submit', {
  p_kind: 'advertising',           // oder 'sponsoring' | 'partnership'
  p_company_name: firma,
  p_contact_name: ansprechpartner,
  p_email: email,
  p_datenschutz: true,
  p_produkte: ['automat_werbeflaeche', 'app_platzierung'],  // SCHLÜSSEL, keine ids
  p_standorte: [uuid, uuid],
  p_standort_egal: false,
  p_marketing: false,
  p_hp: honigtopfWert || null,
  // … die übrigen Felder
})
// data: { anfrage_nummer: "BS24-K7M2XQ", gespeichert: true }
```

`p_produkte` erwartet die **Schlüssel** aus dem Katalog, nicht ids. Der
Katalog gibt bewusst keine ids heraus.

### Fehlerbehandlung

| Fehler | Verhalten |
|---|---|
| SQLSTATE `22023` | Pflichtangabe fehlt oder ist unbrauchbar. Die Meldung des Backends ist deutschsprachig und für Endnutzer formuliert — **direkt anzeigen**, nicht durch eine eigene ersetzen |
| SQLSTATE `53400` | Drossel greift. Meldung anzeigen, **Formular nicht zurücksetzen** — der Interessent soll nicht alles neu tippen |
| Netzwerkfehler | Eingaben behalten, erneut versuchen anbieten |

Validiere zusätzlich im Browser, aber verlass dich nicht darauf: die
Prüfung im Formular ist eine Bequemlichkeit für ehrliche Nutzer, die
Entscheidung fällt im Backend.

### Bestätigungsseite

„Vielen Dank für Ihre Anfrage." Dazu:

* die Anfragenummer aus `data.anfrage_nummer`, groß und kopierbar
* „Wir prüfen Ihre Angaben und melden uns innerhalb von 48 Stunden."
* der Hinweis auf die Unverbindlichkeit, im Wortlaut:
  **„Mit dem Absenden stellen Sie eine unverbindliche Anfrage. Ein Vertrag
  kommt erst durch eine separate Bestätigung von Bördesnack24 zustande."**
  Derselbe Satz steht auch am Absendeknopf, nicht erst danach.
* der Hinweis, dass eine Bestätigung per E-Mail unterwegs ist

Kommt `gespeichert: false` zurück (Honigtopf hat gegriffen), zeig
**dieselbe** Bestätigungsseite. Der Absender soll nicht merken, dass er
erkannt wurde.

---

## Teil 3 — Auswertung für den Werbekunden

Im angemeldeten Bereich unter `/app/unternehmen/kampagnen/$id` — die Route
existiert bereits.

```ts
const { data } = await supabase.rpc('advertising_campaign_analytics', {
  p_campaign: id, p_von: von, p_bis: bis, p_dimension: 'tag'
})
```

`p_dimension`: `gesamt` · `tag` · `kanal` · `creative` · `standort`.
**Mehr gibt es nicht.** Bau keine freie Filterkombination — das Backend
lehnt sie ab, und zwar mit Absicht: über genug Filter hinweg ließen sich
einzelne Personen einkreisen.

Zeitraum-Umschalter: heute · 7 Tage · 30 Tage · aktueller Monat ·
Kampagnenzeitraum · frei. Höchstens 400 Tage, sonst `22023`.

### Antwort

```json
{ "mindestgruppe": 30,
  "summe": { "impressions": 1800, "views": 1600, "views_3s": 700,
             "clicks": 90, "kontakte": 550, … },
  "zeilen": [ { "gruppe": "2026-09-01", "impressions": 1000, … },
              { "gruppe": "2026-09-03", "impressions": null,
                "impressions_unter_mindestzahl": true, … } ],
  "ctr_prozent": 5.00,
  "hinweis": "Alle Werte sind zusammengefasst und anonym. …" }
```

### Zwei Regeln, die nicht verhandelbar sind

**Erstens: `null` ist nicht null.** Steht ein Wert auf `null` und das
zugehörige `…_unter_mindestzahl` auf `true`, zeigst du

> „Für diesen Zeitraum stehen aus Datenschutzgründen keine ausreichenden
> Daten zur Verfügung."

und **keine 0, keinen Strich, kein leeres Feld**. Eine echte `0` dagegen
ist ein Messwert und wird als 0 gezeigt. Der Unterschied ist der ganze
Punkt: eine 0 sagt „niemand", ein `null` sagt „zu wenige, um es zu
zeigen". Wer daraus eine 0 macht, macht aus einer Schutzmaßnahme eine
Falschaussage.

Rechne auch nichts aus unterdrückten Werten weiter — keine eigene CTR,
keine Summen über die Zeilen. Die CTR liefert das Backend fertig.

**Zweitens: die Kennzahlen heißen so, wie sie gemessen werden.**

| Erlaubt | Verboten |
|---|---|
| Ausspielungen | Personen erreicht |
| Werbekontakte | Nutzer gesehen |
| Views | Kunden |
| Views ab 3 Sekunden | Interessenten |
| Klicks | Reichweite (ohne Erläuterung) |
| Kontakte (angemeldete Sitzungen) | Unique Users |

Der Grund: gezählt wird **nur in angemeldeten Sitzungen der
Bördesnack24-App**. Eine anonyme Zählung ließe sich beliebig aufblasen, und
eine Zahl, für die niemand geradesteht, ist im Werbebericht nichts wert.
„Personen erreicht" wäre deshalb schlicht falsch.

### Glossar

Jede Kennzahl bekommt ein Info-Symbol mit einer kurzen Erklärung:

* **Ausspielungen** — wie oft Ihr Werbemittel ausgeliefert wurde.
* **Views** — wie oft es sichtbar war.
* **Views ab 3 Sekunden** — wie oft es mindestens drei Sekunden sichtbar
  war. Kürzere Kontakte zählen als View, nicht hier.
* **Klicks** — Klicks auf den hinterlegten Verweis.
* **Kontakte** — Zahl unterschiedlicher angemeldeter Sitzungen. **Achtung
  bei der Formulierung:** Tageswerte lassen sich nicht zu einem Monatswert
  addieren, ohne doppelt zu zählen. Zeig Kontakte deshalb nie als Summe
  über mehrere Tage, sondern nur je Zeile — oder nimm den Wert aus
  `summe.kontakte`, den das Backend richtig rechnet.
* **CTR** — Klicks geteilt durch Ausspielungen, in Prozent.

### Der Datenschutzhinweis gehört sichtbar ins Dashboard

Das Feld `hinweis` aus der Antwort wird angezeigt, nicht nur verlinkt und
nicht umformuliert. Dazu ein zweiter Satz, gut sichtbar:

> Die dargestellten Kennzahlen dienen der Bewertung Ihrer Kampagne.
> Einzelne Personen lassen sich daraus nicht identifizieren.

### Export

PDF und CSV, ausschließlich über die Werte, die das Dashboard auch zeigt.
Unterdrückte Zellen bleiben im Export unterdrückt — mit demselben Text, nie
als leere Zelle und nie als 0. Kein Export von Rohdaten; es gibt für dich
auch keinen Weg dorthin, die Tabellen sind für jedes Konto gesperrt.

---

## Teil 4 — Werbung im Kundenbereich: noch nicht bauen

Das Backend kann bezahlte Anzeigen im Kundenbereich ausspielen und die
Kontakte zählen. **Bau die Anzeigenfläche jetzt noch nicht.** Es gibt null
laufende Kampagnen, und vorher sind zwei Kennzeichnungen fällig, die
zusammengehören, aber nicht dasselbe sind:

1. Die Anzeige muss **als Werbung erkennbar** sein — Beschriftung
   „Anzeige".
2. Die Auswahl, welche Anzeige jemand sieht, ist regelbasiert und fällt
   damit unter die Dauerregel des Projekts: **KI-Chip** an der Section,
   Klick öffnet `/app/ki-hinweis`, und die Funktion wird dort **auch
   textlich** aufgeführt.

Beides ist im `ki_register` als `werbe_ausspielung` mit Ampel gelb
vermerkt. `ki_funktion_freigegeben('werbe_ausspielung')` liefert deshalb
`false` und die Fläche bleibt dunkel. Wenn es soweit ist, kommt ein eigener
Auftrag.

Was du jetzt vorbereiten kannst, ohne etwas Sichtbares zu bauen: den
Schlüssel `werbeAusspielung: 'werbe_ausspielung'` in `KI_KEYS` ergänzen.

---

## Teil 5 — Gestaltung

Es gilt der Kontrakt aus `docs/DESIGN-SYSTEM-EINHEITLICH.md`, den du schon
umgesetzt hast. Gold `#FDC102`, Gold-auf-Hell `#8A6A00`, Ink `#202321`,
Hintergrund `#FBF8F4`, Rahmen `#CFC7BB`, Radius `0.625rem`,
`--ease-house: cubic-bezier(0.22, 1, 0.36, 1)`.

Der Unternehmensbereich darf sachlicher wirken als der Kundenbereich —
mehr Zahlen, mehr Tabelle, weniger Verspieltheit. Die Herkunft muss
trotzdem sofort erkennbar bleiben: dieselben Farben, dieselbe Schrift,
dieselbe Kurve. Was ausdrücklich **nicht** gewünscht ist: die übliche
B2B-Optik mit Farbverlauf, Stockfoto und drei generischen Vorteilskacheln.
Das ist ein Regionalanbieter aus der Magdeburger Börde, kein
Software-Konzern.

Mobil zuerst. Besonders Produktkarten, Preisübersicht, Mehrfachauswahl,
Formular, Zusammenfassung und Bestätigungsseite.

### Bildplatzhalter

Produktbilder gibt es noch nicht (`bild_url` ist überall `null`). Nutz die
bestehende `MediaPlaceholder`-Komponente, die im Kundenbereich schon läuft
— sichtbar als Platzhalter beschriftet, nicht als gestaltetes Bild
getarnt. Platzhalter brauchen: Produktkarten im Katalog, die
Produktdetailseite, der Sponsoringbereich und die Kampagnenübersicht.

### Barrierefreiheit

Mindestens 44 × 44 px Tippfläche, sichtbarer Fokusring auf jedem
Bedienelement, Formularfelder mit echtem `<label>`, Fehlermeldungen mit
`aria-describedby` am Feld und nicht nur als Farbe. Die Auswertungstabellen
brauchen `<caption>` und `<th scope>`.

---

## Teil 6 — Was ich als Nachweis brauche

Zusage genügt nicht. Schick mir zu jedem Punkt den Beleg:

1. Die Ausgabe von `bun run test` mit Testnamen und Zählung.
2. Ein Test, der belegt: ein `null` mit `…_unter_mindestzahl: true` wird
   als Datenschutzhinweis gerendert und **nicht** als 0.
3. Ein Test, der belegt: bei gemischter Auswahl mit mindestens einer
   Position „auf Anfrage" steht in der Zusammenfassung „Individuelles
   Angebot" und keine Zahl.
4. Ein Test für die Preisdarstellung in allen vier Fällen der Tabelle.
5. Die Dateien und Zeilen, an denen der Unverbindlichkeitssatz steht — er
   muss an zwei Stellen stehen, am Absendeknopf und auf der
   Bestätigungsseite.
6. Die Bestätigung, dass im Katalog- und Auswertungscode **keine einzige
   Zahl fest steht** — kein Preis, kein Schwellenwert, keine Beispielmetrik.

Suchbegriffe, die in deinem Code **nicht** vorkommen dürfen: `199`, `249`
als Preisliteral, `Personen erreicht`, `Nutzer gesehen`, `Unique Users`,
sowie eine eigene Konstante für die Mindestgruppengröße — die kommt
ausschließlich aus `mindestgruppe` in der Antwort.

---

## Was du nicht tun sollst

* Keine Preise erfinden, auch nicht im Mockup.
* Keine Buchung, keine Zahlung, kein Warenkorb — das ist Phase 2.
* Keinen Datei-Upload für Werbemittel — es gibt keinen Bucket.
* Keine Anzeigenfläche im Kundenbereich (Teil 4).
* Keine Registrierungspflicht für die Anfrage. Wer anfragen will, soll
  anfragen können.
* Keine eigene Berechtigungslogik. Wer welche Kampagne sehen darf,
  entscheidet das Backend; wenn `42501` kommt, zeigst du eine Meldung und
  baust keinen Umweg.
