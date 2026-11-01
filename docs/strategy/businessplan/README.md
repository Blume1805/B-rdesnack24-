# Businessplan 2027 bis 2036

Stand 01.11.2026. Überarbeitung der Fassung vom 30.08.2026 (PDF, erstellt in
Claude Design) mit den Vorgaben von Philipp vom 01.11.2026:

* Die Kundenapp ist kostenlos. Das App-Abo entfällt als Erlösquelle.
* Ausbau: 2 Automaten 2027, 1 Automat 2028, danach Automat 4 und 5, sobald sie
  aus dem Cashflow bezahlt werden können. Vorerst nicht mehr als 5 Automaten.
* Alles andere bleibt wie in der Fassung vom 30.08.2026.

Entscheidungen auf Rückfrage (01.11.2026):

| Frage | Entscheidung |
|---|---|
| App-Rabatte im Plan? | ja: die Hälfte der Käufe über die App, Ø 6 % Rabatt, also Warenerlös −3 %, Wareneinsatz unverändert |
| Wann ist ein Automat „aus dem Cashflow bezahlbar"? | Kauf im März, sobald am Vorjahresende 10.000 € frei verfügbar sind, nach Zinsen und KfW-Tilgung, ohne Entnahmen |
| Werbung und Sponsoring bei 5 statt 11 Automaten? | im Verhältnis zur Automatenzahl je Jahr |

| Datei | Zweck |
|---|---|
| `model.py` | Rechenmodell, aus den Tabellen der Fassung vom 30.08.2026 rekonstruiert |
| `data.py` | rechnet die drei Szenarien und schreibt `data.json` |
| `build.py` | erzeugt `businessplan.html` im Design der alten Fassung |
| `print.mjs` | druckt `Businessplan-Boerdesnack24-2027-2036.pdf` (Playwright, A4) |

## Wie das Modell entstanden ist

Das Rechenmodell der Fassung vom 30.08.2026 lag nicht vor, nur das PDF. Es
wurde aus dessen Tabellen zurückgerechnet:

* Aus dem Abstand zwischen pessimistischem, Planungs- und optimistischem
  Szenario (Warenumsatz × 0,6 / 1,0 / 1,4) ergibt sich der Anteil variabler
  Kosten je Euro Warenverkauf: 39,4 % für Automat 1 bis 3, 44,8 % für jeden
  weiteren Kombiautomaten.
* Der Rest der Kosten sind feste Kosten: 1.068 € je Automat und Jahr (Nayax 168 €,
  Strom 480 €, Wartung 360 €, Versicherung 60 €), dazu 1.450 € Software.
* Warenverkauf je Automat (Preise 2027, nach Spende): Automat 1 bis 3 zusammen
  22.093 € im Jahr, Sporthalle 4.235 €, jeder weitere Kombiautomat 6.364 € bis
  6.523 €. Im ersten Betriebsjahr 78 % (Inbetriebnahme etwa Mitte März).
  2027 laufen Automat 1 und 2 nur einen Teil des Jahres.

**Gegenprobe:** Mit den alten Eingaben (11 Automaten, App-Abo, Abschreibung im
vollen Anschaffungsjahr) trifft das Modell die alte Fassung in allen drei
Szenarien auf höchstens 21 € je Jahr. EBIT kumuliert: 276.630 € statt
276.686 €. Nachprüfbar mit `python3 model.py`.

## Was sich gegenüber dem 30.08.2026 geändert hat

| Punkt | alt | neu |
|---|---|---|
| App | Abo, 38.578 € Erlös in 10 Jahren | kostenlos, kein Erlös; Rabatte mindern den Warenerlös um 3 % |
| Automaten | 11 bis 2036, ab 2030 einer je Jahr | 5; Automat 4 und 5 aus dem Cashflow (Plan 2032 und 2033) |
| Werbeflächen, Sponsoring | Planwerte für 11 Automaten | im Verhältnis zur Automatenzahl |
| Abschreibung | volles Jahr im Anschaffungsjahr | monatsgenau ab Anschaffung (§ 7 Abs. 1 Satz 4 EStG); Anschaffung Automat 1 und 2 im August 2027, Automat 3 im April 2028, Automat 4 und 5 im März |
| Kassenstand | nicht ausgewiesen | ausgewiesen, weil der Kaufzeitpunkt davon abhängt |
| Standortprovision | 5 % vom Bruttoumsatz | gleicher Planwert, benannt als Standortvergütung (Miete oder Umsatzbeteiligung, ADR 0007) |
| Strom | 40 € je Monat | unverändert, ausdrücklich von Bördesnack24 getragen (Beschluss 01.10.2026) |
| Spende | „5 % jedes Warenverkaufs" | 5 % des Nettoerlöses aus dem Warenverkauf, Empfänger wählt die Kundschaft |

## Ergebnis (Planungsszenario)

Erlöse 2027 7.633 €, 2036 56.655 €. EBIT kumuliert 134.114 € (pessimistisch
59.171 €, optimistisch 214.497 €). Spendentopf 15.018 €.

## Befunde, die im Plan stehen und Aufmerksamkeit brauchen

1. **Liquidität im pessimistischen Szenario.** Die Überschüsse reichen von 2028
   bis 2032 nicht für Zins und Tilgung des KfW-Kredits. Der Kassenstand fällt
   auf bis zu −11.645 € (2030). Dieser Betrag muss aus Eigenmitteln oder einem
   Kontokorrentrahmen kommen. Die alte Fassung hatte dasselbe Problem, hat es
   aber nicht gezeigt, weil sie keinen Kassenstand auswies.
2. **Planungsszenario mit dünnem Polster.** Ende 2028 bleiben 694 €.
3. **Schwellen 50.000 € und 80.000 €** erreicht mit fünf Automaten kein
   Szenario. Für 50.000 € wären im Planungsszenario rund 10 Automaten nötig.
4. **Einkommensteuer** fällt bei der GbR bei den Gesellschaftern an und ist im
   Plan nicht enthalten, wie in der alten Fassung. Ohne Entnahmen bleibt sie in
   der Kassenrechnung unberücksichtigt.

## Neu erzeugen

```bash
cd docs/strategy/businessplan
python3 data.py && python3 build.py
node print.mjs        # braucht Playwright (Chromium)
```
