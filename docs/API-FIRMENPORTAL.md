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

Daraus folgt: **Stammdatenpflege und Standortpflege durch den Firmenkunden
gibt es nicht.** Das ist keine Lücke im Frontend, sondern eine Entscheidung
im Backend. Wer sie ändern will, baut eine eigene Selbstbedienungsfunktion
mit eigener Rechteprüfung — nicht ein Frontend, das gegen eine Wand läuft.

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

## Offen beim Betreiber

1. **Stammdaten- und Standortpflege:** intern lassen und im Portal nur
   anzeigen, oder eine Selbstbedienungsfunktion mit eigener Rechteprüfung
   bauen? Eine Entscheidung, keine Fleißaufgabe.
2. **Motiv-Upload:** ein Bucket, in den Firmenkunden schreiben dürfen, mit
   Größen- und Typgrenzen und einem Prüfschritt vor der Freigabe. Erst
   danach ergibt der Upload-Dialog im Portal Sinn.
3. **Beschäftigtendaten im Dashboard:** dass ein Firmen-Admin Namen,
   E-Mail-Adressen und Kaufsummen seiner Beschäftigten sieht, ist eine
   bewusste Entscheidung mit datenschutzrechtlichem Gewicht. Sie gehört ins
   Verzeichnis der Verarbeitungstätigkeiten und in die Information der
   Beschäftigten.
