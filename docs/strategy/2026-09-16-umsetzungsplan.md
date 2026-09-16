# Umsetzungsplan — vom Konzept in den Code

Stand: 2026-09-16 · Grundlage: `2026-09-15-fundament-und-finanzlogik.md`
Kennzeichnung: **FAKT** · **ANNAHME** · **ZU VERIFIZIEREN** · **GESPERRT**

## Leitgedanke

Das Konzept enthält zwei Arten von Änderungen, die **nicht** zusammen umgesetzt
werden dürfen:

* **Aufbau** — die öffentliche Automatenseite. Sie ist additiv, hängt an keiner
  der fünf offenen Größen und kann sofort entstehen.
* **Rückbau** — Abo, Dauerrabatt, Statusstufen, Gamification, Teile des
  Kundenbereichs. Der hängt vollständig an der Frage, ob der zweckgebundene
  Anteil eine Standortvergütung **ersetzt**. Fällt sie negativ aus, kehrt ein
  Endkundenbeitrag möglicherweise zurück — dann wäre gelöschter Code teuer.

Deshalb: Aufbau jetzt, Rückbau erst nach den Standortgesprächen.

## Phase 1 — Öffentliche Automatenseite (sofort, additiv)

**Was entsteht.** Eine öffentliche Seite je Automat, erreichbar über einen
QR-Code am Gerät, ohne Konto und ohne Anmeldung. Inhalt: welcher Automat,
welcher Standort, welcher Empfänger, welcher Betrag im laufenden Jahr, was tun
bei einer Störung, wo der Beleg bleibt.

**Warum nicht in der bestehenden App.** FAKT aus der Messung vom 15.09.2026:
Der Flutter-Web-Build lädt beim Erstaufruf 2,8 bis 4,1 MB. Am Automaten, bei
schwachem Netz in Halle oder Bad, ist das der Abbruchmoment. Die Seite entsteht
deshalb als eigenständiges, sehr leichtes Frontend.

**Entwurf über Lovable.** Der Entwurf wird in Lovable erstellt (React,
TypeScript, Tailwind), kommt als Vorlage zurück und wird hier geprüft, rechtlich
abgeglichen und in die Zielumgebung überführt. Briefing: `docs/lovable-brief-automatenseite.md`.

**Datenquelle.** Zunächst statisch gepflegte Inhalte je Automat. Der
Spendenbetrag wird erst dann automatisch berechnet, wenn die Transaktionsdaten
aus dem Clever-System verlässlich vorliegen — bis dahin wird er manuell gesetzt
und als Stand mit Datum ausgewiesen. Nichts anderes ist belegbar.

**Rechtliche Folgen:** siehe `docs/COMPLIANCE.md`, Vorgang V-006.

## Phase 2 — Gesperrt bis zur Standortentscheidung

**GESPERRT.** Diese Punkte werden nicht angefasst, bis die fünf Größen aus
Abschnitt 10 des Fundamentdokuments erhoben sind:

| Vorhaben | Betroffener Code | Warum gesperrt |
|---|---|---|
| Abo entfernen | `subscription_*`-Screens, `core/pricing`, `core/billing`, Migration 0061, Edge Functions `subscription-choose`/`subscription-cancel` | Kehrt ein Endkundenbeitrag zurück, wäre der Rückbau doppelt bezahlt |
| Statusstufen und Challenges entfernen | Migration 0058, `rewards_screen.dart` | dito; zusätzlich Datenbestand bestehender Konten |
| Dauerrabatt entfernen | `Pricing.appDiscountRate`, Preisanzeigen | hängt an der Frage, ob ein kundengebundener Vorteil technisch überhaupt möglich ist (ZU VERIFIZIEREN bei Automatenland) |
| Kundenbereich verkleinern | `features/customer/` (41 Dateien) | erst nach Entscheidung über die Zukunft der App |

**Auslöser für die Entsperrung:** drei geführte Standortgespräche mit Antwort
auf die Frage „Welche Beteiligung oder Miete hat Ihnen ein anderer Betreiber
angeboten?", plus die technische Auskunft von Automatenland.

