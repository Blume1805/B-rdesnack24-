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
| R-2 | M03 Meta „ab 1,50 €" und Sortiments-Panels | Beispielpreis ohne Quelle. **Erledigt 27.09.2026:** Der Gesellschafter gibt das Sortiment frei; Quelle ist der Produktkatalog (Migration `product_catalog_price_list`, 28.07.2026). Startpreise je Kategorie: Snacks & Süßes ab 0,80 €, Kaltgetränke ab 1,50 €, Heißgetränke ab 1,30 €, Eis ab 1,00 €. Die Liste `docs/marketing/preisliste_2026-03.csv` ist eine ältere Kalkulation mit Einkaufspreisen und nicht die Quelle. | Beauftragt mit `docs/auftraege/lovable-auftrag-2026-09-27-motion.md`, Teil H. Offen: P-1 |
| R-3 | M05 Beispieltext „Außer dem Automaten am Bahnhof. Frisch befüllt, mitten in der Börde." | Behauptet einen laufenden Automaten an einem Standort, den es nicht gibt (§ 5 UWG). | Text aus bestehenden, wahren Aussagen, z. B. „5 % des Nettoerlöses bleiben in der Region. Du entscheidest mit, wer sie bekommt." |
| R-4 | M07 „Heute beliebt." | „Beliebt" braucht Verkaufsdaten; ohne Automat gibt es keine. | **App, 27.09.2026:** umgesetzt als „Eure Favoriten" (Grundlage: Bewertungen). Landingpage: nicht vorgesehen |
| R-5 | M09 Ticker „Wanzleben · Oschersleben · Haldensleben · Eilsleben" | Nennt Standorte, an denen kein Automat steht. Die Landingpage nennt „Osterweddingen und Umgebung". | Ticker nur mit tatsächlich vereinbarten Standorten |
| R-6 | Alter Claim „Immer da, wenn der Hunger kommt." in M01, M04, M09 | Am 27.09.2026 vom Gesellschafter abgelöst. | **In `MOTION.md` ersetzt** durch „Versorgung vor Ort. Wert für den Ort." (27.09.2026) |
| R-7 | M11 Beispieladresse `hallo@boerdesnack24.de` | Auf der Landingpage steht `kontakt@boerdesnack24.de`. | **In `MOTION.md` ersetzt** (27.09.2026) |
| R-8 | Satz der Text-Hervorhebung „Wer das Geld bekommt, entscheidest Du." (Landingpage, Muster 04 / M05) | Überzeichnet den Einfluss des Einzelnen: Die Kundschaft stimmt gemeinsam ab, die drei Zwecke mit den meisten Stimmen bekommen den Topf (§ 5 UWG). In der App am 27.09.2026 gleichartig korrigiert. | „Wer das Geld bekommt, entscheidest Du mit." — beauftragt mit `docs/auftraege/lovable-auftrag-2026-09-27-motion.md` |

## T. Technik

