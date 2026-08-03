# Automaten-Stammdaten — was ich von dir brauche

In der Datenbank stehen heute Platzhalter: „Automat 1" bis „Automat 3" und
ein „Heißgetränkeautomat", jeweils mit dem Standort „(ANPASSEN)". Solange
das so ist, kann die Automatenliste in der App (**A9**) nicht gebaut
werden — sie würde Platzhalter anzeigen.

Fülle `docs/vorlagen/automaten.csv` aus, eine Zeile pro Automat. Danach
trage ich die Daten als Migration ein und A9 kann losgehen.

---

## Die Felder

### Pflicht

| Feld | Was gemeint ist | Beispiel |
|---|---|---|
| **nummer** | Eure interne Automaten-Nummer. Muss eindeutig sein und sich später nicht ändern | `BS-01` |
| **name** | Wie der Automat in der App heißt | `Netto Osterweddingen` |
| **art** | `snack`, `drink`, `combi` oder `cooled` | `combi` |
| **gekuehlt** | Hat der Automat Kühlung? `ja` / `nein` | `ja` |
| **standort** | Wo genau er steht — der Satz, der jemanden hinführt | `Vorraum, rechts neben dem Eingang` |
| **strasse** | | `Sülldorfer Str. 3A` |
| **plz** | | `39171` |
| **ort** | | `Sülzetal OT Osterweddingen` |

### Wichtig für die Kundenansicht

| Feld | Was gemeint ist | Beispiel |
|---|---|---|
| **zugangszeiten** | Wann man **an den Automaten herankommt**. Nicht wann der Automat läuft — der läuft immer | `Rund um die Uhr zugänglich` oder `Mo–Sa 7–20 Uhr (Zugang über den Markt)` |
| **breitengrad** | Für Entfernung und Karte | `52.0731` |
| **laengengrad** | | `11.6142` |

**Zu den Zugangszeiten:** Bleibt das Feld leer, zeigt die App **nichts** an
und nimmt insbesondere keine durchgehende Zugänglichkeit an. Eine erfundene
Zugänglichkeit ist schlimmer als eine fehlende Angabe — wer um 22 Uhr vor
einer verschlossenen Tür steht, kommt nicht wieder.

**Zu den Koordinaten:** Ohne sie kann die App keine Entfernung anzeigen.
Sie zeigt dann einfach keine — und erfindet keine. Du bekommst sie, indem
du in Google Maps mit der rechten Maustaste auf den Standort klickst; die
beiden Zahlen stehen ganz oben im Menü.

### Freiwillig

| Feld | Was gemeint ist | Beispiel |
|---|---|---|
| **nayax_terminal** | Terminal-ID für die Telemetrie. Nur ausfüllen, wenn der Automat angebunden ist | `TRM-4711` |
| **bild** | Foto des Automaten. Solange keins da ist, zeigt die App einen Platzhalter | Datei mitschicken, ich lade sie hoch |
| **bemerkung** | Alles, was mir beim Eintragen helfen könnte | `ersetzt den alten Automaten von 2024` |

---

## Ein Feld, das es bewusst nicht gibt

**Keine Angabe zu „beliebt", Bewertungen oder Schlagworten.** Das stand im
ursprünglichen Entwurf der Automatenliste, ist aber erfunden gewesen — es
gibt keine Datengrundlage dafür. Statt etwas zu behaupten, zeigt die App
`art` und `gekuehlt`. Sobald es echte Verkaufszahlen je Automat gibt, lässt
sich „meistgekauft" daraus wirklich berechnen.

---

## Was danach passiert

1. Ich trage die Automaten als Migration ein — nachvollziehbar, mit Datum
   und Herkunft, statt von Hand in der Datenbank.
2. Die Platzhalter („Automat 1" bis „Automat 3", „Heißgetränkeautomat")
   werden dabei entweder überschrieben, falls es dieselben Geräte sind,
   oder zurückgezogen. Sag mir bitte in der Bemerkungsspalte, was zutrifft
   — ich kann das nicht raten, und ein falsch zugeordneter Automat
   verfälscht die Bestands- und Umsatzzahlen, die schon daran hängen.
3. **A9** wird abgeschickt; die Automatenliste läuft dann auf echten Daten.
