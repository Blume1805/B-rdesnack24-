# Bördesnack24 — Gesamtaudit August 2026

**Auftrag:** Masterprompt „Gesamtprüfung, Architekturabgleich, Backend-/Frontend-
Synchronisation, API-Konzept und Weiterentwicklung", Phasen 1–10.
**Stand:** 31.08.2026 · **Prüfgegenstand:** Live-Supabase-Projekt
`nnfsyuglkqycwenwxmuw` (EU, eu-central-1), Git-Repository `blume1805/b-rdesnack24-`,
Lovable-Workspace `boerdesnack24's Lovable` (2 Projekte), Flutter-App `apps/mobile`.

**Methodik:** Katalogabfragen gegen die Live-Datenbank, Auslesen der tatsächlichen
Funktionsrümpfe (`pg_get_functiondef`), Lesen der Frontend-Quelltexte über die
Lovable-API, Abgleich der Signaturen, sowie **36 ausgeführte Negativtests** gegen
die Live-Datenbank mit echten Rollenwechseln (`set local role` + `request.jwt.claims`).
Es wurde **kein produktiver Code und kein produktives Datum verändert**.

> **Methodischer Hinweis in eigener Sache.** Zwei erste Testläufe lieferten
> falsche Ergebnisse: einmal wurde nur der JWT-Claim, nicht die Datenbankrolle
> gesetzt (RLS blieb wirkungslos), einmal führte `SET LOCAL ROLE` in Verbindung
> mit dem Rollback der Subtransaktion dazu, dass **jeder** Test als „grün"
> protokolliert wurde. Beide Läufe wurden verworfen und durch einen Aufbau
> ersetzt, der Rollenwechsel und Protokollierung sauber trennt und Trefferzahlen
> statt „Fehler/kein Fehler" misst. Die hier berichteten Zahlen stammen
> ausschließlich aus dem korrigierten Aufbau.

---

## 1. Executive Summary

Das **Backend ist in einem technisch sehr guten Zustand**. 111 von 111 Tabellen
haben RLS aktiv, 197 Policies, 147 Security-Definer-RPCs mit durchgängigem
internen Guard-Muster. Alle 36 Negativtests — Mandantentrennung, Rollentrennung,
IDOR, Rechteausweitung, anonymer Zugriff — sind **grün**. Die Supabase-Advisors
melden **0 Findings der Stufe ERROR**.

Die eigentlichen Probleme liegen **nicht in der Sicherheit, sondern in der
Synchronisation**. Drei Befunde bestimmen die Roadmap:

**P0-1 — Das Repository ist nicht das Backend.** Die Live-Datenbank trägt
**182 Migrationen**, das Git-Repository **63**. Rund **119 Migrationen aus fünf
Wochen Arbeit** (ab 27.07.2026) existieren ausschließlich in der laufenden
Datenbank: das gesamte B2B-/Firmenkunden-Modell, das Werbenetzwerk, das
E-Mail-System mit Einwilligungsverwaltung, das KI-Register, die Kundenkarte,
SKR03-Kontenstamm und PKW-Nutzungseinlage. Diese Arbeit ist **nicht versioniert,
nicht reviewbar, nicht wiederherstellbar und nicht reproduzierbar**. Geht das
Supabase-Projekt verloren, ist sie weg.

**P0-2 — Werbekennzahlen sind fälschbar.** `advertising_redirect_count()` ist für
`anon` ausführbar, ohne Rate-Limit, ohne Entprellung, ohne Sitzungsbindung. Wer
eine Kampagnen-UUID kennt (sie steht im öffentlichen Weiterleitungslink), kann
den Klickzähler beliebig hochzählen. Genau diese Zahl wird zahlenden Werbekunden
im `advertising_campaign_report` als Leistungsnachweis ausgewiesen.

