# Fertige Anweisungstexte für den Loveable-Agenten

Stand: 02.08.2026 · Projekt `d5033021-6dce-4044-8bf6-bb50d80aa8ff`

Jede Nachricht an den Loveable-Agenten kostet Credits, jede Rückfrage
kostet noch einmal. Die Texte unten sind deshalb so geschrieben, dass der
Agent nichts raten muss: Tabellen- und Spaltennamen ausgeschrieben,
Rechenwege vorgegeben, Fallverhalten bei leeren Daten benannt.

**So wird gearbeitet:** Text unverändert per `send_message` schicken,
danach `get_diff` lesen und jede geforderte Eigenschaft einzeln
nachprüfen — nicht auf die Erfolgsmeldung des Agenten verlassen.

Reihenfolge einhalten. A2 ohne A1 hat keine Sitzung, an der die
RLS-Policies greifen könnten; A3 ohne A2b hätte keine echten Preise.

---

## A2a · Produkte auf echte Daten (bereit zum Senden)

> Ersetze die Mock-Produkte aus `src/lib/data.ts` durch echte Daten aus
> Supabase. Nur Produkte — die Automaten (`machines`) bleiben vorerst auf
> Mock, dazu unten mehr.
>
> **Abfrage**
>
> ```ts
> const { data } = await supabase
>   .from("products")
>   .select("id, name, category, subcategory, list_price_net, tax_rate, " +
>           "serve_temp, energy_kcal, fat_g, saturated_fat_g, carbs_g, " +
>           "sugars_g, protein_g, salt_g, allergens, image_url, status")
>   .is("deleted_at", null)
>   .eq("status", "active")
>   .order("name");
> ```
>
> Die Tabelle ist per RLS für angemeldete Nutzer lesbar
> (`products_read`, `qual: deleted_at IS NULL`). Für `anon` ist sie
> **nicht** lesbar — die Produktseite muss also hinter der Anmeldung
> liegen oder bei fehlender Sitzung auf `/anmelden` verweisen.
>
> **Preis — bitte genau so rechnen**
>
> `list_price_net` ist **netto**. `tax_rate` steht in **Prozent**
> (`19.0` / `7.0`), nicht als Faktor:
>
> ```ts
> const brutto = listPriceNet * (1 + taxRate / 100);
> ```
>
> Gegenprobe: 1,8487 € bei 19 % ergibt 2,20 €; 1,8692 € bei 7 % ergibt
> 2,00 €. Wer `* (1 + tax_rate)` rechnet, bekommt 36,97 € statt 2,20 €.
> Anzeige mit `Intl.NumberFormat("de-DE", {style:"currency",
> currency:"EUR"})`.
>
> **Kategorien sind zweistufig.** `category` und `subcategory`. Echt
> vorhanden sind: Getränke/Kaltgetränke (12), Getränke/Energy Drinks (7),
> Getränke/Heißgetränke (7), Süßwaren (13), Eis (20), Snacks (3) — 62
> aktive Produkte. Die vier Mock-Kategorien gibt es nicht; der Filter muss
> aus den tatsächlich geladenen Daten gebaut werden, nicht aus einer
> fest verdrahteten Liste.
>
> **Verfügbarkeit** steht nicht am Produkt, sondern in `inventory`
> (`machine_id`, `product_id`, `quantity`). Solange die Automatenliste auf
> Mock steht, bitte über alle Automaten aggregieren:
>
> ```ts
> const { data } = await supabase.from("inventory").select("product_id, quantity");
> // verfügbar, wenn irgendwo quantity > 0
> ```
>
> 94 Bestandszeilen, davon 85 mit Bestand.
>
> **Drei Felder sind in der Datenbank noch leer — das ist Absicht dieses
> Hinweises, keine Fehlersuche wert:**
>
> 1. `image_url` ist bei **allen 62** Produkten `null`. Bitte **keinen**
>    `<img>` ohne Fallback bauen. Die native App löst das mit einem
>    Platzhalter: Kachel in Flächenfarbe, dezentes Warenkorb-Icon bei 35 %
>    Deckkraft, darüber der erste Buchstabe des Produktnamens in fetter
>    Schrift. Bitte dasselbe Muster im Loveable-Design nachbauen, damit
>    beide Clients gleich aussehen. Sobald `image_url` gepflegt ist, soll
>    das echte Bild den Platzhalter ohne weitere Änderung ersetzen —
>    also: Bild wenn vorhanden, sonst Platzhalter, und auch bei
>    Ladefehler auf den Platzhalter zurückfallen.
> 2. `product_ratings` hat **0 Zeilen**, die Sicht
>    `product_rating_summary` liefert entsprechend nichts. Die
>    Mock-Sternebewertungen sind erfunden und müssen **ersatzlos
>    verschwinden** — bitte keine „0,0 ★" und keine leeren Sterne
>    anzeigen, sondern den Bewertungsblock weglassen, solange es keine
>    Bewertung gibt. Erfundene Bewertungen auf einer Verkaufsseite wären
>    irreführende Werbung nach § 5 UWG.
> 3. `allergens` ist ein Array und derzeit überall leer. Zeile nur
>    rendern, wenn das Array Einträge hat.
>
> **Weitere Mock-Reste, die dabei mit erledigt werden sollen:**
>
> * `src/routes/app.profil.tsx` zeigt einem angemeldeten Nutzer eine
>   erfundene Kaufhistorie (`receipts`). Das ist die unangenehmste Sorte
>   Mock, weil es wie eine echte Abrechnung aussieht. Bitte entweder
>   ausblenden oder klar als Beispiel kennzeichnen — so wie beim Profil
>   in A1 bereits gelöst.
> * `machines` bleibt auf Mock, aber bitte mit einem Kommentar im Code:
>   die echten Stammdaten heißen derzeit „Standort 1 (ANPASSEN)" bis
>   „Standort 3 (ANPASSEN)"; sobald sie gepflegt sind, wird umgestellt.
>
> **Sonst nichts ändern.** Kein Redesign — das bestehende Farbschema, die
> Reveal-/Motion-Komponenten und das Card-Lift-Muster bleiben, wie sie
> sind. Es geht ausschließlich darum, die Datenquelle zu tauschen.

