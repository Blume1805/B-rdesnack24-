import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../../core/router/app_router.dart';
import '../../../../core/utils/validators.dart';
import '../../../../l10n/generated/app_localizations.dart';
import '../controllers/auth_providers.dart';
import '../../../../core/widgets/design_system/design_system.dart';

class ForgotPasswordScreen extends ConsumerStatefulWidget {
  const ForgotPasswordScreen({super.key});

  @override
  ConsumerState<ForgotPasswordScreen> createState() =>
      _ForgotPasswordScreenState();
}

class _ForgotPasswordScreenState extends ConsumerState<ForgotPasswordScreen> {
  final _formKey = GlobalKey<FormState>();
  final _emailCtrl = TextEditingController();
  bool _busy = false;

  @override
  void dispose() {
    _emailCtrl.dispose();
    super.dispose();
  }

  Future<void> _submit() async {
    final l10n = AppLocalizations.of(context);
    if (!(_formKey.currentState?.validate() ?? false)) return;
    setState(() => _busy = true);

    // `try` OHNE `catch` stand hier bis zum 04.08.2026. Schlug der Aufruf
    // fehl, lief zwar `finally` (Spinner aus), aber die Ausnahme flog
    // weiter — Bestätigung und Weiterleitung darunter wurden übersprungen.
    // Für die Nutzerin sah das aus, als täte der Knopf nichts.
    //
    // Aufgefallen ist es, als der Send-Email-Hook auf einen Platzhalter
    // zeigte: Supabase antwortete mit 422, später mit 429, und am
    // Bildschirm passierte sichtbar gar nichts. Ein stiller Fehler kostet
    // mehr Zeit als eine hässliche Meldung.
    var geklappt = true;
    try {
      await ref
          .read(authRepositoryProvider)
          .sendPasswordReset(_emailCtrl.text.trim());
    } catch (_) {
      geklappt = false;
    } finally {
      if (mounted) setState(() => _busy = false);
    }
    if (!mounted) return;

    if (!geklappt) {
      // Bewusst ohne Einzelheiten: Ob die Adresse existiert, geht niemanden
      // etwas an. Dass etwas schiefging, dagegen schon. Kein `context.go`,
      // damit die Eingabe stehen bleibt und ein zweiter Versuch möglich ist.
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text(l10n.errorGeneric)),
      );
      return;
    }

    // Aus Datenschutzgründen immer dieselbe neutrale Bestätigung anzeigen.
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text(l10n.resetSent)),
    );
    context.go(AppRoutes.signIn);
  }

  @override
  Widget build(BuildContext context) {
    final l10n = AppLocalizations.of(context);
    return Scaffold(
      appBar: HeroAppBar(title: Text(l10n.resetTitle)),
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
                    controller: _emailCtrl,
                    keyboardType: TextInputType.emailAddress,
                    decoration: InputDecoration(labelText: l10n.email),
                    onFieldSubmitted: (_) => _submit(),
                    validator: (v) => switch (Validators.email(v)) {
                      'required' => l10n.fieldRequired,
                      'invalid' => l10n.emailInvalid,
                      _ => null,
                    },
                  ),
                  const SizedBox(height: 24),
                  FilledButton(
                    onPressed: _busy ? null : _submit,
                    child: _busy
                        ? const SizedBox(
                            height: 20,
                            width: 20,
                            child: CircularProgressIndicator(strokeWidth: 2),
                          )
                        : Text(l10n.sendResetLink),
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