## Phase 3 — Nachziehen der Rechtstexte

Erst wenn Phase 2 entschieden ist. Betroffen sind dann:

* `apps/mobile/lib/features/legal/presentation/legal_texts.dart`, Abschnitte 4
  und 5 der AGB (Abo-Modelle, Kündigung) — sie beschreiben heute zutreffend den
  Ist-Zustand der App und dürfen **nicht** vorab geändert werden, solange die
  Abo-Funktion im Code steht.
* `cancellation_screen.dart` (Widerruf und Kündigung)
* `docs/LEGAL_AUDIT.md`, `docs/PRIVACY.md`, `docs/CUSTOMER.md`

**Wichtig:** Rechtstexte folgen dem Code, nicht dem Konzept. Ein AGB-Abschnitt,
der ein Abo beschreibt, das es in der App noch gibt, ist richtig. Wird er vorab
gestrichen, entsteht eine Lücke — nicht Klarheit.

## Was in Phase 1 ausdrücklich nicht entsteht

Kein Konto, keine Anmeldung, kein Abo, kein Rabatt, keine Punkte, keine
Benachrichtigungen, keine Kundenidentifikation, keine native App, kein Tracking
ohne Einwilligung.

## Befund P-1 — zwei widersprüchliche Stufensysteme im Code

Gefunden am 2026-09-16 beim Gegenprüfen der Statuslogik. **FAKT**, aus dem Code
belegt.

Es existieren zwei Stufensysteme mit denselben Namen, aber unterschiedlichen
Schwellen und unterschiedlichem Vorteil:

| | Server: `app.status_tiers` (Migration 0058) | Client: `core/pricing/pricing.dart` |
|---|---|---|
| bronze | ab 0 € → 0 % Cashback | +1 % Rabatt |
| silber | ab 50 € → 1 % Cashback | +2,5 % Rabatt |
| gold | ab 150 € → 2 % Cashback | +5 % Rabatt |
| platin | ab 400 € → 3 % Cashback | **nicht abgebildet → 0 %** |

`customer_providers.dart` liest den Stufencode vom Server und reicht ihn an
`Pricing.effectiveDiscountRate` weiter. Daraus folgt im Betrieb:

1. **Der Zusatzrabatt greift zehnmal früher als dokumentiert.** Ein Kunde mit
   50 € kumuliertem Umsatz ist serverseitig `silber` und bekommt im Client
   2,5 Prozentpunkte extra — der Kommentar nannte dafür 500 €. Bei 150 € sind
   es bereits 10 % Gesamtrabatt statt der dokumentierten 1.000 €-Schwelle.
2. **Die höchste Stufe ist die schlechteste.** `platin` kennt der Client nicht
   und fällt auf 0 %. Ein Kunde mit 400 € Umsatz erhält 5 % Gesamtrabatt, einer
   mit 200 € dagegen 10 %.
3. **Cashback kommt obendrauf.** Der Server gewährt zusätzlich 1 bis 3 %.

**Wirkung.** Die Rechnung im Fundamentdokument ging vom dokumentierten Stand
aus. Real ist der Margenabfluss höher und setzt früher ein. Das schwächt das
Abo-Modell zusätzlich — und ist ein weiteres Argument dafür, die Statuslogik
nicht zu reparieren, bevor entschieden ist, ob sie überhaupt bleibt.

**Nicht behoben, mit Absicht.** Welche Schwellen und welcher Vorteil richtig
wären, ist eine Geschäftsentscheidung, keine technische. Sie gehört in Phase 2.
Korrigiert wurde nur der irreführende Kommentar in `pricing.dart`, der das
Gegenteil behauptete.

**Verbraucherrechtlich unkritisch:** Kunden erhalten derzeit einen höheren
Rabatt als dokumentiert, nicht einen niedrigeren. Es entsteht kein Nachteil für
sie und damit kein Anpassungsbedarf an Preisangaben oder AGB.
