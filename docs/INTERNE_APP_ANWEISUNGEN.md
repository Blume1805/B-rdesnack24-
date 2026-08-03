# Fertige Anweisungstexte für die interne App

Stand: 03.08.2026 · Grundlage: ADR 0005 und `INTERNE_APP_ZUSCHNITT.md`

Diese App ist **neu anzulegen** — sie ist nicht der Kundenbereich mit
einem zusätzlichen Menüpunkt. Begründung in ADR 0005: Kunden sollen
keinen Verwaltungscode ausgeliefert bekommen, auch nicht ungenutzt im
JavaScript-Bündel.

Reihenfolge: **I0 zuerst** (legt das Projekt an), danach I1 bis I5.

| Block | Inhalt | Voraussetzung |
|---|---|---|
| **I0** | Projekt anlegen | — |
| **I1** | Tagesgeschäft: die sechs Protokolle | I0 |
| **I2** | Inventur und Bewertung | I1 |
| **I3** | Finanzen | ⚠️ erst die acht `manual`-Demo-Käufe bereinigen |
| **I4** | Dokumente und Freigaben | I0 · grösster Block |
| **I5** | Telemetrie, Reklamationen, Kündigungen, Mitarbeitende | I0 |
| **I5a** | E-Mail-Protokoll ansehen und exportieren | I0 |
| **I5b** | E-Mail-Vorlagen bearbeiten | I0 |

I2 bis I5b hängen nur an I0 und aneinander, wo es oben steht — sie lassen
sich also auch parallel beauftragen, wenn Credits übrig sind.

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

## I2 · Inventur und Bewertung (bereit zum Senden, nach I1)

> Baue die Inventuransicht. **Der Rechenkern liegt vollständig in der
> Datenbank** — FIFO-Lots, Einstandspreise, MHD-Abwertung. Deine Aufgabe
> ist anzeigen, nicht rechnen. Bitte keine Summe im Frontend nachbilden,
> auch nicht „zur Kontrolle": Weichen die Zahlen ab, glaubt niemand mehr
> einer von beiden.
>
> **Berechtigung:** über `my_permissions()`, wie in I1. Ohne die
> Inventur-Berechtigung ist der Bereich gar nicht sichtbar.
>
> ### Drei Abfragen
>
> ```ts
> // Bestand und Bewertung über einen Zeitraum
> await supabase.rpc("inventory_report", { p_from: vonISO, p_to: bisISO });
>
> // Offene FIFO-Lose zu einem Stichtag
> await supabase.rpc("inventory_fifo_lots", { p_as_of: stichtagISO });
>
> // Zu- und Abgänge über einen Zeitraum
> await supabase.rpc("inventory_fifo_movements", { p_from: vonISO, p_to: bisISO });
> ```
>
> Alle drei nehmen `timestamptz`, keine Datumszeichenketten ohne Zeitzone.
> Schick ISO-Zeitstempel.
>
> ### Aufbau
>
> Kopfzeile mit Zeitraumwahl (Vormonat, laufender Monat, frei), darunter je
> Automat eine aufklappbare Gruppe mit den Produkten. Spalten: Menge,
> Einstandswert, Verkaufswert, Abwertung.
>
> **Die Abwertung braucht eine Erklärung in der Oberfläche.** Ware nähert
> sich dem Mindesthaltbarkeitsdatum und wird stufenweise abgewertet — wer
> die Zahl zum ersten Mal sieht, hält sie für einen Fehler. Ein Satz unter
> der Spalte genügt: „Ware kurz vor dem MHD wird gestuft abgewertet."
>
> ### Druckansicht
>
> Für den Druck **nicht** das Browser-Druckbild der normalen Ansicht
> nehmen, sondern eine eigene Route mit eigenem Layout: keine Navigation,
> Tabellen ungeschnitten, Kopf mit Zeitraum und Erstellungsdatum. In
> Flutter existiert das bereits als Web-Variante — das Problem ist also
> schon einmal gelöst worden und muss nicht neu erfunden werden.
>
> Eine Inventurliste wird ausgedruckt und abgeheftet; sie ist ein Beleg.
> Abgeschnittene Spalten machen sie wertlos.

