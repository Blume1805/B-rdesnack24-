# ADR 0004 — Kundenfrontend von Flutter auf React umstellen

- **Status:** Akzeptiert
- **Datum:** 2026-09-17
- **Löst ab:** ADR 0002 (Tech-Stack), soweit dort Flutter für den
  Kundenbereich festgelegt ist

## Kontext

Bördesnack24 hat inzwischen vier Oberflächen. Drei davon sind React,
TypeScript und Tailwind, weil sie in Lovable entstanden sind:

| Oberfläche | Technik | Stand |
|---|---|---|
| Landingpage | React (Lovable) | Umbau beauftragt |
| Öffentliche Automatenseite | React (Lovable) | steht, geprüft |
| Partner-Portal (B2B-Werbung) | React (Lovable) | Entwurf, wird nach ADR 0005 aufgelöst |
| **Kunden-App** | **Flutter** | 155 Dart-Dateien, rund 34.000 Zeilen |

Drei Beobachtungen führten zu dieser Entscheidung:

**1. Der Entwurfsweg passt nicht zum Produkt.** Der Gesellschafter entwirft
Oberflächen in Lovable. Lovable erzeugt React. Ein Entwurf für die Flutter-App
ist deshalb eine Bildvorlage, die anschließend von Hand in Dart nachgebaut
werden muss. Jeder Entwurf entsteht zweimal, und die zweite Fassung weicht
zwangsläufig ab.

**2. Das Ladegewicht steht dem Einstieg im Weg.** Der Flutter-Web-Build lädt
beim Erstaufruf 2,8 bis 4,1 MB (gemessen am 15.09.2026). Der Einstieg in die
App ist der QR-Code am Automaten, also genau die Situation mit schlechtem Netz
in Halle oder Bad. Die öffentliche Automatenseite wurde bereits als eigenes,
sehr leichtes React-Frontend gebaut, **weil** der Flutter-Build dafür zu schwer
ist. Die Begründung gilt für die App selbst genauso.

**3. Es gibt keinen App-Store mehr.** Die App wird als PWA über den Browser
ausgeliefert (ADR 0005, V-007). Der Hauptgrund für Flutter — eine Codebasis für
iOS und Android — ist damit entfallen. Ordner `ios/` und `android/` existieren
im Projekt ohnehin nicht; gebaut wurde nur je Web.

## Entscheidung

Das Kundenfrontend wird **in React, TypeScript und Tailwind neu gebaut**, mit
demselben Fundament wie Landingpage und Automatenseite. Supabase, Datenbank,
RLS, Edge Functions und Rechtstexte bleiben unverändert — die Umstellung
betrifft ausschließlich die Oberfläche.

Der Gesellschafter hat sich am 17.09.2026 dafür entschieden, nachdem ihm die
Alternative (bei Flutter bleiben, Entwürfe doppelt bauen) und die
Zwischenoption (erst messen, dann entscheiden) vorgelegen haben.

## Nachtrag vom 17.09.2026 — Umfang präzisiert

Bei der Inventur für das PWA-Briefing zeigte sich, dass die Flutter-App **nicht
nur die Kunden-App** ist. Sie enthält auch den internen Bereich:

| Bereich | Dart-Dateien | Wandert nach React? |
|---|---|---|
| `customer` | 41 | ja |
| `auth` | 11 | ja |
| `legal` | 3 | ja |
| `home` | 1 | ja |
| `management` (Inventur, HACCP, Dokumente, Mitarbeiter) | 35 | **nein, vorerst** |
| `finance` (Finanzdashboard) | 10 | **nein, vorerst** |
| `approvals` (Dokumentenfreigaben) | 6 | **nein, vorerst** |

Der Wechsel betrifft damit rund 56 von 107 Feature-Dateien, also etwa die
Hälfte. Der interne Bereich bleibt zunächst in Flutter, und zwar aus einem
sachlichen Grund: Er wird am Schreibtisch benutzt, nicht am Automaten bei
schlechtem Netz. Das Ladegewicht ist dort kein Problem, und in Lovable wird er
nicht entworfen. Beide Argumente für den Wechsel treffen auf ihn nicht zu.

**Damit ist eine Konsequenz oben zu korrigieren:** „Eine Technologie für alle
vier Oberflächen" wird durch diesen Schritt **nicht** erreicht. Erreicht wird:
eine Technologie für alles, was nach außen wirkt (Landingpage, Automatenseite,
Kunden-PWA, B2B-Werbung). Intern bleibt Flutter, bis über dessen Zukunft
gesondert entschieden ist. Wer das anders darstellt, beschönigt.

## Konsequenzen

**Was besser wird**

- Ein Lovable-Entwurf wird zum Produkt, nicht zur Vorlage.
- Eine Technologie für alle vier Oberflächen, ein Design-Fundament.
- Deutlich geringeres Ladegewicht am Automaten.
- Die öffentliche Automatenseite und die App können sich Bausteine teilen.

**Was es kostet**

- Rund 34.000 Zeilen Dart werden nicht weiterverwendet. Die Fachlogik ist
  wiederverwendbar (sie beschreibt dieselben Abläufe), der Code nicht.
- Mehrwöchige Neuentwicklung, in der kein neuer Nutzen entsteht. **Das ist das
  Hauptrisiko dieser Entscheidung:** Der Engpass des Unternehmens sind
  Standorte, nicht die App. Eine Umstellung, die Wochen bindet, ohne einen
  Standort zu gewinnen, ist teuer — auch wenn sie technisch richtig ist.
- Die vorhandene Testabdeckung (96 Tests) entfällt und muss neu entstehen.

**Wie das Risiko begrenzt wird**

- Die Umstellung wird nicht am Stück gebaut. Erst entsteht ein lauffähiger Kern
  (Anmeldung, Automatenfinder, Preisanzeige), der die alte App ablösen kann.
  Alles Weitere folgt einzeln.
- Die Flutter-App bleibt bis zur Ablösung unangetastet im Repository. Erst wenn
  die React-Fassung nachweislich trägt, wird sie entfernt — als eigener,
  angekündigter Schritt (Änderungsklasse K4).
- Die Rechtstexte kommen aus `docs/legal/`, erzeugt aus einer Quelle
  (`scripts/rechtstexte_export.py`). Sie werden nicht abgeschrieben.

**Was ausdrücklich nicht mitgeändert wird**

Datenbank, RLS-Regeln, Edge Functions, Rollenmodell, Preislogik und die
gemessenen Statusstufen. Ein Technologiewechsel an der Oberfläche darf die
geprüfte Sicherheitsschicht nicht berühren.
