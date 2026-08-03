# Loveable-Web: Stand und vorbereitete Arbeitspakete

> **Rolle geändert am 02.08.2026 (ADR 0005).** Loveable ist nicht mehr nur
> das öffentliche Kunden-Web neben einer nativen App — es wird die
> Plattform. Die Flutter-App wird abgelöst, der interne Bereich kommt als
> **eigene** Loveable-App dazu. Dieses Dokument betrifft weiterhin nur die
> Kunden-App; sie ist zuerst dran.

## Demo-Zugänge

Alle drei Konten sind bestätigt und einsatzbereit. Passwort für alle:
`Boerde-Demo-2026!`

| Konto | Rolle | Wofür |
|---|---|---|
| `demo-kunde@boerdesnack24.app` | customer | Kundenbereich der Web-App |
| `demo-gs@boerdesnack24.app` | shareholder | Verwaltung, Finanzen |
| `demo-admin@boerdesnack24.app` | system_admin | alles |

Die Passwörter wurden am 02.08.2026 neu gesetzt, weil sie niemandem mehr
bekannt waren. Vor dem Live-Gang gehören sie geändert oder die Konten
gelöscht — sie stehen hier im Klartext im Repository.


Stand: 02.08.2026 · Projekt `d5033021-6dce-4044-8bf6-bb50d80aa8ff`
(TanStack Start), Vorschau:
`https://id-preview--d5033021-6dce-4044-8bf6-bb50d80aa8ff.lovable.app`

Loveable-Nachrichten kosten Credits, und jede Rückfrage kostet noch einmal.
Der Agent kennt unser Schema nicht — ohne Vorlage rät er Tabellen- und
Spaltennamen zusammen, und die Korrekturschleifen fressen mehr als die
eigentliche Arbeit. Dieses Dokument hält deshalb fest, was er wissen muss,
bevor die erste Nachricht rausgeht.

## Fortschritt

| Schritt | Status |
|---|---|
| Landing: alter Claim und erfundene Spendensumme raus | ✅ |
| A0 · RLS-/Auth-Audit vor der Anbindung | ✅ ADR 0004 |
| A1 · Supabase-Client + Anmeldung | ✅ Commit `4104fc22`, geprüft |
| A1b · Registrierung Privat/Unternehmer | ✅ 02.08.2026, geprüft |
| A2a · Produkte auf echte Daten | ✅ Commit `8ecbad36`, 10/10 Prüfpunkte |
| A2b · Abo-Anzeige/-Kauf auf echte Daten | ✅ 6/6 Prüfpunkte |
| A3 · Preise, Jahresabo, zwei Nachbesserungen | ✅ inhaltlich, 4/4 Prüfpunkte |
| **A5 · Spendenprojekte auf echte Daten** | ❌ **zuerst senden** — § 5 UWG, Text liegt bereit |
| A4 · Kontraste (WCAG 1.4.3 / BFSG) | ✅ 5/5 Prüfpunkte, hell/dunkel korrekt unterschieden |
| A6 · Bonus/Treue auf echte Daten | 📝 Text fertig, versandbereit |
| A7 · Belege + Benachrichtigungen | 📝 Text fertig, versandbereit |
| A8 · Freunde-werben-Programm | 📝 Text fertig, versandbereit |
| A9 · Automatenliste | 📝 Text fertig — **blockiert**, Stammdaten fehlen |

Alle vier Texte stehen wortgleich in `LOVEABLE_ANWEISUNGEN.md`, jeweils
mit den echten Feldnamen (aus den RPCs abgerufen, nicht vermutet) und
einer Prüfliste. Sie müssen nur noch abgeschickt werden.

Reihenfolge bewusst **A5 vor A4**: Erfundene gemeinnützige Organisationen
mit erfundenen Spendenständen wiegen schwerer als ein Kontrastproblem.
(Tatsächlich lief A4 zuerst — A5 hängt an der echten Projektliste.)

### Selbst verursacht: der Demozugang läuft leer

Die Web-App hat einen Demozugang ohne Anmeldung (`enterDemo()` in
`use-auth.tsx`, Flag im localStorage). Das Banner verspricht: „Du siehst
die App mit Beispieldaten."

Seit A2a stimmt das nicht mehr. Produkte und Bestand kommen aus Supabase,
und für `anon` sind beide Tabellen gesperrt — nachgemessen: **0 Zeilen**.
Wer den Demozugang nutzt, sieht einen leeren Laden.

Zwei Wege:

1. **Produktkatalog für `anon` freigeben.** Ein Sortiment ist kein
   Geheimnis, die Preise stehen ohnehin auf der Landing Page, und es gibt
   keinen Personenbezug. Nebeneffekt: Die Marketingseite könnte echte
   Produkte zeigen, statt sie zu beschreiben.
2. **Demozugang entfernen**, solange er nichts zeigen kann.

Empfehlung: Weg 1, aber als bewusste Entscheidung — es ist eine
Lockerung der Leserechte und gehört benannt, nicht nebenbei gemacht.

