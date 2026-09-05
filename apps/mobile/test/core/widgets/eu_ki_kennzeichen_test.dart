import 'package:boerdesnack24/core/widgets/design_system/eu_ki_kennzeichen.dart';
import 'package:boerdesnack24/core/widgets/design_system/product_image.dart';
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

Widget _rahmen(Widget kind) => MaterialApp(
      home: Scaffold(body: Center(child: kind)),
    );

void main() {
  group('EuKiKennzeichen', () {
    testWidgets('erzeugtes Bild nutzt das Motiv AI GENERATED', (tester) async {
      await tester.pumpWidget(
        _rahmen(
          const EuKiKennzeichen(herkunft: KiHerkunft.vollstaendigErzeugt),
        ),
      );
      final bild = tester.widget<Image>(find.byType(Image));
      expect(
        (bild.image as AssetImage).assetName,
        'assets/images/ki/eu-ki-generiert.png',
      );
    });

    testWidgets('bearbeitetes Bild nutzt das Motiv AI MODIFIED',
        (tester) async {
      await tester.pumpWidget(
        _rahmen(
          const EuKiKennzeichen(herkunft: KiHerkunft.teilweiseBearbeitet),
        ),
      );
      final bild = tester.widget<Image>(find.byType(Image));
      expect(
        (bild.image as AssetImage).assetName,
        'assets/images/ki/eu-ki-bearbeitet.png',
      );
    });

    testWidgets('kompakt nutzt das Grundsymbol', (tester) async {
      await tester.pumpWidget(
        _rahmen(
          const EuKiKennzeichen(
            herkunft: KiHerkunft.vollstaendigErzeugt,
            kompakt: true,
          ),
        ),
      );
      final bild = tester.widget<Image>(find.byType(Image));
      expect(
        (bild.image as AssetImage).assetName,
        'assets/images/ki/eu-ki-basis.png',
      );
    });

    testWidgets('der deutsche Wortlaut steht im Vorlesetext', (tester) async {
      // Das Motiv ist englisch beschriftet. Wer es nicht sieht, bekommt die
      // Offenlegung nur ueber diesen Text — deshalb ist er der eigentliche
      // Pruefgegenstand, nicht das Bild.
      await tester.pumpWidget(
        _rahmen(
          const EuKiKennzeichen(herkunft: KiHerkunft.vollstaendigErzeugt),
        ),
      );
      final semantik = tester.getSemantics(find.byType(EuKiKennzeichen));
      expect(
        semantik.label,
        'Vollständig mit künstlicher Intelligenz erzeugt.',
      );
    });

    testWidgets('mit Ziel weist der Vorlesetext auf die zweite Ebene hin',
        (tester) async {
      await tester.pumpWidget(
        _rahmen(
          EuKiKennzeichen(
            herkunft: KiHerkunft.teilweiseBearbeitet,
            onTap: () {},
          ),
        ),
      );
      final semantik = tester.getSemantics(find.byType(EuKiKennzeichen));
      expect(semantik.label, contains('Mit künstlicher Intelligenz'));
      expect(semantik.label, contains('Mehr dazu'));
    });

    testWidgets('ein Tipp oeffnet die zweite Ebene', (tester) async {
      var geoeffnet = 0;
      await tester.pumpWidget(
        _rahmen(
          EuKiKennzeichen(
            herkunft: KiHerkunft.vollstaendigErzeugt,
            onTap: () => geoeffnet++,
          ),
        ),
      );
      await tester.tap(find.byType(EuKiKennzeichen));
      expect(geoeffnet, 1);
    });

    testWidgets('die Tippflaeche ist mindestens 44 Punkt hoch',
        (tester) async {
      await tester.pumpWidget(
        _rahmen(
          EuKiKennzeichen(
            herkunft: KiHerkunft.vollstaendigErzeugt,
            onTap: () {},
          ),
        ),
      );
      expect(
        tester.getSize(find.byType(InkWell)).height,
        greaterThanOrEqualTo(44),
      );
    });
  });

  group('ProductImage mit Kennzeichnung', () {
    testWidgets('ohne Herkunft erscheint kein Symbol', (tester) async {
      await tester.pumpWidget(
        _rahmen(const ProductImage(size: 200, productName: 'Riegel')),
      );
      expect(find.byType(EuKiKennzeichen), findsNothing);
    });

    testWidgets('mit Herkunft liegt das Symbol auf dem Bild', (tester) async {
      await tester.pumpWidget(
        _rahmen(
          const ProductImage(
            size: 200,
            productName: 'Riegel',
            kiHerkunft: KiHerkunft.teilweiseBearbeitet,
          ),
        ),
      );
      expect(find.byType(EuKiKennzeichen), findsOneWidget);
      // Im Bild, nicht darunter: sonst geht es beim Zuschneiden verloren.
      expect(
        find.ancestor(
          of: find.byType(EuKiKennzeichen),
          matching: find.byType(Stack),
        ),
        findsWidgets,
      );
    });

    testWidgets('auf einem Vorschaubild schaltet es aufs Grundsymbol',
        (tester) async {
      await tester.pumpWidget(
        _rahmen(
          const ProductImage(
            size: 64,
            productName: 'Riegel',
            kiHerkunft: KiHerkunft.teilweiseBearbeitet,
          ),
        ),
      );
      expect(
        tester
            .widget<EuKiKennzeichen>(find.byType(EuKiKennzeichen))
            .kompakt,
        isTrue,
      );
    });

    testWidgets('auf grosser Flaeche bleibt die beschriftete Pille',
        (tester) async {
      await tester.pumpWidget(
        _rahmen(
          const ProductImage(
            size: 200,
            productName: 'Riegel',
            kiHerkunft: KiHerkunft.teilweiseBearbeitet,
          ),
        ),
      );
      expect(
        tester
            .widget<EuKiKennzeichen>(find.byType(EuKiKennzeichen))
            .kompakt,
        isFalse,
      );
    });
  });
}
