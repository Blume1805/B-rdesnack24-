# Sicherheitsnachweise Bördesnack24

Ablage der ausgeführten Prüfprotokolle. Diese Datei berichtet über
**durchgeführte** Prüfungen, nicht über Absichten. Was hier nicht mit
Datum und Messwert steht, gilt als ungeprüft.

Letzter vollständiger Durchlauf: **02.09.2026**, Prüfer: Claude Code
(beauftragt durch Philipp Blume), Umfang: gesamter Code — Datenbank,
Edge Functions, Flutter-App.

**Die in Abschnitt 8 aufgeführten Befunde sind am 02.09.2026 behoben und
ausgerollt.** Abschnitt 10 hält die Korrekturen und ihre Nachweise fest;
Abschnitt 8 bleibt als Befundlage stehen, weil ein Bericht, der seine
eigenen Feststellungen nachträglich glättet, als Nachweis nichts taugt.

---

## 1. Wie geprüft wurde

Zwei Vorgaben stehen gegeneinander: Ein Nachweis ist etwas, das
ausgeführt wurde — und Tests gegen die Produktionsdatenbank sind
untersagt. Bis zum 01.09.2026 war deshalb kein einziger Schreib- oder
Löschtest belegbar.

Aufgelöst wurde das durch eine **lokale Nachbildung** aus den
Migrationen dieses Repositories (`scripts/pruefumgebung/`). Ihre
Gleichheit mit der Produktion wurde gemessen, nicht angenommen:

| Merkmal | Produktion | lokal | Ergebnis |
| --- | --- | --- | --- |
| Tabellen in `public` | 111 | 111 | gleich |
| RLS-Policies | 186 | 186 | MD5 `6d300aab…` **identisch** |
| Tabellenrechte anon/authenticated/service_role | 1568 | 1568 | MD5 `d29b4dcc…` **identisch** |
| Ausführungsrechte `anon` | 5 | 5 | MD5 `0a706e4f…` **identisch** |
| Ausführungsrechte `authenticated` | 138 | 138 | MD5 `c5f00ccb…` **identisch** |
| Ausführungsrechte `service_role` | 156 | 156 | MD5 `7056df4e…` **identisch** |

Damit ist jede Zugriffsregel dieselbe. Ein Ergebnis von dort gilt hier.
Aus der Produktion wurden ausschließlich **Metadaten** gelesen
(Kataloge, Rechte, Zeilenzahlen) — keine Kundendaten, kein Schreibzugriff.

Testkonten (lokal, keine echten Personen):

| Rolle | Kennung |
| --- | --- |
| Kunde A | `kunde-a@test.invalid` |
| Kunde B | `kunde-b@test.invalid` |
| Gesellschafter | `gesellschafter@test.invalid` |
| Minderjährig (geb. 05.05.2012) | `minderjaehrig@test.invalid` |

Damit ist die bisher offene Zeile „Testkonten: TODO" in
`projekt-konfig.md` für die Datenbankebene geschlossen. Für die
Auth-Ebene (Passwort-Reset, Rate Limiting) bleibt sie offen — siehe 7.

**Zwei Messfehler, die bewusst ausgeschlossen wurden.** Ein Fehler im
Testkommando rollt die Untertransaktion zurück und mit ihr `set local
role`; wer danach ohne `reset role` weitermisst, misst als falsche
Rolle — genau daran waren die Läufe im August scheinbar alle grün.
Und: RLS wirft keinen Fehler, sie liefert keine Zeilen; ein
Statuscode beweist deshalb nichts. Gemessen wird die Zeilenzahl, und
nach jedem Schreibversuch wird der **gespeicherte** Zustand erneut
gelesen.

**Zählstand des Laufs: 74 grün, 3 rot, 2 nicht aussagekräftig — 79 Tests.**
Dazu drei Befunde aus dem Lesedurchlauf über alle 111 Tabellen.

---

## 2. Protokoll 1 — IDOR/BOLA (Kunde A gegen Kunde B)

### T1 Lesen — alle 111 Tabellen, nicht nur die vermuteten

Gemessen wurde die Zeilenzahl je Rolle gegen die Wahrheit. Auszug der
Tabellen mit Personenbezug:

| Tabelle | Wahrheit | anon | Kunde A | Kunde B | Gesellschafter | OK |
| --- | --- | --- | --- | --- | --- | --- |
| `profiles` | 4 | 0 | 1 | 1 | 4 | ✓ |
| `customers` | 3 | 0 | 1 | 1 | 3 | ✓ |
| `purchases` | 2 | 0 | 1 | 1 | 2 | ✓ |
| `purchase_items` | 2 | 0 | 1 | 1 | 2 | ✓ |
| `consents` | 4 | 0 | 2 | 2 | 0 | ✓ |
| `customer_prices` | 2 | 0 | 1 | 1 | 2 | ✓ |
| `device_tokens` | 2 | 0 | 1 | 1 | 0 | ✓ |
| `notifications` | 4 | 0 | 2 | 2 | 0 | ✓ |
| `contact_messages` | 2 | 0 | 1 | 1 | 2 | ✓ |
| `account_deletion_requests` | 2 | 0 | 1 | 1 | 0 | ✓ |
| `customer_notification_reads` | 2 | 0 | 1 | 1 | 0 | ✓ |
| `recommendations` | 2 | 0 | 1 | 1 | 2 | ✓ |
| `audit_log` | 703 | 0 | 0 | 0 | 0 | ✓ |
| `product_ratings` | 2 | 0 | **2** | **2** | 2 | **✗ S-4** |
| `machine_sales_daily` | 93 | 0 | **93** | **93** | 93 | **✗ S-3** |
| `products` (Spalte `cost_price_net`) | 64 | 0 | **64** | **64** | 64 | **✗ S-2** |

`customer_card`, `customer_login_days`, `customer_challenge_awards`,
`donation_votes`, `payments`, `businesses`, `business_*`, `email_*`,
`store_*` sind für anon **und** für angemeldete Kunden gar nicht
erreichbar (kein `GRANT`) — Zugriff nur über geprüfte RPCs. Das ist der
stärkste Schutz im System und ausdrücklich als solcher zu erhalten.

### T2 ID-Tausch, T3 Ändern, T4 Löschen

