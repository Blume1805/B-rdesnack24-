# Lovable-Auftrag 29.09.2026: Aufräumen, Barrierefreiheit, Stabilität

**Status:** gesendet am 29.09.2026, `message_id` `umsg_01m3p5t4esf17t2zszs4rgbgrr`.
**Anlass:** „Lovable soll weitermachen" (Philipp, 29.09.2026). Beauftragt ist
nur, was ohne offene Entscheidung geht. Nicht enthalten: P-3 (Startpreis
Kaltgetränke), Rabatt-Hinweis zum Pfand, Satz „Echtzeit-Bestand" (V-016-d);
diese hängen an Entscheidungen des Gesellschafters bzw. an Runbook M.

## Text an Lovable

```
Auftrag 29.09.2026: Aufräumen, Barrierefreiheit, Stabilität. Keine Textänderungen, keine neuen Muster, kein neues Paket in package.json.

1. Aufräumen
   a) src/components/bs24/Sequence.tsx wird nicht mehr verwendet. Wenn es wirklich nirgends importiert wird: löschen, samt zugehöriger CSS-Regeln (.location-sequence*, .sequence-title), die nur dafür existieren. Vorher mit rg prüfen und das Ergebnis zitieren.
   b) Sonst nichts entfernen.

2. Barrierefreiheit (WCAG 2.1 AA) messen und beheben
   - Mit Playwright und axe-core (nur als temporäres Prüfskript, z. B. über npx oder einen Ordner außerhalb von src, nicht in package.json) die Startseite und /impressum, /datenschutz, /agb, /widerruf, /kuendigung prüfen: je 390 px und 1440 px, je mit Bewegung an und aus.
   - Alle Befunde der Stufen „serious" und „critical" beheben. „moderate" und „minor" auflisten, beheben nur, wenn es ohne Text- oder Designänderung geht.
   - Tastatur: einmal mit Tab durch die ganze Startseite. Jedes Bedienelement erreichbar, Fokus immer sichtbar (Kontrast des Fokusrings mindestens 3:1 zum Hintergrund), Reihenfolge wie die Lesereihenfolge, keine Falle. Fehlt ein Sprunglink „Zum Inhalt", einen ergänzen (erst bei Fokus sichtbar, Ziel <main>).
   - Überschriftenhierarchie: genau ein h1, keine übersprungenen Ebenen.

3. Stabilität
   - Layoutverschiebung (CLS) beim Laden und beim Scrollen durch die ganze Seite messen (PerformanceObserver „layout-shift"), je 390/1440 px, Bewegung an und aus. Ziel: 0. Jede Verschiebung mit Ursache nennen und beheben.
   - Keine Konsolenfehler und keine Seitenfehler in allen acht Durchläufen.

4. Bericht
   Je Punkt 1a, 2, 3: was gemessen wurde (Zahlen vorher und nachher), was geändert wurde, was offen bleibt. Die axe-Ergebnisse als Tabelle: Regel, Stufe, Anzahl vorher, Anzahl nachher.
```

## Abnahme

(folgt nach Eingang der Antwort)
