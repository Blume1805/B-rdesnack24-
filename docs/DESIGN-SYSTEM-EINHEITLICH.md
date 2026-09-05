# Ein Designsystem über alle Oberflächen

**Stand:** 02.09.2026 · Gilt für alle drei Oberflächen von Bördesnack24

Bördesnack24 hat heute **drei** Oberflächen, die dieselbe Marke tragen und sie
in **drei verschiedenen Dialekten** aufschreiben. Dieses Dokument legt den
gemeinsamen Vertrag fest.

| Oberfläche | Technik | Inhalt |
|---|---|---|
| **Gesellschafter-App** | Flutter, `apps/mobile` | Verwaltung (19 Screens), Administration (5), Finanzen (2), Freigaben (1), Recht (1), Anmeldung (4) — **plus ein Kundenbereich mit 18 Screens** |
| **Kunden-App** | Lovable A, „BÖRDESNACK Hub" | Privatpersonen-Bereich + Unternehmensbereich (`/app/unternehmen/*`) |
| **Partner-Portal** | Lovable B | Firmenkunden: Dashboard, Firma, Kampagnen, Kontoauszug, Verträge |

---

## 1. Der Ist-Zustand: dieselbe Marke, drei Schreibweisen

Alle Werte unten sind aus dem laufenden Code gelesen, nicht aus einer
Design-Vorlage.

| Rolle | Flutter `app_tokens.dart` | Lovable A `styles.css` | Lovable B `styles.css` |
|---|---|---|---|
| Notation | Hex `Color(0xFF…)` | Hex | **oklch** |
| Gold | `brand #FDC102` | `--gold #fdc102` | `--brand oklch(0.845 0.166 87)` |
| Ink | `ink #202321` | `--navy #202321` ⚠️ | `--ink oklch(0.25 0.006 150)` |
| Gold auf hellem Grund | `brandText #8A6E00` | `--gold-ink #8a6a00` | `--brand-text oklch(0.53 0.108 84)` |
| Hintergrund | `surfaceAlt #F7F5F1` | `--background #fbf8f4` | `oklch(0.985 0.005 95)` |
| Karte | `surfaceCard #FFFFFF` | `--card #ffffff` | `--card oklch(1 0 0)` |
| Rahmen | `borderSubtle #E3DFDA` | `--border #cfc7bb` | `--border oklch(0.9 0.008 100)` |
| Gedämpfter Text | `textMuted #6E6A66` | `--muted-foreground #6b6862` | `oklch(0.51 0.012 120)` |
| Erfolg | `statusPositive #5C9A3F` | `--success #5c9a3f` | `--success oklch(0.58 0.13 150)` |
| Warnung | `statusWarning #E8A206` | — | `--warning oklch(0.75 0.145 70)` |
| Fehler | `statusCritical #B31C1C` | `--destructive #b31c1c` | `--destructive oklch(0.52 0.19 27)` |
| Eckenradius | — | `0.625rem` | `0.875rem` |
| Bewegungskurve | — | `cubic-bezier(0.22, 1, 0.36, 1)` | `cubic-bezier(0.33, 1, 0.68, 1)` |

### Was daran wirklich stört

**Gold und Ink stimmen überall überein.** Das ist die gute Nachricht: Die
Markenfarben sind identisch, nur unterschiedlich notiert.

Auseinander laufen die **Neutraltöne** — Hintergrund, Rahmen, gedämpfter Text.
Genau die bestimmen, ob zwei Oberflächen sich wie ein Haus anfühlen. `#F7F5F1`
gegen `#fbf8f4` gegen `oklch(0.985 0.005 95)` sind drei verschiedene Cremes.
`#E3DFDA` gegen `#cfc7bb` ist ein sichtbar anderer Rahmen.