Jeweils mit anschließendem Lesen des gespeicherten Zustands:

| Test | Ziel | Ergebnis | Gespeicherter Zustand | OK |
| --- | --- | --- | --- | --- |
| T3 | `profiles.full_name` von B | 0 Zeilen | unverändert „Kunde B" | ✓ |
| T3 | `consents.granted` von B | 0 Zeilen | weiterhin `true` | ✓ |
| T3 | `device_tokens.token` von B | 0 Zeilen | weiterhin `tok-b` | ✓ |
| T3 | `product_ratings.rating` von B | 0 Zeilen | weiterhin 4 | ✓ |
| T3 | `customer_prices.price_net` von B | 0 Zeilen | weiterhin 1,99 | ✓ |
| T4 | `notifications` von B löschen | 0 Zeilen | 2 Zeilen bleiben | ✓ |
| T4 | `device_tokens` von B löschen | 0 Zeilen | 1 Zeile bleibt | ✓ |
| T4 | `account_deletion_requests` von B löschen | 0 Zeilen | 1 Zeile bleibt | ✓ |
| T4 | `consents` von B löschen | 0 Zeilen | 2 Zeilen bleiben | ✓ |
| T2 | Bewertung **unter B's ID** anlegen | `42501` | keine Zeile | ✓ |
| T2 | **Einwilligung für B** eintragen | `42501` | keine Zeile | ✓ |
| T2 | **Push-Token für B** unterschieben | `42501` | keine Zeile | ✓ |

### Gegenprobe — eigene Daten dürfen

Ein Test, der alles verbietet, ist ebenso falsch wie einer, der alles
erlaubt.

| Test | Ergebnis | OK |
| --- | --- | --- |
| A ändert den **eigenen** Namen | 1 Zeile, gespeichert | ✓ |
| A ändert die **eigene** Bewertung | 1 Zeile, gespeichert | ✓ |
| Gesellschafter liest den Kontenplan | 62 Zeilen | ✓ |

**Horizontale Isolation der Kundendaten: bestanden.** Der Bruch liegt
nicht bei „A gegen B", sondern bei Daten, die für *alle* Angemeldeten
offen stehen (S-2 bis S-4).

---

## 3. Protokoll 3 — Vertikale Rechteausweitung

| Test | Kunde A | Erwartet | OK |
| --- | --- | --- | --- |
| `finance_bookings` lesen | 0 Zeilen | 0 | ✓ |
| `inventory_movements` lesen (EK je Bewegung) | 0 Zeilen | 0 | ✓ |
| `pkw_kosten` lesen | 0 Zeilen | 0 | ✓ |
| `audit_log` lesen | 0 Zeilen | 0 | ✓ |
| `warehouse_stock` lesen | 0 Zeilen | 0 | ✓ |

**Alle 48 Verwaltungs-RPCs**, die `authenticated` überhaupt aufrufen
darf, wurden als Kunde A aufgerufen. 47 weisen ab:

* `42501` (Berechtigung) — `finance_summary`, `finance_kpis`,
  `finance_bookings_list`, `finance_balance_kpis`, **`upsert_finance_balance`**,
  `business_create`, `business_update`, `business_invite`,
  `business_member_set`, `business_budget_set`, `business_dashboard`,
  `business_statement`, `business_locations_list`, `business_location_set`,
  `business_invoice_release`, `business_invoice_request`,
  `business_invoice_runs_list`, `leads_list`, `lead_create`,
  `lead_status_set`, `lead_activity_add`, `advertising_overview`,
  `advertising_campaign_set`, `advertising_campaign_status`,
  `advertising_contract_set`, `advertising_contract_status`,
  `advertising_space_set`, `advertising_space_remove`,
  `advertising_creative_review`, `advertising_motif_approve`,
  `advertising_coupon_sponsorship_set`, `advertising_coupon_sponsorship_status`
* `P0001`/`P0002` (fachliche Abweisung) — `inventory_report`,
  `inventory_summary_by_product`, `inventory_fifo_lots`,
  `inventory_fifo_movements`, `business_customers_csv`,
  `advertising_campaign_report`, `advertising_creative_upload`,
  `business_invitation_accept`, `business_invitation_revoke`,
  `invite_employee_signature`, `list_employees_for_signature`,
  `submit_employee_signature`
* leere Menge, Inhalt nachgelesen — `my_businesses`,
  `my_advertising_campaigns`, `my_advertising_contracts` liefern `[]`

**Eine weist nicht ab: `advertising_redirect_count` → Befund S-12.**

---

## 4. Protokoll 4 — Mass Assignment

| Feld | Versuch von Kunde A auf dem eigenen Profil | Gespeicherter Zustand | OK |
| --- | --- | --- | --- |
| `role` → `system_admin` | `42501` | bleibt `customer` | ✓ |
| `status`, `archived_at`, `deleted_at` | `42501` | unverändert | ✓ |
| `id` (Identitätstausch) | `42501` | eigene Zeile bleibt | ✓ |
| `price_cents` im Abo | `42501` | keine Zeile | ✓ |
| Abo auf `lifetime` hochschreiben | 0 Zeilen | kein Lifetime | ✓ |
| Punkte (`customer_challenge_awards`) | `42501` | keine Zeile | ✓ |
| Bonusstufe (`loyalty_bonus_grants`) | `42501` | keine Zeile | ✓ |
| Kauf selbst buchen (`purchases`) | `42501` | keine Zeile | ✓ |
| **`email`** | **1 Zeile, übernommen** | **`opfer@example.invalid`** | **✗ S-5** |

Der Schutz von `role`/`status`/`id` liegt im Trigger
`app.guard_profile_update` — und er greift auch für den Tabelleneigentümer,
nicht nur für RLS-gebundene Rollen. Das wurde beim Anlegen der Prüfdaten
unfreiwillig bestätigt: selbst als `postgres` ließ sich der Status nicht
setzen. Das ist gutes Verhalten, kein Fehler.

---

## 5. Finanzielle Integrität

`choose_subscription_plan` holt Preis und Abrechnungsbezeichnung aus
`app.subscription_plans` und die Identität aus `auth.uid()`. Der Client
bestimmt **nicht**, was etwas kostet. Nachgewiesen durch den
Manipulationsversuch oben.

