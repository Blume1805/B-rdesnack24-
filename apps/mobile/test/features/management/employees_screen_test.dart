// Befund Philipp 18.11.2026: Die Mitarbeiterliste zeigte auch Kundenkonten
// und gelöschte Konten. Geprüft wird die Anfrage an die Datenbank (der
// eigentliche Filter) und die Anzeige.
import 'dart:convert';

import 'package:boerdesnack24/core/di/providers.dart';
import 'package:boerdesnack24/features/management/presentation/screens/employees_screen.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:http/http.dart' as http;
import 'package:http/testing.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

void main() {
  testWidgets('Mitarbeiterliste fragt nur interne, nicht gelöschte Konten ab',
      (tester) async {
    Uri? anfrage;
    final client = SupabaseClient(
      'https://test.invalid',
      'anon',
      httpClient: MockClient((r) async {
        anfrage = r.url;
        return http.Response(
          jsonEncode([
            {
              'id': '1',
              'email': 'gs@example.invalid',
              'full_name': 'Gesellschafterin',
              'role': 'shareholder',
              'status': 'active',
            },
          ]),
          200,
          headers: {'content-type': 'application/json'},
          request: r,
        );
      }),
      authOptions: const AuthClientOptions(autoRefreshToken: false),
    );

    await tester.pumpWidget(
      ProviderScope(
        overrides: [supabaseClientProvider.overrideWithValue(client)],
        child: const MaterialApp(home: EmployeesScreen()),
      ),
    );
    await tester.runAsync(
      () => Future<void>.delayed(const Duration(milliseconds: 50)),
    );
    await tester.pump();

    final q = anfrage!.queryParameters;
    expect(q['role'], 'in.("system_admin","shareholder","employee")');
    expect(q['status'], 'neq.archived');
    expect(q['deleted_at'], 'is.null');
    expect(find.text('gs@example.invalid · Gesellschafter'), findsOneWidget);
    expect(find.text('aktiv'), findsOneWidget);

    // Laufende Animationen der Kopfzeile ausklingen lassen.
    await tester.pumpWidget(const SizedBox());
    await tester.pump(const Duration(seconds: 5));
  });

  test('Bezeichnungen', () {
    expect(roleLabel('system_admin'), 'Administration');
    expect(roleLabel('customer'), 'customer');
    expect(statusLabel('invited'), 'eingeladen');
    expect(statusLabel('deactivated'), 'deaktiviert');
  });
}
