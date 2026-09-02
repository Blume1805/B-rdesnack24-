# Auftrag an den Lovable-Agenten — Frontend auf den Stand des Backends bringen

**Projekt A — „BÖRDESNACK Hub" (`d5033021-6dce-4044-8bf6-bb50d80aa8ff`)**
Stand des Auftrags: 02.09.2026 · Verfasser: Claude (Backend-Audit) · Freigabe: Philipp Blume

---

## 0. Worum es geht

Das Backend (Supabase `nnfsyuglkqycwenwxmuw`) hat zwischen dem 31.08. und dem
02.09.2026 **19 Migrationen** bekommen. Darunter sind Rechteentzüge, die
bestehende Frontend-Abfragen brechen, und neue Funktionen, für die es noch
keine Oberfläche gibt. Das Frontend wurde zuletzt am 01.09.2026 bearbeitet und
kennt keine dieser Änderungen.

**Das Backend ist die maßgebliche Quelle.** Wo Frontend und Backend
auseinandergehen, hat das Backend recht — nicht umgekehrt. Baue keine
Datenbankänderungen und schlage keine vor; wenn dir im Backend etwas fehlt,
schreib es in deinen Abschlussbericht, statt es im Frontend nachzubauen.

**Fünf Regeln, die über allem stehen:**

1. **Keine erfundenen Daten.** Kein Platzhalter, der wie ein echter Wert
   aussieht. Keine erfundene Entfernung, kein erfundener Status, kein
   Beispielbon im Konto eines angemeldeten Nutzers. Wenn Daten fehlen, zeig
   einen ehrlichen Leerzustand.
2. **Kein `select("*")`** auf Tabellen mit spaltenweisen Rechten (siehe § 2.2).
   Immer die Spalten benennen, die du wirklich brauchst.
3. **Keine geratenen Spaltennamen.** Die echten Namen stehen in diesem
   Dokument. Das bisherige „defensive Lesen" über mehrere Kandidaten (`code`
   ODER `voucher_code` ODER `redeem_code`) hat genau deshalb versagt.
4. **Keine Berechtigungsprüfung nur im Frontend.** Ein ausgeblendeter Knopf ist
   keine Sicherheitsmaßnahme. Das Backend prüft; das Frontend zeigt das
   Ergebnis verständlich an.
5. **Keine Funktion als fertig melden, die du nicht ausgeführt hast.**

---

## 1. Was sich im Backend geändert hat — und was davon bricht

| # | Änderung | Wirkung auf das Frontend |
|---|---|---|
| S-2 | `products`: Das Leserecht auf die **Tabelle** wurde entzogen. Stattdessen sind 24 einzelne Spalten freigegeben. Einkaufspreis und Marge sind für Kundenkonten nicht mehr lesbar. | Jedes `select("*")` auf `products` **schlägt jetzt fehl**. `src/lib/products.ts` benennt seine Spalten bereits — das bleibt gültig. Alle anderen Stellen prüfen. |
| S-3 | `machine_sales_daily` (Tagesumsatz je Automat) ist für Kundenkonten gesperrt. | Jede Oberfläche, die daraus liest, bekommt **0 Zeilen** statt eines Fehlers. Nicht als „keine Umsätze" darstellen. |
| S-4 | `product_ratings` mit `customer_id` ist nicht mehr frei lesbar. | Durchschnitt und Anzahl kommen aus der Aggregatsicht **`product_rating_summary`**; die eigene Bewertung wird über **`rate_product(p_product_id, p_rating)`** geschrieben. |
| S-5 | `profiles.email` ist vom Kontoinhaber nicht mehr frei setzbar. Die Adresse folgt der Anmeldung. | Eine Adressänderung läuft ausschließlich über Supabase Auth (`updateUser`), mit doppelter Bestätigung. Kein direktes `update` auf `profiles.email`. |
| S-6 | Die Altersschranke beim kostenpflichtigen Abo wird **serverseitig** gegen das gespeicherte `birth_date` geprüft. Das vom Client gesendete `p_age_consent` ist nur noch Einwilligungsnachweis, keine Prüfung. | Der Abschluss kann jetzt serverseitig abgewiesen werden, obwohl beide Häkchen gesetzt sind. Dieser Fall braucht verständlichen Text (§ 3.9). |
| S-12 | `advertising_redirect_count` zählt höchstens **3 Klicks je Konto, Kampagne und Tag**. | Ein Aufruf, der den Zähler nicht erhöht, ist **kein Fehler**. Nicht mit einer Fehlermeldung quittieren. |
| CUST-016/018 | Es gibt einen echten Löschprozess: `request_account_deletion` stellt den Antrag, ein Systemadministrator führt aus. Für alle 36 Tabellen mit Personenbezug steht fest, was gelöscht, gesperrt oder anonymisiert wird. | Es fehlt jede Oberfläche dafür (§ 4.2). |
| R-13 | `export_my_data()` liefert die Auskunft nach Art. 15 DSGVO über **38 Bereiche**. | Es fehlt jede Oberfläche dafür (§ 4.1). |

