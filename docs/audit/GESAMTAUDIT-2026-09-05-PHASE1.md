# BÖRDESNACK24 — GESAMTAUDIT, PHASE 1

Stand: 05.09.2026 · Keine Codeänderungen in dieser Phase
Prüfer: unabhängige Review-Rolle · Branch `claude/bordesnack24-audit-architecture-7xd3d6`

## 0. Wie diese Prüfung entstanden ist — und was sie NICHT abdeckt

Die Befunde unten stammen **nicht** aus Migrationen oder Kommentaren, sondern
aus dem **tatsächlichen Endzustand der Produktionsdatenbank** (Katalogabfragen
gegen `pg_class`, `pg_policies`, `pg_proc`, `information_schema`,
`storage.buckets`), aus dem Supabase-eigenen Security-Advisor als unabhängiger
Zweitmeinung, aus der Liste der **tatsächlich deployten** Edge Functions und
aus dem Repository.

**Ehrliche Abgrenzung.** Vollständig geprüft wurden: Rollen- und
Rechtemodell, RLS, SECURITY DEFINER, Grants, Storage-Buckets, Auth/Session,
Biometrie, Passwort-Wiederherstellung, Deployment-Konsistenz. **Nicht in
dieser Phase geprüft** und daher ohne Aussage: Finanzlogik im Detail
(Netto/Brutto/USt-Konsistenz), FIFO- und MHD-Rechnung gegen das Frontend,
Art.-15-Export gegen das Datenmodell, KI-Register gegen Implementierung,
DATEV-/Sevdesk-Abgleich, Race Conditions unter Last. Wer diesen Bericht als
„alles geprüft" liest, liest ihn falsch.

---

## 1. GESAMTURTEIL

Das Sicherheitsfundament ist **überdurchschnittlich solide gebaut** — und das
ist keine Höflichkeit, sondern das Ergebnis von Zählungen:

| Messung | Ergebnis |
|---|---|
| Tabellen im Schema `public` | 118 |
| davon mit aktiviertem RLS | **118 (100 %)** |
| SECURITY-DEFINER-Funktionen | 200 |
| davon **ohne** festgelegten `search_path` | **0** |
| Tabellen mit RLS und 0 Policies (Deny-all, Zugriff nur über RPC) | 8 |

Null SECURITY-DEFINER-Funktionen ohne `search_path` bei 200 Funktionen ist
ein Wert, den man in gewachsenen Systemen praktisch nie sieht.

**Kein CRITICAL-Befund ist beweisbar.** Zwei Befunde hätten CRITICAL-Potenzial,
hängen aber an einer Konfiguration, die weder aus dem Repository noch aus der
Datenbank auslesbar ist (Abschnitt 20). Bis das geklärt ist, stehen sie auf
HIGH.

**Der eigentliche Schwachpunkt liegt nicht in der Datenbank, sondern in der
Nachvollziehbarkeit des Deployments** (H-3, H-4). 15 von 26 laufenden Edge
Functions wurden nicht aus dem Repository ausgeliefert. Für einen Betrieb mit
GoBD-Pflichten ist das der teuerste Befund dieses Berichts — er entwertet
jede Aussage, die man über den Quelltext dieser Funktionen trifft.

**Go-Live-Empfehlung: bedingt freigegeben.** Der Kundenbetrieb kann starten,
sobald H-1 bis H-4 abgearbeitet sind. Keiner davon erfordert einen Umbau; alle
vier sind kleine, gezielte Eingriffe.

---

## 2. CRITICAL FINDINGS

Keine. Zwei Kandidaten wurden geprüft und auf HIGH herabgestuft, weil ihre
Ausnutzbarkeit an einer nicht auslesbaren Konfiguration hängt — siehe H-1/H-2.
Eine Einstufung als CRITICAL ohne diesen Nachweis wäre Spekulation.

---

## 3. HIGH FINDINGS

### H-1 · `net.http_get/http_post/http_delete` für `anon` und `authenticated` ausführbar

