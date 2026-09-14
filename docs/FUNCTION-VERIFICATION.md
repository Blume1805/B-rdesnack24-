# Verification-Matrix Bördesnack24

Stand: **14.09.2026**. Eine Zeile je geprüfter Funktion, ein Status je
Spalte. Die Matrix berichtet über durchgeführte Prüfungen.

Status: 🔴 ROT (neu, geändert, ungeprüft, nicht testbar, Test
fehlgeschlagen) · 🟡 GELB (nur Zwischenstatus, mit Verantwortlichem und
Frist) · 🟢 GRÜN (Test, Negativtest, Regression, Security, Datenbank,
Legal und Doku nachgewiesen).

`GRÜN verfällt`, sobald eine Abhängigkeit der Funktion geändert wird.

Nachweise: `/docs/SECURITY.md`, Skripte: `scripts/pruefumgebung/`.

---

## 1. Datenisolation Kundenbereich

| ID | Funktion | Datenklasse | Test | Negativ | Regression | Security | DB/RLS | Legal | Doku | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CUST-001 | Eigenes Profil lesen/ändern | D3 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 🟢 |
| CUST-002 | Profil-E-Mail ändern | D3/D4 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 🟢 (S-5 behoben) |
| CUST-003 | Einwilligungen (`consents`) | D3 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 🟢 |
| CUST-004 | Kaufhistorie lesen | D3/D6 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 🟢 |
| CUST-005 | Push-Token verwalten | D3 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 🟢 |
| CUST-006 | Benachrichtigungen lesen | D3 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 🟢 |
| CUST-007 | Kontaktnachrichten | D3 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 🟢 |
| CUST-008 | Löschantrag stellen | D3 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 🟢 |
| CUST-014 | Werbung und Gutscheine für ein gelöschtes Konto | D3 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 🟢 |
| CUST-015 | Geburtstags-/Jubiläumsgutschein erzeugbar | D3 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 🟢 (S-21 behoben) |
| CUST-016 | Löschverlangen wird ausgeführt | D3/D6 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 🟢 (13 Prüfungen) |
| CUST-018 | Löschregeln für die restlichen 15 Tabellen festgelegt | D3/D6 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 🟢 (Freigabe 02.09.2026) |
| CUST-020 | Änderungsprotokoll trägt die Löschung nicht zurück | D3/D6 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 🟢 (S-23 behoben) |
| CUST-021 | Fristbeginn erst mit Ende des Vorgangs (§ 147 Abs. 4 AO) | D6 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 🟢 (S-24 behoben) |
| CUST-019 | Fristlauf je Dokumentart, mit Ablaufhemmung | D6 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 🟢 |
| CUST-017 | Auskunft nach Art. 15 erreichbar (`export_my_data`) | D3 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 🟢 (R-13, 38 statt 9 Bereiche) |
| CUST-009 | Individuelle Preise lesen | D2/D3 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 🟢 |
| CUST-010 | Produktbewertung abgeben/lesen | D3 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 🟢 (S-4 behoben) |
| CUST-011 | Produktdetails (`product_detail`) | D0 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 🟢 |
| CUST-012 | Produktkatalog über Tabelle `products` | D2 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 🟢 (S-2 behoben) |
| CUST-013 | Rechnungssicht | D3/D6 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 🟢 |

¹ Der Ablauf steht seit dem 02.09.2026 (Kapitel 32 freigegeben, Kapitel 33
und 34 umgesetzt). Seit der Freigabe der letzten 15 Tabellen trägt **jede**
Tabelle mit Personenbezug eine Regel; `offen` gibt es nicht mehr. Zwei
Tabellen mit Beschäftigtendaten (`ifsg_briefings`, `employee_trainings`)
stehen bewusst auf `ausserhalb` — sie folgen dem Arbeits- und
Lebensmittelrecht, nicht § 147 AO, und der Löschlauf weist sie unter
`nicht_zustaendig` aus, statt sie stillschweigend zu übergehen.

## 2. Zahlung, Abo, Jugendschutz