---

## 2. Der verbindliche Vertrag

### 2.1 Aufrufbare RPCs für Kundenkonten

Diese Liste ist vollständig und aus der Produktionsdatenbank ausgelesen. Alles,
was hier nicht steht, ist für ein Kundenkonto **nicht** aufrufbar — ein Versuch
endet mit `42501`.

```
app_role(uid uuid DEFAULT auth.uid())      -> app.role_key
my_subscription()                          -> jsonb
my_subscription_benefits()                 -> jsonb
choose_subscription_plan(p_plan text, p_withdrawal_consent bool, p_age_consent bool) -> jsonb
my_store_subscription()                    -> record
my_loyalty_status()                        -> record
my_gamification_status()                   -> jsonb
my_active_personal_offer()                 -> personal_offers
my_active_personal_offers()                -> personal_offers
ensure_my_special_offers()                 -> personal_offers
my_receipts()                              -> jsonb
my_invoices()                              -> invoices
my_customer_card()                         -> text
my_referral_code()                         -> text
my_referral_status()                       -> jsonb
my_notifications(p_limit int DEFAULT 30)   -> record
my_notifications_unread_count()            -> integer
my_login_week()                            -> jsonb
my_donation_summary()                      -> record
my_donations_by_purchase()                 -> record
my_permissions()                           -> text[]
product_detail(p_product_id uuid)          -> record
rate_product(p_product_id uuid, p_rating int) -> void
advertising_redirect_count(p_campaign uuid)   -> void
export_my_data()                           -> jsonb
request_account_deletion(p_reason text DEFAULT NULL) -> account_deletion_requests
my_businesses() / my_advertising_contracts() / my_advertising_campaigns() -> jsonb
list_my_signature_tasks()                  -> record
```

### 2.2 `products` — die 24 lesbaren Spalten

```
id, name, sku, ean, category, subcategory, status,
list_price_net, tax_rate, serve_temp, image_url,
allergens, energy_kcal, fat_g, saturated_fat_g, carbs_g,
sugars_g, protein_g, salt_g,
created_at, created_by, updated_at, updated_by, deleted_at
```

`cost_price_net` und alles Weitere sind **gesperrt**. `select("*")` bricht.

### 2.3 Echte Spalten der Tabellen, die heute geraten werden

```
personal_offers:
  id, customer_id, product_id, title, regular_price_net, offer_price_net,
  discount_percent, redemption_code, valid_from, valid_to, redeemed_at,
  redeemed_at_machine, image_url, created_at, created_by, source, activated_at

loyalty_bonus_grants:
  id, customer_id, month_start, tier, offer_id, granted_at

notifications:
  id, user_id, title, body, data, sent_at, read_at

locations:
  id, code, name, kind, street, zip, city, country, lat, lng,
  access_hours, status, created_at, created_by, updated_at, updated_by,
  archived_at, deleted_at
```

### 2.4 Was `my_subscription_benefits()` liefert

```json
{ "active": true|false, "discount_percent": 5|0,
  "period_end": "…", "plan": "monthly"|"yearly"|"lifetime"|null }
```

Der Rabatt ist **5 nur bei aktivem Abo, sonst 0**. Das ist die einzige
zulässige Quelle für den Rabatt.

### 2.5 Was `my_gamification_status()` liefert

```
tier, code, label, base_discount_pct, total_discount_pct,
next_code, next_label, next_discount_pct, next_min_eur,
purchase_count, lifetime_gross, badges[], challenges[]
```

---

## 3. Befunde im heutigen Frontend — mit Beleg

### 3.1 🔴 Der Rabatt ist hartcodiert und für die meisten Nutzer falsch

`src/lib/products.ts`:

```ts
export function appPrice(product) {
  return grossPrice(product) * 0.95;   // bedingungslos, für JEDEN
}
```

