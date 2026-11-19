// Automaten pflegen (Wunsch Philipp 19.11.2026): anlegen, bearbeiten,
// Standort ändern, stilllegen. Die Berechtigung prüft die Datenbank
// (scripts/pruefumgebung/121_automaten_verwalten.sql); hier wird geprüft,
// was die App zeigt und was sie beim Speichern schickt.
import 'package:boerdesnack24/features/auth/presentation/controllers/auth_providers.dart';
import 'package:boerdesnack24/features/customer/presentation/screens/finder_tab.dart';
import 'package:boerdesnack24/features/management/data/automaten_verwaltung.dart';
import 'package:boerdesnack24/features/management/domain/entities/machine.dart';
import 'package:boerdesnack24/features/management/presentation/controllers/management_providers.dart';
import 'package:boerdesnack24/features/management/presentation/screens/inventory_screen.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

const _a1 = Machine(
  id: 'm1',
  code: 'A1',
  name: 'Snackautomat Sportplatz',
  type: 'snack',
  isCooled: false,
  city: 'Sülzetal',
  locationId: 's1',
  locationName: 'Sportplatz',
);
const _a2 = Machine(
  id: 'm2',
  code: 'A2',
  name: 'Getränkeautomat Halle',
  type: 'drink',
  isCooled: true,
  city: 'Wanzleben',
  status: 'inactive',
);

/// Ersetzt die Datenbank: merkt sich, was gespeichert würde.
/// `implements` statt `extends`: Ein echter SupabaseClient hinterließe im
/// Test laufende Zeitgeber.
class _FakeVerwaltung implements AutomatenVerwaltung {
  final aufrufe = <String>[];

  @override
  Future<Standort> standortSpeichern({
    String? id,
    required String name,
    String? street,
    String? zip,
    String? city,
    String? accessHours,
  }) async {
    aufrufe.add('standort:${id ?? 'neu'}:$name');
    return Standort(id: id ?? 's-neu', code: 'STO-009', name: name, city: city);
  }

  @override
  Future<List<Standort>> standorte() async => const [
        Standort(
          id: 's1',
          code: 'STO-005',
          name: 'Sportplatz',
          street: 'Am Sportplatz 1',
          zip: '39171',
          city: 'Sülzetal',
        ),
      ];

  @override
  Future<void> statusSetzen(String id, {required bool inBetrieb}) async {
    aufrufe.add('status:$id:$inBetrieb');
  }

  @override
  Future<void> automatSpeichern({
    String? id,
    required String code,
    required String name,
    required String type,
    required bool isCooled,
    required String status,
    Standort? standort,
  }) async {
    aufrufe.add('speichern:${id ?? 'neu'}:$code:$name:$type:$status:'
        '${standort?.id ?? '-'}');
  }
}

Widget _app(Widget kind, {required Set<String> rechte, _FakeVerwaltung? v}) =>
    ProviderScope(
      overrides: [
        currentPermissionsProvider.overrideWith((ref) async => rechte),
        machinesProvider.overrideWith((ref) async => const [_a1, _a2]),
        if (v != null) automatenVerwaltungProvider.overrideWithValue(v),
      ],
      child: MaterialApp(home: kind),
    );

void _telefon(WidgetTester t) {
  t.view.physicalSize = const Size(430, 932);
  t.view.devicePixelRatio = 1;
  addTearDown(t.view.reset);
}

