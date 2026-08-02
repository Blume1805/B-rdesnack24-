# Loveable-Web: Stand und vorbereitete Arbeitspakete

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
| A1 · Supabase-Client + Anmeldung | 🚧 wartet auf Credits |
| A2a · Produkte/Automaten auf echte Daten | ❌ |
| A2b · Abo-Anzeige/-Kauf auf echte Daten | ❌ |
| A3 · Marketing-Copy + Jahresabo hervorheben | ❌ |

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

**A1 · Client und Anmeldung** (Text liegt fertig vor, siehe Aufgabenliste)
Supabase-Client gegen `nnfsyuglkqycwenwxmuw` mit dem Publishable Key,
Route `/anmelden` (Anmelden, Registrieren, Passwort vergessen),
Auth-Provider mit `getSession` + `onAuthStateChange`, `/app` schützt sich,
Profil zeigt echte Nutzerdaten. Dazu zwei Altlasten in `__root.tsx`:
`og:description` trägt noch den abgelegten Claim, `lang` steht auf `en`.

**A2a · Produkte** Nur Produkte, keine Automaten (siehe Blocker oben).
Bruttopreis nach der Formel oben, zweistufige Kategorien, Verfügbarkeit
aus `inventory`, Allergene aus dem Array.

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