| Nr. | Stelle | Befund | Umgang |
|---|---|---|---|
| T-1 | Abschnitt 2, `useScrollProgress` (Web) | Der Beispiel-Hook meldet **je Aufruf** einen eigenen `scroll`-Listener an und setzt React-State in jedem Frame. Das widerspricht Regel „EIN gemeinsamer Scroll-Progress, kein Listener pro Element" aus dem Master-Prompt und dem bestehenden einzigen Scroll-Handler `subscribe()` in Lovables `src/lib/scroll.ts`. | Bei der Web-Umsetzung den Hook auf `subscribe()` aufsetzen: gleiche Glättung (lerp 0.12), gleiche CSS-Variable `--p`, aber kein zusätzlicher Listener; State nur bei Wechsel einer diskreten Szene setzen |
| T-2 | Web-Codebase | Im Repository gibt es keine Next.js-App. Die Landingpage ist ein React+Vite-Projekt bei Lovable. | Web-Teile gehen als Auftrag an Lovable (Entscheidung vom 27.09.2026) |
| T-3 | Mengengrenze | Abschnitt 4 sieht auf der Landingpage elf Patterns vor (M01–M11). Der Kanon in `docs/scrolling-funktionen.md` erlaubt höchstens acht Bewegungsmuster je Seite; die Seite hat heute acht. | **Offene Entscheidung des Gesellschafters.** Regel 1 der Spezifikation („eine Hero-Bewegung pro Viewport") ist mit dem Kanon vereinbar, die Gesamtzahl nicht |
| T-4 | Bestehende App-Bausteine gegen Tokens | `motion.dart` nutzt noch eigene Werte: Reveal 500 ms, 14 px, Kurve `(.16,1,.3,1)`; `Pressable` 0,98. Die Tokens sehen 700 ms, 24 px, `--ease-out (.22,1,.36,1)` und `--press-scale 0.96` vor. | `AppMotion` ist seit dem 27.09.2026 auf die Tokens umgestellt (Dauern, Kurven). Reveal und Pressable werden bei ihrer nächsten Änderung angeglichen, nicht nebenbei, weil sich damit das Verhalten aller Bildschirme ändert und neu abgenommen werden muss |
| T-5 | `motion-tokens.css`, Kopfzeile | Verweist auf `tokens/spacing.css`. Die Datei gibt es im Repository nicht; sie stammt aus dem Designsystem in Claude Design. | Farben und Radien kommen weiter aus `app_tokens.dart` bzw. Lovables `src/styles.css` |
| T-6 | Farben außerhalb des Code-Designsystems | Die Prompts nennen `#DBA200` (Gold-600), `#FFEDAF` (Gold-100), `#F4EFE8`, `#E2DBCF`, `#4C4842`. Keiner davon ist in `app_tokens.dart` oder Lovables `:root` definiert. | Vor der Verwendung als Token ins Designsystem aufnehmen und gegen Punkt A messen |
| T-7 | Regel 6 „Intro einmal pro Session (`sessionStorage 'bs24-intro'`)" | Speichert auf dem Gerät des Besuchers etwas, das er nicht angefordert hat. Nach § 25 Abs. 1 TDDDG einwilligungspflichtig; die Ausnahme nach Abs. 2 Nr. 2 (unbedingt erforderlich für einen ausdrücklich gewünschten Dienst) greift für eine Intro-Sperre nicht. Die Landingpage hat bewusst kein Einwilligungsbanner. | Intro einmal **pro Seitenaufruf**, gemerkt nur im Arbeitsspeicher (Modul-Variable). Der Bewegungsschalter (`localStorage 'bs24-motion'`) bleibt zulässig, weil der Besucher ihn selbst stellt |
| T-8 | M06 Szenenfarben Gold → Gold-100 → Creme → Ink | Beim Überblenden von Ink auf eine helle Fläche wechselt auch die Schrift von hell auf dunkel; für einen Moment liegt helle auf heller oder dunkle auf dunkler Fläche, der Kontrast fällt unter 4,5:1. Das Projektwissen verlangt 4,5:1 auch in Zwischenstufen. | Landingpage: Gold → Gold-hell `#FEE7A0` → Creme, Schrift durchgehend Ink; schlechtester Zwischenwert 9,67:1 (gemessen 27.09.2026) |
| T-9 | M05 „Section 200vh sticky" | Auf der Landingpage ist der Text ein einzelner Satz. Zwei Bildschirmhöhen Kleben für eine Zeile wären Leerlauf und belegten den zweiten von höchstens zwei klebenden Abschnitten auf dem Telefon. | Landingpage: nicht gepinnt, Wortaktivierung über `useScrollProgress` am Satz |
| T-10 | M01 Buchstabenstaffel | Gedacht für eine kurze Wortmarke. Die Überschrift der Landingpage ist ein Satz mit 37 Zeichen; die Buchstabenstaffel ließe sie fast zwei Sekunden unvollständig. | Landingpage: Staffel je Wort (`--stagger-word`), Ende nach 1 060 ms, innerhalb `--dur-hero` |
| T-11 | M03 „Panel wächst (1fr → 1.6fr)" | `grid-template-columns` zu animieren verstößt gegen Regel 1 und verschiebt bei jedem Überfahren die Nachbarpanels; Hover zählt für CLS nicht als Eingabe, CLS wäre größer als 0. | Landingpage: Panel behält seine Breite; Symbol, Chips und Schaltfläche bewegen sich nur über `transform`/`opacity`, alles ist immer im Layout |
| T-12 | M03 „Touch: 1. Tap öffnet, 2. Tap navigiert"; M03 „aktives Panel per Scroll-Position" (mobil) | Ein zweistufiger Tap verbirgt Inhalt hinter einer Geste; Aktivierung per Scroll-Position wäre ein neuntes Muster. | Ohne Hover und unter 768 px sind Chips und Schaltfläche immer sichtbar |
| T-13 | M07 App „PageView viewportFraction 0.62, Grundneigung abwechselnd ±8°" | Eine Grundneigung auch der Fokuskarte erschwert Lesen und Tippen. | App: Fokuskarte gerade, Nachbarn bis ±8° je nach Abstand; Seitenanteil über die Kartenbreite (212 px, am Telefon rund 0,6) |

## P. Offene Punkte mit Verantwortlichem

| Nr. | Frage | Warum es zählt | Wer, bis wann |
|---|---|---|---|
| P-1 | Enthalten die Katalogpreise für Getränke in Pfandflasche oder Dose den Pfand? | **Beantwortet 27.09.2026: ja, der Pfand ist enthalten.** Das widerspricht § 7 PAngV (Pfand neben dem Preis angeben, nicht einbeziehen). Betroffen: App, Kassenbon, Preisschilder am Automaten, Rabattberechnung. Die Landingpage ist nicht betroffen, weil ihre „ab"-Preise von pfandfreien Produkten stammen. Weiter in `docs/COMPLIANCE.md`, V-016 | Umsetzung offen, siehe V-016 |
| P-2 | Ist „Durstlöscher 0,5 l" im Karton (ohne Pfand)? | Der Startpreis „Kaltgetränke ab 1,50 €" stützt sich darauf. | Philipp, 04.10.2026 |

## U. Umsetzungsstand

| Datum | Pattern | Wo | Nachweis |
|---|---|---|---|
| 27.09.2026 | M11 Copy-Pill (App) | `lib/core/widgets/design_system/copy_pill.dart`, eingesetzt beim Einlöse-Code aktivierter Coupons (`offers_tab.dart`). Ersetzt die bisherige Symbol-Schaltfläche mit Hinweisleiste | `test/core/widgets/copy_pill_test.dart` (5 Tests: Kopieren, Haptik, Ansage, Rückkehr nach 1,8 s, feste Breite, „Bewegung reduzieren", gesperrte Zwischenablage, Bildschirmleser); `flutter test` 149/149; Bildschirmfotos ohne Kontrastbefund |
| 27.09.2026 | Tokens (App) | `AppMotion` in `app_tokens.dart` spiegelt `motion-tokens.css`: 140/220/420 ms, `--ease-out`, `--ease-in-out`, `--ease-bounce`, `--press-scale` | wie oben |
| 27.09.2026 | M07 Geneigtes Karussell (App) | `FocusCarousel(tilt: true)` in `lib/core/widgets/motion/motion.dart`, eingesetzt als ein Karussell „Eure Favoriten" über Getränke, Snacks, **Süßwaren** und Eis. Süßwaren fehlten vorher in den Favoriten, obwohl der Katalog 13 davon führt. | `test/core/widgets/focus_carousel_test.dart` (4 Tests); Bildschirmfoto `01c_favoriten` ohne Kontrastbefund |
| 27.09.2026 | Sterne der Bewertung (App) | Leere Sterne jetzt `textMuted` statt `borderSubtle` (1,66:1 → 6,3:1). Betrifft auch die Sterne-Eingabe beim Bewerten, dort sind sie Bedienelemente. | Bildschirmfoto `01c_favoriten` |

M11 im Web (Kontakt-Pill im Fußbereich) ist noch offen: Der Fußbereich der
Landingpage ist laut Lovable-Auftrag vom 26.09.2026 unverändert zu lassen, und
M09 im selben Fußbereich hängt an R-5.