**Aber:** die Volljährigkeit bestimmt der Client — Befund S-6.

---

## 6. Speicher, Geheimnisse, Protokollierung

* **Buckets:** alle fünf (`documents`, `employee-signatures`, `haccp`,
  `partner-signatures`, `signed-documents`) sind **nicht öffentlich** und
  tragen eigene Policies auf `storage.objects`, jeweils an `is_internal()`
  bzw. an eine Rollenliste gebunden. Keiner setzt `file_size_limit` oder
  `allowed_mime_types` → Befund S-10.
* **Geheimnisse:** keine Service-Role-Schlüssel, keine JWTs, keine
  API-Token im Repository oder im Client-Bundle. `.env.example` trennt
  ausdrücklich zwischen Client- und Serverwerten. Der Flutter-Client zieht
  URL und anon-Key aus `String.fromEnvironment`.
* **Webhooks:** `nayax-webhook`, `iot-webhook` und `email-inbound` prüfen
  jeweils eine HMAC-Signatur gegen ein Secret **ohne Rückfallwert**;
  fehlt das Secret, antworten sie mit Fehler statt offen zu stehen.
  `install-signature` — der Endpunkt, an dem genau das einmal schiefging —
  ist stillgelegt und antwortet mit `410`.
* **Änderungsprotokoll:** 36 Tabellen tragen `trg_audit`, darunter
  `profiles`, `role_permissions`, `user_permissions`, `payments`,
  `finance_bookings`, `customer_subscriptions`, `customer_prices`,
  `products`, `documents`. Ohne Protokoll: `purchases`, `purchase_items`,
  `invoices`, `business_invoice_runs`, `store_subscription` → Befund S-7.

---

## 7. Was **nicht** geprüft werden konnte

Hier gibt es kein Gelb. Diese Punkte sind rot, mit benanntem fehlendem
Mittel:

| Punkt | Fehlendes Mittel |
| --- | --- |
| Passwort-Reset: Einmaligkeit, Ablauf, Session-Invalidierung | Zugriff auf `*.supabase.co/auth/v1` — der Egress-Proxy dieser Umgebung antwortet mit `CONNECT tunnel failed, 403` |
| Benutzerenumeration über `/auth/v1/recover` | dito |
| Rate Limiting `/auth/v1` | dito; die Werte stehen nur im Dashboard, nicht in `config.toml` |
| Zustellung über Resend an ein Testpostfach | kein Testpostfach in `projekt-konfig.md` |
| Firma A gegen Firma B über **alle** B2B-Funktionen | nur `business_locations_list` ist belegt (R-11); die übrigen 20 B2B-RPCs sind gegen einen zweiten Firmenkunden nicht durchgespielt |
| Rechnungssicht von Kunde A auf fremde Rechnung | Prüfdaten enthielten keine Rechnung — Test lief, war aber nicht aussagekräftig |

---

## 8. Befunde

Bewertung: **P0** Sicherheit/Recht/Datenverlust, **P1** Kernfunktion,
**P2** Härtung/Technische Schuld, **P3** kosmetisch.

| ID | P | Befund | Nachweis |
| --- | --- | --- | --- |
| **S-2** | P0 | `products.cost_price_net` ist für **jedes** angemeldete Konto lesbar. Policy `products_read` prüft nur `deleted_at is null`. 61 Einkaufspreise, Marge je Artikel unmittelbar ableitbar. | Als Kunde A gelesen: „Arizona Eistee Pfirsich = EK 0,87 / VK 1,8487; Ben & Jerry's = EK 3,73 / VK 5,4206" |
| **S-6** | P0 | Die Altersprüfung beim kostenpflichtigen Abo ist ein vom Client gesendetes `p_age_consent`. Das gespeicherte `birth_date` wird nie gelesen. | Konto mit Geburtsdatum 05.05.2012 hat `monthly` zu 99 Cent abgeschlossen |
| **S-3** | P1 | `machine_sales_daily` (Tagesumsatz je Automat) ist für jedes angemeldete Konto lesbar. Policy `msales_read` = `true`. | Als Kunde A: 93 Zeilen, Summe 2.945,23 €, Zeitraum 03.08.–02.09. |
| **S-4** | P1 | `product_ratings` inklusive `customer_id` ist für jedes angemeldete Konto lesbar. Wer was bewertet hat, ist personenbezogen. Die Aggregatsicht `product_rating_summary` existiert bereits. | Als Kunde A gelesen: „<uid B> bewertete <Produkt> mit 4" |
| **S-5** | P1 | `profiles.email` ist vom Kontoinhaber frei setzbar. Das umgeht die Bestätigung der Adressänderung aus `auth` (`double_confirm_changes = true`) und bestimmt zugleich den Empfänger: `email_enqueue` fällt auf `profiles.email` zurück. | Feld auf `opfer@example.invalid` gesetzt und gespeichert |
| **S-12** | P1 | `advertising_redirect_count` erhöht den Klickzähler bei jedem Aufruf, unbegrenzt, für jedes angemeldete Konto und jede Kampagne. Restbefund aus R-2: `anon` wurde entzogen, die Frequenzbegrenzung fehlt weiterhin. Der Zähler ist Abrechnungs- und Berichtsgrundlage gegenüber Werbekunden. | RPC-Lauf: einziger der 48, der nicht abweist |
| **S-7** | P2 | `purchases`, `purchase_items`, `invoices`, `business_invoice_runs`, `store_subscription` tragen kein Änderungsprotokoll. `purchases` ist zugleich über die `ALL`-Policy für `customers.manage` änder- und löschbar. Buchführungsrelevante Sätze dürfen nicht stillschweigend überschreibbar sein. | Trigger- und Policy-Auszug |
| **S-1** | P2 | `email_report_share`: `token` hat keinen serverseitigen Default und keine Mindestlänge; `fetch_email_report_share` prüft die Länge nicht (`email_unsubscribe` tut es mit ≥ 20). Jedes angemeldete Konto darf Freigaben mit selbst gewähltem Token, beliebigem Inhalt und beliebiger Laufzeit anlegen — anonym abrufbar. Der Zugriffslog erfasst User-Agent, Referer und Client-Hint anonymer Besucher. Funktion ist gebaut, aber unbenutzt (0 Zeilen). | Migration `20260803050532`, Funktionsdefinition |
| **S-9** | P2 | `inventory` (Bestand, Kapazität, MHD je Automatenfach) ist für jedes angemeldete Konto lesbar (`inventory_read` = `true`), während `warehouse_stock` mit denselben Daten auf `system_admin/shareholder/employee` beschränkt ist. Eine der beiden Regeln ist falsch. | Policy-Auszug |
| **S-8** | P2 | `permissions`, `roles`, `role_permissions` sind für jedes angemeldete Konto lesbar (29 + 4 + 52 Zeilen). Das Berechtigungsmodell ist damit vollständig auslesbar. | T1-Durchlauf |
| **S-11** | P2 | `auth_has_permission(perm, uid)` und `is_admin(uid)` nehmen eine **fremde** UID entgegen und sind für `authenticated` ausführbar. Damit lässt sich zu jeder bekannten UID abfragen, welche Rechte sie hat — eine Zielauswahlhilfe. | Als Kunde A: `auth_has_permission('finance.view', <uid Gesellschafter>)` → `true` |
| **S-10** | P2 | Kein Bucket setzt `file_size_limit` oder `allowed_mime_types`. | `storage.buckets` |
| **S-13** | P2 | Supabase-Advisor: Schutz vor kompromittierten Passwörtern (HaveIBeenPwned) ist aus; `pg_net` liegt im Schema `public`. Beides sind Dashboard-/Migrationsarbeiten von Minuten. | `get_advisors(security)` |
| **S-14** | P3 | Sechs der 185 Migrationen laufen auf einer leeren Datenbank nicht durch. Das Verzeichnis ist ein Protokoll des Gewordenen, kein von Null reproduzierbarer Bauplan. Für die Verfahrensdokumentation ist das die relevantere Aussage. | Wiedereinspielung, 179/185 |

