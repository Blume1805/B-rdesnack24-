# Warteschlange für den Lovable-Agenten

Fertige Aufträge zum direkten Einfügen in Lovable. Eine Datei je Auftrag,
in der Reihenfolge der Nummerierung. Jeder ist für sich abschliessbar —
gebündelt scheitern sie, das hat A20 gezeigt.

| Datei | Inhalt |
|---|---|
| `01-demo-fixtures.md` | Demozugang mit vollständigen Beispieldaten und Zustands-Umschalter |
| `02-designsystem-teil1-foundations.md` | Typo-, Abstands- und Bewegungs-Token, Listenzeile, Barrierefreiheitsregeln |
| `03-coupon-slider.md` | Coupon-Slider mit Zoomeffekt und Bild-Platzhaltern |
| `04-b2b-firmenportal.md` | Mitarbeiterkonto/Budget für Firmenkunden (eigenes, älteres Lovable-Projekt) |
| `06-b2b-portal-fachrouten.md` | Fach-Routen fürs **neue** Werbenetzwerk-Partnerportal fertigstellen |

**Stand 22.08.2026:** Auftrag 01 ist beim Agenten angekommen und
erledigt — `src/lib/demo/fixtures.ts`, `use-demo-query.ts` und
`variants.ts` liegen im Projekt. Auftrag 03 ist fertig formuliert, aber
noch nicht gesendet: Die Verbindung zum Lovable-Server ist in dieser
Sitzung abgerissen, bevor er rausging. Er lässt sich unverändert
einfügen.

**Stand 28.08.2026:** Ein zweites, separates Lovable-Projekt ist dazugekommen
(„Bördesnack24 Partner Portal“, Projekt-ID `35646ee4-…`, siehe
`06-b2b-portal-fachrouten.md`). Grundgerüst und Login stehen, die
Fach-Routen fehlen noch — der Workspace ist aktuell ohne Guthaben, Auftrag
06 liegt einsatzbereit zum Nachsenden.

Noch nicht ausformuliert, folgen einzeln: Bewegung durchziehen,
Lottie-Aufnahme (braucht die Dateien), sowie die Teile 2 bis 5 des
Designsystems.

Die ausführliche Fassung mit Begründungen und Befunden steht in
`../LOVEABLE_ANWEISUNGEN.md`.
