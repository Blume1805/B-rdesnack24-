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

Aus der Produktionsdatenbank ausgelesen. Alles, was hier nicht steht, endet
für ein Kundenkonto mit `42501` oder liefert nachweislich nichts.

**Konto, Abo, Vorteile**
```
app_role(uid uuid DEFAULT auth.uid())      my_subscription()
my_subscription_benefits()                 my_store_subscription()
subscription_plans()                       lifetime_founders_status()
choose_subscription_plan(p_plan, p_withdrawal_consent, p_age_consent)
store_subscription_claim(p_store, p_store_ref)
my_permissions()                           my_customer_card()
export_my_data()                           request_account_deletion(p_reason)
```

**Katalog und Produkte**
```
catalog_facts()                            search_products(p_query, p_limit, p_category, p_subcategory)
product_detail(p_product_id)               product_availability(p_product_id)
top_products_by_category(p_category, p_limit)
rate_product(p_product_id, p_rating)
```

**Bonus, Angebote, Empfehlungen**
```
my_loyalty_status()                        my_gamification_status()
my_active_personal_offer()                 my_active_personal_offers()
ensure_my_special_offers()                 activate_personal_offer(p_offer_id)
deactivate_personal_offer(p_offer_id)      activate_offer(p_offer_id)
deactivate_offer(p_offer_id)               my_login_week()
record_daily_login()                       my_referral_code()
my_referral_status()                       register_referral(p_code)
```

**Spenden**
```
donation_causes_list()                     donation_pool_summary()
donation_rate()                            purchase_donation(p_gross)
vote_donation_cause(p_cause_id)            suggest_donation_cause(p_title, p_description)
my_donation_summary()                      my_donations_by_purchase()
```

**Belege, Nachrichten, Einwilligungen**
```
my_receipts()                              my_invoices()
my_notifications(p_limit)                  my_notifications_unread_count()
mark_notification_read(p_key)              mark_all_notifications_read()
list_news(p_limit)
email_consent_state()                      email_consent_grant(p_topic, p_proof_text, p_source, p_user_agent)
email_consent_revoke(p_topic, p_source)    email_unsubscribe(p_token)
```

**Unternehmensbereich** (mitgliedschaftsgebunden, siehe § 8)
```
my_businesses()
business_dashboard(p_business uuid, p_von date DEFAULT null, p_bis date DEFAULT null)
business_statement(p_business uuid, p_jahr integer, p_monat integer)   -- keine Defaults!
business_locations_list(p_business uuid)
business_budget_set(p_business uuid, p_profile uuid DEFAULT null,
                    p_monatslimit numeric DEFAULT null, p_tageslimit numeric DEFAULT null,
                    p_zuschuss numeric DEFAULT 100,
                    p_gueltig_von date DEFAULT current_date, p_gueltig_bis date DEFAULT null)
business_invite(p_business uuid, p_email text,
                p_role app.business_role DEFAULT 'member', p_tage integer DEFAULT 14)
business_member_set(p_business uuid, p_profile uuid,
                    p_role app.business_role DEFAULT null,
                    p_status app.business_member_status DEFAULT null)
business_invitation_accept(p_token text)
my_advertising_contracts()                 my_advertising_campaigns()
advertising_campaign_report(p_campaign uuid)
advertising_creative_upload(p_campaign uuid, p_kind app.creative_kind, p_file_url text)
advertising_redirect_count(p_campaign)
```

**KI-Freigabe**
```
ki_funktion_freigegeben(p_key)
```
Diese Funktion sagt, ob eine KI-gestützte Funktion freigegeben ist. Frag sie
ab, bevor du eine solche Fläche zeigst — und richte die Kennzeichnung aus § 5a
danach aus.

> **Korrektur an einer früheren Fassung dieses Auftrags.** Die erste Liste
> hier war unvollständig: Sie entstand aus einer Namenssuche nach `my_…` und
> hat unter anderem `list_news`, den ganzen Spendenbereich, `search_products`,
> `subscription_plans` und die Einwilligungsverwaltung übersehen. Wenn dir
> eine Funktion fehlt, sag es — die Datenbank ist die Wahrheit, nicht diese
> Liste.

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

