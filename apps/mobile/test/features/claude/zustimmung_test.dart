import 'dart:convert';

import 'package:boerdesnack24/core/config/app_config.dart';
import 'package:boerdesnack24/core/di/providers.dart';
import 'package:boerdesnack24/features/claude/data/zustimmung_dienst.dart';
import 'package:boerdesnack24/features/claude/domain/zustimmung.dart';
import 'package:boerdesnack24/features/claude/presentation/oauth_zustimmung_screen.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:http/http.dart' as http;
import 'package:http/testing.dart';

String? _k(String u) => zustimmungsKennung(Uri.parse(u));

http.Response _antwort(Map<String, Object?> j, [int status = 200]) =>
    http.Response(jsonEncode(j), status);

void main() {
  group('zustimmungsKennung', () {
    test('Pfad-Adresse von Supabase', () {
      expect(
        _k('https://app.boerdesnack24.de/oauth/consent?authorization_id=abc12345XYZ'),
        'abc12345XYZ',
      );
    });
    test('Hash-Adresse', () {
      expect(
        _k('https://app.boerdesnack24.de/#/oauth/consent?authorization_id=abc12345XYZ'),
        'abc12345XYZ',
      );
    });
    test('andere Seiten und unsaubere Kennungen werden ignoriert', () {
      expect(_k('https://app.boerdesnack24.de/'), isNull);
      expect(
        _k('https://app.boerdesnack24.de/oauth/consent?authorization_id=<script>'),
        isNull,
      );
      expect(
        _k('https://app.boerdesnack24.de/anderes?authorization_id=abc12345XYZ'),
        isNull,
      );
    });
  });

  group('ZustimmungDienst', () {
    test('ruft Supabase mit Token, apikey und Versionskopf auf', () async {
      late http.Request gesehen;
      final dienst = ZustimmungDienst(
        basisUrl: 'https://p.supabase.co',
        apiKey: 'anon',
        zugangsToken: () => 'tok',
        client: MockClient((r) async {
          gesehen = r;
          return _antwort({
            'authorization_id': 'abc12345XYZ',
            'client': {'name': 'Claude'},
            'redirect_uri': 'https://claude.ai/api/mcp/auth_callback',
            'scope': 'email',
          });
        }),
      );
      final s = await dienst.abrufen('abc12345XYZ');
      expect(s, isA<ZustimmungNoetig>());
      expect((s as ZustimmungNoetig).anfrage.anwendung, 'Claude');
      expect(gesehen.url.path, '/auth/v1/oauth/authorizations/abc12345XYZ');
      expect(gesehen.headers['Authorization'], 'Bearer tok');
      expect(gesehen.headers['apikey'], 'anon');
      expect(gesehen.headers['X-Supabase-Api-Version'], '2024-01-01');
    });

    test('Zustimmung sendet approve und liefert Rücksprung', () async {
      late http.Request gesehen;
      final dienst = ZustimmungDienst(
        basisUrl: 'https://p.supabase.co',
        apiKey: 'anon',
        zugangsToken: () => 'tok',
        client: MockClient((r) async {
          gesehen = r;
          return _antwort({'redirect_url': 'https://claude.ai/cb?code=1'});
        }),
      );
      final url = await dienst.entscheiden('abc12345XYZ', zustimmen: true);
      expect(url, 'https://claude.ai/cb?code=1');
      expect(
        gesehen.url.path,
        '/auth/v1/oauth/authorizations/abc12345XYZ/consent',
      );
      expect(jsonDecode(gesehen.body), {'action': 'approve'});
    });

    test('Fehlerstatus wird als Fehler gemeldet', () async {
      final dienst = ZustimmungDienst(
        basisUrl: 'https://p.supabase.co',
        apiKey: 'anon',
        zugangsToken: () => 'tok',
        client: MockClient((r) async => http.Response('{}', 403)),
      );
      expect(dienst.abrufen('abc12345XYZ'), throwsA(isA<StateError>()));
    });
  });

  testWidgets('Zustimmungsseite: zeigt Umfang, Erlauben leitet weiter',
      (tester) async {
    tester.view.physicalSize = const Size(1024, 1800);
    tester.view.devicePixelRatio = 1.0;
    addTearDown(tester.view.reset);
    AusstehendeZustimmung.kennung = 'abc12345XYZ';
    String? weitergeleitet;
    String? aktion;
    final dienst = ZustimmungDienst(
      basisUrl: 'https://p.supabase.co',
      apiKey: 'anon',
      zugangsToken: () => 'tok',
      client: MockClient((r) async {
        if (r.method == 'GET') {
          return _antwort({
            'authorization_id': 'abc12345XYZ',
            'client': {'name': 'Claude'},
            'redirect_uri': 'https://claude.ai/api/mcp/auth_callback',
            'scope': 'email',
          });
        }
        aktion = (jsonDecode(r.body) as Map)['action'] as String;
        return _antwort({'redirect_url': 'https://claude.ai/cb?code=1'});
      }),
    );
    await tester.pumpWidget(
      ProviderScope(
        overrides: [
          appConfigProvider.overrideWithValue(
            const AppConfig(
              supabaseUrl: 'https://p.supabase.co',
              supabaseAnonKey: 'anon',
            ),
          ),
          zustimmungDienstProvider.overrideWithValue(dienst),
          weiterleitenProvider
              .overrideWithValue((u) async => weitergeleitet = u),
        ],
        child: const MaterialApp(home: OAuthZustimmungScreen()),
      ),
    );
    await tester.pumpAndSettle();

    expect(
      find.textContaining('Claude möchte auf die Verwaltung zugreifen'),
      findsOneWidget,
    );
    expect(
      find.textContaining('Keine Namen oder Daten von Beschäftigten'),
      findsOneWidget,
    );
    await tester.tap(find.text('Erlauben'));
    await tester.pumpAndSettle();
    expect(aktion, 'approve');
    expect(weitergeleitet, 'https://claude.ai/cb?code=1');
    expect(AusstehendeZustimmung.kennung, isNull);
  });
}