Der offene `status`-Punkt aus A2a ist mit A2b erledigt.

**Zwei Funde aus A2b**, in A3 mitgegeben:

1. **Die Kündigungsseite verwarf die Antwort der Edge Function.** Diese
   liefert `received_at` **und `cancel_at`**; die Seite zeigte stattdessen
   `new Date()` aus dem Browser und das Vertragsende gar nicht. Der Kunde
   erfuhr also nicht, wann sein Abo endet — genau das gehört nach
   § 312k Abs. 2 S. 3 BGB in die Zugangsbestätigung. Ein Zeitstempel aus
   der Browser-Uhr ist als Nachweis zudem wertlos.
2. **Auf den Abo-Karten stand kein Preis mehr.** Der Mock hatte welche,
   die echten Daten brachten keine mit — weil es dafür keine lesbare
   Quelle gab (siehe Migration 0080). § 312j Abs. 2 BGB verlangt den Preis
   **unmittelbar vor** dem Bestellknopf.

Beides ist die typische Folge eines Datentauschs: was der Mock erfunden
hat, fällt weg, und ob dabei eine Pflichtangabe mit verschwindet, sieht
man nur, wenn man gezielt danach schaut.

Die Anweisungstexte für A2a, A2b und A3 stehen wortgleich versandfertig in
`LOVEABLE_ANWEISUNGEN.md`, jeweils mit Prüfliste für das anschließende
`get_diff`.

## Was der Agent über die Datenbank wissen muss

### Preise — die häufigste Fehlerquelle

`products.list_price_net` ist **netto**, `products.tax_rate` steht in
**Prozent** (19.0 / 7.0), nicht als Faktor. Der Anzeigepreis ist:

```
brutto = list_price_net * (1 + tax_rate / 100)
```

Gegenprobe an echten Zeilen: Arizona Eistee 1,8487 € netto bei 19 % ergibt
2,20 €, BiFi XXL 1,8692 € bei 7 % ergibt 2,00 €. Die Werte landen sauber
auf 10-Cent-Stufen — das ist das Automaten-Preisraster aus
`Pricing.salePriceGross`. Wer versehentlich `* (1 + tax_rate)` rechnet,
bekommt 36,97 € statt 2,20 € und merkt es vielleicht nicht sofort.

Der App-Preis für Abonnenten liegt 5 % darunter, kaufmännisch auf den Cent
gerundet (`Pricing.appPriceGross`). Der Status-Rabatt kommt obendrauf, ist
aber im Web erst nach A2b Thema.

### Mock gegen Wirklichkeit

`src/lib/data.ts` passt in fast keinem Feld:

| Mock (`Product`) | Wirklichkeit |
|---|---|
| `price` | `list_price_net` (netto! siehe oben) |
| `kcal` | `energy_kcal` |
| `allergene` (Text) | `allergens` (Array) |
| `verfuegbar` | existiert nicht — kommt aus `inventory.quantity > 0` je Automat |
| `rating` | eigene Tabellen `product_ratings` / `product_rating_summary` |
| `image` (Import) | `image_url` (Text) |
| `badges` | existiert nicht |

| Mock (`Machine`) | Wirklichkeit |
|---|---|
| `ort` | `location_name`, `city` |
| `distanz` | existiert nicht — aus `lat`/`lng` gegen die Nutzerposition rechnen |
| `beliebt`, `tags` | existieren nicht |
| `status` | `machines.status`, andere Werte als im Mock |

### Kategorien

Der Mock nutzt vier Kategorien, die es so nicht gibt. Echt sind:

* Getränke / Kaltgetränke (12), Getränke / Energy Drinks (7),
  Getränke / Heißgetränke (7)
* Süßwaren (13), Eis (20), Snacks (3)

Also **zwei Ebenen**: `category` und `subcategory`. Insgesamt 62 aktive
Produkte, 94 Inventory-Zeilen (85 mit Bestand).

### Wer darf was lesen

RLS ist rollenbasiert, nicht client-spezifisch (geprüft in ADR 0004). Für
`authenticated` lesbar: `products`, `machines`, `inventory`, `offers`,
`personal_offers` (nur eigene), `customer_subscriptions` (nur eigene),
`purchases`/`purchase_items` (nur eigene), `donation_causes`, `badges`,
`challenges`, `profiles`/`customers` (nur eigene Zeile).

Für `anon` ist seit Migration 0075 **nichts** davon per RPC erreichbar. Die
Web-App muss also angemeldet sein, bevor sie Daten zieht — deshalb steht A1
vor A2.

### Drei Felder sind leer — nachgemessen, nicht vermutet

Beim Vorbereiten von A2a stellte sich heraus, dass die echten Daten an
drei Stellen **dünner** sind als der Mock. Das ist kein Fehler, aber es
ändert, was A2a bauen darf:

