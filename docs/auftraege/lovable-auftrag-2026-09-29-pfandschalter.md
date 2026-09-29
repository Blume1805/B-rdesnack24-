# Lovable-Auftrag 29.09.2026: Pfand-Schalter für die Landingpage

**Status:** 1. Versand 29.09.2026 (`umsg_01m3p8z5q0e6j82ktvtpc9wykb`): Lovable brach nach dem Lesen ab, **keine Änderung**, 0,2 Credits. 2. Versand mit genauen Dateiangaben (Text unten, „Wiederholung") **nicht möglich: Arbeitsbereich ohne Credits** (29.09.2026). Wartet auf Credits.
**Entscheidungen Philipp, 29.09.2026:** P-3 → „ab 1,25 € zzgl. Pfand"; Hinweis
„Rabatte gelten nicht für den Pfand" → ja; Automatenfinder → Bestand für Kunden
öffnen (Satz „Echtzeit-Bestand" bleibt, Umsetzung in App und Datenbank).

**Warum ein Schalter:** Alle drei Pfand-Aussagen stimmen erst, wenn die
Datenbank den Pfand getrennt führt (Runbook M). Mit einem Schalter ist die
Seite in beiden Zuständen wahr und kann sofort veröffentlicht werden; nach
Runbook M wird nur der Schalter umgelegt.

## Text an Lovable

```
Auftrag 29.09.2026: Pfand-Schalter. Nur die unten genannten Texte, sonst keine Änderungen.

1. In src/data/site.ts ein Feld `pfandGetrennt: false` ergänzen, mit Kommentar: „Erst auf true setzen, wenn Runbook M (Pfand getrennt vom Preis) in der Datenbank ausgerollt ist. Steuert alle Pfand-Aussagen der Seite.“

2. Drei Stellen hängen an diesem Schalter, sonst nichts:
   a) Sortiment, Kaltgetränke (src/data/sortiment.ts): bei false wie heute „ab 1,50 €“. Bei true „ab 1,25 €“ und direkt darunter, gleiche Tafel, kleinere Schrift: „zzgl. 0,25 € Pfand“. Die Werte (1,50; 1,25; Pfand 0,25) stehen in sortiment.ts, nicht in der Komponente. Die anderen drei Kategorien bleiben unverändert.
   b) Hinweis unter den App-Vorteilen (Absatz mit „Coupons lassen sich nicht mit anderen Aktionen kombinieren. …“): bei true am Ende den Satz „Rabatte gelten nicht für den Pfand.“ anfügen. Bei false unverändert.
   c) Der Anteil (ShareBar): bei false „Nettoerlös heißt: Umsatz ohne Umsatzsteuer.“, bei true „Nettoerlös heißt: Umsatz ohne Umsatzsteuer und ohne Pfand.“

3. Prüfen und im Bericht zitieren: Seite einmal mit false und einmal mit true bauen (danach wieder false), je 390 px und 1440 px, Bildschirmfoto von Sortiment, App-Vorteilen und Anteil. Kontrast der neuen Pfandzeile auf der Kaltgetränke-Tafel (Creme auf Ink) mindestens 4,5:1. Keine Layoutverschiebung, kein neues Paket.

Am Ende je Punkt 1, 2a, 2b, 2c, 3 eine Zeile, was geändert wurde. Endzustand: pfandGetrennt = false.
```

## Wiederholung (Text an Lovable, sobald Credits da sind)

```
Der vorige Lauf hat abgebrochen, ohne etwas zu ändern. Bitte jetzt umsetzen. Es gibt keine Fehlermeldungen zu suchen; es sind reine Textänderungen an vier Dateien.

Auftrag 29.09.2026: Pfand-Schalter. Nur die unten genannten Texte, sonst keine Änderungen.

1. src/data/site.ts: Feld `pfandGetrennt: false` ergänzen, mit Kommentar: „Erst auf true setzen, wenn Runbook M (Pfand getrennt vom Preis) in der Datenbank ausgerollt ist. Steuert alle Pfand-Aussagen der Seite.“

2. Drei Stellen hängen an diesem Schalter, sonst nichts:
   a) src/data/sortiment.ts und src/components/bs24/Sortiment.tsx, nur Kaltgetränke (id "kalt"): In sortiment.ts für "kalt" zusätzlich `abPfandGetrennt: 1.25` und `pfand: 0.25` hinterlegen. In Sortiment.tsx: bei site.pfandGetrennt === false wie heute „ab 1,50 €“; bei true „ab 1,25 €“ und direkt darunter in derselben Tafel, kleinere Schrift, „zzgl. 0,25 € Pfand“ (Betrag aus sortiment.ts formatiert). Die anderen drei Kategorien bleiben unverändert.
   b) src/routes/index.tsx, Absatz mit der Klasse app-benefits__note („Coupons lassen sich nicht mit anderen Aktionen kombinieren. Bei mehreren Vorteilen gilt automatisch der günstigste Preis.“): bei true am Ende den Satz „ Rabatte gelten nicht für den Pfand.“ anfügen. Bei false unverändert.
   c) src/components/bs24/ShareBar.tsx, erster Punkt der share-facts: bei false „Nettoerlös heißt: Umsatz ohne Umsatzsteuer.“, bei true „Nettoerlös heißt: Umsatz ohne Umsatzsteuer und ohne Pfand.“

3. Prüfen und im Bericht zitieren: Seite einmal mit false und einmal mit true bauen (danach wieder false), je 390 px und 1440 px, Bildschirmfoto von Sortiment, App-Vorteilen und Anteil. Kontrast der neuen Pfandzeile auf der Kaltgetränke-Tafel (Creme auf Ink) mindestens 4,5:1. Keine Layoutverschiebung, kein neues Paket.

Am Ende je Punkt 1, 2a, 2b, 2c, 3 eine Zeile, was geändert wurde. Endzustand: pfandGetrennt = false.
```

**Wichtig bis dahin:** Die Vorschau enthält seit dem 28.09. fest den Satz
„… und ohne Pfand". Solange der Schalter fehlt, die Seite **nicht
veröffentlichen** (oder erst nach Runbook M).

## Abnahme

(folgt nach Eingang der Antwort)