**Prüfliste nach dem Senden** (`get_diff`):

- [ ] Keine Summe im Frontend nachgerechnet
- [ ] Zeitstempel mit Zeitzone an alle drei RPCs
- [ ] Abwertung wird erklärt, nicht nur angezeigt
- [ ] Eigene Druckroute, keine abgeschnittenen Tabellen
- [ ] Bereich unsichtbar ohne Berechtigung

---

## I3 · Finanzen (bereit zum Senden — aber Reihenfolge beachten)

> **Vor der Umsetzung lesen:** In den Finanzzahlen stecken noch acht
> Demo-Käufe mit `source = 'manual'`. Sie stammen aus der Erprobung und
> sind kein echter Umsatz. Solange sie drin sind, prüft man die neue
> Anzeige gegen falsche Werte — und merkt den Unterschied nicht, weil beide
> Seiten dieselbe falsche Zahl zeigen.
>
> Diese acht Zeilen gehören vorher bereinigt (vgl. Migration 0078, die
> dasselbe für die als `demo` gekennzeichneten Käufe bereits erledigt).
>
> ### Die Abfragen
>
> ```ts
> await supabase.rpc("finance_summary", { p_from: "2026-07-01", p_to: "2026-07-31" });
> await supabase.rpc("finance_kpis",    { p_from: "2026-07-01", p_to: "2026-07-31" });
> await supabase.rpc("finance_balance_kpis");           // ohne Zeitraum
> await supabase.rpc("datev_export_rows", { p_from, p_to });
> await supabase.rpc("business_customers_csv");
> ```
>
> Die ersten drei liefern **`jsonb`**, kein Zeilenformat — also ein Objekt,
> das du direkt auslesen kannst. `p_from`/`p_to` sind hier `date`
> (`YYYY-MM-DD`), nicht `timestamptz` wie bei der Inventur. Der Unterschied
> ist echt und kein Versehen.
>
> ### Bilanzwerte erfassen
>
> ```ts
> await supabase.rpc("upsert_finance_balance", {
>   p_as_of: "2026-07-31",
>   p_cash_and_bank: 0, p_receivables: 0, p_inventory_value: 0,
>   p_other_current_assets: 0, p_fixed_assets: 0,
>   p_current_liabilities: 0, p_long_term_liabilities: 0, p_equity: 0,
> });
> ```
>
> Alle neun Werte sind Pflicht. Ein Formular mit Stichtag und neun
> Betragsfeldern, gruppiert nach Aktiva und Passiva. **Bitte die Summen
> beider Seiten anzeigen und ihre Differenz** — wer eine Bilanz eingibt,
> will sofort sehen, ob sie aufgeht, und nicht erst nach dem Speichern.
>
> ### DATEV-Ausgabe
>
> `datev_export_rows` liefert `booking_date`, `tax_rate`, `gross`. Daraus
> eine CSV bauen: Semikolon als Trenner, Komma als Dezimaltrennzeichen,
> Datum als `TT.MM.JJJJ`. Das ist es, was die Steuerkanzlei erwartet — ein
> Punkt als Dezimaltrennzeichen kostet dort Nacharbeit.
>
> Zwei Edge Functions gehören zu diesem Bereich (`finance-balance-sync`,
> `finance-export-pdf`). Die bleiben unverändert — sie sind vom Client
> unabhängig, du rufst sie nur auf.
>
> ### Geld sieht man an
>
> Beträge rechtsbündig, feste Nachkommastellen, Tausenderpunkte, Minus
> deutlich. Kein Diagramm ohne Achsenbeschriftung. Und keine Kennzahl ohne
> Zeitraum daneben — „Umsatz 4.812 €" ohne Angabe wofür ist keine Auskunft.

**Prüfliste nach dem Senden** (`get_diff`):

