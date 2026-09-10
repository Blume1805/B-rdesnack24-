# Landingpage — Inhalte für Sortiment und Abo

Stand 08.09.2026. Quelle der Zahlen ist die Produktionsdatenbank
(`nnfsyuglkqycwenwxmuw`), abgefragt am selben Tag. Wer die Seite ändert,
prüft die Zahlen neu — sie stehen hier, damit niemand sie schätzt.

## Sortiment

```sql
select coalesce(category,'(ohne)') , count(*)
from public.products
where deleted_at is null and status = 'active'
group by 1 order by 2 desc;
```

| Warengruppe | Anzahl |
|---|---|
| Getränke | 26 |
| Eis | 20 |
| Süßwaren | 13 |
| Snacks | 6 |
| **Summe** | **65** |

Stand 10.09.2026. Drei Popcorn-Sorten sind an diesem Tag dazugekommen
(BS-063 bis BS-065, Kategorie Snacks) — ohne Verkaufspreis,
Einkaufspreis und Gewicht, weil diese Angaben noch nicht feststehen.

Dazu ein weiteres Produkt ohne Kategorie, das auf `inactive` steht und
deshalb nicht mitzählt (66 Zeilen insgesamt).

**Heißgetränke fehlen in dieser Liste.** Es gibt einen geplanten
Heißgetränkeautomaten, aber noch kein einziges Produkt in der Kategorie.
Sie darf deshalb nicht mit einer Zahl auftreten.

### Wie darüber geschrieben werden darf

Diese 65 Produkte sind eine **Planungsliste**. Nichts davon ist gekauft,
nichts liegt in einem Automaten, kein Lieferantenvertrag steht.

Zulässig ist der Zeitbezug der Planung:

> „65 Produkte sind für den Start vorgesehen, verteilt auf vier
> Warengruppen."

Unzulässig ist jede Gegenwartsform, die einen Bestand behauptet — „wir
führen 65 Produkte", „unser Sortiment umfasst", „65 Produkte
verfügbar". Das wäre eine Angabe über einen Betriebszustand, den es
nicht gibt (§ 5 UWG).

**Keine Markennamen.** Die Liste enthält echte Hersteller. Sie stehen
dort zur Kalkulation, nicht zur Werbung: Ohne Liefervereinbarung sind
Markennennungen eine Behauptung über eine Geschäftsbeziehung, die nicht
besteht, und berühren fremde Kennzeichenrechte. Nur Warengruppen und
Zahlen.

**Keine Nährwerte, keine Allergene.** Von den 65 Produkten trägt
**keines** Nährwerte oder Allergene in der Datenbank (`energy_kcal` und
`allergens` sind durchgehend leer). Die Seite darf beides deshalb nicht
als vorhandene Funktion darstellen.

## Abo — kostenlos gegen kostenpflichtig

Preise brutto, inklusive Umsatzsteuer. Quelle:
`packages/bs24_kern/lib/core/pricing/pricing.dart`, gespiegelt aus der
Server-Funktion `choose_subscription_plan`.

| | Kostenlos | Mit Abo |
|---|---|---|
| Automatenfinder und Navigation | ja | ja |
| Bestand in Echtzeit | ja | ja |
| Nährwerte und Allergene | ja | ja |
| Kundenkarte und Kaufhistorie | ja | ja |
| Nachrichten und Favoriten | ja | ja |
| Kontakt und Reklamation | ja | ja |
| Über den Spendenempfänger mitbestimmen | ja | ja |
| 5 % Dauerrabatt | — | ja |
| Status-Rabatt bis 10 % | — | ja |
| Deals und Angebote −10 % | — | ja |
| Bonuspunkte und Coupons 5–25 % | — | ja |
| Geburtstagsgutschein | — | ja |
| Digitale Belege | — | ja |
| **Preis** | **0 €** | **0,99 €/Monat oder 9,99 €/Jahr** |

### Drei Dinge, die dabei stimmen müssen

**Es gibt kein Lifetime-Abo.** `Pricing.lifetimePubliclyOffered` steht
auf `false`. Das Modell darf auf der Seite nicht vorkommen — auch nicht
als „bald", „demnächst" oder „Founders Edition".

**Die Mitbestimmung hängt nicht am Abo.** Sie steht in der Tabelle
bewusst oben bei „kostenlos". Szene 05 sagt das bereits; die Tabelle
darf dem nicht widersprechen.

**Nährwerte und Allergene** stehen in der Tabelle, weil die App die
Funktion hat. Die Daten fehlen aber noch (siehe oben). Solange das so
ist, gehört an die Abo-Übersicht derselbe Vorbehalt wie an alles andere:
die App ist nicht im Store, nichts davon ist heute nutzbar.

### Vorbehalt, der an die Abo-Übersicht gehört

> Die App ist noch nicht im App Store und nicht bei Google Play. Es
> lässt sich derzeit kein Abo abschliessen, und es wird nichts
> abgebucht. Die Preise nennen wir, damit du sie kennst, bevor es
> losgeht — nicht, damit du heute buchst.

## „GbR" in der Überschrift

Entscheidung Philipp, 08.09.2026: In der **Kopfzeile** der Startseite
(Augenbraue über der Überschrift) entfällt „GbR". Aus

    BÖRDESNACK24 GBR · SÜLZETAL

wird

    BÖRDESNACK24 · SÜLZETAL

Das gilt auch für den Seitentitel und die Meta-Beschreibung.

**Nicht entfernt wird „GbR"** im Impressum und in den Rechtstexten. Dort
ist die vollständige Firmierung einschliesslich der Rechtsform
vorgeschrieben (§ 5 DDG). Im Fussbereich bleibt sie ebenfalls stehen —
sie identifiziert dort den Betreiber unmittelbar über dem Link zum
Impressum.
