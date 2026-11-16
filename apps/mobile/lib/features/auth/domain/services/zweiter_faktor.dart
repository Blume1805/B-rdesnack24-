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