### Kein meldepflichtiger Datenschutzvorfall

S-4 ist ein möglicher Zugriff auf personenbezogene Daten Dritter und
löst damit die Bewertung nach Art. 33/34 DSGVO aus. Bewertung:

`public.product_ratings` enthält in der Produktion **0 Zeilen**; es gibt
zwei Kundenkonten, beide aus dem eigenen Haus. Ein tatsächlicher Zugriff
Dritter auf personenbezogene Daten hat daher **nicht stattfinden können**.
Eine Meldung nach Art. 33 ist nicht veranlasst, eine Benachrichtigung
nach Art. 34 ebenfalls nicht. Die Bewertung selbst wird hier
dokumentiert — die Dokumentationspflicht besteht unabhängig vom Ergebnis.

**Diese Bewertung hält nur so lange, wie die Tabelle leer ist.** Mit der
ersten echten Bewertung eines echten Kunden wird S-4 zu einer laufenden
Offenlegung. Die Korrektur gehört deshalb vor die Freischaltung der
Bewertungsfunktion, nicht danach.

---

## 9. Security Green Gate

Stand nach dem Ausrollen der Korrekturen (siehe Abschnitt 10):

| Prüfpunkt | Stand |
| --- | --- |
| Authentication | ✓ Identität serverseitig aus `auth.uid()`, nie aus einem Client-Parameter |
| Authorization | ✓ alle 48 Verwaltungs-RPCs weisen ein Kundenkonto ab; der Klickzähler ist begrenzt |
| RLS / Storage-Policy | ✓ 186 Policies, alle Buckets privat, mit Policy und mit Größen- und Typgrenze |
| User Isolation | ✓ horizontal belegt (T1–T4 + Gegenprobe) |
| IDOR/BOLA (5 Tests) | ✓ T1–T4 ausgeführt; T5 (manipulierter HTTP-Request) nur auf SQL-Ebene, nicht über PostgREST — Egress gesperrt |
| Negativtests N1–N12 | teilweise — ohne Token und mit fremder ID belegt; abgelaufener Token, Doppelabsendung, unzulässiger Statusübergang offen |
| Abuse Cases | teilweise — Rechteausweitung, Mass Assignment, IDOR, Zählermanipulation belegt; Brute Force, Enumeration, Replay nicht erreichbar |
| Rechteausweitung | ✓ vertikal und horizontal geprüft |
| Mass Assignment | ✓ Rolle, Status, Identität, E-Mail, Preis, Punkte |
| Finanzintegrität | ✓ Preis serverseitig, Altersschranke gegen gespeichertes Geburtsdatum |
| Audit-Logging | ✓ 41 Tabellen, belegführende eingeschlossen |
| Secrets | ✓ |
| Datenminimierung | ✓ EK-Preise, Umsätze, Bestände, Bewertungen und Rechtekatalog geschlossen |
| Security-Regression | ✓ Verfahren steht und ist wiederholbar (`scripts/pruefumgebung/`) |

**Ergebnis: 🔴 ROT** — aber aus einem anderen Grund als am Morgen. Alle
inhaltlichen Befunde sind geschlossen; offen sind ausschließlich
Prüfungen, die aus dieser Umgebung **nicht durchführbar** sind
(Abschnitt 7: Passwort-Reset, Enumeration, Rate Limiting, Resend-Zustellung,
B2B-Vollmatrix) sowie eine Einstellung, die nur im Supabase-Dashboard
gesetzt werden kann (Leaked-Password-Schutz). Nicht durchführbar heißt
nach den Prüfregeln 🔴, nicht Gelb — auch wenn niemand mehr daran
arbeiten kann, solange das Mittel fehlt.

---

## 10. Korrekturen vom 02.09.2026 und ihre Nachweise

Neun Migrationen, ausgerollt nach vollständigem Durchlauf in der
Prüfumgebung. Jede Korrektur hat eine **Gegenprobe**: eine Prüfung, dass
die erlaubte Nutzung weiterhin funktioniert. Eine Sperre, die alles
sperrt, wäre kein Erfolg.