| | |
|---|---|
| **Kategorie** | SSRF / Datenexfiltration aus der Datenbank |
| **Severity** | HIGH |
| **Confidence** | Grants CONFIRMED · Ausnutzbarkeit POSSIBLE |
| **Betroffen** | Erweiterung `pg_net`, Schema `net` |

**Problem.** Die Erweiterung `pg_net` liegt im `public`-Schema. Sowohl `anon`
als auch `authenticated` haben `USAGE` auf dem Schema `net` **und** `EXECUTE`
auf `net.http_get`, `net.http_post`, `net.http_delete`:

```
schema | anon_usage | authed_usage
net    | true       | true
funktion       anon  authed
net.http_post  true  true
net.http_get   true  true
```

**Angriffsszenario.** Wird das Schema `net` über die REST-API erreichbar
(Exposed Schemas) oder erreicht ein Angreifer über eine andere Lücke
SQL-Ausführung, kann er die Datenbank beliebige HTTP-Requests senden lassen —
aus dem Supabase-Netz heraus, an interne Adressen, und mit beliebigem Body.
Das ist der klassische Weg, Daten an einen fremden Server zu schicken, ohne
dass ein Firewall-Log der App etwas sieht.

**Nachweis.** `has_schema_privilege` / `has_function_privilege` gegen die
Produktionsdatenbank, siehe oben. Der Supabase-Advisor meldet zusätzlich
`extension_in_public` für `pg_net`.

**Warum nicht CRITICAL.** Ob `net` über PostgREST erreichbar ist, steht in der
Projekt-Konfiguration (Exposed Schemas), nicht in der Datenbank. Ist es das
nicht — der Normalfall —, ist der Weg heute nicht direkt begehbar.

**Empfohlene Lösung.** `REVOKE ALL ON ALL FUNCTIONS IN SCHEMA net FROM anon,
authenticated; REVOKE USAGE ON SCHEMA net FROM anon, authenticated;` Die
Anwendung nutzt `pg_net` ausschließlich serverseitig; der Entzug kann nichts
brechen, was legitim ist.

**Verifikationstest.** Nach der Änderung als `authenticated`:
`select net.http_get('https://example.invalid')` muss mit
`permission denied for schema net` scheitern.

---

### H-2 · Schema `app` ist für `authenticated` nutzbar, inklusive Löschjob

| | |
|---|---|
| **Kategorie** | Rechteausweitung / Datenvernichtung |
| **Severity** | HIGH |
| **Confidence** | Grants CONFIRMED · Ausnutzbarkeit POSSIBLE |
| **Betroffen** | `app.purge_nach_frist()`, `app.kauf_bucht_bestandsabgang()`, Schema `app` |

**Problem.** Das Schema `app` ist als *internes* Schema gedacht. Tatsächlich
gilt:

```
schema | anon_usage | authed_usage
app    | false      | true
```

und zwei SECURITY-DEFINER-Funktionen darin sind ausführbar:

| Funktion | anon | authenticated |
|---|---|---|
| `app.purge_nach_frist()` | EXECUTE | EXECUTE |
| `app.kauf_bucht_bestandsabgang()` | EXECUTE | EXECUTE |

`app.purge_nach_frist()` ist der Löschjob, der Daten nach Ablauf der
Aufbewahrungsfristen entfernt. Eine SECURITY-DEFINER-Funktion, die Daten
löscht, darf für keinen angemeldeten Kunden aufrufbar sein.

**Angriffsszenario.** Ein beliebiger angemeldeter Kunde ruft
`/rest/v1/rpc/purge_nach_frist` gegen das Schema `app` auf und stößt einen
Löschlauf an. Kein Datendiebstahl, aber Datenvernichtung — und in einem
GoBD-pflichtigen System ist das der schlimmere Schaden.

**Einschränkung, die zur Ehrlichkeit gehört.** `anon` hat **kein** `USAGE` auf
`app` und kommt damit nicht heran. Für `authenticated` hängt es daran, ob `app`
in den Exposed Schemas steht. Das ist aus Repository und Datenbank **nicht**
feststellbar (Abschnitt 20).

`app.kauf_bucht_bestandsabgang()` ist eine Trigger-Funktion; ein direkter
Aufruf scheitert an der fehlenden Trigger-Umgebung. Der Grant ist trotzdem
falsch und stammt aus der Arbeit vom 03.09.2026 — er ist hausgemacht.

