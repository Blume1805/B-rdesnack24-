# Runway-Auftrag 14.11.2026: Standortgeber-Film vertonen und veredeln

**Status: Entwurf, nichts gesendet.** Auftrag von Philipp am 14.11.2026: den
Film der Landingpage in Runway hochprofessionell überarbeiten (Musik,
Geräusche), Inhalte bleiben, danach über Lovable auf die Seite.

## Geprüfter Stand (14.11.2026)

| Punkt | Befund |
|---|---|
| Film auf der Seite | `business-teaser` in `src/components/bs24/Stage.tsx`, Lovable-Commit `5b26574`. Seit dem 03.11.2026, 20:03 Uhr („Film verlangsamt", Commit `cfff143`) **23 Sekunden**, nicht mehr 20 |
| Upload zu Runway aus der Arbeitsumgebung | **nicht möglich.** Der Runway-Connector nimmt nur Videos aus dem Export „Claude Motion" an (Adresse plus Zugriffstoken). Die Lovable-Videodatei liegt nur im Lovable-Speicher; das Projekt ist nicht veröffentlicht, und die Lovable- und Runway-Adressen sind von hier gesperrt |
| Rückweg zu Lovable | möglich: Der Upload-Speicher von Lovable ist von hier erreichbar. Liegt die fertige Datei in dieser Sitzung vor, kann sie an den Lovable-Auftrag gehängt werden |

## Text an den Runway-Agenten

```
Überarbeite das angehängte Video. Es ist der Film der Landingpage von Bördesnack24 (Verkaufsautomaten für Osterweddingen und Umgebung, in Vorbereitung).

Ziel: Der Film erklärt das Konzept und vermittelt Vertrauen, Qualität und regionale Verbundenheit. Er soll hochwertig und ruhig wirken, nicht wie Werbung mit Druck.

Was bleibt, ohne Ausnahme:
- Reihenfolge und Inhalt der Szenen: Automat, Coupon in der App, Kaffee, Spende an die Region, Schlussbild.
- Alle Texte im Bild im Wortlaut, vor allem „Danke. 5 % des Nettoerlöses gehen an die Region.“ und der Slogan am Ende „Genießen. Geben. Gutes tun.“
- Der KI-Hinweis oben links im Bild. Er muss in jeder Szene lesbar bleiben.
- Logo, Farben (Schwarz, Gold #FDC102, Weiß) und der Automat, wie er ist.
- Format 1920 × 1080, 30 Bilder pro Sekunde, Länge 20 bis 25 Sekunden.

Was neu wird:
- Musik: modern, warm, zurückhaltend, etwa 90 bis 100 Schläge pro Minute, ohne Gesang. Ruhiger Aufbau, ein klarer Höhepunkt bei der Spende, sauberer Schluss auf dem Slogan. Der Film läuft in Schleife: Anfang und Ende müssen zusammenpassen.
- Geräusche, sparsam und echt: Ausgabe des Automaten, Tippen auf dem Telefon, Kaffeetasse, leise Umgebung. Kein Messenger- oder Benachrichtigungston.
- Bild: Farbe und Kontrast angleichen, Übergänge glätten. Die Stelle um Sekunde 12 bis 16 wurde nachträglich herangezoomt; dort bitte auf Schärfe und ruhige Bewegung achten.

Was nicht hinein darf:
- Keine Sprecherstimme, keine neuen Texte, keine Preise, keine Zahlen außer „5 %“.
- Keine Benachrichtigung auf dem Telefon (die App hat keine).
- Keine echten Personen, keine erkennbaren Marken Dritter, keine neuen Orte.
- Kein Wasserzeichen.

Ausgabe: MP4 (H.264, Ton AAC), höchstens 10 MB. Der Film muss auch ohne Ton vollständig verständlich sein, weil er auf der Seite stumm startet.
```

## Text an Lovable (nach dem Runway-Lauf, mit angehängter Datei)

```
Auftrag: Film im Abschnitt „Für Standortgeber“ austauschen. Nur das Folgende ändern, sonst nichts.

Angehängt: die neue Fassung des Films als MP4.

1. Die angehängte Datei ersetzt business-teaser (MP4). Daraus eine WebM-Fassung erzeugen und business-teaser.webm ersetzen. Kein Bild neu schneiden, nichts am Inhalt ändern.
2. Vorschaubild (business-teaser-poster.jpg) neu aus Sekunde 1,2 der neuen Fassung erzeugen.
3. In src/components/bs24/Stage.tsx die Sekundenangabe im aria-label an die tatsächliche Länge anpassen. Sonst bleibt der Text.
4. Unverändert bleiben: stummer Start, Start nur im sichtbaren Bereich, Pause- und Ton-Knopf, KI-Hinweis im Bild und in der Bildunterschrift, Verhalten bei „Bewegung reduzieren“.

Prüfen und im Bericht zitieren: Länge und Dateigröße beider Fassungen; Bildschirmfoto bei Sekunde 13 in 390 px und 1440 px (Text „Danke. 5 % des Nettoerlöses gehen an die Region.“ und KI-Hinweis lesbar); Schlussbild mit „Genießen. Geben. Gutes tun.“; keine Layoutverschiebung; kein neues Paket.

Am Ende je Punkt eine Zeile, was geändert wurde.
```

## Abnahme vor dem Senden an Lovable

| # | Prüfung | Ergebnis |
|---|---|---|
| 1 | Texte im Bild wortgleich, Slogan am Ende | offen |
| 2 | KI-Hinweis in jeder Szene lesbar (Art. 50 EU AI Act) | offen |
| 3 | Keine Benachrichtigungs-Optik, keine Stimme, keine neuen Aussagen | offen |
| 4 | Ohne Ton verständlich; Schleife ohne Bruch | offen |
| 5 | Nutzungsrecht für Musik und Bild aus Runway für gewerbliche Nutzung belegt (Tarif, Datum) | offen |
