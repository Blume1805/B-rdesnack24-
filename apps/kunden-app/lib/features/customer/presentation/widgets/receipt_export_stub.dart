import 'package:flutter/services.dart';

/// Mobile/Desktop-Fallback: Inhalt in die Zwischenablage kopieren (keine
/// zusätzliche Share-Abhängigkeit). Gibt 'clipboard' zurück, damit die UI
/// den passenden Hinweis zeigt.
///
/// `mimeType` wird hier nicht gebraucht, steht aber in der Signatur, damit
/// Web- und Nicht-Web-Fassung austauschbar bleiben — sonst bricht der
/// bedingte Import beim ersten abweichenden Aufruf.
Future<String> shareCsv(
  String content,
  String filename, {
  String mimeType = 'text/csv;charset=utf-8',
}) async {
  await Clipboard.setData(ClipboardData(text: content));
  return 'clipboard';
}
