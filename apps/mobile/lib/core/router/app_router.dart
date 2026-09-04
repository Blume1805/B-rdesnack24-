import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import '../../features/approvals/presentation/screens/approvals_screen.dart';
import '../../features/auth/presentation/screens/forgot_password_screen.dart';
import '../../features/management/presentation/screens/my_signature_tasks_screen.dart';
import '../../features/auth/presentation/screens/mfa_enroll_screen.dart';
import '../../features/auth/presentation/screens/new_password_screen.dart';
import '../../features/auth/presentation/screens/register_screen.dart';
import '../../features/auth/presentation/screens/sign_in_screen.dart';
import '../../features/home/presentation/home_shell.dart';
import '../../features/legal/presentation/cancellation_screen.dart';
import '../../features/legal/presentation/legal_screens.dart';
import '../di/providers.dart';

/// Routenpfade als Konstanten (vermeidet Tippfehler/Magic-Strings).
abstract final class AppRoutes {
  static const signIn = '/signin';
  static const register = '/register';
  static const forgotPassword = '/forgot-password';
  static const newPassword = '/passwort-neu';
  static const home = '/';
  static const mfaEnroll = '/security/mfa';
  static const approvals = '/finance/approvals';
  static const mySignatureTasks = '/management/my-signatures';
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

/// go_router mit Auth-Guard: nicht angemeldete Nutzer landen auf /signin.
final routerProvider = Provider<GoRouter>((ref) {
  final auffrischung = _AuthRefresh(ref);
  return GoRouter(
    initialLocation: AppRoutes.home,
    refreshListenable: auffrischung,
    redirect: (context, state) {
      final session = ref.read(currentSessionProvider);
      final loggedIn = session != null;
      final loc = state.matchedLocation;

      // Aus der Wiederherstellungs-E-Mail gekommen: erst das Passwort, dann
      // alles andere. Ohne diese Zeile landet der Nutzer angemeldet auf der
      // Startseite und erfaehrt nie, dass er noch keines hat.
      if (auffrischung.wiederherstellung && loc != AppRoutes.newPassword) {
        return AppRoutes.newPassword;
      }

      if (_openRoutes.contains(loc)) return null;
      if (!loggedIn) {
        return _authRoutes.contains(loc) ? null : AppRoutes.signIn;
      }
      if (_authRoutes.contains(loc)) return AppRoutes.home;
      return null;
    },
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
        builder: (context, state) => const HomeShell(),
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
        path: AppRoutes.approvals,
        builder: (context, state) => const ApprovalsScreen(),
      ),
      GoRoute(
        path: AppRoutes.mySignatureTasks,
        builder: (context, state) => const MySignatureTasksScreen(),
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
    ],
  );
});

/// Bindeglied: lässt go_router bei Auth-Änderungen neu evaluieren und
/// erkennt den Rücksprung aus einer Wiederherstellungs-E-Mail.
class _AuthRefresh extends ChangeNotifier {
  _AuthRefresh(this._ref) {
    _ref.listen(authStateChangesProvider, (_, next) {
      final ereignis = next.valueOrNull?.event;
      // Supabase meldet passwordRecovery, sobald es die Sitzung aus dem
      // Link hergestellt hat. Das ist der einzige Moment, in dem feststeht,
      // dass jemand ein Passwort vergeben will und nicht bloss die App
      // oeffnet -- deshalb wird hier gemerkt und nicht am Sitzungszustand
      // festgemacht.
      if (ereignis == AuthChangeEvent.passwordRecovery) {
        wiederherstellung = true;
      }
      notifyListeners();
    });
  }

  final Ref _ref;

  /// Wahr zwischen dem Klick auf den Link und dem gesetzten Passwort.
  bool wiederherstellung = false;
}