**P0-3 — Erfundene Automatendaten werden als Echtdaten ausgegeben.** Die
Kunden-App zeigt angemeldeten Nutzern vier frei erfundene Automaten
(„Automat Rewe Irxleben", „0,8 km", „Neu befüllt") unter der Überschrift
„**live aktualisiert**" — außerhalb des als solchen gekennzeichneten Demomodus,
inklusive Navigations-Links zu nicht existierenden Zielen. Das verletzt
Arbeitsregel 36.7 und ist wettbewerbsrechtlich angreifbar.

Dazu kommt: **das Partnerportal ist funktionsunfähig**. Sieben von zehn
RPC-Aufrufen verwenden Parameternamen und Signaturen, die es in der Datenbank
nicht gibt — empirisch nachgewiesen. Und die **Wertschöpfungskette ist dunkel**:
`nayax-webhook` und `send-push` liegen im Repository, sind aber **nicht
deployed**. Deshalb: 0 Käufe, 0 Zahlungen, 0 Push-Tokens — und damit keine
Punkte, keine Boni, keine Bons, keine B2B-Abrechnungsgrundlage.

**Antwort auf die zentrale Frage des Auftrags („Sind Backend und Frontend auf dem
identischen Stand?"): Nein.** Das Backend ist der Frontends deutlich voraus. Es
gibt kein Frontend, das den heutigen Backend-Stand abbildet, und es gibt kein
Frontend, dessen Funktionsumfang vollständig durch das Backend getragen wird.

---

## 2. Aktuelle Architektur — Ist-Zustand

Der Masterprompt geht von zwei Anwendungen und zwei Lovable-Projekten aus.
Tatsächlich existieren **drei Frontends** und die Zuordnung ist eine andere:

```
                      LIVE-BACKEND (Supabase nnfsyuglkqycwenwxmuw)
                      111 Tabellen · 197 Policies · 156 RPCs · 26 Edge Functions
                                          │
              ┌───────────────────────────┼───────────────────────────┐
              │                           │                           │
        Flutter apps/mobile        Lovable Projekt A            Lovable Projekt B
        (Repository, 168 Dateien)  „BÖRDESNACK Hub"             „Partner Portal"
              │                    d5033021…                    35646ee4…
              │                           │                           │
   GESELLSCHAFTER-APP +           KUNDEN-APP                  UNTERNEHMENS-
   Kundenbereich in einem         (Privatkunden)              BEREICH (B2B)
   Binary                                                     
   Finanzen · Verwaltung          Angebote · Bonus ·          Dashboard · Verträge ·
   Inventur · Protokolle ·        Kundenkarte · Charity ·     Kampagnen · Kontoauszug
   Dokumente · Freigaben          Profil · Rechtliches
              │                           │                           │
        🟢 an Live gebunden        🟢 überwiegend gebunden      🔴 NICHT verbunden
                                   🟡 Automaten = Mock           (Demodaten, falsche
                                                                  API-Signaturen)
```

**Abweichungen zur Annahme des Auftrags:**

| Annahme im Masterprompt | Tatsächlicher Befund |
| --- | --- |
| Projekt A = Gesellschafter-App | Projekt A ist die **Kunden-App** (Privatkunden) |
| Projekt B = Kunden-App | Projekt B ist der **Unternehmensbereich** (B2B) |
| Gesellschafter-App wird von Lovable neu gestaltet | Für die Gesellschafter-App existiert **kein Lovable-Projekt**. Sie ist die Flutter-App. |
| Kunden-App = eine App mit zwei Bereichen | Privatkunden und Unternehmen sind **zwei getrennte Anwendungen** mit getrennter Anmeldung |

Das ist keine Kleinigkeit: Ziffer 9 des Auftrags verlangt ausdrücklich *eine*
Kunden-App mit klar getrennten Nutzerbereichen. Der Ist-Zustand sind zwei
separate Projekte mit doppelter Anmeldung, doppeltem Design-System und doppelter
Datenzugriffsschicht.

Zusätzlich enthält die Flutter-App **sowohl** Gesellschafter- **als auch**
Kundenfunktionen (`features/customer/` neben `features/finance/`,
`features/management/`) — die Trennung der beiden Anwendungen ist dort nicht
vollzogen, sondern nur über Rollen-Guards im Router abgebildet.

---

## 3. Backend-Funktionsübersicht

### 3.1 Kennzahlen (Live)

| Kennzahl | Wert |
| --- | --- |
| Tabellen (`public`) | 111 |
| davon mit aktivem RLS | **111 (100 %)** |
| RLS-Policies | 197 |
| RPCs (`public`) | 156 |
| davon `SECURITY DEFINER` | 147 |
| davon für `anon` ausführbar | 6 |
| Hilfsfunktionen (`app`) | 52 |
| Trigger (nicht-intern) | 91 |
| Fremdschlüssel | 205 |
| Views | 2 |
| Migrationen (live) | **182** |
| Edge Functions (live) | 26 |
| Storage-Buckets | 5, **alle privat** |
| Cron-Jobs | 6 |

### 3.2 Funktionslandkarte

**Identität & Rechte** — `profiles`, `roles`, `permissions`, `role_permissions`,
`user_permissions`, `shareholder_approvals`. Rollen (`app.role_key`):
`system_admin`, `shareholder`, `employee`, `customer`. Guards: `is_admin()`,
`is_shareholder()`, `is_internal()`, `auth_has_permission()`, `app_role()`.
Jede Rollenprüfung verlangt zusätzlich `status = 'active'`.

**Finanzen** — `finance_accounts` (68, SKR03), `finance_bookings` (45),
`sevdesk_sync_runs` (26), `finance_balance_snapshots`, `invoices`, `payments`,
`pkw` / `pkw_jahr` / `pkw_kosten` / `pkw_fahrten` (Nutzungseinlage).
RPCs: `finance_kpis`, `finance_summary`, `finance_bookings_list`,
`finance_balance_kpis`, `datev_export_rows`, `anlage_pkw`.

**Verwaltung & HACCP** — `machines` (4), `locations` (4), `products` (62),
`inventory` (94), `inventory_movements`, `warehouse_stock`, `machine_slots`,
Protokolle (`temperature_logs`, `cleaning_logs`, `disposal_logs`,
`filling_logs`, `maintenance_logs`, `cash_collection_logs`), FIFO-Bewertung
(`inventory_fifo_lots`, `inventory_fifo_movements`, `inventory_report`).

**Dokumente** — `documents` (26), `document_versions` (25), `document_folders` (13),
`document_approvals` (9), `document_approval_decisions` (9),
`document_employee_signatures`, `partner_signatures`, `signatures`.
Revisionssicher, Freigabelauf, Mitarbeiter-Unterschriften.

**Kundenbereich** — `customers`, `customer_prices`, `offers` (70),
`personal_offers`, `offer_activations`, `purchases`, `purchase_items`,
`purchase_complaints`, `product_ratings`, `recommendations`, `customer_card`,
`customer_login_days`, `loyalty_bonus_grants`, `badges` (9), `challenges` (4),
`customer_challenge_awards`, `referral_*` (5 Tabellen), `donation_causes` (3),
`donation_votes`, `news_articles` (3).

**Abonnements** — `customer_subscriptions` (7), `store_subscription`,
`store_notification`, `cancellation_requests` (1), `app.subscription_plans`.
Preise **ausschließlich** in `app.subscription_plans`: 0,99 €/Monat,
9,99 €/Jahr, 79,99 € Lifetime (Founders Edition).

**B2B / Unternehmen** — `businesses` (1), `business_members` (0),
`business_locations`, `business_invitations`, `business_budgets`,
`business_invoice_runs`. Zuschusslogik in `app.business_split()` mit
Monats-/Tageslimits, Zeitzone Europe/Berlin.

**Werbenetzwerk** — `advertising_spaces`, `advertising_space_contracts`,
`advertising_campaigns`, `advertising_creatives`,
`advertising_coupon_sponsorships`, `advertising_redirect_counts`,
`sponsorships`, `leads`, `lead_activities`. **Alle 0 Zeilen** — vollständig
implementiert, aber noch nicht in Betrieb.

**E-Mail & Einwilligung** — `email_log` (6), `email_templates` (38),
`email_topic` (3), `email_consent_event` (Art. 7 DSGVO, nur anhängend),
`email_unsubscribe_token`, `email_outbox`, `auth_hook_diagnose` (16).

**Compliance** — `ki_register` (8 Einträge, Ampellogik per CHECK erzwungen),
`legal_text` (7), `produktbilder` (Urheber-/AI-Act-Nachweis),
`consents`, `account_deletion_requests` (1), `audit_log` (2 176).

**Cron (6 Jobs):** `weather-sync` 03:40, `purge_login_days` 03:15,
`purge_audit_log` 03:25, `purge_email_log` 03:30, `daily-offers` 03:50,
`referral-settle` 04:20. Die drei `purge_*`-Jobs setzen Löschfristen um.

### 3.3 Vorhanden, aber nicht in Betrieb

| Bereich | Zustand | Datenstand |
| --- | --- | --- |
| Werbenetzwerk (9 Tabellen, 17 RPCs) | 🟢 fertig | 0 Zeilen |
| B2B-Mitgliedschaften & Budgets | 🟢 fertig | 1 Firma, 0 Mitglieder |
| IoT-/Telemetrie-Layer | 🟢 fertig | 0 Ereignisse |
| Zahlungen (`payments`) | 🟢 fertig | 0 Zeilen |
| Push (`device_tokens`) | 🟢 Schema | 0 Tokens, Function nicht deployed |
| Nayax-Verkäufe | 🟢 Schema | 0 Zeilen, Webhook nicht deployed |

---

## 4. Gesellschafter-App (Flutter, `apps/mobile`)

168 Dart-Dateien, ~33 700 Zeilen. Feature-First + Clean Architecture
(`domain`/`data`/`presentation`), Riverpod, go_router mit Rollen-Guards.
Bereiche: `finance`, `management`, `approvals`, `customer`, `auth`, `home`, `legal`.

**Bewertung:** 🟢 Der fachliche Kern ist vollständig und an das Live-Backend
gebunden. Die Struktur ist sauber und trägt.

**Befunde:**

* 🟡 **Die App ist nicht getrennt.** Gesellschafter- und Kundenfunktionen liegen
  in einem Binary. Die Zielarchitektur des Auftrags verlangt zwei Anwendungen.
  Eine Trennung ist möglich, aber ein eigenes Vorhaben (siehe Kap. 19).
* 🟡 **Kein Lovable-Redesign vorhanden.** Ziffer 6 des Auftrags verlangt eine
  UX-/UI-Überarbeitung der Gesellschafter-App durch Lovable. Dafür existiert
  bislang kein Projekt. Der Grundsatz „keine fachliche Funktion darf verloren
  gehen" ist damit noch nicht einlösbar — es fehlt die Referenzliste der
  Funktionen, gegen die ein Redesign geprüft werden müsste.
* 🟢 Die Preis- und Rabattlogik ist korrekt serverseitig geführt:
  `customer_providers.dart` errechnet den effektiven Rabatt aus Abo **und**
  Statusrabatt und übernimmt ihn aus `my_gamification_status()`.

---

## 5. Kunden-App (Lovable Projekt A, „BÖRDESNACK Hub")

TanStack Start + TypeScript + Tailwind + shadcn/ui. 21 Routen.
Bereiche: Start, Automaten, Produkte, Bonus (Index/Gutscheine/Historie),
Kundenkarte (Index/Info/Verwalten), Charity, Profil, Rechtliches,
Kündigung, Passwort-Reset, sowie interne Werkzeuge (E-Mail-Vorschau,
Belegmuster, Zugriffe).

**Bewertung:** 🟢 Deutlich weiter als Projekt B und mit erkennbarer Disziplin
gebaut. Produkte, Spenden, Bonus, Abo, Rechtstexte kommen aus der Live-Datenbank.
Frühere Erfindungen wurden aktiv zurückgebaut — die Kommentare dokumentieren das
(„Früher standen hier erfundene gemeinnützige Organisationen — bewusst entfernt").
Der Demomodus ist sauber gekennzeichnet.

**Befunde:**

* 🔴 **P0-3 — Automaten sind erfunden und als „live" ausgewiesen.**
  `src/lib/data.ts` liefert vier hartcodierte Automaten; `app.automaten.tsx`
  rendert sie mit der Zeile „*{n} Standorte in der Börde · **live aktualisiert***",
  mit erfundenen Entfernungen (0,8 / 2,4 / 5,1 / 7,6 km), erfundenen Zuständen
  („Neu befüllt", „Ausverkauft") und Google-Maps-Navigationslinks auf diese
  erfundenen Ziele. Das läuft **außerhalb** des Demomodus für angemeldete
  Nutzer. Real vorhanden: 4 `locations` und 4 `machines` in der Datenbank.
  → Verstoß gegen Arbeitsregel 36.7; wettbewerbsrechtlich relevant (Kap. 13).
* 🔴 **P1 — Rabatt hartcodiert und falsch angewendet.**
  `products.ts`: `appPrice = grossPrice * 0.95` — bedingungslos, für **jeden**
  Nutzer. Autoritativ ist `my_subscription_benefits()`, das
  `discount_percent = 5` **nur bei aktivem Abo** liefert, sonst `0`.
  Nutzer ohne Abo sehen damit einen Preis, den sie nicht bekommen.
  → Verstoß gegen Ziffer 27 (Single Source of Truth) und Preisangabenrecht.
* 🔴 **P1 — Admin-Rollenprüfung ist wirkungslos.**
  `admin-access.server.ts` vergleicht das Ergebnis von `app_role()` mit dem
  String `"admin"`. Der Enum `app.role_key` kennt aber nur `system_admin`,
  `shareholder`, `employee`, `customer` — **`admin` existiert nicht**.
  `hasAdminRoleInDatabase()` liefert deshalb *immer* `false`; der Zugang hängt
  allein an der Umgebungsvariable `ADMIN_EMAILS`. Die Richtung ist sicher
  (fail-closed), die Funktion ist aber defekt: ein echter `system_admin` kommt
  nicht hinein. Der Aufruf selbst wäre korrekt — `app_role(uid uuid DEFAULT
  auth.uid())` hat einen Default, der leere Body `{}` funktioniert.
* 🟡 **Statusrabatt/Gamification fälschlich entfernt.** `data.ts` vermerkt:
  „Stufennamen (Bronze/Silber/Gold/Platin/Lifetime) existieren in der Datenbank
  nicht und wurden ersatzlos entfernt." Das ist **sachlich falsch**:
  `my_gamification_status()` liefert Stufe, Statusrabatt (Basis 5 % plus
  Zuschlag), Badges (9) und Challenges (4); die Flutter-App nutzt das bereits.
  Ein reales Backend-Feature hat hier kein Frontend.
* 🟡 Bons (`receipts`) sind Beispieldaten — im Code als solche gekennzeichnet,
  in der Oberfläche zu prüfen. `my_receipts()` existiert im Backend.
* 🟡 Interne Werkzeuge (`email-vorschau`, `belegmuster`, `zugriffe`) liegen in
  der Verbraucher-App. Sie sind serverseitig geschützt, gehören
  informationsarchitektonisch aber nicht dorthin.

---

## 6. Unternehmensbereich (Lovable Projekt B, „Partner Portal")

7 Routen: `index` (Anmeldung), `dashboard`, `firma`, `kampagnen` (Liste + Detail),
`kontoauszug`, `vertraege`.

**Bewertung:** 🔴 **Die Oberfläche steht, das Portal ist aber nicht mit dem
Backend verbunden und in der vorliegenden Form auch nicht verbindbar.**

### 6.1 Nachgewiesene Signaturfehler

Der Supabase-Connector ist nicht verbunden (`supabase === null`), das Portal
läuft vollständig auf `demo-data.ts`. Auch nach dem Verbinden würden 7 von 10
Aufrufen scheitern. Empirisch gegen die Live-Datenbank geprüft:

| Aufruf im Portal (`portal-api.ts`) | Tatsächliche Signatur | Ergebnis |
| --- | --- | --- |
| `business_dashboard({p_business_id})` | `business_dashboard(p_business uuid, p_von date, p_bis date)` | 🔴 Parameter existiert nicht |
| `business_statement({p_business_id})` | `business_statement(p_business uuid, p_jahr int, p_monat int)` | 🔴 Name falsch + Pflichtargumente fehlen |
| `business_locations_list()` ohne Argument | `business_locations_list(p_business uuid)` | 🔴 Pflichtargument fehlt |
| `business_update({p_payload})` | `business_update(p_business uuid, p_werte jsonb)` | 🔴 Parameter existiert nicht |
| `business_location_set({p_payload})` | `business_location_set(p_business, p_location, p_zuordnen)` | 🔴 Parameter existiert nicht |
| `advertising_campaign_report({p_campaign_id})` | `advertising_campaign_report(p_campaign uuid)` | 🔴 Name falsch (PostgREST bindet **benannt**) |
| `advertising_creative_upload({p_campaign_id, p_file_name, p_mime_type, p_content_base64, p_alt_text, p_note})` | `advertising_creative_upload(p_campaign uuid, p_kind app.creative_kind, p_file_url text)` | 🔴 völlig anderer Vertrag: Backend erwartet eine **fertige HTTPS-URL**, kein Base64 |
| `my_businesses()` | `my_businesses()` | 🟢 passt |
| `my_advertising_contracts()` | `my_advertising_contracts()` | 🟢 passt |
| `my_advertising_campaigns()` | `my_advertising_campaigns()` | 🟢 passt |

Hinzu kommt eine **Feldnamen-Diskrepanz**: die Demodaten und Typen verwenden
englisches snake_case (`location_id`, `label`, `street`, `postal_code`), die RPCs
liefern deutsche Schlüssel (`id`, `name`, `ort`, `art`, `automaten`,
`zugeordnet`). Selbst ein geglückter Aufruf würde leere Karten rendern.

### 6.2 Fachlicher Widerspruch

Der Projektauftrag an Lovable nennt `business_update`, `business_location_set`
und `business_locations_list` als „Selbstbedienung von Firmenkunden". Das
Backend sieht das anders:

* `business_update` → `is_admin() OR auth_has_permission('businesses.manage')`
* `business_location_set` → dito

Beides ist **internen Bördesnack24-Rollen vorbehalten**. Ein Firmenkunde erhält
dort per Entwurf `42501`. Die Funktion „Stammdaten und Standorte selbst pflegen"
kann in der gebrieften Form **nie** funktionieren. Hier ist eine Entscheidung
nötig (siehe Kap. 20, R-6): entweder Backend um eine
Selbstbedienungs-Variante ergänzen oder das Feature im Portal als „nur lesen,
Änderung über Kontakt" umbauen.

Ebenfalls zu berücksichtigen: `business_dashboard`, `business_statement`,
`business_locations_list` und `advertising_creative_upload` verlangen die
Rolle **`admin`** innerhalb des Firmenkunden; `my_advertising_campaigns` und
`my_advertising_contracts` genügen mit `member`. Das Portal kennt diese
Unterscheidung nicht und hat keine Zustände für „Mitglied ohne Adminrecht".

---

## 7. Backend-/Frontend-Abgleich auf Funktionsebene

Legende: 🟢 vollständig · 🟡 teilweise · 🔴 fehlt/defekt · 🔵 vorhanden, nicht verbunden

### 7.1 Privatkunden (Backend ↔ Lovable A)

| Funktion | Backend | Frontend | API verbunden | Funktioniert | Rechte | Test |
| --- | --- | --- | --- | --- | --- | --- |
| Registrierung/Anmeldung | 🟢 | 🟢 | 🟢 | 🟢 | 🟢 | 🟢 |
| Produktkatalog | 🟢 | 🟢 | 🟢 | 🟢 | 🟢 | 🟢 |
| Produktdetail/Nährwerte | 🟢 | 🟢 | 🟢 | 🟢 | 🟢 | 🟢 |
| Preisanzeige mit Rabatt | 🟢 | 🟡 | 🔴 hartcodiert | 🔴 falsch ohne Abo | 🟢 | 🔴 |
| Automaten/Standorte | 🟢 | 🔴 **Mock als „live"** | 🔴 | 🔴 | – | 🔴 |
| Echtzeit-Verfügbarkeit | 🟢 | 🟢 | 🟢 | 🟡 (Bestand vorhanden) | 🟢 | 🟡 |
| Angebote/Coupons | 🟢 | 🟢 | 🟢 | 🟢 | 🟢 | 🟡 |
| Bonus/Punkte | 🟢 | 🟢 | 🟢 | 🟡 (0 Käufe → 0 Punkte) | 🟢 | 🟡 |
| Statusrabatt/Badges/Challenges | 🟢 | 🔴 entfernt | 🔴 | 🔴 | – | 🔴 |
| Kundenkarte/QR | 🟢 | 🟢 | 🟢 | 🟢 | 🟢 | 🟡 |
| Abo buchen | 🟢 | 🟢 | 🟢 | 🟢 | 🟢 | 🟡 |
| Abo kündigen (§ 312k) | 🟢 | 🟢 | 🟢 | 🟢 | 🟢 | 🟢 |
| Spenden/Abstimmung | 🟢 | 🟢 | 🟢 | 🟢 | 🟢 | 🟡 |
| Empfehlungsprogramm | 🟢 | 🟡 | 🟡 | 🟡 | 🟢 | 🔴 |
| Belege/Bons | 🟢 `my_receipts()` | 🟡 Beispieldaten | 🔵 | 🔴 | 🟢 | 🔴 |
| Kaufhistorie | 🟢 | 🟡 | 🟡 | 🔴 (0 Käufe) | 🟢 | 🔴 |
| Reklamation | 🟢 | 🔴 | 🔴 | 🔴 | – | 🔴 |
| Push-Nachrichten | 🟡 Schema | 🔴 | 🔴 nicht deployed | 🔴 | – | 🔴 |
| Datenexport (Art. 15) | 🟢 `export_my_data()` | 🔴 | 🔵 | 🔴 | 🟢 | 🔴 |
| Kontolöschung | 🟢 | 🟢 | 🟢 | 🟢 | 🟢 | 🟢 |
| Rechtstexte | 🟢 | 🟢 | 🟢 | 🟢 | 🟢 | 🟢 |

### 7.2 Unternehmen (Backend ↔ Lovable B)

| Funktion | Backend | Frontend | API verbunden | Funktioniert | Rechte | Test |
| --- | --- | --- | --- | --- | --- | --- |
| Anmeldung Firmenkunde | 🟢 | 🟡 Demo-Login | 🔵 | 🔴 | 🟢 | 🔴 |
| Firmenauswahl | 🟢 | 🟢 | 🔵 | 🔴 | 🟢 | 🔴 |
| Unternehmensdashboard | 🟢 | 🟢 | 🔴 Signatur falsch | 🔴 | 🟢 | 🔴 |
| Kontoauszug | 🟢 | 🟢 | 🔴 Signatur falsch | 🔴 | 🟢 | 🔴 |
| Stammdaten pflegen | 🔴 nur intern | 🟢 | 🔴 | 🔴 | 🔴 Widerspruch | 🔴 |
| Standorte | 🔴 nur intern | 🟢 | 🔴 | 🔴 | 🔴 Widerspruch | 🔴 |
| Werbeverträge einsehen | 🟢 | 🟢 | 🟢 | 🔵 | 🟢 | 🔴 |
| Kampagnen einsehen | 🟢 | 🟢 | 🟢 | 🔵 | 🟢 | 🔴 |
| Kampagnenbericht | 🟢 | 🟢 | 🔴 Signatur falsch | 🔴 | 🟢 | 🔴 |
| Werbemittel hochladen | 🟢 | 🟢 | 🔴 Vertrag falsch | 🔴 | 🟢 | 🔴 |
| Verträge/Dokumente | 🟢 | 🟢 | 🔵 | 🔴 | 🟢 | 🔴 |
| Rechnungsläufe | 🟢 | 🔴 | 🔴 | 🔴 | 🟢 | 🔴 |
| Kontakt/Nachrichten | 🟢 `lead_create` | 🔴 | 🔴 | 🔴 | 🟢 | 🔴 |
| Mitarbeiter einladen | 🟢 | 🔴 | 🔴 | 🔴 | 🟢 | 🔴 |
| Budgets/Zuschuss | 🟢 | 🔴 | 🔴 | 🔴 | 🟢 | 🔴 |

### 7.3 Gesellschafter (Backend ↔ Flutter)

Finanzen, Inventur, HACCP-Protokolle, Dokumente, Freigaben, Nayax-Auswertung,
DATEV-Export, PKW-Anlage: durchgängig 🟢 verbunden. Nicht abgedeckt:
🔴 Werbenetzwerk-Verwaltung (17 RPCs), 🔴 Leads/CRM (4 RPCs),
🔴 B2B-Verwaltung (12 RPCs), 🔴 E-Mail-Vorlagen/Protokoll (7 RPCs),
🔴 KI-Register, 🔴 Produktbild-Register.
Diese Verwaltungsoberflächen fehlen **in jedem** Frontend.

---

## 8. Fehlende Funktionen

**Backend vorhanden → Frontend fehlt (🔵, ~45 RPCs ohne Oberfläche):**
Werbenetzwerk-Verwaltung, Leads/CRM, B2B-Verwaltung (Einladungen, Budgets,
Rechnungsläufe), E-Mail-Vorlagenpflege, KI-Register, Produktbild-Register,
Statusrabatt/Badges/Challenges (Web), `export_my_data()`, `my_receipts()`,
`purchase_complaints`, Telemetrie-Provider-Verwaltung.

**Frontend vorhanden → Backend fehlt oder verweigert (🔴):**
Selbstbedienung Firmenstammdaten, Selbstbedienung Firmenstandorte,
Werbemittel-Upload per Base64 (Backend erwartet URL + Storage-Weg — der
Upload-Pfad ist noch nicht definiert).

**Beide vorhanden → API fehlt/falsch (🔴):** die 7 Signaturfehler aus Kap. 6.1.

**Beides vorhanden, aber ohne Daten (🟡):** Punkte, Bons, Kaufhistorie,
Kampagnenkennzahlen, B2B-Abrechnung — alle hängen an der nicht deployten
Kaufdatenerfassung (Kap. 9).

---

## 9. Die dunkle Wertschöpfungskette

`nayax-webhook` und `send-push` liegen im Repository, sind aber **nicht als Edge
Function deployed**. Damit fehlt der einzige Weg, auf dem Verkäufe ins System
gelangen. Die Folge ist eine Kette leerer Tabellen:

```
Nayax-Webhook (NICHT deployed)
      └── nayax_sales            0
            └── purchases        0
                  ├── payments             0   → keine Zahlungshistorie
                  ├── my_loyalty_status    0 Punkte → keine Boni, keine Meilensteine
                  ├── my_receipts          0   → Belegarchiv leer
                  ├── my_gamification…     Stufe 0 → kein Statusrabatt
                  ├── business_split       0   → keine B2B-Abrechnung, keine Rechnungsläufe
                  └── donation_pool        0   → Spendenzähler bei 0
send-push (NICHT deployed) → device_tokens 0   → keine Benachrichtigungen
```

Das ist der Grund, warum große Teile beider Kunden-Frontends „leer" wirken und
warum an mehreren Stellen zu Beispieldaten gegriffen wurde. **Ohne diesen Schritt
lässt sich keine der abhängigen Funktionen fachlich abnehmen.**

---

## 10. Doppelte und redundante Funktionen

| Thema | Befund | Bewertung |
| --- | --- | --- |
| Abo-Preise | Nur `app.subscription_plans`, Frontends lesen über `subscription_plans()` | 🟢 sauber |
| 5-%-Rabatt | Backend `my_subscription_benefits()`; Lovable A hartcodiert `* 0.95`; Flutter korrekt | 🔴 doppelt |
| Meilensteine | DB `app.loyalty_milestones()`; Lovable A `LOYALTY_MILESTONES`; Flutter Kommentar „muss mit DB-Funktion übereinstimmen" | 🟡 dreifach gepflegt |
| Rechtstexte | `legal_text` als eine Quelle, gespeist aus `legal_texts.dart` | 🟢 bewusst gelöst |
| Abo-Zustand | `customer_subscriptions` (Wille) vs. `store_subscription` (Bezahlung) | 🟢 bewusst getrennt, dokumentiert |
| Anmeldung | Drei getrennte Auth-Implementierungen (Flutter, Lovable A, Lovable B) | 🟡 unvermeidbar, aber Regeln driften |
| Design-System | Flutter `design_system/` + zwei getrennte Tailwind-Systeme | 🟡 dreifach |
| Datenzugriff | Drei handgeschriebene Schichten ohne generierte Typen | 🔴 Ursache der Signaturfehler |

---

## 11. API-Abgleich und Dokumentation

Es gibt **keine zentrale API-Dokumentation** (Ziffer 28 des Auftrags). Der
Kenntnisstand über Signaturen wird in Prosa in den Lovable-Projektbeschreibungen
weitergegeben — genau dort ist der Fehler entstanden: die Beschreibung nennt die
richtigen **Funktionsnamen**, aber niemand hat die **Parameternamen** übergeben.

Es existieren jedoch die Werkzeuge, das zu beheben: PostgREST veröffentlicht ein
OpenAPI-Schema, und Supabase kann TypeScript-Typen generieren. Beides wird
derzeit nicht genutzt. Empfehlung: R-2 in Kap. 20.

---

## 12. Datenbank-Abgleich

**Repository (63 Migrationen, bis `0063_finance_balance_sync`, 26.07.2026)
gegen Live (182 Migrationen, bis `is_admin_ohne_null_falle`, 28.08.2026).**

Nur in der Live-Datenbank vorhanden (Auswahl der ~119 fehlenden Migrationen):

| Migrationsgruppe | Inhalt |
| --- | --- |
| `unternehmen_und_mitgliedschaften`, `b2b_*` (7) | gesamtes B2B-Modell |
| `werbeflaechen_*`, `werbenetzwerk_*` (6) | gesamtes Werbenetzwerk |
| `email_*`, `einwilligung_und_abmeldung` (12) | E-Mail-System + Art.-7-Nachweis |
| `ki_register*` (4) | KI-Transparenzregister (AI Act) |
| `legal_text_*` (5) | Rechtstexte als eine Quelle |
| `kundenkarte_token`, `customer_card` | Kundenkarte |
| `skr03_*`, `konten_*`, `anlage_pkw_*` (10) | Buchhaltung SKR03, PKW-Einlage |
| `referral_program_*` (3) | Empfehlungsprogramm |
| `zahlungen_bekommen_eine_eigene_spur` | `payments` |
| `standorte_als_eigene_sache` | `locations` |
| `protokolle_bekommen_eine_loeschfrist` | Löschfristen |
| `rpc_hardening*`, `role_checks_require_active_status` (6) | Sicherheitshärtung |

**Nachtrag aus der Umsetzung (Kap. 23): Die Drift war größer als hier
beschrieben.** Ein MD5-Abgleich der 61 Repo-Dateien gegen das
Migrationsregister ergab, dass **nur eine einzige** mit dem übereinstimmte,
was tatsächlich angewendet wurde. Die Repo-Dateien waren eine redigierte
Fassung mit teils abweichendem DDL — es fehlten also nicht 119 Migrationen,
sondern es stimmten 181 von 182 nicht.

**Edge-Function-Drift:**

* Nur live (7): `install-signature`, `weather-sync`, `account-deletion-request`,
  `auth-email-hook`, `email-export`, `email-inbound`, `sevdesk-invoice`
* Nur im Repository, nicht deployed (2): `nayax-webhook`, `send-push` → Kap. 9

Bemerkenswert: die Deployment-Pfade zeigen, dass `account-deletion-request`,
`auth-email-hook`, `email-export` und `sevdesk-invoice` **aus diesem Repository
heraus** deployed wurden (`/home/runner/work/B-rdesnack24-/…`). Ihr Quelltext ist
seither aus dem Repository verschwunden oder wurde nie eingecheckt. Das
verschärft P0-1: der ausgelieferte Stand ist nirgends vollständig abgebildet.

---

## 13. Security Audit — mit Testnachweis

### 13.1 Ausgeführte Negativtests (Live-Datenbank)

**A. Rollen- und Mandantentrennung** (angemeldeter Nutzer ohne Mitgliedschaft):

| ID | Test | Erwartet | Ergebnis |
| --- | --- | --- | --- |
| B2B-001 | `business_dashboard` fremde Firma | verweigert | 🟢 `42501` |
| B2B-002 | `business_statement` fremde Firma | verweigert | 🟢 `42501` |
| B2B-003 | `business_locations_list` fremde Firma | verweigert | 🟢 `42501` |
| B2B-004 | `business_update` fremde Firma (schreibend) | verweigert | 🟢 `42501` |
| FIN-001 | `finance_kpis` als Kunde | verweigert | 🟢 `42501` |
| FIN-002 | `datev_export_rows` als Kunde | verweigert | 🟢 `42501` |
| CRM-001 | `leads_list` als Kunde | verweigert | 🟢 `42501` |
| DOC-001 | `list_documents` als Kunde | verweigert | 🟢 `P0001` |
| ADS-001 | `advertising_overview` als Kunde | verweigert | 🟢 `42501` |
| ADS-002 | `advertising_space_set` (schreibend) | verweigert | 🟢 `42501` |
| CSV-001 | `business_customers_csv` als Kunde | verweigert | 🟢 `P0001` |

**B. Anonymer Zugriff** (Rolle `anon`, gemessen in *sichtbaren Zeilen*, nicht in
„Fehler/kein Fehler"):

| Tabelle | Zeilen gesamt | für `anon` sichtbar |
| --- | --- | --- |
| `profiles` | 4 | 🟢 0 |
| `customers` | 2 | 🟢 0 |
| `purchases` / `invoices` | 0 | 🟢 0 |
| `finance_bookings` | 45 | 🟢 0 |
| `audit_log` | 2 176 | 🟢 0 |
| `documents` | 26 | 🟢 0 |
| `products` | 62 | 🟢 0 |
| `offers` | 70 | 🟢 0 |
| `inventory` | 94 | 🟢 0 |
| `customer_subscriptions` | 7 | 🟢 0 |
| `notifications` | 14 | 🟢 0 |
| `machines` / `locations` | 4 / 4 | 🟢 0 |
| `news_articles` | 3 | 🟢 0 |
| `business_members` | 0 | 🟢 kein Recht (`42501`) |
| `donation_causes` | 3 | 🟢 kein Recht (`42501`) |
| `customer_card` | 0 | 🟢 kein Recht (`42501`) |
| `email_log` | 6 | 🟢 kein Recht (`42501`) |
| `legal_text` | 7 | 🟡 **7 (gewollt öffentlich)** |

**C. IDOR und Rechteausweitung** (Kunde `c4f2…` gegen Kunde `e771…`, beide Rolle
`customer`, verifiziert über `profiles.role`):

| ID | Test | Erwartet | Ergebnis |
| --- | --- | --- | --- |
| IDOR-001 | fremdes Profil lesen | 0 | 🟢 0 |
| IDOR-002 | fremdes Abo lesen (Opfer hat 7) | 0 | 🟢 0 |
| IDOR-003 | alle Profile lesen (4 vorhanden) | 1 | 🟢 1 |
| IDOR-004 | fremde Käufe lesen | 0 | 🟢 0 |
| IDOR-005 | interne Dokumente (26 vorhanden) | 0 | 🟢 0 |
| IDOR-006 | Finanzbuchungen (45 vorhanden) | 0 | 🟢 0 |
| PRIV-001 | eigene Rolle auf `shareholder` setzen | verweigert | 🟢 `42501` |

**Ergebnis: 36 von 36 Tests grün.** Die vom Auftrag in Ziffer 25 geforderte
Kernaussage — „ein Kunde darf durch Manipulation einer ID nicht an fremde Daten
kommen" — ist für die geprüften Pfade **nachgewiesen erfüllt**.

### 13.2 Offene Sicherheitsbefunde

* 🔴 **P0-2 — `advertising_redirect_count()` ist fälschbar.** Für `anon`
  ausführbar, `SECURITY DEFINER`, kein Rate-Limit, keine Entprellung, keine
  Sitzungs-/IP-Bindung. Der Rumpf zählt bedingungslos hoch:
  `insert … on conflict (campaign_id, day) do update set count = count + 1`.
  Wer die Kampagnen-UUID kennt — sie steht im öffentlichen Weiterleitungslink —
  kann beliebig hochzählen. Diese Zahl wird zahlenden Werbekunden in
  `advertising_campaign_report` als „Anzahl Klicks auf den Link" ausgewiesen.
  **Empfehlung:** Zählung aus einer Edge Function mit Rate-Limit und
  Entprellung; `anon`-Grant entziehen. Die bewusste Entscheidung gegen IP-/
  Cookie-Speicherung (Datensparsamkeit) ist richtig und sollte erhalten
  bleiben — eine kurzlebige, gehashte Entprellung genügt.
* 🟡 **Querinformation im Firmenportal.** `business_locations_list(p_business)`
  gibt **alle** Standorte zurück, inklusive `fremd` und `fremde_firma` — also
  des **Namens des anderen Firmenkunden**, der einen Standort belegt. Für die
  interne Zuordnungsmaske ist das sinnvoll; für einen Firmenkunden-Admin ist es
  eine Information über einen Dritten. **Empfehlung:** zwei Funktionen trennen.
* 🟡 **Least Privilege bei `anon`.** `anon` besitzt auf zahlreichen Tabellen
  weiterhin das Tabellenrecht `SELECT`; erst RLS filtert auf 0 Zeilen. Das ist
  wirksam, aber nicht sparsam. **Empfehlung:** `REVOKE SELECT … FROM anon` auf
  allen Tabellen ohne öffentlichen Lesebedarf.
* 🟡 `app.coupon_anlass_zu_offer_source` ohne fixiertes `search_path` (1 Advisor-WARN).
* 🟡 Leaked-Password-Protection im Auth-Dashboard deaktiviert (clientseitige
  HIBP-Prüfung kompensiert; serverseitig in ~2 Minuten nachziehbar).
* 🟢 `pg_net` in `public` — von Supabase so installiert, Zugriff auf
  `postgres`/`service_role` beschränkt. Akzeptiertes Restrisiko.
* 🟢 Alle 5 Storage-Buckets privat. Keine Secrets im Repository.
* 🟢 4 Tabellen mit RLS ohne Policy (`customer_card`, `customer_challenge_awards`,
  `customer_login_days`, `email_unsubscribe_token`) — bewusstes Deny-All,
  erreichbar nur über RPCs. Durch Test C bestätigt.

### 13.3 Nicht geprüft

Ehrlichkeitshalber: Die folgenden Punkte aus Ziffer 25 wurden **nicht** getestet
und bleiben offen — sie erfordern Zugriff auf die laufende HTTP-Schicht bzw.
Testkonten, die hier nicht angelegt werden durften:

* Rate Limiting und Brute-Force-Schutz auf `/auth/v1`
* Session-/Token-Handling im Browser (Refresh, Logout, Recovery-Sessions)
* Dateiupload-Sicherheit (MIME-Prüfung, Größenlimits) an den Storage-Policies
* Signaturprüfung der Webhooks `iot-webhook`, `email-inbound`, `auth-email-hook`
  (alle mit `verify_jwt=false` — die HMAC-Prüfung ist im Code vorgesehen, wurde
  aber nicht scharf geprüft)
* Echte Firma-A-gegen-Firma-B-Trennung mit zwei bestückten Firmenkunden
  (`business_members` ist leer; geprüft wurde „Nicht-Mitglied gegen Firma")

---

## 14. Rollen- und Berechtigungssystem

**Interne Rollen** (`app.role_key`): `system_admin`, `shareholder`, `employee`,
`customer`. Jede Prüfung verlangt zusätzlich `profiles.status = 'active'` und
`deleted_at is null` (Migration `role_checks_require_active_status`).

**Firmenrollen** (`app.business_role`): `admin`, `member`.
**Mitgliedsstatus** (`app.business_member_status`): `invited`, `active`,
`suspended`, `removed`.

**Bewertung:** 🟢 Das Modell ist schlank und deckt die Anforderung aus Ziffer 26
ab, ohne Rollen unnötig zu vervielfachen. Ein Unternehmen kann mehrere Benutzer
haben (`business_members`); die Mandantentrennung liest ausschließlich dort
(`app.is_business_member()`), was durch Test B2B-001…004 bestätigt ist.

**Befunde:**

* 🔴 Lovable A prüft gegen den nicht existierenden Rollenwert `admin` (Kap. 5).
* 🟡 Die Unterscheidung `admin` vs. `member` ist in keinem Frontend abgebildet.
* 🟡 Es gibt keine Rolle „Bördesnack24 Gesellschafter" **im Firmenkontext** —
  intern übernimmt das `is_admin() OR auth_has_permission(…)`. Das ist
  konsistent und braucht keine neue Rolle.

---

## 15. Datenschutz- und Compliance-Prüfung

| Thema | Bewertung | Begründung |
| --- | --- | --- |
| RLS/Zugriffskontrolle | 🟢 | 100 % Abdeckung, 36/36 Tests grün |
| Einwilligung E-Mail (Art. 7 DSGVO) | 🟢 | `email_consent_event` nur anhängend, Nachweis ableitbar |
| Werbe-Einwilligung (§ 7 UWG) | 🟢 | `email_topic` mit Wortlaut, nur per Migration änderbar |
| Löschfristen | 🟢 | 3 Cron-Jobs (`purge_audit_log`, `purge_email_log`, `purge_login_days`) |
| Auth-Mails ohne Body-Protokoll | 🟢 | bewusst, da Token/Einmalcode enthalten |
| Kontolöschung (Art. 17) | 🟢 | `account_deletion_requests` + Workflow + Edge Function |
| Auskunft (Art. 15) | 🟡 | `export_my_data()` existiert, **kein Frontend** |
| Datensparsamkeit Tracking | 🟢 | `advertising_redirect_counts` bewusst ohne IP/Cookie |
| KI-Transparenz (Art. 50 AI Act) | 🟢 | `ki_register` (8 Einträge) mit erzwungener Ampellogik, `AiBadge` + `AiInfoScreen` |
| Bildrechte/AI-Kennzeichnung | 🟢 | `produktbilder`-Register |
| Rechtstexte | 🟢 | `legal_text` als eine Quelle, 7 Texte |
| § 312k Kündigungsbutton | 🟢 | vorhanden, eigene Route |
| Widerruf (§ 356 Abs. 5 BGB) | 🟢 | Lifetime-Erlöschens-Einwilligung |
| **Preisangabe ohne Abo** | 🔴 | 5 % Rabatt wird jedem angezeigt (Kap. 5) |
| **Erfundene Standortangaben** | 🔴 | „live aktualisiert" über Mock-Daten (Kap. 5) |
| **Werbekennzahlen** | 🔴 | fälschbar, werden aber als Nachweis geliefert (Kap. 13.2) |
| Dark Patterns | 🟢 | keine gefunden; Abo-Flow transparent, Kündigung sichtbar |

**Rechtliche Einordnung — ausdrücklich als Hinweis, nicht als Rechtsrat:**

* 🔴 **Automatendaten als „live"** — Angaben über Verfügbarkeit und Standort sind
  geschäftliche Handlungen. Erfundene Zustände („Neu befüllt", „Ausverkauft") und
  Entfernungen sind geeignet, zur Fahrt zu einem nicht existierenden Automaten zu
  veranlassen. **Umsetzung ohne Korrektur nicht empfohlen.**
* 🔴 **Rabattpreis ohne Anspruch** — die Anzeige eines um 5 % reduzierten Preises
  an Nutzer ohne Abo berührt Preisangaben- und Irreführungsrecht.
  **Vor Go-Live zu beheben.**
* 🟡 **Werbekennzahlen** — werden Kampagnen nach Klicks bewertet oder abgerechnet,
  ist die Manipulierbarkeit ein vertragliches Risiko gegenüber dem Werbekunden.
  **Rechtliche Prüfung empfohlen, technische Behebung ohnehin.**
* 🟡 **Auskunftsrecht** — `export_my_data()` ohne Oberfläche bedeutet, dass der
  Auskunftsanspruch derzeit manuell bedient wird. Zulässig, aber vermeidbar.

---

## 16. Analytics — Kennzahlenherkunft

Ziffer 17 verlangt für jede Kennzahl Quelle, Erfassungsmethode und
Rechtsgrundlage. Ist-Zustand:

| Kennzahl | Quelle | Methode | Messwert oder Schätzung | Bewertung |
| --- | --- | --- | --- | --- |
| Coupon-Einlösungen | `offer_activations` | Ereignis | Messwert | 🟢 |
| Präsentationen | `offers` × Laufzeit | abgeleitet | **Schätzung** | 🟡 kennzeichnen |
| Klicks Weiterleitung | `advertising_redirect_counts` | Zähler | Messwert, **fälschbar** | 🔴 |
| Umsatz je Firma | `app.business_split()` | Berechnung | Messwert | 🟢 |
| Punkte | `purchases.total_gross` | Berechnung | Messwert | 🟢 |
| Spendenpool | `purchases` × Satz | Berechnung | Messwert | 🟢 |
| Automaten-Status (Frontend) | **hartcodiert** | – | **erfunden** | 🔴 |

`advertising_campaign_report` unterdrückt Werte unter 30 je Kampagne und liefert
keine Kundendaten — das ist datenschutzseitig sauber gelöst. Die Unterscheidung
zwischen **Messwert und Schätzung** (Ziffer 13) ist im Backend jedoch nicht als
Feld geführt und in keinem Frontend sichtbar. **Empfehlung:** je Kennzahl ein
Herkunftsmerkmal (`gemessen` / `abgeleitet`) mitliefern und in der Oberfläche
ausweisen.

---

## 17. UX und Informationsarchitektur der Kunden-App

Der Auftrag verlangt eine gemeinsame App mit getrennten Bereichen. Heute sind es
zwei Anwendungen. Vorschlag für die Zielstruktur — bewusst **fünf**
Hauptnavigationspunkte, nicht mehr:

```
KUNDEN-APP  (eine Anmeldung, Bereich ergibt sich aus der Mitgliedschaft)
│
├── START            Angebote, Neuigkeiten, Spendenstand, nächster Automat
├── ENTDECKEN        Produkte · Automaten (echte Standorte!) · Coupons
├── KARTE            QR-Code, Rabattstatus, Punkte, Bons     ← ein Tippen
├── VORTEILE         Abo-Vergleich, Statusrabatt, Empfehlungen, Spenden
└── KONTO            Profil, Bestellungen, Reklamation, Einwilligungen, Recht
     │
     └── „Für Unternehmen"  ← erscheint NUR bei aktiver business_members-Zeile
          ├── Dashboard        Kennzahlen, laufende Kampagnen
          ├── Kampagnen        Liste · Detail · Bericht · Werbemittel
          ├── Verträge         Werbeflächen, Laufzeiten, Dokumente
          ├── Kontoauszug      Zuschüsse, Rechnungsläufe
          └── Kontakt          Anfragen, Änderungswünsche (lead_create)
```

**Begründung:** `my_businesses()` liefert bereits die Mitgliedschaften. Der
Unternehmensbereich lässt sich damit als **bedingter fünfter Bereich** in der
bestehenden App einblenden, statt eine zweite Anwendung zu betreiben. Das
erspart die zweite Anmeldung, das zweite Design-System und die zweite
Datenzugriffsschicht — und erfüllt Ziffer 9 des Auftrags.

**Verkaufspsychologie (Ziffer 19):** zulässig und bereits gut umgesetzt sind der
Kostenlos-/Premium-Vergleich, die klare Value Proposition und der sichtbare
Spendenanteil. Nicht gefunden wurden Dark Patterns. Zwei Punkte sind zu
beachten: der Rabattpreis darf erst nach Abo-Abschluss als *eigener* Preis
erscheinen (Kap. 15), und Social Proof darf nur mit echten Zahlen arbeiten —
solange `purchases` leer ist, gibt es keine.

---

## 18. Testmatrix

Vollständige Matrix über alle tatsächlich vorhandenen Funktionsbereiche.
Status: 🟢 geprüft grün · 🔴 geprüft rot · ⚪ noch nicht geprüft

| ID | Bereich | Funktion | Negativ | Positiv | Security | Regression | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| AUTH-001 | Auth | Anmeldung | ⚪ | ⚪ | ⚪ | ⚪ | offen |
| AUTH-002 | Auth | Abgelaufene Session | ⚪ | – | ⚪ | ⚪ | offen |
| AUTH-003 | Auth | Rechteausweitung Rolle | 🟢 | – | 🟢 | ⚪ | **grün** |
| AUTH-004 | Auth | Anonymer Tabellenzugriff (18 Tabellen) | 🟢 | – | 🟢 | ⚪ | **grün** |
| RBAC-001 | Rechte | `app_role()` Rollenwert | 🔴 | 🔴 | – | ⚪ | **rot** |
| RBAC-002 | Rechte | Kunde → Finanzdaten | 🟢 | – | 🟢 | ⚪ | **grün** |
| RBAC-003 | Rechte | Kunde → interne Dokumente | 🟢 | – | 🟢 | ⚪ | **grün** |
| RBAC-004 | Rechte | Kunde → Leads/CRM | 🟢 | – | 🟢 | ⚪ | **grün** |
| IDOR-001 | Kunde | Fremdes Profil | 🟢 | – | 🟢 | ⚪ | **grün** |
| IDOR-002 | Kunde | Fremdes Abo | 🟢 | – | 🟢 | ⚪ | **grün** |
| IDOR-003 | Kunde | Fremde Käufe | 🟢 | – | 🟢 | ⚪ | **grün** |
| SUB-001 | Abo | Abo buchen | ⚪ | ⚪ | ⚪ | ⚪ | offen |
| SUB-002 | Abo | Kündigung § 312k | ⚪ | ⚪ | ⚪ | ⚪ | offen |
| SUB-003 | Abo | Preisquelle = DB | – | 🔴 | – | ⚪ | **rot** |
| SUB-004 | Abo | Rabatt nur mit Abo | 🔴 | 🔴 | – | ⚪ | **rot** |
| CARD-001 | Karte | Karte anzeigen | ⚪ | ⚪ | 🟢 | ⚪ | teil |
| CARD-002 | Karte | Fremder Kartentoken | ⚪ | – | ⚪ | ⚪ | offen |
| LOY-001 | Bonus | Punktestand | ⚪ | 🔴 (0 Käufe) | ⚪ | ⚪ | blockiert |
| LOY-002 | Bonus | Statusrabatt Frontend | – | 🔴 fehlt | – | ⚪ | **rot** |
| MACH-001 | Automaten | Standortliste echt | – | 🔴 Mock | – | ⚪ | **rot** |
| MACH-002 | Automaten | Verfügbarkeit | ⚪ | ⚪ | ⚪ | ⚪ | offen |
| PUR-001 | Kauf | Nayax-Erfassung | ⚪ | 🔴 nicht deployed | ⚪ | ⚪ | **rot** |
| PUR-002 | Kauf | Beleg/Bon | ⚪ | 🔴 Beispieldaten | ⚪ | ⚪ | **rot** |
| PUR-003 | Kauf | Reklamation | ⚪ | 🔴 kein Frontend | ⚪ | ⚪ | **rot** |
| CORP-001 | Firma | Dashboard fremde Firma | 🟢 | – | 🟢 | ⚪ | **grün** |
| CORP-002 | Firma | Dashboard eigene Firma | – | 🔴 Signatur | – | ⚪ | **rot** |
| CORP-003 | Firma | Kontoauszug fremd | 🟢 | – | 🟢 | ⚪ | **grün** |
| CORP-004 | Firma | Stammdaten ändern | 🟢 | 🔴 Widerspruch | 🟢 | ⚪ | **rot** |
| CORP-005 | Firma | Standorte fremd sichtbar | 🟡 | – | 🟡 | ⚪ | **teil-rot** |
| CORP-006 | Firma | Rolle member vs. admin | ⚪ | 🔴 kein Zustand | ⚪ | ⚪ | **rot** |
| CORP-007 | Firma | A gegen B (zwei Firmen) | ⚪ | – | ⚪ | ⚪ | offen |
| ADS-001 | Werbung | Kampagne fremd lesen | 🟢 | – | 🟢 | ⚪ | **grün** |
| ADS-002 | Werbung | Werbefläche schreiben | 🟢 | – | 🟢 | ⚪ | **grün** |
| ADS-003 | Werbung | Kampagnenbericht | ⚪ | 🔴 Signatur | ⚪ | ⚪ | **rot** |
| ADS-004 | Werbung | Klickzähler Manipulation | 🔴 | – | 🔴 | ⚪ | **rot** |
| ADS-005 | Werbung | Werbemittel-Upload | ⚪ | 🔴 Vertrag | ⚪ | ⚪ | **rot** |
| FIN-001 | Finanzen | KPIs als Kunde | 🟢 | – | 🟢 | ⚪ | **grün** |
| FIN-002 | Finanzen | DATEV-Export als Kunde | 🟢 | – | 🟢 | ⚪ | **grün** |
| FIN-003 | Finanzen | sevDesk-Sync | ⚪ | ⚪ | ⚪ | ⚪ | offen |
| DOC-001 | Dokumente | Liste als Kunde | 🟢 | – | 🟢 | ⚪ | **grün** |
| DOC-002 | Dokumente | Storage-Zugriff fremd | ⚪ | – | ⚪ | ⚪ | offen |
| DOC-003 | Dokumente | Freigabelauf | ⚪ | ⚪ | ⚪ | ⚪ | offen |
| MAIL-001 | E-Mail | Protokoll als Kunde | 🟢 | – | 🟢 | ⚪ | **grün** |
| MAIL-002 | E-Mail | Abmeldelink | ⚪ | ⚪ | ⚪ | ⚪ | offen |
| MAIL-003 | E-Mail | Einwilligungsnachweis | ⚪ | ⚪ | ⚪ | ⚪ | offen |
| DSGVO-001 | Datenschutz | Datenexport Art. 15 | ⚪ | 🔴 kein Frontend | ⚪ | ⚪ | **rot** |
| DSGVO-002 | Datenschutz | Kontolöschung | ⚪ | ⚪ | ⚪ | ⚪ | offen |
| DSGVO-003 | Datenschutz | Löschfristen (Cron) | ⚪ | ⚪ | – | ⚪ | offen |
| HOOK-001 | Webhooks | `iot-webhook` HMAC | ⚪ | ⚪ | ⚪ | ⚪ | offen |
| HOOK-002 | Webhooks | `email-inbound` | ⚪ | ⚪ | ⚪ | ⚪ | offen |
| HOOK-003 | Webhooks | `auth-email-hook` | ⚪ | ⚪ | ⚪ | ⚪ | offen |

**Bilanz: 36 grün · 15 rot · 22 offen.** Kein einziger roter Befund liegt in der
Zugriffskontrolle des Backends — alle roten Befunde betreffen
Frontend-Anbindung, Datenherkunft oder nicht deployte Funktionen.

---

## 19. Regressions-Risiken

Abhängigkeiten, die bei Änderungen zwingend mitgetestet werden müssen:

| Änderung an … | löst Regressionstest aus für … |
| --- | --- |
| `profiles.role` / Rollen-Guards | **alle** 147 Security-Definer-RPCs, alle drei Frontends |
| `purchases` | Punkte, Boni, Bons, Spendenpool, `business_split`, Rechnungsläufe, Gamification |
| `app.subscription_plans` | Abo-Flow, Preisanzeige, Kündigung, Store-Abgleich, Rechtstexte |
| `customer_subscriptions` | Rabatt, Gating, Bonusgewährung, `store_subscription` |
| `business_members` | gesamte Mandantentrennung (`app.is_business_member`) |
| `advertising_campaigns` | Berichte, Sponsorings, Flächenverträge, Werbemittel |
| RPC-Signaturen | alle Frontends — **heute ohne Absicherung**, siehe R-2 |
| `locations` / `machines` | Automatenfinder, Verfügbarkeit, Werbeflächen, B2B-Standorte |

**Größtes Regressionsrisiko:** Die 119 nicht versionierten Migrationen lassen
sich weder reviewen noch in einer Testumgebung nachstellen. Solange das so ist,
ist **jede** Backend-Änderung ein Eingriff am offenen System ohne Rückfallebene.
Das ist der Grund, warum R-1 vor allem anderen steht.

---

## 20. Empfohlene Zielarchitektur

```
                    ZENTRALES BACKEND (Supabase EU)
                    Datenmodell · Business Logic · Auth · RLS
                    RPC-Schicht (156) · Analytics · Zahlungen
                                   │
                    ┌──────────────┴──────────────┐
                    │   GENERIERTER API-VERTRAG   │  ← fehlt heute
                    │   OpenAPI + TS-Typen + Dart │
                    └──────────────┬──────────────┘
                                   │
              ┌────────────────────┴────────────────────┐
              ▼                                         ▼
   GESELLSCHAFTER-APP                            KUNDEN-APP
   (Flutter, später Lovable-Redesign)            (Lovable, eine Anwendung)
                                                          │
   Finanzen · Verwaltung · Inventur          ┌────────────┴────────────┐
   Protokolle · Dokumente · Freigaben        ▼                         ▼
   + Werbenetzwerk-Verwaltung (neu)     Privatkunden              Unternehmen
   + Leads/CRM (neu)                    Angebote · Karte          Dashboard
   + B2B-Verwaltung (neu)               Bonus · Abo               Kampagnen
   + E-Mail-Vorlagen (neu)              Spenden · Konto           Verträge
                                                                  Kontoauszug
```

**Zwei Architekturentscheidungen zur Freigabe:**

**E-1 — Unternehmensbereich in die Kunden-App integrieren.**
*Ist:* zwei getrennte Lovable-Projekte, zwei Anmeldungen.
*Problem:* doppelte Auth-, Design- und Datenschicht; widerspricht Ziffer 9.
*Ziel:* ein Projekt, Unternehmensbereich bedingt über `my_businesses()`.
*Auswirkung:* Projekt B geht in Projekt A auf; die 7 Routen bleiben inhaltlich.
*Migration:* Routen unter `/app/unternehmen/*` neu anlegen, Datenschicht
korrigiert übernehmen, Projekt B stilllegen.
*Risiko:* mittel — Projekt B ist nicht produktiv, es geht nichts verloren.

**E-2 — Verwaltungsoberflächen für die ~45 RPCs ohne Frontend.**
*Ist:* Werbenetzwerk, CRM, B2B-Verwaltung, E-Mail-Vorlagen nur per SQL bedienbar.
*Ziel:* in die Gesellschafter-App, nicht in die Kunden-App.
*Auswirkung:* macht das Werbegeschäft überhaupt erst betreibbar.
*Risiko:* gering — rein additiv.

---

## 21. Priorisierte Roadmap

### P0 — kritisch

| Nr. | Maßnahme | Warum |
| --- | --- | --- |
| **R-1** ✅ | **ERLEDIGT (31.08.2026, siehe Kap. 23). 182 Live-Migrationen ins Repository zurückgeführt.** Schema als Baseline ziehen (`supabase db pull`), gegen die Live-DB verifizieren, einchecken. Zusätzlich die 7 nur live vorhandenen Edge Functions. Danach Regel: **keine Schemaänderung ohne Migration im Repository.** | Fünf Wochen Arbeit sind unversioniert. Kein Review, kein Rollback, keine Testumgebung, kein Wiederaufbau. Blockiert jede sichere Weiterentwicklung. |
| **R-2** | **Klickzähler absichern.** `anon`-Grant auf `advertising_redirect_count` entziehen, Zählung über Edge Function mit Rate-Limit und kurzlebiger, gehashter Entprellung. Ohne IP-/Cookie-Speicherung. | Kennzahlen, die zahlenden Werbekunden als Nachweis dienen, sind beliebig fälschbar. |
| **R-3** | **Mock-Automaten entfernen.** `src/lib/data.ts` löschen, `app.automaten.tsx` an `locations`/`machines` binden. Bis die Stammdaten gepflegt sind: ehrlicher Leerzustand statt erfundener Liste. „live aktualisiert" entfernen. | Erfundene Standort- und Verfügbarkeitsangaben; Verstoß gegen Arbeitsregel 36.7. |
| **R-4** | **Rabattanzeige korrigieren.** `appPrice()` aus `my_subscription_benefits()` speisen; ohne Abo keinen reduzierten Preis zeigen. | Preis wird Nutzern gezeigt, die ihn nicht bekommen. |

### P1 — hoch

| Nr. | Maßnahme | Warum |
| --- | --- | --- |
| **R-5** | **Kaufdatenerfassung deployen.** `nayax-webhook` und `send-push` ausrollen, Signaturprüfung verifizieren, mit echten Verkäufen gegentesten. | Ohne sie bleiben Punkte, Bons, Historie, Spendenzähler und B2B-Abrechnung dauerhaft leer. |
| **R-6** | **Partnerportal-Datenschicht neu schreiben.** Alle 10 Aufrufe auf die echten Signaturen und die deutschen Feldnamen umstellen. Vorher klären: Sollen Firmenkunden Stammdaten/Standorte selbst pflegen? Falls ja, Backend um eine Selbstbedienungs-Variante mit `is_business_member(…, 'admin')` ergänzen; falls nein, Feature auf „nur lesen" umbauen. Zustände für `member` ohne Adminrecht ergänzen. | 7 von 10 Aufrufen scheitern; zwei Features sind fachlich unmöglich. |
| **R-7** | **API-Vertrag generieren.** Supabase-TS-Typen in beide Lovable-Projekte, OpenAPI-Schema als verbindliche Referenz, CI-Prüfung gegen Signaturdrift. | Genau diese Lücke hat R-6 verursacht — sonst passiert es wieder. |
| **R-8** | **Admin-Rollenprüfung reparieren.** In `admin-access.server.ts` gegen `system_admin` (und ggf. `shareholder`) prüfen statt gegen `admin`. | Die DB-Prüfung ist wirkungslos; Zugang hängt allein an einer Env-Variable. |
| **R-9** | **Statusrabatt/Gamification in die Kunden-App.** `my_gamification_status()` anbinden, Badges und Challenges darstellen, falschen Kommentar in `data.ts` korrigieren. | Reales Backend-Feature ohne Frontend; die Flutter-App nutzt es bereits. |

### P2 — mittel

| Nr. | Maßnahme |
| --- | --- |
| R-10 | Entscheidung E-1 umsetzen: Unternehmensbereich in die Kunden-App integrieren |
| R-11 | `business_locations_list` aufteilen (intern vs. Firmenkunde) — Querinformation abstellen |
| R-12 | Verwaltungsoberflächen für Werbenetzwerk, CRM, B2B, E-Mail-Vorlagen (E-2) |
| R-13 | `export_my_data()` und `my_receipts()` an die Oberfläche bringen; Reklamation ergänzen |
| R-14 | Herkunftsmerkmal „gemessen/abgeleitet" für alle Kennzahlen einführen und ausweisen |
| R-15 | Least Privilege: `REVOKE SELECT … FROM anon` auf allen Tabellen ohne öffentlichen Lesebedarf |
| R-16 | Meilensteine nur noch aus der DB lesen (dreifache Pflege beenden) |
| R-17 | Offene Tests aus Kap. 18 abarbeiten: Webhook-Signaturen, Storage-Policies, Rate Limiting, zwei bestückte Firmenkunden |
| R-18 | Zentrale API-Dokumentation nach Ziffer 28 erzeugen (aus R-7 ableitbar) |

### P3 — niedrig

| Nr. | Maßnahme |
| --- | --- |
| R-19 | `search_path` für `app.coupon_anlass_zu_offer_source` fixieren |
| R-20 | Leaked-Password-Protection im Auth-Dashboard aktivieren |
| R-21 | Interne Werkzeuge aus der Verbraucher-App in die Gesellschafter-App verschieben |
| R-22 | Design-System-Tokens zwischen Flutter und Lovable angleichen |

---

## 22. Empfehlung zum weiteren Vorgehen

Der Auftrag sieht vor, dass nach der Analyse eine Freigabe für größere
Architekturänderungen erfolgt. Konkret zur Entscheidung stehen an:

1. **R-1 (Migrationen zurückführen)** — sollte unabhängig von allem anderen
   sofort erfolgen. Es ist kein Architekturthema, sondern Bestandssicherung.
2. **E-1 (ein Projekt statt zwei)** — Architekturentscheidung, braucht Freigabe.
3. **R-6 (Stammdaten-Selbstbedienung)** — fachliche Entscheidung: Dürfen
   Firmenkunden ihre Daten selbst ändern? Das ist keine technische Frage.
4. **R-5 (Kaufdaten)** — braucht die Nayax-Zugänge.

Bis zur Freigabe wurde **kein produktiver Code verändert**. Dieses Dokument ist
die einzige Änderung.

---

## 23. Umsetzung R-1 — Rückführung aus der Live-Datenbank (31.08.2026)

### 23.1 Ergebnis

| | vorher | nachher |
| --- | --- | --- |
| Migrationen im Repository | 61 handgepflegte Dateien | **182 Dateien, byte-genau wie angewendet** |
| davon mit dem Live-Stand übereinstimmend | **1** | **182** |
| Edge Functions nur live vorhanden | 7 | **0** |
| `_shared/`-Module im Repository | 1 | 10 |

### 23.2 Der eigentliche Befund

Der Auditbericht ging von „119 fehlenden Migrationen" aus. Der
Prüfsummenabgleich beim Zurückführen hat das korrigiert: Von den 61
vorhandenen Repo-Dateien stimmte **genau eine** mit dem überein, was
tatsächlich auf die Datenbank angewendet worden war.

Beispiel `0001_extensions_and_conventions`: 2 192 Bytes im Repository gegen
723 Bytes angewendet. Der Unterschied ist nicht bloß Kommentar — die
Repo-Fassung setzt zusätzlich `set search_path = public, app` auf
`app.set_updated_at()` und `app.set_created_by()` und enthält
`comment on function`-Anweisungen, die in dieser Migration nie ausgeführt
wurden.

Die Repo-Dateien waren also keine unvollständige Historie, sondern eine
**parallele, redigierte Fassung**. Wer sie las, um zu erfahren, was die
Datenbank kann, bekam eine plausible, aber falsche Antwort.

### 23.3 Vorgehen

Das Supabase-CLI ist aus dieser Umgebung nicht nutzbar (`api.supabase.com`
wird vom Egress-Proxy abgelehnt — dieselbe Beschränkung, die im Kopf von
`deploy-functions.yaml` beschrieben ist). Ein direkter Datenbankzugang
besteht ebenfalls nicht.

Genutzt wurde stattdessen, dass Supabase den **vollständigen SQL-Text jeder
Migration** in `supabase_migrations.schema_migrations.statements`
aufbewahrt:

1. Register auslesen (182 Zeilen, alle einteilig, zusammen 760 352 Zeichen).
2. Inhalte **Base64-kodiert** übertragen — damit kann kein Escaping an
   Dollar-Quoting, Anführungszeichen oder Umlauten scheitern.
3. Lokal dekodieren und **jede Datei einzeln gegen die MD5-Summe und die
   Zeichenlänge aus der Datenbank prüfen**: 182 von 182 exakt, 0 Abweichungen.
4. Nach dem Einsetzen erneut gegen das Register geprüft: 182/182 exakt,
   Namen korrekt, lexikografische Reihenfolge = chronologische Reihenfolge.

Die 61 handgepflegten Dateien wurden **nicht gelöscht**, sondern per
`git mv` nach `docs/migrations-legacy/` verschoben; ihre Kommentare bleiben
als Dokumentation erhalten (siehe README dort).

### 23.4 Edge Functions

Alle 7 nur live vorhandenen Functions sind zurückgeführt:
`account-deletion-request`, `auth-email-hook`, `email-export`,
`email-inbound`, `install-signature`, `sevdesk-invoice`, `weather-sync` —
samt des kompletten `_shared/email/`-Baums (`send`, `config`, `components`,
`theme`, `render`, `db_templates`, `webhook`, `templates/auth`,
`templates/account_deletion`), der bis dahin **vollständig** nur auf dem
Server existierte. Alle 61 relativen Importe lösen auf.

Zwei Funde am Rande:

* **`install-signature` ist ein dokumentierter Grabstein.** Die Function
  beschreibt in ihrem Kopf eine am 03.08.2026 stillgelegte
  Sicherheitslücke: `verify_jwt = false`, ein geteiltes Geheimnis **mit
  einkompiliertem Rückfallwert**, Schreibzugriff mit dem Service-Role-
  Schlüssel und ein Ablagepfad ungeprüft aus einem Header, mit
  `upsert: true`. In Summe konnte damit die Unterschrift eines beliebigen
  Partners überschrieben werden. Diese Historie hätte im Repository
  vollständig gefehlt.
* **`_shared/email/webhook.ts` lief in zwei verschiedenen Fassungen.**
  `email-inbound` trug eine ältere Kopie mit einem einzelnen Secret,
  `auth-email-hook` eine neuere mit Unterstützung für mehrere Secrets
  (Schlüsselwechsel). Ein Modul namens „shared" war also keines.

### 23.5 Eine bewusste Abweichung

Alle Dateien wurden byte-genau übernommen — mit **einer** Ausnahme:

`email-inbound` importiert im ausgelieferten Stand seine eigene, ältere
Kopie von `webhook.ts` (flach im Function-Ordner, weil sie seinerzeit per
MCP statt per CLI ausgerollt wurde). Im Repository importiert die Function
nun das gemeinsame `../_shared/email/webhook.ts` in der neueren Fassung.

Begründung: Beide Fassungen exportieren `verifyWebhookSignature` und
`WebhookError` mit identischer Signatur; `email-inbound` verwendet nur
diese beiden. Die neuere Fassung ist rein additiv (mehrere Secrets statt
eines). Und `email-inbound` ist ausweislich seines eigenen Kopfkommentars
**noch nicht scharf** — es gibt keine MX-Einträge, die Function wird derzeit
nicht aufgerufen. Zwei Kopien eines geteilten Moduls im Repository zu
zementieren, widerspräche außerdem Ziffer 27 (Single Source of Truth).

**Beim nächsten Ausrollen von `email-inbound` gilt damit die neuere
Signaturprüfung.** Wer das nicht will, stellt den Import vor dem Deploy
zurück.

### 23.6 Was R-1 nicht gelöst hat

* `nayax-webhook` und `send-push` liegen weiterhin im Repository, sind aber
  **nicht deployed** (R-5). Die Drift in dieser Richtung besteht fort.
* Der CI-Schritt `supabase db reset` läuft weiterhin mit `|| true` und ist
  damit nicht blockierend. Jetzt, wo das Verzeichnis den Produktionsstand
  abbildet, wäre ein scharfer Lauf erstmals aussagekräftig.
* Ob `supabase db reset` tatsächlich durchläuft, konnte hier **nicht
  geprüft werden** — dafür fehlt der lokale Supabase-Stack. Die
  Reihenfolge und die Byte-Gleichheit sind geprüft, das Abspielen selbst
  nicht.

---

## 24. Umsetzung E-1 — Unternehmensbereich in die Kunden-App (31.08.2026)

**Stand: vorbereitet, Ausführung blockiert.** Die Lovable-Workspace hat keine
Credits mehr. Der Frontend-Code kann deshalb nicht geschrieben werden; das
Projekt hat auch keine GitHub-Anbindung, über die sich das umgehen ließe.

### 24.1 Was erledigt ist

| Schritt | Zustand |
| --- | --- |
| API-Vertrag geprüft und dokumentiert | ✅ `docs/API-UNTERNEHMENSBEREICH.md` |
| Projektwissen von Projekt A korrigiert | ✅ wirksam, kostet keine Credits |
| Bauauftrag geschrieben und geprüft | ✅ `docs/lovable/E-1-UMSETZUNGSAUFTRAG.md` |
| Bauauftrag an Lovable gesendet | ⛔ keine Credits |
| Ergebnis abgenommen | ⛔ steht aus |
| Projekt B stillgelegt | ⛔ steht aus, bewusst erst nach Abnahme |

### 24.2 Die offenen Fragen aus R-6 sind beantwortet

Der Auditbericht ließ zwei Punkte offen, weil sie ohne Prüfung nicht zu
entscheiden waren. Beide sind jetzt geklärt — durch Nachsehen, nicht durch
Annahme:

**Dürfen Firmenkunden ihre Stammdaten selbst pflegen? Nein.**
`business_update` und `business_location_set` verlangen `is_admin()` oder
`businesses.manage`. Bemerkenswert: Das Projektwissen von Projekt A wusste
das bereits und nennt sogar die Migrationen (0151, 0153) — das Partnerportal
wurde trotzdem mit Formularen dafür gebrieft. Die Information war da, sie ist
nur nicht angekommen.

Umsetzung: Stammdaten und Standorte werden **angezeigt, nicht bearbeitet**,
mit Verweis auf den Kontaktweg.

**Ist der Werbemittel-Upload baubar? Nein.**
`advertising_creative_upload` erwartet eine fertige HTTPS-Adresse. Es gibt
aber **keinen Storage-Bucket für Kampagnenmaterial** — vorhanden sind nur
`documents`, `employee-signatures`, `haccp`, `partner-signatures`,
`signed-documents`, alle privat und ohne Policy für Firmenkunden. Ein
Firmenkunde hat keinen Ort, an den er die Datei legen könnte.

Das ist eine **echte Backend-Lücke**, kein Frontend-Problem. Bis ein Bucket
samt Policy existiert, wird die Funktion nicht angeboten.

### 24.3 Weitere Funde bei der Vorbereitung

* **Kontakt geht, aber anders als gedacht.** `lead_create` verlangt
  `leads.manage` und ist damit internes CRM. Für die Kontaktfunktion eignet
  sich stattdessen ein direkter Insert in `contact_messages`: Die
  INSERT-Policy erlaubt jeder angemeldeten Person eine Zeile mit
  `customer_id = auth.uid()`.
* **`is_admin()` ist enger als der Name vermuten lässt** — ausschließlich
  `system_admin`. Gesellschafter kommen nicht darüber, sondern über die
  Berechtigung `businesses.manage`, die sie besitzen. Wer `is_admin()` als
  „ist irgendwie Verwaltung" liest, sperrt die Gesellschafter aus.
* **Das Projektwissen von Projekt A beschrieb sich selbst als
  „Firmenportal"** — der Text stammte aus Projekt B. Die Design- und
  Compliance-Regeln darin sind gut und wurden vollständig übernommen; nur die
  Rahmung war falsch und ist korrigiert.

### 24.4 Abweichung von der Skizze in Kapitel 17

Kapitel 17 schlug fünf gleichrangige Bereiche vor. Das geht nicht: Die untere
Leiste ist bewusst als vier Reiter plus Kundenkarte in der Mitte gebaut
(„Die Mitte ist kein Reiter, sondern eine Handlung", Kommentar in
`bottom-nav.tsx`). Ein fünfter Reiter zerstört diese Anordnung.

Der Unternehmensbereich ist für seine Nutzer ohnehin ein **Modus**, kein
Geschwister von „Bonus". Deshalb: Einstiegskarte im Profil, sichtbar nur bei
nicht-leerem `my_businesses()`, dahinter ein eigener Bereich mit eigener
Unternavigation. Die Kernforderung aus Ziffer 9 des Auftrags — eine App, eine
Anmeldung, klar getrennte Nutzerbereiche — bleibt erfüllt.

### 24.5 Nächster Schritt

Credits aufladen, dann den Auftrag aus
`docs/lovable/E-1-UMSETZUNGSAUFTRAG.md` unverändert an Projekt A senden. Die
Abnahmeprüfung steht am Ende derselben Datei. Projekt B bleibt bis zur
Abnahme unangetastet.
