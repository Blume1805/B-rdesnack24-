# Bördesnack24 — Arbeitsregeln für Claude

Dieses Dokument sammelt dauerhafte Vorgaben, die für **jede** Änderung
am Projekt gelten. Neue Regeln unten anhängen.

## KI-Kennzeichnung im Kundenbereich (Pflicht, ohne Nachfrage)

> **Korrektur der Rechtsgrundlage (09.08.2026).** Diese Regel hiess bis
> dahin „KI-Transparenz nach Art. 50 EU AI Act". Das war falsch zitiert:
> Die Leitlinien der Kommission vom 06.02.2025 nehmen Systeme aus, die
> vordefinierten expliziten Regeln folgen, ohne zu lernen, zu schliessen
> oder zu modellieren. Unsere Angebotslogik ist genau das — Art. 50
> verpflichtet uns derzeit zu nichts. Die Kennzeichnung bleibt trotzdem
> Hauspflicht, weil sonst für den Kunden nicht erkennbar wäre, warum ihm
> gerade dieses Angebot erscheint. Sobald ein echtes KI-System dazukommt,
> greift Art. 50 wirklich; das Register `public.ki_register` ist darauf
> vorbereitet (`ist_ki_system`).

Immer wenn im Kundenbereich neue Inhalte hinzukommen, die **algorithmisch,
regelbasiert oder KI-basiert** erzeugt/ausgewählt werden — Coupons,
Empfehlungen, Angebote, generierter Text, dynamisch gewählte Produkt-
Kombinationen, personalisierte Nachrichten —, ist **automatisch** ein
sichtbarer KI-Chip an der betroffenen Section zu platzieren.

* Widget: `AiBadge` aus `core/widgets/design_system/ai_badge.dart`
* Ziel: `AiInfoScreen` (`features/customer/presentation/screens/ai_info_screen.dart`);
  dort im Abschnitt „Was wird eingesetzt?" die neue Funktion **auch
  textlich** ergänzen, damit die Info-Seite vollständig bleibt.
* Kein Nachfragen beim User nötig. Standard: `dense: true` als Chip
  neben Section-Header (oder im Header-Row der Karte), `onTap` öffnet
  `AiInfoScreen` per `MaterialPageRoute`.

Der regelbasierte Chatbot bleibt bewusst als „Automatischer
Chat-Assistent" gekennzeichnet — nicht als „KI", weil er kein
AI-System i. S. v. Art. 3 EU AI Act ist. Für zukünftige LLM-Backends
das gleiche Prinzip anwenden.

## Behauptungen vorher prüfen (Pflicht, ohne Nachfrage)

**Nichts behaupten, was sich nachsehen lässt, ohne es nachgesehen zu
haben.** Das gilt für Aussagen über Code, Datenbankzustand, Konfiguration
und darüber, was ein Ablauf tatsächlich tut.

Anlass (04.08.2026): Behauptet wurde, ein grüner Trockenlauf des
Ausroll-Ablaufs beweise, dass der Supabase-Token gültig ist. Ein Blick in
die eigene Workflow-Datei hätte gezeigt, dass dort nur auf „Secret nicht
leer" geprüft wurde und der Ausroll-Schritt beim Trockenlauf übersprungen
wird — die Aussage war also falsch, und zwar nachprüfbar falsch. Solche
Fehler kosten eine ganze Runde: Der User handelt danach, es geht schief,
und alles wird noch einmal aufgerollt.

Konkret heisst das:

* **Über eigenen Code**: die Datei lesen, nicht aus der Absicht beim
  Schreiben schliessen. Die Absicht und das Ergebnis gehen auseinander.
* **Über den Datenbankzustand**: abfragen. Nicht aus der Migration
  ableiten, die man gerade geschrieben hat — sie kann fehlgeschlagen,
  überschrieben oder nie angewandt worden sein.
* **Über Sicherheitseigenschaften**: nachstellen, mit echten Identitäten.
  Ein Test, der das erwartete Ergebnis fest verdrahtet, prüft nichts.
* **Über fremde Systeme** (Apple, Google, Resend, Hostinger): die
  Dokumentation abrufen. Aus dem Gedächtnis zitierte Richtlinien und
  Preise sind veraltet oder erfunden.
