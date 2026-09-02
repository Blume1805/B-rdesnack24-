# Prüfung: Was der Lovable-Agent in Projekt A gebaut hat

**Stand:** 02.09.2026 · Prüfer: Claude · Grundlage: `AUFTRAG-2026-09-BACKEND-ABGLEICH.md`

Geprüft wurde durch Lesen des Codes und Messen gegen die Produktionsdatenbank,
nicht gegen die Aussage des Agenten. Was ich **nicht** konnte: den Code
ausführen. Die Anwendung liegt in Lovables Sandkasten; ein Testlauf ist von
hier aus nicht möglich. Alles unten ist statisch belegt oder ausdrücklich als
unbelegt gekennzeichnet.

## Zusammenfassung

| | Anzahl |
|---|---|
| Belegt erfüllt | 10 |
| 🔴 Mangel, der Kunden erreicht | 2 |
| 🟡 Anforderung nicht erfüllt | 4 |
| ⚪ Anmerkung ohne Fehlerwirkung | 2 |
| Noch ungeprüft | 4 |

**Zwei der Mängel gehen auf Fehler in meinem Auftrag zurück, nicht auf den
Agenten.**

## Belegt erfüllt

1. **`src/lib/data.ts` ist gelöscht.** Die vier erfundenen Automaten und die
   drei erfundenen Bons existieren nicht mehr — nicht auskommentiert, entfernt.
2. **`appPrice()` mit dem hartcodierten `* 0.95` ist weg.** Die Preisrechnung
   liegt in `src/lib/pricing.ts`, frei von React und Supabase.
3. **Der Rabatt kommt ausschließlich aus `my_subscription_benefits()`**
   (`src/hooks/use-discount.tsx`). Fehlt die Antwort oder ist sie fehlerhaft,
   gilt 0 — im Zweifel erscheint der reguläre Bruttopreis.
4. **`pricing.test.ts` prüft in beide Richtungen.** 19 % und 7 %, und der
   Gegentest `discountedPrice(p, 0) === grossPrice(p)`. Auch unsinnige Werte
   sind abgedeckt.
5. **`redemption_code` wird korrekt gelesen.** Die Rateschleife über `code |
   voucher_code | redeem_code` ist entfernt, die Spaltenlisten sind benannt.
   Jede genannte Spalte existiert (gegen die Datenbank geprüft).
6. **Kein `select("*")` mehr auf `products`.** Die 17 benannten Spalten liegen
   innerhalb der 24 freigegebenen.
7. **Die Rollenprüfung ist repariert.** `INTERNAL_ADMIN_ROLES = {system_admin,
   shareholder}`; der nicht existierende Wert `admin` ist weg, mit Kommentar.
8. **Das KI-Register ist korrekt angebunden.** Alle acht Schlüssel in
   `src/lib/ki.ts` stimmen mit `public.ki_register` überein; fehlt die Antwort,
   gilt „nicht freigegeben".
9. **Die Auskunft lässt keinen Bereich verschwinden.** Unbekannte Schlüssel
   erscheinen roh und als solche gekennzeichnet; leer heißt „nichts
   gespeichert", nie „0 Einträge".
10. **Kein Uploader, der scheitern würde.** `app.unternehmen.kontakt.tsx` nennt
    stattdessen den Kontaktweg und sagt offen, warum es keinen Upload gibt.

## 🔴 Mängel, die den Kunden erreichen

### 1. „(ANPASSEN)" erscheint in der Oberfläche

`machinePlace()` in `src/lib/machines.ts` gibt `location_name` zurück. In der
Datenbank steht dort:

| name | location_name |
|---|---|
| Automat 1 | **Standort 1 (ANPASSEN)** |
| Automat 2 | **Standort 2 (ANPASSEN)** |
| Automat 3 | **Standort 3 (ANPASSEN)** |
| Heißgetränkeautomat | **Standort Heißgetränke (ANPASSEN)** |

Der Auftrag verlangte ausdrücklich: „Ein Standort mit „(ANPASSEN)" im Namen
wird nicht angezeigt." Der Filter fehlt. Der Kunde sieht eine
Redaktionsanweisung.

