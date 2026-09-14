# API-Vertrag — Unternehmensbereich (B2B)

**Verbindliche Referenz für jedes Frontend.** Alle Angaben sind am
31.08.2026 gegen das Live-Projekt `nnfsyuglkqycwenwxmuw` geprüft: Signaturen
aus dem Systemkatalog, Rückgabeschlüssel durch tatsächlichen Aufruf,
Berechtigungen aus den Funktionsrümpfen und RLS-Policies.

> **Warum es dieses Dokument gibt.** Das Partnerportal wurde gegen
> Parameternamen gebaut, die es nie gab — 7 von 10 Aufrufen hätten
> fehlschlagen müssen. Die Namen der *Funktionen* waren richtig, die Namen
> der *Parameter* hat niemand übergeben. Wer hier etwas ändert, ändert es
> zuerst in der Datenbank und dann hier.

Aufruf über PostgREST: `POST /rest/v1/rpc/<name>` mit den Parametern als
JSON-Objekt. **PostgREST bindet Parameter über den Namen, nicht über die
Position** — ein falscher Parametername ergibt `PGRST202`, nicht etwa eine
stillschweigende Zuordnung.

---

## 1. Rollen

Zwei voneinander unabhängige Rollenwelten treffen hier aufeinander.

**Firmenrolle** (`app.business_role`, Tabelle `business_members`):

| Rolle | Bedeutung |
| --- | --- |
| `admin` | Darf Zahlen und Abrechnung der eigenen Firma sehen |
| `member` | Darf nur Verträge und Kampagnen der eigenen Firma sehen |

Zusätzlich muss `business_members.status = 'active'` **und**
`profiles.status = 'active'` sein — `app.is_business_member()` prüft beides.

**Interne Rolle** (`app.role_key`, Spalte `profiles.role`):
`system_admin`, `shareholder`, `employee`, `customer`.

* `is_admin()` ist **ausschließlich** `system_admin` — nicht „irgendein Admin".
* `shareholder` und `system_admin` besitzen beide `businesses.manage`,
  `advertising.manage`, `creatives.approve`, `leads.manage`.
* Der Wert `admin` existiert in `app.role_key` **nicht**. Ein Vergleich
  gegen `"admin"` ist immer falsch.

---

## 2. Freigegebene Aufrufe für Firmenkunden

### `my_businesses()`

Ohne Parameter. Der Einstiegspunkt: Ist die Rückgabe leer, hat die Person
keinen Unternehmensbereich und die Navigation blendet ihn aus.

**Rückgabe:** JSON-Array

| Schlüssel | Typ | Bemerkung |
| --- | --- | --- |
| `id` | uuid | Firmen-Id für alle folgenden Aufrufe |
| `name` | text | |
| `role` | text | `admin` oder `member` |
| `status` | text | immer `active` (andere werden nicht geliefert) |
| `seit` | timestamptz | `activated_at` |

**Berechtigung:** jede angemeldete Person; liefert nur eigene Mitgliedschaften.

---

### `business_dashboard(p_business uuid, p_von date, p_bis date)`

`p_von` Standard: Monatserster. `p_bis` Standard: heute.
`p_bis < p_von` ⇒ `22023`.

**Rückgabe:** JSON-Objekt

```
business    { id, name, status }
zeitraum    { von, bis }
kennzahlen  { mitglieder_aktiv, einladungen_offen, standorte,
              kaeufe, brutto, arbeitgeber, mitarbeiter }
mitglieder  [ … ]
einladungen [ … ]
```

**Berechtigung:** `is_business_member(p_business, 'admin')` **oder**
`is_admin()` **oder** `auth_has_permission('businesses.manage')`.
Ein `member` erhält `42501`.

---

### `business_statement(p_business uuid, p_jahr integer, p_monat integer)`

`p_jahr` und `p_monat` sind **Pflicht**. Gültig: 2020–2100 / 1–12,
sonst `22023`.

**Rückgabe:** JSON-Objekt

```
business  { id, name, anschrift, steuernummer, ust_id }
zeitraum  { von, bis, jahr, monat }
summen    { kaeufe, brutto, arbeitgeber, mitarbeiter }
zeilen    [ … ]
```

**Berechtigung:** wie `business_dashboard` (Firmen-`admin` oder intern).

---

### `business_locations_list(p_business uuid)`

**Rückgabe:** JSON-Array mit
`id, name, ort, art, automaten, zugeordnet, fremd, fremde_firma`.

