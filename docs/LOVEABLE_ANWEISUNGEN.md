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

---

## A10 · Eine Kachel „Rechtliches" + Fettdarstellung (bereit zum Senden)

Nachtrag vom 09.08.2026. Zwei Punkte, bewusst in **einer** Nachricht:
Zwei Nachrichten kosten doppelt Credits, und beide betreffen dieselben
zwei Dateien.

**Sendehistorie.** Der erste Versuch am 09.08.2026 wurde vom Server
abgelehnt — das Guthaben des Workspaces war aufgebraucht („Your
workspace is out of credits"); danach brach zusätzlich die
MCP-Verbindung ab. **Am 10.08.2026, 04:17 UTC gesendet und vom Projekt
angenommen** (`list_messages` → Status `accepted`).

Zum Ablauf: `send_message` läuft nach 60 Sekunden in einen Timeout des
MCP-Aufrufs, der Agent arbeitet aber weiter. Ein Timeout ist **kein**
Grund zum erneuten Senden — das kostet ein zweites Mal Credits. Erst
`list_messages` lesen und den Status prüfen.

**ERLEDIGT am 10.08.2026.** Beide Punkte sind umgesetzt und
gegengeprüft (siehe Prüfliste unten). Der Text bleibt hier stehen, weil
er dokumentiert, was beauftragt wurde.

**Stand der Datenbank:** `public.legal_text` führt seit dem 10.08.2026
die Fassung v5 **mit** Auszeichnungszeichen. Migration 0107 hatte sie
zunächst entfernt, solange das Web-Frontend sie nicht darstellen konnte;
Migration 0108 nimmt sie wieder mit, nachdem `renderLegalText()` steht.
Der Reihenfolge wegen: erst der Renderer, dann die Marker — nie
umgekehrt, sonst stehen Sternchen im Rechtstext.

> **Punkt 1 — Eine Kachel statt sieben**
>
> Im Profil (`src/routes/app.profil.tsx`) sollen die sieben einzelnen
> Rechtskacheln zu EINER Kachel „Rechtliches" zusammengefasst werden. Ein
> Klick darauf führt auf eine Übersichtsseite, die die sieben Rechtstexte
> als anklickbare Einträge auflistet.
>
> **Neue Route `src/routes/rechtliches.index.tsx` (Pfad `/rechtliches`)**
>
> * Baugleich zur bestehenden `src/routes/rechtliches.$slug.tsx`:
>   dieselbe `Shell`-Struktur, dieselbe Navy/Gold-Optik, `card-lift`,
>   `rounded-3xl bg-card`. Bitte die `Shell`-Komponente aus
>   `rechtliches.$slug.tsx` in eine gemeinsame Datei ziehen (z. B.
>   `src/components/legal-shell.tsx`) und in beiden Routen verwenden,
>   statt sie zu kopieren — sonst laufen die beiden Seiten optisch
>   auseinander.
> * Daten über `fetchLegalLinks()` aus `@/lib/legal` (sortiert bereits
>   nach `sortierung`) im **Route-Loader**, genau wie `$slug` es macht —
>   nicht per `useQuery`. Dann ist die Liste auch serverseitig gerendert
>   und ohne JavaScript erreichbar; ein Impressum darf nicht von
>   laufendem JavaScript abhängen.
> * Überschrift `<h1>` „Rechtliches", darunter ein kurzer Satz wie
>   „Pflichtangaben, Datenschutz und Vertragsbedingungen von Börde Snack
>   24."
> * Jeder Eintrag ist ein `<Link to="/rechtliches/$slug" params={{ slug:
>   l.slug }}>` mit `Gavel`-Icon links, `l.titel`, `ChevronRight` rechts,
>   `min-h-14` (Tippziel ≥ 44 px). `Reveal` mit gestaffeltem
>   `delay={i * 0.04}`.
> * `head`-Meta setzen: Titel „Rechtliches — BÖRDE SNACK 24", passende
>   `description`, `og:*`, `twitter:card` — im Muster von `$slug`.
> * `errorComponent` und den Leer-Fall genau wie in `$slug`: verständlicher
>   Text plus `mailto:`-Link auf `LEGAL_CONTACT` aus `@/lib/legal`. Diese
>   Rückfallebene ist Pflicht — wenn die Texte nicht laden, muss trotzdem
>   ein Kontaktweg sichtbar bleiben.
>
> **`src/routes/app.profil.tsx` anpassen**
>
> * `LegalSection()` ersetzen durch eine einzelne Kachel. Kein `useQuery`
>   mehr in dieser Datei, keine Liste, kein Lade-/Fehlerzustand — die
>   Kachel führt auf `/rechtliches`: `card-lift flex min-h-14 w-full
>   items-center justify-between rounded-3xl bg-card px-5 text-sm
>   font-bold`, links `Gavel`-Icon + „Rechtliches", rechts
>   `ChevronRight`.
> * Die Kachel als erste Zeile in die bestehende Kachelgruppe mit
>   Support/Spendenwirkung/Abmelden setzen und die separate `<section>`
>   mit `SectionHeader` entfernen — sonst hiessen Überschrift und
>   Kachelbeschriftung beide „Rechtliches".
> * Danach nicht mehr benötigte Importe entfernen (`fetchLegalLinks`;
>   `LEGAL_CONTACT` wird für den Support-`mailto:` weiter gebraucht,
>   `Loader2`/`Reveal`/`useQuery` nur, falls sie sonst nirgends mehr in
>   der Datei vorkommen — bitte nachsehen, nicht raten).
>
> **Punkt 2 — Fettdarstellung in den Rechtstexten**
>
> Die Rechtstexte tragen eine Auszeichnung für Überschriften und die
> Stellen, auf die es ankommt: `**so**`. Die App stellt das fett dar.
> `/rechtliches/<slug>` gibt den Text aktuell als Fliesstext mit
> `whitespace-pre-wrap` aus und müsste dasselbe tun.
>
> **WICHTIG — sonst sucht der Agent vergeblich:** In `public.legal_text`
> stehen die Marker **derzeit nicht drin**. Migration 0107 entfernt sie
> beim Abgleich, damit auf der öffentlichen Seite keine Sternchen stehen,
> solange sie niemand darstellt. In den echten Daten ist also kein
> einziges `**` zu finden — das ist kein Fehler und kein Grund, den
> Abgleich zu „reparieren". Die Umsetzung wird an einem **literalen
> Beispieltext** geprüft; die Marker werden datenbankseitig erst
> freigeschaltet, wenn die Darstellung steht.
>
> (Diese Reihenfolge fehlte im ersten Entwurf dieses Auftrags. Ohne sie
> hätte der Agent an leeren Daten geprüft und „sieht gut aus" gemeldet —
> oder angefangen, an der Datenbank herumzubauen.)
>
> * Eine kleine Funktion in `src/lib/legal.ts`, die `**…**` in
>   `<strong>` umsetzt — **ohne** Markdown-Bibliothek und **ohne**
>   `dangerouslySetInnerHTML`. Der Text wird an dem Muster zerlegt und
>   als React-Knoten zusammengesetzt; ein Rechtstext darf niemals als HTML
>   interpretiert werden.
> * Muster: zwei Sternchen, dazwischen mindestens ein Zeichen, **kein**
>   Sternchen und **kein** Zeilenumbruch — `/\*\*([^*\n]+)\*\*/g`. Genau
>   dieselbe Regel wie in der App.
> * Einzelne Sternchen bleiben unverändert stehen. Das
>   Muster-Widerrufsformular enthält „(*) Unzutreffendes streichen" —
>   das ist Text, keine Auszeichnung.
> * Ein `**` ohne schliessendes Paar bleibt sichtbarer Text, statt den
>   Rest des Dokuments fett zu setzen.
> * `<strong>` erbt Grösse und Farbe, ändert nur die Strichstärke
>   (`font-semibold`/`font-bold` genügt) — die Textfarbe nicht anfassen,
>   sonst stimmt der geprüfte Kontrast nicht mehr.
>
> **Bitte nichts anderes anfassen.** Die Inhalte der Rechtstexte werden
> nicht formatiert, gekürzt oder umgeschrieben. Die bestehenden
> Detailseiten müssen weiter genau so funktionieren wie jetzt.
>
> **Prüfen statt annehmen:** Nach der Änderung in der Vorschau tatsächlich
> nachsehen, dass (a) im Profil nur noch eine Kachel „Rechtliches" steht,
> (b) der Klick auf `/rechtliches` führt und dort alle sieben Einträge
> erscheinen, (c) jeder Eintrag den richtigen Text öffnet — auch im
> Demozugang, denn dort waren die Kacheln zuletzt tot —, und (d) in keinem
> Text ein `**` sichtbar stehen bleibt. Was nicht überprüft werden konnte,
> bitte ausdrücklich so sagen, statt es als erledigt zu melden.

### Prüfliste nach `get_diff` (A10) — abgehakt am 10.08.2026

Jeder Haken steht für einen Blick in die Datei, nicht für die
Erfolgsmeldung des Agenten.

- [x] Genau eine Kachel „Rechtliches" im Profil; `LegalSection` entfernt,
      `fetchLegalLinks`-Import weg, `LEGAL_CONTACT` für Support geblieben
- [x] `/rechtliches` (`rechtliches.index.tsx`) listet alle Einträge, im
      Loader geladen — also auch ohne JavaScript da
- [x] `LegalShell` in `src/components/legal-shell.tsx`, von beiden Routen
      benutzt statt kopiert
- [x] Fehler- und Leer-Fall zeigen beide `LEGAL_CONTACT`
- [x] `renderLegalText()` baut `<strong>` über `createElement`, kein
      `dangerouslySetInnerHTML`; Muster `/\*\*([^*\n]+)\*\*/g` — Zeichen
      für Zeichen dieselbe Regel wie in der App
- [x] Einzelne Sternchen bleiben: `(*)` im Muster-Widerrufsformular und
      die Aufzählungszeichen der Datenschutzerklärung
- [x] Migration 0108 nimmt die Marker wieder mit; Abgleich ausgeführt,
      alle sieben MD5-Prüfsummen stimmen mit der Quelldatei überein
      (102 Paare, +4 Zeichen je Paar)

Offen und bewusst nicht beauftragt: Aus dem Profil führt die Kachel aus
der App-Hülle heraus, und der „zurück"-Link der Rechtsseiten zeigt auf
`/`, nicht zurück ins Profil. Der Zurück-Knopf des Browsers tut das
Richtige. Eine weitere Runde beim Agenten wäre dafür teurer als der
Gewinn.

---

## A11 · Wortmarke „BÖRDESNACK24" (gesendet 11.08.2026)

Am 11.08.2026 um 04:03 UTC gesendet und angenommen.

**Richtigstellung zum 10.08.2026.** Hier stand zwischenzeitlich, der
Sechs-Punkte-Auftrag sei angenommen, aber nicht abgearbeitet worden.
Das war falsch. Belegt hatte ich es mit einem unveränderten
`latest_commit_sha` und dem Projekt-Screenshot — beides war veraltet.
Der Blick in die Dateien zeigte später: Alle sechs Punkte waren
umgesetzt, einschliesslich Keyvisual, Kategoriezeile und der
entfernten Spendenzahl.

Die Lehre für das nächste Mal: `latest_commit_sha` und der Screenshot
aus `get_project` sind kein Nachweis dafür, dass nichts passiert ist.
Nachweis ist die Datei. `read_file` kostet keine Credits.

> NACHTRAG ZU PUNKT 5 — bitte diese Fassung umsetzen, nicht die alte.
>
> Die Wortmarke wird **komplett zusammengeschrieben**, ganz ohne
> Leerzeichen, und die „24" steht im Markengold:
>
> **BÖRDESNACK24** — „BÖRDESNACK" in der jeweiligen Textfarbe, „24"
> golden.
>
> **Farbe: die Token aus dem Design-System nehmen, keinen Hexwert
> erfinden.** In `src/styles.css` sind zwei Goldtöne definiert, und
> welcher richtig ist, hängt vom Untergrund ab:
>
> * `text-gold` — `--gold: oklch(0.82 0.145 85)`. Für **dunklen** Grund:
>   Kopfzeile über dem Hero, Navy-Flächen, Fusszeile auf Navy.
> * `text-gold-ink` — `--gold-ink: oklch(0.545 0.145 85)`. Für **hellen**
>   Grund. Die Datei kommentiert diesen Token ausdrücklich mit
>   „Textvarianten für hellen Grund (WCAG 1.4.3, ≥ 4,5:1)".
>
> Das ist kein Schönheitsdetail: Die Barrierefreiheitserklärung sagt zu,
> dass die Farbkontraste WCAG 2.1 Stufe AA für Fliesstext erfüllen.
> `text-gold` auf weissem Grund reisst diese Zusage.
>
> **Drei Dinge, die dabei leicht kaputtgehen:**
>
> 1. **Kein Leerzeichen im Markup.**
>    `BÖRDESNACK<span class="text-gold">24</span>` in EINEM Element, ohne
>    Leerraum oder Umbruch dazwischen — sonst liest ein Screenreader
>    „Bördesnack" und „vierundzwanzig" als zwei Wörter, und im Layout
>    entsteht eine sichtbare Lücke.
> 2. **Nur dort einfärben, wo die Wortmarke Gestaltungselement ist** —
>    Kopfzeile, Fusszeile, Marken-Schriftzüge. In `<title>`, `og:title`,
>    `description`, `alt`-Texten und im Fliesstext gibt es keine Farbe:
>    dort „BÖRDESNACK24" als reiner Text bzw. „Bördesnack24" in normaler
>    Schreibung.
> 3. **Umbruch prüfen.** Die Kopfzeile nutzt weite Laufweite. Zusammen
>    geschrieben ist das Wort länger als vorher und kann auf schmalen
>    Geräten umbrechen. Ab 320 px ansehen; notfalls Laufweite oder
>    Schriftgrösse anpassen, aber nicht abschneiden.
>
> Das Logo-Bild bleibt unverändert — Grafik, keine Textstelle. Den
> Kommentarkopf in `src/styles.css` darf man mitziehen.

### Warum die Goldwahl hier begründet steht

Die naheliegende Umsetzung wäre überall `text-gold`. Auf den weissen
Karten der App ergibt `oklch(0.82 0.145 85)` gegen Weiss rund 1,9:1 —
weit unter den 4,5:1, die Abschnitt 3 der Barrierefreiheitserklärung
zusagt. Das Design-System hat für genau diesen Fall `--gold-ink`. Wer
das nicht weiss, macht aus einer Farbänderung eine falsche Aussage in
einem Rechtstext.

---

## A12 · Übergang Keyvisual ↔ Kachel (NICHT gesendet — MCP getrennt)

Stand 11.08.2026. Guthaben war vorhanden, aber die MCP-Verbindung zu
Loveable war getrennt (`ToolSearch` findet die Werkzeuge nicht). Der Text
ist unversendet und kann von Hand in den Loveable-Chat kopiert werden.

**Warum reine Transparenz nicht reicht.** Der naheliegende Wunsch ist
„Bild transparenter machen". Das löst es nicht: Bei `opacity` wird das
Bild gegen den Hintergrund gerechnet, Schwarz über Navy ergibt immer
etwas *Dunkleres* als Navy. Man kommt näher, trifft es aber nie — und je
transparenter, desto blasser wird auch die Wortmarke. Deshalb nennt der
Auftrag zwei Wege, die tatsächlich funktionieren, statt den Wunsch
wörtlich weiterzureichen.

> **Nachbesserung zum Übergang auf der App-Startseite
> (`src/routes/app.index.tsx`).**
>
> Die weiche Kante ist besser, aber der schwarze Bildgrund des
> Keyvisuals hebt sich weiterhin sichtbar von der Navy-Fläche darunter
> ab. Es sind erkennbar zwei verschiedene Farben.
>
> **Bitte nicht mit `opacity` allein lösen.** Beim Überblenden wird das
> Bild gegen den Hintergrund gerechnet: Schwarz über Navy ergibt immer
> etwas Dunkleres als Navy. Man kommt näher, trifft es aber nie — und je
> transparenter, desto blasser wird auch die Wortmarke. Deshalb zwei
> Wege, die tatsächlich zum Ziel führen:
>
> **Weg A (bevorzugt): Blendmodus.** Das Bild auf eine Navy-Fläche legen
> und mit `mix-blend-mode: lighten` (oder `screen`) verrechnen. Bei
> `lighten` gewinnt pro Kanal der hellere Wert — die schwarzen
> Bildbereiche nehmen damit **exakt** den Navy-Ton an, während
> Wortmarke, Umrisskarte und der goldene Schein unverändert hell
> bleiben. Die Kante verschwindet dadurch vollständig, nicht nur fast.
>
> Bitte dabei genau hinsehen, ob der Automatenkörper zu blass wird — er
> ist dunkelgrau und kann unter `screen` ausbleichen. Wenn ja, `lighten`
> statt `screen` nehmen, das ist schonender. Wenn beides den Automaten
> zerstört, Weg B.
>
> **Weg B (Rückfallebene): die Kachel ans Bild angleichen, nicht das
> Bild an die Kachel.** Statt `bg-navy` für den Textbereich die
> tatsächliche Farbe des unteren Bildrands verwenden. Dann ist der ganze
> Hero-Block einheitlich dunkel und der Übergang fällt weg. Der Rest der
> App bleibt unverändert Navy.
>
> **Nur dieser eine Bereich.** Die Landingpage, die Kacheln darunter und
> die restliche Farbwelt bleiben unangetastet.
>
> **Zwei Bedingungen, die erhalten bleiben müssen:**
>
> * Die Überschrift „Genießen. Geben. Gutes tun." steht weiß bzw. gold
>   auf dieser Fläche. Der Kontrast muss weiter WCAG 2.1 AA erfüllen —
>   die Barrierefreiheitserklärung sagt das ausdrücklich zu. Wird der
>   Grund heller, bitte gegenprüfen.
> * Die Umrisskarte des Bördekreises muss vollständig sichtbar bleiben,
>   nicht angeschnitten.
>
> **Ansehen, nicht nur ändern.** Bitte einen Screenshot des Ergebnisses
> vergleichen und sagen, welchen Weg du genommen hast und warum. Falls
> der Automat unter dem Blendmodus leidet, sag das ausdrücklich, statt
> es durchzuwinken.

### Die Wurzel, nicht die Reparatur

Das eigentliche Übel ist der eingebrannte schwarze Hintergrund des
Keyvisuals. Ein PNG mit **echtem transparentem Hintergrund** löst das an
der Wurzel — dann liegt das Motiv auf jeder Fläche richtig, ohne
Blendmodus. Beide Wege oben sind Reparaturen am fertigen Bild. Wenn die
Originaldatei noch existiert oder neu erzeugt werden kann, ist das die
dauerhafte Lösung.

---

## A13 · 5 % Dauerrabatt richtigstellen (NICHT gesendet — Guthaben leer)

Stand 12.08.2026. Korrigiert meinen eigenen Fehler aus der
Punktesystem-Nachricht: Dort stand, „5 % Dauerrabatt" solle entfernt
werden, solange keine Quelle in der Datenbank benannt werden kann. Der
Agent hat das umgesetzt — der Satz ist aus dem Bonusbereich verschwunden.

Der Auftraggeber hat inzwischen klargestellt: **Der Dauerrabatt ist eine
echte Zusage** an alle mit kostenpflichtigem Abo. Er muss also zurück,
nur richtig dargestellt.

> **KORREKTUR: „5 % Dauerrabatt" nicht löschen, sondern richtig anzeigen.**
>
> **Was gilt:**
>
> * 5 % Dauerrabatt auf alle Produkte — aber **nur mit laufendem
>   kostenpflichtigem Abo**.
> * Nicht an eine Stufe gekoppelt. Es gibt kein „Level Gold". Der Rabatt
>   hängt am Abo, sonst an nichts.
> * Wer kündigt, verliert ihn. In der Datenbank durchgesetzt:
>   `app.has_subscription()` liefert `false`, sobald eine Kündigung nach
>   der Abo-Wahl eingegangen ist (Migration 0109). Dieselbe Funktion
>   bewacht Coupons, persönliche Angebote und Loyalty-Gutscheine.
>
> **Für die Oberfläche:**
>
> * Den Hinweis **abhängig vom Abo** anzeigen, nicht pauschal. Ohne Abo
>   darf nirgends „5 % Dauerrabatt aktiv" stehen.
> * `my_subscription()` liefert das gewählte Modell (`plan` ist `null`
>   ohne Wahl). Sie prüft **nicht** auf Kündigung — also nur zur Anzeige
>   des Modells verwenden, nicht als Beweis für „Rabatt aktiv".
> * Für „hat der Kunde die Abo-Vorteile?" gibt es derzeit **keine**
>   aufrufbare Funktion im Frontend. Bitte **keine eigene Regel
>   erfinden** und nicht selbst aus Tabellen zusammenrechnen, ob jemand
>   gekündigt hat. Wenn der Zustand gebraucht wird: melden, dann wird
>   `my_subscription_benefits()` angelegt. Eine zweite, abweichende Regel
>   im Frontend ist genau der Weg, auf dem App und Datenbank auseinander
>   laufen.
> * Bis dahin neutral formulieren: „5 % Dauerrabatt auf alle Produkte im
>   kostenpflichtigen Abo" beschreibt das Angebot. „5 % Dauerrabatt
>   aktiv" behauptet einen Zustand — das ist der Unterschied.

### Was dabei offen bleibt

Für den Dauerrabatt gibt es in der Datenbank **keine Umsetzung** — keine
Funktion, keine Spalte, keine Preislogik. Gekauft wird am Automaten, nicht
in der App; der Rabatt müsste also am Kartenterminal beziehungsweise über
die Automatenanbindung gewährt werden. Solange das nicht geklärt ist,
beschreibt die App eine Zusage, die technisch nirgends durchgesetzt wird.
Das ist eine Entscheidung für den Auftraggeber, keine Aufgabe für den
Frontend-Agenten.

---

## A14 · Landingpage-Redesign (NICHT gesendet — Guthaben leer)

Stand 13.08.2026. Auftraggeber will Landingpage und App „dynamisch,
modern, funktional, übersichtlich, intuitiv, rechtssicher, strukturiert" —
aber ausdrücklich **nicht so, als wäre alles mit KI erstellt**. Farben
bleiben, Schrift und Grössen dürfen neu, Motion erwünscht.

Entscheidungen des Auftraggebers dazu:

* **Landingpage zuerst, App danach.** Getrennte Aufträge, damit der Agent
  nicht in einem Zug Dateien anfasst, in denen frisch gebaute Logik
  steckt — Punkte, Abo, Gutscheine, Rechtsseiten.
* **Neue Schriftpaarung**, vom Agenten vorgeschlagen, selbst ausgeliefert.

### Der Befund, der die Aufgabe verändert hat

`src/routes/__root.tsx` lädt Sora und Manrope von `fonts.googleapis.com`
und `fonts.gstatic.com`, mit `preconnect`. Die IP jedes Besuchers geht
also an Google, bevor die Seite erscheint, ohne Einwilligung.

Die Datenschutzerklärung sagt wörtlich das Gegenteil: „Auch Schriftarten
laden wir nicht von fremden Servern nach … Deine IP-Adresse geht damit
auch nicht auf diesem Weg an Dritte." Für die native App stimmt das (dort
doppelt abgesichert), für dieses Frontend nicht.

