import 'dart:async';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../features/approvals/presentation/screens/approvals_screen.dart';
import '../../features/auth/presentation/screens/forgot_password_screen.dart';
import '../../features/management/presentation/screens/my_signature_tasks_screen.dart';
import '../../features/auth/presentation/screens/mfa_enroll_screen.dart';
import '../../features/auth/presentation/screens/register_screen.dart';
import '../../features/auth/presentation/screens/sign_in_screen.dart';
import '../../features/home/presentation/home_shell.dart';
import '../../features/legal/presentation/cancellation_screen.dart';
import '../../features/legal/presentation/legal_overview_screen.dart';
import '../../features/legal/presentation/legal_screens.dart';
import '../../features/customer/data/referral_code_inbox.dart';
import '../di/providers.dart';

/// Routenpfade als Konstanten (vermeidet Tippfehler/Magic-Strings).
abstract final class AppRoutes {
  static const signIn = '/signin';
  static const register = '/register';
  static const forgotPassword = '/forgot-password';
  static const home = '/';
  static const mfaEnroll = '/security/mfa';
  static const approvals = '/finance/approvals';
  static const mySignatureTasks = '/management/my-signatures';
  static const legalOverview = '/legal';
  static const imprint = '/legal/imprint';
  static const privacy = '/legal/privacy';
  static const terms = '/legal/terms';
  static const cancellation = '/legal/kuendigung';
  static const withdrawal = '/legal/widerruf';
  static const paymentInfo = '/legal/zahlung';
  static const cookies = '/legal/cookies';
  static const accessibility = '/legal/barrierefreiheit';

  /// Empfehlungslink: /r/<CODE>. Merkt den Code lokal vor und schickt
  /// zur Registrierung — eingelöst wird er nach dem ersten Login.
  static const referral = '/r/:code';
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
///
/// Korrektur (09.08.2026): Vier dieser Seiten standen hier NICHT drin —
/// Widerruf, Zahlungsangaben, Cookies und Barrierefreiheit. Der Kommentar
/// weiter unten bei ihren `GoRoute`-Einträgen behauptete das Gegenteil
/// („ausserhalb des Anmeldezwangs erreichbar"), tatsächlich schickte der
/// Guard nicht angemeldete Besucher auf `/signin`. Genau der Fall, vor
/// dem die Regel „Behauptungen vorher prüfen" steht: Die Absicht stand im
/// Kommentar, umgesetzt war sie nie.
const _openRoutes = {
  AppRoutes.legalOverview,
  AppRoutes.imprint,
  AppRoutes.privacy,
  AppRoutes.terms,
  AppRoutes.cancellation,
  AppRoutes.withdrawal,
  AppRoutes.paymentInfo,
  AppRoutes.cookies,
  AppRoutes.accessibility,
};

/// go_router mit Auth-Guard: nicht angemeldete Nutzer landen auf /signin.
final routerProvider = Provider<GoRouter>((ref) {
  return GoRouter(
    initialLocation: AppRoutes.home,
    refreshListenable: _AuthRefresh(ref),
    redirect: (context, state) {
      final session = ref.read(currentSessionProvider);
      final loggedIn = session != null;
      final loc = state.matchedLocation;

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
        path: AppRoutes.referral,
        redirect: (context, state) {
          final code = state.pathParameters['code'];
          if (code != null && code.trim().isNotEmpty) {
            // Fire-and-forget: das Vormerken darf die Navigation nicht
            // aufhalten, und ein Fehlschlag kostet nur den Bonus.
            unawaited(ReferralCodeInbox.remember(code));
          }
          return AppRoutes.register;
        },
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
        path: AppRoutes.approvals,
        builder: (context, state) => const ApprovalsScreen(),
      ),
      GoRoute(
        path: AppRoutes.mySignatureTasks,
        builder: (context, state) => const MySignatureTasksScreen(),
      ),
      GoRoute(
        path: AppRoutes.legalOverview,
        builder: (context, state) => const LegalOverviewScreen(),
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
      // Die vier folgenden Seiten sind wie Impressum und Datenschutz
      // ausserhalb des Anmeldezwangs erreichbar: Widerruf, Zahlungsangaben,
      // Tracking-Hinweise und Barrierefreiheit muss man lesen können, BEVOR
      // man ein Konto anlegt. Das Registrieren allein macht sie noch nicht
      // öffentlich — dafür müssen sie in `_openRoutes` stehen, siehe dort.
      GoRoute(
        path: AppRoutes.withdrawal,
        builder: (context, state) => const WithdrawalScreen(),
      ),
      GoRoute(
        path: AppRoutes.paymentInfo,
        builder: (context, state) => const PaymentInfoScreen(),
      ),
      GoRoute(
        path: AppRoutes.cookies,
        builder: (context, state) => const CookiesScreen(),
      ),
      GoRoute(
        path: AppRoutes.accessibility,
        builder: (context, state) => const AccessibilityScreen(),
      ),
    ],
  );
});

/// Bindeglied: lässt go_router bei Auth-Änderungen neu evaluieren.
class _AuthRefresh extends ChangeNotifier {
  _AuthRefresh(Ref ref) {
    ref.listen(authStateChangesProvider, (_, __) => notifyListeners());
  }
}
