# Landingpage — was noch offen ist

Stand 12.09.2026, nach dem Bewegungsauftrag (Lovable-Commit `a4811f5c`).
Grundlage: `docs/scrollcraft/references/storyboard.md` (Szenen und
Übergänge), `patterns.md` (Musterauswahl) und die vier Aufträge unter
`docs/lovable/`.

---

## Zuerst: warum die Seite anders aussieht als geplant

Drei Gründe, in der Reihenfolge ihrer Wirkung.

### 1. Die Hälfte der Bewegung ist auf dem Telefon abgeschaltet

Das ist vermutlich der eigentliche Grund für den Eindruck.

| Muster | Läuft ab | Auf dem Telefon |
|---|---|---|
| 13 Produktwechsel (Szene 03) | **761 px** Fensterbreite | **aus** — vier Karten untereinander |
| 07 Horizontale Sequenz (Szene 07) | **1101 px** | **aus** — umbrechende Liste |
| 10 Zoomfahrt (Szene 02) | überall | nur **1,3×** statt 2,4× |
| 06 Sticky-Bühne (Szene 06) | überall | läuft |
| 09 Farbwechsel, 17 physisch → digital | überall | laufen |

Auf einem Telefon bleiben von zehn Mustern also gut sechs übrig, und die
zwei auffälligsten fehlen. Auf einem 13-Zoll-Notebook mit skalierter
Auflösung kann auch die Sequenz wegfallen — 1101 px ist eine hohe
Schwelle.

Beide Schwellen sind bewusst gesetzt (horizontales Scrollen auf kleinen
Geräten ist unbrauchbar, und eine Sticky-Bühne braucht Höhe). Die
**Höhe** der Schwellen ist aber verhandelbar: 761 px könnte auf rund
600 px, 1101 px auf rund 900 px. Das ist eine Entscheidung, keine
technische Grenze.

### 2. Drei von fünf Übergängen sind nie gebaut worden

Das Storyboard beschreibt nicht nur acht Szenen, sondern auch fünf
**Übergänge** — und genau die machen aus Szenen eine Erzählung. Gebaut
ist bisher fast nur das, was *innerhalb* einer Szene passiert.

| Übergang | Soll laut Storyboard | Ist |
|---|---|---|
| 02 → 03 | Objekt gibt seinen Inhalt frei — Zoom in den Automaten | **halb**: der Zoom läuft, endet aber in Szene 02 und übergibt nichts |
| 03 → 04 | Kauf erzeugt Wirkung — Produkt löst den Anteilsbalken aus | **fehlt** |
| 04 → 05 | Wirkung wird Beteiligung — Balken wandert in die App | **fehlt** |
| 05 → 06 | Kundensicht wird Systemsicht — Farbwechsel hell → dunkel | **gebaut**, aber als leeres Wischband |
| 06 → 07 | System braucht Ort — Automat wandert auf die Karte | **fehlt** |

In keinem der bisherigen Aufträge standen diese Übergänge. Mein Fehler:
Ich habe die Muster einzeln beauftragt und die Übergangstabelle des
Storyboards nicht mitgenommen.

### 3. Der Kanon widerspricht sich an einer Stelle selbst

`patterns.md` sagt am Ende unter „Auswahl für die aktuelle Seite":

> Aktiv: **01, 05, 06, 07, 08, 13, 18** und **04 genau einmal**.

Das Storyboard in derselben Sammlung ordnet den Szenen dagegen **10**
(Szene 02) und **17** (Szene 05) zu — beide stehen nicht in der Auswahl.
Umgekehrt steht **08 Kartenstapel** in der Auswahl, ist aber keiner Szene
zugeordnet und bis heute nicht gebaut.

Ich bin dem Storyboard gefolgt. Wäre ich der Auswahlliste gefolgt, sähe
die Seite anders aus — dann stünde ein Kartenstapel da, und Zoomfahrt und
physisch/digital gäbe es nicht.

**Das muss einmal entschieden werden**, sonst zieht sich der Widerspruch
durch jeden weiteren Auftrag. Mein Vorschlag: das Storyboard gewinnt, es
ist szenenbezogen und damit die genauere Aussage; die Auswahlliste in
`patterns.md` wird darauf angeglichen.

---