Weil die Schrift ohnehin getauscht wird, ist die Korrektur hier
kostenlos zu haben — deshalb steht sie im Auftrag an erster Stelle und
nicht als Nebensatz.

### Modus und Dials (frontend-taste)

Brand-Modus. Landingpage: `DESIGN_VARIANCE` 7, `MOTION_INTENSITY` 5,
`VISUAL_DENSITY` 4. Für die App später: 5 / 4 / 5 — sie muss bedienbar
bleiben und trägt mehr Inhalt.

### Was an der Seite heute nach KI aussieht

Am Bestand geprüft, nicht vermutet:

1. **Drei gleich grosse Kacheln** (`tiles`: Clock / HeartHandshake /
   Sparkles), je Icon + Überschrift + ein Satz. Lehrbuchmuster. Dazu
   inhaltlich schief: „5 % für den guten Zweck" ist das
   Alleinstellungsmerkmal, „Rund um die Uhr" eine Selbstverständlichkeit
   bei Automaten — gleich gross dargestellt wird beides gleich wichtig.
2. **Kategorie-Reihe** aus fünf identischen Kreisen mit Versalien-Label.
   Dekoration ohne Funktion, nichts davon ist anklickbar.
3. **Hero**: Vollflächenfoto, dunkler Verlauf, Eyebrow in Versalien mit
   weiter Laufweite, dreizeilige Überschrift, Knopf. Solide, aber
   austauschbar.