| ID | Funktion | Datenklasse | Test | Negativ | Security | Finanz | Legal | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PAY-001 | `choose_subscription_plan` — Preisbildung | D5 | ✓ | ✓ | ✓ | ✓ | ✓ | 🟢 |
| PAY-002 | `choose_subscription_plan` — Altersschranke | D5 | ✓ | ✓ | ✓ | ✓ | ✓ | 🟢 (S-6 behoben) |
| PAY-003 | Abo selbst hochstufen (Missbrauch) | D5 | ✓ | ✓ | ✓ | ✓ | — | 🟢 |
| PAY-004 | Punkte-/Bonusgutschrift durch Client | D5 | ✓ | ✓ | ✓ | ✓ | — | 🟢 |
| PAY-005 | `store_subscription_claim` | D5 | ✗³ | ✗³ | ✗³ | — | — | 🔴 |
| PAY-006 | Geburtsdatum einmalig nachtragen (App + Trigger) | D3 | ✓ | ✓ | ✓ | ✓ | ✓ | 🟢 |

³ Nicht ausgeführt: erfordert einen Store-Beleg. Fehlendes Mittel
namentlich: Sandbox-Konto App Store / Play Billing.

## 3. Verwaltung und Gesellschafterbereich

| ID | Funktion | Datenklasse | Test | Negativ | Security | Status |
| --- | --- | --- | --- | --- | --- | --- |
| GES-001 | 48 Verwaltungs-RPCs gegen Kundenkonto | D2 | ✓ | ✓ | 48/48 ✓ | 🟢 (S-12 behoben) |
| GES-002 | `finance_*` (Buchhaltung) | D6 | ✓ | ✓ | ✓ | 🟢 |
| GES-003 | `inventory_*` (Bestand, FIFO, EK) | D2 | ✓ | ✓ | ✓ | 🟢 |
| GES-004 | `pkw_*`, `audit_log` | D2 | ✓ | ✓ | ✓ | 🟢 |
| GES-005 | `machine_sales_daily` (Tagesumsatz) | D2 | ✓ | ✓ | ✓ | 🟢 (S-3 behoben) |
| GES-006 | `inventory` (Fachbestand, MHD) | D2 | ✓ | ✓ | ✓ | 🟢 (S-9 behoben) |
| GES-007 | Rollen- und Rechtekatalog lesbar | D1 | ✓ | ✓ | ✓ | 🟢 (S-8 behoben) |
| GES-008 | `auth_has_permission(perm, fremde uid)` | D1 | ✓ | ✓ | ✓ | 🟢 (S-11 behoben) |
| GES-009 | Verwaltungsoberflächen Flutter (R-12) | D2 | ✓ | ✓ | ✓ | 🟢 |

## 4. B2B / Firmenkunden

| ID | Funktion | Test | Negativ | Security | Status |
| --- | --- | --- | --- | --- | --- |
| API-001 | `business_locations_list` — Firma A gegen B | ✓ | ✓ | ✓ | 🟢 (R-11) |
| API-002 | übrige B2B- und Werbe-RPCs gegen zweiten Firmenkunden | ✓ | ✓ | ✓ | 🟢 (33 Prüfungen, `docs/SECURITY.md` Abschnitt 12) |
| API-004 | Rechteausweitung innerhalb eines Mandanten (Mitglied → Admin) | ✓ | ✓ | ✓ | 🟢 |
| API-005 | Einladung mit fremdem Rohtoken annehmen | ✓ | ✓ | ✓ | 🟢 |
| API-003 | `my_businesses` / `my_advertising_*` — Mitgliedschaftsbindung | ✓ | ✓ | ✓ | 🟢 |

## 5. Auth