void main() {
  group('Hilfsfunktionen', () {
    test('nächste Standort-Kennung', () {
      expect(naechsteStandortKennung(const []), 'STO-001');
      expect(
        naechsteStandortKennung(const ['STO-004', 'X', 'STO-002']),
        'STO-005',
      );
      expect(naechsteStandortKennung(const ['STO-004'], versatz: 2), 'STO-007');
    });

    test('Vorschlag für die Automaten-Kennung', () {
      expect(naechsteAutomatenKennung(const []), 'A1');
      expect(naechsteAutomatenKennung(const ['A1', 'a3', 'VORLAGE-A9']), 'A4');
    });

    test('Adresse ohne leere Teile', () {
      expect(
        standortAdresse('Weg 1', '39171', 'Sülzetal'),
        'Weg 1, 39171 Sülzetal',
      );
      expect(standortAdresse(null, '', 'Sülzetal'), 'Sülzetal');
      expect(standortAdresse(null, null, null), '');
    });

    test('Standort wird auf den Automaten gespiegelt, ohne Standort geleert',
        () {
      const s =
          Standort(id: 's1', code: 'STO-1', name: 'Halle', city: 'Wanzleben');
      expect(standortSpiegel(s)['location_id'], 's1');
      expect(standortSpiegel(s)['location_name'], 'Halle');
      expect(standortSpiegel(s)['city'], 'Wanzleben');
      expect(standortSpiegel(null).values.every((v) => v == null), isTrue);
    });

    test('Fehlermeldungen verständlich', () {
      expect(
        automatFehlerText(
          const PostgrestException(message: 'x', code: '23505'),
        ),
        contains('Kennung ist schon vergeben'),
      );
      expect(
        automatFehlerText(
          const PostgrestException(message: 'x', code: '42501'),
        ),
        contains('Berechtigung'),
      );
    });
  });

  testWidgets('Mit Recht: Hinzufügen, Menü, stillgelegter Automat abgesetzt',
      (t) async {
    _telefon(t);
    await t.pumpWidget(
      _app(const InventoryScreen(), rechte: {'inventory.edit'}),
    );
    await t.pumpAndSettle();
    expect(find.byTooltip('Automat hinzufügen'), findsOneWidget);
    expect(find.byTooltip('Automat verwalten'), findsNWidgets(2));
    expect(find.text('A1 · Snackautomat Sportplatz'), findsOneWidget);
    expect(find.text('Sportplatz · Sülzetal'), findsOneWidget);
    // Stillgelegt: eigene Gruppe und Kennzeichen.
    expect(find.text('Stillgelegt'), findsNWidgets(2));
  });

  testWidgets('Ohne Recht: nur ansehen', (t) async {
    _telefon(t);
    await t.pumpWidget(
      _app(const InventoryScreen(), rechte: {'inventory.view'}),
    );
    await t.pumpAndSettle();
    expect(find.byTooltip('Automat hinzufügen'), findsNothing);
    expect(find.byTooltip('Automat verwalten'), findsNothing);
  });

  testWidgets('Stilllegen fragt nach und setzt den Status', (t) async {
    _telefon(t);
    final v = _FakeVerwaltung();
    await t.pumpWidget(
      _app(const InventoryScreen(), rechte: {'inventory.edit'}, v: v),
    );
    await t.pumpAndSettle();
    await t.tap(find.byTooltip('Automat verwalten').first);
    await t.pumpAndSettle();
    await t.tap(find.text('Stilllegen').last);
    await t.pumpAndSettle();
    expect(find.text('A1 stilllegen?'), findsOneWidget);
    expect(
      find.textContaining('Bestand, Protokolle und Verkäufe bleiben'),
      findsOneWidget,
    );
    await t.tap(find.widgetWithText(FilledButton, 'Stilllegen'));
    await t.pumpAndSettle();
    expect(v.aufrufe, ['status:m1:false']);
    expect(find.text('A1 ist stillgelegt.'), findsOneWidget);
  });

  testWidgets('Stillgelegten Automaten wieder in Betrieb nehmen', (t) async {
    _telefon(t);
    final v = _FakeVerwaltung();
    await t.pumpWidget(
      _app(const InventoryScreen(), rechte: {'inventory.edit'}, v: v),
    );
    await t.pumpAndSettle();
    await t.tap(find.byTooltip('Automat verwalten').last);
    await t.pumpAndSettle();
    await t.tap(find.text('Wieder in Betrieb nehmen'));
    await t.pumpAndSettle();
    await t.tap(find.widgetWithText(FilledButton, 'In Betrieb nehmen'));
    await t.pumpAndSettle();
    expect(v.aufrufe, ['status:m2:true']);
  });

  testWidgets('Neuer Automat: Kennung vorgeschlagen, Name Pflicht, Speichern',
      (t) async {
    _telefon(t);
    final v = _FakeVerwaltung();
    await t.pumpWidget(
      _app(const InventoryScreen(), rechte: {'inventory.edit'}, v: v),
    );
    await t.pumpAndSettle();
    await t.tap(find.byTooltip('Automat hinzufügen'));
    await t.pumpAndSettle();
    expect(find.text('Neuer Automat'), findsOneWidget);
    expect(find.widgetWithText(TextFormField, 'A3'), findsOneWidget);

    await t.ensureVisible(find.text('Automat anlegen'));
    await t.tap(find.text('Automat anlegen'));
    await t.pumpAndSettle();
    expect(find.text('Bitte einen Namen eingeben'), findsOneWidget);
    expect(v.aufrufe, isEmpty);

    await t.enterText(
      find.widgetWithText(TextFormField, 'Name'),
      'Kühlschrank Halle',
    );
    await t.ensureVisible(find.text('Automat anlegen'));
    await t.tap(find.text('Automat anlegen'));
    await t.pumpAndSettle();
    expect(v.aufrufe, ['speichern:neu:A3:Kühlschrank Halle:snack:active:-']);
  });

  testWidgets('Bearbeiten: Werte vorbelegt, Standort gewählt, Umbenennen',
      (t) async {
    _telefon(t);
    final v = _FakeVerwaltung();
    await t.pumpWidget(
      _app(const InventoryScreen(), rechte: {'inventory.edit'}, v: v),
    );
    await t.pumpAndSettle();
    await t.tap(find.byTooltip('Automat verwalten').first);
    await t.pumpAndSettle();
    await t.tap(find.text('Bearbeiten'));
    await t.pumpAndSettle();
    expect(find.text('Automat bearbeiten'), findsOneWidget);
    expect(find.textContaining('Sportplatz · Am Sportplatz 1'), findsOneWidget);
    expect(find.text('Adresse dieses Standorts ändern'), findsOneWidget);

    await t.enterText(
      find.widgetWithText(TextFormField, 'Snackautomat Sportplatz'),
      'Snackautomat Vereinsheim',
    );
    await t.ensureVisible(find.text('Speichern'));
    await t.tap(find.text('Speichern'));
    await t.pumpAndSettle();
    expect(
      v.aufrufe,
      ['speichern:m1:A1:Snackautomat Vereinsheim:snack:active:s1'],
    );
  });

  testWidgets('Kunden-Finder zeigt keine stillgelegten Automaten', (t) async {
    _telefon(t);
    await t.pumpWidget(
      _app(const Scaffold(body: FinderTab()), rechte: const {}),
    );
    await t.pumpAndSettle();
    expect(find.textContaining('Snackautomat Sportplatz'), findsWidgets);
    expect(find.textContaining('Getränkeautomat Halle'), findsNothing);
  });
}
