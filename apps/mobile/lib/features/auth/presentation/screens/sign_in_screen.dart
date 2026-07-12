import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../../core/router/app_router.dart';
import '../../../../core/theme/app_tokens.dart';
import '../../../../core/theme/app_typography.dart';
import '../../../../core/utils/validators.dart';
import '../../../../core/widgets/design_system/design_system.dart';
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
  bool _obscure = true;

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
      backgroundColor: AppColors.ink,
      body: SafeArea(
        top: false,
        child: LayoutBuilder(
          builder: (context, constraints) {
            return SingleChildScrollView(
              child: ConstrainedBox(
                constraints: BoxConstraints(minHeight: constraints.maxHeight),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    const HeroBackdrop(
                      tagline: 'Immer da, wenn der Hunger kommt.',
                      showTaglineOverlay: true,
                    ),
                    _FormPanel(
                      formKey: _formKey,
                      emailCtrl: _emailCtrl,
                      passwordCtrl: _passwordCtrl,
                      obscure: _obscure,
                      onToggleObscure: () => setState(() => _obscure = !_obscure),
                      isLoading: isLoading,
                      onSubmit: _submit,
                      onFillDemo: _fillDemo,
                      l10n: l10n,
                    ),
                  ],
                ),
              ),
            );
          },
        ),
      ),
    );
  }
}

class _FormPanel extends StatelessWidget {
  const _FormPanel({
    required this.formKey,
    required this.emailCtrl,
    required this.passwordCtrl,
    required this.obscure,
    required this.onToggleObscure,
    required this.isLoading,
    required this.onSubmit,
    required this.onFillDemo,
    required this.l10n,
  });

