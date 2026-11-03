# Lovable-Auftrag 03.11.2026: Korrekturen nach dem Abgleich mit dem Backend

**Grundlage:** `docs/abgleich-landingpage-backend-2026-11-03.md`, Befunde B-2,
B-3, B-7 und B-8; `docs/COMPLIANCE.md` V-018.
**Freigabe:** Philipp am 03.11.2026 („Alles ja. Bitte vorbereiten und einen
Prompt für den Lovable-Agenten erstellen und senden").
**Stand Lovable vorher:** Commit `a9905a6` (08.10.2026).

Quelle der Hoster-Angaben: Auftragsverarbeitungsvertrag von Hostinger
(hostinger.de/DPA). Vertragspartner ist die Hostinger International Ltd., 61
Lordou Vironos Str., 6023 Larnaca, Zypern. Aus der Arbeitsumgebung war die
Seite nicht direkt abrufbar, geprüft über die Websuche am 03.11.2026. Die
Domain zeigt auf Hostinger (`docs/OPERATIONS.md`, DNS-Tabelle).

## Text an Lovable

```
Auftrag 03.11.2026: vier Korrekturen nach einem Abgleich mit Datenbank und App. Nur das Folgende ändern, sonst nichts.

1. Video im Abschnitt „Für Standortgeber“ (business-teaser, Stage.tsx)
   Die Push-Meldung „Danke für deine 5%.“ ist sachlich falsch: Die App hat keine Push-Benachrichtigungen (so steht es in den Nutzungsbedingungen, Ziffer 2), und die 5 % spendet Bördesnack24 aus dem Nettoerlös, nicht die Kundin.
   - Ersetze die Push-Meldung durch eine schlichte Texteinblendung im Bild, ohne Benachrichtigungs- oder Messenger-Optik: „Danke. 5 % des Nettoerlöses gehen an die Region.“
   - Alles andere am Film bleibt gleich: Szenen, Länge, Musik, Geräusche, Slogan, KI-Hinweis im Bild.
   - Video (mp4 und webm) und Vorschaubild neu erzeugen, falls die Stelle darin vorkommt. aria-label des Videos passt weiterhin, nur prüfen.

2. Pause-Knopf für das Video (Barrierefreiheit, WCAG 2.2.2)
   - Neben dem Ton-Knopf einen zweiten Knopf „Pause“ / „Abspielen“, gleiche Gestaltung und Größe (mindestens 44 × 44 px), lucide-Symbole Pause/Play, aria-label „Video anhalten“ bzw. „Video abspielen“, aria-pressed.
   - Eine Pause durch den Nutzer bleibt bestehen: Der IntersectionObserver darf ein vom Nutzer angehaltenes Video beim erneuten Hineinscrollen nicht wieder starten.
   - Per Tastatur erreichbar, sichtbarer Fokusring.

3. App-Vorteile, Karte „Automatenfinder“ (src/routes/index.tsx, APP_BENEFITS)
   Den Bestand je Automat können Kunden noch nicht sehen; die Funktion wird erst mit einem Datenbank-Update freigeschaltet.
   - In src/data/site.ts ein Feld `bestandLive: false` ergänzen, Kommentar: „Erst auf true setzen, wenn die Verfügbarkeitsanzeige (Migration verfuegbarkeit_fuer_kunden, Runbook M) in der Datenbank ausgerollt ist.“
   - Text der Karte: bei false „Standorte, Nährwerte und Allergene.“, bei true „Bestand je Automat, Nährwerte und Allergene.“ Das Wort „Echtzeit“ entfällt in beiden Fällen.
   - Endstand: bestandLive = false.

4. Datenschutzerklärung (src/routes/datenschutz.tsx)
   Ausdrücklich beauftragte Ergänzung des Wortlauts. Nach dem Absatz zur Rechtsgrundlage der Server-Protokolle einen Abschnitt einfügen:

   Überschrift: „Hosting“
   Text: „Diese Website wird bei der Hostinger International Ltd., 61 Lordou Vironos Str., 6023 Larnaca, Zypern, betrieben. Hostinger verarbeitet die Server-Protokolldaten in unserem Auftrag (Art. 28 DSGVO). Die Protokolldaten werden nur so lange gespeichert, wie es für den sicheren Betrieb der Website erforderlich ist, und danach automatisch gelöscht. Wir werten sie nicht aus und führen sie nicht mit anderen Daten zusammen.“

   Außerdem den Satz „Es gibt keine Formulare und keine externen Einbettungen.“ ergänzen zu „Es gibt keine Formulare und keine externen Einbettungen. Schriften und Videos werden vom eigenen Server geladen.“ Sonst nichts an den Rechtstexten ändern.

Prüfen und im Bericht zitieren:
- Bildschirmfoto des Videos an der Stelle der neuen Einblendung, bei 390 px und 1440 px.
- Pause drücken, wegscrollen, zurückscrollen: Das Video bleibt angehalten.
- Karte „Automatenfinder“ zeigt „Standorte, Nährwerte und Allergene.“
- Datenschutzseite mit neuem Abschnitt.
- Keine Layoutverschiebung, kein neues Paket.

Am Ende je Punkt 1 bis 4 eine Zeile, was geändert wurde. Wird ein Punkt nicht umgesetzt, das ausdrücklich sagen.
```

## Abnahme (nach dem Lauf)

Lauf beendet am 03.11.2026, Lovable-Commit `2c98578` (Kosten 7,6 Credits).
Geprüft am Diff `a9905a6..2c98578` und an `src/routes/index.tsx` in der neuen
Fassung, nicht nur am Bericht des Agenten.

| # | Prüfung | Ergebnis |
|---|---|---|
| 1 | Keine Push-Optik, Text „Danke. 5 % des Nettoerlöses gehen an die Region." | ✅ im Code: neue Video-Dateien `business-teaser-v3.mp4/.webm`, Vorschaubild unverändert (Sekunde 1,2). Der Agent hat die Meldung durch eine langsame Kamerafahrt aus dem Bild genommen (11,85 bis 15 s) und den Text zweizeilig darübergelegt. **Bild selbst nicht gesehen:** Die Lovable-Adressen sind aus der Arbeitsumgebung gesperrt. Sichtprüfung durch Philipp in der Vorschau offen |
| 2 | Pause-Knopf, Pause bleibt beim Scrollen | ✅ `userPaused` sperrt den IntersectionObserver und den Ton-Knopf, 44 × 44 px, Pause/Play-Symbol, Tastatur. Laut Browserlauf des Agenten bleibt das Video nach Weg- und Zurückscrollen bei 13,98 s stehen. **Befund A-1** (unten) |
| 3 | `bestandLive = false`, kein „Echtzeit" | ✅ `site.ts` mit dem vorgegebenen Kommentar; Karte „Standorte, Nährwerte und Allergene." |
| 4 | Hoster-Abschnitt im Datenschutz, Wortlaut wie beauftragt | ✅ wortgleich, nach dem Absatz zur Rechtsgrundlage; Satz zu Schriften und Videos ergänzt; sonst keine Zeile der Rechtstexte geändert |

### Befunde der Abnahme

| Nr. | Befund | Bewertung |
|---|---|---|
| A-1 🟡 | Pause-Knopf trägt `aria-pressed` **und** eine wechselnde Beschriftung. Ein Screenreader liest dann z. B. „Video abspielen, gedrückt". Der Fehler liegt im Auftrag (von mir so vorgegeben), nicht beim Agenten | `aria-pressed` am Pause-Knopf streichen, Beschriftung wechseln lassen. Folgeauftrag `lovable-auftrag-2026-11-03-nacharbeit.md`, **nicht gesendet** |
| A-2 🟡 | Bei 1440 px sitzen beide Knöpfe rechts neben dem Videobild statt darin (meldet der Agent selbst; beim Ton-Knopf schon vorher so) | im selben Folgeauftrag |
| A-3 ⚪ | `package.json`: `@lovable.dev/vite-tanstack-config` 2.25.3 → 2.26.5. Nicht beauftragt, Werkzeug der Lovable-Plattform (nur Entwicklung, nicht im ausgelieferten Code) | hingenommen, kein neues Paket. Vermerkt, weil Paketänderungen nach `boerdesnack24-verify` K2 sind |
| A-4 ⚪ | Datenschutz, Abschnitt „Kontakt per E-Mail": „Wenn du uns …", „deine", „dein" klein, entgegen der Regel „Du" groß. Bestand, nicht durch diesen Lauf entstanden | Rechtstext, nur auf ausdrücklichen Auftrag zu ändern. Im Folgeauftrag mit aufgeführt |