**Empfohlene Lösung.** `REVOKE ALL ON ALL FUNCTIONS IN SCHEMA app FROM anon,
authenticated;` und anschließend gezielt nur die Helfer wieder freigeben, die
in RLS-Ausdrücken vorkommen (`app.is_business_member`,
`app.darf_fremdes_konto_beurteilen`). Achtung: RLS-Policies rufen
`app.is_business_member` auf — ein pauschaler Entzug ohne diese Rückgabe würde
den B2B-Bereich lahmlegen. **Das ist der Grund, warum dieser Eingriff einen
Regressionslauf braucht und nicht blind erfolgen darf.**

**Verifikationstest.** Als `authenticated`: `select app.purge_nach_frist()`
muss scheitern; ein B2B-Nutzer muss seine eigene Firma weiterhin lesen können.

---

### H-3 · 15 von 26 laufenden Edge Functions stammen nicht aus dem Repository

| | |
|---|---|
| **Kategorie** | Nachvollziehbarkeit, GoBD, Supply Chain |
| **Severity** | HIGH |
| **Confidence** | CONFIRMED |

**Problem.** Die deployten Funktionen tragen einen `entrypoint_path`. Bei 11
von 26 zeigt er auf den CI-Pfad
`/home/runner/work/B-rdesnack24-/…/supabase/functions/<name>/index.ts` — diese
wurden aus dem Repository ausgeliefert. Bei **15** zeigt er auf
`/tmp/user_fn_<projekt>_<id>_<n>/source/index.ts` — diese wurden über das
Dashboard oder die API hochgeladen.

Betroffen sind unter anderem: `protocol-export-pdf`, `iot-webhook`,
`approval-notify`, `docusign-fetch-signature`, `install-signature`,
`documents-zip-export`, `merge-employee-signature`, `documents-init-templates`,
`documents-install-branded-set`, `finance-export-pdf`, `signature-retouch`,
`documents-install-haccp-set`, `receipt-pdf`, `weather-sync`, `email-inbound`.

**Warum das schwer wiegt.** Für diese 15 Funktionen ist der Quelltext im
Repository **kein Beleg** dafür, was in Produktion läuft. Darunter sind
`finance-export-pdf` und `receipt-pdf` — Funktionen, die steuerlich relevante
Belege erzeugen. Die Verfahrensdokumentation nach GoBD beschreibt damit
möglicherweise ein System, das so nicht läuft. Jede Code-Review dieser
Funktionen — auch diese hier — steht auf Sand.

**Empfohlene Lösung.** Alle Funktionen einmal aus dem Repository neu
ausliefern (`supabase functions deploy` über die CI), danach ausschließlich
über CI deployen und Dashboard-Deploys organisatorisch untersagen.

**Verifikationstest.** `list_edge_functions` erneut abfragen: kein
`entrypoint_path` darf mehr mit `/tmp/user_fn_` beginnen.

---

### H-4 · `nayax-webhook` und `send-push` sind im Repository, aber nicht deployt

| | |
|---|---|
| **Kategorie** | Funktion versprochen, technisch nicht vorhanden |
| **Severity** | HIGH |
| **Confidence** | CONFIRMED |

**Nachweis.** Repository: 28 Funktionen. Deployt: 26. Differenz exakt
`nayax-webhook` und `send-push`.

**Bedeutung.** `nayax-webhook` ist der Eingang für **Automatenumsätze** — der
Kern des Geschäfts. Der Code ist sauber (HMAC-SHA256 gegen
`NAYAX_WEBHOOK_SECRET`, `401` bei falscher Signatur), er läuft nur nicht.
Entweder werden Automatenumsätze derzeit gar nicht automatisch erfasst, oder
sie kommen über einen anderen, hier ungeprüften Weg herein. Beides muss vor
dem ersten Umsatz geklärt sein — es betrifft die Vollständigkeit der
Aufzeichnungen nach §§ 145–147 AO.

