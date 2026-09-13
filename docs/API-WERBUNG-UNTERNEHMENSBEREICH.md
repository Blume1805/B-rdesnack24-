# Unternehmensbereich: Werbung, Sponsoring, Anfrage und Auswertung

Stand 03.09.2026. Beschreibt den Vertrag zwischen Frontend und Backend.
Alles hier Beschriebene ist ausgerollt und gegen die lokale Replik geprüft;
Abweichungen zwischen diesem Dokument und der Datenbank sind Fehler in
diesem Dokument.

## Was schon da war und deshalb nicht neu gebaut wurde

Die Analyse vor dem ersten Codezeile ergab, dass ein erheblicher Teil des
Auftrags bereits existierte. Neu gebaut wurde nur, was tatsächlich fehlte.

| Anforderung | Vorhanden | Ergänzt |
|---|---|---|
| CRM für Anfragen | `leads`, `lead_activities`, `lead_kind`, `lead_status` | 13 Spalten, Statuswert `cancelled` |
| Kampagnen | `advertising_campaigns` mit `campaign_status` | — |
| Werbemittel und Freigabe | `advertising_creatives`, `creative_status`, `advertising_creative_review` | — |
| Werbeflächen und Verträge | `advertising_spaces`, `advertising_space_contracts` | — |
| Sponsoring | `sponsorships` | — |
| E-Mail mit Versandstatus | `email_outbox`, `email_enqueue`, `email_templates` | zwei Vorlagen |
| Protokollierung | `audit_log`, `app.enable_audit` | für zwei neue Tabellen aktiviert |
| Klickzählung | `advertising_redirect_count` | — |
| **Preiskatalog** | — | `advertising_products` |
| **Anfragepositionen mit Preis-Historie** | — | `advertising_inquiry_items` |
| **Standortwunsch** | — | `advertising_inquiry_locations` |
| **Öffentlicher Anfrageweg ohne Konto** | — | `advertising_inquiry_submit` |
| **Werbe-Analytics** | nur Klicks und Coupons | `advertising_events`, `advertising_daily_metrics`, `advertising_campaign_analytics` |

Die im Auftrag skizzierte Tabelle `advertising_inquiries` wurde bewusst
**nicht** angelegt. `public.leads` erfüllt diesen Zweck bereits, hat eine
funktionierende Zugriffsregel und ein Aktivitätenprotokoll. Eine zweite
Anfragetabelle daneben wäre eine zweite Wahrheit gewesen.

## Öffentlich, ohne Konto

### `advertising_catalog() → jsonb`

Der Preisaushang. Rollen `anon` und `authenticated`.

```json
[{ "schluessel": "automat_werbeflaeche", "name": "Automaten-Werbefläche",
   "kategorie": "werbung_analog", "kurzbeschreibung": "…", "beschreibung": "…",
   "leistungen": ["…"], "zielgruppe": "…", "bild_url": null,
   "preis": null, "preis_art": "individuell", "ab_preis": false,
   "mindestlaufzeit_monate": null, "zusatzkosten_hinweis": null }]
```

Gibt **keine** `id` heraus, sondern `schluessel`. Damit gerät keine
Datenbankkennung nach außen und der Frontend-Code bleibt stabil, wenn ein
Produkt neu angelegt wird.

**Preisdarstellung — verbindlich:**

| Zustand | Anzeige |
|---|---|
| `preis_art = "individuell"` (dann ist `preis` immer `null`) | „Preis auf Anfrage" |
| `preis` gesetzt, `ab_preis = false` | `249 € / Monat` (Einheit aus `preis_art`) |
| `preis` gesetzt, `ab_preis = true` | `ab 199 € / Monat` |
| `zusatzkosten_hinweis` gesetzt | zusätzlich als zweite Zeile ausgeben |

Die Datenbank erzwingt das mit Check-Constraints: ein Produkt kann nicht
gleichzeitig „auf Anfrage" und einen Preis haben, und ein „ab" ohne Preis
gibt es nicht. Das Frontend muss diese Fälle trotzdem alle darstellen
können.

