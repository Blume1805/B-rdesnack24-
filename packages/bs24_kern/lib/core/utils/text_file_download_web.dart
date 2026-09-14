import 'dart:js_interop';

import 'package:web/web.dart' as web;

/// Löst im Browser einen Datei-Download aus. UTF-8 mit BOM, damit
/// Excel/DATEV deutsche Umlaute korrekt einlesen.
Future<void> downloadTextFile(
  String content,
  String filename, {
  String mime = 'text/csv',
}) async {
  final bom = String.fromCharCode(0xFEFF);
  final blobParts = [(bom + content).toJS].toJS;
  final blob = web.Blob(
    blobParts,
    web.BlobPropertyBag(type: '$mime;charset=utf-8'),
  );
  final url = web.URL.createObjectURL(blob);
  final a = web.HTMLAnchorElement()
    ..href = url
    ..download = filename;
  web.document.body?.append(a);
  a.click();
  a.remove();
  web.URL.revokeObjectURL(url);
}