- [ ] Die acht `manual`-Demo-Käufe sind vorher bereinigt
- [ ] `date` bei Finanzen, `timestamptz` bei Inventur — nicht vertauscht
- [ ] Bilanzformular zeigt beide Summen und die Differenz live
- [ ] DATEV-CSV mit Semikolon, Dezimalkomma, `TT.MM.JJJJ`
- [ ] Jede Kennzahl trägt ihren Zeitraum
- [ ] Beträge rechtsbündig mit festen Nachkommastellen

---

## I4 · Dokumente und Freigaben (bereit zum Senden — der heikelste Block)

> Der grösste Block, und der mit den meisten Fallstricken: Hier hängen
> Vier-Augen-Freigaben und Unterschriften dran. Ein Fehler ist hier kein
> Anzeigefehler, sondern ein Formfehler.
>
> ### Dokumente
>
> ```ts
> await supabase.rpc("list_document_folders");
> await supabase.rpc("list_documents");
> await supabase.rpc("list_document_signature_tasks", { p_document: id });
> await supabase.rpc("request_document_review", { p_document: id });
> ```
>
> Ordnerbaum links, Dokumentenliste rechts, Versionen pro Dokument. Dateien
> liegen im Storage-Bucket `documents`; Download über eine signierte URL,
> **nie** über einen öffentlichen Link.
>
> ### Freigaben
>
> ```ts
> await supabase.rpc("list_document_approvals", { p_mine_only: true });
> await supabase.rpc("decide_document_approval", {
>   p_approval_id: id,
>   p_decision: "approved",   // Aufzählungstyp: approved | rejected
>   p_comment: "…",
> });
> ```
>
> `p_mine_only: true` zeigt nur, was auf **mich** wartet — das ist die
> Standardansicht. Ein Umschalter zeigt alle.
>
> **Drei Dinge, die die Datenbank erzwingt und die die Oberfläche nicht
> unterlaufen darf:**
>
> 1. Wer ein Dokument eingereicht hat, darf es **nicht selbst freigeben**.
>    Der Knopf gehört bei eigenen Vorgängen gar nicht erst hin — nicht
>    ausgegraut, sondern weg, mit einer Zeile Erklärung.
> 2. Eine Ablehnung **ohne Begründung** ist wertlos. Kommentar bei
>    `rejected` zur Pflicht machen.
> 3. Eine getroffene Entscheidung ist **endgültig**. Kein
>    „Bearbeiten"-Knopf. Wer sich vertan hat, startet einen neuen Vorgang.
>
> ### Unterschriften
>
> ```ts
> await supabase.rpc("list_my_signature_tasks");
> await supabase.rpc("submit_employee_signature", { /* uuid, text, text */ });
> await supabase.rpc("list_employees_for_signature");
> await supabase.rpc("list_partner_signatures");
> ```
>
> **Das ist der einzige Punkt, für den es keine fertige Vorlage gibt.** Die
> Unterschrift wird auf dem Bildschirm gezeichnet — im Browser mit einem
> Canvas-Element. Das ist Neubau, und er muss auf dem Telefon mit dem
> Finger genauso funktionieren wie am Rechner mit der Maus.
>
> Worauf es dabei ankommt:
>
> * **Pointer Events**, nicht Maus- und Touch-Ereignisse getrennt.
> * Canvas in **Geräteauflösung** zeichnen (`devicePixelRatio`), sonst wird
>   die Unterschrift auf dem Telefon eine verwaschene Treppe.
> * `touch-action: none` auf der Zeichenfläche, sonst scrollt die Seite
>   beim Unterschreiben weg.
> * **Zurücksetzen-Knopf**, gut erreichbar. Die erste Unterschrift gelingt
>   selten.
> * Absenden erst, wenn wirklich gezeichnet wurde — ein leeres Bild darf
>   nicht als Unterschrift durchgehen.
> * Als PNG mit durchsichtigem Hintergrund übergeben.
>
> Eine Unterschrift ist ein Beweismittel. Wenn etwas unklar ist, lieber
> nachfragen als raten.

**Prüfliste nach dem Senden** (`get_diff`):