`send-push` fehlt ebenfalls: Push-Benachrichtigungen können nicht
funktionieren, obwohl `device_tokens` gepflegt wird und die App Tokens
registriert.

**Empfohlene Lösung.** Beide deployen oder — falls bewusst stillgelegt — im
Repository als stillgelegt kennzeichnen und die Doku angleichen. Ein
funktionsloser Webhook-Endpunkt im Code ist eine Falle für den Nächsten.

---

## 4. MEDIUM FINDINGS

### M-1 · View `product_rating_summary` umgeht RLS

`security_invoker=false`, Eigentümer `postgres`, lesbar für `anon` und
`authenticated`. Die View läuft also mit den Rechten des Eigentümers und
umgeht RLS auf `product_ratings`.

Definition:
```sql
SELECT product_id, round(avg(rating),2) AS avg_rating, count(*)::int AS review_count
FROM product_ratings GROUP BY product_id;
```

Es fließen nur Aggregate heraus, keine Zuordnung zu Personen. Der Schaden ist
damit begrenzt: Bewertungen, die RLS eigentlich verbirgt (etwa von gesperrten
oder gelöschten Konten), zählen im Durchschnitt und im Zähler mit.
Severity MEDIUM, Confidence CONFIRMED. Der Supabase-Advisor meldet denselben
Punkt als ERROR — die Einstufung hier ist bewusst niedriger, weil der Inhalt
geprüft wurde.

**Lösung:** `ALTER VIEW public.product_rating_summary SET (security_invoker = true);`
und prüfen, ob die Kundenansicht danach noch die erwarteten Werte zeigt.

### M-2 · Prüfung auf geleakte Passwörter wirkt nur im Client

Die HIBP-Prüfung läuft in Flutter (`core/security/pwned_password_checker.dart`)
und schlägt bewusst fehl-offen. Serverseitig ist die Supabase-eigene Prüfung
**aus** (Advisor: `auth_leaked_password_protection`). Ein veränderter Client
oder ein direkter Aufruf von `/auth/v1/signup` umgeht die Prüfung vollständig.

Das verstößt gegen den Projektgrundsatz „Frontend-Schutz ist niemals eine
Sicherheitsmaßnahme". Die clientseitige Lösung war eine bewusste
Kostenentscheidung (Pro-Feature) — sie ist als Komfort korrekt, als Schutz
nicht. Severity MEDIUM, Confidence CONFIRMED.

**Lösung:** entweder die Supabase-Funktion aktivieren (kostenpflichtig) oder
die Mindestanforderungen serverseitig in einem Auth-Hook erzwingen. Bis dahin
in der Dokumentation nicht als Sicherheitsmaßnahme führen.

### M-3 · Einkaufspreis-Spalten sind grant-seitig lesbar (heute durch RLS gedeckt)

| Tabelle | Spalte | anon | authenticated |
|---|---|---|---|
| `inventory_movements` | `unit_cost` | ✓ | ✓ |
| `filling_logs` | `unit_cost` | ✓ | ✓ |
| `maintenance_logs` | `cost_amount` | ✓ | ✓ |
| `products` | `cost_price_net` | ✗ | ✗ |

**Kein Leck.** Die RLS-Policies dieser drei Tabellen verlangen
`is_admin() OR auth_has_permission('inventory.view'/'haccp.fill'/'haccp.maintenance')`.
Ein Kunde bekommt keine Zeile und damit keine Spalte. Der Befund ist reine
Tiefenverteidigung: Wer je eine Policy lockert, öffnet dann sofort auch die
Einkaufspreise. Severity MEDIUM, Confidence CONFIRMED (Grants), Leck NICHT
nachweisbar.

**Lösung:** `REVOKE (unit_cost)`-Spaltenrechte analog zu `products.cost_price_net`.

### M-4 · Deployment kann nicht belegen, mit welcher Konfiguration gebaut wurde

`scripts/deploy_web.sh` setzt `ENV_FILE="${ENV_FILE:-$MOBILE/env/demo.json}"`.
Diese Datei **existiert nicht** (vorhanden sind nur `dev.example.json` und
`prod.json`). Der Aufruf ohne gesetzte Variable bricht ab — das ist im
Ergebnis fail-safe, aber aus dem falschen Grund.

