import 'dart:convert';

import 'package:crypto/crypto.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:http/http.dart' as http;
import 'package:http/testing.dart';

import 'package:boerdesnack24/core/security/pwned_password_checker.dart';

/// Baut eine HIBP-Range-Antwort, die [password] mit [count] Treffern
/// enthält, plus Rausch-Zeilen (inkl. Padding-Zeile mit Count 0).
String _rangeBodyFor(String password, int count) {
  final digest = sha1.convert(utf8.encode(password)).toString().toUpperCase();
  final suffix = digest.substring(5);
  return [
    '0018A45C4D1DEF81644B54AB7F969B88D65:3',
    '$suffix:$count',
    'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF:0', // Padding-Zeile
  ].join('\r\n');
}

void main() {
  group('PwnedPasswordChecker', () {
    test('meldet Treffer für geleaktes Passwort', () async {
      final checker = PwnedPasswordChecker(
        client: MockClient((req) async {
          expect(req.url.host, 'api.pwnedpasswords.com');
          expect(req.headers['Add-Padding'], 'true');
          // Nur der 5-Zeichen-Präfix darf übertragen werden.
          expect(req.url.path, matches(RegExp(r'^/range/[0-9A-F]{5}$')));
          return http.Response(_rangeBodyFor('password123', 12345), 200);
        }),
      );
      expect(await checker.breachCount('password123'), 12345);
      expect(await checker.isBreached('password123'), isTrue);
    });

    test('meldet 0 für unbekanntes Passwort', () async {
      final checker = PwnedPasswordChecker(
        client: MockClient(
          (_) async =>
              http.Response('0018A45C4D1DEF81644B54AB7F969B88D65:3', 200),
        ),
      );
      expect(await checker.breachCount('vermutlich-einzigartig-9!x'), 0);
      expect(await checker.isBreached('vermutlich-einzigartig-9!x'), isFalse);
    });

    test('Padding-Zeilen mit Count 0 zählen nicht als Treffer', () async {
      final checker = PwnedPasswordChecker(
        client: MockClient(
          (_) async => http.Response(_rangeBodyFor('abc-xyz', 0), 200),
        ),
      );
      expect(await checker.isBreached('abc-xyz'), isFalse);
    });

    test('fail-open bei Netzwerkfehler', () async {
      final checker = PwnedPasswordChecker(
        client: MockClient((_) async => throw Exception('offline')),
      );
      expect(await checker.breachCount('egal'), isNull);
      expect(await checker.isBreached('egal'), isFalse);
    });

    test('fail-open bei HTTP-Fehlerstatus', () async {
      final checker = PwnedPasswordChecker(
        client: MockClient((_) async => http.Response('err', 503)),
      );
      expect(await checker.breachCount('egal'), isNull);
    });
  });
}