| Befund | Korrektur | Nachweis | Gegenprobe |
| --- | --- | --- | --- |
| S-2 | Tabellenrecht auf `products` entzogen, alle Spalten außer `cost_price_net` einzeln vergeben | Kunde A: `42501` beim Lesen des EK | Katalog weiter lesbar (64 Zeilen); `inventory_summary_by_product` liefert dem Gesellschafter weiter 64 Zeilen mit EK |
| S-6 | `choose_subscription_plan` prüft `profiles.birth_date` | Konto Jg. 2012: `42501`, kein Abo. Konto ohne Datum: `P0001`, kein Abo | Konto Jg. 1990 schließt `monthly` ab |
| S-3 | `machine_sales_daily` nur intern | Kunde A: 0 Zeilen | Gesellschafter: 93 Zeilen |
| S-9 | `inventory` nur intern | Kunde A: 0 Zeilen | — |
| S-8 | `permissions`, `roles`, `role_permissions` nur intern | Kunde A: je 0 Zeilen | Gesellschafter: 29 Zeilen; `my_permissions()` für den Kunden unverändert nutzbar |
| S-4 | `product_ratings` nur eigene Zeile; Aggregatsicht auf Eigentümerrechte umgestellt | Kunde A sieht 0 fremde Bewertungen | eigene Bewertung sichtbar; `product_rating_summary` zählt weiter alle (2); `product_detail` liefert den fremden Schnitt 4,00 |
| S-5 | `email` in die Profil-Schleuse aufgenommen, Nachlauf aus `auth.users` ergänzt | Selbst setzen: `42501`, Wert unverändert | Name weiter änderbar; Änderung in `auth.users` zieht ins Profil nach |
| S-12 | Klicks je Konto und Tag auf drei begrenzt | 10 Klicks eines Kontos → berichtet: 3 | zweites Konto zählt weiter (4); alle 10 Aufrufe bleiben im Detailsatz sichtbar |
| S-7 | Änderungsprotokoll für fünf belegführende Tabellen | 5 von 5 Triggern vorhanden | — |
| S-11 | Auskunft über fremde Konten unterbunden | Kunde A → `auth_has_permission(..., fremd)` = false, `app_role(fremd)` = NULL | eigene Abfrage weiter true; interne Rolle darf über fremde Konten urteilen |
| S-1 | Token serverseitig erzeugt, Mindestlänge 32, Laufzeit ≤ 90 Tage, Kurz-Token wird nicht protokolliert | Kurz-Token: `not_found` ohne Protokolleintrag; Anlage mit `"kurz"`: `23514` | gültige Freigabe entsteht mit 48-Zeichen-Token |
| S-10 | Größen- und Typgrenzen für alle fünf Buckets | 0 Buckets ohne Grenze | Upload-Pfad der App auf den passenden Medientyp umgestellt |

**34 Nachweise, alle grün.** Anschließende Regression über die
ursprünglichen Prüfläufe: **77 grün, 0 rot.** Flutter: `analyze` ohne
Befund, **100 Tests grün** (93 vorher, 7 neu).

### Der Fund, den erst der Abgleich sichtbar gemacht hat

Nach dem Ausrollen wichen die Rechte-Fingerabdrücke voneinander ab:
1581 in der Produktion gegen 1573 in der Prüfumgebung. Ursache: Supabase
vergibt einer neu angelegten Tabelle automatisch volle DML-Rechte an
`anon` und `authenticated`. Die neue Tabelle
`advertising_redirect_actors` hatte sie also, obwohl die Migration sie
nirgends vergibt — in der Prüfumgebung, die diesen Automatismus nicht
kennt, fehlten sie folgerichtig.

Gefährlich war das nicht: RLS ist aktiv und die Tabelle hat keine Policy,
der Zugriff wäre abgewiesen worden. Aber ein Recht, das nur deshalb
wirkungslos ist, weil eine zweite Schranke hält, ist eine Falle für den,
der später eine Policy ergänzt. Eine zehnte Migration hat es entzogen;
danach stimmen alle sechs Fingerabdrücke wieder überein.

Der eigentliche Punkt: Die Migration sah in beiden Umgebungen identisch
aus. Sichtbar wurde der Unterschied allein im Vergleich der Wirkung.

### Nachzug: zwei Meldungen, die erst die Korrektur erzeugt hat

Der Supabase-Advisor zeigte nach dem Ausrollen zwei neue Punkte — beide
aus den eigenen Änderungen. Eine Korrektur, die neue Befunde erzeugt, ist
erst fertig, wenn auch die weg sind.

* `app.klick_obergrenze_je_konto()` hatte keinen festen `search_path`.
  Die Funktion ist eine Konstante, das Risiko gering — aber R-19 hat
  genau diese Klasse im August bereinigt, und eine neue Funktion darf sie
  nicht wieder aufmachen. Behoben mit leerem `search_path`.
* `product_rating_summary` läuft jetzt mit Eigentümerrechten, was der
  Advisor als **ERROR** meldet. **Diese eine Meldung bleibt bewusst
  stehen.** Begründung: Die Sicht gibt ausschließlich `product_id`,
  Durchschnitt und Anzahl heraus — kein personenbezogenes Feld, keine
  Konto-ID. Genau deshalb *darf* sie über alle Zeilen rechnen. Liefe sie
  mit Aufruferrechten, sähe jeder Kunde seine eigene Bewertung als
  „Durchschnitt": eine falsche Zahl auf der Produktseite, ohne
  Fehlermeldung. Das wiegt schwerer als die Warnung.
  Entzogen wurden dafür die Schreibrechte, die Supabase einer Sicht
  automatisch mitgibt — auf einer Sicht mit Eigentümerrechten wären sie
  der gefährliche Teil.

Verbleibende Advisor-Meldungen (141), alle geprüft und eingeordnet:

| Meldung | Anzahl | Einordnung |
| --- | --- | --- |
| `authenticated_security_definer_function_executable` | 129 | Bauart des Systems: jede Verwaltungs-RPC ist SECURITY DEFINER mit eigener Berechtigungsprüfung. Alle 48 aufrufbaren wurden gegen ein Kundenkonto durchgespielt und weisen ab. |
| `rls_enabled_no_policy` | 5 | Absicht: `customer_card`, `customer_login_days`, `customer_challenge_awards`, `email_unsubscribe_token`, `advertising_redirect_actors` sind ohne Policy und ohne Rechte — erreichbar nur über geprüfte RPCs. Der stärkste Schutz im System. |
| `anon_security_definer_function_executable` | 4 | Die vier bewusst öffentlichen Endpunkte: Abmeldelink, Freigabelink (seit S-1 gehärtet), KI-Register, Preisliste. |
| `security_definer_view` | 1 | Die begründete Ausnahme oben. |
| `extension_in_public` | 1 | `pg_net`. Bemängelt wird der Registrierungseintrag; die zwölf Funktionen liegen längst im eigenen Schema `net`. Ein Verschieben bräche die Aufrufe in `legal_text_uebernahme_funktionen` und den Cron-Jobs — der Hinweis wiegt weniger als der Schaden. |
| `auth_leaked_password_protection` | 1 | **Offen (S-13).** Nur im Dashboard setzbar, nicht per SQL. Verantwortlich: Philipp. |