Verifiziert: der Standardaufruf schlug in dieser Sitzung mit
`Did not find the file passed to "--dart-define-from-file"` ab.

Es fehlt jede Zusicherung, dass ein Produktivbuild auch die Produktivkonfiguration
getragen hat. Legt jemand eine `demo.json` an, deployt der Standardaufruf ab
sofort lautlos die Demo-Konfiguration nach Produktion.
Severity MEDIUM, Confidence CONFIRMED.

**Lösung:** Standard entfernen, `ENV_FILE` zur Pflicht machen und nach dem
Build prüfen, dass die erwartete Supabase-URL im Bundle steht.

### M-5 · `app.werbe_nil` mit veränderlichem `search_path`

Die einzige Funktion im System ohne festgelegten `search_path`
(Advisor: `function_search_path_mutable`). Sie ist SECURITY INVOKER, der
Hebel ist damit klein — aber sie ist die einzige Ausnahme von einer sonst
lückenlosen Regel, und genau solche Ausnahmen werden später kopiert.
Severity MEDIUM (Hygiene), Confidence CONFIRMED.

### M-6 · `customers`: Selbst-Update ohne Guard-Trigger

`profiles` hat `trg_profiles_guard`. `customers` hat **keinen** vergleichbaren
Trigger, aber die Policy:

```
cust_self_update  UPDATE  USING (id = auth.uid())  WITH CHECK (id = auth.uid())
```

`customer_type` ist für `authenticated` spaltenweise beschreibbar. Ob ein
Kunde sich damit selbst auf `business` setzen und dadurch andere Preise,
Zahlungsziele oder Rechnungsstellung erhalten kann, ist **in dieser Phase
nicht geprüft**. Severity MEDIUM, Confidence **PROBABLE** — bewusst nicht
höher, weil der Wirkungspfad nicht nachgewiesen ist.

**Nächster Schritt:** feststellen, was `customer_type` steuert, und bei
Wirkung einen Guard analog `guard_profile_update` ergänzen.

---

## 5. LOW FINDINGS

| ID | Befund | Confidence |
|---|---|---|
| L-1 | `pg_net` im `public`-Schema installiert (Advisor `extension_in_public`) | CONFIRMED |
| L-2 | `is_admin(uid)` akzeptiert eine fremde Kennung und ist — anders als `auth_has_permission` und `is_internal` — **nicht** durch `app.darf_fremdes_konto_beurteilen` abgesichert. Erlaubt bestenfalls die Frage „ist Kennung X Admin?". Kein Datenzugriff. | POSSIBLE |
| L-3 | 143 SECURITY-DEFINER-Funktionen sind für `authenticated` ausführbar. Das ist die Bauweise (RPC-zentriert) und kein Fehler, verlangt aber, dass jede einzelne intern prüft. Stichproben waren korrekt; eine vollständige Durchsicht aller 143 steht aus. | INFORMATIONAL |

---

## 6. FALSE POSITIVES UND BEREITS KORREKT GELÖSTES

Diese Punkte sahen nach Lücken aus und sind **keine**. Sie stehen hier, damit
sie nicht bei der nächsten Prüfung erneut „gefunden" und womöglich
„repariert" werden.

### FP-1 · `profiles_update_self` ist **keine** Rechteausweitung

Die Policy erlaubt UPDATE auf die eigene Zeile ohne Spaltenbeschränkung, und
`authenticated` hat auch das Spaltenrecht auf `profiles.role`. Das sieht nach
dem klassischen „Kunde macht sich zum Admin" aus.

Es greift aber `trg_profiles_guard` → `app.guard_profile_update()`:

```sql
if public.is_admin() then return new; end if;
...
if new.role <> old.role or new.status <> old.status or new.id <> old.id
   or coalesce(new.archived_at,'epoch') <> coalesce(old.archived_at,'epoch')
   or coalesce(new.deleted_at,'epoch')  <> coalesce(old.deleted_at,'epoch')
then raise exception ... using errcode = '42501';
```

