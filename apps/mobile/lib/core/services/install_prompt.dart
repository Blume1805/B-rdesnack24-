/// „Zum Startbildschirm hinzufügen" — Erkennung und Auslösung.
///
/// Bördesnack24 wird als Web-App ausgeliefert, nicht über die App-Stores
/// (siehe docs/store-assets/store-listing.md). Der Kunde steht am Automaten,
/// scannt den QR-Code und ist sofort drin. Damit er beim nächsten Mal nicht
/// wieder den Browser bemühen muss, bieten wir die Ablage auf dem
/// Startbildschirm an. Danach startet die App im eigenen Fenster, ohne
/// Adressleiste, und fühlt sich an wie eine installierte App.
///
/// Die Browser unterscheiden sich dabei grundlegend:
///
/// * **Android/Chrome** feuert `beforeinstallprompt`. Das Ereignis lässt sich
///   abfangen und später auslösen, sodass wir den Zeitpunkt bestimmen.
/// * **iOS/Safari** hat keine solche Schnittstelle. Apple lässt die Ablage
///   ausschließlich über das Teilen-Menü zu. Dort bleibt uns nur, den Weg zu
///   erklären.
/// * Auf allen anderen Kombinationen wird nichts angeboten, statt etwas zu
///   versprechen, das nicht funktioniert.
///
/// Der Web-Teil liegt in `install_prompt_web.dart` und wird nur dort
/// eingebunden, wo `dart:js_interop` existiert. Auf der Dart-VM (und damit in
/// `flutter test`) greift der Stub, sodass die Testsuite ohne Browser läuft.
library;

import 'package:shared_preferences/shared_preferences.dart';

import 'install_prompt_stub.dart'
    if (dart.library.js_interop) 'install_prompt_web.dart' as impl;

/// Welcher Weg steht diesem Gerät offen?
enum InstallMethod {
  /// Der Browser übernimmt es selbst, wir lösen nur aus (Android/Chrome).
  browserPrompt,

  /// Nur über das Teilen-Menü erklärbar (iOS/Safari).
  iosShareSheet,

  /// Kein Weg vorhanden oder bereits erledigt.
  none,
}

abstract final class InstallPrompt {
  /// Einmalig beim Start aufrufen: hängt sich an `beforeinstallprompt`, bevor
  /// der Browser seine eigene Leiste zeigt. Passiert das zu spät, ist das
  /// Ereignis verloren und der Knopf bliebe wirkungslos.
  static void init() => impl.initInstallPrompt();

  /// true, wenn die App bereits im eigenen Fenster läuft. Dann ist jeder
  /// Hinweis überflüssig und wird nicht angezeigt.
  static bool get isInstalled => impl.isStandalone();

  /// Der für dieses Gerät passende Weg.
  static InstallMethod get method {
    if (isInstalled) return InstallMethod.none;
    if (impl.hasDeferredPrompt()) return InstallMethod.browserPrompt;
    if (impl.isIosSafari()) return InstallMethod.iosShareSheet;
    return InstallMethod.none;
  }

  /// Löst den Browser-Dialog aus. Liefert true, wenn er gezeigt werden konnte.
  /// Ob der Kunde zustimmt, erfahren wir bewusst nicht weiter: Lehnt er ab,
  /// verwirft der Browser das Ereignis, und `method` liefert beim nächsten
  /// Aufbau `none`. Wir drängen nicht nach.
  static Future<bool> show() => impl.showInstallPrompt();
}

/// Merkt sich, dass der Kunde den Hinweis weggeklickt hat.
///
/// Ohne diese Merkung erschiene die Karte bei jedem Start erneut, und aus
/// einem Angebot würde Belästigung. Gespeichert wird ein einzelner
/// Wahrheitswert über `shared_preferences`, im Browser also `localStorage`.
///
/// Datenschutz: Es entsteht kein Personenbezug, es wird nichts übertragen und
/// nichts ausgelesen, was nicht selbst geschrieben wurde. Die Speicherung
/// dient allein der vom Nutzer erkennbar gewollten Funktion „nicht noch einmal
/// fragen" und ist damit für den ausdrücklich gewünschten Dienst erforderlich
/// im Sinne von § 25 Abs. 2 Nr. 2 TDDDG. Eine Einwilligung ist dafür nicht
/// einzuholen. Wird der Speicher verweigert oder geleert, erscheint der
/// Hinweis wieder, was unschädlich ist.
abstract final class InstallHintPreference {
  static const _key = 'install_hint_dismissed_v1';

  static Future<bool> isDismissed() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      return prefs.getBool(_key) ?? false;
    } catch (_) {
      // Kein Zugriff auf den Speicher (privates Fenster, blockierte
      // Site-Daten): lieber den Hinweis zeigen als die App scheitern lassen.
      return false;
    }
  }

  static Future<void> dismiss() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.setBool(_key, true);
    } catch (_) {
      // Schlägt das Speichern fehl, erscheint der Hinweis beim nächsten Start
      // erneut. Das ist der harmlosere Ausgang.
    }
  }
}
