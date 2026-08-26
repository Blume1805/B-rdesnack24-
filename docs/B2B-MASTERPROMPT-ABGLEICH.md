# Masterprompt „Bördesnack24 Business" — Abgleich mit dem Bestand

**Stand: 26.08.2026 · Fassung 3**

Der Auftraggeber hat einen Masterprompt für ein B2B-Ökosystem vorgelegt
(Business, Advertising, Werbeflächen, Sponsoring) und gefragt, ob er der
bisherigen Struktur widerspricht und wie er sich einfügt. Der Prompt sagt
ausdrücklich: erst analysieren, dann bauen. Dieses Dokument ist die Analyse.

**Jede Aussage unten ist am laufenden System abgefragt**, nicht aus dem
Gedächtnis geschrieben — Tabellen und Spalten aus `information_schema`,
Aufzählungstypen aus `pg_type`, Funktionen aus `pg_proc`, Regeln aus
`pg_policy`, Wächter durch Ausführen.

---

## 1. Antwort in drei Sätzen

Der Masterprompt widerspricht der bisherigen Struktur **nicht im Ziel** — er
ist die Fortsetzung eines Fahrplans, der am 21.08.2026 freigegeben und bis
Schritt 3 gebaut wurde. Er widerspricht ihr **in drei Punkten der Umsetzung**,
und die sind nicht kosmetisch: Rollenmodell, Zahlungen und
Mitarbeiterguthaben. Dazu kommen sechs Stellen, an denen er etwas neu bauen
will, das bereits steht.

Wer den Prompt wörtlich abarbeitet, baut ein zweites System neben dem
vorhandenen. Wer ihn auf den Bestand abbildet, spart etwa die Hälfte.

---

## 2. Was bereits gebaut ist

Der Fahrplan zum Vier-Säulen-Modell (`docs/STAND-2026-08-22.md`) hat die
Grundlage gelegt, auf die der Masterprompt zielt:

| Bereits vorhanden | Migration | Zeilen heute |
|---|---|---|
| `locations` mit `kind` = `public`/`business`/`club`/`partner` | 0114 | 4 |
| `payments`, anbieterneutral, mit Vorwärts-Trigger | 0115 | 0 |
| `businesses`, `business_members`, `business_locations` | 0117 | 0 |
| `app.is_business_member(uuid, business_role)` | 0117 | — |
| `purchases.business_id` samt Prüftrigger | 0121–0123 | 0 |
| `user_permissions` (Einzelfreigabe je Nutzer) | 0002 | 0 |
| `invoices` (Beleg je Kauf), `customers.customer_type` | ältere | 0 |

Drei Dinge daran sind für den Masterprompt entscheidend:

**Der Standorttyp kennt alle vier Säulen schon.** `location_kind` führt
`public`, `business`, `club`, `partner`. Vereinsstandort und Partnerstandort
sind keine neue Idee, sie sind ein vorhandener Wert.