machines (Policy `machines_read`: deleted_at is null — für Kundenkonten lesbar):
  id, code, name, type, is_cooled, location_name, street, zip, city,
  lat, lng, nayax_terminal_id, status, image_url, access_hours, location_id,
  created_at, created_by, updated_at, updated_by, archived_at, deleted_at

  `machines` trägt eigene Adressfelder und ein `image_url` — die Automatenansicht
  braucht `locations` nicht zwingend. `nayax_terminal_id` ist eine interne
  Terminalkennung und gehört nicht in die Oberfläche, auch wenn sie lesbar ist.
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

### 5.3 Enterprise heißt nicht brav

Diese App soll wie ein fertiges Produkt wirken, nicht wie ein Prototyp mit
Markenfarben. Der Maßstab sind Apple Wallet, Revolut oder Too Good To Go —
nicht die nächstbeste Automaten-App.

Was das konkret ausschließt:

* **Keine gleichförmige Kartenwand.** Wenn jeder Abschnitt dieselbe
  abgerundete Karte mit Icon links und Pfeil rechts ist, sieht die App aus
  wie aus dem Baukasten. Wechsle die Bausteine: Trennlinien-Liste
  (`hairline-list`) für Aufzählungen, Vollflächen-Band (`band-ink`) als
  Kapitelmarke, Karte nur dort, wo etwas wirklich für sich steht.
* **Keine dekorativen Icons als Platzhalter.** Ein schwebendes Symbol neben
  einer Überschrift trägt nichts. Die App hat `animate-float-slow` bereits
  bewusst stillgelegt — halte es so.
* **Keine drei gleich lauten Elemente nebeneinander.** Pro Bildschirm eine
  Sache, die zuerst gelesen wird. Eine goldene Fläche, nicht drei.
* **Keine Fülltexte.** „Entdecke unsere vielfältige Auswahl an
  hochwertigen Produkten" sagt nichts. Wenn ein Satz gestrichen werden kann,
  ohne dass Information verloren geht, gehört er gestrichen. Dafür ist
  `humanizer` da.

Dichte ist kein Gegensatz zu Qualität: Der Unternehmensbereich darf ruhig und
tabellarisch sein und trotzdem sorgfältig gebaut — gleiche Ausrichtung,
Tabellenziffern, echte Leerzustände, klare Zustandsworte.

### 5.4 Die drei Qualitäts-Skills

`impeccable` (Modus **Operate** — der Besucher erledigt eine Aufgabe;
Scanbarkeit und Verlässlichkeit vor Ausdruck; für die neuen Flächen
zusätzlich `harden`: Fehler-, Leer- und Randzustände), `frontend-taste` gegen
generische Optik, `humanizer` für jeden sichtbaren Text.

---

## 5a. Kennzeichnungspflicht nach Art. 50 EU AI Act — Pflicht, nicht Kür

Das ist eine **stehende Regel des Projekts**, keine Anforderung dieses
Auftrags allein. Sie steht in `CLAUDE.md` des Backend-Repositories und gilt
für jede Fläche im Kundenbereich, deren Inhalt **algorithmisch, regelbasiert
oder KI-basiert erzeugt oder ausgewählt** wird.

Die Flutter-App setzt das bereits um (`core/widgets/design_system/ai_badge.dart`,
`features/customer/presentation/screens/ai_info_screen.dart`). **Im Web fehlt
es vollständig.** Das ist nachzuholen.

### Der Chip

Ein sichtbarer, antippbarer Chip neben dem Abschnitts-Titel — Gold auf Ink
mit Ink-Rand, Funkel-Symbol, Text `KI`, dahinter ein Info-Zeichen. In der
kompakten Form (`dense`) 10 px Schrift, sonst 11 px. Er öffnet die Info-Seite
aus § 5a.3. Er wird nicht weggeklickt und nicht in eine Fußzeile verschoben.

### 5a.0 Das KI-Register ist die Wahrheit