Maßgeblich ist `my_subscription_benefits().discount_percent` — 5 bei aktivem
Abo, **0 ohne**. Nutzer ohne Abo sehen heute einen Preis, den sie nicht
bekommen. Das ist ein Verstoß gegen das Preisangabenrecht und gegen die Regel
„eine einzige Quelle der Wahrheit".

**Zu tun:** Rabatt aus der RPC beziehen, einmal pro Sitzung laden, an die
Preisdarstellung durchreichen. Ohne Abo den regulären Bruttopreis zeigen und
den Vorteil als Angebot benennen („Mit Abo 5 % günstiger"), nicht als Preis.

### 3.2 🔴 Vier erfundene Automaten, als „live" ausgewiesen

`src/lib/data.ts` liefert vier hartcodierte Automaten mit erfundenen
Entfernungen (0,8 / 2,4 / 5,1 / 7,6 km), erfundenen Zuständen („Neu befüllt",
„Ausverkauft") und Namen wie „Automat Rewe Irxleben". `app.automaten.tsx`
rendert sie mit der Zeile „*live aktualisiert*" — **außerhalb** des Demomodus,
für angemeldete Nutzer.

Die echten Standorte in der Datenbank sehen so aus:

| name | street | city | lat/lng |
|---|---|---|---|
| Standort 1 (ANPASSEN) | — | Sülzetal OT Osterweddingen | — |
| Standort 2 (ANPASSEN) | — | Sülzetal OT Osterweddingen | — |
| Standort 3 (ANPASSEN) | — | Sülzetal OT Osterweddingen | — |
| Standort Heißgetränke (ANPASSEN) | — | — | — |

**Zu tun:** Die erfundenen Automaten ersatzlos entfernen. Die Ansicht gegen
`locations` und `machines` bauen. Solange ein Standort keine Straße und keine
Koordinaten hat: einen ehrlichen Zustand zeigen („Die Standortdaten werden
gerade gepflegt") — **keine** Entfernung berechnen, **keinen**
Maps-Navigationslink anbieten, **keinen** Betriebszustand behaupten. Ein
Standort mit „(ANPASSEN)" im Namen wird nicht angezeigt.

> Hinweis an Philipp, nicht an den Agenten: Die Standortstammdaten müssen im
> Backend gepflegt werden. Bis dahin bleibt die Automatenseite zwangsläufig
> dünn — das ist richtig so und besser als eine erfundene Fülle.

### 3.3 🔴 Erfundene Bons im Profil eines echten Nutzers

`src/lib/data.ts` enthält drei `receipts` mit Nummern wie „BS-2026-0714".
`app.profil.tsx` zeigt sie mit dem Satz „*deine echten Einkäufe erscheinen
hier, sobald die Bon-Tabelle angebunden ist*".

Dieser Satz ist nicht mehr wahr: **`my_receipts()` existiert und ist für
Kundenkonten aufrufbar.**

**Zu tun:** `my_receipts()` anbinden, die drei erfundenen Bons löschen, den
Hinweissatz löschen. Bei leerem Ergebnis ein ehrlicher Leerzustand.

### 3.4 🔴 Geratene Spaltennamen — der Einlösecode erreicht den Kunden nie

`src/lib/loyalty.ts` liest `personal_offers` mit `select("*")` und sucht dann
der Reihe nach `redeem_code`, `code`, `voucher_code`. Die echte Spalte heißt
**`redemption_code`**. Keiner der drei Kandidaten trifft — der Kunde sieht
seinen Einlösecode also **nie**.

Dasselbe bei `loyalty_bonus_grants`: gesucht werden
`discount_percent | percent | percentage`; **keine dieser Spalten existiert**.
Das Feld bleibt dauerhaft leer. Die Stufe steht in `tier` (1–4), nicht in
`points`.

**Zu tun:** Beide Abfragen auf die echten Spaltennamen aus § 2.3 umstellen, mit
benannter Spaltenliste. Das „defensive Raten" ersatzlos entfernen — es
verdeckt Fehler, statt sie zu zeigen.

### 3.5 🟡 Ein reales Backend-Feature ohne Oberfläche: Gamification

`src/lib/loyalty.ts` behauptet im Kommentar:

> „Es gibt in der Datenbank KEINE Stufen wie Bronze/Silber/Gold/Platin/Lifetime."

Das ist sachlich falsch. `my_gamification_status()` liefert Stufe, Bezeichnung,
Grund- und Gesamtrabatt, die nächste Stufe mit Schwelle, Kaufanzahl,
Lebenszeitumsatz sowie Abzeichen und Aufgaben (§ 2.5). Die Flutter-App nutzt
das bereits.

**Zu tun:** Kommentar korrigieren und die Stufenanzeige bauen — aktuelle Stufe,
Fortschritt zur nächsten, Abzeichen, offene Aufgaben. Alle Werte aus der RPC,
keine erfundenen Stufennamen.

### 3.6 🔴 Die Rollenprüfung ist wirkungslos

`src/lib/admin-access.server.ts` vergleicht das Ergebnis von `app_role()` mit
dem String `"admin"`. Der Enum `app.role_key` kennt aber nur
`system_admin`, `shareholder`, `employee`, `customer` — **`admin` gibt es
nicht**. `hasAdminRoleInDatabase()` liefert deshalb *immer* `false`; der Zugang
hängt allein an der Umgebungsvariablen `ADMIN_EMAILS`.

Die Richtung ist sicher (im Zweifel gesperrt), die Funktion aber defekt: Ein
echter `system_admin` kommt nicht hinein.

**Zu tun:** Gegen `system_admin` prüfen, wahlweise zusätzlich `shareholder`.
Der Aufruf selbst ist korrekt — `app_role` hat einen Default, der leere Body
funktioniert.

### 3.7 🟡 Bewertungen

Falls Bewertungen gelesen werden: `product_rating_summary` für Durchschnitt und
Anzahl, `rate_product()` zum Schreiben. Direkt aus `product_ratings` zu lesen
liefert seit S-4 nur noch die eigenen Zeilen.

### 3.8 🟡 Interne Werkzeuge in der Verbraucher-App

`/email-vorschau`, `/belegmuster`, `/zugriffe` liegen in der Kunden-App. Sie
sind serverseitig geschützt, gehören informationsarchitektonisch aber nicht
dorthin. Nicht löschen — aber aus jeder Navigation entfernen, die ein Kunde
sieht, und in der Route-Beschreibung als intern kennzeichnen.

### 3.9 🟡 Abo-Abschluss: der serverseitige Korb

Seit S-6 kann `choose_subscription_plan` den Abschluss ablehnen, obwohl beide
Häkchen gesetzt sind — nämlich wenn das gespeicherte Geburtsdatum ein
minderjähriges Konto ausweist. Heute landet das in der allgemeinen
Fehleranzeige.

**Zu tun:** Diesen Fall erkennen und in eigener Sprache beantworten: dass ein
kostenpflichtiges Abo Volljährigkeit voraussetzt oder die Zustimmung der
gesetzlichen Vertreter, und wie man weiterkommt. Die beiden Häkchen bleiben —
sie sind der Einwilligungsnachweis, nicht die Prüfung.

---

## 4. Was neu zu bauen ist

### 4.1 Auskunft nach Art. 15 DSGVO

`export_my_data()` liefert ein JSON-Objekt mit **38 Bereichen** — von `profil`,
`kaeufe`, `rechnungen` über `einwilligungsverlauf` und `versandte_nachrichten`
bis `ifsg_belehrungen`. Dazu die Kopfangaben `erzeugt_am` und `hinweis`, die
**keine** Datenbereiche sind.

Es gibt dafür heute keinerlei Oberfläche. Die Flutter-App hat sie bereits;
`apps/mobile/lib/features/customer/presentation/screens/data_export_screen.dart`
im Backend-Repository ist die inhaltliche Vorlage.

**Anforderungen:**

* Erreichbar aus dem Profil, nicht versteckt.
* Jeder Bereich bekommt einen **deutschen** Namen. Ein Bereich, den die
  Oberfläche nicht kennt, wird **roh angezeigt**, nie stillschweigend
  weggelassen — sonst wäre die Auskunft unvollständig, ohne dass es jemand
  merkt.
* Leere Bereiche heißen „nichts gespeichert", **nie** „0 Einträge". Eine Null
  liest sich wie ein Messwert.
* Listen werden gezählt („3 Einträge"), Objekte als „vorhanden", Wahrheitswerte
  als „ja"/„nein".
* Herunterladen als JSON-Datei muss möglich sein.
* Fehler ohne Fehlercode erklären. Bei fehlender Anmeldung: „Du musst
  angemeldet sein." Sonst ein Satz, der klarmacht, dass **keine Daten berührt**
  wurden.

### 4.2 Löschung des Kontos

`request_account_deletion(p_reason text)` stellt den Antrag. Die Ausführung
macht ein Systemadministrator — das Frontend führt **nicht** aus.

**Anforderungen:**

* Erreichbar aus dem Profil, deutlich getrennt von „Abo kündigen“ (das ist
  etwas anderes und liegt auf `/kuendigung`).
* Vor dem Absenden ehrlich erklären, was passiert: Der Zugang wird gesperrt.
  Name, E-Mail, Telefon, Geburtsdatum und Rechnungsanschrift werden entfernt
  oder ersetzt. **Kaufbelege, Rechnungen und Zahlungen bleiben acht Jahre
  erhalten** — dazu ist das Unternehmen gesetzlich verpflichtet (§ 147 AO);
  sie werden für alle anderen Zwecke gesperrt und nach Fristablauf entfernt.
  Werbung hört sofort auf; Vertrags- und Rechtsnachrichten können weiter
  zugestellt werden.
* Grund optional, nicht erzwungen.
* Nach dem Absenden den Zustand zeigen: „Antrag liegt vor" mit Datum. Kein
  zweiter Antrag, solange einer offen ist.
* Keine Angstsprache, keine Dark Patterns. Kein vorausgewählter „Doch nicht
  löschen"-Knopf, der größer ist als der andere.

### 4.3 Benachrichtigungen

`my_notifications(p_limit)` und `my_notifications_unread_count()` existieren,
haben aber keine Oberfläche. Eine schlichte Liste im Profil plus ein Zähler
genügt.

---

## 5. Qualität — drei Skills, die für diese Arbeit gelten

Im Workspace liegt bisher nur `boerdesnack24-design`. Drei weitere werden mit
diesem Auftrag bereitgestellt:

| Skill | Wofür er hier gilt |
|---|---|
| `impeccable` | Der Handwerksboden. Diese App ist im **Operate**-Modus: Der Besucher erledigt eine Aufgabe. Scanbarkeit, Verlässlichkeit und die echte Nutzungssituation stehen über Ausdruck. Für die neuen Flächen gilt zusätzlich `harden`: Fehlerzustände, Leerzustände, Randfälle. |
| `frontend-taste` | Anti-Slop-Ebene. Gegen generische KI-Optik, für Layout-Varianz und maßvolle Bewegung. |
| `humanizer` | Für **jeden** sichtbaren Text. Die neuen Flächen sind Rechtstexte in Alltagssprache — dort ist aufgeblasene Sprache besonders schädlich. |

Wende sie zusätzlich zu `boerdesnack24-design` an, nicht statt seiner.

### 5.1 Einheitliches Design über alle drei Oberflächen

Bördesnack24 hat drei Oberflächen, die dieselbe Marke in drei Dialekten
aufschreiben: die Gesellschafter-App (Flutter), diese Kunden-App und das
Partner-Portal. Der verbindliche Vertrag steht in
**`docs/DESIGN-SYSTEM-EINHEITLICH.md`** im Backend-Repository — lies ihn,
bevor du eine Farbe, einen Radius oder eine Bewegungsdauer anfasst.

**Diese App ist der Maßstab.** Ihre Tokens, ihre Typo-Skala, ihre
Bewegungskurve und ihre selbst ausgelieferten Schriften sind die Fassung, an
der die beiden anderen sich ausrichten. Ändere sie deshalb nur dort, wo dieser
Auftrag es ausdrücklich verlangt:

1. `--navy` trägt Ink `#202321` — der Name behauptet das Gegenteil seines
   Werts. Umbenennen in `--ink`, `--navy: var(--ink)` als Verweis stehen
   lassen, damit nichts auf einen Schlag bricht.
2. `--gradient-navy` und `--gradient-gold` sind keine Verläufe
   (`linear-gradient(#202321, #202321)`). Zu Flächen auflösen.
3. `--gold-ink` → `--gold-on-light`, `--success-ink` → `--success-on-light`
   (alte Namen als Verweis). Diese Rollennamen gelten künftig in allen drei
   Oberflächen; erst dadurch kann eine Komponente von einem Projekt ins
   andere wandern.
4. `warning` und `info` fehlen hier ganz, die beiden anderen Oberflächen
   haben sie. Ergänzen: Fläche `#E8A206` / Text auf Hell `#8A6100`;
   Info `#0066CC`.

**Zwei Farbregeln, die dabei nicht verletzt werden dürfen:** Gold trägt nur
auf Ink — als Text auf Cream gilt `#8A6A00`. Und eine goldene Fläche pro
Bildschirm; zwei heben sich gegenseitig auf.

### 5.2 Der Unternehmensbereich hat ein anderes Register

`/app/unternehmen/*` gehört zur selben App, aber nicht zur selben Lautstärke.
Der Privatkundenbereich darf warm sein: große Bilder, animierte Zahlen, Gold
als Fläche. Der Unternehmensbereich ist Zahlenarbeit — ruhiger, dichter,
tabellarisch, Beträge grundsätzlich mit Tabellenziffern (`type-num`), wenig
Bewegung.

Gleiche Farben, gleiche Schriften, gleiche Radien, gleiche Kurve — andere
Betonung. Ein Firmenkunde will Vertragsstatus und Zahlen in wenigen Blicken,
keine Produktinszenierung.

**Bewegung allgemein:** Die App hat bereits reichlich Animation. Für die neuen
Flächen aus § 4 gilt Zurückhaltung — eine Datenauskunft und eine Kontolöschung
sind keine Orte für Konfetti.

---

## 6. Was ausdrücklich **nicht** zu tun ist

* Keine Datenbankänderungen, keine Migrationen, keine neuen Tabellen, kein
  „Enable Database". Die Datenbank ist extern und wird über den
  Supabase-Connector angebunden.
* Keine Edge Function anlegen oder ändern, ohne es im Bericht zu benennen.
* Kein Feature aus dem ursprünglichen Prompt nachbauen, für das es keine
  Datengrundlage gibt — insbesondere keine Live-Automatenzustände, keine
  Ausverkauft-Anzeige, keine Entfernungsberechnung ohne Koordinaten.
* Den Demomodus nicht anfassen. Er ist sauber gekennzeichnet und soll es
  bleiben.
* Keine Preisaussage, die nicht aus der Datenbank stammt.

---

## 7. Wie du den Abschluss belegst

Kein „umgesetzt" ohne Nachweis. Liefere im Abschlussbericht je Punkt:

1. **Was du geändert hast** — Datei und Stelle.
2. **Womit du es geprüft hast** — welche Abfrage, welches Ergebnis. Für die
   Rabattfrage etwa: was ein Konto **ohne** Abo im Preis sieht, und was eines
   **mit** Abo sieht. Beide Werte nennen.
3. **Was du nicht umsetzen konntest** — mit Grund. Das ist keine Schwäche; eine
   verschwiegene Lücke wäre eine.

Prüfe insbesondere:

* Ein `select("*")` auf `products` bleibt nirgends stehen.
* Der Einlösecode eines persönlichen Angebots erscheint tatsächlich in der
  Oberfläche.
* Die Auskunft nach Art. 15 zeigt alle 38 Bereiche, auch die, für die du keinen
  deutschen Namen vergeben hast.
* Kein erfundener Automat und kein erfundener Bon ist im angemeldeten Zustand
  mehr sichtbar.

---

## 8. Projekt B — „Bördesnack24 Partner Portal": zwei Korrekturen am Auftrag

Nicht Gegenstand dieses Auftrags, aber im selben Abgleich aufgefallen und
festzuhalten, damit es niemand baut:

Der ursprüngliche Projektauftrag nannte `business_update` (Stammdaten pflegen)
und `business_location_set` (Standorte pflegen) als Selbstbedienung für
Firmenkunden. **Beides ist falsch.** Aus der Produktionsdatenbank:

```
business_update       → is_admin() ODER auth_has_permission('businesses.manage')
business_location_set → is_admin() ODER auth_has_permission('businesses.manage')
```

Beide prüfen **nicht** auf Firmenmitgliedschaft. Ein Firmen-Admin bekommt
`42501`. Wird dafür eine Oberfläche gebaut, ist sie für jeden Firmenkunden tot.
Stammdaten- und Standortpflege sind internes Bördesnack24-Tooling.

Tatsächlich mitgliedschaftsgebunden und damit für das Portal geeignet:

```
my_businesses, my_advertising_contracts, my_advertising_campaigns   is_business_member
business_dashboard, business_statement, business_locations_list     is_business_member(…,'admin')
business_budget_set, business_invite, business_member_set           is_business_member(…,'admin')
advertising_campaign_report                                         is_business_member
advertising_creative_upload                                         is_business_member(…,'admin')
```

Nur intern, kein Firmen-UI: `business_update`, `business_location_set`,
`business_invoice_request`, `advertising_campaign_status`.