### Prüfliste nach `get_diff` (A2a)

- [ ] Preisformel enthält `/ 100` — nicht `* (1 + tax_rate)`
- [ ] Kategorien werden aus den Daten abgeleitet, nicht hart kodiert
- [ ] `subcategory` wird berücksichtigt (zweite Ebene geht nicht verloren)
- [ ] **`subcategory` ist bei Eis, Snacks und Süßwaren `NULL`** — die zweite
      Ebene gibt es nur unter „Getränke". Kein „null" in der Oberfläche,
      keine leere Filtergruppe
- [ ] Verfügbarkeit kommt aus `inventory`, nicht aus einem Produktfeld
- [ ] Kein `<img>` ohne Platzhalter-Fallback, auch bei Ladefehler
- [ ] Kein Sterne-Block ohne Bewertungen, keine „0,0 ★"
- [ ] Allergenzeile nur bei nicht-leerem Array
- [ ] `src/lib/data.ts` enthält keine Produkt-Mocks mehr
- [ ] Kaufhistorie im Profil ist gekennzeichnet oder entfernt
- [ ] Bei fehlender Sitzung: Verweis auf `/anmelden` statt leerer Liste

---

## A2b · Abo-Anzeige und -Wechsel (bereit zum Senden, nach A2a)

> Zeige das echte Abo des angemeldeten Kunden und ermögliche den Wechsel.
>
> **Aktuelles Abo lesen.** `customer_subscriptions` ist ein
> **Verlaufsprotokoll**, keine Zustandstabelle — pro Wechsel entsteht eine
> neue Zeile. Das aktuelle Abo ist die Zeile mit dem höchsten `seq`:
>
> ```ts
> const { data } = await supabase
>   .from("customer_subscriptions")
>   .select("plan, price_cents, billing_label, chosen_at, previous_plan")
>   .order("seq", { ascending: false })
>   .limit(1)
>   .maybeSingle();
> ```
>
> RLS gibt nur die eigenen Zeilen frei. `plan` ist ein Enum mit den Werten
> `monthly`, `yearly`, `lifetime`. `price_cents` ist eine Ganzzahl in
> Cent. Kein Treffer heißt: kein Abo gewählt.
>
> **Wechsel — niemals direkt in die Tabelle schreiben.** Dahinter hängen
> Preisfindung, die Lifetime-Sperre und ein auf 20 Konten begrenztes
> Founders-Kontingent. Bitte ausschließlich die bestehende Edge Function
> aufrufen:
>
> ```ts
> const { data, error } = await supabase.functions.invoke("subscription-choose", {
>   body: { plan, withdrawal_consent: true, age_consent: true },
> });
> ```
>
> Beide Zustimmungen müssen **echte Nutzereingaben** sein, keine
> Voreinstellung im Code:
>
> * `age_consent` — Bestätigung der Volljährigkeit bzw. der Zustimmung
>   der gesetzlichen Vertreter (§§ 106 ff. BGB). Ohne sie antwortet die
>   Function mit 400 und einem fertigen deutschen Text; den bitte
>   unverändert anzeigen.
> * `withdrawal_consent` — Zustimmung zum sofortigen Beginn der Leistung
>   mit Kenntnis des Verlusts des Widerrufsrechts (§ 356 Abs. 5 BGB).
>
> Fehlermeldungen der Function kommen als `error`-Feld im JSON und sind
> bereits auf Deutsch formuliert (Lifetime-Sperre, Kontingent erschöpft,
> Doppelwahl). Bitte **wörtlich** durchreichen, nicht umformulieren.
>
> **Kündigung** läuft über `subscription-cancel` und muss **ohne
> Anmeldung** funktionieren — § 312k BGB verlangt eine Kündigungsmöglich-
> keit, die nicht hinter einem Login liegt. Also eine öffentliche Route
> (z. B. `/kuendigung`), erreichbar aus dem Footer:
>
> ```ts
> body: { email, customer_number, kind: "ordentlich" | "ausserordentlich", reason }
> ```
>
> Die Bestätigungsmail versendet die Function selbst; die Seite muss den
> Eingang zusätzlich auf dem Bildschirm bestätigen.
>
> Auch hier: kein Redesign, nur echte Daten im bestehenden Design.

