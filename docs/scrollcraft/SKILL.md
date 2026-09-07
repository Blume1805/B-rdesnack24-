---
name: scrollcraft
description: Konzipiert, baut und prüft Scroll-Storytelling für die statische Landingpage von Bördesnack24 — Szenenmodell, Bewegungsableitung, Fallbacks und Release-Audit. Immer verwenden, wenn an der Landingpage etwas entsteht oder geändert wird: neue Abschnitte, Animationen, Scroll-Effekte, Produktdarstellung, Geschäftsmodell-Visualisierung, Hero, CTA, Storyboard, Redesign oder Performance-Arbeit. Auch dann verwenden, wenn nur ein Text, eine Zahl oder ein Bild auf der Seite geändert wird, weil jede Aussage gegen die Wahrheitsschicht und die Zeitform zu prüfen ist. Trigger zusätzlich bei "Landingpage", "Scrollytelling", "Scroll-Animation", "Storyboard", "Szene", "wirkt nach KI", "hochwertiger machen".
---

# scrollcraft

Version 1.0 — 06.09.2026. Installation: `INSTALL.md`. Änderungen: `CHANGELOG.md`.

Erzählt die Geschichte von Bördesnack24 im Scrollverhalten der Landingpage —
und verhindert dabei, dass etwas behauptet wird, das nicht stimmt.

**Leitfrage vor jeder Bewegung:** Was soll der Besucher hier verstehen, fühlen
oder tun — und erzählt Bewegung das besser als Stillstand? Wenn nein: keine
Animation.

**Zweite Leitfrage:** Geht dieselbe Wirkung einfacher? Wenn ja: einfacher.

---

## 1 Zuständigkeit

scrollcraft verantwortet **narrative Struktur und die daraus abgeleitete
Bewegung** der statischen Landingpage. Nicht die Kunden-App, nicht die
Gesellschafter-App, nicht die Verfahrensdokumentation.

Alles Übrige wird delegiert. Niemals selbst entscheiden, was hier steht:

| Thema | Zuständiger Skill |
|---|---|
| Farben, Typografie, Voice, Komponenten | `boerdesnack24-design` |
| Anti-Slop-Dials, Signature-Element, Redesign-Audit | `frontend-taste` |
| UWG, DDG, DSGVO, BFSG, EU AI Act, Bildrechte | `boerdesnack24-legal-impact` |
| Änderungsklasse K0–K4, Prüfzyklus, Green Gate | `boerdesnack24-verify` |
| Formular, Datenfluss, Zugriffe | `boerdesnack24-security-regression` |

Bei Widerspruch zwischen einem dieser Skills und scrollcraft gilt der
Fachskill. Ausnahme: Kontrastwerte — dort gilt Abschnitt 6.

---

## 2 Verbindliche Reihenfolge

```
FAKTEN → ZIELGRUPPE → ZIEL → ASSETS → NARRATIV → SZENE
  → METAPHER → MOTION → TECHNIK → FALLBACK → QA
```

Nie in anderer Reihenfolge. Motion wird aus der Szene abgeleitet, nie
umgekehrt. Wer mit „welche Animation nehmen wir" beginnt, hat die
Architektur bereits verlassen.

---

## 3 Gates

Ein Gate gilt nur als bestanden, wenn das Artefakt **im Repository liegt**.
Eine Aussage im Chat zählt nicht.

| Gate | Inhalt | Nachweis |
|---|---|---|
| **G1 Wahrheit** | Fakten, Zeitform, Rechtsprüfung, Assets samt Herkunft, Zielgruppe, Ziel | `truth.md` gefüllt, Prüfvermerk von `boerdesnack24-legal-impact` |
| **G2 Story** | Szenen mit allen zwölf Feldern, alle sieben Varianten beschrieben | `storyboard.md` |
| **G3 Prototyp** | riskanteste Szene gebaut, gegen Baseline gemessen | Datei, Messwerte, Screenshots |
| **G4 Release** | Audit bestanden, Delegationen durchlaufen | Auditbericht |

**Fast-Track:** Änderungen der Klasse K0/K1 nach `boerdesnack24-verify`
(Textkorrektur, Farbwert, Abstand) laufen über `checklists/scene-qa.md`
und G4 — nicht über G1 bis G3. Aber: Betrifft die Änderung eine **Aussage**,
gilt immer G1, egal wie klein sie ist.

---

## 4 Der wichtigste Filter: Zeitform

Bördesnack24 hat Stand 09/2026 **null dokumentierte Verkäufe**, keinen
Automaten in Betrieb, keine App im Store und keinen bestätigten Standort.

Jede Aussage im Präsens, die einen Betriebszustand behauptet, ist bis zur
Inbetriebnahme **ein Release-Blocker** — auch wenn die zugrunde liegende Zahl
belegt ist. Eine belegte Zahl im falschen Tempus ist irreführende Werbung
nach § 5 UWG.

