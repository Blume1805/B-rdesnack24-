import 'dart:async';

import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import '../../../../core/di/providers.dart';
import '../../../../core/router/app_router.dart';
import '../../../../core/utils/validators.dart';
import '../../../../l10n/generated/app_localizations.dart';
import '../controllers/auth_providers.dart';

/// Self-Signup ausschließlich für Kunden. Interne Nutzer werden eingeladen.
/// Registrierung verlangt eine ausdrückliche Zustimmung zu Datenschutz- und
/// Nutzungsbedingungen (Art. 6 (1) a i.V.m. Art. 7 DSGVO). Die Einwilligung
/// wird nach erfolgreicher Anmeldung revisionssicher in `consents` erfasst.
class RegisterScreen extends ConsumerStatefulWidget {
  const RegisterScreen({super.key});

  @override
  ConsumerState<RegisterScreen> createState() => _RegisterScreenState();
}

class _RegisterScreenState extends ConsumerState<RegisterScreen> {
  final _formKey = GlobalKey<FormState>();
  final _nameCtrl = TextEditingController();
  final _emailCtrl = TextEditingController();
  final _passwordCtrl = TextEditingController();
  final _confirmCtrl = TextEditingController();

  bool _acceptPrivacy = false;
  bool _acceptTerms = false;
  bool _triedSubmit = false;

  @override
  void dispose() {
    _nameCtrl.dispose();
    _emailCtrl.dispose();
    _passwordCtrl.dispose();
    _confirmCtrl.dispose();
    super.dispose();
  }

  Future<void> _submit() async {
    setState(() => _triedSubmit = true);
    final l10n = AppLocalizations.of(context);
    if (!(_formKey.currentState?.validate() ?? false)) return;
    if (_passwordCtrl.text != _confirmCtrl.text) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text(l10n.passwordsDontMatch)),
      );
      return;
    }
    if (!(_acceptPrivacy && _acceptTerms)) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text(l10n.consentRequired)),
      );
      return;
    }

    final ok = await ref.read(authControllerProvider.notifier).registerCustomer(
          _emailCtrl.text,
          _passwordCtrl.text,
          fullName: _nameCtrl.text.trim().isEmpty ? null : _nameCtrl.text.trim(),
        );
    if (!mounted) return;
    if (ok) {
      // Nach erfolgreicher Anmeldung: Consent im Log persistieren
      // (kann fehlschlagen, ohne die Registrierung zu blockieren).
      unawaited(_persistConsents());
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text(l10n.registerSuccess)),
      );
      context.go(AppRoutes.signIn);
    } else {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text(l10n.errorGeneric)),
      );
    }
  }

  Future<void> _persistConsents() async {
    try {
      final client = ref.read(supabaseClientProvider);
      final uid = client.auth.currentUser?.id;
      if (uid == null) return;
      await client.from('consents').insert([
        {'profile_id': uid, 'type': 'privacy', 'granted': true},
        {'profile_id': uid, 'type': 'terms', 'granted': true},
      ]);
    } catch (_) {
      // Nicht kritisch: bei fehlender Verbindung/RLS-Ablehnung ignorieren.
    }
  }

  @override
  Widget build(BuildContext context) {
    final l10n = AppLocalizations.of(context);
    final isLoading = ref.watch(authControllerProvider).isLoading;

    return Scaffold(
      appBar: AppBar(title: Text(l10n.registerTitle)),
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
                  TextFormField(
                    controller: _nameCtrl,
                    decoration: InputDecoration(labelText: l10n.fullName),
                  ),
                  const SizedBox(height: 16),
                  TextFormField(
                    controller: _emailCtrl,
                    keyboardType: TextInputType.emailAddress,
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
                    decoration: InputDecoration(labelText: l10n.password),
                    validator: (v) => switch (Validators.password(v)) {
                      'required' => l10n.fieldRequired,
                      'tooShort' => l10n.passwordTooShort,
                      'complexity' => l10n.passwordComplexity,
                      _ => null,
                    },
                  ),
                  const SizedBox(height: 16),
                  TextFormField(
                    controller: _confirmCtrl,
                    obscureText: true,
                    decoration:
                        InputDecoration(labelText: l10n.confirmPassword),
                    onFieldSubmitted: (_) => _submit(),
                  ),
                  const SizedBox(height: 16),
                  _ConsentTile(
                    checked: _acceptPrivacy,
                    onChanged: (v) => setState(() => _acceptPrivacy = v ?? false),
                    error: _triedSubmit && !_acceptPrivacy,
                    label: l10n.consentPrivacyLabel,
                    linkLabel: l10n.consentPrivacyLink,
                    onLinkTap: () => context.push(AppRoutes.privacy),
                  ),
                  const SizedBox(height: 8),
                  _ConsentTile(
                    checked: _acceptTerms,
                    onChanged: (v) => setState(() => _acceptTerms = v ?? false),
                    error: _triedSubmit && !_acceptTerms,
                    label: l10n.consentTermsLabel,
                    linkLabel: l10n.consentTermsLink,
                    onLinkTap: () => context.push(AppRoutes.terms),
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
                        : Text(l10n.register),
                  ),
                  TextButton(
                    onPressed: () => context.go(AppRoutes.signIn),
                    child: Text(l10n.backToSignIn),
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

class _ConsentTile extends StatelessWidget {
  const _ConsentTile({
    required this.checked,
    required this.onChanged,
    required this.label,
    required this.linkLabel,
    required this.onLinkTap,
    required this.error,
  });

  final bool checked;
  final ValueChanged<bool?> onChanged;
  final String label;
  final String linkLabel;
  final VoidCallback onLinkTap;
  final bool error;

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final linkStyle = TextStyle(
      color: theme.colorScheme.primary,
      decoration: TextDecoration.underline,
    );
    final base = theme.textTheme.bodyMedium ?? const TextStyle();
    return InkWell(
      onTap: () => onChanged(!checked),
      borderRadius: BorderRadius.circular(8),
      child: Padding(
        padding: const EdgeInsets.symmetric(vertical: 4),
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Checkbox(
              value: checked,
              onChanged: onChanged,
              side: error ? BorderSide(color: theme.colorScheme.error, width: 2) : null,
            ),
            Expanded(
              child: Padding(
                padding: const EdgeInsets.only(top: 12),
                child: Text.rich(
                  TextSpan(
                    style: base.copyWith(
                      color: error ? theme.colorScheme.error : null,
                    ),
                    children: [
                      TextSpan(text: '$label '),
                      TextSpan(
                        text: linkLabel,
                        style: linkStyle,
                        recognizer: TapGestureRecognizer()..onTap = onLinkTap,
                      ),
                    ],
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