### Der Auftragstext

> (Der vollständige Text steht im Loveable-Chat-Entwurf dieser Sitzung.
> Kernpunkte, falls er neu getippt werden muss:)
>
> * Google-Font-Links **ersatzlos** raus, Schriften als `woff2` selbst
>   ausliefern, `@font-face` in `styles.css`, `font-display: swap`,
>   Lizenz mit ins Repository. Danach im Netzwerk-Tab bestätigen, dass
>   **kein** Aufruf an eine fremde Domain mehr geht.
> * Schriftwahl mit Begründung. Zwei harte Bedingungen: Umlaute und ß in
>   allen Schnitten sauber („Genießen" steht in der grössten Überschrift),
>   und bei 14 px auf dem Handy mühelos lesbar.
> * Farben unverändert, Tokens statt Hexwerten. `text-gold` auf dunklem,
>   `text-gold-ink` auf hellem Grund — `--gold` gegen Weiss ergibt rund
>   1,9:1 und reisst die WCAG-Zusage.
> * **Ein** Signature-Element, Rest ruhig. Die Bördekreis-Kontur ist das,
>   was die Marke unterscheidet.
> * Bewegung mit `motion/react` (installiert), keine neue Abhängigkeit,
>   kein GSAP. `prefers-reduced-motion: reduce` muss greifen und den
>   Inhalt trotzdem vollständig zeigen.
> * Rechtssicher heisst hier konkret: Fusszeile mit allen Rechtslinks
>   bleibt vollständig und nicht hinter einem Aufklapper (§ 5 DDG,
>   § 312k BGB); keine Zahl ohne Grundlage; der Dauerrabatt bleibt eine
>   Beschreibung, kein Zustand — die Landingpage kennt keinen
>   angemeldeten Nutzer; Wortmarke BÖRDESNACK24 mit goldener 24;
>   Kontrast 4,5:1 / 3:1, Tippziele 44 px, sichtbarer Tastaturfokus.
> * Nicht anfassen: alles unter `/app`, die Rechtsseiten,
>   `src/lib/loyalty.ts`, die Abo-Logik.
> * Berichten: Schriftwahl mit Begründung, Netzwerk-Tab-Bestätigung,
>   Ansicht bei 320 px, Ansicht mit reduzierter Bewegung, gewähltes
>   Signature-Element. Screenshots vorher/nachher.

---

## A16 · Automaten und Karte zusammenführen (NICHT gesendet — Guthaben leer)

Stand 15.08.2026. Nachtrag zu A15 (Kundenkarte zentral in die untere
Leiste). Der Auftraggeber hat den Platzkonflikt entschieden: „Automaten"
und „Karte" gehören zusammen, es wird nur eines gebraucht.

Damit wird die Mitte frei: **Home · Automaten · [Kundenkarte] · Bonus ·
Profil** — vier Reiter, die Kundenkarte als erhabene Aktion dazwischen.

> **Nachtrag zur unteren Leiste.**
>
> „Automaten" und „Karte" gehören zusammen und werden zu einem Ziel.
> Beides zeigt dieselbe Sache: unsere Automaten. Einmal als Liste, einmal
> auf der Landkarte — zwei Ansichten desselben Inhalts, keine zwei
> Bereiche.
>
> **Zusammenführen, nicht wegwerfen:**
>
> * Beide Ansichten bleiben erhalten, innerhalb des Ziels umschaltbar. Es
>   darf keine Funktion verloren gehen, nur ein Menüpunkt.
> * Die Doppelbenennung erledigt sich damit: In der Leiste steht
>   „Automaten", „Karte" bezeichnet künftig eindeutig die Kundenkarte. Im
>   Fliesstext für die Landkarte „Landkarte" oder „Kartenansicht"
>   schreiben.
> * **Bestehende Verweise dürfen nicht ins Leere laufen.** `/app/karte`
>   wird u. a. von der App-Startseite verlinkt („Jetzt Automaten
>   finden"). Alle Verweise durchsehen, die alte Adresse nicht löschen,
>   sondern auf die Kartenansicht des zusammengeführten Ziels
>   weiterleiten — damit geteilte und gemerkte Links weiter das
>   Erwartete zeigen.
> * „Jetzt Automaten finden" muss weiterhin auf der **Kartenansicht**
>   landen, nicht in der Liste. Der Knopf verspricht Finden, nicht
>   Blättern.
>
> Alles andere aus A15 bleibt gültig: Gold mit passendem Vordergrund,
> Tippziel ≥ 44 px, `aria-haspopup="dialog"`, kein aktiver Zustand für
> die Kundenkarte, Chat-Assistent regelbasiert ohne Sprachmodell.

---

## A17 · Rechtschreibung und Kundenkarten-Symbol (bereit zum Senden)

Stand 16.08.2026. Zwei Rückmeldungen des Auftraggebers: Groß- und
Kleinschreibung soll überall stimmen, und das gewählte Symbol für die
Kundenkarte gefällt ihm nicht.

### Warum die Kleinschreibung mehr ist als Geschmack

Das Frontend nutzt durchgängig kleingeschriebene Eyebrows als
Gestaltungsmittel — „dein bonuskonto.", „punkte im laufenden monat.",
„pflichtangaben.", „gemeinsam gutes tun.", „rund um die uhr in der
börde.". Im Deutschen sind das Rechtschreibfehler, keine Typografie.

Der schwerwiegendste Fall steht in `app.index.tsx`:
`eyebrow={group.category.toLowerCase() + "."}`. Hier werden **echte
Kategorienamen aus der Datenbank** kleingeschrieben — aus „Süßwaren"
wird „süßwaren". Das ist kein Stil mehr, das ist Verfälschung von Daten
im Namen der Optik.

Der Unterschied, auf den es ankommt: Ein Versalien- oder
Kapitälchen-Look gehört ins CSS (`text-transform`), nicht in den
Text. Was im DOM steht, lesen Screenreader vor, Suchmaschinen ein und
Nutzer beim Kopieren heraus. Der Text muss richtig geschrieben sein,
egal wie er dargestellt wird.

> **Zwei Rückmeldungen des Auftraggebers.**
>
> **1 — Groß- und Kleinschreibung überall beachten.**
>
> Das Frontend schreibt Eyebrows und Labels durchgängig klein — „dein
> bonuskonto.", „punkte im laufenden monat.", „belohnungen.",
> „meilensteine.", „pflichtangaben.", „digitale bons.",
> „feinjustierung.", „dein modell.", „gemeinsam gutes tun.", „rund um
> die uhr in der börde.", „faire preise — jederzeit für dich da.",
> „kunden werben kunden.", „service". Im Deutschen sind das
> Rechtschreibfehler.
>
> Bitte durchgängig korrigieren — Substantive gross, Sätze beginnen
> gross. Nicht nur an den genannten Stellen: Landingpage, App,
> Komponenten, `aria-label`, Fehlermeldungen, Meta-Beschreibungen. Bitte
> alle durchsehen, meine Liste ist nicht vollständig.
>
> **Der wichtigste Fall** steht in `src/routes/app.index.tsx`:
> `eyebrow={group.category.toLowerCase() + "."}`. Das schreibt echte
> Kategorienamen aus der Datenbank klein — aus „Süßwaren" wird
> „süßwaren". Bitte `toLowerCase()` entfernen. Daten werden nicht für
> die Optik verändert.
>
> **Wenn der Versalien-Look bleiben soll:** über CSS
> (`text-transform: uppercase` bzw. `class="uppercase"`), niemals über
> falsch geschriebenen Text. Was im DOM steht, lesen Screenreader vor,
> Suchmaschinen ein und Nutzer beim Kopieren heraus — dort muss es
> richtig stehen. Die Darstellung ist davon unabhängig.
>
> **2 — Das Symbol der Kundenkarte überzeugt noch nicht.**
>
> Bitte nicht raten, sondern zeigen: Stell **drei bis vier Kandidaten
> nebeneinander** — gerendert in der echten goldenen Kreisfläche, in der
> echten Grösse, in der echten Leiste, damit man sie vergleichen kann.
> Ein Screenshot davon genügt, dann entscheidet der Auftraggeber.
>
> Sinnvolle Kandidaten aus `lucide-react` (Vorhandensein in 0.575.0
> bitte prüfen, nicht annehmen): `WalletCards`, `IdCard`, `Ticket`,
> `ScanLine`, `Nfc`.
>
> **`CreditCard` bleibt ausgeschlossen** — es liest sich als
> Zahlungsmittel und weckt in einer App mit kostenpflichtigen Abos die
> falsche Erwartung, dort sei eine Zahlungskarte hinterlegt.
>
> **Nimm einen eigenen Entwurf mit in die Auswahl.** Ein selbst
> gezeichnetes Symbol — eine Karte mit einer Andeutung der Wortmarke
> oder der Bördekreis-Kontur — wäre an dieser Stelle das
> eigenständigste Element der ganzen Leiste, und es ist genau eine SVG.
> Bei einem Symbol dieser Grösse zählt Klarheit vor Detail: Bei 32 px
> überlebt keine feine Linie.
>
> Im Sheet bleibt der QR-Code unverändert — dort ist er richtig.

## A18 · Kundenkarten-Symbol und Unterseiten (gesendet 17.08.2026)

Auslöser: vier Screenshots der Globus-Baumarkt-App vom Auftraggeber,
16.08.2026. Übernommen wird die Informationsarchitektur und die
Icon-Form, **nicht** die Mechanik.

Der erste Sendeversuch scheiterte am leeren Guthaben; am 17.08.2026
unverändert abgesetzt (`umsg_01m06zm2dwebvsq5dt7vjmgg9k`, Status
`accepted`).

Diese Anweisung ersetzt A17 nicht, sondern nimmt dessen Punkt 1
(Groß-/Kleinschreibung) mit auf. Punkt 2 aus A17 — die Icon-Auswahl zum
Vergleich — ist damit **erledigt**: Der Auftraggeber hat sich für die
Kartenform aus den Screenshots entschieden. Auch der dort notierte
Ausschluss von `CreditCard` ist gegenstandslos geworden; die Entscheidung
lautet ausdrücklich „so wie auf den Bildern". Statt eines Stock-Icons
wird trotzdem ein eigenes SVG gezeichnet — das war der Kern des
Einwands und bleibt richtig.

> Aufgabe: Kundenkarte — eigenes Karten-Icon und Unterseiten-Struktur
> (Vorbild: Globus-Bonuskarte, Umsetzung strikt im Bördesnack24-Design)
>
> Der Auftraggeber hat vier Screenshots der Globus-Baumarkt-App als
> Vorbild gezeigt. Übernommen wird die INFORMATIONSARCHITEKTUR und die
> Icon-Form. NICHT übernommen werden Optik, Farben, Begriffe und vor
> allem nicht die Mechanik — die ist bei uns eine andere und steht
> weiter unten verbindlich.
>
> **A) Das Icon in der Bottom-Nav**
>
> Der zentrale Gold-Button trägt derzeit `QrCode` aus lucide. Der
> Auftraggeber mag weder den QR-Code noch die bisher probierten
> Stock-Icons. Gewünscht ist die Kartenform aus den Screenshots.
>
> Bitte KEIN Stock-Icon verwenden, sondern ein eigenes Inline-SVG als
> Komponente `src/components/icons/customer-card.tsx` anlegen:
>
> * Viewbox 24×24, `stroke="currentColor"`, `fill="none"`,
>   `strokeWidth={1.75}`, `strokeLinecap="round"`,
>   `strokeLinejoin="round"` — damit es sich in Strichstärke und
>   Rundung an die übrigen lucide-Icons der Navigation anpasst und
>   nicht wie ein Fremdkörper wirkt.
> * Form: liegendes Rechteck mit deutlich gerundeten Ecken (rx ≈ 3),
>   etwa im Seitenverhältnis einer echten Karte, also breiter als hoch
>   (z. B. x=2 y=5 w=20 h=14).
> * Ein durchgehender waagerechter Balken im oberen Drittel (der
>   Magnetstreifen) — als gefüllter oder dick gestrichener Strich über
>   die volle Breite.
> * Unten links zwei kurze, ungleich lange Striche (die Prägezeile).
>   Kein Chip, keine Kontaktflächen, keine Kartennummer, kein
>   Sternchen, keine Person, keine Hand.
>
> Das ist bewusst schlicht: Die Bedeutung trägt das Label
> „Kundenkarte" darunter, das Icon muss nur in 24 px sicher als Karte
> lesbar sein. Ein Icon mit Chip, Wellen oder Gesicht wird in dieser
> Größe zu Matsch.
>
> Alles andere am Button bleibt wie gebaut: erhabener goldener Kreis,
> größer als die Nachbarn, zentriert, `aria-haspopup="dialog"`,
> Fokusring.
>
> **B) Die Unterseiten-Struktur**
>
> Vorbild ist der Aufbau der vier Screenshots, in dieser Reihenfolge:
>
> 1. Karten-Sheet (öffnet über den Gold-Button, bleibt ein Sheet —
>    keine eigene Route nötig)
>    * Logo/Wortmarke oben
>    * QR-Code groß und mittig, auf weißer Fläche mit ruhigem Rand
>      (QR-Codes brauchen hellen Untergrund, sonst scheitert das
>      Scannen — hier also ausdrücklich kein Navy hinter dem Code)
>    * Name des Kunden, darunter die Kundennummer
>    * danach eine Liste mit Verweisen auf die Unterseiten:
>      Meine Gutscheine · Bonusübersicht anzeigen · Kundenkarte
>      verwalten · Informationen zur Kundenkarte
> 2. Bonusübersicht — `/app/bonus`. Prüfe zuerst, ob die bestehende
>    Route `src/routes/app.bonus.tsx` das schon abdeckt. Wenn ja:
>    diese Seite ausbauen, KEINE zweite Bonusseite anlegen. Zwei
>    Seiten mit denselben Zahlen laufen garantiert auseinander.
> 3. Bonushistorie — `/app/bonus/historie`
> 4. Kundenkarte verwalten — `/app/karte/verwalten`
> 5. Informationen zur Kundenkarte — `/app/karte/info`
>
> Optik durchgängig Bördesnack24: Navy-Flächen, Gold als Akzent, die
> vorhandenen Reveal-/Motion-Komponenten und das Card-Lift-Muster aus
> `src/routes/index.tsx`. Zurück-Pfeil auf jeder Unterseite, der zur
> vorherigen Seite führt (nicht zur Startseite) — das war schon einmal
> Thema.
>
> **C) Verbindlich: die Mechanik ist bei uns eine ANDERE als bei
> Globus**
>
> Das ist der wichtigste Teil dieser Aufgabe. Globus rechnet einen
> Jahresumsatz und zahlt nach 12 Monaten aus. Wir nicht. Wer die
> Globus-Zahlen abschreibt, baut ein Versprechen, das wir nicht halten
> — das ist irreführende Werbung nach § 5 UWG, nicht nur ein
> Designfehler.
>
> So funktioniert es bei uns tatsächlich (Quelle: Datenbankfunktion
> `my_loyalty_status()`):
>
> * 1 Punkt = 1 Cent Bruttoumsatz.
> * Vier Meilensteine: 500 / 1200 / 2000 / 3000 Punkte, also
>   5 € / 12 € / 20 € / 30 € Umsatz.
> * Belohnung je Meilenstein: ein persönlicher Gutschein über
>   5 % / 10 % / 15 % / 25 % auf ein Produkt, 14 Tage gültig.
> * Die Punkte werden MONATLICH zurückgesetzt, am 1. jedes Monats.
>   Kein Sammeljahr.
>
> Deshalb ausdrücklich NICHT übernehmen: „Sammeljahr", ein Zeitraum
> über 12 Monate, „Bonusfähiger Umsatz", „Kartenanzahl", die
> Prozentstufen 0/3/5/10 %, die Umsatzschwellen 1500/2500/5000 € und
> der Zähler „Aktivierte Coupons (5/5)". Nichts davon existiert bei
> uns.
>
> Alle Zahlen kommen aus den vorhandenen Funktionen, keine erfunden
> und keine hartkodiert:
>
> * `my_loyalty_status()` → `points`, `next_tier`, `points_to_next`,
>   `reached_tiers`, `month_start`, `next_reset`
> * `my_subscription_benefits()` → `active`, `discount_percent`,
>   `period_end`, `plan` — das ist die einzige Quelle für den
>   5-%-Dauerrabatt. Nicht selbst nachrechnen, nicht aus dem Abo-Feld
>   ableiten.
>
> Auf der Bonusübersicht statt Globus' Jahresbalken also: der aktuelle
> Punktestand, der nächste Meilenstein mit der Differenz dorthin, die
> vier Stufen mit ihren echten Prozentsätzen, und der Hinweis, wann
> zurückgesetzt wird (aus `next_reset`, nicht „in X Tagen" geschätzt).
>
> **D) Leere Zustände — nicht wegdesignen**
>
> In der Datenbank stehen heute in `loyalty_bonus_grants` und in
> `personal_offers` jeweils 0 Zeilen. Die Bonushistorie und die
> Gutscheinliste werden also zunächst leer sein. Bitte einen
> ordentlichen leeren Zustand bauen (kurzer Satz, was hier später
> steht, dezent gesetzt) — keine Beispieldaten, keine
> Platzhalter-Einträge, keine Demo-Coupons. Erfundene Einträge in
> einer Bonushistorie sind besonders heikel, weil sie wie ein
> Kontoauszug gelesen werden.
>
> Für „Kundenkarte verwalten" gibt es noch kein Backend. Diese Seite
> deshalb ehrlich klein halten: Kundennummer anzeigen, Hinweis, dass
> die Karte an das Konto gebunden ist, und ein Verweis auf den
> Support. Keine Schaltflächen, die nichts tun.
>
> **E) Groß-/Kleinschreibung**
>
> Der Auftraggeber hat außerdem angemerkt, dass durchgängig die
> deutsche Groß- und Kleinschreibung zu beachten ist. Bitte beim
> Durchgehen der Oberfläche mitnehmen: Substantive groß, Navigations-
> und Schaltflächenbeschriftungen nicht in Versalien oder
> durchgehender Kleinschreibung setzen, `uppercase`/`lowercase`-
> Utilities dort entfernen, wo sie deutschen Text betreffen.
>
> Wenn etwas davon mit dem bestehenden Aufbau kollidiert (etwa weil
> `app.bonus.tsx` schon anders strukturiert ist): nicht raten, sondern
> kurz zurückmelden, was du vorgefunden hast und was du vorschlägst.

