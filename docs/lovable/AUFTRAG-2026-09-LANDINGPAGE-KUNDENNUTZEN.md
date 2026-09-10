# Auftrag an Lovable: der fehlende Kundennutzen (10.09.2026)

**Status: nicht abgesendet — der Workspace hat kein Guthaben.**
Sobald aufgeladen ist, geht der Text im Abschnitt „Der Auftragstext"
unverändert an das Projekt `Bördesnack24 Landingpage`
(`0c068d85-ef58-4450-a511-3e7ac1d0446d`).

Reihenfolge: **zuerst** `landingpage-nachfassen.md` (Schriften, Sprache,
Lovable-Reste im Seitenkopf), **danach** dieser Auftrag. Der erste ist
technisch und klein, dieser ändert Inhalte.

## Warum es diesen Auftrag gibt

Die Kunden-App ist am 10.09.2026 nach dem Zielkonzept 2027 überarbeitet
worden (`docs/analyse/ZIELKONZEPT-KUNDEN-APP-2027.md`, Commit `9c73af5`).
Dabei sind drei Dinge festgestellt worden, die die Landingpage betreffen:

1. Die Seite erklärt die **Idee** vollständig (Automat, Sortiment,
   Spendenanteil) und springt dann zur Preistabelle. Zwischen beidem
   fehlt die Antwort auf die Frage, die ein Privatkunde zuerst stellt:
   *Was habe ich davon?*
2. Zwei Angaben in der Vergleichstabelle sind sachlich falsch. Beide
   sind in der App bereits korrigiert; die Seite muss nachziehen.
3. Der 5-%-Anspruch wird behauptet und mit einem Balken bebildert.
   Vor dem ersten Verkauf ist der **Rechenweg** der einzige Beweis, den
   es gibt — ein Balken ist Dekoration.

## Belege für die beiden Fehler

**„Digitale Belege" ist kein Abo-Vorteil.** `public.my_receipts()` in
`supabase/migrations/20260726114602_0062_receipt_archive.sql` prüft
nichts als `auth.uid()`; die letzte Zeile lautet
`grant execute on function public.my_receipts() to authenticated;`.
In der App führt `HistoryTab` ohne jede Bedingung ins Belegarchiv. Jeder
angemeldete Kunde hat die Belege — auch ohne Abo.

**„Status-Rabatt bis 10 %" ist zu hoch angesetzt.**
`Pricing.statusBonusRate` (`packages/bs24_kern/lib/core/pricing/pricing.dart`)
gibt Gold mit `0.05` an, also **+5 %**. Die 10 % sind die *Summe* aus
Abo-Rabatt (5 %) und Statusstufe Gold (+5 %). Wer „Status-Rabatt bis
10 %" liest, rechnet 5 + 10 = 15 %.

Beides sind Angaben über die Vorteile einer entgeltlichen Leistung, an
der Stelle, an der zum Abschluss aufgefordert wird — genau der Fall des
§ 5 Abs. 1, Abs. 2 Nr. 1 UWG. Die App-Fassungen lauten jetzt
„Belege als PDF" (in der kostenlosen Spalte) und „Status: bis +5 %
obendrauf".

---

## Der Auftragstext

Die Kunden-App ist überarbeitet worden, und dabei sind drei Sachen
aufgefallen, die die Seite betreffen. Zwei davon sind Korrekturen, eine
ist neu.

**1) In der Vergleichstabelle stehen zwei falsche Angaben.**

In `src/components/bs24/Plans.tsx`:

- `"Digitale Belege"` steht unter `PAID`. Das stimmt nicht. Die
  Belege bekommt jeder angemeldete Kunde, auch ohne Abo — die
  Serverfunktion, die sie ausliefert, prüft kein Abo, und die App
  verlinkt das Belegarchiv ohne Bedingung. Bitte in die Liste `SHARED`
  verschieben und in **„Belege als PDF"** umbenennen.

- `"Status-Rabatt bis 10 %"` ist zu hoch. Die Statusstufe gibt
  höchstens **+5 %** (Gold). Die 10 % sind erst die Summe aus
  Abo-Rabatt und Status. Bitte ändern in **„Status: bis +5 %
  obendrauf"**.

Das ist keine Kosmetik. Beide Zeilen stehen in der Spalte „Mit Abo",
also dort, wo wir zum Abschluss auffordern. Ein Vorteil, den es
kostenlos auch gibt, und ein Prozentsatz, der doppelt so hoch klingt wie
er ist, sind irreführende Angaben über die Vorteile der Leistung (§ 5
UWG). Die App sagt seit heute die richtigen Sätze; die Seite darf nicht
mehr versprechen als die App.

**2) Bitte einen ehrlichen Satz zum Abo dazu.**

Die Tabelle sagt, was das Abo kostet und was es enthält, aber nicht, ab
wann es sich lohnt. In der App gibt es dafür seit heute einen Rechner,
der einem Kunden auch sagt: *„Für dich lohnt sich das Abo aktuell noch
nicht."* Die Seite sollte nicht mehr behaupten als die App.