Vor jeder Zeile Copy: `references/truth.md` lesen. Steht eine Aussage dort
nicht, wird sie nicht geschrieben — sie wird erfragt.

---

## 5 Was wann gelesen wird

| Situation | Datei |
|---|---|
| Vor jeder Copy, jeder Zahl, jedem Claim | `references/truth.md` |
| Vor Storyboard und CTA-Entscheidung | `references/audiences.md` |
| Beim Entwerfen oder Ändern einer Szene | `references/storyboard.md` |
| Beim Umsetzen von Bewegung | `references/patterns.md` |
| Bei Technik, Budget, Dependency-Frage | `references/tech.md` |
| Bei Bildern, Fotos, Sequenzen | `references/assets.md` |
| Vor jedem Gate | `checklists/gates.md` |
| Nach jeder Szene | `checklists/scene-qa.md` |
| Vor Veröffentlichung | `checklists/release.md` |
| Ein Muster praktisch ansehen | `references/musterbibliothek.html` im Browser öffnen |

---

## 6 Harte Regeln

**Technik**
- Statischer Onepager auf Hostinger, **kein Build-System**. Kein npm, kein
  Bundler, keine Animationsbibliothek. GSAP, Lenis, Framer Motion,
  Locomotive scheiden aus — nicht als Policy, sondern mangels Build-Schritt.
- **Genau ein** globaler Scroll-Handler, rAF-gedrosselt, passiv. Nicht keiner.
- `overflow-x: clip`, niemals `hidden` — letzteres bricht `position: sticky`.
- `will-change` nur während der Animation, nie dauerhaft.
- Inhalte vollständig im HTML. Bewegung verändert nur Sichtbarkeit.
- Content in einer eigenen Datenschicht, nie im Animationscode.

**Bewegung** (Herleitung und Werte: `references/tech.md`)
- Anlauf 0,62 Bildschirmhöhen vor dem Andocken.
- Zustände vollständig nach 56 % der Strecke, Haltezeit 26 %.
- Auslösezone für Reveals bei 96 % der Bildschirmhöhe, feste Zone, nie
  elementabhängig.
- Max. 2 große Bewegungen gleichzeitig im Viewport, max. 3 Sticky-Szenen.
- Rangfolge: narrativ > funktional > interaktiv > dekorativ.

**Zugänglichkeit**
- Keine zentrale Information nur über Bewegung, Hover, Scrollposition oder JS.
- Jede Szene in sieben Varianten geprüft: Desktop, Tablet, Telefon hoch,
  **Telefon quer**, reduzierte Bewegung, ohne JS, langsames Netz.
- Kontrast Fließtext mindestens 4,5:1. Verbindlich gilt **dunkles Ink auf
  Gold**, nicht Weiß auf Gold — letzteres ergibt rund 1,7:1 und fällt durch.
  Die abweichende Zeile in `boerdesnack24-design` ist dort zu korrigieren.

**Verboten**
Scroll-Hijacking, eigene Scrollgeschwindigkeit, Einrasten, Ladebildschirme
mit Prozentanzeige, Cursor-Verfolger, Autoplay mit Ton, Endlos-Scrollen,
Dark Patterns, künstliche Verknappung, erfundener Social Proof.

---

## 7 Bestandsschutz

Vor der ersten Änderung: Ist-Zustand messen und ablegen (LCP, CLS, INP,
Screenshots). Ohne Ausgangswert ist „keine Regression" eine Behauptung.

Funktionierende Komponenten werden nicht ohne nachvollziehbaren Grund
ersetzt. Kein Refactoring nebenbei.

---

## 8 Werkzeuge

```
scripts/audit_static.py <datei.html>   # Testassets, Fallbacks, Budgets, Risiken
scripts/build_spin.py <ordner>         # 24–36 Produktfotos → Sprite
scripts/snapshot.py <datei.html>       # Vorher/Nachher-Screenshots
```

`audit_static.py` läuft vor jedem G4. Ein Fund der Kategorie BLOCKER
verhindert die Veröffentlichung ohne Ermessensspielraum.

---

## 9 Golden Rules

1. Nicht die Website animieren. Die Geschichte animieren.
2. Keine Tatsache erfinden — und keine belegte Tatsache ins falsche Tempus setzen.
3. Die Story muss ohne jede Animation vollständig verständlich sein.
4. Ein Fallback darf nie wie ein Defekt aussehen.
5. Echte Bördesnack24-Assets vor allem anderen.
6. Mobil ist kein verkleinertes Desktop.
7. Einfacher schlägt aufwendiger bei gleicher Wirkung.
8. Zeig das Geschäftsmodell. Erklär es nicht.
9. Ein verbliebenes Testasset ist ein Release-Blocker.
10. Im Zweifel fragen, nicht annehmen.
