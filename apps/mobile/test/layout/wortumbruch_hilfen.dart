import 'dart:convert';

import 'package:boerdesnack24/core/config/app_config.dart';
import 'package:boerdesnack24/core/di/providers.dart';
import 'package:boerdesnack24/core/theme/app_theme.dart';
import 'package:boerdesnack24/l10n/generated/app_localizations.dart';
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/services.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:http/http.dart' as http;
import 'package:http/testing.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

/// Echte Schriften statt der Testschrift (Kästchen gleicher Breite).
Future<void> ladeSchriften() async {
  SharedPreferences.setMockInitialValues({});
  Future<void> lade(String familie, List<String> dateien) async {
    final l = FontLoader(familie);
    for (final d in dateien) {
      l.addFont(rootBundle.load(d));
    }
    await l.load();
  }

  const hanken = [
    'assets/fonts/HankenGrotesk-Regular.ttf',
    'assets/fonts/HankenGrotesk-SemiBold.ttf',
    'assets/fonts/HankenGrotesk-Bold.ttf',
    'assets/fonts/HankenGrotesk-ExtraBold.ttf',
  ];
  await lade('Hanken Grotesk', hanken);
  // Material-Bausteine ohne eigene Schrift fallen im Browser auf Roboto
  // zurück; hier näherungsweise auf die Fließtextschrift.
  await lade('Roboto', hanken);
  await lade('Bricolage Grotesque', const [
    'assets/fonts/BricolageGrotesque-Bold.ttf',
    'assets/fonts/BricolageGrotesque-ExtraBold.ttf',
  ]);
}

String _b64(Map<String, Object?> m) =>
    base64Url.encode(utf8.encode(jsonEncode(m))).replaceAll('=', '');

const _uid = '11111111-1111-1111-1111-111111111111';

String _sitzung() {
  final s =
      DateTime.now().add(const Duration(hours: 1)).millisecondsSinceEpoch ~/
          1000;
  final token = '${_b64({'alg': 'HS256'})}.${_b64({
        'sub': _uid,
        'aud': 'authenticated',
        'role': 'authenticated',
        'aal': 'aal2',
        'exp': s,
      })}.x';
  return jsonEncode({
    'access_token': token,
    'token_type': 'bearer',
    'expires_in': 3600,
    'expires_at': s,
    'refresh_token': 'r',
    'user': {
      'id': _uid,
      'aud': 'authenticated',
      'email': 'philipp@example.invalid',
      'app_metadata': <String, Object?>{},
      'user_metadata': <String, Object?>{},
      'created_at': '2026-01-01T00:00:00Z',
    },
  });
}

/// Beispieldaten der PKW-Anlage, so lang wie echte Einträge.
final Map<String, Object?> pkwAnlage = {
  'jahr': 2026,
  'fahrzeuge': [
    for (final k in ['MD-BS 2401', 'BK-PB 1993'])
      {
        'id': k,
        'kennzeichen': k,
        'gesamtkosten': 4321.5,
        'km_stand_anfang': 29028,
        'km_stand_ende': null,
        'km_gefahren': null,
        'satz_je_km': null,
        'kosten': [
          {
            'id': '$k-1',
            'kostenart': 'leasing',
            'bezeichnung': '12 x 198€',
            'betrag_brutto': 2376,
          },
          {
            'id': '$k-2',
            'kostenart': 'versicherung',
            'bezeichnung': 'AXA',
            'betrag_brutto': 612.4,
          },
        ],
      },
  ],
  'fahrten': <Object?>[],
  'nutzungseinlage': 0,
  'freigabe': null,
};

SupabaseClient testClient() => SupabaseClient(
      'https://test.invalid',
      'anon',
      httpClient: MockClient((r) async {
        final p = r.url.path;
        Object? antwort = <Object?>[];
        if (p.endsWith('/rest/v1/profiles')) {
          antwort = [
            {
              'id': _uid,
              'email': 'philipp@example.invalid',
              'full_name': 'Philipp Blume',
              'role': 'system_admin',
              'status': 'active',
            },
          ];
        } else if (p.endsWith('/rpc/anlage_pkw')) {
          antwort = pkwAnlage;
        }
        return http.Response(
          jsonEncode(antwort),
          200,
          headers: {'content-type': 'application/json; charset=utf-8'},
          request: r,
        );
      }),
      authOptions: const AuthClientOptions(autoRefreshToken: false),
    );

