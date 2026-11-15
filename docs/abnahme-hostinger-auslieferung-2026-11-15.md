# Prüfung: Lässt sich die Landingpage als Dateien bei Hostinger ausliefern? (15.11.2026)

Anlass: Entscheidung Philipp vom 15.11.2026, die Seite als Dateien zu Hostinger
zu geben. Davon hängt der Abschnitt „Hosting" der Datenschutzerklärung ab
(`docs/COMPLIANCE.md`, V-018-e). Geprüft am Lovable-Stand `e4a196d`, durch Lesen
der Projektdateien. **Gebaut und hochgeladen wurde nichts**; die
Lovable-Adressen sind aus der Arbeitsumgebung nicht erreichbar.

## Ergebnis

Ja, grundsätzlich. Zwei Dinge fehlen noch, bevor es funktioniert.

| Punkt | Befund | Folge |
|---|---|---|
| Fertige HTML-Dateien | `vite.config.ts` erzeugt bereits alle sechs Seiten als fertige Dateien (`prerender`, Seitenliste `/`, `/impressum`, `/datenschutz`, `/agb`, `/widerruf`, `/kuendigung`; Kommentar „Statische Auslieferung (Hostinger)") | ✅ vorbereitet |
| Schriften | liegen unter `public/fonts` im Projekt | ✅ werden mit ausgeliefert |
| **Logo, Video, Vorschaubild** | liegen nicht als Dateien im Projekt, sondern im Speicher von Lovable; im Code stehen nur Verweise der Form `/__l5e/assets-v1/…` (`*.asset.json`) | 🔴 Bei Hostinger gäbe es diese Adressen nicht: Logo und Film fehlten. Vor der Auslieferung müssen die Dateien ins Projekt (z. B. `public/medien/`) und die Verweise darauf zeigen. Aus dem Code gelesen, nicht ausprobiert |
| **Weg der Dateien zu Hostinger** | Lovable baut für die eigene Auslieferung. Für Hostinger muss jemand das Projekt bauen und den Ordner mit den fertigen Dateien hochladen | 🟡 zwei Möglichkeiten, siehe unten |
| Ungenutzte Mediendateien | im Projekt liegen weitere Verweise (`business-model*`, `standortgeber*`, Referenzvideo) | vor der Auslieferung aufräumen, damit nichts Gesperrtes mit hochgeladen wird |

## Die zwei Wege

| | Weg A: von Hand | Weg B: automatisch |
|---|---|---|
| Ablauf | Lovable mit GitHub verbinden, Projekt dort bauen lassen oder herunterladen, Ordner per Hostinger-Dateimanager hochladen | Lovable mit GitHub verbinden; ein Ablauf bei GitHub baut bei jeder Änderung und lädt per FTP zu Hostinger hoch |
| Aufwand für Philipp | bei jeder Änderung etwa 15 Minuten | einmalig Zugangsdaten für FTP als Geheimnis bei GitHub hinterlegen, danach nichts |
| Fehleranfälligkeit | hoch (vergessene Dateien, alter Stand) | gering |
| Empfehlung | nur für den ersten Versuch | **ja** |

## Alternative, falls das zu aufwendig ist

Über Lovable veröffentlichen und die Domain dort verbinden. Dann ist Lovable
der Hoster, und der Abschnitt „Hosting" der Datenschutzerklärung muss auf
Lovable umgeschrieben werden (anderer Auftragsverarbeiter, Sitz und
Unterauftragnehmer prüfen). Technisch der kürzeste Weg, rechtlich mehr zu
klären.

## Nächste Schritte

1. Entscheidung Philipp: Weg B (empfohlen), Weg A oder die Alternative.
2. Lovable-Auftrag: Logo, Film (MP4, WebM) und Vorschaubild als Dateien ins
   Projekt, Verweise umstellen, ungenutzte Medien entfernen.
3. Bei Weg B: Ablauf bei GitHub einrichten, Zugangsdaten hinterlegen
   (Schritt-für-Schritt-Anleitung folgt mit der Entscheidung).
4. Nach dem ersten Hochladen: Seite, Film und alle sechs Unterseiten auf dem
   Telefon und am Rechner aufrufen; erst dann ist V-018-e erledigt.
