# Kunden-App und Gesellschafter-Bereich — wie sie zusammenhängen

Stand 03.09.2026.

## Die Frage war falsch gestellt, und das ist eine gute Nachricht

„Sind die beiden Apps gekoppelt?" setzt voraus, dass es zwei Systeme gibt.
Gibt es nicht. `apps/mobile` ist **eine** Flutter-Anwendung mit
`features/customer`, `features/management` und `features/finance`
nebeneinander, und alle drei sprechen mit **derselben** Supabase-Datenbank
(`nnfsyuglkqycwenwxmuw`).

Es gibt also keine Schnittstelle zwischen zwei Systemen, die man bauen oder
synchron halten müsste — kein Abgleich, kein Versatz, keine zwei Wahrheiten.
Was es gibt, ist die Frage, ob die Auswertungen der Gesellschafter die Daten
der Kunden **tatsächlich lesen**. Und da war die Kopplung halb.

## Was schon gekoppelt war

| Auswertung | Funktion | Liest Kundenkäufe |
|---|---|---|
| Finanzübersicht | `finance_summary(p_from, p_to)` | ✓ direkt aus `purchases` / `purchase_items` |
| Finanz-Kennzahlen | `finance_kpis(p_from, p_to)` | ✓ |
| Bilanzkennzahlen | `finance_balance_kpis()` | — (Bestände/Konten) |

Ein Kauf in der Kunden-App erscheint in der Finanzübersicht, sobald die
Seite neu lädt. Nachgewiesen in `102_verkauf_bucht_bestand.sql`, T18.

## Was nicht gekoppelt war

Der **Bestand**. `purchases` trug Auslöser für Rechnung, Loyalty und
Firmenprüfung — aber keinen für den Warenabgang. `movement_type` kennt den
Wert `sale` seit jeher; geschrieben hat ihn nie jemand.

Die Folge wäre nicht „eine Zahl fehlt", sondern **drei falsche Zahlen
gleichzeitig**: der Bestand bliebe stehen, die FIFO-Bewertung rechnete mit
Ware, die längst verkauft ist, und die Differenz zur ersten Zählung
erschiene als Schwund, den es nie gab. Genau in dieser Reihenfolge hätte man
den Fehler bemerkt: zuerst am unerklärlichen Schwund, dann am Bestand, zuletzt
an der Ursache.

Aufgefallen ist es, solange `purchases` **null Zeilen** hat. Es gab also
nichts nachzubuchen — der Auslöser greift ab dem ersten Verkauf.

## Was jetzt passiert

`app.kauf_bucht_bestandsabgang()` an `purchase_items` schreibt je Position
eine Bewegung `type = 'sale'`, `source = 'verkauf'`, negative Menge. Der
vorhandene Auslöser `trg_apply_movement` schreibt daraufhin `public.inventory`
fort — der Bestand sinkt ohne weiteres Zutun.

**Doppelbuchung ist unmöglich gemacht, nicht unwahrscheinlich.** Ein
eindeutiger Index über `source_ref` für `source = 'verkauf'` lässt dieselbe
Kaufposition kein zweites Mal zu. Ein wiederholter Import kann den Bestand
nicht doppelt senken; die Datenbank verweigert es, gleich wer die
Wiederholung auslöst.

**Nicht buchbare Positionen werden sichtbar gemacht.**
`purchases.machine_id` und `purchase_items.product_id` sind nullable, die
gleichnamigen Spalten in `inventory_movements` nicht. Eine Position ohne
Automat oder ohne Produktbezug lässt sich also nicht buchen. Sie
stillschweigend zu überspringen wäre die bequeme und die gefährliche Wahl:
der Bestand wäre zu hoch, und niemand wüsste warum. Den Kauf abzuweisen wäre
ebenso falsch — der Verkauf am Automaten ist bereits geschehen, wenn wir ihn
buchen. Deshalb landet jede solche Position in
`public.bestandsabgang_luecken`, abrufbar über `bestandsluecken_offen()`.
Die Inventur sagt dann „drei Positionen ohne Zuordnung", statt leise zu
wenig zu zählen.

**Kein Einkaufspreis an der Verkaufsbewegung.** Der Wert des Abgangs ergibt
sich nach FIFO aus den Zugangslosen. Ihn zusätzlich an der Bewegung zu
führen hiesse, zwei Wahrheiten zu pflegen.