**Woher die Zahlen in Abschnitt C stammen** — nachgesehen, nicht
erinnert: `app.loyalty_milestones()` in
`supabase/migrations/0023_loyalty_capacity_donationpool.sql` liefert
`{500, 1200, 2000, 3000}`; die Rabattsätze 5/10/15/25 % und die
14-Tage-Frist stehen in
`supabase/migrations/0037_loyalty_correction.sql`, das genau diesen
Abgleich schon einmal nachziehen musste. `my_loyalty_status()` steht in
`0016_loyalty_mhd.sql`, `my_subscription_benefits()` in
`0112_abo_vorteile_abfragbar.sql`.

## A19 · Tägliches Einloggen: Wochenübersicht und Animation (gesendet 17.08.2026)

Auslöser: Vorgabe des Auftraggebers vom 17.08.2026. Die Datenbankseite ist
gebaut und geprüft (Migration `0113_taegliches_einloggen_punkte.sql`,
angewandt am 17.08.2026); diese Anweisung betrifft nur die Oberfläche.

Beim Verfassen war die Lovable-Verbindung getrennt; nach der Wiederkehr
unverändert abgesetzt (`umsg_01m09gx2r4e9xrxpctp6qhmt8b`, Status
`accepted`).

> Aufgabe: Wochenübersicht „Täglich einloggen" mit Animation
>
> Wer die App öffnet, sammelt ab sofort Punkte auf dieselben Meilensteine
> wie beim Einkauf. Die Datenbank ist fertig; du baust die Oberfläche.
>
> **Die Regel, wörtlich**
>
> * 10 Punkte für jeden Tag, an dem die App geöffnet wird — für die
>   ersten sechs Tage einer Woche (Montag bis Sonntag).
> * 100 Punkte zusätzlich, wenn alle sieben Tage einer Woche dabei sind.
> * Macht 160 Punkte je Woche.
> * Zurückgesetzt wird am Monatsersten, zusammen mit den Umsatzpunkten.
>
> **Nenne als Obergrenze nur „160 pro Woche".** Nicht „640 im Monat":
> Ein Kalendermonat hat 4,4 Wochen, nicht 4. Nachgerechnet ergibt ein
> lückenlos besuchter Monat je nach Wochenlage zwischen 640 und 760
> Punkten. 160 je Woche ist die einzige Zahl, die immer stimmt.
>
> **Die beiden Datenbankfunktionen**
>
> `record_daily_login()` — beim ersten Öffnen des Tages aufrufen. Bucht
> den Tag, prüft die Meilensteine und liefert alles für die Anzeige:
>
> ```json
> {
>   "participates": true,
>   "counted_today": true,
>   "awarded": 10,
>   "week_start": "2026-08-17",
>   "week_end": "2026-08-23",
>   "today": "2026-08-17",
>   "days": [{"day":"2026-08-17","logged_in":true,"future":false}, … 7 Stück],
>   "days_logged_in": 1,
>   "week_complete": false,
>   "points_per_day": 10,
>   "streak_bonus": 100,
>   "points_max_week": 160,
>   "login_points_month": 10,
>   "benefits_active": true
> }
> ```
>
> `my_login_week()` — dieselbe Übersicht ohne zu buchen. Für jeden
> späteren Aufruf am selben Tag.
>
> **Die wichtigste Falle: nicht an `SIGNED_IN` hängen.** Supabase feuert
> dieses Ereignis auch beim stündlichen Token-Refresh. Wer die Animation
> daran koppelt, zeigt sie jede Stunde erneut. Richtig ist: einmal beim
> Öffnen der App `record_daily_login()` rufen und die Animation **nur**
> abspielen, wenn `counted_today` true ist. Ist es false, war der Nutzer
> heute schon da — dann höchstens die Übersicht zeigen, ohne Feier.
>
> Verlass dich auch nicht auf das Datum des Geräts. Der Tag kommt vom
> Server in deutscher Zeit; die Funktion regelt das.
>
> `participates: false` bedeutet: Konto ohne Kundenzeile (Admin,
> Mitarbeiter). Dann nichts anzeigen, kein Fehler.
>
> **Die Übersicht**
>
> Sieben Kästen, Montag bis Sonntag, mit den Wochentagskürzeln. Drei
> Zustände, klar unterscheidbar:
>
> * **eingeloggt** — gefüllt, Gold, Haken
> * **verpasst** (`logged_in: false`, `future: false`) — leer, gedämpft
> * **noch offen** (`future: true`) — leer, aber sichtbar anders als
>   „verpasst". Ein Tag, der noch kommt, darf nicht wie ein Versäumnis
>   aussehen. Das ist der Unterschied zwischen Ermutigung und Vorwurf.
>
> Dazu der Punktestand des Monats und die Angabe, wie weit es zum
> nächsten Meilenstein ist (aus `my_loyalty_status()`, nicht selbst
> gerechnet).
>
> **Die Animation**
>
> Sofort beim Öffnen, als Overlay über der Startseite. Ablauf:
>
> 1. Die Übersicht fährt auf, die Kästen erscheinen kurz nacheinander
>    von Montag nach Sonntag.
> 2. Der heutige Kasten wird zuletzt gefüllt — ein Stempel, kein
>    Aufblitzen.
> 3. Der Punktestand zählt um `awarded` hoch.
> 4. Ist `week_complete` true, folgt eine deutlichere Auflösung für die
>    100 Extrapunkte: die ganze Reihe leuchtet einmal in Gold durch.
>    Kein Konfetti-Regen über den halben Bildschirm — eine Bewegung, die
>    man beim zwanzigsten Mal noch erträgt.
> 5. Das Overlay lässt sich jederzeit wegtippen und schliesst sich sonst
>    von selbst.
>
> **`prefers-reduced-motion` respektieren.** Ist es gesetzt, erscheint
> die Übersicht ohne Bewegung, der Punktestand steht sofort auf dem
> Endwert. Nicht die Information weglassen, nur die Bewegung.
>
> **Ehrlichkeit an zwei Stellen — nicht wegdesignen**
>
> 1. Der Gutschein am Meilenstein ist ein Abo-Vorteil. Wer kein Abo hat,
>    sammelt sichtbar mit, bekommt am Meilenstein aber nichts. Steht in
>    `benefits_active`. Ist es false, muss das **in der Übersicht
>    stehen** — ein Satz, ruhig gesetzt, kein Verkaufsbanner. Ein voller
>    Balken ohne Gutschein und ohne Vorwarnung ist genau die
>    Enttäuschung, die Vertrauen kostet.
> 2. Hinweis-Chip an die Section, wie bei den übrigen automatisch
>    erzeugten Inhalten, verlinkt auf die Seite zur automatisierten
>    Auswahl. Hausregel; die Punkteregel entscheidet mit, wann ein
>    Gutschein entsteht, und das muss nachlesbar sein.
>
> **Optik** wie überall: Navy-Flächen, Gold als Akzent, die vorhandenen
> Motion-Komponenten. Deutsche Groß- und Kleinschreibung beachten.