**Die Firmenzuordnung eines Kaufs entsteht aus dem ORT.**
`app.purchase_business_pruefen` ordnet einen Kauf nur dann einer Firma zu,
wenn der Ort `kind = 'business'` trägt, über `business_locations` der Firma
gehört und der Käufer dort aktives Mitglied ist. Das ist §43 des Prompts
(„Transaction Engine", keine doppelte Speicherung) — bereits als Trigger.

**Die Mandantentrennung ist automatisiert.** `check_mandantentrennung.py`
läuft blockierend in der CI und bricht ab, sobald eine Tabelle eine Spalte
`business_id` (oder `payer_business_id`) bekommt, ohne dass eine RLS-Regel
`app.is_business_member` aufruft. §51 des Prompts („Ein Unternehmen darf
ausschließlich seine eigenen Daten sehen") ist damit keine Absichtserklärung,
sondern ein Bauabbruch. Jede neue Tabelle dieses Vorhabens fällt automatisch
darunter.

---

## 3. Die drei harten Widersprüche

### 3.1 Rollenmodell — der Prompt würde die Autorisierung brechen

**Prompt (§7):** neun globale Rollen (`CUSTOMER`, `BUSINESS_ADMIN`,
`BUSINESS_EMPLOYEE`, `ADVERTISER`, `SPONSOR`, `CLUB_ADMIN`, `OPERATOR`,
`MANAGING_PARTNER`, `SUPER_ADMIN`), ein Nutzer darf mehrere haben.

**Bestand:** `profiles.role` ist **eine** Spalte vom Aufzählungstyp
`app.role_key` mit **vier** Werten: `system_admin`, `shareholder`,
`employee`, `customer`. `auth_has_permission()` liest genau diese eine Rolle,
dazu `role_permissions` (RBAC) und `user_permissions` (ABAC, inklusive
explizitem Entzug). Jede RLS-Regel im System hängt daran.

**Warum das ein echter Widerspruch ist:** Neun flache Rollen in einer Spalte
können nicht gleichzeitig gelten. Und `BUSINESS_EMPLOYEE` ist genau die
Verwechslung, die 0117 ausdrücklich vermeiden wollte — dort steht im
Migrationskopf, der Typ heisse `business_role` (`admin`/`member`) und bewusst
**nicht** `employee`, weil `employee` in `profiles.role` einen Beschäftigten
von Bördesnack24 mit Zugriff auf HACCP-Protokolle bezeichnet. Ein
Mitarbeiter der Muster GmbH ist kein Beschäftigter von Bördesnack24.

**Was der Bestand stattdessen kann — und was der Prompt übersieht:** Das
Autohaus-Beispiel aus §7 (gleichzeitig Business-Kunde, Werbekunde und
Sponsor) funktioniert im vorhandenen Modell **ohne eine einzige neue globale
Rolle**. Es ist eine `businesses`-Zeile, an der drei Verträge hängen. Die
Person, die sich anmeldet, bleibt `customer`; ihre Rechte am Autohaus kommen
aus `business_members.role`. Mehrfachrollen entstehen dadurch von selbst:
Dieselbe Person kann bei drei Organisationen Mitglied mit verschiedenen
Rollen sein.

**Empfehlung:** `role_key` **nicht** erweitern. Stattdessen
`businesses` um einen Typ ergänzen (Firmenkunde / Werbekunde / Sponsor /
Verein / Einrichtung, mehrfach zulässig) und `business_role` bei Bedarf um
`billing` oder `viewer`. `OPERATOR` = vorhandenes `employee`,
`MANAGING_PARTNER` = vorhandenes `shareholder`, `SUPER_ADMIN` = vorhandenes
`system_admin`. Drei der neun Rollen existieren also bereits unter anderem
Namen.

### 3.2 Zahlungen — es gibt eine bewusste Sperre, kein Versehen

**Prompt (§55/56):** Einzelzahlung, Rechnung, SEPA, wiederkehrende
Zahlungen, Abonnements, Werbebudgets.

**Bestand:** `payments` ist gebaut, leer und wird von **nichts** beschrieben.
Das ist die Entscheidung vom 22.08.2026 („geparkt bis zum Automatenkauf").
Abgesichert ist sie durch `check_zahlungstexte.py`: Der Wächter bricht den
Bau ab, sobald Code die Tabelle benutzt, solange die Rechtstexte noch
zusagen, es werde „kein Zahlungsdienstleister" eingebunden.

**Das ist kein Hindernis, sondern eine erzwungene Reihenfolge:** erst
Dienstleister wählen und Rechtstexte ziehen, dann Code. Wer die
Werbe-Selbstbuchung aus §22 („Zahlung → Freigabe → Ausspielung") baut, löst
diese Sperre aus. Das muss im Plan stehen, sonst steht es später im
CI-Protokoll.

**Empfehlung:** Alles, was in Phase 1 Geld bewegt, läuft über
**Rechnungsstellung ausserhalb der App** (sevDesk), nicht über `payments`.
Damit bleibt die Sperre unangetastet, und die ersten B2B-Umsätze sind
trotzdem möglich.

### 3.3 Mitarbeiterguthaben — vor dem Bau zu klären, nicht danach

**Prompt (§17–19):** Wallet, Monatsbudget, Tageslimit, Arbeitgeberzuschuss
mit getrennter Erfassung von Arbeitgeber- und Mitarbeiteranteil.

**Bestand:** `payment_kind` führt bereits den Wert `wallet_topup`, und
`payments` trennt bereits `payer_profile_id` von `payer_business_id`. Der
Zuschuss-Split aus §19 ist im Datenmodell also vorgedacht.

**Was ungeklärt ist — und was der Prompt selbst anmerkt:** Ein
arbeitgeberfinanziertes Guthaben, das der Mitarbeiter einlösen kann, berührt
zwei Rechtsgebiete, die nicht nebenbei entschieden werden:

* **Aufsichtsrecht.** Ausgabe von Guthaben kann E-Geld-Geschäft nach ZAG
  sein. Die Ausnahme für begrenzte Netze (§ 2 Abs. 1 Nr. 10 ZAG) greift
  plausibel, wenn ausschliesslich an eigenen Automaten eingelöst werden
  kann — sie ist aber an Bedingungen geknüpft und teils anzeigepflichtig.
  **Ungeprüft; von hier aus nicht entscheidbar.**
* **Steuerrecht.** Der Prompt sagt in §19 selbst, die steuerliche Behandlung
  dürfe nicht automatisch als zulässig angenommen werden. Das ist richtig:
  Ob der Zuschuss unter die 50-€-Sachbezugsgrenze fällt, hängt an der
  Ausgestaltung (Gutschein vs. Geldleistung), und seit 2022 gelten dafür
  engere Anforderungen.

**Empfehlung:** Budgets in der ersten Ausbaustufe als **Verrechnungsbetrag
ohne Guthabenausgabe** bauen: Der Kauf läuft auf Firmenrechnung
(`purchases.business_id`, existiert), das Budget begrenzt ihn, und die Firma
zahlt monatlich per Rechnung. Kein ausgegebenes Guthaben, kein E-Geld, keine
Aufladung. Das liefert den Nutzen aus §16–18 und umgeht beide Fragen. Ein
echtes Wallet erst nach anwaltlicher Klärung.

---

## 4. Sechs Doppelungen — im Prompt neu, im Bestand vorhanden

| Prompt (§42) | Bestand | Bewertung |
|---|---|---|
| `businesses` | **existiert** (Name, Rechtsform, Rechnungsanschrift, Steuernummer, USt-IdNr., Status, weiches Löschen) | nicht neu bauen |
| `business_users` | **existiert** als `business_members` mit Einladungsstatus (`invited`/`active`/`suspended`/`removed`) | nicht neu bauen |
| `business_employees` | dasselbe wie oben; ein dritter Mitarbeiterbegriff neben `profiles.role='employee'` und `business_members` würde die Verwechslung aus 3.1 zementieren | streichen |
| Transaction Engine (§43) | **existiert** als `purchases.business_id` + Prüftrigger | nur erweitern |
| `clubs` | `locations.kind = 'club'` **existiert**; ein Verein ist eine Organisation → gehört als Typ an `businesses`, nicht in eine eigene Tabelle | zusammenführen |
| DATEV-Export (§57) | `datev_export_rows` **existiert**, und sevDesk ist das führende Buchhaltungssystem | kein zweiter Buchungspfad |

Zum letzten Punkt ausdrücklich: Die Hausregel „ein Geldfluss, eine Buchung"
(CLAUDE.md) verbietet, dass Werbe-, Sponsoring- oder Mietumsatz sowohl in
einer eigenen Tabelle als auch noch einmal in `finance_bookings` als
Auswertungsgrösse landet. Der Weg ist: Rechnung entsteht hier, wird in
sevDesk gebucht, kommt über den vorhandenen Sync als **eine** Buchung
zurück.

Und eine Abgrenzung, die leicht übersehen wird: `donation_causes` /
`donation_votes` (Kundenspende aus dem Kaufbetrag) ist **nicht** Sponsoring
(Unternehmen zahlt für Sichtbarkeit). Gleiche Anmutung, verschiedene
Rechtsnatur, verschiedene Umsatzsteuerbehandlung. Nicht vermischen.

---

## 5. Was fehlt und wirklich neu ist

Kein Widerspruch, sondern echte Lücken:

* **Zugang in die Firmentabellen.** Es gibt keine RPC zum Anlegen einer
  Firma, zum Einladen, zum Annehmen einer Einladung. Das steht als offener
  Punkt 4 im Fahrplan. Ohne das bleibt der ganze B2B-Bereich unbenutzbar.
* **Monatsrechnung.** `invoices` hängt an **einem** Kauf (`purchase_id`,
  not null) — das ist ein Beleg, nicht die Sammelrechnung aus §20.
* **Budgets** (`employee_budgets` o. ä.) — nichts davon existiert.
* **Leads/CRM** (§12/13) — nichts davon existiert.
* **Standortprüfung mit Score** (§14) — nichts davon existiert.
* **Werbeflächen** (§26–30) — nichts davon existiert. Ein Automat kennt
  heute keine Flächen.
* **Kampagnen, Werbemittel, Auslieferung** (§21–25) — nichts davon existiert.
* **Sponsoring und Umsatzbeteiligung** (§31–35) — nichts davon existiert.
* **Automatentyp Heissgetränke.** `machine_type` führt `snack`, `drink`,
  `combi`, `cooled`. Der Prompt nennt Heissgetränkeautomaten; Standort
  `STO-004` heisst bereits „Standort Heissgetränke". Kleine Lücke, leicht zu
  schliessen.

---

## 6. Werbung in der Kunden-App — Kollision mit zwei Hausregeln

Der Prompt will Werbung in der App (§21 „App", §37 „Regionaler Partner",
„Sponsored"). Zwei Regeln greifen sofort:

1. **KI-Kennzeichnung (CLAUDE.md).** Jede Einblendung im Kundenbereich, die
   **algorithmisch, regelbasiert oder KI-basiert** ausgewählt wird, braucht
   ohne Nachfrage einen sichtbaren `AiBadge`, einen Satz im `AiInfoScreen`
   und einen Eintrag in `public.ki_register`. „Sponsored Products" (§21.4)
   ist genau das. Das ist keine Auslegungsfrage; die Regel nennt
   „dynamisch gewählte Produkt-Kombinationen" ausdrücklich.
2. **Werbekennzeichnung.** §54 des Prompts verlangt sie selbst. Rechtlich
   greift § 5a Abs. 4 UWG (Schleichwerbung) und für die App zusätzlich der
   DSA. Der Prompt ist hier strenger als das, was heute im Repository steht —
   es gibt bisher **keinen** Wächter dafür.

**Empfehlung:** Wenn Werbung kommt, kommt sie mit einem achten Wächter, der
abbricht, sobald eine Werbe-Einblendung ohne Kennzeichnungs-Widget gerendert
wird. Dieselbe Bauart wie `check_zahlungstexte.py`: Die Regel steht sonst nur
in einem Dokument, und das liest niemand, der eine Komponente schreibt.

Und die Trennung aus §53 ist die wichtigste des ganzen Prompts:
**kontextbezogene Werbung** („am Standort Osterweddingen") ist ohne
Einwilligung möglich; **personenbezogene Werbung** („Philipp hat X gekauft")
ist es nicht. Die Datenschutzerklärung beschreibt heute Profiling
ausschliesslich für eigene Angebote. Werbekunden dürfen nach §52 keine
personenbezogenen Daten erhalten — Reporting also nur aggregiert, und zwar
mit einer Mindestfallzahl, sonst ist „1 Einlösung am Standort X" wieder
personenbeziehbar.

---

## 7. Frontend-Schnitt: Lovable

Der Auftraggeber schreibt, das Frontend solle mit Lovable entstehen. **Das
ist keine Änderung** — Lovable-Projekt `d5033021-6dce-4044-8bf6-bb50d80aa8ff`
ist bereits angebunden, arbeitet gegen **dasselbe** Supabase-Projekt
`nnfsyuglkqycwenwxmuw` mit dem Publishable Key, und es gibt eine
Auftragswarteschlange unter `docs/lovable-warteschlange/`.

Der Schnitt bleibt damit:

* **Supabase** — einzige Wahrheit. Schema, RLS, RPC, Edge Functions.
* **Lovable** — Web (Landing Pages, B2B-Portale, Werbeflächen-Marktplatz).
* **Flutter** (`apps/mobile`) — Kunden-App und interner Verwaltungsbereich.

**Die eine Regel, die dabei nicht verletzt werden darf:** Lovable legt bei
neuen Projekten von sich aus eine eigene Datenbank an. Für dieses Vorhaben
gilt: **Der Lovable-Agent legt keine Tabelle an und ändert kein Schema.**
Jede Schemaänderung entsteht als Migration in diesem Repository, sonst gibt
es zwei Schemata, die auseinanderlaufen — und die sieben Wächter greifen nur
auf einem davon.

Daraus folgt die Arbeitsteilung für dieses Vorhaben: Erst stehen Tabellen,
RLS und RPC hier; dann bekommt Lovable einen Auftrag, der die Spalten- und
Funktionsnamen ausgeschrieben nennt. So ist es in
`docs/LOVEABLE_ANWEISUNGEN.md` bereits festgehalten.

---

## 8. Vorgeschlagene Reihenfolge

Der Prompt schlägt in §64 eine Phaseneinteilung vor. Sie ist brauchbar, aber
nach Rechts- und Bauaufwand falsch sortiert. Vorschlag, angepasst an den
Bestand — als **Schritte 4 bis 8** des laufenden Fahrplans, nicht als neues
Vorhaben:

**Schritt 4 — B2B-Zugang** (schliesst offenen Punkt 4 des Fahrplans)
Firma anlegen, einladen, Einladung annehmen, Mitglieder verwalten,
Firmen-Dashboard mit Umsatz aus vorhandenen `purchases`. Budgets als
Verrechnungsgrenze ohne Guthaben (siehe 3.3). Abrechnung als Monatsübersicht
mit PDF/CSV — Rechnungsstellung zunächst über sevDesk, damit die
Zahlungssperre unberührt bleibt.
*Rechtlich:* Datenschutzerklärung um Arbeitgeber-Sicht ergänzen; der Hinweis
am Firmenautomaten (offener Punkt 3) wird hier fällig.

> **Erledigt am 26.08.2026** (Migrationen 0141–0143). Gebaut: Firma anlegen,
> einladen, Einladung annehmen, Mitglieder verwalten, Budget als Deckel,
> Übersicht und Monatsabrechnung. Nicht gebaut und bewusst nicht:
> Zahlungen, Guthaben, Firmen-Selbstregistrierung. Der Auftrag an Lovable
> liegt in `docs/lovable-warteschlange/04-b2b-firmenportal.md`.
>
> Zwei Dinge sind dabei aufgefallen und behoben: Der Monatstopf wurde vom
> ungedeckelten Anspruch statt vom tatsächlich Gezahlten geleert (0143), und
> die Datenschutzerklärung nannte den Namen der kaufenden Person nicht,
> obwohl er dem Arbeitgeber übermittelt wird (Fassung v16).
>
> Offen geblieben: die Einladungsmail. Die RPC gibt den Token zurück und
> verschickt nichts; die Information nach Art. 14 DSGVO gehört in diese Mail
> und ist vor dem ersten Versand nachzuholen.

**Schritt 5 — Werbeflächen** (physisch)
Reines Inventar: `advertising_spaces` je Automat, Verfügbarkeit, Preis,
Vertrag, Freigabe der Gestaltung. **Keine Ausspielung in der App.**
*Warum zuerst von den drei Werbethemen:* Es ist Vermietung — Vertrag und
Rechnung, keine Einwilligung, kein Tracking, keine Kennzeichnung im
Kundenbereich, keine Rechtstextänderung. Der schnellste Umsatz mit dem
geringsten Risiko.

> **Erledigt am 26.08.2026** (Migrationen 0145–0146), Backend. Gebaut:
> Flächeninventar je Automat, Mietverträge mit Motivfreigabe, Auslastung und
> Werbeumsatz je Automat, Sicht des Werbekunden auf seine eigenen Verträge.
> Nicht gebaut und bewusst nicht: Ausspielung in der App, Marktplatz,
> Zahlungen, Reichweitenangaben.
>
> Doppelbelegung verhindert die Datenbank über einen Ausschluss
> (`gist (space_id =, laufzeit &&)`), nicht die Oberfläche — zwei
> gleichzeitige Buchungen sehen beide eine freie Fläche. Entwürfe dürfen sich
> überschneiden, damit mehrere Angebote für denselben Platz vorbereitet
> werden können; verbindlich wird nur einer.
>
> Offen: der Bildschirm dazu. Das Inventar ist eine interne Sache
> (`locations.manage`) und gehört wie die Firmenkunden in die App.

**Schritt 6 — Sponsoring und Vereinsbeteiligung**
`businesses` mit Typ Sponsor/Verein, Pakete, Laufzeiten, Umsatzbeteiligung je
Standort. Die Beteiligung ist eine Gutschrift und gehört über sevDesk in die
Buchhaltung, nicht in eine zweite Umsatzrechnung.
*Rechtlich:* Sponsoring ist umsatzsteuerlich Leistungsaustausch, wenn
Sichtbarkeit gewährt wird — vom Steuerberater bestätigen lassen.

**Schritt 7 — Leads und CRM**
Formulare der Landing Pages, Leadtypen, Status, Aufgaben. Bewusst nach
Schritt 4–6: Ein Lead-Prozess ohne Produkt dahinter erzeugt Anfragen, die
niemand bedienen kann.

**Schritt 8 — Werbung in App und Display**
Zuletzt, weil hier der gesamte Aufwand aus Abschnitt 6 anfällt:
Kennzeichnung, achter Wächter, `ki_register`, `AiInfoScreen`, aggregiertes
Reporting, und je nach Ausgestaltung Einwilligung.

**Quer dazu, sobald entschieden:** Zahlungsdienstleister wählen, Rechtstexte
ziehen, dann `payments` in Betrieb nehmen. Erst danach Self-Service-Buchung
(§22) und Werbebudgets.

Phase 4 des Prompts (§64: KI, Prognosen, automatische Preisoptimierung) ist
für dieses Dokument bewusst nicht bewertet. Sie wäre das erste echte
KI-System im Sinne von Art. 3 EU AI Act und braucht eine eigene Einstufung,
bevor darüber gesprochen wird — automatische Preisoptimierung berührt
zusätzlich § 19 GWB und die Preisangabenverordnung.

---

## 9. Was ich nicht beantworten kann

* **ZAG/E-Geld** und **Sachbezug** (3.3) — beides braucht anwaltliche bzw.
  steuerliche Prüfung. Von hier aus nicht entscheidbar; jede Zahl, die ich
  dazu nennen würde, wäre geraten.
* **Preise** für Werbeflächen und Sponsoringpakete — der Prompt sagt selbst,
  sie müssten konfigurierbar sein. Reichweitenangaben („ca. X Transaktionen
  pro Monat", §28) setzen belastbare Verkaufszahlen voraus; es gibt heute
  **einen** Automaten und 93 Tageszeilen in `machine_sales_daily`. Eine
  Reichweite daraus zu bewerben, wäre nach § 5 UWG angreifbar.
* **Umsatzziel 100.000 €** (§63) — bewertbar erst, wenn Standortzahl,
  Deckungsbeitrag je Automat und Werbepreise feststehen.

---

## 10. Fazit

Kein Grundwiderspruch. Der Masterprompt beschreibt dasselbe Ziel wie der
freigegebene Fahrplan und ist an vielen Stellen konkreter. Drei Punkte
müssen vor dem ersten Commit entschieden werden — Rollenmodell (keine neun
flachen Rollen), Zahlungen (Sperre respektieren) und Guthaben (ohne E-Geld
starten) —, sechs Doppelungen sind zu streichen, und Werbung in der App
gehört ans Ende statt an den Anfang.