| ID | Funktion | Test | Status |
| --- | --- | --- | --- |
| AUTH-001 | Rollenvergabe nur bei Einladung (`handle_new_user`) | ✓ Code + Trigger, Verhalten belegt | 🟢 |
| AUTH-002 | Rate Limiting `/auth/v1` | ✗ Egress gesperrt | 🔴 ⏸ EXTERN |
| AUTH-003 | Passwort-Reset: Einmaligkeit, Ablauf, Session-Invalidierung | ✗ Egress gesperrt | 🔴 ⏸ EXTERN |
| AUTH-004 | Benutzerenumeration `/auth/v1/recover` | ✗ Egress gesperrt | 🔴 ⏸ EXTERN |
| AUTH-005 | Schutz vor kompromittierten Passwörtern | ✗ Schalter nicht bedienbar — Feature ab Pro, Organisation auf `free` | 🔴 S-13 ⏸ EXTERN (Tarifentscheidung) |
| AUTH-006 | Mindestpasswortlänge | ✓ 10 Zeichen, belegt durch Screenshot vom 02.09.2026, 13:40 | 🟢 (S-15 behoben) |
| AUTH-007 | Passwortwechsel nur nach kürzlicher Anmeldung | ✓ eingeschaltet, belegt durch Screenshot vom 02.09.2026, 13:39 | 🟢 (S-16 behoben) |
| AUTH-008 | Aktuelles Passwort beim Ändern verlangen | ✓ eingeschaltet, belegt durch Screenshot vom 02.09.2026, 13:39 | 🟢 (S-17 behoben) |
| AUTH-010 | Doppelte Bestätigung bei Adressänderung (`Secure email change`) | ✓ eingeschaltet, belegt durch Screenshot — damit ist die Annahme aus S-5 bestätigt | 🟢 |
| AUTH-011 | Zeichenklassen im Passwort serverseitig verlangt | ✓ „Password requirements" steht auf „Select an option" — nicht gesetzt | 🔴 S-22 |
| AUTH-009 | `config.toml` beschreibt die gehosteten Auth-Einstellungen | ✓ widerlegt (10 gegen 6) | 🔴 S-18 |

## 6. Speicher, E-Mail, Protokollierung

| ID | Funktion | Test | Status |
| --- | --- | --- | --- |
| DB-001 | Storage-Buckets privat mit eigener Policy | ✓ | 🟢 |
| DB-002 | Bucket-Grenzen (Größe, MIME) | ✓ gesetzt, Upload-Pfad angepasst und getestet | 🟢 (S-10 behoben) |
| MAIL-001 | Webhook-Signaturen ohne Rückfallwert | ✓ Code | 🟢 |
| MAIL-002 | `email_enqueue` Empfängerbestimmung | ✓ | 🟢 (S-5 behoben) |
| MAIL-003 | `email_report_share` / `fetch_email_report_share` | ✓ | 🟢 (S-1 behoben) |
| MAIL-004 | Zustellung über Resend an Testpostfach | ✗ kein Testpostfach | 🔴 |
| DOC-001 | Änderungsprotokoll buchführungsrelevanter Tabellen | ✓ | 🟢 (S-7 behoben) |
| DB-003 | Migrationen von Null wiederholbar | ✓ 232/232 am 14.09.2026; die neun Merkmale waren am 02.09.2026 deckungsgleich mit der Produktion, seither nicht erneut messbar (Supabase-Verbindung nicht autorisiert) | 🟢 (S-14 behoben) |
| DB-004 | PUBLIC hat kein Ausführungsrecht auf Funktionen | ✓ 0 von 156 | 🟢 (S-19 behoben) |
| DB-005 | `authenticated` führt nur die vorgesehenen 138 Funktionen aus | ✓ Fingerabdruck `c5f00ccb…` | 🟢 (S-20 behoben) |

## 7. Automatenzahlung und dynamische Preise (14.09.2026)

Nachweise: `scripts/pruefumgebung/105_automat_bezahlung.sql` (28 Urteile,
alle OK) und `106_automat_isolation.sql` (22 Urteile, alle OK), gelaufen
gegen einen **Neubau von Null** über alle 232 Migrationen.