* **Über den Ausgang eines Laufs**: das Ergebnis ansehen, nicht den
  grünen Haken. Ein Schritt kann bestehen, ohne das zu prüfen, wofür man
  ihn hält — genau das war der Anlass.

Wenn eine Prüfung nicht möglich ist, wird die Unsicherheit **benannt**
statt weggelassen: „ungeprüft, weil …" ist brauchbar, eine glatte
Behauptung ohne Grundlage nicht.

Gilt auch für das Melden von Fehlern: Bevor ein Befund gemeldet wird,
erst prüfen, ob er wirklich besteht. Ein Fehlalarm kostet den User
dieselbe Zeit wie ein echter Fehler.

## Rechtstexte mitziehen (Pflicht, ohne Nachfrage)

**Nach jeder inhaltlichen, funktionalen oder strukturellen Änderung ist
zu prüfen, ob ein Rechtstext nachgezogen werden muss — und die Prüfung
gehört in denselben Commit wie die Änderung.**

Anlass (09.08.2026): Die Datenschutzerklärung beschrieb vier
Verarbeitungen, die es nicht gab (Push, Nutzungsanalyse, Standortabfrage,
Empfehlungen) und nannte zwei Empfänger, die nirgends eingebunden waren
(Firebase Cloud Messaging, Google Maps). Gleichzeitig fehlte alles, was
tatsächlich stattfand: Resend, GitHub Pages, sevDesk, DocuSign und vor
allem das Profiling für individuelle Angebote. Die KI-Info-Seite nannte
Loyalty-Punkte und Kategorie-Präferenzen als Datenquellen, die kein
Generator verwendet, verschwieg aber das Geburtsdatum, das verwendet
wird. Das Impressum nannte den falschen Landkreis.

Nichts davon war Absicht. Es war Drift: Der Code wanderte, die Texte
blieben stehen. Ein Rechtstext, der Verarbeitungen erfindet, ist genauso
falsch wie einer, der welche verschweigt — er verlangt Einwilligungen
ins Leere und verdeckt zugleich das Tatsächliche.

Die Prüfliste — was löst was aus:

| Änderung | Nachziehen |
|---|---|
| Neue Abhängigkeit, neues SDK, neuer externer Dienst | Datenschutzerklärung (Empfänger, Drittland), Cookie-Seite |
| Neue Tabelle/Spalte mit Personenbezug | Datenschutzerklärung (Datenkategorien, Speicherdauer) |
| Neue Angebots-, Empfehlungs- oder Auswahllogik | `public.ki_register`, `AiInfoScreen`, Datenschutzerklärung (Profiling, Art. 21) |
| Neue automatische E-Mail | Datenschutzerklärung, ggf. Einwilligungspflicht |
| Preis-, Abo- oder Kündigungsänderung | AGB, Widerrufsbelehrung, Zahlungsinformationen |
| Neue Bezahlart | Zahlungsinformationen, Datenschutzerklärung |
| Neue Kundenfunktion | Barrierefreiheitserklärung (Funktionsliste) |
| Adresse, Kontakt, Rechtsform, Vertretung | Impressum, alle Texte mit Kontaktangabe |
| Beschäftigte eingestellt | Barrierefreiheitserklärung — die Kleinstunternehmen-Ausnahme nach § 3 Abs. 3 BFSG entfällt |
| Entfernte Funktion | Denselben Text prüfen wie beim Hinzufügen. Das wird regelmässig vergessen. |

Zwei Regeln dazu:

* **Keine Funktion beschreiben, die es nicht gibt.** Vor dem Formulieren
  am Code nachsehen, nicht aus der Roadmap schreiben.
* **Lücken beziffern statt beschönigen.** „11 von rund 160 Dateien" ist
  brauchbar, „nicht überall gleich sorgfältig" nicht.

Die Rechtstexte liegen in
`apps/mobile/lib/features/legal/presentation/legal_texts.dart`
(Impressum, Datenschutz, AGB, Widerruf, Zahlung, Cookies,
Barrierefreiheit) und in `ai_info_screen.dart`. Wird einer geändert, die
Versionskennung `LegalTexts.version` hochziehen.

`scripts/check_rechtstexte.py` fängt den häufigsten Fall automatisch ab:
eine neue Abhängigkeit ohne datenschutzrechtliche Einordnung. Das Skript
ersetzt die Prüfung nicht — es kennt nur Abhängigkeiten, nicht Bedeutung.
