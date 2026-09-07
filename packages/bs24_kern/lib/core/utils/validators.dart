/// Wiederverwendbare Eingabevalidierungen (clientseitig; serverseitig zusätzlich geprüft).
abstract final class Validators {
  static final _emailRegex = RegExp(r'^[\w.+-]+@[\w-]+\.[\w.-]+$');

  static String? email(String? value) {
    final v = value?.trim() ?? '';
    if (v.isEmpty) return 'required';
    if (!_emailRegex.hasMatch(v)) return 'invalid';
    return null;
  }

  /// Passwort-Policy (BSI-Empfehlung, DSGVO Art. 32 Sicherheit):
  ///   - mindestens 10 Zeichen
  ///   - je ein Groß-/Kleinbuchstabe UND
  ///   - mindestens eine Ziffer ODER ein Sonderzeichen.
  /// ACHTUNG — diese Policy gilt nur hier im Client. Die Auth-Einstellung
  /// des gehosteten Projekts stand am 02.09.2026 auf **6 Zeichen**
  /// (Befund S-15), nicht auf den 10 aus `supabase/config.toml`; und der
  /// Abgleich gegen geleakte Passwörter ist nicht aktivierbar, weil er
  /// Supabase Pro voraussetzt (S-13). Ein Registrierungsversuch direkt
  /// gegen die API umgeht diese Prüfung deshalb vollständig.
  /// Der Kommentar „serverseitig ergänzend geprüft" stand hier früher
  /// ohne Nachweis — er trug weiter, als er durfte.
  static String? password(String? value, {int min = 10}) {
    final v = value ?? '';
    if (v.isEmpty) return 'required';
    if (v.length < min) return 'tooShort';
    final hasLower = v.contains(RegExp(r'[a-z]'));
    final hasUpper = v.contains(RegExp(r'[A-Z]'));
    final hasDigitOrSymbol =
        v.contains(RegExp(r'[0-9]')) || v.contains(RegExp(r'[!-/:-@\[-`{-~]'));
    if (!(hasLower && hasUpper && hasDigitOrSymbol)) return 'complexity';
    return null;
  }

  static String? notEmpty(String? value) {
    if ((value?.trim() ?? '').isEmpty) return 'required';
    return null;
  }
}