`public.ki_register` führt jede algorithmische Funktion mit ihrer rechtlichen
Bewertung. `ki_funktion_freigegeben(p_key)` liefert `aktiv AND ampel = 'gruen'`.
Stand 02.09.2026:

| key | Bezeichnung | KI-System? | Kennz. nötig | freigegeben |
|---|---|---|---|---|
| `challenge_rewards` | Punkte für erfüllte Aufgaben | nein | **ja** | ja |
| `customer_chatbot` | Automatischer Chat-Assistent | nein | nein | ja |
| `generate_daily_offers` | Tagesangebot nach Wetterlage | nein | nein | ja |
| `generate_weekly_offers` | Wochenangebot nach MHD | nein | nein | ja |
| `generate_personal_offer` | Individuelles Angebot aus der Kaufhistorie | nein | nein | ja |
| `grant_birthday_offer` | Geburtstagsgutschein | nein | nein | **nein** (gelb) |
| `loyalty_login_points` | Punkte für tägliches Einloggen | nein | nein | **nein** (gelb) |
| `produktbild_bearbeitung` | KI-Bearbeitung von Produktfotos | **ja** | **ja** | **nein** (gelb) |

**Das Gate wirkt auf die Fläche, nicht auf den Chip.** Liefert die Funktion
`false`, wird das Feature nicht gezeigt. Ein Chip an einer Fläche, die es nicht
gibt, wäre sinnlos.

**Die Spalte `kennzeichnung_noetig` ist das gesetzliche Minimum, nicht die
Hausregel.** `CLAUDE.md` verlangt den Chip überall dort, wo Inhalte
algorithmisch erzeugt oder ausgewählt werden — bewusst weiter als Art. 50. Das
Register hält die rechtliche Bewertung fest, die Hausregel die Anzeige. Kein
Widerspruch.

**Zwei Einträge stehen auf gelb, weil `kennzeichnung_umgesetzt = false` ist** —
genau das behebt dieser Auftrag. Das Umschalten auf grün macht Philipp.
`produktbild_bearbeitung` ist ein echtes KI-System und nicht freigegeben:
keine Produktbilder erzeugen oder bearbeiten.

Nimm die Schlüssel aus dem Register, nicht aus der Tabelle unten. Fehlt für
eine Fläche ein Eintrag, benenne das — erfinde keinen.

### 5a.1 Wo der Chip hingehört

| Fläche | Route | Warum |
|---|---|---|
| Persönliche Gutscheine | `/app/bonus/gutscheine` | `personal_offers` entsteht regelbasiert aus Kaufhistorie, Kategorie-Vorlieben und Punktestand |
| Angebote auf der Startseite | `/app` | dieselbe Quelle |
| „Empfohlene Produkte", „Beliebteste Snacks/Getränke" | `/app` | dynamisch gewählte Produktkombination |
| Bonusstufen, Abzeichen, Aufgaben | `/app/bonus` | `my_gamification_status` wählt Stufe, Abzeichen und Aufgaben regelbasiert |
| Tages-Login-Belohnung | Overlay | regelbasierte Vergabe |
| Werbe-Coupons mit Sponsorenplatzierung | wo sie erscheinen | fremde Kampagne, algorithmisch ausgespielt — zusätzlich zur Werbekennzeichnung |
| Geburtstags- und Jubiläumsgutschein | wo er erscheint | `grant_birthday_offer`, regelbasiert |

### 5a.2 Wo der Chip ausdrücklich **nicht** hingehört

**Der Chat-Assistent** (`src/components/chat-assistant.tsx`) trägt das Label
**„Automatischer Chat-Assistent"** — **nicht** „KI". Er ist ein regelbasierter
Frage-Antwort-Bot ohne generatives Modell und damit kein AI-System im Sinne
von Art. 3 EU AI Act. Ihn als KI zu kennzeichnen wäre eine falsche Angabe in
die andere Richtung.

Sollte später ein Sprachmodell dahinterkommen, gilt dasselbe Prinzip
umgekehrt: dann wird daraus die KI-Kennzeichnung.

