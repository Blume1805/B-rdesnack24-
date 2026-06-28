import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../features/auth/presentation/screens/sign_in_screen.dart';
import '../../features/home/presentation/home_shell.dart';
import '../di/providers.dart';

/// Routenpfade als Konstanten (vermeidet Tippfehler/Magic-Strings).
abstract final class AppRoutes {
  static const signIn = '/signin';
  static const home = '/';
}

/// go_router mit Auth-Guard: nicht angemeldete Nutzer landen auf /signin.
final routerProvider = Provider<GoRouter>((ref) {
  return GoRouter(
    initialLocation: AppRoutes.home,
    refreshListenable: _AuthRefresh(ref),
    redirect: (context, state) {
      final session = ref.read(currentSessionProvider);
      final loggedIn = session != null;
      final goingToSignIn = state.matchedLocation == AppRoutes.signIn;

      if (!loggedIn) return goingToSignIn ? null : AppRoutes.signIn;
      if (goingToSignIn) return AppRoutes.home;
      return null;
    },
    routes: [
      GoRoute(
        path: AppRoutes.signIn,
        builder: (context, state) => const SignInScreen(),
      ),
      GoRoute(
        path: AppRoutes.home,
        builder: (context, state) => const HomeShell(),
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
