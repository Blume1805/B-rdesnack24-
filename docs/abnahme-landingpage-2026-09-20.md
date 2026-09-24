# Abnahme Landingpage — Durchlauf vom 20.09.2026

Auftrag an Lovable am 20.09.2026, 17:53 Uhr, Projekt „Bördesnack24 Landingpage".
Ergebnis: Commit `d68cd299`, 11 Dateien geändert, fertig um 17:55 Uhr.

Geprüft wurden `src/routes/index.tsx`, `src/routes/agb.tsx`,
`src/routes/datenschutz.tsx`, `src/data/site.ts`,
`src/components/bs24/LegalPage.tsx` und `src/styles.css` im Quelltext — nicht
nach Augenschein, sondern durch Lesen der ausgelieferten Dateien.

## Was stimmt

| Abnahmefrage | Befund |
|---|---|
| Steht der Standortabschnitt vor dem Kundenabschnitt? | ✅ Standortgeber ist Abschnitt 2, Kundschaft Abschnitt 4. |
| Wird nirgends ein Abo, ein Preis oder ein Store genannt? | ✅ `Plans.tsx` gelöscht (−79 Zeilen); keine Preisangabe zur App. |
| Kommt „Spende" in keiner Form vor? | ✅ Durchgehend „erwirtschaftet für". |
| Keine Prozentzahl für den Standortanteil? | ✅ „ein fester, am Standort vereinbarter Anteil". |
| Hängt der Betriebsstand an genau einem Schalter? | ✅ `src/data/site.ts`, `betriebsstatus: "vorbereitung"`; drei Stellen lesen ihn aus. |
| Keine externe Adresse im ausgelieferten CSS? | ✅ Schriften weiter selbst gehostet aus `public/fonts`, kein CDN-Aufruf. |
| Eigene Datenschutzerklärung statt der App-Fassung? | ✅ Vollständig neu: Server-Protokolldaten, E-Mail-Kontakt, Betroffenenrechte. **Firebase, Google Maps und Supabase kommen nicht mehr vor.** |

Die Korrektur am Briefing vom selben Tag hat also getragen: Ohne sie hätte die
Seite eine Verarbeitung behauptet, die dort nicht stattfindet.

Bemerkenswert: Lovable hat die vorgegebene Kernaussage „andere betreiber zahlen
ihnen miete. wir zahlen ihrem verein." zu „… wir erwirtschaften für ihren
verein." geändert. Das ist **besser** als die Vorgabe — „zahlen" hätte der
offenen rechtlichen Einordnung (V-002) vorgegriffen. Die Änderung bleibt.

## Was nicht stimmt

### L-1 🔴 Die AGB-Seite rendert als Textwüste mit Sternchen

Der Wortlaut ist korrekt übernommen, steckt aber in `<p>`-Elementen, die
Zeilenumbrüche und Aufzählungen als reinen Text enthalten:

```
<p>2) Was die App kann
* Produkte, Preise und Verfügbarkeit an unseren Automaten ansehen
* Automatenstandorte finden
...
```

`src/styles.css` setzt `white-space: pre-line` nur auf `.prose .addr` und
`.prose .form-sample`, **nicht** auf `.prose p`. Im Browser fallen die
Umbrüche damit weg: Aus der Aufzählung wird eine durchgehende Zeile, in der
die Sternchen als Zeichen stehen bleiben. Das betrifft die Ziffern 2, 6, 7, 8
und 12 — also die Abschnitte zu Leistungsumfang, Vorteilsprogramm, Beendigung,
Widerruf und Verboten.

Für eine Rechtsseite ist das kein Schönheitsfehler: Unleserliche AGB sind ein
Argument gegen ihre Einbeziehung.

**Behebung:** Überschriften als `<h2>`, Aufzählungen als `<ul>/<li>`.

### L-2 🟡 Der letzte Satz der AGB fehlt

Die App-Fassung endet mit:

