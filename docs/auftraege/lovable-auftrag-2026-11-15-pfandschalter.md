# Lovable-Auftrag 15.11.2026: Pfand-Schalter umlegen

**Grundlage:** Runbook M ist seit dem 15.11.2026 in der Produktion ausgerollt
(`docs/audit/2026-11-15-ausrollplan/README.md`, Abschnitt 5). Angekündigt im
Ausrollplan, Freigabe Philipp „Ja, alle 14 ausrollen".
**Stand Lovable vorher:** Commit `5b26574`.

Vor dem Senden an der Produktion nachgemessen (Produktstamm, 15.11.2026):

| Aussage der Seite bei `pfandGetrennt = true` | Messwert |
|---|---|
| Kaltgetränke ab 1,25 € zzgl. 0,25 € Pfand | Vio Wasser 0,5 l und Müllermilch: 1,25 € Ware, 0,25 € Pfand. Durstlöscher 1,50 € ohne Pfand |
| Heißgetränke ab 1,30 € | Espresso, Tee: 1,30 € |
| Snacks und Süßes ab 0,80 €, Eis ab 1,00 € | 0,80 € bzw. 1,00 € |

`bestandLive` bleibt `false`: Die Datenbank liefert die Verfügbarkeit, die
ausgelieferte App (Stand 26.09.2026) zeigt sie noch nicht.

## Text an Lovable

```
Auftrag 15.11.2026: einen Schalter umlegen. Nur das Folgende ändern, sonst nichts.

Die Datenbank führt den Pfand seit heute getrennt vom Preis (Runbook M ist ausgerollt und nachgemessen: 18 Getränke mit 0,25 € Pfand, günstigstes Kaltgetränk mit Pfand 1,25 € Ware zzgl. 0,25 € Pfand).

1. In src/data/site.ts `pfandGetrennt` auf `true` setzen. Den Kommentar darüber ersetzen durch: „Seit 15.11.2026 true: Runbook M (Pfand getrennt vom Preis) ist in der Datenbank ausgerollt. Steuert alle Pfand-Aussagen der Seite.“

2. `bestandLive` bleibt `false`. Den Kommentar darüber ersetzen durch: „Erst auf true setzen, wenn die App mit der Verfügbarkeitsanzeige ausgeliefert ist. Die Datenbank kann es seit 15.11.2026, die ausgelieferte App noch nicht.“

3. Sonst keine Datei ändern, keine Texte neu formulieren, kein Paket aktualisieren.

Prüfen und im Bericht wörtlich zitieren, wie die Seite jetzt anzeigt:
- den Startpreis der Kaltgetränke im Abschnitt Sortiment,
- den Hinweis unter den App-Vorteilen (Rabatte und Pfand),
- die Definition des Nettoerlöses im Abschnitt „Der Anteil“.
Erwartet: „ab 1,25 € zzgl. 0,25 € Pfand“, „Rabatte gelten nicht für den Pfand.“ und „Umsatz ohne Umsatzsteuer und ohne Pfand“. Weicht eine Anzeige davon ab, nichts korrigieren, sondern die Abweichung melden.

Am Ende je Punkt eine Zeile, was geändert wurde.
```

## Abnahme (nach dem Lauf)

Lauf beendet am 15.11.2026, Lovable-Commit `46aaa80` (1 Credit). Geprüft am Diff
`5b26574..46aaa80` und an `src/data/site.ts` in der neuen Fassung.

| # | Prüfung | Ergebnis |
|---|---|---|
| 1 | `pfandGetrennt = true`, Kommentar wie beauftragt | ✅ wortgleich |
| 2 | `bestandLive = false`, Kommentar wie beauftragt | ✅ wortgleich |
| 3 | keine weitere Datei geändert | ⚠️ zwei Nebenänderungen der Lovable-Plattform, nicht beauftragt: `package.json` (Bauwerkzeug `@lovable.dev/vite-tanstack-config` 2.26.5 → 2.27.1, nur Entwicklung) und eine neue Datei `.lovable/north-star/north-star.md` („Leitstern" mit Messgröße, von Lovable selbst angelegt, nicht Teil der ausgelieferten Seite). Hingenommen |

Vom Agenten von der Seite gelesen (390 px und 1440 px): „ab 1,25 €" mit
kleinerer Zeile „zzgl. 0,25 € Pfand"; „… Rabatte gelten nicht für den Pfand.";
„Nettoerlös heißt: Umsatz ohne Umsatzsteuer und ohne Pfand."; Karte
„Automatenfinder" weiter „Standorte, Nährwerte und Allergene." Die Anzeige
selbst konnte ich nicht ansehen (Lovable-Adressen von hier gesperrt).

Hinweis: Die Leitstern-Datei spricht vom „Sülzetal"; die Seite selbst sagt
„Osterweddingen und Umgebung". Solange die Datei nicht ausgeliefert wird, ohne
Folge.