`preis_art`: `einmalig` · `monatlich` · `jaehrlich` · `kampagne` ·
`individuell`.
`kategorie`: `werbung_analog` · `werbung_digital` · `sponsoring` ·
`partnerschaft` · `social_media` · `coupon`.

**Stand heute: alle zwölf Einträge stehen auf `individuell`.** Die Preise
sind eine Entscheidung des Betreibers und wurden nicht getroffen. Das
Frontend zeigt deshalb zunächst überall „Preis auf Anfrage". Das ist kein
Fehler und kein Platzhalter, den jemand vergessen hat.

### `advertising_locations() → jsonb`

Standorte für die Auswahl im Formular. `[{ "id": uuid, "name": "…", "ort": "…" }]`
Mehr nicht — keine Koordinaten, keine Automatenkennungen, keine Umsätze.

### `advertising_inquiry_submit(...) → jsonb`

Nimmt die Anfrage entgegen. Rollen `anon` und `authenticated`. **Es
entsteht kein Vertrag** — die Funktion legt einen Lead mit Status `new` an.

| Parameter | Typ | Pflicht | Anmerkung |
|---|---|---|---|
| `p_kind` | `app.lead_kind` | ja | `advertising`, `ad_space`, `sponsoring`, `partnership`, `recruiting`, `event`, `business` |
| `p_company_name` | text | ja | 2–200 Zeichen |
| `p_contact_name` | text | ja | mindestens 2 Zeichen |
| `p_email` | text | ja | wird serverseitig geprüft, höchstens 254 Zeichen |
| `p_datenschutz` | boolean | ja | muss `true` sein, sonst Ablehnung |
| `p_phone`, `p_website`, `p_message`, `p_zielgruppe`, `p_region` | text | nein | Nachricht höchstens 5000 Zeichen |
| `p_budget` | numeric | nein | 0 bis 10 000 000 |
| `p_wunsch_start` | date | nein | |
| `p_wunsch_laufzeit_monate` | int | nein | 1 bis 120 |
| `p_produkte` | text[] | nein | **Schlüssel** aus dem Katalog, höchstens 20 |
| `p_standorte` | uuid[] | nein | höchstens 50 |
| `p_standort_egal` | boolean | nein | „Standort egal" ist etwas anderes als „keine Auswahl" |
| `p_werbemittel_vorhanden`, `p_werbemittel_durch_uns` | boolean | nein | |
| `p_marketing` | boolean | nein | Werbeeinwilligung, getrennt und freiwillig |
| `p_hp` | text | nein | Honigtopf, siehe unten |

Antwort: `{ "anfrage_nummer": "BS24-K7M2XQ", "gespeichert": true }`

Bewusst **keine** `lead_id` in der Antwort. Wer eine Kennung in der Hand
hält, versucht sie anderswo.

**Fehler, die das Formular abfangen muss:**

| SQLSTATE | Bedeutung | Anzeige |
|---|---|---|
| `22023` | Pflichtangabe fehlt oder ist unbrauchbar | Die Meldung der Datenbank ist deutschsprachig und für Endnutzer formuliert — direkt anzeigen |
| `53400` | Drossel greift | Meldung anzeigen, Formular nicht zurücksetzen |

**Honigtopf:** `p_hp` wird an ein Feld gebunden, das ein Mensch nicht sieht
(`position: absolute; left: -9999px`, `tabindex="-1"`, `autocomplete="off"` —
**nicht** `display: none`, das füllen manche Bots gezielt nicht aus). Ist es
gefüllt, antwortet die Funktion `{"anfrage_nummer": "BS24-000000",
"gespeichert": false}` und speichert nichts. Das Frontend zeigt trotzdem die
normale Bestätigungsseite — der Absender soll nicht merken, dass er erkannt
wurde.

**Drossel:** drei Anfragen je E-Mail-Adresse und Tag, achtzig insgesamt.
Beides in `app.betriebsparameter` einstellbar.

**Was serverseitig NICHT möglich ist:** eine Begrenzung je IP-Adresse. Die
IP steht einer Datenbankfunktion nicht zur Verfügung. Diese Grenze gehört an
den Rand des Systems — Edge Function, Reverse Proxy oder Turnstile — und
**fehlt bis dahin**. Das ist eine offene Lücke, keine erledigte Anforderung.

