/// Wiederverwendbare Eingabevalidierungen (clientseitig; serverseitig zusätzlich geprüft).
abstract final class Validators {
  static final _emailRegex = RegExp(r'^[\w.+-]+@[\w-]+\.[\w.-]+$');

  static String? email(String? value) {
    final v = value?.trim() ?? '';
    if (v.isEmpty) return 'required';
    if (!_emailRegex.hasMatch(v)) return 'invalid';
    return null;
  }

  static String? password(String? value, {int min = 10}) {
    final v = value ?? '';
    if (v.isEmpty) return 'required';
    if (v.length < min) return 'tooShort';
    return null;
  }

  static String? notEmpty(String? value) {
    if ((value?.trim() ?? '').isEmpty) return 'required';
    return null;
  }
}