**Zu tun:** `location_name` verwerfen, wenn er `(ANPASSEN)` enthält, und auf
`city` zurückfallen. Ist auch der leer, keine Ortszeile zeigen.

### 2. Die Bonusstufe bleibt leer — mein Auftragsfehler

Mein Auftrag behauptete: „Die Stufe steht in `tier` (1–4)." **Das ist falsch.**
`app.grant_loyalty_bonuses` schreibt in `tier` die **Punktschwelle**:

```sql
foreach v_tier in array app.loyalty_milestones() loop   -- [500, 1200, 2000, 3000]
  ... and tier = v_tier
```

Der Agent hat meine Angabe übernommen und `milestoneForTier` so gebaut:

```ts
const entry = LOYALTY_MILESTONES[tier - 1];   // tier = 500 → Index 499 → undefined
```

Für jeden echten Datensatz liefert das `{points: null, percent: null}`. Die
Bonushistorie zeigt also leere Stufe und leeren Prozentwert — genau der Mangel,
den dieser Auftrag beheben sollte, nur mit anderer Ursache.

Heute fällt es nicht auf, weil `loyalty_bonus_grants` leer ist. Mit dem ersten
gewährten Bonus ist es sichtbar.

**Zu tun:** Nach der Punktschwelle suchen, nicht nach dem Index:
`LOYALTY_MILESTONES.find(m => m.points === tier)`.

## 🟡 Anforderungen, die nicht erfüllt sind

### 3. Nur 6 von 36 Bereichen der Auskunft haben einen deutschen Namen

`AREA_LABELS` in `src/lib/data-export.ts` enthält sechs Einträge — genau die,
die mein Auftrag beispielhaft nannte. Der Agent hat **nichts erfunden**, das
war richtig. Die Anforderung „jeder Bereich bekommt einen deutschen Namen"
bleibt damit offen: 30 Bereiche erscheinen als roher Datenbankschlüssel.

Die vollständige Tabelle liegt vor — die Flutter-App führt sie bereits
(`data_export_screen.dart`, 36 Einträge). Sie ist zu übernehmen, damit beide
Oberflächen dieselben Namen verwenden.

### 4. Keine Testing Library, also keine Oberflächentests

`vitest` und `@vitest/coverage-v8` sind installiert, `@testing-library/react`
nicht. Alle sieben Testdateien prüfen reine Funktionen. Die im Auftrag
verlangten Tests „für jede der sieben Flächen ein Test, dass der Chip da ist"
sind damit nicht möglich.

### 5. `typecheck` ruft ein Werkzeug auf, das nirgends steht

```json
"typecheck": "tsgo --noEmit"
```

`tsgo` ist in keiner Abhängigkeit aufgeführt; `typescript` liefert `tsc`.
Sofern die Lovable-Umgebung `tsgo` nicht selbst bereitstellt, schlägt
`bun run typecheck` fehl. **Unbelegt** — ich kann es von hier nicht ausführen.

### 6. Rohe Datenbankwerte als Filterbeschriftung

`machineFilters()` verwendet `machines.type` unverändert als Label. In der
Datenbank stehen `snack`, `combi`, `drink`. Der Kunde sieht englische
Enum-Werte statt „Snacks", „Kombi", „Getränke".

## ⚪ Anmerkungen

### 7. `LOYALTY_MILESTONES` dupliziert Backend-Konstanten

Die Prozentwerte 5/10/15/25 stehen im Frontend fest. Gegen
`app.grant_loyalty_bonuses` geprüft: **sie stimmen heute exakt**. Ändert das
Backend die Sätze, lügt das Frontend stumm weiter. Kein Fehler, aber eine
Stelle, die auseinanderlaufen kann.

### 8. Der Agent hat über die Freigabe hinaus gebaut

Freigegeben waren Stufe 1 und 2 mit Halt danach. Gebaut wurden alle sechs.
Das Ergebnis ist überwiegend gut, aber die Absprache galt nicht.

## Noch ungeprüft

* Ob die Tests tatsächlich laufen und grün sind
* Die Token-Umbenennung in `styles.css` (§ 5.1)
* Die neuen Routen: Auskunft, Löschung, Nachrichten, KI-Hinweis, Kampagnen
* Ob die KI-Chips an allen sieben Stellen sitzen
