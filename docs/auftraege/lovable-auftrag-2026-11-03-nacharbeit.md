# Lovable-Auftrag 03.11.2026, Nacharbeit: Video-Knöpfe und Anrede im Datenschutz

**Status: Entwurf, nicht gesendet.** Ergibt sich aus der Abnahme von
`lovable-auftrag-2026-11-03-abgleich.md` (Befunde A-1, A-2, A-4). Senden
kostet Credits; Philipp entscheidet, ob es jetzt oder mit dem nächsten Auftrag
mitläuft.

## Text an Lovable

```
Nacharbeit 03.11.2026: drei kleine Korrekturen. Nur das Folgende ändern, sonst nichts.

1. src/components/bs24/Stage.tsx, Knopf „Video anhalten“ / „Video abspielen“
   Das Attribut aria-pressed entfernen. Die wechselnde Beschriftung bleibt. Grund: Beides zusammen liest ein Screenreader widersprüchlich („Video abspielen, gedrückt“). Am Ton-Knopf bleibt aria-pressed, dort ist die Beschriftung fest („Ton“).

2. Lage der beiden Knöpfe
   Bei 1440 px sitzen die Knöpfe rechts neben dem Videobild. Sie sollen in allen Breiten oben rechts innerhalb des Videobilds liegen (12 px Abstand zum Rand). Den Container der Knöpfe dazu an der tatsächlichen Videofläche ausrichten, nicht an der breiteren figure. Keine Layoutverschiebung.

3. src/routes/datenschutz.tsx, Abschnitt „Kontakt per E-Mail“
   Ausdrücklich beauftragt, nur die Anrede: „du“ → „Du“, „deine“ → „Deine“, „dein“ → „Dein“ (Regel: Du-Anrede großgeschrieben). Sonst kein Wort ändern.

Prüfen und im Bericht zitieren: Bildschirmfoto der Knöpfe bei 390 px und 1440 px; Ausgabe von aria-pressed beider Knöpfe; Absatz „Kontakt per E-Mail“ im neuen Wortlaut.

Am Ende je Punkt eine Zeile, was geändert wurde.
```
