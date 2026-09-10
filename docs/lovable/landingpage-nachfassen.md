# Landingpage-Auftrag — erledigt am 10.09.2026

Der Auftrag ging am 10.09.2026 um 06:21 UTC an das Projekt
`Bördesnack24 Landingpage` (0c068d85-ef58-4450-a511-3e7ac1d0446d) und
ist vollständig umgesetzt. Nachgeprüft am Code, nicht an der
Erfolgsmeldung.

| # | Auftrag | Nachweis im Code |
|---|---|---|
| 1 | Fußbereich: sechs Links | `SiteFooter.tsx`, Reihenfolge wie bestellt |
| 2 | `Plans` einhängen | `index.tsx`, zwischen Szene 05 und `<Stage />` |
| 3 | „GbR" aus der Kopfzeile | Augenbraue und `DESC` ohne GbR |
| 4 | Sortiment mit Zahlen | `SORTIMENT` mit Feld `n`, Ausgabe über `card__count` |
| 5 | `/kuendigung` korrigiert | „So kündigst du" und „Was dann passiert" neu |
| 6 | Statischer Build | `vite.config.ts`: `prerender` für sechs Routen |
| 7 | Formular raus | `InquiryForm.tsx` gelöscht, `.env` geleert |

**Der hochzuladende Ordner heißt `dist/client`.** Die Vergleichstabelle
kommt laut Prüfung des Agenten bei 360 Punkten Breite ohne waagerechtes
Scrollen aus.

## Zwei Dinge, die dabei auffielen

**Philipp hat am 09.09.2026 selbst am Projekt gearbeitet** — ein Logo
hochgeladen, „Sülzetal" aus der Augenbraue genommen und das Logo über
die volle Breite gezogen. Mein Auftrag war gegen den Stand vom 08.09.
geschrieben und hätte „Sülzetal" wieder hineingeschrieben. Der Agent hat
das richtig aufgelöst: Die Augenbraue lautet jetzt nur noch
„Bördesnack24".

Daraus die Lehre für den nächsten Auftrag: **vor dem Absenden den
aktuellen Stand des Projekts lesen**, nicht den, gegen den der Text
entstanden ist.

**Szene 01 zeigt jetzt ein Bild statt der gezeichneten Marke.** Vorher
standen dort `BrandMark`, `BoerdeOutline` und `Wordmark` als Vektoren.
Ob das Logo mit KI erzeugt wurde, ist offen — davon hängt ab, ob es ins
Provenienzregister gehört und gekennzeichnet werden muss. Die Frage
liegt bei Philipp.
