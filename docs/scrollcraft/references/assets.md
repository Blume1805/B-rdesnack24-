# Assets

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

Bei 65 Produkten sind das rund 1.560 statt 2.290 Aufnahmen.

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
