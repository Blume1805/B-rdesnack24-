import '../widgets/design_system/eu_ki_kennzeichen.dart';

/// Entscheidet, ob ein Produktbild ein KI-Kennzeichen trägt.
///
/// Die Regel steht bewusst allein und nicht im Widget: sie ist die
/// rechtliche Aussage, das Widget ist nur ihre Darstellung. Eine Regel, die
/// in einem `build` versteckt ist, lässt sich weder prüfen noch zitieren.
///
/// DIE ENTSCHEIDUNG, die dahintersteht und die schon einmal falsch getroffen
/// wurde: **Nicht jeder KI-Einsatz an einem Bild löst eine Kennzeichnung
/// aus.** Freistellen, Zuschneiden und Aufhellen ändern nichts an dem, was
/// das Bild zeigt — der Gegenstand bleibt der Gegenstand. Erst wenn das
/// Produkt selbst oder seine Umgebung verändert wird, zeigt das Bild etwas
/// anderes als die Wirklichkeit, und erst dann ist der Hinweis fällig.
///
/// Eine Kennzeichnung an jedem bearbeiteten Bild wäre nicht die sichere
/// Seite, sondern eine eigene Falschaussage: sie behauptet eine Veränderung
/// am Gegenstand, die es nicht gab, und entwertet den Hinweis dort, wo er
/// gebraucht wird.
///
/// Quelle der Felder ist `public.produktbilder`; die Begründung liegt im
/// KI-Register unter dem Schlüssel `produktbild_bearbeitung`.
KiHerkunft? kiKennzeichenFuerProduktbild({
  required bool kiVerwendet,
  required bool kiNeuesProdukt,
  required bool kiNeueUmgebung,
}) {
  if (!kiVerwendet) return null;
  if (!kiNeuesProdukt && !kiNeueUmgebung) return null;

  // Ein Produktbild geht immer von einer eigenen Aufnahme aus — das ist die
  // Abgrenzung zum Marketingmotiv, das ohne Vorlage entsteht. Also ist es
  // bearbeitet, nie vollständig erzeugt.
  return KiHerkunft.teilweiseBearbeitet;
}
