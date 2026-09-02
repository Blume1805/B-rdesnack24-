# Auftrag an den Lovable-Agenten — Projekt B wird die Gesellschafter-App

**Projekt B (`35646ee4-142a-4017-bdb2-089951ddcc94`), bisher „Bördesnack24 Partner Portal"**
Stand: 02.09.2026 · Verfasser: Claude (Backend-Audit) · Freigabe: Philipp Blume

---

## 0. Was sich am Zuschnitt ändert — und warum das gefahrlos ist

Die Zielarchitektur besteht aus **zwei** Anwendungen:

| App | Wer | Inhalt |
|---|---|---|
| **Kunden-App** (Projekt A) | Privatpersonen **und** Firmenkunden | Privatbereich + Unternehmensbereich (`/app/unternehmen/*`) |
| **Gesellschafter-App** (dieses Projekt) | Gesellschafter, Systemadministration, Beschäftigte | Verwaltung, Finanzen, Werbegeschäft, Freigaben |

Damit entfällt der bisherige Zweck dieses Projekts. Ein eigenes Portal für
Firmenkunden gibt es nicht mehr — Firmenkunden arbeiten im
Unternehmensbereich der Kunden-App. Dieses Projekt wird zur eigenständigen
Gesellschafter-App, die über dieselbe Supabase-Datenbank mit ihr verbunden
ist.

**Das kostet nichts:** Beide Projekte stehen auf `is_published: false`. Es
gibt keine veröffentlichte Adresse und keine Nutzer, die auf dem bisherigen
Portal arbeiten.

**Was aus dem bisherigen Bestand wird:**

* `PortalShell`, `PageHeader`, `StatCard`, `StatusBadge`, `Money`, `DemoBadge`
  sind gute Bausteine für eine Verwaltungsoberfläche. Sie bleiben — sie
  brauchen nur den Token-Abgleich aus § 5.
* Die Firmenkunden-Ansichten (`firma`, `kampagnen`, `kontoauszug`,
  `vertraege` in ihrer heutigen, kundenseitigen Lesart) werden **nicht
  weiterentwickelt**. Lösche sie noch nicht — schreib in deinen Bericht,
  welche Datei welchen Zweck hatte, damit Philipp entscheiden kann, was davon
  in den Unternehmensbereich der Kunden-App wandert.
* Die Anmeldung bleibt und wird um die Rollenprüfung aus § 3 ergänzt.

> **Offene Frage an Philipp, nicht an dich:** Die Gesellschafter-App existiert
> heute als Flutter-App (`apps/mobile`) mit 27 Verwaltungs-Screens. Ob diese
> Web-Fassung sie ablöst oder daneben besteht, ist nicht entschieden. Bau
> deshalb in der Reihenfolge aus § 6 und warte nach Stufe 1 auf Rückmeldung.

---

## 1. Der Umfang — abgelesen an der bestehenden Flutter-App

Die Flutter-App führt heute diese Bereiche. Sie sind der Maßstab für den
Funktionsumfang, nicht für das Aussehen.

**Verwaltung (19)**
`approvals` · `b2b_customers` · `cancellations` · `cash` · `cleaning` ·
`complaints` · `disposal` · `documents` · `employees` · `filling` ·
`inventory` · `inventory_report` · `machine_stock` · `maintenance` ·
`management` · `my_signature_tasks` · `signature_management` ·
`telemetry_hub` · `temperature`

**Administration (5)**
`advertising` · `businesses_admin` · `campaigns` · `email_admin` · `leads`

**Finanzen (2)**
`finance` · `datev_export`

**Freigaben (1)**
`approvals`

---

## 2. Rollen und Rechte

Der Enum `app.role_key` kennt genau vier Werte:

```
system_admin · shareholder · employee · customer
```

**`admin` gibt es nicht.** In Projekt A wird heute gegen diesen nicht
existierenden Wert geprüft — die Prüfung läuft deshalb immer ins Leere. Mach
denselben Fehler hier nicht.

Darüber liegen elf Rechte, die je Rolle vergeben werden:

```
advertising.manage · businesses.manage · creatives.approve · documents.edit
finance.view · inventory.view · leads.manage · locations.manage
offers.manage · sponsorship.manage · users.manage
```

`my_permissions()` liefert die Rechte des angemeldeten Kontos als `text[]`.
`app_role()` liefert die Rolle. `is_shareholder()` gibt es ebenfalls.

### Die Regel, die nicht verhandelbar ist

**`my_permissions()` steuert die Navigation, niemals den Zugriff.**

Ein Menüpunkt, den jemand nicht sehen soll, wird ausgeblendet — das ist
Bequemlichkeit, keine Sicherheit. Jede RPC prüft die Berechtigung selbst und
antwortet mit `42501`, wenn sie fehlt. Baue die Oberfläche so, dass sie diesen
Fall verständlich anzeigt, statt ihn zu verhindern zu versuchen.

