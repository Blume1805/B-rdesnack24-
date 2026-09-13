# Firmenportal — der tatsächliche Vertrag

Stand 03.09.2026. Alle Formen unten sind **ausgeführt** abgelesen, nicht aus
dem Code geschlossen: als echte Rolle `authenticated` mit dem Konto eines
Firmen-Admins gegen die lokale Replik. Die Replik trägt denselben
Funktionsstand wie Produktion.

Anlass: das Lovable-Projekt „Bördesnack24 Partner Portal" ruft diese
Funktionen mit erfundenen Parameternamen und erfundenen Rückgabeformen auf.
Weil ohne angeklemmten Supabase-Connector alles auf Demodaten zurückfällt,
sieht das Portal fehlerfrei aus. Beim Anklemmen bricht es.

## Zwei Dinge vorweg, die größer sind als die Namen

**Alle zehn Funktionen geben `jsonb` zurück, keine Zeilenmengen.**
`supabase.rpc()` liefert damit den JSON-Wert direkt — je nach Funktion ein
Array oder ein Objekt. Ein `rows ?? []` auf ein Objekt ist falsch, ein
`first()` auf ein Objekt geht nur zufällig gut.

**Die Schlüssel sind deutsch, die Beträge sind Euro-Dezimalzahlen.** Nicht
`business_id`, sondern `id`. Nicht `amount_cents`, sondern `brutto` als
`numeric`. Wer in Cent rechnet, rechnet um den Faktor 100 falsch.

## Wer was aufrufen darf

Das ist die wichtigere Hälfte. Zwei der zehn Funktionen sind **kein
Selbstbedienungs-Werkzeug für Firmenkunden**, auch wenn ihr Name so klingt.

| Funktion | Firmen-Admin | Prüfung im Rumpf |
|---|---|---|
| `my_businesses()` | ✓ | eigene Mitgliedschaften |
| `my_advertising_contracts()` | ✓ | eigene Firma |
| `my_advertising_campaigns()` | ✓ | `app.is_business_reader` |
| `business_dashboard(…)` | ✓ | `is_business_member(p_business,'admin')` |
| `business_statement(…)` | ✓ | `is_business_member(p_business,'admin')` |
| `business_locations_list(…)` | ✓ | `is_business_member(p_business,'admin')` |
| `advertising_campaign_report(…)` | ✓ | `app.darf_kampagne_lesen` |
| `advertising_creative_upload(…)` | ✓ | `is_business_member(v_business,'admin')` |
| **`business_update(…)`** | **✗** | `is_admin() or auth_has_permission('businesses.manage')` |
| **`business_location_set(…)`** | **✗** | `is_admin() or auth_has_permission('businesses.manage')` |

Ausgeführte Gegenprobe: der Firmen-Admin `f1a00000-…-000000000001` erhält
bei `business_update` `42501 Keine Berechtigung, Firmenkunden zu ändern`.

Daraus folgt: **Standortpflege durch den Firmenkunden gibt es nicht**, und
Stammdatenpflege gibt es nur für den Teil, der seit dem 03.09.2026 eine
eigene Selbstbedienungsfunktion hat (siehe unten). Alles andere bleibt bei
der Verwaltung. Das ist keine Lücke im Frontend, sondern eine Entscheidung
im Backend.

`business_location_set` ist außerdem etwas anderes, als sein Name vermuten
lässt: `(p_business, p_location, p_zuordnen boolean)` **verknüpft einen
bereits vorhandenen Standort mit einer Firma oder löst die Verknüpfung**. Es
legt keinen Standort an und ändert keine Adresse.

## Die Signaturen und Formen

### `my_businesses()` → Array

```json
[{ "id": "uuid", "name": "Firma Eins GmbH", "role": "admin",
   "seit": "2026-09-03T06:37:31.390798+00:00", "status": "active" }]
```

Hier kommt die `business_id` her, die drei andere Funktionen brauchen. Bei
mehreren Einträgen braucht das Portal eine Auswahl; bei einem nimmt es den
einen.

### `business_dashboard(p_business uuid, p_von date, p_bis date)` → Objekt

```json
{ "business":   { "id", "name", "status" },
  "zeitraum":   { "von", "bis" },
  "kennzahlen": { "brutto", "kaeufe", "standorte", "arbeitgeber",
                  "mitarbeiter", "mitglieder_aktiv", "einladungen_offen" },
  "mitglieder": [{ "profile_id", "name", "email", "role", "status",
                   "kaeufe", "brutto", "arbeitgeber", "mitarbeiter",
                   "budget": { "zuschuss", "tageslimit", "monatslimit",
                               "persoenlich" } }],
  "einladungen":[{ "id", "email", "role", "expires_at" }] }
```