**Warum die Zahlen so und nicht wie ursprünglich vorgegeben** — die
Vorgabe lautete 1 Punkt je Tag und 10 für die volle Woche. In diesem
System ist ein Punkt ein Cent Umsatz; 16 Punkte pro Woche wären 16 Cent
gewesen, der erste Meilenstein (500) allein durch Logins erst nach 31
Wochen erreicht. Der Auftraggeber hat den Massstab daraufhin
verzehnfacht; die Verhältnisse 6×1 + 10 bleiben erhalten.

## A20 · Demozugang, Kontrast, Bewegung, Coupon-Slider (gesendet 18.08.2026)

Auslöser: fünf Punkte des Auftraggebers vom 18.08.2026. Vor dem Verfassen
gegen den Code und die Datenbank geprüft; die Befunde stehen in der
Anweisung, damit der Agent sie nicht noch einmal erheben muss.

**Was die Prüfung ergeben hat** (Zahlen, nicht Eindrücke):

* `--background: #fbf8f4` gegen `--card: #ffffff` = **1,06:1**. Die Karten
  hängen allein an Rand und Schatten.
* `--border: #dcd8d3` gegen den Hintergrund = **1,34:1**. WCAG 1.4.11
  verlangt 3:1 für die Begrenzung eines Bedienelements.