**Keine dieser Zeilen ist grün, und das liegt nicht an der Technik.** Die
technischen Nachweise sind geführt; offen ist der Rechtsteil. Nach
`docs/COMPLIANCE.md` stehen elf Anpassungen aus, darunter eine Frage, die
ohne den Vertrag mit Automatenland nicht zu beantworten ist. Solange die
Legal-Spalte offen ist, ist die Funktion 🔴 — so sieht es der Skill vor,
und hier gibt es dafür kein Gelb.

Hinzu kommt für alle Zeilen gleichermaßen: **Die Migrationen sind nicht
ausgerollt.** Die Supabase-Verbindung ist nicht autorisiert; geprüft
wurde die lokale Replik. Das ist nach der Gleichheitsmessung in
`scripts/pruefumgebung/README.md` ein gültiger Nachweis über das
Verhalten — aber kein Nachweis, dass es in der Produktion steht.

| ID | Funktion | Datenklasse | Test | Negativ | Regression | Security | DB/RLS | Legal | Doku | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AUT-001 | `automatenpreis()` — Grundpreis plus MHD-Stufe | D2 | ✓ A1–A4 | ✓ | ✓ | ✓ | ✓ | ✗ offen | ✓ | 🔴 |
| AUT-002 | `kundenpreis()` — Dauerrabatt und Gutschein am Konto | D3 | ✓ | ✓ | ✓ | ✓ 106/V | ✓ | ✗ offen | ✓ | 🔴 |
| AUT-003 | `vend_freigabe_anlegen()` — Code nur als Hash, 3 min | D3 | ✓ D1–D4 | ✓ | ✓ | ✓ | ✓ | ✗ offen | ✓ | 🔴 |
| AUT-004 | `app.vend_freigabe_einloesen()` — genau einmal | D3/D6 | ✓ D3 | ✓ Zweiteinlösung abgewiesen | ✓ | ✓ | ✓ | ✗ offen | ✓ | 🔴 |
| AUT-005 | `terminal_ereignisse` unveränderbar, Hashkette | D6 | ✓ B1–B4, C0–C2 | ✓ erzwungene Änderung wird erkannt | ✓ | ✓ | ✓ | ✗ offen | ✓ | 🔴 |
| AUT-006 | `terminal_luecken()` / `ereigniskette_pruefen()` | D6 | ✓ E1, C1–C2 | ✓ | ✓ | ✓ | ✓ | ✗ offen | ✓ | 🔴 |
| AUT-007 | `terminal_auszahlungen` / `auszahlungen_abgleich()` | D6 | ✓ F1–F3 | ✓ Betrag ≠ Umsatz − Gebühr abgewiesen | ✓ | ✓ | ✓ | ✗ offen | ✓ | 🔴 |
| AUT-008 | `bar_soll()` / `kassendifferenzen()` — Kassensturz | D6 | ✓ G1–G5 | ✓ | ✓ | ✓ | ✓ | ✗ offen | ✓ | 🔴 |
| AUT-009 | `preis_ausspielungen` / `preis_abweichungen()` | D2 | ✓ H1–H3 | ✓ | ✓ | ✓ | ✓ | ✗ offen | ✓ | 🔴 |
| AUT-010 | Edge Function `terminal-webhook` | D5/D6 | ✓ 10 von 10 (`deno test`, 14.09.) | ✓ Kartendaten, Replay, verfälschte Signatur | ✓ | ✓ Einheitsebene | — | ✗ offen | ✓ | 🔴 |
| AUT-011 | Datenisolation der fünf neuen Tabellen (IDOR/BOLA) | D3/D6 | ✓ T1–T5d, V1–V6, M1–M4, F1–F2 | ✓ | ✓ | ✓ | ✓ | ✗ offen | ✓ | 🔴 |

Zu AUT-010: Die Herstellerschicht ist am 14.09.2026 zum ersten Mal
tatsächlich ausgeführt worden — **10 von 10 Tests grün**. Geprüft wurden
unter anderem, dass eine Kartennummer auch aus einem Feld verschwindet,
das auf keiner Sperrliste steht; dass eine Belegnummer gleicher Länge
**nicht** verworfen wird (Luhn-Prüfung statt Ziffernzählen); dass eine
echt signierte, aber eine Stunde alte Nachricht abgewiesen wird; und dass
der Signaturvergleich nicht früh abbricht.

