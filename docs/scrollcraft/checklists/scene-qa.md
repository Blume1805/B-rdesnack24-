# Szenen-QA

Je Szene auszufüllen, nicht je Seite. Eine Szene ohne vollständige QA gilt
als nicht gebaut.

## Sieben Varianten

| Variante | Bedingung | Geprüft |
|---|---|---|
| Desktop | ab 1101 px | [ ] |
| Tablet | 761–1100 px | [ ] |
| Telefon hoch | bis 760 px | [ ] |
| **Telefon quer** | Höhe unter 560 px | [ ] |
| Reduzierte Bewegung | `prefers-reduced-motion` + sichtbarer Schalter | [ ] |
| Ohne JavaScript | Skript deaktiviert | [ ] |
| Langsames Netz | gedrosselt, Mid-Tier-Gerät | [ ] |

Querformat wird fast immer vergessen und bricht Sticky-Szenen zuerst.

## Vier Scrolldurchläufe

- [ ] langsam vorwärts — Timing stimmt, nichts setzt zu spät ein
- [ ] schnell vorwärts — nichts überspringt, keine Zustände hängen
- [ ] rückwärts — alle Zustände laufen sauber zurück
- [ ] direkter Sprung auf einen Anker mitten in der Szene

## Inhalt

- [ ] Alle Aussagen stehen in `truth.md`, Zeitform stimmt
- [ ] Zahlen haben eine Quelle, Endwerte stehen im HTML
- [ ] Keine zentrale Information nur über Bewegung, Hover oder JS
- [ ] Genau ein CTA oder ausdrücklich keiner

## Technik

- [ ] Kein zusätzlicher Scroll-Handler
- [ ] `will-change` nur während der Animation
- [ ] Nur `transform` und `opacity` animiert
- [ ] Keine neue Abhängigkeit
- [ ] Keine Konsolenmeldung

## Zugänglichkeit

- [ ] Tastaturbedienung vollständig
- [ ] Fokus sichtbar
- [ ] Kontrast Fließtext ≥ 4,5:1, auch in Zwischenstufen bei Farbwechsel
- [ ] Touch-Ziele ≥ 44 px
- [ ] Zoom 200 % ohne horizontales Scrollen
- [ ] Sinnvolle Textalternative für tragende Grafiken

## Wirkung

- [ ] Bewegung beim Sichtbarwerden erkennbar
- [ ] Fünf-Sekunden-Test: Was ist die Botschaft dieser Szene?
- [ ] Squint-Test: Bleibt die Hierarchie bei zugekniffenen Augen erkennbar?
- [ ] Trägt die Bewegung die Aussage — oder nur sich selbst?
