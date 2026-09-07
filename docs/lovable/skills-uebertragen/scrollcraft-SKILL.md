---
name: scrollcraft
description: Konzipiert, baut und prüft Scroll-Storytelling für die Landingpage von Bördesnack24 — Szenenmodell, Wahrheitsschicht, Bewegungsableitung, Fallbacks und Release-Audit. Immer verwenden, wenn an der Landingpage etwas entsteht oder geändert wird: neue Abschnitte, Animationen, Scroll-Effekte, Produktdarstellung, Geschäftsmodell-Visualisierung, Hero, CTA, Storyboard, Redesign oder Performance-Arbeit. Auch dann verwenden, wenn nur ein Text, eine Zahl oder ein Bild geändert wird, weil jede Aussage gegen die Wahrheitsschicht und die Zeitform zu prüfen ist. Trigger zusätzlich bei "Landingpage", "Scrollytelling", "Scroll-Animation", "Storyboard", "Szene", "wirkt nach KI", "hochwertiger machen".
---

> **FASSUNG FÜR DEN LOVABLE-WORKSPACE — komprimiert am 05.09.2026.**
>
> Das Original besteht aus einer `SKILL.md` und elf Begleitdateien
> (`references/`, `checklists/`, `scripts/`). Lovables
> `create_workspace_skill` nimmt genau **eine** Datei ohne Unterordner.
> Deshalb sind hier alle inhaltlich tragenden Dateien **vollständig
> eingebettet** statt referenziert — insbesondere die Wahrheitsschicht.
> Ein Skill, dessen Faktenquelle als Verweis auf eine nicht existierende
> Datei endet, prüft nichts.
>
> **Nicht übertragbar und daher entfallen:**
> * `references/musterbibliothek.html` (53 KB Demoseite) — im Repository
>   unter `docs/scrollcraft/` einsehbar, hier nicht nötig.
> * `scripts/audit_static.py`, `build_spin.py`, `snapshot.py` — laufen
>   lokal, nicht im Lovable-Sandkasten. Die Prüfungen, die sie ausführen,
>   stehen als Checkliste im Abschnitt „Release-Audit".
>
> Verweise der Form „siehe `references/x.md`" wurden durch Verweise auf die
> Abschnitte dieser Datei ersetzt. Inhaltlich ist nichts gekürzt worden.

---



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

---

# ANHANG A — Wahrheitsschicht (Original: references/truth.md)

## Wahrheitsschicht

Einzige zulässige Quelle für Aussagen auf der Landingpage.

**Befüllungsregel:** Einträge entstehen ausschließlich aus Quelldokumenten
(Businessplan, Preisliste, Verträge, Zusagen) oder aus einer ausdrücklichen
Aussage von Philipp. **Nie** aus dem Gedächtnis eines Modells, nie aus einer
früheren Fassung dieses Skills, nie aus einer Formulierung, die schon auf der
Website steht. Eine Aussage, die hier nicht steht, wird nicht geschrieben,
sondern erfragt.

Status: `IST` belegt und aktuell · `GEPLANT` belegt, noch nicht eingetreten ·
`OFFEN` nicht belegt, Freigabe nötig · `VERBOTEN` darf nicht verwendet werden

Stand: 06.09.2026

---

## 1 Marke

| Feld | Wert | Status | Quelle |
|---|---|---|---|
| Firma | Bördesnack24 GbR, Sülzetal, Sachsen-Anhalt | IST | Businessplan |
| Claim | **Genießen. Geben. Gutes tun.** | IST | Philipp, 09/2026 |
| Alter Claim „Immer da, wenn der Hunger kommt." | — | **VERBOTEN** | abgelöst, Philipp 09/2026 |
| Geschäftszweck | Automaten für Snacks, Getränke, Eis, Heißgetränke | GEPLANT ab 2027 | Businessplan |
| Fresh Food | — | **VERBOTEN** | nicht Teil des Geschäftsmodells |

Der alte Claim ist endgültig abgelöst — auch nach Inbetriebnahme nicht wieder
verwendbar. Er steht noch in `boerdesnack24-design`; dort zu korrigieren.

---

## 2 Betriebszustand — der Zeitform-Filter

| Sachverhalt | Stand 09/2026 |
|---|---|
| Automaten in Betrieb | **0** |
| Dokumentierte Verkäufe | **0** |
| Bestätigte Standorte | **0** |
| App im App Store / Play Store | **nein** |
| Echte Fotos von Automat oder Standort | **nein** |

### Was heute erlaubt ist

| Aussage | Heute | Erlaubt ab |
|---|---|---|
| „Genießen. Geben. Gutes tun." | JA, Haltungsversprechen | — |
| „24/7 verfügbar" | NEIN | erster Automat in Betrieb |
| „62 Produkte im Sortiment" | NEIN, nur „geplantes Sortiment" | erster Automat bestückt |
| „App herunterladen" | NEIN, nur „App vormerken" | Store-Freigabe |
| „Ab 2027 in Osterweddingen" | JA, als Plan gekennzeichnet | — |
| „5 % gehen an eine gemeinnützige Organisation aus dem Sülzetal" | JA, mit Bezugsgröße | — |
| Foto eines Automaten an einem Standort | NEIN | echte Aufnahme vorhanden |
| Nennung eines Standortpartners | NEIN | schriftliche Zusage |