## Verwaltung

Alle vier prüfen `is_admin()` oder `auth_has_permission('leads.manage')`
beziehungsweise `'advertising.manage'` selbst. Das Ausführungsrecht allein
ist kein Zugriffsschutz.

| Funktion | Zweck |
|---|---|
| `advertising_inquiry_detail(p_lead uuid)` | Anfrage mit Positionen, Standorten, Verlauf und **Versandstatus beider E-Mails** |
| `advertising_inquiry_contacted(p_lead uuid, p_notiz text)` | hält fest, dass wirklich Kontakt aufgenommen wurde |
| `advertising_inquiries_overdue()` | Anfragen ohne Erstkontakt jenseits der Frist |
| `advertising_product_set(...)` | Katalogpflege, legt an oder ändert über den Schlüssel |

`erstkontakt_am` wird **nur beim ersten Mal** gesetzt. Die
48-Stunden-Auswertung soll nicht dadurch grün werden, dass jemand ein
zweites Mal auf den Knopf drückt. Und sie hängt am Erstkontakt, nicht am
Status: einen Status kann man setzen, ohne angerufen zu haben.

## Preis-Historie

`advertising_inquiry_items` speichert je Position `produkt_name`,
`produkt_schluessel`, `preis`, `preis_art` und `ab_preis` **als Kopie**.
Ändert sich der Katalog, ändert sich die Anfrage nicht. Verschwindet das
Produkt ganz, wird `product_id` zu `null` und die Position bleibt trotzdem
vollständig lesbar. Beides ist mit Testfällen belegt (T5, T6 in
`scripts/pruefumgebung/97_unternehmensbereich.sql`).

## Auswertung für den Werbekunden

### `advertising_campaign_analytics(p_campaign, p_von, p_bis, p_dimension) → jsonb`

Rolle `authenticated`. Prüft `app.darf_kampagne_lesen` — Mitgliedschaft in
der Firma der Kampagne, einschließlich der Rolle `viewer`.

`p_dimension` ist auf fünf feste Werte begrenzt: `gesamt`, `tag`, `kanal`,
`creative`, `standort`. **Freie Filterkombinationen gibt es nicht**, weil
sich damit einzelne Personen einkreisen ließen. Zeitraum höchstens 400 Tage.

```json
{ "campaign_id": "…", "von": "…", "bis": "…", "ebene": "tag",
  "mindestgruppe": 30,
  "summe": { "impressions": 1800, "views": 1600, "views_3s": 700,
             "clicks": 90, "qr_scans": 0, "coupon_views": 0,
             "coupon_aktivierungen": 0, "coupon_einloesungen": 0,
             "kontakte": 550 },
  "zeilen": [ { "gruppe": "2026-09-01", "impressions": 1000, … },
              { "gruppe": "2026-09-03", "impressions": null,
                "impressions_unter_mindestzahl": true, … } ],
  "ctr_prozent": 5.00,
  "hinweis": "Alle Werte sind zusammengefasst und anonym. …" }
```

**Der `hinweis` gehört sichtbar ins Dashboard**, nicht nur in die
Datenschutzerklärung. Er wird vom Backend geliefert und darf nicht im
Frontend umformuliert werden.

Ist ein Wert `null` und das zugehörige `…_unter_mindestzahl` steht auf
`true`, zeigt das Frontend „Für diesen Zeitraum stehen aus Datenschutz­gründen
keine ausreichenden Daten zur Verfügung" — **keine Null, kein Strich, kein
leeres Feld**. Eine 0 dagegen ist ein echter Wert und wird als 0 gezeigt.

### Wie die Unterdrückung arbeitet

Zwei Stufen, beide in `app.analytics_maskieren`, beide serverseitig:

1. **Primär:** jeder Wert zwischen 1 und k−1 verschwindet. Eine 0 bleibt
   stehen — sie sagt „niemand", und niemand ist nicht identifizierbar.
2. **Sekundär:** bleibt danach genau eine Zelle unterdrückt, ließe sie sich
   aus der Gesamtsumme minus den sichtbaren Zellen zurückrechnen. Dann fällt
   die nächstkleinere Zelle mit weg. Ohne diesen zweiten Schritt wäre die
   Mindestgruppengröße eine Zierde.