> Diese Bedingungen sind eine technische Vorlage und werden vor Live-Betrieb
> anwaltlich finalisiert.

Auf der Landingpage fehlt dieser Satz. Damit unterscheiden sich zwei Fassungen
desselben Dokuments wieder — genau der Zustand, den V-009 beseitigt hat.

**Behebung:** Satz ergänzen.

### L-3 🟢 Nachrangig: tote Gestaltungsregeln

`src/styles.css` enthält weiterhin den Block „Abo-Vergleich" mit `.plans`,
`.plan-panel`, `.plan-panel__price--paid`. Die zugehörige Komponente ist
gelöscht. Kein Fehler nach außen, aber überflüssiges Gewicht und ein
Kommentar, der dem neuen Konzept widerspricht.

## Veröffentlichung

🔴 **Die Seite darf noch nicht veröffentlicht werden.** Unabhängig von L-1 und
L-2 fehlt der Auftragsverarbeitungsvertrag mit dem Hoster, auf den sich die
neue Datenschutzerklärung stützt (offener Haken in `docs/COMPLIANCE.md`).

---

# Nachbesserung vom 21.09.2026 — Durchlauf 2

Auftrag um 05:21 Uhr mit vier Punkten. Ergebnis: Commit `f36a1b2d`, acht
Dateien. Geprüft im Quelltext und im Unterschied zum Vorcommit.

## Erledigt

**Groß- und Kleinschreibung** — durchgehend umgestellt, auch an Stellen, die
nicht beauftragt waren: Die 404- und Fehlerseiten in `__root.tsx` standen auf
Englisch („Page not found", „Go home") und sind jetzt deutsch. Die
`meta description` sprach noch von „geplant ab 2027" und nennt jetzt die
Standortsuche.

**Nebenbefund, vom Agenten selbst gefunden:** `DirectContact.tsx` verwies auf
`boerdesnack24@gmail.com`. Das Impressum nennt `kontakt@boerdesnack24.de`. Zwei
verschiedene Kontaktadressen auf derselben Seite — korrigiert.

**Scrollbewegung** — `Stage` und `ShareScene` sind wieder im Einsatz. Alle vier
Grenzen aus dem Briefing sind im Code nachweisbar eingehalten:

| Grenze | Nachweis im Code |
|---|---|
| Ohne Bewegung vollständig | `Sequence` rendert alle drei Zusagen immer als `<ol>/<li>`; die Abschwächung auf `opacity: 0.42` steht ausschließlich unter `html[data-motion="on"]`. `ShareBar` setzt den Balken ohne Bewegung fest auf `100 %`. |
| Kein Scroll-Hijacking, höchstens zwei Bildschirmhöhen | `Stage` setzt `height = innerHeight * 2`, und nur wenn Bewegung an ist (vorher 2,4). |
| Höchstens zwei sticky Abschnitte auf dem Telefon | Es gibt genau **einen** (`Stage`). |
| Bewegungsschalter wirkt sofort | Alle Zustände hängen an `data-motion`. |

**Inhaltlich zusätzlich bereinigt:** `ShareBar` behauptete bisher „5 % vom
Nettopreis jedes Produkts bleiben in der Region" samt Beispielrechnung und
trug ein `aria-label` mit dem Wort „Spendenanteil". Beides ist weg — die
Prozentzahl durfte nach Briefing nicht genannt werden, und „Spende" ist
untersagt.

**Tote Gestaltungsregeln** (L-3) entfernt.

## Nicht erledigt

🔴 **L-1 steht unverändert.** `src/routes/agb.tsx` kommt im Unterschied dieses
Durchlaufs überhaupt nicht vor. Die Aufzählungen stecken weiterhin als reiner
Text mit Sternchen in `<p>`-Elementen, und `.prose p` trägt weiterhin kein
`white-space: pre-line`. Die AGB-Seite ist damit weiterhin unleserlich.

🟡 **L-2 steht unverändert.** Der Schlusssatz der AGB fehlt weiterhin.

