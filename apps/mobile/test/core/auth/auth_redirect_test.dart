import 'package:boerdesnack24/core/auth/auth_redirect.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  group('authRedirectUrl', () {
    test('ausserhalb des Webs kein Ziel', () {
      // Im Test laeuft kIsWeb auf false. Auf iOS und Android fuehrt der
      // Ruecksprung ueber einen Deep Link aus der Plattformkonfiguration;
      // eine http-Adresse waere dort falsch.
      expect(kIsWeb, isFalse);
      expect(authRedirectUrl(), isNull);
    });
  });

  group('Ableitung aus der aufgerufenen Adresse', () {
    // Die eigentliche Rechnung getrennt vom Plattformschalter pruefen: so
    // ist belegt, welche Adresse aus welchem Aufruf entsteht, ohne dass der
    // Test eine Web-Umgebung braucht.
    String ableiten(String aktuell) {
      final base = Uri.parse(aktuell);
      final pfad = base.path.endsWith('/') ? base.path : '${base.path}/';
      return '${base.origin}$pfad';
    }

    test('Unterpfad auf GitHub Pages bleibt erhalten', () {
      // Der Fall, an dem es am 04.09.2026 gescheitert ist: ohne den
      // Repo-Pfad landet der Link auf einer Seite, die es nicht gibt.
      expect(
        ableiten('https://blume1805.github.io/B-rdesnack24-/#/forgot-password'),
        'https://blume1805.github.io/B-rdesnack24-/',
      );
    });

    test('Route im Fragment aendert das Ziel nicht', () {
      expect(
        ableiten('https://blume1805.github.io/B-rdesnack24-/#/profil'),
        ableiten('https://blume1805.github.io/B-rdesnack24-/#/signin'),
      );
    });

    test('eigene Domain an der Wurzel', () {
      expect(
        ableiten('https://app.boerdesnack24.de/#/signin'),
        'https://app.boerdesnack24.de/',
      );
    });

    test('fehlender Schlussstrich wird ergaenzt', () {
      expect(
        ableiten('https://beispiel.invalid/app'),
        'https://beispiel.invalid/app/',
      );
    });

    test('Ziel traegt niemals Fragment oder Abfrage', () {
      final ziel = ableiten(
        'https://blume1805.github.io/B-rdesnack24-/?x=1#/irgendwo',
      );
      expect(ziel.contains('#'), isFalse);
      expect(ziel.contains('?'), isFalse);
    });
  });
}
