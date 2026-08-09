import 'package:boerdesnack24/features/legal/presentation/legal_screens.dart';
import 'package:boerdesnack24/features/legal/presentation/legal_texts.dart';
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

/// Barrierefreiheits-Wächter für die Rechtsseiten.
///
/// Warum eigens für diese Seiten: Sie sind der einzige Ort, an dem jemand
/// nachlesen kann, wie er widerruft, kündigt, Auskunft verlangt oder eine
/// Barriere meldet. Eine Rechtsseite, die sich nicht vorlesen lässt, nimmt
/// genau denen den Zugang, für die die Erklärung geschrieben wurde.
///
/// Die Barrierefreiheitserklärung sagt zu, dass die automatische Prüfung
/// „die Bausteine des Design-Systems und die Rechtstexte" abdeckt. Vor
/// diesem Test stimmte der zweite Teil nicht. Eine Zusage in einem
/// Rechtstext, die kein Test trägt, ist eine Behauptung — und Behauptungen
/// über Barrierefreiheit sind genau die, die man nicht aufstellen sollte.
///
/// Schlägt hier etwas fehl, ist das ein echter Befund. Bitte den Screen
/// reparieren, nicht den Test lockern.
Future<void> pumpLegal(WidgetTester tester, Widget screen) async {
  await tester.pumpWidget(MaterialApp(home: screen));
  await tester.pumpAndSettle();
}

Future<void> expectAccessible(WidgetTester tester) async {
  final handle = tester.ensureSemantics();
  await expectLater(tester, meetsGuideline(androidTapTargetGuideline));
  await expectLater(tester, meetsGuideline(iOSTapTargetGuideline));
  await expectLater(tester, meetsGuideline(labeledTapTargetGuideline));
  await expectLater(tester, meetsGuideline(textContrastGuideline));
  handle.dispose();
}

void main() {
  const seiten = <String, Widget>{
    'Impressum': ImprintScreen(),
    'Datenschutzerklärung': PrivacyScreen(),
    'Nutzungsbedingungen': TermsScreen(),
    'Widerrufsbelehrung': WithdrawalScreen(),
    'Zahlungsinformationen': PaymentInfoScreen(),
    'Cookies und Tracking': CookiesScreen(),
    'Barrierefreiheit': AccessibilityScreen(),
  };

  seiten.forEach((name, screen) {
    testWidgets('$name: Kontrast, Tippziele und Beschriftung', (tester) async {
      await pumpLegal(tester, screen);
      await expectAccessible(tester);
    });
  });

  testWidgets('Rechtstexte sind vorlesbarer Text, kein Bild', (tester) async {
    // Screenreader können nur lesen, was als Text im Baum steht. Ein
    // gerendertes Bild mit Gesetzestext wäre für sie stumm.
    await pumpLegal(tester, const AccessibilityScreen());
    expect(find.byType(SelectableText), findsOneWidget);
  });

  test('Jede Rechtsseite hat einen nicht-leeren Text', () {
    // Ein leerer Rechtstext fällt in der Oberfläche nicht auf — die Seite
    // sieht dann nur kurz aus.
    const texte = <String, String>{
      'imprint': LegalTexts.imprint,
      'privacy': LegalTexts.privacy,
      'terms': LegalTexts.terms,
      'withdrawal': LegalTexts.withdrawal,
      'payment': LegalTexts.payment,
      'cookies': LegalTexts.cookies,
      'accessibility': LegalTexts.accessibility,
    };
    texte.forEach((name, text) {
      expect(text.trim().length, greaterThan(200), reason: '$name ist zu kurz');
    });
  });

  test('Pflichtangaben stehen im Impressum', () {
    // Diese vier Angaben sind der Kern von § 5 DDG. Fällt eine beim
    // Umformulieren heraus, fällt es hier auf und nicht bei einer Abmahnung.
    for (final pflicht in [
      'Bördesnack24 GbR',
      'Sülldorfer Str. 3A',
      'boerdesnack24@gmail.com',
      'DE 458804058',
    ]) {
      expect(LegalTexts.imprint, contains(pflicht));
    }
  });

  test('Widerrufsbelehrung enthält Frist, Adressat und Musterformular', () {
    expect(LegalTexts.withdrawal, contains('vierzehn Tagen'));
    expect(LegalTexts.withdrawal, contains('Bördesnack24 GbR'));
    expect(LegalTexts.withdrawal, contains('Muster-Widerrufsformular'));
  });
}