Im Zweifel gesperrt: Solange `my_permissions()` nicht geladen ist, wird
nichts freigeschaltet.

---

## 3. Der RPC-Vertrag nach Recht

Alles hier ist aus der Produktionsdatenbank gelesen. Jede Funktion prüft
`is_admin() ODER auth_has_permission('<recht>')`, sofern nicht anders vermerkt.

| Recht | Funktionen |
|---|---|
| `advertising.manage` | `advertising_campaign_set`, `advertising_campaign_status`, `advertising_coupon_sponsorship_set`, `advertising_coupon_sponsorship_status` |
| `locations.manage` | `advertising_contract_set`, `advertising_contract_status`, `advertising_motif_approve`, `advertising_overview`, `advertising_space_remove`, `advertising_space_set` |
| `businesses.manage` | `business_create`, `business_update`, `business_location_set`, `business_invoice_request` |
| `leads.manage` | `leads_list`, `lead_create`, `lead_status_set`, `lead_activity_add` |
| `sponsorship.manage` | `sponsorship_set`, `sponsorship_status` |
| `creatives.approve` | `advertising_creative_review` |
| `documents.edit` | `add_document_version` |
| `offers.manage` | `redeem_personal_offer` |
| `users.manage` | `execute_account_deletion`, `settle_due_referrals` |
| `finance.view` (**ohne** `is_admin`) | `finance_kpis`, `finance_summary`, `finance_bookings_list`, `anlage_pkw` |
| nur `is_admin()` | `business_invoice_release`, `is_shareholder` |

**Zwei Dinge, die daran auffallen und die du beachten musst:**

1. **Die Finanzfunktionen prüfen `finance.view` allein** — ohne
   `is_admin()`-Zweig. Wer das Recht nicht hat, kommt auch als
   Systemadministrator nicht durch. Das ist Absicht; bau keine Umgehung.
2. **`business_update` und `business_location_set` sind hier richtig
   aufgehoben** — sie prüfen `businesses.manage`, nicht die
   Firmenmitgliedschaft. Der ursprüngliche Auftrag dieses Projekts hatte sie
   als Selbstbedienung für Firmenkunden vorgesehen; das war ein Irrtum und
   ist der Grund, warum die Firmenstammdatenpflege hierher gehört und nicht
   in die Kunden-App.

### `execute_account_deletion` — mit besonderer Sorgfalt

Diese Funktion führt eine Kontolöschung nach Art. 17 DSGVO aus: Sie sperrt
den Zugang, anonymisiert Profil und Kundenstammdaten, löscht 13 Tabellen,
sperrt 18 weitere bis zum Fristablauf und bereinigt das Änderungsprotokoll.
Sie ist **nicht umkehrbar**.

Anforderungen an die Oberfläche:

* Nur erreichbar mit `users.manage`. Ein Gesellschafter ohne dieses Recht
  sieht den Punkt nicht — und wird von der Datenbank ohnehin abgewiesen.
* Der Bericht der Funktion wird **vollständig angezeigt**: was gelöscht wurde
  (`geloescht`), was bis zum Fristablauf gesperrt bleibt
  (`gesperrt_bis_fristablauf`, je Tabelle mit Jahren), wie viele
  Protokollzeilen bereinigt wurden (`protokoll_bereinigt`), und welche
  Tabellen als Beschäftigtendaten nicht dazugehören (`nicht_zustaendig`).
* Bestätigung in zwei Schritten, mit dem Namen des betroffenen Kontos zum
  Abtippen. Keine Löschung aus einem Listeneintrag heraus.

---

## 4. Was hier **nicht** hingehört

* **Nichts für Endkunden.** Keine Produktansicht, kein Bonusprogramm, keine
  Kundenkarte. Das ist die Kunden-App.
* **Keine Selbstbedienung für Firmenkunden.** `my_businesses`,
  `business_dashboard`, `business_statement`, `my_advertising_campaigns`,
  `my_advertising_contracts`, `advertising_campaign_report`,
  `advertising_creative_upload` sind mitgliedschaftsgebunden und gehören in
  den Unternehmensbereich der Kunden-App. Ein Gesellschafter, der dieselben
  Zahlen sehen will, nimmt die Verwaltungsfunktionen aus § 3.
* **Keine Datenbankänderungen.** Die Datenbank ist extern und wird über den
  Supabase-Connector angebunden — nicht über „Enable Database".
* **Keine erfundenen Daten.** Kein Beispielwert, der wie ein echter aussieht.
  Bei leerer Tabelle ein ehrlicher Leerzustand.

---

## 5. Design

Verbindlich ist **`docs/DESIGN-SYSTEM-EINHEITLICH.md`** im
Backend-Repository. Drei Punkte daraus sind für dieses Projekt die dringendsten:

### 5.1 🔴 Die Schriften fehlen