Ebenfalls kein Chip: reine Datenanzeigen ohne Auswahl — Kontoauszug,
Rechnungsliste, Bestellhistorie, Produktdetailseite eines vom Nutzer selbst
gewählten Artikels.

### 5a.3 Die Info-Seite

Jeder Chip führt dorthin. Inhaltlich die Web-Entsprechung von
`AiInfoScreen`, mit diesen Abschnitten:

* **Was wird eingesetzt?** — ein regelbasierter Empfehlungs- und
  Angebotsgenerator; der Chat-Assistent als regelbasierter Bot ohne
  generatives Modell.
* **Wozu?** — bessere Sichtbarkeit passender Angebote. Vorschläge sind
  Empfehlungen, keine Zusagen.
* **Welche Daten fließen ein?** — Kaufhistorie, Kategorie-Vorlieben,
  Punktestand. Keine Weitergabe an Dritte zu Werbezwecken. Keine
  automatisierte Einzelentscheidung mit rechtlicher Wirkung im Sinne von
  Art. 22 DSGVO.
* **Widerspruch und Opt-out** — **es gibt heute keinen technischen Opt-out.**
  Nachgesehen: `consents.type` kennt nur `privacy, analytics, marketing, maps,
  terms`, und keine RPC trägt „opt" oder „personalis" im Namen. Die Seite nennt
  deshalb den Kontaktweg. Das ist eine Backend-Lücke und gehört als solche in
  den Abschlussbericht — keine Auslassung des Frontends.
* **Kennzeichnung im Kundenbereich** — dass dieser Chip überall dort steht,
  und dass der Chat-Assistent bewusst anders heißt.
* **Beschwerde** — Aufsichtsbehörde benennen (BfDI beziehungsweise für
  Sachsen-Anhalt die Landesbeauftragte für den Datenschutz).

**Die Regel, die dabei am leichtesten vergessen wird:** Kommt später eine
weitere algorithmisch erzeugte Fläche hinzu, wird sie **auch textlich** in
„Was wird eingesetzt?" ergänzt. Ein Chip ohne Eintrag auf der Info-Seite
macht die Seite unvollständig.

### 5a.4 Bilder

Jedes Bild, das **du** erzeugst, wird als erzeugt gekennzeichnet — sichtbar
an der Stelle, an der es steht, nicht nur in den Metadaten.

Für die vorhandenen Bilder (`hero-genuss.jpg`, `keyvisual.png`,
`produkt-*.jpg`, `charity-spenden-neu.png`,
`kunden-werben-kunden-neu.png`) sagen die Metadaten nichts über die Herkunft.
Kläre das nicht selbst — schreib in deinen Bericht, welche Bilder wo
verwendet werden, damit Philipp die Herkunft bestätigen kann.

Unabhängig vom AI Act gilt für Produktbilder eine schärfere Grenze: Ein
erzeugtes Bild darf nicht als Aufnahme des tatsächlichen Artikels erscheinen.
Weicht die Darstellung vom echten Produkt ab, ist das irreführende Werbung
nach § 5 UWG — unabhängig davon, ob ein KI-Hinweis daneben steht. Im Zweifel:
das erzeugte Bild als Stimmungsbild einsetzen, das echte Produktfoto für die
Produktseite.

## 5b. Bildplatzhalter — an jeder Stelle, an der ein Bild stehen kann

**Die Ausgangslage, gemessen:** Von 63 aktiven Produkten hat **kein einziges**
ein Bild (`products.image_url` ist überall leer). `personal_offers` und
`advertising_campaigns` sind noch leer, bekommen aber beide ein `image_url`.
Der Regelfall ist also nicht „Bild vorhanden", sondern „Bild fehlt" — und das
wird noch eine Weile so bleiben.

Ein Platzhalter ist damit kein Randfall, sondern der Normalzustand. Er muss
entsprechend gut sein.

### 5b.1 Was schon da ist und bleibt

`src/components/product-image.tsx` macht es richtig: Fläche in Flächenfarbe,
Warenkorb-Symbol bei 35 % Deckkraft, darüber der erste Buchstabe des
Produktnamens. `role="img"` mit `aria-label`, und ein `onError`, der auch bei
kaputtem Bild auf den Platzhalter zurückfällt. Die Flutter-App hat dieselbe
Lösung.