/// Wörter, die über zwei Zeilen laufen.
List<String> zerbrocheneWoerter() {
  final befunde = <String>[];
  final wort = RegExp(r'[A-Za-zÄÖÜäöüß0-9]{3,}');
  for (final e in find.byType(RichText).evaluate()) {
    final rp = e.renderObject;
    if (rp is! RenderParagraph || !rp.hasSize || rp.size.isEmpty) continue;
    final text = rp.text.toPlainText();
    for (final m in wort.allMatches(text)) {
      final kaesten = rp.getBoxesForSelection(
        TextSelection(baseOffset: m.start, extentOffset: m.end),
      );
      final zeilen = kaesten.map((b) => b.top.round()).toSet();
      if (zeilen.length > 1) {
        befunde.add('Wort umgebrochen: „${m.group(0)}" in „$text"');
      }
    }
  }
  return befunde;
}

/// Eingabefelder, die sich berühren oder überlappen: Das Feldetikett des
/// unteren Felds läuft dann in den Rahmen des oberen (Befund 18.11.2026,
/// Dialog „Kilometerstände").
List<String> zuEngeFelder() {
  final befunde = <String>[];
  final felder = find.byType(InputDecorator).evaluate().toList();
  final rechtecke = <Rect>[
    for (final e in felder)
      if (e.renderObject case final RenderBox b when b.hasSize && b.attached)
        b.localToGlobal(Offset.zero) & b.size,
  ];
  for (var i = 0; i < rechtecke.length; i++) {
    for (var j = i + 1; j < rechtecke.length; j++) {
      final a = rechtecke[i];
      final b = rechtecke[j];
      final waagerecht = a.left < b.right && b.left < a.right;
      final abstand = b.top >= a.bottom ? b.top - a.bottom : a.top - b.bottom;
      if (waagerecht && abstand < 8) {
        befunde.add(
          'Eingabefelder zu eng: Abstand ${abstand.toStringAsFixed(0)} px',
        );
      }
    }
  }
  return befunde;
}

/// Baut [seite] auf Telefonbreite auf und liefert alle Befunde.
Future<List<String>> pruefeSeite(
  WidgetTester tester,
  Widget seite, {
  Future<void> Function(WidgetTester)? vorher,
  Size groesse = const Size(390, 844),
}) async {
  tester.view.physicalSize = groesse;
  tester.view.devicePixelRatio = 1.0;
  addTearDown(tester.view.reset);

  final client = testClient();
  await tester.runAsync(() => client.auth.setInitialSession(_sitzung()));

  final befunde = <String>[];
  // Überläufe meldet Flutter als Fehler. Andere Fehler (Beispieldaten passen
  // nicht zu jeder Seite) gehören nicht zu dieser Prüfung.
  void fehlerSammeln() {
    final e = tester.takeException();
    if (e != null && '$e'.contains('overflowed')) {
      befunde.add('Überlauf: ${'$e'.split('\n').first}');
    }
  }

  await tester.pumpWidget(
    ProviderScope(
      overrides: [
        supabaseClientProvider.overrideWithValue(client),
        appConfigProvider.overrideWithValue(
          const AppConfig(
            supabaseUrl: 'https://test.invalid',
            supabaseAnonKey: 'anon',
          ),
        ),
      ],
      child: MaterialApp(
        theme: AppTheme.dark(),
        localizationsDelegates: AppLocalizations.localizationsDelegates,
        supportedLocales: AppLocalizations.supportedLocales,
        locale: const Locale('de'),
        home: seite,
      ),
    ),
  );
  for (var i = 0; i < 6; i++) {
    await tester
        .runAsync(() => Future<void>.delayed(const Duration(milliseconds: 30)));
    await tester.pump(const Duration(milliseconds: 200));
    fehlerSammeln();
  }
  if (vorher != null) {
    await vorher(tester);
    fehlerSammeln();
  }
  befunde
    ..addAll(zerbrocheneWoerter())
    ..addAll(zuEngeFelder());

  await tester.pumpWidget(const SizedBox());
  await tester.pump(const Duration(seconds: 5));
  tester.takeException();
  return befunde;
}
