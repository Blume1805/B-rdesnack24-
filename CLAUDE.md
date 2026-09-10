# Bördesnack24 — Arbeitsregeln für Claude

Dieses Dokument sammelt dauerhafte Vorgaben, die für **jede** Änderung
am Projekt gelten. Neue Regeln unten anhängen.

## KI-Transparenz nach Art. 50 EU AI Act (Pflicht, ohne Nachfrage)

Immer wenn im Kundenbereich neue Inhalte hinzukommen, die **algorithmisch,
regelbasiert oder KI-basiert** erzeugt/ausgewählt werden — Coupons,
Empfehlungen, Angebote, generierter Text, dynamisch gewählte Produkt-
Kombinationen, personalisierte Nachrichten —, ist **automatisch** ein
sichtbarer KI-Chip an der betroffenen Section zu platzieren.

* Widget: `AiBadge` aus `core/widgets/design_system/ai_badge.dart`
* Ziel: `AiInfoScreen` (`features/customer/presentation/screens/ai_info_screen.dart`);
  dort im Abschnitt „Was wird eingesetzt?" die neue Funktion **auch
  textlich** ergänzen, damit die Info-Seite vollständig bleibt.
* Kein Nachfragen beim User nötig. Standard: `dense: true` als Chip
  neben Section-Header (oder im Header-Row der Karte), `onTap` öffnet
  `AiInfoScreen` per `MaterialPageRoute`.

Der regelbasierte Chatbot bleibt bewusst als „Automatischer
Chat-Assistent" gekennzeichnet — nicht als „KI", weil er kein
AI-System i. S. v. Art. 3 EU AI Act ist. Für zukünftige LLM-Backends
das gleiche Prinzip anwenden.

## Automaten in Betrieb nehmen — Auslöser für eine Pflichtliste

**Stand 05.09.2026: Es gibt noch keine Automaten.** Deshalb werden noch
keine Automatenumsätze erfasst, und deshalb ist der Webhook `nayax-webhook`
absichtlich nicht ausgerollt.

Sobald der **erste Automat gekauft** ist, ist Philipp an
`docs/betrieb/AUTOMAT-INBETRIEBNAHME.md` zu erinnern — **ungefragt und beim
ersten Anlass**, an dem Automaten, Standorte, Nayax, Bestand oder Umsätze
zur Sprache kommen. Die Liste dort ist keine Empfehlung: ohne sie fehlen ab
dem ersten Verkauf die Aufzeichnungen, die §§ 145–147 AO verlangen, und das
lässt sich nachträglich nicht herstellen.

Diese Regel gilt so lange, bis in der Tabelle `machines` mindestens ein
aktiver Automat steht.

## Kombiangebote: die Umsatzsteuer wird immer offen ausgewiesen

Ein Bundlepreis über mehrere Steuersätze ist keine buchbare Zahl. Die
Aufteilung läuft **immer** so, und zwar in dieser Reihenfolge:

1. Verhältnis des Einzelpreises zur Summe der Einzelpreise, **als
   Prozentsatz auf zwei Nachkommastellen** (3,10 / 7,10 = 43,66 %).
2. Bundlepreis mit genau diesem Prozentsatz multiplizieren, auf den Cent
   runden (6,00 € × 43,66 % = 2,62 €).
3. Netto und Umsatzsteuer je Position mit dem Steuersatz **dieses**
   Produkts herausrechnen.

Der Rundungsrest liegt auf der letzten Position, damit die Summe den
Bundlepreis auf den Cent trifft.

**Der Prozentsatz wird gerundet, bevor er angewandt wird.** Nur so ist die
Zahl, die angezeigt wird, dieselbe, mit der gerechnet wurde. Eine
Aufteilung, die anders rechnet als sie ausweist, ist nicht prüfbar.

Einzige Quelle: `public.bundle_split()`. Nirgendwo sonst wird ein
Bundlepreis aufgeteilt — nicht im Client, nicht in einer zweiten Funktion.

**Jede Oberfläche, auf der ein Bundle angelegt oder angesehen wird, zeigt
diese Rechnung vollständig**: je Position Einzelpreis, Anteil in Prozent,
Bruttoanteil, Steuersatz, Netto und Umsatzsteuer, dazu die Summen. Ohne
Nachfragen, ohne Aufklappen. Gilt für neue Masken genauso wie für
bestehende.

## Kombiangebote: eine Gestaltung für alle

Der Coupon eines Kombiangebots sieht **immer gleich** aus. Er trägt:

* die Produktbilder nebeneinander, mit einem `+` dazwischen
* die Summe der Einzelpreise, durchgestrichen — **mit und ohne**
  Dauerrabatt
* den Bundlepreis — ebenfalls mit und ohne Dauerrabatt
* die Ersparnis
* kleiner darunter die Laufzeit
* eine Fläche für ein gebuchtes Werbelogo, sichtbar als „Anzeige"
  gekennzeichnet (§ 5a Abs. 4 UWG)

Daraus folgt der Ablauf: **Ein neues Kombiangebot entsteht allein durch
Anlegen in der Gesellschafter-App.** Kein Entwurf, kein Lovable-Auftrag,
keine neue Programmfassung, kein Store-Durchlauf. Die Vorlage wird
einmal gebaut, danach füllt sie sich aus der Datenbank.

Wer die Vorlage ändert, ändert sie für alle bestehenden Angebote — das
ist der Preis dafür und ausdrücklich gewollt.

**Alle vier Preise kommen vom Server** (`active_bundles`). Der Client
rechnet den Dauerrabatt nicht nach: `7,10 × 0,95` ergibt je nach
Rundungsregel 6,74 oder 6,75, und ein Preis, der sich je nach Plattform
um einen Cent unterscheidet, ist keiner. Quelle des Satzes ist
`app.dauerrabatt_prozent()`.

**Der durchgestrichene Preis entfällt**, sobald er nicht höher ist als
der geltende. Er behauptet sonst eine Ersparnis, die es nicht gibt
(§ 5 UWG).