Das Projekt deklariert `"Bricolage Grotesque"` und `"Hanken Grotesk"`, hat
aber **keine `@font-face`-Regel und kein `public/fonts/`**. Beide Schriften
werden nie geladen; das Portal rendert vollständig in `system-ui`.

Übernimm die vier `.woff2`-Dateien, die `@font-face`-Blöcke und die beiden
OFL-Lizenztexte aus Projekt A. Selbst ausliefern, **nicht** über Google
Fonts — die IP-Adresse der Besucher soll die Seite nicht verlassen.

### 5.2 Tokens angleichen

Projekt A ist der Maßstab. Hier umzustellen:

* Neutraltöne auf die Werte des Vertrags (Hintergrund `#FBF8F4`, Rahmen
  `#CFC7BB`, gedämpfter Text `#6B6862`).
* Radius `0.875rem` → `0.625rem`.
* Bewegungskurve `cubic-bezier(0.33, 1, 0.68, 1)` → `--ease-house
  cubic-bezier(0.22, 1, 0.36, 1)`, dazu die vier Hausdauern.
* Rollennamen: `--brand` → `--gold`, `--brand-text` → `--gold-on-light`,
  `--ink` bleibt.

Gold trägt nur auf Ink; als Text auf hellem Grund gilt `#8A6A00`. Eine
goldene Fläche pro Bildschirm.

### 5.3 Register: Werkzeug, nicht Schaufenster

Diese App ist die dichteste der drei. Listen, Filter, Tabellen. Keine
Zierbewegung, keine großen Bilder, Gold nur als Zustandsakzent. Beträge und
Kennzahlen **immer** mit Tabellenziffern — in einem Kontoauszug springen
proportionale Ziffern und sind schwer zu vergleichen.

Zustand nie nur über Farbe: „Ausverkauft" braucht ein Wort, nicht nur ein
rotes Feld. Mindestens 44 × 44 px Tippfläche, sichtbarer Fokusring auf jedem
Bedienelement.

### 5.4 Die drei Qualitäts-Skills

`impeccable` (Modus **Operate** — der Besucher erledigt eine Aufgabe;
Scanbarkeit und Verlässlichkeit vor Ausdruck), `frontend-taste` gegen
generische Optik, `humanizer` für jeden sichtbaren Text. Zusätzlich zu
`boerdesnack24-design`, nicht statt seiner.

---

## 6. Reihenfolge — nicht alles auf einmal

27 Bereiche sind kein Auftrag, sondern ein Programm. Bau in dieser Reihenfolge
und **halte nach Stufe 1 an**, bis Philipp den Stand gesehen hat.

**Stufe 1 — Fundament (jetzt)**
Schriften, Tokens, Rollen- und Rechteprüfung, Navigation aus
`my_permissions()`, ein leerer Rahmen mit Anmeldung und Abmeldung, plus
**eine** vollständige Fläche als Muster: die Finanzübersicht (`finance_kpis`,
`finance_summary`). Sie zeigt, ob Zahlenlayout, Leerzustand, Fehlerfall und
Rechteabweisung stimmen.

**Stufe 2 — Werbegeschäft**
`advertising_overview`, Verträge, Kampagnen, Sponsorings, Motivfreigabe. Der
Bereich mit dem meisten Ertrag und den meisten fertigen RPCs.

**Stufe 3 — Firmen und Vertrieb**
`business_create`/`business_update`/`business_location_set`,
Rechnungsanforderung und -freigabe, `leads_list` samt Vorgängen.

**Stufe 4 — Betrieb**
Bestand, Befüllung, Reinigung, Temperatur, Wartung, Entsorgung, Telemetrie.
Diese Bereiche hängen an Tabellen, nicht an RPCs — der Datenzugriff ist hier
zuerst zu klären.

**Stufe 5 — Personen und Belege**
Beschäftigte, Unterschriften, Dokumente, Kontolöschung, DATEV-Export.

---

## 7. Wie du den Abschluss von Stufe 1 belegst

1. **Beide Schriftfamilien laden** — im Netzwerk-Tab nachgesehen, nicht im
   CSS. Nenne die vier geladenen Dateien.
2. **Die Rechteprüfung greift in beide Richtungen.** Zeig, was ein Konto
   **mit** `finance.view` sieht und was eines **ohne** sieht. Beide Fälle
   nennen. Ein Test, der nur den Erfolgsfall zeigt, ist kein Test.
3. **Die Abweisung ist verständlich.** Ein `42501` erscheint nie als Code,
   sondern als Satz, der sagt, welches Recht fehlt und an wen man sich wendet.
4. **Der Leerzustand ist ehrlich.** Keine Zahl, die keine Messung ist.
5. **Was du nicht umsetzen konntest** — mit Grund. Eine verschwiegene Lücke
   wäre schlimmer als eine benannte.
