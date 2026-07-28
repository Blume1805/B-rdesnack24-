import 'package:shared_preferences/shared_preferences.dart';

/// Zwischenlager für einen Empfehlungscode zwischen Klick und Einlösung.
///
/// Warum überhaupt zwischenlagern: `register_referral` braucht eine
/// angemeldete Sitzung, die Registrierung endet aber bei der
/// E-Mail-Bestätigung — zwischen Code-Klick und erstem Login liegt also
/// mindestens ein App-Neustart. Der Code überlebt das hier lokal und wird
/// beim ersten Öffnen des Kundenbereichs eingelöst.
abstract final class ReferralCodeInbox {
  static const _key = 'bs24_pending_referral_code';

  /// Merkt einen Code vor (aus Deeplink oder Eingabefeld).
  static Future<void> remember(String code) async {
    final clean = code.trim().toUpperCase();
    if (clean.isEmpty) return;
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_key, clean);
  }

  static Future<String?> peek() async {
    final prefs = await SharedPreferences.getInstance();
    final v = prefs.getString(_key);
    return (v == null || v.isEmpty) ? null : v;
  }

  /// Liest den Code und löscht ihn in einem Rutsch — ein Code wird genau
  /// einmal eingelöst, auch wenn der Aufruf danach fehlschlägt. Ein
  /// fehlgeschlagener Versuch (Code ungültig, schon Abonnent) würde sich
  /// beim nächsten Start ohnehin nur wiederholen.
  static Future<String?> take() async {
    final prefs = await SharedPreferences.getInstance();
    final v = prefs.getString(_key);
    await prefs.remove(_key);
    return (v == null || v.isEmpty) ? null : v;
  }

  static Future<void> clear() async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.remove(_key);
  }
}
