import 'package:boerdesnack24/features/auth/presentation/controllers/auth_providers.dart';
import 'package:boerdesnack24/features/management/presentation/management_screen.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  // Volle Admin-/Gesellschafter-Rechte, damit ALLE Modul-Kacheln gebaut
  // werden — ein Build-Fehler in irgendeinem Modul-Eintrag würde hier
  // (statt als graues Release-ErrorWidget) sofort auffallen.
  const allPerms = <String>{
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
  };

  testWidgets('ManagementScreen rendert alle Modul-Kacheln ohne Fehler',
      (tester) async {
    tester.view.physicalSize = const Size(1024, 2400);
    tester.view.devicePixelRatio = 1.0;
    addTearDown(tester.view.reset);

    await tester.pumpWidget(
      ProviderScope(
        overrides: [
          currentPermissionsProvider.overrideWith((ref) async => allPerms),
        ],
        child: const MaterialApp(home: Scaffold(body: ManagementScreen())),
      ),
    );
    await tester.pumpAndSettle();

    expect(find.text('Betriebsprotokolle'), findsOneWidget);
    expect(find.text('Kündigungen'), findsOneWidget);
    expect(find.text('Dokumente'), findsOneWidget);
    expect(find.text('Zu signieren'), findsOneWidget);
  });
}
