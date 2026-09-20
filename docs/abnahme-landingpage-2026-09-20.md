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
