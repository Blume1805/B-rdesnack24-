import 'dart:convert';
import 'dart:js_interop';

import 'package:web/web.dart' as web;

/// Web: Inhalt als echten Datei-Download auslösen (Blob → Object-URL →
/// Anchor-Klick). Gibt 'downloaded' zurück.
Future<String> shareCsv(
  String content,
  String filename, {
  String mimeType = 'text/csv;charset=utf-8',
}) async {
  // Das BOM ist eine Excel-Krücke und gehört nur vor CSV. In eine
  // JSON-Datei geschrieben macht es sie für jeden Parser unlesbar.
  final istCsv = mimeType.startsWith('text/csv');
  final bytes = utf8.encode(istCsv ? '\u{FEFF}$content' : content);
  final blobParts = [bytes.toJS].toJS;
  final blob = web.Blob(blobParts, web.BlobPropertyBag(type: mimeType));
  final url = web.URL.createObjectURL(blob);
  final a = web.HTMLAnchorElement()
    ..href = url
    ..download = filename;
  web.document.body?.append(a);
  a.click();
  a.remove();
  web.URL.revokeObjectURL(url);
  return 'downloaded';
}
