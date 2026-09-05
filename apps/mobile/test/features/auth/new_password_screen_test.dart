import 'package:boerdesnack24/core/router/app_router.dart';
import 'package:boerdesnack24/features/auth/presentation/screens/new_password_screen.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_test/flutter_test.dart';

Future<void> _zeigen(WidgetTester tester) async {
  await tester.pumpWidget(
    const ProviderScope(
      child: MaterialApp(home: Scaffold(body: NewPasswordForm())),
    ),
  );
  await tester.pump();
}

void main() {
  group('Maske für das neue Passwort', () {
    test('die Route ist offen, nicht auf den Auth-Zustand beschränkt', () {
      // Der eigentliche Fehler vom 04.09.2026 lag nicht in der Maske,
      // sondern in der Weiche: ein Wiederherstellungslink meldet an, und
      // eine Route unter den Auth-Routen wird für Angemeldete auf die
      // Startseite umgeleitet. Wer hier etwas verschiebt, soll darüber
      // stolpern.
      expect(AppRoutes.newPassword, '/passwort-neu');
      expect(AppRoutes.newPassword, isNot(AppRoutes.forgotPassword));
    });

    testWidgets('zeigt zwei Eingaben und einen Speichern-Knopf',
        (tester) async {
      await _zeigen(tester);
      expect(find.byType(TextFormField), findsNWidgets(2));
      expect(find.text('Passwort speichern'), findsOneWidget);
    });

    testWidgets('zu kurzes Passwort wird abgewiesen', (tester) async {
      await _zeigen(tester);
      await tester.enterText(find.byType(TextFormField).first, 'kurz1');
      await tester.enterText(find.byType(TextFormField).last, 'kurz1');
      await tester.tap(find.text('Passwort speichern'));
      await tester.pump();
      expect(find.text('Mindestens 10 Zeichen.'), findsWidgets);
    });

    testWidgets('Passwort ohne Ziffer wird abgewiesen', (tester) async {
      await _zeigen(tester);
      await tester.enterText(find.byType(TextFormField).first, 'nurbuchstaben');
      await tester.enterText(find.byType(TextFormField).last, 'nurbuchstaben');
      await tester.tap(find.text('Passwort speichern'));
      await tester.pump();
      expect(find.text('Mindestens eine Ziffer.'), findsWidgets);
    });

    testWidgets('zwei verschiedene Eingaben werden abgewiesen',
        (tester) async {
      await _zeigen(tester);
      await tester.enterText(find.byType(TextFormField).first, 'Guteswort12');
      await tester.enterText(find.byType(TextFormField).last, 'Andereswort12');
      await tester.tap(find.text('Passwort speichern'));
      await tester.pump();
      expect(
        find.text('Die beiden Eingaben stimmen nicht überein.'),
        findsOneWidget,
      );
    });

    testWidgets('das Passwort ist zunächst verdeckt und lässt sich zeigen',
        (tester) async {
      await _zeigen(tester);
      TextField feld() => tester.widget<TextField>(find.byType(TextField).first);
      expect(feld().obscureText, isTrue);
      await tester.tap(find.byIcon(Icons.visibility_outlined));
      await tester.pump();
      expect(feld().obscureText, isFalse);
    });

    testWidgets('fragt NICHT nach dem alten Passwort', (tester) async {
      // Bei der Wiederherstellung ist der Link der Nachweis, und ein frisch
      // angelegtes Konto hat gar kein altes Passwort. Eine Abfrage wäre
      // keine zusätzliche Sicherheit, sondern eine Sperre.
      await _zeigen(tester);
      expect(find.textContaining('Aktuelles Passwort'), findsNothing);
      expect(find.textContaining('Altes Passwort'), findsNothing);
    });
  });
}