**Nimm dieses Muster als Vorlage** und zieh es zu einer allgemeinen Komponente
hoch, statt es je Fläche neu zu erfinden.

### 5b.2 Wo Platzhalter fehlen

| Fläche | Quelle | Platzhalter |
|---|---|---|
| Persönliche Gutscheine | `personal_offers.image_url` | Produktbild-Muster; ohne verknüpftes Produkt ein Gutschein-Symbol mit dem Titel des Angebots |
| Werbecoupons mit Sponsor | Kampagnenmotiv | neutrale Fläche mit dem Firmennamen. **Nie** ein erfundenes Logo |
| Spendenbereich | `donation_causes_list()` — **kein Bildfeld** | Es gibt kein Bild und darf keins geben: Ein Platzhalterlogo für eine reale gemeinnützige Organisation wäre eine Falschangabe über Dritte (§ 5 UWG). Die Karte trägt Name, Zweck, Ort und Website als Text |
| News | `list_news(p_limit)` | neutrale Fläche in Markenfarbe mit dem Datum; kein Symbolbild |
| Automaten und Standorte | `locations`, `machines` | Kartenausschnitt nur bei echten Koordinaten, sonst eine ruhige Fläche mit dem Ortsnamen |
| Abzeichen und Stufen | `my_gamification_status().badges` | gezeichnete Symbole aus einer Bibliothek, kein Emoji |
| Profilbild | keins in der Datenbank | Initialen auf Fläche, wie heute im Profil |

### 5b.3 Die Regeln für jeden Platzhalter

1. **Gleiches Seitenverhältnis wie das echte Bild.** Der Platzhalter reserviert
   den Platz, damit beim Nachladen nichts springt. Ein Layoutsprung ist
   messbar und zählt in der technischen Prüfung.
2. **Er sieht aus wie ein Platzhalter, nicht wie ein Foto.** Fläche, Symbol,
   Buchstabe oder Name — kein Stockfoto, kein erzeugtes Bild, das ein
   Produktfoto imitiert. Ein generisches Getränkefoto neben einem konkreten
   Artikel ist irreführende Werbung nach § 5 UWG, auch wenn es hübsch ist.
3. **Er trägt eine Bedeutung.** Der erste Buchstabe des Produktnamens ist
   besser als ein graues Rechteck, weil er die Karten unterscheidbar macht.
4. **Er ist für Screenreader ein Bild mit Namen** — `role="img"` und
   `aria-label` mit dem echten Namen, nicht „Platzhalter".
5. **Er fängt auch den Ladefehler.** Eine tote `image_url` fällt auf denselben
   Platzhalter zurück, nicht auf ein kaputtes Bildsymbol.
6. **Kein Skeleton als Dauerzustand.** Ein pulsierendes graues Feld heißt „wird
   geladen". Wenn nichts kommt, muss es zum Platzhalter werden, sonst wartet
   der Nutzer auf etwas, das nie erscheint.

### 5b.4 Die vier vorhandenen Produktbilder

`src/assets/produkt-drink.jpg`, `produkt-eis.jpg`, `produkt-kaffee.jpg`,
`produkt-suesswaren.jpg` sind Kategoriebilder. Sie dürfen als **Stimmungsbild
einer Kategorie** stehen — als Kopfbild eines Abschnitts, mit Bildunterschrift.
Sie dürfen **nicht** an der Stelle eines Produktbildes erscheinen, wo der
Nutzer sie für eine Aufnahme dieses Artikels halten könnte. Dort gehört der
Platzhalter hin.

## 5c. Das Projekt muss gemeinsam mit dem Backend auf GitHub wandern können

Frontend und Backend sollen als **ein Stand** auf GitHub liegen. Der Weg dahin
steht in `docs/GITHUB-MIGRATION.md` im Backend-Repository: Dieses Projekt
bekommt ein eigenes Repository, das Backend-Monorepo zieht es als `git subtree`
unter `apps/kunden-web/` ein. Die Verbindung richtet Philipp im Dashboard ein.