Kein Kontostand, keine offenen Posten, keine Cent-Beträge. Dafür etwas, das
das Portal bisher nicht erwartet: **personenbezogene Daten der Beschäftigten**
(Name, E-Mail, Kaufsummen, Budgets). Die Oberfläche muss damit entsprechend
umgehen — das ist kein Kennzahlenblock.

### `business_statement(p_business uuid, p_jahr int, p_monat int)` → Objekt

```json
{ "business": { "id", "name", "anschrift", "steuernummer", "ust_id" },
  "zeitraum": { "von", "bis", "jahr", "monat" },
  "summen":   { "brutto", "kaeufe", "arbeitgeber", "mitarbeiter" },
  "zeilen":   [{ "gekauft_am", "datum", "uhrzeit", "wer", "automat",
                 "standort", "brutto", "arbeitgeber", "mitarbeiter",
                 "artikel": [{ "bezeichnung", "menge", "einzelpreis" }] }] }
```

`datum` und `uhrzeit` kommen fertig formatiert in Europe/Berlin — genau der
Zeitzone, in der die Zuordnung zu Tag und Monat gerechnet wird. Das Frontend
soll sie **nicht** selbst aus `gekauft_am` formatieren; sonst kann eine
Buchung in einem anderen Monat erscheinen als in der Abrechnung.

### `business_locations_list(p_business uuid)` → Array

```json
[{ "id", "name", "ort", "art", "automaten", "zugeordnet" }]
```

Keine Straße, keine Postleitzahl, keine Kontaktperson, kein Zugangshinweis.

### `my_advertising_contracts()` → Array

```json
[{ "id", "firma", "standort", "position", "von", "bis",
   "preis_monat", "status", "motiv_freigegeben_am" }]
```

### `my_advertising_campaigns()` → Array

```json
[{ "id", "name", "firma", "welt", "status", "von", "bis", "budget_gesamt" }]
```

`welt` ist `analog | digital | komplett`. `status` ist
`draft | pending_review | approved | active | paused | completed | cancelled`.
`budget_gesamt` ist eine Euro-Dezimalzahl (`500.00`), keine Cent-Zahl.

### `advertising_campaign_report(p_campaign uuid)` → Objekt

```json
{ "campaign_id", "ziel_url", "aufrufe", "je_anlass": [],
  "mindestzahl": 30, "aufrufe_unter_mindestzahl": true }
```

Der wichtigste Fall ist der oben gezeigte: `aufrufe` ist `null` und
`aufrufe_unter_mindestzahl` ist `true`. Das heißt **nicht null Aufrufe**,
sondern „zu wenige, um sie zu zeigen, ohne dass sich eine einzelne Person
herausrechnen ließe". Wer das als `0` darstellt, macht aus einer
Datenschutzmaßnahme eine falsche Zahl — und zwar eine, die der Werbepartner
gegen uns verwendet.

### `advertising_creative_upload(p_campaign uuid, p_kind app.creative_kind, p_file_url text)` → uuid

**Nimmt eine Adresse, keinen Dateiinhalt.** Kein Base64, kein Dateiname,
kein MIME-Typ, kein Alternativtext. Gibt die neue `creative_id` zurück.

`p_kind` ist `motiv_flaeche | aushang | coupon_logo | social_post |
news_beitrag | profil_logo | kundenkarte_logo`.

**Damit ist der Upload heute nicht durchführbar.** Die Datei müsste vor dem
Aufruf irgendwo liegen, und es gibt keinen Ablageort, in den ein
Firmenkunde schreiben darf: `werbelogos` erlaubt Schreibzugriff nur
`is_admin()` oder `advertising.manage`. Das ist eine offene Stelle im
Backend, keine im Frontend.


## Selbstbedienung: Rechnungsdaten (seit 03.09.2026)

Zwei Funktionen, die ein Firmen-Admin für die **eigene** Firma aufrufen darf.

### `business_rechnungsdaten(p_business uuid)` → Objekt

```json
{ "id", "name", "legal_form",
  "billing_street", "billing_zip", "billing_city", "billing_country",
  "billing_email", "tax_number", "vat_id", "updated_at",
  "selbst_aenderbar": ["billing_street","billing_zip","billing_city",
                       "billing_country","billing_email"] }
```

`selbst_aenderbar` steht bewusst in der Antwort: die Oberfläche soll nicht
raten müssen, welche Felder sie schreibbar zeigt, und zieht automatisch
nach, falls die Liste je wächst. Kein `sevdesk_contact_id` — die interne
Buchhaltungsverknüpfung verlässt den Server nicht.