### Was die Korrekturen ausdrücklich **nicht** leisten

* **Der Klickzähler kennt anonyme Aufrufe nicht.** Wer den
  Weiterleitungslink ohne Anmeldung öffnet, wird gar nicht gezählt. Für
  eine belastbare Reichweitenmessung braucht es eine Edge Function mit
  eigener Frequenzbegrenzung — die steht in der Roadmap und wird hier
  nicht behauptet.
* **Das Geburtsdatum ist eine Selbstauskunft.** Ein Ausweis wird nicht
  geprüft. Die Schranke steigt von „einmal tippen" auf „ein Datum
  angeben, das danach feststeht und serverseitig geprüft wird". Für ein
  Snack-Abo ist das das angemessene Mittel; die Einordnung gehört in die
  Datenschutzdokumentation.
* **Das Änderungsprotokoll ist keine Festschreibung.** Es macht
  Änderungen an Belegen sichtbar, verhindert sie aber nicht. Storno statt
  Änderung bleibt ein offener Punkt der Verfahrensdokumentation.
* **`select=*` auf `products` ist keine gültige Abfrage mehr.** Das ist
  der Preis der Spaltenrechte. Für die Flutter-App geprüft und in
  Ordnung; für die Lovable-Oberflächen in
  `docs/API-UNTERNEHMENSBEREICH.md` vermerkt.

---

## 11. Auth-Einstellungen: was der Screenshot vom 02.09.2026 zeigte

S-13 ließ sich nicht schließen. Der Versuch, den Schalter zu setzen, hat
aber vier weitere Punkte sichtbar gemacht — und einen Projektfakt
widerlegt.

### S-13 korrigiert: keine vergessene Einstellung, sondern der Tarif

Der Schalter „Prevent use of leaked passwords" ist **nicht bedienbar**.
Der Hinweistext daneben nennt den Grund: *„Only available on Pro plan and
above."* Abfrage der Organisation bestätigt das:

```
Bördesnack24 GbR — plan: "free"
```

