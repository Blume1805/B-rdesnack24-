import 'package:supabase_flutter/supabase_flutter.dart';

/// Muss die laufende Sitzung den zweiten Faktor noch bestätigen?
///
/// Ja, wenn das Konto einen bestätigten Faktor hat ([naechste] ist aal2), die
/// Sitzung aber nur mit Passwort angemeldet ist ([aktuelle] ist nicht aal2).
/// Die Datenbank weist interne Konten in diesem Zustand ab, sobald die
/// Zwei-Faktor-Pflicht eingeschaltet ist (Migration
/// 20261116090000_zwei_faktor_pflicht_vorbereitet, Runbook O).
///
/// Reine Funktion, damit sie ohne Supabase testbar ist.
bool brauchtZweitenFaktor({
  required AuthenticatorAssuranceLevels? aktuelle,
  required AuthenticatorAssuranceLevels? naechste,
}) =>
    naechste == AuthenticatorAssuranceLevels.aal2 &&
    aktuelle != AuthenticatorAssuranceLevels.aal2;

/// Kennungen liegengebliebener TOTP-Faktoren: angelegt, aber nie bestätigt.
///
/// Befund 17.11.2026: Supabase verlangt je Konto eindeutige Namen für
/// Faktoren. Ein abgebrochener Einrichtungsversuch hinterließ einen
/// unbestätigten Faktor ohne Namen, und jeder weitere Versuch scheiterte mit
/// `mfa_factor_name_conflict` („Es ist ein Fehler aufgetreten."). Vor einer
/// neuen Einrichtung werden diese Reste entfernt; bestätigte Faktoren bleiben
/// unberührt.
List<String> liegengebliebeneFaktoren(List<Factor> faktoren) => [
      for (final f in faktoren)
        if (f.factorType == FactorType.totp &&
            f.status == FactorStatus.unverified)
          f.id,
    ];

/// Eindeutiger Name für einen neuen Faktor, damit nie zwei gleich heißen.
/// Erscheint so auch in der Authenticator-App.
String neuerFaktorName(DateTime jetzt) {
  String zwei(int n) => n.toString().padLeft(2, '0');
  final t = jetzt.toLocal();
  return 'Bördesnack24 ${t.year}-${zwei(t.month)}-${zwei(t.day)} '
      '${zwei(t.hour)}:${zwei(t.minute)}:${zwei(t.second)}';
}
