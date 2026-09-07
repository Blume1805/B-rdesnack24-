# scrollcraft installieren

Skills gelten immer nur in der Oberfläche, in der sie liegen. Sie wandern
nicht mit. Dieses Paket ist so aufgebaut, dass es auf allen drei Wegen
funktioniert — der Ordnerinhalt ist überall derselbe.

---

## 1 claude.ai (Web und Desktop-App)

1. Einstellungen → Fähigkeiten → **Codeausführung und Dateierstellung**
   aktivieren. Ohne das bleibt das Skills-Menü ausgegraut.
2. Linke Seitenleiste → **Anpassen** → **Skills** → Pluszeichen
3. `scrollcraft-skill.zip` hochladen und aktivieren.

Wichtig: `SKILL.md` muss im **Wurzelverzeichnis** des ZIP liegen, nicht in
einem Unterordner. In diesem Paket ist das so. Wenn du es später selbst neu
packst: den *Inhalt* des Ordners packen, nicht den Ordner.

Bei Team- und Enterprise-Plänen läuft der Upload über die
Organisationseinstellungen.

---

## 2 Claude Code

ZIP entpacken und den Inhalt in einen Ordner namens `scrollcraft` legen:

```
~/.claude/skills/scrollcraft/          # gilt für alle deine Projekte
.claude/skills/scrollcraft/            # gilt nur in diesem Projekt, geht ins Repo mit
```

Kein Upload nötig. Der Ordnername ist hier der Skill-Name — er muss
`scrollcraft` heißen und zum `name:` im Kopf der `SKILL.md` passen.

Für die Landingpage ist die Projektvariante die bessere: Der Skill liegt
dann neben dem Code, den er beschreibt, und wird mitversioniert.

---

## 3 Claude API

Über die Skills-Endpunkte hochladen. Der Skill steht dann dem gesamten
Workspace zur Verfügung. Nur nötig, wenn scrollcraft in eine eigene Anwendung
eingebunden werden soll — für deine Arbeitsweise vermutlich nicht.

---

## Aktualisieren

1. Datei im Ordner ändern
2. Eintrag in `CHANGELOG.md` ergänzen, Version erhöhen
3. claude.ai: neu packen und hochladen — ersetzt die alte Fassung
   Claude Code: Datei speichern, fertig

Wer auf mehreren Oberflächen arbeitet, muss beide Stellen pflegen. Die
Projektvariante in Claude Code ist die verlässlichere Quelle, weil sie
mitversioniert wird; die claude.ai-Fassung ist dann die Kopie.

---

## Prüfen, ob es geklappt hat

Neuen Chat öffnen und fragen: *„Was darf auf der Landingpage über die
Verfügbarkeit stehen?"*

Richtig ist eine Antwort, die den Zeitform-Filter anwendet — also sinngemäß:
solange kein Automat läuft, keine Aussage im Präsens. Kommt stattdessen eine
allgemeine Marketingantwort, wurde der Skill nicht geladen.
