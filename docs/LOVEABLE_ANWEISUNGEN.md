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

> Der Charity-Bereich zeigt drei erfundene Projekte mit erfundenen
> Spendenständen und Stimmenzahlen. Das muss weg, bevor irgendjemand die
> Seite zu sehen bekommt.
>
> **Was dort steht und was stimmt**
>
> | In der App (erfunden) | In Wirklichkeit |
> |---|---|
> | Jugendtreff Irxleben · 3.120 € · 412 Stimmen | Tafel Magdeburg |
> | Tierheim Magdeburg · 2.480 € · 388 Stimmen | Kinderhospiz Magdeburger Elbland |
> | SV Hermsdorf Nachwuchs · 1.890 € · 275 Stimmen | Feuerwehr Sülzetal |
>
> Erfundene Zahlen sind das eine. Erfundene **gemeinnützige
> Organisationen** mit erfundenen Spendenständen sind eine Falschangabe
> über Dritte, die es wirklich gibt (§ 5 UWG). `charityProjects` in
> `src/lib/data.ts` bitte ersatzlos löschen.
>
> **Echte Quelle**
>
> ```ts
> const { data } = await supabase.rpc("donation_causes_list");
> // id, title, description, status, vote_count, voted_by_me, created_at
> ```
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
> Was ohne Vorbehalt gezeigt werden kann: die drei echten Projekte, ihre
> Stimmen und die eigene Stimme.
>
> Gestaltung wie bisher, kein Redesign.

### Prüfliste nach `get_diff` (A5)

- [ ] `charityProjects` ist aus `src/lib/data.ts` verschwunden
- [ ] Projekte kommen aus `donation_causes_list()`
- [ ] Abstimmen ruft `vote_donation_cause()` und behandelt den Rückgabewert als Umschalter
- [ ] Keine Fortschrittsbalken, keine Ziel-Beträge
- [ ] Kein großer Spendentopf ohne Hinweis auf Testdaten
- [ ] Keine Zahl auf der Seite, die nicht aus einer RPC stammt

## A4 · Kontraste (bereit zum Senden — Credits fehlten)

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
