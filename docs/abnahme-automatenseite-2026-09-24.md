# Abnahme Automatenseite („Börde Snack Connect") — Durchlauf vom 24.09.2026

Lovable-Projekt `6e26997e-1df5-46b7-bb94-3a5bdb154232`, geprüft am Quelltext zu
Commit `2cdc355`, nicht an Bildschirmfotos. Grundlage:
`docs/lovable-brief-automatenseite.md` samt Nachtrag vom 22.09. und Korrektur
vom 24.09.2026, dazu ADR 0007 und COMPLIANCE V-012/V-013.

Verbrauch: 1,6 Credits (Planlauf) + 2,6 Credits (Umsetzung).

## Ausgangslage

Das Projekt war seit dem 17.09.2026 nicht mehr bearbeitet worden und trug in
fast jedem Punkt einen überholten oder erfundenen Stand:

* durchgehende Kleinschreibung, obwohl sie am 21.09.2026 abgeschafft wurde;
* ein eigener Verein je Automat mit **4 %, 5 % und 6 %** — im Widerspruch zu
  ADR 0007 (ein gemeinsamer Topf, einheitlich 5 %);
* erfundene Beträge mit „stand 30.09.2026", einem Datum in der Zukunft;
* ein Impressum aus Platzhaltern („beispielstraße 1", „DE000000000") mit
  falscher Norm („§ 5 dsg");
* Kontakt `hallo@example.org`, Telefon `+49 000 0000000`;
* als App-Adresse noch `blume1805.github.io/B-rdesnack24-/`;
* ein Projektwissen, das „Spende" verbot und Kleinschreibung verlangte — es
  hätte jedem neuen Auftrag widersprochen und wurde vor dem Auftrag vollständig
  neu gefasst.

## Verlauf

Der Agent hat im ersten Lauf nur einen Umsetzungsplan geschrieben und auf eine
Freigabe gewartet. Der Plan deckte alle acht Punkte ab; er wurde per Nachricht
freigegeben, danach folgte die Umsetzung.

## Erledigt — belegt im Code

| Punkt | Nachweis |
|---|---|
| 1 Rechtschreibung | Alle Routen, `AppHinweis.tsx`, `__root.tsx` (auch 404- und Fehlerseite), `error-page.ts` (war noch englisch), `automaten.json`. |
| 2 Betreiberdaten | `automaten.json`: „Bördesnack24 GbR", `kontakt@boerdesnack24.de`, `https://app.boerdesnack24.de`; `telefon` aus Daten, Typ und allen Seiten entfernt. |
| 3 Betriebsstand | `betriebsstatus: "vorbereitung"`; `istVorbereitung` steuert den Hinweis „Vorschau mit Beispieldaten…" auf jeder Seite (gold hinterlegt, Ink-Text), den Zusatz „(Beispiel)" an Standortnamen, „Beispielwert" an Beträgen und `noindex` auf allen Seiten. Das Zukunftsdatum ist entfernt. |
| 4 Spendenmodell | `empfaenger` ersetzt durch `spende.beitragEuro`; keine Vereinsnamen mehr; Bezugszeile einheitlich „5 % vom Nettoerlös"; Spendentext **wörtlich** wie beauftragt; kein Rhythmus, kein „aktueller Empfänger"; „rechtliche Einordnung … offen" entfernt. |
| 5 App-Hinweis | Satz „In der App entscheidest du auch mit, wohin die 5 % Spende gehen." ergänzt. |
| 6 Impressum | Wörtlich Fassung `v4 · 2026-09`, ohne Aufsichtsbehörde, ohne OS-Plattform. |
| 7 Datenschutz | Wörtlich wie beauftragt, einschließlich Abschnitt zum Meldeformular und zum App-Link. |
| 8 Kontakt | Telefon und „beispieldaten." entfernt. |

## Befunde, nachrangig — nicht nachbeauftragt

* 🟢 Die Seitenbeschreibungen von Start- und Grundseite sprechen im Präsens
  („trägt … bei", „gehen in einen gemeinsamen Spendentopf"), obwohl kein Automat
  läuft. Solange `noindex` gilt, erscheinen sie nirgends; beim Umschalten auf
  `live` stimmen sie. Kein Handlungsbedarf, solange beides an demselben
  Schalter hängt.
* 🟢 `noindex` steht doppelt im Kopf (Grundseite und Unterseite). Wirkungslos,
  aber unschädlich.

## Weiterhin gilt

Die Seite wird **nicht veröffentlicht**, bevor ein Automat in Betrieb ist
(V-010) und der Auftragsverarbeitungsvertrag mit dem Hoster vorliegt. Beim
Umschalten auf `live` sind die Beispielautomaten durch echte zu ersetzen —
dann mit echtem Stand je Betrag.