**Drei Namen für dieselbe Rolle.** `brandText` / `--gold-ink` / `--brand-text`
meinen dasselbe: Gold, das auf hellem Grund lesbar ist. Solange sie
verschieden heißen, kann keine Komponente von einem Projekt ins andere
wandern — und jede Korrektur muss dreimal gemacht werden.

**⚠️ `--navy` trägt Ink.** In Lovable A steht im Code:

```css
--navy: #202321; /* Ink — behält den Token-Namen, trägt jetzt Ink */
```

Ein Token, dessen Name das Gegenteil seines Werts behauptet, führt jeden in
die Irre, der später darauf baut. Dasselbe gilt für `--gradient-navy`, das
gar kein Verlauf ist (`linear-gradient(#202321, #202321)`).

---

## 2. 🔴 Der auffälligste Bruch: Das Partner-Portal hat keine Schriften

Lovable B deklariert:

```css
--font-display: "Bricolage Grotesque", system-ui, sans-serif;
--font-sans: "Hanken Grotesk", system-ui, sans-serif;
```

Im Projekt gibt es aber **keine `@font-face`-Regel und kein `public/fonts/`** —
nur `favicon.ico` und `robots.txt`. Beide Schriften werden nie geladen. Das
Portal rendert vollständig in `system-ui`, also in Segoe UI, Roboto oder San
Francisco, je nach Gerät des Betrachters.

Das ist kein Feinschliff: Zwei Oberflächen derselben Firma nebeneinander, und
eine davon sieht aus wie ein Betriebssystem-Dialog.

**Zu tun:** Die vier `.woff2`-Dateien und die zugehörigen `@font-face`-Blöcke
aus Lovable A übernehmen, samt der beiden OFL-Lizenztexte. Die Schriften
werden **selbst ausgeliefert**, nicht von Google Fonts geladen — das ist eine
bewusste Entscheidung: Die IP-Adresse der Besucher verlässt die Seite nicht.

---

## 3. Der gemeinsame Vertrag

### 3.1 Maßgeblich ist Lovable A

Nicht aus Bequemlichkeit, sondern weil es die einzige Fassung ist, die

* die Marken-Neutraltöne benennt (Cream `#FBF8F4`, Börde-Grau, Frisch-Grün
  `#5C9A3F`),
* für Gold und Grün **geprüfte Textvarianten** auf hellem Grund führt
  (`--gold-ink`, `--success-ink`, ≥ 4,5:1 nach WCAG 1.4.3),
* die Schriften selbst ausliefert,
* eine Abstands-, Typo- und Bewegungsskala hat statt freihändiger Werte,
* Tippflächen (`tap-44`) und Fokusringe als Regel führt, nicht als Ausnahme.

Die beiden anderen Oberflächen ziehen nach. Nicht umgekehrt.

### 3.2 Die verbindlichen Werte

```
Marke
  gold                #FDC102     Akzent. Nur auf Ink als Fläche.
  gold-soft           #FEE7A0
  gold-on-light       #8A6A00     Gold als TEXT auf hellem Grund. Nie #FDC102.
  ink                 #202321     Text, dunkle Flächen
  ink-soft            #353834

Flächen
  background          #FBF8F4     Cream
  card                #FFFFFF
  secondary / muted   #F2EEE8
  accent              #FDF3D6

Linien und Text
  border              #CFC7BB
  border-strong       #8F887E
  text                #202321
  text-muted          #6B6862

Zustände (Fläche / Text auf hellem Grund)
  success             #5C9A3F  /  #406C2B
  warning             #E8A206  /  #8A6100
  danger              #B31C1C  /  #B31C1C
  info                #0066CC  /  #0066CC
```

**Zwei Regeln, die aus diesen Werten folgen und oft verletzt werden:**

1. **Gold trägt nur auf Ink.** `#FDC102` als Text auf Cream erreicht keinen
   ausreichenden Kontrast. Auf hellem Grund gilt `#8A6A00`. Dasselbe für Grün:
   Fläche `#5C9A3F`, Text `#406C2B`.