Der Agent hat die Punkte 3 und 4 des Auftrags also nicht ausgeführt, ohne das
zu melden. Sie sind erneut zu beauftragen.

## Neuer, kleiner Befund

🟡 **L-4** — In `index.tsx` verweist `aria-labelledby="nachweis"` jetzt auf ein
`<div id="nachweis">` statt auf eine Überschrift. Die Überschrift liegt in
`ShareScene` und trägt keine Kennung. Für Screenreader wird der Abschnittsname
dadurch unscharf. Eine Zeile: die Kennung an das `h2` in `ShareBar.tsx` hängen.

---

# Nachbesserung vom 22.09.2026 — Durchlauf 3

Auftrag: die vier Befunde des Gesellschafters aus der Vorschau sowie die drei
im zweiten Durchlauf übergangenen Punkte (Nachtrag 3 in
`docs/lovable-brief-landingpage.md`). Geprüft wurde der Unterschied zu Commit
`c23c364`, nicht die Bildschirmfotos des Agenten.

## Erledigt

| Punkt | Nachweis im Code |
|---|---|
| K-1 Fußzeile linksbündig | `SiteFooter.tsx`: `justify-content: flex-start`, `gap: 2rem 4rem`. |
| K-1 Trennpunkt entfernt | Die Zeichenfolge „ · " kommt in `SiteFooter.tsx` nicht mehr vor. |
| K-2 Vorteilskachel | `index.tsx`: `APP_BENEFITS` mit genau den sieben beauftragten Stichpunkten, Wortlaut unverändert; `ul`/`li`, Symbole aus `lucide-react` mit `aria-hidden`, Reveal-Versatz je Zeile (`Reveal.tsx`: Deckel von 4 auf 8 angehoben). |
| K-2 Coupon-Vorbehalt | `.app-benefits__note` mit dem Wortlaut aus `offers_tab.dart`. |
| K-3 Überlagerung | `Stage.tsx` misst `scrollHeight` des klebenden Inhalts, klebt nur bei `contentHeight <= innerHeight`, sonst `data-sticky="false"` und normaler Fluss; `ResizeObserver`, `MutationObserver` auf `data-motion` und `document.fonts.ready` messen nach. `styles.css` bindet `position: sticky` an `.stage[data-sticky="true"]`. |
| L-1 AGB-Auszeichnung | Alle 16 Ziffern sind `<h2>`, die Sternchenzeilen sind `<ul>/<li>`, die Buchstaben a) bis g) bleiben erhalten. Wortlaut unverändert. |
| L-2 Schlusssatz | Als letzter Absatz ergänzt, wörtlich wie in `docs/legal/nutzungsbedingungen.md`. |
| L-4 Beschriftung | `ShareBar.tsx`: `id="nachweis"` am `h2`; das `div` in `index.tsx` hat keine Kennung mehr. |

Die vier übrigen Rechtsseiten wurden gegengelesen: `impressum.tsx`,
`widerruf.tsx`, `kuendigung.tsx` und `datenschutz.tsx` verwenden bereits
`<h2>`, Absätze und — im Impressum — `.addr` innerhalb von `.prose`. Dort war
nichts zu korrigieren; die Meldung des Agenten trifft zu.

## Nicht erledigt

🟡 **L-5 (neu) — der Zeilenumbruch in der Fußzeile greift nicht.**
`SiteFooter.tsx` setzt die Firmenzeile als
`<p className="addr">{"Bördesnack24 GbR\nOsterweddingen"}</p>`. Der Umbruch
hängt an der Regel `.prose .addr { white-space: pre-line }` in `styles.css`.
Die Fußzeile liegt aber außerhalb von `.prose` — `LegalPage.tsx` legt die
Klasse nur um die Rechtstexte. Im Browser steht deshalb
„Bördesnack24 GbR Osterweddingen" in einer Zeile mit Leerzeichen statt in
zwei Zeilen. Der Trennpunkt ist damit zwar weg, der zweite Teil des Auftrags
aber nicht erfüllt.

