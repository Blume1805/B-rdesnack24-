# Technik

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
