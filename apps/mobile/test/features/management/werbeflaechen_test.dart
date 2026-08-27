import 'package:boerdesnack24/features/management/presentation/screens/werbeflaechen_screen.dart';
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:intl/date_symbol_data_local.dart';

/// Werbeflächen: die Stellen, an denen ein Fehler nicht auffallen würde.
///
/// Zwei davon sind aus früheren Runden gelernt: Beträge werden hier mit
/// Komma eingegeben, und `double.tryParse` gibt bei „49,00" still `null`
/// zurück — daraus würde ein Preis von 0, den niemand bemerkt. Und die
/// Kennzahlen stehen bewusst als Zeilen statt als Kachelreihe, weil im
/// Bildregister genau diese Reihe auf dem Telefon buchstabenweise umbrach.
void main() {
  setUpAll(() => initializeDateFormatting('de_DE'));

  group('betragLesen', () {
    test('liest das deutsche Komma', () {
      expect(betragLesen('49,00'), 49.0);
      expect(betragLesen('1.250,50'), 1250.5);
      expect(betragLesen(' 7,99 '), 7.99);
    });

    test('leer ist null, nicht null-Komma-null', () {
      // Der Unterschied zählt: `null` heisst „nichts eingegeben", 0 hiesse
      // „geschenkt".
      expect(betragLesen(''), isNull);
      expect(betragLesen('   '), isNull);
    });

    test('Unsinn bleibt Unsinn und wird nicht zu 0', () {
      expect(betragLesen('abc'), isNull);
    });
  });

  group('werbungFehlertext', () {
    test('Doppelbelegung wird erklärt, nicht durchgereicht', () {
      final t = werbungFehlertext(
        Exception('PostgrestException(code: 23P01, message: conflicting key '
            'value violates exclusion constraint)'),
      );
      expect(t, contains('schon einen'));
      expect(t, contains('Entwürfe dürfen sich überschneiden'));
      expect(t, isNot(contains('23P01')));
    });

    test('fehlende Motivfreigabe nennt die Reihenfolge', () {
      final t = werbungFehlertext(
        Exception('violates check constraint '
            '"werbevertrag_aktiv_nur_mit_freigabe"'),
      );
      expect(t, contains('Erst das Motiv freigeben'));
    });

    test('Unbekanntes wird nicht verschluckt', () {
      final t = werbungFehlertext(Exception('irgendwas Unerwartetes'));
      expect(t, contains('irgendwas Unerwartetes'));
    });
  });

  group('Übersetzungen', () {
    test('jede Position und jeder Status hat einen Text', () {
      for (final p in const [
        'front',
        'seite_links',
        'seite_rechts',
        'oben',
        'rueckseite',
        'display',
      ]) {
        expect(werbePosition(p), isNot(p), reason: 'Position $p unübersetzt');
      }
      for (final s in const [
        'entwurf',
        'zur_unterschrift',
        'aktiv',
        'beendet',
        'gekuendigt',
      ]) {
        expect(werbeVertragStatus(s), isNotEmpty);
      }
      // Ein unbekannter Wert wird durchgereicht statt zu „null" zu werden:
      // Ein neuer Enum-Wert soll sichtbar sein, nicht verschwinden.
      expect(werbePosition('dach'), 'dach');
    });
  });

  group('Anzeige auf schmalen Geräten', () {
    Future<void> zeige(WidgetTester tester, Size groesse, Widget kind) async {
      tester.view.physicalSize = groesse;
      tester.view.devicePixelRatio = 1.0;
      addTearDown(tester.view.reset);
      await tester.pumpWidget(
        MaterialApp(
          home: Scaffold(
            body: SingleChildScrollView(
              padding: const EdgeInsets.all(20),
              child: kind,
            ),
          ),
        ),
      );
      await tester.pumpAndSettle();
    }

    const kennzahlen = WerbeflaechenKennzahlen(
      werte: {
        'flaechen_gesamt': 12,
        'nutzbar': 10,
        'vermietet': 7,
        'frei': 3,
        'nicht_nutzbar': 2,
        'auslastung_prozent': 70.0,
        'werbeumsatz_monat': 343.0,
        'listenwert_frei': 147.0,
      },
    );

    for (final breite in const [390.0, 320.0]) {
      testWidgets('Kennzahlen laufen bei ${breite.toInt()} dp nicht über',
          (tester) async {
        await zeige(tester, Size(breite, 900), kennzahlen);
        expect(tester.takeException(), isNull);
        expect(find.text('Auslastung'), findsOneWidget);
        expect(find.text('70,0 %'), findsOneWidget);
      });

      testWidgets('Flächenkarte läuft bei ${breite.toInt()} dp nicht über',
          (tester) async {
        await zeige(
          tester,
          Size(breite, 900),
          WerbeflaecheKarte(
            flaeche: const {
              'id': 'x',
              'automat': 'BS24-001',
              'standort': 'Sülzetal OT Osterweddingen',
              'position': 'seite_rechts',
              'groesse_mm': '600 x 400',
              'listenpreis_monat': 49.0,
              'betriebszustand': 'nutzbar',
              'frei': false,
              'vertrag': {
                'id': 'v',
                'mieter': 'Autohaus Müller GmbH & Co. KG',
                'von': '2026-09-01',
                'bis': null,
                'preis_monat': 49.0,
                'status': 'aktiv',
                'motiv_freigegeben_am': null,
              },
            },
            onTap: () {},
          ),
        );
        expect(tester.takeException(), isNull);
        expect(find.textContaining('Motiv offen'), findsOneWidget);
        expect(find.textContaining('unbefristet'), findsOneWidget);
      });
    }

    testWidgets('eine freie Fläche zeigt den Listenpreis', (tester) async {
      await zeige(
        tester,
        const Size(390, 900),
        WerbeflaecheKarte(
          flaeche: const {
            'id': 'y',
            'automat': 'BS24-002',
            'standort': 'Osterweddingen',
            'position': 'front',
            'listenpreis_monat': 49.0,
            'betriebszustand': 'nutzbar',
            'frei': true,
            'vertrag': null,
          },
          onTap: () {},
        ),
      );
      expect(tester.takeException(), isNull);
      expect(find.text('frei'), findsOneWidget);
      expect(find.textContaining('Listenpreis'), findsOneWidget);
    });

    testWidgets('eine gesperrte Fläche heisst nicht „frei"', (tester) async {
      await zeige(
        tester,
        const Size(390, 900),
        WerbeflaecheKarte(
          flaeche: const {
            'id': 'z',
            'automat': 'BS24-003',
            'position': 'oben',
            'listenpreis_monat': 0,
            'betriebszustand': 'gesperrt',
            'frei': false,
            'vertrag': null,
          },
          onTap: () {},
        ),
      );
      expect(find.text('gesperrt'), findsOneWidget);
      expect(find.text('frei'), findsNothing);
    });
  });
}