**Berechtigung:** Firmen-`admin` oder intern.

> ⚠️ **Nicht ungefiltert anzeigen.** Die Funktion liefert *alle* Standorte,
> auch die anderer Firmenkunden — inklusive deren Namen in `fremde_firma`.
> Für eine Firmenkundenansicht ausschließlich Zeilen mit
> `zugeordnet === true` rendern und `fremd` / `fremde_firma` nie darstellen.
> Roadmap R-11 trennt die Funktion; bis dahin filtert das Frontend.

---

### `my_advertising_contracts()`

Ohne Parameter. **Rückgabe:** JSON-Array mit
`id, firma, automat, standort, position, von, bis, preis_monat, status,
motiv_freigegeben_am`.

`status` (`app.werbevertrag_status`): `entwurf`, `zur_unterschrift`,
`aktiv`, `beendet`, `gekuendigt`.

**Berechtigung:** jedes aktive Mitglied (`member` genügt).

---

### `my_advertising_campaigns()`

Ohne Parameter. **Rückgabe:** JSON-Array mit
`id, firma, name, welt, status, von, bis, budget_gesamt`.

`welt` (`app.campaign_welt`): `analog`, `digital`, `komplett`.
`status` (`app.campaign_status`): `draft`, `pending_review`, `approved`,
`active`, `paused`, `completed`, `cancelled`.

**Berechtigung:** jedes aktive Mitglied (`member` genügt).

---

### `advertising_campaign_report(p_campaign uuid)`

**Rückgabe:** JSON-Objekt

```
campaign_id, ziel_url, mindestzahl (= 30)
aufrufe, aufrufe_unter_mindestzahl
je_anlass [ { anlass, von, bis,
              ausgabe,    ausgabe_unter_mindestzahl,
              einloesung, einloesung_unter_mindestzahl } ]
```

**Berechtigung:** `is_business_member(business)` (auch `member`) oder
intern. Kampagne unbekannt ⇒ `P0002`.

> **Datenschutz-Regel, die das Frontend einhalten muss.** Ist ein
> `*_unter_mindestzahl`-Feld `true`, liegt der Wert unter 30 und wird
> **unterdrückt**. Dann „weniger als 30" anzeigen — **niemals** die Zahl,
> niemals „0", niemals einen Schätzwert.
>
> `aufrufe` ist ein roher Zähler ohne Entprellung und derzeit manipulierbar
> (Roadmap R-2). Bis das behoben ist, gehört an die Kennzahl der Hinweis,
> dass sie technisch gezählt und nicht bereinigt ist.

---

### `business_invoice_runs_list(p_business uuid)`

**Rückgabe:** JSON-Array mit
`id, jahr, monat, status, brutto, netto, steuer, sevdesk_invoice_id,
sevdesk_invoice_number, angefordert_am, angefordert_von, freigegeben_am,
freigegeben_von, fehlertext`.

`status` (`app.rechnungslauf_status`): `angefordert`, `in_sevdesk`,
`freigegeben`, `fehler`, `storniert`.

**Berechtigung:** Firmen-`admin` oder intern. **Nur lesen** — Anfordern
(`business_invoice_request`) und Freigeben (`business_invoice_release`)
sind interne Vorgänge.

---

### Kontaktnachricht — Tabelle `contact_messages`

Kein RPC. Direkter Insert:

```ts
await supabase.from("contact_messages").insert({
  customer_id: session.user.id,   // muss auth.uid() sein oder null
  category, subject, message,
});
```

`category` (`app.contact_category`): `problem`, `question`, `praise`,
`criticism`, `suggestion`.

**Berechtigung:** INSERT für jede angemeldete Person, sofern
`customer_id = auth.uid()` oder `null`. Lesen darf man nur die eigenen.

---

## 3. Ausdrücklich NICHT für Firmenkunden

Diese Aufrufe existieren, sind aber **internen Rollen vorbehalten**. Ein
Firmenkunde erhält `42501`. Dafür bitte **keine Oberfläche bauen** — auch
nicht „vorsorglich":