Die Tests beziehen ihre Zusicherungen jetzt von JSR statt von
`deno.land/std` — letzteres ist aus dieser Umgebung nicht erreichbar. Ein
Test, den niemand starten kann, ist kein Nachweis; genau daran lag es,
dass diese zehn Prüfungen seit ihrer Entstehung nie gelaufen sind.

### Was das Isolationsprotokoll gefunden hat (S-25)

`106_automat_isolation.sql` hat nicht bestätigt, sondern **einen Befund
erzeugt**: Prüfung T3 („A ändert Daten von B") lieferte `ROWS:0` statt
`42501`. Kein Datenabfluss — die RLS-Policy griff —, aber das Recht war
da: Alle fünf neuen Tabellen trugen die Supabase-Standardrechte
`SELECT, INSERT, UPDATE, DELETE` für `authenticated`. Ein `revoke … from
public, anon` entfernt die nicht; das steht seit dem 02.09.2026 in
`scripts/pruefumgebung/README.md` und ist mir trotzdem wieder passiert.

Beide Migrationen entziehen die Rechte jetzt ausdrücklich von
`authenticated` und geben nur zurück, was die Policies brauchen. Nach der
Korrektur liefert T3/T4 `ERR:42501` und T5a/T5b `-1`.

**Der Befund wäre durch Codelektüre nicht gefunden worden.** In der
Migration stand das `revoke`; was fehlte, stand nirgends geschrieben.

### Was der Suite-Lauf am Prüfwerkzeug gefunden hat (S-26, S-27)

Der vollständige Durchlauf aller 23 Skripte gegen einen Neubau von Null
ist in dieser Sitzung zum ersten Mal seit Längerem wirklich ausgeführt
worden — und ist an zwei Stellen gescheitert, die nichts mit der
Automatenzahlung zu tun haben:

| ID | Befund | Folge | Behoben |
| --- | --- | --- | --- |
| S-26 | `pruef.lies()` wird von acht Skripten aufgerufen, war aber **nirgends im Repository definiert** | Die betroffenen Prüfungen brachen mitten im Skript ab. Weil die Skripte ohne `ON_ERROR_STOP` liefen, sah der Lauf trotzdem unauffällig aus. | ✓ in `20_werkzeug.sql` ergänzt |
| S-27 | `10_pruefdaten.sql` legte weder den Automaten `3b9ac0eb…` noch die Firma `bb000000…` an, die `102` und `100` voraussetzen | Beide Skripte scheiterten am Fremdschlüssel — ihre Nachweise waren aus dem Repository nicht wiederholbar | ✓ beide Datensätze ergänzt |

Dazu ein dritter Punkt, den ich selbst verursacht habe: Die Ergänzung von
`invited_at` in `01_supabase_nachbau.sql` (nötig für `handle_new_user()`)
hat dazu geführt, dass für den Gesellschafter überhaupt ein Profil
entsteht — und damit schlug `app.guard_profile_update()` beim
Aktivieren zu. Vorher traf die `UPDATE`-Anweisung null Zeilen und der
Trigger feuerte nie. Die Fixture setzt den Status jetzt mit
stillgelegtem Trigger; der Wächter selbst wird weiterhin mit aktivem
Trigger in `50_schreib_isolation.sql` geprüft.

**Was daraus folgt, ist unangenehm und gehört gesagt:** Ein Teil der
grünen Zeilen weiter oben stützt sich auf Läufe, die aus dem Repository
heraus zuletzt nicht mehr reproduzierbar waren. Sie sind es jetzt wieder
— der Durchlauf vom 14.09.2026 ergab **0 psql-Fehler in 23 von 23
Skripten** bei 232 von 232 eingespielten Migrationen. Dass das Werkzeug
selbst verfallen kann, ohne dass es jemandem auffällt, ist der eigentlich
wichtige Befund.

## 8. Angebotszeiträume für Abo-Modelle (14.09.2026)

Nachweis: `scripts/pruefumgebung/107_abo_angebotszeitraum.sql`, 10 Urteile,
alle OK, gegen einen Neubau von Null über 233 Migrationen.

### Der Befund (S-28)

`Pricing.lifetimePubliclyOffered = false` blendete die Lifetime-Karte in
der Kunden-App aus. **Das war alles, was es tat.**
`choose_subscription_plan` kannte den Schalter nicht: geprüft wurden
Alter, Einwilligungen, Kontingent und Wechselverbot — nicht, ob das
Modell überhaupt angeboten wird. In der Replik reproduziert: Kunde A ruft
`choose_subscription_plan('lifetime', true, true)` auf, bekommt
`{"plan": "lifetime", "price_cents": 7999, …}` zurück, und danach steht
das Lifetime-Abo in `customer_subscriptions`.

Aufgefallen ist das nicht bei der Sicherheitsprüfung, sondern beim
Nachlesen für einen Rechtstext-Entwurf. Der Skill nennt genau diesen Fall:
*„Der Client darf niemals verbindlich bestimmen, … ob ein Abo aktiv ist."*
Eine ausgeblendete Karte ist kein geschlossenes Angebot.

### Die Korrektur

Wählbarkeit steht jetzt als **Zeitraum** in `app.abo_angebotszeitraeume`;
kein Zeitraum heißt nicht wählbar. Das ist zugleich der Mechanismus, den
Philipp am 14.09.2026 vorgegeben hat: Lifetime bleibt vollständig im Code
und wird zeitweise freigeschaltet. Ein Zeitraum läuft von selbst ab — ein
Schalter, den jemand zurückstellen muss, tut das nicht.

| ID | Funktion | Datenklasse | Test | Negativ | Regression | Security | DB/RLS | Legal | Doku | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ABO-010 | `app.abo_wird_angeboten()` — Zeitraum offen, abgelaufen, künftig | D5 | ✓ L1, L6–L8 | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 🟢 |
| ABO-011 | `choose_subscription_plan` weist nicht angebotene Modelle ab | D5 | ✓ L1 | ✓ L7, L8 | ✓ | ✓ | ✓ | ✓ | ✓ | 🟢 |
| ABO-012 | Gegenprobe: Dauerangebot und Altersschranke unverändert | D5 | ✓ L2, L3 | ✓ L9 | ✓ | ✓ | ✓ | ✓ | ✓ | 🟢 |
| ABO-013 | `abo_angebote()` für die App; Zeiträume selbst nicht lesbar | D5 | ✓ L4 | ✓ L5 (`-1`) | ✓ | ✓ | ✓ | ✓ | ✓ | 🟢 |
| ABO-014 | Kunden-App liest die Verfügbarkeit vom Server statt aus der Konstante | D5 | ✓ 39 Tests grün, `flutter analyze` sauber | ✓ Rückfall auf den vorsichtigen Wert bei ausbleibender Antwort | ✓ | ✓ | — | ✓ | ✓ | 🟢 |

**Warum diese fünf grün sind und die AUT-Zeilen nicht:** Hier ist der
Rechtsteil abgeschlossen. Der Zustand, den die Texte beschreiben — das
Lifetime-Abo besteht, ist aber nicht dauerhaft wählbar —, ist jetzt der
Zustand, den das System tatsächlich herstellt. Der vorgeschlagene
Wortlaut steht in `docs/rechtstexte/ENTWURF-2026-09-AUTOMATENZAHLUNG.md`,
Abschnitt A1; er ergänzt zwei Texte um einen Zusatz und streicht nichts.
Die Freigabe gehört Philipp.

**Eine Einschränkung, die bleibt:** Die Migration ist nicht ausgerollt.
In der Produktion steht die Lücke offen, bis die Supabase-Verbindung
autorisiert ist. Das ist die einzige rote Stelle an diesem Befund — und
sie ist für ein Konto, das ein 79,99-€-Abo ohne Anzeige abschließen kann,
keine Kleinigkeit.

---

## Zählstand

Stand nach dem Ausrollen der Korrekturen am 02.09.2026:

```
🔴 ROT: 20   🟡 GELB: 0   🟢 GRÜN: 59
```

Stand am 14.09.2026: acht rote Zeilen aus dem Bestand, elf neue aus
Abschnitt 7. Die elf neuen sind **nicht rot, weil ein Test fehlgeschlagen
wäre** — bis auf AUT-010 sind alle technischen Nachweise geführt. Sie
sind rot, weil der Rechtsteil offen ist und `docs/COMPLIANCE.md` elf
Anpassungen mit Verantwortlichem und Frist führt. Die Unterscheidung ist
wichtig: Hier wartet niemand auf einen Fix im Code, sondern auf
Entscheidungen und auf einen Vertrag.

**Das System Green Gate ist nicht erreicht.** Abschluss nur bei ROT = 0
und GELB = 0. Formulierungen wie „erfolgreich implementiert",
„abgeschlossen" oder „keine weiteren Maßnahmen erforderlich" sind bis
dahin unzulässig.

Stand am 14.09.2026: Alle roten Zeilen sind entweder eine
**Entscheidung**, ein **fehlendes Mittel** oder ein **Nachweis, den ich
aus dieser Umgebung nicht führen kann** — keine ist ein offener
Sicherheitsbefund im Code.

| ID | Warum rot | Was es braucht | Verantwortlich |
| --- | --- | --- | --- |
| AUTH-011 / S-22 | Keine Zeichenklassen-Anforderung serverseitig — der Client verlangt sie, die API nicht | ein Feld im Dashboard („Password requirements") | Philipp |
| AUTH-005 / S-13 | Leaked-Password-Schutz | Supabase Pro; kommt vor der Live-Schaltung | Philipp |
| AUTH-009 / S-18 | `config.toml` beschreibt die gehosteten Auth-Einstellungen nicht | Entscheidung: dokumentieren oder per CLI verwalten | offen |
| AUTH-002/003/004 | Rate Limiting, Passwort-Reset, Enumeration | Zugriff auf `*.supabase.co` (Egress `403`) | fehlendes Mittel |
| MAIL-004 | Zustellung über Resend | ein Testpostfach | Philipp |
| PAY-005 | `store_subscription_claim` | Sandbox-Konto App Store / Play Billing | Philipp |
| AUT-001 bis AUT-009, AUT-011 | Technisch nachgewiesen; **Legal offen** — elf Anpassungen in `docs/COMPLIANCE.md`, davon die Rolle des Zahlungsdienstes (Art. 28 DSGVO oder eigener Verantwortlicher) ohne Vertrag nicht entscheidbar | Vertrag mit Automatenland, dann Freigabe der Rechtstexte aus `docs/rechtstexte/ENTWURF-2026-09-AUTOMATENZAHLUNG.md` | Philipp |
| AUT-010 | Die zehn Einheitstests laufen jetzt und sind grün. Offen bleibt der Lauf **gegen die ausgerollte Funktion** — die Negativmatrix N1–N12 auf HTTP-Ebene (ohne Token, veraltete Signatur, doppelte Zustellung am echten Endpunkt) | Ausrollen der Edge Function und ein erreichbarer Endpunkt | Philipp |
| alle AUT-* | Migrationen nicht ausgerollt | Autorisierung der Supabase-Verbindung | Philipp |
| S-28 | Die Lücke ist im Repository geschlossen und nachgewiesen, **in der Produktion aber offen** — dort kann ein angemeldetes Konto weiterhin ein Lifetime-Abo zu 79,99 € abschließen, ohne dass es angeboten wird | Ausrollen der Migration `20260914170000_abo_angebotszeitraeume.sql` | Philipp, vorrangig |

Kein Eintrag steht auf 🟡: Wo ein Nachweis fehlt, steht ROT mit
benanntem fehlendem Mittel und Verantwortlichem — nicht Gelb.
