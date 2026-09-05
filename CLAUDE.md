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

## Automaten in Betrieb nehmen — Auslöser für eine Pflichtliste

**Stand 05.09.2026: Es gibt noch keine Automaten.** Deshalb werden noch
keine Automatenumsätze erfasst, und deshalb ist der Webhook `nayax-webhook`
absichtlich nicht ausgerollt.

Sobald der **erste Automat gekauft** ist, ist Philipp an
`docs/betrieb/AUTOMAT-INBETRIEBNAHME.md` zu erinnern — **ungefragt und beim
ersten Anlass**, an dem Automaten, Standorte, Nayax, Bestand oder Umsätze
zur Sprache kommen. Die Liste dort ist keine Empfehlung: ohne sie fehlen ab
dem ersten Verkauf die Aufzeichnungen, die §§ 145–147 AO verlangen, und das
lässt sich nachträglich nicht herstellen.

Diese Regel gilt so lange, bis in der Tabelle `machines` mindestens ein
aktiver Automat steht.