- [ ] Download nur über signierte URLs
- [ ] Kein Freigabeknopf bei eigenen Vorgängen (weg, nicht ausgegraut)
- [ ] Kommentar bei Ablehnung ist Pflicht
- [ ] Keine Möglichkeit, eine Entscheidung zu ändern
- [ ] Unterschrift mit Pointer Events und `devicePixelRatio`
- [ ] `touch-action: none`, Zurücksetzen-Knopf, leeres Bild wird abgelehnt

---

## I5 · Sonstiges (bereit zum Senden, jederzeit)

> Vier Bereiche ohne Abhängigkeiten untereinander — in beliebiger
> Reihenfolge baubar. (Das E-Mail-Protokoll und der Vorlagen-Editor gehören
> ebenfalls hierher, siehe I5a und I5b.)
>
> ### Telemetrie
>
> Tabellen: `machine_devices`, `machine_health`, `machine_telemetry_events`,
> `telemetry_providers`. Der grösste Einzelbereich, aber fachlich isoliert.
>
> Übersicht mit einer Kachel je Automat: erreichbar/nicht erreichbar,
> letzte Meldung, offene Störungen. **„Zuletzt gemeldet vor 3 Stunden" ist
> die wichtigste Zahl** — ein Automat, der schweigt, ist das eigentliche
> Problem, nicht einer, der eine Störung meldet. Eine ausbleibende Meldung
> darf nicht als „alles in Ordnung" durchgehen.
>
> ### Reklamationen
>
> Tabelle `purchase_complaints`. Liste mit Zustand, Detailansicht mit dem
> zugehörigen Kauf. Bearbeitungszustand änderbar, Verlauf sichtbar.
>
> ### Kündigungen
>
> Tabelle `cancellation_requests`. **Bitte den Eingangszeitpunkt
> unverändert anzeigen** — er ist der rechtlich maßgebliche Zeitpunkt
> (§ 312k BGB). Kein Runden auf Tage, keine relative Angabe wie „vor
> 2 Tagen" als einzige Information.
>
> ### Mitarbeitende
>
> Tabelle `profiles` plus Edge Function `invite-user` zum Einladen.
>
> **Wichtig:** Rolle und Berechtigungen einer eingeladenen Person werden
> beim Einladen gesetzt. Die Datenbank übernimmt eine Rolle aus den
> Anmeldedaten ausschliesslich bei einer echten Einladung — bei einer
> Selbstregistrierung ist die Rolle immer `customer` (Migration 0087). Bau
> also kein Formular, das bei der Registrierung eine Rolle anbietet; es
> würde stillschweigend ignoriert.
>
> Eingeladene Konten stehen zunächst auf `invited` und sind **noch nicht**
> handlungsfähig. Diesen Zustand bitte sichtbar machen, sonst wundert sich
> jemand, warum die neue Kollegin nichts sieht.

**Prüfliste nach dem Senden** (`get_diff`):

- [ ] Schweigender Automat fällt auf, nicht nur ein meldender
- [ ] Eingangszeitpunkt von Kündigungen unverändert und absolut
- [ ] Kein Rollenfeld bei der Registrierung
- [ ] Zustand `invited` ist sichtbar erklärt

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

## I5b · E-Mail-Vorlagen bearbeiten (bereit zum Senden, nach I0)