## Der Abo-Vergleich — daran ist nicht das Guthaben schuld

Die Tabelle „Kostenlos gegen Abo" (Szene 05b, `Plans.tsx`) sieht aus wie
sie aussieht, weil **ihre Gestaltung nie beauftragt wurde**. Der einzige
Auftrag, der sie je berührt hat
(`AUFTRAG-2026-09-LANDINGPAGE-KUNDENNUTZEN.md`), hat ausschließlich zwei
falsche Zeilen korrigiert und einen Absatz ergänzt — Inhalt, keine Optik.

Es ist heute eine schlichte HTML-Tabelle mit dünnen Linien, dreizehn
Zeilen „ja / ja / —", und sie steht direkt nach der Cremeszene auf weißem
Grund. Sie ist korrekt und barrierefrei, aber sie ist die einzige Stelle
der Seite, an der nichts gestaltet ist.

Eine Neugestaltung kostet geschätzt **1 bis 1,5 Credits** und ist der
sichtbarste Gegenwert pro Credit auf dieser Liste.

---

## Offene Punkte, nach Aufwand sortiert

### Klein (zusammen rund 1 Credit)

1. **Bewegungsschalter richtigstellen.** Beschriftung fest auf
   „Bewegung", `aria-pressed={on}`. Heute meldet er „Bewegung aus —
   gedrückt", während die Bewegung läuft. Meine Vorgabe im letzten
   Auftrag war falsch; die Änderung hat es verschlechtert.
2. **Szene 03b bekommt Cremegrund.** Sie steht heute zwischen zwei hellen
   Szenen, der Rhythmus hell/creme/hell bricht.
3. **KI-Hinweis an der Automatenzeichnung.** Die Zeichnung steht an drei
   Stellen (Szene 02, 05, 06), der Hinweis „mit KI erzeugt" nur an einer.
   Zwei davon sind alt, eine ist aus dem letzten Lauf.
4. **Geräteschwellen senken**, falls gewünscht (761 → 600, 1101 → 900).

### Mittel (je 1 bis 2 Credits)

5. **Abo-Vergleich gestalten** (siehe oben).
6. **Wischband entscheiden.** 62 svh leere Seite zwischen Abo und
   Sticky-Bühne. Kürzen, ersetzen oder streichen.
7. **Übergang 03 → 04**: das Produkt löst den Anteilsbalken aus.
8. **Übergang 04 → 05**: der Balken wandert in die App.
9. **Übergang 06 → 07**: der Automat wandert auf die Karte.

### Größer

10. **Zoomfahrt Szene 02 auf eine eigene Szene stellen.** Heute läuft sie
    über rund 220 px Scrollweg, weil die Zeichnung kleiner ist als das
    Fenster. Als echte Kamerafahrt braucht sie eine eigene Höhe.
11. **Musterbudget.** Aktiv sind zehn, der Kanon nennt mehr als acht
    einen Befund im AI-Look-Audit. Zwei müssen weg — der billigste
    Schnitt ist das Wischband (Punkt 6).

### Nicht am Guthaben, sondern an Philipp

12. **Landingpage nach Hostinger ausrollen** (Aufgabe 1.2).
13. **Schriften wiegen zusammen 234 KB** — offen aus
    `landingpage-nachfassen.md`.
14. **Formular ist ausgeblendet**, solange die Supabase-Umgebungsvariablen
    leer sind. Stattdessen steht der direkte Weg da. So beauftragt.

### Gesperrt, nicht offen

15. **12 Maskenreveal** und **14 Produkt 360°** — es gibt keine Fotos.
16. **16 Tageszeit-Erzählung** — gesperrt bis der erste Automat läuft.

---

## Was nicht offen ist

Die **Szenenreihenfolge stimmt** mit dem Storyboard überein:
01 Ankunft · 02 Der Automat · 03 Genießen · 04 Geben · 05 Gutes tun ·
06 Ein Automat kann mehr · 07 Ihre Fläche · 08 Abschluss. Dazu zwei
später beauftragte Szenen: 03b „Warum die App" und 05b „Die App"
(Abo-Vergleich).

Jede der acht Szenen trägt heute die Bewegung, die das Storyboard ihr
zuordnet. Was fehlt, ist der Weg **zwischen** ihnen.