**Korrekturen laufen über eine Gegenbewegung.** Der Auslöser hängt nur an
`INSERT`. Ein gebuchter Verkauf wird nicht rückwirkend verändert, sondern
mit `type = 'correction'` berichtigt.

## „In Echtzeit" — was das hier heisst und was nicht

Es gibt **keinen Live-Push**. Die Realtime-Publikation von Supabase enthält
heute **keine einzige Tabelle**; kein Bildschirm aktualisiert sich von
selbst. Alle Auswertungen holen ihre Daten beim Öffnen und beim Neuladen.

Für Finanzdashboard und Inventur ist das die richtige Wahl und nicht bloß
der einfachere Weg: eine Kennzahl, die sich unter dem Blick ändert, während
man sie liest, ist beim Zählen und beim Abstimmen eher hinderlich. Wer eine
Kachel wirklich live haben will (etwa den Tagesumsatz), bekommt sie — dann
aber bewusst für genau diese Kachel und nicht für die ganze Oberfläche.

## Zugriff: nur die Gesellschafter

| Funktion | Prüfung |
|---|---|
| `finance_summary`, `finance_kpis` | `auth_has_permission('finance.view')` |
| `inventory_fifo_movements`, `inventory_fifo_lots` | `profiles.role in ('system_admin','shareholder')` |
| `bestandsluecken_offen` | `is_admin()` oder `inventory.view` / `inventory.edit` |

`finance.view` und `inventory.view` haben ausschließlich die Rollen
`shareholder` und `system_admin`. Ein Kunde wird abgewiesen (nachgewiesen,
T13 und T15), ohne Anmeldung ebenfalls (T16).

### Zwei offene Punkte beim Zugriff

**Es gibt keine Konten für Pia und Philipp.** In `profiles` stehen als
`shareholder` und `system_admin` heute nur die beiden Prüfkonten
`demo-gs@boerdesnack24.app` und `demo-admin@boerdesnack24.app`, die ich zum
Ansehen eingerichtet habe. Die Aussage „nur die Gesellschafter haben
Zugriff" stimmt als Regel, aber die echten Konten fehlen noch. Solange das
so ist, sind die Prüfkonten die einzigen Schlüssel — und sie sollten nach
dem Anlegen der echten Konten gelöscht werden
(`scripts/betrieb/pruefzugang_entfernen.sql`).

**Zwei verschiedene Türen zum selben Raum.** `is_shareholder()` verlangt die
Rolle **und** eine freigegebene Zeile in `shareholder_approvals` — also vier
Augen. `inventory_fifo_movements` prüft dagegen nur `profiles.role` und geht
damit an der Freigabe vorbei. Beide Wege führen zu Gesellschafterdaten, aber
nur einer verlangt die Freigabe. Das sollte vereinheitlicht werden; ich habe
es nicht eigenmächtig geändert, weil es Zugriff **entziehen** kann und damit
eine Entscheidung ist, keine Aufräumarbeit.

## Nachweise

`scripts/pruefumgebung/102_verkauf_bucht_bestand.sql`, 18 Prüfungen gegen
die Replik, alle grün: Bestand sinkt um genau die verkaufte Menge, Bewegung
trägt den Kauf- und nicht den Buchungszeitpunkt, Doppelbuchung wird
abgewiesen, beide Lückenfälle mit eigenem Grund, Nullmengen erzeugen nichts,
Gesellschafter sehen den Verkauf in der Bestandsauswertung, Kunde und
Unangemeldeter werden abgewiesen, und derselbe Kauf erscheint in den
Finanzzahlen.

### Ein Fund in der Prüfumgebung selbst

`pruef.zaehle` hat Zugriffs-Gegenproben auf **skalare STABLE-Funktionen
stillschweigend bestanden**, ohne sie auszuführen: bei `count(*)` darf der
Planer den Funktionsaufruf weglassen, der Plan ist dann nur noch
`Aggregate -> Result`. Aufgefallen, weil `bestandsluecken_offen` für `anon`
korrekt gesperrt ist, der Test es aber nicht bemerkte.

Das Werkzeug erzwingt die Auswertung jetzt über `row_to_json`. Nach der
Korrektur liefen **sechzehn** Suiten erneut durch, ohne dass eine weitere
Gegenprobe umgekippt wäre — die Lücke hatte also nur diesen einen Fall
verdeckt. Ein Test, der nicht misst, ist schlimmer als kein Test: er
erzeugt Vertrauen.
