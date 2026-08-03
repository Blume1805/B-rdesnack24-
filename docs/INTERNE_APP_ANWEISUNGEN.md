# Fertige Anweisungstexte für die interne App

Stand: 03.08.2026 · Grundlage: ADR 0005 und `INTERNE_APP_ZUSCHNITT.md`

Diese App ist **neu anzulegen** — sie ist nicht der Kundenbereich mit
einem zusätzlichen Menüpunkt. Begründung in ADR 0005: Kunden sollen
keinen Verwaltungscode ausgeliefert bekommen, auch nicht ungenutzt im
JavaScript-Bündel.

Reihenfolge: **I0 zuerst** (legt das Projekt an), dann I1.

---

## I0 · Projekt anlegen (bereit zum Senden)

> Lege eine **neue** App an: das interne Werkzeug für Gesellschafter und
> Mitarbeitende von Bördesnack24. Sie ist getrennt von der Kunden-App und
> teilt mit ihr nur die Datenbank.
>
> **Technisch**
>
> * TanStack Start mit TypeScript, wie die Kunden-App — gleiche Umgebung,
>   gleiche Denkweise.
> * Supabase-Client gegen die **bestehende** Instanz:
>   `https://nnfsyuglkqycwenwxmuw.supabase.co`, Publishable Key
>   `sb_publishable_mptMPA2ptCqFEJ_kJ5c-yw_7nVRCXZ-`, beides aus
>   `import.meta.env` mit diesen Werten als Rückfallebene.
> * **NICHT tun:** kein neues Supabase-Projekt, keine Lovable-eigene
>   Datenbank, keine Migrationen, keine Schemaänderungen. Die Instanz ist
>   produktiv, mit Daten, RLS-Policies und Edge Functions.
> * Setz denselben Sicherheitskommentar an die Client-Datei wie in der
>   Kunden-App: Der Publishable Key ist bewusst öffentlich, der Schutz
>   liegt vollständig in den RLS-Policies, und hier darf **niemals** ein
>   `service_role`- oder `secret`-Key stehen — auch nicht zum Testen.
>
> **Zugang — das ist der wichtigste Teil**
>
> Nur interne Konten kommen hinein. Die Prüfung läuft über eine
> vorhandene Datenbankfunktion:
>
> ```ts
> const { data: isInternal } = await supabase.rpc("is_internal", {
>   uid: session.user.id,
> });
> ```
>
> Sie prüft Rolle **und** Status **und** Löschkennzeichen. Bitte **nicht**
> selbst eine Rollenabfrage bauen — genau diese Verkürzung war eine
> Sicherheitslücke, die in dieser Datenbank behoben werden musste: Eine
> Rolle allein sagt nichts, solange das Konto nicht aktiviert ist.
>
> Wer angemeldet, aber nicht intern ist, bekommt eine ruhige Seite „Kein
> Zugriff" — keine Weiterleitung in die Kunden-App, keine Fehlermeldung
> mit technischen Details.
>
> **Es gibt keinen Demozugang ohne Anmeldung.** Nicht als Bequemlichkeit,
> nicht zum Testen. Zum Ausprobieren dienen echte Konten.
>
> **Aussehen**
>
> Dieselbe Handschrift wie die Kunden-App, aber sachlicher: Es ist ein
> Arbeitswerkzeug, keine Verkaufsfläche. Navy/Gold-Palette, `font-display`
> für Überschriften, `rounded-3xl`, `card-lift`, `surface-navy`.
>
> **Zwei Farb-Token von Anfang an mitnehmen** — in der Kunden-App mussten
> sie nachträglich eingeführt werden, weil Gold als Text auf hellem Grund
> nur 1,76:1 erreicht und damit unlesbar ist:
>
> ```css
> :root {
>   --gold-ink:    oklch(0.545 0.145 85);   /* Textgold auf Hell, 4,98:1 */
>   --success-ink: oklch(0.530 0.13 148);   /* Textgrün auf Hell, 4,98:1 */
> }
> .dark { --gold-ink: var(--gold); --success-ink: oklch(0.72 0.14 148); }
> ```
>
> Regel: `text-gold` nur auf dunklem Grund, `text-gold-ink` auf hellem.
> Gold als Fläche, Rahmen oder Icon bleibt unverändert.
>
> Die App wird auf dem Telefon benutzt, oft im Stehen am Automaten:
> große Tippziele (mindestens 44 px), wenige Felder je Bildschirm,
> Sprache durchgehend Deutsch und in der Du-Form wie im Rest.
>
> **Umfang dieses ersten Schritts**
>
> Nur Grundgerüst: Client, Anmeldung mit Rollenprüfung, leere Startseite
> mit Navigation. **Noch keine Fachbereiche** — die kommen einzeln.

