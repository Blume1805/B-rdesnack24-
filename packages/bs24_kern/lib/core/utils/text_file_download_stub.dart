/// Non-Web-Fallback: Text-Datei-Download ist auf Native aktuell nicht
/// implementiert (die Verwaltung läuft in der Web-Demo). Kein-op.
Future<void> downloadTextFile(
  String content,
  String filename, {
  String mime = 'text/csv',
}) async {}
