# Frontend und Backend gemeinsam auf GitHub

**Stand:** 02.09.2026 · Entscheidungsvorlage für Philipp, Arbeitsanweisung für den Lovable-Agenten

Ziel: Die beiden Lovable-Frontends und das von Claude Code gepflegte Backend
sollen als ein Stand auf GitHub liegen — auschecken, bauen, prüfen, ohne drei
getrennte Quellen zusammensuchen zu müssen.

---

## 1. Der Ist-Zustand

| Teil | Wo er heute liegt |
|---|---|
| Backend, Flutter-App, Migrationen, Prüfumgebung, Dokumentation | `github.com/Blume1805/B-rdesnack24-` — **öffentlich**, Monorepo-Aufbau (`apps/mobile`, `packages/api-types`, `supabase/`, `scripts/`, `docs/`), vier GitHub-Workflows |
| Kunden-App (Lovable A) | nur in Lovable |
| Gesellschafter-App (Lovable B) | nur in Lovable |

Sichtbar ist genau **ein** Repository. In beiden Lovable-Projekten steht zwar
ein `AGENTS.md` mit dem Hinweis „This project is connected to Lovable" — das
ist Lovables Standardvorlage und **kein** Nachweis einer GitHub-Verbindung.
Ob eine besteht, sieht man nur im Lovable-Dashboard.

## 2. Warum das nicht einfach ein `git push` ist

**Lovable synchronisiert ein Projekt mit einem Repository, und der
Projektinhalt liegt in dessen Wurzel.** `package.json`, `vite.config.ts` und
`src/` stehen ganz oben. Das Backend-Repository hat seine Wurzel aber schon
vergeben: dort liegen `apps/`, `packages/`, `supabase/`, `docs/`.

Zwei Projekte, die beide die Wurzel beanspruchen, passen nicht in ein
Repository, das seine Wurzel bereits anders belegt. Daran scheitert der
naheliegende Weg.

Dazu kommt Lovables eigene Warnung aus `AGENTS.md`:

> Avoid rewriting published git history — force pushing, or
> rebasing/amending/squashing commits that are already pushed — as it rewrites
> history on Lovable's side and the user will likely lose their project history.

Ein `git filter-repo`, das die Projekte in Unterordner verschiebt, ist genau
das. Der Weg ist damit versperrt.

## 3. Empfehlung: drei Repositories, ein Monorepo per `subtree`

Jedes Lovable-Projekt bekommt sein eigenes Repository und behält seine
Synchronisation. Das Backend-Repository zieht beide als **Subtree** unter
`apps/` ein:

```
B-rdesnack24-/
├── apps/
│   ├── mobile/              Flutter, Gesellschafter + Kunde (bestehend)
│   ├── kunden-web/          Subtree von boerdesnack24-kunden-web
│   └── gesellschafter-web/  Subtree von boerdesnack24-gesellschafter-web
├── packages/api-types/
├── supabase/migrations/
├── scripts/pruefumgebung/
└── docs/
```

Einrichten (einmalig, je Projekt):

```bash
git remote add kunden-web https://github.com/Blume1805/boerdesnack24-kunden-web.git
git subtree add --prefix=apps/kunden-web kunden-web main --squash
```

Aktualisieren, wenn in Lovable gearbeitet wurde:

```bash
git subtree pull --prefix=apps/kunden-web kunden-web main --squash
```

Warum das die richtige Wahl ist:

* **Lovable bleibt unangetastet.** Kein Verschieben, kein Umschreiben der
  Historie, die Live-Vorschau und der Editor funktionieren weiter.
* **Ein Auschecken genügt.** Wer das Monorepo klont, hat Backend, Migrationen,
  Prüfumgebung und beide Oberflächen auf einem Stand.
* **Die Richtung ist klar.** In Lovable wird gebaut, ins Monorepo wird gezogen.
  Rückwärts (`git subtree push`) geht auch, sollte aber die Ausnahme bleiben —
  sonst konkurrieren zwei Schreiber um dieselbe Datei.
* **Es ist reversibel.** Ein Subtree ist normaler Inhalt im Repository, kein
  Submodul mit Zeigern, die ins Leere laufen können.

### Die Alternative, falls die Live-Synchronisation nicht gebraucht wird

Einmalig exportieren, unter `apps/` einchecken, und Lovable nur noch als
Entwurfswerkzeug benutzen. Einfacher, aber der Weg zurück in den Editor ist
dann zu.

## 4. Was Philipp tun muss

1. In Lovable je Projekt eine GitHub-Verbindung einrichten (Dashboard →
   Projekt → GitHub). Zwei neue, **private** Repositories anlegen; Vorschlag:
   `boerdesnack24-kunden-web` und `boerdesnack24-gesellschafter-web`.
