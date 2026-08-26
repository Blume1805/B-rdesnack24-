import 'package:boerdesnack24/features/auth/presentation/controllers/auth_providers.dart';
import 'package:boerdesnack24/features/management/presentation/management_screen.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_test/flutter_test.dart';

/// Der Verwaltungsbereich seit dem 25.08.2026: fünf Oberbegriffe, die ihre
/// Funktionen aufklappen. Vorgabe des Auftraggebers.
void main() {
  // Volle Gesellschafter-Rechte, damit ALLE Einträge gebaut werden. Ein
  // Build-Fehler in irgendeinem Eintrag fiele hier sofort auf, statt als
  // graues Release-ErrorWidget auf dem Telefon.
  const alleRechte = <String>{
    'inventory.view',
    'inventory.edit',
    'haccp.fill',
    'haccp.temperature',
    'haccp.cleaning',
    'haccp.disposal',
    'haccp.maintenance',
    'cash.collect',
    'documents.view',
    'documents.edit',
    'employees.manage',
    'customers.manage',
    'finance.export',
    // Beide Rollen, die diesen Bereich sehen (system_admin, shareholder),
    // tragen laut role_permissions beides. Ohne finance.view fehlte die
    // Kachel „Anlagen", und der Test hätte einen Zustand geprüft, den es
    // in der Anwendung nicht gibt.
    'finance.view',
  };

  Future<void> zeige(WidgetTester tester, Set<String> rechte) async {
    tester.view.physicalSize = const Size(1024, 2400);
    tester.view.devicePixelRatio = 1.0;
    addTearDown(tester.view.reset);

    await tester.pumpWidget(
      ProviderScope(
        overrides: [
          currentPermissionsProvider.overrideWith((ref) async => rechte),
        ],
        child: const MaterialApp(home: Scaffold(body: ManagementScreen())),
      ),
    );
    await tester.pumpAndSettle();
  }

  testWidgets('zeigt fünf Oberbegriffe, zugeklappt', (tester) async {
    await zeige(tester, alleRechte);

    for (final titel in [
      'Protokolle',
      'Vorgänge & Prozesse',
      'Serviceanliegen',
      'Dokumente',
      'Steuern',
    ]) {
      expect(find.text(titel), findsOneWidget, reason: titel);
    }

    // Zugeklappt heisst zugeklappt: Die Funktionen dürfen noch nicht da
    // sein, sonst wäre es wieder die Kachelwand von vorher.
    expect(find.text('Befüllung'), findsNothing);
    expect(find.text('Geldentnahme'), findsNothing);
  });

  testWidgets('Antippen klappt die Funktionen auf', (tester) async {
    await zeige(tester, alleRechte);

    await tester.tap(find.text('Protokolle'));
    await tester.pumpAndSettle();

    for (final kachel in [
      'Befüllung',
      'Reinigung',
      'Temperatur',
      'Wartung',
      'Vernichtung',
      'Geldentnahme',
    ]) {
      expect(find.text(kachel), findsOneWidget, reason: kachel);
    }

    // Und wieder zu.
    await tester.tap(find.text('Protokolle'));
    await tester.pumpAndSettle();
    expect(find.text('Befüllung'), findsNothing);
  });

  testWidgets('Steuern führt die Anlagen', (tester) async {
    // „Im Bereich Verwaltung unter dem Oberbegriff Steuern möchte ich noch
    // einen Unterbegriff Anlagen haben."
    await zeige(tester, alleRechte);

    await tester.tap(find.text('Steuern'));
    await tester.pumpAndSettle();

    expect(find.text('Anlagen'), findsOneWidget);
    expect(find.text('Übersichten zum Jahresabschluss'), findsOneWidget);
  });

  testWidgets('Vorgänge & Prozesse führt die Bilder', (tester) async {
    // „Diese Übersicht soll bei Aufgaben und Prozesse als Unterbegriff
    // Bilder entstehen." Vorgabe des Auftraggebers vom 26.08.2026.
    await zeige(tester, alleRechte);

    await tester.tap(find.text('Vorgänge & Prozesse'));
    await tester.pumpAndSettle();

    expect(find.text('Bilder'), findsOneWidget);
    expect(
      find.text('Herkunft und Bearbeitung je Produktbild'),
      findsOneWidget,
    );
  });

  testWidgets('ohne inventory.view keine Bilder-Kachel', (tester) async {
    // Die Kachel hängt an derselben Berechtigung wie der Produktkatalog.
    // Ohne den Gegenprobe-Test prüfte der obige nur, dass ein Text
    // irgendwo steht — nicht, dass die Sichtbarkeit wirkt.
    await zeige(tester, alleRechte.difference({'inventory.view'}));

    await tester.tap(find.text('Vorgänge & Prozesse'));
    await tester.pumpAndSettle();

    expect(find.text('Bilder'), findsNothing);
  });

  testWidgets('Inventur gibt es nur noch einmal', (tester) async {
    // Vorher standen zwei Kacheln „Inventur" nebeneinander, mit demselben
    // Symbol. Der Auftraggeber: „Inventur je Automat soll künftig über die
    // Inventur abgebildet werden, also keine separate Funktion."
    await zeige(tester, alleRechte);

    await tester.tap(find.text('Steuern'));
    await tester.pumpAndSettle();

    expect(find.text('Inventur'), findsOneWidget);
    expect(find.text('Bestand je Automat und FIFO-Report'), findsOneWidget);
  });

  testWidgets('jede Kachel nimmt Unterlagen an', (tester) async {
    // „Über Upload oder per Foto soll weitere Unterlagen in die jeweilige
    // Kachel hinzugefügt werden können."
    await zeige(tester, alleRechte);

    await tester.tap(find.text('Serviceanliegen'));
    await tester.pumpAndSettle();

    expect(
      find.bySemanticsLabel('Unterlage zu Reklamationen hinzufügen'),
      findsOneWidget,
    );
  });

  testWidgets('bleibt nur eine Gruppe, ist sie gleich offen', (tester) async {
    // Ein Mitarbeiter ohne weitere Rechte sieht nur „Zu signieren". Eine
    // einzelne zugeklappte Überschrift wäre ein Klick ohne Wahl.
    await zeige(tester, const <String>{});

    expect(find.text('Vorgänge & Prozesse'), findsOneWidget);
    expect(find.text('Zu signieren'), findsOneWidget);
  });

  testWidgets('ohne Rechte gar keine Gruppe', (tester) async {
    // Gegenprobe zur vorherigen: „Zu signieren" ist für alle sichtbar, also
    // kann der leere Zustand hier nicht auftreten. Er bleibt trotzdem
    // erreichbar, wenn dieser Eintrag einmal ein Recht bekommt.
    await zeige(tester, const <String>{});
    expect(find.text('Keine Module freigeschaltet'), findsNothing);
  });
}