| Aufruf | Verlangt | Gedacht für |
| --- | --- | --- |
| `business_update(p_business, p_werte)` | `is_admin()` / `businesses.manage` | Stammdatenpflege durch Bördesnack24 |
| `business_location_set(p_business, p_location, p_zuordnen)` | dito | Standortzuordnung |
| `business_member_set`, `business_invite`, `business_budget_set` | dito | Mitglieder- und Budgetverwaltung |
| `business_invoice_request`, `business_invoice_release` | dito | Rechnungslauf |
| `lead_create`, `leads_list`, `lead_status_set` | `leads.manage` | internes CRM |
| `advertising_campaign_set`, `advertising_contract_set`, `advertising_creative_review`, `advertising_overview` | `advertising.manage` / `creatives.approve` | Kampagnenverwaltung |

**Folge für die Oberfläche:** Stammdaten und Standorte werden **angezeigt,
aber nicht bearbeitet**. Statt eines Formulars, das zwangsläufig `42501`
liefert, gehört dorthin ein Hinweis mit Kontaktweg.

---

## 4. Offene Backend-Lücken

**Werbemittel-Upload ist derzeit nicht baubar.**
`advertising_creative_upload(p_campaign uuid, p_kind app.creative_kind,
p_file_url text)` erwartet eine **fertige HTTPS-Adresse**, keine Datei und
kein Base64. Es existiert aber **kein Storage-Bucket** für Kampagnenmaterial
— vorhanden sind nur `documents`, `employee-signatures`, `haccp`,
`partner-signatures`, `signed-documents`, alle privat und ohne Policy für
Firmenkunden.

Ein Firmenkunde hat damit keinen Ort, an den er die Datei legen könnte.
Bis ein Bucket samt Policy existiert, ist die Funktion **nicht anzubieten**.
Ein Uploader, der die Datei entgegennimmt und dann scheitert, ist schlechter
als ein ehrlicher Hinweis.

`p_kind` (`app.creative_kind`), sobald es soweit ist: `motiv_flaeche`,
`aushang`, `coupon_logo`, `social_post`, `news_beitrag`, `profil_logo`.

---

## 5. Fehlercodes

| Code | Bedeutung | Anzeige |
| --- | --- | --- |
| `42501` | keine Berechtigung | „Dafür fehlt Ihrem Zugang die Berechtigung." — nicht als technischer Fehler |
| `22023` | ungültige Eingabe | Feldbezogene Meldung |
| `P0002` | nicht gefunden | Leerzustand, kein Fehlerdialog |
| `PGRST202` | **Funktion mit diesen Parametern existiert nicht** | Programmierfehler — gehört nie in Produktion |

`PGRST202` ist der Code, den das Partnerportal bei 7 von 10 Aufrufen
bekommen hätte. Er bedeutet nie „Server kaputt", sondern immer „Signatur
falsch".

---

## 6. Tabellenzugriffe, die sich am 02.09.2026 geändert haben

Diese Änderungen betreffen **jede** Oberfläche, die direkt gegen
PostgREST spricht — auch die Lovable-Projekte.

| Tabelle | Was gilt jetzt |
| --- | --- |
| `products` | **`select=*` antwortet mit `42501`.** Die Spalte `cost_price_net` ist für `anon` und `authenticated` entzogen; alle übrigen Spalten sind einzeln freigegeben. Wer den Katalog liest, zählt seine Spalten auf: `select=id,name,category,list_price_net,image_url,allergens,…` |
| `machine_sales_daily` | nur noch für interne Rollen lesbar |
| `inventory` | nur noch für interne Rollen lesbar |
| `permissions`, `roles`, `role_permissions` | nur noch für interne Rollen lesbar; eigene Rechte weiterhin über `my_permissions()` |
| `product_ratings` | nur noch die eigene Zeile. Durchschnitt und Anzahl kommen aus `product_rating_summary` oder `product_detail` |
| `profiles.email` | für Nicht-Administratoren nicht mehr schreibbar (`42501`). Die Adresse folgt der bestätigten Anmeldeadresse aus `auth` |
| `advertising_redirect_count` | zählt je Konto, Kampagne und Tag höchstens dreimal; Aufrufe ohne Anmeldung zählen nicht |
| `choose_subscription_plan` | prüft zusätzlich `profiles.birth_date`. Neue Fehlerfälle: `P0001` „kein Geburtsdatum hinterlegt", `42501` „nicht volljährig" |

**Für eine neu angelegte Tabelle gilt:** Supabase vergibt automatisch
volle DML-Rechte an `anon` und `authenticated`. Soll die Tabelle nur über
eine RPC erreichbar sein, gehört ein ausdrückliches
`revoke all … from anon, authenticated` in dieselbe Migration.
