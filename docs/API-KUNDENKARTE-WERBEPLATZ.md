# Werbeplatz auf der Kundenkarte — Vertrag

Stand 03.09.2026. Backend in Produktion, Oberfläche beauftragt.

## Zweck

Unternehmen, die **digitale** Werbung gebucht haben, können ihr Logo auf
der Kundenkarte zeigen. Rein analoge Buchungen (Aufkleber am Automaten)
erscheinen hier nicht — sie sind keine Zusage für eine Fläche in der App.

## Die drei tragenden Entscheidungen

**Die Auswahl ist nicht personalisiert.** Welches Logo erscheint, hängt
allein vom Kalendertag ab. Alle Angemeldeten sehen an einem Tag dieselbe
Reihenfolge. Die Funktion liest den Aufrufer nirgends — sie enthält weder
`auth.uid` noch einen Profilbezug. Daraus folgt: kein Profiling, keine
Einzelfallentscheidung nach Art. 22 DSGVO, keine Interessenabwägung, und
ein Widerspruch gegen personalisierte Anzeige lässt die Fläche unberührt,
weil sie nie personalisiert war.

Wer das ändern will, ändert nicht eine Sortierklausel, sondern die
datenschutzrechtliche Grundlage der Fläche.

**Das Logo ist als Werbung zu kennzeichnen.** § 5a Abs. 4 UWG verlangt,
dass der kommerzielle Zweck erkennbar ist, wenn er sich nicht aus den
Umständen ergibt. Auf einer Kundenkarte ergibt er sich gerade nicht: ein
fremdes Logo neben der eigenen Kundennummer kann als Partnerschaft,
Zahlungsmittel oder Zugehörigkeit gelesen werden. Die Funktion liefert das
Feld `kennzeichnung` mit; es ist sichtbar auszugeben und nicht optional.

**Der Werbetreibende erfährt nichts über den einzelnen Kunden.** Gezählt
wird über `advertising_event_record` in die bestehende Auswertung mit
Mindestgruppengröße.

## Aufruf

```
supabase.rpc('kundenkarte_werbeplatz')
```

Ohne Parameter. `execute` nur für `authenticated`; `anon` ist entzogen und
geprüft. Höchstens `app.parameter_zahl('kundenkarte_werbeplaetze', 2)`
Zeilen.

| Feld | Typ | Inhalt |
|---|---|---|
| `creative_id` | uuid | für die Zählung |
| `campaign_id` | uuid | für die Zählung |
| `logo_url` | text | Bild aus dem öffentlichen Bucket `werbelogos` |
| `alt_text` | text | deutscher Alternativtext, serverseitig Pflicht |
| `werbetreibender` | text | `anzeigename`, sonst `businesses.name` |
| `ziel_url` | text? | Motiv-Ziel, sonst Kampagnen-Ziel; immer https |
| `kennzeichnung` | text | Wort für die Werbekennzeichnung, heute „Anzeige" |

Die Rückgabe führt **keine** Unternehmens-, Profil- oder Kundenkennung.

Ist die Antwort leer, verschwindet die Fläche restlos — kein Platzhalter,
kein Rahmen. Eine leere Werbefläche auf einer Kundenkarte sieht nach Fehler
aus. Heute ist die Antwort leer, weil keine Kampagne gebucht ist.

## Damit ein Logo erscheint

1. Kampagne in `advertising_campaigns`: `status = 'active'`,
   `welt in ('digital','komplett')`, `von <= heute`,
   `bis is null or bis >= heute`, nicht gelöscht.
2. Unternehmen `active`, nicht archiviert, nicht gelöscht.
3. Motiv in `advertising_creatives`: `kind = 'kundenkarte_logo'`,
   `status = 'active'`, `file_url` gesetzt, `alt_text` gesetzt
   (durch CHECK erzwungen), nicht gelöscht.

`kundenkarte_logo` ist ein **eigener** Motivtyp neben `coupon_logo` und
`profil_logo`. Ein gemeinsamer Typ hätte bedeutet, dass ein für den
Gutschein freigegebenes Logo ohne weitere Prüfung auf der Kundenkarte
erscheint. Freigaben bleiben flächenbezogen.

## Ablage

Bucket `werbelogos`, öffentlich lesbar, 512 KB, `image/png`,
`image/jpeg`, `image/webp`. **Kein SVG:** ein SVG ist ein XML-Dokument und
kann Skript enthalten; aus einem öffentlichen Bucket ausgeliefert wäre das
eine Einladung. Schreiben nur `is_admin()` oder
`auth_has_permission('advertising.manage')`.

## Zählung

`advertising_event_record` mit `p_campaign`, `p_creative`,
`p_art = 'impression'`, `p_kanal = 'app'`; beim Antippen zusätzlich
`'click'`. Einmal je Anzeige, nicht je Rerender.

## Nachweise

`scripts/pruefumgebung/100_kundenkarte_werbeplatz.sql`, 19 Prüfungen gegen
die lokale Replik, alle grün. Darunter die Gegenproben: abgelaufene,
pausierte und rein analoge Kampagnen sowie nicht freigegebene Motive
erscheinen nicht; ein Gutscheinlogo landet nicht auf der Karte; `anon` wird
abgewiesen; zwei verschiedene Kunden erhalten dieselbe Ausgabe; der
Funktionsrumpf enthält keinen Aufruferbezug; ein Motiv ohne Alternativtext
und ein Ziel ohne https lassen sich nicht speichern.

## Offen

* Oberfläche in Lovable und in der Flutter-App.
* Verwaltungsmaske zum Hochladen eines Logos (heute nur über die Datenbank).
* Eintrag im Verzeichnis der Verarbeitungstätigkeiten — betrifft nur die
  Zählung, nicht die Auswahl.