### Prüfliste nach `get_diff` (A2b)

- [ ] Aktuelles Abo über `order("seq", desc).limit(1)`, nicht über ein Datum
- [ ] Kein direkter `insert`/`update` auf `customer_subscriptions`
- [ ] `age_consent` und `withdrawal_consent` sind Nutzereingaben, nicht `true` im Code
- [ ] Fehlertexte der Edge Function werden wörtlich angezeigt
- [ ] Kündigungsroute ist ohne Sitzung erreichbar und im Footer verlinkt
- [ ] `price_cents` wird durch 100 geteilt, bevor es angezeigt wird

---

## A3 · Marketing-Copy und Jahresabo (bereit zum Senden, nach A2b)

> Überarbeite die Verkaufstexte und stelle das Jahresabo sichtbar als
> beste Wahl dar.
>
> **Die Rechnung, auf der alles aufbaut:** Das Jahresabo kostet 9,99 € im
> Jahr, das Monatsabo 0,99 € im Monat — also 11,88 € im Jahr. Der
> Unterschied sind 1,89 €, ungefähr zwei geschenkte Monate. Diese Zahl
> gehört sichtbar an die Jahres-Karte, weil sie das Argument **ist**.
> Bitte die Werte nicht hart kodieren, sondern aus `price_cents` der
> jeweiligen Option ableiten — sonst laufen Anzeige und Abrechnung beim
> nächsten Preiswechsel auseinander.
>
> **Was ausdrücklich nicht gebaut werden soll:** kein Countdown, keine
> erfundene Verknappung („nur noch 3 Plätze"), keine vorausgewählte
> teurere Option, kein versteckter oder ausgegrauter Monatstarif, keine
> Bestätigungsbeschämung („Nein danke, ich zahle lieber mehr"). Alle drei
> Optionen bleiben gleichwertig anklickbar; das Jahresabo bekommt eine
> Empfehlungsmarkierung und die Ersparnis als Zahl — mehr nicht. Das ist
> keine Geschmacksfrage: Manipulative Gestaltung ist nach Art. 25 DSA
> untersagt, und eine Empfehlung, die auf einer nachrechenbaren Ersparnis
> beruht, überzeugt ohnehin länger.
>
> Das Lifetime-Abo („Founders Edition") ist auf 20 Konten begrenzt. Das
> **darf** genannt werden, weil es stimmt und serverseitig durchgesetzt
> wird — aber bitte ohne Countdown-Dramatik und ohne erfundenen
> Restbestand. Wenn keine echte Restzahl vorliegt, lieber gar keine Zahl.
>
> **Textmuster** für die Abschnitte: Icon, kurze Überschrift, ein
> erklärender Satz, ein Handlungsknopf. Vorteile in Nutzen übersetzen,
> nicht in Merkmale („5 % günstiger an jedem Automaten", nicht
> „Rabattstufe A").
>
> **Faktentreue geht vor Wirkung.** Keine Zahl auf die Seite schreiben,
> die nicht aus der Datenbank kommt oder belegbar ist — Spendensummen,
> Kundenzahlen, Automatenzahlen, Bewertungen. Auf der Landing Page stand
> schon einmal eine erfundene Spendensumme; die ist raus und kommt nicht
> zurück (§ 5 UWG).

### Prüfliste nach `get_diff` (A3)

- [ ] Ersparnis wird gerechnet, nicht hart kodiert
- [ ] Alle drei Optionen sind gleich erreichbar, keine vorausgewählt
- [ ] Kein Countdown, keine erfundene Verknappung, keine Beschämungstexte
- [ ] Keine Zahl auf der Seite ohne Quelle in der Datenbank

---

## A5 · Spendenprojekte auf echte Daten (bereit zum Senden — zuerst)

> **Stand 03.08.2026 — dieser Text wurde überarbeitet.** Eine frühere
> Fassung nannte „Tafel Magdeburg", „Kinderhospiz Magdeburger Elbland"
> und „Feuerwehr Sülzetal" als die echten Organisationen. Das war falsch:
> Auch diese drei waren Anschauungsmaterial und sind mit Migration 0085
> zurückgezogen worden. **In der Datenbank steht derzeit keine einzige
> Organisation zur Abstimmung.**
>
> Der Charity-Bereich zeigt drei erfundene Projekte mit erfundenen
> Spendenständen und Stimmenzahlen — `Jugendtreff Irxleben`,
> `Tierheim Magdeburg`, `SV Hermsdorf Nachwuchs`. Das muss weg, bevor
> irgendjemand die Seite zu sehen bekommt.
>
> Erfundene Zahlen sind das eine. Erfundene **gemeinnützige
> Organisationen** mit erfundenen Spendenständen sind eine Falschangabe
> über Dritte, die es wirklich gibt (§ 5 UWG). `charityProjects` in
> `src/lib/data.ts` bitte ersatzlos löschen.
>
> **Der Leerzustand ist hier die Hauptsache, nicht ein Randfall.**
> Die Liste wird nach dieser Änderung leer sein, und das ist richtig so —
> die echte Liste bescheinigungsberechtigter Organisationen wird gerade
> zusammengestellt. Bitte einen erklärenden Leerzustand bauen, keine
> leere Fläche und erst recht keine Platzhalter:
>
> > „Die Organisationen für die nächste Abstimmung werden gerade
> > zusammengestellt. Sobald sie feststehen, könnt ihr hier mitbestimmen,
> > wohin gespendet wird."
>
> **Echte Quelle**
>
> ```ts
> const { data } = await supabase.rpc("donation_causes_list");
> // id, title, description, status, vote_count, voted_by_me, created_at,
> // legal_name, purpose, city, website, receipt_eligible
> ```
>
> Die letzten fünf Felder sind mit Migration 0088 dazugekommen. Bitte
> mitanzeigen, sobald Organisationen vorhanden sind:
>
> * `legal_name` — der vollständige Name laut Register, z. B. „… e. V.".
>   `title` ist nur der kurze Anzeigename.
> * `purpose` — der Satzungszweck, ein bis zwei Sätze.
> * `city` — der Ort. **Keine vollständige Anschrift anzeigen**; die
>   liegt zwar in der Datenbank, gehört aber nicht in die
>   Abstimmungsliste.
> * `website` — verlinken, wenn vorhanden, sonst weglassen.
> * `receipt_eligible` — ist immer `true` bei allem, was hier ankommt
>   (die Datenbank lässt nichts anderes zur Abstimmung zu). Ein kleiner
>   Hinweis „darf Spendenbescheinigungen ausstellen" ist sinnvoll, aber
>   **kein Gütesiegel-Design** — es ist eine Tatsache, keine Auszeichnung.
>
> Abstimmen ist ein Umschalter — die RPC gibt `true` zurück, wenn die
> Stimme gesetzt wurde, `false`, wenn sie zurückgezogen wurde:
>
> ```ts
> const { data: nowVoted } = await supabase.rpc("vote_donation_cause",
>   { p_cause_id: id });
> ```
>
> Eigene Vorschläge (landen mit Status `suggested` und brauchen Freigabe):
>
> ```ts
> await supabase.rpc("suggest_donation_cause",
>   { p_title: titel, p_description: text });
> ```
>
> **Ziele und Fortschrittsbalken gibt es nicht.** Der Mock hatte `ziel`
> und `stand` je Projekt — dafür existiert kein Feld. Bitte keine
> Balken erfinden; die Projekte stehen zur Abstimmung, nicht als
> Sammelziele.
>
> **Der Spendenstand — bitte genau lesen**
>
> Es gibt zwei RPCs, und beide liefern derzeit **keine belastbaren
> Zahlen**:
>
> ```ts
> supabase.rpc("my_donation_summary");   // total_donated, purchase_count
> supabase.rpc("donation_pool_summary"); // my_donated, total_pool,
>                                        // my_share_pct, non_app_gross
> ```
>
> Warum sie nicht taugen: Der Topf errechnet sich aus allen Käufen plus
> dem Automatenumsatz der letzten 90 Tage. In der Datenbank stehen
> derzeit **8 Käufe, sämtlich aus dem Demo-Testkauf-Knopf**, und
> `machine_sales_daily` enthält 93 eingespielte Testzeilen vom 10.06. bis
> 10.07.2026 — seither nichts. Ein echter Zahlungsweg existiert noch
> nicht.
>
> Heraus kommt „129,98 € Spendentopf". Diese Zahl ist nicht erfunden,
> aber sie bedeutet nichts — und eine ausgerechnete Zahl wirkt
> glaubwürdiger als eine hingeschriebene. Genau deshalb ist sie
> gefährlicher.
>
> Also: **Den Spendentopf nicht als große Zahl auf die Seite setzen.**
> Entweder ganz weglassen, bis echte Käufe fließen, oder klein und mit
> klarem Hinweis „Testdaten, noch keine echten Verkäufe". Der eigene
> Beitrag (`my_donation_summary`) darf stehen, ebenfalls mit Hinweis —
> er stammt aus den eigenen Demo-Käufen und ist für den Nutzer als
> solcher erkennbar.
>
> Was ohne Vorbehalt gezeigt werden kann: die Organisationen selbst, ihre
> Stimmen und die eigene Stimme — sobald welche vorhanden sind.
>
> Gestaltung wie bisher, kein Redesign.

### Prüfliste nach `get_diff` (A5)

- [ ] `charityProjects` ist aus `src/lib/data.ts` verschwunden
- [ ] Projekte kommen aus `donation_causes_list()`
- [ ] **Erklärender Leerzustand statt leerer Fläche** — die Liste ist
      derzeit leer, das ist der Normalfall und nicht der Sonderfall
- [ ] `legal_name`, `purpose`, `city`, `website` werden mitangezeigt
- [ ] Keine vollständige Anschrift in der Abstimmungsliste
- [ ] Abstimmen ruft `vote_donation_cause()` und behandelt den Rückgabewert als Umschalter
- [ ] Keine Fortschrittsbalken, keine Ziel-Beträge
- [ ] Kein großer Spendentopf ohne Hinweis auf Testdaten
- [ ] Keine Zahl auf der Seite, die nicht aus einer RPC stammt
- [ ] Nirgends ein Platzhalter-Projekt „damit es nicht so leer aussieht"

## A4 · Kontraste (✅ erledigt, 5/5 Prüfpunkte)

> Die Preisdarstellung sitzt inhaltlich. Es gibt aber ein
> Lesbarkeitsproblem, das ausgerechnet die neu hervorgehobenen Stellen
> trifft — nachgemessen, nicht geschätzt.
>
> **Befund**
>
> `--gold` ist `oklch(0.82 0.145 85)` — als Akzent auf Navy großartig
> (9,38:1), als **Text auf hellem Grund** aber unlesbar:
>
> | Kombination | Kontrast | verlangt |
> |---|---|---|
> | `text-gold` auf `bg-card` (weiß) | **1,76:1** | 4,5:1 |
> | `text-gold` auf `bg-secondary` | **1,61:1** | 4,5:1 |
> | `text-success` auf `bg-card` | **3,73:1** | 4,5:1 |
>
> Betroffen sind genau die Stellen, die wir gerade wichtig gemacht haben:
> die Empfehlungszeile „Empfehlung · X € günstiger als 12 Einzelmonate",
> **das Vertragsende auf der Kündigungsbestätigung** (die wichtigste
> Angabe der Seite), sowie „mit App X €" und die „aktiv"-Markierung.
>
> Das ist keine Geschmacksfrage: WCAG 1.4.3 verlangt 4,5:1 für normalen
> Text, und seit Juni 2025 gilt das Barrierefreiheitsstärkungsgesetz für
> den elektronischen Geschäftsverkehr.
>
> **Korrektur** — zwei neue Token nur für Text auf hellem Grund; `--gold`
> und `--success` bleiben unverändert, sie sind für Flächen, Rahmen und
> Text auf Navy richtig:
>
> ```css
> :root {
>   --gold-ink:    oklch(0.545 0.145 85);   /* #966600 — 4,98:1 weiß, 4,54:1 secondary */
>   --success-ink: oklch(0.530 0.13 148);   /* #287F3D — 4,98:1 weiß, 4,54:1 secondary */
> }
> ```
>
> Dazu `--color-gold-ink` und `--color-success-ink` im `@theme inline`-Block
> registrieren, damit `text-gold-ink` / `text-success-ink` verfügbar sind.
> Unverändert bleiben `text-gold` auf dunklem Grund sowie Gold als Fläche,
> Rahmen, Icon und Verlauf. Im Dark Mode ist der helle Ton richtig — die
> neuen Token dort **nicht** anwenden.
>
> **Nebenbei:** In `app.profil.tsx` steht bei der Empfehlungszeile
> `${active ? "text-gold" : "text-gold"}` — beide Zweige gleich. Bitte
> auflösen.
>
> Gestaltung sonst unverändert. Es geht ausschließlich um Lesbarkeit.

## A6 · Bonus, Treue, Abzeichen (bereit zum Senden)

> Der Bonusbereich und die Kennzahlen im Profil stehen auf erfundenen
> Werten. Echt sind sie über zwei RPCs zu haben.
>
> **Was im Profil steht und was stimmt**
>
> | In der App | In Wirklichkeit |
> |---|---|
> | 1240 Punkte | **0 Punkte** |
> | 42,60 € gespart | kein solcher Wert; Lebensumsatz 39,92 € |
> | „Level Gold · Lifetime-Status aktiv" | Stufe **Basis**, nächste Stufe Bronze ab 150 € |
>
> Die Hinweiszeile „Beispielwerte" war ein Notbehelf und kann mit dieser
> Umstellung verschwinden.
>
> **Quelle 1 — Stufe, Abzeichen, Challenges**
>
> ```ts
> const { data } = await supabase.rpc("my_gamification_status");
> ```
>
> Rückgabe (echte Struktur, keine Vermutung):
>
> ```jsonc
> {
>   "tier": { "code": "basis", "label": "Basis", "progress": 0.2661,
>             "next_code": "bronze", "next_label": "Bronze",
>             "discount_pct": 0, "next_min_eur": 150,
>             "next_discount_pct": 1, "total_discount_pct": 5 },
>   "badges": [ { "code": "first_purchase", "title": "Erster Snack",
>                 "earned": true, "icon_key": "bolt",
>                 "description": "…" }, … ],       // 9 Stück
>   "challenges": [ { "code": "weekly_3", "title": "Wochen-Snacker",
>                     "done": false, "target": 3, "progress": 0,
>                     "description": "…", "reward_text": "+300 Bonuspunkte",
>                     "window_days": 7 }, … ],     // 4 Stück
>   "lifetime_gross": 39.92, "purchase_count": 8, "base_discount_pct": 5
> }
> ```
>
> `progress` ist ein Anteil zwischen 0 und 1 — für einen Balken mit 100
> multiplizieren. `icon_key` sind Material-Namen (`bolt`, `favorite`,
> `workspace`, `explore`, `restaurant`, `wb_sunny`, `nightlight`); bitte
> auf die vorhandene Icon-Bibliothek abbilden und bei unbekanntem Schlüssel
> ein neutrales Ersatzsymbol nehmen, statt nichts zu zeigen.
>
> **Quelle 2 — Monatspunkte**
>
> ```ts
> const { data } = await supabase.rpc("my_loyalty_status");
> // points, next_tier, points_to_next, reached_tiers[], month_start, next_reset
> ```
>
> Wichtig: Die Punkte werden **monatlich zurückgesetzt** (`next_reset`).
> Das gehört sichtbar dazu, sonst wirkt der Rückgang wie ein Fehler.
>
> **Der ehrliche Vorbehalt — gleiche Sorte wie bei A5**
>
> `lifetime_gross`, `purchase_count` und das Abzeichen „Erster Snack"
> stammen aus **acht Demo-Käufen**, die über den Testkauf-Knopf entstanden
> sind. Ein echter Zahlungsweg existiert noch nicht.
>
> Das ist kein Grund, die Anzeige wegzulassen — anders als beim
> Spendentopf sieht der Nutzer hier seine **eigene** Testaktivität, und
> die ist für ihn als solche erkennbar. Aber: bitte keine dieser Zahlen in
> Marketing-Aussagen auf der Landing Page übernehmen.
>
> **Was ersatzlos verschwindet**
>
> `bonusLevels` in `src/lib/data.ts` — die Stufen kommen aus `tier`.
>
> Gestaltung wie bisher, kein Redesign.

### Prüfliste nach `get_diff` (A6)

- [ ] „1240 Punkte" und „42,60 €" sind weg, Werte kommen aus den RPCs
- [ ] Hinweis „Beispielwerte" entfernt
- [ ] `progress` wird als Anteil behandelt (×100), nicht als Prozentzahl
- [ ] Monatlicher Reset ist sichtbar erklärt
- [ ] Unbekannter `icon_key` führt zu einem Ersatzsymbol, nicht zu einer Lücke
- [ ] `bonusLevels` aus `data.ts` entfernt
- [ ] Nicht verdiente Abzeichen sind erkennbar anders dargestellt, aber sichtbar

---

## A7 · Belege und Benachrichtigungen (bereit zum Senden)

> **Belege**
>
> ```ts
> const { data } = await supabase.rpc("my_receipts");   // jsonb-Array
> ```
>
> Ersetzt `receipts` in `src/lib/data.ts` — die drei erfundenen Bons dort
> fallen ersatzlos weg, samt des Hinweises „Beispielbons".
>
> Jeder Kauf trägt `source`. Seit Migration 0077/0078 bedeutet `demo` einen
> Testkauf über den Demo-Knopf. Bitte diese Belege **als „Demo"
> kennzeichnen**, so wie es die native App im Beleg tut — ein simulierter
> Kauf darf nicht aussehen wie ein echter.
>
> **Benachrichtigungen**
>
> ```ts
> supabase.rpc("my_notifications", { p_limit: 30 });
> // key, kind, title, subtitle, created_at, is_read
> supabase.rpc("my_notifications_unread_count");        // integer
> supabase.rpc("mark_notification_read", { p_key: key });
> supabase.rpc("mark_all_notifications_read");
> ```
>
> `kind` ist `news`, `coupon`, `invoice` oder `offer` — je Art ein eigenes
> Symbol. Der Zähler gehört an die Glocke in der Navigation.
>
> Gelesen-Markieren ist **einseitig**: Es gibt kein „wieder auf ungelesen".
> Bitte keinen Umschalter bauen, der so aussieht.
>
> **Rechnungen** (nur Geschäftskunden): `supabase.rpc("my_invoices")`.
> Bei Privatkunden kommt eine leere Liste — dann den Abschnitt weglassen,
> nicht leer anzeigen.

### Prüfliste nach `get_diff` (A7)

- [ ] `receipts` aus `data.ts` entfernt
- [ ] Belege mit `source = 'demo'` sind als Demo gekennzeichnet
- [ ] Ungelesen-Zähler an der Navigation
- [ ] Kein Umschalter für „wieder ungelesen"
- [ ] Rechnungsabschnitt entfällt bei leerer Liste

---

## A8 · Freunde werben (bereit zum Senden)

> ```ts
> supabase.rpc("my_referral_code");     // text, z. B. "EFMBRRDH"
> supabase.rpc("my_referral_status");   // siehe unten
> supabase.rpc("register_referral", { p_code: eingabe });
> ```
>
> `my_referral_status()` liefert:
>
> ```jsonc
> { "code": "EFMBRRDH", "enabled": true, "history": [], "rewards": [],
>   "months_total": 0, "months_monthly": 1, "months_yearly": 2,
>   "pending_count": 0, "rewarded_count": 0,
>   "next_milestone": { "label": "3 Empfehlungen — 1 Bonusmonat",
>                       "threshold": 3, "bonus_months": 1,
>                       "badge_code": null } }
> ```
>
> `enabled: false` heißt: Programm abgeschaltet — dann den ganzen Bereich
> ausblenden statt einen toten Knopf zu zeigen.
>
> **Beim Einlösen die Antwort wörtlich anzeigen.** `register_referral`
> gibt `{ ok, reason }` zurück; die Gründe sind fachlich und auf Deutsch
> gemeint:
>
> | `reason` | Bedeutung |
> |---|---|
> | `registriert` | hat geklappt |
> | `code_unbekannt` | Code gibt es nicht |
> | `eigenwerbung` | eigener Code oder eigene E-Mail-Adresse |
> | `werber_ohne_abo` | Werber hat kein Abo |
> | `schon_abonnent` | Geworbener hat schon ein Abo |
> | `bereits_geworben` | schon einmal eingelöst |
> | `programm_inaktiv` | Programm abgeschaltet |
>
> Bitte je Grund einen verständlichen deutschen Satz zeigen — aber **den
> Grund nicht verschleiern**. „Das hat leider nicht geklappt" hilft
> niemandem.
>
> Der eigene Code darf geteilt werden (Kopieren, QR); die Komponente
> `share-qr-code.tsx` existiert bereits.

### Prüfliste nach `get_diff` (A8)

- [ ] Bereich verschwindet bei `enabled: false`
- [ ] Jeder `reason` hat einen eigenen, verständlichen Text
- [ ] Kein Sammel-Fehlertext
- [ ] Kein erfundener Fortschritt — `next_milestone` kommt aus der RPC

---

## A9 · Automatenliste (blockiert)

> **Erst umsetzen, wenn die echten Stammdaten eingetragen sind.** In der
> Datenbank stehen heute „Automat 1" bis „Automat 3" und ein
> „Heißgetränkeautomat", jeweils mit Standort „(ANPASSEN)".
>
> Sobald sie gepflegt sind:
>
> ```ts
> const { data } = await supabase
>   .from("machines")
>   .select("id, code, name, type, is_cooled, city, location_name, lat, lng, status, image_url")
>   .is("deleted_at", null);
> ```
>
> `machines` ist für angemeldete Nutzer lesbar (`machines_read`).
>
> **Was der Mock hat und die Wirklichkeit nicht:**
>
> * `distanz` — gibt es nicht. Aus `lat`/`lng` gegen die Nutzerposition
>   rechnen, und **nur anzeigen, wenn die Position wirklich vorliegt**.
>   Keine erfundene Entfernung.
> * `beliebt`, `tags` — gibt es nicht. Ersatzweise `type` und `is_cooled`.
> * `status` — echte Werte, andere als im Mock.
>
> Verfügbarkeit je Automat kommt aus `inventory` (`machine_id`,
> `product_id`, `quantity`), nicht mehr aggregiert wie in A2a.

### Prüfliste nach `get_diff` (A9)

- [ ] Keine Entfernung ohne echte Standortfreigabe
- [ ] Keine erfundenen Merkmale („beliebt", Tags)
- [ ] `machines` aus `data.ts` entfernt
- [ ] Statuswerte kommen aus der Datenbank

---

## Was diese Texte nicht lösen können

**Automaten-Stammdaten.** In der Datenbank stehen „Standort 1
(ANPASSEN)" bis „Standort 3 (ANPASSEN)". Erfundene Standortnamen durch
Platzhalter zu ersetzen, verbessert eine Kundenseite nicht. Die echten
Standorte, Adressen und Koordinaten müssen von Hand eingetragen werden —
danach ist die Automatenliste ein kleiner Nachtrag zu A2a.

**Produktbilder.** 0 von 62 Produkten haben ein Bild. Der Platzhalter aus
A2a trägt die Seite, aber ein Automatensortiment ohne Fotos verkauft
schlechter als eines mit. Auch das ist eine Dateneingabe, keine
Programmieraufgabe.

**Bewertungen.** 0 Zeilen. Sie entstehen erst, wenn Kunden bewerten —
also nach den ersten Verkäufen über die App.