---

## I1 · Tagesgeschäft: Protokolle (bereit zum Senden, nach I0)

> Baue die sechs Protokollbereiche. Alle folgen demselben Muster:
> Automat wählen, wenige Felder ausfüllen, absenden — und darunter die
> letzten Einträge.
>
> **Eine Eigenschaft, die alles bestimmt: diese Protokolle sind
> unveränderlich.** Die Datenbank erlaubt ausschließlich `insert` und
> `select` — es gibt keine `update`- und keine `delete`-Policy. Das ist
> kein Versehen, sondern Absicht: Es sind Aufzeichnungen nach
> Lebensmittelhygiene- und Aufbewahrungsrecht.
>
> Bitte deshalb **keine Bearbeiten- oder Löschen-Schaltflächen** bauen.
> Ein Korrektureintrag ist ein neuer Eintrag, nicht die Änderung des
> alten. Ein Knopf, der still fehlschlägt, ist schlimmer als keiner.
>
> **Berechtigungen**
>
> Der Zugriff hängt nicht an der Rolle, sondern an einzelnen
> Berechtigungen. Vor dem Anzeigen prüfen:
>
> ```ts
> const { data } = await supabase.rpc("my_permissions");
> ```
>
> Wer eine Berechtigung nicht hat, bekommt den Bereich **gar nicht zu
> sehen** — kein ausgegrauter Menüpunkt, der beim Antippen scheitert.
>
> ### Die sechs Tabellen
>
> `!` = Pflichtfeld. `recorded_by` und `created_at` **nicht** senden, die
> setzt die Datenbank.
>
> **1 · Reinigung** — `cleaning_logs`, Berechtigung `haccp.cleaning`
>
> ```
> machine_id!      uuid      Automat
> cleaned_at!      timestamptz  Zeitpunkt (Standard: jetzt, änderbar)
> cleaning_type!   enum      exterior | interior | full
> agent            text      verwendetes Mittel
> notes            text
> photo_path       text      Storage-Pfad (optional, siehe unten)
> signature_path   text      Storage-Pfad (optional)
> ```
>
> **2 · Temperatur** — `temperature_logs`, Berechtigung `haccp.temperature`
>
> ```
> machine_id!       uuid
> measured_at!      timestamptz
> temperature_c!    numeric    gemessener Wert
> within_limit      boolean    innerhalb des Sollbereichs?
> corrective_action text       Korrekturmaßnahme
> photo_path        text
> ```
>
> **Fachliche Regel, die in die Oberfläche gehört:** Ist `within_limit`
> falsch, muss `corrective_action` ausgefüllt sein. Eine Abweichung ohne
> dokumentierte Maßnahme ist der klassische Mangel bei einer
> Lebensmittelkontrolle. Bitte im Formular erzwingen, nicht nur empfehlen.
>
> **3 · Wartung** — `maintenance_logs`
>
> ```
> machine_id!   uuid
> reported_at!  timestamptz
> issue!        text      was ist aufgefallen
> action        text      was wurde getan
> performed_by  text      wer (freier Text, auch externe Firma)
> cost_amount   numeric
> resolved!     boolean   erledigt?
> ```
>
> **4 · Entsorgung** — `disposal_logs`
>
> ```
> machine_id     uuid      optional
> product_id     uuid      optional
> product_label  text      Ersatz, wenn kein Produkt ausgewählt
> quantity!      integer
> reason!        enum      mhd | damage | hygiene | other
> mhd_date       date
> lot_expiry     date
> disposed_at!   timestamptz
> photo_path     text
> ```
>
> Bei `reason = 'mhd'` bitte `mhd_date` verlangen — sonst fehlt der Beleg
> für den Grund.
>
> **5 · Befüllung** — `filling_logs`, Berechtigung `haccp.fill`
>
> ```
> machine_id!      uuid
> product_id!      uuid
> quantity!        integer
> mhd_checked!     boolean   MHD geprüft?
> removed_spoiled! integer   dabei aussortierte Stücke (0 erlaubt)
> filled_at!       timestamptz
> unit_cost        numeric   Einkaufspreis je Stück
> invoice_number   text
> invoice_date     date
> lot_expiry       date
> ```
>
> `unit_cost`, `invoice_number` und `lot_expiry` speisen die
> FIFO-Bewertung der Inventur. Wer sie wegen „geht schneller" weglässt,
> macht die spätere Bewertung ungenau — bitte als Feld anbieten, auch wenn
> es optional ist.
>
> **6 · Kassenleerung** — `cash_collection_logs`
>
> ```
> machine_id!     uuid
> collected_at!   timestamptz
> amount_gross!   numeric   entnommener Betrag
> change_amount!  numeric   eingelegtes Wechselgeld
> net_amount      numeric   optional
> ```
>
> ### Gemeinsames
>
> * **Automatenliste**: `supabase.from("machines").select("id, code, name,
>   location_name, city").is("deleted_at", null)`. Die Namen lauten
>   derzeit „Automat 1" bis „Automat 3" und „(ANPASSEN)" — das ist so, die
>   echten Stammdaten fehlen noch. Bitte nichts beschönigen.
> * **Produktliste** für Befüllung und Entsorgung: `products`, gefiltert
>   auf `status = 'active'` und `deleted_at is null`.
> * **Fotos** (`photo_path`, `signature_path`) verweisen auf Supabase
>   Storage. Für diesen Schritt bitte **weglassen** — Felder nicht
>   anzeigen. Kommt als eigener Schritt, sonst wird I1 zu groß.
> * **Letzte Einträge** je Bereich: die letzten 20, absteigend nach
>   Zeitpunkt, mit Automatennamen. Reines Lesen.
>
> Gestaltung nach I0. Große Tippziele, wenige Felder, Deutsch, Du-Form.

