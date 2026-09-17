import 'package:boerdesnack24/core/services/install_prompt.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();

  group('InstallPrompt außerhalb des Browsers', () {
    // Der bedingte Import greift auf der Dart-VM zum Stub. Diese Tests halten
    // fest, dass die App dort nichts anbietet, statt einen Knopf zu zeigen,
    // der nichts tun kann.
    test('meldet keinen Installationsweg', () {
      expect(InstallPrompt.method, InstallMethod.none);
    });

    test('meldet die App nicht als installiert', () {
      expect(InstallPrompt.isInstalled, isFalse);
    });

    test('show() scheitert leise statt zu werfen', () async {
      await expectLater(InstallPrompt.show(), completion(isFalse));
    });

    test('init() ist ein No-op und wirft nicht', () {
      expect(InstallPrompt.init, returnsNormally);
    });
  });

  group('InstallHintPreference', () {
    setUp(() => SharedPreferences.setMockInitialValues({}));

    test('ist anfangs nicht weggeklickt', () async {
      expect(await InstallHintPreference.isDismissed(), isFalse);
    });

    test('merkt sich das Wegklicken dauerhaft', () async {
      await InstallHintPreference.dismiss();
      expect(await InstallHintPreference.isDismissed(), isTrue);
    });

    test('ein zweites Wegklicken ändert nichts', () async {
      await InstallHintPreference.dismiss();
      await InstallHintPreference.dismiss();
      expect(await InstallHintPreference.isDismissed(), isTrue);
    });

    test('ein geleerter Speicher zeigt den Hinweis wieder', () async {
      await InstallHintPreference.dismiss();
      expect(await InstallHintPreference.isDismissed(), isTrue);
      // Entspricht dem Löschen der Site-Daten im Browser.
      SharedPreferences.setMockInitialValues({});
      final prefs = await SharedPreferences.getInstance();
      await prefs.reload();
      expect(await InstallHintPreference.isDismissed(), isFalse);
    });
  });
}