Deine Aufgabe ist, dass ein Auschecken **ohne Lovable** baut und prüfbar ist:

1. **Keine Zugangsdaten im Quelltext.** Der Supabase-Schlüssel im Browser ist
   ein *publishable key* und darf dort stehen — der Kommentar in
   `src/lib/supabase.ts` erklärt das richtig und verbietet den
   `service_role`-Schlüssel. Serverseitige Geheimnisse
   (`LOVABLE_API_KEY`, `RESEND_API_KEY`, `RESEND_FROM`, `ADMIN_EMAILS`) kommen
   aus `process.env`. **Das bleibt so.**
2. **`.env.example`** mit allen Variablennamen und leeren Werten.
3. **`README.md` an der Wurzel**: welche Supabase-Instanz
   (`nnfsyuglkqycwenwxmuw`), welche Bun-Version, wie man baut, wie man testet.
4. **`bun.lock` bleibt eingecheckt.**
5. **Prüf den Bau aus einem frischen Klon** — `bun install`, `bun run build`.
   Was fehlt, gehört ins README.
6. **Keine Historie umschreiben.** Kein `--force`, kein Rebase auf gepushte
   Commits, kein Squash. Lovable hängt daran und der Verlauf ginge verloren.
7. **Nenn im README, was mitwandert.** Der Mailversand läuft über
   `https://connector-gateway.lovable.dev/resend` und braucht einen
   `LOVABLE_API_KEY`. Wer die App außerhalb von Lovable betreibt, nimmt diese
   Abhängigkeit mit. Kein Fehler, aber es muss dokumentiert sein.

Das Backend-Repository ist derzeit **öffentlich**. Schreib nichts in dieses
Projekt, was das nicht verträgt.

## 5d. Tests — heute gibt es keine

`package.json` enthält weder Vitest noch Testing-Library noch Playwright, kein
`test`- und kein `typecheck`-Skript. Die Flutter-App hat 110 Tests, die
Datenbank 221 geprüfte Zusicherungen. Diese Oberfläche hat **null** — und sie
soll künftig die Datenauskunft nach Art. 15, die Kontolöschung und die
Preisberechnung tragen.

Das ist keine Stilfrage. Die Arbeitsregeln des Projekts verlangen für jede
Funktion einen Positiv-, einen Negativ- und einen Regressionstest, und eine
Funktion gilt nicht als fertig, solange sie ungetestet ist.

### Was einzurichten ist

Vitest plus Testing Library, dazu die Skripte `test` und `typecheck`. Halt es
schlank — kein Karussell an Werkzeugen, eine Zeile `bun run test` muss reichen.

### Was zuerst getestet gehört

Zieh die Logik aus den Komponenten heraus, damit sie ohne Rendern prüfbar ist.
Die Flutter-App macht das vor: `bereicheAusAuskunft()` und
`auskunftFehlertext()` sind dort freie Funktionen mit neun Tests.

| Was | Warum zuerst |
|---|---|
| Rabatt aus `my_subscription_benefits()` | Der heutige Fehler. **Zwei Tests: mit Abo 5 %, ohne Abo 0 %.** Ohne beide ist nichts bewiesen |
| Übersetzung der Art.-15-Auskunft | Jeder der 38 Bereiche bekommt einen deutschen Namen; ein unbekannter Bereich erscheint **roh** statt zu verschwinden; leer heißt „nichts gespeichert", nie „0 Einträge" |
| Fehlertexte | Kein Fehlercode erreicht den Nutzer; bei fehlender Anmeldung steht „angemeldet" im Text |
| Bildplatzhalter | Ohne `image_url` erscheint der Platzhalter; bei kaputter URL ebenfalls; `aria-label` trägt den echten Namen |
| KI-Kennzeichnung | Für jede der sieben Flächen aus § 5a.1 ein Test, dass der Chip da ist — und einer, dass er beim Chat-Assistenten **nicht** „KI" sagt |
| Preisformatierung | `list_price_net` ist netto, `tax_rate` steht in Prozent. Ein Test auf 19 % und einer auf 7 % |