2. Prüfen, ob das Backend-Repository öffentlich bleiben soll (siehe § 6).
3. Danach die beiden `git subtree add` aus § 3 ausführen — oder mir sagen,
   dass ich es machen soll.

Ohne Schritt 1 geht nichts weiter: Ein Repository, das es nicht gibt, lässt
sich nicht einziehen.

## 5. Was der Lovable-Agent auf seiner Seite herstellen muss

Damit ein Auschecken ohne Lovable baut und prüfbar bleibt:

1. **Keine Zugangsdaten im Quelltext.** Heute vorbildlich gelöst: Der
   Supabase-Schlüssel im Browser ist ein *publishable key* und darf öffentlich
   sein; der Kommentar in `src/lib/supabase.ts` sagt das ausdrücklich und
   verbietet den `service_role`-Schlüssel. Serverseitige Geheimnisse
   (`LOVABLE_API_KEY`, `RESEND_API_KEY`, `RESEND_FROM`, `ADMIN_EMAILS`) kommen
   aus `process.env`. **Das muss so bleiben.**
2. **Eine `.env.example`** mit allen benötigten Variablennamen und leeren
   Werten, damit ein Fremder weiß, was zu setzen ist. Keine echten Werte.
3. **Ein `README.md` an der Projektwurzel**, das nennt: welche Supabase-Instanz
   die Anwendung anspricht (`nnfsyuglkqycwenwxmuw`), welche Node- oder
   Bun-Version gilt, wie man baut, und wie man die Tests laufen lässt.
4. **`bun.lock` bleibt eingecheckt.** Ein Bauen ohne festgezurrte
   Abhängigkeiten ist keine Reproduktion.
5. **Der Bau läuft aus einem frischen Klon.** Prüf das wirklich: Klonen,
   `bun install`, `bun run build`. Was dabei fehlt, gehört ins README.
6. **Keine Historie umschreiben.** Kein `--force`, kein Rebase auf schon
   gepushte Commits, kein Squash. Lovable hängt daran.
7. **Nenn die Abhängigkeiten, die mitwandern.** Der Mailversand läuft heute
   über `https://connector-gateway.lovable.dev/resend` und braucht dafür einen
   `LOVABLE_API_KEY`. Wer die Anwendung außerhalb von Lovable betreibt, nimmt
   diese Abhängigkeit mit. Das ist kein Fehler, aber es muss im README stehen,
   damit es niemand später überrascht.

## 6. Drei Dinge, die vorher geprüft gehören

**Das Backend-Repository ist öffentlich.** Das ist für den Backend-Teil
vertretbar: Die Sicherheit liegt in den RLS-Policies, nicht in der
Geheimhaltung des Schemas, und alle dokumentierten Befunde sind geschlossen.
Bevor Frontend-Code dazukommt, ist es aber die Gelegenheit, bewusst zu
entscheiden — nicht aus Versehen dabei zu bleiben. Prüf insbesondere, ob in
den Workflows oder in `docs/` etwas steht, das nicht öffentlich sein soll.

**Die GitHub-Workflows kennen die neuen Ordner nicht.** `ci.yaml`,
`deploy-web.yaml`, `deploy-functions.yaml` und `release.yaml` sind auf die
Flutter-App und Supabase zugeschnitten. Nach dem Einziehen der Subtrees
brauchen sie Pfadfilter, sonst baut jeder Frontend-Commit die Flutter-App neu
und umgekehrt.

**Es gibt noch keine Workspace-Konfiguration.** Das Repository hat weder
`package.json` an der Wurzel noch `pnpm-workspace.yaml` oder `turbo.json`. Für
den Anfang braucht es das auch nicht — zwei unabhängige Frontends nebeneinander
funktionieren ohne. Sobald aber gemeinsame Pakete entstehen (siehe § 7), wird
eine Workspace-Konfiguration fällig.

## 7. Der eigentliche Gewinn: gemeinsame Pakete

Ein Monorepo lohnt sich nicht, weil alles in einem Ordner liegt, sondern weil
sich Dinge teilen lassen. Zwei Kandidaten stehen schon fest:

* **`packages/design-tokens`** — die Farbwerte, Radien, Dauern und die
  Hauskurve aus `docs/DESIGN-SYSTEM-EINHEITLICH.md` als eine Quelle, aus der
  sowohl die CSS-Variablen der Web-Apps als auch die Dart-Konstanten der
  Flutter-App erzeugt werden. Erst dann ist „einheitliches Design" nicht mehr
  eine Absprache, sondern eine Datei.
* **`packages/api-types`** — existiert bereits. Die aus Supabase erzeugten
  Typen gehören dort hin, statt in jedem Frontend neu geraten zu werden. Die
  heutigen geratenen Spaltennamen in `src/lib/loyalty.ts` wären damit gar
  nicht erst möglich gewesen.

Beides ist Folgearbeit, kein Teil der Migration. Aber es ist der Grund, sie zu
machen.