2. **Eine goldene Fläche pro Bildschirm.** Gold ist der Hinweis „hier
   entlang". Zwei goldene Flächen heben sich gegenseitig auf.

### 3.3 Eine Namensmenge für alle drei

Diese Rollennamen gelten überall — als CSS-Variable in Lovable, als
Dart-Konstante in Flutter:

```
gold · gold-soft · gold-on-light
ink · ink-soft
background · card · secondary · accent
border · border-strong
text · text-muted
success · success-on-light
warning · warning-on-light
danger · danger-on-light
info
```

**Migration ohne Bruch:** Die alten Namen bleiben zunächst als Verweis stehen
(`--navy: var(--ink)`), damit nichts auf einen Schlag kaputtgeht. Wer eine
Datei ohnehin anfasst, stellt sie dabei um. Der Verweis fällt weg, wenn ihn
niemand mehr benutzt.

`--navy` und `--gradient-navy` in Lovable A werden dabei aufgelöst: Der eine
heißt künftig `--ink`, der andere ist gar kein Verlauf und wird zu einer
Fläche (`background: var(--ink)`).

### 3.4 Schrift

Beide Schnitte, überall, selbst ausgeliefert:

* **Bricolage Grotesque** (400–800) für Überschriften und Zahlen
* **Hanken Grotesk** (300–800) für Fließtext

Typo-Ebenen aus Lovable A übernehmen: `type-display-xl/lg/md`, `type-body`
(15 px / 1,55), `type-support` (13 px — die Untergrenze, darunter wird nichts
kleiner), `type-eyebrow`, `type-num` (Tabellenziffern).

**Beträge und Kennzahlen immer mit Tabellenziffern.** In einem Kontoauszug
springen proportionale Ziffern; das ist in einer Finanzansicht nicht nur
hässlich, sondern schwer zu lesen.

### 3.5 Abstände und Ecken

Skala 4 · 8 · 12 · 16 · 20 · 24 · 32 · 40. Keine freihändigen Werte
(`p-[13px]`, `mt-7`, `gap-9` gehören nicht ins System). Seitenrand mobil
20 px, Abschnittsabstand 24 px.

Radius: **`0.625rem`** als Basis. Lovable B stellt von `0.875rem` um.

### 3.6 Bewegung

Eine Hauskurve, vier Dauern — für alle drei Oberflächen:

```
--ease-house       cubic-bezier(0.22, 1, 0.36, 1)
--duration-press   200ms
--duration-fade    350ms
--duration-shared  450ms
--duration-count   900ms
```

Nichts über 0,6 s außer dem Zahlenlauf. Lovable B stellt seine eigene Kurve
(`0.33, 1, 0.68, 1`) darauf um.

`prefers-reduced-motion` respektieren — in allen drei Oberflächen, und zwar so
gründlich wie in Lovable A: Auch Scroll-Reveals müssen dann sofort vollständig
dastehen, nicht nur schneller einblenden.

### 3.7 Barrierefreiheit als Regel, nicht als Nachtrag

* Mindestens **44 × 44 px** Tippfläche, auch wenn das Symbol kleiner ist.
* Sichtbarer **Fokusring** auf jedem Bedienelement — nie nur eine
  Farbänderung. Auf hellem Grund `#8A6A00`, auf Ink `#FDC102`.
* Zustand nie **nur** über Farbe. „Ausverkauft" braucht ein Wort, nicht nur
  ein rotes Feld.

### 3.8 Register: gleiche Marke, andere Lautstärke

Einheitlich heißt nicht identisch. Die drei Oberflächen haben verschiedene
Aufgaben, und das darf man sehen — aber in der Betonung, nicht in der Palette.

