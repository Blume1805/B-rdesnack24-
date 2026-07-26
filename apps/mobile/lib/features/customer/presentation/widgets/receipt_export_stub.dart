import 'package:flutter/services.dart';

/// Mobile/Desktop-Fallback: CSV in die Zwischenablage kopieren (keine
/// zusätzliche Share-Abhängigkeit). Gibt 'clipboard' zurück, damit die UI
/// den passenden Hinweis zeigt.
Future<String> shareCsv(String content, String filename) async {
  await Clipboard.setData(ClipboardData(text: content));
  return 'clipboard';
}
