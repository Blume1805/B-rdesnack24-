# Release-Audit

Läuft vor jeder Veröffentlichung. `scripts/audit_static.py` prüft, was
maschinell prüfbar ist; der Rest von Hand.

## Blocker — kein Ermessensspielraum

1. [ ] Fremdes Bild-, Marken- oder Logomaterial ohne Freigabe im Code —
       ausdrücklich auch Base64-Testassets im Quelltext
2. [ ] Platzhaltertexte, Demo-Zahlen, Blindtext
3. [ ] Aussage im Präsens über einen nicht bestehenden Betriebszustand
4. [ ] Zahl ohne Eintrag in `truth.md`
5. [ ] Erfundene Standorte, Partner, Reichweiten oder Preise
6. [ ] Zentrale Information nur über Bewegung, Hover oder JS erreichbar
7. [ ] Fehlende Variante für reduzierte Bewegung
8. [ ] Konsolenfehler, fehlendes Bild, fehlende Schrift
9. [ ] Impressum oder Datenschutz nicht durchgehend erreichbar
10. [ ] Kontrast Fließtext unter 4,5:1
11. [ ] Der alte Claim „Immer da, wenn der Hunger kommt."
12. [ ] Eine genannte Zahl von Erlösquellen

## Technik

- [ ] Keine ungenutzte Abhängigkeit
- [ ] Genau ein Scroll-Handler
- [ ] `overflow-x: clip`, nirgends `hidden` auf `body` oder `html`
- [ ] Kein dauerhaftes `will-change`
- [ ] Bilder in moderner Kompression, Größe passend zur Anzeigefläche
- [ ] Lazy Loading für alles unterhalb des ersten Bildschirms
- [ ] DOM ≤ 1500 Knoten

## Budgets

- [ ] LCP ≤ 2,5 s auf gedrosseltem Mobilnetz
- [ ] CLS ≤ 0,05
- [ ] INP ≤ 200 ms
- [ ] JS ≤ 40 KB komprimiert
- [ ] Abweichungen begründet und freigegeben

## Marke und Inhalt

- [ ] Claim korrekt: Genießen. Geben. Gutes tun.
- [ ] Voice nach `boerdesnack24-design`
- [ ] Keine erfundene Leistung, kein erfundener Partner
- [ ] Spendenmodell: Kopplung der Abstimmung ans Bezahl-Abo transparent
- [ ] Bildsprache authentisch, KI-Anteil dokumentiert

## AI-Look-Audit

Befund, wenn zutreffend:

- [ ] mehr als acht aktive Bewegungsmuster
- [ ] mehr als zwei Kartenraster
- [ ] Verlaufsflächen ohne Funktion, Glaseffekte, Leuchtränder
- [ ] schwebende Elemente ohne Bezug
- [ ] austauschbare Hero-Section
- [ ] Copy, die für jedes beliebige Unternehmen passen würde
- [ ] Stockmaterial statt eigener Assets
- [ ] Bewegung ohne Aussage

Bei mehr als zwei Befunden: Ursache benennen, priorisieren, beheben.

## Delegationen

- [ ] `boerdesnack24-verify` — Green Gate
- [ ] `boerdesnack24-legal-impact` — bei jeder Aussageänderung
- [ ] `boerdesnack24-security-regression` — bei Formular oder Datenfluss
- [ ] `frontend-taste` — Anti-Slop-Durchgang
