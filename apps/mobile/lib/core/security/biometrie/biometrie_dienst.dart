import 'package:flutter/foundation.dart';
import 'package:local_auth/local_auth.dart';

/// Welche Biometrie das Gerät anbietet. Der Unterschied ist keine Kosmetik:
/// „Mit Face ID anmelden" auf einem Android-Gerät wäre schlicht falsch, und
/// wer den Knopf nicht wiedererkennt, drückt ihn nicht.
enum BiometrieArt { faceId, fingerabdruck, andere, keine }

extension BiometrieArtText on BiometrieArt {
  String get bezeichnung => switch (this) {
        BiometrieArt.faceId => 'Face ID',
        BiometrieArt.fingerabdruck => 'Fingerabdruck',
        BiometrieArt.andere => 'Biometrie',
        BiometrieArt.keine => 'Biometrie',
      };
}

/// Zugang zur Biometrie des Geräts.
///
/// Als Schnittstelle, damit die Anmeldelogik ohne Gerät prüfbar bleibt: der
/// Biometrie-Dialog selbst lässt sich in keinem Test auslösen, alles
/// drumherum schon — und dort sitzen die Fehler, die Konten öffnen.
abstract class BiometrieDienst {
  /// Hat das Gerät Biometrie **und** ist mindestens ein Merkmal eingerichtet?
  Future<bool> verfuegbar();

  /// Welche Art — nur zur Beschriftung, nie als Sicherheitsentscheidung.
  Future<BiometrieArt> art();

  /// Zeigt den Dialog. `true` nur bei erfolgreicher Prüfung.
  Future<bool> pruefe({required String grund});
}

/// Der Fall Web und jedes Gerät ohne Biometrie.
///
/// `local_auth` hat keine Web-Implementierung. Ein Aufruf im Browser endet in
/// einer MissingPluginException — deshalb wird dort gar nicht erst gefragt.
class KeineBiometrie implements BiometrieDienst {
  const KeineBiometrie();

  @override
  Future<bool> verfuegbar() async => false;

  @override
  Future<BiometrieArt> art() async => BiometrieArt.keine;

  @override
  Future<bool> pruefe({required String grund}) async => false;
}

/// Die echte Biometrie des Geräts.
class GeraeteBiometrie implements BiometrieDienst {
  GeraeteBiometrie([LocalAuthentication? auth])
      : _auth = auth ?? LocalAuthentication();

  final LocalAuthentication _auth;

  @override
  Future<bool> verfuegbar() async {
    if (kIsWeb) return false;
    try {
      // Beide Fragen sind nötig: das Gerät kann Biometrie können und trotzdem
      // keine eingerichtet haben. Dann führt der Dialog ins Leere.
      if (!await _auth.isDeviceSupported()) return false;
      if (!await _auth.canCheckBiometrics) return false;
      final vorhanden = await _auth.getAvailableBiometrics();
      return vorhanden.isNotEmpty;
    } catch (_) {
      return false;
    }
  }

  @override
  Future<BiometrieArt> art() async {
    if (kIsWeb) return BiometrieArt.keine;
    try {
      final vorhanden = await _auth.getAvailableBiometrics();
      if (vorhanden.contains(BiometricType.face)) return BiometrieArt.faceId;
      if (vorhanden.contains(BiometricType.fingerprint)) {
        return BiometrieArt.fingerabdruck;
      }
      if (vorhanden.isEmpty) return BiometrieArt.keine;
      return BiometrieArt.andere;
    } catch (_) {
      return BiometrieArt.keine;
    }
  }

  @override
  Future<bool> pruefe({required String grund}) async {
    if (kIsWeb) return false;
    try {
      return await _auth.authenticate(
        localizedReason: grund,
        options: const AuthenticationOptions(
          // biometricOnly: der Geräte-PIN ist ausdrücklich NICHT gleichwertig.
          // Wer den Code kennt, käme sonst über den Umweg „Passwort
          // verwenden" in ein fremdes Konto, ohne das Kontopasswort zu
          // kennen. Das waere keine biometrische Anmeldung mehr.
          biometricOnly: true,
          stickyAuth: true,
          useErrorDialogs: true,
        ),
      );
    } catch (_) {
      // Abbruch, zu viele Fehlversuche, gesperrte Biometrie: alles endet hier
      // als „nicht bestanden". Ein Fehler darf niemals wie ein Erfolg wirken.
      return false;
    }
  }
}
