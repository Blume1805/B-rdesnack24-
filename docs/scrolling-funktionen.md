# Scroll-Funktionen der Landingpage — vollständige Übergabedatei

Stand: 22.09.2026. Diese Datei ist die verbindliche Vorgabe für alle
scrollgeführten Bewegungen auf `boerdesnack24.de`. Sie wird Lovable als
Projektwissen übergeben, damit die Bausteine nicht bei jedem Umbau erneut
verlorengehen.

**Der Anlass:** Beim Umbau am 20.09.2026 wurde die Seite auf schlichte
Abschnitte reduziert. Die Bewegungsbausteine blieben im Projekt liegen und
werden seither **von keiner Seite mehr aufgerufen** — geprüft am 22.09.2026:
`src/routes/index.tsx` importiert weder `SceneMotion` noch seine vier
Exporte. Vier fertige, funktionierende Szenen liegen also ungenutzt im Code.
Das ist der Grund, warum die Scroll-Funktionen „fehlen": Sie sind da, sie
werden nur nicht benutzt.

## 1. Was bereits im Projekt liegt

| Baustein | Datei | Was er tut |
|---|---|---|
| `prog(el)` | `src/lib/scroll.ts` | Fortschritt 0…1 einer Szene, beginnt beim Hereinkommen, hält am Ende. |
| `phase(p, n, spread)` | `src/lib/scroll.ts` | Verteilt `n` Zustände auf die ersten `spread` des Fortschritts; der Rest hält den letzten Zustand. |
| `subscribe({frame, layout})` | `src/lib/scroll.ts` | **Ein** globaler Scroll-Handler für die ganze Seite, per `requestAnimationFrame` gedrosselt und passiv. Jede neue Szene hängt sich hier ein — niemals ein eigener `scroll`-Listener. |
| `Reveal` | `src/components/bs24/Reveal.tsx` | Einblenden beim Hereinscrollen über einen gemeinsamen `IntersectionObserver`. `delay` staffelt bis zu acht Elemente in Schritten von 60 ms. |
| `Stage` + `Sequence` | `Stage.tsx`, `Sequence.tsx` | Klebende Bühne: Der Automat bleibt stehen, während mehrere Aussagen nacheinander hervortreten. Höhe wird seit dem 22.09.2026 gemessen, nicht geraten. |
| `ShareScene` | `ShareBar.tsx` | Ein Balken, der beim Scrollen wächst — zeigt einen Anteil, der entsteht, statt ihn zu behaupten. |
| `MachineZoom` | `SceneMotion.tsx` | Der Automat wird beim Scrollen herangezoomt (Telefon 1,3-fach, Schreibtisch 2,4-fach). **Ungenutzt.** |
| `ProductFocus` + `ProductCards` | `SceneMotion.tsx` | Klebender Abschnitt, in dem Karten nacheinander in den Vordergrund treten. Nur ab 600 px Breite aktiv. **Ungenutzt.** |
| `PhysicalDigital` | `SceneMotion.tsx` | Aus dem Automaten wächst beim Scrollen die App heraus, mit der Frage „Wohin sollen 5 % gehen?" und den beiden Auswahlfeldern. **Ungenutzt — und genau die Darstellung, die für die Spenden-Mitbestimmung gebraucht wird.** |
| `SceneColorTransition` | `SceneMotion.tsx` | Farbübergang Creme → Nacht über die Scrollstrecke, ohne Text. **Ungenutzt.** |
| `MotionToggle` | `MotionToggle.tsx` | Schalter „Bewegung"; setzt `data-motion` am `html`-Element. Alle Bewegungen hängen daran. |

## 2. Welcher Abschnitt welche Bewegung bekommt

Reihenfolge der Seite nach der Entscheidung vom 22.09.2026:

| Abschnitt | Bewegung | Was sie erklären soll |
|---|---|---|
| 1. Kopf | nur `Reveal` | Der erste Eindruck darf nicht warten. |
| 2. Für Standortgeber | `Stage` + `Sequence` | Dass es drei getrennte Zusagen sind, nicht ein Absatz. |
| 3. Fünf Prozent für die Region | `ShareScene`, davor `SceneColorTransition` | Der Anteil entsteht aus dem Umsatz — er wird nicht behauptet, er wächst. |
| 4. Für Kundinnen und Kunden | `PhysicalDigital` neben der Vorteilskachel; Kachelzeilen gestaffelt mit `Reveal` | Aus dem Gerät wird die App, in der man mitentscheidet. |
| 5. Für Unternehmen (Werbung) | `MachineZoom` | Heranzoomen zeigt die Werbefläche am Gerät; digital und analog werden als zwei Karten daneben gestellt. |
| 6. Wer dahintersteht | nur `Reveal` | Nebenschauplatz. |
| 7. Fußbereich | keine | — |

`ProductFocus`/`ProductCards` bleiben vorerst ungenutzt: Ein Sortiment lässt
sich erst zeigen, wenn ein Automat bestückt ist.

## 3. Feste Grenzen — nicht verhandelbar

* **Ohne Bewegung ist die Seite vollständig.** Kein Satz, keine Zahl und kein
  Knopf existiert nur innerhalb einer Animation. Wer `prefers-reduced-motion`
  gesetzt hat oder den Schalter umlegt, sieht denselben Inhalt.
* **Kein Scroll-Hijacking.** Das Rad bewegt die Seite weiter wie überall sonst.
  Ein klebender Abschnitt hält höchstens zwei Bildschirmhöhen fest.
* **Auf dem Telefon höchstens zwei klebende Abschnitte insgesamt.** Sonst wird
  aus einer Seite ein Tunnel.
* **Klebende Höhen werden gemessen, nicht gerechnet.** Ist der klebende Inhalt
  höher als der Bildschirm, wird gar nicht geklebt (Fehler vom 21.09.2026: eine
  fest gerechnete Höhe von zwei Bildschirmhöhen ließ die Schaltfläche über den
  nächsten Abschnitt laufen).
* **Ein einziger Scroll-Handler.** Neue Szenen hängen sich in `subscribe` aus
  `src/lib/scroll.ts` ein. Kein zweiter `scroll`-Listener, keine zusätzliche
  Animationsbibliothek.
* **Der Bewegungsschalter wirkt sofort**, ohne Neuladen, und bleibt erreichbar.
* Bewegung erklärt oder sie entfällt. Zierde wird gestrichen.