Die Nachbesserung war bereits formuliert und konnte nicht abgesendet werden:
**das Lovable-Guthaben der Arbeitsumgebung ist aufgebraucht.** Der Punkt bleibt
offen, bis Guthaben nachgelegt ist. Er ist rein gestalterisch — keine
rechtliche oder inhaltliche Auswirkung.

## Anmerkung zur Selbstauskunft des Agenten

Die Zusammenfassung des Durchlaufs behauptet zusätzlich, „obsolete CSS-Regeln
aus dem Abo-Vergleich" seien aus `styles.css` entfernt worden. Im Unterschied
von `c23c364` steht keine solche Entfernung; `styles.css` wurde nur ergänzt und
die Sticky-Regel umgeschrieben. Die Behauptung ist folgenlos, aber falsch —
festgehalten, weil die Selbstauskunft des Agenten schon im zweiten Durchlauf
nicht zuverlässig war.

---

# Nachbesserung vom 23.09.2026 — Durchlauf 4

Auftrag: die Geschäftsmodell-Änderung aus ADR 0007, zwei neue Abschnitte und
die offene Fußzeilen-Korrektur (Nachtrag 4 im Briefing). Geprüft wurde der
Quelltext zu Commit `505fd40`, nicht die Bildschirmfotos des Agenten.
Verbrauch: 4,3 Credits.

## Erledigt

| Punkt | Nachweis im Code |
|---|---|
| Standortgeber inhaltlich korrigiert | `Stage.tsx`: Überschrift „Sie stellen die Fläche. Wir tragen den Rest.", Zusage „feste Miete oder ein Anteil am Umsatz", Brückensatz zu den 5 %. Der Satz „Andere Betreiber zahlen Ihnen Miete…" kommt im Projekt nicht mehr vor. |
| Neuer Abschnitt „Fünf Prozent bleiben in der Region" | `index.tsx` nach `<Stage />`, mit `SceneColorTransition` davor; `ShareBar.tsx` trägt Eyebrow „Der Anteil", die Überschrift und den beauftragten Text **wörtlich**. |
| Kein erfundener Auszahlungsrhythmus | Der Agent hatte in einem Zwischenschritt „zum Quartalsende" in Kopftext und Seitenbeschreibung geschrieben und es im selben Lauf selbst zurückgenommen. Im ausgelieferten Stand kommt „Quartal" auf keiner Seite vor. |
| Kundenkachel | Achter Stichpunkt „Mitentscheiden, wohin die 5 % gehen…" an zweiter Stelle, Symbol `HandCoins`. |
| Bisher ungenutzte Szenen eingesetzt | `PhysicalDigital` im Kundenabschnitt, `MachineZoom` im Werbeabschnitt, `SceneColorTransition` vor dem Anteilsabschnitt — alle drei wurden seit dem 20.09.2026 von keiner Seite aufgerufen. |
| Neuer Abschnitt „Für Unternehmen: Werbung" | `index.tsx`, zwei Karten, Vorbehalt „Buchbar ist das noch nicht…", `mailto`-Schaltfläche, keine Preise, keine Reichweitenzahlen. |
| L-5 Fußzeile | `SiteFooter.tsx`: zwei `<span style={{display:"block"}}>` statt des Zeilenumbruchs über `white-space`. Die Regel `.prose .addr` ist unverändert, das Impressum hängt weiter daran. |
| KI-Kennzeichnung erhalten | `MachineZoom` trägt statt der langen `AssetNote` das Label „KI-Zeichnung"; die ausführliche Erläuterung steht weiterhin an der Zeichnung in `Stage`. |

## Zwei eigene Befunde, sofort nachbeauftragt

