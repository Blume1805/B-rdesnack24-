import 'package:boerdesnack24/features/management/presentation/screens/bildregister_screen.dart';
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:intl/date_symbol_data_local.dart';

/// Die Kennzahlen und die Eintragskarte des Bildregisters.
///
/// Anlass (26.08.2026): Vier Kacheln standen in einer festen Reihe. Auf dem
/// Telefon blieben je Kachel rund 18 dp für die Beschriftung, und „zu
/// kennzeichnen" brach buchstabenweise senkrecht um — vom Auftraggeber am
/// Gerät gemeldet, nicht in einem Test aufgefallen.
///
/// Deshalb diese Tests: Sie rendern in echter Telefonbreite (390 dp wie das
/// gemeldete Gerät, 320 dp als schmalster realistischer Fall) und schlagen
/// an, sobald etwas überläuft. Der erste Anlauf mit einem zweispaltigen
/// Raster hat genau hier noch einmal versagt — bei 390 dp passte es, bei
/// 320 dp nicht.
void main() {
  // Die Karte formatiert Datumsangaben mit `de_DE`. Ohne diese Zeile wirft
  // sie beim Bauen — was im ersten Lauf wie ein Layoutfehler aussah.
  setUpAll(() => initializeDateFormatting('de_DE'));

  Future<void> zeige(WidgetTester tester, Size groesse) async {
    tester.view.physicalSize = groesse;
    tester.view.devicePixelRatio = 1.0;
    addTearDown(tester.view.reset);

    await tester.pumpWidget(
      const MaterialApp(
        home: Scaffold(
          body: SingleChildScrollView(
            padding: EdgeInsets.all(20),
            child: BildregisterKennzahlen(
              werte: {
                'gesamt': 12,
                'mit_ki': 5,
                'kennzeichnungspflicht': 2,
                'ohne_freigabe': 3,
              },
            ),
          ),
        ),
      ),
    );
    await tester.pumpAndSettle();
  }

  testWidgets('läuft in Telefonbreite nicht über', (tester) async {
    // 390 dp entspricht einem iPhone 14/15 — das Gerät aus der Meldung.
    await zeige(tester, const Size(390, 844));

    expect(tester.takeException(), isNull);
    for (final beschriftung in [
      'Dokumentierte Bilder',
      'davon mit KI bearbeitet',
      'zu kennzeichnen',
      'ohne Freigabe',
    ]) {
      expect(find.text(beschriftung), findsOneWidget, reason: beschriftung);
    }
    // Und die Zahlen selbst, damit der Test nicht nur Beschriftungen prüft.
    for (final zahl in ['12', '5', '2', '3']) {
      expect(find.text(zahl), findsOneWidget, reason: zahl);
    }
  });

  testWidgets('auch auf einem schmalen Telefon', (tester) async {
    // 320 dp — iPhone SE der ersten Generationen, die schmalste Breite,
    // die realistisch vorkommt.
    await zeige(tester, const Size(320, 568));
    expect(tester.takeException(), isNull);
  });

  Future<void> zeigeKarte(WidgetTester tester, Size groesse) async {
    tester.view.physicalSize = groesse;
    tester.view.devicePixelRatio = 1.0;
    addTearDown(tester.view.reset);

    await tester.pumpWidget(
      MaterialApp(
        home: Scaffold(
          body: SingleChildScrollView(
            padding: const EdgeInsets.all(20),
            child: BildregisterKarte(
              onTap: () {},
              // Bewusst der unangenehmste Fall: langer Produktname, lange
              // Bearbeitung, Kennzeichnungspflicht und ein Freigabename.
              bild: const {
                'produkt': 'Warmes Getränk auf Holztisch, Sonderedition',
                'originalfoto': 'IMG_1301.JPG',
                'fotograf': 'Bördesnack24',
                'aufnahmedatum': '2026-08-20',
                'ki_verwendet': true,
                'ki_system': 'ChatGPT',
                'bearbeitung': 'Umgebung erzeugt (Café-Szene), freigestellt',
                'produkt_veraendert': false,
                'kennzeichnung_noetig': true,
                'freigegeben_von': 'Philipp Blume',
                'freigabe_am': '2026-08-21',
              },
            ),
          ),
        ),
      ),
    );
    await tester.pumpAndSettle();
  }

  testWidgets('Eintragskarte läuft in Telefonbreite nicht über',
      (tester) async {
    await zeigeKarte(tester, const Size(390, 844));
    expect(tester.takeException(), isNull);
    expect(find.text('Kennzeichnung erforderlich'), findsOneWidget);
  });

  testWidgets('Eintragskarte auch auf einem schmalen Telefon', (tester) async {
    await zeigeKarte(tester, const Size(320, 568));
    expect(tester.takeException(), isNull);
  });

  testWidgets('Golden: Eintragskarte in Telefonbreite', (tester) async {
    await zeigeKarte(tester, const Size(390, 500));
    await expectLater(
      find.byType(BildregisterKarte),
      matchesGoldenFile('goldens/bildregister_karte.png'),
    );
  });

  testWidgets('Golden: Kennzahlen in Telefonbreite', (tester) async {
    await zeige(tester, const Size(390, 500));
    await expectLater(
      find.byType(BildregisterKennzahlen),
      matchesGoldenFile('goldens/bildregister_kennzahlen.png'),
    );
  });
}
