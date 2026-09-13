# Zwei Apps, ein Kern — Aufbau und Nachweis

Stand 07.09.2026.

## Die Entscheidung und ihr Grund

Bis zum 06.09.2026 war Bördesnack24 **eine** Flutter-Anwendung. Der
Kundenbereich und der interne Bereich lagen nebeneinander; welche Tabs
jemand sah, entschied die Rolle. Der interne Code wurde per `deferred`
nachgeladen, damit Kunden ihn nicht mit herunterladen.

Philipp hat am 07.09.2026 die Trennung in zwei Apps entschieden, mit einer
Begründung, die nicht technisch ist:

> „Ansonsten definitiv 2 Apps, da Kunden nicht sehen soll, dass es auch
> einen anderen Zugang für die Gesellschafter gibt."

Diese Begründung trägt — nachgemessen, nicht vermutet. `deferred` hält den
internen **Code** aus dem Erstdownload heraus, aber nicht die Spuren:

| Im ausgelieferten Kunden-Bundle vor der Trennung | Fundort | Treffer |
|---|---|---|
| `/finance/approvals` | Routentabelle in `main.dart.js` | 2 |
| `/management/my-signatures` | Routentabelle in `main.dart.js` | 1 |
| `Gesellschafter-Freigaben` | `.part.js` | 2 |
| `Betriebsprotokolle` | `.part.js` | 1 |
| `unit_cost` | `.part.js` | 6 |
| `inventory_fifo_movements` | `.part.js` | 1 |
| `business_customers_csv` | `.part.js` | 1 |

Die `.part.js`-Dateien liegen im Web-Deploy unter ihrer eigenen Adresse und
sind ohne Anmeldung abrufbar. Ein Blick in den Netzwerk-Tab oder ein `curl`
hätte gereicht.

Gemessen am 07.09.2026 gegen einen Release-Build aus Commit `c3b615c`
(Stand unmittelbar vor der Trennung).

## Aufbau

```
packages/bs24_kern/        Gemeinsamer Kern
  lib/core/                Konfiguration, DI, Fehler, Theme, Design-System,
                           Sicherheit (Biometrie, MFA-Helfer), Router-Regeln
  lib/features/auth/       Anmeldung, Registrierung, Passwort, MFA
  lib/features/legal/      Impressum, Datenschutz, AGB, Kündigung
  lib/features/geteilt/    Automatenliste + Bestand (nur lesend), PDF-Anzeige
  lib/l10n/                Lokalisierung — Quelle für beide Apps
  assets/                  Markenbilder, EU-KI-Kennzeichen

apps/kunden-app/           Store-App (Android, iOS, Web)
  lib/features/customer/   Kundenbereich (18 Screens)
  lib/features/home/       Kunden-Shell

apps/gesellschafter-app/   Direktinstallation, kein Store (Android, iOS)
  lib/features/management/ Verwaltung
  lib/features/finance/    Finanzen
  lib/features/admin/      Administration
  lib/features/approvals/  Freigaben
  lib/features/home/       interne Shell
```

**Die Datenbank bleibt eine.** Es gibt keine Schnittstelle zwischen den
Apps, keinen Abgleich und keine zweite Wahrheit — beide sprechen mit
demselben Supabase-Projekt. Was ein Kunde kauft, sieht die
Gesellschafter-App unmittelbar. Getrennt sind Auslieferung und Oberfläche.

## Was der Kern enthält — und was bewusst nicht

`lib/features/geteilt/automaten_providers.dart` ist der einzige Datenpfad,
den beide Apps teilen: die Automatenliste und der Bestand je Automat, **nur
lesend**. Beides braucht die Kunden-App für den Automatenfinder und die
Verfügbarkeitsanzeige, die Gesellschafter-App für ihre Protokolle.

Nicht im Kern und damit nicht im Kunden-Bundle: Einkaufspreise, Margen,
FIFO-Bewegungen, Protokolle, Exporte, Freigaben, alles Schreibende. Die
frühere Doppelung (`ManagementRepository.machines()` neben derselben
Abfrage im Kern) wurde entfernt — zwei Wege zur selben Abfrage laufen
irgendwann auseinander.