**Zweite Hypothese, ebenfalls widerlegt:** `role` und `status` werden mit
blankem `<>` verglichen, `archived_at`/`deleted_at` dagegen mit `coalesce` —
diese Asymmetrie legt eine NULL-Umgehung nahe (`NULL <> 'customer'` ergibt
NULL, also keine Ausnahme). Gegenprüfung im Katalog:

```
spalte | typ                 | not_null | default
role   | app.role_key        | true     | 'customer'
status | app.profile_status  | true     | 'invited'
```

Beide **NOT NULL**. Die Umgehung ist nicht möglich. Der Guard hält.
*(Empfehlung ohne Dringlichkeit: `coalesce` auch dort setzen, damit der Schutz
nicht von einer NOT-NULL-Zusage abhängt, die eine spätere Migration aufheben
könnte.)*

### FP-2 · `subscription-cancel` ohne JWT-Prüfung ist **korrekt so**

`verify_jwt: false` ist kein Versehen, sondern § 312k Abs. 2 BGB: Der
Kündigungsbutton muss **ohne Login** funktionieren. Die Funktion begrenzt
zusätzlich auf 3 Kündigungen je E-Mail und Stunde und schreibt in
`cancellation_requests`, statt ein Abo unmittelbar zu beenden.

*Offener Nebenpunkt (nicht geprüft):* Ob aus einer solchen Anfrage ohne
weitere Bestätigung eine tatsächliche Beendigung wird. Falls ja, könnte ein
Dritter fremde Abos kündigen. Für Phase 2 vorgemerkt.

### FP-3 · Einkaufspreise sind geschlossen

Von allen Spalten der Tabelle `products` ist für `authenticated` genau eine
nicht lesbar: `cost_price_net`. Die Sperre aus S-2 wirkt nachweislich.

### FP-4 · `search_path`-Disziplin ist vollständig

200 SECURITY-DEFINER-Funktionen, **0** ohne festgelegten `search_path`.

### FP-5 · RLS ist flächendeckend

118 von 118 Tabellen. Die 8 Tabellen mit RLS und null Policies
(`customer_card`, `customer_login_days`, `customer_challenge_awards`,
`email_unsubscribe_token`, `advertising_events`, `advertising_daily_metrics`,
`advertising_redirect_actors`, `advertising_redirect_counts`) sind
**Deny-all** — Zugriff ausschließlich über geprüfte RPCs. Das ist die
sicherste Variante, kein Mangel.

### FP-6 · Fremdkonto-Prüfung ist sauber gelöst

`app.darf_fremdes_konto_beurteilen(uid)` verhindert, dass ein Kunde
`auth_has_permission(perm, <fremde uid>)` als Sonde benutzt: erlaubt ist die
eigene Kennung, ein serverseitiger Aufruf ohne `anon`/`authenticated`-Rolle
oder eine interne Rolle. Das ist eine Feinheit, die in vergleichbaren Systemen
fast immer fehlt.

---

## 7. SECURITY ARCHITECTURE

**Identitäten:** `anon`, `authenticated` (Postgres-Rollen) × Anwendungsrollen
`customer`, `employee`, `shareholder`, `system_admin` (Spalte `profiles.role`,
Typ `app.role_key`) × B2B-Rolle je Firma (`business_members`, Typ
`app.business_role`, u. a. `admin`).

**Kontrollkette:**

```
Client (Flutter/Web)   ← ohne Sicherheitswirkung, ausdrücklich
        ↓ JWT
PostgREST              ← Rolle anon | authenticated aus dem Token
        ↓
RLS-Policy             ← auth.uid(), is_admin(), auth_has_permission(),
        ↓                 app.is_business_member()
Tabelle / RPC
        ↓
Spaltenrechte          ← z. B. products.cost_price_net entzogen
```

**Drei Ebenen, absichtlich:** Policy (Zeile) + Grant (Spalte) + Trigger
(Feldänderung). Diese Mehrfachprüfung ist Defense-in-Depth und darf **nicht**
als Redundanz abgebaut werden.