| Feld | Stand | Folge für die Web-App |
|---|---|---|
| `products.image_url` | **0 von 62** gefüllt | Kein `<img>` ohne Fallback. Platzhalter wie in `product_image.dart`: Flächenfarbe, Warenkorb-Icon bei 35 % Deckkraft, Anfangsbuchstabe des Produktnamens. |
| `product_ratings` | **0 Zeilen** | Der Bewertungsblock entfällt ganz. Keine „0,0 ★", keine leeren Sterne — und erst recht nicht die erfundenen Mock-Werte (§ 5 UWG). |
| `products.allergens` | überall leer | Zeile nur bei nicht-leerem Array rendern. |

Der Mock sieht also besser aus als die Wirklichkeit. Wer das beim
Umstellen nicht einplant, baut eine Seite, die nach dem Datentausch
schlechter wirkt als vorher — und korrigiert dann in die falsche
Richtung.

Nachgemessen am 02.08.2026, alle Zahlen bestätigt: 62 aktive Produkte,
davon **0 mit Bild**, **0 mit Allergenen**; `product_ratings` **0 Zeilen**;
94 Inventory-Zeilen, 85 mit Bestand; 4 Automaten.

Dabei kam ein Detail dazu: `subcategory` ist bei **Eis, Snacks und
Süßwaren `NULL`** — die zweite Ebene gibt es nur unter „Getränke". Eine
Oberfläche, die stur zweistufig filtert, erzeugt dort eine leere Gruppe
oder zeigt „null".

Weitere geprüfte Eckdaten: `products.status` kennt real nur `active`,
`serve_temp` die Werte `cold`, `hot`, `neutral`.
`product_rating_summary` ist eine View mit `security_invoker=true` —
RLS greift also, sie ist kein Umweg an den Policies vorbei.

## Blocker, der nicht an Credits hängt

**Die Automaten haben keine echten Stammdaten.** In der Datenbank stehen:

```
Automat 1 — Standort 1 (ANPASSEN), Sülzetal OT Osterweddingen
Automat 2 — Standort 2 (ANPASSEN), Sülzetal OT Osterweddingen
Automat 3 — Standort 3 (ANPASSEN), Sülzetal OT Osterweddingen
Heißgetränkeautomat — Standort Heißgetränke (ANPASSEN),
```

Die Loveable-App zeigt derzeit erfundene, aber plausibel klingende Namen
(„Automat Rewe Irxleben", „Magdeburg Nord"). Sie durch „Standort 1
(ANPASSEN)" zu ersetzen, tauscht eine Erfindung gegen einen Platzhalter —
für eine Kundenseite ist das keine Verbesserung.

**Vor A2a bitte die echten Standorte, Adressen und Koordinaten
eintragen.** Solange das offen ist, sollte A2a auf die Produkte begrenzt
bleiben; die Automatenliste kommt danach.

## Vorbereitete Arbeitspakete

Reihenfolge einhalten — A2 ohne A1 hat keine Sitzung, an der die
RLS-Policies greifen könnten.

**A1 · Client und Anmeldung** — ✅ erledigt, Commit `4104fc22`.
Supabase-Client gegen `nnfsyuglkqycwenwxmuw` mit dem Publishable Key,
Route `/anmelden` (Anmelden, Registrieren, Passwort vergessen),
Auth-Provider mit `getSession` + `onAuthStateChange`, `/app` schützt sich,
Profil zeigt echte Nutzerdaten. Dazu zwei Altlasten in `__root.tsx`:
`og:description` trägt noch den abgelegten Claim, `lang` steht auf `en`.

**A2a · Produkte** Nur Produkte, keine Automaten (siehe Blocker oben).
Bruttopreis nach der Formel oben, zweistufige Kategorien, Verfügbarkeit
aus `inventory`, Allergene aus dem Array — und die drei leeren Felder
sauber abfangen. Volltext in `LOVEABLE_ANWEISUNGEN.md`.

**A2b · Abo** `customer_subscriptions` lesen, Wechsel über die bestehende
Edge Function `subscription-choose` (nicht direkt in die Tabelle
schreiben — dort hängen Preise, Lifetime-Sperre und das
Founders-Kontingent dran). Kündigung über `subscription-cancel`, die ohne
Login funktionieren muss (§ 312k BGB).

**A3 · Copy und Jahresabo** Jahresabo (9,99 €) sichtbar als beste Wahl
gegenüber 12 × 0,99 €, ohne die anderen Optionen zu verstecken. Erst
sinnvoll, wenn A2b echte Preise liefert.

## Was im Dashboard erledigt werden muss

Kommt nicht von hier aus, blockiert aber Teile der Web-App:

1. **Auth-Redirect-URL** der Loveable-Vorschau in Supabase eintragen
   (Authentication → URL Configuration). Ohne sie laufen Bestätigungs- und
   Passwort-Reset-Links ins Leere. Reine E-Mail/Passwort-Anmeldung geht auch
   ohne.
2. **Leaked Password Protection** einschalten (letzter offener
   Advisor-Punkt).
3. **Send-Email-Hook** aktivieren, wenn die Auth-Mails im Marken-Design
   kommen sollen — Ablauf in `EMAIL_TEMPLATES.md`.
