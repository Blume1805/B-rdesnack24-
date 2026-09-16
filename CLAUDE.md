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

## Dokumentation immer gegen den Code prüfen (Pflicht, ohne Nachfrage)

Jede Aussage in `/docs/` gilt als Behauptung, nicht als Wahrheit. Wird eine
Dokumentationsstelle gelesen, zitiert oder geändert, ist sie **im selben Zug
gegen den tatsächlichen Code zu prüfen** — durch Suche im Repository, nicht aus
dem Gedächtnis.

* Stimmt die Doku nicht mit dem Code überein, ist der Widerspruch aufzulösen:
  entweder die Doku angleichen oder den Befund als offenen Punkt führen.
* **Beschreibt die Doku eine Sicherheits- oder Compliance-Eigenschaft, die der
  Code nicht erfüllt, wird niemals die Doku heruntergeschrieben.** Dann ist der
  Code der Fehler, und der Punkt geht als 🔴 in den Abweichungsabschnitt des
  jeweiligen Dokuments und, sofern rechtlich relevant, in `docs/COMPLIANCE.md`.
* Geprüfte Abweichungen werden mit Datum festgehalten, damit sie nicht
  stillschweigend zurückkehren.
* Kein Nachfragen beim User nötig. Die Prüfung gehört zur Aufgabe, nicht zur
  Zusatzleistung.