**Vertrauensgrenzen:** Flutter-Client ⟶ Supabase Auth ⟶ PostgREST ⟶ Postgres
⟶ Edge Functions ⟶ externe Dienste (Resend, Sevdesk, Nayax, Docusign,
Wetterdienst, Push). Der `service_role`-Schlüssel lebt ausschließlich in Edge
Functions; im Flutter-Bundle wurde kein Schlüssel gefunden — Konfiguration
kommt über `String.fromEnvironment` und `--dart-define-from-file`.

---

## 8. AUTHENTICATION & BIOMETRIE

Geprüft am Code (Paket 01), nicht auf Gerät.

* Die Sitzung wird bei eingeschalteter Biometrie **nicht** beim Start
  herausgegeben (`BiometrieSpeicher.accessToken()` liefert `null`). Damit ist
  die Prüfung eine echte Schranke und keine Oberfläche.
* Der Geräte-PIN ist kein Ersatz (`biometricOnly: true`).
* Kontobindung wird **nach** dem Wiederherstellen gegen die Server-Antwort
  geprüft; bei Abweichung wird abgeräumt und abgemeldet.
* Jeder Fehlerpfad endet in „nicht bestanden"; kein Pfad lässt einen Fehler
  wie einen Erfolg wirken.
* Abmelden, Kontowechsel und ungültige Sitzung löschen die Freischaltung.

**Nicht geprüft und nicht prüfbar:** das Verhalten des Biometrie-Dialogs auf
echter Hardware, das Verhalten bei geänderter Geräte-Biometrie und bei
Deinstallation. Als Hardware-/Integrationstest ausgewiesen (Abschnitt 20).

**Passwort-Wiederherstellung:** Der Ablauf wurde am 04.09.2026 belegt
umgebaut. Ein verbrauchter oder in einem anderen Browser geöffneter Link führt
jetzt auf die Maske mit Klartextbegründung statt stumm auf die Startseite. Der
Einmal-Token wird nach dem Einlösen sofort aus der Adresse entfernt. Kein
Replay möglich (serverseitig `403: One-time token not found`).

---

## 9. SUPABASE / RLS / RPC

Stichprobe der wichtigsten Policies — alle korrekt:

| Tabelle | SELECT-Bedingung |
|---|---|
| `invoices` | eigene Kennung **oder** aktives, nicht gelöschtes Profil mit Rolle shareholder/system_admin |
| `purchases` | eigene Kennung **oder** B2B-Admin der Firma **oder** `customers.manage` |
| `purchase_items` | über `purchases` an die eigene Kennung gebunden |
| `payments` | eigene **oder** B2B-Admin **oder** `payments.view` |
| `device_tokens` | ausschließlich `user_id = auth.uid()` |
| `audit_log` | `is_admin()` **oder** `system.logs` |
| `businesses` | `deleted_at is null` **und** Mitgliedschaft |

Bemerkenswert positiv: Die Bedingungen prüfen durchgehend **zusätzlich**
`status = 'active'` und `deleted_at is null`. Damit ist der Fall
„deaktivierter oder gelöschter Benutzer greift weiter zu" abgedeckt — eine
Frage, die in vielen Systemen offen bleibt.

---

## 10. STORAGE

| Bucket | öffentlich | Größe | MIME-Beschränkung |
|---|---|---|---|
| `werbelogos` | **ja** | 512 KB | png, jpeg, webp |
| `documents` | nein | 25 MB | pdf, docx, doc, png, jpeg |
| `employee-signatures` | nein | 2 MB | png, jpeg |
| `haccp` | nein | 25 MB | jpeg, png, pdf |
| `partner-signatures` | nein | 2 MB | png, jpeg |
| `signed-documents` | nein | 25 MB | pdf |

Sauber: Genau ein öffentlicher Bucket, und der enthält bewusst öffentliche
Werbelogos. Alle personenbezogenen Buckets (Unterschriften, Dokumente) sind
privat, größenbegrenzt und MIME-beschränkt; **kein** Bucket erlaubt SVG
(womit der übliche XSS-Weg über SVG-Uploads zu ist).

**Nicht geprüft:** Inhalt der Storage-Policies im Detail, Ablaufzeit signierter
URLs, Path Traversal.

---

## 11. TESTABDECKUNG