### Die Regel dahinter

Ein Test, der nur den Erfolgsfall zeigt, ist kein Test. Zu jedem Positivtest
gehört die Gegenprobe: Was passiert **ohne** Abo, **ohne** Bild, **ohne**
Anmeldung, bei **leerer** Antwort. Und ein Test, der beim zweiten Lauf rot
wird, ohne dass sich etwas geändert hat, wird nicht gelesen, sondern
übergangen — also keine festen Zahlen, wo eine Veränderung gemeint ist.

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

## 6a. Was Philipp macht, nicht du

Damit es nicht zwischen den Stühlen liegt:

* **Standortstammdaten pflegen.** Die vier Standorte heißen „Standort 1
  (ANPASSEN)" bis „Standort Heißgetränke (ANPASSEN)", ohne Straße und ohne
  Koordinaten. Bis das gepflegt ist, bleibt die Automatenseite zwangsläufig
  dünn. Das ist richtig so — füll sie nicht auf.
* **Produktbilder einpflegen.** 63 Produkte, kein einziges Bild. Bis dahin
  trägt der Platzhalter aus § 5b.
* **Herkunft der vorhandenen Bilder bestätigen** — du listest sie nur auf.
* **Die GitHub-Repositories anlegen** (§ 5c).
* **Ob das BFSG gilt**, ist eine Rechtsfrage, keine technische. Du baust nach
  WCAG 2.1 AA, weil das die Qualitätsanforderung ist — unabhängig davon, ob
  eine gesetzliche Pflicht besteht.

Die Angleichung der Flutter-App an den Designvertrag macht ebenfalls nicht du,
sondern Claude Code im Backend-Repository.

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

## 8. Projekt B wird die Gesellschafter-App — was das für dich bedeutet

Die Zielarchitektur besteht aus zwei Anwendungen: dieser Kunden-App mit
Privat- **und** Unternehmensbereich, und der eigenständigen
Gesellschafter-App. Ein separates Portal für Firmenkunden gibt es nicht mehr
— **der Unternehmensbereich dieser App ist der einzige Zugang für
Firmenkunden.** Der eigene Auftrag dafür steht in
`docs/lovable/AUFTRAG-2026-09-GESELLSCHAFTER-APP.md`.

Für dich folgt daraus: `/app/unternehmen/*` ist kein Nebenschauplatz mehr,
sondern die produktive Oberfläche der Firmenkunden. Diese RPCs sind
mitgliedschaftsgebunden und gehören hierher:

```
my_businesses · business_dashboard · business_statement
business_locations_list · business_budget_set · business_invite
business_member_set · my_advertising_contracts · my_advertising_campaigns
advertising_campaign_report · advertising_creative_upload
```

Heute deckt die App davon nur `index`, `kontoauszug` und `vertraege` ab. Es
fehlen die Kampagnenansicht samt anonymem Abschlussbericht, der
Material-Upload, die Standortliste, die Budgets und die
Mitgliederverwaltung. Bau sie im ruhigen, tabellarischen Register aus § 5.2.

**Zwei Funktionen gehören ausdrücklich NICHT hierher.** Der ursprüngliche
Auftrag des Partner-Portals hatte sie als Selbstbedienung vorgesehen; das war
ein Irrtum. Aus der Produktionsdatenbank:

```
business_update       -> is_admin() ODER auth_has_permission('businesses.manage')
business_location_set -> is_admin() ODER auth_has_permission('businesses.manage')
```

Beide prüfen **nicht** auf Firmenmitgliedschaft. Ein Firmen-Admin bekommt
`42501`. Baust du dafür eine Oberfläche, ist sie für jeden Firmenkunden tot.
Firmenstammdaten und Standorte pflegt die Gesellschafter-App.

Ebenfalls nur intern: `business_invoice_request`,
`advertising_campaign_status`, `advertising_creative_review`.

Will ein Firmenkunde seine Stammdaten geändert haben, ist der richtige Weg
ein Hinweis mit Kontaktmöglichkeit — kein Formular, das beim Absenden
scheitert.
