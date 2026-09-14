# An den Lovable-Workspace übertragene Skills

Übertragen am 02.09.2026 in den Workspace `boerdesnack24's Lovable`
(`588f8a86cd6010a58053`). Der Workspace hatte vorher nur
`boerdesnack24-design`.

| Skill | Größe | Fassung |
| --- | --- | --- |
| `frontend-taste` | 7,0 KB | vollständig, um Verweise auf `frontend-design` bereinigt (den Skill gibt es dort nicht) |
| `humanizer` | 23,1 KB | vollständig, ergänzt um deutsche Entsprechungen der Werbefloskeln und einen Abschnitt über Oberflächentexte |
| `impeccable` | 32,6 KB | **komprimiert** — siehe unten |
| `scrollcraft` | 40 KB | **komprimiert** — siehe unten, übertragen 05.09.2026 |

## Warum `impeccable` komprimiert werden musste

Lovables `create_workspace_skill` nimmt genau **eine** `SKILL.md`, keine
Unterordner. Das Original besteht aus einer SKILL.md und **35
Referenzdateien** (347 KB); seine SKILL.md ist im Kern ein Inhaltsverzeichnis
mit 31 Verweisen auf jene Dateien und 6 Aufrufen von `scripts/context.mjs` —
einem Skript, das nicht einmal im synchronisierten Bündel liegt.

Allein übertragen hätte der Agent eine Landkarte ohne Land bekommen und
angefangen, nach Dateien zu suchen, die es nicht gibt.

Übernommen wurden deshalb sechs Kapitel, die ohne die übrigen tragen:

1. **Handwerksboden** — die Qualitätsuntergrenze und die harten Verbote
2. **Operate** — Oberflächen, in denen gearbeitet wird (beide Apps sind das)
3. **Härten** — Fehler-, Leer- und Randzustände
4. **Politur** — der letzte Durchgang vor der Auslieferung
5. **Technische Prüfung** — Barrierefreiheit, Performance, Responsivität
6. **Bewegung** — Animation mit Zweck

Nicht enthalten: `shape`, `distill`, `bolder`, `quieter`, `colorize`,
`typeset`, `layout`, `onboard`, `delight`, `extract`, `critique` und weitere.
Der Kopf der übertragenen Fassung sagt das ausdrücklich, damit der Agent im
Bedarfsfall nachfragt, statt sie zu erfinden.

Alle Verweise auf nicht mitgelieferte Dateien, auf Hilfsskripte und auf
`$impeccable <kommando>` sind aufgelöst. Die native-Zweige (iOS/Android) sind
entfernt — dieser Workspace baut Web. Geprüft: **0 tote Verweise**.

`impeccable-SKILL.md` in diesem Verzeichnis ist die übertragene Fassung.


## Warum `scrollcraft` komprimiert werden musste

Dasselbe Problem wie bei `impeccable`, nur mit schwererer Folge. Das Original
besteht aus einer `SKILL.md` und elf Begleitdateien. Der Kern des Skills ist
die **Wahrheitsschicht** in `references/truth.md`: die einzige zulässige
Quelle für Aussagen auf der Landingpage.

Ein Skill, dessen Faktenquelle als Verweis auf eine Datei endet, die im
Zielsystem nicht existiert, prüft nichts — er behauptet nur, zu prüfen. Das
wäre schlimmer als kein Skill, weil es Sicherheit vortäuscht.

In `scrollcraft-SKILL.md` sind deshalb **alle inhaltlich tragenden Dateien
vollständig eingebettet** (Anhänge A–I): Wahrheitsschicht, Zielgruppen,
Storyboard, Pattern-Kanon, Technik, Assets und die drei Checklisten.
Inhaltlich ist nichts gekürzt.

Nicht übertragen:

* `references/musterbibliothek.html` — 53 KB Demoseite, im Repository unter
  `docs/scrollcraft/references/` einsehbar.
* `scripts/audit_static.py`, `build_spin.py`, `snapshot.py` — laufen lokal,
  nicht im Lovable-Sandkasten. Was sie prüfen, steht als Checkliste in
  Anhang I.

Das Original liegt vollständig unter `docs/scrollcraft/`.