* Flutter: **201 Tests grün**, `flutter analyze` ohne Befund.
* SQL-Prüfumgebung: 124 Behauptungen über `pruef.wahrheit`, davon 16 Dateien
  mit ausdrücklichen Gegenproben.
* Für die Biometrie existieren 25 neue Tests inklusive der entscheidenden
  Gegenprobe „abgelehnte Prüfung gibt nichts heraus".

**Lücke:** Es gibt keinen automatisierten Test, der die in H-1/H-2 gefundenen
Grants prüft. Ein einzelner Katalogtest („keine Funktion in `app` oder `net`
ist für `anon`/`authenticated` ausführbar") hätte beide Befunde bei ihrer
Entstehung gemeldet. Das ist die wichtigste Testempfehlung dieses Berichts.

---

## 12. OFFENE EXTERNE PRÜFUNGEN

| # | Frage | Wo zu klären | Warum es zählt |
|---|---|---|---|
| V-1 | Stehen `app` oder `net` in den **Exposed Schemas**? | Supabase → Project Settings → API → Exposed schemas | Entscheidet, ob H-1 und H-2 CRITICAL oder Hygiene sind |
| V-2 | Stimmt der Quelltext der 15 per Dashboard deployten Functions mit dem Repository überein? | Neu-Deploy aus CI, danach Diff | H-3; ohne das ist deren Review wertlos |
| V-3 | Werden Automatenumsätze derzeit erfasst — und wie? | Betrieb / Nayax-Konfiguration | H-4, §§ 145–147 AO |
| V-4 | Face ID auf echtem Gerät | iPhone mit nativem Build | Hardware-Test, im Repository nicht verifizierbar |
| V-5 | Sind die im Code hinterlegten Aufbewahrungsfristen fachlich korrekt? | Steuerberater | Aus dem Repository nicht ableitbar — **nicht geraten** |

---

## 13. PRIORISIERTER REMEDIATION-PLAN (Vorschlag für Phase 2)

| Rang | ID | Maßnahme | Aufwand | Regressionsrisiko |
|---|---|---|---|---|
| 1 | V-1 | Exposed Schemas nachsehen — **vor** allem anderen | 2 Minuten | keins |
| 2 | H-1 | Grants auf Schema `net` entziehen | klein | sehr gering |
| 3 | H-2 | Grants auf Schema `app` entziehen, RLS-Helfer gezielt zurückgeben | klein | **mittel** — B2B-Policies hängen daran |
| 4 | H-4 | `nayax-webhook`, `send-push` deployen oder stilllegen | klein | gering |
| 5 | H-3 | Alle Functions aus CI neu ausliefern | mittel | mittel |
| 6 | M-1 | View auf `security_invoker = true` | sehr klein | gering |
| 7 | M-4 | `ENV_FILE` zur Pflicht machen, Build-Assertion | klein | keins |
| 8 | M-3 | Spaltenrechte `unit_cost` entziehen | klein | gering |
| 9 | M-5 | `search_path` bei `app.werbe_nil` setzen | sehr klein | keins |
| 10 | M-6 | Wirkung von `customer_type` klären, ggf. Guard | mittel | gering |
| 11 | M-2 | Passwortprüfung serverseitig | mittel | gering |
| — | Test | Katalogtest gegen unerwünschte Grants ergänzen | klein | keins |

Jede dieser Maßnahmen ist ein gezielter Eingriff. **Kein Refactoring, keine
Umstrukturierung, keine Kosmetik.**

---

## 14. GO-LIVE-EMPFEHLUNG

**Bedingt freigegeben.**

Freigabe für den Kundenbetrieb, sobald V-1 beantwortet und H-1, H-2, H-4
erledigt sind. H-3 ist vor dem ersten steuerlich relevanten Geschäftsvorfall
zu erledigen, weil sonst nicht belegbar ist, welcher Code die Belege erzeugt
hat.

Nicht freigegeben ohne diese vier Punkte — nicht weil ein Angriff
wahrscheinlich wäre, sondern weil zwei davon (H-3, H-4) die
**Nachweisführung** betreffen, und die lässt sich nachträglich nicht
herstellen.