> Baue die Ansicht „E-Mail-Vorlagen": eine Liste aller Mails, die das
> System verschickt, und einen Editor für Betreff und Inhalt.
>
> **Berechtigung:** Nur interne Rollen, geprüft von der Datenbank. Wie bei
> I5a keine eigene Rollenabfrage — Menüpunkt nur zeigen, wenn
> `supabase.rpc("is_internal")` `true` liefert.
>
> ### Die Liste
>
> ```ts
> const { data } = await supabase
>   .from("email_templates")
>   .select("key,label,description,subject,body_html,variables,legal_note,is_active,updated_at")
>   .order("label");
> ```
>
> Pro Zeile: Bezeichnung, Beschreibung und ein Zustand. Der Zustand ist
> **die wichtigste Information der ganzen Ansicht**:
>
> * `subject` und `body_html` beide leer → **„Standardtext"**. Es wird die
>   im Programm hinterlegte Fassung verschickt.
> * beide gefüllt und `is_active` → **„Eigener Text"**.
> * gefüllt, aber `is_active = false` → **„Eigener Text (abgeschaltet)"**,
>   es gilt wieder der Standardtext.
>
> ### Der Editor
>
> Felder: Betreff, Vorschauzeile, Inhalt (HTML), Textfassung. Speichern
> über:
>
> ```ts
> await supabase.rpc("email_template_save", {
>   p_key: key,
>   p_subject: betreff,
>   p_body_html: inhalt,
>   p_body_text: textfassung,
>   p_preheader: vorschau,
>   p_is_active: true,
> });
> ```
>
> Ein **leeres** Feld setzt zurück: Wer Betreff und Inhalt leert und
> speichert, bekommt wieder den Standardtext. Bau dafür bitte einen
> eigenen Knopf „Auf Standardtext zurücksetzen" — das ist der Rückweg,
> wenn eine Änderung sich als schlecht erweist, und er muss auffindbar
> sein, ohne dass jemand Felder leert und hofft.
>
> ### Platzhalter
>
> `variables` listet die Platzhalter, die diese Mail kennt, z. B.
> `firstName`, `cancelAt`. Im Text stehen sie als `{{firstName}}`. Zeig sie
> als anklickbare Chips über dem Editor an, die den Platzhalter an der
> Cursorposition einfügen — Abtippen ist eine Fehlerquelle, und ein
> falsch geschriebener Platzhalter erscheint in der Mail als **leere
> Stelle**, nicht als Fehler.
>
> Werte werden beim Einsetzen maskiert. Ein Kundenname kann also kein
> Markup einschleusen — du musst dagegen nichts tun.
>
> ### `legal_note` — bitte nicht wegdesignen
>
> Ist `legal_note` gefüllt, **muss** der Text über dem Editor stehen,
> sichtbar, nicht hinter einem Info-Symbol. Beispiel bei der
> Kündigungsbestätigung: Der Zugang einer Kündigung muss nach
> § 312k Abs. 2 S. 3 BGB bestätigt werden, samt Vertragsende. Wer diese
> Angaben beim Umformulieren streicht, verletzt eine Formvorschrift — und
> merkt es nicht, weil die Mail ja trotzdem rausgeht.
>
> Setz die Warnung optisch als Warnung (gelb/orange), nicht als
> beiläufigen Hinweis.
>
> ### Was hier nicht hingehört
>
> * **Kein Editor für Kopf- und Fusszeile.** Die sind absichtlich nicht in
>   der Datenbank: Dort stehen Impressum, Datenschutz und Widerruf. Lägen
>   sie als Kopie in jeder Vorlage, müsste bei einem Umzug jede einzeln
>   nachgezogen werden — und eine würde vergessen.
> * **Kein Anlegen und kein Löschen von Vorlagen.** Welche Mails es gibt,
>   bestimmt das Programm; die Liste ist ein Katalog, keine freie Sammlung.
>   Eine Vorlage ohne sendende Stelle würde nie verschickt.
> * **Keine Testversand-Funktion in diesem Schritt.** Kommt später, wenn
>   der Weg steht.

**Prüfliste nach dem Senden** (`get_diff`):

- [ ] Zustand je Zeile: Standardtext / Eigener Text / abgeschaltet
- [ ] Eigener Knopf „Auf Standardtext zurücksetzen"
- [ ] Platzhalter als einfügbare Chips, nicht zum Abtippen
- [ ] `legal_note` sichtbar als Warnung, nicht hinter einem Info-Symbol
- [ ] Kein Editor für Kopf-/Fusszeile
- [ ] Kein Anlegen, kein Löschen von Vorlagen

> **Wichtig für die Erwartung der Nutzer:** Eine geänderte Vorlage wirkt
> erst, wenn die Function, die diese Mail verschickt, neu ausgerollt
> wurde. Der Stand steht in `docs/EMAIL_VORLAGEN.md` — bitte diesen Satz
> auch in der Oberfläche unterbringen, solange nicht alle Functions
> umgestellt sind.

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
