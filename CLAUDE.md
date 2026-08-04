# Bördesnack24 — Arbeitsregeln für Claude

Dieses Dokument sammelt dauerhafte Vorgaben, die für **jede** Änderung
am Projekt gelten. Neue Regeln unten anhängen.

## KI-Transparenz nach Art. 50 EU AI Act (Pflicht, ohne Nachfrage)

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