Welche Zeilen tatsächlich zurückkommen, entscheidet weiterhin ausschließlich
die Datenbank (RLS). Die Trennung der Apps ist **kein** Sicherheitsmerkmal
und ersetzt keine Prüfung im Backend; sie verhindert nur, dass die Existenz
des internen Bereichs im Kunden-Download sichtbar wird.

## Anmeldung: getrennte Sitzungen

`bootstrap()` bekommt den Ablageschlüssel als Parameter:

* Kunden-App: `sb-boerdesnack24-auth-token`
* Gesellschafter-App: `sb-boerdesnack24-intern-auth-token`

Ohne diese Trennung würden sich beide Apps auf demselben Gerät (und im Web
unter derselben Herkunft) gegenseitig die Sitzung überschreiben.

Ein Kundenkonto, das sich in der Gesellschafter-App anmeldet, sieht dort
`_KeinZugang` — keinen Hinweis darauf, was es gäbe, nur den Weg zurück. Die
eigentliche Absicherung bleibt serverseitig.

## Daten aktualisieren beim Öffnen

Anforderung: „Wenn diese geöffnet wird, dann sollen sich die Daten
aktualisieren lassen."

Umgesetzt in `packages/bs24_kern/lib/core/services/datenstand.dart`:

* Kommt die App nach **mindestens 20 Sekunden** im Hintergrund zurück, wird
  der Inhaltsbereich über einen neuen `ValueKey` neu aufgehängt. Damit
  verlieren alle `autoDispose`-Provider ihren letzten Zuhörer und laden
  frisch — auch die bildschirm-eigenen (privaten), die man von außen nicht
  benennen kann.
* Die wenigen Provider, die einen Neuaufbau überleben (`machinesProvider`,
  `productsProvider` — beide nicht `autoDispose`), werden zusätzlich
  ausdrücklich verworfen.
* Die Mindestpause verhindert, dass ein Blick in die Mitteilungszentrale
  oder ein Berechtigungsdialog die gerade gesetzte Filterauswahl verwirft.
* Daneben steht im Header ein Knopf „Daten aktualisieren" für den Fall, dass
  jemand nicht warten will.

## Gegenprobe, damit es so bleibt

Zwei Stellen prüfen bei jedem Deploy und in jedem CI-Lauf, dass kein
interner Pfad und keine interne Beschriftung im Kunden-Bundle landet:

* `scripts/deploy_web.sh` — bricht den Deploy ab, bevor etwas live geht.
* `.github/workflows/ci.yaml`, Job `trennung` — baut das Kunden-Web-Bundle
  und sucht dieselben Begriffe.

Gesucht wird nach genau den sieben Begriffen aus der Tabelle oben. Die
Gegenprobe ist gelaufen: gegen das alte Bundle schlägt der Wächter bei allen
sieben an, gegen das neue bei keinem.

## Messung vorher/nachher

| | vor der Trennung | Kunden-App danach |
|---|---:|---:|
| ausgelieferte JS-Bytes | 5.047.746 | 4.268.036 |
| davon nachladbare `.part.js` | 449.041 | — |
| interne Begriffe im Bundle | 7 von 7 | 0 von 7 |

Release-Builds mit identischen `--dart-define`-Werten, 07.09.2026.

## Was noch offen ist

* Die Web-Auslieferung (`gh-pages`) bleibt die Kunden-App. Für die
  Gesellschafter-App ist bewusst **kein** Web-Ziel eingerichtet — eine
  öffentlich erreichbare Adresse würde genau das offenlegen, was die
  Trennung verbirgt.
* Die APK der Gesellschafter-App entsteht im Workflow `release.yaml`
  (Job `gesellschafter-android`) als Artefakt zum Direktinstallieren.
  Signiert wird sie noch mit dem Debug-Schlüssel; für die dauerhafte
  Installation gehört ein eigener Upload-Schlüssel dazu.