| Oberfläche | Register | Was das heißt |
|---|---|---|
| Kunden-App | wärmer, größere Bilder, mehr Bewegung | Große Karten, Produktbilder, animierte Zahlen. Gold darf als Fläche auftreten. |
| Partner-Portal | ruhiger, dichter, tabellarisch | Zahlen und Vertragsstatus in wenigen Blicken. Wenig Bewegung, keine Bilder um ihrer selbst willen, Tabellenziffern überall. |
| Gesellschafter-App | am dichtesten, Werkzeugcharakter | Listen, Filter, Tabellen. Keine Zierbewegung. Gold nur als Zustandsakzent. |

Was **nicht** variieren darf: Farbwerte, Schriften, Radien, Bewegungskurve,
Fokusringe, Tippflächen, Zustandsfarben.

---

## 4. Was das je Oberfläche bedeutet

### Lovable A — Kunden-App

Bereits nahe am Ziel. Zu tun:

1. `--navy` → `--ink` umbenennen, `--navy` als Verweis stehen lassen.
2. `--gradient-navy` / `--gradient-gold` auflösen — es sind keine Verläufe.
3. `--gold-ink` → `--gold-on-light`, `--success-ink` → `--success-on-light`
   (alte Namen als Verweis).
4. `warning` und `info` ergänzen — Lovable A hat beide nicht, die anderen
   beiden Oberflächen schon.
5. **Der Unternehmensbereich muss aussehen wie das Partner-Portal, nicht wie
   der Privatkundenbereich.** `/app/unternehmen/*` ist Zahlenarbeit: ruhiger,
   dichter, tabellarisch. Gleiche Farben, andere Lautstärke.

### Lovable B — Partner-Portal

1. **Schriften ausliefern** (§ 2). Das ist der größte sichtbare Gewinn.
2. Die Neutraltöne auf die Werte aus § 3.2 setzen.
3. Radius `0.875rem` → `0.625rem`.
4. Bewegungskurve auf `--ease-house` umstellen.
5. Rollennamen angleichen (`--brand` → `--gold`, `--brand-text` →
   `--gold-on-light`).

### Flutter — Gesellschafter-App

1. `surfaceAlt #F7F5F1` → `#FBF8F4`, `borderSubtle #E3DFDA` → `#CFC7BB`,
   `brandText #8A6E00` → `#8A6A00`, `textMuted #6E6A66` → `#6B6862`.
2. `border-strong #8F887E` und `success-on-light #406C2B` ergänzen — fehlen
   heute.
3. Die Bewegungsdauern und die Hauskurve als Konstanten aufnehmen.
4. Die Namen aus § 3.3 übernehmen.

> Diese Änderungen sind klein, aber sie berühren jede Ansicht. Sie gehören in
> **einen** Durchgang mit Golden-File-Prüfung, nicht verteilt über Wochen.

---

## 5. Wie man prüft, ob es gelungen ist

Kein „sieht einheitlich aus". Prüfbar:

1. **Der Nebeneinander-Test.** Ein Bildschirm aus jeder Oberfläche
   nebeneinander. Ein Fremder soll sagen können, dass sie zum selben Haus
   gehören — und trotzdem erkennen, welcher wofür ist.
2. **Der Wandertest.** Eine Komponente (etwa eine Kennzahlkarte) aus einem
   Projekt ins andere kopieren. Wenn sie ohne Umbenennung von Farbtoken
   funktioniert, stimmt der Vertrag. Wenn nicht, ist er noch nicht erfüllt.
3. **Der Kontrasttest.** Jede Gold-auf-Hell- und Grün-auf-Hell-Kombination
   gegen WCAG 1.4.3 messen (≥ 4,5:1). Keine Schätzung, ein gemessener Wert.
4. **Der Schrifttest.** Beide Schriftfamilien laden in **allen drei**
   Oberflächen — im Netzwerk-Tab nachsehen, nicht im CSS.
5. **Der Bewegungstest.** `prefers-reduced-motion` einschalten. Jeder Inhalt
   steht sofort vollständig da. Kein Reveal bleibt hängen.
