import 'package:bs24_kern/features/auth/presentation/screens/register_screen.dart';
import 'package:bs24_kern/l10n/generated/app_localizations.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_test/flutter_test.dart';

/// Die Registrierung ist der erste Bildschirm, den ein Kunde von
/// Bördesnack24 sieht — über die Landingpage oder aus dem Store. Geprüft
/// wird deshalb beides: dass der Markenkopf steht und dass die
/// Pflichtangaben **am Feld** melden statt als SnackBar, die nach Sekunden
/// weg ist und die kein Screenreader vorliest.
void main() {
  Widget maske() => const ProviderScope(
        child: MaterialApp(
          localizationsDelegates: AppLocalizations.localizationsDelegates,
          supportedLocales: AppLocalizations.supportedLocales,
          locale: Locale('de'),
          home: RegisterScreen(),
        ),
      );

  /// Setzt einen echten Telefon-Viewport. Der Standard im Test ist
  /// 800 × 600 — auf dieser Fläche fällt kein einziges Überlaufproblem auf,
  /// das ein Nutzer auf einem 360-Punkte-Telefon zuerst sieht.
  void viewport(WidgetTester tester, Size groesse) {
    tester.view.physicalSize = groesse;
    tester.view.devicePixelRatio = 1.0;
    addTearDown(tester.view.reset);
  }

  group('Kopfbereich', () {
    testWidgets('zeigt Begrüßung, Wortmarke und Claim', (tester) async {
      viewport(tester, const Size(360, 2400));
      await tester.pumpWidget(maske());
      await tester.pumpAndSettle();

      expect(find.text('Herzlich willkommen'), findsOneWidget);
      expect(find.text('Kundenkonto erstellen'), findsOneWidget);
      expect(find.text('Genießen. Geben. Gutes tun.'), findsOneWidget);
      // Wortmarke: „BÖRDESNACK" und „24" stehen als zwei Textstücke
      // nebeneinander, damit die 24 in Gold gesetzt werden kann.
      expect(find.text('BÖRDESNACK'), findsOneWidget);
      expect(find.text('24'), findsOneWidget);
    });
  });

  group('Kein Überlauf auf schmalen Geräten', () {
    testWidgets('Privatkunde bei 360 Punkten Breite', (tester) async {
      viewport(tester, const Size(360, 2400));
      await tester.pumpWidget(maske());
      await tester.pumpAndSettle();
      expect(tester.takeException(), isNull);
    });

    testWidgets('Unternehmer bei 360 Punkten Breite', (tester) async {
      viewport(tester, const Size(360, 3600));
      await tester.pumpWidget(maske());
      await tester.pumpAndSettle();

      await tester.tap(find.text('Unternehmer'));
      await tester.pumpAndSettle();

      expect(find.text('Unternehmensangaben'), findsOneWidget);
      expect(tester.takeException(), isNull);
    });

    testWidgets('sehr schmal: 280 Punkte', (tester) async {
      // Kein theoretischer Fall: unter Android "Anzeigegröße: sehr groß"
      // schrumpft ein 360-Punkte-Gerät auf rund 300 Punkte. Die Wortmarke
      // ist eine Row mit fester Schriftgröße und lief hier rechts heraus.
      viewport(tester, const Size(280, 2400));
      await tester.pumpWidget(maske());
      await tester.pumpAndSettle();
      expect(tester.takeException(), isNull);
    });

    testWidgets('Telefon im Querformat', (tester) async {
      // Querformat wird fast immer vergessen und bricht zuerst.
      viewport(tester, const Size(740, 360));
      await tester.pumpWidget(maske());
      await tester.pumpAndSettle();
      expect(tester.takeException(), isNull);
    });
  });

  group('Pflichtangaben melden am Feld', () {
    testWidgets('leeres Formular zeigt Fehler an den Feldern', (tester) async {
      viewport(tester, const Size(400, 2400));
      await tester.pumpWidget(maske());
      await tester.pumpAndSettle();

      await tester.tap(find.widgetWithText(FilledButton, 'Konto erstellen'));
      await tester.pumpAndSettle();

      expect(find.text('Pflichtfeld'), findsWidgets);
      expect(find.text('Bitte Geburtsdatum wählen'), findsOneWidget);
      // Gegenprobe: die frühere Sammelmeldung als SnackBar gibt es nicht mehr.
      expect(find.byType(SnackBar), findsNothing);
    });

    testWidgets('Unternehmerfelder melden einzeln, nicht als Sammelhinweis',
        (tester) async {
      viewport(tester, const Size(400, 3600));
      await tester.pumpWidget(maske());
      await tester.pumpAndSettle();

      await tester.tap(find.text('Unternehmer'));
      await tester.pumpAndSettle();
      await tester.tap(find.widgetWithText(FilledButton, 'Konto erstellen'));
      await tester.pumpAndSettle();

      expect(find.text('Bitte den Firmennamen angeben'), findsOneWidget);
      expect(find.text('Bitte die Anschrift angeben'), findsOneWidget);
      expect(find.text('Bitte die PLZ angeben'), findsOneWidget);
      expect(find.text('Bitte den Ort angeben'), findsOneWidget);
      expect(find.text('Bitte die Steuernummer angeben'), findsOneWidget);
      expect(find.byType(SnackBar), findsNothing);
    });

    testWidgets('abweichende Wiederholung meldet am Feld', (tester) async {
      viewport(tester, const Size(400, 2400));
      await tester.pumpWidget(maske());
      await tester.pumpAndSettle();

      final felder = find.byType(TextFormField);
      await tester.enterText(felder.at(2), 'Abcdefg1'); // Passwort
      await tester.enterText(felder.at(3), 'Abcdefg2'); // Wiederholung
      await tester.tap(find.widgetWithText(FilledButton, 'Konto erstellen'));
      await tester.pumpAndSettle();

      expect(
        find.text('Die Passwörter stimmen nicht überein.'),
        findsOneWidget,
      );
    });
  });

  group('Bedienhilfen', () {
    testWidgets('Passwort lässt sich sichtbar machen', (tester) async {
      viewport(tester, const Size(400, 2400));
      await tester.pumpWidget(maske());
      await tester.pumpAndSettle();

      expect(find.byTooltip('Passwort anzeigen'), findsNWidgets(2));
      await tester.tap(find.byTooltip('Passwort anzeigen').first);
      await tester.pumpAndSettle();
      expect(find.byTooltip('Passwort verbergen'), findsOneWidget);
    });

    testWidgets('das Geburtsdatum warnt vor der Endgültigkeit', (tester) async {
      viewport(tester, const Size(400, 2400));
      await tester.pumpWidget(maske());
      await tester.pumpAndSettle();

      // Der Trigger trg_profiles_birth_date_immutable weist jede spätere
      // Änderung ab. Wer sich vertippt, braucht eine Korrektur von Hand —
      // das gehört vorher gesagt.
      expect(
        find.textContaining('Später nicht mehr änderbar'),
        findsOneWidget,
      );
    });
  });
}