---

## 3 Erlösquellen

Vier belegte Quellen. **Erzählt werden nur drei** (Entscheidung Philipp,
09/2026) — Sponsoring ist visuell schwach und bleibt aus der Story heraus.

| Quelle | Status | Anteil 10 J. | In der Story |
|---|---|---|---|
| Warenverkauf am Automaten | GEPLANT ab 2027 | 75,7 % | ja |
| App-Abo | GEPLANT ab 2027 | 6,0 % | ja |
| Werbeflächen analog + digital | GEPLANT ab 2029 | 5,4 % | ja |
| Sponsoring | GEPLANT ab 2029 | 12,9 % | **nein** |

**Copy-Regel:** Die Seite nennt **keine Zahl** von Erlösquellen. „Drei
Quellen" wäre falsch, weil es vier gibt; „vier Quellen" wäre unverständlich,
weil nur drei gezeigt werden. Also: zeigen, nicht zählen.

Quelle aller Werte: Businessplan Bördesnack24 GbR, Stand 30.08.2026,
Abschnitt 3. Sämtliche Werte sind **Planannahmen, keine Messungen**.

---

## 4 Spendenmodell

| Feld | Wert | Status |
|---|---|---|
| Quote | 5 % jedes Warenverkaufs | IST |
| Empfängerkreis | gemeinnützige Organisationen aus dem Sülzetal | IST |
| Auswahl des Empfängers | Vorschlag und Abstimmung durch die Community | IST |
| Zugang zur Abstimmung | **nur über das kostenpflichtige App-Abo** | IST |
| Bezugsgröße (brutto/netto, Waren- oder Gesamtumsatz) | — | **OFFEN** |
| Nachweisform gegenüber Kunden | — | **OFFEN** |
| Konkreter Empfänger | — | **OFFEN** |

**Transparenzpflicht:** Wird mit der Mitbestimmung geworben, muss an derselben
Stelle erkennbar sein, dass die Abstimmung an das Bezahl-Abo gekoppelt ist —
nicht erst in den AGB. „Die Community entscheidet" ohne diesen Zusatz ist
unzulässig. Vor Veröffentlichung: `boerdesnack24-legal-impact`.

---

## 5 Standorte (Planung)

| Jahr | Standort | Status |
|---|---|---|
| 2027 | Bahnhof Osterweddingen, Heißgetränke- und Mixautomat | GEPLANT, keine Zusage |
| 2028 | Freibad Langenweddingen, saisonal Mai–September | GEPLANT, keine Zusage |
| 2029 | Sporthalle Langenweddingen | GEPLANT, keine Zusage |
| ab 2030 | ein Automat pro Jahr, Flächen offen | GEPLANT |