  final GlobalKey<FormState> formKey;
  final TextEditingController emailCtrl;
  final TextEditingController passwordCtrl;
  final bool obscure;
  final VoidCallback onToggleObscure;
  final bool isLoading;
  final VoidCallback onSubmit;
  final void Function(String email, String password) onFillDemo;
  final AppLocalizations l10n;

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: const BoxDecoration(
        color: AppColors.surfaceCard,
        borderRadius: BorderRadius.only(
          topLeft: Radius.circular(28),
          topRight: Radius.circular(28),
        ),
      ),
      padding: const EdgeInsets.fromLTRB(
        AppSpacing.s6,
        AppSpacing.s8,
        AppSpacing.s6,
        AppSpacing.s6,
      ),
      child: Center(
        child: ConstrainedBox(
          constraints: const BoxConstraints(maxWidth: 460),
          child: Form(
            key: formKey,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                const Eyebrow('Willkommen zurück'),
                const SizedBox(height: AppSpacing.s2),
                Text(
                  l10n.signInTitle,
                  style: AppTypography.display(size: 28, weight: FontWeight.w800),
                ),
                const SizedBox(height: AppSpacing.s2),
                Text(
                  'Melde dich mit deinem Konto an oder wähle einen Demo-Zugang.',
                  style: AppTypography.body(size: 14, color: AppColors.textMuted),
                ),
                const SizedBox(height: AppSpacing.s6),
                TextFormField(
                  controller: emailCtrl,
                  keyboardType: TextInputType.emailAddress,
                  autofillHints: const [AutofillHints.email],
                  decoration: InputDecoration(
                    labelText: l10n.email,
                    prefixIcon: const Icon(Icons.mail_outline, size: 20),
                  ),
                  validator: (v) => switch (Validators.email(v)) {
                    'required' => l10n.fieldRequired,
                    'invalid' => l10n.emailInvalid,
                    _ => null,
                  },
                ),
                const SizedBox(height: AppSpacing.s4),
                TextFormField(
                  controller: passwordCtrl,
                  obscureText: obscure,
                  autofillHints: const [AutofillHints.password],
                  decoration: InputDecoration(
                    labelText: l10n.password,
                    prefixIcon: const Icon(Icons.lock_outline, size: 20),
                    suffixIcon: IconButton(
                      onPressed: onToggleObscure,
                      icon: Icon(
                        obscure ? Icons.visibility_outlined : Icons.visibility_off_outlined,
                        size: 20,
                      ),
                    ),
                  ),
                  onFieldSubmitted: (_) => onSubmit(),
                  validator: (v) => switch (Validators.password(v)) {
                    'required' => l10n.fieldRequired,
                    'tooShort' => l10n.passwordTooShort,
                    _ => null,
                  },
                ),
                const SizedBox(height: AppSpacing.s5),
                FilledButton(
                  onPressed: isLoading ? null : onSubmit,
                  child: isLoading
                      ? const SizedBox(
                          height: 20,
                          width: 20,
                          child: CircularProgressIndicator(
                            strokeWidth: 2,
                            color: AppColors.ink,
                          ),
                        )
                      : Text(l10n.signIn),
                ),
                const SizedBox(height: AppSpacing.s3),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
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
                  ],
                ),
                const SizedBox(height: AppSpacing.s5),
                Row(
                  children: [
                    const Expanded(child: Divider(color: AppColors.borderSubtle)),
                    Padding(
                      padding: const EdgeInsets.symmetric(horizontal: AppSpacing.s3),
                      child: Text(
                        'Demo-Zugänge',
                        style: AppTypography.body(
                          size: 12,
                          weight: FontWeight.w600,
                          color: AppColors.textMuted,
                        ),
                      ),
                    ),
                    const Expanded(child: Divider(color: AppColors.borderSubtle)),
                  ],
                ),
                const SizedBox(height: AppSpacing.s3),
                Row(
                  children: [
                    Expanded(
                      child: _DemoChip(
                        icon: Icons.admin_panel_settings_outlined,
                        label: 'Admin',
                        onTap: isLoading
                            ? null
                            : () => onFillDemo(
                                  'demo-admin@boerdesnack24.app',
                                  'Demo!Boerde24',
                                ),
                      ),
                    ),
                    const SizedBox(width: AppSpacing.s2),
                    Expanded(
                      child: _DemoChip(
                        icon: Icons.badge_outlined,
                        label: 'Mitarbeiter',
                        onTap: isLoading
                            ? null
                            : () => onFillDemo(
                                  'demo-gs@boerdesnack24.app',
                                  'Demo!Boerde24',
                                ),
                      ),
                    ),
                    const SizedBox(width: AppSpacing.s2),
                    Expanded(
                      child: _DemoChip(
                        icon: Icons.storefront_outlined,
                        label: 'Kunde',
                        onTap: isLoading
                            ? null
                            : () => onFillDemo(
                                  'demo-kunde@boerdesnack24.app',
                                  'Demo!Boerde24',
                                ),
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: AppSpacing.s6),
                Wrap(
                  alignment: WrapAlignment.center,
                  crossAxisAlignment: WrapCrossAlignment.center,
                  spacing: 4,
                  children: [
                    TextButton(
                      onPressed: () => context.push(AppRoutes.imprint),
                      child: Text(
                        'Impressum',
                        style: AppTypography.body(
                          size: 12,
                          weight: FontWeight.w600,
                          color: AppColors.textMuted,
                        ),
                      ),
                    ),
                    Text('·', style: AppTypography.body(size: 12, color: AppColors.textMuted)),
                    TextButton(
                      onPressed: () => context.push(AppRoutes.privacy),
                      child: Text(
                        'Datenschutz',
                        style: AppTypography.body(
                          size: 12,
                          weight: FontWeight.w600,
                          color: AppColors.textMuted,
                        ),
                      ),
                    ),
                    Text('·', style: AppTypography.body(size: 12, color: AppColors.textMuted)),
                    TextButton(
                      onPressed: () => context.push(AppRoutes.terms),
                      child: Text(
                        'AGB',
                        style: AppTypography.body(
                          size: 12,
                          weight: FontWeight.w600,
                          color: AppColors.textMuted,
                        ),
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class _DemoChip extends StatelessWidget {
  const _DemoChip({required this.icon, required this.label, this.onTap});

  final IconData icon;
  final String label;
  final VoidCallback? onTap;

  @override
  Widget build(BuildContext context) {
    return AppCard(
      onTap: onTap,
      padding: const EdgeInsets.symmetric(
        horizontal: AppSpacing.s2,
        vertical: AppSpacing.s3,
      ),
      color: AppColors.surfaceAlt,
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Icon(icon, size: 20, color: AppColors.brand),
          const SizedBox(height: 4),
          Text(
            label,
            style: AppTypography.body(
              size: 12,
              weight: FontWeight.w700,
              color: AppColors.ink,
            ),
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
          ),
        ],
      ),
    );
  }
}