* `--shadow-soft` arbeitet mit Alpha 0,06/0,07 — auf Creme fast nichts.
* Ein dunklerer Hintergrund bricht ein Text-Token: `--gold-ink: #8a6a00`
  liegt auf `#fbf8f4` bei 4,79:1, auf `#f2ece2` nur noch bei **4,32:1**
  und damit unter den 4,5:1 aus WCAG 1.4.3.
* `motion` ^12.43, `embla-carousel-react` ^8.6 sind installiert. Die App
  ist aus Entscheidung statisch, nicht aus Mangel. `Reveal`,
  `PageTransition`, `AnimatedNumber`, `card-lift` existieren und werden
  kaum benutzt.
* **Keine** Lottie-Bibliothek im Projekt. Die Dateien liegen beim
  Auftraggeber und müssen hochgeladen werden — der Agent kommt nicht
  daran.
* `public.products`: 62 aktive Produkte, **0** mit `image_url`. Der
  Platzhalter ist auf absehbare Zeit das, was jeder sieht.
* `daily-login-gate.tsx` enthält `if (!user || (demo && !user)) return;` —
  der zweite Teil ist wirkungslos, weil der erste bei fehlendem `user`
  schon abbricht.

Abgesetzt am 18.08.2026 (`umsg_01m0dqcmctfhfrpaa2d5bwkhva`, Status
`accepted`). Reihenfolge laut Anweisung: Kontrast und Rechtschreibung
zuerst (betreffen alles), dann Demozugang, dann Coupon-Slider, dann
Bewegung, zuletzt die Vorbereitung für Lottie.