Bitte unter die Tabelle, vor den bestehenden Hinweis:

> Rechnet man nur den Dauerrabatt von 5 %, trägt sich das Jahres-Abo ab
> rund 17 € Einkauf im Monat, das Monats-Abo ab rund 20 €. Mit
> Angeboten und Coupons ist es früher so weit. Wer seltener kauft, fährt
> mit der kostenlosen Variante besser — die Mitbestimmung beim
> Spendenempfänger hängt ohnehin nicht am Abo.

Die Zahlen kommen aus `9,99 € ÷ 12 ÷ 5 %` und `0,99 € ÷ 5 %`; bitte
nicht runden oder ausschmücken.

Ich weiß, dass ein Satz, der vom Kauf abrät, in einer Verkaufsstrecke
ungewohnt ist. Er ist hier trotzdem der stärkere: Wir verkaufen an Leute
aus demselben Ort, in dem der Automat steht, und wir starten frühestens
2027. Ein Abo, das sich für jemanden nicht gerechnet hat, kostet uns
mehr als eines, das wir nicht verkauft haben.

**3) Eine neue Szene: „Warum die App?" — zwischen Szene 03 und 04.**

Das ist die eigentliche Lücke. Die Seite erklärt den Automaten, das
Sortiment und den Spendenanteil — und dann kommt eine Preistabelle. Was
dazwischen fehlt, ist die Frage, die ein Privatkunde zuerst stellt:
*Was habe ich davon?* Der Spendenanteil beantwortet sie nicht. Der ist
der Grund, warum jemand uns anderen vorzieht — nicht der Grund, warum
jemand überhaupt eine App installiert.

Drei Aussagen, mehr nicht, in dieser Reihenfolge:

> **Fahr nicht umsonst.**
> Die App zeigt vorher, was im Automaten liegt. Der Weg zu einem leeren
> Fach ist die eine Sache, die einen Automaten unbrauchbar macht.

> **Deine Belege. Immer dabei.**
> Jeder Kauf mit Beleg als PDF, ohne Zettel im Portemonnaie. Auch in
> der kostenlosen Variante.

> **Du siehst, wo dein Geld hingeht.**
> Nicht als Jahressumme, sondern für jeden einzelnen Kauf — der Betrag,
> der in der Region bleibt.

Zur Umsetzung:

- **Keine Sticky-Szene.** Auf der Seite sind bereits zwei (`Stage`,
  `Sequence`); das Budget aus dem Skill liegt bei drei, und die dritte
  soll frei bleiben. Reveal-Szene wie 02 und 03 reicht — drei Karten
  oder drei Zeilen mit Anker.
- **Kein CTA.** Die Szene informiert, sie verlangt nichts. Der nächste
  Schritt kommt in Szene 05b und im Abschluss.
- **Zukunftsform.** Es gibt keinen Automaten und die App ist in keinem
  Store. Kein Satz im Präsens, der einen Betriebszustand behauptet.
  Der `caveat`-Baustein der Seite gehört auch unter diese Szene.
- Die Szene braucht die zwölf Pflichtfelder aus der Szenenvorlage des
  Skills, bevor sie gebaut wird. Zielgruppe: Privatkunde aus
  Osterweddingen und den Nachbarorten. `information_goal`: „Ich weiß,
  wofür ich die App installieren würde."

**4) In Szene 04 bitte den Rechenweg zeigen.**

`ShareBar.tsx` behauptet die 5 % und bebildert sie mit einem Balken.
Solange nichts verkauft ist, gibt es keine Summe — und der Balken zeigt
nur, dass 5 % wenig vom Ganzen sind. Der Rechenweg dagegen ist
überprüfbar, und er ist der einzige Beweis, den wir vor dem ersten
Verkauf überhaupt haben.

Bitte unter den Balken, als kleine Tabelle in fester Schrittweite:

    Riegel                   2,50 €   brutto
    − 7 % Umsatzsteuer   →   2,34 €   netto
    × 5 %                →   0,12 €   für die Region

Dazu ein Satz: *„Gerechnet wird mit dem Steuersatz des jeweiligen
Produkts — bei einem Getränk mit 19 % fällt der Anteil entsprechend
anders aus."* Ohne diesen Satz liest sich die Rechnung wie eine
allgemeine Formel, und das wäre falsch.

Der bestehende `caveat` bleibt unverändert stehen.

**5) Gleiche Wörter wie in der App.**

Die App heißt die Bereiche seit heute **Automaten · Vorteile · Für die
Region · Profil**. „Meine Spenden" gibt es nicht mehr. Wo die Seite
einen Bereich der App benennt, bitte diese Wörter verwenden — und
„Spenden" nur dort, wo es um den Vorgang geht, nicht als Name eines
Bildschirms.

**Melde bitte zurück:**

1. Ob die neue Szene die zwölf Pflichtfelder vollständig hat — und wenn
   ja, die ausgefüllte Vorlage.
2. Dass es weiterhin bei zwei Sticky-Szenen bleibt.
3. Wie die Szenenliste danach aussieht, mit Nummern.
