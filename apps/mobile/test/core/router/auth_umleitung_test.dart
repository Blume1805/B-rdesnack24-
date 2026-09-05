import 'package:boerdesnack24/core/router/app_router.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  group('authUmleitung — ohne Wiederherstellung', () {
    test('nicht angemeldet landet auf der Anmeldung', () {
      expect(
        authUmleitung(ort: '/', angemeldet: false, wiederherstellung: false),
        AppRoutes.signIn,
      );
    });

    test('Rechtsseiten sind in beiden Zustaenden offen', () {
      for (final ort in [
        AppRoutes.imprint,
        AppRoutes.privacy,
        AppRoutes.terms,
        AppRoutes.cancellation,
      ]) {
        expect(
          authUmleitung(ort: ort, angemeldet: false, wiederherstellung: false),
          isNull,
          reason: ort,
        );
        expect(
          authUmleitung(ort: ort, angemeldet: true, wiederherstellung: false),
          isNull,
          reason: ort,
        );
      }
    });

    test('angemeldet auf einer Auth-Route geht auf die Startseite', () {
      expect(
        authUmleitung(
          ort: AppRoutes.signIn,
          angemeldet: true,
          wiederherstellung: false,
        ),
        AppRoutes.home,
      );
    });

    test('die Passwortmaske ist auch ohne Anmeldung erreichbar', () {
      // Wer hier ankommt, ist oft noch nicht angemeldet: der Link ist
      // verbraucht, oder der Token wird erst auf der Maske eingeloest.
      expect(
        authUmleitung(
          ort: AppRoutes.newPassword,
          angemeldet: false,
          wiederherstellung: false,
        ),
        isNull,
      );
    });
  });

  group('authUmleitung — waehrend einer Wiederherstellung', () {
    test('jeder andere Ort fuehrt auf die Maske', () {
      for (final ort in [
        AppRoutes.home,
        AppRoutes.approvals,
        AppRoutes.mfaEnroll,
        AppRoutes.imprint,
      ]) {
        expect(
          authUmleitung(ort: ort, angemeldet: true, wiederherstellung: true),
          AppRoutes.newPassword,
          reason: ort,
        );
      }
    });

    test('die Maske selbst bleibt stehen — keine Schleife', () {
      expect(
        authUmleitung(
          ort: AppRoutes.newPassword,
          angemeldet: true,
          wiederherstellung: true,
        ),
        isNull,
      );
    });

    test('der Weg zu "Passwort vergessen" bleibt offen', () {
      // Sonst saesse jemand mit verbrauchtem Link auf der Maske fest: eine
      // Sitzung ohne brauchbares Passwort, und kein Weg zu einem neuen Link.
      expect(
        authUmleitung(
          ort: AppRoutes.forgotPassword,
          angemeldet: true,
          wiederherstellung: true,
        ),
        isNull,
      );
      expect(
        authUmleitung(
          ort: AppRoutes.signIn,
          angemeldet: true,
          wiederherstellung: true,
        ),
        isNull,
      );
    });

    test('Gegenprobe: nach dem Abschluss greift die Regel nicht mehr', () {
      // Genau hier lag die Falle: bliebe die Weiche gestellt, wuerde der
      // Sprung auf die Startseite sofort wieder auf die Maske zurueckwerfen.
      expect(
        authUmleitung(
          ort: AppRoutes.home,
          angemeldet: true,
          wiederherstellung: false,
        ),
        isNull,
      );
    });
  });
}
