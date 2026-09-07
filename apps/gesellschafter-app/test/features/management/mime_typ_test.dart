import 'package:bs24_gesellschafter/features/management/presentation/screens/documents_screen.dart';
import 'package:flutter_test/flutter_test.dart';

/// Die Zuordnung Dateiname → MIME-Typ entscheidet, ob ein Dokument-Upload
/// beim Bucket `documents` überhaupt ankommt (S-10: Erlaubnisliste).
void main() {
  group('mimeTypFuerDokument', () {
    // Der Bucket `documents` nimmt seit S-10 nur noch bestimmte Typen an.
    // Diese Zuordnung entscheidet, ob ein Upload überhaupt ankommt.

    test('erkennt die Typen der Auswahlliste', () {
      expect(mimeTypFuerDokument('Vertrag.pdf'), 'application/pdf');
      expect(
        mimeTypFuerDokument('Anschreiben.docx'),
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      );
      expect(mimeTypFuerDokument('Alt.doc'), 'application/msword');
      expect(mimeTypFuerDokument('Scan.png'), 'image/png');
      expect(mimeTypFuerDokument('Foto.jpg'), 'image/jpeg');
      expect(mimeTypFuerDokument('Foto.jpeg'), 'image/jpeg');
    });

    test('Großschreibung ändert nichts', () {
      expect(mimeTypFuerDokument('VERTRAG.PDF'), 'application/pdf');
      expect(mimeTypFuerDokument('Scan.PNG'), 'image/png');
    });

    test('liefert nie den Standardwert des Upload-Dienstes', () {
      // application/octet-stream würde der Bucket abweisen — genau der
      // Wert, der vor der Korrektur bei jedem Dokument hinausging.
      for (final n in ['a.pdf', 'a.docx', 'a.doc', 'a.png', 'a.jpg', 'a']) {
        expect(mimeTypFuerDokument(n), isNot('application/octet-stream'));
      }
    });

    test('jeder gelieferte Typ steht auf der Erlaubnisliste des Buckets', () {
      const erlaubt = {
        'application/pdf',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/msword',
        'image/png',
        'image/jpeg',
      };
      for (final n in [
        'a.pdf',
        'b.docx',
        'c.doc',
        'd.png',
        'e.jpg',
        'f.jpeg',
      ]) {
        expect(erlaubt, contains(mimeTypFuerDokument(n)));
      }
    });
  });
}
