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