Standorte dürfen als **Absicht** dargestellt werden („geplant für"), nie als
Bestand. Kein Partnername ohne schriftliche Zusage.

---

## 6 Verbotene Aussagen

- alles im Präsens über einen nicht bestehenden Betriebszustand
- Reichweiten, Passantenzahlen, Werbepreise ohne amtliche oder vertragliche Quelle
- App-Funktionen, die nicht ausgeliefert sind
- Kundenstimmen, Bewertungen, Nutzerzahlen — es gibt keine
- Fresh Food als Geschäftsbereich
- der alte Claim
- eine Zahl von Erlösquellen
- Namen realer Partner oder Marken ohne Freigabe

---

## 7 Offene Punkte

- [ ] Bezugsgröße und Nachweisform der 5 %
- [ ] Erste Standortzusage
- [ ] Store-Termin der App und ausgelieferter Funktionsumfang
- [ ] Werbeflächen: was ohne Reichweitenangabe zusagbar ist
- [ ] Echte Fotos von Automat und Standort

---

# ANHANG B — Zielgruppen und Pfade (Original: references/audiences.md)

## Zielgruppen und Pfade

Die Seite bleibt **eine** Geschichte mit zwei Abzweigungen. Keine vier
parallelen Seiten, kein Zielgruppen-Umschalter oben rechts.

---

## Rangfolge in der Vorab-Phase (bis zum ersten Automaten)

| # | Zielgruppe | Ihre Frage | Rolle auf der Seite |
|---|---|---|---|
| **1** | **Standortpartner** | Was bringt mir ein Automat auf meiner Fläche? | **Hauptstrang** |
| 2 | Privatkunde / Community | Was habe ich davon, und was bewirkt mein Einkauf? | trägt die Marke |
| 3 | Werbepartner | Wie werde ich regional sichtbar? | Abzweigung |
| 4 | Abonnent | Was bringt mir das digitale Angebot? | folgt aus 2 |

**Begründung Priorität 1:** Ohne Standortzusage kein Automat, ohne Automat
keine echten Fotos, ohne Fotos keine glaubwürdige Seite. Der Standortpfad ist
der einzige, der Bördesnack24 aus der Vorab-Phase herausführt.

Nach Inbetriebnahme des ersten Automaten kehrt sich die Rangfolge um:
Privatkunde wird 1, Standortpartner wird 3.

---

## Was jede Gruppe braucht

### 1 Standortpartner
Betreiber von Bahnhöfen, Freibädern, Sporthallen, Firmengeländen, Campingplätzen.
- **Ihre Sorge:** Aufwand, Strom, Vandalismus, Vertragsbindung, Sauberkeit.
- **Ihr Nutzen:** Versorgung ohne eigenes Personal, Standortprovision, Service für
  eigene Gäste zu Zeiten, in denen sonst nichts offen hat.
- **Nicht sagen:** Umsatzversprechen, Besucherzahlen, Provisionshöhe ohne Vertrag.
- **CTA:** „Fläche anbieten" — kurzes Formular, kein Anruf-Zwang.

### 2 Privatkunde / Community
- **Ihre Frage:** Wo, wann, was — und was passiert mit meinem Geld?
- **Ihr Nutzen:** Versorgung außerhalb der Öffnungszeiten, 5 % für die Region,
  Mitbestimmung beim Empfänger.
- **Nicht sagen:** vorhandene Verfügbarkeit, Sortiment im Präsens.
- **CTA:** „App vormerken" — bis zur Store-Freigabe kein Download.

### 3 Werbepartner
Regionale Betriebe: Handwerk, Gastronomie, Autohaus, Physiotherapie.
- **Ihr Nutzen:** analoge Fläche am Gehäuse, digitale Plätze auf dem Display,
  regionale Nähe.
- **Nicht sagen:** Reichweiten, Kontaktzahlen, Preise ohne Beleg.
- **CTA:** „Werbefläche anfragen" — Konditionen auf Anfrage.

### 4 Abonnent
- **Ihr Nutzen:** Vorteile, Punkte, Mitbestimmung beim Spendenempfänger.
- **Pflicht:** Kopplung der Abstimmung an das kostenpflichtige Abo transparent machen.
- **Nicht sagen:** Funktionen, die nicht ausgeliefert sind.
- **CTA:** ergibt sich aus 2, kein eigener Strang.

---

## Regel für CTAs

Ein CTA entsteht aus der Szene, in der er steht — nicht aus einer
CTA-Liste. Pro Szene höchstens einer. Auf der ganzen Seite höchstens drei
verschiedene. Wer überall klicken kann, klickt nirgends.

---

# ANHANG C — Storyboard (Original: references/storyboard.md)

## Storyboard

## Szenenvorlage — zwölf Pflichtfelder

Ohne vollständigen Satz kein G2. Fehlt ein Feld, ist die Szene nicht
entschieden, sondern nur geahnt.

```yaml
scene:
  id:                 # kurz, sprechend
  audience:           # 1 Standort | 2 Kunde | 3 Werbung | 4 Abo
  purpose:            # verstehen | fühlen | handeln
  message:            # ein Satz, ohne Marketingfloskel
  emotional_goal:     # was hängenbleiben soll
  information_goal:   # was man danach weiß
  visual_anchor:      # das Objekt, das die Szene trägt
  visual_metaphor:    # warum genau diese Bewegung das erzählt
  motion:             # Pattern-ID aus patterns.md + Parameter
  cta:                # genau einer oder ausdrücklich "keiner"
  variants:           # desktop | tablet | mobil | quer | reduced | no-js | low-bandwidth
  budget:             # KB, gleichzeitige Bewegungen, Scrollstrecke
```

**Prüfsatz:** Streiche gedanklich jede Animation. Ist die Geschichte noch
vollständig verständlich? Wenn nein, ist die Szene falsch gebaut — nicht die
Animation zu schwach.

---

## Signature Story — Vorab-Phase

Leitidee: **Ein Automat kann mehr.**
Aufhänger: der Claim liefert die Dreiteilung.

| # | Szene | Zielgruppe | Kernbotschaft | Anker | Bewegung |
|---|---|---|---|---|---|
| 01 | Ankunft | alle | Genießen. Geben. Gutes tun. | Claim + Bördeumriss | 01 Reveal |
| 02 | Der Automat | 2 | Dort versorgen, wo abends nichts offen hat | Automat | 12 Maskenreveal / 10 Zoom |
| 03 | Genießen | 2 | Snacks, Getränke, Eis, Heißgetränke — geplantes Sortiment | Produkte | 13 Produktwechsel, später 14 360° |
| 04 | Geben | 2 | 5 % jedes Warenverkaufs bleiben im Sülzetal | Anteilsbalken | 18 Anteil + 04 Text-Highlight |
| 05 | Gutes tun | 2 → 4 | Wer mitmacht, entscheidet mit — Abstimmung im Abo | App + Region | 17 physisch → digital |
| 06 | Ein Automat kann mehr | 1 + 3 | Fläche wird Versorgung und Sichtbarkeit | Automat mit Ebenen | 06 Sticky-Bühne |
| 07 | Ihre Fläche | **1** | Versorgung ohne eigenes Personal | Standortkarte | 07 Horizontale Sequenz |
| 08 | Abschluss | 1 + 2 | zwei klare Wege | Automat + CTA | 05 Mikrointeraktion |

**Warum diese Reihenfolge:** Der Claim führt (02–05), damit die Marke steht,
bevor etwas verlangt wird. Erst danach öffnet Szene 06 die Geschäftssicht und
Szene 07 den Standortpfad — die Priorität-1-Gruppe kommt zum Zug, nachdem sie
verstanden hat, wofür Bördesnack24 steht. Ein Standortangebot ganz oben wirkt
wie Kaltakquise.

**Szene 06 zeigt drei Stränge** (Verkauf, Werbung, Abo) und nennt keine Zahl —
siehe `truth.md` Abschnitt 3.

**Szene 04 ist der Höhepunkt.** Sie bekommt die längste Haltezeit und den
einzigen Text-Highlight der Seite.

---

## Was nicht ins Storyboard darf

- Eine Szene ohne Zielgruppe. „Für alle" heißt für niemanden.
- Eine Szene, deren `information_goal` leer ist — dann ist es Dekoration.
- Zwei Szenen mit derselben Botschaft in anderer Verpackung.
- Ein CTA, der nicht aus der Szene folgt.
- Mehr als drei Sticky-Szenen auf der Seite.
- Eine Szene, die es nur gibt, weil ein Pattern hübsch ist.

---

## Übergänge

Ein Übergang stellt die Beziehung zweier Aussagen dar, nicht den Wechsel
zweier Abschnitte.

| Von → Nach | Beziehung | Mittel |
|---|---|---|
| 02 → 03 | Objekt gibt seinen Inhalt frei | Zoom in den Automaten |
| 03 → 04 | Kauf erzeugt Wirkung | Produkt löst Anteilsbalken aus |
| 04 → 05 | Wirkung wird Beteiligung | Balken wandert in die App |
| 05 → 06 | Kundensicht wird Systemsicht | Farbwechsel hell → dunkel |
| 06 → 07 | System braucht Ort | Automat wandert auf die Karte |

Fehlt die Beziehung, ist der Übergang ein Schnitt — dann lieber ein sauberer
Schnitt als eine erfundene Animation.

---

# ANHANG D — Pattern-Kanon (Original: references/patterns.md)

## Pattern-Kanon

Achtzehn Muster. Nicht fünfundvierzig. Was fehlt, fehlt mit Begründung.

Referenzimplementierung aller Muster: `scrollcraft-musterbibliothek.html`.
Rechenkerne `prog()` und `phase()`: `tech.md`.

Jedes Muster hat drei Varianten: Desktop, Mobil, reduzierte Bewegung. Ein
Muster ohne Fallback wird nicht eingebaut.

---

## Ebene 1 — Grundlage (immer erlaubt)

**01 Reveal** — Inhalt steigt beim Eintreten leicht auf.
`opacity` + `translateY(14px)`, 0,5 s, `cubic-bezier(.16,1,.3,1)`.
Auslösung `rootMargin: '0px 0px -4% 0px'`. Fallback: sofort sichtbar.

**02 Stagger** — mehrere Elemente kurz nacheinander.
Versatz 60 ms, **max. 5 Elemente**, sonst wirkt es zäh.

**03 Zähler** — Zahl läuft von null hoch. Dauer 900 ms, `1-(1-k)³`.
**Nur für Zahlen mit Eintrag in `truth.md`.** Bewegung verleiht einer Zahl
Autorität, die sie belegen muss. Der Endwert steht immer im HTML.

**04 Text-Highlight** — ein Satz färbt sich beim Lesen ein.
**Genau einmal pro Seite.** Reserviert für Szene 04 (5 %).
Letztes Wort bei 60 % der Strecke. Text vollständig im HTML.

**05 Mikrointeraktion** — Reaktion auf Berührung. Reines CSS.
Entscheidet mehr über den Qualitätseindruck als jede große Szene.
Touch-Ziel mindestens 44 px.

---

## Ebene 2 — Scroll-Erzählung (max. 3 pro Seite)

**06 Sticky-Bühne mit Zuständen** — Motiv bleibt stehen, Erzählung baut
Ebenen auf. Führt frühere Muster 04 und 07 zusammen: Fortschrittsanzeige und
Kapitelmarken sind Teil der Bühne, kein eigenes Muster.
Kernmuster für Szene 06. `phase(p, n, 0.56)`.
Fallback: gestapelte Abschnitte, alle Ebenen sichtbar.

**07 Horizontale Sequenz** — vertikales Scrollen bewegt einen Streifen.
**Max. 1 pro Seite.** Für Reihen mit natürlicher Ordnung: Standorte, Jahre.
Scrollstrecke aus der Streifenbreite berechnen, nicht fest setzen:
`hoehe = innerHeight + weite * 1.45 + innerHeight * 0.3`.
Fallback mobil: umbrechende Liste.

**08 Kartenstapel** — Karten bleiben stehen, die nächste schiebt sich darüber.
**Max. 4 Karten.** Reines CSS. Blockfluss, **niemals Grid**.
Karten 50 svh, Versätze 5 / 7,5 / 10 / 12,5 vh.

**09 Szenen-Farbwechsel** — Grundstimmung wechselt beim Scrollen.
Gliedert lange Seiten. Kontrast muss in **jeder Zwischenstufe** ≥ 4,5:1
bleiben, nicht nur an den Endpunkten.

---

## Ebene 3 — Kamera und Raum (max. 2 pro Seite)

**10 Zoomfahrt** — Motiv wächst, als führe eine Kamera heran.
Desktop bis 2,4×, mobil bis 1,3×. Nur `transform`.

**11 Parallax-Tiefe** — Ebenen unterschiedlich schnell.
Amplitude 420 px Desktop, 210 px mobil, Tiefen 0,06 bis 0,62.
Zu schwach dosiert ist es unsichtbar, zu stark das sicherste Kennzeichen
einer Baukastenseite.

**12 Maskenreveal** — Bild wird aufgedeckt statt eingeblendet.
`clip-path: inset()`, 0,8 s. Verstärkt die Qualität eines guten Bildes und
die Schwäche eines schlechten. Erst mit echtem Automatenfoto einsetzen.

---

## Ebene 4 — Produkt

**13 Produktwechsel** — Produkte wechseln im Fokus statt im Raster.
`phase(p, n, 0.56)`, Überblendung 0,6 s.
Sortiment zusätzlich als Text anbieten.

**14 Produkt 360°** — volle Umdrehung aus einer Bildsequenz.
24 Bilder (15°) als Standard, 36 (10°) für Heldenprodukte.
6×6-Blatt als WebP, `background-position` je Bild.
Fallbackkette: Sequenz → Zylindersimulation aus einem Foto → Einzelbild.
Zylindersimulation: `rotateY(a) scaleX(1/cos a)` hält die Silhouette gleich
breit, dazu feste Zylinderschattierung und mitlaufender Reflex; trägt bis ±22°.
**Max. 2 gleichzeitig sichtbar**, lazy, mobil kleinere Auflösung.

**15 Objekt-Label** *(neu)* — ein Text folgt einem bewegten Objekt.
Für Szene 03: Produkt löst sich, Bezeichnung wandert mit.
Label muss auch ohne Bewegung dem Objekt zugeordnet bleiben (`aria-describedby`).

---

## Ebene 5 — Bördesnack24-spezifisch

**16 Tageszeit-Erzählung** — Himmel und Uhrzeit verändern sich beim Scrollen.
**Gesperrt, solange kein Automat in Betrieb ist** — die Aussage, die sie
transportiert, ist Verfügbarkeit. Siehe `truth.md`.

**17 Physisch → digital** *(neu)* — der Automat gibt eine digitale Ebene frei.
Für Szene 05. Kein schwebendes Telefon neben dem Automaten, sondern eine
Ebene, die aus ihm hervorgeht. Mittel: `clip-path`, gemeinsame Position,
FLIP-artige Übergabe.

**18 Anteilsdarstellung** — 5 % lösen sich aus 100 % und wandern zur Region.
Höhepunkt der Seite, längste Haltezeit.
Die Grafik muss die wirtschaftliche Aussage korrekt abbilden: Bezugsgröße
sichtbar, sobald sie in `truth.md` bestätigt ist.

---

## Gestrichen — mit Begründung

| Muster | Warum nicht |
|---|---|
| Video-Scrubbing | auf iOS unzuverlässig, sprengt das Datenbudget |
| WebGL / 3D-Objekte | Rechenlast und Pflegeaufwand ohne erzählerischen Gewinn |
| Morphing-Engine | setzt Vektorgrafik voraus; mit echten Fotos nicht möglich |
| Branching Story | ein Onepager mit einem Primärziel braucht zwei Abzweigungen, keine Engine |
| Data Story | null dokumentierte Verkäufe — es gibt keine Daten |
| Object Tracking als System | Muster 15 deckt den einen realen Fall ab |
| Perspective / Depth / Focus einzeln | Varianten von 10 und 11, keine eigenen Muster |
| Ladeanimation, Cursor-Verfolger, Einrasten | siehe Verbotsliste in `SKILL.md` |

---

## Auswahl für die aktuelle Seite

Aktiv: **01, 05, 06, 07, 08, 13, 18** und **04 genau einmal**.
Sobald echte Fotos vorliegen zusätzlich **12** und **14**.
Gesperrt bis Inbetriebnahme: **16**.

Mehr als acht aktive Muster auf einer Seite gelten als Befund im AI-Look-Audit.

---

# ANHANG E — Technik (Original: references/tech.md)

## Technik

## Zielumgebung

Statischer Onepager, Upload nach `public_html` bei Hostinger, Formular über
PHPMailer. **Kein Build-System, kein npm, kein Bundler.**

Daraus folgt zwingend:

- Keine Animationsbibliothek. GSAP, ScrollTrigger, Lenis, Framer Motion,
  Locomotive Scroll scheiden aus — nicht als Geschmacksfrage, sondern weil
  kein Build-Schritt existiert und CDN-Einbindung das Datenbudget im
  ländlichen Mobilfunk sprengt.
- Erlaubt: CSS `position: sticky`, `clip-path`, `mask`, Custom Properties,
  IntersectionObserver, `scroll-timeline` als Progressive Enhancement.
- **Genau ein** globaler Scroll-Handler, rAF-gedrosselt, `{passive:true}`.
  Nicht keiner — mehrere wären messbar schlechter als einer.

## Fallen, die bereits aufgetreten sind

| Falle | Wirkung | Richtig |
|---|---|---|
| `overflow-x: hidden` auf `body` | macht den Body zum Scrollcontainer, **bricht `position: sticky`** | `overflow-x: clip` |
| `display: grid` um Sticky-Karten | Bezugsrahmen ist die Zelle, kein Klebeweg | Blockfluss |
| Auslösung über `threshold` | hohe Elemente lösen viel zu spät aus | feste Zone via `rootMargin` |
| Fortschritt ab Andocken | eine ganze Bildschirmhöhe tote Zeit | Anlauf, siehe Zeitgesetz |
| Scrollstrecke fest gesetzt | Tempo hängt an Fensterbreite | Strecke aus Inhaltsbreite berechnen |
| `will-change` dauerhaft | belegt GPU-Speicher permanent | nur während der Animation |

---

## Zeitgesetz

Erprobt in der Musterbibliothek, verbindlich.

| Größe | Wert |
|---|---|
| Anlauf (`ENTRY`) | 0,62 Bildschirmhöhen vor dem Andocken |
| Haltezeit (`TAIL`) | 26 % der Strecke |
| Zustände vollständig nach | 56 % der Strecke |
| Auslösezone Reveal | `rootMargin: '0px 0px -4% 0px'`, `threshold: 0.01` |
| Horizontale Sequenz | 1,45 px Scrollweg je px Bewegung, aus Streifenbreite berechnet |
| Scrollstrecke je Szene | max. 3 Bildschirmhöhen (außer berechnet) |
| Große Bewegungen gleichzeitig | max. 2 im Viewport |
| Sticky-Szenen je Seite | max. 3 |

**Prüfregel:** Wird eine Szene sichtbar, muss bereits Bewegung erkennbar sein.
Wer scrollen muss, um herauszufinden, ob etwas passiert, sieht eine kaputte
Szene.

---

## Gemeinsame Rechenkerne

Alle scrollgesteuerten Muster benutzen dieselben zwei Funktionen. Keine
Kopien, keine Varianten.

```js
const clamp = v => Math.min(1, Math.max(0, v));
const ENTRY = .62, TAIL = .26;

/* Fortschritt einer Szene: beginnt beim Hereinkommen, hält am Ende */
function prog(el){
  const r = el.getBoundingClientRect();
  const lead = innerHeight * ENTRY;
  const travel = Math.max(1, (r.height - innerHeight) + lead);
  return clamp(clamp((-r.top + lead) / travel) / (1 - TAIL));
}

/* Zustandsindex: n Zustände auf die ersten `spread` verteilt, Rest ist Halten */
function phase(p, n, spread){
  return Math.min(n - 1, Math.floor(clamp(p / (spread || 0.56)) * n));
}
```

Ein einziger Handler treibt alles:

```js
let ticking = false;
addEventListener('scroll', () => {
  if (!ticking) { ticking = true; requestAnimationFrame(frame); }
}, {passive: true});
addEventListener('resize', () => { layout(); frame(); });
addEventListener('orientationchange', () => setTimeout(frame, 250));
```

---

## Budgets

| Kennzahl | Ziel | Messbedingung |
|---|---|---|
| LCP | ≤ 2,5 s | Mid-Tier-Android, gedrosseltes Mobilnetz |
| CLS | ≤ 0,05 | strenger als Standard, weil Sticky CLS erzeugt |
| INP | ≤ 200 ms | — |
| JS gesamt | ≤ 40 KB komprimiert | — |
| Hero-Bild | ≤ 180 KB AVIF/WebP | — |
| Bildsequenz je Produkt | ≤ 250 KB, lazy, max. 2 gleichzeitig sichtbar | — |
| Schriften | 2 Familien, self-hosted woff2, `font-display: swap` | — |
| DOM-Knoten | ≤ 1500 | — |

**Baseline-Pflicht:** Vor der ersten Änderung Ist-Werte messen und ablegen.
Ohne Ausgangswert ist „keine Regression" eine Behauptung.

Zielgerät ist ein Telefon am Bahnhof Osterweddingen, nicht der Desktop im
Vorschaufenster.

---

## Fallback-Ketten

```
Bildsequenz   → Zylindersimulation → Einzelbild
Sticky-Szene  → gestapelte Abschnitte
Parallax      → statische Komposition
Zähler        → Endwert steht im HTML
Maskenreveal  → Bild sofort sichtbar
JS aus        → vollständige Seite, nur ohne Bewegung
```

Ein Fallback darf nie wie ein Defekt aussehen. Reduzierte Bewegung heißt
gleiche Geschichte, weniger Bewegung.

Zusätzlich zu `prefers-reduced-motion` gehört ein **sichtbarer Schalter** auf
die Seite — die Systemeinstellung kennen die wenigsten.

---

## Dependency-Prüfung

Vor jeder neuen Abhängigkeit, in dieser Reihenfolge:
1. Geht es mit CSS allein?
2. Geht es mit einer nativen Browser-API?
3. Geht es mit vorhandenem Code?
4. Wie groß ist der Zuwachs in KB?
5. Wer pflegt das in drei Jahren?

Erst wenn 1–3 mit Nein beantwortet sind und 4–5 vertretbar ausfallen, wird
gefragt. Selbst installieren: nie.

---

# ANHANG F — Assets (Original: references/assets.md)

## Assets

## Rangfolge der Authentizität

```
echtes Bördesnack24-Asset
  → echtes Produkt- oder Automatenfoto
    → eigene Markengrafik
      → hochwertiges Stockmaterial
        → KI-generiert
```

Je weiter unten, desto höher muss die Begründung sein. Generische Stockbilder
lächelnder Menschen, Laptops oder abstrakter Businessszenen: nie.

---

## Bestand (Stand 09/2026)

| Asset | Vorhanden | Herkunft | Verwendbar |
|---|---|---|---|
| Wortbildmarke | ja | eigen | ja |
| Bördeumriss | ja | eigen | ja |
| Key Visual mit Automat | ja | **KI-generiert** | eingeschränkt, siehe unten |
| Foto echter Automat | **nein** | — | — |
| Foto echter Standort | **nein** | — | — |
| Produktfotos freigestellt | **nein** | — | — |
| Produktsequenzen 360° | **nein** | — | — |
| App-Screenshots | **nein** | — | — |

---

## Umgang mit KI-Bildern

Zwei getrennte Fragen, die nicht vermischt werden dürfen:

**Ästhetisch** — sieht es nach KI aus? Gehört ins AI-Look-Audit.

**Rechtlich** — besteht eine Kennzeichnungspflicht? Art. 50 Abs. 4 KI-VO
trifft Deepfakes, also Inhalte, die bestehenden Personen, Objekten, Orten oder
Ereignissen ähneln und fälschlich authentisch wirken. Ein stilisiertes
Marken-Key-Visual fällt vermutlich nicht darunter; die EU-Icons sind ohnehin
fakultativ. **Die Bewertung trifft `boerdesnack24-legal-impact`, nicht dieser
Skill.**

Das größere Risiko liegt im UWG: Ein fotorealistisch wirkendes Bild eines
Automaten an einem Ort, den es so nicht gibt, ist eine Aussage über die
Wirklichkeit. Deshalb gilt bis zum ersten echten Foto:

> Der Automat wird **gezeichnet** dargestellt, nicht fotorealistisch.
> Eine Illustration behauptet keine Wirklichkeit, ein Foto schon.

---

## Provenienzregister

Jedes Asset auf der Seite braucht einen Eintrag:

| Datei | Herkunft | KI-Anteil | Zeigt realen Ort? | Freigabe |
|---|---|---|---|---|

Fremdes Bild- oder Markenmaterial ohne Freigabe ist ein **Release-Blocker**.
Betrifft ausdrücklich auch Testassets in Base64-Form im Quelltext.

---

## Produktsequenzen — Aufnahme

Für Muster 14. Werkzeug: `scripts/build_spin.py`.

**Empfehlung:** 24 Aufnahmen im 15°-Raster als Standard. Der Unterschied zu 36
fällt nur beim sehr langsamen Scrollen auf und spart ein Drittel Gewicht und
Arbeitszeit. 36 nur für zwei bis drei Heldenprodukte.

Bei 62 Produkten sind das rund 1.500 statt 2.200 Aufnahmen.

**Aufbau:** Kamera auf Stativ, Höhe halbe Produkthöhe, Abstand fix. Produkt
mittig auf einem Drehteller mit Gradmarkierung. Weißer Hintergrund, zwei weiche
Lichter seitlich, eine Aufhellung von vorn. Bei Dosen und Glänzendem ein
Lichtzelt, sonst spiegelt sich der Raum und dreht sich falsch herum mit.

**Manuell fixieren:** Belichtung, Weißabgleich, Fokus, Blende. Bei Automatik
atmet die Helligkeit von Bild zu Bild und die Drehung flackert.

**Auslösung:** Fernauslöser oder Selbstauslöser. Dateinamen fortlaufend,
Drehrichtung immer gleich.

**Nachbearbeitung:** nur über `build_spin.py`. Der gemeinsame Bildausschnitt
über alle Aufnahmen ist entscheidend — bei individuellem Zuschnitt zittert das
Produkt beim Drehen.

**Rechtliches:** Eigene Fotos fremder Markenprodukte sind zur Beschreibung des
tatsächlichen Sortiments in der Regel zulässig. Werbliche Herausstellung ist
eine andere Frage. Vor Veröffentlichung: `boerdesnack24-legal-impact`.

---

# ANHANG G — Gates (Original: checklists/gates.md)

## Gates

Ein Gate ist bestanden, wenn das Artefakt **im Repository liegt**. Eine
Aussage im Chat zählt nicht. Ein übersprungenes Gate wird nicht nachgeholt,
sondern beendet die Arbeit an der Szene.

---

## G1 — Wahrheit

- [ ] Jede geplante Aussage steht in `references/truth.md`
- [ ] Jede Aussage hat einen Status: IST / GEPLANT / OFFEN / VERBOTEN
- [ ] Zeitform geprüft: keine Präsensaussage über einen nicht bestehenden Zustand
- [ ] Jede Zahl hat eine Quelle
- [ ] Keine Erlösquellen-Zahl in der Copy
- [ ] Zielgruppe der Seite und Rangfolge bestätigt (`audiences.md`)
- [ ] Ein Primärziel, höchstens zwei Sekundärziele
- [ ] Assets inventarisiert, Herkunft und KI-Anteil vermerkt (`assets.md`)
- [ ] `boerdesnack24-legal-impact` durchlaufen, Vermerk abgelegt

**Artefakt:** `truth.md` gefüllt + Prüfvermerk

---

## G2 — Story

- [ ] Jede Szene hat alle zwölf Felder
- [ ] Jede Szene hat genau eine Zielgruppe
- [ ] Jede Szene hat ein Informationsziel — sonst ist sie Dekoration
- [ ] Höchstens ein CTA je Szene, höchstens drei verschiedene auf der Seite
- [ ] Alle sieben Varianten je Szene beschrieben
- [ ] **Prüfsatz bestanden:** Story ohne jede Animation vollständig verständlich
- [ ] Übergänge haben eine benannte Beziehung, nicht nur eine Bewegung
- [ ] Höchstens drei Sticky-Szenen, höchstens eine horizontale Sequenz
- [ ] Impressum und Datenschutz durchgehend erreichbar eingeplant

**Artefakt:** `storyboard.md`

---

## G3 — Prototyp

- [ ] Die **riskanteste** Szene gebaut, nicht die attraktivste
  (höchste technische Unsicherheit × höchste inhaltliche Wichtigkeit)
- [ ] Isoliert gebaut, nicht in `public_html`
- [ ] Baseline der bestehenden Seite gemessen und abgelegt
- [ ] Prototyp gegen Baseline gemessen
- [ ] Alle sieben Varianten geprüft
- [ ] Bewegung beim Sichtbarwerden erkennbar (Zeitgesetz)
- [ ] `scripts/audit_static.py` ohne BLOCKER
- [ ] Screenshots vorher/nachher abgelegt

**Artefakt:** Prototypdatei + Messwerte + Screenshots

---

## G4 — Release

- [ ] `checklists/release.md` vollständig abgearbeitet
- [ ] `checklists/scene-qa.md` je Szene abgearbeitet
- [ ] `scripts/audit_static.py` ohne BLOCKER
- [ ] `boerdesnack24-verify` durchlaufen, Green Gate erreicht
- [ ] `boerdesnack24-legal-impact` erneut durchlaufen, wenn Aussagen geändert wurden
- [ ] `boerdesnack24-security-regression`, falls Formular oder Datenfluss berührt
- [ ] Budgets eingehalten oder Abweichung begründet und freigegeben

**Artefakt:** Auditbericht mit Prioritätenliste

---

## Fast-Track

Änderungen der Klasse K0/K1 nach `boerdesnack24-verify` — Textkorrektur ohne
Aussageänderung, Farbwert, Abstand, Tippfehler — laufen über `scene-qa.md`
und G4.

**Ausnahme ohne Ermessen:** Betrifft die Änderung eine **Aussage**, gilt
immer G1. Auch bei einem einzigen Wort.

---

# ANHANG H — Szenen-QA (Original: checklists/scene-qa.md)

## Szenen-QA

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

---

# ANHANG I — Release-Audit (Original: checklists/release.md)

## Release-Audit

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
