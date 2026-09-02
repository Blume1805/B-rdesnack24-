# Sicherheitsnachweise Bördesnack24

Ablage der ausgeführten Prüfprotokolle. Diese Datei berichtet über
**durchgeführte** Prüfungen, nicht über Absichten. Was hier nicht mit
Datum und Messwert steht, gilt als ungeprüft.

Letzter vollständiger Durchlauf: **02.09.2026**, Prüfer: Claude Code
(beauftragt durch Philipp Blume), Umfang: gesamter Code — Datenbank,
Edge Functions, Flutter-App.

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

| Prüfpunkt | Stand |
| --- | --- |
| Authentication | ✓ Identität serverseitig aus `auth.uid()`, nie aus einem Client-Parameter |
| Authorization | ✓ 47 von 48 Verwaltungs-RPCs weisen ab; `advertising_redirect_count` nicht (S-12) |
| RLS / Storage-Policy | ✓ 186 Policies, alle Buckets privat mit eigener Policy |
| User Isolation | ✓ horizontal belegt (T1–T4 + Gegenprobe) |
| IDOR/BOLA (5 Tests) | ✓ T1–T4 ausgeführt; T5 (manipulierter HTTP-Request) nur als SQL-Ebene, nicht über PostgREST — Egress gesperrt |
| Negativtests N1–N12 | teilweise — ohne Token und mit fremder ID belegt; abgelaufener Token, Doppelabsendung, unzulässiger Statusübergang offen |
| Abuse Cases | teilweise — Rechteausweitung, Mass Assignment, IDOR belegt; Brute Force, Enumeration, Replay nicht erreichbar |
| Rechteausweitung | ✓ vertikal und horizontal geprüft |
| Mass Assignment | ✗ `profiles.email` (S-5) |
| Finanzintegrität | ✓ Preis serverseitig; ✗ Altersschranke (S-6) |
| Audit-Logging | ✗ Lücke bei buchführungsrelevanten Tabellen (S-7) |
| Secrets | ✓ |
| Datenminimierung | ✗ S-2, S-3, S-4, S-8 |
| Security-Regression | ✓ Verfahren steht und ist wiederholbar (`scripts/pruefumgebung/`) |

**Ergebnis: 🔴 ROT.** Ein einziger offener Punkt genügt dafür; es sind
vierzehn. Das ist kein Widerspruch zu den 74 bestandenen Tests — die
Isolation zwischen Kunden hält nachweislich. Was nicht hält, ist die
Trennung zwischen „angemeldet" und „berechtigt" bei betrieblichen Daten,
und die Altersschranke.
