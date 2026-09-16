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

## Selbstständig arbeiten (Pflicht, ohne Nachfrage)

Erkannte Aufgaben werden **erledigt, nicht angeboten**. Wer feststellt, dass
etwas getan werden muss, tut es — einschließlich der Nacharbeiten, die sich aus
einer Änderung ergeben: Dokumentation, Runbook, Testabdeckung, Compliance-Eintrag.

Rückfrage nur bei **Grundsatzentscheidungen**. Das sind:

* Architektur- und Technologiewechsel (Framework, Datenhaltung, Anbieter)
* Geschäftsmodell, Preise, Konditionen gegenüber Dritten
* alles, was nach außen wirkt, bevor es abgestimmt ist — Versand an Dritte,
  Veröffentlichung, Vertragsinhalte
* destruktive oder unumkehrbare Eingriffe (K4 nach `boerdesnack24-verify`):
  Löschen von Tabellen, Spalten oder Code, irreversible Migrationen,
  Produktionsdaten, Schlüsselrotation
* Fälle, in denen zwei sinnvolle Wege offenstehen und die Wahl vom
  Geschäftsziel abhängt, nicht von der Technik

Alles andere wird ausgeführt und anschließend berichtet: was getan wurde, womit
es nachgewiesen ist, und was offen bleibt. Ein Bericht ersetzt die Rückfrage —
nicht die Arbeit.