🔴 **B-1 — Kontrastfehler.** Der Anteilsabschnitt steht jetzt auf
`scene--night`, die Zeile „5 % des Nettoerlöses" trägt aber weiterhin
`color: var(--gold-text)` (`#856A00`). Auf `#202321` ergibt das rund
**3,1 : 1** und verfehlt die geforderten 4,5 : 1. Die Regel steht im
Projekt selbst: heller Grund `--gold-text`, dunkler Grund `--gold`.

🟡 **B-2 — der erste Bildschirm hatte die Kernaussage verloren.** Der Agent
hat den Kopftext auf „…vereinbart mit Standortgebern eine passende Vergütung
für die Fläche" geändert. Fachlich richtig, aber es ist die Innensicht auf
einen Mietvertrag; die 5 % — das einzige Unterscheidungsmerkmal — standen
nirgends mehr auf dem ersten Bildschirm, auch nicht in der Seitenbeschreibung
für Suchmaschinen. Der Gesellschafter hatte ausdrücklich „eine aussagekräftige
Hook" verlangt.

## Nachbesserung im selben Durchlauf — beide Befunde behoben

Beide Punkte wurden unmittelbar nachbeauftragt und sind im Quelltext belegt:

* **B-1 behoben.** `ShareBar.tsx` nutzt statt des Inline-Styles die neue Klasse
  `.share__label`; `styles.css` setzt sie auf hellem Grund auf `--gold-text`
  und unter `.scene--night` auf `--gold`. Damit steigt der Kontrast dieser
  Zeile von rund 3,1 : 1 auf rund 9,7 : 1. Die übrigen Farben des
  Nacht-Abschnitts wurden nachgerechnet und liegen zwischen 9,6 : 1 und
  12,6 : 1.
* **B-2 behoben.** Der Kopftext lautet jetzt: „Bördesnack24 plant
  Verkaufsautomaten für Osterweddingen und die Umgebung. 5 % des Nettoerlöses
  gehen als Spende an gemeinnützige Vereine und Organisationen der Region —
  wer sie bekommt, entscheidet die Kundschaft." Die Seitenbeschreibung für
  Suchmaschinen trägt dieselbe Aussage. Kein Auszahlungsrhythmus in beiden.

🟢 **Nachrangig, bewusst so belassen:** Die Füllung des wachsenden Balkens
(`--gold-deep` auf Creme) erreicht 2,59 : 1 und bleibt damit unter den 3 : 1
für grafische Elemente. Der Balken ist `aria-hidden` und trägt keine
Information, die nicht im Text daneben steht; er ist Illustration, nicht
Datenanzeige. Wird er später zu einer echten Anzeige des erwirtschafteten
Betrags, ist der Wert nachzuziehen.

## Was damit weiterhin offen ist

* 🔴 **Die Auszahlungsregel** (COMPLIANCE V-012, Befund D-1) — drei
  widersprüchliche Beschreibungen im System, keine davon umgesetzt. Bis zur
  Entscheidung nennt die Seite zu Recht keinen Rhythmus.
* 🟡 **Veröffentlichungssperre** bleibt: Auftragsverarbeitungsvertrag mit dem
  Hoster (V-012, V-006) und kein Automat in Betrieb (V-010).
* 🟡 Die Automatenseite trägt die alte Modellaussage und ist beim nächsten
  Durchlauf anzugleichen (Nachtrag vom 22.09.2026 im dortigen Briefing).

---

# Nachbesserung vom 24.09.2026 — Impressum v4

Umgesetzt und im Code belegt: Aufsichtsbehörde entfernt, Abschnitt
„Streitbeilegung" samt Link auf die eingestellte OS-Plattform ersetzt durch
„Verbraucherstreitbeilegung" mit dem Wortlaut der Quelle (die Seite trug
zuvor die abweichende Formulierung aus den AGB), AGB-Kopfzeile auf
`v4 · 2026-09`. Hintergrund: COMPLIANCE V-013.

🟡 Rest: Die Seitenbeschreibung (`DESC`) in `impressum.tsx` nennt weiterhin
„Aufsichtsbehörde". Rein Metadaten, beim nächsten Auftrag mitkorrigieren.