**Zu Lottie, nachgesehen statt vermutet.** Der Auftraggeber hat
angegeben, die Dateien bereits in diesem Verlauf hochgeladen zu haben.
Die Suche über den gesamten Sitzungsmitschnitt (83 MB, 760 Anhänge)
ergibt: hochgeladen wurden ausschliesslich Bilder — die Screenshots. Die
33 Datei-Anhänge sind allesamt Dateien aus diesem Repository. Keine
`.json`, keine `.lottie`.

Der einzige Lottie-Treffer ist ein erledigter Aufgabenpunkt aus einer
früheren Phase, „Toast-Set aus neuer Lottie-Datei
(Success/Info/Error/Warning)". Was daraus wurde, steht in
`apps/mobile/lib/core/motion/feedback.dart:12`: „Bewusst code-basiert
statt Lottie: keine zusätzliche Abhängigkeit, kein Asset, exakt in
Markenfarben." Die Vorlage wurde also nachgebaut, nicht eingebunden. Im
Repository liegt keine Lottie-Datei, im Lovable-Projekt ebenfalls nicht.

Für ein Set aus vier Zustandssymbolen war diese Entscheidung richtig. Für
die Momente, um die es jetzt geht — leerer Zustand, volle Woche,
geschaffter Meilenstein — verdient Lottie seinen Platz. **Offen beim
Auftraggeber:** die Dateien ins Lovable-Projekt hochladen. Bis dahin
entsteht nur die Aufnahme (`<BrandLottie slot="…" />` plus
Registrierung), ohne Bibliothek.

---

# Warteschlange ab 20.08.2026

A20 war zu gross für einen Durchgang: Der Agent hat nur geprüft, keinen
Code geschrieben und nach der Reihenfolge gefragt. Konsequenz — ein
Auftrag je Nachricht, jeder für sich abschliessbar. Die Reihenfolge unten
ist bindend, weil jeder Schritt auf dem vorherigen aufbaut.