**Damit ist S-13 ohne Tarifwechsel nicht behebbar.** Die bisherige
Beschreibung („zwei Minuten im Dashboard") war falsch und ist hiermit
berichtigt.

### S-18: `projekt-konfig.md` nennt einen Tarif, den es nicht gibt

Die Projektkonfiguration führt unter „Systeme" den Eintrag
**„Backend/Datenbank: Supabase Pro"**. Tatsächlich läuft die
Organisation auf **Free**. Das ist keine Kleinigkeit, weil an dem Tarif
mehr hängt als dieser eine Schalter — unter anderem Sicherungen und
Point-in-Time-Recovery, die Aufbewahrungsdauer der Protokolle und eben
der Abgleich gegen HaveIBeenPwned.

Jede Aussage in diesem Bericht, die stillschweigend auf Pro-Eigenschaften
beruht, ist damit neu zu prüfen. Zu korrigieren in
`boerdesnack24-verify/references/projekt-konfig.md` — die Datei liegt
außerhalb dieses Repositories.

### Drei Einstellungen, die ohne Tarifwechsel sofort besser wären

Alle drei waren auf demselben Bildschirm sichtbar und sind im Free-Tarif
verfügbar:

| ID | Einstellung | Live | Repo (`config.toml`) | Wirkung |
| --- | --- | --- | --- | --- |
| **S-15** | Minimum password length | **6** | `minimum_password_length = 10` | Sechs Zeichen sind bei offener Selbstregistrierung und ohne Abgleich gegen geleakte Passwörter die schwächste Stelle der Anmeldung. Repo und Wirklichkeit widersprechen sich. |
| **S-16** | Secure password change | **aus** | — | Ein Passwortwechsel ist ohne kürzliche Anmeldung möglich. Wer eine fremde Sitzung in die Hand bekommt, kann das Passwort ändern und das Konto übernehmen, ohne das alte zu kennen. |
| **S-17** | Require current password when updating | **aus** | — | Dasselbe aus der anderen Richtung: Das bisherige Passwort wird beim Ändern nicht verlangt. |

S-16 und S-17 wirken zusammen: Beide aus heißt, eine übernommene Sitzung
genügt für die vollständige Kontoübernahme. Das ist der einzige
Punkt dieser Liste, der ohne Tarifwechsel und ohne Codeänderung sofort
zu schließen ist.

### Korrektur zu S-5

Die Migration `20260902052115` begründet den Nachlauf der E-Mail-Adresse
unter anderem damit, dass Supabase eine Adressänderung doppelt bestätigt
(`double_confirm_changes = true`). Diese Angabe stammt aus
`supabase/config.toml` — und `config.toml` beschreibt den **lokalen**
Stack, nicht das gehostete Projekt. Für das gehostete Projekt ist die
Einstellung **nicht verifiziert**; der betreffende Schalter war auf dem
Bildschirm nach oben weggescrollt.

Die Korrektur selbst hängt nicht daran: Sie sperrt den direkten
Schreibzugriff auf `profiles.email` unabhängig davon, wie `auth` die
Adressänderung bestätigt. Die *Begründung* im Migrationskommentar ist
aber weiter, als der Nachweis trägt, und wird hiermit eingeschränkt.

### Die allgemeine Lehre

`supabase/config.toml` ist im Repository die einzige Beschreibung der
Auth-Einstellungen — und sie gilt für das gehostete Projekt **nicht**.
Mindestpasswortlänge 10 gegen tatsächlich 6 ist der Beleg. Solange die
Einstellungen nur im Dashboard leben, beschreibt das Repository ein
System, das es nicht gibt. Das ist derselbe Befund wie S-14, nur an
einer anderen Stelle.

---

## 12. Protokoll — Firma A gegen Firma B (API-002), 02.09.2026

Die letzte rote Zeile ohne fehlendes Mittel. Zwei Firmenkunden mit
spiegelbildlichem Bestand in der Prüfumgebung: **Firma Eins GmbH** mit
Admin und einfachem Mitglied, **Firma Zwei GmbH** mit Admin, dazu je
Standort, Kampagne, Werbemittel, Werbevertrag, Abrechnungslauf, Budget,
Einladung und Lead. Der Admin von Firma Eins ist der Angreifer.

**33 Prüfungen, alle grün.** Jeder Schreibversuch mit anschließendem
Lesen des gespeicherten Zustands.

### Lesen mit fremder Firmen-ID

| Funktion | Ergebnis |
| --- | --- |
| `business_dashboard` | `42501` |
| `business_locations_list` | `42501` |
| `business_statement` | `42501` |
| `business_invoice_runs_list` | `42501` |
| `advertising_campaign_report` | `42501` |

### Schreiben mit fremder ID — Zustand danach geprüft

| Angriff | Ergebnis | Gespeicherter Zustand |
| --- | --- | --- |
| Firmennamen überschreiben | `42501` | „Firma Zwei GmbH" |
| Fremde Firma einladen lassen | `42501` | 1 Einladung, unverändert |
| **Fremden Admin absetzen** (`business_member_set` → `removed`) | `42501` | weiterhin `admin/active` |
| Fremdes Budget auf 999.999 setzen | `42501` | weiterhin 200,00 |
| Fremder Firma den Standort entziehen | `42501` | Zuordnung bleibt |
| Fremde Einladung widerrufen | `42501` | bleibt offen |
| Abrechnung für fremde Firma anfordern | `42501` | — |
| **Fremden Abrechnungslauf freigeben** | `42501` | Status `angefordert` |
| Kampagne unter fremder Firma anlegen | `42501` | 1 Kampagne bleibt |
| **Fremde Kampagne stoppen** | `42501` | bleibt `active` |
| Werbemittel in fremde Kampagne laden | `42501` | 1 Werbemittel bleibt |
| **Eigenes Werbemittel selbst freigeben** | `42501` | bleibt `pending_review` |
| **Fremden Werbevertrag kündigen** | `42501` | bleibt `aktiv` |
| Fremdes Motiv freigeben | `42501` | — |
| Coupon-Sponsoring an fremder Kampagne | `42501` | — |

### Zwei Angriffe, die über die Firmengrenze hinausgehen

| Angriff | Ergebnis |
| --- | --- |
| **Fremde Einladung mit dem Rohtoken annehmen** (`business_invitation_accept('geheim-f2')`, Einladung war an `neu@firma-zwei.invalid` adressiert) | `42501`, keine Mitgliedschaft entstanden |
| **Einfaches Mitglied macht sich selbst zum Admin** der eigenen Firma | `42501`, bleibt `member` |
| Einfaches Mitglied lädt jemanden ein | `42501` |

Der zweite Fall ist der, den man leicht übersieht: Rechteausweitung
findet nicht nur zwischen Mandanten statt, sondern auch **innerhalb**
eines Mandanten.

### Sichtbarkeit

`my_businesses()`, `my_advertising_campaigns()` und
`my_advertising_contracts()` liefern dem Admin von Firma Eins
ausschließlich Firma Eins — der Werbevertrag von Firma Zwei taucht nicht
auf, obwohl er an einer Fläche hängt, die im Bestand von Firma Eins
sichtbar ist.

### Das Rollenmodell, das die Gegenprobe sichtbar gemacht hat

Zwei meiner Gegenproben schlugen zunächst fehl: Der Admin von Firma Eins
konnte weder die eigenen Stammdaten ändern noch die eigene Kampagne
pausieren. **Nicht die Funktionen waren falsch, sondern meine
Erwartung.** Der Unternehmensbereich hat zwei Stufen:

| Stufe | Funktionen | Prüfung |
| --- | --- | --- |
| **mitgliedschaftsgebunden** — der Firmen-Admin darf | `business_dashboard`, `business_locations_list`, `business_statement`, `business_invoice_runs_list`, `business_invoice_request`, `business_invite`, `business_member_set`, `business_budget_set`, `business_location_set` | `app.is_business_member(…, 'admin')` oder intern |
| **rein intern** — nur Bördesnack24 | `business_update`, `advertising_campaign_set/_status`, `advertising_contract_set/_status`, `advertising_creative_review`, `advertising_motif_approve` | `is_admin()` oder `businesses.manage` / `advertising.manage` |

Beide Stufen sind mit Gegenprobe belegt: Der Firmen-Admin kann auf der
eigenen Firma einladen und Budgets setzen; der Gesellschafter kann
Stammdaten ändern und Kampagnen pausieren; der Firmen-Admin kann es
nicht — und das ist Absicht, kein Fehler.

### Eine Beobachtung ohne Sicherheitsbezug

Weil `business_update` rein intern ist, kann ein Firmenkunde **seine
eigene Rechnungsanschrift nicht korrigieren**. Auf einer Rechnung ist die
vollständige Anschrift des Leistungsempfängers eine Pflichtangabe
(§ 14 Abs. 4 UStG); ist sie falsch, kostet das den Kunden den
Vorsteuerabzug. Das ist kein Sicherheitsbefund und wird hier nicht als
solcher geführt — aber es ist eine Entscheidung, die bewusst getroffen
sein sollte: entweder ein Selbstpflege-Weg für Anschriftsfelder, oder
ein dokumentierter Prozess, über den der Kunde eine Änderung meldet.

---

## 13. S-14 geschlossen: das Verzeichnis ist ein Bauplan (02.09.2026)

Bis heute liefen 179 von 185 Migrationen auf einer leeren Datenbank; sechs
setzten einen Zwischenzustand voraus, den keine Migration herstellt.
Jetzt laufen **197 von 197** durch — und das Ergebnis ist mit der
Produktion in **allen neun gemessenen Merkmalen identisch**:

| Merkmal | Produktion | Neuaufbau aus dem Repository |
| --- | --- | --- |
| Tabellen / Views / Funktionen | 112 / 2 / 156 | 112 / 2 / 156 |
| RLS-Policies | 186 · `c8fbc1d9…` | 186 · `c8fbc1d9…` |
| Tabellenrechte | 1561 · `da069539…` | 1561 · `da069539…` |
| Ausführungsrechte `anon` | 4 · `bdc07832…` | 4 · `bdc07832…` |
| Ausführungsrechte `authenticated` | 138 · `c5f00ccb…` | 138 · `c5f00ccb…` |
| Ausführungsrechte `service_role` | 156 · `7056df4e…` | 156 · `7056df4e…` |
| Funktionen mit PUBLIC-Ausführungsrecht | 0 | 0 |

### Was die sechs Migrationen brauchten

| Migration | Ursache | Behebung |
| --- | --- | --- |
| `…_inventory_at_cost_v2` | `inventory_summary_by_product()` ändert den Rückgabetyp; `create or replace` kann das nicht | `drop function if exists` davor |
| `…_spendenvorschlaege_nicht_oeffentlich` | dasselbe für `donation_causes_list()` | dito |
| `…_security_hardening` | `comment on` auf `app._sig_upload` / `_pia_sig` | in eine Existenzprüfung gefasst |
| `…_revoke_anon_on_signature_scratch` | `revoke` auf dieselben Tabellen | dito |
| `…_donation_causes_stammdaten` | Prüfregel setzt einen Datenstand voraus | der fehlende Schritt wird nachgetragen |
| `…_konten_kommen_aus_sevdesk` | prüft Rechte, die Supabase automatisch vergibt | Standardrechte im Nachbau ergänzt |

### Drei Eingriffe an der Produktion, die nie eine Migration hatten

Die Reparatur hat sichtbar gemacht, dass an drei Stellen von Hand am
Produktionsstand gearbeitet wurde, ohne dass es im Verzeichnis steht:

1. **Die Arbeitstabellen `_sig_upload` und `_pia_sig`** wurden auf dem
   Server angelegt — dieselbe Herkunft wie die stillgelegte Function
   `install-signature`.
2. **Die drei Spendenzwecke** aus dem Juli wurden zurückgezogen
   (`deleted_at` gesetzt). Ohne diesen Schritt greift die Prüfregel vom
   03.08. nicht. Er ist jetzt in der Migration nachgetragen.
3. **PUBLIC wurde bei drei Finanz- und Produktfunktionen entzogen** —
   siehe unten.

Für die Verfahrensdokumentation ist das der eigentliche Ertrag: Nicht die
sechs Fehler, sondern die Erkenntnis, dass Handbetrieb an der Produktion
stattgefunden hat und im Verzeichnis nicht auftaucht.

### S-19 — was der Neuaufbau als Erstes gefunden hat

Der erste vollständige Lauf ergab: **`anon` durfte 8 Funktionen
ausführen, die Produktion erlaubt 5.** Die drei zusätzlichen waren
`product_detail`, `finance_balance_kpis` und **`upsert_finance_balance`**
— letztere schreibt Bilanzzahlen.

Ursache: Migration 0046 vom 18.07. hatte das Problem schon einmal gelöst
(„Funktionen erben execute über PUBLIC"), aber ihre **Standardregel hält
nicht**. In PostgreSQL bleibt der eingebaute Vorgabewert — PUBLIC darf
ausführen — wirksam, wenn das gespeicherte Standardrecht den Eigentümer
nicht mitführt. Jede seit dem 19.07. angelegte Funktion trug PUBLIC
wieder. In der Produktion waren es zuletzt elf, darunter drei aus den
Sicherheitskorrekturen von heute früh.

Über die API erreichbar waren die `app`-Funktionen nicht — PostgREST
veröffentlicht nur `public`. Aber im Repository stand ein anonym
aufrufbarer Schreibzugriff auf Finanzdaten, und jeder Neuaufbau hätte ihn
hergestellt. Migration `20260902060051` entzieht PUBLIC und setzt die
Standardregel in der Form, die tatsächlich greift.

### S-20 — der Fehler, den diese Korrektur selbst erzeugt hat

Der erste Anlauf von `20260902060051` übernahm aus 0046 die Zeile

```sql
grant execute on all functions in schema public to authenticated;
```

Damit bekam **jedes angemeldete Konto** Ausführungsrechte auf 18
Funktionen, die vorher bewusst zu waren:

* `email_enqueue` — Post an eine beliebige Adresse einstellen
* `next_invoice_number` — Rechnungsnummern verbrauchen; jede Lücke in der
  Nummernfolge ist ein GoBD-Problem
* `create_invoice_for_purchase`, `store_notification_apply`,
  `upsert_finance_balance_synced`
* `grant_birthday_offer`, `grant_anniversary_offer` — Rabatte an eine
  beliebige Kunden-ID
* `email_unsubscribe_token_for` — Abmeldetoken eines fremden Profils
* dazu `card_entitlements`, `email_has_consent`, `email_outbox_claim`,
  `email_outbox_mark`, `generate_daily_offers`, `generate_weekly_offers`,
  `has_paid_subscription`, `legal_text_abrufen`, `legal_text_uebernehmen`,
  `run_daily_special_offers`

**Der Regressionslauf blieb dabei grün.** Er prüft die 48 Verwaltungs-RPCs,
die `authenticated` vorher aufrufen durfte — diese 18 waren nie darunter.
Gesehen wurde der Fehler allein daran, dass der Fingerabdruck von
`authenticated` nach dem Ausrollen von 138 auf 156 sprang. Migration
`20260902060345` nimmt die 18 Rechte einzeln zurück; die Ursache ist in
`20260902060051` entfernt.

Das ist die Lehre dieses Abschnitts, und sie geht über die Befunde hinaus:
**Eine Testsuite prüft, was sie kennt. Der Fingerabdruck prüft, was sich
geändert hat.** Ohne den Vergleich wäre diese Ausweitung durchgegangen —
mit grüner Regression.

### Zwei bewusste Abweichungen der Prüfumgebung

* **PostgreSQL 16 gegen 17.6** in der Produktion. Für die
  Autorisierungsfläche ohne Wirkung — alle neun Merkmale stimmen überein.
  Für Fragen, die an der Serverversion hängen, ist die Umgebung nicht
  aussagekräftig.
* **pgTAP** liegt im eigenen Schema `tap`, damit es die über tausend
  eigenen Funktionen nicht in `public` mitzählt.
