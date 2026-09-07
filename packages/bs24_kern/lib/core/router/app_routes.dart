import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import 'package:bs24_kern/core/auth/recovery_state.dart';
import 'package:bs24_kern/core/di/providers.dart';
import 'package:bs24_kern/features/auth/presentation/screens/forgot_password_screen.dart';
import 'package:bs24_kern/features/auth/presentation/screens/mfa_enroll_screen.dart';
import 'package:bs24_kern/features/auth/presentation/screens/new_password_screen.dart';
import 'package:bs24_kern/features/auth/presentation/screens/register_screen.dart';
import 'package:bs24_kern/features/auth/presentation/screens/security_screen.dart';
import 'package:bs24_kern/features/auth/presentation/screens/sign_in_screen.dart';
import 'package:bs24_kern/features/legal/presentation/cancellation_screen.dart';
import 'package:bs24_kern/features/legal/presentation/legal_screens.dart';

/// Routenpfade als Konstanten (vermeidet Tippfehler/Magic-Strings).
///
/// Hier stehen nur die Routen, die BEIDE Apps haben. Interne Ziele
/// (Freigaben, Signaturaufgaben) gehoeren in die Gesellschafter-App und
/// duerfen im Kunden-Bundle gar nicht erst vorkommen — sonst steht der
/// Pfad in der Routentabelle des ausgelieferten Bundles und verraet, dass
/// es einen zweiten Zugang gibt.
abstract final class AppRoutes {
  static const signIn = '/signin';
  static const register = '/register';
  static const forgotPassword = '/forgot-password';
  static const newPassword = '/passwort-neu';
  static const security = '/sicherheit';
  static const home = '/';
  static const mfaEnroll = '/security/mfa';
  static const imprint = '/legal/imprint';
  static const privacy = '/legal/privacy';
  static const terms = '/legal/terms';
  static const cancellation = '/legal/kuendigung';
}

/// Auth-Flow-Routen: ohne Login erreichbar, für Angemeldete sinnlos
/// (werden auf die Startseite umgeleitet).
const _authRoutes = {
  AppRoutes.signIn,
  AppRoutes.register,
  AppRoutes.forgotPassword,
};

/// Rechtsseiten: in BEIDEN Zuständen erreichbar. Impressum/Datenschutz/AGB
/// sind Pflichtangaben, die Kündigungsseite muss nach § 312k BGB sogar
/// ausdrücklich ohne Anmeldung nutzbar sein.
const _openRoutes = {
  AppRoutes.imprint,
  AppRoutes.privacy,
  AppRoutes.terms,
  AppRoutes.cancellation,
  // Muss in BEIDEN Zustaenden erreichbar sein. Ein Wiederherstellungslink
  // legt beim Oeffnen eine Sitzung an -- der Nutzer ist also angemeldet,
  // wenn er hier ankommt. Stuende die Route unter _authRoutes, wuerde ihn
  // die Weiche sofort auf die Startseite schicken, und er saesse wieder
  // ohne Passwort da. Genau so war es bis zum 04.09.2026.
  AppRoutes.newPassword,
};

/// Baut den go_router beider Apps: gemeinsame Routen plus Auth-Guard.
///
/// [start] ist die Startseite der jeweiligen App (Kunden- bzw.
/// Gesellschafter-Oberflaeche), [zusatz] sind app-eigene Routen.
GoRouter appRouter({
  required Ref ref,
  required Widget Function() start,
  List<GoRoute> zusatz = const [],
}) {
  final weiche = ref.watch(wiederherstellungProvider);
  final auffrischung = _AuthAenderungen(ref);
  ref.onDispose(auffrischung.dispose);
  return GoRouter(
    initialLocation: AppRoutes.home,
    refreshListenable: Listenable.merge([weiche, auffrischung]),
    redirect: (context, state) => authUmleitung(
      ort: state.matchedLocation,
      angemeldet: ref.read(currentSessionProvider) != null,
      wiederherstellung: weiche.aktiv,
    ),
    routes: [
      GoRoute(
        path: AppRoutes.signIn,
        builder: (context, state) => const SignInScreen(),
      ),
      GoRoute(
        path: AppRoutes.register,
        builder: (context, state) => const RegisterScreen(),
      ),
      GoRoute(
        path: AppRoutes.forgotPassword,
        builder: (context, state) => const ForgotPasswordScreen(),
      ),
      GoRoute(
        path: AppRoutes.home,
        builder: (context, state) => start(),
      ),
      GoRoute(
        path: AppRoutes.mfaEnroll,
        builder: (context, state) => const MfaEnrollScreen(),
      ),
      GoRoute(
        path: AppRoutes.newPassword,
        builder: (context, state) => const NewPasswordScreen(),
      ),
      GoRoute(
        path: AppRoutes.security,
        builder: (context, state) => const SecurityScreen(),
      ),
      GoRoute(
        path: AppRoutes.imprint,
        builder: (context, state) => const ImprintScreen(),
      ),
      GoRoute(
        path: AppRoutes.privacy,
        builder: (context, state) => const PrivacyScreen(),
      ),
      GoRoute(
        path: AppRoutes.terms,
        builder: (context, state) => const TermsScreen(),
      ),
      GoRoute(
        path: AppRoutes.cancellation,
        builder: (context, state) => const CancellationScreen(),
      ),
      ...zusatz,
    ],
  );
}

/// Bindeglied: laesst go_router bei jeder Auth-Aenderung neu auswerten.
///
/// Die Wiederherstellung selbst haengt nicht mehr hier, sondern in
/// [Wiederherstellungsweiche] -- ein Ereignis allein ist zu wenig, wenn das
/// Einloesen des Links scheitern kann.
class _AuthAenderungen extends ChangeNotifier {
  _AuthAenderungen(Ref ref) {
    ref.listen(authStateChangesProvider, (_, __) => notifyListeners());
  }
}

/// Die Weichenregel als reine Funktion — damit sie ohne laufende App prüfbar
/// ist und nicht erst im Browser auffällt, wenn sie falsch steht.
///
/// Gibt das Ziel zurück, auf das umgeleitet werden soll, oder `null`, wenn der
/// Aufruf bleiben darf.
@visibleForTesting
String? authUmleitung({
  required String ort,
  required bool angemeldet,
  required bool wiederherstellung,
}) {
  // Aus der Wiederherstellungs-E-Mail gekommen: erst das Passwort, dann alles
  // andere. Ausgenommen sind die Auth-Routen selbst — sonst säße jemand,
  // dessen Link verbraucht ist, auf der Maske fest und käme nicht einmal an
  // „Passwort vergessen".
  if (wiederherstellung &&
      ort != AppRoutes.newPassword &&
      !_authRoutes.contains(ort)) {
    return AppRoutes.newPassword;
  }

  if (_openRoutes.contains(ort)) return null;
  if (!angemeldet) {
    return _authRoutes.contains(ort) ? null : AppRoutes.signIn;
  }
  if (_authRoutes.contains(ort)) {
    // Während einer Wiederherstellung ist der Rückweg zu „Passwort vergessen"
    // gewollt: der Link kann verbraucht sein, und mit einer Sitzung ohne
    // brauchbares Passwort ist niemandem geholfen.
    return wiederherstellung ? null : AppRoutes.home;
  }
  return null;
}