| Nr. | Inhalt | Stand |
|---|---|---|
| A20a | Kontrast-Token + Schreibweisen | gesendet 20.08.2026 (`umsg_01m0g915shehks0assmv688n9a`) |
| A21 | Demo-Fixtures | wartet |
| A22 | Coupon-Slider mit Zoom | wartet |
| A23 | Bewegung durchziehen | wartet |
| A24 | Lottie-Aufnahme | wartet, braucht Dateien vom Auftraggeber |
| A25 | Designsystem Richtung A | wartet, nach A20a |

## A21 · Demozugang mit vollständigen Beispieldaten (wartet)

> **Nur dieser Punkt. Kein Slider, keine Bewegung.**
>
> Im Demozugang bleibt heute die halbe App leer — der Hinweis in
> `src/routes/app.tsx` sagt das selbst: „Persönliche Bereiche wie Abo und
> Bons bleiben leer." Der Auftraggeber kann sie deshalb nicht beurteilen.
>
> Bau `src/lib/demo/fixtures.ts` als vollständigen, festen
> Beispieldatensatz und lass jede Datenquelle im Demomodus daraus lesen.
> Abgedeckt: Kundenkarte mit QR-Code, Bonusübersicht mit einem
> Punktestand zwischen zwei Meilensteinen, Wochenübersicht mit vier von
> sieben Tagen (darunter ein verpasster und zwei noch offene, damit alle
> drei Zustände zu sehen sind), Gutscheine, Bonushistorie, Belege, Abo
> aktiv, Spenden, Freunde werben.
>
> Drei Regeln ohne Spielraum:
>
> a) **Im Demomodus wird nichts geschrieben.** `record_daily_login()` und
> jeder andere schreibende RPC bleibt aus. Die Bedingung in
> `daily-login-gate.tsx` — `if (!user || (demo && !user)) return;` — ist
> im zweiten Teil wirkungslos; ein angemeldeter Nutzer mit Demo-Flag
> würde tatsächlich buchen.
>
> b) **Beispieldaten sehen nie wie echte aus.** Hinweisstreifen bleibt,
> erkennbare Namen, keine echt wirkende Kundennummer.
>
> c) **Kein Demo-Zustand für Angemeldete.** Wer eine Session hat, sieht
> seine echten Daten.
>
> Dazu ein Umschalter, der nur im Demomodus existiert (dezent, unten im
> Profil): „mit Abo / ohne Abo", „Woche vollständig / lückenhaft", „mit
> Gutscheinen / leer". Damit lassen sich die Varianten beurteilen, ohne
> dass jemand Daten anlegt.

## A22 · Coupon-Slider mit Zoom und Bildplatzhaltern (wartet)

> **Nur dieser Punkt.** `embla-carousel-react` ^8.6 ist installiert,
> keine neue Abhängigkeit nötig.
>
> Waagerechter Slider, Karten etwa 78 % der Breite, sodass die
> Nachbarkarte angeschnitten bleibt — das macht einen Slider auf dem
> Handy als Slider lesbar. Einrasten an, kein Endlosumlauf.
>
> Zoom: mittige Karte 1,0, Nachbarn etwa 0,92 mit leicht reduzierter
> Deckkraft, stufenlos am Scroll-Fortschritt (`emblaApi.scrollProgress()`
> im `scroll`-Ereignis), nicht als Sprung beim Einrasten. Das Bild in der
> Karte minimal gegenläufig mitziehen. Bei `prefers-reduced-motion`
> entfällt die Skalierung, das Einrasten bleibt.
>
> **Die Platzhalter sind Pflicht, nicht Notlösung:** 62 aktive Produkte,
> null mit `image_url`. Also aus der Marke gebaut — Ink-Fläche,
> Monogramm in Gold, Produktname in der Display-Schrift, festes
> Seitenverhältnis 4:5 über `AspectRatio`, leichte Unterscheidung nach
> Kategorie. Kein graues Feld, kein durchgestrichenes Bildsymbol, kein
> „Bild folgt". Sobald `image_url` gefüllt ist, tritt das Foto an
> dieselbe Stelle, ohne dass das Layout springt.
>
> Karteninhalt: Rabatt gross, Produktname, Gültigkeit, Einlösecode.
> Quelle `personal_offers`; im Demozugang die Fixtures aus A21.

## A23 · Bewegung konsequent durchziehen (wartet)

> **Nur dieser Punkt.** Es fehlen keine Werkzeuge: `motion` ^12.43 ist
> installiert, `Reveal`, `PageTransition`, `AnimatedNumber` und
> `card-lift` existieren und werden kaum benutzt.
>
> - Jeder Abschnitt mit `Reveal`, gestaffelt, **einmalig** — kein
>   erneutes Einblenden beim Zurückscrollen.
> - Jede antippbare Zeile und Kachel bekommt einen Druckzustand
>   (`row-press` bzw. `active:scale-[0.98]`). Das wirkt stärker als jede
>   Zierbewegung.
> - Zahlen laufen hoch: Punktestand, Ersparnis, Spendensumme.
> - `PageTransition` überall, nicht nur an einzelnen Stellen.
> - Karte → Detailseite als gemeinsame Bewegung (`layoutId`), damit die
>   Karte sich öffnet statt ersetzt zu werden.
>
> Timing 0,2–0,45 s, `cubic-bezier(0.22, 1, 0.36, 1)`, nichts über 0,6 s.
> `animate-float-slow` bleibt stillgestellt. Neue JS-Animationen fragen
> `useReducedMotion` selbst ab.

## A24 · Lottie-Aufnahme (wartet — Dateien fehlen)

> **Nur die Aufnahme, nicht der Inhalt.** Es ist keine Lottie-Bibliothek
> im Projekt und es liegt keine Lottie-Datei vor.
>
> - Komponente `<BrandLottie slot="…" />` plus Registrierung
>   `src/lib/lottie/registry.ts`, die benannte Plätze auf Dateien
>   abbildet.
> - Ohne hinterlegte Datei zeigt die Komponente den heutigen statischen
>   Zustand. Nichts bricht, nichts wird leer.
> - **Bibliothek noch nicht hinzufügen.** Später
>   `@lottiefiles/dotlottie-react`, pro Route nachgeladen.
> - `prefers-reduced-motion`: erstes Bild als Standbild.
>
> Lottie gehört an erzählende Momente — leerer Zustand, geschaffter
> Meilenstein, volle Woche. Nicht an Zustandswechsel der Oberfläche, und
> nichts davon in Dauerschleife in einer Liste. Drei bis fünf Plätze
> vorschlagen, mehr nicht.

## A25 · Designsystem Richtung A umsetzen (wartet — nach A20a)

Grundlage ist die Design-Leinwand vom 20.08.2026 (Seite „Designsystem"
und „Screens"). Wird in Teilaufträgen gesendet, nicht als Block:

1. **Typo- und Abstandsskala** aus dem Foundations-Blatt in `styles.css`
   festschreiben. Farben unverändert; die einzige Ergänzung
   (`--border-strong`) kommt schon mit A20a.
2. **Listenzeile statt Kachel** — die tragende Komponente von Richtung A.
   Danach `app.index.tsx` und die Produktlisten darauf umstellen.
3. **Conversion-Bausteine mit ihren Abschaltbedingungen**: Ersparnis erst
   bei erfasstem Rabatt, sozialer Beleg bei null Zeilen gar nicht,
   Knappheit nur für die 20 Founders-Plätze.
4. **Abo-Ebene**: Vergleich „ohne Abo / mit Abo" (vier Zeilen, die
   ersten beiden zweimal „Ja"), Paywall in sieben Schritten, zwei
   Beschriftungszustände der Bestellschaltfläche nach § 312j Abs. 3 BGB,
   Kündigung sichtbar im Statusband nach § 312k.
5. **Screens** in dieser Reihenfolge: Startseite, Produktdetail, Bonus,
   Profil, Onboarding, Landingpage.

Durchgehend gilt: Die Bezahlebene heisst **Abo-Vorteile**, nicht
„Premium" — die Rechtstexte kennen Monats-, Jahres- und Lifetime-Abo zu
0,99 / 9,99 / 79,99 €.