### Prüfliste nach `get_diff` (I1)

- [ ] Keine Bearbeiten- oder Löschen-Schaltfläche in irgendeinem Protokoll
- [ ] Bereiche ohne Berechtigung sind unsichtbar, nicht ausgegraut
- [ ] Temperatur: außerhalb des Limits erzwingt eine Korrekturmaßnahme
- [ ] Entsorgung: `reason = 'mhd'` erzwingt `mhd_date`
- [ ] `recorded_by` und `created_at` werden **nicht** vom Client gesendet
- [ ] Enum-Werte exakt: `exterior|interior|full`, `mhd|damage|hygiene|other`
- [ ] Befüllung bietet Einkaufspreis, Rechnungsnummer und Lot-MHD an
- [ ] Keine Foto-Felder in diesem Schritt
- [ ] Automatennamen unverändert übernommen, nichts beschönigt

---

## I5a · E-Mail-Protokoll (bereit zum Senden, nach I0)

> Baue die Ansicht „E-Mails" — das vollständige Protokoll aller
> versendeten und empfangenen Nachrichten, mit Suche, Filter,
> Detailansicht und Export.
>
> **Warum es das gibt:** Der Betrieb muss jede Mail nachweisen können —
> Kündigungsbestätigungen, Rechnungen, Freigabe-Benachrichtigungen. Nicht
> „die meisten", sondern jede. Das Protokoll wird an der einen Stelle
> geschrieben, durch die jeder Versand läuft; deine Aufgabe ist nur noch,
> es sichtbar zu machen.
>
> **Berechtigung:** Nur interne Rollen. Das prüft die Datenbank selbst —
> ein Kunde bekommt schlicht null Zeilen zurück. Du brauchst **keine**
> eigene Rollenabfrage. Den Menüpunkt trotzdem nur zeigen, wenn
> `supabase.rpc("is_internal")` `true` liefert.
>
> ### Kopfzeile mit Kennzahlen
>
> ```ts
> const { data } = await supabase.rpc("email_log_stats");
> // gesamt, ausgehend, eingehend, gescheitert, simuliert, letzte_mail
> ```
>
> Fünf Kacheln. **`gescheitert` muss auffallen** (rot), wenn > 0 — das
> sind Mails, die der Anbieter abgelehnt hat, und die jemand ansehen
> sollte. `simuliert` bedeutet: kein Versandschlüssel gesetzt, die Mail
> wurde nur protokolliert. Das ist ein Betriebszustand, kein Fehler —
> bitte neutral darstellen (grau), nicht als Warnung.
>
> ### Die Liste
>
> ```ts
> const { data } = await supabase.rpc("email_log_list", {
>   p_direction: null,   // 'out' | 'in' | null
>   p_status:    null,   // 'sent' | 'failed' | 'dev' | 'received' | null
>   p_search:    null,   // sucht in Betreff, Adressen und Anlass
>   p_from:      null,   // ISO-Zeitstempel
>   p_to:        null,
>   p_limit:     50,
>   p_offset:    0,
> });
> ```
>
> Spalten: Zeitpunkt, Richtung, Status, Empfänger, Betreff, Anlass.
> `total_count` steht in jeder Zeile und ist die Gesamtzahl **über den
> aktuellen Filter** — daraus die Seitenzahl bilden, keine zweite Abfrage.
>
> Die Liste enthält **absichtlich nicht** den Mailinhalt; bei 50 Zeilen
> wären das schnell einige Megabyte. `has_html` und `has_text` sagen dir
> vorab, ob es etwas anzuzeigen gibt.
>
> Filterleiste: Richtung (alle / ausgehend / eingehend), Status,
> Zeitraum, Suchfeld. Die Suche bitte entprellen (~300 ms).
>
> ### Detailansicht
>
> ```ts
> const { data } = await supabase.rpc("email_log_detail", { p_id: id });
> ```
>
> Kopfdaten oben, darunter die HTML-Fassung. **Das HTML stammt aus
> unseren eigenen Vorlagen, aber eingehende Post wird später fremdes HTML
> enthalten** — deshalb in einem `<iframe sandbox>` anzeigen, niemals mit
> `dangerouslySetInnerHTML`. Umschalter auf die Textfassung, wenn
> `has_text`.
>
> Ist `status = 'failed'`, den Fehlertext des Anbieters sichtbar
> anzeigen — der erklärt meistens sofort, was los war (Tippfehler in der
> Adresse, abgelehnte Domain).
>
> ### Export
>
> Zwei Knöpfe. Beide rufen die Edge Function `email-export` mit dem Token
> der angemeldeten Person auf und laden das Ergebnis als Datei herunter:
>
> ```ts
> const { data: { session } } = await supabase.auth.getSession();
> const res = await fetch(`${SUPABASE_URL}/functions/v1/email-export`, {
>   method: "POST",
>   headers: {
>     "Authorization": `Bearer ${session.access_token}`,
>     "Content-Type": "application/json",
>   },
>   body: JSON.stringify({ format: "csv", ...aktuelleFilter }),
> });
> const blob = await res.blob();   // dann als Download anbieten
> ```
>
> * **„Liste exportieren"** — `format: "csv"`, mit **denselben Filtern,
>   die gerade eingestellt sind**. Das ist wichtig: Wer nach „Kündigung"
>   filtert und exportiert, erwartet die gefilterte Liste, nicht alles.
>   Öffnet direkt in Excel.
> * **„Diese Mail exportieren"** (in der Detailansicht) —
>   `format: "eml", id: <id>`. Ergibt eine echte `.eml`-Datei, die sich in
>   Outlook oder Apple Mail öffnen lässt.
>
> Den Dateinamen aus dem `Content-Disposition`-Kopf übernehmen, nicht
> selbst bauen. `X-Zeilen` sagt, wie viele Zeilen drin sind — schöne
> Rückmeldung nach dem Export („1.234 Zeilen exportiert").
>
> ### Wenn das Protokoll leer ist
>
> Am Anfang steht dort nichts, weil erst ab dem 03.08.2026 protokolliert
> wird. Bitte einen erklärenden Leerzustand bauen, keine leere Tabelle:
> „Noch keine E-Mails protokolliert. Aufgezeichnet wird ab dem
> 03.08.2026."
>
> ### Was hier nicht hingehört
>
> Keine Möglichkeit, aus dieser Ansicht heraus Mails zu **senden**, zu
> **bearbeiten** oder zu **löschen**. Es ist ein Protokoll. Die Datenbank
> lässt Schreiben ohnehin nur serverseitig zu — ein Knopf dafür würde
> still fehlschlagen.

**Prüfliste nach dem Senden** (`get_diff`):

- [ ] Menüpunkt nur bei `is_internal() === true`
- [ ] Keine eigene Rollenabfrage nachgebaut
- [ ] Kennzahlen-Kacheln, `gescheitert > 0` fällt auf, `simuliert` neutral
- [ ] Seitenzahl aus `total_count`, keine zweite Zählabfrage
- [ ] HTML-Vorschau in `<iframe sandbox>`, **kein** `dangerouslySetInnerHTML`
- [ ] Export übernimmt die aktuell eingestellten Filter
- [ ] Dateiname aus `Content-Disposition`
- [ ] Kein Senden/Bearbeiten/Löschen in der Ansicht
- [ ] Erklärender Leerzustand statt leerer Tabelle

---

## Zum Testen

| Konto | Rolle | Berechtigungen |
|---|---|---|
| `demo-admin@boerdesnack24.app` | system_admin | alle |
| `demo-gs@boerdesnack24.app` | shareholder | HACCP + Inventur (geprüft) |

Passwort für beide: `Boerde-Demo-2026!`

**Das eigene Konto `philipp_blume@gmx.de` ist als `customer` geführt** und
kommt damit nicht hinein. Für den Dauerbetrieb gehört es auf
`shareholder` — das darf nur ein Administrator ändern
(`guard_profile_update`).