### `business_rechnungsdaten_update(p_business uuid, p_werte jsonb)` → Objekt

`p_werte` nimmt **ausschließlich** die fünf Felder aus `selbst_aenderbar`.
Jedes andere Feld wird mit `42501` und einer verständlichen Meldung
abgewiesen, nicht stillschweigend verworfen — stilles Verwerfen sieht für
den Aufrufer aus wie Erfolg und ist der übliche Weg, auf dem sich Mass
Assignment einschleicht.

Zuschnitt und Prüfung: Straße 3–120 Zeichen, PLZ gegen ein Muster, Ort
2–80 Zeichen, Land als zweibuchstabiges Kürzel (wird großgeschrieben),
Rechnungs-E-Mail kleingeschrieben und auf Form geprüft. Die
Rechnungs-E-Mail lässt sich **nicht leeren**: dorthin gehen die Rechnungen,
und dieser Zustand sollte nicht ohne Mitwissen herstellbar sein.

### Was bewusst nicht selbst änderbar ist

| Feld | Grund |
|---|---|
| `name`, `legal_form` | Die Firmierung ist eine Identitätsangabe. Sie steht auf Rechnungen und erscheint über den Rückfall in `kundenkarte_werbeplatz` als Werbetreibender in der Kunden-App. Ohne Prüfung könnte sich ein Firmenkunde einen beliebigen Namen geben und ihn Kunden anzeigen lassen. |
| `tax_number`, `vat_id` | Bestimmen, wie eine Rechnung ausgestellt wird. Eine falsche USt-IdNr. führt zu falsch ausgestellten Rechnungen, und die Folgen trägt nicht der, der sie eingetragen hat. |
| `status` | Wer seinen eigenen Status setzen darf, hebt seine eigene Sperre auf. |
| `sevdesk_contact_id` | Interne Verknüpfung zur Buchhaltung. |

Für diese Felder bleibt der Weg über den Ansprechpartner. Die Fehlermeldung
sagt das auch so.

### Zwei unabhängige Prüfungen

Die Funktion prüft Berechtigung und erlaubte Felder. Der Trigger
`app.businesses_nur_verwaltung_aendert` prüft danach **noch einmal selbst**,
welche Spalten sich tatsächlich bewegt haben. Er glaubt der Funktion nicht:
das Kennzeichen, das sie setzt, öffnet nur den Weg — welche Spalten sich
bewegen dürfen, entscheidet weiterhin der Trigger.

Ausgeführte Kerngegenprobe (T16): mit von Hand gesetztem Kennzeichen bleibt
ein direktes `update … set name = …` bei `42501`, und die Firmierung ist
danach unverändert. Eine einzelne Sicherung wäre keine.

### Keine Rückwirkung auf Rechnungen

`invoices` trägt `billing_snapshot`, also die Rechnungsdaten in dem Zustand,
in dem sie bei Ausstellung galten. Eine Änderung heute verändert keine
ausgestellte Rechnung; die Unveränderbarkeit nach GoBD bleibt gewahrt. Die
Änderung selbst protokolliert der vorhandene `trg_audit` mit Akteur, altem
und neuem Wert — nachgewiesen in T20. Der Firmenkunde selbst kommt an das
Protokoll nicht heran (T21).

### Nachweise

`scripts/pruefumgebung/101_firma_rechnungsdaten.sql`, 21 Prüfungen gegen die
Replik, alle grün. Regression über zwölf Suiten ohne Befund.

## Offen beim Betreiber

1. ~~Stammdatenpflege~~ — entschieden und gebaut: Rechnungsanschrift und
   Rechnungs-E-Mail sind Selbstbedienung, Identitäts- und Steuerangaben
   bleiben bei der Verwaltung. **Standortpflege** bleibt offen; sie ist
   heute nur eine Zuordnung vorhandener Standorte, keine Adresspflege.
2. **Motiv-Upload:** ein Bucket, in den Firmenkunden schreiben dürfen, mit
   Größen- und Typgrenzen und einem Prüfschritt vor der Freigabe. Erst
   danach ergibt der Upload-Dialog im Portal Sinn.
3. **Beschäftigtendaten im Dashboard:** dass ein Firmen-Admin Namen,
   E-Mail-Adressen und Kaufsummen seiner Beschäftigten sieht, ist eine
   bewusste Entscheidung mit datenschutzrechtlichem Gewicht. Sie gehört ins
   Verzeichnis der Verarbeitungstätigkeiten und in die Information der
   Beschäftigten.
