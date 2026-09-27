# Abweichungen und Sperren zur Motion-Spezifikation

Stand: 27.09.2026. Geprüft gegen den Code (App `apps/mobile`, Landingpage im
Lovable-Projekt `0c068d85-…`) und gegen die Entscheidungen in `docs/`.
`motion/MOTION.md` bleibt die verbindliche Spezifikation. Diese Datei führt,
was vor einer Umsetzung zu beachten ist, damit sich Spezifikation, Code und
Recht nicht widersprechen. Erledigte Punkte werden mit Datum abgehakt, nicht
gelöscht.

## A. Lesbarkeit (WCAG 2.1 AA, BFSG) — gemessen am 27.09.2026

| Nr. | Stelle | Gemessen | Nötig | Vorschlag |
|---|---|---|---|---|
| A-1 | M04: Gold-600 `#DBA200` als Schrift auf Creme `#FBF8F4` | 2,16:1 | 3:1 (große Schrift) | Gold-Wörter in Gold-Text `#856A00` (auf Creme 4,89:1) oder die Section auf Ink stellen, dort Gold `#FDC102` (9,7:1) |
| A-2 | M05: inaktive Wörter `#4C4842` auf Ink `#202321` | 1,75:1 | 4,5:1 | Inaktive Wörter lesbar lassen, nur ohne Farbe: z. B. `#A9A39A` (App `textMuted`, 6,34:1). So wurde Muster 04 auf der Landingpage bereits umgesetzt („keine halbtransparente Schrift darunter") |
| A-3 | M03: Creme-Text auf Grün `#5C9A3F` (Panel „Eis") | 3,23:1 | 4,5:1 (Fließtext) | Nur die große Kategorie-Überschrift auf Grün; Meta-Zeile und CTA in Ink `#202321` (4,65:1) wie in der App (`onStatus`) |
| A-4 | M10: Pfeil Gold-600 `#DBA200` auf `#F4EFE8` | 2,00:1 | 3:1 (Bedienelement) | Pfeil in Ink `#202321` (13,87:1) oder Gold-Text `#856A00` (4,52:1) |

## R. Inhalte mit Außenwirkung (UWG, PAngV)

Die Beispieltexte in den Prompts stammen aus den Referenzen und aus dem
Entwurf. Solange kein Automat in Betrieb ist (V-010 in `docs/COMPLIANCE.md`),
dürfen sie so nicht erscheinen:

| Nr. | Stelle | Problem | Bis dahin |
|---|---|---|---|
| R-1 | M08 „Schwebende Bewertungs-Karten" | Es gibt noch keine Kundschaft und keine Bewertungen. Erfundene Bewertungen sind nach UWG Anhang Nr. 23b/23c stets unlauter; für echte gilt die Angabe, ob und wie sie geprüft wurden (§ 5b Abs. 3 UWG). | **gesperrt**, bis echte, geprüfte Bewertungen vorliegen |
| R-2 | M03 Meta „ab 1,50 €" und Sortiments-Panels | Preisangabe ohne festgelegtes Sortiment und ohne laufenden Automaten. Ein Sortiment wird laut `docs/scrolling-funktionen.md` erst gezeigt, wenn ein Automat bestückt ist. | Kategorien ohne Preis; Kennzeichnung „geplantes Sortiment" |
| R-3 | M05 Beispieltext „Außer dem Automaten am Bahnhof. Frisch befüllt, mitten in der Börde." | Behauptet einen laufenden Automaten an einem Standort, den es nicht gibt (§ 5 UWG). | Text aus bestehenden, wahren Aussagen, z. B. „5 % des Nettoerlöses bleiben in der Region. Du entscheidest mit, wer sie bekommt." |
| R-4 | M07 „Heute beliebt." | „Beliebt" braucht Verkaufsdaten; ohne Automat gibt es keine. | In der App auf die Wochenangebote aus der Datenbank beschränkt (so schon umgesetzt, `FocusCarousel`); auf der Landingpage gesperrt |
| R-5 | M09 Ticker „Wanzleben · Oschersleben · Haldensleben · Eilsleben" | Nennt Standorte, an denen kein Automat steht. Die Landingpage nennt „Osterweddingen und Umgebung". | Ticker nur mit tatsächlich vereinbarten Standorten |
| R-6 | Alter Claim „Immer da, wenn der Hunger kommt." in M01, M04, M09 | Am 27.09.2026 vom Gesellschafter abgelöst. | **In `MOTION.md` ersetzt** durch „Versorgung vor Ort. Wert für den Ort." (27.09.2026) |
| R-7 | M11 Beispieladresse `hallo@boerdesnack24.de` | Auf der Landingpage steht `kontakt@boerdesnack24.de`. | **In `MOTION.md` ersetzt** (27.09.2026) |

## T. Technik

| Nr. | Stelle | Befund | Umgang |
|---|---|---|---|
| T-1 | Abschnitt 2, `useScrollProgress` (Web) | Der Beispiel-Hook meldet **je Aufruf** einen eigenen `scroll`-Listener an und setzt React-State in jedem Frame. Das widerspricht Regel „EIN gemeinsamer Scroll-Progress, kein Listener pro Element" aus dem Master-Prompt und dem bestehenden einzigen Scroll-Handler `subscribe()` in Lovables `src/lib/scroll.ts`. | Bei der Web-Umsetzung den Hook auf `subscribe()` aufsetzen: gleiche Glättung (lerp 0.12), gleiche CSS-Variable `--p`, aber kein zusätzlicher Listener; State nur bei Wechsel einer diskreten Szene setzen |
| T-2 | Web-Codebase | Im Repository gibt es keine Next.js-App. Die Landingpage ist ein React+Vite-Projekt bei Lovable. | Web-Teile gehen als Auftrag an Lovable (Entscheidung vom 27.09.2026) |
| T-3 | Mengengrenze | Abschnitt 4 sieht auf der Landingpage elf Patterns vor (M01–M11). Der Kanon in `docs/scrolling-funktionen.md` erlaubt höchstens acht Bewegungsmuster je Seite; die Seite hat heute acht. | **Offene Entscheidung des Gesellschafters.** Regel 1 der Spezifikation („eine Hero-Bewegung pro Viewport") ist mit dem Kanon vereinbar, die Gesamtzahl nicht |
| T-4 | Bestehende App-Bausteine gegen Tokens | `motion.dart` nutzt noch eigene Werte: Reveal 500 ms, 14 px, Kurve `(.16,1,.3,1)`; `Pressable` 0,98. Die Tokens sehen 700 ms, 24 px, `--ease-out (.22,1,.36,1)` und `--press-scale 0.96` vor. | `AppMotion` ist seit dem 27.09.2026 auf die Tokens umgestellt (Dauern, Kurven). Reveal und Pressable werden bei ihrer nächsten Änderung angeglichen, nicht nebenbei, weil sich damit das Verhalten aller Bildschirme ändert und neu abgenommen werden muss |
| T-5 | `motion-tokens.css`, Kopfzeile | Verweist auf `tokens/spacing.css`. Die Datei gibt es im Repository nicht; sie stammt aus dem Designsystem in Claude Design. | Farben und Radien kommen weiter aus `app_tokens.dart` bzw. Lovables `src/styles.css` |
| T-6 | Farben außerhalb des Code-Designsystems | Die Prompts nennen `#DBA200` (Gold-600), `#FFEDAF` (Gold-100), `#F4EFE8`, `#E2DBCF`, `#4C4842`. Keiner davon ist in `app_tokens.dart` oder Lovables `:root` definiert. | Vor der Verwendung als Token ins Designsystem aufnehmen und gegen Punkt A messen |

## U. Umsetzungsstand

| Datum | Pattern | Wo | Nachweis |
|---|---|---|---|
| 27.09.2026 | M11 Copy-Pill (App) | `lib/core/widgets/design_system/copy_pill.dart`, eingesetzt beim Einlöse-Code aktivierter Coupons (`offers_tab.dart`). Ersetzt die bisherige Symbol-Schaltfläche mit Hinweisleiste | `test/core/widgets/copy_pill_test.dart` (5 Tests: Kopieren, Haptik, Ansage, Rückkehr nach 1,8 s, feste Breite, „Bewegung reduzieren", gesperrte Zwischenablage, Bildschirmleser); `flutter test` 149/149; Bildschirmfotos ohne Kontrastbefund |
| 27.09.2026 | Tokens (App) | `AppMotion` in `app_tokens.dart` spiegelt `motion-tokens.css`: 140/220/420 ms, `--ease-out`, `--ease-in-out`, `--ease-bounce`, `--press-scale` | wie oben |

M11 im Web (Kontakt-Pill im Fußbereich) ist noch offen: Der Fußbereich der
Landingpage ist laut Lovable-Auftrag vom 26.09.2026 unverändert zu lassen, und
M09 im selben Fußbereich hängt an R-5.
