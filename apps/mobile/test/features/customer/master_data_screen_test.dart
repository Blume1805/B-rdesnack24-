import 'package:boerdesnack24/features/customer/presentation/controllers/customer_providers.dart';
import 'package:boerdesnack24/features/customer/presentation/screens/master_data_screen.dart';
import 'package:boerdesnack24/features/management/presentation/screens/documents_screen.dart';
import 'package:flutter/material.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_test/flutter_test.dart';

/// Stammdaten und Dokument-Upload, soweit sie an den Serverregeln vom
/// 02.09.2026 hängen.
void main() {
  Future<void> zeige(
    WidgetTester tester,
    Map<String, dynamic>? stammdaten,
  ) async {
    tester.view.physicalSize = const Size(1024, 2400);
    tester.view.devicePixelRatio = 1.0;
    addTearDown(tester.view.reset);

    await tester.pumpWidget(
      ProviderScope(
        overrides: [
          myCustomerProvider.overrideWith((ref) async => stammdaten),
        ],
        child: const MaterialApp(
          locale: Locale('de'),
          localizationsDelegates: [
            GlobalMaterialLocalizations.delegate,
            GlobalWidgetsLocalizations.delegate,
            GlobalCupertinoLocalizations.delegate,
          ],
          supportedLocales: [Locale('de')],
          home: MasterDataScreen(),
        ),
      ),
    );
    await tester.pumpAndSettle();
  }

  Map<String, dynamic> basis({String? geburtstag}) => <String, dynamic>{
        'full_name': 'Testkunde',
        'email': 'test@example.invalid',
        'customer_number': 'K-1',
        'birth_date': geburtstag,
        'registered_at': '2026-01-01',
        'gender': null,
        'customer_type': 'private',
      };

  group('Geburtsdatum nachtragen', () {
    // Die Altersschranke des kostenpflichtigen Abos prüft serverseitig
    // gegen profiles.birth_date (S-6). Konten aus der Zeit vor der
    // Pflichtabfrage haben keines. Ohne diesen Weg wäre die Fehlermeldung
    // der Datenbank („bitte in den Stammdaten nachtragen") eine Sackgasse.

    testWidgets('fehlendes Datum bietet das Nachtragen an', (tester) async {
      await zeige(tester, basis());

      expect(find.text('Nachtragen'), findsOneWidget);
      expect(find.textContaining('Noch nicht hinterlegt'), findsOneWidget);
      expect(find.textContaining('einmalig'), findsWidgets);
    });

    testWidgets('vorhandenes Datum bietet es NICHT an', (tester) async {
      // Der gefährliche Fall: Wäre die Schaltfläche auch dann da, würde
      // sie eine Änderung versprechen, die die Datenbank abweist.
      await zeige(tester, basis(geburtstag: '1990-05-05'));

      expect(find.text('Nachtragen'), findsNothing);
      expect(find.text('05.05.1990'), findsOneWidget);
      expect(find.textContaining('Noch nicht hinterlegt'), findsNothing);
    });

    testWidgets('Bestätigung nennt die Endgültigkeit', (tester) async {
      await zeige(tester, basis());
      await tester.tap(find.text('Nachtragen'));
      await tester.pumpAndSettle();

      // Der Datumswähler steht offen; die Bestätigung kommt erst danach.
      expect(find.text('Geburtsdatum wählen'), findsOneWidget);
    });
  });

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
      for (final n in ['a.pdf', 'b.docx', 'c.doc', 'd.png', 'e.jpg', 'f.jpeg']) {
        expect(erlaubt, contains(mimeTypFuerDokument(n)));
      }
    });
  });
}
