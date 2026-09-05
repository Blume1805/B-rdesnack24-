import 'package:boerdesnack24/features/admin/presentation/controllers/admin_providers.dart';
import 'package:boerdesnack24/features/admin/presentation/screens/advertising_screen.dart';
import 'package:boerdesnack24/features/admin/presentation/screens/businesses_admin_screen.dart';
import 'package:boerdesnack24/features/admin/presentation/screens/campaigns_screen.dart';
import 'package:boerdesnack24/features/admin/presentation/screens/email_admin_screen.dart';
import 'package:boerdesnack24/features/admin/presentation/screens/leads_screen.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_test/flutter_test.dart';

/// Verwaltungsmodule des Werbegeschäfts.
///
/// Alle vier Bereiche haben derzeit 0 Zeilen. Die Tests prüfen deshalb vor
/// allem die Zustände, die dabei entstehen: ehrlicher Leerzustand und
/// verständlicher Fehler — nicht Platzhalter und nicht ein Fehlercode.
void main() {
  Future<void> zeige(
    WidgetTester tester,
    Widget screen,
    List<Override> overrides,
  ) async {
    tester.view.physicalSize = const Size(1024, 2400);
    tester.view.devicePixelRatio = 1.0;
    addTearDown(tester.view.reset);

    await tester.pumpWidget(
      ProviderScope(
        overrides: overrides,
        child: MaterialApp(home: screen),
      ),
    );
    await tester.pumpAndSettle();
  }

  /// Ein abgewiesener Zugriff, wie ihn die Datenbank meldet.
  Object keineBerechtigung() =>
      Exception('PostgrestException(code: 42501, message: permission denied)');

  group('Leerzustände sagen die Wahrheit', () {
    testWidgets('Werbeflächen ohne Daten nennt „noch nicht in Betrieb"',
        (tester) async {
      await zeige(tester, const AdvertisingScreen(), [
        advertisingOverviewProvider.overrideWith(
          (ref) async => <String, dynamic>{
            'kennzahlen': <String, dynamic>{},
            'je_automat': <dynamic>[],
          },
        ),
      ]);

      expect(find.textContaining('Noch keine Werbeflächen'), findsOneWidget);
      expect(find.textContaining('noch nicht in Betrieb'), findsOneWidget);
    });

    testWidgets('Anfragen ohne Daten erfindet keine Beispielanfrage',
        (tester) async {
      await zeige(tester, const LeadsScreen(), [
        leadsProvider.overrideWith((ref) async => <Map<String, dynamic>>[]),
      ]);

      expect(find.textContaining('Noch keine Anfragen'), findsOneWidget);
    });

    testWidgets('Firmenkunden ohne Daten erklärt, warum es kein Formular gibt',
        (tester) async {
      await zeige(tester, const BusinessesAdminScreen(), [
        businessesProvider
            .overrideWith((ref) async => <Map<String, dynamic>>[]),
      ]);

      expect(find.textContaining('Noch kein Firmenkunde'), findsOneWidget);
      expect(find.textContaining('aus dem Vertrag'), findsOneWidget);
    });

    testWidgets('Kampagnen ohne Daten bleibt leer', (tester) async {
      await zeige(tester, const CampaignsScreen(), [
        campaignsProvider.overrideWith((ref) async => <Map<String, dynamic>>[]),
      ]);

      expect(find.textContaining('Noch keine Kampagne'), findsOneWidget);
    });
  });

  group('Abgewiesener Zugriff wird erklärt, nicht codiert', () {
    testWidgets('42501 zeigt eine Berechtigungsaussage ohne Fehlercode',
        (tester) async {
      await zeige(tester, const LeadsScreen(), [
        leadsProvider.overrideWith((ref) async => throw keineBerechtigung()),
      ]);

      expect(find.textContaining('Berechtigung'), findsOneWidget);
      expect(find.textContaining('42501'), findsNothing);
      expect(find.textContaining('PostgrestException'), findsNothing);
    });

    testWidgets('auch die Werbeflächen zeigen keinen Code', (tester) async {
      await zeige(tester, const AdvertisingScreen(), [
        advertisingOverviewProvider
            .overrideWith((ref) async => throw keineBerechtigung()),
      ]);

      expect(find.textContaining('42501'), findsNothing);
    });
  });

  group('Vorhandene Daten werden gezeigt', () {
    testWidgets('Kampagne erscheint mit Firma und Zustand', (tester) async {
      await zeige(tester, const CampaignsScreen(), [
        campaignsProvider.overrideWith(
          (ref) async => [
            <String, dynamic>{
              'id': 'c1',
              'name': 'Herbstaktion',
              'welt': 'analog',
              'status': 'pending_review',
              'von': '2026-09-01',
              'bis': '2026-10-31',
              'businesses': <String, dynamic>{'name': 'Muster GmbH'},
            },
          ],
        ),
        creativesProvider('c1')
            .overrideWith((ref) async => <Map<String, dynamic>>[]),
      ]);

      expect(find.text('Herbstaktion'), findsOneWidget);
      expect(find.textContaining('Muster GmbH'), findsOneWidget);
      expect(find.textContaining('ZUR PRÜFUNG'), findsOneWidget);
      expect(find.textContaining('Noch kein Werbemittel'), findsOneWidget);
    });

    testWidgets(
        'Firmenkunde ohne sevDesk-Nummer wird als Abrechnungsrisiko benannt',
        (tester) async {
      await zeige(tester, const BusinessesAdminScreen(), [
        businessesProvider.overrideWith(
          (ref) async => [
            <String, dynamic>{
              'id': 'b1',
              'name': 'Testfirma',
              'status': 'active',
              'sevdesk_contact_id': null,
            },
          ],
        ),
        businessMembersProvider('b1')
            .overrideWith((ref) async => <Map<String, dynamic>>[]),
        businessInvitationsProvider('b1')
            .overrideWith((ref) async => <Map<String, dynamic>>[]),
        invoiceRunsProvider('b1')
            .overrideWith((ref) async => <Map<String, dynamic>>[]),
      ]);

      expect(find.text('Testfirma'), findsOneWidget);
      expect(find.textContaining('Ohne sevDesk-Kontaktnummer'), findsOneWidget);
    });

    testWidgets('E-Mail-Vorlage ohne Inhalt gilt als Fassung aus dem Code',
        (tester) async {
      await zeige(tester, const EmailAdminScreen(), [
        emailLogStatsProvider.overrideWith(
          (ref) async => <String, dynamic>{
            'gesamt': 6,
            'ausgehend': 6,
            'eingehend': 0,
            'gescheitert': 0,
            'simuliert': 0,
          },
        ),
        emailOutboxStatsProvider
            .overrideWith((ref) async => <Map<String, dynamic>>[]),
        emailTemplatesProvider.overrideWith(
          (ref) async => [
            // Katalogeintrag ohne Inhalt: beschreibt nur, dass es die Mail
            // gibt. Er darf die Fassung aus dem Code NICHT ersetzen.
            <String, dynamic>{
              'key': 'abo_bestaetigung',
              'subject': '',
              'body_html': '',
              'is_active': true,
            },
          ],
        ),
      ]);

      expect(find.text('abo_bestaetigung'), findsOneWidget);
      expect(find.textContaining('FASSUNG AUS DEM CODE'), findsOneWidget);
    });
  });
}
