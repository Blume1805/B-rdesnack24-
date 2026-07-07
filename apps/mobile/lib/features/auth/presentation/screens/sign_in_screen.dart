import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../../core/router/app_router.dart';
import '../../../../core/utils/validators.dart';
import '../../../../l10n/generated/app_localizations.dart';
import '../controllers/auth_providers.dart';

class SignInScreen extends ConsumerStatefulWidget {
  const SignInScreen({super.key});

  @override
  ConsumerState<SignInScreen> createState() => _SignInScreenState();
}

class _SignInScreenState extends ConsumerState<SignInScreen> {
  final _formKey = GlobalKey<FormState>();
  final _emailCtrl = TextEditingController();
  final _passwordCtrl = TextEditingController();

  @override
  void dispose() {
    _emailCtrl.dispose();
    _passwordCtrl.dispose();
    super.dispose();
  }

  void _fillDemo(String email, String password) {
    _emailCtrl.text = email;
    _passwordCtrl.text = password;
    _submit();
  }

  Future<void> _submit() async {
    if (!(_formKey.currentState?.validate() ?? false)) return;
    final ok = await ref
        .read(authControllerProvider.notifier)
        .signIn(_emailCtrl.text, _passwordCtrl.text);
    if (!ok && mounted) {
      final l10n = AppLocalizations.of(context);
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text(l10n.errorInvalidCredentials)),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    final l10n = AppLocalizations.of(context);
    final state = ref.watch(authControllerProvider);
    final isLoading = state.isLoading;

    return Scaffold(
      body: Center(
        child: ConstrainedBox(
          constraints: const BoxConstraints(maxWidth: 420),
          child: SingleChildScrollView(
            padding: const EdgeInsets.all(24),
            child: Form(
              key: _formKey,
              child: Column(
                mainAxisSize: MainAxisSize.min,
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  Text(
                    l10n.appTitle,
                    style: Theme.of(context).textTheme.headlineMedium,
                    textAlign: TextAlign.center,
                  ),
                  const SizedBox(height: 8),
                  Text(
                    l10n.signInTitle,
                    style: Theme.of(context).textTheme.titleMedium,
                    textAlign: TextAlign.center,
                  ),
                  const SizedBox(height: 32),
                  TextFormField(
                    controller: _emailCtrl,
                    keyboardType: TextInputType.emailAddress,
                    autofillHints: const [AutofillHints.email],
                    decoration: InputDecoration(labelText: l10n.email),
                    validator: (v) => switch (Validators.email(v)) {
                      'required' => l10n.fieldRequired,
                      'invalid' => l10n.emailInvalid,
                      _ => null,
                    },
                  ),
                  const SizedBox(height: 16),
                  TextFormField(
                    controller: _passwordCtrl,
                    obscureText: true,
                    autofillHints: const [AutofillHints.password],
                    decoration: InputDecoration(labelText: l10n.password),
                    onFieldSubmitted: (_) => _submit(),
                    validator: (v) => switch (Validators.password(v)) {
                      'required' => l10n.fieldRequired,
                      'tooShort' => l10n.passwordTooShort,
                      _ => null,
                    },
                  ),
                  const SizedBox(height: 24),
                  FilledButton(
                    onPressed: isLoading ? null : _submit,
                    child: isLoading
                        ? const SizedBox(
                            height: 20,
                            width: 20,
                            child: CircularProgressIndicator(strokeWidth: 2),
                          )
                        : Text(l10n.signIn),
                  ),
                  const SizedBox(height: 8),
                  TextButton(
                    onPressed: isLoading
                        ? null
                        : () => context.go(AppRoutes.forgotPassword),
                    child: Text(l10n.forgotPassword),
                  ),
                  TextButton(
                    onPressed: isLoading
                        ? null
                        : () => context.go(AppRoutes.register),
                    child: Text(l10n.register),
                  ),
                  const SizedBox(height: 8),
                  // Rechtsseiten öffentlich zugänglich (§ 5 DDG, Art. 12 DSGVO).
                  Wrap(
                    alignment: WrapAlignment.center,
                    spacing: 4,
                    children: [
                      TextButton(
                        onPressed: () => context.push(AppRoutes.imprint),
                        child: const Text('Impressum'),
                      ),
                      const Text('·'),
                      TextButton(
                        onPressed: () => context.push(AppRoutes.privacy),
                        child: const Text('Datenschutz'),
                      ),
                      const Text('·'),
                      TextButton(
                        onPressed: () => context.push(AppRoutes.terms),
                        child: const Text('AGB'),
                      ),
                    ],
                  ),
                  const Divider(height: 32),
                  Text(
                    'Demo-Zugänge',
                    style: Theme.of(context).textTheme.labelMedium,
                    textAlign: TextAlign.center,
                  ),
                  const SizedBox(height: 4),
                  Wrap(
                    spacing: 8,
                    alignment: WrapAlignment.center,
                    children: [
                      OutlinedButton(
                        onPressed: isLoading
                            ? null
                            : () => _fillDemo(
                                  'demo-admin@boerdesnack24.app',
                                  'Demo!Boerde24',
                                ),
                        child: const Text('Admin'),
                      ),
                      OutlinedButton(
                        onPressed: isLoading
                            ? null
                            : () => _fillDemo(
                                  'demo-gs@boerdesnack24.app',
                                  'Demo!Boerde24',
                                ),
                        child: const Text('Gesellschafter'),
                      ),
                      OutlinedButton(
                        onPressed: isLoading
                            ? null
                            : () => _fillDemo(
                                  'demo-kunde@boerdesnack24.app',
                                  'Demo!Boerde24',
                                ),
                        child: const Text('Kunde'),
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}
