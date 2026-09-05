import 'package:flutter/foundation.dart';

/// Wohin ein Link aus einer Auth-E-Mail zurückführen soll.
///
/// WARUM ES DIESE DATEI GIBT. Ohne Zielangabe nimmt Supabase die im
/// Projekt-Dashboard hinterlegte „Site URL". Das hat am 04.09.2026 dazu
/// geführt, dass der Link zum Zurücksetzen des Passworts auf die Wurzel von
/// `blume1805.github.io` zeigte statt auf `/B-rdesnack24-/` — GitHub
/// antwortete mit 404, und im Repository war nirgends zu sehen, woher die
/// Adresse kam.
///
/// Eine Einstellung, die das Verhalten der App bestimmt, aber nur im
/// Dashboard eines Dienstes steht, ist beim nächsten Fehler nicht auffindbar.
/// Deshalb bestimmt die App das Ziel jetzt selbst; die Site URL bleibt nur
/// noch Rückfallebene.
///
/// WIE DIE ADRESSE ENTSTEHT. Im Web ist `Uri.base` die gerade geöffnete
/// Adresse. Die App nutzt die voreingestellte Fragment-Strategie von Flutter
/// Web — die Route steht also hinter `#`, und `Uri.base.path` ist immer der
/// Basispfad aus `<base href>`, unabhängig davon, auf welchem Bildschirm der
/// Nutzer gerade steht. Aus Ursprung und Pfad ergibt sich damit genau die
/// Wurzel der ausgelieferten App.
///
/// Damit ist die Adresse **an die Auslieferung gebunden statt an eine
/// Konfiguration**: eine Vorschau, ein anderer Pfad, eine eigene Domain —
/// überall zeigt der Link dorthin zurück, wo der Nutzer hergekommen ist.
///
/// Außerhalb des Webs wird `null` geliefert. Auf iOS und Android führt der
/// Rücksprung über einen Deep Link, der in der Plattformkonfiguration steht;
/// dort wäre eine http-Adresse falsch.
String? authRedirectUrl() {
  if (!kIsWeb) return null;
  final base = Uri.base;
  final pfad = base.path.endsWith('/') ? base.path : '${base.path}/';
  return '${base.origin}$pfad';
}
