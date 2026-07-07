import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../features/approvals/presentation/screens/approvals_screen.dart';
import '../../features/auth/presentation/screens/forgot_password_screen.dart';
import '../../features/auth/presentation/screens/mfa_enroll_screen.dart';
import '../../features/auth/presentation/screens/register_screen.dart';
import '../../features/auth/presentation/screens/sign_in_screen.dart';
import '../../features/home/presentation/home_shell.dart';
import '../../features/legal/presentation/legal_screens.dart';
import '../di/providers.dart';

/// Routenpfade als Konstanten (vermeidet Tippfehler/Magic-Strings).
abstract final class AppRoutes {
  static const signIn = '/signin';
  static const register = '/register';
  static const forgotPassword = '/forgot-password';
  static const home = '/';
  static const mfaEnroll = '/security/mfa';
  static const approvals = '/finance/approvals';
  static const imprint = '/legal/imprint';
  static const privacy = '/legal/privacy';
  static const terms = '/legal/terms';
}

/// Öffentlich erreichbare Routen (ohne Anmeldung).
const _publicRoutes = {
  AppRoutes.signIn,
  AppRoutes.register,
  AppRoutes.forgotPassword,
  AppRoutes.imprint,
  AppRoutes.privacy,
  AppRoutes.terms,
};

/// go_router mit Auth-Guard: nicht angemeldete Nutzer landen auf /signin.
final routerProvider = Provider<GoRouter>((ref) {
  return GoRouter(
    initialLocation: AppRoutes.home,
    refreshListenable: _AuthRefresh(ref),
    redirect: (context, state) {
      final session = ref.read(currentSessionProvider);
      final loggedIn = session != null;
      final onPublicRoute = _publicRoutes.contains(state.matchedLocation);

      if (!loggedIn) return onPublicRoute ? null : AppRoutes.signIn;
      if (onPublicRoute) return AppRoutes.home;
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
        path: AppRoutes.approvals,
        builder: (context, state) => const ApprovalsScreen(),
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
    ],
  );
});

/// Bindeglied: lässt go_router bei Auth-Änderungen neu evaluieren.
class _AuthRefresh extends ChangeNotifier {
  _AuthRefresh(Ref ref) {
    ref.listen(authStateChangesProvider, (_, __) => notifyListeners());
  }
}