k steht in `app.betriebsparameter` unter `analytics.mindestgruppe`, heute
30. **Der Wert ist eine betriebliche Festlegung und rechtlich nicht
abschließend geprüft.**

### `advertising_event_record(p_campaign, p_art, p_kanal, p_creative, p_location, p_dauer_ms)`

Erfassung. Rolle `authenticated`.

`p_art`: `impression` · `view` · `view_3s` · `click` · `qr_scan` ·
`landingpage_view` · `coupon_view` · `coupon_activate` · `coupon_redeem`
`p_kanal`: `app` · `automat_display` · `automat_flaeche` · `qr_code` ·
`website` · `social_media` · `coupon`

Wer `view_3s` meldet, aber weniger als 3000 ms in `p_dauer_ms` mitschickt,
bekommt ein `view` eingetragen. Die Kennzahl heißt so, wie sie gemessen
wurde, oder sie heißt anders.

**Ohne Anmeldung wird nichts gezählt.** Eine anonyme Zählung ließe sich
beliebig aufblasen. Das hat eine Folge für die Beschriftung im Dashboard:
gezählt werden **Werbekontakte in angemeldeten Sitzungen**, nicht „Personen
erreicht" und nicht „Nutzer gesehen". Diese Begriffe sind im
Unternehmensbereich unzulässig.

## Was der Werbekunde niemals sieht

`advertising_events` enthält `profile_id` und hat RLS mit **null Policies**
— auch ein angemeldetes Verwaltungskonto kommt über die Tabelle an keine
Zeile. `advertising_daily_metrics` ebenso. Der einzige Weg zu Zahlen führt
über `advertising_campaign_analytics`, weil nur dort die
Mindestgruppengröße greift.

Belegt in `scripts/pruefumgebung/98_werbe_analytics.sql`:

* T6: Rohdaten und Verdichtung für Kunde und Verwaltung gleichermaßen
  unerreichbar (Zählung −1, also Fehler)
* T8: ein Fremder bekommt `42501` auf die Auswertung
* T8b: ein `viewer` derselben Firma bekommt die Zahlen
* T8c/T8d: derselbe `viewer` sieht **0 Zeilen** in `businesses`, ein
  `admin` derselben Firma sieht 1 — die Steuernummer bleibt dem Betrachter
  verschlossen
* T5: die gesamte Antwort enthält keinen Personenbezug

## Rollen im Unternehmen

`app.business_role`: `admin` · `member` · `viewer`

`app.is_business_member(b)` ohne Rollenangabe trifft **nur `admin` und
`member`** — ausdrücklich nicht `viewer`. An dieser Funktion hängen 19
bestehende Policies, unter anderem auf `businesses.tax_number`,
`businesses.vat_id`, die Vertragspreise in `advertising_space_contracts` und
die Sponsoringbeträge. Ein neu hinzugefügter Enum-Wert hätte sie sonst
stillschweigend geweitet.

Für den Analytics-Lesezugriff gibt es `app.is_business_reader(b)`, das jede
aktive Mitgliedschaft trifft. Nur dafür verwenden, nie für Stammdaten,
Preise, Verträge, Rechnungen oder personenbezogene Daten.

## Offene Punkte

| Punkt | Status | Verantwortlich |
|---|---|---|
| Begrenzung je IP-Adresse | 🔴 fehlt, gehört an den Rand des Systems | Entwicklung |
| Preise im Katalog | 🔴 nicht gesetzt, alles „auf Anfrage" | Betreiber |
| Mindestgruppengröße 30 rechtlich prüfen | 🟡 betriebliche Festlegung | Betreiber |
| Aufbewahrungsfrist erfolgloser Anfragen | 🟡 ein Jahr gesetzt, § 147 AO ungeklärt | Betreiber |
| `werbe_events_verdichten` und `werbe_events_aufraeumen` planmäßig ausführen | 🔴 kein Zeitplan eingerichtet | Entwicklung |
| Werbemittel-Upload | 🔴 kein Storage-Bucket | Entwicklung |
